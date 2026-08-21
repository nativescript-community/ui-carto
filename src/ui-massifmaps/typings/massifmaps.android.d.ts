/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run typings.android` / `npm run typings.ios`.

declare namespace com {
    export namespace massifmaps {
        export namespace celestial {
            export class CelestialArc extends com.massifmaps.celestial.CelestialObject {
                public static class: java.lang.Class<com.massifmaps.celestial.CelestialArc>;
                public setSegments(directions: com.massifmaps.core.DoubleVector): void;
                public getClickRadius(): number;
                public setCircle(axisAzimuth: number, axisAltitude: number, radius: number): void;
                public constructor();
                public getRadius(): number;
                public getWidth(): number;
                public setBelowHorizonVisible(visible: boolean): void;
                public getDirections(): com.massifmaps.core.DoubleVector;
                public setWidth(pixels: number): void;
                public setDirections(directions: com.massifmaps.core.DoubleVector): void;
                public isSegmented(): boolean;
                public isBelowHorizonVisible(): boolean;
                public setClickRadius(degrees: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace celestial {
            export class CelestialObject extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.celestial.CelestialObject>;
                public swigCMemOwn: boolean;
                public getMetaDataElement(key: string): com.massifmaps.core.Variant;
                public isVisible(): boolean;
                public isDirectionAnchored(): boolean;
                public setMetaDataElement(key: string, element: com.massifmaps.core.Variant): void;
                public setColor(color: com.massifmaps.graphics.Color): void;
                public getPositionAltitude(): number;
                public getColor(): com.massifmaps.graphics.Color;
                public getAltitude(): number;
                public setDirection(azimuth: number, altitude: number, distance: number): void;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getPosition(): com.massifmaps.core.MapPos;
                public getDistance(): number;
                public getAzimuth(): number;
                public setVisible(visible: boolean): void;
                public setPosition(pos: com.massifmaps.core.MapPos, altitude: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace celestial {
            export class CelestialObjectVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.celestial.CelestialObjectVector>;
                public swigCMemOwn: boolean;
                public set(i: number, val: com.massifmaps.celestial.CelestialObject): void;
                public get(i: number): com.massifmaps.celestial.CelestialObject;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public add(x: com.massifmaps.celestial.CelestialObject): void;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace celestial {
            export class CelestialSprite extends com.massifmaps.celestial.CelestialObject {
                public static class: java.lang.Class<com.massifmaps.celestial.CelestialSprite>;
                public getBitmap(): com.massifmaps.graphics.Bitmap;
                public setAngularSize(degrees: number): void;
                public setSoftness(softness: number): void;
                public getClickRadius(): number;
                public constructor();
                public setScreenSize(pixels: number): void;
                public getAngularSize(): number;
                public getScreenSize(): number;
                public setBitmap(bitmap: com.massifmaps.graphics.Bitmap): void;
                public getSoftness(): number;
                public setClickRadius(degrees: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace components {
            export class FogOptions extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.components.FogOptions>;
                public swigCMemOwn: boolean;
                public getRangeEnd(): number;
                public constructor();
                public getRangeStart(): number;
                public getHighColor(): com.massifmaps.graphics.Color;
                public setHorizonBlend(horizonBlend: number): void;
                public getHorizonAngle(): number;
                public setHorizonAngle(degrees: number): void;
                public getShaderSource(): string;
                public setSpaceColor(color: com.massifmaps.graphics.Color): void;
                public getSpaceColor(): com.massifmaps.graphics.Color;
                public setStarIntensity(starIntensity: number): void;
                public getHorizonBlend(): number;
                public setShaderSource(shaderSource: string): void;
                public setHighColor(color: com.massifmaps.graphics.Color): void;
                public setRangeStart(rangeStart: number): void;
                public setColor(color: com.massifmaps.graphics.Color): void;
                public setRangeEnd(rangeEnd: number): void;
                public getColor(): com.massifmaps.graphics.Color;
                public getStarIntensity(): number;
                public isEnabled(): boolean;
                public setEnabled(enabled: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace components {
            export class FreeRoamMode {
                public static class: java.lang.Class<com.massifmaps.components.FreeRoamMode>;
                public static FREE_ROAM_MODE_OFF: com.massifmaps.components.FreeRoamMode;
                public static FREE_ROAM_MODE_LOOK: com.massifmaps.components.FreeRoamMode;
                public static FREE_ROAM_MODE_FIRST_PERSON: com.massifmaps.components.FreeRoamMode;
                public static valueOf(name: string): com.massifmaps.components.FreeRoamMode;
                public swigValue(): number;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static values(): androidNative.Array<com.massifmaps.components.FreeRoamMode>;
                public static swigToEnum(swigEnum: number): com.massifmaps.components.FreeRoamMode;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace components {
            export class Layers extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.components.Layers>;
                public swigCMemOwn: boolean;
                public addAll(layers: com.massifmaps.layers.LayerVector): void;
                public setAll(layers: com.massifmaps.layers.LayerVector): void;
                public add(layer: com.massifmaps.layers.Layer): void;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public removeAll(layers: com.massifmaps.layers.LayerVector): boolean;
                public clear(): void;
                public insert(index: number, layer: com.massifmaps.layers.Layer): void;
                public get(index: number): com.massifmaps.layers.Layer;
                public getAll(): com.massifmaps.layers.LayerVector;
                public set(index: number, layer: com.massifmaps.layers.Layer): void;
                public count(): number;
                public remove(layer: com.massifmaps.layers.Layer): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace components {
            export class LightOptions extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.components.LightOptions>;
                public swigCMemOwn: boolean;
                public getSunAltitude(): number;
                public getAmbientColor(): com.massifmaps.graphics.Color;
                public setAmbientColor(color: com.massifmaps.graphics.Color): void;
                public isTerrainLightingEnabled(): boolean;
                public getShadowCascades(): number;
                public getSunIntensity(): number;
                public getShadowDistance(): number;
                public setSunColor(color: com.massifmaps.graphics.Color): void;
                public getShadowStrength(): number;
                public constructor();
                public getSunAzimuth(): number;
                public setShadowCasterMargin(margin: number): void;
                public setShadowCascades(cascades: number): void;
                public getAmbientIntensity(): number;
                public getShadowMapSize(): number;
                public getShadowNormalOffset(): number;
                public setShadowNormalOffset(offset: number): void;
                public setShadowStrength(strength: number): void;
                public setAmbientIntensity(intensity: number): void;
                public setShadowSoftness(softness: number): void;
                public getSunColor(): com.massifmaps.graphics.Color;
                public setSunPositionFromTime(year: number, month: number, day: number, hour: number, minute: number, latitude: number, longitude: number): void;
                public setSunAzimuth(azimuth: number): void;
                public setShadowMapSize(size: number): void;
                public setTerrainLightingEnabled(enabled: boolean): void;
                public getShadowSoftness(): number;
                public setShadowDistance(distance: number): void;
                public getShadowBias(): number;
                public setShadowBias(bias: number): void;
                public setSunAltitude(altitude: number): void;
                public setSunIntensity(intensity: number): void;
                public getShadowCasterMargin(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace components {
            export class Options extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.components.Options>;
                public swigCMemOwn: boolean;
                public setZoomRange(zoomRange: com.massifmaps.core.MapRange): void;
                public isDoubleClickDetection(): boolean;
                public setPanningSpeedMode(mode: com.massifmaps.components.PanningSpeedMode): void;
                public setTiltGestureReversed(reversed: boolean): void;
                public getFieldOfViewY(): number;
                public setSkyColor(color: com.massifmaps.graphics.Color): void;
                public setDoubleClickDetection(enabled: boolean): void;
                public setTileThreadPoolSize(poolSize: number): void;
                public setClearColor(color: com.massifmaps.graphics.Color): void;
                public isLayersLabelsProcessedInReverseOrder(): boolean;
                public getSkyOptions(): com.massifmaps.components.SkyOptions;
                public setLayersLabelsProcessedInReverseOrder(enabled: boolean): void;
                public getFocusPointOffset(): com.massifmaps.core.ScreenPos;
                public isSeamlessPanning(): boolean;
                public getLightOptions(): com.massifmaps.components.LightOptions;
                public isClickTypeDetection(): boolean;
                public getDrawDistance(): number;
                public getFogOptions(): com.massifmaps.components.FogOptions;
                public isTiltGestureReversed(): boolean;
                public isKineticRotation(): boolean;
                public isUserInput(): boolean;
                public setMainLightDirection(direction: com.massifmaps.core.MapVec): void;
                public getSkyColor(): com.massifmaps.graphics.Color;
                public setEnvelopeThreadPoolSize(poolSize: number): void;
                public setTileLODFactor(factor: number): void;
                public setRenderProjectionMode(renderProjectionMode: com.massifmaps.components.RenderProjectionMode): void;
                public setUserInput(enabled: boolean): void;
                public getFreeRoamMoveSpeed(): number;
                public setPanBounds(panBounds: com.massifmaps.core.MapBounds): void;
                public setPanningMode(panningMode: com.massifmaps.components.PanningMode): void;
                public setLightOptions(lightOptions: com.massifmaps.components.LightOptions): void;
                public setFogOptions(fogOptions: com.massifmaps.components.FogOptions): void;
                public getTerrainOptions(): com.massifmaps.components.TerrainOptions;
                public getPivotMode(): com.massifmaps.components.PivotMode;
                public setRotationGestures(enabled: boolean): void;
                public getMainLightDirection(): com.massifmaps.core.MapVec;
                public getTileLODFactor(): number;
                public setDebugTileBorders(enabled: boolean): void;
                public setPivotMode(pivotMode: com.massifmaps.components.PivotMode): void;
                public setSeamlessPanning(enabled: boolean): void;
                public getBackgroundBitmap(): com.massifmaps.graphics.Bitmap;
                public setKineticPan(enabled: boolean): void;
                public setFreeRoamMode(mode: com.massifmaps.components.FreeRoamMode): void;
                public equals(obj: any): boolean;
                public getBaseProjection(): com.massifmaps.projections.Projection;
                public setZoomGestures(enabled: boolean): void;
                public getZoomRange(): com.massifmaps.core.MapRange;
                public getClearColor(): com.massifmaps.graphics.Color;
                public getTileDrawSize(): number;
                public isRestrictedPanning(): boolean;
                public getMainLightColor(): com.massifmaps.graphics.Color;
                public getEnvelopeThreadPoolSize(): number;
                public getPanningSpeedMode(): com.massifmaps.components.PanningSpeedMode;
                public setFreeRoamLookSensitivity(degreesPerInch: number): void;
                public setSkyOptions(skyOptions: com.massifmaps.components.SkyOptions): void;
                public getTiltRange(): com.massifmaps.core.MapRange;
                public isRotatable(): boolean;
                public setDoubleClickMaxDuration(duration: number): void;
                public setDPI(dpi: number): void;
                public hashCode(): number;
                public getFreeRoamLookSensitivity(): number;
                public getDoubleClickMaxDuration(): number;
                public getRenderProjectionMode(): com.massifmaps.components.RenderProjectionMode;
                public isZoomGestures(): boolean;
                public setLongClickDuration(duration: number): void;
                public setTileDrawSize(tileDrawSize: number): void;
                public getLongClickDuration(): number;
                public setBaseProjection(baseProjection: com.massifmaps.projections.Projection): void;
                public setFreeRoamMoveSpeed(distancePerInch: number): void;
                public setClickTypeDetection(enabled: boolean): void;
                public setRestrictedPanning(enabled: boolean): void;
                public getFreeRoamMode(): com.massifmaps.components.FreeRoamMode;
                public getTileThreadPoolSize(): number;
                public setTiltRange(tiltRange: com.massifmaps.core.MapRange): void;
                public getAmbientLightColor(): com.massifmaps.graphics.Color;
                public setFieldOfViewY(fovY: number): void;
                public isDebugTileBorders(): boolean;
                public setTerrainOptions(terrainOptions: com.massifmaps.components.TerrainOptions): void;
                public isKineticZoom(): boolean;
                public getDPI(): number;
                public setFocusPointOffset(offset: com.massifmaps.core.ScreenPos): void;
                public getPanBounds(): com.massifmaps.core.MapBounds;
                public setBackgroundBitmap(backgroundBitmap: com.massifmaps.graphics.Bitmap): void;
                public setKineticZoom(enabled: boolean): void;
                public setMainLightColor(color: com.massifmaps.graphics.Color): void;
                public isRotationGestures(): boolean;
                public setKineticRotation(enabled: boolean): void;
                public isKineticPan(): boolean;
                public setRotatable(enabled: boolean): void;
                public getPanningMode(): com.massifmaps.components.PanningMode;
                public setDrawDistance(drawDistance: number): void;
                public setAmbientLightColor(color: com.massifmaps.graphics.Color): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace components {
            export class PanningMode {
                public static class: java.lang.Class<com.massifmaps.components.PanningMode>;
                public static PANNING_MODE_FREE: com.massifmaps.components.PanningMode;
                public static PANNING_MODE_STICKY: com.massifmaps.components.PanningMode;
                public static PANNING_MODE_STICKY_FINAL: com.massifmaps.components.PanningMode;
                public swigValue(): number;
                public static swigToEnum(swigEnum: number): com.massifmaps.components.PanningMode;
                public static valueOf(name: string): com.massifmaps.components.PanningMode;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static values(): androidNative.Array<com.massifmaps.components.PanningMode>;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace components {
            export class PanningSpeedMode {
                public static class: java.lang.Class<com.massifmaps.components.PanningSpeedMode>;
                public static PANNING_SPEED_MODE_MAP: com.massifmaps.components.PanningSpeedMode;
                public static PANNING_SPEED_MODE_ANCHORED: com.massifmaps.components.PanningSpeedMode;
                public static PANNING_SPEED_MODE_CONSTANT: com.massifmaps.components.PanningSpeedMode;
                public swigValue(): number;
                public static valueOf(name: string): com.massifmaps.components.PanningSpeedMode;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static swigToEnum(swigEnum: number): com.massifmaps.components.PanningSpeedMode;
                public static values(): androidNative.Array<com.massifmaps.components.PanningSpeedMode>;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace components {
            export class PivotMode {
                public static class: java.lang.Class<com.massifmaps.components.PivotMode>;
                public static PIVOT_MODE_TOUCHPOINT: com.massifmaps.components.PivotMode;
                public static PIVOT_MODE_CENTERPOINT: com.massifmaps.components.PivotMode;
                public static valueOf(name: string): com.massifmaps.components.PivotMode;
                public swigValue(): number;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static swigToEnum(swigEnum: number): com.massifmaps.components.PivotMode;
                public static values(): androidNative.Array<com.massifmaps.components.PivotMode>;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace components {
            export class RenderProjectionMode {
                public static class: java.lang.Class<com.massifmaps.components.RenderProjectionMode>;
                public static RENDER_PROJECTION_MODE_PLANAR: com.massifmaps.components.RenderProjectionMode;
                public static RENDER_PROJECTION_MODE_SPHERICAL: com.massifmaps.components.RenderProjectionMode;
                public static values(): androidNative.Array<com.massifmaps.components.RenderProjectionMode>;
                public swigValue(): number;
                public static valueOf(name: string): com.massifmaps.components.RenderProjectionMode;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static swigToEnum(swigEnum: number): com.massifmaps.components.RenderProjectionMode;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace components {
            export class SkyOptions extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.components.SkyOptions>;
                public swigCMemOwn: boolean;
                public isSunDiscEnabled(): boolean;
                public getHorizonBlend(): number;
                public setSkyColor(color: com.massifmaps.graphics.Color): void;
                public setShaderSource(shaderSource: string): void;
                public getHorizonColor(): com.massifmaps.graphics.Color;
                public setHorizonBlend(degrees: number): void;
                public constructor();
                public setGroundColor(color: com.massifmaps.graphics.Color): void;
                public getSkyColor(): com.massifmaps.graphics.Color;
                public getShaderSource(): string;
                public isEnabled(): boolean;
                public setHorizonColor(color: com.massifmaps.graphics.Color): void;
                public getGroundColor(): com.massifmaps.graphics.Color;
                public setEnabled(enabled: boolean): void;
                public setSunDiscEnabled(enabled: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace components {
            export class TerrainOptions extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.components.TerrainOptions>;
                public swigCMemOwn: boolean;
                public setSurfaceColorParameter(name: string, color: com.massifmaps.graphics.Color): void;
                public isElevationPrefetchEnabled(): boolean;
                public getCameraClampDuration(): number;
                public setMaxTileZoomCoarsening(levels: number): void;
                public getViewDistance(): number;
                public setExaggeration(exaggeration: number): void;
                public setBackgroundBitmapEnabled(enabled: boolean): void;
                public isSeamlessTileEdgesEnabled(): boolean;
                public getNoDrapeLayerFilter(): string;
                public setViewDistance(distance: number): void;
                public getCameraClearance(): number;
                public isBillboardOcclusionEnabled(): boolean;
                public setMeshResolution(meshResolution: number): void;
                public isDrapeFillsEnabled(): boolean;
                public setDepthBias(depthBias: number): void;
                public getDepthBias(): number;
                public setSeamlessTileEdgesEnabled(enabled: boolean): void;
                public getBackgroundColor(): com.massifmaps.graphics.Color;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource, elevationDecoder: com.massifmaps.rastertiles.ElevationDecoder);
                public setSurfaceShaderSource(shaderSource: string): void;
                public setBackgroundColor(color: com.massifmaps.graphics.Color): void;
                public isBackgroundBitmapEnabled(): boolean;
                public getElevations(poses: com.massifmaps.core.MapPosVector): com.massifmaps.core.DoubleVector;
                public isTileEdgeStitchingEnabled(): boolean;
                public getExaggeration(): number;
                public getElevation(pos: com.massifmaps.core.MapPos): number;
                public setCameraClampDuration(duration: number): void;
                public setEnabled(enabled: boolean): void;
                public setBillboardOcclusionTolerance(tolerance: number): void;
                public getElevationDecoder(): com.massifmaps.rastertiles.ElevationDecoder;
                public getDrapeResolution(): number;
                public setElevationPrefetchEnabled(enabled: boolean): void;
                public setDrapeResolution(resolution: number): void;
                public getSurfaceShaderSource(): string;
                public setMaxTileZoomOffset(offset: number): void;
                public getMaxTileZoomCoarsening(): number;
                public setDrapeFillsEnabled(enabled: boolean): void;
                public getMaxTileZoomOffset(): number;
                public getBillboardOcclusionTolerance(): number;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource);
                public setViewDistanceFactor(factor: number): void;
                public setSurfaceParameter(name: string, value: number): void;
                public setDrapeLinesEnabled(enabled: boolean): void;
                public isDrapeLinesEnabled(): boolean;
                public getMeshResolution(): number;
                public getSurfaceColorParameter(name: string): com.massifmaps.graphics.Color;
                public getViewDistanceFactor(): number;
                public setBillboardOcclusionEnabled(enabled: boolean): void;
                public setTileEdgeStitchingEnabled(enabled: boolean): void;
                public getDataSource(): com.massifmaps.datasources.TileDataSource;
                public getSurfaceParameter(name: string): number;
                public setCameraClearance(clearance: number): void;
                public isEnabled(): boolean;
                public setMinZoom(minZoom: number): void;
                public setNoDrapeLayerFilter(filter: string): void;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class Address extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.Address>;
                public swigCMemOwn: boolean;
                public getStreet(): string;
                public getCountry(): string;
                public getCounty(): string;
                public constructor(country: string, region: string, county: string, locality: string, neighbourhood: string, street: string, postcode: string, houseNumber: string, name: string, categories: com.massifmaps.core.StringVector);
                public getName(): string;
                public toString(): string;
                public getNeighbourhood(): string;
                public getCategories(): com.massifmaps.core.StringVector;
                public constructor();
                public equals(obj: any): boolean;
                public getPostcode(): string;
                public hashCode(): number;
                public getHouseNumber(): string;
                public getRegion(): string;
                public getLocality(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class BinaryData extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.BinaryData>;
                public swigCMemOwn: boolean;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getData(): androidNative.Array<number>;
                public toString(): string;
                public constructor(dataPtr: androidNative.Array<number>);
                public constructor();
                public size(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class DoubleVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.DoubleVector>;
                public swigCMemOwn: boolean;
                public set(i: number, val: number): void;
                public constructor(n: number);
                public get(i: number): number;
                public constructor();
                public size(): number;
                public capacity(): number;
                public add(x: number): void;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class IntVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.IntVector>;
                public swigCMemOwn: boolean;
                public set(i: number, val: number): void;
                public constructor(n: number);
                public get(i: number): number;
                public constructor();
                public size(): number;
                public capacity(): number;
                public add(x: number): void;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class MapBounds extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.MapBounds>;
                public swigCMemOwn: boolean;
                public intersects(bounds: com.massifmaps.core.MapBounds): boolean;
                public getMax(): com.massifmaps.core.MapPos;
                public shrinkToIntersection(bounds: com.massifmaps.core.MapBounds): void;
                public getMin(): com.massifmaps.core.MapPos;
                public toString(): string;
                public constructor();
                public equals(obj: any): boolean;
                public getDelta(): com.massifmaps.core.MapVec;
                public hashCode(): number;
                public getCenter(): com.massifmaps.core.MapPos;
                public contains(pos: com.massifmaps.core.MapPos): boolean;
                public contains(bounds: com.massifmaps.core.MapBounds): boolean;
                public constructor(min: com.massifmaps.core.MapPos, max: com.massifmaps.core.MapPos);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class MapEnvelope extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.MapEnvelope>;
                public swigCMemOwn: boolean;
                public contains(envelope: com.massifmaps.core.MapEnvelope): boolean;
                public intersects(envelope: com.massifmaps.core.MapEnvelope): boolean;
                public getBounds(): com.massifmaps.core.MapBounds;
                public toString(): string;
                public constructor();
                public equals(obj: any): boolean;
                public constructor(bounds: com.massifmaps.core.MapBounds);
                public constructor(convexHull: com.massifmaps.core.MapPosVector);
                public getConvexHull(): com.massifmaps.core.MapPosVector;
                public hashCode(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class MapPos extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.MapPos>;
                public swigCMemOwn: boolean;
                public constructor(x: number, y: number);
                public constructor(x: number, y: number, z: number);
                public add(v: com.massifmaps.core.MapVec): com.massifmaps.core.MapPos;
                public getY(): number;
                public toString(): string;
                public constructor();
                public subPos(p: com.massifmaps.core.MapPos): com.massifmaps.core.MapVec;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getX(): number;
                public subVec(v: com.massifmaps.core.MapVec): com.massifmaps.core.MapPos;
                public getZ(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class MapPosVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.MapPosVector>;
                public swigCMemOwn: boolean;
                public get(i: number): com.massifmaps.core.MapPos;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public add(x: com.massifmaps.core.MapPos): void;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
                public set(i: number, val: com.massifmaps.core.MapPos): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class MapPosVectorVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.MapPosVectorVector>;
                public swigCMemOwn: boolean;
                public get(i: number): com.massifmaps.core.MapPosVector;
                public add(x: com.massifmaps.core.MapPosVector): void;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public set(i: number, val: com.massifmaps.core.MapPosVector): void;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class MapRange extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.MapRange>;
                public swigCMemOwn: boolean;
                public getMin(): number;
                public length(): number;
                public toString(): string;
                public constructor();
                public getMax(): number;
                public constructor(min: number, max: number);
                public equals(obj: any): boolean;
                public inRange(value: number): boolean;
                public hashCode(): number;
                public getMidrange(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class MapTile extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.MapTile>;
                public swigCMemOwn: boolean;
                public getTileId(): number;
                public getZoom(): number;
                public getY(): number;
                public toString(): string;
                public constructor();
                public equals(obj: any): boolean;
                public constructor(x: number, y: number, zoom: number, frameNr: number);
                public hashCode(): number;
                public getX(): number;
                public getFrameNr(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class MapVec extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.MapVec>;
                public swigCMemOwn: boolean;
                public constructor(x: number, y: number);
                public div(divider: number): com.massifmaps.core.MapVec;
                public getNormalized(): com.massifmaps.core.MapVec;
                public crossProduct2D(v: com.massifmaps.core.MapVec): number;
                public constructor(x: number, y: number, z: number);
                public mul(multiplier: number): com.massifmaps.core.MapVec;
                public getY(): number;
                public length(): number;
                public dotProduct(v: com.massifmaps.core.MapVec): number;
                public sub(v: com.massifmaps.core.MapVec): com.massifmaps.core.MapVec;
                public toString(): string;
                public constructor();
                public crossProduct3D(v: com.massifmaps.core.MapVec): com.massifmaps.core.MapVec;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getX(): number;
                public getZ(): number;
                public add(v: com.massifmaps.core.MapVec): com.massifmaps.core.MapVec;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class ScreenBounds extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.ScreenBounds>;
                public swigCMemOwn: boolean;
                public intersects(bounds: com.massifmaps.core.ScreenBounds): boolean;
                public getHeight(): number;
                public getMin(): com.massifmaps.core.ScreenPos;
                public getMax(): com.massifmaps.core.ScreenPos;
                public toString(): string;
                public constructor(min: com.massifmaps.core.ScreenPos, max: com.massifmaps.core.ScreenPos);
                public contains(bounds: com.massifmaps.core.ScreenBounds): boolean;
                public constructor();
                public getWidth(): number;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getCenter(): com.massifmaps.core.ScreenPos;
                public contains(pos: com.massifmaps.core.ScreenPos): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class ScreenPos extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.ScreenPos>;
                public swigCMemOwn: boolean;
                public constructor(x: number, y: number);
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getX(): number;
                public getY(): number;
                public toString(): string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class ScreenPosVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.ScreenPosVector>;
                public swigCMemOwn: boolean;
                public constructor(n: number);
                public set(i: number, val: com.massifmaps.core.ScreenPos): void;
                public constructor();
                public size(): number;
                public get(i: number): com.massifmaps.core.ScreenPos;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public add(x: com.massifmaps.core.ScreenPos): void;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class StringMap extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.StringMap>;
                public swigCMemOwn: boolean;
                public get(key: string): string;
                public constructor();
                public size(): number;
                public constructor(arg0: com.massifmaps.core.StringMap);
                public has_key(key: string): boolean;
                public clear(): void;
                public del(key: string): void;
                public get_key(idx: number): string;
                public set(key: string, x: string): void;
                public empty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class StringVariantMap extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.StringVariantMap>;
                public swigCMemOwn: boolean;
                public constructor();
                public size(): number;
                public set(key: string, x: com.massifmaps.core.Variant): void;
                public get(key: string): com.massifmaps.core.Variant;
                public has_key(key: string): boolean;
                public clear(): void;
                public del(key: string): void;
                public get_key(idx: number): string;
                public constructor(arg0: com.massifmaps.core.StringVariantMap);
                public empty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class StringVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.StringVector>;
                public swigCMemOwn: boolean;
                public set(i: number, val: string): void;
                public constructor(n: number);
                public add(x: string): void;
                public constructor();
                public size(): number;
                public capacity(): number;
                public clear(): void;
                public get(i: number): string;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class Variant extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.Variant>;
                public swigCMemOwn: boolean;
                public getArrayElement(idx: number): com.massifmaps.core.Variant;
                public constructor(longVal: number);
                public getBool(): boolean;
                public constructor(boolVal: boolean);
                public constructor();
                public containsObjectKey(key: string): boolean;
                public constructor(string: string);
                public hashCode(): number;
                public constructor(doubleVal: number);
                public getType(): com.massifmaps.core.VariantType;
                public getString(): string;
                public getObjectKeys(): com.massifmaps.core.StringVector;
                public toString(): string;
                public getDouble(): number;
                public equals(obj: any): boolean;
                public constructor(object: com.massifmaps.core.StringVariantMap);
                public static fromString(str: string): com.massifmaps.core.Variant;
                public constructor(array: com.massifmaps.core.VariantVector);
                public getObjectElement(key: string): com.massifmaps.core.Variant;
                public getArraySize(): number;
                public getLong(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class VariantArrayBuilder extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.VariantArrayBuilder>;
                public swigCMemOwn: boolean;
                public buildVariant(): com.massifmaps.core.Variant;
                public addDouble(val: number): void;
                public constructor();
                public addString(str: string): void;
                public addBool(val: boolean): void;
                public equals(obj: any): boolean;
                public addLong(val: number): void;
                public hashCode(): number;
                public clear(): void;
                public addVariant(var_: com.massifmaps.core.Variant): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class VariantObjectBuilder extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.VariantObjectBuilder>;
                public swigCMemOwn: boolean;
                public buildVariant(): com.massifmaps.core.Variant;
                public setVariant(key: string, var_: com.massifmaps.core.Variant): void;
                public setLong(key: string, val: number): void;
                public setDouble(key: string, val: number): void;
                public setString(key: string, str: string): void;
                public setBool(key: string, val: boolean): void;
                public constructor();
                public equals(obj: any): boolean;
                public hashCode(): number;
                public clear(): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class VariantType {
                public static class: java.lang.Class<com.massifmaps.core.VariantType>;
                public static VARIANT_TYPE_NULL: com.massifmaps.core.VariantType;
                public static VARIANT_TYPE_STRING: com.massifmaps.core.VariantType;
                public static VARIANT_TYPE_BOOL: com.massifmaps.core.VariantType;
                public static VARIANT_TYPE_INTEGER: com.massifmaps.core.VariantType;
                public static VARIANT_TYPE_DOUBLE: com.massifmaps.core.VariantType;
                public static VARIANT_TYPE_ARRAY: com.massifmaps.core.VariantType;
                public static VARIANT_TYPE_OBJECT: com.massifmaps.core.VariantType;
                public static values(): androidNative.Array<com.massifmaps.core.VariantType>;
                public swigValue(): number;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.core.VariantType;
                public static swigToEnum(swigEnum: number): com.massifmaps.core.VariantType;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace core {
            export class VariantVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.core.VariantVector>;
                public swigCMemOwn: boolean;
                public get(i: number): com.massifmaps.core.Variant;
                public set(i: number, val: com.massifmaps.core.Variant): void;
                public add(x: com.massifmaps.core.Variant): void;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class AssetTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.AssetTileDataSource>;
                public buildAssetPath(basePath: string, tile: com.massifmaps.core.MapTile): string;
                public swigDirectorDisconnect(): void;
                public constructor(minZoom: number, maxZoom: number);
                public loadTile(tile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public constructor();
                public constructor(minZoom: number, maxZoom: number, basePath: string);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class BitmapOverlayRasterTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.BitmapOverlayRasterTileDataSource>;
                public swigDirectorDisconnect(): void;
                public constructor(minZoom: number, maxZoom: number);
                public constructor(minZoom: number, maxZoom: number, bitmap: com.massifmaps.graphics.Bitmap, projection: com.massifmaps.projections.Projection, mapPoses: com.massifmaps.core.MapPosVector, bitmapPoses: com.massifmaps.core.ScreenPosVector);
                public constructor();
                public loadTile(mapTile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public getDataExtent(): com.massifmaps.core.MapBounds;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class CacheTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.CacheTileDataSource>;
                public swigDirectorDisconnect(): void;
                public setCapacity(capacityInBytes: number): void;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource);
                public constructor();
                public getMetaData(key: string): string;
                public clear(): void;
                public getDataExtent(): com.massifmaps.core.MapBounds;
                public getEncoding(): string;
                public constructor(minZoom: number, maxZoom: number);
                public getCapacity(): number;
                public getMaxZoom(): number;
                public notifyTilesChanged(removeTiles: boolean): void;
                public getDataSource(): com.massifmaps.datasources.TileDataSource;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class CombinedTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.CombinedTileDataSource>;
                public swigDirectorDisconnect(): void;
                public constructor(minZoom: number, maxZoom: number);
                public loadTile(tile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public constructor(dataSource1: com.massifmaps.datasources.TileDataSource, dataSource2: com.massifmaps.datasources.TileDataSource, zoomLevel: number);
                public getMaxZoom(): number;
                public constructor();
                public getMetaData(key: string): string;
                public getDataExtent(): com.massifmaps.core.MapBounds;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class ContourTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.ContourTileDataSource>;
                public swigDirectorDisconnect(): void;
                public loadTile(tile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public clearIntervalMultipliers(): void;
                public getIntervalMultiplier(zoom: number): number;
                public setResolution(resolution: number): void;
                public clearResolutionsForZoom(): void;
                public setSeamlessEdgesEnabled(enabled: boolean): void;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource);
                public constructor();
                public getMinVisibleZoom(): number;
                public setLabelStubsEnabled(enabled: boolean): void;
                public setLabelInterval(interval: number): void;
                public getResolution(): number;
                public setTerrainOptions(terrainOptions: com.massifmaps.components.TerrainOptions): void;
                public setSimplifyTolerance(tolerance: number): void;
                public getMetaData(key: string): string;
                public getBaseInterval(): number;
                public getTerrainOptions(): com.massifmaps.components.TerrainOptions;
                public getDataExtent(): com.massifmaps.core.MapBounds;
                public getSimplifyTolerance(): number;
                public getEncoding(): string;
                public constructor(minZoom: number, maxZoom: number);
                public setLayerName(name: string): void;
                public getResolutionForZoom(zoom: number): number;
                public isLabelStubsEnabled(): boolean;
                public setMinVisibleZoom(zoom: number): void;
                public getLabelInterval(): number;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource, elevationDecoder: com.massifmaps.rastertiles.ElevationDecoder);
                public getLayerName(): string;
                public getMaxZoom(): number;
                public setIntervalMultiplier(maxZoom: number, multiplier: number): void;
                public setBaseInterval(interval: number): void;
                public isSeamlessEdgesEnabled(): boolean;
                public setResolutionForZoom(maxZoom: number, resolution: number): void;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class GeoJSONVectorTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.GeoJSONVectorTileDataSource>;
                public swigDirectorDisconnect(): void;
                public setLayerGeoJSONString(layerIndex: number, geoJSON: string): void;
                public updateGeoJSONFeature(layerIndex: number, geoJSON: com.massifmaps.core.Variant): void;
                public constructor();
                public addGeoJSONFeature(layerIndex: number, geoJSON: com.massifmaps.core.Variant): void;
                public setSimplifyTolerance(tolerance: number): void;
                public loadTile(mapTile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public createLayer(name: string): number;
                public getDataExtent(): com.massifmaps.core.MapBounds;
                public getSimplifyTolerance(): number;
                public deleteLayer(layerIndex: number): void;
                public setLayerFeatureCollection(layerIndex: number, projection: com.massifmaps.projections.Projection, featureCollection: com.massifmaps.geometry.FeatureCollection): void;
                public constructor(minZoom: number, maxZoom: number);
                public getDefaultLayerBuffer(): number;
                public setLayerGeoJSON(layerIndex: number, geoJSON: com.massifmaps.core.Variant): void;
                public updateGeoJSONStringFeature(layerIndex: number, geoJSON: string): void;
                public addGeoJSONStringFeature(layerIndex: number, geoJSON: string): void;
                public setDefaultLayerBuffer(tolerance: number): void;
                public removeGeoJSONFeature(layerIndex: number, id: com.massifmaps.core.Variant): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class HTTPTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.HTTPTileDataSource>;
                public swigDirectorDisconnect(): void;
                public setTimeout(timeout: number): void;
                public constructor();
                public setBaseURL(baseURL: string): void;
                public buildTileURL(baseURL: string, tile: com.massifmaps.core.MapTile): string;
                public constructor(minZoom: number, maxZoom: number, baseURL: string);
                public setHTTPHeaders(headers: com.massifmaps.core.StringMap): void;
                public loadTile(mapTile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public setTMSScheme(tmsScheme: boolean): void;
                public getHTTPHeaders(): com.massifmaps.core.StringMap;
                public constructor(minZoom: number, maxZoom: number);
                public isTMSScheme(): boolean;
                public setMaxAgeHeaderCheck(maxAgeCheck: boolean): void;
                public getTimeout(): number;
                public setSubdomains(subdomains: com.massifmaps.core.StringVector): void;
                public isMaxAgeHeaderCheck(): boolean;
                public getBaseURL(): string;
                public getSubdomains(): com.massifmaps.core.StringVector;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class LocalSpatialIndexType {
                public static class: java.lang.Class<com.massifmaps.datasources.LocalSpatialIndexType>;
                public static LOCAL_SPATIAL_INDEX_TYPE_NULL: com.massifmaps.datasources.LocalSpatialIndexType;
                public static LOCAL_SPATIAL_INDEX_TYPE_KDTREE: com.massifmaps.datasources.LocalSpatialIndexType;
                public swigValue(): number;
                public static values(): androidNative.Array<com.massifmaps.datasources.LocalSpatialIndexType>;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.datasources.LocalSpatialIndexType;
                public static swigToEnum(swigEnum: number): com.massifmaps.datasources.LocalSpatialIndexType;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class LocalVectorDataSource extends com.massifmaps.datasources.VectorDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.LocalVectorDataSource>;
                public getAll(): com.massifmaps.vectorelements.VectorElementVector;
                public swigDirectorDisconnect(): void;
                public constructor(projection: com.massifmaps.projections.Projection);
                public remove(element: com.massifmaps.vectorelements.VectorElement): boolean;
                public clear(): void;
                public getGeometrySimplifier(): com.massifmaps.geometry.GeometrySimplifier;
                public getDataExtent(): com.massifmaps.core.MapBounds;
                public removeAll(elements: com.massifmaps.vectorelements.VectorElementVector): boolean;
                public loadElements(cullState: com.massifmaps.renderers.components.CullState): com.massifmaps.datasources.components.VectorData;
                public add(element: com.massifmaps.vectorelements.VectorElement): void;
                public getFeatureCollection(): com.massifmaps.geometry.FeatureCollection;
                public setAll(elements: com.massifmaps.vectorelements.VectorElementVector): void;
                public setGeometrySimplifier(simplifier: com.massifmaps.geometry.GeometrySimplifier): void;
                public addFeatureCollection(featureCollection: com.massifmaps.geometry.FeatureCollection, style: com.massifmaps.styles.Style): void;
                public addAll(elements: com.massifmaps.vectorelements.VectorElementVector): void;
                public constructor(projection: com.massifmaps.projections.Projection, spatialIndexType: com.massifmaps.datasources.LocalSpatialIndexType);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class MBTilesScheme {
                public static class: java.lang.Class<com.massifmaps.datasources.MBTilesScheme>;
                public static MBTILES_SCHEME_TMS: com.massifmaps.datasources.MBTilesScheme;
                public static MBTILES_SCHEME_XYZ: com.massifmaps.datasources.MBTilesScheme;
                public static values(): androidNative.Array<com.massifmaps.datasources.MBTilesScheme>;
                public swigValue(): number;
                public static swigToEnum(swigEnum: number): com.massifmaps.datasources.MBTilesScheme;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.datasources.MBTilesScheme;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class MBTilesTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.MBTilesTileDataSource>;
                public getTileMask(): string;
                public constructor(minZoom: number, maxZoom: number, path: string);
                public swigDirectorDisconnect(): void;
                public constructor();
                public getMetaData(): com.massifmaps.core.StringMap;
                public constructor(path: string);
                public getMetaData(key: string): string;
                public loadTile(mapTile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public getDataExtent(): com.massifmaps.core.MapBounds;
                public constructor(minZoom: number, maxZoom: number, path: string, scheme: com.massifmaps.datasources.MBTilesScheme);
                public constructor(minZoom: number, maxZoom: number);
                public getMaxZoom(): number;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class MapTilerOnlineTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.MapTilerOnlineTileDataSource>;
                public swigDirectorDisconnect(): void;
                public constructor(minZoom: number, maxZoom: number);
                public getCustomServiceURL(): string;
                public getTimeout(): number;
                public setTimeout(timeout: number): void;
                public constructor();
                public setCustomServiceURL(serviceURL: string): void;
                public constructor(key: string);
                public loadTile(mapTile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class MemoryCacheTileDataSource extends com.massifmaps.datasources.CacheTileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.MemoryCacheTileDataSource>;
                public swigDirectorDisconnect(): void;
                public constructor(minZoom: number, maxZoom: number);
                public getCapacity(): number;
                public setCapacity(capacityInBytes: number): void;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource);
                public constructor();
                public clear(): void;
                public loadTile(mapTile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class MergedMBVTTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.MergedMBVTTileDataSource>;
                public getTileMask(): string;
                public swigDirectorDisconnect(): void;
                public constructor(minZoom: number, maxZoom: number);
                public loadTile(tile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public constructor(dataSource1: com.massifmaps.datasources.TileDataSource, dataSource2: com.massifmaps.datasources.TileDataSource);
                public getMaxZoom(): number;
                public constructor();
                public getDataExtent(): com.massifmaps.core.MapBounds;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class MultiTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.MultiTileDataSource>;
                public swigDirectorDisconnect(): void;
                public constructor(minZoom: number, maxZoom: number);
                public remove(datasource: com.massifmaps.datasources.TileDataSource): boolean;
                public add(datasource: com.massifmaps.datasources.TileDataSource): void;
                public getMaxZoom(): number;
                public constructor();
                public add(datasource: com.massifmaps.datasources.TileDataSource, tileMask: string): void;
                public loadTile(mapTile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public constructor(maxOpenedPackages: number);
                public getDataExtent(): com.massifmaps.core.MapBounds;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class OrderedTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.OrderedTileDataSource>;
                public swigDirectorDisconnect(): void;
                public constructor(minZoom: number, maxZoom: number);
                public loadTile(tile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public constructor(dataSource1: com.massifmaps.datasources.TileDataSource, dataSource2: com.massifmaps.datasources.TileDataSource);
                public getMaxZoom(): number;
                public constructor();
                public getMetaData(key: string): string;
                public getDataExtent(): com.massifmaps.core.MapBounds;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class PMTilesTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.PMTilesTileDataSource>;
                public constructor(minZoom: number, maxZoom: number, path: string);
                public swigDirectorDisconnect(): void;
                public constructor(minZoom: number, maxZoom: number);
                public getMetaData(): string;
                public getMaxZoom(): number;
                public constructor();
                public constructor(path: string);
                public getMetaData(key: string): string;
                public loadTile(mapTile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public getDataExtent(): com.massifmaps.core.MapBounds;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class PackageManagerTileDataSource extends com.massifmaps.datasources.TileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.PackageManagerTileDataSource>;
                public swigDirectorDisconnect(): void;
                public constructor(minZoom: number, maxZoom: number);
                public constructor();
                public getPackageManager(): com.massifmaps.packagemanager.PackageManager;
                public constructor(packageManager: com.massifmaps.packagemanager.PackageManager);
                public loadTile(mapTile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class PersistentCacheTileDataSource extends com.massifmaps.datasources.CacheTileDataSource {
                public static class: java.lang.Class<com.massifmaps.datasources.PersistentCacheTileDataSource>;
                public swigDirectorDisconnect(): void;
                public stopAllDownloads(): void;
                public setCapacity(capacityInBytes: number): void;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource);
                public constructor();
                public isCacheOnlyMode(): boolean;
                public clear(): void;
                public loadTile(mapTile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public startDownloadArea(mapBounds: com.massifmaps.core.MapBounds, minZoom: number, maxZoom: number, fetchDelay: number, tileDownloadListener: com.massifmaps.datasources.TileDownloadListener): void;
                public close(): void;
                public constructor(minZoom: number, maxZoom: number);
                public setCacheOnlyMode(enabled: boolean): void;
                public getCapacity(): number;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource, databasePath: string);
                public isOpen(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class TileDataSource extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.datasources.TileDataSource>;
                public swigCMemOwn: boolean;
                public setEncoding(encoding: string): void;
                public swigDirectorDisconnect(): void;
                public loadTile(tile: com.massifmaps.core.MapTile): com.massifmaps.datasources.components.TileData;
                public constructor();
                public getMetaData(key: string): string;
                public getProjection(): com.massifmaps.projections.Projection;
                public getDataExtent(): com.massifmaps.core.MapBounds;
                public getEncoding(): string;
                public constructor(minZoom: number, maxZoom: number);
                public setMaxOverzoomLevel(overzoomLevel: number): void;
                public getMaxOverzoomLevel(): number;
                public getMaxZoom(): number;
                public notifyTilesChanged(removeTiles: boolean): void;
                public buildTagValues(tile: com.massifmaps.core.MapTile): com.massifmaps.core.StringMap;
                public getMaxZoomWithOverzoom(): number;
                public isMaxOverzoomLevelSet(): boolean;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class TileDownloadListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.datasources.TileDownloadListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public onDownloadCompleted(): void;
                public constructor();
                public onDownloadStarting(tileCount: number): void;
                public onDownloadProgress(progress: number): void;
                public onDownloadFailed(tile: com.massifmaps.core.MapTile): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export class VectorDataSource extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.datasources.VectorDataSource>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public loadElements(cullState: com.massifmaps.renderers.components.CullState): com.massifmaps.datasources.components.VectorData;
                public constructor(projection: com.massifmaps.projections.Projection);
                public getProjection(): com.massifmaps.projections.Projection;
                public getDataExtent(): com.massifmaps.core.MapBounds;
                public notifyElementsChanged(): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export namespace components {
                export class TileData extends java.lang.Object {
                    public static class: java.lang.Class<com.massifmaps.datasources.components.TileData>;
                    public swigCMemOwn: boolean;
                    public getData(): com.massifmaps.core.BinaryData;
                    public equals(obj: any): boolean;
                    public isOverZoom(): boolean;
                    public setMaxAge(maxAge: number): void;
                    public isReplaceWithParent(): boolean;
                    public getMaxAge(): number;
                    public setIsOverZoom(flag: boolean): void;
                    public setReplaceWithParent(flag: boolean): void;
                    public hashCode(): number;
                    public constructor(data: com.massifmaps.core.BinaryData);
                }
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace datasources {
            export namespace components {
                export class VectorData extends java.lang.Object {
                    public static class: java.lang.Class<com.massifmaps.datasources.components.VectorData>;
                    public swigCMemOwn: boolean;
                    public equals(obj: any): boolean;
                    public hashCode(): number;
                    public constructor(elements: com.massifmaps.vectorelements.VectorElementVector);
                    public getElements(): com.massifmaps.vectorelements.VectorElementVector;
                }
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class GeocodingAddress extends com.massifmaps.core.Address {
                public static class: java.lang.Class<com.massifmaps.geocoding.GeocodingAddress>;
                public constructor(country: string, region: string, county: string, locality: string, neighbourhood: string, street: string, postcode: string, houseNumber: string, name: string, categories: com.massifmaps.core.StringVector);
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class GeocodingRequest extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geocoding.GeocodingRequest>;
                public swigCMemOwn: boolean;
                public getCustomParameter(param: string): com.massifmaps.core.Variant;
                public toString(): string;
                public constructor(projection: com.massifmaps.projections.Projection, query: string);
                public setLocation(pos: com.massifmaps.core.MapPos): void;
                public getLocationRadius(): number;
                public equals(obj: any): boolean;
                public setLocationRadius(radius: number): void;
                public hashCode(): number;
                public getQuery(): string;
                public setCustomParameter(param: string, value: com.massifmaps.core.Variant): void;
                public getProjection(): com.massifmaps.projections.Projection;
                public getLocation(): com.massifmaps.core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class GeocodingResult extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geocoding.GeocodingResult>;
                public swigCMemOwn: boolean;
                public toString(): string;
                public getFeatureCollection(): com.massifmaps.geometry.FeatureCollection;
                public getAddress(): com.massifmaps.geocoding.GeocodingAddress;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public constructor(projection: com.massifmaps.projections.Projection, address: com.massifmaps.geocoding.GeocodingAddress, rank: number, featureCollection: com.massifmaps.geometry.FeatureCollection);
                public getRank(): number;
                public getProjection(): com.massifmaps.projections.Projection;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class GeocodingResultVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geocoding.GeocodingResultVector>;
                public swigCMemOwn: boolean;
                public add(x: com.massifmaps.geocoding.GeocodingResult): void;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public get(i: number): com.massifmaps.geocoding.GeocodingResult;
                public set(i: number, val: com.massifmaps.geocoding.GeocodingResult): void;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class GeocodingService extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geocoding.GeocodingService>;
                public swigCMemOwn: boolean;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public isAutocomplete(): boolean;
                public setAutocomplete(autocomplete: boolean): void;
                public setMaxResults(maxResults: number): void;
                public constructor();
                public getMaxResults(): number;
                public calculateAddresses(request: com.massifmaps.geocoding.GeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public getLanguage(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class MapBoxOnlineGeocodingService extends com.massifmaps.geocoding.GeocodingService {
                public static class: java.lang.Class<com.massifmaps.geocoding.MapBoxOnlineGeocodingService>;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public isAutocomplete(): boolean;
                public setAutocomplete(autocomplete: boolean): void;
                public getCustomServiceURL(): string;
                public setMaxResults(maxResults: number): void;
                public constructor();
                public setCustomServiceURL(serviceURL: string): void;
                public getMaxResults(): number;
                public calculateAddresses(request: com.massifmaps.geocoding.GeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public getLanguage(): string;
                public constructor(accessToken: string);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class MapBoxOnlineReverseGeocodingService extends com.massifmaps.geocoding.ReverseGeocodingService {
                public static class: java.lang.Class<com.massifmaps.geocoding.MapBoxOnlineReverseGeocodingService>;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public getCustomServiceURL(): string;
                public calculateAddresses(request: com.massifmaps.geocoding.ReverseGeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public constructor();
                public setCustomServiceURL(serviceURL: string): void;
                public getLanguage(): string;
                public constructor(accessToken: string);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class MultiOSMOfflineGeocodingService extends com.massifmaps.geocoding.GeocodingService {
                public static class: java.lang.Class<com.massifmaps.geocoding.MultiOSMOfflineGeocodingService>;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public add(database: string): void;
                public isAutocomplete(): boolean;
                public setAutocomplete(autocomplete: boolean): void;
                public setMaxResults(maxResults: number): void;
                public constructor();
                public getMaxResults(): number;
                public calculateAddresses(request: com.massifmaps.geocoding.GeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public getLanguage(): string;
                public remove(database: string): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class MultiOSMOfflineReverseGeocodingService extends com.massifmaps.geocoding.ReverseGeocodingService {
                public static class: java.lang.Class<com.massifmaps.geocoding.MultiOSMOfflineReverseGeocodingService>;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public add(database: string): void;
                public calculateAddresses(request: com.massifmaps.geocoding.ReverseGeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public constructor();
                public getLanguage(): string;
                public remove(database: string): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class OSMOfflineGeocodingService extends com.massifmaps.geocoding.GeocodingService {
                public static class: java.lang.Class<com.massifmaps.geocoding.OSMOfflineGeocodingService>;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public isAutocomplete(): boolean;
                public setAutocomplete(autocomplete: boolean): void;
                public setMaxResults(maxResults: number): void;
                public constructor();
                public constructor(path: string);
                public getMaxResults(): number;
                public calculateAddresses(request: com.massifmaps.geocoding.GeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public getLanguage(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class OSMOfflineReverseGeocodingService extends com.massifmaps.geocoding.ReverseGeocodingService {
                public static class: java.lang.Class<com.massifmaps.geocoding.OSMOfflineReverseGeocodingService>;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public calculateAddresses(request: com.massifmaps.geocoding.ReverseGeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public constructor();
                public constructor(path: string);
                public getLanguage(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class PackageManagerGeocodingService extends com.massifmaps.geocoding.GeocodingService {
                public static class: java.lang.Class<com.massifmaps.geocoding.PackageManagerGeocodingService>;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public isAutocomplete(): boolean;
                public setAutocomplete(autocomplete: boolean): void;
                public setMaxResults(maxResults: number): void;
                public constructor();
                public constructor(packageManager: com.massifmaps.packagemanager.PackageManager);
                public getMaxResults(): number;
                public calculateAddresses(request: com.massifmaps.geocoding.GeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public getLanguage(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class PackageManagerReverseGeocodingService extends com.massifmaps.geocoding.ReverseGeocodingService {
                public static class: java.lang.Class<com.massifmaps.geocoding.PackageManagerReverseGeocodingService>;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public calculateAddresses(request: com.massifmaps.geocoding.ReverseGeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public constructor();
                public constructor(packageManager: com.massifmaps.packagemanager.PackageManager);
                public getLanguage(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class PeliasOnlineGeocodingService extends com.massifmaps.geocoding.GeocodingService {
                public static class: java.lang.Class<com.massifmaps.geocoding.PeliasOnlineGeocodingService>;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public isAutocomplete(): boolean;
                public setAutocomplete(autocomplete: boolean): void;
                public getCustomServiceURL(): string;
                public setMaxResults(maxResults: number): void;
                public constructor();
                public setCustomServiceURL(serviceURL: string): void;
                public getMaxResults(): number;
                public calculateAddresses(request: com.massifmaps.geocoding.GeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public getLanguage(): string;
                public constructor(apiKey: string);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class PeliasOnlineReverseGeocodingService extends com.massifmaps.geocoding.ReverseGeocodingService {
                public static class: java.lang.Class<com.massifmaps.geocoding.PeliasOnlineReverseGeocodingService>;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public getCustomServiceURL(): string;
                public calculateAddresses(request: com.massifmaps.geocoding.ReverseGeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public constructor();
                public setCustomServiceURL(serviceURL: string): void;
                public getLanguage(): string;
                public constructor(apiKey: string);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class ReverseGeocodingRequest extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geocoding.ReverseGeocodingRequest>;
                public swigCMemOwn: boolean;
                public getCustomParameter(param: string): com.massifmaps.core.Variant;
                public toString(): string;
                public equals(obj: any): boolean;
                public setSearchRadius(radius: number): void;
                public constructor(projection: com.massifmaps.projections.Projection, location: com.massifmaps.core.MapPos);
                public hashCode(): number;
                public setCustomParameter(param: string, value: com.massifmaps.core.Variant): void;
                public getSearchRadius(): number;
                public getLocation(): com.massifmaps.core.MapPos;
                public getProjection(): com.massifmaps.projections.Projection;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class ReverseGeocodingService extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geocoding.ReverseGeocodingService>;
                public swigCMemOwn: boolean;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public calculateAddresses(request: com.massifmaps.geocoding.ReverseGeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public constructor();
                public getLanguage(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class TomTomOnlineGeocodingService extends com.massifmaps.geocoding.GeocodingService {
                public static class: java.lang.Class<com.massifmaps.geocoding.TomTomOnlineGeocodingService>;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public isAutocomplete(): boolean;
                public setAutocomplete(autocomplete: boolean): void;
                public getCustomServiceURL(): string;
                public setMaxResults(maxResults: number): void;
                public constructor();
                public setCustomServiceURL(serviceURL: string): void;
                public getMaxResults(): number;
                public calculateAddresses(request: com.massifmaps.geocoding.GeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public getLanguage(): string;
                public constructor(apiKey: string);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geocoding {
            export class TomTomOnlineReverseGeocodingService extends com.massifmaps.geocoding.ReverseGeocodingService {
                public static class: java.lang.Class<com.massifmaps.geocoding.TomTomOnlineReverseGeocodingService>;
                public setLanguage(lang: string): void;
                public swigDirectorDisconnect(): void;
                public getCustomServiceURL(): string;
                public calculateAddresses(request: com.massifmaps.geocoding.ReverseGeocodingRequest): com.massifmaps.geocoding.GeocodingResultVector;
                public constructor();
                public setCustomServiceURL(serviceURL: string): void;
                public getLanguage(): string;
                public constructor(apiKey: string);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class DouglasPeuckerGeometrySimplifier extends com.massifmaps.geometry.GeometrySimplifier {
                public static class: java.lang.Class<com.massifmaps.geometry.DouglasPeuckerGeometrySimplifier>;
                public constructor(tolerance: number);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class Feature extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.Feature>;
                public swigCMemOwn: boolean;
                public getGeometry(): com.massifmaps.geometry.Geometry;
                public getProperties(): com.massifmaps.core.Variant;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public constructor(geometry: com.massifmaps.geometry.Geometry, properties: com.massifmaps.core.Variant);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class FeatureBuilder extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.FeatureBuilder>;
                public swigCMemOwn: boolean;
                public getGeometry(): com.massifmaps.geometry.Geometry;
                public getPropertyValue(key: string): com.massifmaps.core.Variant;
                public buildFeature(): com.massifmaps.geometry.Feature;
                public constructor();
                public equals(obj: any): boolean;
                public setGeometry(geometry: com.massifmaps.geometry.Geometry): void;
                public hashCode(): number;
                public setPropertyValue(key: string, value: com.massifmaps.core.Variant): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class FeatureCollection extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.FeatureCollection>;
                public swigCMemOwn: boolean;
                public getFeature(index: number): com.massifmaps.geometry.Feature;
                public getFeatureCount(): number;
                public constructor(features: com.massifmaps.geometry.FeatureVector);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class FeatureVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.FeatureVector>;
                public swigCMemOwn: boolean;
                public add(x: com.massifmaps.geometry.Feature): void;
                public set(i: number, val: com.massifmaps.geometry.Feature): void;
                public constructor(n: number);
                public get(i: number): com.massifmaps.geometry.Feature;
                public constructor();
                public size(): number;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class GeoJSONGeometryReader extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.GeoJSONGeometryReader>;
                public swigCMemOwn: boolean;
                public setTargetProjection(proj: com.massifmaps.projections.Projection): void;
                public readFeatureCollection(geoJSON: string): com.massifmaps.geometry.FeatureCollection;
                public getTargetProjection(): com.massifmaps.projections.Projection;
                public readFeature(geoJSON: string): com.massifmaps.geometry.Feature;
                public readGeometry(geoJSON: string): com.massifmaps.geometry.Geometry;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class GeoJSONGeometryWriter extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.GeoJSONGeometryWriter>;
                public swigCMemOwn: boolean;
                public getSourceProjection(): com.massifmaps.projections.Projection;
                public writeFeature(feature: com.massifmaps.geometry.Feature): string;
                public writeFeatureCollection(featureCollection: com.massifmaps.geometry.FeatureCollection): string;
                public setSourceProjection(proj: com.massifmaps.projections.Projection): void;
                public getZ(): boolean;
                public writeGeometry(geometry: com.massifmaps.geometry.Geometry): string;
                public setZ(z: boolean): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class Geometry extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.Geometry>;
                public swigCMemOwn: boolean;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getBounds(): com.massifmaps.core.MapBounds;
                public getCenterPos(): com.massifmaps.core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class GeometrySimplifier extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.GeometrySimplifier>;
                public swigCMemOwn: boolean;
                public equals(obj: any): boolean;
                public hashCode(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class GeometryVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.GeometryVector>;
                public swigCMemOwn: boolean;
                public get(i: number): com.massifmaps.geometry.Geometry;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public set(i: number, val: com.massifmaps.geometry.Geometry): void;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public add(x: com.massifmaps.geometry.Geometry): void;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class LineGeometry extends com.massifmaps.geometry.Geometry {
                public static class: java.lang.Class<com.massifmaps.geometry.LineGeometry>;
                public getPoses(): com.massifmaps.core.MapPosVector;
                public constructor(poses: com.massifmaps.core.MapPosVector);
                public getCenterPos(): com.massifmaps.core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class LineGeometryVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.LineGeometryVector>;
                public swigCMemOwn: boolean;
                public add(x: com.massifmaps.geometry.LineGeometry): void;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public set(i: number, val: com.massifmaps.geometry.LineGeometry): void;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public get(i: number): com.massifmaps.geometry.LineGeometry;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class ManeuverArrowBuilder extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.ManeuverArrowBuilder>;
                public swigCMemOwn: boolean;
                public setLengthAfter(length: number): void;
                public buildArrow(projection: com.massifmaps.projections.Projection, points: com.massifmaps.core.MapPosVector, maneuverPos: com.massifmaps.core.MapPos): com.massifmaps.geometry.FeatureCollection;
                public getLengthBefore(): number;
                public setLengthBefore(length: number): void;
                public buildArrowAtIndex(projection: com.massifmaps.projections.Projection, points: com.massifmaps.core.MapPosVector, maneuverIndex: number): com.massifmaps.geometry.FeatureCollection;
                public getLengthAfter(): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class MultiGeometry extends com.massifmaps.geometry.Geometry {
                public static class: java.lang.Class<com.massifmaps.geometry.MultiGeometry>;
                public getGeometryCount(): number;
                public constructor(geometries: com.massifmaps.geometry.GeometryVector);
                public getCenterPos(): com.massifmaps.core.MapPos;
                public getGeometry(index: number): com.massifmaps.geometry.Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class MultiLineGeometry extends com.massifmaps.geometry.MultiGeometry {
                public static class: java.lang.Class<com.massifmaps.geometry.MultiLineGeometry>;
                public getGeometry(index: number): com.massifmaps.geometry.LineGeometry;
                public constructor(geometries: com.massifmaps.geometry.LineGeometryVector);
                public constructor(geometries: com.massifmaps.geometry.GeometryVector);
                public getGeometry(index: number): com.massifmaps.geometry.Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class MultiPointGeometry extends com.massifmaps.geometry.MultiGeometry {
                public static class: java.lang.Class<com.massifmaps.geometry.MultiPointGeometry>;
                public constructor(geometries: com.massifmaps.geometry.PointGeometryVector);
                public getGeometry(index: number): com.massifmaps.geometry.PointGeometry;
                public constructor(geometries: com.massifmaps.geometry.GeometryVector);
                public getGeometry(index: number): com.massifmaps.geometry.Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class MultiPolygonGeometry extends com.massifmaps.geometry.MultiGeometry {
                public static class: java.lang.Class<com.massifmaps.geometry.MultiPolygonGeometry>;
                public constructor(geometries: com.massifmaps.geometry.PolygonGeometryVector);
                public constructor(geometries: com.massifmaps.geometry.GeometryVector);
                public getGeometry(index: number): com.massifmaps.geometry.Geometry;
                public getGeometry(index: number): com.massifmaps.geometry.PolygonGeometry;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class PointGeometry extends com.massifmaps.geometry.Geometry {
                public static class: java.lang.Class<com.massifmaps.geometry.PointGeometry>;
                public getPos(): com.massifmaps.core.MapPos;
                public constructor(pos: com.massifmaps.core.MapPos);
                public getCenterPos(): com.massifmaps.core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class PointGeometryVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.PointGeometryVector>;
                public swigCMemOwn: boolean;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public add(x: com.massifmaps.geometry.PointGeometry): void;
                public set(i: number, val: com.massifmaps.geometry.PointGeometry): void;
                public get(i: number): com.massifmaps.geometry.PointGeometry;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class PolygonGeometry extends com.massifmaps.geometry.Geometry {
                public static class: java.lang.Class<com.massifmaps.geometry.PolygonGeometry>;
                public getPoses(): com.massifmaps.core.MapPosVector;
                public getRings(): com.massifmaps.core.MapPosVectorVector;
                public constructor(poses: com.massifmaps.core.MapPosVector, holes: com.massifmaps.core.MapPosVectorVector);
                public getHoles(): com.massifmaps.core.MapPosVectorVector;
                public constructor(rings: com.massifmaps.core.MapPosVectorVector);
                public constructor(poses: com.massifmaps.core.MapPosVector);
                public getCenterPos(): com.massifmaps.core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class PolygonGeometryVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.PolygonGeometryVector>;
                public swigCMemOwn: boolean;
                public get(i: number): com.massifmaps.geometry.PolygonGeometry;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public add(x: com.massifmaps.geometry.PolygonGeometry): void;
                public set(i: number, val: com.massifmaps.geometry.PolygonGeometry): void;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class VectorTileFeature extends com.massifmaps.geometry.Feature {
                public static class: java.lang.Class<com.massifmaps.geometry.VectorTileFeature>;
                public setDistance(value: number): void;
                public getId(): number;
                public constructor(id: number, mapTile: com.massifmaps.core.MapTile, layerName: string, geometry: com.massifmaps.geometry.Geometry, properties: com.massifmaps.core.Variant);
                public getLayerName(): string;
                public equals(obj: any): boolean;
                public getMapTile(): com.massifmaps.core.MapTile;
                public hashCode(): number;
                public constructor(geometry: com.massifmaps.geometry.Geometry, properties: com.massifmaps.core.Variant);
                public getDistance(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class VectorTileFeatureBuilder extends com.massifmaps.geometry.FeatureBuilder {
                public static class: java.lang.Class<com.massifmaps.geometry.VectorTileFeatureBuilder>;
                public getId(): number;
                public setLayerName(layerName: string): void;
                public getLayerName(): string;
                public constructor();
                public setMapTile(mapTile: com.massifmaps.core.MapTile): void;
                public setId(id: number): void;
                public equals(obj: any): boolean;
                public getMapTile(): com.massifmaps.core.MapTile;
                public hashCode(): number;
                public buildVectorTileFeature(): com.massifmaps.geometry.VectorTileFeature;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class VectorTileFeatureCollection extends com.massifmaps.geometry.FeatureCollection {
                public static class: java.lang.Class<com.massifmaps.geometry.VectorTileFeatureCollection>;
                public constructor(features: com.massifmaps.geometry.VectorTileFeatureVector);
                public getFeature(index: number): com.massifmaps.geometry.Feature;
                public getFeature(index: number): com.massifmaps.geometry.VectorTileFeature;
                public constructor(features: com.massifmaps.geometry.FeatureVector);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace geometry {
            export class VectorTileFeatureVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.geometry.VectorTileFeatureVector>;
                public swigCMemOwn: boolean;
                public set(i: number, val: com.massifmaps.geometry.VectorTileFeature): void;
                public get(i: number): com.massifmaps.geometry.VectorTileFeature;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public capacity(): number;
                public clear(): void;
                public add(x: com.massifmaps.geometry.VectorTileFeature): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace graphics {
            export class Bitmap extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.graphics.Bitmap>;
                public swigCMemOwn: boolean;
                public getHeight(): number;
                public getResizedBitmap(width: number, height: number): com.massifmaps.graphics.Bitmap;
                public compressToPNG(): com.massifmaps.core.BinaryData;
                public getPaddedBitmap(xPadding: number, yPadding: number): com.massifmaps.graphics.Bitmap;
                public getSubBitmap(xOffset: number, yOffset: number, width: number, height: number): com.massifmaps.graphics.Bitmap;
                public getColorFormat(): com.massifmaps.graphics.ColorFormat;
                public getWidth(): number;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getRGBABitmap(): com.massifmaps.graphics.Bitmap;
                public constructor(pixelData: com.massifmaps.core.BinaryData, width: number, height: number, colorFormat: com.massifmaps.graphics.ColorFormat, bytesPerRow: number);
                public static createFromCompressed(compressedData: com.massifmaps.core.BinaryData): com.massifmaps.graphics.Bitmap;
                public getBytesPerPixel(): number;
                public compressToInternal(): com.massifmaps.core.BinaryData;
                public getPixelData(): com.massifmaps.core.BinaryData;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace graphics {
            export class Color extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.graphics.Color>;
                public swigCMemOwn: boolean;
                public constructor(r: number, g: number, b: number, a: number);
                public getR(): number;
                public getA(): number;
                public getB(): number;
                public toString(): string;
                public constructor();
                public equals(obj: any): boolean;
                public hashCode(): number;
                public constructor(color: number);
                public getG(): number;
                public getARGB(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace graphics {
            export class ColorFormat {
                public static class: java.lang.Class<com.massifmaps.graphics.ColorFormat>;
                public static COLOR_FORMAT_UNSUPPORTED: com.massifmaps.graphics.ColorFormat;
                public static COLOR_FORMAT_GRAYSCALE: com.massifmaps.graphics.ColorFormat;
                public static COLOR_FORMAT_GRAYSCALE_ALPHA: com.massifmaps.graphics.ColorFormat;
                public static COLOR_FORMAT_RGB: com.massifmaps.graphics.ColorFormat;
                public static COLOR_FORMAT_RGBA: com.massifmaps.graphics.ColorFormat;
                public static COLOR_FORMAT_BGRA: com.massifmaps.graphics.ColorFormat;
                public static COLOR_FORMAT_RGBA_4444: com.massifmaps.graphics.ColorFormat;
                public static COLOR_FORMAT_RGB_565: com.massifmaps.graphics.ColorFormat;
                public static valueOf(name: string): com.massifmaps.graphics.ColorFormat;
                public swigValue(): number;
                public static values(): androidNative.Array<com.massifmaps.graphics.ColorFormat>;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static swigToEnum(swigEnum: number): com.massifmaps.graphics.ColorFormat;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace graphics {
            export class ViewState extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.graphics.ViewState>;
                public swigCMemOwn: boolean;
                public getHeight(): number;
                public setTerrainHeightRange(minZ: number, maxZ: number): void;
                public getZoom(): number;
                public getCameraTilt(): number;
                public setViewTilt(tilt: number): void;
                public getScreenWidth(): number;
                public isCameraChanged(): boolean;
                public getNear(): number;
                public getUnitToDPCoef(): number;
                public getScreenHeight(): number;
                public getUnitToPXCoef(): number;
                public getSkyHorizonNDC(): number;
                public hashCode(): number;
                public getDPI(): number;
                public getTerrainMaxZoom(): number;
                public calculateCameraDistance(): number;
                public calculateViewDistance(options: com.massifmaps.components.Options): number;
                public getAspectRatio(): number;
                public getFar(): number;
                public getWidth(): number;
                public getFOVY(): number;
                public equals(obj: any): boolean;
                public getRotation(): number;
                public getTilt(): number;
                public getZoom0Distance(): number;
                public getDPToPX(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class CelestialEventListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.layers.CelestialEventListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public onCelestialObjectClicked(clickInfo: com.massifmaps.ui.ClickInfo, celestialObject: com.massifmaps.celestial.CelestialObject): boolean;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class CelestialLayer extends com.massifmaps.layers.Layer {
                public static class: java.lang.Class<com.massifmaps.layers.CelestialLayer>;
                public add(object: com.massifmaps.celestial.CelestialObject): void;
                public getCelestialEventListener(): com.massifmaps.layers.CelestialEventListener;
                public remove(object: com.massifmaps.celestial.CelestialObject): boolean;
                public getAll(): com.massifmaps.celestial.CelestialObjectVector;
                public constructor();
                public clear(): void;
                public isUpdateInProgress(): boolean;
                public addAll(objects: com.massifmaps.celestial.CelestialObjectVector): void;
                public setCelestialEventListener(listener: com.massifmaps.layers.CelestialEventListener): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class ClusterBuilderMode {
                public static class: java.lang.Class<com.massifmaps.layers.ClusterBuilderMode>;
                public static CLUSTER_BUILDER_MODE_ELEMENTS: com.massifmaps.layers.ClusterBuilderMode;
                public static CLUSTER_BUILDER_MODE_ELEMENT_COUNT: com.massifmaps.layers.ClusterBuilderMode;
                public swigValue(): number;
                public static valueOf(name: string): com.massifmaps.layers.ClusterBuilderMode;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static values(): androidNative.Array<com.massifmaps.layers.ClusterBuilderMode>;
                public static swigToEnum(swigEnum: number): com.massifmaps.layers.ClusterBuilderMode;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class ClusterElementBuilder extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.layers.ClusterElementBuilder>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public constructor();
                public buildClusterElement(mapPos: com.massifmaps.core.MapPos, elements: com.massifmaps.vectorelements.VectorElementVector): com.massifmaps.vectorelements.VectorElement;
                public buildClusterElement(mapPos: com.massifmaps.core.MapPos, elementCount: number): com.massifmaps.vectorelements.VectorElement;
                public getBuilderMode(): com.massifmaps.layers.ClusterBuilderMode;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class ClusteredVectorLayer extends com.massifmaps.layers.VectorLayer {
                public static class: java.lang.Class<com.massifmaps.layers.ClusteredVectorLayer>;
                public setMinimumClusterDistance(px: number): void;
                public constructor(dataSource: com.massifmaps.datasources.LocalVectorDataSource, clusterElementBuilder: com.massifmaps.layers.ClusterElementBuilder);
                public getMinimumClusterDistance(): number;
                public getMaximumClusterZoom(): number;
                public isAnimatedClusters(): boolean;
                public getClusterElementBuilder(): com.massifmaps.layers.ClusterElementBuilder;
                public expandCluster(clusterElement: com.massifmaps.vectorelements.VectorElement, px: number): boolean;
                public setAnimatedClusters(animated: boolean): void;
                public constructor(dataSource: com.massifmaps.datasources.VectorDataSource);
                public refresh(): void;
                public setMaximumClusterZoom(maxZoom: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class CompositeSourceType {
                public static class: java.lang.Class<com.massifmaps.layers.CompositeSourceType>;
                public static COMPOSITE_SOURCE_TYPE_RASTER: com.massifmaps.layers.CompositeSourceType;
                public static COMPOSITE_SOURCE_TYPE_HILLSHADE: com.massifmaps.layers.CompositeSourceType;
                public static COMPOSITE_SOURCE_TYPE_VECTOR: com.massifmaps.layers.CompositeSourceType;
                public swigValue(): number;
                public static values(): androidNative.Array<com.massifmaps.layers.CompositeSourceType>;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.layers.CompositeSourceType;
                public static swigToEnum(swigEnum: number): com.massifmaps.layers.CompositeSourceType;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class CompositeVectorTileLayer extends com.massifmaps.layers.VectorTileLayer {
                public static class: java.lang.Class<com.massifmaps.layers.CompositeVectorTileLayer>;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource, decoder: com.massifmaps.vectortiles.VectorTileDecoder);
                public removeExternalDataSource(name: string): boolean;
                public getExternalDataSourceNames(): com.massifmaps.core.StringVector;
                public addVectorDataSource(name: string, dataSource: com.massifmaps.datasources.TileDataSource): void;
                public setExternalDataSourceMaxOverzoomLevel(name: string, level: number): void;
                public setZoomLevelBias(bias: number): void;
                public isSinglePassRenderingEnabled(): boolean;
                public addExternalDataSource(name: string, dataSource: com.massifmaps.datasources.TileDataSource, type: com.massifmaps.layers.CompositeSourceType, elevationDecoder: com.massifmaps.rastertiles.ElevationDecoder): void;
                public setSinglePassRenderingEnabled(enabled: boolean): void;
                public clearExternalDataSourceZoomLevelBias(name: string): void;
                public setPreloading(preloading: boolean): void;
                public setExternalDataSourceZoomLevelBias(name: string, bias: number): void;
                public getExternalDataSourceZoomLevelBias(name: string): number;
                public getExternalDataSourceMaxOverzoomLevel(name: string): number;
                public addExternalDataSource(name: string, dataSource: com.massifmaps.datasources.TileDataSource, type: com.massifmaps.layers.CompositeSourceType): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class CustomRasterTileLayer extends com.massifmaps.layers.RasterTileLayer {
                public static class: java.lang.Class<com.massifmaps.layers.CustomRasterTileLayer>;
                public setShaderSource(shaderSource: string): void;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource);
                public getShaderSource(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class EditableVectorLayer extends com.massifmaps.layers.VectorLayer {
                public static class: java.lang.Class<com.massifmaps.layers.EditableVectorLayer>;
                public setSelectedVectorElement(element: com.massifmaps.vectorelements.VectorElement): void;
                public getVectorEditEventListener(): com.massifmaps.layers.VectorEditEventListener;
                public setVectorEditEventListener(listener: com.massifmaps.layers.VectorEditEventListener): void;
                public constructor(dataSource: com.massifmaps.datasources.VectorDataSource);
                public getSelectedVectorElement(): com.massifmaps.vectorelements.VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class HillshadeMethod {
                public static class: java.lang.Class<com.massifmaps.layers.HillshadeMethod>;
                public static STANDARD: com.massifmaps.layers.HillshadeMethod;
                public static COMBINED: com.massifmaps.layers.HillshadeMethod;
                public static IGOR: com.massifmaps.layers.HillshadeMethod;
                public static MULTIDIRECTIONAL: com.massifmaps.layers.HillshadeMethod;
                public static BASIC: com.massifmaps.layers.HillshadeMethod;
                public static values(): androidNative.Array<com.massifmaps.layers.HillshadeMethod>;
                public swigValue(): number;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.layers.HillshadeMethod;
                public static swigToEnum(swigEnum: number): com.massifmaps.layers.HillshadeMethod;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class HillshadeRasterTileLayer extends com.massifmaps.layers.CustomRasterTileLayer {
                public static class: java.lang.Class<com.massifmaps.layers.HillshadeRasterTileLayer>;
                public setHighlightColor(color: com.massifmaps.graphics.Color): void;
                public getIlluminationDirection(): com.massifmaps.core.MapVec;
                public setHillshadeMethod(method: com.massifmaps.layers.HillshadeMethod): void;
                public setShadowColor(color: com.massifmaps.graphics.Color): void;
                public getContourColor(): com.massifmaps.graphics.Color;
                public setNormalMapLightingShader(shader: string): void;
                public setExaggeration(exaggeration: number): void;
                public setContourWidth(width: number): void;
                public setHeightScale(heightScale: number): void;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource, elevationDecoder: com.massifmaps.rastertiles.ElevationDecoder);
                public getIlluminationMapRotationEnabled(): boolean;
                public getElevations(poses: com.massifmaps.core.MapPosVector): com.massifmaps.core.DoubleVector;
                public setContourEnabled(enabled: boolean): void;
                public getExaggeration(): number;
                public getElevation(pos: com.massifmaps.core.MapPos): number;
                public setContrast(contrast: number): void;
                public isContourEnabled(): boolean;
                public setExagerateHeightScaleEnabled(enabled: boolean): void;
                public isTerrainPaintEnabled(): boolean;
                public setTerrainPaintFullDetailEnabled(enabled: boolean): void;
                public getContourInterval(): number;
                public setIlluminationDirection(direction: com.massifmaps.core.MapVec): void;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource);
                public setContourInterval(interval: number): void;
                public setAccentColor(color: com.massifmaps.graphics.Color): void;
                public setElevationEncodingEnabled(enabled: boolean): void;
                public getShadowColor(): com.massifmaps.graphics.Color;
                public getExagerateHeightScaleEnabled(): boolean;
                public setContourColor(color: com.massifmaps.graphics.Color): void;
                public isTerrainPaintFullDetailEnabled(): boolean;
                public setIlluminationMapRotationEnabled(enabled: boolean): void;
                public getContrast(): number;
                public isLegacyHeightScaleEnabled(): boolean;
                public getContourWidth(): number;
                public getNormalMapLightingShader(): string;
                public getHillshadeMethod(): com.massifmaps.layers.HillshadeMethod;
                public getHeightScale(): number;
                public isElevationEncodingEnabled(): boolean;
                public setTerrainPaintEnabled(enabled: boolean): void;
                public getAccentColor(): com.massifmaps.graphics.Color;
                public getHighlightColor(): com.massifmaps.graphics.Color;
                public setLegacyHeightScaleEnabled(enabled: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class Layer extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.layers.Layer>;
                public swigCMemOwn: boolean;
                public isVisible(): boolean;
                public containsMetaDataKey(key: string): boolean;
                public setMetaDataElement(key: string, element: com.massifmaps.core.Variant): void;
                public getVisibleZoomRange(): com.massifmaps.core.MapRange;
                public simulateClick(clickType: com.massifmaps.ui.ClickType, screenPos: com.massifmaps.core.ScreenPos, viewState: com.massifmaps.graphics.ViewState): void;
                public setVisibleZoomRange(range: com.massifmaps.core.MapRange): void;
                public isPostProcessed(): boolean;
                public setMetaData(metaData: com.massifmaps.core.StringVariantMap): void;
                public setCullDelay(delay: number): void;
                public update(cullState: com.massifmaps.renderers.components.CullState): void;
                public hashCode(): number;
                public isUpdateInProgress(): boolean;
                public setVisible(visible: boolean): void;
                public getMetaDataElement(key: string): com.massifmaps.core.Variant;
                public getUpdatePriority(): number;
                public setPostProcessed(postProcessed: boolean): void;
                public setUpdatePriority(priority: number): void;
                public equals(obj: any): boolean;
                public setOpacity(opacity: number): void;
                public refresh(): void;
                public getMetaData(): com.massifmaps.core.StringVariantMap;
                public getOpacity(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class LayerVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.layers.LayerVector>;
                public swigCMemOwn: boolean;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public add(x: com.massifmaps.layers.Layer): void;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
                public get(i: number): com.massifmaps.layers.Layer;
                public set(i: number, val: com.massifmaps.layers.Layer): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class RasterTileEventListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.layers.RasterTileEventListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public constructor();
                public onRasterTileClicked(clickInfo: com.massifmaps.ui.RasterTileClickInfo): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class RasterTileFilterMode {
                public static class: java.lang.Class<com.massifmaps.layers.RasterTileFilterMode>;
                public static RASTER_TILE_FILTER_MODE_NEAREST: com.massifmaps.layers.RasterTileFilterMode;
                public static RASTER_TILE_FILTER_MODE_BILINEAR: com.massifmaps.layers.RasterTileFilterMode;
                public static RASTER_TILE_FILTER_MODE_BICUBIC: com.massifmaps.layers.RasterTileFilterMode;
                public swigValue(): number;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.layers.RasterTileFilterMode;
                public static values(): androidNative.Array<com.massifmaps.layers.RasterTileFilterMode>;
                public static swigToEnum(swigEnum: number): com.massifmaps.layers.RasterTileFilterMode;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class RasterTileLayer extends com.massifmaps.layers.TileLayer {
                public static class: java.lang.Class<com.massifmaps.layers.RasterTileLayer>;
                public getTextureCacheCapacity(): number;
                public getTileBlendingSpeed(): number;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource);
                public setTextureCacheCapacity(capacityInBytes: number): void;
                public setTileFilterMode(filterMode: com.massifmaps.layers.RasterTileFilterMode): void;
                public setTileBlendingSpeed(speed: number): void;
                public setRasterTileEventListener(eventListener: com.massifmaps.layers.RasterTileEventListener): void;
                public getRasterTileEventListener(): com.massifmaps.layers.RasterTileEventListener;
                public getTileFilterMode(): com.massifmaps.layers.RasterTileFilterMode;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class SolidLayer extends com.massifmaps.layers.Layer {
                public static class: java.lang.Class<com.massifmaps.layers.SolidLayer>;
                public getBitmap(): com.massifmaps.graphics.Bitmap;
                public setColor(color: com.massifmaps.graphics.Color): void;
                public constructor(bitmap: com.massifmaps.graphics.Bitmap);
                public getColor(): com.massifmaps.graphics.Color;
                public getBitmapScale(): number;
                public constructor(color: com.massifmaps.graphics.Color);
                public setBitmapScale(scale: number): void;
                public isUpdateInProgress(): boolean;
                public setBitmap(bitmap: com.massifmaps.graphics.Bitmap): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class TileLayer extends com.massifmaps.layers.Layer {
                public static class: java.lang.Class<com.massifmaps.layers.TileLayer>;
                public getTileLoadListener(): com.massifmaps.layers.TileLoadListener;
                public calculateMapTileBounds(mapTile: com.massifmaps.core.MapTile): com.massifmaps.core.MapBounds;
                public getZoomLevelBias(): number;
                public setUTFGridDataSource(dataSource: com.massifmaps.datasources.TileDataSource): void;
                public getTileSubstitutionPolicy(): com.massifmaps.layers.TileSubstitutionPolicy;
                public isSynchronizedRefresh(): boolean;
                public setTileSubstitutionPolicy(policy: com.massifmaps.layers.TileSubstitutionPolicy): void;
                public calculateMapTile(mapPos: com.massifmaps.core.MapPos, zoom: number): com.massifmaps.core.MapTile;
                public isUpdateInProgress(): boolean;
                public getUTFGridEventListener(): com.massifmaps.layers.UTFGridEventListener;
                public setZoomLevelBias(bias: number): void;
                public getMaxStandInLevel(): number;
                public calculateMapTileOrigin(mapTile: com.massifmaps.core.MapTile): com.massifmaps.core.MapPos;
                public setSynchronizedRefresh(synchronizedRefresh: boolean): void;
                public clearTileCaches(all: boolean): void;
                public getMaxOverzoomLevel(): number;
                public setMaxOverzoomLevel(overzoomLevel: number): void;
                public setUTFGridEventListener(utfGridEventListener: com.massifmaps.layers.UTFGridEventListener): void;
                public getUTFGridDataSource(): com.massifmaps.datasources.TileDataSource;
                public setPreloading(preloading: boolean): void;
                public getMaxUnderzoomLevel(): number;
                public setMaxUnderzoomLevel(underzoomLevel: number): void;
                public getDataSource(): com.massifmaps.datasources.TileDataSource;
                public setFrameNr(frameNr: number): void;
                public getFrameNr(): number;
                public isPreloading(): boolean;
                public setMaxStandInLevel(standInLevel: number): void;
                public setTileLoadListener(tileLoadListener: com.massifmaps.layers.TileLoadListener): void;
                public consumeShadowCastersMissingElevation(): number;
                public setTerrainShadowMask(texture: number, invScreenWidth: number, invScreenHeight: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class TileLoadListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.layers.TileLoadListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public constructor();
                public onVisibleTilesLoaded(): void;
                public onPreloadingTilesLoaded(): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class TileSubstitutionPolicy {
                public static class: java.lang.Class<com.massifmaps.layers.TileSubstitutionPolicy>;
                public static TILE_SUBSTITUTION_POLICY_ALL: com.massifmaps.layers.TileSubstitutionPolicy;
                public static TILE_SUBSTITUTION_POLICY_VISIBLE: com.massifmaps.layers.TileSubstitutionPolicy;
                public static TILE_SUBSTITUTION_POLICY_NONE: com.massifmaps.layers.TileSubstitutionPolicy;
                public static swigToEnum(swigEnum: number): com.massifmaps.layers.TileSubstitutionPolicy;
                public swigValue(): number;
                public static valueOf(name: string): com.massifmaps.layers.TileSubstitutionPolicy;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static values(): androidNative.Array<com.massifmaps.layers.TileSubstitutionPolicy>;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class TorqueTileLayer extends com.massifmaps.layers.VectorTileLayer {
                public static class: java.lang.Class<com.massifmaps.layers.TorqueTileLayer>;
                public countVisibleFeatures(frameNr: number): number;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource, decoder: com.massifmaps.vectortiles.VectorTileDecoder);
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource, decoder: com.massifmaps.vectortiles.TorqueTileDecoder);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class UTFGridEventListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.layers.UTFGridEventListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public onUTFGridClicked(clickInfo: com.massifmaps.ui.UTFGridClickInfo): boolean;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class VectorEditEventListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.layers.VectorEditEventListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public onDragMove(dragInfo: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult;
                public onDragStart(dragInfo: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult;
                public onSelectDragPointStyle(element: com.massifmaps.vectorelements.VectorElement, dragPointStyle: com.massifmaps.layers.VectorElementDragPointStyle): com.massifmaps.styles.PointStyle;
                public constructor();
                public onElementDeselected(element: com.massifmaps.vectorelements.VectorElement): void;
                public onDragEnd(dragInfo: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult;
                public onElementModify(element: com.massifmaps.vectorelements.VectorElement, geometry: com.massifmaps.geometry.Geometry): void;
                public onElementDelete(element: com.massifmaps.vectorelements.VectorElement): void;
                public onElementSelect(element: com.massifmaps.vectorelements.VectorElement): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class VectorElementDragPointStyle {
                public static class: java.lang.Class<com.massifmaps.layers.VectorElementDragPointStyle>;
                public static VECTOR_ELEMENT_DRAG_POINT_STYLE_NORMAL: com.massifmaps.layers.VectorElementDragPointStyle;
                public static VECTOR_ELEMENT_DRAG_POINT_STYLE_VIRTUAL: com.massifmaps.layers.VectorElementDragPointStyle;
                public static VECTOR_ELEMENT_DRAG_POINT_STYLE_SELECTED: com.massifmaps.layers.VectorElementDragPointStyle;
                public static values(): androidNative.Array<com.massifmaps.layers.VectorElementDragPointStyle>;
                public swigValue(): number;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.layers.VectorElementDragPointStyle;
                public static swigToEnum(swigEnum: number): com.massifmaps.layers.VectorElementDragPointStyle;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class VectorElementDragResult {
                public static class: java.lang.Class<com.massifmaps.layers.VectorElementDragResult>;
                public static VECTOR_ELEMENT_DRAG_RESULT_IGNORE: com.massifmaps.layers.VectorElementDragResult;
                public static VECTOR_ELEMENT_DRAG_RESULT_STOP: com.massifmaps.layers.VectorElementDragResult;
                public static VECTOR_ELEMENT_DRAG_RESULT_MODIFY: com.massifmaps.layers.VectorElementDragResult;
                public static VECTOR_ELEMENT_DRAG_RESULT_DELETE: com.massifmaps.layers.VectorElementDragResult;
                public static valueOf(name: string): com.massifmaps.layers.VectorElementDragResult;
                public swigValue(): number;
                public static swigToEnum(swigEnum: number): com.massifmaps.layers.VectorElementDragResult;
                public static values(): androidNative.Array<com.massifmaps.layers.VectorElementDragResult>;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class VectorElementEventListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.layers.VectorElementEventListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public constructor();
                public onVectorElementClicked(clickInfo: com.massifmaps.ui.VectorElementClickInfo): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class VectorLayer extends com.massifmaps.layers.Layer {
                public static class: java.lang.Class<com.massifmaps.layers.VectorLayer>;
                public setZBuffering(enabled: boolean): void;
                public setVectorElementEventListener(eventListener: com.massifmaps.layers.VectorElementEventListener): void;
                public constructor(dataSource: com.massifmaps.datasources.VectorDataSource);
                public getVectorElementEventListener(): com.massifmaps.layers.VectorElementEventListener;
                public getDataSource(): com.massifmaps.datasources.VectorDataSource;
                public isZBuffering(): boolean;
                public isUpdateInProgress(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class VectorTileEventListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.layers.VectorTileEventListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public constructor();
                public onVectorTileClicked(clickInfo: com.massifmaps.ui.VectorTileClickInfo): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class VectorTileLayer extends com.massifmaps.layers.TileLayer {
                public static class: java.lang.Class<com.massifmaps.layers.VectorTileLayer>;
                public getTileCacheCapacity(): number;
                public getLabelRenderOrder(): com.massifmaps.layers.VectorTileRenderOrder;
                public setBuildingRenderOrder(renderOrder: com.massifmaps.layers.VectorTileRenderOrder): void;
                public setLabelRenderOrder(renderOrder: com.massifmaps.layers.VectorTileRenderOrder): void;
                public getClickRadius(): number;
                public setRendererLayerFilter(filter: string): void;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource, decoder: com.massifmaps.vectortiles.VectorTileDecoder);
                public getRendererLayerFilter(): string;
                public setClickHandlerLayerFilter(filter: string): void;
                public setVectorTileEventListener(eventListener: com.massifmaps.layers.VectorTileEventListener): void;
                public setTileCacheCapacity(capacityInBytes: number): void;
                public getVectorTileEventListener(): com.massifmaps.layers.VectorTileEventListener;
                public setLabelBlendingSpeed(speed: number): void;
                public getClickHandlerLayerFilter(): string;
                public setLayerBlendingSpeed(speed: number): void;
                public getTileDecoder(): com.massifmaps.vectortiles.VectorTileDecoder;
                public setClickRadius(radius: number): void;
                public getLayerBlendingSpeed(): number;
                public getBuildingRenderOrder(): com.massifmaps.layers.VectorTileRenderOrder;
                public getLabelBlendingSpeed(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace layers {
            export class VectorTileRenderOrder {
                public static class: java.lang.Class<com.massifmaps.layers.VectorTileRenderOrder>;
                public static VECTOR_TILE_RENDER_ORDER_HIDDEN: com.massifmaps.layers.VectorTileRenderOrder;
                public static VECTOR_TILE_RENDER_ORDER_LAYER: com.massifmaps.layers.VectorTileRenderOrder;
                public static VECTOR_TILE_RENDER_ORDER_LAST: com.massifmaps.layers.VectorTileRenderOrder;
                public swigValue(): number;
                public static valueOf(name: string): com.massifmaps.layers.VectorTileRenderOrder;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static swigToEnum(swigEnum: number): com.massifmaps.layers.VectorTileRenderOrder;
                public static values(): androidNative.Array<com.massifmaps.layers.VectorTileRenderOrder>;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace packagemanager {
            export class PackageAction {
                public static class: java.lang.Class<com.massifmaps.packagemanager.PackageAction>;
                public static PACKAGE_ACTION_READY: com.massifmaps.packagemanager.PackageAction;
                public static PACKAGE_ACTION_WAITING: com.massifmaps.packagemanager.PackageAction;
                public static PACKAGE_ACTION_DOWNLOADING: com.massifmaps.packagemanager.PackageAction;
                public static PACKAGE_ACTION_COPYING: com.massifmaps.packagemanager.PackageAction;
                public static PACKAGE_ACTION_REMOVING: com.massifmaps.packagemanager.PackageAction;
                public static swigToEnum(swigEnum: number): com.massifmaps.packagemanager.PackageAction;
                public static valueOf(name: string): com.massifmaps.packagemanager.PackageAction;
                public swigValue(): number;
                public static values(): androidNative.Array<com.massifmaps.packagemanager.PackageAction>;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace packagemanager {
            export class PackageErrorType {
                public static class: java.lang.Class<com.massifmaps.packagemanager.PackageErrorType>;
                public static PACKAGE_ERROR_TYPE_SYSTEM: com.massifmaps.packagemanager.PackageErrorType;
                public static PACKAGE_ERROR_TYPE_CONNECTION: com.massifmaps.packagemanager.PackageErrorType;
                public static PACKAGE_ERROR_TYPE_DOWNLOAD_LIMIT_EXCEEDED: com.massifmaps.packagemanager.PackageErrorType;
                public static PACKAGE_ERROR_TYPE_PACKAGE_TOO_BIG: com.massifmaps.packagemanager.PackageErrorType;
                public static PACKAGE_ERROR_TYPE_NO_OFFLINE_PLAN: com.massifmaps.packagemanager.PackageErrorType;
                public swigValue(): number;
                public static values(): androidNative.Array<com.massifmaps.packagemanager.PackageErrorType>;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static swigToEnum(swigEnum: number): com.massifmaps.packagemanager.PackageErrorType;
                public static valueOf(name: string): com.massifmaps.packagemanager.PackageErrorType;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace packagemanager {
            export class PackageInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.packagemanager.PackageInfo>;
                public swigCMemOwn: boolean;
                public getNames(lang: string): com.massifmaps.core.StringVector;
                public getPackageType(): com.massifmaps.packagemanager.PackageType;
                public getName(): string;
                public equals(obj: any): boolean;
                public getVersion(): number;
                public hashCode(): number;
                public constructor(packageId: string, packageType: com.massifmaps.packagemanager.PackageType, version: number, size: java.math.BigInteger, serverURL: string, tileMask: com.massifmaps.packagemanager.PackageTileMask, metaInfo: com.massifmaps.packagemanager.PackageMetaInfo);
                public getTileMask(): com.massifmaps.packagemanager.PackageTileMask;
                public getPackageId(): string;
                public getSize(): java.math.BigInteger;
                public getMetaInfo(): com.massifmaps.packagemanager.PackageMetaInfo;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace packagemanager {
            export class PackageInfoVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.packagemanager.PackageInfoVector>;
                public swigCMemOwn: boolean;
                public add(x: com.massifmaps.packagemanager.PackageInfo): void;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public set(i: number, val: com.massifmaps.packagemanager.PackageInfo): void;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public get(i: number): com.massifmaps.packagemanager.PackageInfo;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace packagemanager {
            export class PackageManager extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.packagemanager.PackageManager>;
                public swigCMemOwn: boolean;
                public isAreaDownloaded(mapBounds: com.massifmaps.core.MapBounds, zoom: number, projection: com.massifmaps.projections.Projection): boolean;
                public startPackageDownload(packageId: string): boolean;
                public startPackageRemove(packageId: string): boolean;
                public startPackageListDownload(): boolean;
                public getLocalPackages(): com.massifmaps.packagemanager.PackageInfoVector;
                public setPackagePriority(packageId: string, priority: number): void;
                public getServerPackages(): com.massifmaps.packagemanager.PackageInfoVector;
                public getServerPackageListMetaInfo(): com.massifmaps.packagemanager.PackageMetaInfo;
                public getServerPackage(packageId: string): com.massifmaps.packagemanager.PackageInfo;
                public getPackageManagerListener(): com.massifmaps.packagemanager.PackageManagerListener;
                public getLocalPackage(packageId: string): com.massifmaps.packagemanager.PackageInfo;
                public start(): boolean;
                public hashCode(): number;
                public getServerPackageListAge(): number;
                public getLocalPackageStatus(packageId: string, version: number): com.massifmaps.packagemanager.PackageStatus;
                public stop(wait: boolean): void;
                public constructor(packageListURL: string, dataFolder: string, serverEncKey: string, localEncKey: string);
                public suggestPackages(mapPos: com.massifmaps.core.MapPos, projection: com.massifmaps.projections.Projection): com.massifmaps.packagemanager.PackageInfoVector;
                public cancelPackageTasks(packageId: string): void;
                public setPackageManagerListener(listener: com.massifmaps.packagemanager.PackageManagerListener): void;
                public equals(obj: any): boolean;
                public startPackageImport(packageId: string, version: number, packageFileName: string): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace packagemanager {
            export class PackageManagerListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.packagemanager.PackageManagerListener>;
                public swigCMemOwn: boolean;
                public onStyleUpdated(styleName: string): void;
                public swigDirectorDisconnect(): void;
                public onPackageListFailed(): void;
                public onStyleFailed(styleName: string): void;
                public onPackageStatusChanged(id: string, version: number, status: com.massifmaps.packagemanager.PackageStatus): void;
                public onPackageListUpdated(): void;
                public onPackageUpdated(id: string, version: number): void;
                public constructor();
                public onPackageCancelled(id: string, version: number): void;
                public onPackageFailed(id: string, version: number, errorType: com.massifmaps.packagemanager.PackageErrorType): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace packagemanager {
            export class PackageMetaInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.packagemanager.PackageMetaInfo>;
                public swigCMemOwn: boolean;
                public getVariant(): com.massifmaps.core.Variant;
                public equals(obj: any): boolean;
                public constructor(var_: com.massifmaps.core.Variant);
                public hashCode(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace packagemanager {
            export class PackageStatus extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.packagemanager.PackageStatus>;
                public swigCMemOwn: boolean;
                public equals(obj: any): boolean;
                public constructor(currentAction: com.massifmaps.packagemanager.PackageAction, paused: boolean, progress: number);
                public getProgress(): number;
                public hashCode(): number;
                public getCurrentAction(): com.massifmaps.packagemanager.PackageAction;
                public isPaused(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace packagemanager {
            export class PackageTileMask extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.packagemanager.PackageTileMask>;
                public swigCMemOwn: boolean;
                public equals(obj: any): boolean;
                public getMaxZoomLevel(): number;
                public hashCode(): number;
                public getTileStatus(tile: com.massifmaps.core.MapTile): com.massifmaps.packagemanager.PackageTileStatus;
                public getBoundingPolygon(projection: com.massifmaps.projections.Projection): com.massifmaps.geometry.MultiPolygonGeometry;
                public getStringValue(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace packagemanager {
            export class PackageTileStatus {
                public static class: java.lang.Class<com.massifmaps.packagemanager.PackageTileStatus>;
                public static PACKAGE_TILE_STATUS_MISSING: com.massifmaps.packagemanager.PackageTileStatus;
                public static PACKAGE_TILE_STATUS_PARTIAL: com.massifmaps.packagemanager.PackageTileStatus;
                public static PACKAGE_TILE_STATUS_FULL: com.massifmaps.packagemanager.PackageTileStatus;
                public swigValue(): number;
                public static values(): androidNative.Array<com.massifmaps.packagemanager.PackageTileStatus>;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.packagemanager.PackageTileStatus;
                public static swigToEnum(swigEnum: number): com.massifmaps.packagemanager.PackageTileStatus;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace packagemanager {
            export class PackageType {
                public static class: java.lang.Class<com.massifmaps.packagemanager.PackageType>;
                public static PACKAGE_TYPE_MAP: com.massifmaps.packagemanager.PackageType;
                public static PACKAGE_TYPE_ROUTING: com.massifmaps.packagemanager.PackageType;
                public static PACKAGE_TYPE_GEOCODING: com.massifmaps.packagemanager.PackageType;
                public static PACKAGE_TYPE_VALHALLA_ROUTING: com.massifmaps.packagemanager.PackageType;
                public swigValue(): number;
                public static values(): androidNative.Array<com.massifmaps.packagemanager.PackageType>;
                public static valueOf(name: string): com.massifmaps.packagemanager.PackageType;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static swigToEnum(swigEnum: number): com.massifmaps.packagemanager.PackageType;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace projections {
            export class EPSG3857 extends com.massifmaps.projections.Projection {
                public static class: java.lang.Class<com.massifmaps.projections.EPSG3857>;
                public toWgs84(mapPos: com.massifmaps.core.MapPos): com.massifmaps.core.MapPos;
                public getName(): string;
                public constructor();
                public fromWgs84(wgs84Pos: com.massifmaps.core.MapPos): com.massifmaps.core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace projections {
            export class EPSG4326 extends com.massifmaps.projections.Projection {
                public static class: java.lang.Class<com.massifmaps.projections.EPSG4326>;
                public toWgs84(mapPos: com.massifmaps.core.MapPos): com.massifmaps.core.MapPos;
                public getName(): string;
                public constructor();
                public fromWgs84(wgs84Pos: com.massifmaps.core.MapPos): com.massifmaps.core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace projections {
            export class Projection extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.projections.Projection>;
                public swigCMemOwn: boolean;
                public fromWgs84(pos: com.massifmaps.core.MapPos): com.massifmaps.core.MapPos;
                public fromLatLong(lat: number, lng: number): com.massifmaps.core.MapPos;
                public toLatLong(x: number, y: number): com.massifmaps.core.MapPos;
                public getName(): string;
                public getBounds(): com.massifmaps.core.MapBounds;
                public toWgs84(pos: com.massifmaps.core.MapPos): com.massifmaps.core.MapPos;
                public equals(obj: any): boolean;
                public hashCode(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace rastertiles {
            export class ElevationDecoder extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.rastertiles.ElevationDecoder>;
                public swigCMemOwn: boolean;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getMinimumHeightScale(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace rastertiles {
            export class MapBoxElevationDataDecoder extends com.massifmaps.rastertiles.ElevationDecoder {
                public static class: java.lang.Class<com.massifmaps.rastertiles.MapBoxElevationDataDecoder>;
                public swigDirectorDisconnect(): void;
                public getMinimumHeightScale(): number;
                public constructor();
                public equals(obj: any): boolean;
                public hashCode(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace rastertiles {
            export class TerrariumElevationDataDecoder extends com.massifmaps.rastertiles.ElevationDecoder {
                public static class: java.lang.Class<com.massifmaps.rastertiles.TerrariumElevationDataDecoder>;
                public swigDirectorDisconnect(): void;
                public getMinimumHeightScale(): number;
                public constructor();
                public equals(obj: any): boolean;
                public hashCode(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace renderers {
            export class MapRenderer extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.renderers.MapRenderer>;
                public swigCMemOwn: boolean;
                public captureRendering(listener: com.massifmaps.renderers.RendererCaptureListener, waitWhileUpdating: boolean): void;
                public requestRedraw(callerFile: string, callerLine: number): void;
                public requestRedraw(): void;
                public equals(obj: any): boolean;
                public getViewState(): com.massifmaps.graphics.ViewState;
                public setPostProcessEffect(postProcessEffect: com.massifmaps.renderers.PostProcessEffect): void;
                public hashCode(): number;
                public getPostProcessEffect(): com.massifmaps.renderers.PostProcessEffect;
                public getMapRendererListener(): com.massifmaps.renderers.MapRendererListener;
                public setMapRendererListener(listener: com.massifmaps.renderers.MapRendererListener): void;
                public requestRedraw(callerFile: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace renderers {
            export class MapRendererListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.renderers.MapRendererListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public constructor();
                public onBeforeDrawFrame(): void;
                public onSurfaceChanged(width: number, height: number): void;
                public onAfterDrawFrame(): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace renderers {
            export class PostProcessEffect extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.renderers.PostProcessEffect>;
                public swigCMemOwn: boolean;
                public constructor(name: string, fragmentShader: string);
                public setFloatParameter(name: string, value: number): void;
                public isTerrainDepthRequired(): boolean;
                public setTerrainDepthRequired(required: boolean): void;
                public getName(): string;
                public getColorParameter(name: string): com.massifmaps.graphics.Color;
                public getFloatParameter(name: string): number;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public setColorParameter(name: string, color: com.massifmaps.graphics.Color): void;
                public getFragmentShader(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace renderers {
            export class RedrawRequestListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.renderers.RedrawRequestListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public onRedrawRequested(): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace renderers {
            export class RendererCaptureListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.renderers.RendererCaptureListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public constructor();
                public onMapRendered(bitmap: com.massifmaps.graphics.Bitmap): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace renderers {
            export namespace components {
                export class CullState extends java.lang.Object {
                    public static class: java.lang.Class<com.massifmaps.renderers.components.CullState>;
                    public swigCMemOwn: boolean;
                    public getProjectionEnvelope(projection: com.massifmaps.projections.Projection): com.massifmaps.core.MapEnvelope;
                    public equals(obj: any): boolean;
                    public constructor(envelope: com.massifmaps.core.MapEnvelope, viewState: com.massifmaps.graphics.ViewState);
                    public hashCode(): number;
                    public getViewState(): com.massifmaps.graphics.ViewState;
                }
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class MultiValhallaOfflineRoutingService extends com.massifmaps.routing.RoutingService {
                public static class: java.lang.Class<com.massifmaps.routing.MultiValhallaOfflineRoutingService>;
                public calculateRoute(request: com.massifmaps.routing.RoutingRequest): com.massifmaps.routing.RoutingResult;
                public swigDirectorDisconnect(): void;
                public add(database: string): void;
                public addLocale(key: string, json: string): void;
                public constructor();
                public getConfigurationParameter(param: string): com.massifmaps.core.Variant;
                public setProfile(profile: string): void;
                public getProfile(): string;
                public remove(database: string): boolean;
                public matchRoute(request: com.massifmaps.routing.RouteMatchingRequest): com.massifmaps.routing.RouteMatchingResult;
                public setConfigurationParameter(param: string, value: com.massifmaps.core.Variant): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class OSRMOfflineRoutingService extends com.massifmaps.routing.RoutingService {
                public static class: java.lang.Class<com.massifmaps.routing.OSRMOfflineRoutingService>;
                public calculateRoute(request: com.massifmaps.routing.RoutingRequest): com.massifmaps.routing.RoutingResult;
                public swigDirectorDisconnect(): void;
                public constructor();
                public constructor(path: string);
                public setProfile(profile: string): void;
                public getProfile(): string;
                public matchRoute(request: com.massifmaps.routing.RouteMatchingRequest): com.massifmaps.routing.RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class PackageManagerRoutingService extends com.massifmaps.routing.RoutingService {
                public static class: java.lang.Class<com.massifmaps.routing.PackageManagerRoutingService>;
                public calculateRoute(request: com.massifmaps.routing.RoutingRequest): com.massifmaps.routing.RoutingResult;
                public swigDirectorDisconnect(): void;
                public constructor();
                public constructor(packageManager: com.massifmaps.packagemanager.PackageManager);
                public setProfile(profile: string): void;
                public getProfile(): string;
                public matchRoute(request: com.massifmaps.routing.RouteMatchingRequest): com.massifmaps.routing.RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class PackageManagerValhallaRoutingService extends com.massifmaps.routing.RoutingService {
                public static class: java.lang.Class<com.massifmaps.routing.PackageManagerValhallaRoutingService>;
                public calculateRoute(request: com.massifmaps.routing.RoutingRequest): com.massifmaps.routing.RoutingResult;
                public swigDirectorDisconnect(): void;
                public addLocale(key: string, json: string): void;
                public constructor();
                public getConfigurationParameter(param: string): com.massifmaps.core.Variant;
                public constructor(packageManager: com.massifmaps.packagemanager.PackageManager);
                public setProfile(profile: string): void;
                public getProfile(): string;
                public matchRoute(request: com.massifmaps.routing.RouteMatchingRequest): com.massifmaps.routing.RouteMatchingResult;
                public setConfigurationParameter(param: string, value: com.massifmaps.core.Variant): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RouteMatchingEdge extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.routing.RouteMatchingEdge>;
                public swigCMemOwn: boolean;
                public getAttribute(name: string): com.massifmaps.core.Variant;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public containsAttribute(name: string): boolean;
                public toString(): string;
                public constructor();
                public constructor(attributes: com.massifmaps.core.StringVariantMap);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RouteMatchingEdgeVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.routing.RouteMatchingEdgeVector>;
                public swigCMemOwn: boolean;
                public set(i: number, val: com.massifmaps.routing.RouteMatchingEdge): void;
                public get(i: number): com.massifmaps.routing.RouteMatchingEdge;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public add(x: com.massifmaps.routing.RouteMatchingEdge): void;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RouteMatchingPoint extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.routing.RouteMatchingPoint>;
                public swigCMemOwn: boolean;
                public constructor(pos: com.massifmaps.core.MapPos, type: com.massifmaps.routing.RouteMatchingPointType, edgeIndex: number);
                public toString(): string;
                public constructor();
                public getPos(): com.massifmaps.core.MapPos;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getType(): com.massifmaps.routing.RouteMatchingPointType;
                public getEdgeIndex(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RouteMatchingPointType {
                public static class: java.lang.Class<com.massifmaps.routing.RouteMatchingPointType>;
                public static ROUTE_MATCHING_POINT_UNMATCHED: com.massifmaps.routing.RouteMatchingPointType;
                public static ROUTE_MATCHING_POINT_INTERPOLATED: com.massifmaps.routing.RouteMatchingPointType;
                public static ROUTE_MATCHING_POINT_MATCHED: com.massifmaps.routing.RouteMatchingPointType;
                public swigValue(): number;
                public static values(): androidNative.Array<com.massifmaps.routing.RouteMatchingPointType>;
                public static valueOf(name: string): com.massifmaps.routing.RouteMatchingPointType;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static swigToEnum(swigEnum: number): com.massifmaps.routing.RouteMatchingPointType;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RouteMatchingPointVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.routing.RouteMatchingPointVector>;
                public swigCMemOwn: boolean;
                public constructor(n: number);
                public add(x: com.massifmaps.routing.RouteMatchingPoint): void;
                public get(i: number): com.massifmaps.routing.RouteMatchingPoint;
                public set(i: number, val: com.massifmaps.routing.RouteMatchingPoint): void;
                public constructor();
                public size(): number;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RouteMatchingRequest extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.routing.RouteMatchingRequest>;
                public swigCMemOwn: boolean;
                public getCustomParameter(param: string): com.massifmaps.core.Variant;
                public toString(): string;
                public getPointParameter(index: number, param: string): com.massifmaps.core.Variant;
                public getPoints(): com.massifmaps.core.MapPosVector;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public setCustomParameter(param: string, value: com.massifmaps.core.Variant): void;
                public constructor(projection: com.massifmaps.projections.Projection, points: com.massifmaps.core.MapPosVector, accuracy: number);
                public getAccuracy(): number;
                public getProjection(): com.massifmaps.projections.Projection;
                public setPointParameter(index: number, param: string, value: com.massifmaps.core.Variant): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RouteMatchingResult extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.routing.RouteMatchingResult>;
                public swigCMemOwn: boolean;
                public getRawResult(): string;
                public toString(): string;
                public getPoints(): com.massifmaps.core.MapPosVector;
                public equals(obj: any): boolean;
                public constructor(projection: com.massifmaps.projections.Projection, matchingPoints: com.massifmaps.routing.RouteMatchingPointVector, matchingEdges: com.massifmaps.routing.RouteMatchingEdgeVector, rawResult: string);
                public hashCode(): number;
                public getMatchingEdges(): com.massifmaps.routing.RouteMatchingEdgeVector;
                public getMatchingPoints(): com.massifmaps.routing.RouteMatchingPointVector;
                public getProjection(): com.massifmaps.projections.Projection;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RoutingAction {
                public static class: java.lang.Class<com.massifmaps.routing.RoutingAction>;
                public static ROUTING_ACTION_HEAD_ON: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_FINISH: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_NO_TURN: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_GO_STRAIGHT: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_TURN_RIGHT: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_UTURN: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_TURN_LEFT: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_REACH_VIA_LOCATION: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_ENTER_ROUNDABOUT: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_LEAVE_ROUNDABOUT: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_STAY_ON_ROUNDABOUT: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_START_AT_END_OF_STREET: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_ENTER_AGAINST_ALLOWED_DIRECTION: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_LEAVE_AGAINST_ALLOWED_DIRECTION: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_GO_UP: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_GO_DOWN: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_WAIT: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_ENTER_FERRY: com.massifmaps.routing.RoutingAction;
                public static ROUTING_ACTION_LEAVE_FERRY: com.massifmaps.routing.RoutingAction;
                public swigValue(): number;
                public static values(): androidNative.Array<com.massifmaps.routing.RoutingAction>;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.routing.RoutingAction;
                public static swigToEnum(swigEnum: number): com.massifmaps.routing.RoutingAction;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RoutingInstruction extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.routing.RoutingInstruction>;
                public swigCMemOwn: boolean;
                public getPointIndex(): number;
                public toString(): string;
                public getTime(): number;
                public constructor();
                public getGeometryTag(): com.massifmaps.core.Variant;
                public constructor(action: com.massifmaps.routing.RoutingAction, pointIndex: number, streetName: string, instruction: string, turnAngle: number, azimuth: number, distance: number, time: number, geometryTag: com.massifmaps.core.Variant);
                public getTurnAngle(): number;
                public getAction(): com.massifmaps.routing.RoutingAction;
                public equals(obj: any): boolean;
                public getStreetName(): string;
                public hashCode(): number;
                public getDistance(): number;
                public getAzimuth(): number;
                public getInstruction(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RoutingInstructionVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.routing.RoutingInstructionVector>;
                public swigCMemOwn: boolean;
                public add(x: com.massifmaps.routing.RoutingInstruction): void;
                public get(i: number): com.massifmaps.routing.RoutingInstruction;
                public constructor(n: number);
                public set(i: number, val: com.massifmaps.routing.RoutingInstruction): void;
                public constructor();
                public size(): number;
                public capacity(): number;
                public clear(): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RoutingRequest extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.routing.RoutingRequest>;
                public swigCMemOwn: boolean;
                public constructor(projection: com.massifmaps.projections.Projection, points: com.massifmaps.core.MapPosVector);
                public getCustomParameter(param: string): com.massifmaps.core.Variant;
                public toString(): string;
                public getPointParameter(index: number, param: string): com.massifmaps.core.Variant;
                public getPoints(): com.massifmaps.core.MapPosVector;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public setCustomParameter(param: string, value: com.massifmaps.core.Variant): void;
                public getProjection(): com.massifmaps.projections.Projection;
                public setPointParameter(index: number, param: string, value: com.massifmaps.core.Variant): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RoutingResult extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.routing.RoutingResult>;
                public swigCMemOwn: boolean;
                public getRawResult(): string;
                public getTotalTime(): number;
                public getTotalDistance(): number;
                public toString(): string;
                public getPoints(): com.massifmaps.core.MapPosVector;
                public constructor(projection: com.massifmaps.projections.Projection, points: com.massifmaps.core.MapPosVector, instructions: com.massifmaps.routing.RoutingInstructionVector, rawResult: string);
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getInstructions(): com.massifmaps.routing.RoutingInstructionVector;
                public getProjection(): com.massifmaps.projections.Projection;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class RoutingService extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.routing.RoutingService>;
                public swigCMemOwn: boolean;
                public calculateRoute(request: com.massifmaps.routing.RoutingRequest): com.massifmaps.routing.RoutingResult;
                public swigDirectorDisconnect(): void;
                public constructor();
                public setProfile(profile: string): void;
                public getProfile(): string;
                public matchRoute(request: com.massifmaps.routing.RouteMatchingRequest): com.massifmaps.routing.RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class SGREOfflineRoutingService extends com.massifmaps.routing.RoutingService {
                public static class: java.lang.Class<com.massifmaps.routing.SGREOfflineRoutingService>;
                public calculateRoute(request: com.massifmaps.routing.RoutingRequest): com.massifmaps.routing.RoutingResult;
                public swigDirectorDisconnect(): void;
                public setRoutingParameter(param: string, value: number): void;
                public constructor();
                public constructor(projection: com.massifmaps.projections.Projection, featureCollection: com.massifmaps.geometry.FeatureCollection, config: com.massifmaps.core.Variant);
                public setProfile(profile: string): void;
                public getProfile(): string;
                public getRoutingParameter(param: string): number;
                public constructor(geoJSON: com.massifmaps.core.Variant, config: com.massifmaps.core.Variant);
                public matchRoute(request: com.massifmaps.routing.RouteMatchingRequest): com.massifmaps.routing.RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class ValhallaOfflineRoutingService extends com.massifmaps.routing.RoutingService {
                public static class: java.lang.Class<com.massifmaps.routing.ValhallaOfflineRoutingService>;
                public calculateRoute(request: com.massifmaps.routing.RoutingRequest): com.massifmaps.routing.RoutingResult;
                public swigDirectorDisconnect(): void;
                public addLocale(key: string, json: string): void;
                public constructor();
                public getConfigurationParameter(param: string): com.massifmaps.core.Variant;
                public constructor(path: string);
                public setProfile(profile: string): void;
                public getProfile(): string;
                public matchRoute(request: com.massifmaps.routing.RouteMatchingRequest): com.massifmaps.routing.RouteMatchingResult;
                public setConfigurationParameter(param: string, value: com.massifmaps.core.Variant): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace routing {
            export class ValhallaOnlineRoutingService extends com.massifmaps.routing.RoutingService {
                public static class: java.lang.Class<com.massifmaps.routing.ValhallaOnlineRoutingService>;
                public calculateRoute(request: com.massifmaps.routing.RoutingRequest): com.massifmaps.routing.RoutingResult;
                public swigDirectorDisconnect(): void;
                public getCustomServiceURL(): string;
                public setTimeout(timeout: number): void;
                public constructor();
                public setProfile(profile: string): void;
                public getProfile(): string;
                public setHTTPHeaders(headers: com.massifmaps.core.StringMap): void;
                public getHTTPHeaders(): com.massifmaps.core.StringMap;
                public getTimeout(): number;
                public setCustomServiceURL(serviceURL: string): void;
                public constructor(apiKey: string);
                public matchRoute(request: com.massifmaps.routing.RouteMatchingRequest): com.massifmaps.routing.RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace search {
            export class FeatureCollectionSearchService extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.search.FeatureCollectionSearchService>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public setMaxResults(maxResults: number): void;
                public constructor(projection: com.massifmaps.projections.Projection, featureCollection: com.massifmaps.geometry.FeatureCollection);
                public getFeatureCollection(): com.massifmaps.geometry.FeatureCollection;
                public getMaxResults(): number;
                public findFeatures(request: com.massifmaps.search.SearchRequest): com.massifmaps.geometry.FeatureCollection;
                public getProjection(): com.massifmaps.projections.Projection;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace search {
            export class SearchRequest extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.search.SearchRequest>;
                public swigCMemOwn: boolean;
                public getGeometry(): com.massifmaps.geometry.Geometry;
                public getFilterExpression(): string;
                public getRegexFilter(): string;
                public toString(): string;
                public constructor();
                public setProjection(projection: com.massifmaps.projections.Projection): void;
                public setRegexFilter(regex: string): void;
                public equals(obj: any): boolean;
                public setGeometry(geometry: com.massifmaps.geometry.Geometry): void;
                public setSearchRadius(radius: number): void;
                public hashCode(): number;
                public setFilterExpression(expr: string): void;
                public getSearchRadius(): number;
                public getProjection(): com.massifmaps.projections.Projection;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace search {
            export class VectorElementSearchService extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.search.VectorElementSearchService>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public setMaxResults(maxResults: number): void;
                public getMaxResults(): number;
                public constructor(dataSource: com.massifmaps.datasources.VectorDataSource);
                public getDataSource(): com.massifmaps.datasources.VectorDataSource;
                public findElements(request: com.massifmaps.search.SearchRequest): com.massifmaps.vectorelements.VectorElementVector;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace search {
            export class VectorTileSearchService extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.search.VectorTileSearchService>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public setSortByDistance(sortByDistance: boolean): void;
                public constructor(dataSource: com.massifmaps.datasources.TileDataSource, tileDecoder: com.massifmaps.vectortiles.VectorTileDecoder);
                public setMaxResults(maxResults: number): void;
                public getSortByDistance(): boolean;
                public getPreventDuplicates(): boolean;
                public findFeatures(request: com.massifmaps.search.SearchRequest): com.massifmaps.geometry.VectorTileFeatureCollection;
                public setMaxZoom(maxZoom: number): void;
                public getMaxZoom(): number;
                public setPreventDuplicates(preventDuplicates: boolean): void;
                public getLayers(): com.massifmaps.core.StringVector;
                public getTileDecoder(): com.massifmaps.vectortiles.VectorTileDecoder;
                public getMaxResults(): number;
                public setLayers(layers: com.massifmaps.core.StringVector): void;
                public getDataSource(): com.massifmaps.datasources.TileDataSource;
                public setMinZoom(minZoom: number): void;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class AnimationStyle extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.styles.AnimationStyle>;
                public swigCMemOwn: boolean;
                public getPhaseOutDuration(): number;
                public getSizeAnimationType(): com.massifmaps.styles.AnimationType;
                public equals(obj: any): boolean;
                public getFadeAnimationType(): com.massifmaps.styles.AnimationType;
                public getRelativeSpeed(): number;
                public getPhaseInDuration(): number;
                public hashCode(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class AnimationStyleBuilder extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.styles.AnimationStyleBuilder>;
                public swigCMemOwn: boolean;
                public buildStyle(): com.massifmaps.styles.AnimationStyle;
                public getPhaseOutDuration(): number;
                public setSizeAnimationType(animType: com.massifmaps.styles.AnimationType): void;
                public getSizeAnimationType(): com.massifmaps.styles.AnimationType;
                public constructor();
                public setPhaseOutDuration(duration: number): void;
                public getFadeAnimationType(): com.massifmaps.styles.AnimationType;
                public getRelativeSpeed(): number;
                public getPhaseInDuration(): number;
                public setRelativeSpeed(relativeSpeed: number): void;
                public setFadeAnimationType(animType: com.massifmaps.styles.AnimationType): void;
                public setPhaseInDuration(duration: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class AnimationType {
                public static class: java.lang.Class<com.massifmaps.styles.AnimationType>;
                public static ANIMATION_TYPE_NONE: com.massifmaps.styles.AnimationType;
                public static ANIMATION_TYPE_STEP: com.massifmaps.styles.AnimationType;
                public static ANIMATION_TYPE_LINEAR: com.massifmaps.styles.AnimationType;
                public static ANIMATION_TYPE_SMOOTHSTEP: com.massifmaps.styles.AnimationType;
                public static ANIMATION_TYPE_SPRING: com.massifmaps.styles.AnimationType;
                public swigValue(): number;
                public static values(): androidNative.Array<com.massifmaps.styles.AnimationType>;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.styles.AnimationType;
                public static swigToEnum(swigEnum: number): com.massifmaps.styles.AnimationType;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class BalloonPopupButtonStyle extends com.massifmaps.styles.Style {
                public static class: java.lang.Class<com.massifmaps.styles.BalloonPopupButtonStyle>;
                public getTextColor(): com.massifmaps.graphics.Color;
                public getStrokeWidth(): number;
                public getBackgroundColor(): com.massifmaps.graphics.Color;
                public getTextMargins(): com.massifmaps.styles.BalloonPopupMargins;
                public getTextFontName(): string;
                public getCornerRadius(): number;
                public getTextFontSize(): number;
                public getStrokeColor(): com.massifmaps.graphics.Color;
                public getButtonWidth(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class BalloonPopupButtonStyleBuilder extends com.massifmaps.styles.StyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.BalloonPopupButtonStyleBuilder>;
                public getTextColor(): com.massifmaps.graphics.Color;
                public getStrokeWidth(): number;
                public setStrokeColor(strokeColor: com.massifmaps.graphics.Color): void;
                public constructor();
                public setCornerRadius(cornerRadius: number): void;
                public setTextColor(textColor: com.massifmaps.graphics.Color): void;
                public getTextFontName(): string;
                public setTextMargins(textMargins: com.massifmaps.styles.BalloonPopupMargins): void;
                public setStrokeWidth(strokeWidth: number): void;
                public getTextMargins(): com.massifmaps.styles.BalloonPopupMargins;
                public setTextFontSize(textFontSize: number): void;
                public getCornerRadius(): number;
                public getTextFontSize(): number;
                public getStrokeColor(): com.massifmaps.graphics.Color;
                public buildStyle(): com.massifmaps.styles.BalloonPopupButtonStyle;
                public setButtonWidth(buttonWidth: number): void;
                public getButtonWidth(): number;
                public setTextFontName(textFontName: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class BalloonPopupMargins extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.styles.BalloonPopupMargins>;
                public swigCMemOwn: boolean;
                public getTop(): number;
                public getLeft(): number;
                public getBottom(): number;
                public getRight(): number;
                public constructor(left: number, top: number, right: number, bottom: number);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class BalloonPopupStyle extends com.massifmaps.styles.PopupStyle {
                public static class: java.lang.Class<com.massifmaps.styles.BalloonPopupStyle>;
                public getTitleMargins(): com.massifmaps.styles.BalloonPopupMargins;
                public getStrokeWidth(): number;
                public getLeftMargins(): com.massifmaps.styles.BalloonPopupMargins;
                public getButtonMargins(): com.massifmaps.styles.BalloonPopupMargins;
                public getRightColor(): com.massifmaps.graphics.Color;
                public getRightImage(): com.massifmaps.graphics.Bitmap;
                public getTitleColor(): com.massifmaps.graphics.Color;
                public isTitleWrap(): boolean;
                public getLeftColor(): com.massifmaps.graphics.Color;
                public getTriangleHeight(): number;
                public getTitleFontSize(): number;
                public isDescriptionWrap(): boolean;
                public getLeftImage(): com.massifmaps.graphics.Bitmap;
                public getRightMargins(): com.massifmaps.styles.BalloonPopupMargins;
                public getDescriptionFontSize(): number;
                public getBackgroundColor(): com.massifmaps.graphics.Color;
                public getTitleField(): string;
                public getTriangleWidth(): number;
                public getCornerRadius(): number;
                public getStrokeColor(): com.massifmaps.graphics.Color;
                public getDescriptionField(): string;
                public getTitleFontName(): string;
                public getDescriptionColor(): com.massifmaps.graphics.Color;
                public getDescriptionMargins(): com.massifmaps.styles.BalloonPopupMargins;
                public getDescriptionFontName(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class BalloonPopupStyleBuilder extends com.massifmaps.styles.PopupStyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.BalloonPopupStyleBuilder>;
                public setDescriptionFontName(descFontName: string): void;
                public getStrokeWidth(): number;
                public getRightColor(): com.massifmaps.graphics.Color;
                public constructor();
                public setTitleField(field: string): void;
                public getTitleColor(): com.massifmaps.graphics.Color;
                public setStrokeWidth(strokeWidth: number): void;
                public setTriangleWidth(triangleWidth: number): void;
                public setDescriptionColor(descColor: com.massifmaps.graphics.Color): void;
                public getLeftColor(): com.massifmaps.graphics.Color;
                public setTitleFontName(titleFontName: string): void;
                public isDescriptionWrap(): boolean;
                public buildStyle(): com.massifmaps.styles.PopupStyle;
                public setTitleColor(titleColor: com.massifmaps.graphics.Color): void;
                public getDescriptionFontSize(): number;
                public getTitleField(): string;
                public setDescriptionField(field: string): void;
                public getCornerRadius(): number;
                public setRightMargins(rightMargins: com.massifmaps.styles.BalloonPopupMargins): void;
                public getDescriptionField(): string;
                public getTitleFontName(): string;
                public getDescriptionMargins(): com.massifmaps.styles.BalloonPopupMargins;
                public setDescriptionMargins(descMargins: com.massifmaps.styles.BalloonPopupMargins): void;
                public setTitleFontSize(titleFontSize: number): void;
                public setDescriptionWrap(descWrap: boolean): void;
                public getTitleMargins(): com.massifmaps.styles.BalloonPopupMargins;
                public getLeftMargins(): com.massifmaps.styles.BalloonPopupMargins;
                public setStrokeColor(strokeColor: com.massifmaps.graphics.Color): void;
                public getButtonMargins(): com.massifmaps.styles.BalloonPopupMargins;
                public getRightImage(): com.massifmaps.graphics.Bitmap;
                public setRightColor(rightColor: com.massifmaps.graphics.Color): void;
                public setCornerRadius(cornerRadius: number): void;
                public setLeftImage(leftImage: com.massifmaps.graphics.Bitmap): void;
                public isTitleWrap(): boolean;
                public getTriangleHeight(): number;
                public getTitleFontSize(): number;
                public setDescriptionFontSize(descFontSize: number): void;
                public getLeftImage(): com.massifmaps.graphics.Bitmap;
                public buildStyle(): com.massifmaps.styles.BalloonPopupStyle;
                public getRightMargins(): com.massifmaps.styles.BalloonPopupMargins;
                public setButtonMargins(buttonMargins: com.massifmaps.styles.BalloonPopupMargins): void;
                public setLeftColor(leftColor: com.massifmaps.graphics.Color): void;
                public setLeftMargins(leftMargins: com.massifmaps.styles.BalloonPopupMargins): void;
                public setRightImage(rightImage: com.massifmaps.graphics.Bitmap): void;
                public getTriangleWidth(): number;
                public setTitleMargins(titleMargins: com.massifmaps.styles.BalloonPopupMargins): void;
                public getStrokeColor(): com.massifmaps.graphics.Color;
                public setTriangleHeight(triangleHeight: number): void;
                public setTitleWrap(titleWrap: boolean): void;
                public getDescriptionColor(): com.massifmaps.graphics.Color;
                public getDescriptionFontName(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class BillboardOrientation {
                public static class: java.lang.Class<com.massifmaps.styles.BillboardOrientation>;
                public static BILLBOARD_ORIENTATION_FACE_CAMERA: com.massifmaps.styles.BillboardOrientation;
                public static BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND: com.massifmaps.styles.BillboardOrientation;
                public static BILLBOARD_ORIENTATION_GROUND: com.massifmaps.styles.BillboardOrientation;
                public static values(): androidNative.Array<com.massifmaps.styles.BillboardOrientation>;
                public swigValue(): number;
                public static valueOf(name: string): com.massifmaps.styles.BillboardOrientation;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static swigToEnum(swigEnum: number): com.massifmaps.styles.BillboardOrientation;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class BillboardScaling {
                public static class: java.lang.Class<com.massifmaps.styles.BillboardScaling>;
                public static BILLBOARD_SCALING_WORLD_SIZE: com.massifmaps.styles.BillboardScaling;
                public static BILLBOARD_SCALING_SCREEN_SIZE: com.massifmaps.styles.BillboardScaling;
                public static BILLBOARD_SCALING_CONST_SCREEN_SIZE: com.massifmaps.styles.BillboardScaling;
                public swigValue(): number;
                public static swigToEnum(swigEnum: number): com.massifmaps.styles.BillboardScaling;
                public static valueOf(name: string): com.massifmaps.styles.BillboardScaling;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static values(): androidNative.Array<com.massifmaps.styles.BillboardScaling>;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class BillboardStyle extends com.massifmaps.styles.Style {
                public static class: java.lang.Class<com.massifmaps.styles.BillboardStyle>;
                public isHideIfOverlapped(): boolean;
                public getPlacementPriority(): number;
                public getAttachAnchorPointY(): number;
                public isScaleWithDPI(): boolean;
                public getVerticalOffset(): number;
                public getAnimationStyle(): com.massifmaps.styles.AnimationStyle;
                public isCausesOverlap(): boolean;
                public getAttachAnchorPointX(): number;
                public getHorizontalOffset(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class BillboardStyleBuilder extends com.massifmaps.styles.StyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.BillboardStyleBuilder>;
                public setPlacementPriority(placementPriority: number): void;
                public setHideIfOverlapped(hideIfOverlapped: boolean): void;
                public isScaleWithDPI(): boolean;
                public setAttachAnchorPointX(attachAnchorPointX: number): void;
                public setCausesOverlap(causesOverlap: boolean): void;
                public setAttachAnchorPointY(attachAnchorPointY: number): void;
                public isCausesOverlap(): boolean;
                public getAttachAnchorPointX(): number;
                public getHorizontalOffset(): number;
                public isHideIfOverlapped(): boolean;
                public getPlacementPriority(): number;
                public setScaleWithDPI(scaleWithDPI: boolean): void;
                public getAttachAnchorPointY(): number;
                public getVerticalOffset(): number;
                public setAnimationStyle(animStyle: com.massifmaps.styles.AnimationStyle): void;
                public setAttachAnchorPoint(attachAnchorPointX: number, attachAnchorPointY: number): void;
                public getAnimationStyle(): com.massifmaps.styles.AnimationStyle;
                public setHorizontalOffset(horizontalOffset: number): void;
                public setVerticalOffset(verticalOffset: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class CartoCSSStyleSet extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.styles.CartoCSSStyleSet>;
                public swigCMemOwn: boolean;
                public getCartoCSS(): string;
                public constructor(cartoCSS: string, assetPackage: com.massifmaps.utils.AssetPackage);
                public equals(obj: any): boolean;
                public hashCode(): number;
                public constructor(cartoCSS: string);
                public getAssetPackage(): com.massifmaps.utils.AssetPackage;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class CompiledStyleSet extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.styles.CompiledStyleSet>;
                public swigCMemOwn: boolean;
                public equals(obj: any): boolean;
                public getStyleAssetName(): string;
                public hashCode(): number;
                public constructor(assetPackage: com.massifmaps.utils.AssetPackage);
                public getStyleName(): string;
                public constructor(assetPackage: com.massifmaps.utils.AssetPackage, styleName: string);
                public getAssetPackage(): com.massifmaps.utils.AssetPackage;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class GeometryCollectionStyle extends com.massifmaps.styles.Style {
                public static class: java.lang.Class<com.massifmaps.styles.GeometryCollectionStyle>;
                public getPointStyle(): com.massifmaps.styles.PointStyle;
                public getLineStyle(): com.massifmaps.styles.LineStyle;
                public getPolygonStyle(): com.massifmaps.styles.PolygonStyle;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class GeometryCollectionStyleBuilder extends com.massifmaps.styles.StyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.GeometryCollectionStyleBuilder>;
                public buildStyle(): com.massifmaps.styles.GeometryCollectionStyle;
                public getPointStyle(): com.massifmaps.styles.PointStyle;
                public getLineStyle(): com.massifmaps.styles.LineStyle;
                public constructor();
                public getPolygonStyle(): com.massifmaps.styles.PolygonStyle;
                public setPointStyle(pointStyle: com.massifmaps.styles.PointStyle): void;
                public setLineStyle(lineStyle: com.massifmaps.styles.LineStyle): void;
                public setPolygonStyle(polygonStyle: com.massifmaps.styles.PolygonStyle): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class LabelStyle extends com.massifmaps.styles.BillboardStyle {
                public static class: java.lang.Class<com.massifmaps.styles.LabelStyle>;
                public isFlippable(): boolean;
                public getOrientationMode(): com.massifmaps.styles.BillboardOrientation;
                public getAnchorPointY(): number;
                public getScalingMode(): com.massifmaps.styles.BillboardScaling;
                public getRenderScale(): number;
                public getAnchorPointX(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class LabelStyleBuilder extends com.massifmaps.styles.BillboardStyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.LabelStyleBuilder>;
                public getOrientationMode(): com.massifmaps.styles.BillboardOrientation;
                public setAnchorPoint(anchorPointX: number, anchorPointY: number): void;
                public constructor();
                public setRenderScale(renderScale: number): void;
                public buildStyle(): com.massifmaps.styles.LabelStyle;
                public getAnchorPointX(): number;
                public setAnchorPointY(anchorPointY: number): void;
                public setScalingMode(scalingMode: com.massifmaps.styles.BillboardScaling): void;
                public isFlippable(): boolean;
                public setAnchorPointX(anchorPointX: number): void;
                public getAnchorPointY(): number;
                public setOrientationMode(orientationMode: com.massifmaps.styles.BillboardOrientation): void;
                public getScalingMode(): com.massifmaps.styles.BillboardScaling;
                public setFlippable(flippable: boolean): void;
                public getRenderScale(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class LineEndType {
                public static class: java.lang.Class<com.massifmaps.styles.LineEndType>;
                public static LINE_END_TYPE_NONE: com.massifmaps.styles.LineEndType;
                public static LINE_END_TYPE_SQUARE: com.massifmaps.styles.LineEndType;
                public static LINE_END_TYPE_ROUND: com.massifmaps.styles.LineEndType;
                public swigValue(): number;
                public static values(): androidNative.Array<com.massifmaps.styles.LineEndType>;
                public static valueOf(name: string): com.massifmaps.styles.LineEndType;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static swigToEnum(swigEnum: number): com.massifmaps.styles.LineEndType;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class LineJoinType {
                public static class: java.lang.Class<com.massifmaps.styles.LineJoinType>;
                public static LINE_JOIN_TYPE_NONE: com.massifmaps.styles.LineJoinType;
                public static LINE_JOIN_TYPE_MITER: com.massifmaps.styles.LineJoinType;
                public static LINE_JOIN_TYPE_BEVEL: com.massifmaps.styles.LineJoinType;
                public static LINE_JOIN_TYPE_ROUND: com.massifmaps.styles.LineJoinType;
                public swigValue(): number;
                public static values(): androidNative.Array<com.massifmaps.styles.LineJoinType>;
                public static swigToEnum(swigEnum: number): com.massifmaps.styles.LineJoinType;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.styles.LineJoinType;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class LineStyle extends com.massifmaps.styles.Style {
                public static class: java.lang.Class<com.massifmaps.styles.LineStyle>;
                public getBitmap(): com.massifmaps.graphics.Bitmap;
                public getClickWidth(): number;
                public getLineEndType(): com.massifmaps.styles.LineEndType;
                public getWidth(): number;
                public getLineJoinType(): com.massifmaps.styles.LineJoinType;
                public getStretchFactor(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class LineStyleBuilder extends com.massifmaps.styles.StyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.LineStyleBuilder>;
                public setWidth(width: number): void;
                public getBitmap(): com.massifmaps.graphics.Bitmap;
                public getClickWidth(): number;
                public setLineJoinType(lineJoinType: com.massifmaps.styles.LineJoinType): void;
                public getLineEndType(): com.massifmaps.styles.LineEndType;
                public constructor();
                public getWidth(): number;
                public getLineJoinType(): com.massifmaps.styles.LineJoinType;
                public setStretchFactor(stretchFactor: number): void;
                public setLineEndType(lineEndType: com.massifmaps.styles.LineEndType): void;
                public buildStyle(): com.massifmaps.styles.LineStyle;
                public getStretchFactor(): number;
                public setBitmap(bitmap: com.massifmaps.graphics.Bitmap): void;
                public setClickWidth(clickWidth: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class MarkerStyle extends com.massifmaps.styles.BillboardStyle {
                public static class: java.lang.Class<com.massifmaps.styles.MarkerStyle>;
                public getBitmap(): com.massifmaps.graphics.Bitmap;
                public getOrientationMode(): com.massifmaps.styles.BillboardOrientation;
                public getClickSize(): number;
                public getAnchorPointY(): number;
                public getScalingMode(): com.massifmaps.styles.BillboardScaling;
                public getSize(): number;
                public getAnchorPointX(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class MarkerStyleBuilder extends com.massifmaps.styles.BillboardStyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.MarkerStyleBuilder>;
                public getBitmap(): com.massifmaps.graphics.Bitmap;
                public getOrientationMode(): com.massifmaps.styles.BillboardOrientation;
                public setAnchorPoint(anchorPointX: number, anchorPointY: number): void;
                public constructor();
                public setClickSize(size: number): void;
                public getSize(): number;
                public buildStyle(): com.massifmaps.styles.MarkerStyle;
                public getAnchorPointX(): number;
                public setAnchorPointY(anchorPointY: number): void;
                public setScalingMode(scalingMode: com.massifmaps.styles.BillboardScaling): void;
                public setAnchorPointX(anchorPointX: number): void;
                public getClickSize(): number;
                public getAnchorPointY(): number;
                public setOrientationMode(orientationMode: com.massifmaps.styles.BillboardOrientation): void;
                public getScalingMode(): com.massifmaps.styles.BillboardScaling;
                public setSize(size: number): void;
                public setBitmap(bitmap: com.massifmaps.graphics.Bitmap): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class NMLModelStyle extends com.massifmaps.styles.BillboardStyle {
                public static class: java.lang.Class<com.massifmaps.styles.NMLModelStyle>;
                public getOrientationMode(): com.massifmaps.styles.BillboardOrientation;
                public getModelAsset(): com.massifmaps.core.BinaryData;
                public getScalingMode(): com.massifmaps.styles.BillboardScaling;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class NMLModelStyleBuilder extends com.massifmaps.styles.BillboardStyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.NMLModelStyleBuilder>;
                public getOrientationMode(): com.massifmaps.styles.BillboardOrientation;
                public setModelAsset(modelAsset: com.massifmaps.core.BinaryData): void;
                public getModelAsset(): com.massifmaps.core.BinaryData;
                public constructor();
                public setOrientationMode(orientationMode: com.massifmaps.styles.BillboardOrientation): void;
                public getScalingMode(): com.massifmaps.styles.BillboardScaling;
                public buildStyle(): com.massifmaps.styles.NMLModelStyle;
                public setScalingMode(scalingMode: com.massifmaps.styles.BillboardScaling): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class PointStyle extends com.massifmaps.styles.Style {
                public static class: java.lang.Class<com.massifmaps.styles.PointStyle>;
                public getBitmap(): com.massifmaps.graphics.Bitmap;
                public getClickSize(): number;
                public getSize(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class PointStyleBuilder extends com.massifmaps.styles.StyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.PointStyleBuilder>;
                public getBitmap(): com.massifmaps.graphics.Bitmap;
                public getClickSize(): number;
                public buildStyle(): com.massifmaps.styles.PointStyle;
                public constructor();
                public setClickSize(size: number): void;
                public getSize(): number;
                public setSize(size: number): void;
                public setBitmap(bitmap: com.massifmaps.graphics.Bitmap): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class Polygon3DStyle extends com.massifmaps.styles.Style {
                public static class: java.lang.Class<com.massifmaps.styles.Polygon3DStyle>;
                public getSideColor(): com.massifmaps.graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class Polygon3DStyleBuilder extends com.massifmaps.styles.StyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.Polygon3DStyleBuilder>;
                public buildStyle(): com.massifmaps.styles.Polygon3DStyle;
                public setSideColor(sideColor: com.massifmaps.graphics.Color): void;
                public constructor();
                public getSideColor(): com.massifmaps.graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class PolygonStyle extends com.massifmaps.styles.Style {
                public static class: java.lang.Class<com.massifmaps.styles.PolygonStyle>;
                public getLineStyle(): com.massifmaps.styles.LineStyle;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class PolygonStyleBuilder extends com.massifmaps.styles.StyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.PolygonStyleBuilder>;
                public getLineStyle(): com.massifmaps.styles.LineStyle;
                public constructor();
                public buildStyle(): com.massifmaps.styles.PolygonStyle;
                public setLineStyle(lineStyle: com.massifmaps.styles.LineStyle): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class PopupStyle extends com.massifmaps.styles.BillboardStyle {
                public static class: java.lang.Class<com.massifmaps.styles.PopupStyle>;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class PopupStyleBuilder extends com.massifmaps.styles.BillboardStyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.PopupStyleBuilder>;
                public constructor();
                public buildStyle(): com.massifmaps.styles.PopupStyle;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class StringCartoCSSStyleSetMap extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.styles.StringCartoCSSStyleSetMap>;
                public swigCMemOwn: boolean;
                public get(key: string): com.massifmaps.styles.CartoCSSStyleSet;
                public constructor();
                public size(): number;
                public set(key: string, x: com.massifmaps.styles.CartoCSSStyleSet): void;
                public constructor(arg0: com.massifmaps.styles.StringCartoCSSStyleSetMap);
                public has_key(key: string): boolean;
                public clear(): void;
                public del(key: string): void;
                public get_key(idx: number): string;
                public empty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class Style extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.styles.Style>;
                public swigCMemOwn: boolean;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getColor(): com.massifmaps.graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class StyleBuilder extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.styles.StyleBuilder>;
                public swigCMemOwn: boolean;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public setColor(color: com.massifmaps.graphics.Color): void;
                public getColor(): com.massifmaps.graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class TextMargins extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.styles.TextMargins>;
                public swigCMemOwn: boolean;
                public getTop(): number;
                public getLeft(): number;
                public getBottom(): number;
                public getRight(): number;
                public constructor(left: number, top: number, right: number, bottom: number);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class TextStyle extends com.massifmaps.styles.LabelStyle {
                public static class: java.lang.Class<com.massifmaps.styles.TextStyle>;
                public getFontColor(): com.massifmaps.graphics.Color;
                public getStrokeWidth(): number;
                public isBreakLines(): boolean;
                public getTextField(): string;
                public getTextMargins(): com.massifmaps.styles.TextMargins;
                public getBorderColor(): com.massifmaps.graphics.Color;
                public getBackgroundColor(): com.massifmaps.graphics.Color;
                public getFontName(): string;
                public getFontSize(): number;
                public getBorderWidth(): number;
                public getStrokeColor(): com.massifmaps.graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace styles {
            export class TextStyleBuilder extends com.massifmaps.styles.LabelStyleBuilder {
                public static class: java.lang.Class<com.massifmaps.styles.TextStyleBuilder>;
                public getStrokeWidth(): number;
                public setStrokeColor(strokeColor: com.massifmaps.graphics.Color): void;
                public setBackgroundColor(backgroundColor: com.massifmaps.graphics.Color): void;
                public isBreakLines(): boolean;
                public getTextField(): string;
                public constructor();
                public buildStyle(): com.massifmaps.styles.LabelStyle;
                public setStrokeWidth(strokeWidth: number): void;
                public setFontSize(size: number): void;
                public getTextMargins(): com.massifmaps.styles.TextMargins;
                public buildStyle(): com.massifmaps.styles.TextStyle;
                public setBorderColor(borderColor: com.massifmaps.graphics.Color): void;
                public getBorderColor(): com.massifmaps.graphics.Color;
                public getBackgroundColor(): com.massifmaps.graphics.Color;
                public getFontName(): string;
                public setBreakLines(enable: boolean): void;
                public setTextMargins(textMargins: com.massifmaps.styles.TextMargins): void;
                public getFontSize(): number;
                public getBorderWidth(): number;
                public setFontName(fontName: string): void;
                public getStrokeColor(): com.massifmaps.graphics.Color;
                public setTextField(field: string): void;
                public setBorderWidth(borderWidth: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class BalloonPopupButtonClickInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.BalloonPopupButtonClickInfo>;
                public swigCMemOwn: boolean;
                public getClickInfo(): com.massifmaps.ui.ClickInfo;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getButton(): com.massifmaps.vectorelements.BalloonPopupButton;
                public getClickType(): com.massifmaps.ui.ClickType;
                public getVectorElement(): com.massifmaps.vectorelements.VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class BaseMapView extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.BaseMapView>;
                public swigCMemOwn: boolean;
                public setMapEventListener(mapEventListener: com.massifmaps.ui.MapEventListener): void;
                public onSurfaceDestroyed(): void;
                public getOptions(): com.massifmaps.components.Options;
                public constructor();
                public rotate(deltaAngle: number, durationSeconds: number): void;
                public cancelAllTasks(): void;
                public tilt(deltaTilt: number, durationSeconds: number): void;
                public mapToScreen(mapPos: com.massifmaps.core.MapPos): com.massifmaps.core.ScreenPos;
                public clearPreloadingCaches(): void;
                public clearAllCaches(): void;
                public static getSDKVersion(): string;
                public getMapEventListener(): com.massifmaps.ui.MapEventListener;
                public setRotation(angle: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public stopFlight(): void;
                public flyTo(pos: com.massifmaps.core.MapPos, zoom: number, rotation: number, tilt: number, durationSeconds: number): void;
                public setTilt(tilt: number, durationSeconds: number): void;
                public pan(deltaPos: com.massifmaps.core.MapVec, durationSeconds: number): void;
                public getMapRenderer(): com.massifmaps.renderers.MapRenderer;
                public zoom(deltaZoom: number, durationSeconds: number): void;
                public onInputEvent(event: number, x1: number, y1: number, x2: number, y2: number): void;
                public getFlightProgress(): number;
                public getFocusPos(): com.massifmaps.core.MapPos;
                public onSurfaceCreated(): void;
                public getZoom(): number;
                public finishRendering(): void;
                public setFocusPos(pos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public setRedrawRequestListener(listener: com.massifmaps.renderers.RedrawRequestListener): void;
                public setZoom(zoom: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public onSurfaceChanged(width: number, height: number): void;
                public isFlightActive(): boolean;
                public getLayers(): com.massifmaps.components.Layers;
                public flyTo(pos: com.massifmaps.core.MapPos, zoom: number, rotation: number, tilt: number, climbHeight: number, durationSeconds: number): void;
                public rotate(deltaAngle: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public setRotation(angle: number, durationSeconds: number): void;
                public moveToFitBounds(mapBounds: com.massifmaps.core.MapBounds, screenBounds: com.massifmaps.core.ScreenBounds, integerZoom: boolean, durationSeconds: number): void;
                public moveToFitBounds(mapBounds: com.massifmaps.core.MapBounds, screenBounds: com.massifmaps.core.ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number): void;
                public setZoom(zoom: number, durationSeconds: number): void;
                public onWheelEvent(delta: number, x: number, y: number): void;
                public screenToMap(screenPos: com.massifmaps.core.ScreenPos): com.massifmaps.core.MapPos;
                public getRotation(): number;
                public flyTo(pos: com.massifmaps.core.MapPos, zoom: number, durationSeconds: number): void;
                public zoom(deltaZoom: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public getTilt(): number;
                public onDrawFrame(): void;
                public getRedrawRequestListener(): com.massifmaps.renderers.RedrawRequestListener;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class ClickInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.ClickInfo>;
                public swigCMemOwn: boolean;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getDuration(): number;
                public getClickType(): com.massifmaps.ui.ClickType;
                public constructor(clickType: com.massifmaps.ui.ClickType, duration: number);
                public toString(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class ClickType {
                public static class: java.lang.Class<com.massifmaps.ui.ClickType>;
                public static CLICK_TYPE_SINGLE: com.massifmaps.ui.ClickType;
                public static CLICK_TYPE_LONG: com.massifmaps.ui.ClickType;
                public static CLICK_TYPE_DOUBLE: com.massifmaps.ui.ClickType;
                public static CLICK_TYPE_DUAL: com.massifmaps.ui.ClickType;
                public swigValue(): number;
                public static swigToEnum(swigEnum: number): com.massifmaps.ui.ClickType;
                public static values(): androidNative.Array<com.massifmaps.ui.ClickType>;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.ui.ClickType;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class ConfigChooser extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.EGLConfigChooser {
                public static class: java.lang.Class<com.massifmaps.ui.ConfigChooser>;
                public chooseConfig(configs: javax.microedition.khronos.egl.EGL10, i: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
                public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class GLTextureView extends globalAndroid.view.TextureView implements globalAndroid.view.TextureView.SurfaceTextureListener, globalAndroid.view.View.OnLayoutChangeListener {
                public static class: java.lang.Class<com.massifmaps.ui.GLTextureView>;
                public static RENDERMODE_WHEN_DIRTY: number = 0;
                public static RENDERMODE_CONTINUOUSLY: number = 1;
                public static DEBUG_CHECK_GL_ERROR: number = 1;
                public static DEBUG_LOG_GL_CALLS: number = 2;
                public onLayoutChange(v: globalAndroid.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): void;
                public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
                public setEGLConfigChooser(needDepth: boolean): void;
                public setRenderer(renderer: globalAndroid.opengl.GLSurfaceView.Renderer): void;
                public constructor(context: globalAndroid.content.Context);
                public onSurfaceTextureDestroyed(this_: globalAndroid.graphics.SurfaceTexture): boolean;
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public onSurfaceTextureAvailable(this_: globalAndroid.graphics.SurfaceTexture, surface: number, width: number): void;
                public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
                public sendAccessibilityEvent(param0: number): void;
                public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                public setEGLConfigChooser(redSize: number, greenSize: number, blueSize: number, alphaSize: number, depthSize: number, stencilSize: number): void;
                public onResume(): void;
                public setGLWrapper(glWrapper: globalAndroid.opengl.GLSurfaceView.GLWrapper): void;
                public onSurfaceTextureSizeChanged(this_: globalAndroid.graphics.SurfaceTexture, surface: number, width: number): void;
                public setDebugFlags(debugFlags: number): void;
                public queueEvent(r: java.lang.Runnable): void;
                public setEGLContextFactory(factory: globalAndroid.opengl.GLSurfaceView.EGLContextFactory): void;
                public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                public getRenderMode(): number;
                public requestRender(): void;
                public onDetachedFromWindow(): void;
                public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
                public onPause(): void;
                public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
                public surfaceChanged(texture: globalAndroid.graphics.SurfaceTexture, format: number, w: number, h: number): void;
                public onSurfaceTextureUpdated(this_: globalAndroid.graphics.SurfaceTexture): void;
                public surfaceDestroyed(texture: globalAndroid.graphics.SurfaceTexture): void;
                public addSurfaceTextureListener(listener: globalAndroid.view.TextureView.SurfaceTextureListener): void;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public surfaceCreated(texture: globalAndroid.graphics.SurfaceTexture): void;
                public setEGLContextClientVersion(version: number): void;
                public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
                public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                public getPreserveEGLContextOnPause(): boolean;
                public setRenderMode(renderMode: number): void;
                public setEGLConfigChooser(configChooser: globalAndroid.opengl.GLSurfaceView.EGLConfigChooser): void;
                public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
                public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                public getDebugFlags(): number;
                public setPreserveEGLContextOnPause(preserveOnPause: boolean): void;
                public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                public onAttachedToWindow(): void;
                public setEGLWindowSurfaceFactory(factory: globalAndroid.opengl.GLSurfaceView.EGLWindowSurfaceFactory): void;
            }
            export namespace GLTextureView {
                export abstract class BaseConfigChooser extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.EGLConfigChooser {
                    public static class: java.lang.Class<com.massifmaps.ui.GLTextureView.BaseConfigChooser>;
                    public mConfigSpec: androidNative.Array<number>;
                    public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
                    public constructor(configSpec: com.massifmaps.ui.GLTextureView, param1: androidNative.Array<number>);
                    public chooseConfig(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
                }
                export class ComponentSizeChooser extends com.massifmaps.ui.GLTextureView.BaseConfigChooser {
                    public static class: java.lang.Class<com.massifmaps.ui.GLTextureView.ComponentSizeChooser>;
                    public redSize: number;
                    public greenSize: number;
                    public blueSize: number;
                    public alphaSize: number;
                    public depthSize: number;
                    public stencilSize: number;
                    public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
                    public constructor(configSpec: com.massifmaps.ui.GLTextureView, param1: androidNative.Array<number>);
                    public constructor(redSize: com.massifmaps.ui.GLTextureView, greenSize: number, blueSize: number, alphaSize: number, depthSize: number, stencilSize: number, param6: number);
                    public chooseConfig(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
                    public chooseConfig(g: javax.microedition.khronos.egl.EGL10, b: javax.microedition.khronos.egl.EGLDisplay, a: androidNative.Array<javax.microedition.khronos.egl.EGLConfig>): javax.microedition.khronos.egl.EGLConfig;
                }
                export class DefaultContextFactory extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.EGLContextFactory {
                    public static class: java.lang.Class<com.massifmaps.ui.GLTextureView.DefaultContextFactory>;
                    public createContext(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay, config: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
                    public destroyContext(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay, context: javax.microedition.khronos.egl.EGLContext): void;
                    public destroyContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLContext): void;
                    public createContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
                }
                export class DefaultWindowSurfaceFactory extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.EGLWindowSurfaceFactory {
                    public static class: java.lang.Class<com.massifmaps.ui.GLTextureView.DefaultWindowSurfaceFactory>;
                    public destroySurface(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay, surface: javax.microedition.khronos.egl.EGLSurface): void;
                    public createWindowSurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig, param3: any): javax.microedition.khronos.egl.EGLSurface;
                    public createWindowSurface(this_: javax.microedition.khronos.egl.EGL10, egl: javax.microedition.khronos.egl.EGLDisplay, display: javax.microedition.khronos.egl.EGLConfig, config: any): javax.microedition.khronos.egl.EGLSurface;
                    public destroySurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLSurface): void;
                }
                export class EglHelper extends java.lang.Object {
                    public static class: java.lang.Class<com.massifmaps.ui.GLTextureView.EglHelper>;
                    public constructor(glTextureViewWeakReference: java.lang.ref.WeakReference<com.massifmaps.ui.GLTextureView>);
                    public static throwEglException(function_: string, error: number): void;
                    public swap(): number;
                    public finish(): void;
                    public static logEglErrorAsWarning(tag: string, function_: string, error: number): void;
                    public start(): void;
                    public createSurface(): boolean;
                    public destroySurface(): void;
                    public static formatEglError(function_: string, error: number): string;
                }
                export class GLThread extends java.lang.Thread {
                    public static class: java.lang.Class<com.massifmaps.ui.GLTextureView.GLThread>;
                    public ableToDraw(): boolean;
                    public queueEvent(r: java.lang.Runnable): void;
                    public run(): void;
                    public onWindowResize(this_: number, w: number): void;
                    public surfaceDestroyed(): void;
                    public requestRender(): void;
                    public onResume(): void;
                    public requestReleaseEglContextLocked(): void;
                    public surfaceCreated(): void;
                    public getRenderMode(): number;
                    public onPause(): void;
                    public setRenderMode(renderMode: number): void;
                    public requestExitAndWait(): void;
                }
                export class GLThreadManager extends java.lang.Object {
                    public static class: java.lang.Class<com.massifmaps.ui.GLTextureView.GLThreadManager>;
                    public threadExiting(thread: com.massifmaps.ui.GLTextureView.GLThread): void;
                    public releaseEglContextLocked(thread: com.massifmaps.ui.GLTextureView.GLThread): void;
                    public shouldReleaseEGLContextWhenPausing(): boolean;
                    public checkGLDriver(this_: javax.microedition.khronos.opengles.GL10): void;
                    public shouldTerminateEGLWhenPausing(): boolean;
                    public tryAcquireEglContextLocked(thread: com.massifmaps.ui.GLTextureView.GLThread): boolean;
                }
                export class LogWriter extends java.io.Writer {
                    public static class: java.lang.Class<com.massifmaps.ui.GLTextureView.LogWriter>;
                    public write(c: number): void;
                    public append(param0: string): java.lang.Appendable;
                    public append(csq: string, start: number, end: number): java.io.Writer;
                    public close(): void;
                    public write(i: androidNative.Array<string>, this_: number, buf: number): void;
                    public flush(): void;
                    public append(csq: string): java.io.Writer;
                    public write(str: string): void;
                    public append(param0: string, param1: number, param2: number): java.lang.Appendable;
                    public write(cbuf: androidNative.Array<string>): void;
                    public write(str: string, off: number, len: number): void;
                    public append(c: string): java.io.Writer;
                }
                export class SimpleEGLConfigChooser extends com.massifmaps.ui.GLTextureView.ComponentSizeChooser {
                    public static class: java.lang.Class<com.massifmaps.ui.GLTextureView.SimpleEGLConfigChooser>;
                    public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
                    public constructor(configSpec: com.massifmaps.ui.GLTextureView, param1: androidNative.Array<number>);
                    public constructor(redSize: com.massifmaps.ui.GLTextureView, greenSize: number, blueSize: number, alphaSize: number, depthSize: number, stencilSize: number, param6: number);
                    public constructor(withDepthBuffer: com.massifmaps.ui.GLTextureView, param1: boolean);
                    public chooseConfig(g: javax.microedition.khronos.egl.EGL10, b: javax.microedition.khronos.egl.EGLDisplay, a: androidNative.Array<javax.microedition.khronos.egl.EGLConfig>): javax.microedition.khronos.egl.EGLConfig;
                }
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class MapClickInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.MapClickInfo>;
                public swigCMemOwn: boolean;
                public getClickInfo(): com.massifmaps.ui.ClickInfo;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getClickType(): com.massifmaps.ui.ClickType;
                public getClickPos(): com.massifmaps.core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class MapEventListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.MapEventListener>;
                public swigCMemOwn: boolean;
                public onMapMoved(): void;
                public swigDirectorDisconnect(): void;
                public onMapClicked(mapClickInfo: com.massifmaps.ui.MapClickInfo): void;
                public constructor();
                public onMapStable(): void;
                public onMapIdle(): void;
                public onMapInteraction(mapInteractionInfo: com.massifmaps.ui.MapInteractionInfo): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class MapInteractionInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.MapInteractionInfo>;
                public swigCMemOwn: boolean;
                public isPanAction(): boolean;
                public equals(obj: any): boolean;
                public isRotateAction(): boolean;
                public hashCode(): number;
                public isAnimationStarted(): boolean;
                public isZoomAction(): boolean;
                public isTiltAction(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class MapRedrawRequestListener extends com.massifmaps.renderers.RedrawRequestListener {
                public static class: java.lang.Class<com.massifmaps.ui.MapRedrawRequestListener>;
                public constructor(mapView: com.massifmaps.ui.MapView);
                public onRedrawRequested(): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class MapView extends globalAndroid.opengl.GLSurfaceView implements globalAndroid.opengl.GLSurfaceView.Renderer, com.massifmaps.ui.MapViewInterface {
                public static class: java.lang.Class<com.massifmaps.ui.MapView>;
                public setMapEventListener(mapEventListener: com.massifmaps.ui.MapEventListener): void;
                public constructor(context: globalAndroid.content.Context);
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
                public zoom(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                public getOptions(): com.massifmaps.components.Options;
                public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
                public rotate(deltaAngle: number, durationSeconds: number): void;
                public cancelAllTasks(): void;
                public sendAccessibilityEvent(param0: number): void;
                public moveToFitBounds(param0: com.massifmaps.core.MapBounds, param1: com.massifmaps.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
                public setZoom(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                public tilt(deltaTilt: number, durationSeconds: number): void;
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public setTilt(param0: number, param1: number): void;
                public mapToScreen(mapPos: com.massifmaps.core.MapPos): com.massifmaps.core.ScreenPos;
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public onSurfaceChanged(gl: javax.microedition.khronos.opengles.GL10, width: number, height: number): void;
                public clearPreloadingCaches(): void;
                public clearAllCaches(): void;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                public getMapEventListener(): com.massifmaps.ui.MapEventListener;
                public screenToMap(param0: com.massifmaps.core.ScreenPos): com.massifmaps.core.MapPos;
                public stopFlight(): void;
                public flyTo(pos: com.massifmaps.core.MapPos, zoom: number, rotation: number, tilt: number, durationSeconds: number): void;
                public zoom(param0: number, param1: number): void;
                public setTilt(tilt: number, durationSeconds: number): void;
                public pan(deltaPos: com.massifmaps.core.MapVec, durationSeconds: number): void;
                public setFocusPos(param0: com.massifmaps.core.MapPos, param1: number): void;
                public getMapRenderer(): com.massifmaps.renderers.MapRenderer;
                public rotate(param0: number, param1: number): void;
                public setMapEventListener(param0: com.massifmaps.ui.MapEventListener): void;
                public rotate(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                public zoom(deltaZoom: number, durationSeconds: number): void;
                public constructor(e: globalAndroid.content.Context, m: globalAndroid.util.AttributeSet);
                public surfaceRedrawNeededAsync(holder: globalAndroid.view.SurfaceHolder, drawingFinished: java.lang.Runnable): void;
                public getFlightProgress(): number;
                public getFocusPos(): com.massifmaps.core.MapPos;
                public surfaceRedrawNeeded(param0: globalAndroid.view.SurfaceHolder): void;
                public setMapRotation(angle: number, durationSeconds: number): void;
                public setMapRotation(param0: number, param1: number): void;
                public mapToScreen(param0: com.massifmaps.core.MapPos): com.massifmaps.core.ScreenPos;
                public setTranslucent(translucent: boolean): void;
                public getZoom(): number;
                public setZoom(param0: number, param1: number): void;
                public setFocusPos(pos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public getMapRotation(): number;
                public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
                public onTouchEvent(pointer1Index: globalAndroid.view.MotionEvent): boolean;
                public pan(param0: com.massifmaps.core.MapVec, param1: number): void;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public setMapRotation(angle: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public setZoom(zoom: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public isFlightActive(): boolean;
                public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
                public onSurfaceCreated(gl: javax.microedition.khronos.opengles.GL10, config: javax.microedition.khronos.egl.EGLConfig): void;
                public getLayers(): com.massifmaps.components.Layers;
                public onDrawFrame(gl: javax.microedition.khronos.opengles.GL10): void;
                public flyTo(pos: com.massifmaps.core.MapPos, zoom: number, rotation: number, tilt: number, climbHeight: number, durationSeconds: number): void;
                public tilt(param0: number, param1: number): void;
                public rotate(deltaAngle: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public moveToFitBounds(mapBounds: com.massifmaps.core.MapBounds, screenBounds: com.massifmaps.core.ScreenBounds, integerZoom: boolean, durationSeconds: number): void;
                public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                public moveToFitBounds(mapBounds: com.massifmaps.core.MapBounds, screenBounds: com.massifmaps.core.ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number): void;
                public setZoom(zoom: number, durationSeconds: number): void;
                public setMapRotation(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                public screenToMap(screenPos: com.massifmaps.core.ScreenPos): com.massifmaps.core.MapPos;
                public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                public flyTo(pos: com.massifmaps.core.MapPos, zoom: number, durationSeconds: number): void;
                public zoom(deltaZoom: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public getTilt(): number;
                public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                public moveToFitBounds(param0: com.massifmaps.core.MapBounds, param1: com.massifmaps.core.ScreenBounds, param2: boolean, param3: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class MapViewInterface extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.MapViewInterface>;
                /**
                 * Constructs a new instance of the com.massifmaps.ui.MapViewInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getLayers(): com.massifmaps.components.Layers; getOptions(): com.massifmaps.components.Options; getMapRenderer(): com.massifmaps.renderers.MapRenderer; getFocusPos(): com.massifmaps.core.MapPos; getMapRotation(): number; getTilt(): number; getZoom(): number; pan(param0: com.massifmaps.core.MapVec, param1: number): void; setFocusPos(param0: com.massifmaps.core.MapPos, param1: number): void; rotate(param0: number, param1: number): void; rotate(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void; setMapRotation(param0: number, param1: number): void; setMapRotation(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void; tilt(param0: number, param1: number): void; setTilt(param0: number, param1: number): void; zoom(param0: number, param1: number): void; zoom(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void; setZoom(param0: number, param1: number): void; setZoom(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void; moveToFitBounds(param0: com.massifmaps.core.MapBounds, param1: com.massifmaps.core.ScreenBounds, param2: boolean, param3: number): void; moveToFitBounds(param0: com.massifmaps.core.MapBounds, param1: com.massifmaps.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void; getMapEventListener(): com.massifmaps.ui.MapEventListener; setMapEventListener(param0: com.massifmaps.ui.MapEventListener): void; screenToMap(param0: com.massifmaps.core.ScreenPos): com.massifmaps.core.MapPos; mapToScreen(param0: com.massifmaps.core.MapPos): com.massifmaps.core.ScreenPos; cancelAllTasks(): void; clearPreloadingCaches(): void; clearAllCaches(): void; });
                public constructor();
                public setMapRotation(param0: number, param1: number): void;
                public mapToScreen(param0: com.massifmaps.core.MapPos): com.massifmaps.core.ScreenPos;
                public getZoom(): number;
                public setZoom(param0: number, param1: number): void;
                public zoom(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                public getOptions(): com.massifmaps.components.Options;
                public getMapRotation(): number;
                public cancelAllTasks(): void;
                public moveToFitBounds(param0: com.massifmaps.core.MapBounds, param1: com.massifmaps.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
                public setZoom(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                public pan(param0: com.massifmaps.core.MapVec, param1: number): void;
                public setTilt(param0: number, param1: number): void;
                public getLayers(): com.massifmaps.components.Layers;
                public clearPreloadingCaches(): void;
                public clearAllCaches(): void;
                public getMapEventListener(): com.massifmaps.ui.MapEventListener;
                public tilt(param0: number, param1: number): void;
                public screenToMap(param0: com.massifmaps.core.ScreenPos): com.massifmaps.core.MapPos;
                public zoom(param0: number, param1: number): void;
                public setFocusPos(param0: com.massifmaps.core.MapPos, param1: number): void;
                public getMapRenderer(): com.massifmaps.renderers.MapRenderer;
                public rotate(param0: number, param1: number): void;
                public setMapRotation(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                public setMapEventListener(param0: com.massifmaps.ui.MapEventListener): void;
                public rotate(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                public getTilt(): number;
                public getFocusPos(): com.massifmaps.core.MapPos;
                public moveToFitBounds(param0: com.massifmaps.core.MapBounds, param1: com.massifmaps.core.ScreenBounds, param2: boolean, param3: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class PopupClickInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.PopupClickInfo>;
                public swigCMemOwn: boolean;
                public getClickInfo(): com.massifmaps.ui.ClickInfo;
                public getPopup(): com.massifmaps.vectorelements.Popup;
                public equals(obj: any): boolean;
                public getElementClickPos(): com.massifmaps.core.ScreenPos;
                public hashCode(): number;
                public getClickType(): com.massifmaps.ui.ClickType;
                public getClickPos(): com.massifmaps.core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class PopupDrawInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.PopupDrawInfo>;
                public swigCMemOwn: boolean;
                public getScreenBounds(): com.massifmaps.core.ScreenBounds;
                public getAnchorScreenPos(): com.massifmaps.core.ScreenPos;
                public getPopup(): com.massifmaps.vectorelements.Popup;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public constructor(anchorScreenPos: com.massifmaps.core.ScreenPos, screenBounds: com.massifmaps.core.ScreenBounds, popup: com.massifmaps.vectorelements.Popup, dpToPX: number);
                public getDPToPX(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class RasterTileClickInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.RasterTileClickInfo>;
                public swigCMemOwn: boolean;
                public getClickInfo(): com.massifmaps.ui.ClickInfo;
                public getLayer(): com.massifmaps.layers.Layer;
                public getClickPos(): com.massifmaps.core.MapPos;
                public getNearestColor(): com.massifmaps.graphics.Color;
                public equals(obj: any): boolean;
                public getMapTile(): com.massifmaps.core.MapTile;
                public hashCode(): number;
                public getClickType(): com.massifmaps.ui.ClickType;
                public getInterpolatedColor(): com.massifmaps.graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class TextureMapRedrawRequestListener extends com.massifmaps.renderers.RedrawRequestListener {
                public static class: java.lang.Class<com.massifmaps.ui.TextureMapRedrawRequestListener>;
                public onRedrawRequested(): void;
                public constructor();
                public constructor(mapView: com.massifmaps.ui.TextureMapView);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class TextureMapView extends com.massifmaps.ui.GLTextureView implements globalAndroid.opengl.GLSurfaceView.Renderer, com.massifmaps.ui.MapViewInterface {
                public static class: java.lang.Class<com.massifmaps.ui.TextureMapView>;
                public setMapEventListener(mapEventListener: com.massifmaps.ui.MapEventListener): void;
                public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
                public constructor(context: globalAndroid.content.Context);
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
                public zoom(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                public getOptions(): com.massifmaps.components.Options;
                public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
                public rotate(deltaAngle: number, durationSeconds: number): void;
                public cancelAllTasks(): void;
                public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
                public sendAccessibilityEvent(param0: number): void;
                public moveToFitBounds(param0: com.massifmaps.core.MapBounds, param1: com.massifmaps.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
                public setZoom(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                public tilt(deltaTilt: number, durationSeconds: number): void;
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public setTilt(param0: number, param1: number): void;
                public mapToScreen(mapPos: com.massifmaps.core.MapPos): com.massifmaps.core.ScreenPos;
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public onSurfaceChanged(gl: javax.microedition.khronos.opengles.GL10, width: number, height: number): void;
                public clearPreloadingCaches(): void;
                public clearAllCaches(): void;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                public getMapEventListener(): com.massifmaps.ui.MapEventListener;
                public screenToMap(param0: com.massifmaps.core.ScreenPos): com.massifmaps.core.MapPos;
                public zoom(param0: number, param1: number): void;
                public setTilt(tilt: number, durationSeconds: number): void;
                public pan(deltaPos: com.massifmaps.core.MapVec, durationSeconds: number): void;
                public setFocusPos(param0: com.massifmaps.core.MapPos, param1: number): void;
                public getMapRenderer(): com.massifmaps.renderers.MapRenderer;
                public rotate(param0: number, param1: number): void;
                public setMapEventListener(param0: com.massifmaps.ui.MapEventListener): void;
                public constructor(e: globalAndroid.content.Context, this_: globalAndroid.util.AttributeSet);
                public rotate(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                public zoom(deltaZoom: number, durationSeconds: number): void;
                public getFocusPos(): com.massifmaps.core.MapPos;
                public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
                public setMapRotation(angle: number, durationSeconds: number): void;
                public setMapRotation(param0: number, param1: number): void;
                public mapToScreen(param0: com.massifmaps.core.MapPos): com.massifmaps.core.ScreenPos;
                public setTranslucent(translucent: boolean): void;
                public getZoom(): number;
                public setZoom(param0: number, param1: number): void;
                public setFocusPos(pos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public getMapRotation(): number;
                public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
                public onTouchEvent(pointer1Index: globalAndroid.view.MotionEvent): boolean;
                public pan(param0: com.massifmaps.core.MapVec, param1: number): void;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public setMapRotation(angle: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public setZoom(zoom: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
                public onSurfaceCreated(gl: javax.microedition.khronos.opengles.GL10, config: javax.microedition.khronos.egl.EGLConfig): void;
                public getLayers(): com.massifmaps.components.Layers;
                public onDrawFrame(gl: javax.microedition.khronos.opengles.GL10): void;
                public tilt(param0: number, param1: number): void;
                public rotate(deltaAngle: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public moveToFitBounds(mapBounds: com.massifmaps.core.MapBounds, screenBounds: com.massifmaps.core.ScreenBounds, integerZoom: boolean, durationSeconds: number): void;
                public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
                public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                public moveToFitBounds(mapBounds: com.massifmaps.core.MapBounds, screenBounds: com.massifmaps.core.ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number): void;
                public setZoom(zoom: number, durationSeconds: number): void;
                public setMapRotation(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                public screenToMap(screenPos: com.massifmaps.core.ScreenPos): com.massifmaps.core.MapPos;
                public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
                public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                public zoom(deltaZoom: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                public getTilt(): number;
                public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                public moveToFitBounds(param0: com.massifmaps.core.MapBounds, param1: com.massifmaps.core.ScreenBounds, param2: boolean, param3: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class UTFGridClickInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.UTFGridClickInfo>;
                public swigCMemOwn: boolean;
                public getClickInfo(): com.massifmaps.ui.ClickInfo;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getElementInfo(): com.massifmaps.core.Variant;
                public getClickType(): com.massifmaps.ui.ClickType;
                public getLayer(): com.massifmaps.layers.Layer;
                public getClickPos(): com.massifmaps.core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class VectorElementClickInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.VectorElementClickInfo>;
                public swigCMemOwn: boolean;
                public getClickInfo(): com.massifmaps.ui.ClickInfo;
                public getLayer(): com.massifmaps.layers.Layer;
                public getClickPos(): com.massifmaps.core.MapPos;
                public getElementClickPos(): com.massifmaps.core.MapPos;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getClickType(): com.massifmaps.ui.ClickType;
                public getVectorElement(): com.massifmaps.vectorelements.VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class VectorElementDragInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.VectorElementDragInfo>;
                public swigCMemOwn: boolean;
                public getScreenPos(): com.massifmaps.core.ScreenPos;
                public equals(obj: any): boolean;
                public getDragMode(): com.massifmaps.ui.VectorElementDragMode;
                public hashCode(): number;
                public getMapPos(): com.massifmaps.core.MapPos;
                public getVectorElement(): com.massifmaps.vectorelements.VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class VectorElementDragMode {
                public static class: java.lang.Class<com.massifmaps.ui.VectorElementDragMode>;
                public static VECTOR_ELEMENT_DRAG_MODE_VERTEX: com.massifmaps.ui.VectorElementDragMode;
                public static VECTOR_ELEMENT_DRAG_MODE_ELEMENT: com.massifmaps.ui.VectorElementDragMode;
                public swigValue(): number;
                public static swigToEnum(swigEnum: number): com.massifmaps.ui.VectorElementDragMode;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static values(): androidNative.Array<com.massifmaps.ui.VectorElementDragMode>;
                public static valueOf(name: string): com.massifmaps.ui.VectorElementDragMode;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace ui {
            export class VectorTileClickInfo extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.ui.VectorTileClickInfo>;
                public swigCMemOwn: boolean;
                public getClickInfo(): com.massifmaps.ui.ClickInfo;
                public getFeaturePosIndex(): number;
                public getFeature(): com.massifmaps.geometry.VectorTileFeature;
                public getFeatureClickPos(): com.massifmaps.core.MapPos;
                public getLayer(): com.massifmaps.layers.Layer;
                public getClickPos(): com.massifmaps.core.MapPos;
                public equals(obj: any): boolean;
                public getMapTile(): com.massifmaps.core.MapTile;
                public hashCode(): number;
                public getClickType(): com.massifmaps.ui.ClickType;
                public getFeatureLayerName(): string;
                public getFeatureId(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace utils {
            export class AndroidAssetPackage extends com.massifmaps.utils.AssetPackage {
                public static class: java.lang.Class<com.massifmaps.utils.AndroidAssetPackage>;
                public constructor(basePath: string, baseAssetPackage: com.massifmaps.utils.AssetPackage);
                public getBasePath(): string;
                public reload(): void;
                public constructor(basePath: string);
                public constructor();
                public getLocalAssetNames(): com.massifmaps.core.StringVector;
                public loadAsset(name: string): com.massifmaps.core.BinaryData;
                public getAssetNames(): com.massifmaps.core.StringVector;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace utils {
            export class AndroidUtils extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.utils.AndroidUtils>;
                public swigCMemOwn: boolean;
                public static setContext(context: globalAndroid.content.Context): void;
                public static getDeviceType(): string;
                public static getDeviceOS(): string;
                public static attachJVM(jenv: any): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace utils {
            export class AssetPackage extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.utils.AssetPackage>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public constructor();
                public equals(obj: any): boolean;
                public loadAsset(name: string): com.massifmaps.core.BinaryData;
                public hashCode(): number;
                public getAssetNames(): com.massifmaps.core.StringVector;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace utils {
            export class AssetUtils extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.utils.AssetUtils>;
                public swigCMemOwn: boolean;
                public static listAssets(path: string): com.massifmaps.core.StringVector;
                public static assetExists(path: string): boolean;
                public static setAssetManagerPointer(androidAssetManager: globalAndroid.content.res.AssetManager): void;
                public static loadAsset(path: string): com.massifmaps.core.BinaryData;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace utils {
            export class BitmapUtils extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.utils.BitmapUtils>;
                public swigCMemOwn: boolean;
                public static loadBitmapFromFile(filePath: string): com.massifmaps.graphics.Bitmap;
                public static createAndroidBitmapFromBitmap(bitmap: com.massifmaps.graphics.Bitmap): globalAndroid.graphics.Bitmap;
                public static loadBitmapFromAssets(assetPath: string): com.massifmaps.graphics.Bitmap;
                public static createBitmapFromAndroidBitmap(androidBitmap: globalAndroid.graphics.Bitmap): com.massifmaps.graphics.Bitmap;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace utils {
            export class DirAssetPackage extends com.massifmaps.utils.AssetPackage {
                public static class: java.lang.Class<com.massifmaps.utils.DirAssetPackage>;
                public constructor(dirPath: string);
                public constructor(dirPath: string, baseAssetPackage: com.massifmaps.utils.AssetPackage);
                public getDirPath(): string;
                public reload(): void;
                public constructor();
                public getLocalAssetNames(): com.massifmaps.core.StringVector;
                public loadAsset(name: string): com.massifmaps.core.BinaryData;
                public getAssetNames(): com.massifmaps.core.StringVector;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace utils {
            export class DontObfuscate extends java.lang.Object implements java.lang.annotation.Annotation {
                public static class: java.lang.Class<com.massifmaps.utils.DontObfuscate>;
                /**
                 * Constructs a new instance of the com.massifmaps.utils.DontObfuscate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { annotationType(): java.lang.Class<any>; equals(param0: any): boolean; hashCode(): number; toString(): string; });
                public constructor();
                public hashCode(): number;
                public equals(param0: any): boolean;
                public annotationType(): java.lang.Class<any>;
                public toString(): string;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace utils {
            export class Log extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.utils.Log>;
                public swigCMemOwn: boolean;
                public static setShowInfo(showInfo: boolean): void;
                public static fatal(message: string): void;
                public static setTag(tag: string): void;
                public static isShowInfo(): boolean;
                public static getLogEventListener(): com.massifmaps.utils.LogEventListener;
                public static setShowError(showError: boolean): void;
                public static setShowWarn(showWarn: boolean): void;
                public static error(message: string): void;
                public static info(message: string): void;
                public static isShowError(): boolean;
                public static setShowDebug(showDebug: boolean): void;
                public static debug(message: string): void;
                public static isShowDebug(): boolean;
                public static isShowWarn(): boolean;
                public static warn(message: string): void;
                public static getTag(): string;
                public static setLogEventListener(listener: com.massifmaps.utils.LogEventListener): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace utils {
            export class LogEventListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.utils.LogEventListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public onInfoEvent(message: string): boolean;
                public onFatalEvent(message: string): boolean;
                public onDebugEvent(message: string): boolean;
                public constructor();
                public onErrorEvent(message: string): boolean;
                public onWarnEvent(message: string): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace utils {
            export class TileUtils extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.utils.TileUtils>;
                public swigCMemOwn: boolean;
                public static calculateMapTile(mapPos: com.massifmaps.core.MapPos, zoom: number, proj: com.massifmaps.projections.Projection): com.massifmaps.core.MapTile;
                public static calculateClippedMapTile(mapPos: com.massifmaps.core.MapPos, zoom: number, proj: com.massifmaps.projections.Projection): com.massifmaps.core.MapTile;
                public static calculateMapTileBounds(mapTile: com.massifmaps.core.MapTile, proj: com.massifmaps.projections.Projection): com.massifmaps.core.MapBounds;
                public static calculateMapTileOrigin(mapTile: com.massifmaps.core.MapTile, proj: com.massifmaps.projections.Projection): com.massifmaps.core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace utils {
            export class ZippedAssetPackage extends com.massifmaps.utils.AssetPackage {
                public static class: java.lang.Class<com.massifmaps.utils.ZippedAssetPackage>;
                public constructor(zipData: com.massifmaps.core.BinaryData);
                public constructor();
                public constructor(zipData: com.massifmaps.core.BinaryData, baseAssetPackage: com.massifmaps.utils.AssetPackage);
                public getLocalAssetNames(): com.massifmaps.core.StringVector;
                public loadAsset(name: string): com.massifmaps.core.BinaryData;
                public getAssetNames(): com.massifmaps.core.StringVector;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class BalloonPopup extends com.massifmaps.vectorelements.Popup {
                public static class: java.lang.Class<com.massifmaps.vectorelements.BalloonPopup>;
                public replaceButton(oldButton: com.massifmaps.vectorelements.BalloonPopupButton, newButton: com.massifmaps.vectorelements.BalloonPopupButton): void;
                public clearButtons(): void;
                public getDescription(): string;
                public constructor(pos: com.massifmaps.core.MapPos, style: com.massifmaps.styles.BalloonPopupStyle, title: string, desc: string);
                public removeButton(button: com.massifmaps.vectorelements.BalloonPopupButton): void;
                public setTitle(title: string): void;
                public constructor(baseBillboard: com.massifmaps.vectorelements.Billboard, style: com.massifmaps.styles.BalloonPopupStyle, title: string, desc: string);
                public setStyle(style: com.massifmaps.styles.BalloonPopupStyle): void;
                public setStyle(style: com.massifmaps.styles.PopupStyle): void;
                public getStyle(): com.massifmaps.styles.BalloonPopupStyle;
                public setBalloonPopupEventListener(eventListener: com.massifmaps.vectorelements.BalloonPopupEventListener): void;
                public processClick(clickInfo: com.massifmaps.ui.ClickInfo, clickPos: com.massifmaps.core.MapPos, elementClickPos: com.massifmaps.core.ScreenPos): boolean;
                public drawBitmap(anchorScreenPos: com.massifmaps.core.ScreenPos, screenWidth: number, screenHeight: number, dpToPX: number): com.massifmaps.graphics.Bitmap;
                public getTitle(): string;
                public setDescription(desc: string): void;
                public getStyle(): com.massifmaps.styles.PopupStyle;
                public constructor(geometry: com.massifmaps.geometry.Geometry, style: com.massifmaps.styles.BalloonPopupStyle, title: string, desc: string);
                public addButton(button: com.massifmaps.vectorelements.BalloonPopupButton): void;
                public getBalloonPopupEventListener(): com.massifmaps.vectorelements.BalloonPopupEventListener;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class BalloonPopupButton extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.vectorelements.BalloonPopupButton>;
                public swigCMemOwn: boolean;
                public getTag(): com.massifmaps.core.Variant;
                public setTag(tag: com.massifmaps.core.Variant): void;
                public getText(): string;
                public constructor(style: com.massifmaps.styles.BalloonPopupButtonStyle, text: string);
                public getStyle(): com.massifmaps.styles.BalloonPopupButtonStyle;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class BalloonPopupEventListener extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.vectorelements.BalloonPopupEventListener>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public onButtonClicked(clickInfo: com.massifmaps.ui.BalloonPopupButtonClickInfo): boolean;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class Billboard extends com.massifmaps.vectorelements.VectorElement {
                public static class: java.lang.Class<com.massifmaps.vectorelements.Billboard>;
                public setRotation(rotation: number): void;
                public getGeometry(): com.massifmaps.geometry.Geometry;
                public getRootGeometry(): com.massifmaps.geometry.Geometry;
                public getBounds(): com.massifmaps.core.MapBounds;
                public setBaseBillboard(baseBillboard: com.massifmaps.vectorelements.Billboard): void;
                public setGeometry(geometry: com.massifmaps.geometry.Geometry): void;
                public getBaseBillboard(): com.massifmaps.vectorelements.Billboard;
                public getRotation(): number;
                public setPos(pos: com.massifmaps.core.MapPos): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class CustomPopup extends com.massifmaps.vectorelements.Popup {
                public static class: java.lang.Class<com.massifmaps.vectorelements.CustomPopup>;
                public getPopupHandler(): com.massifmaps.vectorelements.CustomPopupHandler;
                public processClick(clickInfo: com.massifmaps.ui.ClickInfo, clickPos: com.massifmaps.core.MapPos, elementClickPos: com.massifmaps.core.ScreenPos): boolean;
                public drawBitmap(anchorScreenPos: com.massifmaps.core.ScreenPos, screenWidth: number, screenHeight: number, dpToPX: number): com.massifmaps.graphics.Bitmap;
                public constructor(baseBillboard: com.massifmaps.vectorelements.Billboard, style: com.massifmaps.styles.PopupStyle, popupHandler: com.massifmaps.vectorelements.CustomPopupHandler);
                public constructor(geometry: com.massifmaps.geometry.Geometry, style: com.massifmaps.styles.PopupStyle, popupHandler: com.massifmaps.vectorelements.CustomPopupHandler);
                public constructor(pos: com.massifmaps.core.MapPos, style: com.massifmaps.styles.PopupStyle, popupHandler: com.massifmaps.vectorelements.CustomPopupHandler);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class CustomPopupHandler extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.vectorelements.CustomPopupHandler>;
                public swigCMemOwn: boolean;
                public swigDirectorDisconnect(): void;
                public onPopupClicked(popupClickInfo: com.massifmaps.ui.PopupClickInfo): boolean;
                public onDrawPopup(popupDrawInfo: com.massifmaps.ui.PopupDrawInfo): com.massifmaps.graphics.Bitmap;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class GeometryCollection extends com.massifmaps.vectorelements.VectorElement {
                public static class: java.lang.Class<com.massifmaps.vectorelements.GeometryCollection>;
                public getGeometry(): com.massifmaps.geometry.Geometry;
                public setGeometry(geometry: com.massifmaps.geometry.MultiGeometry): void;
                public constructor(geometry: com.massifmaps.geometry.MultiGeometry, style: com.massifmaps.styles.GeometryCollectionStyle);
                public getGeometry(): com.massifmaps.geometry.MultiGeometry;
                public getStyle(): com.massifmaps.styles.GeometryCollectionStyle;
                public setStyle(style: com.massifmaps.styles.GeometryCollectionStyle): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class Label extends com.massifmaps.vectorelements.Billboard {
                public static class: java.lang.Class<com.massifmaps.vectorelements.Label>;
                public getStyle(): com.massifmaps.styles.LabelStyle;
                public setStyle(style: com.massifmaps.styles.LabelStyle): void;
                public drawBitmap(dpToPX: number): com.massifmaps.graphics.Bitmap;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class Line extends com.massifmaps.vectorelements.VectorElement {
                public static class: java.lang.Class<com.massifmaps.vectorelements.Line>;
                public constructor(geometry: com.massifmaps.geometry.LineGeometry, style: com.massifmaps.styles.LineStyle);
                public getGeometry(): com.massifmaps.geometry.Geometry;
                public getPoses(): com.massifmaps.core.MapPosVector;
                public constructor(poses: com.massifmaps.core.MapPosVector, style: com.massifmaps.styles.LineStyle);
                public setGeometry(geometry: com.massifmaps.geometry.LineGeometry): void;
                public setStyle(style: com.massifmaps.styles.LineStyle): void;
                public setPoses(poses: com.massifmaps.core.MapPosVector): void;
                public getStyle(): com.massifmaps.styles.LineStyle;
                public getGeometry(): com.massifmaps.geometry.LineGeometry;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class Marker extends com.massifmaps.vectorelements.Billboard {
                public static class: java.lang.Class<com.massifmaps.vectorelements.Marker>;
                public constructor(baseBillboard: com.massifmaps.vectorelements.Billboard, style: com.massifmaps.styles.MarkerStyle);
                public constructor(pos: com.massifmaps.core.MapPos, style: com.massifmaps.styles.MarkerStyle);
                public setStyle(style: com.massifmaps.styles.MarkerStyle): void;
                public getStyle(): com.massifmaps.styles.MarkerStyle;
                public constructor(geometry: com.massifmaps.geometry.Geometry, style: com.massifmaps.styles.MarkerStyle);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class NMLModel extends com.massifmaps.vectorelements.Billboard {
                public static class: java.lang.Class<com.massifmaps.vectorelements.NMLModel>;
                public setRotation(rotation: number): void;
                public constructor(pos: com.massifmaps.core.MapPos, style: com.massifmaps.styles.NMLModelStyle);
                public setStyle(style: com.massifmaps.styles.NMLModelStyle): void;
                public constructor(baseBillboard: com.massifmaps.vectorelements.Billboard, style: com.massifmaps.styles.NMLModelStyle);
                public getScale(): number;
                /** @deprecated */
                public getRotationAngle(): number;
                public setRotationAxis(axis: com.massifmaps.core.MapVec): void;
                public setRotation(axis: com.massifmaps.core.MapVec, angle: number): void;
                public getRotationAxis(): com.massifmaps.core.MapVec;
                public setScale(scale: number): void;
                public constructor(geometry: com.massifmaps.geometry.Geometry, style: com.massifmaps.styles.NMLModelStyle);
                /** @deprecated */
                public setRotationAngle(angle: number): void;
                public getStyle(): com.massifmaps.styles.NMLModelStyle;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class Point extends com.massifmaps.vectorelements.VectorElement {
                public static class: java.lang.Class<com.massifmaps.vectorelements.Point>;
                public getStyle(): com.massifmaps.styles.PointStyle;
                public getGeometry(): com.massifmaps.geometry.Geometry;
                public constructor(geometry: com.massifmaps.geometry.PointGeometry, style: com.massifmaps.styles.PointStyle);
                public getGeometry(): com.massifmaps.geometry.PointGeometry;
                public getPos(): com.massifmaps.core.MapPos;
                public setGeometry(geometry: com.massifmaps.geometry.PointGeometry): void;
                public constructor(pos: com.massifmaps.core.MapPos, style: com.massifmaps.styles.PointStyle);
                public setStyle(style: com.massifmaps.styles.PointStyle): void;
                public setPos(pos: com.massifmaps.core.MapPos): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class Polygon extends com.massifmaps.vectorelements.VectorElement {
                public static class: java.lang.Class<com.massifmaps.vectorelements.Polygon>;
                public getGeometry(): com.massifmaps.geometry.Geometry;
                public getPoses(): com.massifmaps.core.MapPosVector;
                public getGeometry(): com.massifmaps.geometry.PolygonGeometry;
                public setPoses(poses: com.massifmaps.core.MapPosVector): void;
                public setStyle(style: com.massifmaps.styles.PolygonStyle): void;
                public getHoles(): com.massifmaps.core.MapPosVectorVector;
                public constructor(poses: com.massifmaps.core.MapPosVector, style: com.massifmaps.styles.PolygonStyle);
                public setGeometry(geometry: com.massifmaps.geometry.PolygonGeometry): void;
                public getStyle(): com.massifmaps.styles.PolygonStyle;
                public constructor(poses: com.massifmaps.core.MapPosVector, holes: com.massifmaps.core.MapPosVectorVector, style: com.massifmaps.styles.PolygonStyle);
                public constructor(geometry: com.massifmaps.geometry.PolygonGeometry, style: com.massifmaps.styles.PolygonStyle);
                public setHoles(holes: com.massifmaps.core.MapPosVectorVector): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class Polygon3D extends com.massifmaps.vectorelements.VectorElement {
                public static class: java.lang.Class<com.massifmaps.vectorelements.Polygon3D>;
                public getGeometry(): com.massifmaps.geometry.Geometry;
                public getHeight(): number;
                public setStyle(style: com.massifmaps.styles.Polygon3DStyle): void;
                public getPoses(): com.massifmaps.core.MapPosVector;
                public constructor(poses: com.massifmaps.core.MapPosVector, style: com.massifmaps.styles.Polygon3DStyle, height: number);
                public getGeometry(): com.massifmaps.geometry.PolygonGeometry;
                public setPoses(poses: com.massifmaps.core.MapPosVector): void;
                public setHeight(height: number): void;
                public getHoles(): com.massifmaps.core.MapPosVectorVector;
                public setGeometry(geometry: com.massifmaps.geometry.PolygonGeometry): void;
                public getStyle(): com.massifmaps.styles.Polygon3DStyle;
                public setHoles(holes: com.massifmaps.core.MapPosVectorVector): void;
                public constructor(geometry: com.massifmaps.geometry.PolygonGeometry, style: com.massifmaps.styles.Polygon3DStyle, height: number);
                public constructor(poses: com.massifmaps.core.MapPosVector, holes: com.massifmaps.core.MapPosVectorVector, style: com.massifmaps.styles.Polygon3DStyle, height: number);
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class Popup extends com.massifmaps.vectorelements.Billboard {
                public static class: java.lang.Class<com.massifmaps.vectorelements.Popup>;
                public setStyle(style: com.massifmaps.styles.PopupStyle): void;
                public setAnchorPointX(anchorPointX: number): void;
                public processClick(clickInfo: com.massifmaps.ui.ClickInfo, clickPos: com.massifmaps.core.MapPos, elementClickPos: com.massifmaps.core.ScreenPos): boolean;
                public getAnchorPointY(): number;
                public drawBitmap(anchorScreenPos: com.massifmaps.core.ScreenPos, screenWidth: number, screenHeight: number, dpToPX: number): com.massifmaps.graphics.Bitmap;
                public setAnchorPoint(anchorPointX: number, anchorPointY: number): void;
                public getStyle(): com.massifmaps.styles.PopupStyle;
                public getAnchorPointX(): number;
                public setAnchorPointY(anchorPointY: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class Text extends com.massifmaps.vectorelements.Label {
                public static class: java.lang.Class<com.massifmaps.vectorelements.Text>;
                public constructor(pos: com.massifmaps.core.MapPos, style: com.massifmaps.styles.TextStyle, text: string);
                public getStyle(): com.massifmaps.styles.TextStyle;
                public constructor(baseBillboard: com.massifmaps.vectorelements.Billboard, style: com.massifmaps.styles.TextStyle, text: string);
                public setStyle(style: com.massifmaps.styles.TextStyle): void;
                public getStyle(): com.massifmaps.styles.LabelStyle;
                public getText(): string;
                public constructor(geometry: com.massifmaps.geometry.Geometry, style: com.massifmaps.styles.TextStyle, text: string);
                public setStyle(style: com.massifmaps.styles.LabelStyle): void;
                public drawBitmap(dpToPX: number): com.massifmaps.graphics.Bitmap;
                public setText(text: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class VectorElement extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.vectorelements.VectorElement>;
                public swigCMemOwn: boolean;
                public getMetaDataElement(key: string): com.massifmaps.core.Variant;
                public isVisible(): boolean;
                public getGeometry(): com.massifmaps.geometry.Geometry;
                public containsMetaDataKey(key: string): boolean;
                public notifyElementChanged(): void;
                public getId(): number;
                public setMetaDataElement(key: string, element: com.massifmaps.core.Variant): void;
                public getBounds(): com.massifmaps.core.MapBounds;
                public setMetaData(metaData: com.massifmaps.core.StringVariantMap): void;
                public setId(id: number): void;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public getMetaData(): com.massifmaps.core.StringVariantMap;
                public setVisible(visible: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectorelements {
            export class VectorElementVector extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.vectorelements.VectorElementVector>;
                public swigCMemOwn: boolean;
                public get(i: number): com.massifmaps.vectorelements.VectorElement;
                public constructor(n: number);
                public constructor();
                public size(): number;
                public add(x: com.massifmaps.vectorelements.VectorElement): void;
                public capacity(): number;
                public clear(): void;
                public set(i: number, val: com.massifmaps.vectorelements.VectorElement): void;
                public isEmpty(): boolean;
                public reserve(n: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectortiles {
            export class MBVectorTileDecoder extends com.massifmaps.vectortiles.VectorTileDecoder {
                public static class: java.lang.Class<com.massifmaps.vectortiles.MBVectorTileDecoder>;
                public constructor(cartoCSSStyleSet: com.massifmaps.styles.CartoCSSStyleSet);
                public setCompiledStyleSet(styleSet: com.massifmaps.styles.CompiledStyleSet): void;
                public getCartoCSSStyleSet(): com.massifmaps.styles.CartoCSSStyleSet;
                public setFeatureIdOverride(idOverride: boolean): void;
                public constructor(compiledStyleSet: com.massifmaps.styles.CompiledStyleSet);
                public static parseTileFormat(format: string): com.massifmaps.vectortiles.TileFormat;
                public setStyleParameter(param: string, value: string): boolean;
                public getCompiledStyleSet(): com.massifmaps.styles.CompiledStyleSet;
                public setCartoCSSStyleSet(styleSet: com.massifmaps.styles.CartoCSSStyleSet): void;
                public getStyleParameters(): com.massifmaps.core.StringVector;
                public getStyleLayerNames(): com.massifmaps.core.StringVector;
                public getTileFormat(): com.massifmaps.vectortiles.TileFormat;
                public setTileFormat(format: com.massifmaps.vectortiles.TileFormat): void;
                public getMaxZoom(): number;
                public setStyleParameters(params: com.massifmaps.core.StringMap): void;
                public getStyleParameter(param: string): string;
                public isFeatureIdOverride(): boolean;
                public addFallbackFont(fontData: com.massifmaps.core.BinaryData): void;
                public setJSONStyleParameters(params: string): void;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectortiles {
            export class TileFormat {
                public static class: java.lang.Class<com.massifmaps.vectortiles.TileFormat>;
                public static TILE_FORMAT_AUTO: com.massifmaps.vectortiles.TileFormat;
                public static TILE_FORMAT_MVT: com.massifmaps.vectortiles.TileFormat;
                public static TILE_FORMAT_MLT: com.massifmaps.vectortiles.TileFormat;
                public static swigToEnum(swigEnum: number): com.massifmaps.vectortiles.TileFormat;
                public swigValue(): number;
                public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
                public static valueOf(name: string): com.massifmaps.vectortiles.TileFormat;
                public static values(): androidNative.Array<com.massifmaps.vectortiles.TileFormat>;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectortiles {
            export class TorqueTileDecoder extends com.massifmaps.vectortiles.VectorTileDecoder {
                public static class: java.lang.Class<com.massifmaps.vectortiles.TorqueTileDecoder>;
                public getFrameCount(): number;
                public getMaxZoom(): number;
                public getStyleSet(): com.massifmaps.styles.CartoCSSStyleSet;
                public getResolution(): number;
                public setStyleSet(styleSet: com.massifmaps.styles.CartoCSSStyleSet): void;
                public addFallbackFont(fontData: com.massifmaps.core.BinaryData): void;
                public constructor(styleSet: com.massifmaps.styles.CartoCSSStyleSet);
                public getAnimationDuration(): number;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace massifmaps {
        export namespace vectortiles {
            export class VectorTileDecoder extends java.lang.Object {
                public static class: java.lang.Class<com.massifmaps.vectortiles.VectorTileDecoder>;
                public swigCMemOwn: boolean;
                public notifyDecoderRefreshed(): void;
                public getMaxZoom(): number;
                public equals(obj: any): boolean;
                public notifyDecoderChanged(): void;
                public hashCode(): number;
                public addFallbackFont(fontData: com.massifmaps.core.BinaryData): void;
                public getMinZoom(): number;
            }
        }
    }
}
