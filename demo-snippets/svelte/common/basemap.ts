import { knownFolders, path } from '@nativescript/core';
import { MBVectorTileDecoder } from '@nativescript-community/ui-massifmaps/vectortiles';
import { VectorTileLayer, VectorTileRenderOrder } from '@nativescript-community/ui-massifmaps/layers/vector';
import { CompositeSourceType, CompositeVectorTileLayer } from '@nativescript-community/ui-massifmaps/layers/composite';
import { DirAssetPackage } from '@nativescript-community/ui-massifmaps/utils';
import { nativeVectorToArray } from '@nativescript-community/ui-massifmaps/utils';
import type { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
import type { DemoLayerSpec } from './layers';
import { baseStyle, poiTestStyle } from './styles';
import type { BaseStyleOptions, PoiStyleOptions } from './styles';
import { contourSource, demSource, rasterSource, vectorSource } from './sources';

/**
 * The BASE MAP section of the native demo's panel, shared by every snippet.
 *
 * Two independent choices, and both rebuild the base layer because both change what the
 * layer IS: the MODE decides the layer class (a plain VectorTileLayer, or a
 * CompositeVectorTileLayer that weaves other sources into the style's own layer order),
 * and the STYLE SOURCE decides where the decoder's style comes from. A style is compiled
 * once, when the decoder is built - there is no way to edit it in place.
 */

export type BaseMode = 'plain' | 'composite';

/**
 * Where the style of the base map comes from.
 *
 *  - `inline`  a CartoCSS string built in `styles.ts` - self-contained, no file needed,
 *              but no fonts either, so it can carry no labels a font would be needed for;
 *  - `assets`  the style PROJECT shipped in demo-snippets/assets/style, read through a
 *              DirAssetPackage. The smallest complete example of a style a composite layer
 *              can weave sources into, and the only one here with fonts and shields;
 *  - `zip`     the same project as the packaged osm.zip, through a ZippedAssetPackage;
 *  - `poi`     the shield test style: CartoCSS written here, FONTS from the asset package.
 */
export type StyleSourceName = 'inline' | 'assets' | 'zip' | 'poi';

/** the style projects that live in demo-snippets/assets/style (one <name>.json each) */
export const ASSET_STYLES = ['osm', 'outdoors', 'streets', 'eink', 'ign'] as const;

export interface BaseMapState {
    mode: BaseMode;
    styleSource: StyleSourceName;
    /** which project of the asset style folder, for `assets` / `zip` */
    styleName: string;
    slots: { hillshade: boolean; satellite: boolean; contour: boolean };
    /** +1 = fetch the DEM one zoom level deeper than the base map */
    hillshadeZoomBias: number;
    singlePass: boolean;
    /** what the last slot check found; shown in the drawer */
    slotStatus: string;
    /** which style/pack actually loaded - the fallbacks are silent otherwise */
    styleStatus: string;
    inline: BaseStyleOptions;
    poi: PoiStyleOptions;
}

export interface BaseMapController {
    state: BaseMapState;
    /** the layer entry to put in the demo's `layers`, in draw order */
    spec: DemoLayerSpec;
    /** MapShell calls this once it can rebuild layers */
    attach(rebuild: () => void): void;
    /** re-create the layer with the current state */
    rebuild(): void;
    /** add/remove the composite slots to match the state; no rebuild needed */
    syncSources(): void;
    /** called after every change, so a panel can re-render */
    onChange?: (state: BaseMapState) => void;
}

function appFile(name: string) {
    return path.join(knownFolders.currentApp().path, name);
}

/**
 * The decoder for the current style source, with the same silent fallback the native demo
 * has: on a build where the assets were not copied the demo must still start, so anything
 * that fails to open drops back to the inline CartoCSS.
 */
function createDecoder(state: BaseMapState) {
    const styleDir = appFile('style');
    try {
        switch (state.styleSource) {
            case 'assets':
                state.styleStatus = `asset project '${state.styleName}'`;
                return new MBVectorTileDecoder({ dirPath: styleDir, style: state.styleName });
            case 'zip':
                state.styleStatus = `osm.zip '${state.styleName}'`;
                return new MBVectorTileDecoder({ zipPath: appFile('osm.zip'), style: state.styleName });
            case 'poi':
                // the CartoCSS is written here, the FONTS come from the asset package: a shield
                // icon shaped from osm.ttf needs one, and a bare CartoCSS string carries none
                state.styleStatus = 'shield test style + asset fonts';
                return new MBVectorTileDecoder({ cartoCss: poiTestStyle(state.poi), pack: new DirAssetPackage({ dirPath: styleDir }) });
            default:
                break;
        }
    } catch (error) {
        console.warn(`style source '${state.styleSource}' not usable, falling back to inline: ${error}`);
    }
    state.styleStatus = 'inline CartoCSS';
    return new MBVectorTileDecoder({ cartoCss: baseStyle(state.inline) });
}

export function createBaseMap(initial: Partial<BaseMapState> = {}, spec: Partial<DemoLayerSpec> = {}): BaseMapController {
    const state: BaseMapState = {
        mode: 'composite',
        styleSource: 'inline',
        styleName: 'osm',
        hillshadeZoomBias: 0,
        singlePass: true,
        slotStatus: '',
        styleStatus: '',
        inline: {},
        poi: {},
        ...initial,
        // spread last so a caller can override one slot without dropping the other two
        slots: { hillshade: true, satellite: false, contour: true, ...(initial.slots ?? {}) }
    };

    let layer: VectorTileLayer | CompositeVectorTileLayer;
    let decoder: MBVectorTileDecoder;
    let rebuildLayers: () => void = () => {};

    const controller: BaseMapController = {
        state,
        spec: {
            id: 'base',
            name: 'Base map',
            hint: 'vector tiles + style',
            enabled: true,
            create: () => build(),
            ...spec
        },
        attach(rebuild) {
            rebuildLayers = rebuild;
        },
        rebuild() {
            rebuildLayers();
        },
        syncSources
    };

    function build() {
        decoder = createDecoder(state);
        if (state.mode === 'plain') {
            layer = new VectorTileLayer({ dataSource: vectorSource(), decoder, preloading: true, tileCacheCapacity: 64 * 1024 * 1024 });
            state.slotStatus = 'plain layer - no slots';
            controller.onChange?.(state);
            return layer;
        }
        const composite = new CompositeVectorTileLayer({ dataSource: vectorSource(), decoder, preloading: true, tileCacheCapacity: 64 * 1024 * 1024 });
        // the woven sources draw under the labels, which stay on top of everything
        composite.labelRenderOrder = VectorTileRenderOrder.LAST;
        composite.singlePassRenderingEnabled = state.singlePass;
        layer = composite;
        syncSources();
        return composite;
    }

    /**
     * Adds/removes the slots to match the state. Safe to call at any time - this is the one
     * part of the composite that does NOT need the layer rebuilt.
     */
    function syncSources() {
        const composite = layer as CompositeVectorTileLayer;
        if (!composite || !(composite instanceof CompositeVectorTileLayer)) {
            return;
        }
        // hillshade: the elevation decoder is resolved from the source's 'dem_encoding' meta data
        if (state.slots.hillshade) {
            composite.addExternalDataSource('hillshade', demSource(), CompositeSourceType.COMPOSITE_SOURCE_TYPE_HILLSHADE);
            composite.setExternalDataSourceZoomLevelBias('hillshade', state.hillshadeZoomBias);
        } else {
            composite.removeExternalDataSource('hillshade');
        }
        // satellite: a raster source drawn at the '#satellite' slot with the style's opacity
        if (state.slots.satellite) {
            composite.addExternalDataSource('satellite', rasterSource(), CompositeSourceType.COMPOSITE_SOURCE_TYPE_RASTER);
        } else {
            composite.removeExternalDataSource('satellite');
        }
        // contour: merged INTO the master tile, styled by the '#contour' rules
        if (state.slots.contour) {
            composite.addVectorDataSource('contour', contourSource());
        } else {
            composite.removeExternalDataSource('contour');
        }
        checkSlots(composite);
        controller.onChange?.(state);
    }

    /**
     * WHY A COMPOSITE SLOT SILENTLY DOES NOTHING - the check to run first.
     *
     * A slot is the position of a style layer with the source's name. If the style does not
     * DECLARE a layer called 'hillshade' / 'satellite' / 'contour', the source has nowhere
     * to be drawn and the SDK only warns in the log. The osm style, for instance, declares
     * 'contour' but neither 'hillshade' nor 'satellite'.
     */
    function checkSlots(composite: CompositeVectorTileLayer) {
        if (!composite.supported) {
            state.slotStatus = 'android only - iOS draws the plain base map';
            return;
        }
        const declared = nativeVectorToArray<string>(decoder.getStyleLayerNames());
        const registered = composite.getExternalDataSourceNames();
        state.slotStatus = registered.length ? registered.map((name) => `${name} ${declared.indexOf(name) >= 0 ? 'OK' : 'MISSING in style'}`).join(', ') : 'no slot attached';
    }

    return controller;
}
