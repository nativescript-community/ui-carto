import { Color } from '@nativescript/core';
import { colorConverter, mapPosVectorFromArgs, mapRangeConverter, mapVecConverter, massifImageConverter } from '..';
import { BaseNative } from '../BaseNative';
import { ACCESSORS as FOG_ACC, METHODS as FOG_MET, SELECTORS as FOG_SEL, Accessors as FogAcc } from '../bindings/components/FogOptions';
import { ACCESSORS as LIGHT_ACC, METHODS as LIGHT_MET, SELECTORS as LIGHT_SEL, Accessors as LightAcc } from '../bindings/components/LightOptions';
import { ACCESSORS as OPTIONS_ACC, METHODS as OPTIONS_MET, SELECTORS as OPTIONS_SEL, Accessors as OptionsAcc } from '../bindings/components/Options';
import { ACCESSORS as SKY_ACC, METHODS as SKY_MET, SELECTORS as SKY_SEL, Accessors as SkyAcc } from '../bindings/components/SkyOptions';
import { ACCESSORS as TERRAIN_ACC, METHODS as TERRAIN_MET, SELECTORS as TERRAIN_SEL, Accessors as TerrainAcc } from '../bindings/components/TerrainOptions';
import { MapPos, MapPosVector, toNativeMapPos } from '../core';
import { FogOptionsOptions, LightOptionsOptions, MapOptionsOptions, SkyOptionsOptions, TerrainOptionsOptions } from '.';
import { bindNative } from '../nativeclass.common';

/** TerrainOptions takes its DEM as a constructor argument (no setDataSource); the map already owns a Sky/Light/FogOptions. */

export const FreeRoamMode = {
    FREE_ROAM_MODE_OFF: MSFFreeRoamMode.F_FREE_ROAM_MODE_OFF,
    FREE_ROAM_MODE_LOOK: MSFFreeRoamMode.F_FREE_ROAM_MODE_LOOK,
    FREE_ROAM_MODE_FIRST_PERSON: MSFFreeRoamMode.F_FREE_ROAM_MODE_FIRST_PERSON
};

export const PanningSpeedMode = {
    PANNING_SPEED_MODE_MAP: MSFPanningSpeedMode.F_PANNING_SPEED_MODE_MAP,
    PANNING_SPEED_MODE_ANCHORED: MSFPanningSpeedMode.F_PANNING_SPEED_MODE_ANCHORED,
    PANNING_SPEED_MODE_CONSTANT: MSFPanningSpeedMode.F_PANNING_SPEED_MODE_CONSTANT
};

export class TerrainOptions extends BaseNative<MSFTerrainOptions, TerrainOptionsOptions> {
    createNative(options: TerrainOptionsOptions) {
        if (!options?.dataSource) {
            return null;
        }
        return options.elevationDecoder
            ? MSFTerrainOptions.alloc().initWithDataSourceElevationDecoder(options.dataSource.getNative(), options.elevationDecoder)
            : MSFTerrainOptions.alloc().initWithDataSource(options.dataSource.getNative());
    }
    getElevation(pos: MapPos) {
        return this.getNative().getElevation(toNativeMapPos(pos));
    }
    getElevations(poses: MapPosVector | MapPos[]) {
        const vector = this.getNative().getElevations(mapPosVectorFromArgs(poses));
        const out: number[] = [];
        for (let i = 0; i < vector.size(); i++) {
            out.push(vector.get(i));
        }
        return out;
    }
    /** the generic forwarder cannot turn a CSS string into a native Color */
    setSurfaceColorParameter(name: string, color: Color | string) {
        this.getNative().setSurfaceColorParameterColor(name, colorConverter.toNative.call(this, color, name));
    }
}
bindNative(TerrainOptions, TERRAIN_MET, TERRAIN_ACC, {
    selectors: TERRAIN_SEL,
    converters: { backgroundColor: colorConverter }
});
export interface TerrainOptions extends TerrainAcc {}

export class FogOptions extends BaseNative<MSFFogOptions, FogOptionsOptions> {
    createNative() {
        return MSFFogOptions.alloc().init();
    }
}
bindNative(FogOptions, FOG_MET, FOG_ACC, {
    selectors: FOG_SEL,
    converters: { color: colorConverter, highColor: colorConverter, spaceColor: colorConverter }
});
export interface FogOptions extends FogAcc {}

export class SkyOptions extends BaseNative<MSFSkyOptions, SkyOptionsOptions> {
    createNative() {
        return MSFSkyOptions.alloc().init();
    }
}
bindNative(SkyOptions, SKY_MET, SKY_ACC, {
    selectors: SKY_SEL,
    converters: { groundColor: colorConverter, horizonColor: colorConverter, skyColor: colorConverter }
});
export interface SkyOptions extends SkyAcc {}

export class LightOptions extends BaseNative<MSFLightOptions, LightOptionsOptions> {
    createNative() {
        return MSFLightOptions.alloc().init();
    }
}
bindNative(LightOptions, LIGHT_MET, LIGHT_ACC, { selectors: LIGHT_SEL, converters: { sunColor: colorConverter } });
export interface LightOptions extends LightAcc {}

/**
 * Never constructed: `map.getOptions()` wraps the map's own instance. Child option wrappers are
 * cached, since re-wrapping would drop whatever state the wrapper holds.
 */
export class MapOptions extends BaseNative<MSFOptions, MapOptionsOptions> {
    mTerrainOptions: TerrainOptions;
    mSkyOptions: SkyOptions;
    mLightOptions: LightOptions;
    mFogOptions: FogOptions;

    getTerrainOptions() {
        const native = this.getNative().getTerrainOptions();
        if (!native) {
            return null;
        }
        if (this.mTerrainOptions?.getNative() !== native) {
            this.mTerrainOptions = new TerrainOptions(undefined, native);
        }
        return this.mTerrainOptions;
    }
    setTerrainOptions(value: TerrainOptions) {
        this.getNative().setTerrainOptions(value?.getNative() ?? null);
        this.mTerrainOptions = value;
    }
    getFogOptions() {
        const native = this.getNative().getFogOptions();
        if (!native) {
            return null;
        }
        if (this.mFogOptions?.getNative() !== native) {
            this.mFogOptions = new FogOptions(undefined, native);
        }
        return this.mFogOptions;
    }
    setFogOptions(value: FogOptions) {
        this.getNative().setFogOptions(value?.getNative() ?? null);
        this.mFogOptions = value;
    }
    getSkyOptions() {
        const native = this.getNative().getSkyOptions();
        if (!native) {
            return null;
        }
        if (this.mSkyOptions?.getNative() !== native) {
            this.mSkyOptions = new SkyOptions(undefined, native);
        }
        return this.mSkyOptions;
    }
    setSkyOptions(value: SkyOptions) {
        this.getNative().setSkyOptions(value?.getNative() ?? null);
        this.mSkyOptions = value;
    }
    getLightOptions() {
        const native = this.getNative().getLightOptions();
        if (!native) {
            return null;
        }
        if (this.mLightOptions?.getNative() !== native) {
            this.mLightOptions = new LightOptions(undefined, native);
        }
        return this.mLightOptions;
    }
    setLightOptions(value: LightOptions) {
        this.getNative().setLightOptions(value?.getNative() ?? null);
        this.mLightOptions = value;
    }

    get terrainOptions() {
        return this.getTerrainOptions();
    }
    set terrainOptions(value: TerrainOptions) {
        this.setTerrainOptions(value);
    }
    get fogOptions() {
        return this.getFogOptions();
    }
    set fogOptions(value: FogOptions) {
        this.setFogOptions(value);
    }
    get skyOptions() {
        return this.getSkyOptions();
    }
    set skyOptions(value: SkyOptions) {
        this.setSkyOptions(value);
    }
    get lightOptions() {
        return this.getLightOptions();
    }
    set lightOptions(value: LightOptions) {
        this.setLightOptions(value);
    }
}
bindNative(MapOptions, OPTIONS_MET, OPTIONS_ACC, {
    selectors: OPTIONS_SEL,
    converters: {
        ambientLightColor: colorConverter,
        backgroundBitmap: massifImageConverter,
        clearColor: colorConverter,
        mainLightColor: colorConverter,
        mainLightDirection: mapVecConverter,
        skyColor: colorConverter,
        tiltRange: mapRangeConverter,
        zoomRange: mapRangeConverter
    }
});
export interface MapOptions extends Omit<OptionsAcc, 'terrainOptions' | 'skyOptions' | 'lightOptions' | 'fogOptions'> {}
