import { Color } from '@nativescript/core';
import { BaseNative } from '..';
import { Accessors as FogAccessors } from '../bindings/components/FogOptions';
import { Accessors as LightAccessors } from '../bindings/components/LightOptions';
import { Accessors as OptionsAccessors } from '../bindings/components/Options';
import { Accessors as SkyAccessors } from '../bindings/components/SkyOptions';
import { Accessors as TerrainAccessors } from '../bindings/components/TerrainOptions';
import { DefaultLatLonKeys, GenericMapPos, MapPosVector } from '../core';
import { TileDataSource } from '../datasources';
import { Accessors as Acc_TerrainOptions, Methods as Met_TerrainOptions } from '../bindings/components/TerrainOptions';
import { Accessors as Acc_FogOptions, Methods as Met_FogOptions } from '../bindings/components/FogOptions';
import { Accessors as Acc_SkyOptions, Methods as Met_SkyOptions } from '../bindings/components/SkyOptions';
import { Accessors as Acc_LightOptions, Methods as Met_LightOptions } from '../bindings/components/LightOptions';
import { Accessors as Acc_MapOptions, Methods as Met_MapOptions } from '../bindings/components/Options';

/**
 * The four option objects that hang off the map's Options.
 *
 * TerrainOptions takes its DEM as a constructor argument - there is no setDataSource - so
 * you build one and install it with `map.setTerrainOptions(...)`. SkyOptions, LightOptions
 * and FogOptions are already owned by the map; `map.getSkyOptions()` /
 * `map.getLightOptions()` / `map.getOptions().getFogOptions()` hand back a cached wrapper
 * around the native instance the map created.
 */

/**
 * Free roam: `LOOK` lets one finger look around while two fingers still pan/pinch/rotate
 * the map, `FIRST_PERSON` is mouse-look - the camera never moves - with two fingers
 * walking instead. Looking ABOVE the horizon also needs a negative `Options.tiltRange`
 * minimum, since in this SDK tilt 90 is straight down.
 */
export const FreeRoamMode: {
    FREE_ROAM_MODE_OFF: any;
    FREE_ROAM_MODE_LOOK: any;
    FREE_ROAM_MODE_FIRST_PERSON: any;
};

/**
 * How fast a pan moves the ground on a tilted view: `MAP` keeps the point under the
 * finger exactly under it, `ANCHORED` keeps the scale the gesture started with, and
 * `CONSTANT` always uses the scale at the centre of the screen.
 */
export const PanningSpeedMode: {
    PANNING_SPEED_MODE_MAP: any;
    PANNING_SPEED_MODE_ANCHORED: any;
    PANNING_SPEED_MODE_CONSTANT: any;
};

export interface TerrainOptionsOptions {
    /** the DEM the terrain mesh is built from - a constructor argument, not a setter */
    dataSource: TileDataSource<any, any>;
    /** defaults to the encoding declared on the data source */
    elevationDecoder?: any;
}
export interface SkyOptionsOptions {}
export interface FogOptionsOptions {}
export interface LightOptionsOptions {}
export interface MapOptionsOptions {}

export interface TerrainOptions extends TerrainAccessors {}
export class TerrainOptions extends BaseNative<any, TerrainOptionsOptions> {
    constructor(options: TerrainOptionsOptions, native?: any);
    getDataSource(): any;

    /** metres above sea level, or 0 where no tile is loaded yet */
    getElevation<T = DefaultLatLonKeys>(pos: GenericMapPos<T>): number;
    getElevations<T = DefaultLatLonKeys>(poses: MapPosVector<T> | GenericMapPos<T>[]): number[];

    /** uniforms for a custom surface shader */
    setSurfaceParameter(name: string, value: number): void;
    getSurfaceParameter(name: string): number;
    setSurfaceColorParameter(name: string, color: Color | string): void;
    getSurfaceColorParameter(name: string): Color;
    setSurfaceShaderSource(source: string): void;
    getSurfaceShaderSource(): string;
}

export interface SkyOptions extends SkyAccessors {}
export class SkyOptions extends BaseNative<any, SkyOptionsOptions> {}

/**
 * The distance haze and the sky above the horizon it fades into. Before SDK 6 this was
 * `TerrainOptions.fogColor/fogStartDistance/fogDistance` plus `SkyOptions.fogBlend/
 * fogHorizon`; `rangeStart`/`rangeEnd` are the two distances, in metres.
 */
export interface FogOptions extends FogAccessors {}
export class FogOptions extends BaseNative<any, FogOptionsOptions> {}

export interface LightOptions extends LightAccessors {}
export class LightOptions extends BaseNative<any, LightOptionsOptions> {
    /** month 1-12, day 1-31, hour 0-23 - drives sun altitude/azimuth and the shadows */
    setSunPositionFromTime(year: number, month: number, day: number, hour: number, minute: number, latitude: number, longitude: number): void;
}

/**
 * The map's Options, as returned by `map.getOptions()`. Never constructed directly.
 *
 * Everything the SDK declares is generated, so `options.tileDrawSize = 512` and
 * `options.clearColor = '#fff'` both work. The three nested option objects are the
 * exception: they are handed back as wrappers, not raw natives.
 */
export interface MapOptions extends Omit<OptionsAccessors, 'terrainOptions' | 'skyOptions' | 'lightOptions' | 'fogOptions'> {}
export class MapOptions extends BaseNative<any, MapOptionsOptions> {
    terrainOptions: TerrainOptions;
    skyOptions: SkyOptions;
    lightOptions: LightOptions;
    fogOptions: FogOptions;
    getTerrainOptions(): TerrainOptions;
    setTerrainOptions(value: TerrainOptions): void;
    getSkyOptions(): SkyOptions;
    setSkyOptions(value: SkyOptions): void;
    getLightOptions(): LightOptions;
    setLightOptions(value: LightOptions): void;
    getFogOptions(): FogOptions;
    setFogOptions(value: FogOptions): void;
}

export interface TerrainOptions
    extends Acc_TerrainOptions,
        Omit<
            Met_TerrainOptions,
            | 'getDataSource'
            | 'getElevation'
            | 'getElevations'
            | 'getSurfaceColorParameter'
            | 'getSurfaceParameter'
            | 'getSurfaceShaderSource'
            | 'setSurfaceColorParameter'
            | 'setSurfaceParameter'
            | 'setSurfaceShaderSource'
        > {}

export interface SkyOptions extends Acc_SkyOptions, Met_SkyOptions {}

export interface FogOptions extends Acc_FogOptions, Met_FogOptions {}

export interface LightOptions extends Acc_LightOptions, Omit<Met_LightOptions, 'setSunPositionFromTime'> {}

export interface MapOptions
    extends Omit<Acc_MapOptions, 'fogOptions' | 'lightOptions' | 'skyOptions' | 'terrainOptions'>,
        Omit<
            Met_MapOptions,
            'getFogOptions' | 'getLightOptions' | 'getSkyOptions' | 'getTerrainOptions' | 'setFogOptions' | 'setLightOptions' | 'setSkyOptions' | 'setTerrainOptions'
        > {}

export interface TerrainOptions
    extends Acc_TerrainOptions,
        Omit<
            Met_TerrainOptions,
            | 'getDataSource'
            | 'getElevation'
            | 'getElevations'
            | 'getSurfaceColorParameter'
            | 'getSurfaceParameter'
            | 'getSurfaceShaderSource'
            | 'setSurfaceColorParameter'
            | 'setSurfaceParameter'
            | 'setSurfaceShaderSource'
        > {}

export interface MapOptions
    extends Omit<Acc_MapOptions, 'fogOptions' | 'lightOptions' | 'skyOptions' | 'terrainOptions'>,
        Omit<
            Met_MapOptions,
            'getFogOptions' | 'getLightOptions' | 'getSkyOptions' | 'getTerrainOptions' | 'setFogOptions' | 'setLightOptions' | 'setSkyOptions' | 'setTerrainOptions'
        > {}

export interface TerrainOptions extends Acc_TerrainOptions, Omit<Met_TerrainOptions, 'getDataSource' | 'getElevation' | 'getElevations' | 'getSurfaceColorParameter' | 'getSurfaceParameter' | 'getSurfaceShaderSource' | 'setSurfaceColorParameter' | 'setSurfaceParameter' | 'setSurfaceShaderSource'> {}

export interface MapOptions extends Omit<Acc_MapOptions, 'fogOptions' | 'lightOptions' | 'skyOptions' | 'terrainOptions'>, Omit<Met_MapOptions, 'getFogOptions' | 'getLightOptions' | 'getSkyOptions' | 'getTerrainOptions' | 'setFogOptions' | 'setLightOptions' | 'setSkyOptions' | 'setTerrainOptions'> {}
