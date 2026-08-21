import { CustomRasterTileLayer, HillshadeMethod, HillshadeRasterTileLayer, RasterTileLayer } from '@nativescript-community/ui-massifmaps/layers/raster';
import { LocalVectorDataSource } from '@nativescript-community/ui-massifmaps/datasources/vector';
import { VectorLayer, VectorTileLayer } from '@nativescript-community/ui-massifmaps/layers/vector';
import { MBVectorTileDecoder } from '@nativescript-community/ui-massifmaps/vectortiles';
import { Line, LineEndType, LineJointType, LineStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/line';
import { Marker, MarkerStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/marker';
import type { Layer } from '@nativescript-community/ui-massifmaps/layers';
import type { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
import { HYPSOMETRIC_RASTER_SHADER, SLOPES_RASTER_SHADER } from './shaders';
import { contourSource, demSource, rasterSource, vectorSource } from './sources';
import { contourTilesStyle, peaksStyle } from './styles';
import type { PeaksStyleOptions } from './styles';

/**
 * A layer the demo drawer can switch on and off, the way the native demo's panel does
 * (DemoMap.Feature). The layer itself is built lazily the first time it is shown and then
 * kept, so toggling it back on does not re-download anything.
 *
 * Draw order is the order of the array, NOT the order things were switched on: MapShell
 * re-adds every enabled layer in declaration order whenever one changes.
 */
export interface DemoLayerSpec {
    id: string;
    name: string;
    /** on when the demo opens */
    enabled?: boolean;
    /** short line under the name in the drawer */
    hint?: string;
    create(map: MassifMap): Layer<any, any>;
}

/** plain OSM raster - the native demo calls this slot 'satellite' */
export function satelliteLayer(spec: Partial<DemoLayerSpec> = {}): DemoLayerSpec {
    return {
        id: 'satellite',
        name: 'Satellite / raster',
        hint: 'RasterTileLayer, OSM raster tiles',
        enabled: false,
        create: () => new RasterTileLayer({ dataSource: rasterSource(), zoomLevelBias: 1 }),
        ...spec
    };
}

/** stand-alone HillshadeRasterTileLayer over the shared DEM (independent of the composite slot) */
export function hillshadeLayer(spec: Partial<DemoLayerSpec> = {}): DemoLayerSpec {
    return {
        id: 'hillshade',
        name: 'Hillshade',
        hint: 'HillshadeRasterTileLayer on the DEM',
        enabled: false,
        create: () =>
            new HillshadeRasterTileLayer({
                dataSource: demSource(),
                visibleZoomRange: [0, 24],
                contrast: 0.6,
                heightScale: 1,
                highlightColor: '#ffffff',
                shadowColor: '#2b2b40',
                accentColor: '#000000',
                illuminationDirection: [-1, 1, 0.5],
                hillshadeMethod: HillshadeMethod.COMBINED
            }),
        ...spec
    };
}

/**
 * CustomRasterTileLayer running a hypsometric-tint shader over the RAW DEM tiles.
 *
 * Same class the hillshade is built on, with the hillshading replaced: the shader reads
 * `getRawColor()` - the terrarium texel before any decoding - and colours it by height.
 * Shows that the custom-raster base class runs any filter shader over any raster source.
 */
export function hypsoLayer(spec: Partial<DemoLayerSpec> = {}): DemoLayerSpec {
    return {
        id: 'hypso',
        name: 'Hypsometric tint',
        hint: 'CustomRasterTileLayer, shader over the raw DEM',
        enabled: false,
        create: () => new CustomRasterTileLayer({ dataSource: demSource(), visibleZoomRange: [0, 24], shaderSource: HYPSOMETRIC_RASTER_SHADER }),
        ...spec
    };
}

/** the same class again, coloured by SLOPE instead - the ski-touring look */
export function slopesLayer(spec: Partial<DemoLayerSpec> = {}): DemoLayerSpec {
    return {
        id: 'slopes',
        name: 'Slope colouring',
        hint: 'HillshadeRasterTileLayer + normalMapLightingShader',
        enabled: false,
        create: () =>
            new HillshadeRasterTileLayer({
                dataSource: demSource(),
                visibleZoomRange: [0, 24],
                normalMapLightingShader: SLOPES_RASTER_SHADER,
                illuminationDirection: [-1, 1, 0.5]
            }),
        ...spec
    };
}

/** pre-baked contour vector tiles, styled like the real style's '#contour' rules */
export function contourLayer(spec: Partial<DemoLayerSpec> = {}): DemoLayerSpec {
    return {
        id: 'contours',
        name: 'Contour tiles',
        hint: 'pre-baked contour tiles (z11-14)',
        enabled: false,
        create: () =>
            new VectorTileLayer({
                dataSource: contourSource(),
                decoder: new MBVectorTileDecoder({ cartoCss: contourTilesStyle() })
            }),
        ...spec
    };
}

/**
 * Summit names as callout labels: its own vector tile layer on the base source, styled by
 * `peaksStyle()`. This is what the peak finder labels with - a Text vector element per
 * summit cannot do callout placement, leader lines or per-frame ranking.
 */
export function peaksLayer(styleOptions?: PeaksStyleOptions, spec: Partial<DemoLayerSpec> = {}): DemoLayerSpec {
    return {
        id: 'peaks',
        name: 'Peak labels',
        hint: 'mountain_peak, callout placement',
        enabled: false,
        create: () =>
            new VectorTileLayer({
                dataSource: vectorSource(),
                decoder: new MBVectorTileDecoder({ cartoCss: peaksStyle(styleOptions) }),
                preloading: true
            }),
        ...spec
    };
}

/**
 * Markers on summits and a line across the valley: the terrain occlusion / drape test set
 * of the native demo. A Marker is a BILLBOARD (it can be hidden behind a ridge), a Line is
 * DRAPED onto the surface - which is the whole point of having both here.
 */
export function elementsLayer(centre: { latitude: number; longitude: number }, spec: Partial<DemoLayerSpec> = {}): DemoLayerSpec {
    return {
        id: 'elements',
        name: 'Vector elements',
        hint: 'billboards + a draped line, on the terrain',
        enabled: false,
        create: (map: MassifMap) => {
            const projection = map.projection;
            const source = new LocalVectorDataSource({ projection });
            const at = (dLat: number, dLon: number) => ({ latitude: centre.latitude + dLat, longitude: centre.longitude + dLon });
            const style = new MarkerStyleBuilder({ size: 26, color: '#e6194b' });
            for (const offset of [
                [0.02, 0.02],
                [-0.015, 0.035],
                [0.03, -0.025]
            ]) {
                source.add(new Marker({ projection, position: at(offset[0], offset[1]), styleBuilder: style }));
            }
            source.add(
                new Line({
                    projection,
                    positions: [at(-0.03, -0.04), at(0, 0), at(0.03, 0.04)],
                    styleBuilder: new LineStyleBuilder({ width: 8, color: '#4363d8', joinType: LineJointType.ROUND, endType: LineEndType.ROUND })
                })
            );
            return new VectorLayer({ dataSource: source, visibleZoomRange: [0, 24] });
        },
        ...spec
    };
}

/**
 * The layer set every demo starts from, in the native demo's draw order (DemoMap.LAYER_ORDER):
 * base, satellite, hillshade, hypso, contours, elements, and the peak names last, over
 * everything the map draws. The base layer is NOT here - it comes from `createBaseMap()`,
 * which owns the mode/style choices as well.
 */
export function standardLayers(centre: { latitude: number; longitude: number }, overrides: Record<string, Partial<DemoLayerSpec>> = {}): DemoLayerSpec[] {
    return [
        satelliteLayer(overrides.satellite),
        hillshadeLayer(overrides.hillshade),
        slopesLayer(overrides.slopes),
        hypsoLayer(overrides.hypso),
        contourLayer(overrides.contours),
        elementsLayer(centre, overrides.elements),
        peaksLayer(undefined, overrides.peaks)
    ];
}
