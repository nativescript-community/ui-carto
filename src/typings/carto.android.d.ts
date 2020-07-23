/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */
declare namespace com {
    export namespace carto {
        export class BuildConfig extends java.lang.Object {
            public static class: java.lang.Class<BuildConfig>;
            public static DEBUG: boolean;
            public static APPLICATION_ID: string;
            public static BUILD_TYPE: string;
            public static FLAVOR: string;
            public static VERSION_CODE: number;
            public static VERSION_NAME: string;
            public constructor();
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class Layers extends java.lang.Object {
                public static class: java.lang.Class<Layers>;
                public swigCMemOwn: boolean;
                public insert(param0: number, param1: layers.Layer): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public set(param0: number, param1: layers.Layer): void;
                public removeAll(param0: layers.LayerVector): boolean;
                public remove(param0: layers.Layer): boolean;
                public swigGetRawPtr(): number;
                public get(param0: number): layers.Layer;
                public delete(): void;
                public addAll(param0: layers.LayerVector): void;
                public hashCode(): number;
                public getAll(): layers.LayerVector;
                public equals(param0: any): boolean;
                public clear(): void;
                public static getCPtr(param0: Layers): number;
                public setAll(param0: layers.LayerVector): void;
                public add(param0: layers.Layer): void;
                public count(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class LayersModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LayersModuleJNI>;
                public static Layers_swigGetRawPtr(param0: number, param1: Layers): number;
                public static Layers_addAll(param0: number, param1: Layers, param2: number, param3: layers.LayerVector): void;
                public static Layers_remove(param0: number, param1: Layers, param2: number, param3: layers.Layer): boolean;
                public static Layers_count(param0: number, param1: Layers): number;
                public static Layers_add(param0: number, param1: Layers, param2: number, param3: layers.Layer): void;
                public static Layers_setAll(param0: number, param1: Layers, param2: number, param3: layers.LayerVector): void;
                public static Layers_insert(param0: number, param1: Layers, param2: number, param3: number, param4: layers.Layer): void;
                public constructor();
                public static Layers_get(param0: number, param1: Layers, param2: number): number;
                public static delete_Layers(param0: number): void;
                public static Layers_clear(param0: number, param1: Layers): void;
                public static Layers_removeAll(param0: number, param1: Layers, param2: number, param3: layers.LayerVector): boolean;
                public static Layers_set(param0: number, param1: Layers, param2: number, param3: number, param4: layers.Layer): void;
                public static Layers_getAll(param0: number, param1: Layers): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class LicenseManager extends java.lang.Object {
                public static class: java.lang.Class<LicenseManager>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: LicenseManager): number;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class LicenseManagerListener extends java.lang.Object {
                public static class: java.lang.Class<LicenseManagerListener>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static getCPtr(param0: LicenseManagerListener): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public onLicenseUpdated(param0: string): void;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): LicenseManagerListener;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class LicenseManagerListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LicenseManagerListenerModuleJNI>;
                public static LicenseManagerListener_change_ownership(param0: LicenseManagerListener, param1: number, param2: boolean): void;
                public static SwigDirector_LicenseManagerListener_onLicenseUpdated(param0: LicenseManagerListener, param1: string): void;
                public static delete_LicenseManagerListener(param0: number): void;
                public static LicenseManagerListener_swigGetClassName(param0: number, param1: LicenseManagerListener): string;
                public static new_LicenseManagerListener(): number;
                public static LicenseManagerListener_director_connect(param0: LicenseManagerListener, param1: number, param2: boolean, param3: boolean): void;
                public static LicenseManagerListener_onLicenseUpdated(param0: number, param1: LicenseManagerListener, param2: string): void;
                public static LicenseManagerListener_swigGetRawPtr(param0: number, param1: LicenseManagerListener): number;
                public static LicenseManagerListener_swigGetDirectorObject(param0: number, param1: LicenseManagerListener): any;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class LicenseManagerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LicenseManagerModuleJNI>;
                public constructor();
                public static delete_LicenseManager(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class Options extends java.lang.Object {
                public static class: java.lang.Class<Options>;
                public swigCMemOwn: boolean;
                public setTileThreadPoolSize(param0: number): void;
                public setRenderProjectionMode(param0: RenderProjectionMode): void;
                public setDPI(param0: number): void;
                public setWatermarkAlignmentY(param0: number): void;
                public setUserInput(param0: boolean): void;
                public getPivotMode(): PivotMode;
                public setEnvelopeThreadPoolSize(param0: number): void;
                public isRotatable(): boolean;
                public setWatermarkPadding(param0: core.ScreenPos): void;
                public setBackgroundBitmap(param0: graphics.Bitmap): void;
                public getWatermarkBitmap(): graphics.Bitmap;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public getBackgroundBitmap(): graphics.Bitmap;
                public getSkyColor(): graphics.Color;
                public setZoomGestures(param0: boolean): void;
                public getAmbientLightColor(): graphics.Color;
                public isZoomGestures(): boolean;
                public setWatermarkAlignmentX(param0: number): void;
                public setMainLightColor(param0: graphics.Color): void;
                public getFieldOfViewY(): number;
                public setKineticRotation(param0: boolean): void;
                public getPanBounds(): core.MapBounds;
                public setTiltRange(param0: core.MapRange): void;
                public setMainLightDirection(param0: core.MapVec): void;
                public setTileDrawSize(param0: number): void;
                public setClickTypeDetection(param0: boolean): void;
                public setRotatable(param0: boolean): void;
                public isSeamlessPanning(): boolean;
                public setWatermarkBitmap(param0: graphics.Bitmap): void;
                public setTiltGestureReversed(param0: boolean): void;
                public isClickTypeDetection(): boolean;
                public setRestrictedPanning(param0: boolean): void;
                public setBaseProjection(param0: projections.Projection): void;
                public setFieldOfViewY(param0: number): void;
                public setClearColor(param0: graphics.Color): void;
                public getFocusPointOffset(): core.ScreenPos;
                public getTileThreadPoolSize(): number;
                public getDrawDistance(): number;
                public setAmbientLightColor(param0: graphics.Color): void;
                public isTiltGestureReversed(): boolean;
                public setSeamlessPanning(param0: boolean): void;
                public getRenderProjectionMode(): RenderProjectionMode;
                public getWatermarkScale(): number;
                public isKineticRotation(): boolean;
                public finalize(): void;
                public setPivotMode(param0: PivotMode): void;
                public isUserInput(): boolean;
                public setPanBounds(param0: core.MapBounds): void;
                public getWatermarkAlignmentX(): number;
                public getClearColor(): graphics.Color;
                public getTiltRange(): core.MapRange;
                public setPanningMode(param0: PanningMode): void;
                public setKineticPan(param0: boolean): void;
                public delete(): void;
                public getWatermarkPadding(): core.ScreenPos;
                public isKineticZoom(): boolean;
                public getDPI(): number;
                public getWatermarkAlignmentY(): number;
                public setZoomRange(param0: core.MapRange): void;
                public getBaseProjection(): projections.Projection;
                public static getCPtr(param0: Options): number;
                public constructor(param0: number, param1: boolean);
                public setSkyColor(param0: graphics.Color): void;
                public isKineticPan(): boolean;
                public getZoomRange(): core.MapRange;
                public setDrawDistance(param0: number): void;
                public getPanningMode(): PanningMode;
                public swigGetRawPtr(): number;
                public getMainLightDirection(): core.MapVec;
                public getMainLightColor(): graphics.Color;
                public getTileDrawSize(): number;
                public isRestrictedPanning(): boolean;
                public setWatermarkScale(param0: number): void;
                public setKineticZoom(param0: boolean): void;
                public getEnvelopeThreadPoolSize(): number;
                public setFocusPointOffset(param0: core.ScreenPos): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class OptionsModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<OptionsModuleJNI>;
                public static Options_getPanningMode(param0: number, param1: Options): number;
                public static Options_getBackgroundBitmap(param0: number, param1: Options): number;
                public static Options_getWatermarkPadding(param0: number, param1: Options): number;
                public static Options_setBackgroundBitmap(param0: number, param1: Options, param2: number, param3: graphics.Bitmap): void;
                public static Options_getPivotMode(param0: number, param1: Options): number;
                public static delete_Options(param0: number): void;
                public static Options_getDPI(param0: number, param1: Options): number;
                public static Options_setTiltRange(param0: number, param1: Options, param2: number, param3: core.MapRange): void;
                public static Options_getDrawDistance(param0: number, param1: Options): number;
                public static Options_setDrawDistance(param0: number, param1: Options, param2: number): void;
                public constructor();
                public static Options_getFieldOfViewY(param0: number, param1: Options): number;
                public static Options_isKineticZoom(param0: number, param1: Options): boolean;
                public static Options_getSkyColor(param0: number, param1: Options): number;
                public static Options_setMainLightDirection(param0: number, param1: Options, param2: number, param3: core.MapVec): void;
                public static Options_setZoomRange(param0: number, param1: Options, param2: number, param3: core.MapRange): void;
                public static Options_isZoomGestures(param0: number, param1: Options): boolean;
                public static Options_setTileDrawSize(param0: number, param1: Options, param2: number): void;
                public static Options_isKineticPan(param0: number, param1: Options): boolean;
                public static Options_getMainLightColor(param0: number, param1: Options): number;
                public static Options_getRenderProjectionMode(param0: number, param1: Options): number;
                public static Options_setAmbientLightColor(param0: number, param1: Options, param2: number, param3: graphics.Color): void;
                public static Options_getTileThreadPoolSize(param0: number, param1: Options): number;
                public static Options_setRestrictedPanning(param0: number, param1: Options, param2: boolean): void;
                public static Options_setRotatable(param0: number, param1: Options, param2: boolean): void;
                public static Options_getWatermarkAlignmentX(param0: number, param1: Options): number;
                public static Options_setWatermarkAlignmentX(param0: number, param1: Options, param2: number): void;
                public static Options_getClearColor(param0: number, param1: Options): number;
                public static Options_getTileDrawSize(param0: number, param1: Options): number;
                public static Options_isKineticRotation(param0: number, param1: Options): boolean;
                public static Options_setBaseProjection(param0: number, param1: Options, param2: number, param3: projections.Projection): void;
                public static Options_swigGetRawPtr(param0: number, param1: Options): number;
                public static Options_isClickTypeDetection(param0: number, param1: Options): boolean;
                public static Options_setDPI(param0: number, param1: Options, param2: number): void;
                public static Options_setKineticRotation(param0: number, param1: Options, param2: boolean): void;
                public static Options_getMainLightDirection(param0: number, param1: Options): number;
                public static Options_isUserInput(param0: number, param1: Options): boolean;
                public static Options_setKineticZoom(param0: number, param1: Options, param2: boolean): void;
                public static Options_getBaseProjection(param0: number, param1: Options): number;
                public static Options_setWatermarkBitmap(param0: number, param1: Options, param2: number, param3: graphics.Bitmap): void;
                public static Options_setUserInput(param0: number, param1: Options, param2: boolean): void;
                public static Options_isTiltGestureReversed(param0: number, param1: Options): boolean;
                public static Options_getTiltRange(param0: number, param1: Options): number;
                public static Options_getPanBounds(param0: number, param1: Options): number;
                public static Options_setWatermarkAlignmentY(param0: number, param1: Options, param2: number): void;
                public static Options_getWatermarkScale(param0: number, param1: Options): number;
                public static Options_setRenderProjectionMode(param0: number, param1: Options, param2: number): void;
                public static Options_isSeamlessPanning(param0: number, param1: Options): boolean;
                public static Options_getWatermarkBitmap(param0: number, param1: Options): number;
                public static Options_getFocusPointOffset(param0: number, param1: Options): number;
                public static Options_setPanBounds(param0: number, param1: Options, param2: number, param3: core.MapBounds): void;
                public static Options_setSkyColor(param0: number, param1: Options, param2: number, param3: graphics.Color): void;
                public static Options_isRotatable(param0: number, param1: Options): boolean;
                public static Options_setWatermarkPadding(param0: number, param1: Options, param2: number, param3: core.ScreenPos): void;
                public static Options_setWatermarkScale(param0: number, param1: Options, param2: number): void;
                public static Options_setSeamlessPanning(param0: number, param1: Options, param2: boolean): void;
                public static Options_setZoomGestures(param0: number, param1: Options, param2: boolean): void;
                public static Options_setPivotMode(param0: number, param1: Options, param2: number): void;
                public static Options_getAmbientLightColor(param0: number, param1: Options): number;
                public static Options_setEnvelopeThreadPoolSize(param0: number, param1: Options, param2: number): void;
                public static Options_setPanningMode(param0: number, param1: Options, param2: number): void;
                public static Options_getEnvelopeThreadPoolSize(param0: number, param1: Options): number;
                public static Options_setKineticPan(param0: number, param1: Options, param2: boolean): void;
                public static Options_setFocusPointOffset(param0: number, param1: Options, param2: number, param3: core.ScreenPos): void;
                public static Options_setFieldOfViewY(param0: number, param1: Options, param2: number): void;
                public static Options_isRestrictedPanning(param0: number, param1: Options): boolean;
                public static Options_setTiltGestureReversed(param0: number, param1: Options, param2: boolean): void;
                public static Options_setTileThreadPoolSize(param0: number, param1: Options, param2: number): void;
                public static Options_setClickTypeDetection(param0: number, param1: Options, param2: boolean): void;
                public static Options_setClearColor(param0: number, param1: Options, param2: number, param3: graphics.Color): void;
                public static Options_getZoomRange(param0: number, param1: Options): number;
                public static Options_getWatermarkAlignmentY(param0: number, param1: Options): number;
                public static Options_setMainLightColor(param0: number, param1: Options, param2: number, param3: graphics.Color): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class PanningMode {
                public static class: java.lang.Class<PanningMode>;
                public static PANNING_MODE_FREE: PanningMode;
                public static PANNING_MODE_STICKY: PanningMode;
                public static PANNING_MODE_STICKY_FINAL: PanningMode;
                public static values(): native.Array<PanningMode>;
                public swigValue(): number;
                public static swigToEnum(param0: number): PanningMode;
                public static valueOf(param0: string): PanningMode;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace PanningMode {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class PivotMode {
                public static class: java.lang.Class<PivotMode>;
                public static PIVOT_MODE_TOUCHPOINT: PivotMode;
                public static PIVOT_MODE_CENTERPOINT: PivotMode;
                public static valueOf(param0: string): PivotMode;
                public swigValue(): number;
                public static swigToEnum(param0: number): PivotMode;
                public static values(): native.Array<PivotMode>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace PivotMode {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class RenderProjectionMode {
                public static class: java.lang.Class<RenderProjectionMode>;
                public static RENDER_PROJECTION_MODE_PLANAR: RenderProjectionMode;
                public static RENDER_PROJECTION_MODE_SPHERICAL: RenderProjectionMode;
                public static values(): native.Array<RenderProjectionMode>;
                public swigValue(): number;
                public static valueOf(param0: string): RenderProjectionMode;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                public static swigToEnum(param0: number): RenderProjectionMode;
            }
            export namespace RenderProjectionMode {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class Address extends java.lang.Object {
                public static class: java.lang.Class<Address>;
                public swigCMemOwn: boolean;
                public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: StringVector);
                public getStreet(): string;
                public getCountry(): string;
                public finalize(): void;
                public getCounty(): string;
                public constructor(param0: number, param1: boolean);
                public getName(): string;
                public getCategories(): StringVector;
                public toString(): string;
                public getNeighbourhood(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: Address): number;
                public delete(): void;
                public getPostcode(): string;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public getHouseNumber(): string;
                public getRegion(): string;
                public getLocality(): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class AddressModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<AddressModuleJNI>;
                public static Address_swigGetRawPtr(param0: number, param1: Address): number;
                public static Address_getCategories(param0: number, param1: Address): number;
                public static Address_getPostcode(param0: number, param1: Address): string;
                public static delete_Address(param0: number): void;
                public static Address_getNeighbourhood(param0: number, param1: Address): string;
                public static Address_getStreet(param0: number, param1: Address): string;
                public static Address_getLocality(param0: number, param1: Address): string;
                public static Address_getCountry(param0: number, param1: Address): string;
                public static Address_getRegion(param0: number, param1: Address): string;
                public static Address_toString(param0: number, param1: Address): string;
                public constructor();
                public static Address_getHouseNumber(param0: number, param1: Address): string;
                public static Address_getName(param0: number, param1: Address): string;
                public static new_Address__SWIG_1(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: number, param10: StringVector): number;
                public static Address_getCounty(param0: number, param1: Address): string;
                public static Address_equalsInternal(param0: number, param1: Address, param2: number, param3: Address): boolean;
                public static new_Address__SWIG_0(): number;
                public static Address_hashCodeInternal(param0: number, param1: Address): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class BinaryData extends java.lang.Object {
                public static class: java.lang.Class<BinaryData>;
                public swigCMemOwn: boolean;
                public constructor(param0: native.Array<number>);
                public getData(): native.Array<number>;
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: BinaryData): number;
                public toString(): string;
                public constructor();
                public size(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class BinaryDataModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BinaryDataModuleJNI>;
                public static BinaryData_swigGetRawPtr(param0: number, param1: BinaryData): number;
                public static BinaryData_size(param0: number, param1: BinaryData): number;
                public static new_BinaryData__SWIG_1(param0: native.Array<number>): number;
                public static BinaryData_getData(param0: number, param1: BinaryData): native.Array<number>;
                public static BinaryData_toString(param0: number, param1: BinaryData): string;
                public static new_BinaryData__SWIG_0(): number;
                public static delete_BinaryData(param0: number): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class IntVector extends java.lang.Object {
                public static class: java.lang.Class<IntVector>;
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public get(param0: number): number;
                public static getCPtr(param0: IntVector): number;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public set(param0: number, param1: number): void;
                public clear(): void;
                public add(param0: number): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class IntVectorModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<IntVectorModuleJNI>;
                public static IntVector_add(param0: number, param1: IntVector, param2: number): void;
                public static new_IntVector__SWIG_0(): number;
                public static IntVector_size(param0: number, param1: IntVector): number;
                public static IntVector_isEmpty(param0: number, param1: IntVector): boolean;
                public static IntVector_set(param0: number, param1: IntVector, param2: number, param3: number): void;
                public static IntVector_capacity(param0: number, param1: IntVector): number;
                public static IntVector_clear(param0: number, param1: IntVector): void;
                public static IntVector_swigGetRawPtr(param0: number, param1: IntVector): number;
                public constructor();
                public static IntVector_reserve(param0: number, param1: IntVector, param2: number): void;
                public static IntVector_get(param0: number, param1: IntVector, param2: number): number;
                public static delete_IntVector(param0: number): void;
                public static new_IntVector__SWIG_1(param0: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapBounds extends java.lang.Object {
                public static class: java.lang.Class<MapBounds>;
                public swigCMemOwn: boolean;
                public getMax(): MapPos;
                public contains(param0: MapPos): boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getCenter(): MapPos;
                public toString(): string;
                public intersects(param0: MapBounds): boolean;
                public shrinkToIntersection(param0: MapBounds): void;
                public constructor();
                public getMin(): MapPos;
                public constructor(param0: MapPos, param1: MapPos);
                public swigGetRawPtr(): number;
                public getDelta(): MapVec;
                public delete(): void;
                public hashCode(): number;
                public contains(param0: MapBounds): boolean;
                public equals(param0: any): boolean;
                public static getCPtr(param0: MapBounds): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapBoundsModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapBoundsModuleJNI>;
                public static MapBounds_contains__SWIG_1(param0: number, param1: MapBounds, param2: number, param3: MapBounds): boolean;
                public static MapBounds_contains__SWIG_0(param0: number, param1: MapBounds, param2: number, param3: MapPos): boolean;
                public static MapBounds_toString(param0: number, param1: MapBounds): string;
                public static MapBounds_swigGetRawPtr(param0: number, param1: MapBounds): number;
                public static MapBounds_getCenter(param0: number, param1: MapBounds): number;
                public static MapBounds_getMin(param0: number, param1: MapBounds): number;
                public static new_MapBounds__SWIG_1(param0: number, param1: MapPos, param2: number, param3: MapPos): number;
                public static delete_MapBounds(param0: number): void;
                public constructor();
                public static MapBounds_intersects(param0: number, param1: MapBounds, param2: number, param3: MapBounds): boolean;
                public static MapBounds_shrinkToIntersection(param0: number, param1: MapBounds, param2: number, param3: MapBounds): void;
                public static MapBounds_getMax(param0: number, param1: MapBounds): number;
                public static new_MapBounds__SWIG_0(): number;
                public static MapBounds_hashCodeInternal(param0: number, param1: MapBounds): number;
                public static MapBounds_equalsInternal(param0: number, param1: MapBounds, param2: number, param3: MapBounds): boolean;
                public static MapBounds_getDelta(param0: number, param1: MapBounds): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapEnvelope extends java.lang.Object {
                public static class: java.lang.Class<MapEnvelope>;
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getBounds(): MapBounds;
                public contains(param0: MapEnvelope): boolean;
                public toString(): string;
                public constructor();
                public intersects(param0: MapEnvelope): boolean;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: MapPosVector);
                public hashCode(): number;
                public constructor(param0: MapBounds);
                public equals(param0: any): boolean;
                public getConvexHull(): MapPosVector;
                public static getCPtr(param0: MapEnvelope): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapEnvelopeModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapEnvelopeModuleJNI>;
                public static MapEnvelope_equalsInternal(param0: number, param1: MapEnvelope, param2: number, param3: MapEnvelope): boolean;
                public static MapEnvelope_hashCodeInternal(param0: number, param1: MapEnvelope): number;
                public static MapEnvelope_getBounds(param0: number, param1: MapEnvelope): number;
                public static MapEnvelope_contains(param0: number, param1: MapEnvelope, param2: number, param3: MapEnvelope): boolean;
                public static new_MapEnvelope__SWIG_1(param0: number, param1: MapBounds): number;
                public static new_MapEnvelope__SWIG_2(param0: number, param1: MapPosVector): number;
                public static new_MapEnvelope__SWIG_0(): number;
                public static delete_MapEnvelope(param0: number): void;
                public constructor();
                public static MapEnvelope_toString(param0: number, param1: MapEnvelope): string;
                public static MapEnvelope_swigGetRawPtr(param0: number, param1: MapEnvelope): number;
                public static MapEnvelope_getConvexHull(param0: number, param1: MapEnvelope): number;
                public static MapEnvelope_intersects(param0: number, param1: MapEnvelope, param2: number, param3: MapEnvelope): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapPos extends java.lang.Object {
                public static class: java.lang.Class<MapPos>;
                public swigCMemOwn: boolean;
                public constructor(param0: number, param1: number);
                public constructor(param0: number, param1: number, param2: number);
                public subVec(param0: MapVec): MapPos;
                public add(param0: MapVec): MapPos;
                public getY(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public subPos(param0: MapPos): MapVec;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public getX(): number;
                public equals(param0: any): boolean;
                public getZ(): number;
                public static getCPtr(param0: MapPos): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapPosModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapPosModuleJNI>;
                public static MapPos_add(param0: number, param1: MapPos, param2: number, param3: MapVec): number;
                public static MapPosVector_add(param0: number, param1: MapPosVector, param2: number, param3: MapPos): void;
                public static MapPosVector_set(param0: number, param1: MapPosVector, param2: number, param3: number, param4: MapPos): void;
                public static new_MapPosVectorVector__SWIG_0(): number;
                public static MapPosVectorVector_set(param0: number, param1: MapPosVectorVector, param2: number, param3: number, param4: MapPosVector): void;
                public static new_MapPosVectorVector__SWIG_1(param0: number): number;
                public static delete_MapPosVectorVector(param0: number): void;
                public static MapPos_getY(param0: number, param1: MapPos): number;
                public static MapPosVector_clear(param0: number, param1: MapPosVector): void;
                public static MapPos_subVec(param0: number, param1: MapPos, param2: number, param3: MapVec): number;
                public constructor();
                public static MapPosVector_swigGetRawPtr(param0: number, param1: MapPosVector): number;
                public static MapPosVectorVector_swigGetRawPtr(param0: number, param1: MapPosVectorVector): number;
                public static MapPosVectorVector_capacity(param0: number, param1: MapPosVectorVector): number;
                public static MapPos_swigGetRawPtr(param0: number, param1: MapPos): number;
                public static MapPosVectorVector_add(param0: number, param1: MapPosVectorVector, param2: number, param3: MapPosVector): void;
                public static MapPosVectorVector_reserve(param0: number, param1: MapPosVectorVector, param2: number): void;
                public static new_MapPos__SWIG_2(param0: number, param1: number, param2: number): number;
                public static MapPos_getX(param0: number, param1: MapPos): number;
                public static MapPosVector_reserve(param0: number, param1: MapPosVector, param2: number): void;
                public static MapPos_getZ(param0: number, param1: MapPos): number;
                public static new_MapPosVector__SWIG_1(param0: number): number;
                public static MapPosVectorVector_size(param0: number, param1: MapPosVectorVector): number;
                public static MapPosVector_isEmpty(param0: number, param1: MapPosVector): boolean;
                public static MapPosVectorVector_get(param0: number, param1: MapPosVectorVector, param2: number): number;
                public static MapPosVectorVector_clear(param0: number, param1: MapPosVectorVector): void;
                public static MapPos_subPos(param0: number, param1: MapPos, param2: number, param3: MapPos): number;
                public static MapPosVector_size(param0: number, param1: MapPosVector): number;
                public static delete_MapPosVector(param0: number): void;
                public static MapPos_hashCodeInternal(param0: number, param1: MapPos): number;
                public static MapPosVector_get(param0: number, param1: MapPosVector, param2: number): number;
                public static MapPosVector_capacity(param0: number, param1: MapPosVector): number;
                public static delete_MapPos(param0: number): void;
                public static MapPos_toString(param0: number, param1: MapPos): string;
                public static MapPosVectorVector_isEmpty(param0: number, param1: MapPosVectorVector): boolean;
                public static new_MapPosVector__SWIG_0(): number;
                public static new_MapPos__SWIG_0(): number;
                public static new_MapPos__SWIG_1(param0: number, param1: number): number;
                public static MapPos_equalsInternal(param0: number, param1: MapPos, param2: number, param3: MapPos): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapPosVector extends java.lang.Object {
                public static class: java.lang.Class<MapPosVector>;
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: MapPosVector): number;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public get(param0: number): MapPos;
                public swigGetRawPtr(): number;
                public add(param0: MapPos): void;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public set(param0: number, param1: MapPos): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapPosVectorVector extends java.lang.Object {
                public static class: java.lang.Class<MapPosVectorVector>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: MapPosVectorVector): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public add(param0: MapPosVector): void;
                public set(param0: number, param1: MapPosVector): void;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public get(param0: number): MapPosVector;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapRange extends java.lang.Object {
                public static class: java.lang.Class<MapRange>;
                public swigCMemOwn: boolean;
                public constructor(param0: number, param1: number);
                public getMin(): number;
                public length(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public inRange(param0: number): boolean;
                public constructor();
                public getMax(): number;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: MapRange): number;
                public delete(): void;
                public hashCode(): number;
                public getMidrange(): number;
                public equals(param0: any): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapRangeModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapRangeModuleJNI>;
                public static MapRange_getMin(param0: number, param1: MapRange): number;
                public static MapRange_toString(param0: number, param1: MapRange): string;
                public static new_MapRange__SWIG_0(): number;
                public static MapRange_getMax(param0: number, param1: MapRange): number;
                public static new_MapRange__SWIG_1(param0: number, param1: number): number;
                public static MapRange_length(param0: number, param1: MapRange): number;
                public static MapRange_equalsInternal(param0: number, param1: MapRange, param2: number, param3: MapRange): boolean;
                public constructor();
                public static MapRange_hashCodeInternal(param0: number, param1: MapRange): number;
                public static MapRange_inRange(param0: number, param1: MapRange, param2: number): boolean;
                public static MapRange_swigGetRawPtr(param0: number, param1: MapRange): number;
                public static MapRange_getMidrange(param0: number, param1: MapRange): number;
                public static delete_MapRange(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapTile extends java.lang.Object {
                public static class: java.lang.Class<MapTile>;
                public swigCMemOwn: boolean;
                public getTileId(): number;
                public getZoom(): number;
                public getY(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public constructor();
                public static getCPtr(param0: MapTile): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public hashCode(): number;
                public getX(): number;
                public equals(param0: any): boolean;
                public getFrameNr(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapTileModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapTileModuleJNI>;
                public static delete_MapTile(param0: number): void;
                public static MapTile_getY(param0: number, param1: MapTile): number;
                public static MapTile_getTileId(param0: number, param1: MapTile): number;
                public static MapTile_toString(param0: number, param1: MapTile): string;
                public static MapTile_equalsInternal(param0: number, param1: MapTile, param2: number, param3: MapTile): boolean;
                public static MapTile_getX(param0: number, param1: MapTile): number;
                public constructor();
                public static MapTile_hashCodeInternal(param0: number, param1: MapTile): number;
                public static MapTile_getZoom(param0: number, param1: MapTile): number;
                public static new_MapTile__SWIG_1(param0: number, param1: number, param2: number, param3: number): number;
                public static new_MapTile__SWIG_0(): number;
                public static MapTile_swigGetRawPtr(param0: number, param1: MapTile): number;
                public static MapTile_getFrameNr(param0: number, param1: MapTile): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapVec extends java.lang.Object {
                public static class: java.lang.Class<MapVec>;
                public swigCMemOwn: boolean;
                public constructor(param0: number, param1: number);
                public mul(param0: number): MapVec;
                public constructor(param0: number, param1: number, param2: number);
                public crossProduct3D(param0: MapVec): MapVec;
                public getY(): number;
                public length(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public sub(param0: MapVec): MapVec;
                public crossProduct2D(param0: MapVec): number;
                public toString(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: MapVec): number;
                public dotProduct(param0: MapVec): number;
                public delete(): void;
                public hashCode(): number;
                public getX(): number;
                public div(param0: number): MapVec;
                public equals(param0: any): boolean;
                public getZ(): number;
                public add(param0: MapVec): MapVec;
                public getNormalized(): MapVec;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapVecModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapVecModuleJNI>;
                public static MapVec_getNormalized(param0: number, param1: MapVec): number;
                public static MapVec_crossProduct2D(param0: number, param1: MapVec, param2: number, param3: MapVec): number;
                public static new_MapVec__SWIG_2(param0: number, param1: number, param2: number): number;
                public static MapVec_length(param0: number, param1: MapVec): number;
                public static MapVec_mul(param0: number, param1: MapVec, param2: number): number;
                public static new_MapVec__SWIG_0(): number;
                public static MapVec_crossProduct3D(param0: number, param1: MapVec, param2: number, param3: MapVec): number;
                public static MapVec_hashCodeInternal(param0: number, param1: MapVec): number;
                public static MapVec_getY(param0: number, param1: MapVec): number;
                public constructor();
                public static MapVec_dotProduct(param0: number, param1: MapVec, param2: number, param3: MapVec): number;
                public static MapVec_getX(param0: number, param1: MapVec): number;
                public static MapVec_swigGetRawPtr(param0: number, param1: MapVec): number;
                public static MapVec_add(param0: number, param1: MapVec, param2: number, param3: MapVec): number;
                public static MapVec_equalsInternal(param0: number, param1: MapVec, param2: number, param3: MapVec): boolean;
                public static new_MapVec__SWIG_1(param0: number, param1: number): number;
                public static delete_MapVec(param0: number): void;
                public static MapVec_toString(param0: number, param1: MapVec): string;
                public static MapVec_getZ(param0: number, param1: MapVec): number;
                public static MapVec_sub(param0: number, param1: MapVec, param2: number, param3: MapVec): number;
                public static MapVec_div(param0: number, param1: MapVec, param2: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class ScreenBounds extends java.lang.Object {
                public static class: java.lang.Class<ScreenBounds>;
                public swigCMemOwn: boolean;
                public intersects(param0: ScreenBounds): boolean;
                public static getCPtr(param0: ScreenBounds): number;
                public getHeight(): number;
                public getMin(): ScreenPos;
                public constructor(param0: ScreenPos, param1: ScreenPos);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public constructor();
                public getCenter(): ScreenPos;
                public swigGetRawPtr(): number;
                public getWidth(): number;
                public delete(): void;
                public contains(param0: ScreenBounds): boolean;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public getMax(): ScreenPos;
                public contains(param0: ScreenPos): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class ScreenBoundsModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ScreenBoundsModuleJNI>;
                public static new_ScreenBounds__SWIG_0(): number;
                public static ScreenBounds_getWidth(param0: number, param1: ScreenBounds): number;
                public static ScreenBounds_equalsInternal(param0: number, param1: ScreenBounds, param2: number, param3: ScreenBounds): boolean;
                public static ScreenBounds_getCenter(param0: number, param1: ScreenBounds): number;
                public static new_ScreenBounds__SWIG_1(param0: number, param1: ScreenPos, param2: number, param3: ScreenPos): number;
                public static ScreenBounds_intersects(param0: number, param1: ScreenBounds, param2: number, param3: ScreenBounds): boolean;
                public static ScreenBounds_getMax(param0: number, param1: ScreenBounds): number;
                public static ScreenBounds_toString(param0: number, param1: ScreenBounds): string;
                public static ScreenBounds_swigGetRawPtr(param0: number, param1: ScreenBounds): number;
                public constructor();
                public static delete_ScreenBounds(param0: number): void;
                public static ScreenBounds_contains__SWIG_0(param0: number, param1: ScreenBounds, param2: number, param3: ScreenPos): boolean;
                public static ScreenBounds_getMin(param0: number, param1: ScreenBounds): number;
                public static ScreenBounds_hashCodeInternal(param0: number, param1: ScreenBounds): number;
                public static ScreenBounds_getHeight(param0: number, param1: ScreenBounds): number;
                public static ScreenBounds_contains__SWIG_1(param0: number, param1: ScreenBounds, param2: number, param3: ScreenBounds): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class ScreenPos extends java.lang.Object {
                public static class: java.lang.Class<ScreenPos>;
                public swigCMemOwn: boolean;
                public constructor(param0: number, param1: number);
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public getX(): number;
                public getY(): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public static getCPtr(param0: ScreenPos): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class ScreenPosModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ScreenPosModuleJNI>;
                public static new_ScreenPos__SWIG_0(): number;
                public static ScreenPos_getY(param0: number, param1: ScreenPos): number;
                public static ScreenPos_getX(param0: number, param1: ScreenPos): number;
                public static ScreenPosVector_swigGetRawPtr(param0: number, param1: ScreenPosVector): number;
                public static delete_ScreenPos(param0: number): void;
                public static new_ScreenPosVector__SWIG_1(param0: number): number;
                public static ScreenPosVector_isEmpty(param0: number, param1: ScreenPosVector): boolean;
                public static new_ScreenPos__SWIG_1(param0: number, param1: number): number;
                public static ScreenPos_swigGetRawPtr(param0: number, param1: ScreenPos): number;
                public constructor();
                public static ScreenPosVector_set(param0: number, param1: ScreenPosVector, param2: number, param3: number, param4: ScreenPos): void;
                public static ScreenPos_hashCodeInternal(param0: number, param1: ScreenPos): number;
                public static ScreenPosVector_get(param0: number, param1: ScreenPosVector, param2: number): number;
                public static ScreenPos_equalsInternal(param0: number, param1: ScreenPos, param2: number, param3: ScreenPos): boolean;
                public static ScreenPos_toString(param0: number, param1: ScreenPos): string;
                public static ScreenPosVector_capacity(param0: number, param1: ScreenPosVector): number;
                public static delete_ScreenPosVector(param0: number): void;
                public static new_ScreenPosVector__SWIG_0(): number;
                public static ScreenPosVector_reserve(param0: number, param1: ScreenPosVector, param2: number): void;
                public static ScreenPosVector_clear(param0: number, param1: ScreenPosVector): void;
                public static ScreenPosVector_size(param0: number, param1: ScreenPosVector): number;
                public static ScreenPosVector_add(param0: number, param1: ScreenPosVector, param2: number, param3: ScreenPos): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class ScreenPosVector extends java.lang.Object {
                public static class: java.lang.Class<ScreenPosVector>;
                public swigCMemOwn: boolean;
                public set(param0: number, param1: ScreenPos): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public static getCPtr(param0: ScreenPosVector): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public add(param0: ScreenPos): void;
                public get(param0: number): ScreenPos;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class StringMap extends java.lang.Object {
                public static class: java.lang.Class<StringMap>;
                public swigCMemOwn: boolean;
                public get(param0: string): string;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: StringMap): number;
                public constructor(param0: StringMap);
                public set(param0: string, param1: string): void;
                public del(param0: string): void;
                public constructor();
                public size(): number;
                public get_key(param0: number): string;
                public delete(): void;
                public clear(): void;
                public has_key(param0: string): boolean;
                public empty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class StringMapModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<StringMapModuleJNI>;
                public static StringMap_get(param0: number, param1: StringMap, param2: string): string;
                public static StringMap_get_key(param0: number, param1: StringMap, param2: number): string;
                public static StringMap_set(param0: number, param1: StringMap, param2: string, param3: string): void;
                public static StringMap_del(param0: number, param1: StringMap, param2: string): void;
                public static StringMap_empty(param0: number, param1: StringMap): boolean;
                public static StringMap_size(param0: number, param1: StringMap): number;
                public static delete_StringMap(param0: number): void;
                public static new_StringMap__SWIG_0(): number;
                public static new_StringMap__SWIG_1(param0: number, param1: StringMap): number;
                public static StringMap_has_key(param0: number, param1: StringMap, param2: string): boolean;
                public static StringMap_clear(param0: number, param1: StringMap): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class StringVariantMap extends java.lang.Object {
                public static class: java.lang.Class<StringVariantMap>;
                public swigCMemOwn: boolean;
                public set(param0: string, param1: Variant): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public get(param0: string): Variant;
                public static getCPtr(param0: StringVariantMap): number;
                public del(param0: string): void;
                public constructor();
                public constructor(param0: StringVariantMap);
                public size(): number;
                public get_key(param0: number): string;
                public swigGetRawPtr(): number;
                public delete(): void;
                public clear(): void;
                public has_key(param0: string): boolean;
                public empty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class StringVector extends java.lang.Object {
                public static class: java.lang.Class<StringVector>;
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public add(param0: string): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public static getCPtr(param0: StringVector): number;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public get(param0: number): string;
                public set(param0: number, param1: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class StringVectorModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<StringVectorModuleJNI>;
                public static StringVector_add(param0: number, param1: StringVector, param2: string): void;
                public static delete_StringVector(param0: number): void;
                public static new_StringVector__SWIG_1(param0: number): number;
                public static StringVector_get(param0: number, param1: StringVector, param2: number): string;
                public static StringVector_set(param0: number, param1: StringVector, param2: number, param3: string): void;
                public static new_StringVector__SWIG_0(): number;
                public static StringVector_capacity(param0: number, param1: StringVector): number;
                public constructor();
                public static StringVector_reserve(param0: number, param1: StringVector, param2: number): void;
                public static StringVector_swigGetRawPtr(param0: number, param1: StringVector): number;
                public static StringVector_size(param0: number, param1: StringVector): number;
                public static StringVector_isEmpty(param0: number, param1: StringVector): boolean;
                public static StringVector_clear(param0: number, param1: StringVector): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class Variant extends java.lang.Object {
                public static class: java.lang.Class<Variant>;
                public swigCMemOwn: boolean;
                public constructor(param0: VariantVector);
                public getBool(): boolean;
                public static getCPtr(param0: Variant): number;
                public finalize(): void;
                public constructor(param0: boolean);
                public getObjectKeys(): StringVector;
                public constructor(param0: string);
                public constructor();
                public constructor(param0: StringVariantMap);
                public delete(): void;
                public hashCode(): number;
                public getType(): VariantType;
                public equals(param0: any): boolean;
                public getString(): string;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public static fromString(param0: string): Variant;
                public swigGetRawPtr(): number;
                public getDouble(): number;
                public getArrayElement(param0: number): Variant;
                public containsObjectKey(param0: string): boolean;
                public constructor(param0: number);
                public getArraySize(): number;
                public getObjectElement(param0: string): Variant;
                public getLong(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class VariantArrayBuilder extends java.lang.Object {
                public static class: java.lang.Class<VariantArrayBuilder>;
                public swigCMemOwn: boolean;
                public buildVariant(): Variant;
                public static getCPtr(param0: VariantArrayBuilder): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public addLong(param0: number): void;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public addBool(param0: boolean): void;
                public equals(param0: any): boolean;
                public clear(): void;
                public addDouble(param0: number): void;
                public addString(param0: string): void;
                public addVariant(param0: Variant): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class VariantArrayBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VariantArrayBuilderModuleJNI>;
                public static VariantArrayBuilder_clear(param0: number, param1: VariantArrayBuilder): void;
                public static VariantArrayBuilder_addString(param0: number, param1: VariantArrayBuilder, param2: string): void;
                public static VariantArrayBuilder_addBool(param0: number, param1: VariantArrayBuilder, param2: boolean): void;
                public static VariantArrayBuilder_addDouble(param0: number, param1: VariantArrayBuilder, param2: number): void;
                public static VariantArrayBuilder_swigGetRawPtr(param0: number, param1: VariantArrayBuilder): number;
                public static VariantArrayBuilder_buildVariant(param0: number, param1: VariantArrayBuilder): number;
                public static delete_VariantArrayBuilder(param0: number): void;
                public static VariantArrayBuilder_addLong(param0: number, param1: VariantArrayBuilder, param2: number): void;
                public static VariantArrayBuilder_addVariant(param0: number, param1: VariantArrayBuilder, param2: number, param3: Variant): void;
                public static new_VariantArrayBuilder(): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class VariantModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VariantModuleJNI>;
                public static VariantVector_size(param0: number, param1: VariantVector): number;
                public static VariantVector_add(param0: number, param1: VariantVector, param2: number, param3: Variant): void;
                public static delete_VariantVector(param0: number): void;
                public static VariantVector_clear(param0: number, param1: VariantVector): void;
                public static Variant_getObjectKeys(param0: number, param1: Variant): number;
                public static Variant_getLong(param0: number, param1: Variant): number;
                public static Variant_toString(param0: number, param1: Variant): string;
                public static VariantVector_capacity(param0: number, param1: VariantVector): number;
                public static Variant_getObjectElement(param0: number, param1: Variant, param2: string): number;
                public static new_Variant__SWIG_1(param0: boolean): number;
                public static StringVariantMap_set(param0: number, param1: StringVariantMap, param2: string, param3: number, param4: Variant): void;
                public static delete_Variant(param0: number): void;
                public constructor();
                public static VariantVector_reserve(param0: number, param1: VariantVector, param2: number): void;
                public static new_StringVariantMap__SWIG_0(): number;
                public static StringVariantMap_has_key(param0: number, param1: StringVariantMap, param2: string): boolean;
                public static new_VariantVector__SWIG_0(): number;
                public static Variant_swigGetRawPtr(param0: number, param1: Variant): number;
                public static new_Variant__SWIG_4(param0: string): number;
                public static Variant_containsObjectKey(param0: number, param1: Variant, param2: string): boolean;
                public static Variant_equalsInternal(param0: number, param1: Variant, param2: number, param3: Variant): boolean;
                public static VariantVector_get(param0: number, param1: VariantVector, param2: number): number;
                public static StringVariantMap_clear(param0: number, param1: StringVariantMap): void;
                public static StringVariantMap_get_key(param0: number, param1: StringVariantMap, param2: number): string;
                public static Variant_hashCodeInternal(param0: number, param1: Variant): number;
                public static VariantVector_swigGetRawPtr(param0: number, param1: VariantVector): number;
                public static StringVariantMap_get(param0: number, param1: StringVariantMap, param2: string): number;
                public static StringVariantMap_swigGetRawPtr(param0: number, param1: StringVariantMap): number;
                public static new_VariantVector__SWIG_1(param0: number): number;
                public static delete_StringVariantMap(param0: number): void;
                public static new_Variant__SWIG_5(param0: number, param1: VariantVector): number;
                public static new_Variant__SWIG_6(param0: number, param1: StringVariantMap): number;
                public static new_Variant__SWIG_0(): number;
                public static StringVariantMap_del(param0: number, param1: StringVariantMap, param2: string): void;
                public static Variant_getType(param0: number, param1: Variant): number;
                public static Variant_getString(param0: number, param1: Variant): string;
                public static VariantVector_isEmpty(param0: number, param1: VariantVector): boolean;
                public static Variant_fromString(param0: string): number;
                public static Variant_getDouble(param0: number, param1: Variant): number;
                public static Variant_getArraySize(param0: number, param1: Variant): number;
                public static StringVariantMap_empty(param0: number, param1: StringVariantMap): boolean;
                public static new_Variant__SWIG_2(param0: number): number;
                public static VariantVector_set(param0: number, param1: VariantVector, param2: number, param3: number, param4: Variant): void;
                public static new_Variant__SWIG_3(param0: number): number;
                public static Variant_getArrayElement(param0: number, param1: Variant, param2: number): number;
                public static new_StringVariantMap__SWIG_1(param0: number, param1: StringVariantMap): number;
                public static StringVariantMap_size(param0: number, param1: StringVariantMap): number;
                public static Variant_getBool(param0: number, param1: Variant): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class VariantObjectBuilder extends java.lang.Object {
                public static class: java.lang.Class<VariantObjectBuilder>;
                public swigCMemOwn: boolean;
                public buildVariant(): Variant;
                public setBool(param0: string, param1: boolean): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public static getCPtr(param0: VariantObjectBuilder): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public setVariant(param0: string, param1: Variant): void;
                public equals(param0: any): boolean;
                public clear(): void;
                public setDouble(param0: string, param1: number): void;
                public setLong(param0: string, param1: number): void;
                public setString(param0: string, param1: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class VariantObjectBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VariantObjectBuilderModuleJNI>;
                public static VariantObjectBuilder_setBool(param0: number, param1: VariantObjectBuilder, param2: string, param3: boolean): void;
                public static VariantObjectBuilder_clear(param0: number, param1: VariantObjectBuilder): void;
                public static VariantObjectBuilder_swigGetRawPtr(param0: number, param1: VariantObjectBuilder): number;
                public static VariantObjectBuilder_setLong(param0: number, param1: VariantObjectBuilder, param2: string, param3: number): void;
                public static VariantObjectBuilder_setDouble(param0: number, param1: VariantObjectBuilder, param2: string, param3: number): void;
                public static delete_VariantObjectBuilder(param0: number): void;
                public static VariantObjectBuilder_setVariant(param0: number, param1: VariantObjectBuilder, param2: string, param3: number, param4: Variant): void;
                public static new_VariantObjectBuilder(): number;
                public static VariantObjectBuilder_setString(param0: number, param1: VariantObjectBuilder, param2: string, param3: string): void;
                public constructor();
                public static VariantObjectBuilder_buildVariant(param0: number, param1: VariantObjectBuilder): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class VariantType {
                public static class: java.lang.Class<VariantType>;
                public static VARIANT_TYPE_NULL: VariantType;
                public static VARIANT_TYPE_STRING: VariantType;
                public static VARIANT_TYPE_BOOL: VariantType;
                public static VARIANT_TYPE_INTEGER: VariantType;
                public static VARIANT_TYPE_DOUBLE: VariantType;
                public static VARIANT_TYPE_ARRAY: VariantType;
                public static VARIANT_TYPE_OBJECT: VariantType;
                public swigValue(): number;
                public static valueOf(param0: string): VariantType;
                public static values(): native.Array<VariantType>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                public static swigToEnum(param0: number): VariantType;
            }
            export namespace VariantType {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class VariantVector extends java.lang.Object {
                public static class: java.lang.Class<VariantVector>;
                public swigCMemOwn: boolean;
                public set(param0: number, param1: Variant): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public add(param0: Variant): void;
                public get(param0: number): Variant;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: VariantVector): number;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class AssetTileDataSource extends TileDataSource {
                public static class: java.lang.Class<AssetTileDataSource>;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public constructor(param0: number, param1: number, param2: string);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public buildAssetPath(param0: string, param1: core.MapTile): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): AssetTileDataSource;
                public loadTile(param0: core.MapTile): components.TileData;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public static getCPtr(param0: TileDataSource): number;
                public static getCPtr(param0: AssetTileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class AssetTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<AssetTileDataSourceModuleJNI>;
                public static SwigDirector_AssetTileDataSource_notifyTilesChanged(param0: AssetTileDataSource, param1: boolean): void;
                public static AssetTileDataSource_loadTileSwigExplicitAssetTileDataSource(param0: number, param1: AssetTileDataSource, param2: number, param3: core.MapTile): number;
                public static SwigDirector_AssetTileDataSource_loadTile(param0: AssetTileDataSource, param1: number): number;
                public static delete_AssetTileDataSource(param0: number): void;
                public static AssetTileDataSource_director_connect(param0: AssetTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static new_AssetTileDataSource(param0: number, param1: number, param2: string): number;
                public static AssetTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static SwigDirector_AssetTileDataSource_getMaxZoom(param0: AssetTileDataSource): number;
                public static SwigDirector_AssetTileDataSource_getDataExtent(param0: AssetTileDataSource): number;
                public constructor();
                public static AssetTileDataSource_swigGetClassName(param0: number, param1: AssetTileDataSource): string;
                public static AssetTileDataSource_change_ownership(param0: AssetTileDataSource, param1: number, param2: boolean): void;
                public static AssetTileDataSource_loadTile(param0: number, param1: AssetTileDataSource, param2: number, param3: core.MapTile): number;
                public static AssetTileDataSource_buildAssetPath(param0: number, param1: AssetTileDataSource, param2: string, param3: number, param4: core.MapTile): string;
                public static AssetTileDataSource_buildAssetPathSwigExplicitAssetTileDataSource(param0: number, param1: AssetTileDataSource, param2: string, param3: number, param4: core.MapTile): string;
                public static SwigDirector_AssetTileDataSource_getMinZoom(param0: AssetTileDataSource): number;
                public static AssetTileDataSource_swigGetDirectorObject(param0: number, param1: AssetTileDataSource): any;
                public static AssetTileDataSource_swigGetRawPtr(param0: number, param1: AssetTileDataSource): number;
                public static SwigDirector_AssetTileDataSource_buildAssetPath(param0: AssetTileDataSource, param1: string, param2: number): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class BitmapOverlayRasterTileDataSource extends TileDataSource {
                public static class: java.lang.Class<BitmapOverlayRasterTileDataSource>;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public constructor(param0: number, param1: number, param2: graphics.Bitmap, param3: projections.Projection, param4: core.MapPosVector, param5: core.ScreenPosVector);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BitmapOverlayRasterTileDataSource;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: core.MapTile): components.TileData;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: BitmapOverlayRasterTileDataSource): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public getDataExtent(): core.MapBounds;
                public static getCPtr(param0: TileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class BitmapOverlayRasterTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BitmapOverlayRasterTileDataSourceModuleJNI>;
                public static SwigDirector_BitmapOverlayRasterTileDataSource_getMaxZoom(param0: BitmapOverlayRasterTileDataSource): number;
                public static new_BitmapOverlayRasterTileDataSource(param0: number, param1: number, param2: number, param3: graphics.Bitmap, param4: number, param5: projections.Projection, param6: number, param7: core.MapPosVector, param8: number, param9: core.ScreenPosVector): number;
                public static BitmapOverlayRasterTileDataSource_loadTile(param0: number, param1: BitmapOverlayRasterTileDataSource, param2: number, param3: core.MapTile): number;
                public static BitmapOverlayRasterTileDataSource_change_ownership(param0: BitmapOverlayRasterTileDataSource, param1: number, param2: boolean): void;
                public static BitmapOverlayRasterTileDataSource_swigGetClassName(param0: number, param1: BitmapOverlayRasterTileDataSource): string;
                public static SwigDirector_BitmapOverlayRasterTileDataSource_loadTile(param0: BitmapOverlayRasterTileDataSource, param1: number): number;
                public static BitmapOverlayRasterTileDataSource_loadTileSwigExplicitBitmapOverlayRasterTileDataSource(param0: number, param1: BitmapOverlayRasterTileDataSource, param2: number, param3: core.MapTile): number;
                public constructor();
                public static BitmapOverlayRasterTileDataSource_swigGetRawPtr(param0: number, param1: BitmapOverlayRasterTileDataSource): number;
                public static delete_BitmapOverlayRasterTileDataSource(param0: number): void;
                public static SwigDirector_BitmapOverlayRasterTileDataSource_getDataExtent(param0: BitmapOverlayRasterTileDataSource): number;
                public static BitmapOverlayRasterTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static SwigDirector_BitmapOverlayRasterTileDataSource_getMinZoom(param0: BitmapOverlayRasterTileDataSource): number;
                public static BitmapOverlayRasterTileDataSource_getDataExtent(param0: number, param1: BitmapOverlayRasterTileDataSource): number;
                public static BitmapOverlayRasterTileDataSource_getDataExtentSwigExplicitBitmapOverlayRasterTileDataSource(param0: number, param1: BitmapOverlayRasterTileDataSource): number;
                public static BitmapOverlayRasterTileDataSource_swigGetDirectorObject(param0: number, param1: BitmapOverlayRasterTileDataSource): any;
                public static BitmapOverlayRasterTileDataSource_director_connect(param0: BitmapOverlayRasterTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_BitmapOverlayRasterTileDataSource_notifyTilesChanged(param0: BitmapOverlayRasterTileDataSource, param1: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class CacheTileDataSource extends TileDataSource {
                public static class: java.lang.Class<CacheTileDataSource>;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CacheTileDataSource;
                public static getCPtr(param0: CacheTileDataSource): number;
                public setCapacity(param0: number): void;
                public finalize(): void;
                public getCapacity(): number;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public swigGetClassName(): string;
                public getDataSource(): TileDataSource;
                public getMaxZoom(): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public constructor(param0: TileDataSource);
                public delete(): void;
                public clear(): void;
                public swigTakeOwnership(): void;
                public getDataExtent(): core.MapBounds;
                public static getCPtr(param0: TileDataSource): number;
                public notifyTilesChanged(param0: boolean): void;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class CacheTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CacheTileDataSourceModuleJNI>;
                public static CacheTileDataSource_getMinZoom(param0: number, param1: CacheTileDataSource): number;
                public static CacheTileDataSource_getMaxZoomSwigExplicitCacheTileDataSource(param0: number, param1: CacheTileDataSource): number;
                public static CacheTileDataSource_getMinZoomSwigExplicitCacheTileDataSource(param0: number, param1: CacheTileDataSource): number;
                public static CacheTileDataSource_clear(param0: number, param1: CacheTileDataSource): void;
                public static CacheTileDataSource_director_connect(param0: CacheTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static CacheTileDataSource_change_ownership(param0: CacheTileDataSource, param1: number, param2: boolean): void;
                public constructor();
                public static CacheTileDataSource_notifyTilesChanged(param0: number, param1: CacheTileDataSource, param2: boolean): void;
                public static SwigDirector_CacheTileDataSource_setCapacity(param0: CacheTileDataSource, param1: number): void;
                public static CacheTileDataSource_getDataExtentSwigExplicitCacheTileDataSource(param0: number, param1: CacheTileDataSource): number;
                public static SwigDirector_CacheTileDataSource_clear(param0: CacheTileDataSource): void;
                public static CacheTileDataSource_getDataExtent(param0: number, param1: CacheTileDataSource): number;
                public static CacheTileDataSource_getDataSource(param0: number, param1: CacheTileDataSource): number;
                public static CacheTileDataSource_getCapacity(param0: number, param1: CacheTileDataSource): number;
                public static delete_CacheTileDataSource(param0: number): void;
                public static new_CacheTileDataSource(param0: number, param1: TileDataSource): number;
                public static SwigDirector_CacheTileDataSource_getMinZoom(param0: CacheTileDataSource): number;
                public static CacheTileDataSource_getMaxZoom(param0: number, param1: CacheTileDataSource): number;
                public static SwigDirector_CacheTileDataSource_notifyTilesChanged(param0: CacheTileDataSource, param1: boolean): void;
                public static CacheTileDataSource_notifyTilesChangedSwigExplicitCacheTileDataSource(param0: number, param1: CacheTileDataSource, param2: boolean): void;
                public static CacheTileDataSource_swigGetRawPtr(param0: number, param1: CacheTileDataSource): number;
                public static SwigDirector_CacheTileDataSource_getCapacity(param0: CacheTileDataSource): number;
                public static SwigDirector_CacheTileDataSource_getDataExtent(param0: CacheTileDataSource): number;
                public static SwigDirector_CacheTileDataSource_loadTile(param0: CacheTileDataSource, param1: number): number;
                public static SwigDirector_CacheTileDataSource_getMaxZoom(param0: CacheTileDataSource): number;
                public static CacheTileDataSource_swigGetClassName(param0: number, param1: CacheTileDataSource): string;
                public static CacheTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static CacheTileDataSource_setCapacity(param0: number, param1: CacheTileDataSource, param2: number): void;
                public static CacheTileDataSource_swigGetDirectorObject(param0: number, param1: CacheTileDataSource): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class CartoOnlineTileDataSource extends TileDataSource {
                public static class: java.lang.Class<CartoOnlineTileDataSource>;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static getCPtr(param0: CartoOnlineTileDataSource): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: core.MapTile): components.TileData;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CartoOnlineTileDataSource;
                public swigTakeOwnership(): void;
                public static getCPtr(param0: TileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class CartoOnlineTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CartoOnlineTileDataSourceModuleJNI>;
                public static delete_CartoOnlineTileDataSource(param0: number): void;
                public static CartoOnlineTileDataSource_swigGetDirectorObject(param0: number, param1: CartoOnlineTileDataSource): any;
                public static SwigDirector_CartoOnlineTileDataSource_getDataExtent(param0: CartoOnlineTileDataSource): number;
                public static SwigDirector_CartoOnlineTileDataSource_getMinZoom(param0: CartoOnlineTileDataSource): number;
                public static new_CartoOnlineTileDataSource(param0: string): number;
                public static CartoOnlineTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static CartoOnlineTileDataSource_change_ownership(param0: CartoOnlineTileDataSource, param1: number, param2: boolean): void;
                public constructor();
                public static CartoOnlineTileDataSource_director_connect(param0: CartoOnlineTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static CartoOnlineTileDataSource_swigGetRawPtr(param0: number, param1: CartoOnlineTileDataSource): number;
                public static CartoOnlineTileDataSource_loadTileSwigExplicitCartoOnlineTileDataSource(param0: number, param1: CartoOnlineTileDataSource, param2: number, param3: core.MapTile): number;
                public static CartoOnlineTileDataSource_swigGetClassName(param0: number, param1: CartoOnlineTileDataSource): string;
                public static SwigDirector_CartoOnlineTileDataSource_notifyTilesChanged(param0: CartoOnlineTileDataSource, param1: boolean): void;
                public static CartoOnlineTileDataSource_loadTile(param0: number, param1: CartoOnlineTileDataSource, param2: number, param3: core.MapTile): number;
                public static SwigDirector_CartoOnlineTileDataSource_getMaxZoom(param0: CartoOnlineTileDataSource): number;
                public static SwigDirector_CartoOnlineTileDataSource_loadTile(param0: CartoOnlineTileDataSource, param1: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class CombinedTileDataSource extends TileDataSource {
                public static class: java.lang.Class<CombinedTileDataSource>;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: core.MapTile): components.TileData;
                public getMaxZoom(): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CombinedTileDataSource;
                public delete(): void;
                public swigTakeOwnership(): void;
                public constructor(param0: TileDataSource, param1: TileDataSource, param2: number);
                public static getCPtr(param0: CombinedTileDataSource): number;
                public getDataExtent(): core.MapBounds;
                public static getCPtr(param0: TileDataSource): number;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class CombinedTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CombinedTileDataSourceModuleJNI>;
                public static SwigDirector_CombinedTileDataSource_getMinZoom(param0: CombinedTileDataSource): number;
                public static CombinedTileDataSource_getDataExtentSwigExplicitCombinedTileDataSource(param0: number, param1: CombinedTileDataSource): number;
                public static CombinedTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static CombinedTileDataSource_getMaxZoom(param0: number, param1: CombinedTileDataSource): number;
                public static CombinedTileDataSource_swigGetRawPtr(param0: number, param1: CombinedTileDataSource): number;
                public static CombinedTileDataSource_swigGetClassName(param0: number, param1: CombinedTileDataSource): string;
                public static CombinedTileDataSource_getMinZoomSwigExplicitCombinedTileDataSource(param0: number, param1: CombinedTileDataSource): number;
                public constructor();
                public static new_CombinedTileDataSource(param0: number, param1: TileDataSource, param2: number, param3: TileDataSource, param4: number): number;
                public static CombinedTileDataSource_swigGetDirectorObject(param0: number, param1: CombinedTileDataSource): any;
                public static SwigDirector_CombinedTileDataSource_notifyTilesChanged(param0: CombinedTileDataSource, param1: boolean): void;
                public static SwigDirector_CombinedTileDataSource_getMaxZoom(param0: CombinedTileDataSource): number;
                public static SwigDirector_CombinedTileDataSource_loadTile(param0: CombinedTileDataSource, param1: number): number;
                public static CombinedTileDataSource_director_connect(param0: CombinedTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static CombinedTileDataSource_getMaxZoomSwigExplicitCombinedTileDataSource(param0: number, param1: CombinedTileDataSource): number;
                public static CombinedTileDataSource_change_ownership(param0: CombinedTileDataSource, param1: number, param2: boolean): void;
                public static delete_CombinedTileDataSource(param0: number): void;
                public static CombinedTileDataSource_getMinZoom(param0: number, param1: CombinedTileDataSource): number;
                public static CombinedTileDataSource_loadTileSwigExplicitCombinedTileDataSource(param0: number, param1: CombinedTileDataSource, param2: number, param3: core.MapTile): number;
                public static CombinedTileDataSource_loadTile(param0: number, param1: CombinedTileDataSource, param2: number, param3: core.MapTile): number;
                public static CombinedTileDataSource_getDataExtent(param0: number, param1: CombinedTileDataSource): number;
                public static SwigDirector_CombinedTileDataSource_getDataExtent(param0: CombinedTileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class GDALRasterTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<GDALRasterTileDataSourceModuleJNI>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class GeoJSONVectorTileDataSource extends TileDataSource {
                public static class: java.lang.Class<GeoJSONVectorTileDataSource>;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setLayerGeoJSON(param0: number, param1: core.Variant): void;
                public setLayerFeatureCollection(param0: number, param1: projections.Projection, param2: geometry.FeatureCollection): void;
                public deleteLayer(param0: number): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public swigGetClassName(): string;
                public createLayer(param0: string): number;
                public loadTile(param0: core.MapTile): components.TileData;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): GeoJSONVectorTileDataSource;
                public swigTakeOwnership(): void;
                public static getCPtr(param0: GeoJSONVectorTileDataSource): number;
                public getDataExtent(): core.MapBounds;
                public static getCPtr(param0: TileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class GeoJSONVectorTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<GeoJSONVectorTileDataSourceModuleJNI>;
                public static SwigDirector_GeoJSONVectorTileDataSource_getMaxZoom(param0: GeoJSONVectorTileDataSource): number;
                public static GeoJSONVectorTileDataSource_getDataExtent(param0: number, param1: GeoJSONVectorTileDataSource): number;
                public static SwigDirector_GeoJSONVectorTileDataSource_getDataExtent(param0: GeoJSONVectorTileDataSource): number;
                public static GeoJSONVectorTileDataSource_deleteLayer(param0: number, param1: GeoJSONVectorTileDataSource, param2: number): void;
                public static GeoJSONVectorTileDataSource_loadTile(param0: number, param1: GeoJSONVectorTileDataSource, param2: number, param3: core.MapTile): number;
                public static GeoJSONVectorTileDataSource_change_ownership(param0: GeoJSONVectorTileDataSource, param1: number, param2: boolean): void;
                public static SwigDirector_GeoJSONVectorTileDataSource_getMinZoom(param0: GeoJSONVectorTileDataSource): number;
                public static GeoJSONVectorTileDataSource_swigGetRawPtr(param0: number, param1: GeoJSONVectorTileDataSource): number;
                public static GeoJSONVectorTileDataSource_swigGetClassName(param0: number, param1: GeoJSONVectorTileDataSource): string;
                public static delete_GeoJSONVectorTileDataSource(param0: number): void;
                public static GeoJSONVectorTileDataSource_loadTileSwigExplicitGeoJSONVectorTileDataSource(param0: number, param1: GeoJSONVectorTileDataSource, param2: number, param3: core.MapTile): number;
                public static new_GeoJSONVectorTileDataSource(param0: number, param1: number): number;
                public static GeoJSONVectorTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static SwigDirector_GeoJSONVectorTileDataSource_loadTile(param0: GeoJSONVectorTileDataSource, param1: number): number;
                public static GeoJSONVectorTileDataSource_getDataExtentSwigExplicitGeoJSONVectorTileDataSource(param0: number, param1: GeoJSONVectorTileDataSource): number;
                public static SwigDirector_GeoJSONVectorTileDataSource_notifyTilesChanged(param0: GeoJSONVectorTileDataSource, param1: boolean): void;
                public static GeoJSONVectorTileDataSource_setLayerGeoJSON(param0: number, param1: GeoJSONVectorTileDataSource, param2: number, param3: number, param4: core.Variant): void;
                public static GeoJSONVectorTileDataSource_createLayer(param0: number, param1: GeoJSONVectorTileDataSource, param2: string): number;
                public static GeoJSONVectorTileDataSource_swigGetDirectorObject(param0: number, param1: GeoJSONVectorTileDataSource): any;
                public static GeoJSONVectorTileDataSource_director_connect(param0: GeoJSONVectorTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static GeoJSONVectorTileDataSource_setLayerFeatureCollection(param0: number, param1: GeoJSONVectorTileDataSource, param2: number, param3: number, param4: projections.Projection, param5: number, param6: geometry.FeatureCollection): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class HTTPTileDataSource extends TileDataSource {
                public static class: java.lang.Class<HTTPTileDataSource>;
                public constructor(param0: number, param1: number);
                public setTMSScheme(param0: boolean): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public setSubdomains(param0: core.StringVector): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public loadTile(param0: core.MapTile): components.TileData;
                public constructor();
                public setHTTPHeaders(param0: core.StringMap): void;
                public delete(): void;
                public setMaxAgeHeaderCheck(param0: boolean): void;
                public static getCPtr(param0: HTTPTileDataSource): number;
                public swigReleaseOwnership(): void;
                public getSubdomains(): core.StringVector;
                public isTMSScheme(): boolean;
                public constructor(param0: number, param1: number, param2: string);
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getHTTPHeaders(): core.StringMap;
                public swigGetDirectorObject(): any;
                public buildTileURL(param0: string, param1: core.MapTile): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): HTTPTileDataSource;
                public swigGetRawPtr(): number;
                public isMaxAgeHeaderCheck(): boolean;
                public getBaseURL(): string;
                public swigTakeOwnership(): void;
                public setBaseURL(param0: string): void;
                public static getCPtr(param0: TileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class HTTPTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<HTTPTileDataSourceModuleJNI>;
                public static HTTPTileDataSource_swigGetClassName(param0: number, param1: HTTPTileDataSource): string;
                public static HTTPTileDataSource_setMaxAgeHeaderCheck(param0: number, param1: HTTPTileDataSource, param2: boolean): void;
                public static HTTPTileDataSource_director_connect(param0: HTTPTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public constructor();
                public static HTTPTileDataSource_getHTTPHeaders(param0: number, param1: HTTPTileDataSource): number;
                public static delete_HTTPTileDataSource(param0: number): void;
                public static HTTPTileDataSource_setTMSScheme(param0: number, param1: HTTPTileDataSource, param2: boolean): void;
                public static new_HTTPTileDataSource(param0: number, param1: number, param2: string): number;
                public static HTTPTileDataSource_isMaxAgeHeaderCheck(param0: number, param1: HTTPTileDataSource): boolean;
                public static HTTPTileDataSource_setHTTPHeaders(param0: number, param1: HTTPTileDataSource, param2: number, param3: core.StringMap): void;
                public static SwigDirector_HTTPTileDataSource_getMinZoom(param0: HTTPTileDataSource): number;
                public static HTTPTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static SwigDirector_HTTPTileDataSource_buildTileURL(param0: HTTPTileDataSource, param1: string, param2: number): string;
                public static HTTPTileDataSource_setSubdomains(param0: number, param1: HTTPTileDataSource, param2: number, param3: core.StringVector): void;
                public static SwigDirector_HTTPTileDataSource_getMaxZoom(param0: HTTPTileDataSource): number;
                public static HTTPTileDataSource_getBaseURL(param0: number, param1: HTTPTileDataSource): string;
                public static SwigDirector_HTTPTileDataSource_notifyTilesChanged(param0: HTTPTileDataSource, param1: boolean): void;
                public static HTTPTileDataSource_loadTile(param0: number, param1: HTTPTileDataSource, param2: number, param3: core.MapTile): number;
                public static HTTPTileDataSource_swigGetDirectorObject(param0: number, param1: HTTPTileDataSource): any;
                public static SwigDirector_HTTPTileDataSource_loadTile(param0: HTTPTileDataSource, param1: number): number;
                public static HTTPTileDataSource_loadTileSwigExplicitHTTPTileDataSource(param0: number, param1: HTTPTileDataSource, param2: number, param3: core.MapTile): number;
                public static HTTPTileDataSource_buildTileURL(param0: number, param1: HTTPTileDataSource, param2: string, param3: number, param4: core.MapTile): string;
                public static HTTPTileDataSource_isTMSScheme(param0: number, param1: HTTPTileDataSource): boolean;
                public static HTTPTileDataSource_setBaseURL(param0: number, param1: HTTPTileDataSource, param2: string): void;
                public static SwigDirector_HTTPTileDataSource_getDataExtent(param0: HTTPTileDataSource): number;
                public static HTTPTileDataSource_getSubdomains(param0: number, param1: HTTPTileDataSource): number;
                public static HTTPTileDataSource_change_ownership(param0: HTTPTileDataSource, param1: number, param2: boolean): void;
                public static HTTPTileDataSource_buildTileURLSwigExplicitHTTPTileDataSource(param0: number, param1: HTTPTileDataSource, param2: string, param3: number, param4: core.MapTile): string;
                public static HTTPTileDataSource_swigGetRawPtr(param0: number, param1: HTTPTileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class LocalSpatialIndexType {
                public static class: java.lang.Class<LocalSpatialIndexType>;
                public static LOCAL_SPATIAL_INDEX_TYPE_NULL: LocalSpatialIndexType;
                public static LOCAL_SPATIAL_INDEX_TYPE_KDTREE: LocalSpatialIndexType;
                public swigValue(): number;
                public static swigToEnum(param0: number): LocalSpatialIndexType;
                public static values(): native.Array<LocalSpatialIndexType>;
                public static valueOf(param0: string): LocalSpatialIndexType;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace LocalSpatialIndexType {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class LocalVectorDataSource extends VectorDataSource {
                public static class: java.lang.Class<LocalVectorDataSource>;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public getAll(): vectorelements.VectorElementVector;
                public setGeometrySimplifier(param0: geometry.GeometrySimplifier): void;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorDataSource;
                public constructor(param0: projections.Projection);
                public clear(): void;
                public loadElements(param0: renderers.components.CullState): components.VectorData;
                public getDataExtent(): core.MapBounds;
                public static getCPtr(param0: LocalVectorDataSource): number;
                public constructor(param0: projections.Projection, param1: LocalSpatialIndexType);
                public static getCPtr(param0: VectorDataSource): number;
                public setAll(param0: vectorelements.VectorElementVector): void;
                public addAll(param0: vectorelements.VectorElementVector): void;
                public swigReleaseOwnership(): void;
                public removeAll(param0: vectorelements.VectorElementVector): boolean;
                public add(param0: vectorelements.VectorElement): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public remove(param0: vectorelements.VectorElement): boolean;
                public swigGetRawPtr(): number;
                public getGeometrySimplifier(): geometry.GeometrySimplifier;
                public addFeatureCollection(param0: geometry.FeatureCollection, param1: styles.Style): void;
                public getFeatureCollection(): geometry.FeatureCollection;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): LocalVectorDataSource;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class LocalVectorDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LocalVectorDataSourceModuleJNI>;
                public static LocalVectorDataSource_setGeometrySimplifier(param0: number, param1: LocalVectorDataSource, param2: number, param3: geometry.GeometrySimplifier): void;
                public static LocalVectorDataSource_getDataExtent(param0: number, param1: LocalVectorDataSource): number;
                public static new_LocalVectorDataSource__SWIG_0(param0: number, param1: projections.Projection): number;
                public static LocalVectorDataSource_loadElementsSwigExplicitLocalVectorDataSource(param0: number, param1: LocalVectorDataSource, param2: number, param3: renderers.components.CullState): number;
                public static LocalVectorDataSource_addFeatureCollection(param0: number, param1: LocalVectorDataSource, param2: number, param3: geometry.FeatureCollection, param4: number, param5: styles.Style): void;
                public constructor();
                public static LocalVectorDataSource_addAll(param0: number, param1: LocalVectorDataSource, param2: number, param3: vectorelements.VectorElementVector): void;
                public static LocalVectorDataSource_director_connect(param0: LocalVectorDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static LocalVectorDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static LocalVectorDataSource_swigGetDirectorObject(param0: number, param1: LocalVectorDataSource): any;
                public static LocalVectorDataSource_setAll(param0: number, param1: LocalVectorDataSource, param2: number, param3: vectorelements.VectorElementVector): void;
                public static LocalVectorDataSource_change_ownership(param0: LocalVectorDataSource, param1: number, param2: boolean): void;
                public static LocalVectorDataSource_add(param0: number, param1: LocalVectorDataSource, param2: number, param3: vectorelements.VectorElement): void;
                public static LocalVectorDataSource_clear(param0: number, param1: LocalVectorDataSource): void;
                public static LocalVectorDataSource_loadElements(param0: number, param1: LocalVectorDataSource, param2: number, param3: renderers.components.CullState): number;
                public static LocalVectorDataSource_swigGetClassName(param0: number, param1: LocalVectorDataSource): string;
                public static LocalVectorDataSource_getDataExtentSwigExplicitLocalVectorDataSource(param0: number, param1: LocalVectorDataSource): number;
                public static LocalVectorDataSource_removeAll(param0: number, param1: LocalVectorDataSource, param2: number, param3: vectorelements.VectorElementVector): boolean;
                public static SwigDirector_LocalVectorDataSource_getDataExtent(param0: LocalVectorDataSource): number;
                public static delete_LocalVectorDataSource(param0: number): void;
                public static SwigDirector_LocalVectorDataSource_loadElements(param0: LocalVectorDataSource, param1: number): number;
                public static new_LocalVectorDataSource__SWIG_1(param0: number, param1: projections.Projection, param2: number): number;
                public static LocalVectorDataSource_getFeatureCollection(param0: number, param1: LocalVectorDataSource): number;
                public static LocalVectorDataSource_getAll(param0: number, param1: LocalVectorDataSource): number;
                public static LocalVectorDataSource_getGeometrySimplifier(param0: number, param1: LocalVectorDataSource): number;
                public static LocalVectorDataSource_swigGetRawPtr(param0: number, param1: LocalVectorDataSource): number;
                public static LocalVectorDataSource_remove(param0: number, param1: LocalVectorDataSource, param2: number, param3: vectorelements.VectorElement): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class MBTilesScheme {
                public static class: java.lang.Class<MBTilesScheme>;
                public static MBTILES_SCHEME_TMS: MBTilesScheme;
                public static MBTILES_SCHEME_XYZ: MBTilesScheme;
                public static values(): native.Array<MBTilesScheme>;
                public static valueOf(param0: string): MBTilesScheme;
                public static swigToEnum(param0: number): MBTilesScheme;
                public swigValue(): number;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace MBTilesScheme {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class MBTilesTileDataSource extends TileDataSource {
                public static class: java.lang.Class<MBTilesTileDataSource>;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public getMetaData(): core.StringMap;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MBTilesTileDataSource;
                public constructor(param0: number, param1: number, param2: string);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: core.MapTile): components.TileData;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public static getCPtr(param0: MBTilesTileDataSource): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public getDataExtent(): core.MapBounds;
                public static getCPtr(param0: TileDataSource): number;
                public constructor(param0: number, param1: number, param2: string, param3: MBTilesScheme);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class MBTilesTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MBTilesTileDataSourceModuleJNI>;
                public static new_MBTilesTileDataSource__SWIG_1(param0: number, param1: number, param2: string): number;
                public static delete_MBTilesTileDataSource(param0: number): void;
                public static SwigDirector_MBTilesTileDataSource_notifyTilesChanged(param0: MBTilesTileDataSource, param1: boolean): void;
                public static new_MBTilesTileDataSource__SWIG_0(param0: string): number;
                public static MBTilesTileDataSource_swigGetDirectorObject(param0: number, param1: MBTilesTileDataSource): any;
                public static MBTilesTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static MBTilesTileDataSource_getDataExtent(param0: number, param1: MBTilesTileDataSource): number;
                public static SwigDirector_MBTilesTileDataSource_getMaxZoom(param0: MBTilesTileDataSource): number;
                public static SwigDirector_MBTilesTileDataSource_getDataExtent(param0: MBTilesTileDataSource): number;
                public static MBTilesTileDataSource_getDataExtentSwigExplicitMBTilesTileDataSource(param0: number, param1: MBTilesTileDataSource): number;
                public static MBTilesTileDataSource_getMetaData(param0: number, param1: MBTilesTileDataSource): number;
                public static SwigDirector_MBTilesTileDataSource_loadTile(param0: MBTilesTileDataSource, param1: number): number;
                public constructor();
                public static new_MBTilesTileDataSource__SWIG_2(param0: number, param1: number, param2: string, param3: number): number;
                public static SwigDirector_MBTilesTileDataSource_getMinZoom(param0: MBTilesTileDataSource): number;
                public static MBTilesTileDataSource_loadTileSwigExplicitMBTilesTileDataSource(param0: number, param1: MBTilesTileDataSource, param2: number, param3: core.MapTile): number;
                public static MBTilesTileDataSource_loadTile(param0: number, param1: MBTilesTileDataSource, param2: number, param3: core.MapTile): number;
                public static MBTilesTileDataSource_change_ownership(param0: MBTilesTileDataSource, param1: number, param2: boolean): void;
                public static MBTilesTileDataSource_director_connect(param0: MBTilesTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static MBTilesTileDataSource_swigGetClassName(param0: number, param1: MBTilesTileDataSource): string;
                public static MBTilesTileDataSource_swigGetRawPtr(param0: number, param1: MBTilesTileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class MapTilerOnlineTileDataSource extends TileDataSource {
                public static class: java.lang.Class<MapTilerOnlineTileDataSource>;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: core.MapTile): components.TileData;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MapTilerOnlineTileDataSource;
                public swigTakeOwnership(): void;
                public static getCPtr(param0: TileDataSource): number;
                public static getCPtr(param0: MapTilerOnlineTileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class MapTilerOnlineTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapTilerOnlineTileDataSourceModuleJNI>;
                public static delete_MapTilerOnlineTileDataSource(param0: number): void;
                public static MapTilerOnlineTileDataSource_swigGetDirectorObject(param0: number, param1: MapTilerOnlineTileDataSource): any;
                public static MapTilerOnlineTileDataSource_loadTileSwigExplicitMapTilerOnlineTileDataSource(param0: number, param1: MapTilerOnlineTileDataSource, param2: number, param3: core.MapTile): number;
                public static MapTilerOnlineTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static MapTilerOnlineTileDataSource_setCustomServiceURL(param0: number, param1: MapTilerOnlineTileDataSource, param2: string): void;
                public static SwigDirector_MapTilerOnlineTileDataSource_getMaxZoom(param0: MapTilerOnlineTileDataSource): number;
                public static MapTilerOnlineTileDataSource_director_connect(param0: MapTilerOnlineTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_MapTilerOnlineTileDataSource_getDataExtent(param0: MapTilerOnlineTileDataSource): number;
                public constructor();
                public static SwigDirector_MapTilerOnlineTileDataSource_loadTile(param0: MapTilerOnlineTileDataSource, param1: number): number;
                public static MapTilerOnlineTileDataSource_getCustomServiceURL(param0: number, param1: MapTilerOnlineTileDataSource): string;
                public static new_MapTilerOnlineTileDataSource(param0: string): number;
                public static MapTilerOnlineTileDataSource_swigGetRawPtr(param0: number, param1: MapTilerOnlineTileDataSource): number;
                public static MapTilerOnlineTileDataSource_change_ownership(param0: MapTilerOnlineTileDataSource, param1: number, param2: boolean): void;
                public static MapTilerOnlineTileDataSource_swigGetClassName(param0: number, param1: MapTilerOnlineTileDataSource): string;
                public static SwigDirector_MapTilerOnlineTileDataSource_notifyTilesChanged(param0: MapTilerOnlineTileDataSource, param1: boolean): void;
                public static SwigDirector_MapTilerOnlineTileDataSource_getMinZoom(param0: MapTilerOnlineTileDataSource): number;
                public static MapTilerOnlineTileDataSource_loadTile(param0: number, param1: MapTilerOnlineTileDataSource, param2: number, param3: core.MapTile): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class MemoryCacheTileDataSource extends CacheTileDataSource {
                public static class: java.lang.Class<MemoryCacheTileDataSource>;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CacheTileDataSource;
                public static getCPtr(param0: CacheTileDataSource): number;
                public setCapacity(param0: number): void;
                public finalize(): void;
                public getCapacity(): number;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MemoryCacheTileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: core.MapTile): components.TileData;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public constructor(param0: TileDataSource);
                public delete(): void;
                public clear(): void;
                public swigTakeOwnership(): void;
                public static getCPtr(param0: TileDataSource): number;
                public static getCPtr(param0: MemoryCacheTileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class MemoryCacheTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MemoryCacheTileDataSourceModuleJNI>;
                public static SwigDirector_MemoryCacheTileDataSource_getDataExtent(param0: MemoryCacheTileDataSource): number;
                public static MemoryCacheTileDataSource_getCapacitySwigExplicitMemoryCacheTileDataSource(param0: number, param1: MemoryCacheTileDataSource): number;
                public static SwigDirector_MemoryCacheTileDataSource_loadTile(param0: MemoryCacheTileDataSource, param1: number): number;
                public constructor();
                public static MemoryCacheTileDataSource_change_ownership(param0: MemoryCacheTileDataSource, param1: number, param2: boolean): void;
                public static SwigDirector_MemoryCacheTileDataSource_clear(param0: MemoryCacheTileDataSource): void;
                public static SwigDirector_MemoryCacheTileDataSource_getMinZoom(param0: MemoryCacheTileDataSource): number;
                public static MemoryCacheTileDataSource_clearSwigExplicitMemoryCacheTileDataSource(param0: number, param1: MemoryCacheTileDataSource): void;
                public static MemoryCacheTileDataSource_clear(param0: number, param1: MemoryCacheTileDataSource): void;
                public static SwigDirector_MemoryCacheTileDataSource_getCapacity(param0: MemoryCacheTileDataSource): number;
                public static SwigDirector_MemoryCacheTileDataSource_notifyTilesChanged(param0: MemoryCacheTileDataSource, param1: boolean): void;
                public static delete_MemoryCacheTileDataSource(param0: number): void;
                public static MemoryCacheTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static SwigDirector_MemoryCacheTileDataSource_setCapacity(param0: MemoryCacheTileDataSource, param1: number): void;
                public static MemoryCacheTileDataSource_getCapacity(param0: number, param1: MemoryCacheTileDataSource): number;
                public static MemoryCacheTileDataSource_setCapacitySwigExplicitMemoryCacheTileDataSource(param0: number, param1: MemoryCacheTileDataSource, param2: number): void;
                public static new_MemoryCacheTileDataSource(param0: number, param1: TileDataSource): number;
                public static SwigDirector_MemoryCacheTileDataSource_getMaxZoom(param0: MemoryCacheTileDataSource): number;
                public static MemoryCacheTileDataSource_setCapacity(param0: number, param1: MemoryCacheTileDataSource, param2: number): void;
                public static MemoryCacheTileDataSource_loadTile(param0: number, param1: MemoryCacheTileDataSource, param2: number, param3: core.MapTile): number;
                public static MemoryCacheTileDataSource_director_connect(param0: MemoryCacheTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static MemoryCacheTileDataSource_loadTileSwigExplicitMemoryCacheTileDataSource(param0: number, param1: MemoryCacheTileDataSource, param2: number, param3: core.MapTile): number;
                public static MemoryCacheTileDataSource_swigGetRawPtr(param0: number, param1: MemoryCacheTileDataSource): number;
                public static MemoryCacheTileDataSource_swigGetClassName(param0: number, param1: MemoryCacheTileDataSource): string;
                public static MemoryCacheTileDataSource_swigGetDirectorObject(param0: number, param1: MemoryCacheTileDataSource): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class MergedMBVTTileDataSource extends TileDataSource {
                public static class: java.lang.Class<MergedMBVTTileDataSource>;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public constructor(param0: TileDataSource, param1: TileDataSource);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: MergedMBVTTileDataSource): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: core.MapTile): components.TileData;
                public getMaxZoom(): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public getDataExtent(): core.MapBounds;
                public static getCPtr(param0: TileDataSource): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MergedMBVTTileDataSource;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class MergedMBVTTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MergedMBVTTileDataSourceModuleJNI>;
                public static MergedMBVTTileDataSource_getDataExtent(param0: number, param1: MergedMBVTTileDataSource): number;
                public static MergedMBVTTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static MergedMBVTTileDataSource_change_ownership(param0: MergedMBVTTileDataSource, param1: number, param2: boolean): void;
                public static SwigDirector_MergedMBVTTileDataSource_loadTile(param0: MergedMBVTTileDataSource, param1: number): number;
                public static SwigDirector_MergedMBVTTileDataSource_notifyTilesChanged(param0: MergedMBVTTileDataSource, param1: boolean): void;
                public static MergedMBVTTileDataSource_loadTileSwigExplicitMergedMBVTTileDataSource(param0: number, param1: MergedMBVTTileDataSource, param2: number, param3: core.MapTile): number;
                public static SwigDirector_MergedMBVTTileDataSource_getMaxZoom(param0: MergedMBVTTileDataSource): number;
                public constructor();
                public static MergedMBVTTileDataSource_swigGetDirectorObject(param0: number, param1: MergedMBVTTileDataSource): any;
                public static SwigDirector_MergedMBVTTileDataSource_getDataExtent(param0: MergedMBVTTileDataSource): number;
                public static MergedMBVTTileDataSource_loadTile(param0: number, param1: MergedMBVTTileDataSource, param2: number, param3: core.MapTile): number;
                public static MergedMBVTTileDataSource_getDataExtentSwigExplicitMergedMBVTTileDataSource(param0: number, param1: MergedMBVTTileDataSource): number;
                public static MergedMBVTTileDataSource_swigGetRawPtr(param0: number, param1: MergedMBVTTileDataSource): number;
                public static new_MergedMBVTTileDataSource(param0: number, param1: TileDataSource, param2: number, param3: TileDataSource): number;
                public static delete_MergedMBVTTileDataSource(param0: number): void;
                public static MergedMBVTTileDataSource_getMinZoomSwigExplicitMergedMBVTTileDataSource(param0: number, param1: MergedMBVTTileDataSource): number;
                public static MergedMBVTTileDataSource_director_connect(param0: MergedMBVTTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_MergedMBVTTileDataSource_getMinZoom(param0: MergedMBVTTileDataSource): number;
                public static MergedMBVTTileDataSource_getMinZoom(param0: number, param1: MergedMBVTTileDataSource): number;
                public static MergedMBVTTileDataSource_getMaxZoomSwigExplicitMergedMBVTTileDataSource(param0: number, param1: MergedMBVTTileDataSource): number;
                public static MergedMBVTTileDataSource_swigGetClassName(param0: number, param1: MergedMBVTTileDataSource): string;
                public static MergedMBVTTileDataSource_getMaxZoom(param0: number, param1: MergedMBVTTileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class NMLModelLODTreeDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<NMLModelLODTreeDataSourceModuleJNI>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class OGRVectorDataBaseModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<OGRVectorDataBaseModuleJNI>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class OGRVectorDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<OGRVectorDataSourceModuleJNI>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class OfflineNMLModelLODTreeDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<OfflineNMLModelLODTreeDataSourceModuleJNI>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class OnlineNMLModelLODTreeDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<OnlineNMLModelLODTreeDataSourceModuleJNI>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class OrderedTileDataSource extends TileDataSource {
                public static class: java.lang.Class<OrderedTileDataSource>;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public constructor(param0: TileDataSource, param1: TileDataSource);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: core.MapTile): components.TileData;
                public getMaxZoom(): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public static getCPtr(param0: OrderedTileDataSource): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): OrderedTileDataSource;
                public swigTakeOwnership(): void;
                public getDataExtent(): core.MapBounds;
                public static getCPtr(param0: TileDataSource): number;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class OrderedTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<OrderedTileDataSourceModuleJNI>;
                public static OrderedTileDataSource_getDataExtentSwigExplicitOrderedTileDataSource(param0: number, param1: OrderedTileDataSource): number;
                public static SwigDirector_OrderedTileDataSource_getMinZoom(param0: OrderedTileDataSource): number;
                public static OrderedTileDataSource_swigGetClassName(param0: number, param1: OrderedTileDataSource): string;
                public static SwigDirector_OrderedTileDataSource_notifyTilesChanged(param0: OrderedTileDataSource, param1: boolean): void;
                public static OrderedTileDataSource_swigGetDirectorObject(param0: number, param1: OrderedTileDataSource): any;
                public static OrderedTileDataSource_getMinZoomSwigExplicitOrderedTileDataSource(param0: number, param1: OrderedTileDataSource): number;
                public static OrderedTileDataSource_getMaxZoom(param0: number, param1: OrderedTileDataSource): number;
                public static SwigDirector_OrderedTileDataSource_getDataExtent(param0: OrderedTileDataSource): number;
                public static SwigDirector_OrderedTileDataSource_loadTile(param0: OrderedTileDataSource, param1: number): number;
                public static OrderedTileDataSource_loadTile(param0: number, param1: OrderedTileDataSource, param2: number, param3: core.MapTile): number;
                public constructor();
                public static OrderedTileDataSource_loadTileSwigExplicitOrderedTileDataSource(param0: number, param1: OrderedTileDataSource, param2: number, param3: core.MapTile): number;
                public static OrderedTileDataSource_director_connect(param0: OrderedTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static OrderedTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static OrderedTileDataSource_getDataExtent(param0: number, param1: OrderedTileDataSource): number;
                public static SwigDirector_OrderedTileDataSource_getMaxZoom(param0: OrderedTileDataSource): number;
                public static OrderedTileDataSource_swigGetRawPtr(param0: number, param1: OrderedTileDataSource): number;
                public static OrderedTileDataSource_change_ownership(param0: OrderedTileDataSource, param1: number, param2: boolean): void;
                public static OrderedTileDataSource_getMaxZoomSwigExplicitOrderedTileDataSource(param0: number, param1: OrderedTileDataSource): number;
                public static OrderedTileDataSource_getMinZoom(param0: number, param1: OrderedTileDataSource): number;
                public static new_OrderedTileDataSource(param0: number, param1: TileDataSource, param2: number, param3: TileDataSource): number;
                public static delete_OrderedTileDataSource(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class PackageManagerTileDataSource extends TileDataSource {
                public static class: java.lang.Class<PackageManagerTileDataSource>;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PackageManagerTileDataSource;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: core.MapTile): components.TileData;
                public getPackageManager(): packagemanager.PackageManager;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public constructor(param0: packagemanager.PackageManager);
                public static getCPtr(param0: PackageManagerTileDataSource): number;
                public static getCPtr(param0: TileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class PackageManagerTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PackageManagerTileDataSourceModuleJNI>;
                public static PackageManagerTileDataSource_swigGetClassName(param0: number, param1: PackageManagerTileDataSource): string;
                public static PackageManagerTileDataSource_swigGetDirectorObject(param0: number, param1: PackageManagerTileDataSource): any;
                public static PackageManagerTileDataSource_change_ownership(param0: PackageManagerTileDataSource, param1: number, param2: boolean): void;
                public static SwigDirector_PackageManagerTileDataSource_getMaxZoom(param0: PackageManagerTileDataSource): number;
                public static delete_PackageManagerTileDataSource(param0: number): void;
                public static SwigDirector_PackageManagerTileDataSource_notifyTilesChanged(param0: PackageManagerTileDataSource, param1: boolean): void;
                public static PackageManagerTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static SwigDirector_PackageManagerTileDataSource_getDataExtent(param0: PackageManagerTileDataSource): number;
                public static PackageManagerTileDataSource_loadTileSwigExplicitPackageManagerTileDataSource(param0: number, param1: PackageManagerTileDataSource, param2: number, param3: core.MapTile): number;
                public static new_PackageManagerTileDataSource(param0: number, param1: packagemanager.PackageManager): number;
                public static SwigDirector_PackageManagerTileDataSource_getMinZoom(param0: PackageManagerTileDataSource): number;
                public static PackageManagerTileDataSource_director_connect(param0: PackageManagerTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static PackageManagerTileDataSource_getPackageManager(param0: number, param1: PackageManagerTileDataSource): number;
                public static SwigDirector_PackageManagerTileDataSource_loadTile(param0: PackageManagerTileDataSource, param1: number): number;
                public static PackageManagerTileDataSource_loadTile(param0: number, param1: PackageManagerTileDataSource, param2: number, param3: core.MapTile): number;
                public static PackageManagerTileDataSource_swigGetRawPtr(param0: number, param1: PackageManagerTileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class PersistentCacheTileDataSource extends CacheTileDataSource {
                public static class: java.lang.Class<PersistentCacheTileDataSource>;
                public constructor(param0: number, param1: number);
                public static getCPtr(param0: PersistentCacheTileDataSource): number;
                public swigDirectorDisconnect(): void;
                public startDownloadArea(param0: core.MapBounds, param1: number, param2: number, param3: TileDownloadListener): void;
                public static getCPtr(param0: CacheTileDataSource): number;
                public stopAllDownloads(): void;
                public setCapacity(param0: number): void;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public loadTile(param0: core.MapTile): components.TileData;
                public constructor();
                public constructor(param0: TileDataSource, param1: string);
                public isCacheOnlyMode(): boolean;
                public constructor(param0: TileDataSource);
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PersistentCacheTileDataSource;
                public clear(): void;
                public swigReleaseOwnership(): void;
                public setCacheOnlyMode(param0: boolean): void;
                public close(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CacheTileDataSource;
                public getCapacity(): number;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public isOpen(): boolean;
                public swigTakeOwnership(): void;
                public static getCPtr(param0: TileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class PersistentCacheTileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PersistentCacheTileDataSourceModuleJNI>;
                public static PersistentCacheTileDataSource_stopAllDownloads(param0: number, param1: PersistentCacheTileDataSource): void;
                public static SwigDirector_PersistentCacheTileDataSource_getMinZoom(param0: PersistentCacheTileDataSource): number;
                public static PersistentCacheTileDataSource_setCacheOnlyMode(param0: number, param1: PersistentCacheTileDataSource, param2: boolean): void;
                public static SwigDirector_PersistentCacheTileDataSource_getMaxZoom(param0: PersistentCacheTileDataSource): number;
                public static PersistentCacheTileDataSource_close(param0: number, param1: PersistentCacheTileDataSource): void;
                public static PersistentCacheTileDataSource_setCapacitySwigExplicitPersistentCacheTileDataSource(param0: number, param1: PersistentCacheTileDataSource, param2: number): void;
                public static PersistentCacheTileDataSource_swigGetDirectorObject(param0: number, param1: PersistentCacheTileDataSource): any;
                public static PersistentCacheTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
                public static PersistentCacheTileDataSource_isOpen(param0: number, param1: PersistentCacheTileDataSource): boolean;
                public static PersistentCacheTileDataSource_swigGetClassName(param0: number, param1: PersistentCacheTileDataSource): string;
                public static PersistentCacheTileDataSource_director_connect(param0: PersistentCacheTileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public constructor();
                public static PersistentCacheTileDataSource_clear(param0: number, param1: PersistentCacheTileDataSource): void;
                public static PersistentCacheTileDataSource_getCapacitySwigExplicitPersistentCacheTileDataSource(param0: number, param1: PersistentCacheTileDataSource): number;
                public static PersistentCacheTileDataSource_startDownloadArea(param0: number, param1: PersistentCacheTileDataSource, param2: number, param3: core.MapBounds, param4: number, param5: number, param6: number, param7: TileDownloadListener): void;
                public static SwigDirector_PersistentCacheTileDataSource_getCapacity(param0: PersistentCacheTileDataSource): number;
                public static SwigDirector_PersistentCacheTileDataSource_setCapacity(param0: PersistentCacheTileDataSource, param1: number): void;
                public static PersistentCacheTileDataSource_clearSwigExplicitPersistentCacheTileDataSource(param0: number, param1: PersistentCacheTileDataSource): void;
                public static SwigDirector_PersistentCacheTileDataSource_getDataExtent(param0: PersistentCacheTileDataSource): number;
                public static SwigDirector_PersistentCacheTileDataSource_loadTile(param0: PersistentCacheTileDataSource, param1: number): number;
                public static PersistentCacheTileDataSource_isCacheOnlyMode(param0: number, param1: PersistentCacheTileDataSource): boolean;
                public static PersistentCacheTileDataSource_loadTileSwigExplicitPersistentCacheTileDataSource(param0: number, param1: PersistentCacheTileDataSource, param2: number, param3: core.MapTile): number;
                public static PersistentCacheTileDataSource_getCapacity(param0: number, param1: PersistentCacheTileDataSource): number;
                public static SwigDirector_PersistentCacheTileDataSource_clear(param0: PersistentCacheTileDataSource): void;
                public static PersistentCacheTileDataSource_loadTile(param0: number, param1: PersistentCacheTileDataSource, param2: number, param3: core.MapTile): number;
                public static PersistentCacheTileDataSource_setCapacity(param0: number, param1: PersistentCacheTileDataSource, param2: number): void;
                public static PersistentCacheTileDataSource_swigGetRawPtr(param0: number, param1: PersistentCacheTileDataSource): number;
                public static SwigDirector_PersistentCacheTileDataSource_notifyTilesChanged(param0: PersistentCacheTileDataSource, param1: boolean): void;
                public static PersistentCacheTileDataSource_change_ownership(param0: PersistentCacheTileDataSource, param1: number, param2: boolean): void;
                public static delete_PersistentCacheTileDataSource(param0: number): void;
                public static new_PersistentCacheTileDataSource(param0: number, param1: TileDataSource, param2: string): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class TileDataSource extends java.lang.Object {
                public static class: java.lang.Class<TileDataSource>;
                public swigCMemOwn: boolean;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public getProjection(): projections.Projection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: core.MapTile): components.TileData;
                public getMaxZoom(): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public getDataExtent(): core.MapBounds;
                public static getCPtr(param0: TileDataSource): number;
                public notifyTilesChanged(param0: boolean): void;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class TileDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TileDataSourceModuleJNI>;
                public static TileDataSource_swigGetDirectorObject(param0: number, param1: TileDataSource): any;
                public static TileDataSource_getMinZoomSwigExplicitTileDataSource(param0: number, param1: TileDataSource): number;
                public static SwigDirector_TileDataSource_getMinZoom(param0: TileDataSource): number;
                public static TileDataSource_change_ownership(param0: TileDataSource, param1: number, param2: boolean): void;
                public static TileDataSource_getMinZoom(param0: number, param1: TileDataSource): number;
                public static TileDataSource_getProjection(param0: number, param1: TileDataSource): number;
                public static SwigDirector_TileDataSource_loadTile(param0: TileDataSource, param1: number): number;
                public static TileDataSource_notifyTilesChangedSwigExplicitTileDataSource(param0: number, param1: TileDataSource, param2: boolean): void;
                public static TileDataSource_swigGetRawPtr(param0: number, param1: TileDataSource): number;
                public static SwigDirector_TileDataSource_getDataExtent(param0: TileDataSource): number;
                public constructor();
                public static TileDataSource_getMaxZoom(param0: number, param1: TileDataSource): number;
                public static TileDataSource_getMaxZoomSwigExplicitTileDataSource(param0: number, param1: TileDataSource): number;
                public static new_TileDataSource__SWIG_0(): number;
                public static TileDataSource_director_connect(param0: TileDataSource, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_TileDataSource_notifyTilesChanged(param0: TileDataSource, param1: boolean): void;
                public static TileDataSource_getDataExtentSwigExplicitTileDataSource(param0: number, param1: TileDataSource): number;
                public static new_TileDataSource__SWIG_1(param0: number, param1: number): number;
                public static delete_TileDataSource(param0: number): void;
                public static TileDataSource_swigGetClassName(param0: number, param1: TileDataSource): string;
                public static SwigDirector_TileDataSource_getMaxZoom(param0: TileDataSource): number;
                public static TileDataSource_getDataExtent(param0: number, param1: TileDataSource): number;
                public static TileDataSource_loadTile(param0: number, param1: TileDataSource, param2: number, param3: core.MapTile): number;
                public static TileDataSource_notifyTilesChanged(param0: number, param1: TileDataSource, param2: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class TileDownloadListener extends java.lang.Object {
                public static class: java.lang.Class<TileDownloadListener>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public onDownloadCompleted(): void;
                public finalize(): void;
                public onDownloadStarting(param0: number): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: TileDownloadListener): number;
                public onDownloadProgress(param0: number): void;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileDownloadListener;
                public onDownloadFailed(param0: core.MapTile): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class TileDownloadListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TileDownloadListenerModuleJNI>;
                public static TileDownloadListener_onDownloadCompletedSwigExplicitTileDownloadListener(param0: number, param1: TileDownloadListener): void;
                public static TileDownloadListener_onDownloadProgress(param0: number, param1: TileDownloadListener, param2: number): void;
                public static TileDownloadListener_swigGetClassName(param0: number, param1: TileDownloadListener): string;
                public static TileDownloadListener_onDownloadStartingSwigExplicitTileDownloadListener(param0: number, param1: TileDownloadListener, param2: number): void;
                public static SwigDirector_TileDownloadListener_onDownloadCompleted(param0: TileDownloadListener): void;
                public static new_TileDownloadListener(): number;
                public static delete_TileDownloadListener(param0: number): void;
                public static TileDownloadListener_change_ownership(param0: TileDownloadListener, param1: number, param2: boolean): void;
                public static TileDownloadListener_onDownloadFailed(param0: number, param1: TileDownloadListener, param2: number, param3: core.MapTile): void;
                public static TileDownloadListener_onDownloadProgressSwigExplicitTileDownloadListener(param0: number, param1: TileDownloadListener, param2: number): void;
                public static SwigDirector_TileDownloadListener_onDownloadStarting(param0: TileDownloadListener, param1: number): void;
                public static TileDownloadListener_onDownloadStarting(param0: number, param1: TileDownloadListener, param2: number): void;
                public static TileDownloadListener_swigGetDirectorObject(param0: number, param1: TileDownloadListener): any;
                public static SwigDirector_TileDownloadListener_onDownloadFailed(param0: TileDownloadListener, param1: number): void;
                public constructor();
                public static TileDownloadListener_swigGetRawPtr(param0: number, param1: TileDownloadListener): number;
                public static SwigDirector_TileDownloadListener_onDownloadProgress(param0: TileDownloadListener, param1: number): void;
                public static TileDownloadListener_onDownloadFailedSwigExplicitTileDownloadListener(param0: number, param1: TileDownloadListener, param2: number, param3: core.MapTile): void;
                public static TileDownloadListener_onDownloadCompleted(param0: number, param1: TileDownloadListener): void;
                public static TileDownloadListener_director_connect(param0: TileDownloadListener, param1: number, param2: boolean, param3: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class VectorDataSource extends java.lang.Object {
                public static class: java.lang.Class<VectorDataSource>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public getProjection(): projections.Projection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorDataSource;
                public constructor(param0: projections.Projection);
                public loadElements(param0: renderers.components.CullState): components.VectorData;
                public swigTakeOwnership(): void;
                public getDataExtent(): core.MapBounds;
                public static getCPtr(param0: VectorDataSource): number;
                public notifyElementsChanged(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class VectorDataSourceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorDataSourceModuleJNI>;
                public static VectorDataSource_swigGetRawPtr(param0: number, param1: VectorDataSource): number;
                public static VectorDataSource_change_ownership(param0: VectorDataSource, param1: number, param2: boolean): void;
                public static delete_VectorDataSource(param0: number): void;
                public static VectorDataSource_loadElements(param0: number, param1: VectorDataSource, param2: number, param3: renderers.components.CullState): number;
                public static SwigDirector_VectorDataSource_loadElements(param0: VectorDataSource, param1: number): number;
                public static SwigDirector_VectorDataSource_getDataExtent(param0: VectorDataSource): number;
                public static VectorDataSource_getDataExtentSwigExplicitVectorDataSource(param0: number, param1: VectorDataSource): number;
                public static VectorDataSource_getDataExtent(param0: number, param1: VectorDataSource): number;
                public static new_VectorDataSource(param0: number, param1: projections.Projection): number;
                public constructor();
                public static VectorDataSource_swigGetClassName(param0: number, param1: VectorDataSource): string;
                public static VectorDataSource_swigGetDirectorObject(param0: number, param1: VectorDataSource): any;
                public static VectorDataSource_notifyElementsChanged(param0: number, param1: VectorDataSource): void;
                public static VectorDataSource_getProjection(param0: number, param1: VectorDataSource): number;
                public static VectorDataSource_director_connect(param0: VectorDataSource, param1: number, param2: boolean, param3: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export namespace components {
                export class TileData extends java.lang.Object {
                    public static class: java.lang.Class<TileData>;
                    public swigCMemOwn: boolean;
                    public delete(): void;
                    public finalize(): void;
                    public getData(): core.BinaryData;
                    public constructor(param0: core.BinaryData);
                    public isReplaceWithParent(): boolean;
                    public swigGetRawPtr(): number;
                    public constructor(param0: number, param1: boolean);
                    public getMaxAge(): number;
                    public equals(param0: any): boolean;
                    public setMaxAge(param0: number): void;
                    public setReplaceWithParent(param0: boolean): void;
                    public static getCPtr(param0: TileData): number;
                    public hashCode(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export namespace components {
                export class TileDataModuleJNI extends java.lang.Object {
                    public static class: java.lang.Class<TileDataModuleJNI>;
                    public static TileData_setReplaceWithParent(param0: number, param1: TileData, param2: boolean): void;
                    public static TileData_swigGetRawPtr(param0: number, param1: TileData): number;
                    public constructor();
                    public static TileData_getData(param0: number, param1: TileData): number;
                    public static TileData_setMaxAge(param0: number, param1: TileData, param2: number): void;
                    public static new_TileData(param0: number, param1: core.BinaryData): number;
                    public static delete_TileData(param0: number): void;
                    public static TileData_getMaxAge(param0: number, param1: TileData): number;
                    public static TileData_isReplaceWithParent(param0: number, param1: TileData): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export namespace components {
                export class VectorData extends java.lang.Object {
                    public static class: java.lang.Class<VectorData>;
                    public swigCMemOwn: boolean;
                    public equals(param0: any): boolean;
                    public constructor(param0: vectorelements.VectorElementVector);
                    public static getCPtr(param0: VectorData): number;
                    public delete(): void;
                    public finalize(): void;
                    public hashCode(): number;
                    public swigGetRawPtr(): number;
                    public constructor(param0: number, param1: boolean);
                    public getElements(): vectorelements.VectorElementVector;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export namespace components {
                export class VectorDataModuleJNI extends java.lang.Object {
                    public static class: java.lang.Class<VectorDataModuleJNI>;
                    public constructor();
                    public static VectorData_swigGetRawPtr(param0: number, param1: VectorData): number;
                    public static new_VectorData(param0: number, param1: vectorelements.VectorElementVector): number;
                    public static VectorData_getElements(param0: number, param1: VectorData): number;
                    public static delete_VectorData(param0: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class GeocodingRequest extends java.lang.Object {
                public static class: java.lang.Class<GeocodingRequest>;
                public swigCMemOwn: boolean;
                public getProjection(): projections.Projection;
                public static getCPtr(param0: GeocodingRequest): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setLocation(param0: core.MapPos): void;
                public getCustomParameter(param0: string): core.Variant;
                public setCustomParameter(param0: string, param1: core.Variant): void;
                public toString(): string;
                public getLocationRadius(): number;
                public swigGetRawPtr(): number;
                public setLocationRadius(param0: number): void;
                public delete(): void;
                public hashCode(): number;
                public getQuery(): string;
                public getLocation(): core.MapPos;
                public equals(param0: any): boolean;
                public constructor(param0: projections.Projection, param1: string);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class GeocodingRequestModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<GeocodingRequestModuleJNI>;
                public static GeocodingRequest_swigGetRawPtr(param0: number, param1: GeocodingRequest): number;
                public static GeocodingRequest_setLocationRadius(param0: number, param1: GeocodingRequest, param2: number): void;
                public static GeocodingRequest_toString(param0: number, param1: GeocodingRequest): string;
                public static GeocodingRequest_getCustomParameter(param0: number, param1: GeocodingRequest, param2: string): number;
                public constructor();
                public static GeocodingRequest_getProjection(param0: number, param1: GeocodingRequest): number;
                public static GeocodingRequest_getLocationRadius(param0: number, param1: GeocodingRequest): number;
                public static GeocodingRequest_setCustomParameter(param0: number, param1: GeocodingRequest, param2: string, param3: number, param4: core.Variant): void;
                public static GeocodingRequest_getQuery(param0: number, param1: GeocodingRequest): string;
                public static new_GeocodingRequest(param0: number, param1: projections.Projection, param2: string): number;
                public static GeocodingRequest_getLocation(param0: number, param1: GeocodingRequest): number;
                public static GeocodingRequest_setLocation(param0: number, param1: GeocodingRequest, param2: number, param3: core.MapPos): void;
                public static delete_GeocodingRequest(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class GeocodingResult extends java.lang.Object {
                public static class: java.lang.Class<GeocodingResult>;
                public swigCMemOwn: boolean;
                public getProjection(): projections.Projection;
                public finalize(): void;
                public constructor(param0: projections.Projection, param1: core.Address, param2: number, param3: geometry.FeatureCollection);
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: GeocodingResult): number;
                public getAddress(): core.Address;
                public delete(): void;
                public hashCode(): number;
                public getFeatureCollection(): geometry.FeatureCollection;
                public equals(param0: any): boolean;
                public getRank(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class GeocodingResultModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<GeocodingResultModuleJNI>;
                public static GeocodingResultVector_capacity(param0: number, param1: GeocodingResultVector): number;
                public static GeocodingResult_getFeatureCollection(param0: number, param1: GeocodingResult): number;
                public static GeocodingResultVector_set(param0: number, param1: GeocodingResultVector, param2: number, param3: number, param4: GeocodingResult): void;
                public static GeocodingResultVector_add(param0: number, param1: GeocodingResultVector, param2: number, param3: GeocodingResult): void;
                public static GeocodingResult_getRank(param0: number, param1: GeocodingResult): number;
                public static new_GeocodingResult(param0: number, param1: projections.Projection, param2: number, param3: core.Address, param4: number, param5: number, param6: geometry.FeatureCollection): number;
                public static GeocodingResult_swigGetRawPtr(param0: number, param1: GeocodingResult): number;
                public static GeocodingResult_getProjection(param0: number, param1: GeocodingResult): number;
                public static GeocodingResultVector_isEmpty(param0: number, param1: GeocodingResultVector): boolean;
                public constructor();
                public static delete_GeocodingResult(param0: number): void;
                public static GeocodingResult_toString(param0: number, param1: GeocodingResult): string;
                public static new_GeocodingResultVector__SWIG_0(): number;
                public static GeocodingResultVector_reserve(param0: number, param1: GeocodingResultVector, param2: number): void;
                public static GeocodingResultVector_size(param0: number, param1: GeocodingResultVector): number;
                public static GeocodingResult_getAddress(param0: number, param1: GeocodingResult): number;
                public static delete_GeocodingResultVector(param0: number): void;
                public static GeocodingResultVector_clear(param0: number, param1: GeocodingResultVector): void;
                public static GeocodingResultVector_get(param0: number, param1: GeocodingResultVector, param2: number): number;
                public static new_GeocodingResultVector__SWIG_1(param0: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class GeocodingResultVector extends java.lang.Object {
                public static class: java.lang.Class<GeocodingResultVector>;
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public delete(): void;
                public static getCPtr(param0: GeocodingResultVector): number;
                public capacity(): number;
                public add(param0: GeocodingResult): void;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public get(param0: number): GeocodingResult;
                public set(param0: number, param1: GeocodingResult): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class GeocodingService extends java.lang.Object {
                public static class: java.lang.Class<GeocodingService>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setAutocomplete(param0: boolean): void;
                public isAutocomplete(): boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public calculateAddresses(param0: GeocodingRequest): GeocodingResultVector;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: GeocodingService): number;
                public setLanguage(param0: string): void;
                public setMaxResults(param0: number): void;
                public delete(): void;
                public getMaxResults(): number;
                public getLanguage(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): GeocodingService;
                public swigTakeOwnership(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class GeocodingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<GeocodingServiceModuleJNI>;
                public static GeocodingService_setAutocomplete(param0: number, param1: GeocodingService, param2: boolean): void;
                public static GeocodingService_isAutocomplete(param0: number, param1: GeocodingService): boolean;
                public static SwigDirector_GeocodingService_calculateAddresses(param0: GeocodingService, param1: number): number;
                public static GeocodingService_getLanguage(param0: number, param1: GeocodingService): string;
                public static GeocodingService_calculateAddresses(param0: number, param1: GeocodingService, param2: number, param3: GeocodingRequest): number;
                public static GeocodingService_swigGetClassName(param0: number, param1: GeocodingService): string;
                public constructor();
                public static delete_GeocodingService(param0: number): void;
                public static new_GeocodingService(): number;
                public static GeocodingService_change_ownership(param0: GeocodingService, param1: number, param2: boolean): void;
                public static SwigDirector_GeocodingService_getLanguage(param0: GeocodingService): string;
                public static SwigDirector_GeocodingService_getMaxResults(param0: GeocodingService): number;
                public static GeocodingService_director_connect(param0: GeocodingService, param1: number, param2: boolean, param3: boolean): void;
                public static GeocodingService_setLanguage(param0: number, param1: GeocodingService, param2: string): void;
                public static SwigDirector_GeocodingService_setAutocomplete(param0: GeocodingService, param1: boolean): void;
                public static SwigDirector_GeocodingService_setLanguage(param0: GeocodingService, param1: string): void;
                public static GeocodingService_getMaxResults(param0: number, param1: GeocodingService): number;
                public static SwigDirector_GeocodingService_isAutocomplete(param0: GeocodingService): boolean;
                public static GeocodingService_setMaxResults(param0: number, param1: GeocodingService, param2: number): void;
                public static GeocodingService_swigGetRawPtr(param0: number, param1: GeocodingService): number;
                public static GeocodingService_swigGetDirectorObject(param0: number, param1: GeocodingService): any;
                public static SwigDirector_GeocodingService_setMaxResults(param0: GeocodingService, param1: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class MapBoxOnlineGeocodingService extends GeocodingService {
                public static class: java.lang.Class<MapBoxOnlineGeocodingService>;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setAutocomplete(param0: boolean): void;
                public isAutocomplete(): boolean;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public calculateAddresses(param0: GeocodingRequest): GeocodingResultVector;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: GeocodingService): number;
                public setLanguage(param0: string): void;
                public setMaxResults(param0: number): void;
                public static getCPtr(param0: MapBoxOnlineGeocodingService): number;
                public delete(): void;
                public getMaxResults(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MapBoxOnlineGeocodingService;
                public getLanguage(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): GeocodingService;
                public swigTakeOwnership(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class MapBoxOnlineGeocodingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapBoxOnlineGeocodingServiceModuleJNI>;
                public static MapBoxOnlineGeocodingService_getLanguageSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: MapBoxOnlineGeocodingService): string;
                public static MapBoxOnlineGeocodingService_setLanguage(param0: number, param1: MapBoxOnlineGeocodingService, param2: string): void;
                public static MapBoxOnlineGeocodingService_director_connect(param0: MapBoxOnlineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_MapBoxOnlineGeocodingService_getLanguage(param0: MapBoxOnlineGeocodingService): string;
                public static MapBoxOnlineGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
                public static MapBoxOnlineGeocodingService_getMaxResultsSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: MapBoxOnlineGeocodingService): number;
                public static MapBoxOnlineGeocodingService_change_ownership(param0: MapBoxOnlineGeocodingService, param1: number, param2: boolean): void;
                public constructor();
                public static SwigDirector_MapBoxOnlineGeocodingService_calculateAddresses(param0: MapBoxOnlineGeocodingService, param1: number): number;
                public static SwigDirector_MapBoxOnlineGeocodingService_getMaxResults(param0: MapBoxOnlineGeocodingService): number;
                public static new_MapBoxOnlineGeocodingService(param0: string): number;
                public static MapBoxOnlineGeocodingService_setMaxResults(param0: number, param1: MapBoxOnlineGeocodingService, param2: number): void;
                public static SwigDirector_MapBoxOnlineGeocodingService_isAutocomplete(param0: MapBoxOnlineGeocodingService): boolean;
                public static MapBoxOnlineGeocodingService_getLanguage(param0: number, param1: MapBoxOnlineGeocodingService): string;
                public static MapBoxOnlineGeocodingService_setAutocompleteSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: MapBoxOnlineGeocodingService, param2: boolean): void;
                public static MapBoxOnlineGeocodingService_setMaxResultsSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: MapBoxOnlineGeocodingService, param2: number): void;
                public static MapBoxOnlineGeocodingService_calculateAddresses(param0: number, param1: MapBoxOnlineGeocodingService, param2: number, param3: GeocodingRequest): number;
                public static MapBoxOnlineGeocodingService_isAutocomplete(param0: number, param1: MapBoxOnlineGeocodingService): boolean;
                public static SwigDirector_MapBoxOnlineGeocodingService_setLanguage(param0: MapBoxOnlineGeocodingService, param1: string): void;
                public static MapBoxOnlineGeocodingService_swigGetRawPtr(param0: number, param1: MapBoxOnlineGeocodingService): number;
                public static MapBoxOnlineGeocodingService_swigGetDirectorObject(param0: number, param1: MapBoxOnlineGeocodingService): any;
                public static MapBoxOnlineGeocodingService_setAutocomplete(param0: number, param1: MapBoxOnlineGeocodingService, param2: boolean): void;
                public static MapBoxOnlineGeocodingService_getCustomServiceURL(param0: number, param1: MapBoxOnlineGeocodingService): string;
                public static delete_MapBoxOnlineGeocodingService(param0: number): void;
                public static MapBoxOnlineGeocodingService_isAutocompleteSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: MapBoxOnlineGeocodingService): boolean;
                public static MapBoxOnlineGeocodingService_setCustomServiceURL(param0: number, param1: MapBoxOnlineGeocodingService, param2: string): void;
                public static MapBoxOnlineGeocodingService_getMaxResults(param0: number, param1: MapBoxOnlineGeocodingService): number;
                public static SwigDirector_MapBoxOnlineGeocodingService_setMaxResults(param0: MapBoxOnlineGeocodingService, param1: number): void;
                public static MapBoxOnlineGeocodingService_swigGetClassName(param0: number, param1: MapBoxOnlineGeocodingService): string;
                public static MapBoxOnlineGeocodingService_calculateAddressesSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: MapBoxOnlineGeocodingService, param2: number, param3: GeocodingRequest): number;
                public static SwigDirector_MapBoxOnlineGeocodingService_setAutocomplete(param0: MapBoxOnlineGeocodingService, param1: boolean): void;
                public static MapBoxOnlineGeocodingService_setLanguageSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: MapBoxOnlineGeocodingService, param2: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class MapBoxOnlineReverseGeocodingService extends ReverseGeocodingService {
                public static class: java.lang.Class<MapBoxOnlineReverseGeocodingService>;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static getCPtr(param0: MapBoxOnlineReverseGeocodingService): number;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MapBoxOnlineReverseGeocodingService;
                public swigGetClassName(): string;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public static getCPtr(param0: ReverseGeocodingService): number;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public getLanguage(): string;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ReverseGeocodingService;
                public calculateAddresses(param0: ReverseGeocodingRequest): GeocodingResultVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class MapBoxOnlineReverseGeocodingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapBoxOnlineReverseGeocodingServiceModuleJNI>;
                public static MapBoxOnlineReverseGeocodingService_setLanguage(param0: number, param1: MapBoxOnlineReverseGeocodingService, param2: string): void;
                public static MapBoxOnlineReverseGeocodingService_swigGetClassName(param0: number, param1: MapBoxOnlineReverseGeocodingService): string;
                public static SwigDirector_MapBoxOnlineReverseGeocodingService_getLanguage(param0: MapBoxOnlineReverseGeocodingService): string;
                public static MapBoxOnlineReverseGeocodingService_calculateAddresses(param0: number, param1: MapBoxOnlineReverseGeocodingService, param2: number, param3: ReverseGeocodingRequest): number;
                public static SwigDirector_MapBoxOnlineReverseGeocodingService_calculateAddresses(param0: MapBoxOnlineReverseGeocodingService, param1: number): number;
                public static MapBoxOnlineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
                public static MapBoxOnlineReverseGeocodingService_setCustomServiceURL(param0: number, param1: MapBoxOnlineReverseGeocodingService, param2: string): void;
                public static delete_MapBoxOnlineReverseGeocodingService(param0: number): void;
                public static MapBoxOnlineReverseGeocodingService_swigGetRawPtr(param0: number, param1: MapBoxOnlineReverseGeocodingService): number;
                public static SwigDirector_MapBoxOnlineReverseGeocodingService_setLanguage(param0: MapBoxOnlineReverseGeocodingService, param1: string): void;
                public static new_MapBoxOnlineReverseGeocodingService(param0: string): number;
                public static MapBoxOnlineReverseGeocodingService_change_ownership(param0: MapBoxOnlineReverseGeocodingService, param1: number, param2: boolean): void;
                public constructor();
                public static MapBoxOnlineReverseGeocodingService_swigGetDirectorObject(param0: number, param1: MapBoxOnlineReverseGeocodingService): any;
                public static MapBoxOnlineReverseGeocodingService_director_connect(param0: MapBoxOnlineReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
                public static MapBoxOnlineReverseGeocodingService_calculateAddressesSwigExplicitMapBoxOnlineReverseGeocodingService(param0: number, param1: MapBoxOnlineReverseGeocodingService, param2: number, param3: ReverseGeocodingRequest): number;
                public static MapBoxOnlineReverseGeocodingService_getLanguage(param0: number, param1: MapBoxOnlineReverseGeocodingService): string;
                public static MapBoxOnlineReverseGeocodingService_setLanguageSwigExplicitMapBoxOnlineReverseGeocodingService(param0: number, param1: MapBoxOnlineReverseGeocodingService, param2: string): void;
                public static MapBoxOnlineReverseGeocodingService_getCustomServiceURL(param0: number, param1: MapBoxOnlineReverseGeocodingService): string;
                public static MapBoxOnlineReverseGeocodingService_getLanguageSwigExplicitMapBoxOnlineReverseGeocodingService(param0: number, param1: MapBoxOnlineReverseGeocodingService): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class OSMOfflineGeocodingService extends GeocodingService {
                public static class: java.lang.Class<OSMOfflineGeocodingService>;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setAutocomplete(param0: boolean): void;
                public isAutocomplete(): boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): OSMOfflineGeocodingService;
                public swigGetClassName(): string;
                public calculateAddresses(param0: GeocodingRequest): GeocodingResultVector;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: GeocodingService): number;
                public setLanguage(param0: string): void;
                public setMaxResults(param0: number): void;
                public delete(): void;
                public getMaxResults(): number;
                public getLanguage(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): GeocodingService;
                public static getCPtr(param0: OSMOfflineGeocodingService): number;
                public swigTakeOwnership(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class OSMOfflineGeocodingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<OSMOfflineGeocodingServiceModuleJNI>;
                public static OSMOfflineGeocodingService_calculateAddressesSwigExplicitOSMOfflineGeocodingService(param0: number, param1: OSMOfflineGeocodingService, param2: number, param3: GeocodingRequest): number;
                public static OSMOfflineGeocodingService_getMaxResultsSwigExplicitOSMOfflineGeocodingService(param0: number, param1: OSMOfflineGeocodingService): number;
                public static OSMOfflineGeocodingService_getMaxResults(param0: number, param1: OSMOfflineGeocodingService): number;
                public static SwigDirector_OSMOfflineGeocodingService_setAutocomplete(param0: OSMOfflineGeocodingService, param1: boolean): void;
                public static OSMOfflineGeocodingService_isAutocompleteSwigExplicitOSMOfflineGeocodingService(param0: number, param1: OSMOfflineGeocodingService): boolean;
                public static OSMOfflineGeocodingService_change_ownership(param0: OSMOfflineGeocodingService, param1: number, param2: boolean): void;
                public static OSMOfflineGeocodingService_swigGetClassName(param0: number, param1: OSMOfflineGeocodingService): string;
                public static SwigDirector_OSMOfflineGeocodingService_setMaxResults(param0: OSMOfflineGeocodingService, param1: number): void;
                public constructor();
                public static SwigDirector_OSMOfflineGeocodingService_getLanguage(param0: OSMOfflineGeocodingService): string;
                public static SwigDirector_OSMOfflineGeocodingService_isAutocomplete(param0: OSMOfflineGeocodingService): boolean;
                public static OSMOfflineGeocodingService_director_connect(param0: OSMOfflineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
                public static OSMOfflineGeocodingService_setAutocomplete(param0: number, param1: OSMOfflineGeocodingService, param2: boolean): void;
                public static OSMOfflineGeocodingService_getLanguage(param0: number, param1: OSMOfflineGeocodingService): string;
                public static SwigDirector_OSMOfflineGeocodingService_calculateAddresses(param0: OSMOfflineGeocodingService, param1: number): number;
                public static OSMOfflineGeocodingService_getLanguageSwigExplicitOSMOfflineGeocodingService(param0: number, param1: OSMOfflineGeocodingService): string;
                public static OSMOfflineGeocodingService_setLanguage(param0: number, param1: OSMOfflineGeocodingService, param2: string): void;
                public static delete_OSMOfflineGeocodingService(param0: number): void;
                public static OSMOfflineGeocodingService_setAutocompleteSwigExplicitOSMOfflineGeocodingService(param0: number, param1: OSMOfflineGeocodingService, param2: boolean): void;
                public static OSMOfflineGeocodingService_swigGetRawPtr(param0: number, param1: OSMOfflineGeocodingService): number;
                public static OSMOfflineGeocodingService_setMaxResults(param0: number, param1: OSMOfflineGeocodingService, param2: number): void;
                public static OSMOfflineGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
                public static OSMOfflineGeocodingService_isAutocomplete(param0: number, param1: OSMOfflineGeocodingService): boolean;
                public static OSMOfflineGeocodingService_calculateAddresses(param0: number, param1: OSMOfflineGeocodingService, param2: number, param3: GeocodingRequest): number;
                public static OSMOfflineGeocodingService_swigGetDirectorObject(param0: number, param1: OSMOfflineGeocodingService): any;
                public static new_OSMOfflineGeocodingService(param0: string): number;
                public static OSMOfflineGeocodingService_setLanguageSwigExplicitOSMOfflineGeocodingService(param0: number, param1: OSMOfflineGeocodingService, param2: string): void;
                public static OSMOfflineGeocodingService_setMaxResultsSwigExplicitOSMOfflineGeocodingService(param0: number, param1: OSMOfflineGeocodingService, param2: number): void;
                public static SwigDirector_OSMOfflineGeocodingService_setLanguage(param0: OSMOfflineGeocodingService, param1: string): void;
                public static SwigDirector_OSMOfflineGeocodingService_getMaxResults(param0: OSMOfflineGeocodingService): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class OSMOfflineReverseGeocodingService extends ReverseGeocodingService {
                public static class: java.lang.Class<OSMOfflineReverseGeocodingService>;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public static getCPtr(param0: ReverseGeocodingService): number;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public getLanguage(): string;
                public static getCPtr(param0: OSMOfflineReverseGeocodingService): number;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ReverseGeocodingService;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): OSMOfflineReverseGeocodingService;
                public calculateAddresses(param0: ReverseGeocodingRequest): GeocodingResultVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class OSMOfflineReverseGeocodingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<OSMOfflineReverseGeocodingServiceModuleJNI>;
                public static OSMOfflineReverseGeocodingService_getLanguageSwigExplicitOSMOfflineReverseGeocodingService(param0: number, param1: OSMOfflineReverseGeocodingService): string;
                public static OSMOfflineReverseGeocodingService_change_ownership(param0: OSMOfflineReverseGeocodingService, param1: number, param2: boolean): void;
                public static OSMOfflineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
                public static OSMOfflineReverseGeocodingService_director_connect(param0: OSMOfflineReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
                public static delete_OSMOfflineReverseGeocodingService(param0: number): void;
                public static new_OSMOfflineReverseGeocodingService(param0: string): number;
                public static SwigDirector_OSMOfflineReverseGeocodingService_getLanguage(param0: OSMOfflineReverseGeocodingService): string;
                public constructor();
                public static OSMOfflineReverseGeocodingService_swigGetRawPtr(param0: number, param1: OSMOfflineReverseGeocodingService): number;
                public static SwigDirector_OSMOfflineReverseGeocodingService_setLanguage(param0: OSMOfflineReverseGeocodingService, param1: string): void;
                public static SwigDirector_OSMOfflineReverseGeocodingService_calculateAddresses(param0: OSMOfflineReverseGeocodingService, param1: number): number;
                public static OSMOfflineReverseGeocodingService_swigGetClassName(param0: number, param1: OSMOfflineReverseGeocodingService): string;
                public static OSMOfflineReverseGeocodingService_calculateAddressesSwigExplicitOSMOfflineReverseGeocodingService(param0: number, param1: OSMOfflineReverseGeocodingService, param2: number, param3: ReverseGeocodingRequest): number;
                public static OSMOfflineReverseGeocodingService_swigGetDirectorObject(param0: number, param1: OSMOfflineReverseGeocodingService): any;
                public static OSMOfflineReverseGeocodingService_setLanguage(param0: number, param1: OSMOfflineReverseGeocodingService, param2: string): void;
                public static OSMOfflineReverseGeocodingService_calculateAddresses(param0: number, param1: OSMOfflineReverseGeocodingService, param2: number, param3: ReverseGeocodingRequest): number;
                public static OSMOfflineReverseGeocodingService_setLanguageSwigExplicitOSMOfflineReverseGeocodingService(param0: number, param1: OSMOfflineReverseGeocodingService, param2: string): void;
                public static OSMOfflineReverseGeocodingService_getLanguage(param0: number, param1: OSMOfflineReverseGeocodingService): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class PackageManagerGeocodingService extends GeocodingService {
                public static class: java.lang.Class<PackageManagerGeocodingService>;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setAutocomplete(param0: boolean): void;
                public isAutocomplete(): boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: PackageManagerGeocodingService): number;
                public swigGetClassName(): string;
                public calculateAddresses(param0: GeocodingRequest): GeocodingResultVector;
                public swigGetDirectorObject(): any;
                public constructor();
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PackageManagerGeocodingService;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: GeocodingService): number;
                public setLanguage(param0: string): void;
                public setMaxResults(param0: number): void;
                public delete(): void;
                public getMaxResults(): number;
                public getLanguage(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): GeocodingService;
                public swigTakeOwnership(): void;
                public constructor(param0: packagemanager.PackageManager);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class PackageManagerGeocodingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PackageManagerGeocodingServiceModuleJNI>;
                public static PackageManagerGeocodingService_getLanguageSwigExplicitPackageManagerGeocodingService(param0: number, param1: PackageManagerGeocodingService): string;
                public static PackageManagerGeocodingService_setLanguage(param0: number, param1: PackageManagerGeocodingService, param2: string): void;
                public static PackageManagerGeocodingService_getMaxResultsSwigExplicitPackageManagerGeocodingService(param0: number, param1: PackageManagerGeocodingService): number;
                public static PackageManagerGeocodingService_change_ownership(param0: PackageManagerGeocodingService, param1: number, param2: boolean): void;
                public static PackageManagerGeocodingService_setMaxResultsSwigExplicitPackageManagerGeocodingService(param0: number, param1: PackageManagerGeocodingService, param2: number): void;
                public static PackageManagerGeocodingService_isAutocompleteSwigExplicitPackageManagerGeocodingService(param0: number, param1: PackageManagerGeocodingService): boolean;
                public static PackageManagerGeocodingService_director_connect(param0: PackageManagerGeocodingService, param1: number, param2: boolean, param3: boolean): void;
                public static PackageManagerGeocodingService_getLanguage(param0: number, param1: PackageManagerGeocodingService): string;
                public static SwigDirector_PackageManagerGeocodingService_getMaxResults(param0: PackageManagerGeocodingService): number;
                public static new_PackageManagerGeocodingService(param0: number, param1: packagemanager.PackageManager): number;
                public static SwigDirector_PackageManagerGeocodingService_isAutocomplete(param0: PackageManagerGeocodingService): boolean;
                public constructor();
                public static PackageManagerGeocodingService_calculateAddressesSwigExplicitPackageManagerGeocodingService(param0: number, param1: PackageManagerGeocodingService, param2: number, param3: GeocodingRequest): number;
                public static PackageManagerGeocodingService_swigGetRawPtr(param0: number, param1: PackageManagerGeocodingService): number;
                public static PackageManagerGeocodingService_isAutocomplete(param0: number, param1: PackageManagerGeocodingService): boolean;
                public static PackageManagerGeocodingService_setAutocomplete(param0: number, param1: PackageManagerGeocodingService, param2: boolean): void;
                public static PackageManagerGeocodingService_setMaxResults(param0: number, param1: PackageManagerGeocodingService, param2: number): void;
                public static PackageManagerGeocodingService_setAutocompleteSwigExplicitPackageManagerGeocodingService(param0: number, param1: PackageManagerGeocodingService, param2: boolean): void;
                public static PackageManagerGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
                public static PackageManagerGeocodingService_swigGetClassName(param0: number, param1: PackageManagerGeocodingService): string;
                public static delete_PackageManagerGeocodingService(param0: number): void;
                public static SwigDirector_PackageManagerGeocodingService_calculateAddresses(param0: PackageManagerGeocodingService, param1: number): number;
                public static SwigDirector_PackageManagerGeocodingService_setAutocomplete(param0: PackageManagerGeocodingService, param1: boolean): void;
                public static PackageManagerGeocodingService_swigGetDirectorObject(param0: number, param1: PackageManagerGeocodingService): any;
                public static PackageManagerGeocodingService_setLanguageSwigExplicitPackageManagerGeocodingService(param0: number, param1: PackageManagerGeocodingService, param2: string): void;
                public static PackageManagerGeocodingService_getMaxResults(param0: number, param1: PackageManagerGeocodingService): number;
                public static SwigDirector_PackageManagerGeocodingService_setLanguage(param0: PackageManagerGeocodingService, param1: string): void;
                public static SwigDirector_PackageManagerGeocodingService_setMaxResults(param0: PackageManagerGeocodingService, param1: number): void;
                public static SwigDirector_PackageManagerGeocodingService_getLanguage(param0: PackageManagerGeocodingService): string;
                public static PackageManagerGeocodingService_calculateAddresses(param0: number, param1: PackageManagerGeocodingService, param2: number, param3: GeocodingRequest): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class PackageManagerReverseGeocodingService extends ReverseGeocodingService {
                public static class: java.lang.Class<PackageManagerReverseGeocodingService>;
                public static getCPtr(param0: PackageManagerReverseGeocodingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public static getCPtr(param0: ReverseGeocodingService): number;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public getLanguage(): string;
                public swigTakeOwnership(): void;
                public constructor(param0: packagemanager.PackageManager);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PackageManagerReverseGeocodingService;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ReverseGeocodingService;
                public calculateAddresses(param0: ReverseGeocodingRequest): GeocodingResultVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class PackageManagerReverseGeocodingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PackageManagerReverseGeocodingServiceModuleJNI>;
                public static PackageManagerReverseGeocodingService_calculateAddressesSwigExplicitPackageManagerReverseGeocodingService(param0: number, param1: PackageManagerReverseGeocodingService, param2: number, param3: ReverseGeocodingRequest): number;
                public static PackageManagerReverseGeocodingService_director_connect(param0: PackageManagerReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
                public static PackageManagerReverseGeocodingService_getLanguage(param0: number, param1: PackageManagerReverseGeocodingService): string;
                public static PackageManagerReverseGeocodingService_setLanguageSwigExplicitPackageManagerReverseGeocodingService(param0: number, param1: PackageManagerReverseGeocodingService, param2: string): void;
                public static PackageManagerReverseGeocodingService_swigGetClassName(param0: number, param1: PackageManagerReverseGeocodingService): string;
                public static PackageManagerReverseGeocodingService_calculateAddresses(param0: number, param1: PackageManagerReverseGeocodingService, param2: number, param3: ReverseGeocodingRequest): number;
                public static PackageManagerReverseGeocodingService_swigGetRawPtr(param0: number, param1: PackageManagerReverseGeocodingService): number;
                public constructor();
                public static PackageManagerReverseGeocodingService_swigGetDirectorObject(param0: number, param1: PackageManagerReverseGeocodingService): any;
                public static new_PackageManagerReverseGeocodingService(param0: number, param1: packagemanager.PackageManager): number;
                public static SwigDirector_PackageManagerReverseGeocodingService_calculateAddresses(param0: PackageManagerReverseGeocodingService, param1: number): number;
                public static SwigDirector_PackageManagerReverseGeocodingService_getLanguage(param0: PackageManagerReverseGeocodingService): string;
                public static PackageManagerReverseGeocodingService_getLanguageSwigExplicitPackageManagerReverseGeocodingService(param0: number, param1: PackageManagerReverseGeocodingService): string;
                public static PackageManagerReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
                public static PackageManagerReverseGeocodingService_change_ownership(param0: PackageManagerReverseGeocodingService, param1: number, param2: boolean): void;
                public static SwigDirector_PackageManagerReverseGeocodingService_setLanguage(param0: PackageManagerReverseGeocodingService, param1: string): void;
                public static delete_PackageManagerReverseGeocodingService(param0: number): void;
                public static PackageManagerReverseGeocodingService_setLanguage(param0: number, param1: PackageManagerReverseGeocodingService, param2: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class PeliasOnlineGeocodingService extends GeocodingService {
                public static class: java.lang.Class<PeliasOnlineGeocodingService>;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setAutocomplete(param0: boolean): void;
                public isAutocomplete(): boolean;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public calculateAddresses(param0: GeocodingRequest): GeocodingResultVector;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: GeocodingService): number;
                public setLanguage(param0: string): void;
                public setMaxResults(param0: number): void;
                public delete(): void;
                public getMaxResults(): number;
                public static getCPtr(param0: PeliasOnlineGeocodingService): number;
                public getLanguage(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): GeocodingService;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PeliasOnlineGeocodingService;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class PeliasOnlineGeocodingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PeliasOnlineGeocodingServiceModuleJNI>;
                public static PeliasOnlineGeocodingService_setMaxResultsSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: PeliasOnlineGeocodingService, param2: number): void;
                public static delete_PeliasOnlineGeocodingService(param0: number): void;
                public static PeliasOnlineGeocodingService_change_ownership(param0: PeliasOnlineGeocodingService, param1: number, param2: boolean): void;
                public static PeliasOnlineGeocodingService_isAutocomplete(param0: number, param1: PeliasOnlineGeocodingService): boolean;
                public static PeliasOnlineGeocodingService_getCustomServiceURL(param0: number, param1: PeliasOnlineGeocodingService): string;
                public static PeliasOnlineGeocodingService_setMaxResults(param0: number, param1: PeliasOnlineGeocodingService, param2: number): void;
                public static PeliasOnlineGeocodingService_calculateAddresses(param0: number, param1: PeliasOnlineGeocodingService, param2: number, param3: GeocodingRequest): number;
                public static new_PeliasOnlineGeocodingService(param0: string): number;
                public constructor();
                public static PeliasOnlineGeocodingService_swigGetDirectorObject(param0: number, param1: PeliasOnlineGeocodingService): any;
                public static PeliasOnlineGeocodingService_setAutocomplete(param0: number, param1: PeliasOnlineGeocodingService, param2: boolean): void;
                public static SwigDirector_PeliasOnlineGeocodingService_isAutocomplete(param0: PeliasOnlineGeocodingService): boolean;
                public static PeliasOnlineGeocodingService_calculateAddressesSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: PeliasOnlineGeocodingService, param2: number, param3: GeocodingRequest): number;
                public static PeliasOnlineGeocodingService_director_connect(param0: PeliasOnlineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
                public static PeliasOnlineGeocodingService_getLanguageSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: PeliasOnlineGeocodingService): string;
                public static SwigDirector_PeliasOnlineGeocodingService_setMaxResults(param0: PeliasOnlineGeocodingService, param1: number): void;
                public static SwigDirector_PeliasOnlineGeocodingService_setLanguage(param0: PeliasOnlineGeocodingService, param1: string): void;
                public static SwigDirector_PeliasOnlineGeocodingService_getMaxResults(param0: PeliasOnlineGeocodingService): number;
                public static PeliasOnlineGeocodingService_setLanguage(param0: number, param1: PeliasOnlineGeocodingService, param2: string): void;
                public static PeliasOnlineGeocodingService_getMaxResultsSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: PeliasOnlineGeocodingService): number;
                public static PeliasOnlineGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
                public static PeliasOnlineGeocodingService_swigGetClassName(param0: number, param1: PeliasOnlineGeocodingService): string;
                public static SwigDirector_PeliasOnlineGeocodingService_setAutocomplete(param0: PeliasOnlineGeocodingService, param1: boolean): void;
                public static PeliasOnlineGeocodingService_getLanguage(param0: number, param1: PeliasOnlineGeocodingService): string;
                public static PeliasOnlineGeocodingService_swigGetRawPtr(param0: number, param1: PeliasOnlineGeocodingService): number;
                public static PeliasOnlineGeocodingService_isAutocompleteSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: PeliasOnlineGeocodingService): boolean;
                public static SwigDirector_PeliasOnlineGeocodingService_getLanguage(param0: PeliasOnlineGeocodingService): string;
                public static PeliasOnlineGeocodingService_setAutocompleteSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: PeliasOnlineGeocodingService, param2: boolean): void;
                public static SwigDirector_PeliasOnlineGeocodingService_calculateAddresses(param0: PeliasOnlineGeocodingService, param1: number): number;
                public static PeliasOnlineGeocodingService_getMaxResults(param0: number, param1: PeliasOnlineGeocodingService): number;
                public static PeliasOnlineGeocodingService_setCustomServiceURL(param0: number, param1: PeliasOnlineGeocodingService, param2: string): void;
                public static PeliasOnlineGeocodingService_setLanguageSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: PeliasOnlineGeocodingService, param2: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class PeliasOnlineReverseGeocodingService extends ReverseGeocodingService {
                public static class: java.lang.Class<PeliasOnlineReverseGeocodingService>;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: PeliasOnlineReverseGeocodingService): number;
                public swigGetClassName(): string;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public static getCPtr(param0: ReverseGeocodingService): number;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PeliasOnlineReverseGeocodingService;
                public delete(): void;
                public getLanguage(): string;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ReverseGeocodingService;
                public calculateAddresses(param0: ReverseGeocodingRequest): GeocodingResultVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class PeliasOnlineReverseGeocodingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PeliasOnlineReverseGeocodingServiceModuleJNI>;
                public static PeliasOnlineReverseGeocodingService_setLanguageSwigExplicitPeliasOnlineReverseGeocodingService(param0: number, param1: PeliasOnlineReverseGeocodingService, param2: string): void;
                public static PeliasOnlineReverseGeocodingService_swigGetRawPtr(param0: number, param1: PeliasOnlineReverseGeocodingService): number;
                public static SwigDirector_PeliasOnlineReverseGeocodingService_calculateAddresses(param0: PeliasOnlineReverseGeocodingService, param1: number): number;
                public static PeliasOnlineReverseGeocodingService_change_ownership(param0: PeliasOnlineReverseGeocodingService, param1: number, param2: boolean): void;
                public static PeliasOnlineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
                public static delete_PeliasOnlineReverseGeocodingService(param0: number): void;
                public static PeliasOnlineReverseGeocodingService_calculateAddressesSwigExplicitPeliasOnlineReverseGeocodingService(param0: number, param1: PeliasOnlineReverseGeocodingService, param2: number, param3: ReverseGeocodingRequest): number;
                public static SwigDirector_PeliasOnlineReverseGeocodingService_getLanguage(param0: PeliasOnlineReverseGeocodingService): string;
                public static PeliasOnlineReverseGeocodingService_calculateAddresses(param0: number, param1: PeliasOnlineReverseGeocodingService, param2: number, param3: ReverseGeocodingRequest): number;
                public constructor();
                public static PeliasOnlineReverseGeocodingService_getCustomServiceURL(param0: number, param1: PeliasOnlineReverseGeocodingService): string;
                public static new_PeliasOnlineReverseGeocodingService(param0: string): number;
                public static PeliasOnlineReverseGeocodingService_director_connect(param0: PeliasOnlineReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
                public static PeliasOnlineReverseGeocodingService_setCustomServiceURL(param0: number, param1: PeliasOnlineReverseGeocodingService, param2: string): void;
                public static PeliasOnlineReverseGeocodingService_swigGetDirectorObject(param0: number, param1: PeliasOnlineReverseGeocodingService): any;
                public static PeliasOnlineReverseGeocodingService_setLanguage(param0: number, param1: PeliasOnlineReverseGeocodingService, param2: string): void;
                public static SwigDirector_PeliasOnlineReverseGeocodingService_setLanguage(param0: PeliasOnlineReverseGeocodingService, param1: string): void;
                public static PeliasOnlineReverseGeocodingService_getLanguage(param0: number, param1: PeliasOnlineReverseGeocodingService): string;
                public static PeliasOnlineReverseGeocodingService_swigGetClassName(param0: number, param1: PeliasOnlineReverseGeocodingService): string;
                public static PeliasOnlineReverseGeocodingService_getLanguageSwigExplicitPeliasOnlineReverseGeocodingService(param0: number, param1: PeliasOnlineReverseGeocodingService): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class ReverseGeocodingRequest extends java.lang.Object {
                public static class: java.lang.Class<ReverseGeocodingRequest>;
                public swigCMemOwn: boolean;
                public constructor(param0: projections.Projection, param1: core.MapPos);
                public getProjection(): projections.Projection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setSearchRadius(param0: number): void;
                public getCustomParameter(param0: string): core.Variant;
                public setCustomParameter(param0: string, param1: core.Variant): void;
                public toString(): string;
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public getLocation(): core.MapPos;
                public equals(param0: any): boolean;
                public static getCPtr(param0: ReverseGeocodingRequest): number;
                public getSearchRadius(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class ReverseGeocodingRequestModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ReverseGeocodingRequestModuleJNI>;
                public static delete_ReverseGeocodingRequest(param0: number): void;
                public static ReverseGeocodingRequest_setSearchRadius(param0: number, param1: ReverseGeocodingRequest, param2: number): void;
                public static ReverseGeocodingRequest_toString(param0: number, param1: ReverseGeocodingRequest): string;
                public static ReverseGeocodingRequest_swigGetRawPtr(param0: number, param1: ReverseGeocodingRequest): number;
                public static ReverseGeocodingRequest_setCustomParameter(param0: number, param1: ReverseGeocodingRequest, param2: string, param3: number, param4: core.Variant): void;
                public static new_ReverseGeocodingRequest(param0: number, param1: projections.Projection, param2: number, param3: core.MapPos): number;
                public static ReverseGeocodingRequest_getLocation(param0: number, param1: ReverseGeocodingRequest): number;
                public static ReverseGeocodingRequest_getCustomParameter(param0: number, param1: ReverseGeocodingRequest, param2: string): number;
                public static ReverseGeocodingRequest_getProjection(param0: number, param1: ReverseGeocodingRequest): number;
                public constructor();
                public static ReverseGeocodingRequest_getSearchRadius(param0: number, param1: ReverseGeocodingRequest): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class ReverseGeocodingService extends java.lang.Object {
                public static class: java.lang.Class<ReverseGeocodingService>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public static getCPtr(param0: ReverseGeocodingService): number;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public getLanguage(): string;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ReverseGeocodingService;
                public calculateAddresses(param0: ReverseGeocodingRequest): GeocodingResultVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class ReverseGeocodingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ReverseGeocodingServiceModuleJNI>;
                public static ReverseGeocodingService_swigGetRawPtr(param0: number, param1: ReverseGeocodingService): number;
                public static ReverseGeocodingService_change_ownership(param0: ReverseGeocodingService, param1: number, param2: boolean): void;
                public static SwigDirector_ReverseGeocodingService_setLanguage(param0: ReverseGeocodingService, param1: string): void;
                public static ReverseGeocodingService_swigGetClassName(param0: number, param1: ReverseGeocodingService): string;
                public constructor();
                public static ReverseGeocodingService_director_connect(param0: ReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_ReverseGeocodingService_getLanguage(param0: ReverseGeocodingService): string;
                public static ReverseGeocodingService_setLanguage(param0: number, param1: ReverseGeocodingService, param2: string): void;
                public static delete_ReverseGeocodingService(param0: number): void;
                public static ReverseGeocodingService_swigGetDirectorObject(param0: number, param1: ReverseGeocodingService): any;
                public static ReverseGeocodingService_calculateAddresses(param0: number, param1: ReverseGeocodingService, param2: number, param3: ReverseGeocodingRequest): number;
                public static SwigDirector_ReverseGeocodingService_calculateAddresses(param0: ReverseGeocodingService, param1: number): number;
                public static ReverseGeocodingService_getLanguage(param0: number, param1: ReverseGeocodingService): string;
                public static new_ReverseGeocodingService(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class TomTomOnlineGeocodingService extends GeocodingService {
                public static class: java.lang.Class<TomTomOnlineGeocodingService>;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setAutocomplete(param0: boolean): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TomTomOnlineGeocodingService;
                public isAutocomplete(): boolean;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public calculateAddresses(param0: GeocodingRequest): GeocodingResultVector;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: GeocodingService): number;
                public setLanguage(param0: string): void;
                public setMaxResults(param0: number): void;
                public delete(): void;
                public getMaxResults(): number;
                public getLanguage(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): GeocodingService;
                public swigTakeOwnership(): void;
                public static getCPtr(param0: TomTomOnlineGeocodingService): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class TomTomOnlineGeocodingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TomTomOnlineGeocodingServiceModuleJNI>;
                public static new_TomTomOnlineGeocodingService(param0: string): number;
                public static TomTomOnlineGeocodingService_getMaxResultsSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: TomTomOnlineGeocodingService): number;
                public static SwigDirector_TomTomOnlineGeocodingService_isAutocomplete(param0: TomTomOnlineGeocodingService): boolean;
                public static TomTomOnlineGeocodingService_getLanguage(param0: number, param1: TomTomOnlineGeocodingService): string;
                public static SwigDirector_TomTomOnlineGeocodingService_getMaxResults(param0: TomTomOnlineGeocodingService): number;
                public static TomTomOnlineGeocodingService_getMaxResults(param0: number, param1: TomTomOnlineGeocodingService): number;
                public static SwigDirector_TomTomOnlineGeocodingService_getLanguage(param0: TomTomOnlineGeocodingService): string;
                public static TomTomOnlineGeocodingService_calculateAddresses(param0: number, param1: TomTomOnlineGeocodingService, param2: number, param3: GeocodingRequest): number;
                public static TomTomOnlineGeocodingService_swigGetDirectorObject(param0: number, param1: TomTomOnlineGeocodingService): any;
                public constructor();
                public static SwigDirector_TomTomOnlineGeocodingService_setMaxResults(param0: TomTomOnlineGeocodingService, param1: number): void;
                public static SwigDirector_TomTomOnlineGeocodingService_calculateAddresses(param0: TomTomOnlineGeocodingService, param1: number): number;
                public static TomTomOnlineGeocodingService_isAutocompleteSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: TomTomOnlineGeocodingService): boolean;
                public static TomTomOnlineGeocodingService_setLanguage(param0: number, param1: TomTomOnlineGeocodingService, param2: string): void;
                public static TomTomOnlineGeocodingService_director_connect(param0: TomTomOnlineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_TomTomOnlineGeocodingService_setAutocomplete(param0: TomTomOnlineGeocodingService, param1: boolean): void;
                public static TomTomOnlineGeocodingService_swigGetClassName(param0: number, param1: TomTomOnlineGeocodingService): string;
                public static TomTomOnlineGeocodingService_change_ownership(param0: TomTomOnlineGeocodingService, param1: number, param2: boolean): void;
                public static TomTomOnlineGeocodingService_setMaxResultsSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: TomTomOnlineGeocodingService, param2: number): void;
                public static TomTomOnlineGeocodingService_isAutocomplete(param0: number, param1: TomTomOnlineGeocodingService): boolean;
                public static TomTomOnlineGeocodingService_swigGetRawPtr(param0: number, param1: TomTomOnlineGeocodingService): number;
                public static TomTomOnlineGeocodingService_setCustomServiceURL(param0: number, param1: TomTomOnlineGeocodingService, param2: string): void;
                public static TomTomOnlineGeocodingService_setAutocomplete(param0: number, param1: TomTomOnlineGeocodingService, param2: boolean): void;
                public static delete_TomTomOnlineGeocodingService(param0: number): void;
                public static TomTomOnlineGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
                public static TomTomOnlineGeocodingService_setAutocompleteSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: TomTomOnlineGeocodingService, param2: boolean): void;
                public static TomTomOnlineGeocodingService_setLanguageSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: TomTomOnlineGeocodingService, param2: string): void;
                public static TomTomOnlineGeocodingService_getLanguageSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: TomTomOnlineGeocodingService): string;
                public static TomTomOnlineGeocodingService_getCustomServiceURL(param0: number, param1: TomTomOnlineGeocodingService): string;
                public static SwigDirector_TomTomOnlineGeocodingService_setLanguage(param0: TomTomOnlineGeocodingService, param1: string): void;
                public static TomTomOnlineGeocodingService_setMaxResults(param0: number, param1: TomTomOnlineGeocodingService, param2: number): void;
                public static TomTomOnlineGeocodingService_calculateAddressesSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: TomTomOnlineGeocodingService, param2: number, param3: GeocodingRequest): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class TomTomOnlineReverseGeocodingService extends ReverseGeocodingService {
                public static class: java.lang.Class<TomTomOnlineReverseGeocodingService>;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public static getCPtr(param0: ReverseGeocodingService): number;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public getLanguage(): string;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TomTomOnlineReverseGeocodingService;
                public static getCPtr(param0: TomTomOnlineReverseGeocodingService): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ReverseGeocodingService;
                public calculateAddresses(param0: ReverseGeocodingRequest): GeocodingResultVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class TomTomOnlineReverseGeocodingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TomTomOnlineReverseGeocodingServiceModuleJNI>;
                public static SwigDirector_TomTomOnlineReverseGeocodingService_setLanguage(param0: TomTomOnlineReverseGeocodingService, param1: string): void;
                public static TomTomOnlineReverseGeocodingService_getLanguageSwigExplicitTomTomOnlineReverseGeocodingService(param0: number, param1: TomTomOnlineReverseGeocodingService): string;
                public static TomTomOnlineReverseGeocodingService_swigGetRawPtr(param0: number, param1: TomTomOnlineReverseGeocodingService): number;
                public static TomTomOnlineReverseGeocodingService_getLanguage(param0: number, param1: TomTomOnlineReverseGeocodingService): string;
                public static TomTomOnlineReverseGeocodingService_calculateAddressesSwigExplicitTomTomOnlineReverseGeocodingService(param0: number, param1: TomTomOnlineReverseGeocodingService, param2: number, param3: ReverseGeocodingRequest): number;
                public static TomTomOnlineReverseGeocodingService_setLanguage(param0: number, param1: TomTomOnlineReverseGeocodingService, param2: string): void;
                public static TomTomOnlineReverseGeocodingService_setCustomServiceURL(param0: number, param1: TomTomOnlineReverseGeocodingService, param2: string): void;
                public static TomTomOnlineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
                public static new_TomTomOnlineReverseGeocodingService(param0: string): number;
                public constructor();
                public static SwigDirector_TomTomOnlineReverseGeocodingService_getLanguage(param0: TomTomOnlineReverseGeocodingService): string;
                public static TomTomOnlineReverseGeocodingService_calculateAddresses(param0: number, param1: TomTomOnlineReverseGeocodingService, param2: number, param3: ReverseGeocodingRequest): number;
                public static SwigDirector_TomTomOnlineReverseGeocodingService_calculateAddresses(param0: TomTomOnlineReverseGeocodingService, param1: number): number;
                public static delete_TomTomOnlineReverseGeocodingService(param0: number): void;
                public static TomTomOnlineReverseGeocodingService_setLanguageSwigExplicitTomTomOnlineReverseGeocodingService(param0: number, param1: TomTomOnlineReverseGeocodingService, param2: string): void;
                public static TomTomOnlineReverseGeocodingService_swigGetClassName(param0: number, param1: TomTomOnlineReverseGeocodingService): string;
                public static TomTomOnlineReverseGeocodingService_change_ownership(param0: TomTomOnlineReverseGeocodingService, param1: number, param2: boolean): void;
                public static TomTomOnlineReverseGeocodingService_getCustomServiceURL(param0: number, param1: TomTomOnlineReverseGeocodingService): string;
                public static TomTomOnlineReverseGeocodingService_swigGetDirectorObject(param0: number, param1: TomTomOnlineReverseGeocodingService): any;
                public static TomTomOnlineReverseGeocodingService_director_connect(param0: TomTomOnlineReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class DouglasPeuckerGeometrySimplifier extends GeometrySimplifier {
                public static class: java.lang.Class<DouglasPeuckerGeometrySimplifier>;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: GeometrySimplifier): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): GeometrySimplifier;
                public delete(): void;
                public static getCPtr(param0: DouglasPeuckerGeometrySimplifier): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: number);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): DouglasPeuckerGeometrySimplifier;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class DouglasPeuckerGeometrySimplifierModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<DouglasPeuckerGeometrySimplifierModuleJNI>;
                public static delete_DouglasPeuckerGeometrySimplifier(param0: number): void;
                public static DouglasPeuckerGeometrySimplifier_swigGetRawPtr(param0: number, param1: DouglasPeuckerGeometrySimplifier): number;
                public static DouglasPeuckerGeometrySimplifier_swigGetDirectorObject(param0: number, param1: DouglasPeuckerGeometrySimplifier): any;
                public static DouglasPeuckerGeometrySimplifier_swigGetClassName(param0: number, param1: DouglasPeuckerGeometrySimplifier): string;
                public static new_DouglasPeuckerGeometrySimplifier(param0: number): number;
                public static DouglasPeuckerGeometrySimplifier_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class Feature extends java.lang.Object {
                public static class: java.lang.Class<Feature>;
                public swigCMemOwn: boolean;
                public getProperties(): core.Variant;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Feature;
                public swigGetClassName(): string;
                public static getCPtr(param0: Feature): number;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public constructor(param0: Geometry, param1: core.Variant);
                public equals(param0: any): boolean;
                public getGeometry(): Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class FeatureBuilder extends java.lang.Object {
                public static class: java.lang.Class<FeatureBuilder>;
                public swigCMemOwn: boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): FeatureBuilder;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: FeatureBuilder): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public getPropertyValue(param0: string): core.Variant;
                public delete(): void;
                public setGeometry(param0: Geometry): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public setPropertyValue(param0: string, param1: core.Variant): void;
                public buildFeature(): Feature;
                public getGeometry(): Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class FeatureBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<FeatureBuilderModuleJNI>;
                public static delete_FeatureBuilder(param0: number): void;
                public static new_FeatureBuilder(): number;
                public static FeatureBuilder_swigGetClassName(param0: number, param1: FeatureBuilder): string;
                public static FeatureBuilder_setGeometry(param0: number, param1: FeatureBuilder, param2: number, param3: Geometry): void;
                public static FeatureBuilder_getGeometry(param0: number, param1: FeatureBuilder): number;
                public static FeatureBuilder_swigGetRawPtr(param0: number, param1: FeatureBuilder): number;
                public static FeatureBuilder_getPropertyValue(param0: number, param1: FeatureBuilder, param2: string): number;
                public static FeatureBuilder_swigGetDirectorObject(param0: number, param1: FeatureBuilder): any;
                public static FeatureBuilder_setPropertyValue(param0: number, param1: FeatureBuilder, param2: string, param3: number, param4: core.Variant): void;
                public static FeatureBuilder_buildFeature(param0: number, param1: FeatureBuilder): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class FeatureCollection extends java.lang.Object {
                public static class: java.lang.Class<FeatureCollection>;
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: FeatureVector);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): FeatureCollection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getFeatureCount(): number;
                public swigGetClassName(): string;
                public getFeature(param0: number): Feature;
                public swigGetDirectorObject(): any;
                public static getCPtr(param0: FeatureCollection): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class FeatureCollectionModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<FeatureCollectionModuleJNI>;
                public static delete_FeatureCollection(param0: number): void;
                public static FeatureCollection_swigGetDirectorObject(param0: number, param1: FeatureCollection): any;
                public static FeatureCollection_swigGetClassName(param0: number, param1: FeatureCollection): string;
                public static new_FeatureCollection(param0: number, param1: FeatureVector): number;
                public static FeatureCollection_getFeature(param0: number, param1: FeatureCollection, param2: number): number;
                public static FeatureCollection_swigGetRawPtr(param0: number, param1: FeatureCollection): number;
                public constructor();
                public static FeatureCollection_getFeatureCount(param0: number, param1: FeatureCollection): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class FeatureModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<FeatureModuleJNI>;
                public static new_FeatureVector__SWIG_1(param0: number): number;
                public static FeatureVector_capacity(param0: number, param1: FeatureVector): number;
                public static Feature_swigGetRawPtr(param0: number, param1: Feature): number;
                public static FeatureVector_add(param0: number, param1: FeatureVector, param2: number, param3: Feature): void;
                public static delete_Feature(param0: number): void;
                public static FeatureVector_reserve(param0: number, param1: FeatureVector, param2: number): void;
                public static Feature_swigGetClassName(param0: number, param1: Feature): string;
                public constructor();
                public static Feature_swigGetDirectorObject(param0: number, param1: Feature): any;
                public static FeatureVector_size(param0: number, param1: FeatureVector): number;
                public static Feature_getGeometry(param0: number, param1: Feature): number;
                public static FeatureVector_get(param0: number, param1: FeatureVector, param2: number): number;
                public static FeatureVector_set(param0: number, param1: FeatureVector, param2: number, param3: number, param4: Feature): void;
                public static new_Feature(param0: number, param1: Geometry, param2: number, param3: core.Variant): number;
                public static delete_FeatureVector(param0: number): void;
                public static new_FeatureVector__SWIG_0(): number;
                public static Feature_getProperties(param0: number, param1: Feature): number;
                public static FeatureVector_isEmpty(param0: number, param1: FeatureVector): boolean;
                public static FeatureVector_clear(param0: number, param1: FeatureVector): void;
                public static FeatureVector_swigGetRawPtr(param0: number, param1: FeatureVector): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class FeatureVector extends java.lang.Object {
                public static class: java.lang.Class<FeatureVector>;
                public swigCMemOwn: boolean;
                public get(param0: number): Feature;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public add(param0: Feature): void;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public static getCPtr(param0: FeatureVector): number;
                public set(param0: number, param1: Feature): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class GeoJSONGeometryReader extends java.lang.Object {
                public static class: java.lang.Class<GeoJSONGeometryReader>;
                public swigCMemOwn: boolean;
                public getTargetProjection(): projections.Projection;
                public delete(): void;
                public readFeatureCollection(param0: string): FeatureCollection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setTargetProjection(param0: projections.Projection): void;
                public readGeometry(param0: string): Geometry;
                public static getCPtr(param0: GeoJSONGeometryReader): number;
                public readFeature(param0: string): Feature;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class GeoJSONGeometryReaderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<GeoJSONGeometryReaderModuleJNI>;
                public static delete_GeoJSONGeometryReader(param0: number): void;
                public static GeoJSONGeometryReader_readFeature(param0: number, param1: GeoJSONGeometryReader, param2: string): number;
                public static GeoJSONGeometryReader_setTargetProjection(param0: number, param1: GeoJSONGeometryReader, param2: number, param3: projections.Projection): void;
                public static GeoJSONGeometryReader_readGeometry(param0: number, param1: GeoJSONGeometryReader, param2: string): number;
                public static GeoJSONGeometryReader_readFeatureCollection(param0: number, param1: GeoJSONGeometryReader, param2: string): number;
                public static new_GeoJSONGeometryReader(): number;
                public static GeoJSONGeometryReader_getTargetProjection(param0: number, param1: GeoJSONGeometryReader): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class GeoJSONGeometryWriter extends java.lang.Object {
                public static class: java.lang.Class<GeoJSONGeometryWriter>;
                public swigCMemOwn: boolean;
                public setZ(param0: boolean): void;
                public delete(): void;
                public writeFeature(param0: Feature): string;
                public getZ(): boolean;
                public writeFeatureCollection(param0: FeatureCollection): string;
                public static getCPtr(param0: GeoJSONGeometryWriter): number;
                public finalize(): void;
                public writeGeometry(param0: Geometry): string;
                public constructor(param0: number, param1: boolean);
                public setSourceProjection(param0: projections.Projection): void;
                public getSourceProjection(): projections.Projection;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class GeoJSONGeometryWriterModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<GeoJSONGeometryWriterModuleJNI>;
                public static GeoJSONGeometryWriter_setSourceProjection(param0: number, param1: GeoJSONGeometryWriter, param2: number, param3: projections.Projection): void;
                public static GeoJSONGeometryWriter_getSourceProjection(param0: number, param1: GeoJSONGeometryWriter): number;
                public static GeoJSONGeometryWriter_writeFeature(param0: number, param1: GeoJSONGeometryWriter, param2: number, param3: Feature): string;
                public static GeoJSONGeometryWriter_writeFeatureCollection(param0: number, param1: GeoJSONGeometryWriter, param2: number, param3: FeatureCollection): string;
                public static delete_GeoJSONGeometryWriter(param0: number): void;
                public static new_GeoJSONGeometryWriter(): number;
                public static GeoJSONGeometryWriter_getZ(param0: number, param1: GeoJSONGeometryWriter): boolean;
                public static GeoJSONGeometryWriter_writeGeometry(param0: number, param1: GeoJSONGeometryWriter, param2: number, param3: Geometry): string;
                public constructor();
                public static GeoJSONGeometryWriter_setZ(param0: number, param1: GeoJSONGeometryWriter, param2: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class Geometry extends java.lang.Object {
                public static class: java.lang.Class<Geometry>;
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Geometry;
                public delete(): void;
                public hashCode(): number;
                public static getCPtr(param0: Geometry): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public getCenterPos(): core.MapPos;
                public getBounds(): core.MapBounds;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class GeometryModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<GeometryModuleJNI>;
                public static Geometry_swigGetClassName(param0: number, param1: Geometry): string;
                public static new_GeometryVector__SWIG_1(param0: number): number;
                public static GeometryVector_get(param0: number, param1: GeometryVector, param2: number): number;
                public static GeometryVector_set(param0: number, param1: GeometryVector, param2: number, param3: number, param4: Geometry): void;
                public static GeometryVector_size(param0: number, param1: GeometryVector): number;
                public static Geometry_swigGetRawPtr(param0: number, param1: Geometry): number;
                public static GeometryVector_add(param0: number, param1: GeometryVector, param2: number, param3: Geometry): void;
                public static Geometry_swigGetDirectorObject(param0: number, param1: Geometry): any;
                public static new_GeometryVector__SWIG_0(): number;
                public static delete_Geometry(param0: number): void;
                public constructor();
                public static GeometryVector_capacity(param0: number, param1: GeometryVector): number;
                public static GeometryVector_isEmpty(param0: number, param1: GeometryVector): boolean;
                public static delete_GeometryVector(param0: number): void;
                public static Geometry_getCenterPos(param0: number, param1: Geometry): number;
                public static Geometry_getBounds(param0: number, param1: Geometry): number;
                public static GeometryVector_clear(param0: number, param1: GeometryVector): void;
                public static GeometryVector_reserve(param0: number, param1: GeometryVector, param2: number): void;
                public static GeometryVector_swigGetRawPtr(param0: number, param1: GeometryVector): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class GeometrySimplifier extends java.lang.Object {
                public static class: java.lang.Class<GeometrySimplifier>;
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: GeometrySimplifier): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): GeometrySimplifier;
                public delete(): void;
                public hashCode(): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class GeometrySimplifierModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<GeometrySimplifierModuleJNI>;
                public static GeometrySimplifier_swigGetRawPtr(param0: number, param1: GeometrySimplifier): number;
                public static GeometrySimplifier_swigGetClassName(param0: number, param1: GeometrySimplifier): string;
                public static GeometrySimplifier_swigGetDirectorObject(param0: number, param1: GeometrySimplifier): any;
                public static delete_GeometrySimplifier(param0: number): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class GeometryVector extends java.lang.Object {
                public static class: java.lang.Class<GeometryVector>;
                public swigCMemOwn: boolean;
                public set(param0: number, param1: Geometry): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public get(param0: number): Geometry;
                public clear(): void;
                public add(param0: Geometry): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public static getCPtr(param0: GeometryVector): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class LineGeometry extends Geometry {
                public static class: java.lang.Class<LineGeometry>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Geometry;
                public static getCPtr(param0: Geometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getCenterPos(): core.MapPos;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): LineGeometry;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: LineGeometry): number;
                public delete(): void;
                public constructor(param0: core.MapPosVector);
                public getPoses(): core.MapPosVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class LineGeometryModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LineGeometryModuleJNI>;
                public static new_LineGeometry(param0: number, param1: core.MapPosVector): number;
                public static LineGeometry_swigGetDirectorObject(param0: number, param1: LineGeometry): any;
                public static LineGeometryVector_clear(param0: number, param1: LineGeometryVector): void;
                public static LineGeometryVector_add(param0: number, param1: LineGeometryVector, param2: number, param3: LineGeometry): void;
                public static LineGeometry_getCenterPos(param0: number, param1: LineGeometry): number;
                public static LineGeometryVector_isEmpty(param0: number, param1: LineGeometryVector): boolean;
                public static LineGeometry_SWIGSmartPtrUpcast(param0: number): number;
                public static delete_LineGeometry(param0: number): void;
                public constructor();
                public static LineGeometry_swigGetClassName(param0: number, param1: LineGeometry): string;
                public static LineGeometryVector_swigGetRawPtr(param0: number, param1: LineGeometryVector): number;
                public static LineGeometryVector_size(param0: number, param1: LineGeometryVector): number;
                public static LineGeometryVector_set(param0: number, param1: LineGeometryVector, param2: number, param3: number, param4: LineGeometry): void;
                public static new_LineGeometryVector__SWIG_1(param0: number): number;
                public static delete_LineGeometryVector(param0: number): void;
                public static LineGeometry_swigGetRawPtr(param0: number, param1: LineGeometry): number;
                public static LineGeometryVector_capacity(param0: number, param1: LineGeometryVector): number;
                public static new_LineGeometryVector__SWIG_0(): number;
                public static LineGeometryVector_reserve(param0: number, param1: LineGeometryVector, param2: number): void;
                public static LineGeometry_getPoses(param0: number, param1: LineGeometry): number;
                public static LineGeometryVector_get(param0: number, param1: LineGeometryVector, param2: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class LineGeometryVector extends java.lang.Object {
                public static class: java.lang.Class<LineGeometryVector>;
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public set(param0: number, param1: LineGeometry): void;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public add(param0: LineGeometry): void;
                public static getCPtr(param0: LineGeometryVector): number;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public get(param0: number): LineGeometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class MultiGeometry extends Geometry {
                public static class: java.lang.Class<MultiGeometry>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Geometry;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MultiGeometry;
                public static getCPtr(param0: Geometry): number;
                public static getCPtr(param0: MultiGeometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getCenterPos(): core.MapPos;
                public getGeometry(param0: number): Geometry;
                public swigGetClassName(): string;
                public constructor(param0: GeometryVector);
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public delete(): void;
                public getGeometryCount(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class MultiGeometryModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MultiGeometryModuleJNI>;
                public static MultiGeometry_swigGetClassName(param0: number, param1: MultiGeometry): string;
                public static delete_MultiGeometry(param0: number): void;
                public static MultiGeometry_getGeometry(param0: number, param1: MultiGeometry, param2: number): number;
                public static MultiGeometry_swigGetDirectorObject(param0: number, param1: MultiGeometry): any;
                public static MultiGeometry_getCenterPos(param0: number, param1: MultiGeometry): number;
                public static MultiGeometry_swigGetRawPtr(param0: number, param1: MultiGeometry): number;
                public static MultiGeometry_getGeometryCount(param0: number, param1: MultiGeometry): number;
                public static MultiGeometry_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static new_MultiGeometry(param0: number, param1: GeometryVector): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class MultiLineGeometry extends MultiGeometry {
                public static class: java.lang.Class<MultiLineGeometry>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Geometry;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MultiLineGeometry;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MultiGeometry;
                public static getCPtr(param0: MultiGeometry): number;
                public static getCPtr(param0: Geometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getGeometry(param0: number): Geometry;
                public swigGetClassName(): string;
                public static getCPtr(param0: MultiLineGeometry): number;
                public constructor(param0: GeometryVector);
                public swigGetDirectorObject(): any;
                public constructor(param0: LineGeometryVector);
                public swigGetRawPtr(): number;
                public delete(): void;
                public getGeometry(param0: number): LineGeometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class MultiLineGeometryModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MultiLineGeometryModuleJNI>;
                public static delete_MultiLineGeometry(param0: number): void;
                public static MultiLineGeometry_getGeometry(param0: number, param1: MultiLineGeometry, param2: number): number;
                public static MultiLineGeometry_swigGetRawPtr(param0: number, param1: MultiLineGeometry): number;
                public static MultiLineGeometry_SWIGSmartPtrUpcast(param0: number): number;
                public static new_MultiLineGeometry(param0: number, param1: LineGeometryVector): number;
                public static MultiLineGeometry_swigGetClassName(param0: number, param1: MultiLineGeometry): string;
                public static MultiLineGeometry_swigGetDirectorObject(param0: number, param1: MultiLineGeometry): any;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class MultiPointGeometry extends MultiGeometry {
                public static class: java.lang.Class<MultiPointGeometry>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Geometry;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MultiGeometry;
                public static getCPtr(param0: MultiGeometry): number;
                public static getCPtr(param0: Geometry): number;
                public static getCPtr(param0: MultiPointGeometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getGeometry(param0: number): Geometry;
                public getGeometry(param0: number): PointGeometry;
                public swigGetClassName(): string;
                public constructor(param0: GeometryVector);
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MultiPointGeometry;
                public constructor(param0: PointGeometryVector);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class MultiPointGeometryModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MultiPointGeometryModuleJNI>;
                public static new_MultiPointGeometry(param0: number, param1: PointGeometryVector): number;
                public static MultiPointGeometry_swigGetDirectorObject(param0: number, param1: MultiPointGeometry): any;
                public static MultiPointGeometry_SWIGSmartPtrUpcast(param0: number): number;
                public static MultiPointGeometry_swigGetRawPtr(param0: number, param1: MultiPointGeometry): number;
                public static MultiPointGeometry_getGeometry(param0: number, param1: MultiPointGeometry, param2: number): number;
                public constructor();
                public static delete_MultiPointGeometry(param0: number): void;
                public static MultiPointGeometry_swigGetClassName(param0: number, param1: MultiPointGeometry): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class MultiPolygonGeometry extends MultiGeometry {
                public static class: java.lang.Class<MultiPolygonGeometry>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Geometry;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MultiGeometry;
                public static getCPtr(param0: MultiGeometry): number;
                public static getCPtr(param0: Geometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MultiPolygonGeometry;
                public getGeometry(param0: number): Geometry;
                public swigGetClassName(): string;
                public constructor(param0: GeometryVector);
                public swigGetDirectorObject(): any;
                public getGeometry(param0: number): PolygonGeometry;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: MultiPolygonGeometry): number;
                public constructor(param0: PolygonGeometryVector);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class MultiPolygonGeometryModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MultiPolygonGeometryModuleJNI>;
                public static MultiPolygonGeometry_swigGetDirectorObject(param0: number, param1: MultiPolygonGeometry): any;
                public static delete_MultiPolygonGeometry(param0: number): void;
                public static new_MultiPolygonGeometry(param0: number, param1: PolygonGeometryVector): number;
                public static MultiPolygonGeometry_swigGetClassName(param0: number, param1: MultiPolygonGeometry): string;
                public static MultiPolygonGeometry_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static MultiPolygonGeometry_getGeometry(param0: number, param1: MultiPolygonGeometry, param2: number): number;
                public static MultiPolygonGeometry_swigGetRawPtr(param0: number, param1: MultiPolygonGeometry): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class PointGeometry extends Geometry {
                public static class: java.lang.Class<PointGeometry>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Geometry;
                public static getCPtr(param0: Geometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getCenterPos(): core.MapPos;
                public getPos(): core.MapPos;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PointGeometry;
                public swigGetDirectorObject(): any;
                public static getCPtr(param0: PointGeometry): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: core.MapPos);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class PointGeometryModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PointGeometryModuleJNI>;
                public static PointGeometry_getPos(param0: number, param1: PointGeometry): number;
                public static PointGeometryVector_isEmpty(param0: number, param1: PointGeometryVector): boolean;
                public static PointGeometryVector_add(param0: number, param1: PointGeometryVector, param2: number, param3: PointGeometry): void;
                public static new_PointGeometry(param0: number, param1: core.MapPos): number;
                public static delete_PointGeometry(param0: number): void;
                public static PointGeometryVector_capacity(param0: number, param1: PointGeometryVector): number;
                public static PointGeometry_SWIGSmartPtrUpcast(param0: number): number;
                public static PointGeometry_swigGetDirectorObject(param0: number, param1: PointGeometry): any;
                public static PointGeometry_getCenterPos(param0: number, param1: PointGeometry): number;
                public static PointGeometry_swigGetClassName(param0: number, param1: PointGeometry): string;
                public static PointGeometry_swigGetRawPtr(param0: number, param1: PointGeometry): number;
                public constructor();
                public static new_PointGeometryVector__SWIG_1(param0: number): number;
                public static PointGeometryVector_get(param0: number, param1: PointGeometryVector, param2: number): number;
                public static PointGeometryVector_set(param0: number, param1: PointGeometryVector, param2: number, param3: number, param4: PointGeometry): void;
                public static delete_PointGeometryVector(param0: number): void;
                public static PointGeometryVector_clear(param0: number, param1: PointGeometryVector): void;
                public static PointGeometryVector_swigGetRawPtr(param0: number, param1: PointGeometryVector): number;
                public static new_PointGeometryVector__SWIG_0(): number;
                public static PointGeometryVector_size(param0: number, param1: PointGeometryVector): number;
                public static PointGeometryVector_reserve(param0: number, param1: PointGeometryVector, param2: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class PointGeometryVector extends java.lang.Object {
                public static class: java.lang.Class<PointGeometryVector>;
                public swigCMemOwn: boolean;
                public get(param0: number): PointGeometry;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public add(param0: PointGeometry): void;
                public set(param0: number, param1: PointGeometry): void;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: PointGeometryVector): number;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class PolygonGeometry extends Geometry {
                public static class: java.lang.Class<PolygonGeometry>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PolygonGeometry;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Geometry;
                public getHoles(): core.MapPosVectorVector;
                public static getCPtr(param0: PolygonGeometry): number;
                public static getCPtr(param0: Geometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getCenterPos(): core.MapPos;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public constructor(param0: core.MapPosVector, param1: core.MapPosVectorVector);
                public delete(): void;
                public constructor(param0: core.MapPosVector);
                public getRings(): core.MapPosVectorVector;
                public constructor(param0: core.MapPosVectorVector);
                public getPoses(): core.MapPosVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class PolygonGeometryModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PolygonGeometryModuleJNI>;
                public static PolygonGeometry_getHoles(param0: number, param1: PolygonGeometry): number;
                public static new_PolygonGeometryVector__SWIG_0(): number;
                public static PolygonGeometryVector_capacity(param0: number, param1: PolygonGeometryVector): number;
                public static delete_PolygonGeometry(param0: number): void;
                public static PolygonGeometry_swigGetRawPtr(param0: number, param1: PolygonGeometry): number;
                public static PolygonGeometryVector_set(param0: number, param1: PolygonGeometryVector, param2: number, param3: number, param4: PolygonGeometry): void;
                public constructor();
                public static new_PolygonGeometry__SWIG_1(param0: number, param1: core.MapPosVector, param2: number, param3: core.MapPosVectorVector): number;
                public static PolygonGeometry_getCenterPos(param0: number, param1: PolygonGeometry): number;
                public static PolygonGeometryVector_get(param0: number, param1: PolygonGeometryVector, param2: number): number;
                public static PolygonGeometryVector_size(param0: number, param1: PolygonGeometryVector): number;
                public static PolygonGeometryVector_add(param0: number, param1: PolygonGeometryVector, param2: number, param3: PolygonGeometry): void;
                public static PolygonGeometryVector_reserve(param0: number, param1: PolygonGeometryVector, param2: number): void;
                public static PolygonGeometry_getRings(param0: number, param1: PolygonGeometry): number;
                public static PolygonGeometryVector_swigGetRawPtr(param0: number, param1: PolygonGeometryVector): number;
                public static new_PolygonGeometry__SWIG_0(param0: number, param1: core.MapPosVector): number;
                public static PolygonGeometryVector_clear(param0: number, param1: PolygonGeometryVector): void;
                public static new_PolygonGeometry__SWIG_2(param0: number, param1: core.MapPosVectorVector): number;
                public static PolygonGeometryVector_isEmpty(param0: number, param1: PolygonGeometryVector): boolean;
                public static new_PolygonGeometryVector__SWIG_1(param0: number): number;
                public static delete_PolygonGeometryVector(param0: number): void;
                public static PolygonGeometry_swigGetClassName(param0: number, param1: PolygonGeometry): string;
                public static PolygonGeometry_swigGetDirectorObject(param0: number, param1: PolygonGeometry): any;
                public static PolygonGeometry_SWIGSmartPtrUpcast(param0: number): number;
                public static PolygonGeometry_getPoses(param0: number, param1: PolygonGeometry): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class PolygonGeometryVector extends java.lang.Object {
                public static class: java.lang.Class<PolygonGeometryVector>;
                public swigCMemOwn: boolean;
                public get(param0: number): PolygonGeometry;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public add(param0: PolygonGeometry): void;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public set(param0: number, param1: PolygonGeometry): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public static getCPtr(param0: PolygonGeometryVector): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class VectorTileFeature extends Feature {
                public static class: java.lang.Class<VectorTileFeature>;
                public getId(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Feature;
                public constructor(param0: number, param1: core.MapTile, param2: string, param3: Geometry, param4: core.Variant);
                public getLayerName(): string;
                public static getCPtr(param0: VectorTileFeature): number;
                public swigGetClassName(): string;
                public static getCPtr(param0: Feature): number;
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileFeature;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: Geometry, param1: core.Variant);
                public hashCode(): number;
                public getMapTile(): core.MapTile;
                public equals(param0: any): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class VectorTileFeatureBuilder extends FeatureBuilder {
                public static class: java.lang.Class<VectorTileFeatureBuilder>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileFeatureBuilder;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): FeatureBuilder;
                public getId(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public buildVectorTileFeature(): VectorTileFeature;
                public getLayerName(): string;
                public swigGetClassName(): string;
                public static getCPtr(param0: FeatureBuilder): number;
                public static getCPtr(param0: VectorTileFeatureBuilder): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public getMapTile(): core.MapTile;
                public setMapTile(param0: core.MapTile): void;
                public equals(param0: any): boolean;
                public setId(param0: number): void;
                public setLayerName(param0: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class VectorTileFeatureBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorTileFeatureBuilderModuleJNI>;
                public static VectorTileFeatureBuilder_getMapTile(param0: number, param1: VectorTileFeatureBuilder): number;
                public static VectorTileFeatureBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public static VectorTileFeatureBuilder_setMapTile(param0: number, param1: VectorTileFeatureBuilder, param2: number, param3: core.MapTile): void;
                public static VectorTileFeatureBuilder_setLayerName(param0: number, param1: VectorTileFeatureBuilder, param2: string): void;
                public static VectorTileFeatureBuilder_swigGetDirectorObject(param0: number, param1: VectorTileFeatureBuilder): any;
                public constructor();
                public static VectorTileFeatureBuilder_swigGetClassName(param0: number, param1: VectorTileFeatureBuilder): string;
                public static new_VectorTileFeatureBuilder(): number;
                public static VectorTileFeatureBuilder_swigGetRawPtr(param0: number, param1: VectorTileFeatureBuilder): number;
                public static VectorTileFeatureBuilder_buildVectorTileFeature(param0: number, param1: VectorTileFeatureBuilder): number;
                public static delete_VectorTileFeatureBuilder(param0: number): void;
                public static VectorTileFeatureBuilder_setId(param0: number, param1: VectorTileFeatureBuilder, param2: number): void;
                public static VectorTileFeatureBuilder_getId(param0: number, param1: VectorTileFeatureBuilder): number;
                public static VectorTileFeatureBuilder_getLayerName(param0: number, param1: VectorTileFeatureBuilder): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class VectorTileFeatureCollection extends FeatureCollection {
                public static class: java.lang.Class<VectorTileFeatureCollection>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): FeatureCollection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getFeature(param0: number): Feature;
                public swigGetDirectorObject(): any;
                public static getCPtr(param0: FeatureCollection): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileFeatureCollection;
                public static getCPtr(param0: VectorTileFeatureCollection): number;
                public swigGetRawPtr(): number;
                public getFeature(param0: number): VectorTileFeature;
                public delete(): void;
                public constructor(param0: FeatureVector);
                public constructor(param0: VectorTileFeatureVector);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class VectorTileFeatureCollectionModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorTileFeatureCollectionModuleJNI>;
                public static VectorTileFeatureCollection_getFeature(param0: number, param1: VectorTileFeatureCollection, param2: number): number;
                public static VectorTileFeatureCollection_swigGetDirectorObject(param0: number, param1: VectorTileFeatureCollection): any;
                public static new_VectorTileFeatureCollection(param0: number, param1: VectorTileFeatureVector): number;
                public static delete_VectorTileFeatureCollection(param0: number): void;
                public static VectorTileFeatureCollection_swigGetClassName(param0: number, param1: VectorTileFeatureCollection): string;
                public static VectorTileFeatureCollection_SWIGSmartPtrUpcast(param0: number): number;
                public static VectorTileFeatureCollection_swigGetRawPtr(param0: number, param1: VectorTileFeatureCollection): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class VectorTileFeatureModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorTileFeatureModuleJNI>;
                public static VectorTileFeature_getMapTile(param0: number, param1: VectorTileFeature): number;
                public static VectorTileFeatureVector_size(param0: number, param1: VectorTileFeatureVector): number;
                public static delete_VectorTileFeatureVector(param0: number): void;
                public static new_VectorTileFeature(param0: number, param1: number, param2: core.MapTile, param3: string, param4: number, param5: Geometry, param6: number, param7: core.Variant): number;
                public static VectorTileFeature_getLayerName(param0: number, param1: VectorTileFeature): string;
                public static new_VectorTileFeatureVector__SWIG_1(param0: number): number;
                public static VectorTileFeatureVector_swigGetRawPtr(param0: number, param1: VectorTileFeatureVector): number;
                public static VectorTileFeature_swigGetClassName(param0: number, param1: VectorTileFeature): string;
                public static VectorTileFeatureVector_get(param0: number, param1: VectorTileFeatureVector, param2: number): number;
                public static VectorTileFeatureVector_capacity(param0: number, param1: VectorTileFeatureVector): number;
                public constructor();
                public static VectorTileFeature_swigGetDirectorObject(param0: number, param1: VectorTileFeature): any;
                public static VectorTileFeatureVector_set(param0: number, param1: VectorTileFeatureVector, param2: number, param3: number, param4: VectorTileFeature): void;
                public static VectorTileFeature_SWIGSmartPtrUpcast(param0: number): number;
                public static VectorTileFeature_swigGetRawPtr(param0: number, param1: VectorTileFeature): number;
                public static VectorTileFeatureVector_reserve(param0: number, param1: VectorTileFeatureVector, param2: number): void;
                public static new_VectorTileFeatureVector__SWIG_0(): number;
                public static VectorTileFeatureVector_isEmpty(param0: number, param1: VectorTileFeatureVector): boolean;
                public static VectorTileFeatureVector_clear(param0: number, param1: VectorTileFeatureVector): void;
                public static VectorTileFeature_getId(param0: number, param1: VectorTileFeature): number;
                public static VectorTileFeatureVector_add(param0: number, param1: VectorTileFeatureVector, param2: number, param3: VectorTileFeature): void;
                public static delete_VectorTileFeature(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class VectorTileFeatureVector extends java.lang.Object {
                public static class: java.lang.Class<VectorTileFeatureVector>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: VectorTileFeatureVector): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public get(param0: number): VectorTileFeature;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public add(param0: VectorTileFeature): void;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public set(param0: number, param1: VectorTileFeature): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKBGeometryReader extends java.lang.Object {
                public static class: java.lang.Class<WKBGeometryReader>;
                public swigCMemOwn: boolean;
                public delete(): void;
                public static getCPtr(param0: WKBGeometryReader): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public readGeometry(param0: core.BinaryData): Geometry;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKBGeometryReaderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<WKBGeometryReaderModuleJNI>;
                public static new_WKBGeometryReader(): number;
                public static WKBGeometryReader_readGeometry(param0: number, param1: WKBGeometryReader, param2: number, param3: core.BinaryData): number;
                public static delete_WKBGeometryReader(param0: number): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKBGeometryWriter extends java.lang.Object {
                public static class: java.lang.Class<WKBGeometryWriter>;
                public swigCMemOwn: boolean;
                public setZ(param0: boolean): void;
                public setBigEndian(param0: boolean): void;
                public writeGeometry(param0: Geometry): core.BinaryData;
                public delete(): void;
                public getZ(): boolean;
                public static getCPtr(param0: WKBGeometryWriter): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getBigEndian(): boolean;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKBGeometryWriterModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<WKBGeometryWriterModuleJNI>;
                public static WKBGeometryWriter_setBigEndian(param0: number, param1: WKBGeometryWriter, param2: boolean): void;
                public static new_WKBGeometryWriter(): number;
                public static delete_WKBGeometryWriter(param0: number): void;
                public static WKBGeometryWriter_setZ(param0: number, param1: WKBGeometryWriter, param2: boolean): void;
                public static WKBGeometryWriter_getZ(param0: number, param1: WKBGeometryWriter): boolean;
                public static WKBGeometryWriter_writeGeometry(param0: number, param1: WKBGeometryWriter, param2: number, param3: Geometry): number;
                public static WKBGeometryWriter_getBigEndian(param0: number, param1: WKBGeometryWriter): boolean;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKTGeometryReader extends java.lang.Object {
                public static class: java.lang.Class<WKTGeometryReader>;
                public swigCMemOwn: boolean;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public readGeometry(param0: string): Geometry;
                public static getCPtr(param0: WKTGeometryReader): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKTGeometryReaderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<WKTGeometryReaderModuleJNI>;
                public static new_WKTGeometryReader(): number;
                public static delete_WKTGeometryReader(param0: number): void;
                public constructor();
                public static WKTGeometryReader_readGeometry(param0: number, param1: WKTGeometryReader, param2: string): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKTGeometryWriter extends java.lang.Object {
                public static class: java.lang.Class<WKTGeometryWriter>;
                public swigCMemOwn: boolean;
                public setZ(param0: boolean): void;
                public delete(): void;
                public getZ(): boolean;
                public static getCPtr(param0: WKTGeometryWriter): number;
                public finalize(): void;
                public writeGeometry(param0: Geometry): string;
                public constructor(param0: number, param1: boolean);
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKTGeometryWriterModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<WKTGeometryWriterModuleJNI>;
                public static WKTGeometryWriter_getZ(param0: number, param1: WKTGeometryWriter): boolean;
                public static WKTGeometryWriter_writeGeometry(param0: number, param1: WKTGeometryWriter, param2: number, param3: Geometry): string;
                public static WKTGeometryWriter_setZ(param0: number, param1: WKTGeometryWriter, param2: boolean): void;
                public static new_WKTGeometryWriter(): number;
                public static delete_WKTGeometryWriter(param0: number): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class Bitmap extends java.lang.Object {
                public static class: java.lang.Class<Bitmap>;
                public swigCMemOwn: boolean;
                public getHeight(): number;
                public getPaddedBitmap(param0: number, param1: number): Bitmap;
                public getPixelData(): core.BinaryData;
                public static getCPtr(param0: Bitmap): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                /** @deprecated */
                public compressToPng(): core.BinaryData;
                public static createFromCompressed(param0: core.BinaryData): Bitmap;
                public getResizedBitmap(param0: number, param1: number): Bitmap;
                public swigGetRawPtr(): number;
                public getWidth(): number;
                public getSubBitmap(param0: number, param1: number, param2: number, param3: number): Bitmap;
                public getRGBABitmap(): Bitmap;
                public getColorFormat(): ColorFormat;
                public delete(): void;
                public hashCode(): number;
                public compressToInternal(): core.BinaryData;
                public equals(param0: any): boolean;
                public getBytesPerPixel(): number;
                public constructor(param0: core.BinaryData, param1: number, param2: number, param3: ColorFormat, param4: number);
                public compressToPNG(): core.BinaryData;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class BitmapModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BitmapModuleJNI>;
                public static delete_Bitmap(param0: number): void;
                public static COLOR_FORMAT_UNSUPPORTED_get(): number;
                public static Bitmap_getResizedBitmap(param0: number, param1: Bitmap, param2: number, param3: number): number;
                public static COLOR_FORMAT_RGBA_get(): number;
                public static Bitmap_getPixelData(param0: number, param1: Bitmap): number;
                public static COLOR_FORMAT_GRAYSCALE_get(): number;
                public static Bitmap_swigGetRawPtr(param0: number, param1: Bitmap): number;
                public static Bitmap_getColorFormat(param0: number, param1: Bitmap): number;
                public static COLOR_FORMAT_BGRA_get(): number;
                public constructor();
                public static COLOR_FORMAT_RGBA_4444_get(): number;
                public static Bitmap_getHeight(param0: number, param1: Bitmap): number;
                public static Bitmap_getWidth(param0: number, param1: Bitmap): number;
                public static Bitmap_getSubBitmap(param0: number, param1: Bitmap, param2: number, param3: number, param4: number, param5: number): number;
                public static Bitmap_getPaddedBitmap(param0: number, param1: Bitmap, param2: number, param3: number): number;
                public static Bitmap_compressToPNG(param0: number, param1: Bitmap): number;
                public static COLOR_FORMAT_RGB_565_get(): number;
                public static Bitmap_compressToPng(param0: number, param1: Bitmap): number;
                public static COLOR_FORMAT_GRAYSCALE_ALPHA_get(): number;
                public static new_Bitmap(param0: number, param1: core.BinaryData, param2: number, param3: number, param4: number, param5: number): number;
                public static Bitmap_getBytesPerPixel(param0: number, param1: Bitmap): number;
                public static Bitmap_createFromCompressed(param0: number, param1: core.BinaryData): number;
                public static Bitmap_compressToInternal(param0: number, param1: Bitmap): number;
                public static COLOR_FORMAT_RGB_get(): number;
                public static Bitmap_getRGBABitmap(param0: number, param1: Bitmap): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class Color extends java.lang.Object {
                public static class: java.lang.Class<Color>;
                public swigCMemOwn: boolean;
                public getR(): number;
                public getA(): number;
                public finalize(): void;
                public getB(): number;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public hashCode(): number;
                public equals(param0: any): boolean;
                public constructor(param0: number);
                public getG(): number;
                public static getCPtr(param0: Color): number;
                public getARGB(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class ColorFormat {
                public static class: java.lang.Class<ColorFormat>;
                public static COLOR_FORMAT_UNSUPPORTED: ColorFormat;
                public static COLOR_FORMAT_GRAYSCALE: ColorFormat;
                public static COLOR_FORMAT_GRAYSCALE_ALPHA: ColorFormat;
                public static COLOR_FORMAT_RGB: ColorFormat;
                public static COLOR_FORMAT_RGBA: ColorFormat;
                public static COLOR_FORMAT_BGRA: ColorFormat;
                public static COLOR_FORMAT_RGBA_4444: ColorFormat;
                public static COLOR_FORMAT_RGB_565: ColorFormat;
                public swigValue(): number;
                public static values(): native.Array<ColorFormat>;
                public static swigToEnum(param0: number): ColorFormat;
                public static valueOf(param0: string): ColorFormat;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace ColorFormat {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class ColorModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ColorModuleJNI>;
                public static new_Color__SWIG_2(param0: number): number;
                public static Color_toString(param0: number, param1: Color): string;
                public static Color_getA(param0: number, param1: Color): number;
                public static delete_Color(param0: number): void;
                public static new_Color__SWIG_0(): number;
                public constructor();
                public static Color_swigGetRawPtr(param0: number, param1: Color): number;
                public static Color_getB(param0: number, param1: Color): number;
                public static new_Color__SWIG_1(param0: number, param1: number, param2: number, param3: number): number;
                public static Color_getARGB(param0: number, param1: Color): number;
                public static Color_getR(param0: number, param1: Color): number;
                public static Color_getG(param0: number, param1: Color): number;
                public static Color_hashCodeInternal(param0: number, param1: Color): number;
                public static Color_equalsInternal(param0: number, param1: Color, param2: number, param3: Color): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class ViewState extends java.lang.Object {
                public static class: java.lang.Class<ViewState>;
                public swigCMemOwn: boolean;
                public getHeight(): number;
                public getZoom(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getScreenWidth(): number;
                public getAspectRatio(): number;
                public getFar(): number;
                public isCameraChanged(): boolean;
                public swigGetRawPtr(): number;
                public getWidth(): number;
                public getFOVY(): number;
                public getNear(): number;
                public getUnitToDPCoef(): number;
                public getScreenHeight(): number;
                public getUnitToPXCoef(): number;
                public delete(): void;
                public hashCode(): number;
                public getRotation(): number;
                public getDPI(): number;
                public equals(param0: any): boolean;
                public getTilt(): number;
                public getZoom0Distance(): number;
                public getDPToPX(): number;
                public static getCPtr(param0: ViewState): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class ViewStateModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ViewStateModuleJNI>;
                public static ViewState_getRotation(param0: number, param1: ViewState): number;
                public static ViewState_getNear(param0: number, param1: ViewState): number;
                public static ViewState_getAspectRatio(param0: number, param1: ViewState): number;
                public static ViewState_getDPI(param0: number, param1: ViewState): number;
                public static ViewState_isCameraChanged(param0: number, param1: ViewState): boolean;
                public static ViewState_getHeight(param0: number, param1: ViewState): number;
                public static ViewState_getTilt(param0: number, param1: ViewState): number;
                public static ViewState_getUnitToDPCoef(param0: number, param1: ViewState): number;
                public static ViewState_getScreenWidth(param0: number, param1: ViewState): number;
                public constructor();
                public static ViewState_getUnitToPXCoef(param0: number, param1: ViewState): number;
                public static ViewState_getDPToPX(param0: number, param1: ViewState): number;
                public static ViewState_getZoom0Distance(param0: number, param1: ViewState): number;
                public static ViewState_getScreenHeight(param0: number, param1: ViewState): number;
                public static ViewState_swigGetRawPtr(param0: number, param1: ViewState): number;
                public static ViewState_getZoom(param0: number, param1: ViewState): number;
                public static ViewState_getWidth(param0: number, param1: ViewState): number;
                public static ViewState_getFOVY(param0: number, param1: ViewState): number;
                public static delete_ViewState(param0: number): void;
                public static ViewState_getFar(param0: number, param1: ViewState): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoBaseMapBuildingRenderMode {
                public static class: java.lang.Class<CartoBaseMapBuildingRenderMode>;
                public static CARTO_BASEMAP_BUILDING_RENDER_MODE_NONE: CartoBaseMapBuildingRenderMode;
                public static CARTO_BASEMAP_BUILDING_RENDER_MODE_2D: CartoBaseMapBuildingRenderMode;
                public static CARTO_BASEMAP_BUILDING_RENDER_MODE_3D: CartoBaseMapBuildingRenderMode;
                public static swigToEnum(param0: number): CartoBaseMapBuildingRenderMode;
                public static valueOf(param0: string): CartoBaseMapBuildingRenderMode;
                public swigValue(): number;
                public static values(): native.Array<CartoBaseMapBuildingRenderMode>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace CartoBaseMapBuildingRenderMode {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoBaseMapPOIRenderMode {
                public static class: java.lang.Class<CartoBaseMapPOIRenderMode>;
                public static CARTO_BASEMAP_POI_RENDER_MODE_NONE: CartoBaseMapPOIRenderMode;
                public static CARTO_BASEMAP_POI_RENDER_MODE_ICON: CartoBaseMapPOIRenderMode;
                public static CARTO_BASEMAP_POI_RENDER_MODE_FULL: CartoBaseMapPOIRenderMode;
                public swigValue(): number;
                public static values(): native.Array<CartoBaseMapPOIRenderMode>;
                public static swigToEnum(param0: number): CartoBaseMapPOIRenderMode;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                public static valueOf(param0: string): CartoBaseMapPOIRenderMode;
            }
            export namespace CartoBaseMapPOIRenderMode {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoBaseMapStyle {
                public static class: java.lang.Class<CartoBaseMapStyle>;
                public static CARTO_BASEMAP_STYLE_POSITRON: CartoBaseMapStyle;
                public static CARTO_BASEMAP_STYLE_DARKMATTER: CartoBaseMapStyle;
                public static CARTO_BASEMAP_STYLE_VOYAGER: CartoBaseMapStyle;
                public static values(): native.Array<CartoBaseMapStyle>;
                public swigValue(): number;
                public static swigToEnum(param0: number): CartoBaseMapStyle;
                public static valueOf(param0: string): CartoBaseMapStyle;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace CartoBaseMapStyle {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoOfflineVectorTileLayer extends CartoVectorTileLayer {
                public static class: java.lang.Class<CartoOfflineVectorTileLayer>;
                public constructor(param0: datasources.TileDataSource, param1: utils.AssetPackage);
                public static getCPtr(param0: TileLayer): number;
                public constructor(param0: packagemanager.CartoPackageManager, param1: utils.AssetPackage);
                public constructor(param0: packagemanager.CartoPackageManager, param1: CartoBaseMapStyle);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: CartoVectorTileLayer): number;
                public swigGetClassName(): string;
                public static getCPtr(param0: VectorTileLayer): number;
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileLayer;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: Layer): number;
                public delete(): void;
                public constructor(param0: datasources.TileDataSource, param1: utils.AssetPackage, param2: string);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CartoVectorTileLayer;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileLayer;
                public constructor(param0: datasources.TileDataSource, param1: vectortiles.VectorTileDecoder);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CartoOfflineVectorTileLayer;
                public static getCPtr(param0: CartoOfflineVectorTileLayer): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
                public constructor(param0: datasources.TileDataSource, param1: CartoBaseMapStyle);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoOfflineVectorTileLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CartoOfflineVectorTileLayerModuleJNI>;
                public static new_CartoOfflineVectorTileLayer__SWIG_0(param0: number, param1: packagemanager.CartoPackageManager, param2: number): number;
                public static new_CartoOfflineVectorTileLayer__SWIG_1(param0: number, param1: packagemanager.CartoPackageManager, param2: number, param3: utils.AssetPackage): number;
                public static CartoOfflineVectorTileLayer_swigGetRawPtr(param0: number, param1: CartoOfflineVectorTileLayer): number;
                public static CartoOfflineVectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static delete_CartoOfflineVectorTileLayer(param0: number): void;
                public static CartoOfflineVectorTileLayer_swigGetClassName(param0: number, param1: CartoOfflineVectorTileLayer): string;
                public constructor();
                public static CartoOfflineVectorTileLayer_swigGetDirectorObject(param0: number, param1: CartoOfflineVectorTileLayer): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoOnlineRasterTileLayer extends RasterTileLayer {
                public static class: java.lang.Class<CartoOnlineRasterTileLayer>;
                public static getCPtr(param0: TileLayer): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RasterTileLayer;
                public static getCPtr(param0: CartoOnlineRasterTileLayer): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: RasterTileLayer): number;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileLayer;
                public swigGetRawPtr(): number;
                public constructor(param0: datasources.TileDataSource);
                public static getCPtr(param0: Layer): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CartoOnlineRasterTileLayer;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoOnlineRasterTileLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CartoOnlineRasterTileLayerModuleJNI>;
                public static delete_CartoOnlineRasterTileLayer(param0: number): void;
                public static CartoOnlineRasterTileLayer_swigGetClassName(param0: number, param1: CartoOnlineRasterTileLayer): string;
                public static CartoOnlineRasterTileLayer_swigGetRawPtr(param0: number, param1: CartoOnlineRasterTileLayer): number;
                public static CartoOnlineRasterTileLayer_swigGetDirectorObject(param0: number, param1: CartoOnlineRasterTileLayer): any;
                public static new_CartoOnlineRasterTileLayer(param0: string): number;
                public static CartoOnlineRasterTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoOnlineVectorTileLayer extends CartoVectorTileLayer {
                public static class: java.lang.Class<CartoOnlineVectorTileLayer>;
                public constructor(param0: datasources.TileDataSource, param1: utils.AssetPackage);
                public static createDataSource(param0: CartoBaseMapStyle): datasources.TileDataSource;
                public static getCPtr(param0: TileLayer): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: CartoOnlineVectorTileLayer): number;
                public static getCPtr(param0: CartoVectorTileLayer): number;
                public swigGetClassName(): string;
                public static getCPtr(param0: VectorTileLayer): number;
                public constructor(param0: string, param1: utils.AssetPackage);
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileLayer;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: Layer): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CartoOnlineVectorTileLayer;
                public constructor(param0: CartoBaseMapStyle);
                public constructor(param0: datasources.TileDataSource, param1: utils.AssetPackage, param2: string);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CartoVectorTileLayer;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileLayer;
                public constructor(param0: datasources.TileDataSource, param1: vectortiles.VectorTileDecoder);
                public constructor(param0: string, param1: CartoBaseMapStyle);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
                public constructor(param0: datasources.TileDataSource, param1: CartoBaseMapStyle);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoOnlineVectorTileLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CartoOnlineVectorTileLayerModuleJNI>;
                public static CartoOnlineVectorTileLayer_swigGetRawPtr(param0: number, param1: CartoOnlineVectorTileLayer): number;
                public static new_CartoOnlineVectorTileLayer__SWIG_0(param0: number): number;
                public static CartoOnlineVectorTileLayer_swigGetDirectorObject(param0: number, param1: CartoOnlineVectorTileLayer): any;
                public static delete_CartoOnlineVectorTileLayer(param0: number): void;
                public static CartoOnlineVectorTileLayer_createDataSource(param0: number): number;
                public static new_CartoOnlineVectorTileLayer__SWIG_1(param0: string, param1: number): number;
                public static new_CartoOnlineVectorTileLayer__SWIG_2(param0: string, param1: number, param2: utils.AssetPackage): number;
                public static CartoOnlineVectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static CartoOnlineVectorTileLayer_swigGetClassName(param0: number, param1: CartoOnlineVectorTileLayer): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoVectorTileLayer extends VectorTileLayer {
                public static class: java.lang.Class<CartoVectorTileLayer>;
                public constructor(param0: datasources.TileDataSource, param1: utils.AssetPackage);
                public getPOIRenderMode(): CartoBaseMapPOIRenderMode;
                public static getCPtr(param0: TileLayer): number;
                public getBuildingRenderMode(): CartoBaseMapBuildingRenderMode;
                public finalize(): void;
                public static getCPtr(param0: CartoVectorTileLayer): number;
                public delete(): void;
                public constructor(param0: datasources.TileDataSource, param1: utils.AssetPackage, param2: string);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CartoVectorTileLayer;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileLayer;
                public constructor(param0: datasources.TileDataSource, param1: vectortiles.VectorTileDecoder);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
                public getFallbackLanguage(): string;
                public setPOIRenderMode(param0: CartoBaseMapPOIRenderMode): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: VectorTileLayer): number;
                public static createTileDecoder(param0: utils.AssetPackage): vectortiles.VectorTileDecoder;
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileLayer;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public static createTileDecoder(param0: utils.AssetPackage, param1: string): vectortiles.VectorTileDecoder;
                public setBuildingRenderMode(param0: CartoBaseMapBuildingRenderMode): void;
                public static getCPtr(param0: Layer): number;
                public getLanguage(): string;
                public static createTileDecoder(param0: CartoBaseMapStyle): vectortiles.VectorTileDecoder;
                public constructor(param0: datasources.TileDataSource, param1: CartoBaseMapStyle);
                public setFallbackLanguage(param0: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoVectorTileLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CartoVectorTileLayerModuleJNI>;
                public static CartoVectorTileLayer_getBuildingRenderMode(param0: number, param1: CartoVectorTileLayer): number;
                public static new_CartoVectorTileLayer__SWIG_0(param0: number, param1: datasources.TileDataSource, param2: number): number;
                public static new_CartoVectorTileLayer__SWIG_1(param0: number, param1: datasources.TileDataSource, param2: number, param3: utils.AssetPackage): number;
                public static CartoVectorTileLayer_swigGetClassName(param0: number, param1: CartoVectorTileLayer): string;
                public static CartoVectorTileLayer_createTileDecoder__SWIG_2(param0: number, param1: utils.AssetPackage, param2: string): number;
                public static CartoVectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static CartoVectorTileLayer_getLanguage(param0: number, param1: CartoVectorTileLayer): string;
                public static CartoVectorTileLayer_createTileDecoder__SWIG_1(param0: number, param1: utils.AssetPackage): number;
                public static CartoVectorTileLayer_createTileDecoder__SWIG_0(param0: number): number;
                public static CartoVectorTileLayer_setPOIRenderMode(param0: number, param1: CartoVectorTileLayer, param2: number): void;
                public static CartoVectorTileLayer_setBuildingRenderMode(param0: number, param1: CartoVectorTileLayer, param2: number): void;
                public static CartoVectorTileLayer_swigGetRawPtr(param0: number, param1: CartoVectorTileLayer): number;
                public static CartoVectorTileLayer_getPOIRenderMode(param0: number, param1: CartoVectorTileLayer): number;
                public static delete_CartoVectorTileLayer(param0: number): void;
                public static CartoVectorTileLayer_swigGetDirectorObject(param0: number, param1: CartoVectorTileLayer): any;
                public static new_CartoVectorTileLayer__SWIG_2(param0: number, param1: datasources.TileDataSource, param2: number, param3: utils.AssetPackage, param4: string): number;
                public static CartoVectorTileLayer_setLanguage(param0: number, param1: CartoVectorTileLayer, param2: string): void;
                public static CartoVectorTileLayer_getFallbackLanguage(param0: number, param1: CartoVectorTileLayer): string;
                public static CartoVectorTileLayer_setFallbackLanguage(param0: number, param1: CartoVectorTileLayer, param2: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class ClusterBuilderMode {
                public static class: java.lang.Class<ClusterBuilderMode>;
                public static CLUSTER_BUILDER_MODE_ELEMENTS: ClusterBuilderMode;
                public static CLUSTER_BUILDER_MODE_ELEMENT_COUNT: ClusterBuilderMode;
                public static swigToEnum(param0: number): ClusterBuilderMode;
                public swigValue(): number;
                public static values(): native.Array<ClusterBuilderMode>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                public static valueOf(param0: string): ClusterBuilderMode;
            }
            export namespace ClusterBuilderMode {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class ClusterElementBuilder extends java.lang.Object {
                public static class: java.lang.Class<ClusterElementBuilder>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ClusterElementBuilder;
                public static getCPtr(param0: ClusterElementBuilder): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public buildClusterElement(param0: core.MapPos, param1: number): vectorelements.VectorElement;
                public buildClusterElement(param0: core.MapPos, param1: vectorelements.VectorElementVector): vectorelements.VectorElement;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public getBuilderMode(): ClusterBuilderMode;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class ClusterElementBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ClusterElementBuilderModuleJNI>;
                public static ClusterElementBuilder_getBuilderMode(param0: number, param1: ClusterElementBuilder): number;
                public static ClusterElementBuilder_change_ownership(param0: ClusterElementBuilder, param1: number, param2: boolean): void;
                public static ClusterElementBuilder_swigGetDirectorObject(param0: number, param1: ClusterElementBuilder): any;
                public static ClusterElementBuilder_buildClusterElementSwigExplicitClusterElementBuilder__SWIG_1(param0: number, param1: ClusterElementBuilder, param2: number, param3: core.MapPos, param4: number, param5: vectorelements.VectorElementVector): number;
                public static SwigDirector_ClusterElementBuilder_buildClusterElement__SWIG_0(param0: ClusterElementBuilder, param1: number, param2: number): number;
                public static delete_ClusterElementBuilder(param0: number): void;
                public static ClusterElementBuilder_buildClusterElementSwigExplicitClusterElementBuilder__SWIG_0(param0: number, param1: ClusterElementBuilder, param2: number, param3: core.MapPos, param4: number): number;
                public static ClusterElementBuilder_getBuilderModeSwigExplicitClusterElementBuilder(param0: number, param1: ClusterElementBuilder): number;
                public static ClusterElementBuilder_buildClusterElement__SWIG_1(param0: number, param1: ClusterElementBuilder, param2: number, param3: core.MapPos, param4: number, param5: vectorelements.VectorElementVector): number;
                public constructor();
                public static ClusterElementBuilder_swigGetRawPtr(param0: number, param1: ClusterElementBuilder): number;
                public static ClusterElementBuilder_swigGetClassName(param0: number, param1: ClusterElementBuilder): string;
                public static SwigDirector_ClusterElementBuilder_buildClusterElement__SWIG_1(param0: ClusterElementBuilder, param1: number, param2: number): number;
                public static SwigDirector_ClusterElementBuilder_getBuilderMode(param0: ClusterElementBuilder): number;
                public static ClusterElementBuilder_buildClusterElement__SWIG_0(param0: number, param1: ClusterElementBuilder, param2: number, param3: core.MapPos, param4: number): number;
                public static new_ClusterElementBuilder(): number;
                public static ClusterElementBuilder_director_connect(param0: ClusterElementBuilder, param1: number, param2: boolean, param3: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class ClusteredVectorLayer extends VectorLayer {
                public static class: java.lang.Class<ClusteredVectorLayer>;
                public expandCluster(param0: vectorelements.VectorElement, param1: number): boolean;
                public setMaximumClusterZoom(param0: number): void;
                public static getCPtr(param0: VectorLayer): number;
                public finalize(): void;
                public setAnimatedClusters(param0: boolean): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: datasources.VectorDataSource);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ClusteredVectorLayer;
                public swigGetClassName(): string;
                public static getCPtr(param0: ClusteredVectorLayer): number;
                public getMinimumClusterDistance(): number;
                public getMaximumClusterZoom(): number;
                public isAnimatedClusters(): boolean;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public constructor(param0: datasources.LocalVectorDataSource, param1: ClusterElementBuilder);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorLayer;
                public static getCPtr(param0: Layer): number;
                public delete(): void;
                public refresh(): void;
                public getClusterElementBuilder(): ClusterElementBuilder;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
                public setMinimumClusterDistance(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class ClusteredVectorLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ClusteredVectorLayerModuleJNI>;
                public static ClusteredVectorLayer_swigGetDirectorObject(param0: number, param1: ClusteredVectorLayer): any;
                public static ClusteredVectorLayer_setMinimumClusterDistance(param0: number, param1: ClusteredVectorLayer, param2: number): void;
                public static ClusteredVectorLayer_setMaximumClusterZoom(param0: number, param1: ClusteredVectorLayer, param2: number): void;
                public static delete_ClusteredVectorLayer(param0: number): void;
                public static ClusteredVectorLayer_getClusterElementBuilder(param0: number, param1: ClusteredVectorLayer): number;
                public static ClusteredVectorLayer_refresh(param0: number, param1: ClusteredVectorLayer): void;
                public constructor();
                public static ClusteredVectorLayer_swigGetRawPtr(param0: number, param1: ClusteredVectorLayer): number;
                public static ClusteredVectorLayer_isAnimatedClusters(param0: number, param1: ClusteredVectorLayer): boolean;
                public static ClusteredVectorLayer_setAnimatedClusters(param0: number, param1: ClusteredVectorLayer, param2: boolean): void;
                public static ClusteredVectorLayer_swigGetClassName(param0: number, param1: ClusteredVectorLayer): string;
                public static new_ClusteredVectorLayer(param0: number, param1: datasources.LocalVectorDataSource, param2: number, param3: ClusterElementBuilder): number;
                public static ClusteredVectorLayer_getMinimumClusterDistance(param0: number, param1: ClusteredVectorLayer): number;
                public static ClusteredVectorLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static ClusteredVectorLayer_getMaximumClusterZoom(param0: number, param1: ClusteredVectorLayer): number;
                public static ClusteredVectorLayer_expandCluster(param0: number, param1: ClusteredVectorLayer, param2: number, param3: vectorelements.VectorElement, param4: number): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class EditableVectorLayer extends VectorLayer {
                public static class: java.lang.Class<EditableVectorLayer>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): EditableVectorLayer;
                public static getCPtr(param0: VectorLayer): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: datasources.VectorDataSource);
                public static getCPtr(param0: EditableVectorLayer): number;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public getVectorEditEventListener(): VectorEditEventListener;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorLayer;
                public static getCPtr(param0: Layer): number;
                public delete(): void;
                public getSelectedVectorElement(): vectorelements.VectorElement;
                public setVectorEditEventListener(param0: VectorEditEventListener): void;
                public setSelectedVectorElement(param0: vectorelements.VectorElement): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class EditableVectorLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<EditableVectorLayerModuleJNI>;
                public static delete_EditableVectorLayer(param0: number): void;
                public static EditableVectorLayer_setVectorEditEventListener(param0: number, param1: EditableVectorLayer, param2: number, param3: VectorEditEventListener): void;
                public static EditableVectorLayer_swigGetDirectorObject(param0: number, param1: EditableVectorLayer): any;
                public static EditableVectorLayer_getSelectedVectorElement(param0: number, param1: EditableVectorLayer): number;
                public static EditableVectorLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static EditableVectorLayer_swigGetRawPtr(param0: number, param1: EditableVectorLayer): number;
                public static EditableVectorLayer_swigGetClassName(param0: number, param1: EditableVectorLayer): string;
                public static new_EditableVectorLayer(param0: number, param1: datasources.VectorDataSource): number;
                public static EditableVectorLayer_getVectorEditEventListener(param0: number, param1: EditableVectorLayer): number;
                public static EditableVectorLayer_setSelectedVectorElement(param0: number, param1: EditableVectorLayer, param2: number, param3: vectorelements.VectorElement): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class HillshadeRasterTileLayer extends RasterTileLayer {
                public static class: java.lang.Class<HillshadeRasterTileLayer>;
                public static getCPtr(param0: TileLayer): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RasterTileLayer;
                public setIlluminationMapRotationEnabled(param0: boolean): void;
                public finalize(): void;
                public getElevation(param0: core.MapPos): number;
                public getHighlightColor(): graphics.Color;
                public constructor(param0: datasources.TileDataSource);
                public delete(): void;
                public getElevations(param0: core.MapPosVector): core.IntVector;
                public setContrast(param0: number): void;
                public setIlluminationDirection(param0: number): void;
                public getShadowColor(): graphics.Color;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
                public static getCPtr(param0: HillshadeRasterTileLayer): number;
                public setShadowColor(param0: graphics.Color): void;
                public constructor(param0: number, param1: boolean);
                public setHighlightColor(param0: graphics.Color): void;
                public swigGetClassName(): string;
                public getContrast(): number;
                public getIlluminationDirection(): number;
                public static getCPtr(param0: RasterTileLayer): number;
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileLayer;
                public getIlluminationMapRotationEnabled(): boolean;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: Layer): number;
                public getHeightScale(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): HillshadeRasterTileLayer;
                public constructor(param0: datasources.TileDataSource, param1: rastertiles.ElevationDecoder);
                public setHeightScale(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class HillshadeRasterTileLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<HillshadeRasterTileLayerModuleJNI>;
                public static HillshadeRasterTileLayer_getIlluminationDirection(param0: number, param1: HillshadeRasterTileLayer): number;
                public static new_HillshadeRasterTileLayer(param0: number, param1: datasources.TileDataSource, param2: number, param3: rastertiles.ElevationDecoder): number;
                public static HillshadeRasterTileLayer_getElevations(param0: number, param1: HillshadeRasterTileLayer, param2: number, param3: core.MapPosVector): number;
                public static delete_HillshadeRasterTileLayer(param0: number): void;
                public static HillshadeRasterTileLayer_swigGetClassName(param0: number, param1: HillshadeRasterTileLayer): string;
                public static HillshadeRasterTileLayer_setShadowColor(param0: number, param1: HillshadeRasterTileLayer, param2: number, param3: graphics.Color): void;
                public static HillshadeRasterTileLayer_getIlluminationMapRotationEnabled(param0: number, param1: HillshadeRasterTileLayer): boolean;
                public static HillshadeRasterTileLayer_setContrast(param0: number, param1: HillshadeRasterTileLayer, param2: number): void;
                public static HillshadeRasterTileLayer_setIlluminationMapRotationEnabled(param0: number, param1: HillshadeRasterTileLayer, param2: boolean): void;
                public constructor();
                public static HillshadeRasterTileLayer_setIlluminationDirection(param0: number, param1: HillshadeRasterTileLayer, param2: number): void;
                public static HillshadeRasterTileLayer_getHeightScale(param0: number, param1: HillshadeRasterTileLayer): number;
                public static HillshadeRasterTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static HillshadeRasterTileLayer_setHeightScale(param0: number, param1: HillshadeRasterTileLayer, param2: number): void;
                public static HillshadeRasterTileLayer_getShadowColor(param0: number, param1: HillshadeRasterTileLayer): number;
                public static HillshadeRasterTileLayer_getHighlightColor(param0: number, param1: HillshadeRasterTileLayer): number;
                public static HillshadeRasterTileLayer_getElevation(param0: number, param1: HillshadeRasterTileLayer, param2: number, param3: core.MapPos): number;
                public static HillshadeRasterTileLayer_getContrast(param0: number, param1: HillshadeRasterTileLayer): number;
                public static HillshadeRasterTileLayer_swigGetDirectorObject(param0: number, param1: HillshadeRasterTileLayer): any;
                public static HillshadeRasterTileLayer_setHighlightColor(param0: number, param1: HillshadeRasterTileLayer, param2: number, param3: graphics.Color): void;
                public static HillshadeRasterTileLayer_swigGetRawPtr(param0: number, param1: HillshadeRasterTileLayer): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class Layer extends java.lang.Object {
                public static class: java.lang.Class<Layer>;
                public swigCMemOwn: boolean;
                public setMetaData(param0: core.StringVariantMap): void;
                public isVisible(): boolean;
                public finalize(): void;
                public setVisibleZoomRange(param0: core.MapRange): void;
                public delete(): void;
                public setMetaDataElement(param0: string, param1: core.Variant): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public setCullDelay(param0: number): void;
                public isUpdateInProgress(): boolean;
                public getMetaData(): core.StringVariantMap;
                public setVisible(param0: boolean): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
                public getUpdatePriority(): number;
                public update(param0: renderers.components.CullState): void;
                public constructor(param0: number, param1: boolean);
                public setOpacity(param0: number): void;
                public swigGetClassName(): string;
                public setUpdatePriority(param0: number): void;
                public swigGetDirectorObject(): any;
                public getMetaDataElement(param0: string): core.Variant;
                public getVisibleZoomRange(): core.MapRange;
                public swigGetRawPtr(): number;
                public simulateClick(param0: ui.ClickType, param1: core.ScreenPos, param2: graphics.ViewState): void;
                public static getCPtr(param0: Layer): number;
                public refresh(): void;
                public containsMetaDataKey(param0: string): boolean;
                public getOpacity(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class LayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LayerModuleJNI>;
                public static LayerVector_get(param0: number, param1: LayerVector, param2: number): number;
                public static Layer_setOpacity(param0: number, param1: Layer, param2: number): void;
                public static Layer_isVisible(param0: number, param1: Layer): boolean;
                public static LayerVector_add(param0: number, param1: LayerVector, param2: number, param3: Layer): void;
                public static LayerVector_swigGetRawPtr(param0: number, param1: LayerVector): number;
                public static LayerVector_capacity(param0: number, param1: LayerVector): number;
                public static Layer_setUpdatePriority(param0: number, param1: Layer, param2: number): void;
                public static Layer_swigGetRawPtr(param0: number, param1: Layer): number;
                public static Layer_getVisibleZoomRange(param0: number, param1: Layer): number;
                public constructor();
                public static delete_Layer(param0: number): void;
                public static Layer_isUpdateInProgress(param0: number, param1: Layer): boolean;
                public static new_LayerVector__SWIG_1(param0: number): number;
                public static Layer_update(param0: number, param1: Layer, param2: number, param3: renderers.components.CullState): void;
                public static LayerVector_isEmpty(param0: number, param1: LayerVector): boolean;
                public static Layer_swigGetClassName(param0: number, param1: Layer): string;
                public static Layer_getMetaData(param0: number, param1: Layer): number;
                public static LayerVector_reserve(param0: number, param1: LayerVector, param2: number): void;
                public static Layer_simulateClick(param0: number, param1: Layer, param2: number, param3: number, param4: core.ScreenPos, param5: number, param6: graphics.ViewState): void;
                public static Layer_getMetaDataElement(param0: number, param1: Layer, param2: string): number;
                public static Layer_setVisibleZoomRange(param0: number, param1: Layer, param2: number, param3: core.MapRange): void;
                public static LayerVector_size(param0: number, param1: LayerVector): number;
                public static Layer_setVisible(param0: number, param1: Layer, param2: boolean): void;
                public static Layer_getUpdatePriority(param0: number, param1: Layer): number;
                public static new_LayerVector__SWIG_0(): number;
                public static delete_LayerVector(param0: number): void;
                public static Layer_setMetaData(param0: number, param1: Layer, param2: number, param3: core.StringVariantMap): void;
                public static Layer_setCullDelay(param0: number, param1: Layer, param2: number): void;
                public static Layer_setMetaDataElement(param0: number, param1: Layer, param2: string, param3: number, param4: core.Variant): void;
                public static Layer_getOpacity(param0: number, param1: Layer): number;
                public static LayerVector_set(param0: number, param1: LayerVector, param2: number, param3: number, param4: Layer): void;
                public static LayerVector_clear(param0: number, param1: LayerVector): void;
                public static Layer_swigGetDirectorObject(param0: number, param1: Layer): any;
                public static Layer_containsMetaDataKey(param0: number, param1: Layer, param2: string): boolean;
                public static Layer_refresh(param0: number, param1: Layer): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class LayerVector extends java.lang.Object {
                public static class: java.lang.Class<LayerVector>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: LayerVector): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public set(param0: number, param1: Layer): void;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public get(param0: number): Layer;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public add(param0: Layer): void;
                public isEmpty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class NMLModelLODTreeEventListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<NMLModelLODTreeEventListenerModuleJNI>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class NMLModelLODTreeLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<NMLModelLODTreeLayerModuleJNI>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class RasterTileEventListener extends java.lang.Object {
                public static class: java.lang.Class<RasterTileEventListener>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RasterTileEventListener;
                public finalize(): void;
                public onRasterTileClicked(param0: ui.RasterTileClickInfo): boolean;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: RasterTileEventListener): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class RasterTileEventListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RasterTileEventListenerModuleJNI>;
                public static RasterTileEventListener_onRasterTileClicked(param0: number, param1: RasterTileEventListener, param2: number, param3: ui.RasterTileClickInfo): boolean;
                public static RasterTileEventListener_swigGetClassName(param0: number, param1: RasterTileEventListener): string;
                public static RasterTileEventListener_swigGetDirectorObject(param0: number, param1: RasterTileEventListener): any;
                public static RasterTileEventListener_swigGetRawPtr(param0: number, param1: RasterTileEventListener): number;
                public static RasterTileEventListener_onRasterTileClickedSwigExplicitRasterTileEventListener(param0: number, param1: RasterTileEventListener, param2: number, param3: ui.RasterTileClickInfo): boolean;
                public static SwigDirector_RasterTileEventListener_onRasterTileClicked(param0: RasterTileEventListener, param1: number): boolean;
                public static new_RasterTileEventListener(): number;
                public static RasterTileEventListener_director_connect(param0: RasterTileEventListener, param1: number, param2: boolean, param3: boolean): void;
                public constructor();
                public static delete_RasterTileEventListener(param0: number): void;
                public static RasterTileEventListener_change_ownership(param0: RasterTileEventListener, param1: number, param2: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class RasterTileFilterMode {
                public static class: java.lang.Class<RasterTileFilterMode>;
                public static RASTER_TILE_FILTER_MODE_NEAREST: RasterTileFilterMode;
                public static RASTER_TILE_FILTER_MODE_BILINEAR: RasterTileFilterMode;
                public static RASTER_TILE_FILTER_MODE_BICUBIC: RasterTileFilterMode;
                public swigValue(): number;
                public static values(): native.Array<RasterTileFilterMode>;
                public static swigToEnum(param0: number): RasterTileFilterMode;
                public static valueOf(param0: string): RasterTileFilterMode;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace RasterTileFilterMode {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class RasterTileLayer extends TileLayer {
                public static class: java.lang.Class<RasterTileLayer>;
                public getTileFilterMode(): RasterTileFilterMode;
                public getTextureCacheCapacity(): number;
                public static getCPtr(param0: TileLayer): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RasterTileLayer;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public setTileFilterMode(param0: RasterTileFilterMode): void;
                public getRasterTileEventListener(): RasterTileEventListener;
                public static getCPtr(param0: RasterTileLayer): number;
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileLayer;
                public swigGetRawPtr(): number;
                public constructor(param0: datasources.TileDataSource);
                public static getCPtr(param0: Layer): number;
                public delete(): void;
                public setRasterTileEventListener(param0: RasterTileEventListener): void;
                public setTextureCacheCapacity(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class RasterTileLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RasterTileLayerModuleJNI>;
                public static RasterTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static new_RasterTileLayer(param0: number, param1: datasources.TileDataSource): number;
                public static RasterTileLayer_swigGetDirectorObject(param0: number, param1: RasterTileLayer): any;
                public static RasterTileLayer_swigGetClassName(param0: number, param1: RasterTileLayer): string;
                public static RasterTileLayer_setTextureCacheCapacity(param0: number, param1: RasterTileLayer, param2: number): void;
                public static RasterTileLayer_setRasterTileEventListener(param0: number, param1: RasterTileLayer, param2: number, param3: RasterTileEventListener): void;
                public constructor();
                public static RasterTileLayer_setTileFilterMode(param0: number, param1: RasterTileLayer, param2: number): void;
                public static RasterTileLayer_swigGetRawPtr(param0: number, param1: RasterTileLayer): number;
                public static RasterTileLayer_getTextureCacheCapacity(param0: number, param1: RasterTileLayer): number;
                public static RasterTileLayer_getTileFilterMode(param0: number, param1: RasterTileLayer): number;
                public static RasterTileLayer_getRasterTileEventListener(param0: number, param1: RasterTileLayer): number;
                public static delete_RasterTileLayer(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class SWIGTYPE_p_std__vectorT_int_t extends java.lang.Object {
                public static class: java.lang.Class<SWIGTYPE_p_std__vectorT_int_t>;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: SWIGTYPE_p_std__vectorT_int_t): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class SolidLayer extends Layer {
                public static class: java.lang.Class<SolidLayer>;
                public setBitmap(param0: graphics.Bitmap): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setColor(param0: graphics.Color): void;
                public static getCPtr(param0: SolidLayer): number;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): SolidLayer;
                public getBitmapScale(): number;
                public swigGetDirectorObject(): any;
                public getBitmap(): graphics.Bitmap;
                public swigGetRawPtr(): number;
                public setBitmapScale(param0: number): void;
                public constructor(param0: graphics.Color);
                public static getCPtr(param0: Layer): number;
                public delete(): void;
                public constructor(param0: graphics.Bitmap);
                public getColor(): graphics.Color;
                public isUpdateInProgress(): boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class SolidLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<SolidLayerModuleJNI>;
                public static SolidLayer_swigGetRawPtr(param0: number, param1: SolidLayer): number;
                public static SolidLayer_setColor(param0: number, param1: SolidLayer, param2: number, param3: graphics.Color): void;
                public static SolidLayer_isUpdateInProgress(param0: number, param1: SolidLayer): boolean;
                public static SolidLayer_swigGetClassName(param0: number, param1: SolidLayer): string;
                public static SolidLayer_getBitmap(param0: number, param1: SolidLayer): number;
                public static new_SolidLayer__SWIG_0(param0: number, param1: graphics.Color): number;
                public static new_SolidLayer__SWIG_1(param0: number, param1: graphics.Bitmap): number;
                public static SolidLayer_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static delete_SolidLayer(param0: number): void;
                public static SolidLayer_swigGetDirectorObject(param0: number, param1: SolidLayer): any;
                public static SolidLayer_setBitmapScale(param0: number, param1: SolidLayer, param2: number): void;
                public static SolidLayer_getColor(param0: number, param1: SolidLayer): number;
                public static SolidLayer_getBitmapScale(param0: number, param1: SolidLayer): number;
                public static SolidLayer_setBitmap(param0: number, param1: SolidLayer, param2: number, param3: graphics.Bitmap): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TileLayer extends Layer {
                public static class: java.lang.Class<TileLayer>;
                public setUTFGridEventListener(param0: UTFGridEventListener): void;
                public static getCPtr(param0: TileLayer): number;
                public setTileLoadListener(param0: TileLoadListener): void;
                public getTileSubstitutionPolicy(): TileSubstitutionPolicy;
                public getZoomLevelBias(): number;
                public setZoomLevelBias(param0: number): void;
                public finalize(): void;
                public calculateMapTileOrigin(param0: core.MapTile): core.MapPos;
                public setUTFGridDataSource(param0: datasources.TileDataSource): void;
                public getDataSource(): datasources.TileDataSource;
                public calculateMapTile(param0: core.MapPos, param1: number): core.MapTile;
                public calculateMapTileBounds(param0: core.MapTile): core.MapBounds;
                public getTileLoadListener(): TileLoadListener;
                public isSynchronizedRefresh(): boolean;
                public delete(): void;
                public setFrameNr(param0: number): void;
                public getUTFGridDataSource(): datasources.TileDataSource;
                public isUpdateInProgress(): boolean;
                public setMaxOverzoomLevel(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
                public getUTFGridEventListener(): UTFGridEventListener;
                public setMaxUnderzoomLevel(param0: number): void;
                public getMaxOverzoomLevel(): number;
                public constructor(param0: number, param1: boolean);
                public clearTileCaches(param0: boolean): void;
                public swigGetClassName(): string;
                public setPreloading(param0: boolean): void;
                public setTileSubstitutionPolicy(param0: TileSubstitutionPolicy): void;
                public getMaxUnderzoomLevel(): number;
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileLayer;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: Layer): number;
                public getFrameNr(): number;
                public isPreloading(): boolean;
                public setSynchronizedRefresh(param0: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TileLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TileLayerModuleJNI>;
                public static TileLayer_clearTileCaches(param0: number, param1: TileLayer, param2: boolean): void;
                public static TileLayer_isPreloading(param0: number, param1: TileLayer): boolean;
                public static TileLayer_swigGetDirectorObject(param0: number, param1: TileLayer): any;
                public static TileLayer_setFrameNr(param0: number, param1: TileLayer, param2: number): void;
                public static TileLayer_getMaxOverzoomLevel(param0: number, param1: TileLayer): number;
                public static TileLayer_setTileLoadListener(param0: number, param1: TileLayer, param2: number, param3: TileLoadListener): void;
                public static TileLayer_setPreloading(param0: number, param1: TileLayer, param2: boolean): void;
                public constructor();
                public static TileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static TileLayer_getMaxUnderzoomLevel(param0: number, param1: TileLayer): number;
                public static TileLayer_getTileSubstitutionPolicy(param0: number, param1: TileLayer): number;
                public static TileLayer_setUTFGridEventListener(param0: number, param1: TileLayer, param2: number, param3: UTFGridEventListener): void;
                public static TileLayer_getTileLoadListener(param0: number, param1: TileLayer): number;
                public static TileLayer_calculateMapTileBounds(param0: number, param1: TileLayer, param2: number, param3: core.MapTile): number;
                public static TileLayer_swigGetClassName(param0: number, param1: TileLayer): string;
                public static TileLayer_calculateMapTileOrigin(param0: number, param1: TileLayer, param2: number, param3: core.MapTile): number;
                public static TileLayer_isUpdateInProgress(param0: number, param1: TileLayer): boolean;
                public static TileLayer_setSynchronizedRefresh(param0: number, param1: TileLayer, param2: boolean): void;
                public static TileLayer_calculateMapTile(param0: number, param1: TileLayer, param2: number, param3: core.MapPos, param4: number): number;
                public static TileLayer_setMaxOverzoomLevel(param0: number, param1: TileLayer, param2: number): void;
                public static TileLayer_getDataSource(param0: number, param1: TileLayer): number;
                public static TileLayer_swigGetRawPtr(param0: number, param1: TileLayer): number;
                public static TileLayer_setUTFGridDataSource(param0: number, param1: TileLayer, param2: number, param3: datasources.TileDataSource): void;
                public static delete_TileLayer(param0: number): void;
                public static TileLayer_getFrameNr(param0: number, param1: TileLayer): number;
                public static TileLayer_getUTFGridEventListener(param0: number, param1: TileLayer): number;
                public static TileLayer_setZoomLevelBias(param0: number, param1: TileLayer, param2: number): void;
                public static TileLayer_setTileSubstitutionPolicy(param0: number, param1: TileLayer, param2: number): void;
                public static TileLayer_isSynchronizedRefresh(param0: number, param1: TileLayer): boolean;
                public static TileLayer_getZoomLevelBias(param0: number, param1: TileLayer): number;
                public static TileLayer_setMaxUnderzoomLevel(param0: number, param1: TileLayer, param2: number): void;
                public static TileLayer_getUTFGridDataSource(param0: number, param1: TileLayer): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TileLoadListener extends java.lang.Object {
                public static class: java.lang.Class<TileLoadListener>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: TileLoadListener): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public onVisibleTilesLoaded(): void;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileLoadListener;
                public onPreloadingTilesLoaded(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TileLoadListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TileLoadListenerModuleJNI>;
                public static TileLoadListener_onPreloadingTilesLoadedSwigExplicitTileLoadListener(param0: number, param1: TileLoadListener): void;
                public static TileLoadListener_onPreloadingTilesLoaded(param0: number, param1: TileLoadListener): void;
                public static TileLoadListener_onVisibleTilesLoadedSwigExplicitTileLoadListener(param0: number, param1: TileLoadListener): void;
                public static TileLoadListener_swigGetRawPtr(param0: number, param1: TileLoadListener): number;
                public static new_TileLoadListener(): number;
                public constructor();
                public static TileLoadListener_swigGetDirectorObject(param0: number, param1: TileLoadListener): any;
                public static SwigDirector_TileLoadListener_onVisibleTilesLoaded(param0: TileLoadListener): void;
                public static TileLoadListener_onVisibleTilesLoaded(param0: number, param1: TileLoadListener): void;
                public static TileLoadListener_swigGetClassName(param0: number, param1: TileLoadListener): string;
                public static TileLoadListener_director_connect(param0: TileLoadListener, param1: number, param2: boolean, param3: boolean): void;
                public static delete_TileLoadListener(param0: number): void;
                public static SwigDirector_TileLoadListener_onPreloadingTilesLoaded(param0: TileLoadListener): void;
                public static TileLoadListener_change_ownership(param0: TileLoadListener, param1: number, param2: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TileSubstitutionPolicy {
                public static class: java.lang.Class<TileSubstitutionPolicy>;
                public static TILE_SUBSTITUTION_POLICY_ALL: TileSubstitutionPolicy;
                public static TILE_SUBSTITUTION_POLICY_VISIBLE: TileSubstitutionPolicy;
                public static TILE_SUBSTITUTION_POLICY_NONE: TileSubstitutionPolicy;
                public static valueOf(param0: string): TileSubstitutionPolicy;
                public swigValue(): number;
                public static values(): native.Array<TileSubstitutionPolicy>;
                public static swigToEnum(param0: number): TileSubstitutionPolicy;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace TileSubstitutionPolicy {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TorqueTileLayer extends VectorTileLayer {
                public static class: java.lang.Class<TorqueTileLayer>;
                public static getCPtr(param0: TorqueTileLayer): number;
                public static getCPtr(param0: TileLayer): number;
                public countVisibleFeatures(param0: number): number;
                public constructor(param0: datasources.TileDataSource, param1: vectortiles.TorqueTileDecoder);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: VectorTileLayer): number;
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TorqueTileLayer;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileLayer;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: Layer): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileLayer;
                public constructor(param0: datasources.TileDataSource, param1: vectortiles.VectorTileDecoder);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TorqueTileLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TorqueTileLayerModuleJNI>;
                public static TorqueTileLayer_swigGetClassName(param0: number, param1: TorqueTileLayer): string;
                public static delete_TorqueTileLayer(param0: number): void;
                public static TorqueTileLayer_swigGetDirectorObject(param0: number, param1: TorqueTileLayer): any;
                public static TorqueTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static new_TorqueTileLayer(param0: number, param1: datasources.TileDataSource, param2: number, param3: vectortiles.TorqueTileDecoder): number;
                public static TorqueTileLayer_swigGetRawPtr(param0: number, param1: TorqueTileLayer): number;
                public constructor();
                public static TorqueTileLayer_countVisibleFeatures(param0: number, param1: TorqueTileLayer, param2: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class UTFGridEventListener extends java.lang.Object {
                public static class: java.lang.Class<UTFGridEventListener>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public onUTFGridClicked(param0: ui.UTFGridClickInfo): boolean;
                public delete(): void;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): UTFGridEventListener;
                public static getCPtr(param0: UTFGridEventListener): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class UTFGridEventListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<UTFGridEventListenerModuleJNI>;
                public static UTFGridEventListener_swigGetRawPtr(param0: number, param1: UTFGridEventListener): number;
                public static SwigDirector_UTFGridEventListener_onUTFGridClicked(param0: UTFGridEventListener, param1: number): boolean;
                public static UTFGridEventListener_swigGetDirectorObject(param0: number, param1: UTFGridEventListener): any;
                public static UTFGridEventListener_swigGetClassName(param0: number, param1: UTFGridEventListener): string;
                public static delete_UTFGridEventListener(param0: number): void;
                public static UTFGridEventListener_onUTFGridClicked(param0: number, param1: UTFGridEventListener, param2: number, param3: ui.UTFGridClickInfo): boolean;
                public static UTFGridEventListener_change_ownership(param0: UTFGridEventListener, param1: number, param2: boolean): void;
                public static UTFGridEventListener_director_connect(param0: UTFGridEventListener, param1: number, param2: boolean, param3: boolean): void;
                public static UTFGridEventListener_onUTFGridClickedSwigExplicitUTFGridEventListener(param0: number, param1: UTFGridEventListener, param2: number, param3: ui.UTFGridClickInfo): boolean;
                public constructor();
                public static new_UTFGridEventListener(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorEditEventListener extends java.lang.Object {
                public static class: java.lang.Class<VectorEditEventListener>;
                public swigCMemOwn: boolean;
                public onElementModify(param0: vectorelements.VectorElement, param1: geometry.Geometry): void;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public onElementDeselected(param0: vectorelements.VectorElement): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public onElementSelect(param0: vectorelements.VectorElement): boolean;
                public onSelectDragPointStyle(param0: vectorelements.VectorElement, param1: VectorElementDragPointStyle): styles.PointStyle;
                public swigGetDirectorObject(): any;
                public onDragMove(param0: ui.VectorElementDragInfo): VectorElementDragResult;
                public constructor();
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorEditEventListener;
                public onDragEnd(param0: ui.VectorElementDragInfo): VectorElementDragResult;
                public delete(): void;
                public static getCPtr(param0: VectorEditEventListener): number;
                public swigTakeOwnership(): void;
                public onDragStart(param0: ui.VectorElementDragInfo): VectorElementDragResult;
                public onElementDelete(param0: vectorelements.VectorElement): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorEditEventListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorEditEventListenerModuleJNI>;
                public static VectorEditEventListener_onDragStart(param0: number, param1: VectorEditEventListener, param2: number, param3: ui.VectorElementDragInfo): number;
                public static SwigDirector_VectorEditEventListener_onDragStart(param0: VectorEditEventListener, param1: number): number;
                public static VectorEditEventListener_swigGetRawPtr(param0: number, param1: VectorEditEventListener): number;
                public static SwigDirector_VectorEditEventListener_onElementDeselected(param0: VectorEditEventListener, param1: number): void;
                public static VectorEditEventListener_onDragMove(param0: number, param1: VectorEditEventListener, param2: number, param3: ui.VectorElementDragInfo): number;
                public constructor();
                public static SwigDirector_VectorEditEventListener_onDragEnd(param0: VectorEditEventListener, param1: number): number;
                public static VectorEditEventListener_onDragMoveSwigExplicitVectorEditEventListener(param0: number, param1: VectorEditEventListener, param2: number, param3: ui.VectorElementDragInfo): number;
                public static SwigDirector_VectorEditEventListener_onElementDelete(param0: VectorEditEventListener, param1: number): void;
                public static SwigDirector_VectorEditEventListener_onElementSelect(param0: VectorEditEventListener, param1: number): boolean;
                public static VectorEditEventListener_onElementSelect(param0: number, param1: VectorEditEventListener, param2: number, param3: vectorelements.VectorElement): boolean;
                public static VectorEditEventListener_onElementSelectSwigExplicitVectorEditEventListener(param0: number, param1: VectorEditEventListener, param2: number, param3: vectorelements.VectorElement): boolean;
                public static new_VectorEditEventListener(): number;
                public static SwigDirector_VectorEditEventListener_onDragMove(param0: VectorEditEventListener, param1: number): number;
                public static VectorEditEventListener_swigGetClassName(param0: number, param1: VectorEditEventListener): string;
                public static VectorEditEventListener_onElementModify(param0: number, param1: VectorEditEventListener, param2: number, param3: vectorelements.VectorElement, param4: number, param5: geometry.Geometry): void;
                public static VectorEditEventListener_director_connect(param0: VectorEditEventListener, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_VectorEditEventListener_onSelectDragPointStyle(param0: VectorEditEventListener, param1: number, param2: number): number;
                public static VectorEditEventListener_onElementDeselectedSwigExplicitVectorEditEventListener(param0: number, param1: VectorEditEventListener, param2: number, param3: vectorelements.VectorElement): void;
                public static VectorEditEventListener_onElementDeselected(param0: number, param1: VectorEditEventListener, param2: number, param3: vectorelements.VectorElement): void;
                public static VectorEditEventListener_onDragEnd(param0: number, param1: VectorEditEventListener, param2: number, param3: ui.VectorElementDragInfo): number;
                public static VectorEditEventListener_onSelectDragPointStyle(param0: number, param1: VectorEditEventListener, param2: number, param3: vectorelements.VectorElement, param4: number): number;
                public static SwigDirector_VectorEditEventListener_onElementModify(param0: VectorEditEventListener, param1: number, param2: number): void;
                public static VectorEditEventListener_change_ownership(param0: VectorEditEventListener, param1: number, param2: boolean): void;
                public static VectorEditEventListener_onElementDelete(param0: number, param1: VectorEditEventListener, param2: number, param3: vectorelements.VectorElement): void;
                public static delete_VectorEditEventListener(param0: number): void;
                public static VectorEditEventListener_swigGetDirectorObject(param0: number, param1: VectorEditEventListener): any;
                public static VectorEditEventListener_onDragStartSwigExplicitVectorEditEventListener(param0: number, param1: VectorEditEventListener, param2: number, param3: ui.VectorElementDragInfo): number;
                public static VectorEditEventListener_onDragEndSwigExplicitVectorEditEventListener(param0: number, param1: VectorEditEventListener, param2: number, param3: ui.VectorElementDragInfo): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorElementDragPointStyle {
                public static class: java.lang.Class<VectorElementDragPointStyle>;
                public static VECTOR_ELEMENT_DRAG_POINT_STYLE_NORMAL: VectorElementDragPointStyle;
                public static VECTOR_ELEMENT_DRAG_POINT_STYLE_VIRTUAL: VectorElementDragPointStyle;
                public static VECTOR_ELEMENT_DRAG_POINT_STYLE_SELECTED: VectorElementDragPointStyle;
                public swigValue(): number;
                public static swigToEnum(param0: number): VectorElementDragPointStyle;
                public static valueOf(param0: string): VectorElementDragPointStyle;
                public static values(): native.Array<VectorElementDragPointStyle>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace VectorElementDragPointStyle {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorElementDragResult {
                public static class: java.lang.Class<VectorElementDragResult>;
                public static VECTOR_ELEMENT_DRAG_RESULT_IGNORE: VectorElementDragResult;
                public static VECTOR_ELEMENT_DRAG_RESULT_STOP: VectorElementDragResult;
                public static VECTOR_ELEMENT_DRAG_RESULT_MODIFY: VectorElementDragResult;
                public static VECTOR_ELEMENT_DRAG_RESULT_DELETE: VectorElementDragResult;
                public static swigToEnum(param0: number): VectorElementDragResult;
                public static values(): native.Array<VectorElementDragResult>;
                public swigValue(): number;
                public static valueOf(param0: string): VectorElementDragResult;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace VectorElementDragResult {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorElementEventListener extends java.lang.Object {
                public static class: java.lang.Class<VectorElementEventListener>;
                public swigCMemOwn: boolean;
                public onVectorElementClicked(param0: ui.VectorElementClickInfo): boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: VectorElementEventListener): number;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElementEventListener;
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorElementEventListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorElementEventListenerModuleJNI>;
                public static new_VectorElementEventListener(): number;
                public static SwigDirector_VectorElementEventListener_onVectorElementClicked(param0: VectorElementEventListener, param1: number): boolean;
                public static VectorElementEventListener_swigGetClassName(param0: number, param1: VectorElementEventListener): string;
                public static delete_VectorElementEventListener(param0: number): void;
                public static VectorElementEventListener_onVectorElementClicked(param0: number, param1: VectorElementEventListener, param2: number, param3: ui.VectorElementClickInfo): boolean;
                public static VectorElementEventListener_onVectorElementClickedSwigExplicitVectorElementEventListener(param0: number, param1: VectorElementEventListener, param2: number, param3: ui.VectorElementClickInfo): boolean;
                public static VectorElementEventListener_director_connect(param0: VectorElementEventListener, param1: number, param2: boolean, param3: boolean): void;
                public static VectorElementEventListener_swigGetRawPtr(param0: number, param1: VectorElementEventListener): number;
                public static VectorElementEventListener_swigGetDirectorObject(param0: number, param1: VectorElementEventListener): any;
                public static VectorElementEventListener_change_ownership(param0: VectorElementEventListener, param1: number, param2: boolean): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorLayer extends Layer {
                public static class: java.lang.Class<VectorLayer>;
                public static getCPtr(param0: VectorLayer): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: datasources.VectorDataSource);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public getDataSource(): datasources.VectorDataSource;
                public setZBuffering(param0: boolean): void;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorLayer;
                public static getCPtr(param0: Layer): number;
                public delete(): void;
                public isZBuffering(): boolean;
                public getVectorElementEventListener(): VectorElementEventListener;
                public isUpdateInProgress(): boolean;
                public setVectorElementEventListener(param0: VectorElementEventListener): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorLayerModuleJNI>;
                public static VectorLayer_swigGetClassName(param0: number, param1: VectorLayer): string;
                public static delete_VectorLayer(param0: number): void;
                public static VectorLayer_setVectorElementEventListener(param0: number, param1: VectorLayer, param2: number, param3: VectorElementEventListener): void;
                public static new_VectorLayer(param0: number, param1: datasources.VectorDataSource): number;
                public static VectorLayer_swigGetDirectorObject(param0: number, param1: VectorLayer): any;
                public static VectorLayer_setZBuffering(param0: number, param1: VectorLayer, param2: boolean): void;
                public constructor();
                public static VectorLayer_isUpdateInProgress(param0: number, param1: VectorLayer): boolean;
                public static VectorLayer_isZBuffering(param0: number, param1: VectorLayer): boolean;
                public static VectorLayer_getVectorElementEventListener(param0: number, param1: VectorLayer): number;
                public static VectorLayer_swigGetRawPtr(param0: number, param1: VectorLayer): number;
                public static VectorLayer_getDataSource(param0: number, param1: VectorLayer): number;
                public static VectorLayer_SWIGSmartPtrUpcast(param0: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorTileEventListener extends java.lang.Object {
                public static class: java.lang.Class<VectorTileEventListener>;
                public swigCMemOwn: boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileEventListener;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public onVectorTileClicked(param0: ui.VectorTileClickInfo): boolean;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public static getCPtr(param0: VectorTileEventListener): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorTileEventListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorTileEventListenerModuleJNI>;
                public static VectorTileEventListener_onVectorTileClickedSwigExplicitVectorTileEventListener(param0: number, param1: VectorTileEventListener, param2: number, param3: ui.VectorTileClickInfo): boolean;
                public static VectorTileEventListener_director_connect(param0: VectorTileEventListener, param1: number, param2: boolean, param3: boolean): void;
                public static VectorTileEventListener_swigGetDirectorObject(param0: number, param1: VectorTileEventListener): any;
                public static VectorTileEventListener_swigGetClassName(param0: number, param1: VectorTileEventListener): string;
                public static VectorTileEventListener_onVectorTileClicked(param0: number, param1: VectorTileEventListener, param2: number, param3: ui.VectorTileClickInfo): boolean;
                public static delete_VectorTileEventListener(param0: number): void;
                public static VectorTileEventListener_swigGetRawPtr(param0: number, param1: VectorTileEventListener): number;
                public static new_VectorTileEventListener(): number;
                public static SwigDirector_VectorTileEventListener_onVectorTileClicked(param0: VectorTileEventListener, param1: number): boolean;
                public constructor();
                public static VectorTileEventListener_change_ownership(param0: VectorTileEventListener, param1: number, param2: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorTileLayer extends TileLayer {
                public static class: java.lang.Class<VectorTileLayer>;
                public getTileCacheCapacity(): number;
                public setClickRadius(param0: number): void;
                public static getCPtr(param0: TileLayer): number;
                public getClickRadius(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getTileDecoder(): vectortiles.VectorTileDecoder;
                public swigGetClassName(): string;
                public static getCPtr(param0: VectorTileLayer): number;
                public getVectorTileEventListener(): VectorTileEventListener;
                public setLabelRenderOrder(param0: VectorTileRenderOrder): void;
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TileLayer;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: Layer): number;
                public delete(): void;
                public getLabelRenderOrder(): VectorTileRenderOrder;
                public getBuildingRenderOrder(): VectorTileRenderOrder;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileLayer;
                public constructor(param0: datasources.TileDataSource, param1: vectortiles.VectorTileDecoder);
                public setVectorTileEventListener(param0: VectorTileEventListener): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Layer;
                public setTileCacheCapacity(param0: number): void;
                public setBuildingRenderOrder(param0: VectorTileRenderOrder): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorTileLayerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorTileLayerModuleJNI>;
                public static VectorTileLayer_swigGetClassName(param0: number, param1: VectorTileLayer): string;
                public static VECTOR_TILE_RENDER_ORDER_HIDDEN_get(): number;
                public static VectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static delete_VectorTileLayer(param0: number): void;
                public static VectorTileLayer_getTileCacheCapacity(param0: number, param1: VectorTileLayer): number;
                public static VectorTileLayer_setTileCacheCapacity(param0: number, param1: VectorTileLayer, param2: number): void;
                public static VectorTileLayer_getLabelRenderOrder(param0: number, param1: VectorTileLayer): number;
                public static VectorTileLayer_swigGetDirectorObject(param0: number, param1: VectorTileLayer): any;
                public static VectorTileLayer_getVectorTileEventListener(param0: number, param1: VectorTileLayer): number;
                public static VectorTileLayer_getBuildingRenderOrder(param0: number, param1: VectorTileLayer): number;
                public constructor();
                public static VectorTileLayer_getClickRadius(param0: number, param1: VectorTileLayer): number;
                public static VECTOR_TILE_RENDER_ORDER_LAYER_get(): number;
                public static VectorTileLayer_setBuildingRenderOrder(param0: number, param1: VectorTileLayer, param2: number): void;
                public static VECTOR_TILE_RENDER_ORDER_LAST_get(): number;
                public static new_VectorTileLayer(param0: number, param1: datasources.TileDataSource, param2: number, param3: vectortiles.VectorTileDecoder): number;
                public static VectorTileLayer_getTileDecoder(param0: number, param1: VectorTileLayer): number;
                public static VectorTileLayer_setLabelRenderOrder(param0: number, param1: VectorTileLayer, param2: number): void;
                public static VectorTileLayer_setClickRadius(param0: number, param1: VectorTileLayer, param2: number): void;
                public static VectorTileLayer_setVectorTileEventListener(param0: number, param1: VectorTileLayer, param2: number, param3: VectorTileEventListener): void;
                public static VectorTileLayer_swigGetRawPtr(param0: number, param1: VectorTileLayer): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorTileRenderOrder {
                public static class: java.lang.Class<VectorTileRenderOrder>;
                public static VECTOR_TILE_RENDER_ORDER_HIDDEN: VectorTileRenderOrder;
                public static VECTOR_TILE_RENDER_ORDER_LAYER: VectorTileRenderOrder;
                public static VECTOR_TILE_RENDER_ORDER_LAST: VectorTileRenderOrder;
                public swigValue(): number;
                public static swigToEnum(param0: number): VectorTileRenderOrder;
                public static values(): native.Array<VectorTileRenderOrder>;
                public static valueOf(param0: string): VectorTileRenderOrder;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace VectorTileRenderOrder {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class CartoPackageManager extends PackageManager {
                public static class: java.lang.Class<CartoPackageManager>;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PackageManager;
                public constructor(param0: number, param1: boolean);
                public getStyleAssetPackage(param0: layers.CartoBaseMapStyle): utils.AssetPackage;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CartoPackageManager;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: PackageManager): number;
                public delete(): void;
                public constructor(param0: string, param1: string, param2: string, param3: string);
                public startStyleDownload(param0: layers.CartoBaseMapStyle): boolean;
                public static getCPtr(param0: CartoPackageManager): number;
                public constructor(param0: string, param1: string);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class CartoPackageManagerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CartoPackageManagerModuleJNI>;
                public static CartoPackageManager_swigGetClassName(param0: number, param1: CartoPackageManager): string;
                public static CartoPackageManager_startStyleDownload(param0: number, param1: CartoPackageManager, param2: number): boolean;
                public static CartoPackageManager_getStyleAssetPackage(param0: number, param1: CartoPackageManager, param2: number): number;
                public static CartoPackageManager_swigGetDirectorObject(param0: number, param1: CartoPackageManager): any;
                public static new_CartoPackageManager(param0: string, param1: string): number;
                public static CartoPackageManager_swigGetRawPtr(param0: number, param1: CartoPackageManager): number;
                public static CartoPackageManager_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static delete_CartoPackageManager(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageAction {
                public static class: java.lang.Class<PackageAction>;
                public static PACKAGE_ACTION_READY: PackageAction;
                public static PACKAGE_ACTION_WAITING: PackageAction;
                public static PACKAGE_ACTION_DOWNLOADING: PackageAction;
                public static PACKAGE_ACTION_COPYING: PackageAction;
                public static PACKAGE_ACTION_REMOVING: PackageAction;
                public static valueOf(param0: string): PackageAction;
                public swigValue(): number;
                public static values(): native.Array<PackageAction>;
                public static swigToEnum(param0: number): PackageAction;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace PackageAction {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageErrorType {
                public static class: java.lang.Class<PackageErrorType>;
                public static PACKAGE_ERROR_TYPE_SYSTEM: PackageErrorType;
                public static PACKAGE_ERROR_TYPE_CONNECTION: PackageErrorType;
                public static PACKAGE_ERROR_TYPE_DOWNLOAD_LIMIT_EXCEEDED: PackageErrorType;
                public static PACKAGE_ERROR_TYPE_PACKAGE_TOO_BIG: PackageErrorType;
                public static PACKAGE_ERROR_TYPE_NO_OFFLINE_PLAN: PackageErrorType;
                public swigValue(): number;
                public static values(): native.Array<PackageErrorType>;
                public static swigToEnum(param0: number): PackageErrorType;
                public static valueOf(param0: string): PackageErrorType;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace PackageErrorType {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageInfo extends java.lang.Object {
                public static class: java.lang.Class<PackageInfo>;
                public swigCMemOwn: boolean;
                public getTileMask(): PackageTileMask;
                public getMetaInfo(): PackageMetaInfo;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getName(): string;
                public static getCPtr(param0: PackageInfo): number;
                public constructor(param0: string, param1: PackageType, param2: number, param3: java.math.BigInteger, param4: string, param5: PackageTileMask, param6: PackageMetaInfo);
                public getPackageType(): PackageType;
                public swigGetRawPtr(): number;
                public getNames(param0: string): core.StringVector;
                public delete(): void;
                public getVersion(): number;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public getPackageId(): string;
                public getSize(): java.math.BigInteger;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageInfoModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PackageInfoModuleJNI>;
                public static PackageInfoVector_add(param0: number, param1: PackageInfoVector, param2: number, param3: PackageInfo): void;
                public static PackageInfo_getNames(param0: number, param1: PackageInfo, param2: string): number;
                public static PackageInfoVector_size(param0: number, param1: PackageInfoVector): number;
                public static PackageInfo_getName(param0: number, param1: PackageInfo): string;
                public static PackageInfo_swigGetRawPtr(param0: number, param1: PackageInfo): number;
                public static PackageInfoVector_get(param0: number, param1: PackageInfoVector, param2: number): number;
                public static PackageInfoVector_isEmpty(param0: number, param1: PackageInfoVector): boolean;
                public static PackageInfo_getTileMask(param0: number, param1: PackageInfo): number;
                public static PACKAGE_TYPE_VALHALLA_ROUTING_get(): number;
                public constructor();
                public static PackageInfoVector_reserve(param0: number, param1: PackageInfoVector, param2: number): void;
                public static PackageInfo_getMetaInfo(param0: number, param1: PackageInfo): number;
                public static PackageInfoVector_clear(param0: number, param1: PackageInfoVector): void;
                public static PackageInfo_getVersion(param0: number, param1: PackageInfo): number;
                public static new_PackageInfoVector__SWIG_1(param0: number): number;
                public static new_PackageInfo(param0: string, param1: number, param2: number, param3: java.math.BigInteger, param4: string, param5: number, param6: PackageTileMask, param7: number, param8: PackageMetaInfo): number;
                public static PackageInfo_getPackageId(param0: number, param1: PackageInfo): string;
                public static delete_PackageInfo(param0: number): void;
                public static new_PackageInfoVector__SWIG_0(): number;
                public static PackageInfoVector_set(param0: number, param1: PackageInfoVector, param2: number, param3: number, param4: PackageInfo): void;
                public static PackageInfo_getPackageType(param0: number, param1: PackageInfo): number;
                public static PackageInfoVector_capacity(param0: number, param1: PackageInfoVector): number;
                public static PACKAGE_TYPE_MAP_get(): number;
                public static PACKAGE_TYPE_ROUTING_get(): number;
                public static PACKAGE_TYPE_GEOCODING_get(): number;
                public static PackageInfoVector_swigGetRawPtr(param0: number, param1: PackageInfoVector): number;
                public static delete_PackageInfoVector(param0: number): void;
                public static PackageInfo_getSize(param0: number, param1: PackageInfo): java.math.BigInteger;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageInfoVector extends java.lang.Object {
                public static class: java.lang.Class<PackageInfoVector>;
                public swigCMemOwn: boolean;
                public add(param0: PackageInfo): void;
                public set(param0: number, param1: PackageInfo): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public get(param0: number): PackageInfo;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: PackageInfoVector): number;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageManager extends java.lang.Object {
                public static class: java.lang.Class<PackageManager>;
                public swigCMemOwn: boolean;
                public startPackageImport(param0: string, param1: number, param2: string): boolean;
                public getLocalPackageStatus(param0: string, param1: number): PackageStatus;
                public setPackageManagerListener(param0: PackageManagerListener): void;
                public startPackageListDownload(): boolean;
                public finalize(): void;
                public suggestPackages(param0: core.MapPos, param1: projections.Projection): PackageInfoVector;
                public startPackageRemove(param0: string): boolean;
                public delete(): void;
                public start(): boolean;
                public hashCode(): number;
                public getServerPackageListAge(): number;
                public equals(param0: any): boolean;
                public startPackageDownload(param0: string): boolean;
                public getLocalPackages(): PackageInfoVector;
                public getLocalPackage(param0: string): PackageInfo;
                public cancelPackageTasks(param0: string): void;
                public getServerPackages(): PackageInfoVector;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PackageManager;
                public constructor(param0: number, param1: boolean);
                public getServerPackage(param0: string): PackageInfo;
                public swigGetClassName(): string;
                public setPackagePriority(param0: string, param1: number): void;
                public swigGetDirectorObject(): any;
                public stop(param0: boolean): void;
                public swigGetRawPtr(): number;
                public isAreaDownloaded(param0: core.MapBounds, param1: number, param2: projections.Projection): boolean;
                public getServerPackageListMetaInfo(): PackageMetaInfo;
                public static getCPtr(param0: PackageManager): number;
                public constructor(param0: string, param1: string, param2: string, param3: string);
                public getPackageManagerListener(): PackageManagerListener;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageManagerListener extends java.lang.Object {
                public static class: java.lang.Class<PackageManagerListener>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public onPackageListFailed(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public onPackageFailed(param0: string, param1: number, param2: PackageErrorType): void;
                public swigGetClassName(): string;
                public static getCPtr(param0: PackageManagerListener): number;
                public onPackageListUpdated(): void;
                public onPackageUpdated(param0: string, param1: number): void;
                public swigGetDirectorObject(): any;
                public onStyleFailed(param0: string): void;
                public constructor();
                public onPackageStatusChanged(param0: string, param1: number, param2: PackageStatus): void;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PackageManagerListener;
                public onPackageCancelled(param0: string, param1: number): void;
                public delete(): void;
                public swigTakeOwnership(): void;
                public onStyleUpdated(param0: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageManagerListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PackageManagerListenerModuleJNI>;
                public static PackageManagerListener_swigGetDirectorObject(param0: number, param1: PackageManagerListener): any;
                public static new_PackageManagerListener(): number;
                public static PackageManagerListener_onPackageListUpdated(param0: number, param1: PackageManagerListener): void;
                public static PackageManagerListener_onPackageFailed(param0: number, param1: PackageManagerListener, param2: string, param3: number, param4: number): void;
                public static PackageManagerListener_swigGetClassName(param0: number, param1: PackageManagerListener): string;
                public constructor();
                public static PackageManagerListener_onPackageListUpdatedSwigExplicitPackageManagerListener(param0: number, param1: PackageManagerListener): void;
                public static SwigDirector_PackageManagerListener_onStyleFailed(param0: PackageManagerListener, param1: string): void;
                public static SwigDirector_PackageManagerListener_onPackageFailed(param0: PackageManagerListener, param1: string, param2: number, param3: number): void;
                public static PackageManagerListener_onPackageListFailedSwigExplicitPackageManagerListener(param0: number, param1: PackageManagerListener): void;
                public static SwigDirector_PackageManagerListener_onPackageUpdated(param0: PackageManagerListener, param1: string, param2: number): void;
                public static SwigDirector_PackageManagerListener_onPackageListUpdated(param0: PackageManagerListener): void;
                public static PackageManagerListener_onPackageFailedSwigExplicitPackageManagerListener(param0: number, param1: PackageManagerListener, param2: string, param3: number, param4: number): void;
                public static PackageManagerListener_change_ownership(param0: PackageManagerListener, param1: number, param2: boolean): void;
                public static PackageManagerListener_onStyleFailed(param0: number, param1: PackageManagerListener, param2: string): void;
                public static delete_PackageManagerListener(param0: number): void;
                public static PackageManagerListener_onPackageCancelledSwigExplicitPackageManagerListener(param0: number, param1: PackageManagerListener, param2: string, param3: number): void;
                public static SwigDirector_PackageManagerListener_onPackageListFailed(param0: PackageManagerListener): void;
                public static PackageManagerListener_onPackageCancelled(param0: number, param1: PackageManagerListener, param2: string, param3: number): void;
                public static SwigDirector_PackageManagerListener_onPackageStatusChanged(param0: PackageManagerListener, param1: string, param2: number, param3: number): void;
                public static PackageManagerListener_director_connect(param0: PackageManagerListener, param1: number, param2: boolean, param3: boolean): void;
                public static PackageManagerListener_onStyleFailedSwigExplicitPackageManagerListener(param0: number, param1: PackageManagerListener, param2: string): void;
                public static PackageManagerListener_onPackageStatusChanged(param0: number, param1: PackageManagerListener, param2: string, param3: number, param4: number, param5: PackageStatus): void;
                public static PackageManagerListener_onPackageUpdatedSwigExplicitPackageManagerListener(param0: number, param1: PackageManagerListener, param2: string, param3: number): void;
                public static PackageManagerListener_onPackageListFailed(param0: number, param1: PackageManagerListener): void;
                public static PackageManagerListener_onPackageStatusChangedSwigExplicitPackageManagerListener(param0: number, param1: PackageManagerListener, param2: string, param3: number, param4: number, param5: PackageStatus): void;
                public static SwigDirector_PackageManagerListener_onStyleUpdated(param0: PackageManagerListener, param1: string): void;
                public static PackageManagerListener_swigGetRawPtr(param0: number, param1: PackageManagerListener): number;
                public static PackageManagerListener_onPackageUpdated(param0: number, param1: PackageManagerListener, param2: string, param3: number): void;
                public static SwigDirector_PackageManagerListener_onPackageCancelled(param0: PackageManagerListener, param1: string, param2: number): void;
                public static PackageManagerListener_onStyleUpdatedSwigExplicitPackageManagerListener(param0: number, param1: PackageManagerListener, param2: string): void;
                public static PackageManagerListener_onStyleUpdated(param0: number, param1: PackageManagerListener, param2: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageManagerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PackageManagerModuleJNI>;
                public static PackageManager_getServerPackage(param0: number, param1: PackageManager, param2: string): number;
                public static PackageManager_swigGetDirectorObject(param0: number, param1: PackageManager): any;
                public static PackageManager_setPackageManagerListener(param0: number, param1: PackageManager, param2: number, param3: PackageManagerListener): void;
                public static new_PackageManager(param0: string, param1: string, param2: string, param3: string): number;
                public static PackageManager_getServerPackageListMetaInfo(param0: number, param1: PackageManager): number;
                public static PackageManager_getLocalPackage(param0: number, param1: PackageManager, param2: string): number;
                public constructor();
                public static PackageManager_startPackageListDownload(param0: number, param1: PackageManager): boolean;
                public static PackageManager_startPackageImport(param0: number, param1: PackageManager, param2: string, param3: number, param4: string): boolean;
                public static PackageManager_stop(param0: number, param1: PackageManager, param2: boolean): void;
                public static PackageManager_getServerPackages(param0: number, param1: PackageManager): number;
                public static PackageManager_startPackageRemove(param0: number, param1: PackageManager, param2: string): boolean;
                public static PackageManager_startPackageDownload(param0: number, param1: PackageManager, param2: string): boolean;
                public static PackageManager_isAreaDownloaded(param0: number, param1: PackageManager, param2: number, param3: core.MapBounds, param4: number, param5: number, param6: projections.Projection): boolean;
                public static delete_PackageManager(param0: number): void;
                public static PackageManager_swigGetRawPtr(param0: number, param1: PackageManager): number;
                public static PackageManager_suggestPackages(param0: number, param1: PackageManager, param2: number, param3: core.MapPos, param4: number, param5: projections.Projection): number;
                public static PackageManager_setPackagePriority(param0: number, param1: PackageManager, param2: string, param3: number): void;
                public static PackageManager_getLocalPackages(param0: number, param1: PackageManager): number;
                public static PackageManager_getLocalPackageStatus(param0: number, param1: PackageManager, param2: string, param3: number): number;
                public static PackageManager_getPackageManagerListener(param0: number, param1: PackageManager): number;
                public static PackageManager_swigGetClassName(param0: number, param1: PackageManager): string;
                public static PackageManager_cancelPackageTasks(param0: number, param1: PackageManager, param2: string): void;
                public static PackageManager_start(param0: number, param1: PackageManager): boolean;
                public static PackageManager_getServerPackageListAge(param0: number, param1: PackageManager): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageMetaInfo extends java.lang.Object {
                public static class: java.lang.Class<PackageMetaInfo>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: PackageMetaInfo): number;
                public getVariant(): core.Variant;
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: core.Variant);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageMetaInfoModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PackageMetaInfoModuleJNI>;
                public static delete_PackageMetaInfo(param0: number): void;
                public static new_PackageMetaInfo(param0: number, param1: core.Variant): number;
                public static PackageMetaInfo_getVariant(param0: number, param1: PackageMetaInfo): number;
                public static PackageMetaInfo_swigGetRawPtr(param0: number, param1: PackageMetaInfo): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageStatus extends java.lang.Object {
                public static class: java.lang.Class<PackageStatus>;
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public constructor(param0: PackageAction, param1: boolean, param2: number);
                public getCurrentAction(): PackageAction;
                public delete(): void;
                public getProgress(): number;
                public hashCode(): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: PackageStatus): number;
                public isPaused(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageStatusModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PackageStatusModuleJNI>;
                public static PACKAGE_ACTION_WAITING_get(): number;
                public static PACKAGE_ACTION_REMOVING_get(): number;
                public static delete_PackageStatus(param0: number): void;
                public static PACKAGE_ACTION_COPYING_get(): number;
                public static PACKAGE_ACTION_DOWNLOADING_get(): number;
                public static new_PackageStatus(param0: number, param1: boolean, param2: number): number;
                public static PackageStatus_isPaused(param0: number, param1: PackageStatus): boolean;
                public static PackageStatus_swigGetRawPtr(param0: number, param1: PackageStatus): number;
                public static PACKAGE_ACTION_READY_get(): number;
                public static PackageStatus_getCurrentAction(param0: number, param1: PackageStatus): number;
                public static PackageStatus_getProgress(param0: number, param1: PackageStatus): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageTileMask extends java.lang.Object {
                public static class: java.lang.Class<PackageTileMask>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: PackageTileMask): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public getMaxZoomLevel(): number;
                public getBoundingPolygon(param0: projections.Projection): geometry.MultiPolygonGeometry;
                public hashCode(): number;
                public getTileStatus(param0: core.MapTile): PackageTileStatus;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public getStringValue(): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageTileMaskModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PackageTileMaskModuleJNI>;
                public static PackageTileMask_getStringValue(param0: number, param1: PackageTileMask): string;
                public static PackageTileMask_swigGetRawPtr(param0: number, param1: PackageTileMask): number;
                public static PackageTileMask_getTileStatus(param0: number, param1: PackageTileMask, param2: number, param3: core.MapTile): number;
                public static delete_PackageTileMask(param0: number): void;
                public static PackageTileMask_getMaxZoomLevel(param0: number, param1: PackageTileMask): number;
                public static PackageTileMask_getBoundingPolygon(param0: number, param1: PackageTileMask, param2: number, param3: projections.Projection): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageTileStatus {
                public static class: java.lang.Class<PackageTileStatus>;
                public static PACKAGE_TILE_STATUS_MISSING: PackageTileStatus;
                public static PACKAGE_TILE_STATUS_PARTIAL: PackageTileStatus;
                public static PACKAGE_TILE_STATUS_FULL: PackageTileStatus;
                public static valueOf(param0: string): PackageTileStatus;
                public swigValue(): number;
                public static values(): native.Array<PackageTileStatus>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                public static swigToEnum(param0: number): PackageTileStatus;
            }
            export namespace PackageTileStatus {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageType {
                public static class: java.lang.Class<PackageType>;
                public static PACKAGE_TYPE_MAP: PackageType;
                public static PACKAGE_TYPE_ROUTING: PackageType;
                public static PACKAGE_TYPE_GEOCODING: PackageType;
                public static PACKAGE_TYPE_VALHALLA_ROUTING: PackageType;
                public static valueOf(param0: string): PackageType;
                public swigValue(): number;
                public static values(): native.Array<PackageType>;
                public static swigToEnum(param0: number): PackageType;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace PackageType {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace projections {
            export class EPSG3857 extends Projection {
                public static class: java.lang.Class<EPSG3857>;
                public toWgs84(param0: core.MapPos): core.MapPos;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Projection;
                public getName(): string;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public static getCPtr(param0: Projection): number;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): EPSG3857;
                public static getCPtr(param0: EPSG3857): number;
                public fromWgs84(param0: core.MapPos): core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace projections {
            export class EPSG3857ModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<EPSG3857ModuleJNI>;
                public static EPSG3857_swigGetDirectorObject(param0: number, param1: EPSG3857): any;
                public static EPSG3857_getName(param0: number, param1: EPSG3857): string;
                public static EPSG3857_swigGetClassName(param0: number, param1: EPSG3857): string;
                public static new_EPSG3857(): number;
                public static EPSG3857_fromWgs84(param0: number, param1: EPSG3857, param2: number, param3: core.MapPos): number;
                public static delete_EPSG3857(param0: number): void;
                public static EPSG3857_swigGetRawPtr(param0: number, param1: EPSG3857): number;
                public static EPSG3857_toWgs84(param0: number, param1: EPSG3857, param2: number, param3: core.MapPos): number;
                public static EPSG3857_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace projections {
            export class EPSG4326 extends Projection {
                public static class: java.lang.Class<EPSG4326>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): EPSG4326;
                public toWgs84(param0: core.MapPos): core.MapPos;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Projection;
                public getName(): string;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public static getCPtr(param0: Projection): number;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: EPSG4326): number;
                public fromWgs84(param0: core.MapPos): core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace projections {
            export class EPSG4326ModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<EPSG4326ModuleJNI>;
                public static EPSG4326_swigGetDirectorObject(param0: number, param1: EPSG4326): any;
                public static EPSG4326_toWgs84(param0: number, param1: EPSG4326, param2: number, param3: core.MapPos): number;
                public static EPSG4326_swigGetClassName(param0: number, param1: EPSG4326): string;
                public static EPSG4326_swigGetRawPtr(param0: number, param1: EPSG4326): number;
                public static EPSG4326_SWIGSmartPtrUpcast(param0: number): number;
                public static EPSG4326_fromWgs84(param0: number, param1: EPSG4326, param2: number, param3: core.MapPos): number;
                public static new_EPSG4326(): number;
                public static delete_EPSG4326(param0: number): void;
                public static EPSG4326_getName(param0: number, param1: EPSG4326): string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace projections {
            export class Projection extends java.lang.Object {
                public static class: java.lang.Class<Projection>;
                public swigCMemOwn: boolean;
                public fromLatLong(param0: number, param1: number): core.MapPos;
                public toWgs84(param0: core.MapPos): core.MapPos;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Projection;
                public getBounds(): core.MapBounds;
                public getName(): string;
                public toLatLong(param0: number, param1: number): core.MapPos;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public static getCPtr(param0: Projection): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public fromWgs84(param0: core.MapPos): core.MapPos;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace projections {
            export class ProjectionModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ProjectionModuleJNI>;
                public static Projection_toWgs84(param0: number, param1: Projection, param2: number, param3: core.MapPos): number;
                public static Projection_fromLatLong(param0: number, param1: Projection, param2: number, param3: number): number;
                public static Projection_swigGetDirectorObject(param0: number, param1: Projection): any;
                public static Projection_getBounds(param0: number, param1: Projection): number;
                public static Projection_swigGetRawPtr(param0: number, param1: Projection): number;
                public static Projection_fromWgs84(param0: number, param1: Projection, param2: number, param3: core.MapPos): number;
                public static Projection_getName(param0: number, param1: Projection): string;
                public static delete_Projection(param0: number): void;
                public static Projection_toLatLong(param0: number, param1: Projection, param2: number, param3: number): number;
                public constructor();
                public static Projection_swigGetClassName(param0: number, param1: Projection): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace rastertiles {
            export class ElevationDecoder extends java.lang.Object {
                public static class: java.lang.Class<ElevationDecoder>;
                public swigCMemOwn: boolean;
                public getElevation(param0: datasources.TileDataSource, param1: core.MapPos): number;
                public getElevations(param0: datasources.TileDataSource, param1: core.MapPosVector): core.IntVector;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: ElevationDecoder): number;
                public swigGetDirectorObject(): any;
                public decodeHeight(param0: graphics.Color): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ElevationDecoder;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace rastertiles {
            export class ElevationDecoderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ElevationDecoderModuleJNI>;
                public static ElevationDecoder_getElevations(param0: number, param1: ElevationDecoder, param2: number, param3: number, param4: core.MapPosVector): number;
                public static delete_ElevationDecoder(param0: number): void;
                public static ElevationDecoder_decodeHeight(param0: number, param1: ElevationDecoder, param2: number, param3: graphics.Color): number;
                public static ElevationDecoder_swigGetClassName(param0: number, param1: ElevationDecoder): string;
                public static ElevationDecoder_swigGetDirectorObject(param0: number, param1: ElevationDecoder): any;
                public static ElevationDecoder_getElevation(param0: number, param1: ElevationDecoder, param2: number, param3: number, param4: core.MapPos): number;
                public static ElevationDecoder_swigGetRawPtr(param0: number, param1: ElevationDecoder): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace rastertiles {
            export class MapBoxElevationDataDecoder extends ElevationDecoder {
                public static class: java.lang.Class<MapBoxElevationDataDecoder>;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static getCPtr(param0: MapBoxElevationDataDecoder): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MapBoxElevationDataDecoder;
                public swigGetClassName(): string;
                public static getCPtr(param0: ElevationDecoder): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ElevationDecoder;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace rastertiles {
            export class MapBoxElevationDataDecoderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapBoxElevationDataDecoderModuleJNI>;
                public static SwigDirector_MapBoxElevationDataDecoder_decodeHeight(param0: MapBoxElevationDataDecoder, param1: number): number;
                public static MapBoxElevationDataDecoder_swigGetDirectorObject(param0: number, param1: MapBoxElevationDataDecoder): any;
                public static MapBoxElevationDataDecoder_change_ownership(param0: MapBoxElevationDataDecoder, param1: number, param2: boolean): void;
                public static MapBoxElevationDataDecoder_director_connect(param0: MapBoxElevationDataDecoder, param1: number, param2: boolean, param3: boolean): void;
                public static MapBoxElevationDataDecoder_swigGetRawPtr(param0: number, param1: MapBoxElevationDataDecoder): number;
                public static delete_MapBoxElevationDataDecoder(param0: number): void;
                public static new_MapBoxElevationDataDecoder(): number;
                public constructor();
                public static MapBoxElevationDataDecoder_swigGetClassName(param0: number, param1: MapBoxElevationDataDecoder): string;
                public static MapBoxElevationDataDecoder_SWIGSmartPtrUpcast(param0: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace rastertiles {
            export class SWIGTYPE_p_std__arrayT_float_4_t extends java.lang.Object {
                public static class: java.lang.Class<SWIGTYPE_p_std__arrayT_float_4_t>;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public static getCPtr(param0: SWIGTYPE_p_std__arrayT_float_4_t): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace rastertiles {
            export class SWIGTYPE_p_std__shared_ptrT_carto__TileDataSource_t extends java.lang.Object {
                public static class: java.lang.Class<SWIGTYPE_p_std__shared_ptrT_carto__TileDataSource_t>;
                public static getCPtr(param0: SWIGTYPE_p_std__shared_ptrT_carto__TileDataSource_t): number;
                public constructor(param0: number, param1: boolean);
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace rastertiles {
            export class SWIGTYPE_p_std__vectorT_int_t extends java.lang.Object {
                public static class: java.lang.Class<SWIGTYPE_p_std__vectorT_int_t>;
                public static getCPtr(param0: SWIGTYPE_p_std__vectorT_int_t): number;
                public constructor(param0: number, param1: boolean);
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace rastertiles {
            export class TerrariumElevationDataDecoder extends ElevationDecoder {
                public static class: java.lang.Class<TerrariumElevationDataDecoder>;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TerrariumElevationDataDecoder;
                public swigGetClassName(): string;
                public static getCPtr(param0: ElevationDecoder): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: TerrariumElevationDataDecoder): number;
                public delete(): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ElevationDecoder;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace rastertiles {
            export class TerrariumElevationDataDecoderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TerrariumElevationDataDecoderModuleJNI>;
                public static SwigDirector_TerrariumElevationDataDecoder_decodeHeight(param0: TerrariumElevationDataDecoder, param1: number): number;
                public static TerrariumElevationDataDecoder_swigGetDirectorObject(param0: number, param1: TerrariumElevationDataDecoder): any;
                public static TerrariumElevationDataDecoder_swigGetClassName(param0: number, param1: TerrariumElevationDataDecoder): string;
                public static delete_TerrariumElevationDataDecoder(param0: number): void;
                public static TerrariumElevationDataDecoder_swigGetRawPtr(param0: number, param1: TerrariumElevationDataDecoder): number;
                public static TerrariumElevationDataDecoder_SWIGSmartPtrUpcast(param0: number): number;
                public static TerrariumElevationDataDecoder_change_ownership(param0: TerrariumElevationDataDecoder, param1: number, param2: boolean): void;
                public static new_TerrariumElevationDataDecoder(): number;
                public static TerrariumElevationDataDecoder_director_connect(param0: TerrariumElevationDataDecoder, param1: number, param2: boolean, param3: boolean): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class MapRenderer extends java.lang.Object {
                public static class: java.lang.Class<MapRenderer>;
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public getViewState(): graphics.ViewState;
                public captureRendering(param0: RendererCaptureListener, param1: boolean): void;
                public delete(): void;
                public hashCode(): number;
                public setMapRendererListener(param0: MapRendererListener): void;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: MapRenderer): number;
                public getMapRendererListener(): MapRendererListener;
                public requestRedraw(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class MapRendererListener extends java.lang.Object {
                public static class: java.lang.Class<MapRendererListener>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static getCPtr(param0: MapRendererListener): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public onBeforeDrawFrame(): void;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MapRendererListener;
                public swigTakeOwnership(): void;
                public onAfterDrawFrame(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class MapRendererListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapRendererListenerModuleJNI>;
                public static MapRendererListener_onBeforeDrawFrameSwigExplicitMapRendererListener(param0: number, param1: MapRendererListener): void;
                public static MapRendererListener_swigGetDirectorObject(param0: number, param1: MapRendererListener): any;
                public static MapRendererListener_director_connect(param0: MapRendererListener, param1: number, param2: boolean, param3: boolean): void;
                public static MapRendererListener_onBeforeDrawFrame(param0: number, param1: MapRendererListener): void;
                public static MapRendererListener_change_ownership(param0: MapRendererListener, param1: number, param2: boolean): void;
                public static delete_MapRendererListener(param0: number): void;
                public static new_MapRendererListener(): number;
                public static MapRendererListener_onAfterDrawFrame(param0: number, param1: MapRendererListener): void;
                public static MapRendererListener_swigGetRawPtr(param0: number, param1: MapRendererListener): number;
                public constructor();
                public static SwigDirector_MapRendererListener_onBeforeDrawFrame(param0: MapRendererListener): void;
                public static SwigDirector_MapRendererListener_onAfterDrawFrame(param0: MapRendererListener): void;
                public static MapRendererListener_onAfterDrawFrameSwigExplicitMapRendererListener(param0: number, param1: MapRendererListener): void;
                public static MapRendererListener_swigGetClassName(param0: number, param1: MapRendererListener): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class MapRendererModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapRendererModuleJNI>;
                public static MapRenderer_setMapRendererListener(param0: number, param1: MapRenderer, param2: number, param3: MapRendererListener): void;
                public static delete_MapRenderer(param0: number): void;
                public static MapRenderer_getMapRendererListener(param0: number, param1: MapRenderer): number;
                public static MapRenderer_requestRedraw(param0: number, param1: MapRenderer): void;
                public static MapRenderer_getViewState(param0: number, param1: MapRenderer): number;
                public static MapRenderer_captureRendering(param0: number, param1: MapRenderer, param2: number, param3: RendererCaptureListener, param4: boolean): void;
                public static MapRenderer_swigGetRawPtr(param0: number, param1: MapRenderer): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class RedrawRequestListener extends java.lang.Object {
                public static class: java.lang.Class<RedrawRequestListener>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public onRedrawRequested(): void;
                public static getCPtr(param0: RedrawRequestListener): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RedrawRequestListener;
                public swigTakeOwnership(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class RedrawRequestListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RedrawRequestListenerModuleJNI>;
                public static SwigDirector_RedrawRequestListener_onRedrawRequested(param0: RedrawRequestListener): void;
                public static RedrawRequestListener_onRedrawRequestedSwigExplicitRedrawRequestListener(param0: number, param1: RedrawRequestListener): void;
                public static RedrawRequestListener_swigGetClassName(param0: number, param1: RedrawRequestListener): string;
                public static RedrawRequestListener_swigGetRawPtr(param0: number, param1: RedrawRequestListener): number;
                public static RedrawRequestListener_director_connect(param0: RedrawRequestListener, param1: number, param2: boolean, param3: boolean): void;
                public static RedrawRequestListener_change_ownership(param0: RedrawRequestListener, param1: number, param2: boolean): void;
                public static delete_RedrawRequestListener(param0: number): void;
                public static RedrawRequestListener_onRedrawRequested(param0: number, param1: RedrawRequestListener): void;
                public static new_RedrawRequestListener(): number;
                public static RedrawRequestListener_swigGetDirectorObject(param0: number, param1: RedrawRequestListener): any;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class RendererCaptureListener extends java.lang.Object {
                public static class: java.lang.Class<RendererCaptureListener>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RendererCaptureListener;
                public finalize(): void;
                public onMapRendered(param0: graphics.Bitmap): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public static getCPtr(param0: RendererCaptureListener): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class RendererCaptureListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RendererCaptureListenerModuleJNI>;
                public static delete_RendererCaptureListener(param0: number): void;
                public static RendererCaptureListener_change_ownership(param0: RendererCaptureListener, param1: number, param2: boolean): void;
                public static RendererCaptureListener_onMapRendered(param0: number, param1: RendererCaptureListener, param2: number, param3: graphics.Bitmap): void;
                public static new_RendererCaptureListener(): number;
                public static RendererCaptureListener_swigGetClassName(param0: number, param1: RendererCaptureListener): string;
                public static RendererCaptureListener_swigGetRawPtr(param0: number, param1: RendererCaptureListener): number;
                public static RendererCaptureListener_onMapRenderedSwigExplicitRendererCaptureListener(param0: number, param1: RendererCaptureListener, param2: number, param3: graphics.Bitmap): void;
                public static RendererCaptureListener_director_connect(param0: RendererCaptureListener, param1: number, param2: boolean, param3: boolean): void;
                public static RendererCaptureListener_swigGetDirectorObject(param0: number, param1: RendererCaptureListener): any;
                public static SwigDirector_RendererCaptureListener_onMapRendered(param0: RendererCaptureListener, param1: number): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export namespace components {
                export class CullState extends java.lang.Object {
                    public static class: java.lang.Class<CullState>;
                    public swigCMemOwn: boolean;
                    public equals(param0: any): boolean;
                    public getProjectionEnvelope(param0: projections.Projection): core.MapEnvelope;
                    public delete(): void;
                    public finalize(): void;
                    public constructor(param0: core.MapEnvelope, param1: graphics.ViewState);
                    public hashCode(): number;
                    public static getCPtr(param0: CullState): number;
                    public swigGetRawPtr(): number;
                    public constructor(param0: number, param1: boolean);
                    public getViewState(): graphics.ViewState;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export namespace components {
                export class CullStateModuleJNI extends java.lang.Object {
                    public static class: java.lang.Class<CullStateModuleJNI>;
                    public static new_CullState(param0: number, param1: core.MapEnvelope, param2: number, param3: graphics.ViewState): number;
                    public constructor();
                    public static delete_CullState(param0: number): void;
                    public static CullState_swigGetRawPtr(param0: number, param1: CullState): number;
                    public static CullState_getViewState(param0: number, param1: CullState): number;
                    public static CullState_getProjectionEnvelope(param0: number, param1: CullState, param2: number, param3: projections.Projection): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class CartoOnlineRoutingService extends RoutingService {
                public static class: java.lang.Class<CartoOnlineRoutingService>;
                public static getCPtr(param0: RoutingService): number;
                public swigReleaseOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CartoOnlineRoutingService;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: RoutingRequest): RoutingResult;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RoutingService;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public setProfile(param0: string): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public getProfile(): string;
                public static getCPtr(param0: CartoOnlineRoutingService): number;
                public swigTakeOwnership(): void;
                public matchRoute(param0: RouteMatchingRequest): RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class CartoOnlineRoutingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CartoOnlineRoutingServiceModuleJNI>;
                public static SwigDirector_CartoOnlineRoutingService_getProfile(param0: CartoOnlineRoutingService): string;
                public static CartoOnlineRoutingService_matchRouteSwigExplicitCartoOnlineRoutingService(param0: number, param1: CartoOnlineRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static CartoOnlineRoutingService_director_connect(param0: CartoOnlineRoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static CartoOnlineRoutingService_calculateRoute(param0: number, param1: CartoOnlineRoutingService, param2: number, param3: RoutingRequest): number;
                public static CartoOnlineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
                public static delete_CartoOnlineRoutingService(param0: number): void;
                public static CartoOnlineRoutingService_matchRoute(param0: number, param1: CartoOnlineRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static CartoOnlineRoutingService_swigGetClassName(param0: number, param1: CartoOnlineRoutingService): string;
                public static CartoOnlineRoutingService_swigGetRawPtr(param0: number, param1: CartoOnlineRoutingService): number;
                public constructor();
                public static CartoOnlineRoutingService_getProfile(param0: number, param1: CartoOnlineRoutingService): string;
                public static SwigDirector_CartoOnlineRoutingService_matchRoute(param0: CartoOnlineRoutingService, param1: number): number;
                public static new_CartoOnlineRoutingService(param0: string): number;
                public static CartoOnlineRoutingService_setProfile(param0: number, param1: CartoOnlineRoutingService, param2: string): void;
                public static CartoOnlineRoutingService_swigGetDirectorObject(param0: number, param1: CartoOnlineRoutingService): any;
                public static CartoOnlineRoutingService_calculateRouteSwigExplicitCartoOnlineRoutingService(param0: number, param1: CartoOnlineRoutingService, param2: number, param3: RoutingRequest): number;
                public static SwigDirector_CartoOnlineRoutingService_calculateRoute(param0: CartoOnlineRoutingService, param1: number): number;
                public static CartoOnlineRoutingService_setProfileSwigExplicitCartoOnlineRoutingService(param0: number, param1: CartoOnlineRoutingService, param2: string): void;
                public static SwigDirector_CartoOnlineRoutingService_setProfile(param0: CartoOnlineRoutingService, param1: string): void;
                public static CartoOnlineRoutingService_getProfileSwigExplicitCartoOnlineRoutingService(param0: number, param1: CartoOnlineRoutingService): string;
                public static CartoOnlineRoutingService_change_ownership(param0: CartoOnlineRoutingService, param1: number, param2: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class OSRMOfflineRoutingService extends RoutingService {
                public static class: java.lang.Class<OSRMOfflineRoutingService>;
                public static getCPtr(param0: RoutingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: RoutingRequest): RoutingResult;
                public static getCPtr(param0: OSRMOfflineRoutingService): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): OSRMOfflineRoutingService;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RoutingService;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public setProfile(param0: string): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public getProfile(): string;
                public swigTakeOwnership(): void;
                public matchRoute(param0: RouteMatchingRequest): RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class OSRMOfflineRoutingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<OSRMOfflineRoutingServiceModuleJNI>;
                public static OSRMOfflineRoutingService_getProfile(param0: number, param1: OSRMOfflineRoutingService): string;
                public static OSRMOfflineRoutingService_matchRouteSwigExplicitOSRMOfflineRoutingService(param0: number, param1: OSRMOfflineRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static SwigDirector_OSRMOfflineRoutingService_getProfile(param0: OSRMOfflineRoutingService): string;
                public static SwigDirector_OSRMOfflineRoutingService_matchRoute(param0: OSRMOfflineRoutingService, param1: number): number;
                public static OSRMOfflineRoutingService_getProfileSwigExplicitOSRMOfflineRoutingService(param0: number, param1: OSRMOfflineRoutingService): string;
                public static OSRMOfflineRoutingService_swigGetRawPtr(param0: number, param1: OSRMOfflineRoutingService): number;
                public static OSRMOfflineRoutingService_calculateRoute(param0: number, param1: OSRMOfflineRoutingService, param2: number, param3: RoutingRequest): number;
                public static OSRMOfflineRoutingService_change_ownership(param0: OSRMOfflineRoutingService, param1: number, param2: boolean): void;
                public static SwigDirector_OSRMOfflineRoutingService_calculateRoute(param0: OSRMOfflineRoutingService, param1: number): number;
                public constructor();
                public static OSRMOfflineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
                public static OSRMOfflineRoutingService_swigGetClassName(param0: number, param1: OSRMOfflineRoutingService): string;
                public static OSRMOfflineRoutingService_swigGetDirectorObject(param0: number, param1: OSRMOfflineRoutingService): any;
                public static OSRMOfflineRoutingService_setProfile(param0: number, param1: OSRMOfflineRoutingService, param2: string): void;
                public static new_OSRMOfflineRoutingService(param0: string): number;
                public static OSRMOfflineRoutingService_director_connect(param0: OSRMOfflineRoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static delete_OSRMOfflineRoutingService(param0: number): void;
                public static OSRMOfflineRoutingService_matchRoute(param0: number, param1: OSRMOfflineRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static OSRMOfflineRoutingService_calculateRouteSwigExplicitOSRMOfflineRoutingService(param0: number, param1: OSRMOfflineRoutingService, param2: number, param3: RoutingRequest): number;
                public static SwigDirector_OSRMOfflineRoutingService_setProfile(param0: OSRMOfflineRoutingService, param1: string): void;
                public static OSRMOfflineRoutingService_setProfileSwigExplicitOSRMOfflineRoutingService(param0: number, param1: OSRMOfflineRoutingService, param2: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class PackageManagerRoutingService extends RoutingService {
                public static class: java.lang.Class<PackageManagerRoutingService>;
                public static getCPtr(param0: RoutingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: RoutingRequest): RoutingResult;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RoutingService;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public setProfile(param0: string): void;
                public static getCPtr(param0: PackageManagerRoutingService): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public getProfile(): string;
                public swigTakeOwnership(): void;
                public constructor(param0: packagemanager.PackageManager);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PackageManagerRoutingService;
                public matchRoute(param0: RouteMatchingRequest): RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class PackageManagerRoutingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PackageManagerRoutingServiceModuleJNI>;
                public static PackageManagerRoutingService_swigGetDirectorObject(param0: number, param1: PackageManagerRoutingService): any;
                public static SwigDirector_PackageManagerRoutingService_getProfile(param0: PackageManagerRoutingService): string;
                public static PackageManagerRoutingService_swigGetRawPtr(param0: number, param1: PackageManagerRoutingService): number;
                public static SwigDirector_PackageManagerRoutingService_matchRoute(param0: PackageManagerRoutingService, param1: number): number;
                public static PackageManagerRoutingService_matchRoute(param0: number, param1: PackageManagerRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static PackageManagerRoutingService_setProfile(param0: number, param1: PackageManagerRoutingService, param2: string): void;
                public static PackageManagerRoutingService_calculateRouteSwigExplicitPackageManagerRoutingService(param0: number, param1: PackageManagerRoutingService, param2: number, param3: RoutingRequest): number;
                public static new_PackageManagerRoutingService(param0: number, param1: packagemanager.PackageManager): number;
                public constructor();
                public static PackageManagerRoutingService_matchRouteSwigExplicitPackageManagerRoutingService(param0: number, param1: PackageManagerRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static PackageManagerRoutingService_swigGetClassName(param0: number, param1: PackageManagerRoutingService): string;
                public static PackageManagerRoutingService_director_connect(param0: PackageManagerRoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static PackageManagerRoutingService_SWIGSmartPtrUpcast(param0: number): number;
                public static PackageManagerRoutingService_getProfile(param0: number, param1: PackageManagerRoutingService): string;
                public static PackageManagerRoutingService_getProfileSwigExplicitPackageManagerRoutingService(param0: number, param1: PackageManagerRoutingService): string;
                public static PackageManagerRoutingService_setProfileSwigExplicitPackageManagerRoutingService(param0: number, param1: PackageManagerRoutingService, param2: string): void;
                public static delete_PackageManagerRoutingService(param0: number): void;
                public static PackageManagerRoutingService_change_ownership(param0: PackageManagerRoutingService, param1: number, param2: boolean): void;
                public static PackageManagerRoutingService_calculateRoute(param0: number, param1: PackageManagerRoutingService, param2: number, param3: RoutingRequest): number;
                public static SwigDirector_PackageManagerRoutingService_calculateRoute(param0: PackageManagerRoutingService, param1: number): number;
                public static SwigDirector_PackageManagerRoutingService_setProfile(param0: PackageManagerRoutingService, param1: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class PackageManagerValhallaRoutingService extends RoutingService {
                public static class: java.lang.Class<PackageManagerValhallaRoutingService>;
                public static getCPtr(param0: RoutingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: RoutingRequest): RoutingResult;
                public getConfigurationParameter(param0: string): core.Variant;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RoutingService;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PackageManagerValhallaRoutingService;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public connectElevationDataSource(param0: datasources.TileDataSource, param1: rastertiles.ElevationDecoder): void;
                public swigGetDirectorObject(): any;
                public constructor();
                public setProfile(param0: string): void;
                public setConfigurationParameter(param0: string, param1: core.Variant): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public getProfile(): string;
                public swigTakeOwnership(): void;
                public constructor(param0: packagemanager.PackageManager);
                public static getCPtr(param0: PackageManagerValhallaRoutingService): number;
                public matchRoute(param0: RouteMatchingRequest): RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class PackageManagerValhallaRoutingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PackageManagerValhallaRoutingServiceModuleJNI>;
                public static PackageManagerValhallaRoutingService_connectElevationDataSource(param0: number, param1: PackageManagerValhallaRoutingService, param2: number, param3: datasources.TileDataSource, param4: number, param5: rastertiles.ElevationDecoder): void;
                public static PackageManagerValhallaRoutingService_getProfileSwigExplicitPackageManagerValhallaRoutingService(param0: number, param1: PackageManagerValhallaRoutingService): string;
                public static PackageManagerValhallaRoutingService_swigGetDirectorObject(param0: number, param1: PackageManagerValhallaRoutingService): any;
                public static PackageManagerValhallaRoutingService_setConfigurationParameter(param0: number, param1: PackageManagerValhallaRoutingService, param2: string, param3: number, param4: core.Variant): void;
                public static SwigDirector_PackageManagerValhallaRoutingService_getProfile(param0: PackageManagerValhallaRoutingService): string;
                public static PackageManagerValhallaRoutingService_getConfigurationParameter(param0: number, param1: PackageManagerValhallaRoutingService, param2: string): number;
                public static SwigDirector_PackageManagerValhallaRoutingService_matchRoute(param0: PackageManagerValhallaRoutingService, param1: number): number;
                public static PackageManagerValhallaRoutingService_calculateRoute(param0: number, param1: PackageManagerValhallaRoutingService, param2: number, param3: RoutingRequest): number;
                public static PackageManagerValhallaRoutingService_calculateRouteSwigExplicitPackageManagerValhallaRoutingService(param0: number, param1: PackageManagerValhallaRoutingService, param2: number, param3: RoutingRequest): number;
                public static PackageManagerValhallaRoutingService_director_connect(param0: PackageManagerValhallaRoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static PackageManagerValhallaRoutingService_getProfile(param0: number, param1: PackageManagerValhallaRoutingService): string;
                public static PackageManagerValhallaRoutingService_matchRoute(param0: number, param1: PackageManagerValhallaRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static delete_PackageManagerValhallaRoutingService(param0: number): void;
                public constructor();
                public static PackageManagerValhallaRoutingService_swigGetClassName(param0: number, param1: PackageManagerValhallaRoutingService): string;
                public static PackageManagerValhallaRoutingService_matchRouteSwigExplicitPackageManagerValhallaRoutingService(param0: number, param1: PackageManagerValhallaRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static PackageManagerValhallaRoutingService_SWIGSmartPtrUpcast(param0: number): number;
                public static SwigDirector_PackageManagerValhallaRoutingService_setProfile(param0: PackageManagerValhallaRoutingService, param1: string): void;
                public static SwigDirector_PackageManagerValhallaRoutingService_calculateRoute(param0: PackageManagerValhallaRoutingService, param1: number): number;
                public static PackageManagerValhallaRoutingService_setProfile(param0: number, param1: PackageManagerValhallaRoutingService, param2: string): void;
                public static PackageManagerValhallaRoutingService_change_ownership(param0: PackageManagerValhallaRoutingService, param1: number, param2: boolean): void;
                public static new_PackageManagerValhallaRoutingService(param0: number, param1: packagemanager.PackageManager): number;
                public static PackageManagerValhallaRoutingService_swigGetRawPtr(param0: number, param1: PackageManagerValhallaRoutingService): number;
                public static PackageManagerValhallaRoutingService_setProfileSwigExplicitPackageManagerValhallaRoutingService(param0: number, param1: PackageManagerValhallaRoutingService, param2: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingEdge extends java.lang.Object {
                public static class: java.lang.Class<RouteMatchingEdge>;
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: RouteMatchingEdge): number;
                public delete(): void;
                public hashCode(): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public containsAttribute(param0: string): boolean;
                public getAttribute(param0: string): core.Variant;
                public toString(): string;
                public constructor();
                public constructor(param0: core.StringVariantMap);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingEdgeModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RouteMatchingEdgeModuleJNI>;
                public static RouteMatchingEdgeVector_isEmpty(param0: number, param1: RouteMatchingEdgeVector): boolean;
                public static RouteMatchingEdge_swigGetRawPtr(param0: number, param1: RouteMatchingEdge): number;
                public static delete_RouteMatchingEdgeVector(param0: number): void;
                public static RouteMatchingEdgeVector_reserve(param0: number, param1: RouteMatchingEdgeVector, param2: number): void;
                public static RouteMatchingEdgeVector_capacity(param0: number, param1: RouteMatchingEdgeVector): number;
                public static RouteMatchingEdge_toString(param0: number, param1: RouteMatchingEdge): string;
                public static RouteMatchingEdgeVector_set(param0: number, param1: RouteMatchingEdgeVector, param2: number, param3: number, param4: RouteMatchingEdge): void;
                public static new_RouteMatchingEdge__SWIG_0(): number;
                public static RouteMatchingEdgeVector_clear(param0: number, param1: RouteMatchingEdgeVector): void;
                public static RouteMatchingEdgeVector_get(param0: number, param1: RouteMatchingEdgeVector, param2: number): number;
                public static delete_RouteMatchingEdge(param0: number): void;
                public static RouteMatchingEdgeVector_add(param0: number, param1: RouteMatchingEdgeVector, param2: number, param3: RouteMatchingEdge): void;
                public constructor();
                public static new_RouteMatchingEdgeVector__SWIG_0(): number;
                public static new_RouteMatchingEdge__SWIG_1(param0: number, param1: core.StringVariantMap): number;
                public static RouteMatchingEdge_containsAttribute(param0: number, param1: RouteMatchingEdge, param2: string): boolean;
                public static new_RouteMatchingEdgeVector__SWIG_1(param0: number): number;
                public static RouteMatchingEdgeVector_swigGetRawPtr(param0: number, param1: RouteMatchingEdgeVector): number;
                public static RouteMatchingEdgeVector_size(param0: number, param1: RouteMatchingEdgeVector): number;
                public static RouteMatchingEdge_getAttribute(param0: number, param1: RouteMatchingEdge, param2: string): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingEdgeVector extends java.lang.Object {
                public static class: java.lang.Class<RouteMatchingEdgeVector>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: RouteMatchingEdgeVector): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public add(param0: RouteMatchingEdge): void;
                public get(param0: number): RouteMatchingEdge;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public set(param0: number, param1: RouteMatchingEdge): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingPoint extends java.lang.Object {
                public static class: java.lang.Class<RouteMatchingPoint>;
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getPos(): core.MapPos;
                public toString(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public constructor(param0: core.MapPos, param1: RouteMatchingPointType, param2: number);
                public static getCPtr(param0: RouteMatchingPoint): number;
                public equals(param0: any): boolean;
                public getType(): RouteMatchingPointType;
                public getEdgeIndex(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingPointModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RouteMatchingPointModuleJNI>;
                public static RouteMatchingPoint_getType(param0: number, param1: RouteMatchingPoint): number;
                public static RouteMatchingPointVector_isEmpty(param0: number, param1: RouteMatchingPointVector): boolean;
                public static RouteMatchingPointVector_swigGetRawPtr(param0: number, param1: RouteMatchingPointVector): number;
                public static RouteMatchingPointVector_size(param0: number, param1: RouteMatchingPointVector): number;
                public static RouteMatchingPointVector_set(param0: number, param1: RouteMatchingPointVector, param2: number, param3: number, param4: RouteMatchingPoint): void;
                public static new_RouteMatchingPoint__SWIG_0(): number;
                public static RouteMatchingPointVector_reserve(param0: number, param1: RouteMatchingPointVector, param2: number): void;
                public static RouteMatchingPoint_getEdgeIndex(param0: number, param1: RouteMatchingPoint): number;
                public static RouteMatchingPointVector_capacity(param0: number, param1: RouteMatchingPointVector): number;
                public constructor();
                public static RouteMatchingPoint_getPos(param0: number, param1: RouteMatchingPoint): number;
                public static RouteMatchingPointVector_get(param0: number, param1: RouteMatchingPointVector, param2: number): number;
                public static delete_RouteMatchingPoint(param0: number): void;
                public static RouteMatchingPoint_swigGetRawPtr(param0: number, param1: RouteMatchingPoint): number;
                public static new_RouteMatchingPointVector__SWIG_0(): number;
                public static RouteMatchingPoint_toString(param0: number, param1: RouteMatchingPoint): string;
                public static new_RouteMatchingPoint__SWIG_1(param0: number, param1: core.MapPos, param2: number, param3: number): number;
                public static RouteMatchingPointVector_clear(param0: number, param1: RouteMatchingPointVector): void;
                public static RouteMatchingPointVector_add(param0: number, param1: RouteMatchingPointVector, param2: number, param3: RouteMatchingPoint): void;
                public static new_RouteMatchingPointVector__SWIG_1(param0: number): number;
                public static delete_RouteMatchingPointVector(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingPointType {
                public static class: java.lang.Class<RouteMatchingPointType>;
                public static ROUTE_MATCHING_POINT_UNMATCHED: RouteMatchingPointType;
                public static ROUTE_MATCHING_POINT_INTERPOLATED: RouteMatchingPointType;
                public static ROUTE_MATCHING_POINT_MATCHED: RouteMatchingPointType;
                public swigValue(): number;
                public static valueOf(param0: string): RouteMatchingPointType;
                public static values(): native.Array<RouteMatchingPointType>;
                public static swigToEnum(param0: number): RouteMatchingPointType;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace RouteMatchingPointType {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingPointVector extends java.lang.Object {
                public static class: java.lang.Class<RouteMatchingPointVector>;
                public swigCMemOwn: boolean;
                public finalize(): void;
                public set(param0: number, param1: RouteMatchingPoint): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public add(param0: RouteMatchingPoint): void;
                public swigGetRawPtr(): number;
                public get(param0: number): RouteMatchingPoint;
                public delete(): void;
                public static getCPtr(param0: RouteMatchingPointVector): number;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingRequest extends java.lang.Object {
                public static class: java.lang.Class<RouteMatchingRequest>;
                public swigCMemOwn: boolean;
                public getProjection(): projections.Projection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: projections.Projection, param1: core.MapPosVector, param2: number);
                public static getCPtr(param0: RouteMatchingRequest): number;
                public getCustomParameter(param0: string): core.Variant;
                public setPointParameter(param0: number, param1: string, param2: core.Variant): void;
                public setCustomParameter(param0: string, param1: core.Variant): void;
                public toString(): string;
                public getPointParameter(param0: number, param1: string): core.Variant;
                public swigGetRawPtr(): number;
                public getPoints(): core.MapPosVector;
                public delete(): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public getAccuracy(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingRequestModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RouteMatchingRequestModuleJNI>;
                public static new_RouteMatchingRequest(param0: number, param1: projections.Projection, param2: number, param3: core.MapPosVector, param4: number): number;
                public static RouteMatchingRequest_getCustomParameter(param0: number, param1: RouteMatchingRequest, param2: string): number;
                public static RouteMatchingRequest_getPointParameter(param0: number, param1: RouteMatchingRequest, param2: number, param3: string): number;
                public static RouteMatchingRequest_swigGetRawPtr(param0: number, param1: RouteMatchingRequest): number;
                public static RouteMatchingRequest_toString(param0: number, param1: RouteMatchingRequest): string;
                public static RouteMatchingRequest_setCustomParameter(param0: number, param1: RouteMatchingRequest, param2: string, param3: number, param4: core.Variant): void;
                public static delete_RouteMatchingRequest(param0: number): void;
                public static RouteMatchingRequest_getProjection(param0: number, param1: RouteMatchingRequest): number;
                public static RouteMatchingRequest_getAccuracy(param0: number, param1: RouteMatchingRequest): number;
                public constructor();
                public static RouteMatchingRequest_getPoints(param0: number, param1: RouteMatchingRequest): number;
                public static RouteMatchingRequest_setPointParameter(param0: number, param1: RouteMatchingRequest, param2: number, param3: string, param4: number, param5: core.Variant): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingResult extends java.lang.Object {
                public static class: java.lang.Class<RouteMatchingResult>;
                public swigCMemOwn: boolean;
                public getProjection(): projections.Projection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: RouteMatchingResult): number;
                public toString(): string;
                public getMatchingPoints(): RouteMatchingPointVector;
                public swigGetRawPtr(): number;
                public getPoints(): core.MapPosVector;
                public delete(): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public getMatchingEdges(): RouteMatchingEdgeVector;
                public constructor(param0: projections.Projection, param1: RouteMatchingPointVector, param2: RouteMatchingEdgeVector);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingResultModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RouteMatchingResultModuleJNI>;
                public static RouteMatchingResult_getPoints(param0: number, param1: RouteMatchingResult): number;
                public static RouteMatchingResult_getMatchingEdges(param0: number, param1: RouteMatchingResult): number;
                public static RouteMatchingResult_getProjection(param0: number, param1: RouteMatchingResult): number;
                public static delete_RouteMatchingResult(param0: number): void;
                public static RouteMatchingResult_swigGetRawPtr(param0: number, param1: RouteMatchingResult): number;
                public static RouteMatchingResult_toString(param0: number, param1: RouteMatchingResult): string;
                public static new_RouteMatchingResult(param0: number, param1: projections.Projection, param2: number, param3: RouteMatchingPointVector, param4: number, param5: RouteMatchingEdgeVector): number;
                public static RouteMatchingResult_getMatchingPoints(param0: number, param1: RouteMatchingResult): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingAction {
                public static class: java.lang.Class<RoutingAction>;
                public static ROUTING_ACTION_HEAD_ON: RoutingAction;
                public static ROUTING_ACTION_FINISH: RoutingAction;
                public static ROUTING_ACTION_NO_TURN: RoutingAction;
                public static ROUTING_ACTION_GO_STRAIGHT: RoutingAction;
                public static ROUTING_ACTION_TURN_RIGHT: RoutingAction;
                public static ROUTING_ACTION_UTURN: RoutingAction;
                public static ROUTING_ACTION_TURN_LEFT: RoutingAction;
                public static ROUTING_ACTION_REACH_VIA_LOCATION: RoutingAction;
                public static ROUTING_ACTION_ENTER_ROUNDABOUT: RoutingAction;
                public static ROUTING_ACTION_LEAVE_ROUNDABOUT: RoutingAction;
                public static ROUTING_ACTION_STAY_ON_ROUNDABOUT: RoutingAction;
                public static ROUTING_ACTION_START_AT_END_OF_STREET: RoutingAction;
                public static ROUTING_ACTION_ENTER_AGAINST_ALLOWED_DIRECTION: RoutingAction;
                public static ROUTING_ACTION_LEAVE_AGAINST_ALLOWED_DIRECTION: RoutingAction;
                public static ROUTING_ACTION_GO_UP: RoutingAction;
                public static ROUTING_ACTION_GO_DOWN: RoutingAction;
                public static ROUTING_ACTION_WAIT: RoutingAction;
                public static ROUTING_ACTION_ENTER_FERRY: RoutingAction;
                public static ROUTING_ACTION_LEAVE_FERRY: RoutingAction;
                public swigValue(): number;
                public static values(): native.Array<RoutingAction>;
                public static swigToEnum(param0: number): RoutingAction;
                public static valueOf(param0: string): RoutingAction;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace RoutingAction {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingInstruction extends java.lang.Object {
                public static class: java.lang.Class<RoutingInstruction>;
                public swigCMemOwn: boolean;
                public getPointIndex(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public getTime(): number;
                public constructor();
                public getTurnAngle(): number;
                public constructor(param0: RoutingAction, param1: number, param2: string, param3: string, param4: number, param5: number, param6: number, param7: number);
                public swigGetRawPtr(): number;
                public getStreetName(): string;
                public delete(): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public getDistance(): number;
                public static getCPtr(param0: RoutingInstruction): number;
                public getAzimuth(): number;
                public getGeometryTag(): core.Variant;
                public getInstruction(): string;
                public getAction(): RoutingAction;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingInstructionModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RoutingInstructionModuleJNI>;
                public static RoutingInstructionVector_swigGetRawPtr(param0: number, param1: RoutingInstructionVector): number;
                public static RoutingInstructionVector_size(param0: number, param1: RoutingInstructionVector): number;
                public static RoutingInstruction_getTurnAngle(param0: number, param1: RoutingInstruction): number;
                public static RoutingInstruction_getAzimuth(param0: number, param1: RoutingInstruction): number;
                public static RoutingInstructionVector_set(param0: number, param1: RoutingInstructionVector, param2: number, param3: number, param4: RoutingInstruction): void;
                public static RoutingInstruction_getInstruction(param0: number, param1: RoutingInstruction): string;
                public static new_RoutingInstruction__SWIG_1(param0: number, param1: number, param2: string, param3: string, param4: number, param5: number, param6: number, param7: number): number;
                public static RoutingInstruction_getPointIndex(param0: number, param1: RoutingInstruction): number;
                public static RoutingInstruction_getAction(param0: number, param1: RoutingInstruction): number;
                public static RoutingInstruction_getTime(param0: number, param1: RoutingInstruction): number;
                public constructor();
                public static RoutingInstructionVector_reserve(param0: number, param1: RoutingInstructionVector, param2: number): void;
                public static new_RoutingInstructionVector__SWIG_0(): number;
                public static RoutingInstructionVector_capacity(param0: number, param1: RoutingInstructionVector): number;
                public static RoutingInstruction_swigGetRawPtr(param0: number, param1: RoutingInstruction): number;
                public static RoutingInstructionVector_add(param0: number, param1: RoutingInstructionVector, param2: number, param3: RoutingInstruction): void;
                public static delete_RoutingInstructionVector(param0: number): void;
                public static new_RoutingInstruction__SWIG_0(): number;
                public static RoutingInstruction_getDistance(param0: number, param1: RoutingInstruction): number;
                public static RoutingInstructionVector_get(param0: number, param1: RoutingInstructionVector, param2: number): number;
                public static RoutingInstructionVector_isEmpty(param0: number, param1: RoutingInstructionVector): boolean;
                public static RoutingInstruction_getGeometryTag(param0: number, param1: RoutingInstruction): number;
                public static RoutingInstruction_toString(param0: number, param1: RoutingInstruction): string;
                public static delete_RoutingInstruction(param0: number): void;
                public static new_RoutingInstructionVector__SWIG_1(param0: number): number;
                public static RoutingInstruction_getStreetName(param0: number, param1: RoutingInstruction): string;
                public static RoutingInstructionVector_clear(param0: number, param1: RoutingInstructionVector): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingInstructionVector extends java.lang.Object {
                public static class: java.lang.Class<RoutingInstructionVector>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: RoutingInstructionVector): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public set(param0: number, param1: RoutingInstruction): void;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public add(param0: RoutingInstruction): void;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public get(param0: number): RoutingInstruction;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingRequest extends java.lang.Object {
                public static class: java.lang.Class<RoutingRequest>;
                public swigCMemOwn: boolean;
                public getProjection(): projections.Projection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: RoutingRequest): number;
                public getCustomParameter(param0: string): core.Variant;
                public setPointParameter(param0: number, param1: string, param2: core.Variant): void;
                public setCustomParameter(param0: string, param1: core.Variant): void;
                public toString(): string;
                public getPointParameter(param0: number, param1: string): core.Variant;
                public swigGetRawPtr(): number;
                public getPoints(): core.MapPosVector;
                public delete(): void;
                public hashCode(): number;
                /** @deprecated */
                public setGeometryTagFilters(param0: core.VariantVector): void;
                public equals(param0: any): boolean;
                /** @deprecated */
                public getGeometryTagFilters(): core.VariantVector;
                public constructor(param0: projections.Projection, param1: core.MapPosVector);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingRequestModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RoutingRequestModuleJNI>;
                public static RoutingRequest_getPoints(param0: number, param1: RoutingRequest): number;
                public static RoutingRequest_getProjection(param0: number, param1: RoutingRequest): number;
                public static RoutingRequest_swigGetRawPtr(param0: number, param1: RoutingRequest): number;
                public static RoutingRequest_getPointParameter(param0: number, param1: RoutingRequest, param2: number, param3: string): number;
                public static RoutingRequest_setGeometryTagFilters(param0: number, param1: RoutingRequest, param2: number, param3: core.VariantVector): void;
                public static RoutingRequest_setCustomParameter(param0: number, param1: RoutingRequest, param2: string, param3: number, param4: core.Variant): void;
                public static delete_RoutingRequest(param0: number): void;
                public constructor();
                public static RoutingRequest_toString(param0: number, param1: RoutingRequest): string;
                public static new_RoutingRequest(param0: number, param1: projections.Projection, param2: number, param3: core.MapPosVector): number;
                public static RoutingRequest_getCustomParameter(param0: number, param1: RoutingRequest, param2: string): number;
                public static RoutingRequest_getGeometryTagFilters(param0: number, param1: RoutingRequest): number;
                public static RoutingRequest_setPointParameter(param0: number, param1: RoutingRequest, param2: number, param3: string, param4: number, param5: core.Variant): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingResult extends java.lang.Object {
                public static class: java.lang.Class<RoutingResult>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: RoutingResult): number;
                public getProjection(): projections.Projection;
                public getInstructions(): RoutingInstructionVector;
                public getTotalTime(): number;
                public finalize(): void;
                public getTotalDistance(): number;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public swigGetRawPtr(): number;
                public getPoints(): core.MapPosVector;
                public delete(): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public constructor(param0: projections.Projection, param1: core.MapPosVector, param2: RoutingInstructionVector);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingResultModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RoutingResultModuleJNI>;
                public static RoutingResult_toString(param0: number, param1: RoutingResult): string;
                public static RoutingResult_getPoints(param0: number, param1: RoutingResult): number;
                public static RoutingResult_swigGetRawPtr(param0: number, param1: RoutingResult): number;
                public static delete_RoutingResult(param0: number): void;
                public static RoutingResult_getProjection(param0: number, param1: RoutingResult): number;
                public static RoutingResult_getTotalTime(param0: number, param1: RoutingResult): number;
                public static new_RoutingResult(param0: number, param1: projections.Projection, param2: number, param3: core.MapPosVector, param4: number, param5: RoutingInstructionVector): number;
                public constructor();
                public static RoutingResult_getInstructions(param0: number, param1: RoutingResult): number;
                public static RoutingResult_getTotalDistance(param0: number, param1: RoutingResult): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingService extends java.lang.Object {
                public static class: java.lang.Class<RoutingService>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: RoutingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: RoutingRequest): RoutingResult;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RoutingService;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public setProfile(param0: string): void;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public getProfile(): string;
                public swigTakeOwnership(): void;
                public matchRoute(param0: RouteMatchingRequest): RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RoutingServiceModuleJNI>;
                public static RoutingService_change_ownership(param0: RoutingService, param1: number, param2: boolean): void;
                public static SwigDirector_RoutingService_calculateRoute(param0: RoutingService, param1: number): number;
                public static RoutingService_calculateRoute(param0: number, param1: RoutingService, param2: number, param3: RoutingRequest): number;
                public static RoutingService_setProfile(param0: number, param1: RoutingService, param2: string): void;
                public static RoutingService_swigGetDirectorObject(param0: number, param1: RoutingService): any;
                public static SwigDirector_RoutingService_matchRoute(param0: RoutingService, param1: number): number;
                public constructor();
                public static new_RoutingService(): number;
                public static RoutingService_getProfile(param0: number, param1: RoutingService): string;
                public static RoutingService_swigGetRawPtr(param0: number, param1: RoutingService): number;
                public static SwigDirector_RoutingService_setProfile(param0: RoutingService, param1: string): void;
                public static RoutingService_matchRoute(param0: number, param1: RoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static delete_RoutingService(param0: number): void;
                public static RoutingService_swigGetClassName(param0: number, param1: RoutingService): string;
                public static RoutingService_director_connect(param0: RoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_RoutingService_getProfile(param0: RoutingService): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class SGREOfflineRoutingService extends RoutingService {
                public static class: java.lang.Class<SGREOfflineRoutingService>;
                public static getCPtr(param0: RoutingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: RoutingRequest): RoutingResult;
                public constructor(param0: projections.Projection, param1: geometry.FeatureCollection, param2: core.Variant);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RoutingService;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public setProfile(param0: string): void;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): SGREOfflineRoutingService;
                public delete(): void;
                public constructor(param0: core.Variant, param1: core.Variant);
                public getProfile(): string;
                public static getCPtr(param0: SGREOfflineRoutingService): number;
                public swigTakeOwnership(): void;
                public matchRoute(param0: RouteMatchingRequest): RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class SGREOfflineRoutingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<SGREOfflineRoutingServiceModuleJNI>;
                public static SwigDirector_SGREOfflineRoutingService_setProfile(param0: SGREOfflineRoutingService, param1: string): void;
                public static SGREOfflineRoutingService_matchRouteSwigExplicitSGREOfflineRoutingService(param0: number, param1: SGREOfflineRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static SGREOfflineRoutingService_matchRoute(param0: number, param1: SGREOfflineRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static SGREOfflineRoutingService_getProfile(param0: number, param1: SGREOfflineRoutingService): string;
                public static SGREOfflineRoutingService_getProfileSwigExplicitSGREOfflineRoutingService(param0: number, param1: SGREOfflineRoutingService): string;
                public static new_SGREOfflineRoutingService__SWIG_1(param0: number, param1: projections.Projection, param2: number, param3: geometry.FeatureCollection, param4: number, param5: core.Variant): number;
                public static SGREOfflineRoutingService_setProfile(param0: number, param1: SGREOfflineRoutingService, param2: string): void;
                public static SGREOfflineRoutingService_change_ownership(param0: SGREOfflineRoutingService, param1: number, param2: boolean): void;
                public static SGREOfflineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
                public static SwigDirector_SGREOfflineRoutingService_matchRoute(param0: SGREOfflineRoutingService, param1: number): number;
                public static delete_SGREOfflineRoutingService(param0: number): void;
                public constructor();
                public static SGREOfflineRoutingService_calculateRoute(param0: number, param1: SGREOfflineRoutingService, param2: number, param3: RoutingRequest): number;
                public static SGREOfflineRoutingService_swigGetDirectorObject(param0: number, param1: SGREOfflineRoutingService): any;
                public static SGREOfflineRoutingService_calculateRouteSwigExplicitSGREOfflineRoutingService(param0: number, param1: SGREOfflineRoutingService, param2: number, param3: RoutingRequest): number;
                public static SwigDirector_SGREOfflineRoutingService_getProfile(param0: SGREOfflineRoutingService): string;
                public static SGREOfflineRoutingService_swigGetRawPtr(param0: number, param1: SGREOfflineRoutingService): number;
                public static SGREOfflineRoutingService_director_connect(param0: SGREOfflineRoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_SGREOfflineRoutingService_calculateRoute(param0: SGREOfflineRoutingService, param1: number): number;
                public static new_SGREOfflineRoutingService__SWIG_0(param0: number, param1: core.Variant, param2: number, param3: core.Variant): number;
                public static SGREOfflineRoutingService_setProfileSwigExplicitSGREOfflineRoutingService(param0: number, param1: SGREOfflineRoutingService, param2: string): void;
                public static SGREOfflineRoutingService_swigGetClassName(param0: number, param1: SGREOfflineRoutingService): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class ValhallaOfflineRoutingService extends RoutingService {
                public static class: java.lang.Class<ValhallaOfflineRoutingService>;
                public static getCPtr(param0: RoutingService): number;
                public static getCPtr(param0: ValhallaOfflineRoutingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: RoutingRequest): RoutingResult;
                public getConfigurationParameter(param0: string): core.Variant;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RoutingService;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public connectElevationDataSource(param0: datasources.TileDataSource, param1: rastertiles.ElevationDecoder): void;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public setProfile(param0: string): void;
                public setConfigurationParameter(param0: string, param1: core.Variant): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public getProfile(): string;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ValhallaOfflineRoutingService;
                public matchRoute(param0: RouteMatchingRequest): RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class ValhallaOfflineRoutingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ValhallaOfflineRoutingServiceModuleJNI>;
                public static ValhallaOfflineRoutingService_getProfileSwigExplicitValhallaOfflineRoutingService(param0: number, param1: ValhallaOfflineRoutingService): string;
                public static SwigDirector_ValhallaOfflineRoutingService_calculateRoute(param0: ValhallaOfflineRoutingService, param1: number): number;
                public static ValhallaOfflineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
                public static SwigDirector_ValhallaOfflineRoutingService_getProfile(param0: ValhallaOfflineRoutingService): string;
                public static delete_ValhallaOfflineRoutingService(param0: number): void;
                public static ValhallaOfflineRoutingService_swigGetClassName(param0: number, param1: ValhallaOfflineRoutingService): string;
                public static ValhallaOfflineRoutingService_swigGetRawPtr(param0: number, param1: ValhallaOfflineRoutingService): number;
                public constructor();
                public static ValhallaOfflineRoutingService_setProfileSwigExplicitValhallaOfflineRoutingService(param0: number, param1: ValhallaOfflineRoutingService, param2: string): void;
                public static ValhallaOfflineRoutingService_calculateRouteSwigExplicitValhallaOfflineRoutingService(param0: number, param1: ValhallaOfflineRoutingService, param2: number, param3: RoutingRequest): number;
                public static ValhallaOfflineRoutingService_connectElevationDataSource(param0: number, param1: ValhallaOfflineRoutingService, param2: number, param3: datasources.TileDataSource, param4: number, param5: rastertiles.ElevationDecoder): void;
                public static ValhallaOfflineRoutingService_swigGetDirectorObject(param0: number, param1: ValhallaOfflineRoutingService): any;
                public static SwigDirector_ValhallaOfflineRoutingService_matchRoute(param0: ValhallaOfflineRoutingService, param1: number): number;
                public static ValhallaOfflineRoutingService_director_connect(param0: ValhallaOfflineRoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static ValhallaOfflineRoutingService_change_ownership(param0: ValhallaOfflineRoutingService, param1: number, param2: boolean): void;
                public static new_ValhallaOfflineRoutingService(param0: string): number;
                public static ValhallaOfflineRoutingService_getConfigurationParameter(param0: number, param1: ValhallaOfflineRoutingService, param2: string): number;
                public static ValhallaOfflineRoutingService_matchRouteSwigExplicitValhallaOfflineRoutingService(param0: number, param1: ValhallaOfflineRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static SwigDirector_ValhallaOfflineRoutingService_setProfile(param0: ValhallaOfflineRoutingService, param1: string): void;
                public static ValhallaOfflineRoutingService_getProfile(param0: number, param1: ValhallaOfflineRoutingService): string;
                public static ValhallaOfflineRoutingService_setProfile(param0: number, param1: ValhallaOfflineRoutingService, param2: string): void;
                public static ValhallaOfflineRoutingService_calculateRoute(param0: number, param1: ValhallaOfflineRoutingService, param2: number, param3: RoutingRequest): number;
                public static ValhallaOfflineRoutingService_setConfigurationParameter(param0: number, param1: ValhallaOfflineRoutingService, param2: string, param3: number, param4: core.Variant): void;
                public static ValhallaOfflineRoutingService_matchRoute(param0: number, param1: ValhallaOfflineRoutingService, param2: number, param3: RouteMatchingRequest): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class ValhallaOnlineRoutingService extends RoutingService {
                public static class: java.lang.Class<ValhallaOnlineRoutingService>;
                public static getCPtr(param0: RoutingService): number;
                public swigReleaseOwnership(): void;
                public static getCPtr(param0: ValhallaOnlineRoutingService): number;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: RoutingRequest): RoutingResult;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): RoutingService;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor(param0: string);
                public swigGetDirectorObject(): any;
                public constructor();
                public setProfile(param0: string): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ValhallaOnlineRoutingService;
                public setCustomServiceURL(param0: string): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public getProfile(): string;
                public swigTakeOwnership(): void;
                public matchRoute(param0: RouteMatchingRequest): RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class ValhallaOnlineRoutingServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ValhallaOnlineRoutingServiceModuleJNI>;
                public static SwigDirector_ValhallaOnlineRoutingService_getProfile(param0: ValhallaOnlineRoutingService): string;
                public static ValhallaOnlineRoutingService_calculateRouteSwigExplicitValhallaOnlineRoutingService(param0: number, param1: ValhallaOnlineRoutingService, param2: number, param3: RoutingRequest): number;
                public static ValhallaOnlineRoutingService_change_ownership(param0: ValhallaOnlineRoutingService, param1: number, param2: boolean): void;
                public static ValhallaOnlineRoutingService_getProfile(param0: number, param1: ValhallaOnlineRoutingService): string;
                public static ValhallaOnlineRoutingService_setProfileSwigExplicitValhallaOnlineRoutingService(param0: number, param1: ValhallaOnlineRoutingService, param2: string): void;
                public static ValhallaOnlineRoutingService_swigGetRawPtr(param0: number, param1: ValhallaOnlineRoutingService): number;
                public static new_ValhallaOnlineRoutingService(param0: string): number;
                public static ValhallaOnlineRoutingService_matchRoute(param0: number, param1: ValhallaOnlineRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static ValhallaOnlineRoutingService_swigGetDirectorObject(param0: number, param1: ValhallaOnlineRoutingService): any;
                public static ValhallaOnlineRoutingService_setProfile(param0: number, param1: ValhallaOnlineRoutingService, param2: string): void;
                public static SwigDirector_ValhallaOnlineRoutingService_setProfile(param0: ValhallaOnlineRoutingService, param1: string): void;
                public constructor();
                public static delete_ValhallaOnlineRoutingService(param0: number): void;
                public static ValhallaOnlineRoutingService_director_connect(param0: ValhallaOnlineRoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static ValhallaOnlineRoutingService_matchRouteSwigExplicitValhallaOnlineRoutingService(param0: number, param1: ValhallaOnlineRoutingService, param2: number, param3: RouteMatchingRequest): number;
                public static SwigDirector_ValhallaOnlineRoutingService_matchRoute(param0: ValhallaOnlineRoutingService, param1: number): number;
                public static ValhallaOnlineRoutingService_getCustomServiceURL(param0: number, param1: ValhallaOnlineRoutingService): string;
                public static ValhallaOnlineRoutingService_getProfileSwigExplicitValhallaOnlineRoutingService(param0: number, param1: ValhallaOnlineRoutingService): string;
                public static ValhallaOnlineRoutingService_setCustomServiceURL(param0: number, param1: ValhallaOnlineRoutingService, param2: string): void;
                public static ValhallaOnlineRoutingService_swigGetClassName(param0: number, param1: ValhallaOnlineRoutingService): string;
                public static SwigDirector_ValhallaOnlineRoutingService_calculateRoute(param0: ValhallaOnlineRoutingService, param1: number): number;
                public static ValhallaOnlineRoutingService_calculateRoute(param0: number, param1: ValhallaOnlineRoutingService, param2: number, param3: RoutingRequest): number;
                public static ValhallaOnlineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class FeatureCollectionSearchService extends java.lang.Object {
                public static class: java.lang.Class<FeatureCollectionSearchService>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public getProjection(): projections.Projection;
                public static getCPtr(param0: FeatureCollectionSearchService): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): FeatureCollectionSearchService;
                public findFeatures(param0: SearchRequest): geometry.FeatureCollection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor(param0: projections.Projection, param1: geometry.FeatureCollection);
                public swigGetRawPtr(): number;
                public setMaxResults(param0: number): void;
                public delete(): void;
                public getMaxResults(): number;
                public getFeatureCollection(): geometry.FeatureCollection;
                public swigTakeOwnership(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class FeatureCollectionSearchServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<FeatureCollectionSearchServiceModuleJNI>;
                public static FeatureCollectionSearchService_setMaxResults(param0: number, param1: FeatureCollectionSearchService, param2: number): void;
                public static FeatureCollectionSearchService_change_ownership(param0: FeatureCollectionSearchService, param1: number, param2: boolean): void;
                public static FeatureCollectionSearchService_getMaxResults(param0: number, param1: FeatureCollectionSearchService): number;
                public static SwigDirector_FeatureCollectionSearchService_findFeatures(param0: FeatureCollectionSearchService, param1: number): number;
                public static FeatureCollectionSearchService_swigGetDirectorObject(param0: number, param1: FeatureCollectionSearchService): any;
                public static FeatureCollectionSearchService_director_connect(param0: FeatureCollectionSearchService, param1: number, param2: boolean, param3: boolean): void;
                public constructor();
                public static new_FeatureCollectionSearchService(param0: number, param1: projections.Projection, param2: number, param3: geometry.FeatureCollection): number;
                public static FeatureCollectionSearchService_getProjection(param0: number, param1: FeatureCollectionSearchService): number;
                public static FeatureCollectionSearchService_findFeaturesSwigExplicitFeatureCollectionSearchService(param0: number, param1: FeatureCollectionSearchService, param2: number, param3: SearchRequest): number;
                public static FeatureCollectionSearchService_swigGetRawPtr(param0: number, param1: FeatureCollectionSearchService): number;
                public static FeatureCollectionSearchService_swigGetClassName(param0: number, param1: FeatureCollectionSearchService): string;
                public static delete_FeatureCollectionSearchService(param0: number): void;
                public static FeatureCollectionSearchService_getFeatureCollection(param0: number, param1: FeatureCollectionSearchService): number;
                public static FeatureCollectionSearchService_findFeatures(param0: number, param1: FeatureCollectionSearchService, param2: number, param3: SearchRequest): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class SearchRequest extends java.lang.Object {
                public static class: java.lang.Class<SearchRequest>;
                public swigCMemOwn: boolean;
                public getProjection(): projections.Projection;
                public getFilterExpression(): string;
                public getRegexFilter(): string;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setProjection(param0: projections.Projection): void;
                public setFilterExpression(param0: string): void;
                public setSearchRadius(param0: number): void;
                public toString(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public setGeometry(param0: geometry.Geometry): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public setRegexFilter(param0: string): void;
                public getSearchRadius(): number;
                public getGeometry(): geometry.Geometry;
                public static getCPtr(param0: SearchRequest): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class SearchRequestModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<SearchRequestModuleJNI>;
                public static SearchRequest_setRegexFilter(param0: number, param1: SearchRequest, param2: string): void;
                public static SearchRequest_setProjection(param0: number, param1: SearchRequest, param2: number, param3: projections.Projection): void;
                public static SearchRequest_getSearchRadius(param0: number, param1: SearchRequest): number;
                public static SearchRequest_setGeometry(param0: number, param1: SearchRequest, param2: number, param3: geometry.Geometry): void;
                public static SearchRequest_getProjection(param0: number, param1: SearchRequest): number;
                public static SearchRequest_getGeometry(param0: number, param1: SearchRequest): number;
                public static SearchRequest_setFilterExpression(param0: number, param1: SearchRequest, param2: string): void;
                public static SearchRequest_toString(param0: number, param1: SearchRequest): string;
                public constructor();
                public static new_SearchRequest(): number;
                public static delete_SearchRequest(param0: number): void;
                public static SearchRequest_getRegexFilter(param0: number, param1: SearchRequest): string;
                public static SearchRequest_swigGetRawPtr(param0: number, param1: SearchRequest): number;
                public static SearchRequest_setSearchRadius(param0: number, param1: SearchRequest, param2: number): void;
                public static SearchRequest_getFilterExpression(param0: number, param1: SearchRequest): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class VectorElementSearchService extends java.lang.Object {
                public static class: java.lang.Class<VectorElementSearchService>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: datasources.VectorDataSource);
                public swigGetClassName(): string;
                public static getCPtr(param0: VectorElementSearchService): number;
                public swigGetDirectorObject(): any;
                public getDataSource(): datasources.VectorDataSource;
                public swigGetRawPtr(): number;
                public setMaxResults(param0: number): void;
                public findElements(param0: SearchRequest): vectorelements.VectorElementVector;
                public delete(): void;
                public getMaxResults(): number;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElementSearchService;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class VectorElementSearchServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorElementSearchServiceModuleJNI>;
                public static VectorElementSearchService_director_connect(param0: VectorElementSearchService, param1: number, param2: boolean, param3: boolean): void;
                public static VectorElementSearchService_swigGetClassName(param0: number, param1: VectorElementSearchService): string;
                public static delete_VectorElementSearchService(param0: number): void;
                public static VectorElementSearchService_getDataSource(param0: number, param1: VectorElementSearchService): number;
                public static VectorElementSearchService_findElements(param0: number, param1: VectorElementSearchService, param2: number, param3: SearchRequest): number;
                public static VectorElementSearchService_findElementsSwigExplicitVectorElementSearchService(param0: number, param1: VectorElementSearchService, param2: number, param3: SearchRequest): number;
                public static VectorElementSearchService_getMaxResults(param0: number, param1: VectorElementSearchService): number;
                public constructor();
                public static new_VectorElementSearchService(param0: number, param1: datasources.VectorDataSource): number;
                public static VectorElementSearchService_swigGetDirectorObject(param0: number, param1: VectorElementSearchService): any;
                public static VectorElementSearchService_setMaxResults(param0: number, param1: VectorElementSearchService, param2: number): void;
                public static VectorElementSearchService_change_ownership(param0: VectorElementSearchService, param1: number, param2: boolean): void;
                public static SwigDirector_VectorElementSearchService_findElements(param0: VectorElementSearchService, param1: number): number;
                public static VectorElementSearchService_swigGetRawPtr(param0: number, param1: VectorElementSearchService): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class VectorTileSearchService extends java.lang.Object {
                public static class: java.lang.Class<VectorTileSearchService>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getTileDecoder(): vectortiles.VectorTileDecoder;
                public swigGetClassName(): string;
                public getDataSource(): datasources.TileDataSource;
                public getMaxZoom(): number;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public setMaxZoom(param0: number): void;
                public setMaxResults(param0: number): void;
                public static getCPtr(param0: VectorTileSearchService): number;
                public delete(): void;
                public getMaxResults(): number;
                public findFeatures(param0: SearchRequest): geometry.VectorTileFeatureCollection;
                public swigTakeOwnership(): void;
                public constructor(param0: datasources.TileDataSource, param1: vectortiles.VectorTileDecoder);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileSearchService;
                public getMinZoom(): number;
                public setMinZoom(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class VectorTileSearchServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorTileSearchServiceModuleJNI>;
                public static delete_VectorTileSearchService(param0: number): void;
                public static SwigDirector_VectorTileSearchService_findFeatures(param0: VectorTileSearchService, param1: number): number;
                public static VectorTileSearchService_getDataSource(param0: number, param1: VectorTileSearchService): number;
                public static VectorTileSearchService_setMaxResults(param0: number, param1: VectorTileSearchService, param2: number): void;
                public static VectorTileSearchService_getTileDecoder(param0: number, param1: VectorTileSearchService): number;
                public constructor();
                public static VectorTileSearchService_swigGetRawPtr(param0: number, param1: VectorTileSearchService): number;
                public static VectorTileSearchService_swigGetClassName(param0: number, param1: VectorTileSearchService): string;
                public static VectorTileSearchService_director_connect(param0: VectorTileSearchService, param1: number, param2: boolean, param3: boolean): void;
                public static VectorTileSearchService_setMaxZoom(param0: number, param1: VectorTileSearchService, param2: number): void;
                public static new_VectorTileSearchService(param0: number, param1: datasources.TileDataSource, param2: number, param3: vectortiles.VectorTileDecoder): number;
                public static VectorTileSearchService_findFeaturesSwigExplicitVectorTileSearchService(param0: number, param1: VectorTileSearchService, param2: number, param3: SearchRequest): number;
                public static VectorTileSearchService_swigGetDirectorObject(param0: number, param1: VectorTileSearchService): any;
                public static VectorTileSearchService_findFeatures(param0: number, param1: VectorTileSearchService, param2: number, param3: SearchRequest): number;
                public static VectorTileSearchService_getMaxZoom(param0: number, param1: VectorTileSearchService): number;
                public static VectorTileSearchService_getMaxResults(param0: number, param1: VectorTileSearchService): number;
                public static VectorTileSearchService_getMinZoom(param0: number, param1: VectorTileSearchService): number;
                public static VectorTileSearchService_setMinZoom(param0: number, param1: VectorTileSearchService, param2: number): void;
                public static VectorTileSearchService_change_ownership(param0: VectorTileSearchService, param1: number, param2: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace services {
            export class CartoMapsService extends java.lang.Object {
                public static class: java.lang.Class<CartoMapsService>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: CartoMapsService): number;
                public getAPIKey(): string;
                public getVectorTileAssetPackage(): utils.AssetPackage;
                public isInteractive(): boolean;
                public finalize(): void;
                public constructor();
                public buildNamedMap(param0: string, param1: core.StringVariantMap): layers.LayerVector;
                public setInteractive(param0: boolean): void;
                public setDefaultVectorLayerMode(param0: boolean): void;
                public delete(): void;
                public hashCode(): number;
                public setUsername(param0: string): void;
                public equals(param0: any): boolean;
                public getUsername(): string;
                public setAPIKey(param0: string): void;
                public getAPITemplate(): string;
                public setVectorTileBufferSize(param0: number): void;
                public getAuthTokens(): core.StringVector;
                public setVectorTileAssetPackage(param0: utils.AssetPackage): void;
                public constructor(param0: number, param1: boolean);
                public isStrictMode(): boolean;
                public setLayerIndices(param0: core.IntVector): void;
                public swigGetRawPtr(): number;
                public setAuthTokens(param0: core.StringVector): void;
                public setAPITemplate(param0: string): void;
                public getLayerIndices(): core.IntVector;
                public setStrictMode(param0: boolean): void;
                public buildMap(param0: core.Variant): layers.LayerVector;
                public isDefaultVectorLayerMode(): boolean;
                public getVectorTileBufferSize(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace services {
            export class CartoMapsServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CartoMapsServiceModuleJNI>;
                public static CartoMapsService_getUsername(param0: number, param1: CartoMapsService): string;
                public static CartoMapsService_setLayerIndices(param0: number, param1: CartoMapsService, param2: number, param3: core.IntVector): void;
                public static CartoMapsService_setVectorTileBufferSize(param0: number, param1: CartoMapsService, param2: number): void;
                public constructor();
                public static CartoMapsService_getAuthTokens(param0: number, param1: CartoMapsService): number;
                public static CartoMapsService_swigGetRawPtr(param0: number, param1: CartoMapsService): number;
                public static CartoMapsService_getAPIKey(param0: number, param1: CartoMapsService): string;
                public static CartoMapsService_getVectorTileBufferSize(param0: number, param1: CartoMapsService): number;
                public static CartoMapsService_isInteractive(param0: number, param1: CartoMapsService): boolean;
                public static CartoMapsService_setInteractive(param0: number, param1: CartoMapsService, param2: boolean): void;
                public static delete_CartoMapsService(param0: number): void;
                public static CartoMapsService_setUsername(param0: number, param1: CartoMapsService, param2: string): void;
                public static CartoMapsService_getLayerIndices(param0: number, param1: CartoMapsService): number;
                public static CartoMapsService_setAuthTokens(param0: number, param1: CartoMapsService, param2: number, param3: core.StringVector): void;
                public static CartoMapsService_setAPIKey(param0: number, param1: CartoMapsService, param2: string): void;
                public static CartoMapsService_buildNamedMap(param0: number, param1: CartoMapsService, param2: string, param3: number, param4: core.StringVariantMap): number;
                public static CartoMapsService_setStrictMode(param0: number, param1: CartoMapsService, param2: boolean): void;
                public static CartoMapsService_setDefaultVectorLayerMode(param0: number, param1: CartoMapsService, param2: boolean): void;
                public static CartoMapsService_setAPITemplate(param0: number, param1: CartoMapsService, param2: string): void;
                public static CartoMapsService_isDefaultVectorLayerMode(param0: number, param1: CartoMapsService): boolean;
                public static CartoMapsService_setVectorTileAssetPackage(param0: number, param1: CartoMapsService, param2: number, param3: utils.AssetPackage): void;
                public static CartoMapsService_getVectorTileAssetPackage(param0: number, param1: CartoMapsService): number;
                public static CartoMapsService_buildMap(param0: number, param1: CartoMapsService, param2: number, param3: core.Variant): number;
                public static CartoMapsService_isStrictMode(param0: number, param1: CartoMapsService): boolean;
                public static new_CartoMapsService(): number;
                public static CartoMapsService_getAPITemplate(param0: number, param1: CartoMapsService): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace services {
            export class CartoSQLService extends java.lang.Object {
                public static class: java.lang.Class<CartoSQLService>;
                public swigCMemOwn: boolean;
                public setAPIKey(param0: string): void;
                public getAPIKey(): string;
                public getAPITemplate(): string;
                public queryData(param0: string): core.Variant;
                public static getCPtr(param0: CartoSQLService): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public swigGetRawPtr(): number;
                public setAPITemplate(param0: string): void;
                public delete(): void;
                public hashCode(): number;
                public setUsername(param0: string): void;
                public equals(param0: any): boolean;
                public getUsername(): string;
                public queryFeatures(param0: string, param1: projections.Projection): geometry.FeatureCollection;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace services {
            export class CartoSQLServiceModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CartoSQLServiceModuleJNI>;
                public static CartoSQLService_setUsername(param0: number, param1: CartoSQLService, param2: string): void;
                public static CartoSQLService_getAPITemplate(param0: number, param1: CartoSQLService): string;
                public static new_CartoSQLService(): number;
                public static CartoSQLService_setAPIKey(param0: number, param1: CartoSQLService, param2: string): void;
                public static CartoSQLService_getUsername(param0: number, param1: CartoSQLService): string;
                public static CartoSQLService_queryData(param0: number, param1: CartoSQLService, param2: string): number;
                public static delete_CartoSQLService(param0: number): void;
                public static CartoSQLService_swigGetRawPtr(param0: number, param1: CartoSQLService): number;
                public static CartoSQLService_setAPITemplate(param0: number, param1: CartoSQLService, param2: string): void;
                public static CartoSQLService_queryFeatures(param0: number, param1: CartoSQLService, param2: string, param3: number, param4: projections.Projection): number;
                public constructor();
                public static CartoSQLService_getAPIKey(param0: number, param1: CartoSQLService): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class AnimationStyle extends java.lang.Object {
                public static class: java.lang.Class<AnimationStyle>;
                public swigCMemOwn: boolean;
                public getPhaseOutDuration(): number;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): AnimationStyle;
                public constructor(param0: number, param1: boolean);
                public getFadeAnimationType(): AnimationType;
                public static getCPtr(param0: AnimationStyle): number;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public getRelativeSpeed(): number;
                public getPhaseInDuration(): number;
                public delete(): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public getSizeAnimationType(): AnimationType;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class AnimationStyleBuilder extends java.lang.Object {
                public static class: java.lang.Class<AnimationStyleBuilder>;
                public swigCMemOwn: boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): AnimationStyleBuilder;
                public getPhaseOutDuration(): number;
                public setFadeAnimationType(param0: AnimationType): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getFadeAnimationType(): AnimationType;
                public buildStyle(): AnimationStyle;
                public setSizeAnimationType(param0: AnimationType): void;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public setPhaseInDuration(param0: number): void;
                public setPhaseOutDuration(param0: number): void;
                public getRelativeSpeed(): number;
                public getPhaseInDuration(): number;
                public delete(): void;
                public setRelativeSpeed(param0: number): void;
                public static getCPtr(param0: AnimationStyleBuilder): number;
                public getSizeAnimationType(): AnimationType;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class AnimationStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<AnimationStyleBuilderModuleJNI>;
                public static new_AnimationStyleBuilder(): number;
                public static AnimationStyleBuilder_getPhaseInDuration(param0: number, param1: AnimationStyleBuilder): number;
                public static AnimationStyleBuilder_setSizeAnimationType(param0: number, param1: AnimationStyleBuilder, param2: number): void;
                public static AnimationStyleBuilder_setPhaseInDuration(param0: number, param1: AnimationStyleBuilder, param2: number): void;
                public static AnimationStyleBuilder_getPhaseOutDuration(param0: number, param1: AnimationStyleBuilder): number;
                public static AnimationStyleBuilder_getFadeAnimationType(param0: number, param1: AnimationStyleBuilder): number;
                public static AnimationStyleBuilder_setFadeAnimationType(param0: number, param1: AnimationStyleBuilder, param2: number): void;
                public constructor();
                public static AnimationStyleBuilder_getRelativeSpeed(param0: number, param1: AnimationStyleBuilder): number;
                public static AnimationStyleBuilder_getSizeAnimationType(param0: number, param1: AnimationStyleBuilder): number;
                public static AnimationStyleBuilder_setPhaseOutDuration(param0: number, param1: AnimationStyleBuilder, param2: number): void;
                public static delete_AnimationStyleBuilder(param0: number): void;
                public static AnimationStyleBuilder_buildStyle(param0: number, param1: AnimationStyleBuilder): number;
                public static AnimationStyleBuilder_swigGetRawPtr(param0: number, param1: AnimationStyleBuilder): number;
                public static AnimationStyleBuilder_swigGetClassName(param0: number, param1: AnimationStyleBuilder): string;
                public static AnimationStyleBuilder_swigGetDirectorObject(param0: number, param1: AnimationStyleBuilder): any;
                public static AnimationStyleBuilder_setRelativeSpeed(param0: number, param1: AnimationStyleBuilder, param2: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class AnimationStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<AnimationStyleModuleJNI>;
                public static AnimationStyle_getSizeAnimationType(param0: number, param1: AnimationStyle): number;
                public static AnimationStyle_getRelativeSpeed(param0: number, param1: AnimationStyle): number;
                public static AnimationStyle_swigGetClassName(param0: number, param1: AnimationStyle): string;
                public static AnimationStyle_swigGetDirectorObject(param0: number, param1: AnimationStyle): any;
                public static AnimationStyle_getPhaseInDuration(param0: number, param1: AnimationStyle): number;
                public static AnimationStyle_getFadeAnimationType(param0: number, param1: AnimationStyle): number;
                public static delete_AnimationStyle(param0: number): void;
                public static AnimationStyle_getPhaseOutDuration(param0: number, param1: AnimationStyle): number;
                public static AnimationStyle_swigGetRawPtr(param0: number, param1: AnimationStyle): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class AnimationType {
                public static class: java.lang.Class<AnimationType>;
                public static ANIMATION_TYPE_NONE: AnimationType;
                public static ANIMATION_TYPE_STEP: AnimationType;
                public static ANIMATION_TYPE_LINEAR: AnimationType;
                public static ANIMATION_TYPE_SMOOTHSTEP: AnimationType;
                public static ANIMATION_TYPE_SPRING: AnimationType;
                public swigValue(): number;
                public static values(): native.Array<AnimationType>;
                public static valueOf(param0: string): AnimationType;
                public static swigToEnum(param0: number): AnimationType;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace AnimationType {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BalloonPopupButtonStyle extends Style {
                public static class: java.lang.Class<BalloonPopupButtonStyle>;
                public getTextColor(): graphics.Color;
                public getTextMargins(): BalloonPopupMargins;
                public getStrokeWidth(): number;
                public finalize(): void;
                public getBackgroundColor(): graphics.Color;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public getTextFontName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public getCornerRadius(): number;
                public static getCPtr(param0: BalloonPopupButtonStyle): number;
                public delete(): void;
                public getTextFontSize(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BalloonPopupButtonStyle;
                public getButtonWidth(): number;
                public static getCPtr(param0: Style): number;
                public getStrokeColor(): graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BalloonPopupButtonStyleBuilder extends StyleBuilder {
                public static class: java.lang.Class<BalloonPopupButtonStyleBuilder>;
                public getTextColor(): graphics.Color;
                public getStrokeWidth(): number;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public constructor();
                public getTextFontName(): string;
                public setStrokeColor(param0: graphics.Color): void;
                public delete(): void;
                public static getCPtr(param0: BalloonPopupButtonStyleBuilder): number;
                public setTextFontSize(param0: number): void;
                public setStrokeWidth(param0: number): void;
                public getTextMargins(): BalloonPopupMargins;
                public static getCPtr(param0: StyleBuilder): number;
                public setTextMargins(param0: BalloonPopupMargins): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public setButtonWidth(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BalloonPopupButtonStyleBuilder;
                public getCornerRadius(): number;
                public buildStyle(): BalloonPopupButtonStyle;
                public getTextFontSize(): number;
                public getButtonWidth(): number;
                public setTextFontName(param0: string): void;
                public setCornerRadius(param0: number): void;
                public setTextColor(param0: graphics.Color): void;
                public getStrokeColor(): graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BalloonPopupButtonStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BalloonPopupButtonStyleBuilderModuleJNI>;
                public static BalloonPopupButtonStyleBuilder_getTextFontSize(param0: number, param1: BalloonPopupButtonStyleBuilder): number;
                public static BalloonPopupButtonStyleBuilder_getStrokeWidth(param0: number, param1: BalloonPopupButtonStyleBuilder): number;
                public static BalloonPopupButtonStyleBuilder_setButtonWidth(param0: number, param1: BalloonPopupButtonStyleBuilder, param2: number): void;
                public static BalloonPopupButtonStyleBuilder_getButtonWidth(param0: number, param1: BalloonPopupButtonStyleBuilder): number;
                public static BalloonPopupButtonStyleBuilder_setTextColor(param0: number, param1: BalloonPopupButtonStyleBuilder, param2: number, param3: graphics.Color): void;
                public static BalloonPopupButtonStyleBuilder_getTextMargins(param0: number, param1: BalloonPopupButtonStyleBuilder): number;
                public static BalloonPopupButtonStyleBuilder_swigGetRawPtr(param0: number, param1: BalloonPopupButtonStyleBuilder): number;
                public static BalloonPopupButtonStyleBuilder_getCornerRadius(param0: number, param1: BalloonPopupButtonStyleBuilder): number;
                public static BalloonPopupButtonStyleBuilder_setCornerRadius(param0: number, param1: BalloonPopupButtonStyleBuilder, param2: number): void;
                public constructor();
                public static BalloonPopupButtonStyleBuilder_getTextFontName(param0: number, param1: BalloonPopupButtonStyleBuilder): string;
                public static BalloonPopupButtonStyleBuilder_buildStyle(param0: number, param1: BalloonPopupButtonStyleBuilder): number;
                public static BalloonPopupButtonStyleBuilder_setTextFontSize(param0: number, param1: BalloonPopupButtonStyleBuilder, param2: number): void;
                public static BalloonPopupButtonStyleBuilder_setStrokeWidth(param0: number, param1: BalloonPopupButtonStyleBuilder, param2: number): void;
                public static BalloonPopupButtonStyleBuilder_swigGetClassName(param0: number, param1: BalloonPopupButtonStyleBuilder): string;
                public static BalloonPopupButtonStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public static BalloonPopupButtonStyleBuilder_setTextMargins(param0: number, param1: BalloonPopupButtonStyleBuilder, param2: number, param3: BalloonPopupMargins): void;
                public static BalloonPopupButtonStyleBuilder_setTextFontName(param0: number, param1: BalloonPopupButtonStyleBuilder, param2: string): void;
                public static BalloonPopupButtonStyleBuilder_setStrokeColor(param0: number, param1: BalloonPopupButtonStyleBuilder, param2: number, param3: graphics.Color): void;
                public static new_BalloonPopupButtonStyleBuilder(): number;
                public static delete_BalloonPopupButtonStyleBuilder(param0: number): void;
                public static BalloonPopupButtonStyleBuilder_getTextColor(param0: number, param1: BalloonPopupButtonStyleBuilder): number;
                public static BalloonPopupButtonStyleBuilder_swigGetDirectorObject(param0: number, param1: BalloonPopupButtonStyleBuilder): any;
                public static BalloonPopupButtonStyleBuilder_getStrokeColor(param0: number, param1: BalloonPopupButtonStyleBuilder): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BalloonPopupButtonStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BalloonPopupButtonStyleModuleJNI>;
                public static BalloonPopupButtonStyle_getTextColor(param0: number, param1: BalloonPopupButtonStyle): number;
                public static BalloonPopupButtonStyle_getTextFontSize(param0: number, param1: BalloonPopupButtonStyle): number;
                public static BalloonPopupButtonStyle_SWIGSmartPtrUpcast(param0: number): number;
                public static BalloonPopupButtonStyle_getCornerRadius(param0: number, param1: BalloonPopupButtonStyle): number;
                public static BalloonPopupButtonStyle_getStrokeWidth(param0: number, param1: BalloonPopupButtonStyle): number;
                public static delete_BalloonPopupButtonStyle(param0: number): void;
                public static BalloonPopupButtonStyle_getTextMargins(param0: number, param1: BalloonPopupButtonStyle): number;
                public constructor();
                public static BalloonPopupButtonStyle_getTextFontName(param0: number, param1: BalloonPopupButtonStyle): string;
                public static BalloonPopupButtonStyle_getStrokeColor(param0: number, param1: BalloonPopupButtonStyle): number;
                public static BalloonPopupButtonStyle_swigGetClassName(param0: number, param1: BalloonPopupButtonStyle): string;
                public static BalloonPopupButtonStyle_getButtonWidth(param0: number, param1: BalloonPopupButtonStyle): number;
                public static BalloonPopupButtonStyle_swigGetDirectorObject(param0: number, param1: BalloonPopupButtonStyle): any;
                public static BalloonPopupButtonStyle_getBackgroundColor(param0: number, param1: BalloonPopupButtonStyle): number;
                public static BalloonPopupButtonStyle_swigGetRawPtr(param0: number, param1: BalloonPopupButtonStyle): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BalloonPopupMargins extends java.lang.Object {
                public static class: java.lang.Class<BalloonPopupMargins>;
                public swigCMemOwn: boolean;
                public getTop(): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public static getCPtr(param0: BalloonPopupMargins): number;
                public getLeft(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getBottom(): number;
                public getRight(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BalloonPopupStyle extends PopupStyle {
                public static class: java.lang.Class<BalloonPopupStyle>;
                public getStrokeWidth(): number;
                public finalize(): void;
                public getRightMargins(): BalloonPopupMargins;
                public getRightImage(): graphics.Bitmap;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BalloonPopupStyle;
                public static getCPtr(param0: BillboardStyle): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public isTitleWrap(): boolean;
                public getTriangleHeight(): number;
                public delete(): void;
                public getTitleFontSize(): number;
                public getButtonMargins(): BalloonPopupMargins;
                public getLeftImage(): graphics.Bitmap;
                public isDescriptionWrap(): boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BillboardStyle;
                public static getCPtr(param0: BalloonPopupStyle): number;
                public getLeftColor(): graphics.Color;
                public getDescriptionMargins(): BalloonPopupMargins;
                public getDescriptionFontSize(): number;
                public getBackgroundColor(): graphics.Color;
                public constructor(param0: number, param1: boolean);
                public getDescriptionColor(): graphics.Color;
                public static getCPtr(param0: PopupStyle): number;
                public getTitleMargins(): BalloonPopupMargins;
                public getTitleField(): string;
                public swigGetClassName(): string;
                public getLeftMargins(): BalloonPopupMargins;
                public swigGetDirectorObject(): any;
                public getTriangleWidth(): number;
                public swigGetRawPtr(): number;
                public getCornerRadius(): number;
                public getRightColor(): graphics.Color;
                public getDescriptionField(): string;
                public getTitleColor(): graphics.Color;
                public getTitleFontName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PopupStyle;
                public static getCPtr(param0: Style): number;
                public getDescriptionFontName(): string;
                public getStrokeColor(): graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BalloonPopupStyleBuilder extends PopupStyleBuilder {
                public static class: java.lang.Class<BalloonPopupStyleBuilder>;
                public setLeftColor(param0: graphics.Color): void;
                public getStrokeWidth(): number;
                public setTriangleWidth(param0: number): void;
                public setRightColor(param0: graphics.Color): void;
                public static getCPtr(param0: BalloonPopupStyleBuilder): number;
                public getRightImage(): graphics.Bitmap;
                public setRightImage(param0: graphics.Bitmap): void;
                public setDescriptionFontSize(param0: number): void;
                public setDescriptionWrap(param0: boolean): void;
                public constructor();
                public buildStyle(): BalloonPopupStyle;
                public static getCPtr(param0: BillboardStyleBuilder): number;
                public isDescriptionWrap(): boolean;
                public setDescriptionMargins(param0: BalloonPopupMargins): void;
                public setRightMargins(param0: BalloonPopupMargins): void;
                public setStrokeWidth(param0: number): void;
                public getDescriptionMargins(): BalloonPopupMargins;
                public getDescriptionFontSize(): number;
                public setTitleColor(param0: graphics.Color): void;
                public getTitleMargins(): BalloonPopupMargins;
                public getTitleField(): string;
                public buildStyle(): PopupStyle;
                public getCornerRadius(): number;
                public getRightColor(): graphics.Color;
                public getDescriptionField(): string;
                public static getCPtr(param0: PopupStyleBuilder): number;
                public getTitleColor(): graphics.Color;
                public setTitleMargins(param0: BalloonPopupMargins): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BillboardStyleBuilder;
                public setCornerRadius(param0: number): void;
                public getTitleFontName(): string;
                public setTitleWrap(param0: boolean): void;
                public setTitleFontSize(param0: number): void;
                public finalize(): void;
                public getRightMargins(): BalloonPopupMargins;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public setStrokeColor(param0: graphics.Color): void;
                public isTitleWrap(): boolean;
                public getTriangleHeight(): number;
                public delete(): void;
                public getTitleFontSize(): number;
                public getButtonMargins(): BalloonPopupMargins;
                public getLeftImage(): graphics.Bitmap;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PopupStyleBuilder;
                public getLeftColor(): graphics.Color;
                public static getCPtr(param0: StyleBuilder): number;
                public setTitleField(param0: string): void;
                public setTriangleHeight(param0: number): void;
                public setLeftImage(param0: graphics.Bitmap): void;
                public setLeftMargins(param0: BalloonPopupMargins): void;
                public constructor(param0: number, param1: boolean);
                public getDescriptionColor(): graphics.Color;
                public swigGetClassName(): string;
                public getLeftMargins(): BalloonPopupMargins;
                public swigGetDirectorObject(): any;
                public setDescriptionColor(param0: graphics.Color): void;
                public getTriangleWidth(): number;
                public swigGetRawPtr(): number;
                public setDescriptionFontName(param0: string): void;
                public setDescriptionField(param0: string): void;
                public setButtonMargins(param0: BalloonPopupMargins): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BalloonPopupStyleBuilder;
                public setTitleFontName(param0: string): void;
                public getDescriptionFontName(): string;
                public getStrokeColor(): graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BalloonPopupStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BalloonPopupStyleBuilderModuleJNI>;
                public static BalloonPopupStyleBuilder_setRightImage(param0: number, param1: BalloonPopupStyleBuilder, param2: number, param3: graphics.Bitmap): void;
                public static delete_BalloonPopupStyleBuilder(param0: number): void;
                public static BalloonPopupStyleBuilder_setTitleColor(param0: number, param1: BalloonPopupStyleBuilder, param2: number, param3: graphics.Color): void;
                public static BalloonPopupStyleBuilder_setTitleFontSize(param0: number, param1: BalloonPopupStyleBuilder, param2: number): void;
                public static BalloonPopupStyleBuilder_setDescriptionWrap(param0: number, param1: BalloonPopupStyleBuilder, param2: boolean): void;
                public constructor();
                public static BalloonPopupStyleBuilder_setDescriptionFontSize(param0: number, param1: BalloonPopupStyleBuilder, param2: number): void;
                public static BalloonPopupStyleBuilder_swigGetRawPtr(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_setRightColor(param0: number, param1: BalloonPopupStyleBuilder, param2: number, param3: graphics.Color): void;
                public static BalloonPopupStyleBuilder_getLeftColor(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_getDescriptionFontName(param0: number, param1: BalloonPopupStyleBuilder): string;
                public static BalloonPopupStyleBuilder_setDescriptionMargins(param0: number, param1: BalloonPopupStyleBuilder, param2: number, param3: BalloonPopupMargins): void;
                public static BalloonPopupStyleBuilder_getRightColor(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_setDescriptionColor(param0: number, param1: BalloonPopupStyleBuilder, param2: number, param3: graphics.Color): void;
                public static BalloonPopupStyleBuilder_isDescriptionWrap(param0: number, param1: BalloonPopupStyleBuilder): boolean;
                public static BalloonPopupStyleBuilder_setTriangleHeight(param0: number, param1: BalloonPopupStyleBuilder, param2: number): void;
                public static BalloonPopupStyleBuilder_buildStyle(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_swigGetClassName(param0: number, param1: BalloonPopupStyleBuilder): string;
                public static BalloonPopupStyleBuilder_setTriangleWidth(param0: number, param1: BalloonPopupStyleBuilder, param2: number): void;
                public static BalloonPopupStyleBuilder_getLeftMargins(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_setLeftMargins(param0: number, param1: BalloonPopupStyleBuilder, param2: number, param3: BalloonPopupMargins): void;
                public static BalloonPopupStyleBuilder_getTitleColor(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_setTitleMargins(param0: number, param1: BalloonPopupStyleBuilder, param2: number, param3: BalloonPopupMargins): void;
                public static BalloonPopupStyleBuilder_isTitleWrap(param0: number, param1: BalloonPopupStyleBuilder): boolean;
                public static BalloonPopupStyleBuilder_getTitleFontName(param0: number, param1: BalloonPopupStyleBuilder): string;
                public static BalloonPopupStyleBuilder_getDescriptionField(param0: number, param1: BalloonPopupStyleBuilder): string;
                public static BalloonPopupStyleBuilder_getButtonMargins(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_getRightMargins(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_setStrokeWidth(param0: number, param1: BalloonPopupStyleBuilder, param2: number): void;
                public static BalloonPopupStyleBuilder_setTitleField(param0: number, param1: BalloonPopupStyleBuilder, param2: string): void;
                public static BalloonPopupStyleBuilder_setButtonMargins(param0: number, param1: BalloonPopupStyleBuilder, param2: number, param3: BalloonPopupMargins): void;
                public static BalloonPopupStyleBuilder_setStrokeColor(param0: number, param1: BalloonPopupStyleBuilder, param2: number, param3: graphics.Color): void;
                public static BalloonPopupStyleBuilder_getStrokeWidth(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_getDescriptionMargins(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_getCornerRadius(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_setDescriptionField(param0: number, param1: BalloonPopupStyleBuilder, param2: string): void;
                public static BalloonPopupStyleBuilder_setLeftColor(param0: number, param1: BalloonPopupStyleBuilder, param2: number, param3: graphics.Color): void;
                public static BalloonPopupStyleBuilder_getRightImage(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_getTriangleHeight(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_setTitleFontName(param0: number, param1: BalloonPopupStyleBuilder, param2: string): void;
                public static BalloonPopupStyleBuilder_getDescriptionFontSize(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_getTitleMargins(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_setDescriptionFontName(param0: number, param1: BalloonPopupStyleBuilder, param2: string): void;
                public static BalloonPopupStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public static BalloonPopupStyleBuilder_getLeftImage(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_setRightMargins(param0: number, param1: BalloonPopupStyleBuilder, param2: number, param3: BalloonPopupMargins): void;
                public static BalloonPopupStyleBuilder_swigGetDirectorObject(param0: number, param1: BalloonPopupStyleBuilder): any;
                public static BalloonPopupStyleBuilder_setTitleWrap(param0: number, param1: BalloonPopupStyleBuilder, param2: boolean): void;
                public static BalloonPopupStyleBuilder_getDescriptionColor(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_getStrokeColor(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_setLeftImage(param0: number, param1: BalloonPopupStyleBuilder, param2: number, param3: graphics.Bitmap): void;
                public static BalloonPopupStyleBuilder_setCornerRadius(param0: number, param1: BalloonPopupStyleBuilder, param2: number): void;
                public static BalloonPopupStyleBuilder_getTriangleWidth(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static new_BalloonPopupStyleBuilder(): number;
                public static BalloonPopupStyleBuilder_getTitleFontSize(param0: number, param1: BalloonPopupStyleBuilder): number;
                public static BalloonPopupStyleBuilder_getTitleField(param0: number, param1: BalloonPopupStyleBuilder): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BalloonPopupStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BalloonPopupStyleModuleJNI>;
                public static BalloonPopupStyle_getRightMargins(param0: number, param1: BalloonPopupStyle): number;
                public static new_BalloonPopupMargins(param0: number, param1: number, param2: number, param3: number): number;
                public static BalloonPopupMargins_getBottom(param0: number, param1: BalloonPopupMargins): number;
                public static BalloonPopupStyle_getTriangleWidth(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_getRightImage(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_getTitleField(param0: number, param1: BalloonPopupStyle): string;
                public static BalloonPopupStyle_getCornerRadius(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_getRightColor(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_getBackgroundColor(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_getTriangleHeight(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_getDescriptionField(param0: number, param1: BalloonPopupStyle): string;
                public static BalloonPopupStyle_getDescriptionFontSize(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupMargins_getRight(param0: number, param1: BalloonPopupMargins): number;
                public static BalloonPopupStyle_isTitleWrap(param0: number, param1: BalloonPopupStyle): boolean;
                public constructor();
                public static BalloonPopupStyle_getTitleColor(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_getTitleMargins(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_getLeftMargins(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_getDescriptionMargins(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupMargins_swigGetRawPtr(param0: number, param1: BalloonPopupMargins): number;
                public static BalloonPopupStyle_getDescriptionColor(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_swigGetRawPtr(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupMargins_getTop(param0: number, param1: BalloonPopupMargins): number;
                public static BalloonPopupStyle_swigGetClassName(param0: number, param1: BalloonPopupStyle): string;
                public static BalloonPopupStyle_SWIGSmartPtrUpcast(param0: number): number;
                public static BalloonPopupStyle_getDescriptionFontName(param0: number, param1: BalloonPopupStyle): string;
                public static BalloonPopupStyle_getStrokeWidth(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_getTitleFontSize(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_getLeftColor(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_swigGetDirectorObject(param0: number, param1: BalloonPopupStyle): any;
                public static BalloonPopupStyle_getLeftImage(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupStyle_getStrokeColor(param0: number, param1: BalloonPopupStyle): number;
                public static delete_BalloonPopupMargins(param0: number): void;
                public static BalloonPopupStyle_getButtonMargins(param0: number, param1: BalloonPopupStyle): number;
                public static BalloonPopupMargins_getLeft(param0: number, param1: BalloonPopupMargins): number;
                public static delete_BalloonPopupStyle(param0: number): void;
                public static BalloonPopupStyle_getTitleFontName(param0: number, param1: BalloonPopupStyle): string;
                public static BalloonPopupStyle_isDescriptionWrap(param0: number, param1: BalloonPopupStyle): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BillboardOrientation {
                public static class: java.lang.Class<BillboardOrientation>;
                public static BILLBOARD_ORIENTATION_FACE_CAMERA: BillboardOrientation;
                public static BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND: BillboardOrientation;
                public static BILLBOARD_ORIENTATION_GROUND: BillboardOrientation;
                public swigValue(): number;
                public static valueOf(param0: string): BillboardOrientation;
                public static values(): native.Array<BillboardOrientation>;
                public static swigToEnum(param0: number): BillboardOrientation;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace BillboardOrientation {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BillboardScaling {
                public static class: java.lang.Class<BillboardScaling>;
                public static BILLBOARD_SCALING_WORLD_SIZE: BillboardScaling;
                public static BILLBOARD_SCALING_SCREEN_SIZE: BillboardScaling;
                public static BILLBOARD_SCALING_CONST_SCREEN_SIZE: BillboardScaling;
                public swigValue(): number;
                public static swigToEnum(param0: number): BillboardScaling;
                public static values(): native.Array<BillboardScaling>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                public static valueOf(param0: string): BillboardScaling;
            }
            export namespace BillboardScaling {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BillboardStyle extends Style {
                public static class: java.lang.Class<BillboardStyle>;
                public isHideIfOverlapped(): boolean;
                public getPlacementPriority(): number;
                public finalize(): void;
                public getAttachAnchorPointY(): number;
                public constructor(param0: number, param1: boolean);
                public isScaleWithDPI(): boolean;
                public getVerticalOffset(): number;
                public getAnimationStyle(): AnimationStyle;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public static getCPtr(param0: BillboardStyle): number;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public delete(): void;
                public isCausesOverlap(): boolean;
                public getAttachAnchorPointX(): number;
                public static getCPtr(param0: Style): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BillboardStyle;
                public getHorizontalOffset(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BillboardStyleBuilder extends StyleBuilder {
                public static class: java.lang.Class<BillboardStyleBuilder>;
                public setVerticalOffset(param0: number): void;
                public setAttachAnchorPoint(param0: number, param1: number): void;
                public finalize(): void;
                public isScaleWithDPI(): boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public setHorizontalOffset(param0: number): void;
                public setAnimationStyle(param0: AnimationStyle): void;
                public delete(): void;
                public isCausesOverlap(): boolean;
                public static getCPtr(param0: BillboardStyleBuilder): number;
                public setScaleWithDPI(param0: boolean): void;
                public getAttachAnchorPointX(): number;
                public setAttachAnchorPointY(param0: number): void;
                public getHorizontalOffset(): number;
                public isHideIfOverlapped(): boolean;
                public getPlacementPriority(): number;
                public static getCPtr(param0: StyleBuilder): number;
                public getAttachAnchorPointY(): number;
                public constructor(param0: number, param1: boolean);
                public getVerticalOffset(): number;
                public getAnimationStyle(): AnimationStyle;
                public swigGetClassName(): string;
                public setPlacementPriority(param0: number): void;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public setCausesOverlap(param0: boolean): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BillboardStyleBuilder;
                public setHideIfOverlapped(param0: boolean): void;
                public setAttachAnchorPointX(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BillboardStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BillboardStyleBuilderModuleJNI>;
                public static BillboardStyleBuilder_isScaleWithDPI(param0: number, param1: BillboardStyleBuilder): boolean;
                public static BillboardStyleBuilder_getVerticalOffset(param0: number, param1: BillboardStyleBuilder): number;
                public static BillboardStyleBuilder_isCausesOverlap(param0: number, param1: BillboardStyleBuilder): boolean;
                public constructor();
                public static BillboardStyleBuilder_setScaleWithDPI(param0: number, param1: BillboardStyleBuilder, param2: boolean): void;
                public static BillboardStyleBuilder_setAnimationStyle(param0: number, param1: BillboardStyleBuilder, param2: number, param3: AnimationStyle): void;
                public static BillboardStyleBuilder_setAttachAnchorPoint(param0: number, param1: BillboardStyleBuilder, param2: number, param3: number): void;
                public static BillboardStyleBuilder_swigGetRawPtr(param0: number, param1: BillboardStyleBuilder): number;
                public static BillboardStyleBuilder_getHorizontalOffset(param0: number, param1: BillboardStyleBuilder): number;
                public static BillboardStyleBuilder_getPlacementPriority(param0: number, param1: BillboardStyleBuilder): number;
                public static BillboardStyleBuilder_swigGetDirectorObject(param0: number, param1: BillboardStyleBuilder): any;
                public static BillboardStyleBuilder_swigGetClassName(param0: number, param1: BillboardStyleBuilder): string;
                public static BillboardStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public static BillboardStyleBuilder_setHorizontalOffset(param0: number, param1: BillboardStyleBuilder, param2: number): void;
                public static BillboardStyleBuilder_setAttachAnchorPointX(param0: number, param1: BillboardStyleBuilder, param2: number): void;
                public static delete_BillboardStyleBuilder(param0: number): void;
                public static BillboardStyleBuilder_setCausesOverlap(param0: number, param1: BillboardStyleBuilder, param2: boolean): void;
                public static BillboardStyleBuilder_setAttachAnchorPointY(param0: number, param1: BillboardStyleBuilder, param2: number): void;
                public static BillboardStyleBuilder_setHideIfOverlapped(param0: number, param1: BillboardStyleBuilder, param2: boolean): void;
                public static BillboardStyleBuilder_isHideIfOverlapped(param0: number, param1: BillboardStyleBuilder): boolean;
                public static BillboardStyleBuilder_setPlacementPriority(param0: number, param1: BillboardStyleBuilder, param2: number): void;
                public static BillboardStyleBuilder_getAttachAnchorPointY(param0: number, param1: BillboardStyleBuilder): number;
                public static BillboardStyleBuilder_setVerticalOffset(param0: number, param1: BillboardStyleBuilder, param2: number): void;
                public static BillboardStyleBuilder_getAnimationStyle(param0: number, param1: BillboardStyleBuilder): number;
                public static BillboardStyleBuilder_getAttachAnchorPointX(param0: number, param1: BillboardStyleBuilder): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BillboardStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BillboardStyleModuleJNI>;
                public static delete_BillboardStyle(param0: number): void;
                public static BillboardStyle_getVerticalOffset(param0: number, param1: BillboardStyle): number;
                public static BillboardStyle_swigGetRawPtr(param0: number, param1: BillboardStyle): number;
                public constructor();
                public static BillboardStyle_getPlacementPriority(param0: number, param1: BillboardStyle): number;
                public static BillboardStyle_getAttachAnchorPointX(param0: number, param1: BillboardStyle): number;
                public static BillboardStyle_getAttachAnchorPointY(param0: number, param1: BillboardStyle): number;
                public static BillboardStyle_getAnimationStyle(param0: number, param1: BillboardStyle): number;
                public static BillboardStyle_isCausesOverlap(param0: number, param1: BillboardStyle): boolean;
                public static BillboardStyle_isHideIfOverlapped(param0: number, param1: BillboardStyle): boolean;
                public static BillboardStyle_getHorizontalOffset(param0: number, param1: BillboardStyle): number;
                public static BillboardStyle_SWIGSmartPtrUpcast(param0: number): number;
                public static BillboardStyle_isScaleWithDPI(param0: number, param1: BillboardStyle): boolean;
                public static BillboardStyle_swigGetDirectorObject(param0: number, param1: BillboardStyle): any;
                public static BillboardStyle_swigGetClassName(param0: number, param1: BillboardStyle): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class CartoCSSStyleSet extends java.lang.Object {
                public static class: java.lang.Class<CartoCSSStyleSet>;
                public swigCMemOwn: boolean;
                public getCartoCSS(): string;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: CartoCSSStyleSet): number;
                public hashCode(): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public getAssetPackage(): utils.AssetPackage;
                public constructor(param0: string);
                public constructor(param0: string, param1: utils.AssetPackage);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class CartoCSSStyleSetModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CartoCSSStyleSetModuleJNI>;
                public static new_StringCartoCSSStyleSetMap__SWIG_0(): number;
                public static delete_StringCartoCSSStyleSetMap(param0: number): void;
                public static new_CartoCSSStyleSet__SWIG_0(param0: string): number;
                public static StringCartoCSSStyleSetMap_has_key(param0: number, param1: StringCartoCSSStyleSetMap, param2: string): boolean;
                public static StringCartoCSSStyleSetMap_get_key(param0: number, param1: StringCartoCSSStyleSetMap, param2: number): string;
                public static StringCartoCSSStyleSetMap_get(param0: number, param1: StringCartoCSSStyleSetMap, param2: string): number;
                public static new_CartoCSSStyleSet__SWIG_1(param0: string, param1: number, param2: utils.AssetPackage): number;
                public constructor();
                public static new_StringCartoCSSStyleSetMap__SWIG_1(param0: number, param1: StringCartoCSSStyleSetMap): number;
                public static StringCartoCSSStyleSetMap_clear(param0: number, param1: StringCartoCSSStyleSetMap): void;
                public static delete_CartoCSSStyleSet(param0: number): void;
                public static StringCartoCSSStyleSetMap_del(param0: number, param1: StringCartoCSSStyleSetMap, param2: string): void;
                public static StringCartoCSSStyleSetMap_empty(param0: number, param1: StringCartoCSSStyleSetMap): boolean;
                public static CartoCSSStyleSet_getCartoCSS(param0: number, param1: CartoCSSStyleSet): string;
                public static CartoCSSStyleSet_getAssetPackage(param0: number, param1: CartoCSSStyleSet): number;
                public static CartoCSSStyleSet_swigGetRawPtr(param0: number, param1: CartoCSSStyleSet): number;
                public static StringCartoCSSStyleSetMap_set(param0: number, param1: StringCartoCSSStyleSetMap, param2: string, param3: number, param4: CartoCSSStyleSet): void;
                public static StringCartoCSSStyleSetMap_size(param0: number, param1: StringCartoCSSStyleSetMap): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class CompiledStyleSet extends java.lang.Object {
                public static class: java.lang.Class<CompiledStyleSet>;
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public delete(): void;
                public getStyleAssetName(): string;
                public hashCode(): number;
                public constructor(param0: utils.AssetPackage, param1: string);
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: CompiledStyleSet): number;
                public getAssetPackage(): utils.AssetPackage;
                public getStyleName(): string;
                public constructor(param0: utils.AssetPackage);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class CompiledStyleSetModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CompiledStyleSetModuleJNI>;
                public static delete_CompiledStyleSet(param0: number): void;
                public static new_CompiledStyleSet__SWIG_1(param0: number, param1: utils.AssetPackage, param2: string): number;
                public static CompiledStyleSet_getStyleAssetName(param0: number, param1: CompiledStyleSet): string;
                public static CompiledStyleSet_getStyleName(param0: number, param1: CompiledStyleSet): string;
                public static new_CompiledStyleSet__SWIG_0(param0: number, param1: utils.AssetPackage): number;
                public static CompiledStyleSet_getAssetPackage(param0: number, param1: CompiledStyleSet): number;
                public static CompiledStyleSet_swigGetRawPtr(param0: number, param1: CompiledStyleSet): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class GeometryCollectionStyle extends Style {
                public static class: java.lang.Class<GeometryCollectionStyle>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): GeometryCollectionStyle;
                public static getCPtr(param0: GeometryCollectionStyle): number;
                public getPointStyle(): PointStyle;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getPolygonStyle(): PolygonStyle;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public delete(): void;
                public getLineStyle(): LineStyle;
                public static getCPtr(param0: Style): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class GeometryCollectionStyleBuilder extends StyleBuilder {
                public static class: java.lang.Class<GeometryCollectionStyleBuilder>;
                public setPolygonStyle(param0: PolygonStyle): void;
                public static getCPtr(param0: StyleBuilder): number;
                public setLineStyle(param0: LineStyle): void;
                public getPointStyle(): PointStyle;
                public static getCPtr(param0: GeometryCollectionStyleBuilder): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public swigGetClassName(): string;
                public getPolygonStyle(): PolygonStyle;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): GeometryCollectionStyleBuilder;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public buildStyle(): GeometryCollectionStyle;
                public setPointStyle(param0: PointStyle): void;
                public getLineStyle(): LineStyle;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class GeometryCollectionStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<GeometryCollectionStyleBuilderModuleJNI>;
                public static GeometryCollectionStyleBuilder_getPolygonStyle(param0: number, param1: GeometryCollectionStyleBuilder): number;
                public static new_GeometryCollectionStyleBuilder(): number;
                public static GeometryCollectionStyleBuilder_swigGetDirectorObject(param0: number, param1: GeometryCollectionStyleBuilder): any;
                public static GeometryCollectionStyleBuilder_getLineStyle(param0: number, param1: GeometryCollectionStyleBuilder): number;
                public static GeometryCollectionStyleBuilder_swigGetClassName(param0: number, param1: GeometryCollectionStyleBuilder): string;
                public static GeometryCollectionStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static GeometryCollectionStyleBuilder_setPolygonStyle(param0: number, param1: GeometryCollectionStyleBuilder, param2: number, param3: PolygonStyle): void;
                public static GeometryCollectionStyleBuilder_swigGetRawPtr(param0: number, param1: GeometryCollectionStyleBuilder): number;
                public static GeometryCollectionStyleBuilder_getPointStyle(param0: number, param1: GeometryCollectionStyleBuilder): number;
                public static GeometryCollectionStyleBuilder_setPointStyle(param0: number, param1: GeometryCollectionStyleBuilder, param2: number, param3: PointStyle): void;
                public static GeometryCollectionStyleBuilder_setLineStyle(param0: number, param1: GeometryCollectionStyleBuilder, param2: number, param3: LineStyle): void;
                public static delete_GeometryCollectionStyleBuilder(param0: number): void;
                public static GeometryCollectionStyleBuilder_buildStyle(param0: number, param1: GeometryCollectionStyleBuilder): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class GeometryCollectionStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<GeometryCollectionStyleModuleJNI>;
                public static GeometryCollectionStyle_getPolygonStyle(param0: number, param1: GeometryCollectionStyle): number;
                public static GeometryCollectionStyle_SWIGSmartPtrUpcast(param0: number): number;
                public static GeometryCollectionStyle_getLineStyle(param0: number, param1: GeometryCollectionStyle): number;
                public static delete_GeometryCollectionStyle(param0: number): void;
                public static GeometryCollectionStyle_swigGetDirectorObject(param0: number, param1: GeometryCollectionStyle): any;
                public static GeometryCollectionStyle_swigGetRawPtr(param0: number, param1: GeometryCollectionStyle): number;
                public static GeometryCollectionStyle_getPointStyle(param0: number, param1: GeometryCollectionStyle): number;
                public static GeometryCollectionStyle_swigGetClassName(param0: number, param1: GeometryCollectionStyle): string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LabelStyle extends BillboardStyle {
                public static class: java.lang.Class<LabelStyle>;
                public isFlippable(): boolean;
                public getScalingMode(): BillboardScaling;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: LabelStyle): number;
                public getAnchorPointY(): number;
                public swigGetClassName(): string;
                public getOrientationMode(): BillboardOrientation;
                public swigGetDirectorObject(): any;
                public static getCPtr(param0: BillboardStyle): number;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): LabelStyle;
                public getRenderScale(): number;
                public getAnchorPointX(): number;
                public static getCPtr(param0: Style): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BillboardStyle;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LabelStyleBuilder extends BillboardStyleBuilder {
                public static class: java.lang.Class<LabelStyleBuilder>;
                public setScalingMode(param0: BillboardScaling): void;
                public getScalingMode(): BillboardScaling;
                public finalize(): void;
                public setFlippable(param0: boolean): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public setAnchorPointY(param0: number): void;
                public constructor();
                public delete(): void;
                public setAnchorPoint(param0: number, param1: number): void;
                public static getCPtr(param0: BillboardStyleBuilder): number;
                public getAnchorPointX(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): LabelStyleBuilder;
                public static getCPtr(param0: LabelStyleBuilder): number;
                public isFlippable(): boolean;
                public static getCPtr(param0: StyleBuilder): number;
                public buildStyle(): LabelStyle;
                public constructor(param0: number, param1: boolean);
                public getAnchorPointY(): number;
                public swigGetClassName(): string;
                public getOrientationMode(): BillboardOrientation;
                public setAnchorPointX(param0: number): void;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public setRenderScale(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BillboardStyleBuilder;
                public getRenderScale(): number;
                public setOrientationMode(param0: BillboardOrientation): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LabelStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LabelStyleBuilderModuleJNI>;
                public static LabelStyleBuilder_setAnchorPoint(param0: number, param1: LabelStyleBuilder, param2: number, param3: number): void;
                public static LabelStyleBuilder_swigGetDirectorObject(param0: number, param1: LabelStyleBuilder): any;
                public static LabelStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public static LabelStyleBuilder_setRenderScale(param0: number, param1: LabelStyleBuilder, param2: number): void;
                public static LabelStyleBuilder_buildStyle(param0: number, param1: LabelStyleBuilder): number;
                public static new_LabelStyleBuilder(): number;
                public static LabelStyleBuilder_setScalingMode(param0: number, param1: LabelStyleBuilder, param2: number): void;
                public constructor();
                public static LabelStyleBuilder_isFlippable(param0: number, param1: LabelStyleBuilder): boolean;
                public static LabelStyleBuilder_getScalingMode(param0: number, param1: LabelStyleBuilder): number;
                public static LabelStyleBuilder_setFlippable(param0: number, param1: LabelStyleBuilder, param2: boolean): void;
                public static LabelStyleBuilder_getRenderScale(param0: number, param1: LabelStyleBuilder): number;
                public static LabelStyleBuilder_setAnchorPointX(param0: number, param1: LabelStyleBuilder, param2: number): void;
                public static LabelStyleBuilder_setAnchorPointY(param0: number, param1: LabelStyleBuilder, param2: number): void;
                public static LabelStyleBuilder_swigGetRawPtr(param0: number, param1: LabelStyleBuilder): number;
                public static LabelStyleBuilder_swigGetClassName(param0: number, param1: LabelStyleBuilder): string;
                public static delete_LabelStyleBuilder(param0: number): void;
                public static LabelStyleBuilder_getAnchorPointY(param0: number, param1: LabelStyleBuilder): number;
                public static LabelStyleBuilder_getAnchorPointX(param0: number, param1: LabelStyleBuilder): number;
                public static LabelStyleBuilder_getOrientationMode(param0: number, param1: LabelStyleBuilder): number;
                public static LabelStyleBuilder_setOrientationMode(param0: number, param1: LabelStyleBuilder, param2: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LabelStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LabelStyleModuleJNI>;
                public static LabelStyle_getRenderScale(param0: number, param1: LabelStyle): number;
                public static LabelStyle_isFlippable(param0: number, param1: LabelStyle): boolean;
                public static LabelStyle_swigGetClassName(param0: number, param1: LabelStyle): string;
                public static LabelStyle_getScalingMode(param0: number, param1: LabelStyle): number;
                public static LabelStyle_getAnchorPointX(param0: number, param1: LabelStyle): number;
                public static LabelStyle_SWIGSmartPtrUpcast(param0: number): number;
                public static LabelStyle_getAnchorPointY(param0: number, param1: LabelStyle): number;
                public static LabelStyle_getOrientationMode(param0: number, param1: LabelStyle): number;
                public static delete_LabelStyle(param0: number): void;
                public static LabelStyle_swigGetRawPtr(param0: number, param1: LabelStyle): number;
                public static LabelStyle_swigGetDirectorObject(param0: number, param1: LabelStyle): any;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LineEndType {
                public static class: java.lang.Class<LineEndType>;
                public static LINE_END_TYPE_NONE: LineEndType;
                public static LINE_END_TYPE_SQUARE: LineEndType;
                public static LINE_END_TYPE_ROUND: LineEndType;
                public swigValue(): number;
                public static valueOf(param0: string): LineEndType;
                public static values(): native.Array<LineEndType>;
                public static swigToEnum(param0: number): LineEndType;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace LineEndType {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LineJoinType {
                public static class: java.lang.Class<LineJoinType>;
                public static LINE_JOIN_TYPE_NONE: LineJoinType;
                public static LINE_JOIN_TYPE_MITER: LineJoinType;
                public static LINE_JOIN_TYPE_BEVEL: LineJoinType;
                public static LINE_JOIN_TYPE_ROUND: LineJoinType;
                public swigValue(): number;
                public static swigToEnum(param0: number): LineJoinType;
                public static values(): native.Array<LineJoinType>;
                public static valueOf(param0: string): LineJoinType;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace LineJoinType {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LineStyle extends Style {
                public static class: java.lang.Class<LineStyle>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): LineStyle;
                public getClickWidth(): number;
                public getLineJoinType(): LineJoinType;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public getBitmap(): graphics.Bitmap;
                public swigGetRawPtr(): number;
                public getWidth(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public static getCPtr(param0: LineStyle): number;
                public delete(): void;
                public getLineEndType(): LineEndType;
                public getStretchFactor(): number;
                public static getCPtr(param0: Style): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LineStyleBuilder extends StyleBuilder {
                public static class: java.lang.Class<LineStyleBuilder>;
                public setBitmap(param0: graphics.Bitmap): void;
                public static getCPtr(param0: StyleBuilder): number;
                public getClickWidth(): number;
                public getLineJoinType(): LineJoinType;
                public finalize(): void;
                public setLineEndType(param0: LineEndType): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): LineStyleBuilder;
                public setStretchFactor(param0: number): void;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public getBitmap(): graphics.Bitmap;
                public setWidth(param0: number): void;
                public swigGetRawPtr(): number;
                public getWidth(): number;
                public delete(): void;
                public buildStyle(): LineStyle;
                public setLineJoinType(param0: LineJoinType): void;
                public setClickWidth(param0: number): void;
                public getLineEndType(): LineEndType;
                public getStretchFactor(): number;
                public static getCPtr(param0: LineStyleBuilder): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LineStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LineStyleBuilderModuleJNI>;
                public static LineStyleBuilder_setWidth(param0: number, param1: LineStyleBuilder, param2: number): void;
                public static LineStyleBuilder_setBitmap(param0: number, param1: LineStyleBuilder, param2: number, param3: graphics.Bitmap): void;
                public static LineStyleBuilder_getLineEndType(param0: number, param1: LineStyleBuilder): number;
                public static LineStyleBuilder_setStretchFactor(param0: number, param1: LineStyleBuilder, param2: number): void;
                public constructor();
                public static LineStyleBuilder_getClickWidth(param0: number, param1: LineStyleBuilder): number;
                public static LineStyleBuilder_getStretchFactor(param0: number, param1: LineStyleBuilder): number;
                public static LineStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public static LineStyleBuilder_swigGetDirectorObject(param0: number, param1: LineStyleBuilder): any;
                public static LineStyleBuilder_buildStyle(param0: number, param1: LineStyleBuilder): number;
                public static LineStyleBuilder_swigGetRawPtr(param0: number, param1: LineStyleBuilder): number;
                public static LineStyleBuilder_setClickWidth(param0: number, param1: LineStyleBuilder, param2: number): void;
                public static LineStyleBuilder_setLineEndType(param0: number, param1: LineStyleBuilder, param2: number): void;
                public static LineStyleBuilder_getBitmap(param0: number, param1: LineStyleBuilder): number;
                public static LineStyleBuilder_setLineJoinType(param0: number, param1: LineStyleBuilder, param2: number): void;
                public static delete_LineStyleBuilder(param0: number): void;
                public static LineStyleBuilder_getLineJoinType(param0: number, param1: LineStyleBuilder): number;
                public static new_LineStyleBuilder(): number;
                public static LineStyleBuilder_getWidth(param0: number, param1: LineStyleBuilder): number;
                public static LineStyleBuilder_swigGetClassName(param0: number, param1: LineStyleBuilder): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LineStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LineStyleModuleJNI>;
                public static LineStyle_SWIGSmartPtrUpcast(param0: number): number;
                public static LineStyle_swigGetDirectorObject(param0: number, param1: LineStyle): any;
                public static LineStyle_getClickWidth(param0: number, param1: LineStyle): number;
                public static LineStyle_swigGetRawPtr(param0: number, param1: LineStyle): number;
                public static LineStyle_swigGetClassName(param0: number, param1: LineStyle): string;
                public static LineStyle_getStretchFactor(param0: number, param1: LineStyle): number;
                public static delete_LineStyle(param0: number): void;
                public static LineStyle_getLineEndType(param0: number, param1: LineStyle): number;
                public static LineStyle_getBitmap(param0: number, param1: LineStyle): number;
                public static LineStyle_getLineJoinType(param0: number, param1: LineStyle): number;
                public static LineStyle_getWidth(param0: number, param1: LineStyle): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class MarkerStyle extends BillboardStyle {
                public static class: java.lang.Class<MarkerStyle>;
                public getScalingMode(): BillboardScaling;
                public finalize(): void;
                public getClickSize(): number;
                public constructor(param0: number, param1: boolean);
                public getAnchorPointY(): number;
                public swigGetClassName(): string;
                public getOrientationMode(): BillboardOrientation;
                public swigGetDirectorObject(): any;
                public getBitmap(): graphics.Bitmap;
                public static getCPtr(param0: BillboardStyle): number;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public delete(): void;
                public getSize(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MarkerStyle;
                public getAnchorPointX(): number;
                public static getCPtr(param0: MarkerStyle): number;
                public static getCPtr(param0: Style): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BillboardStyle;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class MarkerStyleBuilder extends BillboardStyleBuilder {
                public static class: java.lang.Class<MarkerStyleBuilder>;
                public setScalingMode(param0: BillboardScaling): void;
                public getScalingMode(): BillboardScaling;
                public finalize(): void;
                public static getCPtr(param0: MarkerStyleBuilder): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public setAnchorPointY(param0: number): void;
                public setSize(param0: number): void;
                public constructor();
                public delete(): void;
                public setClickSize(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MarkerStyleBuilder;
                public getSize(): number;
                public setAnchorPoint(param0: number, param1: number): void;
                public static getCPtr(param0: BillboardStyleBuilder): number;
                public getAnchorPointX(): number;
                public setBitmap(param0: graphics.Bitmap): void;
                public static getCPtr(param0: StyleBuilder): number;
                public getClickSize(): number;
                public constructor(param0: number, param1: boolean);
                public getAnchorPointY(): number;
                public swigGetClassName(): string;
                public getOrientationMode(): BillboardOrientation;
                public setAnchorPointX(param0: number): void;
                public swigGetDirectorObject(): any;
                public getBitmap(): graphics.Bitmap;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BillboardStyleBuilder;
                public setOrientationMode(param0: BillboardOrientation): void;
                public buildStyle(): MarkerStyle;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class MarkerStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MarkerStyleBuilderModuleJNI>;
                public static MarkerStyleBuilder_setAnchorPointY(param0: number, param1: MarkerStyleBuilder, param2: number): void;
                public static MarkerStyleBuilder_setClickSize(param0: number, param1: MarkerStyleBuilder, param2: number): void;
                public static delete_MarkerStyleBuilder(param0: number): void;
                public static MarkerStyleBuilder_swigGetRawPtr(param0: number, param1: MarkerStyleBuilder): number;
                public static MarkerStyleBuilder_getOrientationMode(param0: number, param1: MarkerStyleBuilder): number;
                public static MarkerStyleBuilder_setOrientationMode(param0: number, param1: MarkerStyleBuilder, param2: number): void;
                public static MarkerStyleBuilder_getSize(param0: number, param1: MarkerStyleBuilder): number;
                public static MarkerStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public static MarkerStyleBuilder_setScalingMode(param0: number, param1: MarkerStyleBuilder, param2: number): void;
                public static new_MarkerStyleBuilder(): number;
                public static MarkerStyleBuilder_buildStyle(param0: number, param1: MarkerStyleBuilder): number;
                public constructor();
                public static MarkerStyleBuilder_setBitmap(param0: number, param1: MarkerStyleBuilder, param2: number, param3: graphics.Bitmap): void;
                public static MarkerStyleBuilder_swigGetDirectorObject(param0: number, param1: MarkerStyleBuilder): any;
                public static MarkerStyleBuilder_getAnchorPointX(param0: number, param1: MarkerStyleBuilder): number;
                public static MarkerStyleBuilder_setAnchorPointX(param0: number, param1: MarkerStyleBuilder, param2: number): void;
                public static MarkerStyleBuilder_setSize(param0: number, param1: MarkerStyleBuilder, param2: number): void;
                public static MarkerStyleBuilder_swigGetClassName(param0: number, param1: MarkerStyleBuilder): string;
                public static MarkerStyleBuilder_getScalingMode(param0: number, param1: MarkerStyleBuilder): number;
                public static MarkerStyleBuilder_setAnchorPoint(param0: number, param1: MarkerStyleBuilder, param2: number, param3: number): void;
                public static MarkerStyleBuilder_getAnchorPointY(param0: number, param1: MarkerStyleBuilder): number;
                public static MarkerStyleBuilder_getBitmap(param0: number, param1: MarkerStyleBuilder): number;
                public static MarkerStyleBuilder_getClickSize(param0: number, param1: MarkerStyleBuilder): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class MarkerStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MarkerStyleModuleJNI>;
                public static MarkerStyle_swigGetClassName(param0: number, param1: MarkerStyle): string;
                public static MarkerStyle_getBitmap(param0: number, param1: MarkerStyle): number;
                public static MarkerStyle_getScalingMode(param0: number, param1: MarkerStyle): number;
                public static MarkerStyle_getAnchorPointY(param0: number, param1: MarkerStyle): number;
                public static MarkerStyle_SWIGSmartPtrUpcast(param0: number): number;
                public static MarkerStyle_getAnchorPointX(param0: number, param1: MarkerStyle): number;
                public static MarkerStyle_getClickSize(param0: number, param1: MarkerStyle): number;
                public constructor();
                public static MarkerStyle_swigGetDirectorObject(param0: number, param1: MarkerStyle): any;
                public static delete_MarkerStyle(param0: number): void;
                public static MarkerStyle_getOrientationMode(param0: number, param1: MarkerStyle): number;
                public static MarkerStyle_getSize(param0: number, param1: MarkerStyle): number;
                public static MarkerStyle_swigGetRawPtr(param0: number, param1: MarkerStyle): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class NMLModelStyle extends Style {
                public static class: java.lang.Class<NMLModelStyle>;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): NMLModelStyle;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: Style): number;
                public static getCPtr(param0: NMLModelStyle): number;
                public swigGetDirectorObject(): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class NMLModelStyleBuilder extends StyleBuilder {
                public static class: java.lang.Class<NMLModelStyleBuilder>;
                public getModelAsset(): core.BinaryData;
                public static getCPtr(param0: StyleBuilder): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public swigGetClassName(): string;
                public setModelAsset(param0: core.BinaryData): void;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public buildStyle(): NMLModelStyle;
                public static getCPtr(param0: NMLModelStyleBuilder): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): NMLModelStyleBuilder;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class NMLModelStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<NMLModelStyleBuilderModuleJNI>;
                public static new_NMLModelStyleBuilder(): number;
                public static NMLModelStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public static NMLModelStyleBuilder_setModelAsset(param0: number, param1: NMLModelStyleBuilder, param2: number, param3: core.BinaryData): void;
                public static NMLModelStyleBuilder_buildStyle(param0: number, param1: NMLModelStyleBuilder): number;
                public static delete_NMLModelStyleBuilder(param0: number): void;
                public static NMLModelStyleBuilder_swigGetClassName(param0: number, param1: NMLModelStyleBuilder): string;
                public static NMLModelStyleBuilder_swigGetRawPtr(param0: number, param1: NMLModelStyleBuilder): number;
                public static NMLModelStyleBuilder_swigGetDirectorObject(param0: number, param1: NMLModelStyleBuilder): any;
                public constructor();
                public static NMLModelStyleBuilder_getModelAsset(param0: number, param1: NMLModelStyleBuilder): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class NMLModelStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<NMLModelStyleModuleJNI>;
                public static NMLModelStyle_swigGetDirectorObject(param0: number, param1: NMLModelStyle): any;
                public static NMLModelStyle_swigGetClassName(param0: number, param1: NMLModelStyle): string;
                public static delete_NMLModelStyle(param0: number): void;
                public static NMLModelStyle_swigGetRawPtr(param0: number, param1: NMLModelStyle): number;
                public static NMLModelStyle_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PointStyle extends Style {
                public static class: java.lang.Class<PointStyle>;
                public static getCPtr(param0: PointStyle): number;
                public finalize(): void;
                public getClickSize(): number;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public getBitmap(): graphics.Bitmap;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public delete(): void;
                public getSize(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PointStyle;
                public static getCPtr(param0: Style): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PointStyleBuilder extends StyleBuilder {
                public static class: java.lang.Class<PointStyleBuilder>;
                public setBitmap(param0: graphics.Bitmap): void;
                public static getCPtr(param0: StyleBuilder): number;
                public finalize(): void;
                public getClickSize(): number;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public swigGetClassName(): string;
                public setSize(param0: number): void;
                public static getCPtr(param0: PointStyleBuilder): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public getBitmap(): graphics.Bitmap;
                public buildStyle(): PointStyle;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PointStyleBuilder;
                public setClickSize(param0: number): void;
                public getSize(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PointStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PointStyleBuilderModuleJNI>;
                public static new_PointStyleBuilder(): number;
                public static PointStyleBuilder_setClickSize(param0: number, param1: PointStyleBuilder, param2: number): void;
                public constructor();
                public static delete_PointStyleBuilder(param0: number): void;
                public static PointStyleBuilder_buildStyle(param0: number, param1: PointStyleBuilder): number;
                public static PointStyleBuilder_setSize(param0: number, param1: PointStyleBuilder, param2: number): void;
                public static PointStyleBuilder_swigGetDirectorObject(param0: number, param1: PointStyleBuilder): any;
                public static PointStyleBuilder_swigGetRawPtr(param0: number, param1: PointStyleBuilder): number;
                public static PointStyleBuilder_getSize(param0: number, param1: PointStyleBuilder): number;
                public static PointStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public static PointStyleBuilder_setBitmap(param0: number, param1: PointStyleBuilder, param2: number, param3: graphics.Bitmap): void;
                public static PointStyleBuilder_swigGetClassName(param0: number, param1: PointStyleBuilder): string;
                public static PointStyleBuilder_getBitmap(param0: number, param1: PointStyleBuilder): number;
                public static PointStyleBuilder_getClickSize(param0: number, param1: PointStyleBuilder): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PointStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PointStyleModuleJNI>;
                public static PointStyle_swigGetRawPtr(param0: number, param1: PointStyle): number;
                public static delete_PointStyle(param0: number): void;
                public static PointStyle_getClickSize(param0: number, param1: PointStyle): number;
                public static PointStyle_swigGetDirectorObject(param0: number, param1: PointStyle): any;
                public static PointStyle_SWIGSmartPtrUpcast(param0: number): number;
                public static PointStyle_getBitmap(param0: number, param1: PointStyle): number;
                public static PointStyle_swigGetClassName(param0: number, param1: PointStyle): string;
                public static PointStyle_getSize(param0: number, param1: PointStyle): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class Polygon3DStyle extends Style {
                public static class: java.lang.Class<Polygon3DStyle>;
                public getSideColor(): graphics.Color;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: Polygon3DStyle): number;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Polygon3DStyle;
                public static getCPtr(param0: Style): number;
                public swigGetDirectorObject(): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class Polygon3DStyleBuilder extends StyleBuilder {
                public static class: java.lang.Class<Polygon3DStyleBuilder>;
                public setSideColor(param0: graphics.Color): void;
                public getSideColor(): graphics.Color;
                public static getCPtr(param0: Polygon3DStyleBuilder): number;
                public buildStyle(): Polygon3DStyle;
                public static getCPtr(param0: StyleBuilder): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Polygon3DStyleBuilder;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class Polygon3DStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<Polygon3DStyleBuilderModuleJNI>;
                public static Polygon3DStyleBuilder_swigGetClassName(param0: number, param1: Polygon3DStyleBuilder): string;
                public static Polygon3DStyleBuilder_buildStyle(param0: number, param1: Polygon3DStyleBuilder): number;
                public static new_Polygon3DStyleBuilder(): number;
                public static Polygon3DStyleBuilder_getSideColor(param0: number, param1: Polygon3DStyleBuilder): number;
                public static Polygon3DStyleBuilder_setSideColor(param0: number, param1: Polygon3DStyleBuilder, param2: number, param3: graphics.Color): void;
                public static Polygon3DStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public static delete_Polygon3DStyleBuilder(param0: number): void;
                public static Polygon3DStyleBuilder_swigGetRawPtr(param0: number, param1: Polygon3DStyleBuilder): number;
                public static Polygon3DStyleBuilder_swigGetDirectorObject(param0: number, param1: Polygon3DStyleBuilder): any;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class Polygon3DStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<Polygon3DStyleModuleJNI>;
                public static delete_Polygon3DStyle(param0: number): void;
                public static Polygon3DStyle_getSideColor(param0: number, param1: Polygon3DStyle): number;
                public static Polygon3DStyle_swigGetRawPtr(param0: number, param1: Polygon3DStyle): number;
                public static Polygon3DStyle_SWIGSmartPtrUpcast(param0: number): number;
                public static Polygon3DStyle_swigGetClassName(param0: number, param1: Polygon3DStyle): string;
                public static Polygon3DStyle_swigGetDirectorObject(param0: number, param1: Polygon3DStyle): any;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PolygonStyle extends Style {
                public static class: java.lang.Class<PolygonStyle>;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PolygonStyle;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public static getCPtr(param0: PolygonStyle): number;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getLineStyle(): LineStyle;
                public static getCPtr(param0: Style): number;
                public swigGetDirectorObject(): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PolygonStyleBuilder extends StyleBuilder {
                public static class: java.lang.Class<PolygonStyleBuilder>;
                public static getCPtr(param0: StyleBuilder): number;
                public setLineStyle(param0: LineStyle): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public swigGetClassName(): string;
                public buildStyle(): PolygonStyle;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: PolygonStyleBuilder): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PolygonStyleBuilder;
                public getLineStyle(): LineStyle;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PolygonStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PolygonStyleBuilderModuleJNI>;
                public static PolygonStyleBuilder_swigGetClassName(param0: number, param1: PolygonStyleBuilder): string;
                public static PolygonStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public static PolygonStyleBuilder_swigGetDirectorObject(param0: number, param1: PolygonStyleBuilder): any;
                public static delete_PolygonStyleBuilder(param0: number): void;
                public static new_PolygonStyleBuilder(): number;
                public static PolygonStyleBuilder_buildStyle(param0: number, param1: PolygonStyleBuilder): number;
                public static PolygonStyleBuilder_swigGetRawPtr(param0: number, param1: PolygonStyleBuilder): number;
                public static PolygonStyleBuilder_setLineStyle(param0: number, param1: PolygonStyleBuilder, param2: number, param3: LineStyle): void;
                public constructor();
                public static PolygonStyleBuilder_getLineStyle(param0: number, param1: PolygonStyleBuilder): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PolygonStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PolygonStyleModuleJNI>;
                public static delete_PolygonStyle(param0: number): void;
                public static PolygonStyle_SWIGSmartPtrUpcast(param0: number): number;
                public static PolygonStyle_swigGetRawPtr(param0: number, param1: PolygonStyle): number;
                public static PolygonStyle_swigGetClassName(param0: number, param1: PolygonStyle): string;
                public static PolygonStyle_swigGetDirectorObject(param0: number, param1: PolygonStyle): any;
                public static PolygonStyle_getLineStyle(param0: number, param1: PolygonStyle): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PopupStyle extends BillboardStyle {
                public static class: java.lang.Class<PopupStyle>;
                public static getCPtr(param0: BillboardStyle): number;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: PopupStyle): number;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PopupStyle;
                public static getCPtr(param0: Style): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BillboardStyle;
                public swigGetDirectorObject(): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PopupStyleBuilder extends BillboardStyleBuilder {
                public static class: java.lang.Class<PopupStyleBuilder>;
                public static getCPtr(param0: StyleBuilder): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public swigGetClassName(): string;
                public buildStyle(): PopupStyle;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: BillboardStyleBuilder): number;
                public static getCPtr(param0: PopupStyleBuilder): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BillboardStyleBuilder;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): PopupStyleBuilder;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PopupStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PopupStyleBuilderModuleJNI>;
                public static PopupStyleBuilder_buildStyle(param0: number, param1: PopupStyleBuilder): number;
                public static new_PopupStyleBuilder(): number;
                public static PopupStyleBuilder_swigGetRawPtr(param0: number, param1: PopupStyleBuilder): number;
                public static PopupStyleBuilder_swigGetDirectorObject(param0: number, param1: PopupStyleBuilder): any;
                public static PopupStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static delete_PopupStyleBuilder(param0: number): void;
                public static PopupStyleBuilder_swigGetClassName(param0: number, param1: PopupStyleBuilder): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PopupStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PopupStyleModuleJNI>;
                public static delete_PopupStyle(param0: number): void;
                public static PopupStyle_swigGetClassName(param0: number, param1: PopupStyle): string;
                public static PopupStyle_swigGetDirectorObject(param0: number, param1: PopupStyle): any;
                public static PopupStyle_swigGetRawPtr(param0: number, param1: PopupStyle): number;
                public constructor();
                public static PopupStyle_SWIGSmartPtrUpcast(param0: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class StringCartoCSSStyleSetMap extends java.lang.Object {
                public static class: java.lang.Class<StringCartoCSSStyleSetMap>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: StringCartoCSSStyleSetMap): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public del(param0: string): void;
                public constructor();
                public size(): number;
                public get_key(param0: number): string;
                public delete(): void;
                public get(param0: string): CartoCSSStyleSet;
                public set(param0: string, param1: CartoCSSStyleSet): void;
                public constructor(param0: StringCartoCSSStyleSetMap);
                public clear(): void;
                public has_key(param0: string): boolean;
                public empty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class Style extends java.lang.Object {
                public static class: java.lang.Class<Style>;
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public delete(): void;
                public hashCode(): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public getColor(): graphics.Color;
                public swigGetClassName(): string;
                public static getCPtr(param0: Style): number;
                public swigGetDirectorObject(): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class StyleBuilder extends java.lang.Object {
                public static class: java.lang.Class<StyleBuilder>;
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: StyleBuilder): number;
                public delete(): void;
                public hashCode(): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public getColor(): graphics.Color;
                public setColor(param0: graphics.Color): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class StyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<StyleBuilderModuleJNI>;
                public static StyleBuilder_swigGetDirectorObject(param0: number, param1: StyleBuilder): any;
                public static delete_StyleBuilder(param0: number): void;
                public static StyleBuilder_getColor(param0: number, param1: StyleBuilder): number;
                public static StyleBuilder_swigGetClassName(param0: number, param1: StyleBuilder): string;
                public static StyleBuilder_swigGetRawPtr(param0: number, param1: StyleBuilder): number;
                public static StyleBuilder_setColor(param0: number, param1: StyleBuilder, param2: number, param3: graphics.Color): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class StyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<StyleModuleJNI>;
                public static Style_getColor(param0: number, param1: Style): number;
                public static Style_swigGetRawPtr(param0: number, param1: Style): number;
                public static delete_Style(param0: number): void;
                public constructor();
                public static Style_swigGetClassName(param0: number, param1: Style): string;
                public static Style_swigGetDirectorObject(param0: number, param1: Style): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class StyleSelectorBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<StyleSelectorBuilderModuleJNI>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class StyleSelectorModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<StyleSelectorModuleJNI>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class TextMargins extends java.lang.Object {
                public static class: java.lang.Class<TextMargins>;
                public swigCMemOwn: boolean;
                public getTop(): number;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: TextMargins): number;
                public delete(): void;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public getLeft(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getBottom(): number;
                public getRight(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class TextStyle extends LabelStyle {
                public static class: java.lang.Class<TextStyle>;
                public getStrokeWidth(): number;
                public finalize(): void;
                public isBreakLines(): boolean;
                public getTextField(): string;
                public static getCPtr(param0: BillboardStyle): number;
                public getFontColor(): graphics.Color;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Style;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BillboardStyle;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TextStyle;
                public getBorderColor(): graphics.Color;
                public getBackgroundColor(): graphics.Color;
                public constructor(param0: number, param1: boolean);
                public getFontName(): string;
                public static getCPtr(param0: LabelStyle): number;
                public static getCPtr(param0: TextStyle): number;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public getFontSize(): number;
                public getTextMargins(): TextMargins;
                public getBorderWidth(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): LabelStyle;
                public static getCPtr(param0: Style): number;
                public getStrokeColor(): graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class TextStyleBuilder extends LabelStyleBuilder {
                public static class: java.lang.Class<TextStyleBuilder>;
                public getStrokeWidth(): number;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): StyleBuilder;
                public isBreakLines(): boolean;
                public getTextField(): string;
                public constructor();
                public setBreakLines(param0: boolean): void;
                public setTextField(param0: string): void;
                public setStrokeColor(param0: graphics.Color): void;
                public delete(): void;
                public static getCPtr(param0: BillboardStyleBuilder): number;
                public setFontSize(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): LabelStyleBuilder;
                public static getCPtr(param0: LabelStyleBuilder): number;
                public setTextMargins(param0: TextMargins): void;
                public setStrokeWidth(param0: number): void;
                public getBorderColor(): graphics.Color;
                public static getCPtr(param0: StyleBuilder): number;
                public static getCPtr(param0: TextStyleBuilder): number;
                public buildStyle(): LabelStyle;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TextStyleBuilder;
                public getBackgroundColor(): graphics.Color;
                public constructor(param0: number, param1: boolean);
                public getFontName(): string;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public setBorderColor(param0: graphics.Color): void;
                public swigGetRawPtr(): number;
                public getFontSize(): number;
                public setFontName(param0: string): void;
                public getTextMargins(): TextMargins;
                public getBorderWidth(): number;
                public setBackgroundColor(param0: graphics.Color): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BillboardStyleBuilder;
                public setBorderWidth(param0: number): void;
                public buildStyle(): TextStyle;
                public getStrokeColor(): graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class TextStyleBuilderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TextStyleBuilderModuleJNI>;
                public static TextStyleBuilder_setFontSize(param0: number, param1: TextStyleBuilder, param2: number): void;
                public static TextStyleBuilder_setBackgroundColor(param0: number, param1: TextStyleBuilder, param2: number, param3: graphics.Color): void;
                public static TextStyleBuilder_getFontName(param0: number, param1: TextStyleBuilder): string;
                public static TextStyleBuilder_setStrokeWidth(param0: number, param1: TextStyleBuilder, param2: number): void;
                public static TextStyleBuilder_swigGetClassName(param0: number, param1: TextStyleBuilder): string;
                public static TextStyleBuilder_setTextMargins(param0: number, param1: TextStyleBuilder, param2: number, param3: TextMargins): void;
                public constructor();
                public static TextStyleBuilder_swigGetDirectorObject(param0: number, param1: TextStyleBuilder): any;
                public static new_TextStyleBuilder(): number;
                public static TextStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
                public static TextStyleBuilder_getTextField(param0: number, param1: TextStyleBuilder): string;
                public static TextStyleBuilder_getBorderWidth(param0: number, param1: TextStyleBuilder): number;
                public static TextStyleBuilder_buildStyle(param0: number, param1: TextStyleBuilder): number;
                public static delete_TextStyleBuilder(param0: number): void;
                public static TextStyleBuilder_getFontSize(param0: number, param1: TextStyleBuilder): number;
                public static TextStyleBuilder_setBreakLines(param0: number, param1: TextStyleBuilder, param2: boolean): void;
                public static TextStyleBuilder_setBorderWidth(param0: number, param1: TextStyleBuilder, param2: number): void;
                public static TextStyleBuilder_setFontName(param0: number, param1: TextStyleBuilder, param2: string): void;
                public static TextStyleBuilder_getStrokeWidth(param0: number, param1: TextStyleBuilder): number;
                public static TextStyleBuilder_setTextField(param0: number, param1: TextStyleBuilder, param2: string): void;
                public static TextStyleBuilder_getTextMargins(param0: number, param1: TextStyleBuilder): number;
                public static TextStyleBuilder_isBreakLines(param0: number, param1: TextStyleBuilder): boolean;
                public static TextStyleBuilder_getBackgroundColor(param0: number, param1: TextStyleBuilder): number;
                public static TextStyleBuilder_swigGetRawPtr(param0: number, param1: TextStyleBuilder): number;
                public static TextStyleBuilder_getBorderColor(param0: number, param1: TextStyleBuilder): number;
                public static TextStyleBuilder_getStrokeColor(param0: number, param1: TextStyleBuilder): number;
                public static TextStyleBuilder_setStrokeColor(param0: number, param1: TextStyleBuilder, param2: number, param3: graphics.Color): void;
                public static TextStyleBuilder_setBorderColor(param0: number, param1: TextStyleBuilder, param2: number, param3: graphics.Color): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class TextStyleModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TextStyleModuleJNI>;
                public static TextStyle_getFontSize(param0: number, param1: TextStyle): number;
                public static TextStyle_getBorderWidth(param0: number, param1: TextStyle): number;
                public static delete_TextStyle(param0: number): void;
                public static TextStyle_getTextMargins(param0: number, param1: TextStyle): number;
                public static TextStyle_swigGetRawPtr(param0: number, param1: TextStyle): number;
                public static new_TextMargins(param0: number, param1: number, param2: number, param3: number): number;
                public static TextStyle_isBreakLines(param0: number, param1: TextStyle): boolean;
                public static TextMargins_getLeft(param0: number, param1: TextMargins): number;
                public static TextStyle_getStrokeWidth(param0: number, param1: TextStyle): number;
                public static TextMargins_getBottom(param0: number, param1: TextMargins): number;
                public constructor();
                public static TextStyle_getFontName(param0: number, param1: TextStyle): string;
                public static TextStyle_swigGetClassName(param0: number, param1: TextStyle): string;
                public static TextStyle_getBorderColor(param0: number, param1: TextStyle): number;
                public static TextMargins_getTop(param0: number, param1: TextMargins): number;
                public static TextStyle_getTextField(param0: number, param1: TextStyle): string;
                public static TextStyle_getBackgroundColor(param0: number, param1: TextStyle): number;
                public static TextStyle_swigGetDirectorObject(param0: number, param1: TextStyle): any;
                public static delete_TextMargins(param0: number): void;
                public static TextStyle_SWIGSmartPtrUpcast(param0: number): number;
                public static TextStyle_getFontColor(param0: number, param1: TextStyle): number;
                public static TextMargins_getRight(param0: number, param1: TextMargins): number;
                public static TextMargins_swigGetRawPtr(param0: number, param1: TextMargins): number;
                public static TextStyle_getStrokeColor(param0: number, param1: TextStyle): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class BalloonPopupButtonClickInfo extends java.lang.Object {
                public static class: java.lang.Class<BalloonPopupButtonClickInfo>;
                public swigCMemOwn: boolean;
                public getButton(): vectorelements.BalloonPopupButton;
                public getClickType(): ClickType;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: BalloonPopupButtonClickInfo): number;
                public hashCode(): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public getVectorElement(): vectorelements.VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class BalloonPopupButtonClickInfoModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BalloonPopupButtonClickInfoModuleJNI>;
                public static BalloonPopupButtonClickInfo_getClickType(param0: number, param1: BalloonPopupButtonClickInfo): number;
                public static BalloonPopupButtonClickInfo_getButton(param0: number, param1: BalloonPopupButtonClickInfo): number;
                public static BalloonPopupButtonClickInfo_getVectorElement(param0: number, param1: BalloonPopupButtonClickInfo): number;
                public static BalloonPopupButtonClickInfo_swigGetRawPtr(param0: number, param1: BalloonPopupButtonClickInfo): number;
                public constructor();
                public static delete_BalloonPopupButtonClickInfo(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class BaseMapView extends java.lang.Object {
                public static class: java.lang.Class<BaseMapView>;
                public swigCMemOwn: boolean;
                public onSurfaceCreated(): void;
                public getZoom(): number;
                public setZoom(param0: number, param1: number): void;
                public onSurfaceDestroyed(): void;
                public finalize(): void;
                public finishRendering(): void;
                public mapToScreen(param0: core.MapPos): core.ScreenPos;
                public onWheelEvent(param0: number, param1: number, param2: number): void;
                public static getCPtr(param0: BaseMapView): number;
                public onInputEvent(param0: number, param1: number, param2: number, param3: number, param4: number): void;
                public getRedrawRequestListener(): renderers.RedrawRequestListener;
                public constructor();
                public setFocusPos(param0: core.MapPos, param1: number): void;
                public cancelAllTasks(): void;
                public delete(): void;
                public setTilt(param0: number, param1: number): void;
                public clearPreloadingCaches(): void;
                public clearAllCaches(): void;
                public static getSDKVersion(): string;
                public setRotation(param0: number, param1: number): void;
                public tilt(param0: number, param1: number): void;
                public getLayers(): components.Layers;
                public setMapEventListener(param0: MapEventListener): void;
                public zoom(param0: number, param1: number): void;
                public pan(param0: core.MapVec, param1: number): void;
                public moveToFitBounds(param0: core.MapBounds, param1: core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
                public rotate(param0: number, param1: number): void;
                public constructor(param0: number, param1: boolean);
                public setRotation(param0: number, param1: core.MapPos, param2: number): void;
                public zoom(param0: number, param1: core.MapPos, param2: number): void;
                public moveToFitBounds(param0: core.MapBounds, param1: core.ScreenBounds, param2: boolean, param3: number): void;
                public onSurfaceChanged(param0: number, param1: number): void;
                public setZoom(param0: number, param1: core.MapPos, param2: number): void;
                public getMapEventListener(): MapEventListener;
                public getRotation(): number;
                public rotate(param0: number, param1: core.MapPos, param2: number): void;
                public getFocusPos(): core.MapPos;
                public getTilt(): number;
                public screenToMap(param0: core.ScreenPos): core.MapPos;
                public static registerLicense(param0: string, param1: components.LicenseManagerListener): boolean;
                public getOptions(): components.Options;
                public onDrawFrame(): void;
                public getMapRenderer(): renderers.MapRenderer;
                public setRedrawRequestListener(param0: renderers.RedrawRequestListener): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class BaseMapViewModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BaseMapViewModuleJNI>;
                public static BaseMapView_onSurfaceChanged(param0: number, param1: BaseMapView, param2: number, param3: number): void;
                public static BaseMapView_registerLicense(param0: string, param1: number, param2: components.LicenseManagerListener): boolean;
                public static BaseMapView_setFocusPos(param0: number, param1: BaseMapView, param2: number, param3: core.MapPos, param4: number): void;
                public static BaseMapView_tilt(param0: number, param1: BaseMapView, param2: number, param3: number): void;
                public static BaseMapView_getRotation(param0: number, param1: BaseMapView): number;
                public static BaseMapView_getMapRenderer(param0: number, param1: BaseMapView): number;
                public static BaseMapView_rotate__SWIG_1(param0: number, param1: BaseMapView, param2: number, param3: number, param4: core.MapPos, param5: number): void;
                public static BaseMapView_getRedrawRequestListener(param0: number, param1: BaseMapView): number;
                public static BaseMapView_clearAllCaches(param0: number, param1: BaseMapView): void;
                public static BaseMapView_getZoom(param0: number, param1: BaseMapView): number;
                public static BaseMapView_setZoom__SWIG_0(param0: number, param1: BaseMapView, param2: number, param3: number): void;
                public constructor();
                public static BaseMapView_getTilt(param0: number, param1: BaseMapView): number;
                public static BaseMapView_onWheelEvent(param0: number, param1: BaseMapView, param2: number, param3: number, param4: number): void;
                public static BaseMapView_cancelAllTasks(param0: number, param1: BaseMapView): void;
                public static BaseMapView_setZoom__SWIG_1(param0: number, param1: BaseMapView, param2: number, param3: number, param4: core.MapPos, param5: number): void;
                public static BaseMapView_onSurfaceCreated(param0: number, param1: BaseMapView): void;
                public static BaseMapView_finishRendering(param0: number, param1: BaseMapView): void;
                public static BaseMapView_pan(param0: number, param1: BaseMapView, param2: number, param3: core.MapVec, param4: number): void;
                public static BaseMapView_screenToMap(param0: number, param1: BaseMapView, param2: number, param3: core.ScreenPos): number;
                public static new_BaseMapView(): number;
                public static BaseMapView_onSurfaceDestroyed(param0: number, param1: BaseMapView): void;
                public static BaseMapView_setTilt(param0: number, param1: BaseMapView, param2: number, param3: number): void;
                public static BaseMapView_clearPreloadingCaches(param0: number, param1: BaseMapView): void;
                public static BaseMapView_moveToFitBounds__SWIG_0(param0: number, param1: BaseMapView, param2: number, param3: core.MapBounds, param4: number, param5: core.ScreenBounds, param6: boolean, param7: number): void;
                public static BaseMapView_zoom__SWIG_0(param0: number, param1: BaseMapView, param2: number, param3: number): void;
                public static BaseMapView_zoom__SWIG_1(param0: number, param1: BaseMapView, param2: number, param3: number, param4: core.MapPos, param5: number): void;
                public static BaseMapView_setMapEventListener(param0: number, param1: BaseMapView, param2: number, param3: MapEventListener): void;
                public static BaseMapView_onInputEvent(param0: number, param1: BaseMapView, param2: number, param3: number, param4: number, param5: number, param6: number): void;
                public static BaseMapView_moveToFitBounds__SWIG_1(param0: number, param1: BaseMapView, param2: number, param3: core.MapBounds, param4: number, param5: core.ScreenBounds, param6: boolean, param7: boolean, param8: boolean, param9: number): void;
                public static BaseMapView_setRotation__SWIG_1(param0: number, param1: BaseMapView, param2: number, param3: number, param4: core.MapPos, param5: number): void;
                public static BaseMapView_onDrawFrame(param0: number, param1: BaseMapView): void;
                public static BaseMapView_getSDKVersion(): string;
                public static BaseMapView_getOptions(param0: number, param1: BaseMapView): number;
                public static BaseMapView_getLayers(param0: number, param1: BaseMapView): number;
                public static delete_BaseMapView(param0: number): void;
                public static BaseMapView_getMapEventListener(param0: number, param1: BaseMapView): number;
                public static BaseMapView_rotate__SWIG_0(param0: number, param1: BaseMapView, param2: number, param3: number): void;
                public static BaseMapView_setRotation__SWIG_0(param0: number, param1: BaseMapView, param2: number, param3: number): void;
                public static BaseMapView_mapToScreen(param0: number, param1: BaseMapView, param2: number, param3: core.MapPos): number;
                public static BaseMapView_getFocusPos(param0: number, param1: BaseMapView): number;
                public static BaseMapView_setRedrawRequestListener(param0: number, param1: BaseMapView, param2: number, param3: renderers.RedrawRequestListener): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class ClickType {
                public static class: java.lang.Class<ClickType>;
                public static CLICK_TYPE_SINGLE: ClickType;
                public static CLICK_TYPE_LONG: ClickType;
                public static CLICK_TYPE_DOUBLE: ClickType;
                public static CLICK_TYPE_DUAL: ClickType;
                public swigValue(): number;
                public static values(): native.Array<ClickType>;
                public static valueOf(param0: string): ClickType;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                public static swigToEnum(param0: number): ClickType;
            }
            export namespace ClickType {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class ClickTypeModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ClickTypeModuleJNI>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class ConfigChooser extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.EGLConfigChooser {
                public static class: java.lang.Class<ConfigChooser>;
                public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class MapClickInfo extends java.lang.Object {
                public static class: java.lang.Class<MapClickInfo>;
                public swigCMemOwn: boolean;
                public getClickType(): ClickType;
                public swigGetRawPtr(): number;
                public getClickPos(): core.MapPos;
                public delete(): void;
                public hashCode(): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: MapClickInfo): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class MapClickInfoModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapClickInfoModuleJNI>;
                public static delete_MapClickInfo(param0: number): void;
                public static MapClickInfo_getClickPos(param0: number, param1: MapClickInfo): number;
                public static MapClickInfo_getClickType(param0: number, param1: MapClickInfo): number;
                public static MapClickInfo_swigGetRawPtr(param0: number, param1: MapClickInfo): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class MapEventListener extends java.lang.Object {
                public static class: java.lang.Class<MapEventListener>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public onMapMoved(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: MapEventListener): number;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public onMapStable(): void;
                public swigGetRawPtr(): number;
                public onMapClicked(param0: MapClickInfo): void;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MapEventListener;
                public swigTakeOwnership(): void;
                public onMapIdle(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class MapEventListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MapEventListenerModuleJNI>;
                public static MapEventListener_onMapIdle(param0: number, param1: MapEventListener): void;
                public static MapEventListener_swigGetDirectorObject(param0: number, param1: MapEventListener): any;
                public static MapEventListener_onMapIdleSwigExplicitMapEventListener(param0: number, param1: MapEventListener): void;
                public static SwigDirector_MapEventListener_onMapIdle(param0: MapEventListener): void;
                public static SwigDirector_MapEventListener_onMapMoved(param0: MapEventListener): void;
                public static delete_MapEventListener(param0: number): void;
                public static MapEventListener_swigGetClassName(param0: number, param1: MapEventListener): string;
                public constructor();
                public static MapEventListener_onMapClickedSwigExplicitMapEventListener(param0: number, param1: MapEventListener, param2: number, param3: MapClickInfo): void;
                public static MapEventListener_swigGetRawPtr(param0: number, param1: MapEventListener): number;
                public static SwigDirector_MapEventListener_onMapStable(param0: MapEventListener): void;
                public static MapEventListener_onMapMoved(param0: number, param1: MapEventListener): void;
                public static MapEventListener_change_ownership(param0: MapEventListener, param1: number, param2: boolean): void;
                public static MapEventListener_onMapStable(param0: number, param1: MapEventListener): void;
                public static MapEventListener_onMapMovedSwigExplicitMapEventListener(param0: number, param1: MapEventListener): void;
                public static MapEventListener_onMapStableSwigExplicitMapEventListener(param0: number, param1: MapEventListener): void;
                public static MapEventListener_director_connect(param0: MapEventListener, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_MapEventListener_onMapClicked(param0: MapEventListener, param1: number): void;
                public static MapEventListener_onMapClicked(param0: number, param1: MapEventListener, param2: number, param3: MapClickInfo): void;
                public static new_MapEventListener(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class MapRedrawRequestListener extends renderers.RedrawRequestListener {
                public static class: java.lang.Class<MapRedrawRequestListener>;
                public constructor(param0: number, param1: boolean);
                public onRedrawRequested(): void;
                public constructor(param0: MapView);
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class MapView extends globalAndroid.opengl.GLSurfaceView implements globalAndroid.opengl.GLSurfaceView.Renderer {
                public static class: java.lang.Class<MapView>;
                public surfaceRedrawNeededAsync(param0: globalAndroid.view.SurfaceHolder, param1: java.lang.Runnable): void;
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
                public mapToScreen(param0: core.MapPos): core.ScreenPos;
                public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                public cancelAllTasks(): void;
                public sendAccessibilityEvent(param0: number): void;
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public setTilt(param0: number, param1: number): void;
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public clearPreloadingCaches(): void;
                public clearAllCaches(): void;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                /** @deprecated */
                public surfaceRedrawNeeded(param0: globalAndroid.view.SurfaceHolder): void;
                public getLayers(): components.Layers;
                public zoom(param0: number, param1: number): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public pan(param0: core.MapVec, param1: number): void;
                public moveToFitBounds(param0: core.MapBounds, param1: core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
                public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                public rotate(param0: number, param1: number): void;
                public zoom(param0: number, param1: core.MapPos, param2: number): void;
                public static registerLicense(param0: string, param1: globalAndroid.content.Context): boolean;
                public setZoom(param0: number, param1: core.MapPos, param2: number): void;
                public getMapEventListener(): MapEventListener;
                public getFocusPos(): core.MapPos;
                public screenToMap(param0: core.ScreenPos): core.MapPos;
                public getOptions(): components.Options;
                public surfaceRedrawNeeded(param0: globalAndroid.view.SurfaceHolder): void;
                public getMapRenderer(): renderers.MapRenderer;
                public setMapRotation(param0: number, param1: number): void;
                public getZoom(): number;
                public setZoom(param0: number, param1: number): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                public getMapRotation(): number;
                public setFocusPos(param0: core.MapPos, param1: number): void;
                public delete(): void;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context);
                public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public tilt(param0: number, param1: number): void;
                public setMapEventListener(param0: MapEventListener): void;
                public setMapRotation(param0: number, param1: core.MapPos, param2: number): void;
                public moveToFitBounds(param0: core.MapBounds, param1: core.ScreenBounds, param2: boolean, param3: number): void;
                public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                public rotate(param0: number, param1: core.MapPos, param2: number): void;
                public getTilt(): number;
                public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class NMLModelLODTreeClickInfoModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<NMLModelLODTreeClickInfoModuleJNI>;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class PopupClickInfo extends java.lang.Object {
                public static class: java.lang.Class<PopupClickInfo>;
                public swigCMemOwn: boolean;
                public getElementClickPos(): core.ScreenPos;
                public getClickType(): ClickType;
                public swigGetRawPtr(): number;
                public getClickPos(): core.MapPos;
                public delete(): void;
                public hashCode(): number;
                public getPopup(): vectorelements.Popup;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: PopupClickInfo): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class PopupClickInfoModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PopupClickInfoModuleJNI>;
                public static PopupClickInfo_getClickPos(param0: number, param1: PopupClickInfo): number;
                public static delete_PopupClickInfo(param0: number): void;
                public static PopupClickInfo_getPopup(param0: number, param1: PopupClickInfo): number;
                public static PopupClickInfo_swigGetRawPtr(param0: number, param1: PopupClickInfo): number;
                public static PopupClickInfo_getClickType(param0: number, param1: PopupClickInfo): number;
                public static PopupClickInfo_getElementClickPos(param0: number, param1: PopupClickInfo): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class PopupDrawInfo extends java.lang.Object {
                public static class: java.lang.Class<PopupDrawInfo>;
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public getAnchorScreenPos(): core.ScreenPos;
                public getScreenBounds(): core.ScreenBounds;
                public static getCPtr(param0: PopupDrawInfo): number;
                public delete(): void;
                public hashCode(): number;
                public getPopup(): vectorelements.Popup;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public getDPToPX(): number;
                public constructor(param0: core.ScreenPos, param1: core.ScreenBounds, param2: vectorelements.Popup, param3: number);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class PopupDrawInfoModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PopupDrawInfoModuleJNI>;
                public static delete_PopupDrawInfo(param0: number): void;
                public static PopupDrawInfo_swigGetRawPtr(param0: number, param1: PopupDrawInfo): number;
                public static PopupDrawInfo_getDPToPX(param0: number, param1: PopupDrawInfo): number;
                public static PopupDrawInfo_getPopup(param0: number, param1: PopupDrawInfo): number;
                public static new_PopupDrawInfo(param0: number, param1: core.ScreenPos, param2: number, param3: core.ScreenBounds, param4: number, param5: vectorelements.Popup, param6: number): number;
                public constructor();
                public static PopupDrawInfo_getAnchorScreenPos(param0: number, param1: PopupDrawInfo): number;
                public static PopupDrawInfo_getScreenBounds(param0: number, param1: PopupDrawInfo): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class RasterTileClickInfo extends java.lang.Object {
                public static class: java.lang.Class<RasterTileClickInfo>;
                public swigCMemOwn: boolean;
                public getClickType(): ClickType;
                public getNearestColor(): graphics.Color;
                public getClickPos(): core.MapPos;
                public static getCPtr(param0: RasterTileClickInfo): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getInterpolatedColor(): graphics.Color;
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public getMapTile(): core.MapTile;
                public getLayer(): layers.Layer;
                public equals(param0: any): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class RasterTileClickInfoModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<RasterTileClickInfoModuleJNI>;
                public static RasterTileClickInfo_getMapTile(param0: number, param1: RasterTileClickInfo): number;
                public static RasterTileClickInfo_getInterpolatedColor(param0: number, param1: RasterTileClickInfo): number;
                public static RasterTileClickInfo_getLayer(param0: number, param1: RasterTileClickInfo): number;
                public static RasterTileClickInfo_getClickPos(param0: number, param1: RasterTileClickInfo): number;
                public static RasterTileClickInfo_getClickType(param0: number, param1: RasterTileClickInfo): number;
                public static delete_RasterTileClickInfo(param0: number): void;
                public constructor();
                public static RasterTileClickInfo_getNearestColor(param0: number, param1: RasterTileClickInfo): number;
                public static RasterTileClickInfo_swigGetRawPtr(param0: number, param1: RasterTileClickInfo): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class UTFGridClickInfo extends java.lang.Object {
                public static class: java.lang.Class<UTFGridClickInfo>;
                public swigCMemOwn: boolean;
                public getClickType(): ClickType;
                public swigGetRawPtr(): number;
                public getClickPos(): core.MapPos;
                public delete(): void;
                public hashCode(): number;
                public getLayer(): layers.Layer;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: UTFGridClickInfo): number;
                public getElementInfo(): core.Variant;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class UTFGridClickInfoModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<UTFGridClickInfoModuleJNI>;
                public static UTFGridClickInfo_getClickPos(param0: number, param1: UTFGridClickInfo): number;
                public static delete_UTFGridClickInfo(param0: number): void;
                public static UTFGridClickInfo_getClickType(param0: number, param1: UTFGridClickInfo): number;
                public static UTFGridClickInfo_swigGetRawPtr(param0: number, param1: UTFGridClickInfo): number;
                public static UTFGridClickInfo_getElementInfo(param0: number, param1: UTFGridClickInfo): number;
                public static UTFGridClickInfo_getLayer(param0: number, param1: UTFGridClickInfo): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class VectorElementClickInfo extends java.lang.Object {
                public static class: java.lang.Class<VectorElementClickInfo>;
                public swigCMemOwn: boolean;
                public getClickType(): ClickType;
                public swigGetRawPtr(): number;
                public getClickPos(): core.MapPos;
                public getElementClickPos(): core.MapPos;
                public delete(): void;
                public hashCode(): number;
                public getLayer(): layers.Layer;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: VectorElementClickInfo): number;
                public getVectorElement(): vectorelements.VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class VectorElementClickInfoModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorElementClickInfoModuleJNI>;
                public static delete_VectorElementClickInfo(param0: number): void;
                public static VectorElementClickInfo_getVectorElement(param0: number, param1: VectorElementClickInfo): number;
                public static VectorElementClickInfo_getElementClickPos(param0: number, param1: VectorElementClickInfo): number;
                public static VectorElementClickInfo_getClickPos(param0: number, param1: VectorElementClickInfo): number;
                public static VectorElementClickInfo_getLayer(param0: number, param1: VectorElementClickInfo): number;
                public static VectorElementClickInfo_getClickType(param0: number, param1: VectorElementClickInfo): number;
                public constructor();
                public static VectorElementClickInfo_swigGetRawPtr(param0: number, param1: VectorElementClickInfo): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class VectorElementDragInfo extends java.lang.Object {
                public static class: java.lang.Class<VectorElementDragInfo>;
                public swigCMemOwn: boolean;
                public getMapPos(): core.MapPos;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: VectorElementDragInfo): number;
                public getDragMode(): VectorElementDragMode;
                public delete(): void;
                public hashCode(): number;
                public finalize(): void;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public getScreenPos(): core.ScreenPos;
                public getVectorElement(): vectorelements.VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class VectorElementDragInfoModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorElementDragInfoModuleJNI>;
                public static VectorElementDragInfo_getVectorElement(param0: number, param1: VectorElementDragInfo): number;
                public static VectorElementDragInfo_getScreenPos(param0: number, param1: VectorElementDragInfo): number;
                public static VectorElementDragInfo_swigGetRawPtr(param0: number, param1: VectorElementDragInfo): number;
                public static delete_VectorElementDragInfo(param0: number): void;
                public static VectorElementDragInfo_getDragMode(param0: number, param1: VectorElementDragInfo): number;
                public static VectorElementDragInfo_getMapPos(param0: number, param1: VectorElementDragInfo): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class VectorElementDragMode {
                public static class: java.lang.Class<VectorElementDragMode>;
                public static VECTOR_ELEMENT_DRAG_MODE_VERTEX: VectorElementDragMode;
                public static VECTOR_ELEMENT_DRAG_MODE_ELEMENT: VectorElementDragMode;
                public static values(): native.Array<VectorElementDragMode>;
                public swigValue(): number;
                public static valueOf(param0: string): VectorElementDragMode;
                public static swigToEnum(param0: number): VectorElementDragMode;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export namespace VectorElementDragMode {
                export class SwigNext extends java.lang.Object {
                    public static class: java.lang.Class<SwigNext>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class VectorTileClickInfo extends java.lang.Object {
                public static class: java.lang.Class<VectorTileClickInfo>;
                public swigCMemOwn: boolean;
                public getClickType(): ClickType;
                public getClickPos(): core.MapPos;
                public static getCPtr(param0: VectorTileClickInfo): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getFeatureClickPos(): core.MapPos;
                public swigGetRawPtr(): number;
                public delete(): void;
                public hashCode(): number;
                public getMapTile(): core.MapTile;
                public getLayer(): layers.Layer;
                public equals(param0: any): boolean;
                public getFeatureLayerName(): string;
                public getFeatureId(): number;
                public getFeature(): geometry.VectorTileFeature;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class VectorTileClickInfoModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorTileClickInfoModuleJNI>;
                public static VectorTileClickInfo_getClickPos(param0: number, param1: VectorTileClickInfo): number;
                public static VectorTileClickInfo_getFeatureClickPos(param0: number, param1: VectorTileClickInfo): number;
                public static VectorTileClickInfo_getMapTile(param0: number, param1: VectorTileClickInfo): number;
                public static VectorTileClickInfo_getFeature(param0: number, param1: VectorTileClickInfo): number;
                public static VectorTileClickInfo_getFeatureId(param0: number, param1: VectorTileClickInfo): number;
                public static VectorTileClickInfo_getFeatureLayerName(param0: number, param1: VectorTileClickInfo): string;
                public static VectorTileClickInfo_getLayer(param0: number, param1: VectorTileClickInfo): number;
                public static delete_VectorTileClickInfo(param0: number): void;
                public static VectorTileClickInfo_getClickType(param0: number, param1: VectorTileClickInfo): number;
                public static VectorTileClickInfo_swigGetRawPtr(param0: number, param1: VectorTileClickInfo): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class AndroidUtils extends java.lang.Object {
                public static class: java.lang.Class<AndroidUtils>;
                public swigCMemOwn: boolean;
                public static getDeviceType(): string;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: AndroidUtils): number;
                public static attachJVM(param0: any): void;
                public static getDeviceOS(): string;
                public static setContext(param0: globalAndroid.content.Context): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class AndroidUtilsModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<AndroidUtilsModuleJNI>;
                public static AndroidUtils_setContext(param0: globalAndroid.content.Context): void;
                public static delete_AndroidUtils(param0: number): void;
                public static AndroidUtils_attachJVM(param0: any): void;
                public static AndroidUtils_getDeviceType(): string;
                public static AndroidUtils_getDeviceOS(): string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class AssetPackage extends java.lang.Object {
                public static class: java.lang.Class<AssetPackage>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getAssetNames(): core.StringVector;
                public swigGetClassName(): string;
                public static getCPtr(param0: AssetPackage): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): AssetPackage;
                public loadAsset(param0: string): core.BinaryData;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public swigTakeOwnership(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class AssetPackageModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<AssetPackageModuleJNI>;
                public static new_AssetPackage(): number;
                public static AssetPackage_swigGetDirectorObject(param0: number, param1: AssetPackage): any;
                public static AssetPackage_change_ownership(param0: AssetPackage, param1: number, param2: boolean): void;
                public static AssetPackage_loadAsset(param0: number, param1: AssetPackage, param2: string): number;
                public static AssetPackage_getAssetNames(param0: number, param1: AssetPackage): number;
                public static SwigDirector_AssetPackage_loadAsset(param0: AssetPackage, param1: string): number;
                public static AssetPackage_director_connect(param0: AssetPackage, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_AssetPackage_getAssetNames(param0: AssetPackage): number;
                public static delete_AssetPackage(param0: number): void;
                public static AssetPackage_swigGetRawPtr(param0: number, param1: AssetPackage): number;
                public static AssetPackage_swigGetClassName(param0: number, param1: AssetPackage): string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class AssetUtils extends java.lang.Object {
                public static class: java.lang.Class<AssetUtils>;
                public swigCMemOwn: boolean;
                public static setAssetManagerPointer(param0: globalAndroid.content.res.AssetManager): void;
                public delete(): void;
                public static loadAsset(param0: string): core.BinaryData;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: AssetUtils): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class AssetUtilsModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<AssetUtilsModuleJNI>;
                public static AssetUtils_setAssetManagerPointer(param0: globalAndroid.content.res.AssetManager): void;
                public static delete_AssetUtils(param0: number): void;
                public static AssetUtils_loadAsset(param0: string): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class BitmapUtils extends java.lang.Object {
                public static class: java.lang.Class<BitmapUtils>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: BitmapUtils): number;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static createAndroidBitmapFromBitmap(param0: graphics.Bitmap): globalAndroid.graphics.Bitmap;
                public static loadBitmapFromAssets(param0: string): graphics.Bitmap;
                public static createBitmapFromAndroidBitmap(param0: globalAndroid.graphics.Bitmap): graphics.Bitmap;
                public static loadBitmapFromFile(param0: string): graphics.Bitmap;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class BitmapUtilsModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BitmapUtilsModuleJNI>;
                public static BitmapUtils_loadBitmapFromFile(param0: string): number;
                public static BitmapUtils_createAndroidBitmapFromBitmap(param0: number, param1: graphics.Bitmap): globalAndroid.graphics.Bitmap;
                public static BitmapUtils_createBitmapFromAndroidBitmap(param0: globalAndroid.graphics.Bitmap): number;
                public static BitmapUtils_loadBitmapFromAssets(param0: string): number;
                public static delete_BitmapUtils(param0: number): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class Log extends java.lang.Object {
                public static class: java.lang.Class<Log>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: Log): number;
                public static setShowInfo(param0: boolean): void;
                public finalize(): void;
                public static isShowInfo(): boolean;
                public constructor(param0: number, param1: boolean);
                public static fatal(param0: string): void;
                public static error(param0: string): void;
                public static setShowWarn(param0: boolean): void;
                public static setTag(param0: string): void;
                public static setLogEventListener(param0: LogEventListener): void;
                public static warn(param0: string): void;
                public static setShowDebug(param0: boolean): void;
                public static isShowError(): boolean;
                public static getLogEventListener(): LogEventListener;
                public delete(): void;
                public static debug(param0: string): void;
                public static isShowDebug(): boolean;
                public static isShowWarn(): boolean;
                public static setShowError(param0: boolean): void;
                public static info(param0: string): void;
                public static getTag(): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class LogEventListener extends java.lang.Object {
                public static class: java.lang.Class<LogEventListener>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public onErrorEvent(param0: string): boolean;
                public swigDirectorDisconnect(): void;
                public static getCPtr(param0: LogEventListener): number;
                public onWarnEvent(param0: string): boolean;
                public onInfoEvent(param0: string): boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): LogEventListener;
                public onDebugEvent(param0: string): boolean;
                public swigTakeOwnership(): void;
                public onFatalEvent(param0: string): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class LogEventListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LogEventListenerModuleJNI>;
                public static SwigDirector_LogEventListener_onDebugEvent(param0: LogEventListener, param1: string): boolean;
                public static LogEventListener_onErrorEvent(param0: number, param1: LogEventListener, param2: string): boolean;
                public static LogEventListener_swigGetClassName(param0: number, param1: LogEventListener): string;
                public static LogEventListener_onWarnEventSwigExplicitLogEventListener(param0: number, param1: LogEventListener, param2: string): boolean;
                public static LogEventListener_onErrorEventSwigExplicitLogEventListener(param0: number, param1: LogEventListener, param2: string): boolean;
                public static delete_LogEventListener(param0: number): void;
                public static LogEventListener_onFatalEventSwigExplicitLogEventListener(param0: number, param1: LogEventListener, param2: string): boolean;
                public constructor();
                public static LogEventListener_onDebugEventSwigExplicitLogEventListener(param0: number, param1: LogEventListener, param2: string): boolean;
                public static LogEventListener_onFatalEvent(param0: number, param1: LogEventListener, param2: string): boolean;
                public static SwigDirector_LogEventListener_onErrorEvent(param0: LogEventListener, param1: string): boolean;
                public static LogEventListener_onInfoEventSwigExplicitLogEventListener(param0: number, param1: LogEventListener, param2: string): boolean;
                public static LogEventListener_director_connect(param0: LogEventListener, param1: number, param2: boolean, param3: boolean): void;
                public static LogEventListener_change_ownership(param0: LogEventListener, param1: number, param2: boolean): void;
                public static LogEventListener_onWarnEvent(param0: number, param1: LogEventListener, param2: string): boolean;
                public static LogEventListener_swigGetDirectorObject(param0: number, param1: LogEventListener): any;
                public static new_LogEventListener(): number;
                public static LogEventListener_onInfoEvent(param0: number, param1: LogEventListener, param2: string): boolean;
                public static LogEventListener_swigGetRawPtr(param0: number, param1: LogEventListener): number;
                public static SwigDirector_LogEventListener_onFatalEvent(param0: LogEventListener, param1: string): boolean;
                public static LogEventListener_onDebugEvent(param0: number, param1: LogEventListener, param2: string): boolean;
                public static SwigDirector_LogEventListener_onInfoEvent(param0: LogEventListener, param1: string): boolean;
                public static SwigDirector_LogEventListener_onWarnEvent(param0: LogEventListener, param1: string): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class LogModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LogModuleJNI>;
                public static Log_fatal(param0: string): void;
                public static Log_isShowDebug(): boolean;
                public static Log_isShowError(): boolean;
                public static Log_isShowWarn(): boolean;
                public static Log_info(param0: string): void;
                public constructor();
                public static Log_setLogEventListener(param0: number, param1: LogEventListener): void;
                public static Log_setShowInfo(param0: boolean): void;
                public static Log_getLogEventListener(): number;
                public static Log_error(param0: string): void;
                public static Log_setShowError(param0: boolean): void;
                public static Log_setTag(param0: string): void;
                public static Log_setShowWarn(param0: boolean): void;
                public static Log_debug(param0: string): void;
                public static Log_setShowDebug(param0: boolean): void;
                public static delete_Log(param0: number): void;
                public static Log_getTag(): string;
                public static Log_isShowInfo(): boolean;
                public static Log_warn(param0: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class TileUtils extends java.lang.Object {
                public static class: java.lang.Class<TileUtils>;
                public swigCMemOwn: boolean;
                public static getCPtr(param0: TileUtils): number;
                public static calculateMapTileOrigin(param0: core.MapTile, param1: projections.Projection): core.MapPos;
                public static calculateMapTile(param0: core.MapPos, param1: number, param2: projections.Projection): core.MapTile;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static calculateMapTileBounds(param0: core.MapTile, param1: projections.Projection): core.MapBounds;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class TileUtilsModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TileUtilsModuleJNI>;
                public static TileUtils_calculateMapTile(param0: number, param1: core.MapPos, param2: number, param3: number, param4: projections.Projection): number;
                public static TileUtils_calculateMapTileOrigin(param0: number, param1: core.MapTile, param2: number, param3: projections.Projection): number;
                public static delete_TileUtils(param0: number): void;
                public static TileUtils_calculateMapTileBounds(param0: number, param1: core.MapTile, param2: number, param3: projections.Projection): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class ZippedAssetPackage extends AssetPackage {
                public static class: java.lang.Class<ZippedAssetPackage>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): ZippedAssetPackage;
                public static getCPtr(param0: ZippedAssetPackage): number;
                public getLocalAssetNames(): core.StringVector;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getAssetNames(): core.StringVector;
                public swigGetClassName(): string;
                public static getCPtr(param0: AssetPackage): number;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): AssetPackage;
                public loadAsset(param0: string): core.BinaryData;
                public constructor(param0: core.BinaryData);
                public constructor(param0: core.BinaryData, param1: AssetPackage);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class ZippedAssetPackageModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<ZippedAssetPackageModuleJNI>;
                public static new_ZippedAssetPackage__SWIG_0(param0: number, param1: core.BinaryData): number;
                public static ZippedAssetPackage_getAssetNames(param0: number, param1: ZippedAssetPackage): number;
                public static ZippedAssetPackage_loadAsset(param0: number, param1: ZippedAssetPackage, param2: string): number;
                public static ZippedAssetPackage_getLocalAssetNames(param0: number, param1: ZippedAssetPackage): number;
                public static ZippedAssetPackage_SWIGSmartPtrUpcast(param0: number): number;
                public static delete_ZippedAssetPackage(param0: number): void;
                public static ZippedAssetPackage_swigGetRawPtr(param0: number, param1: ZippedAssetPackage): number;
                public static ZippedAssetPackage_swigGetDirectorObject(param0: number, param1: ZippedAssetPackage): any;
                public constructor();
                public static new_ZippedAssetPackage__SWIG_1(param0: number, param1: core.BinaryData, param2: number, param3: AssetPackage): number;
                public static ZippedAssetPackage_swigGetClassName(param0: number, param1: ZippedAssetPackage): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class BalloonPopup extends Popup {
                public static class: java.lang.Class<BalloonPopup>;
                public static getCPtr(param0: Popup): number;
                public removeButton(param0: BalloonPopupButton): void;
                public addButton(param0: BalloonPopupButton): void;
                public static getCPtr(param0: Billboard): number;
                public constructor(param0: Billboard, param1: styles.BalloonPopupStyle, param2: string, param3: string);
                public clearButtons(): void;
                public finalize(): void;
                public getDescription(): string;
                public setBalloonPopupEventListener(param0: BalloonPopupEventListener): void;
                public setStyle(param0: styles.BalloonPopupStyle): void;
                public getBalloonPopupEventListener(): BalloonPopupEventListener;
                public drawBitmap(param0: core.ScreenPos, param1: number, param2: number, param3: number): graphics.Bitmap;
                public setTitle(param0: string): void;
                public static getCPtr(param0: BalloonPopup): number;
                public delete(): void;
                public static getCPtr(param0: VectorElement): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Billboard;
                public constructor(param0: geometry.Geometry, param1: styles.BalloonPopupStyle, param2: string, param3: string);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Popup;
                public constructor(param0: core.MapPos, param1: styles.BalloonPopupStyle, param2: string, param3: string);
                public constructor(param0: number, param1: boolean);
                public getStyle(): styles.PopupStyle;
                public swigGetClassName(): string;
                public getTitle(): string;
                public swigGetDirectorObject(): any;
                public setStyle(param0: styles.PopupStyle): void;
                public swigGetRawPtr(): number;
                public replaceButton(param0: BalloonPopupButton, param1: BalloonPopupButton): void;
                public setDescription(param0: string): void;
                public getStyle(): styles.BalloonPopupStyle;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BalloonPopup;
                public processClick(param0: ui.ClickType, param1: core.MapPos, param2: core.ScreenPos): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class BalloonPopupButton extends java.lang.Object {
                public static class: java.lang.Class<BalloonPopupButton>;
                public swigCMemOwn: boolean;
                public setTag(param0: core.Variant): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: BalloonPopupButton): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BalloonPopupButton;
                public constructor(param0: styles.BalloonPopupButtonStyle, param1: string);
                public swigGetDirectorObject(): any;
                public getText(): string;
                public swigGetRawPtr(): number;
                public getTag(): core.Variant;
                public delete(): void;
                public getStyle(): styles.BalloonPopupButtonStyle;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class BalloonPopupButtonModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BalloonPopupButtonModuleJNI>;
                public static new_BalloonPopupButton(param0: number, param1: styles.BalloonPopupButtonStyle, param2: string): number;
                public static BalloonPopupButton_swigGetDirectorObject(param0: number, param1: BalloonPopupButton): any;
                public static BalloonPopupButton_getTag(param0: number, param1: BalloonPopupButton): number;
                public static BalloonPopupButton_getText(param0: number, param1: BalloonPopupButton): string;
                public static BalloonPopupButton_getStyle(param0: number, param1: BalloonPopupButton): number;
                public static BalloonPopupButton_swigGetClassName(param0: number, param1: BalloonPopupButton): string;
                public static BalloonPopupButton_swigGetRawPtr(param0: number, param1: BalloonPopupButton): number;
                public static BalloonPopupButton_setTag(param0: number, param1: BalloonPopupButton, param2: number, param3: core.Variant): void;
                public static delete_BalloonPopupButton(param0: number): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class BalloonPopupEventListener extends java.lang.Object {
                public static class: java.lang.Class<BalloonPopupEventListener>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public onButtonClicked(param0: ui.BalloonPopupButtonClickInfo): boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): BalloonPopupEventListener;
                public swigGetDirectorObject(): any;
                public constructor();
                public static getCPtr(param0: BalloonPopupEventListener): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class BalloonPopupEventListenerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BalloonPopupEventListenerModuleJNI>;
                public static BalloonPopupEventListener_director_connect(param0: BalloonPopupEventListener, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_BalloonPopupEventListener_onButtonClicked(param0: BalloonPopupEventListener, param1: number): boolean;
                public static BalloonPopupEventListener_swigGetClassName(param0: number, param1: BalloonPopupEventListener): string;
                public static delete_BalloonPopupEventListener(param0: number): void;
                public static BalloonPopupEventListener_swigGetRawPtr(param0: number, param1: BalloonPopupEventListener): number;
                public static BalloonPopupEventListener_change_ownership(param0: BalloonPopupEventListener, param1: number, param2: boolean): void;
                public static BalloonPopupEventListener_onButtonClickedSwigExplicitBalloonPopupEventListener(param0: number, param1: BalloonPopupEventListener, param2: number, param3: ui.BalloonPopupButtonClickInfo): boolean;
                public static BalloonPopupEventListener_onButtonClicked(param0: number, param1: BalloonPopupEventListener, param2: number, param3: ui.BalloonPopupButtonClickInfo): boolean;
                public static BalloonPopupEventListener_swigGetDirectorObject(param0: number, param1: BalloonPopupEventListener): any;
                public static new_BalloonPopupEventListener(): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class BalloonPopupModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BalloonPopupModuleJNI>;
                public static BalloonPopup_removeButton(param0: number, param1: BalloonPopup, param2: number, param3: BalloonPopupButton): void;
                public static BalloonPopup_swigGetDirectorObject(param0: number, param1: BalloonPopup): any;
                public static BalloonPopup_getTitle(param0: number, param1: BalloonPopup): string;
                public static BalloonPopup_clearButtons(param0: number, param1: BalloonPopup): void;
                public static BalloonPopup_replaceButton(param0: number, param1: BalloonPopup, param2: number, param3: BalloonPopupButton, param4: number, param5: BalloonPopupButton): void;
                public static new_BalloonPopup__SWIG_1(param0: number, param1: geometry.Geometry, param2: number, param3: styles.BalloonPopupStyle, param4: string, param5: string): number;
                public static delete_BalloonPopup(param0: number): void;
                public static new_BalloonPopup__SWIG_0(param0: number, param1: Billboard, param2: number, param3: styles.BalloonPopupStyle, param4: string, param5: string): number;
                public static BalloonPopup_getStyle(param0: number, param1: BalloonPopup): number;
                public static BalloonPopup_SWIGSmartPtrUpcast(param0: number): number;
                public static BalloonPopup_getBalloonPopupEventListener(param0: number, param1: BalloonPopup): number;
                public static BalloonPopup_addButton(param0: number, param1: BalloonPopup, param2: number, param3: BalloonPopupButton): void;
                public constructor();
                public static new_BalloonPopup__SWIG_2(param0: number, param1: core.MapPos, param2: number, param3: styles.BalloonPopupStyle, param4: string, param5: string): number;
                public static BalloonPopup_getDescription(param0: number, param1: BalloonPopup): string;
                public static BalloonPopup_swigGetRawPtr(param0: number, param1: BalloonPopup): number;
                public static BalloonPopup_setTitle(param0: number, param1: BalloonPopup, param2: string): void;
                public static BalloonPopup_setDescription(param0: number, param1: BalloonPopup, param2: string): void;
                public static BalloonPopup_setStyle(param0: number, param1: BalloonPopup, param2: number, param3: styles.BalloonPopupStyle): void;
                public static BalloonPopup_setBalloonPopupEventListener(param0: number, param1: BalloonPopup, param2: number, param3: BalloonPopupEventListener): void;
                public static BalloonPopup_swigGetClassName(param0: number, param1: BalloonPopup): string;
                public static BalloonPopup_processClick(param0: number, param1: BalloonPopup, param2: number, param3: number, param4: core.MapPos, param5: number, param6: core.ScreenPos): boolean;
                public static BalloonPopup_drawBitmap(param0: number, param1: BalloonPopup, param2: number, param3: core.ScreenPos, param4: number, param5: number, param6: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Billboard extends VectorElement {
                public static class: java.lang.Class<Billboard>;
                public getRootGeometry(): geometry.Geometry;
                public static getCPtr(param0: Billboard): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getBounds(): core.MapBounds;
                public setPos(param0: core.MapPos): void;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public delete(): void;
                public setBaseBillboard(param0: Billboard): void;
                public setGeometry(param0: geometry.Geometry): void;
                public static getCPtr(param0: VectorElement): number;
                public getRotation(): number;
                public setRotation(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Billboard;
                public getBaseBillboard(): Billboard;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
                public getGeometry(): geometry.Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class BillboardModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<BillboardModuleJNI>;
                public static Billboard_setGeometry(param0: number, param1: Billboard, param2: number, param3: geometry.Geometry): void;
                public static Billboard_getRootGeometry(param0: number, param1: Billboard): number;
                public static Billboard_setRotation(param0: number, param1: Billboard, param2: number): void;
                public static Billboard_getBounds(param0: number, param1: Billboard): number;
                public static Billboard_getBaseBillboard(param0: number, param1: Billboard): number;
                public constructor();
                public static Billboard_swigGetRawPtr(param0: number, param1: Billboard): number;
                public static Billboard_swigGetDirectorObject(param0: number, param1: Billboard): any;
                public static Billboard_getRotation(param0: number, param1: Billboard): number;
                public static Billboard_swigGetClassName(param0: number, param1: Billboard): string;
                public static Billboard_SWIGSmartPtrUpcast(param0: number): number;
                public static Billboard_getGeometry(param0: number, param1: Billboard): number;
                public static Billboard_setBaseBillboard(param0: number, param1: Billboard, param2: number, param3: Billboard): void;
                public static Billboard_setPos(param0: number, param1: Billboard, param2: number, param3: core.MapPos): void;
                public static delete_Billboard(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class CustomPopup extends Popup {
                public static class: java.lang.Class<CustomPopup>;
                public static getCPtr(param0: CustomPopup): number;
                public static getCPtr(param0: Popup): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Popup;
                public constructor(param0: Billboard, param1: styles.PopupStyle, param2: CustomPopupHandler);
                public static getCPtr(param0: Billboard): number;
                public getPopupHandler(): CustomPopupHandler;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CustomPopup;
                public swigGetClassName(): string;
                public constructor(param0: core.MapPos, param1: styles.PopupStyle, param2: CustomPopupHandler);
                public drawBitmap(param0: core.ScreenPos, param1: number, param2: number, param3: number): graphics.Bitmap;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: geometry.Geometry, param1: styles.PopupStyle, param2: CustomPopupHandler);
                public static getCPtr(param0: VectorElement): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Billboard;
                public processClick(param0: ui.ClickType, param1: core.MapPos, param2: core.ScreenPos): boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class CustomPopupHandler extends java.lang.Object {
                public static class: java.lang.Class<CustomPopupHandler>;
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: CustomPopupHandler): number;
                public onPopupClicked(param0: ui.PopupClickInfo): boolean;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CustomPopupHandler;
                public swigTakeOwnership(): void;
                public onDrawPopup(param0: ui.PopupDrawInfo): graphics.Bitmap;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class CustomPopupHandlerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CustomPopupHandlerModuleJNI>;
                public static CustomPopupHandler_onDrawPopup(param0: number, param1: CustomPopupHandler, param2: number, param3: ui.PopupDrawInfo): number;
                public static SwigDirector_CustomPopupHandler_onDrawPopup(param0: CustomPopupHandler, param1: number): number;
                public static CustomPopupHandler_onPopupClicked(param0: number, param1: CustomPopupHandler, param2: number, param3: ui.PopupClickInfo): boolean;
                public static SwigDirector_CustomPopupHandler_onPopupClicked(param0: CustomPopupHandler, param1: number): boolean;
                public static CustomPopupHandler_swigGetDirectorObject(param0: number, param1: CustomPopupHandler): any;
                public constructor();
                public static new_CustomPopupHandler(): number;
                public static CustomPopupHandler_swigGetRawPtr(param0: number, param1: CustomPopupHandler): number;
                public static CustomPopupHandler_change_ownership(param0: CustomPopupHandler, param1: number, param2: boolean): void;
                public static CustomPopupHandler_swigGetClassName(param0: number, param1: CustomPopupHandler): string;
                public static delete_CustomPopupHandler(param0: number): void;
                public static CustomPopupHandler_onDrawPopupSwigExplicitCustomPopupHandler(param0: number, param1: CustomPopupHandler, param2: number, param3: ui.PopupDrawInfo): number;
                public static CustomPopupHandler_onPopupClickedSwigExplicitCustomPopupHandler(param0: number, param1: CustomPopupHandler, param2: number, param3: ui.PopupClickInfo): boolean;
                public static CustomPopupHandler_director_connect(param0: CustomPopupHandler, param1: number, param2: boolean, param3: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class CustomPopupModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CustomPopupModuleJNI>;
                public static CustomPopup_swigGetClassName(param0: number, param1: CustomPopup): string;
                public static new_CustomPopup__SWIG_0(param0: number, param1: Billboard, param2: number, param3: styles.PopupStyle, param4: number, param5: CustomPopupHandler): number;
                public static new_CustomPopup__SWIG_1(param0: number, param1: geometry.Geometry, param2: number, param3: styles.PopupStyle, param4: number, param5: CustomPopupHandler): number;
                public static delete_CustomPopup(param0: number): void;
                public static CustomPopup_processClick(param0: number, param1: CustomPopup, param2: number, param3: number, param4: core.MapPos, param5: number, param6: core.ScreenPos): boolean;
                public static CustomPopup_swigGetRawPtr(param0: number, param1: CustomPopup): number;
                public static CustomPopup_swigGetDirectorObject(param0: number, param1: CustomPopup): any;
                public static CustomPopup_SWIGSmartPtrUpcast(param0: number): number;
                public static CustomPopup_drawBitmap(param0: number, param1: CustomPopup, param2: number, param3: core.ScreenPos, param4: number, param5: number, param6: number): number;
                public static new_CustomPopup__SWIG_2(param0: number, param1: core.MapPos, param2: number, param3: styles.PopupStyle, param4: number, param5: CustomPopupHandler): number;
                public static CustomPopup_getPopupHandler(param0: number, param1: CustomPopup): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class GeometryCollection extends VectorElement {
                public static class: java.lang.Class<GeometryCollection>;
                public setGeometry(param0: geometry.MultiGeometry): void;
                public static getCPtr(param0: GeometryCollection): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: geometry.MultiGeometry, param1: styles.GeometryCollectionStyle);
                public swigGetClassName(): string;
                public getGeometry(): geometry.MultiGeometry;
                public swigGetDirectorObject(): any;
                public getStyle(): styles.GeometryCollectionStyle;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): GeometryCollection;
                public delete(): void;
                public setStyle(param0: styles.GeometryCollectionStyle): void;
                public static getCPtr(param0: VectorElement): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
                public getGeometry(): geometry.Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class GeometryCollectionModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<GeometryCollectionModuleJNI>;
                public static delete_GeometryCollection(param0: number): void;
                public static GeometryCollection_SWIGSmartPtrUpcast(param0: number): number;
                public static new_GeometryCollection(param0: number, param1: geometry.MultiGeometry, param2: number, param3: styles.GeometryCollectionStyle): number;
                public static GeometryCollection_setGeometry(param0: number, param1: GeometryCollection, param2: number, param3: geometry.MultiGeometry): void;
                public static GeometryCollection_swigGetRawPtr(param0: number, param1: GeometryCollection): number;
                public static GeometryCollection_swigGetClassName(param0: number, param1: GeometryCollection): string;
                public static GeometryCollection_getStyle(param0: number, param1: GeometryCollection): number;
                public static GeometryCollection_setStyle(param0: number, param1: GeometryCollection, param2: number, param3: styles.GeometryCollectionStyle): void;
                public static GeometryCollection_swigGetDirectorObject(param0: number, param1: GeometryCollection): any;
                public constructor();
                public static GeometryCollection_getGeometry(param0: number, param1: GeometryCollection): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Label extends Billboard {
                public static class: java.lang.Class<Label>;
                public static getCPtr(param0: Billboard): number;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Label;
                public constructor(param0: number, param1: boolean);
                public setStyle(param0: styles.LabelStyle): void;
                public swigGetClassName(): string;
                public drawBitmap(param0: number): graphics.Bitmap;
                public swigGetDirectorObject(): any;
                public static getCPtr(param0: Label): number;
                public swigGetRawPtr(): number;
                public getStyle(): styles.LabelStyle;
                public delete(): void;
                public static getCPtr(param0: VectorElement): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Billboard;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class LabelModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LabelModuleJNI>;
                public static delete_Label(param0: number): void;
                public static Label_drawBitmap(param0: number, param1: Label, param2: number): number;
                public static Label_swigGetRawPtr(param0: number, param1: Label): number;
                public static Label_SWIGSmartPtrUpcast(param0: number): number;
                public static Label_swigGetClassName(param0: number, param1: Label): string;
                public static Label_getStyle(param0: number, param1: Label): number;
                public static Label_swigGetDirectorObject(param0: number, param1: Label): any;
                public static Label_setStyle(param0: number, param1: Label, param2: number, param3: styles.LabelStyle): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Line extends VectorElement {
                public static class: java.lang.Class<Line>;
                public constructor(param0: core.MapPosVector, param1: styles.LineStyle);
                public setStyle(param0: styles.LineStyle): void;
                public getGeometry(): geometry.LineGeometry;
                public getStyle(): styles.LineStyle;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: Line): number;
                public setPoses(param0: core.MapPosVector): void;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: VectorElement): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
                public constructor(param0: geometry.LineGeometry, param1: styles.LineStyle);
                public setGeometry(param0: geometry.LineGeometry): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Line;
                public getGeometry(): geometry.Geometry;
                public getPoses(): core.MapPosVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class LineModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<LineModuleJNI>;
                public static new_Line__SWIG_0(param0: number, param1: geometry.LineGeometry, param2: number, param3: styles.LineStyle): number;
                public static Line_swigGetRawPtr(param0: number, param1: Line): number;
                public static Line_swigGetClassName(param0: number, param1: Line): string;
                public static Line_getPoses(param0: number, param1: Line): number;
                public static Line_setStyle(param0: number, param1: Line, param2: number, param3: styles.LineStyle): void;
                public static Line_getStyle(param0: number, param1: Line): number;
                public constructor();
                public static new_Line__SWIG_1(param0: number, param1: core.MapPosVector, param2: number, param3: styles.LineStyle): number;
                public static Line_setGeometry(param0: number, param1: Line, param2: number, param3: geometry.LineGeometry): void;
                public static delete_Line(param0: number): void;
                public static Line_setPoses(param0: number, param1: Line, param2: number, param3: core.MapPosVector): void;
                public static Line_SWIGSmartPtrUpcast(param0: number): number;
                public static Line_getGeometry(param0: number, param1: Line): number;
                public static Line_swigGetDirectorObject(param0: number, param1: Line): any;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Marker extends Billboard {
                public static class: java.lang.Class<Marker>;
                public constructor(param0: geometry.Geometry, param1: styles.MarkerStyle);
                public static getCPtr(param0: Billboard): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: Marker): number;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Marker;
                public constructor(param0: Billboard, param1: styles.MarkerStyle);
                public swigGetRawPtr(): number;
                public constructor(param0: core.MapPos, param1: styles.MarkerStyle);
                public delete(): void;
                public static getCPtr(param0: VectorElement): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Billboard;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
                public getStyle(): styles.MarkerStyle;
                public setStyle(param0: styles.MarkerStyle): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class MarkerModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MarkerModuleJNI>;
                public static new_Marker__SWIG_1(param0: number, param1: geometry.Geometry, param2: number, param3: styles.MarkerStyle): number;
                public static Marker_setStyle(param0: number, param1: Marker, param2: number, param3: styles.MarkerStyle): void;
                public static Marker_getStyle(param0: number, param1: Marker): number;
                public static Marker_swigGetDirectorObject(param0: number, param1: Marker): any;
                public static Marker_SWIGSmartPtrUpcast(param0: number): number;
                public static Marker_swigGetClassName(param0: number, param1: Marker): string;
                public static new_Marker__SWIG_0(param0: number, param1: Billboard, param2: number, param3: styles.MarkerStyle): number;
                public static new_Marker__SWIG_2(param0: number, param1: core.MapPos, param2: number, param3: styles.MarkerStyle): number;
                public static delete_Marker(param0: number): void;
                public static Marker_swigGetRawPtr(param0: number, param1: Marker): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class NMLModel extends VectorElement {
                public static class: java.lang.Class<NMLModel>;
                public getStyle(): styles.NMLModelStyle;
                public static getCPtr(param0: NMLModel): number;
                public getScale(): number;
                public finalize(): void;
                public getRotationAxis(): core.MapVec;
                public setScale(param0: number): void;
                public constructor(param0: number, param1: boolean);
                public setPos(param0: core.MapPos): void;
                public getRotationAngle(): number;
                public setRotation(param0: core.MapVec, param1: number): void;
                public swigGetClassName(): string;
                public constructor(param0: core.MapPos, param1: styles.NMLModelStyle);
                public setStyle(param0: styles.NMLModelStyle): void;
                public swigGetDirectorObject(): any;
                public constructor(param0: geometry.Geometry, param1: styles.NMLModelStyle);
                /** @deprecated */
                public constructor(param0: geometry.Geometry, param1: core.BinaryData);
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): NMLModel;
                public delete(): void;
                public setGeometry(param0: geometry.Geometry): void;
                public static getCPtr(param0: VectorElement): number;
                /** @deprecated */
                public constructor(param0: core.MapPos, param1: core.BinaryData);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class NMLModelModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<NMLModelModuleJNI>;
                public static NMLModel_swigGetRawPtr(param0: number, param1: NMLModel): number;
                public static new_NMLModel__SWIG_3(param0: number, param1: core.MapPos, param2: number, param3: core.BinaryData): number;
                public static NMLModel_setPos(param0: number, param1: NMLModel, param2: number, param3: core.MapPos): void;
                public static new_NMLModel__SWIG_0(param0: number, param1: geometry.Geometry, param2: number, param3: styles.NMLModelStyle): number;
                public static NMLModel_swigGetDirectorObject(param0: number, param1: NMLModel): any;
                public static new_NMLModel__SWIG_2(param0: number, param1: geometry.Geometry, param2: number, param3: core.BinaryData): number;
                public static NMLModel_SWIGSmartPtrUpcast(param0: number): number;
                public static NMLModel_setStyle(param0: number, param1: NMLModel, param2: number, param3: styles.NMLModelStyle): void;
                public static delete_NMLModel(param0: number): void;
                public constructor();
                public static NMLModel_setScale(param0: number, param1: NMLModel, param2: number): void;
                public static NMLModel_swigGetClassName(param0: number, param1: NMLModel): string;
                public static NMLModel_getStyle(param0: number, param1: NMLModel): number;
                public static new_NMLModel__SWIG_1(param0: number, param1: core.MapPos, param2: number, param3: styles.NMLModelStyle): number;
                public static NMLModel_getRotationAxis(param0: number, param1: NMLModel): number;
                public static NMLModel_setGeometry(param0: number, param1: NMLModel, param2: number, param3: geometry.Geometry): void;
                public static NMLModel_getScale(param0: number, param1: NMLModel): number;
                public static NMLModel_getRotationAngle(param0: number, param1: NMLModel): number;
                public static NMLModel_setRotation(param0: number, param1: NMLModel, param2: number, param3: core.MapVec, param4: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Point extends VectorElement {
                public static class: java.lang.Class<Point>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Point;
                public static getCPtr(param0: Point): number;
                public getStyle(): styles.PointStyle;
                public finalize(): void;
                public constructor(param0: geometry.PointGeometry, param1: styles.PointStyle);
                public constructor(param0: number, param1: boolean);
                public setPos(param0: core.MapPos): void;
                public getPos(): core.MapPos;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public getGeometry(): geometry.PointGeometry;
                public delete(): void;
                public static getCPtr(param0: VectorElement): number;
                public setStyle(param0: styles.PointStyle): void;
                public setGeometry(param0: geometry.PointGeometry): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
                public constructor(param0: core.MapPos, param1: styles.PointStyle);
                public getGeometry(): geometry.Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class PointModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PointModuleJNI>;
                public static Point_getPos(param0: number, param1: Point): number;
                public static Point_swigGetClassName(param0: number, param1: Point): string;
                public static Point_getGeometry(param0: number, param1: Point): number;
                public static Point_swigGetRawPtr(param0: number, param1: Point): number;
                public static new_Point__SWIG_0(param0: number, param1: geometry.PointGeometry, param2: number, param3: styles.PointStyle): number;
                public static Point_getStyle(param0: number, param1: Point): number;
                public static Point_swigGetDirectorObject(param0: number, param1: Point): any;
                public constructor();
                public static Point_setStyle(param0: number, param1: Point, param2: number, param3: styles.PointStyle): void;
                public static delete_Point(param0: number): void;
                public static Point_setPos(param0: number, param1: Point, param2: number, param3: core.MapPos): void;
                public static new_Point__SWIG_1(param0: number, param1: core.MapPos, param2: number, param3: styles.PointStyle): number;
                public static Point_setGeometry(param0: number, param1: Point, param2: number, param3: geometry.PointGeometry): void;
                public static Point_SWIGSmartPtrUpcast(param0: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Polygon extends VectorElement {
                public static class: java.lang.Class<Polygon>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Polygon;
                public getHoles(): core.MapPosVectorVector;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setGeometry(param0: geometry.PolygonGeometry): void;
                public setHoles(param0: core.MapPosVectorVector): void;
                public setPoses(param0: core.MapPosVector): void;
                public swigGetClassName(): string;
                public constructor(param0: geometry.PolygonGeometry, param1: styles.PolygonStyle);
                public getStyle(): styles.PolygonStyle;
                public swigGetDirectorObject(): any;
                public getGeometry(): geometry.PolygonGeometry;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: VectorElement): number;
                public constructor(param0: core.MapPosVector, param1: styles.PolygonStyle);
                public constructor(param0: core.MapPosVector, param1: core.MapPosVectorVector, param2: styles.PolygonStyle);
                public static getCPtr(param0: Polygon): number;
                public setStyle(param0: styles.PolygonStyle): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
                public getGeometry(): geometry.Geometry;
                public getPoses(): core.MapPosVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Polygon3D extends VectorElement {
                public static class: java.lang.Class<Polygon3D>;
                public setHeight(param0: number): void;
                public getHeight(): number;
                public getHoles(): core.MapPosVectorVector;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Polygon3D;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setGeometry(param0: geometry.PolygonGeometry): void;
                public setHoles(param0: core.MapPosVectorVector): void;
                public setPoses(param0: core.MapPosVector): void;
                public swigGetClassName(): string;
                public getStyle(): styles.Polygon3DStyle;
                public setStyle(param0: styles.Polygon3DStyle): void;
                public swigGetDirectorObject(): any;
                public constructor(param0: core.MapPosVector, param1: core.MapPosVectorVector, param2: styles.Polygon3DStyle, param3: number);
                public getGeometry(): geometry.PolygonGeometry;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: geometry.PolygonGeometry, param1: styles.Polygon3DStyle, param2: number);
                public static getCPtr(param0: VectorElement): number;
                public constructor(param0: core.MapPosVector, param1: styles.Polygon3DStyle, param2: number);
                public static getCPtr(param0: Polygon3D): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
                public getGeometry(): geometry.Geometry;
                public getPoses(): core.MapPosVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Polygon3DModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<Polygon3DModuleJNI>;
                public static Polygon3D_getGeometry(param0: number, param1: Polygon3D): number;
                public static delete_Polygon3D(param0: number): void;
                public static Polygon3D_setStyle(param0: number, param1: Polygon3D, param2: number, param3: styles.Polygon3DStyle): void;
                public static new_Polygon3D__SWIG_0(param0: number, param1: geometry.PolygonGeometry, param2: number, param3: styles.Polygon3DStyle, param4: number): number;
                public static Polygon3D_swigGetDirectorObject(param0: number, param1: Polygon3D): any;
                public static Polygon3D_getHoles(param0: number, param1: Polygon3D): number;
                public constructor();
                public static Polygon3D_swigGetClassName(param0: number, param1: Polygon3D): string;
                public static Polygon3D_getPoses(param0: number, param1: Polygon3D): number;
                public static Polygon3D_setPoses(param0: number, param1: Polygon3D, param2: number, param3: core.MapPosVector): void;
                public static Polygon3D_swigGetRawPtr(param0: number, param1: Polygon3D): number;
                public static Polygon3D_setHoles(param0: number, param1: Polygon3D, param2: number, param3: core.MapPosVectorVector): void;
                public static new_Polygon3D__SWIG_1(param0: number, param1: core.MapPosVector, param2: number, param3: styles.Polygon3DStyle, param4: number): number;
                public static Polygon3D_SWIGSmartPtrUpcast(param0: number): number;
                public static Polygon3D_getStyle(param0: number, param1: Polygon3D): number;
                public static Polygon3D_setGeometry(param0: number, param1: Polygon3D, param2: number, param3: geometry.PolygonGeometry): void;
                public static new_Polygon3D__SWIG_2(param0: number, param1: core.MapPosVector, param2: number, param3: core.MapPosVectorVector, param4: number, param5: styles.Polygon3DStyle, param6: number): number;
                public static Polygon3D_setHeight(param0: number, param1: Polygon3D, param2: number): void;
                public static Polygon3D_getHeight(param0: number, param1: Polygon3D): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class PolygonModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PolygonModuleJNI>;
                public static Polygon_getHoles(param0: number, param1: Polygon): number;
                public static Polygon_setHoles(param0: number, param1: Polygon, param2: number, param3: core.MapPosVectorVector): void;
                public static new_Polygon__SWIG_0(param0: number, param1: geometry.PolygonGeometry, param2: number, param3: styles.PolygonStyle): number;
                public static Polygon_SWIGSmartPtrUpcast(param0: number): number;
                public static Polygon_getPoses(param0: number, param1: Polygon): number;
                public static new_Polygon__SWIG_1(param0: number, param1: core.MapPosVector, param2: number, param3: styles.PolygonStyle): number;
                public static new_Polygon__SWIG_2(param0: number, param1: core.MapPosVector, param2: number, param3: core.MapPosVectorVector, param4: number, param5: styles.PolygonStyle): number;
                public static Polygon_getStyle(param0: number, param1: Polygon): number;
                public static Polygon_swigGetClassName(param0: number, param1: Polygon): string;
                public constructor();
                public static Polygon_swigGetDirectorObject(param0: number, param1: Polygon): any;
                public static delete_Polygon(param0: number): void;
                public static Polygon_setGeometry(param0: number, param1: Polygon, param2: number, param3: geometry.PolygonGeometry): void;
                public static Polygon_getGeometry(param0: number, param1: Polygon): number;
                public static Polygon_setPoses(param0: number, param1: Polygon, param2: number, param3: core.MapPosVector): void;
                public static Polygon_setStyle(param0: number, param1: Polygon, param2: number, param3: styles.PolygonStyle): void;
                public static Polygon_swigGetRawPtr(param0: number, param1: Polygon): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Popup extends Billboard {
                public static class: java.lang.Class<Popup>;
                public static getCPtr(param0: Popup): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Popup;
                public static getCPtr(param0: Billboard): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getStyle(): styles.PopupStyle;
                public getAnchorPointY(): number;
                public swigGetClassName(): string;
                public setAnchorPointY(param0: number): void;
                public drawBitmap(param0: core.ScreenPos, param1: number, param2: number, param3: number): graphics.Bitmap;
                public setAnchorPointX(param0: number): void;
                public swigGetDirectorObject(): any;
                public setStyle(param0: styles.PopupStyle): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: VectorElement): number;
                public setAnchorPoint(param0: number, param1: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Billboard;
                public processClick(param0: ui.ClickType, param1: core.MapPos, param2: core.ScreenPos): boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
                public getAnchorPointX(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class PopupModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<PopupModuleJNI>;
                public static Popup_swigGetRawPtr(param0: number, param1: Popup): number;
                public static Popup_setAnchorPoint(param0: number, param1: Popup, param2: number, param3: number): void;
                public static Popup_getAnchorPointX(param0: number, param1: Popup): number;
                public static Popup_setAnchorPointX(param0: number, param1: Popup, param2: number): void;
                public static Popup_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static Popup_setStyle(param0: number, param1: Popup, param2: number, param3: styles.PopupStyle): void;
                public static Popup_drawBitmap(param0: number, param1: Popup, param2: number, param3: core.ScreenPos, param4: number, param5: number, param6: number): number;
                public static Popup_swigGetDirectorObject(param0: number, param1: Popup): any;
                public static Popup_getStyle(param0: number, param1: Popup): number;
                public static Popup_getAnchorPointY(param0: number, param1: Popup): number;
                public static Popup_processClick(param0: number, param1: Popup, param2: number, param3: number, param4: core.MapPos, param5: number, param6: core.ScreenPos): boolean;
                public static delete_Popup(param0: number): void;
                public static Popup_setAnchorPointY(param0: number, param1: Popup, param2: number): void;
                public static Popup_swigGetClassName(param0: number, param1: Popup): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Text extends Label {
                public static class: java.lang.Class<Text>;
                public constructor(param0: Billboard, param1: styles.TextStyle, param2: string);
                public static getCPtr(param0: Billboard): number;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Label;
                public constructor(param0: number, param1: boolean);
                public setStyle(param0: styles.LabelStyle): void;
                public swigGetClassName(): string;
                public drawBitmap(param0: number): graphics.Bitmap;
                public swigGetDirectorObject(): any;
                public getText(): string;
                public static getCPtr(param0: Label): number;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Text;
                public getStyle(): styles.LabelStyle;
                public delete(): void;
                public static getCPtr(param0: VectorElement): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): Billboard;
                public static getCPtr(param0: Text): number;
                public constructor(param0: core.MapPos, param1: styles.TextStyle, param2: string);
                public getStyle(): styles.TextStyle;
                public setStyle(param0: styles.TextStyle): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
                public constructor(param0: geometry.Geometry, param1: styles.TextStyle, param2: string);
                public setText(param0: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class TextModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TextModuleJNI>;
                public static Text_setStyle(param0: number, param1: Text, param2: number, param3: styles.TextStyle): void;
                public static Text_swigGetDirectorObject(param0: number, param1: Text): any;
                public static Text_swigGetClassName(param0: number, param1: Text): string;
                public static Text_getStyle(param0: number, param1: Text): number;
                public constructor();
                public static Text_setText(param0: number, param1: Text, param2: string): void;
                public static new_Text__SWIG_0(param0: number, param1: Billboard, param2: number, param3: styles.TextStyle, param4: string): number;
                public static new_Text__SWIG_2(param0: number, param1: core.MapPos, param2: number, param3: styles.TextStyle, param4: string): number;
                public static Text_getText(param0: number, param1: Text): string;
                public static Text_swigGetRawPtr(param0: number, param1: Text): number;
                public static new_Text__SWIG_1(param0: number, param1: geometry.Geometry, param2: number, param3: styles.TextStyle, param4: string): number;
                public static delete_Text(param0: number): void;
                public static Text_drawBitmap(param0: number, param1: Text, param2: number): number;
                public static Text_SWIGSmartPtrUpcast(param0: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class VectorElement extends java.lang.Object {
                public static class: java.lang.Class<VectorElement>;
                public swigCMemOwn: boolean;
                public setMetaData(param0: core.StringVariantMap): void;
                public isVisible(): boolean;
                public notifyElementChanged(): void;
                public getId(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getBounds(): core.MapBounds;
                public swigGetClassName(): string;
                public swigGetDirectorObject(): any;
                public getMetaDataElement(param0: string): core.Variant;
                public swigGetRawPtr(): number;
                public delete(): void;
                public setMetaDataElement(param0: string, param1: core.Variant): void;
                public static getCPtr(param0: VectorElement): number;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public setId(param0: number): void;
                public getMetaData(): core.StringVariantMap;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorElement;
                public containsMetaDataKey(param0: string): boolean;
                public setVisible(param0: boolean): void;
                public getGeometry(): geometry.Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class VectorElementModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorElementModuleJNI>;
                public static VectorElement_getId(param0: number, param1: VectorElement): number;
                public static VectorElement_getMetaData(param0: number, param1: VectorElement): number;
                public static VectorElementVector_size(param0: number, param1: VectorElementVector): number;
                public static VectorElementVector_add(param0: number, param1: VectorElementVector, param2: number, param3: VectorElement): void;
                public static VectorElementVector_isEmpty(param0: number, param1: VectorElementVector): boolean;
                public static new_VectorElementVector__SWIG_0(): number;
                public static VectorElement_containsMetaDataKey(param0: number, param1: VectorElement, param2: string): boolean;
                public static VectorElementVector_reserve(param0: number, param1: VectorElementVector, param2: number): void;
                public constructor();
                public static VectorElement_getGeometry(param0: number, param1: VectorElement): number;
                public static VectorElementVector_get(param0: number, param1: VectorElementVector, param2: number): number;
                public static VectorElementVector_swigGetRawPtr(param0: number, param1: VectorElementVector): number;
                public static delete_VectorElement(param0: number): void;
                public static VectorElement_getBounds(param0: number, param1: VectorElement): number;
                public static new_VectorElementVector__SWIG_1(param0: number): number;
                public static VectorElement_notifyElementChanged(param0: number, param1: VectorElement): void;
                public static VectorElementVector_capacity(param0: number, param1: VectorElementVector): number;
                public static VectorElement_setMetaData(param0: number, param1: VectorElement, param2: number, param3: core.StringVariantMap): void;
                public static delete_VectorElementVector(param0: number): void;
                public static VectorElement_setVisible(param0: number, param1: VectorElement, param2: boolean): void;
                public static VectorElement_setId(param0: number, param1: VectorElement, param2: number): void;
                public static VectorElementVector_set(param0: number, param1: VectorElementVector, param2: number, param3: number, param4: VectorElement): void;
                public static VectorElement_setMetaDataElement(param0: number, param1: VectorElement, param2: string, param3: number, param4: core.Variant): void;
                public static VectorElement_getMetaDataElement(param0: number, param1: VectorElement, param2: string): number;
                public static VectorElement_swigGetClassName(param0: number, param1: VectorElement): string;
                public static VectorElement_swigGetDirectorObject(param0: number, param1: VectorElement): any;
                public static VectorElement_isVisible(param0: number, param1: VectorElement): boolean;
                public static VectorElementVector_clear(param0: number, param1: VectorElementVector): void;
                public static VectorElement_swigGetRawPtr(param0: number, param1: VectorElement): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class VectorElementVector extends java.lang.Object {
                public static class: java.lang.Class<VectorElementVector>;
                public swigCMemOwn: boolean;
                public get(param0: number): VectorElement;
                public add(param0: VectorElement): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: VectorElementVector): number;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public set(param0: number, param1: VectorElement): void;
                public isEmpty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectortiles {
            export class CartoVectorTileDecoder extends VectorTileDecoder {
                public static class: java.lang.Class<CartoVectorTileDecoder>;
                public addFallbackFont(param0: core.BinaryData): void;
                public setLayerStyleSet(param0: string, param1: styles.CartoCSSStyleSet): void;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileDecoder;
                public constructor(param0: core.StringVector, param1: styles.StringCartoCSSStyleSetMap);
                public setLayerVisible(param0: string, param1: boolean): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getMaxZoom(): number;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public isLayerVisible(param0: string): boolean;
                public static getCPtr(param0: CartoVectorTileDecoder): number;
                public delete(): void;
                public getLayerStyleSet(param0: string): styles.CartoCSSStyleSet;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): CartoVectorTileDecoder;
                public getLayerIds(): core.StringVector;
                public static getCPtr(param0: VectorTileDecoder): number;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectortiles {
            export class CartoVectorTileDecoderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<CartoVectorTileDecoderModuleJNI>;
                public static CartoVectorTileDecoder_setLayerStyleSet(param0: number, param1: CartoVectorTileDecoder, param2: string, param3: number, param4: styles.CartoCSSStyleSet): void;
                public static CartoVectorTileDecoder_swigGetRawPtr(param0: number, param1: CartoVectorTileDecoder): number;
                public constructor();
                public static CartoVectorTileDecoder_swigGetDirectorObject(param0: number, param1: CartoVectorTileDecoder): any;
                public static new_CartoVectorTileDecoder(param0: number, param1: core.StringVector, param2: number, param3: styles.StringCartoCSSStyleSetMap): number;
                public static CartoVectorTileDecoder_swigGetClassName(param0: number, param1: CartoVectorTileDecoder): string;
                public static CartoVectorTileDecoder_getLayerIds(param0: number, param1: CartoVectorTileDecoder): number;
                public static CartoVectorTileDecoder_SWIGSmartPtrUpcast(param0: number): number;
                public static CartoVectorTileDecoder_addFallbackFont(param0: number, param1: CartoVectorTileDecoder, param2: number, param3: core.BinaryData): void;
                public static CartoVectorTileDecoder_setLayerVisible(param0: number, param1: CartoVectorTileDecoder, param2: string, param3: boolean): void;
                public static CartoVectorTileDecoder_getLayerStyleSet(param0: number, param1: CartoVectorTileDecoder, param2: string): number;
                public static CartoVectorTileDecoder_getMinZoom(param0: number, param1: CartoVectorTileDecoder): number;
                public static CartoVectorTileDecoder_isLayerVisible(param0: number, param1: CartoVectorTileDecoder, param2: string): boolean;
                public static delete_CartoVectorTileDecoder(param0: number): void;
                public static CartoVectorTileDecoder_getMaxZoom(param0: number, param1: CartoVectorTileDecoder): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectortiles {
            export class MBVectorTileDecoder extends VectorTileDecoder {
                public static class: java.lang.Class<MBVectorTileDecoder>;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): MBVectorTileDecoder;
                public constructor(param0: styles.CartoCSSStyleSet);
                public getCartoCSSStyleSet(): styles.CartoCSSStyleSet;
                public getStyleParameters(): core.StringVector;
                public addFallbackFont(param0: core.BinaryData): void;
                public constructor(param0: styles.CompiledStyleSet);
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileDecoder;
                public setCartoCSSStyleSet(param0: styles.CartoCSSStyleSet): void;
                public constructor(param0: number, param1: boolean);
                public setCompiledStyleSet(param0: styles.CompiledStyleSet): void;
                public getCompiledStyleSet(): styles.CompiledStyleSet;
                public swigGetClassName(): string;
                public static getCPtr(param0: MBVectorTileDecoder): number;
                public setStyleParameter(param0: string, param1: string): boolean;
                public getMaxZoom(): number;
                public swigGetDirectorObject(): any;
                public getStyleParameter(param0: string): string;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: VectorTileDecoder): number;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectortiles {
            export class MBVectorTileDecoderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<MBVectorTileDecoderModuleJNI>;
                public static MBVectorTileDecoder_getCartoCSSStyleSet(param0: number, param1: MBVectorTileDecoder): number;
                public static MBVectorTileDecoder_setCartoCSSStyleSet(param0: number, param1: MBVectorTileDecoder, param2: number, param3: styles.CartoCSSStyleSet): void;
                public static new_MBVectorTileDecoder__SWIG_0(param0: number, param1: styles.CompiledStyleSet): number;
                public static MBVectorTileDecoder_SWIGSmartPtrUpcast(param0: number): number;
                public static MBVectorTileDecoder_swigGetRawPtr(param0: number, param1: MBVectorTileDecoder): number;
                public static MBVectorTileDecoder_addFallbackFont(param0: number, param1: MBVectorTileDecoder, param2: number, param3: core.BinaryData): void;
                public static MBVectorTileDecoder_setCompiledStyleSet(param0: number, param1: MBVectorTileDecoder, param2: number, param3: styles.CompiledStyleSet): void;
                public constructor();
                public static MBVectorTileDecoder_getStyleParameters(param0: number, param1: MBVectorTileDecoder): number;
                public static MBVectorTileDecoder_swigGetDirectorObject(param0: number, param1: MBVectorTileDecoder): any;
                public static MBVectorTileDecoder_getCompiledStyleSet(param0: number, param1: MBVectorTileDecoder): number;
                public static MBVectorTileDecoder_getStyleParameter(param0: number, param1: MBVectorTileDecoder, param2: string): string;
                public static MBVectorTileDecoder_getMinZoom(param0: number, param1: MBVectorTileDecoder): number;
                public static MBVectorTileDecoder_getMaxZoom(param0: number, param1: MBVectorTileDecoder): number;
                public static new_MBVectorTileDecoder__SWIG_1(param0: number, param1: styles.CartoCSSStyleSet): number;
                public static delete_MBVectorTileDecoder(param0: number): void;
                public static MBVectorTileDecoder_setStyleParameter(param0: number, param1: MBVectorTileDecoder, param2: string, param3: string): boolean;
                public static MBVectorTileDecoder_swigGetClassName(param0: number, param1: MBVectorTileDecoder): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectortiles {
            export class TorqueTileDecoder extends VectorTileDecoder {
                public static class: java.lang.Class<TorqueTileDecoder>;
                public constructor(param0: styles.CartoCSSStyleSet);
                public addFallbackFont(param0: core.BinaryData): void;
                public getStyleSet(): styles.CartoCSSStyleSet;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileDecoder;
                public constructor(param0: number, param1: boolean);
                public getFrameCount(): number;
                public swigGetClassName(): string;
                public setResolution(param0: number): void;
                public getMaxZoom(): number;
                public swigGetDirectorObject(): any;
                public setStyleSet(param0: styles.CartoCSSStyleSet): void;
                public swigGetRawPtr(): number;
                public getResolution(): number;
                public static getCPtr(param0: TorqueTileDecoder): number;
                public delete(): void;
                public static getCPtr(param0: VectorTileDecoder): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): TorqueTileDecoder;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectortiles {
            export class TorqueTileDecoderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<TorqueTileDecoderModuleJNI>;
                public static TorqueTileDecoder_setStyleSet(param0: number, param1: TorqueTileDecoder, param2: number, param3: styles.CartoCSSStyleSet): void;
                public static TorqueTileDecoder_setResolution(param0: number, param1: TorqueTileDecoder, param2: number): void;
                public static TorqueTileDecoder_SWIGSmartPtrUpcast(param0: number): number;
                public static new_TorqueTileDecoder(param0: number, param1: styles.CartoCSSStyleSet): number;
                public static TorqueTileDecoder_getResolution(param0: number, param1: TorqueTileDecoder): number;
                public static TorqueTileDecoder_addFallbackFont(param0: number, param1: TorqueTileDecoder, param2: number, param3: core.BinaryData): void;
                public static TorqueTileDecoder_getMaxZoom(param0: number, param1: TorqueTileDecoder): number;
                public static TorqueTileDecoder_swigGetDirectorObject(param0: number, param1: TorqueTileDecoder): any;
                public constructor();
                public static TorqueTileDecoder_swigGetClassName(param0: number, param1: TorqueTileDecoder): string;
                public static TorqueTileDecoder_getFrameCount(param0: number, param1: TorqueTileDecoder): number;
                public static TorqueTileDecoder_getMinZoom(param0: number, param1: TorqueTileDecoder): number;
                public static delete_TorqueTileDecoder(param0: number): void;
                public static TorqueTileDecoder_swigGetRawPtr(param0: number, param1: TorqueTileDecoder): number;
                public static TorqueTileDecoder_getStyleSet(param0: number, param1: TorqueTileDecoder): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectortiles {
            export class VectorTileDecoder extends java.lang.Object {
                public static class: java.lang.Class<VectorTileDecoder>;
                public swigCMemOwn: boolean;
                public addFallbackFont(param0: core.BinaryData): void;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): VectorTileDecoder;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getMaxZoom(): number;
                public swigGetDirectorObject(): any;
                public swigGetRawPtr(): number;
                public delete(): void;
                public notifyDecoderChanged(): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public static getCPtr(param0: VectorTileDecoder): number;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectortiles {
            export class VectorTileDecoderModuleJNI extends java.lang.Object {
                public static class: java.lang.Class<VectorTileDecoderModuleJNI>;
                public static delete_VectorTileDecoder(param0: number): void;
                public static VectorTileDecoder_notifyDecoderChanged(param0: number, param1: VectorTileDecoder): void;
                public static VectorTileDecoder_addFallbackFont(param0: number, param1: VectorTileDecoder, param2: number, param3: core.BinaryData): void;
                public static VectorTileDecoder_swigGetClassName(param0: number, param1: VectorTileDecoder): string;
                public static VectorTileDecoder_getMaxZoom(param0: number, param1: VectorTileDecoder): number;
                public static VectorTileDecoder_swigGetDirectorObject(param0: number, param1: VectorTileDecoder): any;
                public static VectorTileDecoder_getMinZoom(param0: number, param1: VectorTileDecoder): number;
                public static VectorTileDecoder_swigGetRawPtr(param0: number, param1: VectorTileDecoder): number;
                public constructor();
            }
        }
    }
}

//Generics information:

