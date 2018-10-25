import javalangObject = java.lang.Object;
import javalangClass = java.lang.Class;
import javalangEnum = java.lang.Enum;
import javalangannotationAnnotation = java.lang.annotation.Annotation;
import javalangRunnable = java.lang.Runnable;
import javautilList = java.util.List;
import javamathBigInteger = java.math.BigInteger;

declare namespace com {
    export namespace carto {
        export namespace components {
            export class Layers extends javalangObject {
                public swigCMemOwn: boolean;
                public insert(param0: number, param1: com.carto.layers.Layer): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public set(param0: number, param1: com.carto.layers.Layer): void;
                public removeAll(param0: com.carto.layers.LayerVector): boolean;
                public remove(param0: com.carto.layers.Layer): boolean;
                public swigGetRawPtr(): number;
                public get(param0: number): com.carto.layers.Layer;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public addAll(param0: com.carto.layers.LayerVector): void;
                public hashCode(): number;
                public getAll(): com.carto.layers.LayerVector;
                public clear(): void;
                public static getCPtr(param0: com.carto.components.Layers): number;
                public setAll(param0: com.carto.layers.LayerVector): void;
                public add(param0: com.carto.layers.Layer): void;
                public count(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class LicenseManagerListener extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static getCPtr(param0: com.carto.components.LicenseManagerListener): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public onLicenseUpdated(param0: string): void;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.components.LicenseManagerListener;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class Options extends javalangObject {
                public swigCMemOwn: boolean;
                public setTileThreadPoolSize(param0: number): void;
                public setDPI(param0: number): void;
                public setWatermarkAlignmentY(param0: number): void;
                public setUserInput(param0: boolean): void;
                public getPivotMode(): com.carto.components.PivotMode;
                public setEnvelopeThreadPoolSize(param0: number): void;
                public isRotatable(): boolean;
                public setWatermarkPadding(param0: com.carto.core.ScreenPos): void;
                public setBackgroundBitmap(param0: com.carto.graphics.Bitmap): void;
                public getWatermarkBitmap(): com.carto.graphics.Bitmap;
                public hashCode(): number;
                public getBackgroundBitmap(): com.carto.graphics.Bitmap;
                public setZoomGestures(param0: boolean): void;
                public getAmbientLightColor(): com.carto.graphics.Color;
                public isZoomGestures(): boolean;
                public setWatermarkAlignmentX(param0: number): void;
                public setMainLightColor(param0: com.carto.graphics.Color): void;
                public getFieldOfViewY(): number;
                public setKineticRotation(param0: boolean): void;
                public getPanBounds(): com.carto.core.MapBounds;
                public setTiltRange(param0: com.carto.core.MapRange): void;
                public setMainLightDirection(param0: com.carto.core.MapVec): void;
                public setTileDrawSize(param0: number): void;
                public setClickTypeDetection(param0: boolean): void;
                public setRotatable(param0: boolean): void;
                public isSeamlessPanning(): boolean;
                public setWatermarkBitmap(param0: com.carto.graphics.Bitmap): void;
                public setTiltGestureReversed(param0: boolean): void;
                public isClickTypeDetection(): boolean;
                public setRestrictedPanning(param0: boolean): void;
                public setBaseProjection(param0: com.carto.projections.Projection): void;
                public setFieldOfViewY(param0: number): void;
                public setClearColor(param0: com.carto.graphics.Color): void;
                public getFocusPointOffset(): com.carto.core.ScreenPos;
                public getTileThreadPoolSize(): number;
                public getDrawDistance(): number;
                public setAmbientLightColor(param0: com.carto.graphics.Color): void;
                public isTiltGestureReversed(): boolean;
                public setSeamlessPanning(param0: boolean): void;
                public getWatermarkScale(): number;
                public isKineticRotation(): boolean;
                public finalize(): void;
                public setPivotMode(param0: com.carto.components.PivotMode): void;
                public isUserInput(): boolean;
                public setPanBounds(param0: com.carto.core.MapBounds): void;
                public getWatermarkAlignmentX(): number;
                public getClearColor(): com.carto.graphics.Color;
                public getTiltRange(): com.carto.core.MapRange;
                public setPanningMode(param0: com.carto.components.PanningMode): void;
                public setKineticPan(param0: boolean): void;
                public delete(): void;
                public getWatermarkPadding(): com.carto.core.ScreenPos;
                public isKineticZoom(): boolean;
                public getDPI(): number;
                public getProjectionMode(): com.carto.components.ProjectionMode;
                public getWatermarkAlignmentY(): number;
                public setZoomRange(param0: com.carto.core.MapRange): void;
                public getSkyBitmap(): com.carto.graphics.Bitmap;
                public getBaseProjection(): com.carto.projections.Projection;
                public static getCPtr(param0: com.carto.components.Options): number;
                public constructor(param0: number, param1: boolean);
                public isKineticPan(): boolean;
                public getZoomRange(): com.carto.core.MapRange;
                public setDrawDistance(param0: number): void;
                public getPanningMode(): com.carto.components.PanningMode;
                public swigGetRawPtr(): number;
                public setSkyBitmap(param0: com.carto.graphics.Bitmap): void;
                public equals(param0: javalangObject): boolean;
                public getMainLightDirection(): com.carto.core.MapVec;
                public getMainLightColor(): com.carto.graphics.Color;
                public getTileDrawSize(): number;
                public setProjectionMode(param0: com.carto.components.ProjectionMode): void;
                public isRestrictedPanning(): boolean;
                public setWatermarkScale(param0: number): void;
                public setKineticZoom(param0: boolean): void;
                public getEnvelopeThreadPoolSize(): number;
                public setFocusPointOffset(param0: com.carto.core.ScreenPos): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class PanningMode extends javalangEnum<any> {
                public static PANNING_MODE_FREE: com.carto.components.PanningMode;
                public static PANNING_MODE_STICKY: com.carto.components.PanningMode;
                public static PANNING_MODE_STICKY_FINAL: com.carto.components.PanningMode;
                public static values(): native.Array<com.carto.components.PanningMode>;
                public swigValue(): number;
                public static swigToEnum(param0: number): com.carto.components.PanningMode;
                public static valueOf(param0: string): com.carto.components.PanningMode;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace PanningMode {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace components {
            export class PivotMode extends javalangEnum<any> {
                public static PIVOT_MODE_TOUCHPOINT: com.carto.components.PivotMode;
                public static PIVOT_MODE_CENTERPOINT: com.carto.components.PivotMode;
                public static valueOf(param0: string): com.carto.components.PivotMode;
                public swigValue(): number;
                public static swigToEnum(param0: number): com.carto.components.PivotMode;
                public static values(): native.Array<com.carto.components.PivotMode>;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace PivotMode {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}
declare namespace com {
    export namespace carto {
        export namespace components {
            export class ProjectionMode extends javalangEnum<any> {
                public static PROJECTION_MODE_ORTHOGONAL: com.carto.components.ProjectionMode;
                public static PROJECTION_MODE_PERSPECTIVE: com.carto.components.ProjectionMode;
                public swigValue(): number;
                public static values(): native.Array<com.carto.components.ProjectionMode>;
                public static valueOf(param0: string): com.carto.components.ProjectionMode;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
                public static swigToEnum(param0: number): com.carto.components.ProjectionMode;
            }
            export namespace ProjectionMode {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class Address extends javalangObject {
                public swigCMemOwn: boolean;
                public constructor(
                    param0: string,
                    param1: string,
                    param2: string,
                    param3: string,
                    param4: string,
                    param5: string,
                    param6: string,
                    param7: string,
                    param8: string,
                    param9: com.carto.core.StringVector
                );
                public getStreet(): string;
                public getCountry(): string;
                public finalize(): void;
                public getCounty(): string;
                public constructor(param0: number, param1: boolean);
                public getName(): string;
                public getCategories(): com.carto.core.StringVector;
                public toString(): string;
                public getNeighbourhood(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.core.Address): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
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
    export namespace carto {
        export namespace core {
            export class BinaryData extends javalangObject {
                public swigCMemOwn: boolean;
                public constructor(param0: native.Array<number>);
                public getData(): native.Array<number>;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.core.BinaryData): number;
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
            export class IntVector extends javalangObject {
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public get(param0: number): number;
                public static getCPtr(param0: com.carto.core.IntVector): number;
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
            export class MapBounds extends javalangObject {
                public swigCMemOwn: boolean;
                public getMax(): com.carto.core.MapPos;
                public contains(param0: com.carto.core.MapPos): boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getCenter(): com.carto.core.MapPos;
                public toString(): string;
                public intersects(param0: com.carto.core.MapBounds): boolean;
                public constructor();
                public getMin(): com.carto.core.MapPos;
                public constructor(param0: com.carto.core.MapPos, param1: com.carto.core.MapPos);
                public swigGetRawPtr(): number;
                public getDelta(): com.carto.core.MapVec;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public contains(param0: com.carto.core.MapBounds): boolean;
                public static getCPtr(param0: com.carto.core.MapBounds): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapEnvelope extends javalangObject {
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getBounds(): com.carto.core.MapBounds;
                public contains(param0: com.carto.core.MapEnvelope): boolean;
                public toString(): string;
                public constructor();
                public intersects(param0: com.carto.core.MapEnvelope): boolean;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public constructor(param0: com.carto.core.MapPosVector);
                public hashCode(): number;
                public constructor(param0: com.carto.core.MapBounds);
                public getConvexHull(): com.carto.core.MapPosVector;
                public static getCPtr(param0: com.carto.core.MapEnvelope): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapPos extends javalangObject {
                public swigCMemOwn: boolean;
                public constructor(param0: number, param1: number);
                public constructor(param0: number, param1: number, param2: number);
                public subVec(param0: com.carto.core.MapVec): com.carto.core.MapPos;
                public add(param0: com.carto.core.MapVec): com.carto.core.MapPos;
                public getY(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public subPos(param0: com.carto.core.MapPos): com.carto.core.MapVec;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getX(): number;
                public getZ(): number;
                public static getCPtr(param0: com.carto.core.MapPos): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapPosVector extends javalangObject {
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.core.MapPosVector): number;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public get(param0: number): com.carto.core.MapPos;
                public swigGetRawPtr(): number;
                public add(param0: com.carto.core.MapPos): void;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public set(param0: number, param1: com.carto.core.MapPos): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapPosVectorVector extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.core.MapPosVectorVector): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public add(param0: com.carto.core.MapPosVector): void;
                public set(param0: number, param1: com.carto.core.MapPosVector): void;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public get(param0: number): com.carto.core.MapPosVector;
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
            export class MapRange extends javalangObject {
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
                public static getCPtr(param0: com.carto.core.MapRange): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapTile extends javalangObject {
                public swigCMemOwn: boolean;
                public getTileId(): number;
                public getZoom(): number;
                public getY(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public constructor();
                public static getCPtr(param0: com.carto.core.MapTile): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public hashCode(): number;
                public getX(): number;
                public getFrameNr(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class MapVec extends javalangObject {
                public swigCMemOwn: boolean;
                public constructor(param0: number, param1: number);
                public mul(param0: number): com.carto.core.MapVec;
                public constructor(param0: number, param1: number, param2: number);
                public getRotated2D(param0: number, param1: number): com.carto.core.MapVec;
                public crossProduct3D(param0: com.carto.core.MapVec): com.carto.core.MapVec;
                public getY(): number;
                public length(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public sub(param0: com.carto.core.MapVec): com.carto.core.MapVec;
                public crossProduct2D(param0: com.carto.core.MapVec): number;
                public toString(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.core.MapVec): number;
                public dotProduct(param0: com.carto.core.MapVec): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getX(): number;
                public div(param0: number): com.carto.core.MapVec;
                public getZ(): number;
                public add(param0: com.carto.core.MapVec): com.carto.core.MapVec;
                public getNormalized(): com.carto.core.MapVec;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class ScreenBounds extends javalangObject {
                public swigCMemOwn: boolean;
                public intersects(param0: com.carto.core.ScreenBounds): boolean;
                public static getCPtr(param0: com.carto.core.ScreenBounds): number;
                public getHeight(): number;
                public getMin(): com.carto.core.ScreenPos;
                public constructor(param0: com.carto.core.ScreenPos, param1: com.carto.core.ScreenPos);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public constructor();
                public getCenter(): com.carto.core.ScreenPos;
                public swigGetRawPtr(): number;
                public getWidth(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public contains(param0: com.carto.core.ScreenBounds): boolean;
                public hashCode(): number;
                public getMax(): com.carto.core.ScreenPos;
                public contains(param0: com.carto.core.ScreenPos): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class ScreenPos extends javalangObject {
                public swigCMemOwn: boolean;
                public constructor(param0: number, param1: number);
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getX(): number;
                public getY(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public static getCPtr(param0: com.carto.core.ScreenPos): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class ScreenPosVector extends javalangObject {
                public swigCMemOwn: boolean;
                public set(param0: number, param1: com.carto.core.ScreenPos): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public static getCPtr(param0: com.carto.core.ScreenPosVector): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public add(param0: com.carto.core.ScreenPos): void;
                public get(param0: number): com.carto.core.ScreenPos;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class StringMap extends javalangObject {
                public swigCMemOwn: boolean;
                public get(param0: string): string;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.core.StringMap): number;
                public constructor(param0: com.carto.core.StringMap);
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
            export class StringVariantMap extends javalangObject {
                public swigCMemOwn: boolean;
                public set(param0: string, param1: com.carto.core.Variant): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public get(param0: string): com.carto.core.Variant;
                public static getCPtr(param0: com.carto.core.StringVariantMap): number;
                public del(param0: string): void;
                public constructor();
                public constructor(param0: com.carto.core.StringVariantMap);
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
            export class StringVector extends javalangObject {
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
                public static getCPtr(param0: com.carto.core.StringVector): number;
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
            export class Variant extends javalangObject {
                public swigCMemOwn: boolean;
                public constructor(param0: com.carto.core.VariantVector);
                public getBool(): boolean;
                public static getCPtr(param0: com.carto.core.Variant): number;
                public finalize(): void;
                public constructor(param0: boolean);
                public getObjectKeys(): com.carto.core.StringVector;
                public constructor(param0: string);
                public constructor();
                public constructor(param0: com.carto.core.StringVariantMap);
                public delete(): void;
                public hashCode(): number;
                public getType(): com.carto.core.VariantType;
                public getString(): string;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public static fromString(param0: string): com.carto.core.Variant;
                public swigGetRawPtr(): number;
                public getDouble(): number;
                public equals(param0: javalangObject): boolean;
                public getArrayElement(param0: number): com.carto.core.Variant;
                public containsObjectKey(param0: string): boolean;
                public constructor(param0: number);
                public getArraySize(): number;
                public getObjectElement(param0: string): com.carto.core.Variant;
                public getLong(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class VariantArrayBuilder extends javalangObject {
                public swigCMemOwn: boolean;
                public buildVariant(): com.carto.core.Variant;
                public static getCPtr(param0: com.carto.core.VariantArrayBuilder): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public addLong(param0: number): void;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public addBool(param0: boolean): void;
                public addDouble(param0: number): void;
                public addString(param0: string): void;
                public addVariant(param0: com.carto.core.Variant): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class VariantObjectBuilder extends javalangObject {
                public swigCMemOwn: boolean;
                public buildVariant(): com.carto.core.Variant;
                public setBool(param0: string, param1: boolean): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public static getCPtr(param0: com.carto.core.VariantObjectBuilder): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public setVariant(param0: string, param1: com.carto.core.Variant): void;
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
            export class VariantType extends javalangEnum<any> {
                public static VARIANT_TYPE_NULL: com.carto.core.VariantType;
                public static VARIANT_TYPE_STRING: com.carto.core.VariantType;
                public static VARIANT_TYPE_BOOL: com.carto.core.VariantType;
                public static VARIANT_TYPE_INTEGER: com.carto.core.VariantType;
                public static VARIANT_TYPE_DOUBLE: com.carto.core.VariantType;
                public static VARIANT_TYPE_ARRAY: com.carto.core.VariantType;
                public static VARIANT_TYPE_OBJECT: com.carto.core.VariantType;
                public swigValue(): number;
                public static valueOf(param0: string): com.carto.core.VariantType;
                public static values(): native.Array<com.carto.core.VariantType>;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
                public static swigToEnum(param0: number): com.carto.core.VariantType;
            }
            export namespace VariantType {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace core {
            export class VariantVector extends javalangObject {
                public swigCMemOwn: boolean;
                public set(param0: number, param1: com.carto.core.Variant): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public add(param0: com.carto.core.Variant): void;
                public get(param0: number): com.carto.core.Variant;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: com.carto.core.VariantVector): number;
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
            export class AssetTileDataSource extends com.carto.datasources.TileDataSource {
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public constructor(param0: number, param1: number, param2: string);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public buildAssetPath(param0: string, param1: com.carto.core.MapTile): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.AssetTileDataSource;
                public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
                public static getCPtr(param0: com.carto.datasources.AssetTileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class BitmapOverlayRasterTileDataSource extends com.carto.datasources.TileDataSource {
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public constructor(
                    param0: number,
                    param1: number,
                    param2: com.carto.graphics.Bitmap,
                    param3: com.carto.projections.Projection,
                    param4: com.carto.core.MapPosVector,
                    param5: com.carto.core.ScreenPosVector
                );
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.BitmapOverlayRasterTileDataSource;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public getDataExtent(): com.carto.core.MapBounds;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class CacheTileDataSource extends com.carto.datasources.TileDataSource {
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.CacheTileDataSource;
                public static getCPtr(param0: com.carto.datasources.CacheTileDataSource): number;
                public setCapacity(param0: number): void;
                public finalize(): void;
                public getCapacity(): number;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
                public swigGetClassName(): string;
                public getDataSource(): com.carto.datasources.TileDataSource;
                public getMaxZoom(): number;
                public constructor();
                public swigGetRawPtr(): number;
                public constructor(param0: com.carto.datasources.TileDataSource);
                public delete(): void;
                public clear(): void;
                public swigTakeOwnership(): void;
                public getDataExtent(): com.carto.core.MapBounds;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
                public notifyTilesChanged(param0: boolean): void;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class CartoOnlineTileDataSource extends com.carto.datasources.TileDataSource {
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static getCPtr(param0: com.carto.datasources.CartoOnlineTileDataSource): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
                public constructor(param0: string);
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.CartoOnlineTileDataSource;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class CombinedTileDataSource extends com.carto.datasources.TileDataSource {
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
                public getMaxZoom(): number;
                public constructor();
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.CombinedTileDataSource;
                public delete(): void;
                public swigTakeOwnership(): void;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.datasources.TileDataSource, param2: number);
                public static getCPtr(param0: com.carto.datasources.CombinedTileDataSource): number;
                public getDataExtent(): com.carto.core.MapBounds;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class HTTPTileDataSource extends com.carto.datasources.TileDataSource {
                public constructor(param0: number, param1: number);
                public setTMSScheme(param0: boolean): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public setSubdomains(param0: com.carto.core.StringVector): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
                public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
                public constructor();
                public setHTTPHeaders(param0: com.carto.core.StringMap): void;
                public delete(): void;
                public setMaxAgeHeaderCheck(param0: boolean): void;
                public static getCPtr(param0: com.carto.datasources.HTTPTileDataSource): number;
                public swigGetDirectorObject(): javalangObject;
                public swigReleaseOwnership(): void;
                public getSubdomains(): com.carto.core.StringVector;
                public isTMSScheme(): boolean;
                public constructor(param0: number, param1: number, param2: string);
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getHTTPHeaders(): com.carto.core.StringMap;
                public buildTileURL(param0: string, param1: com.carto.core.MapTile): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.HTTPTileDataSource;
                public swigGetRawPtr(): number;
                public isMaxAgeHeaderCheck(): boolean;
                public getBaseURL(): string;
                public swigTakeOwnership(): void;
                public setBaseURL(param0: string): void;
                public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class LocalSpatialIndexType extends javalangEnum<any> {
                public static LOCAL_SPATIAL_INDEX_TYPE_NULL: com.carto.datasources.LocalSpatialIndexType;
                public static LOCAL_SPATIAL_INDEX_TYPE_KDTREE: com.carto.datasources.LocalSpatialIndexType;
                public swigValue(): number;
                public static swigToEnum(param0: number): com.carto.datasources.LocalSpatialIndexType;
                public static values(): native.Array<com.carto.datasources.LocalSpatialIndexType>;
                public static valueOf(param0: string): com.carto.datasources.LocalSpatialIndexType;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace LocalSpatialIndexType {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class LocalVectorDataSource extends com.carto.datasources.VectorDataSource {
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public getAll(): com.carto.vectorelements.VectorElementVector;
                public setGeometrySimplifier(param0: com.carto.geometry.GeometrySimplifier): void;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.VectorDataSource;
                public constructor(param0: com.carto.projections.Projection);
                public clear(): void;
                public loadElements(param0: com.carto.renderers.components.CullState): com.carto.datasources.components.VectorData;
                public getDataExtent(): com.carto.core.MapBounds;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.datasources.LocalVectorDataSource): number;
                public constructor(param0: com.carto.projections.Projection, param1: com.carto.datasources.LocalSpatialIndexType);
                public static getCPtr(param0: com.carto.datasources.VectorDataSource): number;
                public setAll(param0: com.carto.vectorelements.VectorElementVector): void;
                public addAll(param0: com.carto.vectorelements.VectorElementVector): void;
                public swigReleaseOwnership(): void;
                public removeAll(param0: com.carto.vectorelements.VectorElementVector): boolean;
                public add(param0: com.carto.vectorelements.VectorElement): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public remove(param0: com.carto.vectorelements.VectorElement): boolean;
                public swigGetRawPtr(): number;
                public getGeometrySimplifier(): com.carto.geometry.GeometrySimplifier;
                public addFeatureCollection(param0: com.carto.geometry.FeatureCollection, param1: com.carto.styles.Style): void;
                public getFeatureCollection(): com.carto.geometry.FeatureCollection;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.LocalVectorDataSource;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class MBTilesScheme extends javalangEnum<any> {
                public static MBTILES_SCHEME_TMS: com.carto.datasources.MBTilesScheme;
                public static MBTILES_SCHEME_XYZ: com.carto.datasources.MBTilesScheme;
                public static values(): native.Array<com.carto.datasources.MBTilesScheme>;
                public static valueOf(param0: string): com.carto.datasources.MBTilesScheme;
                public static swigToEnum(param0: number): com.carto.datasources.MBTilesScheme;
                public swigValue(): number;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace MBTilesScheme {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class MBTilesTileDataSource extends com.carto.datasources.TileDataSource {
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public getMetaData(): com.carto.core.StringMap;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.MBTilesTileDataSource;
                public constructor(param0: number, param1: number, param2: string);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
                public constructor(param0: string);
                public constructor();
                public static getCPtr(param0: com.carto.datasources.MBTilesTileDataSource): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public getDataExtent(): com.carto.core.MapBounds;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
                public constructor(param0: number, param1: number, param2: string, param3: com.carto.datasources.MBTilesScheme);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class MemoryCacheTileDataSource extends com.carto.datasources.CacheTileDataSource {
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.CacheTileDataSource;
                public static getCPtr(param0: com.carto.datasources.CacheTileDataSource): number;
                public setCapacity(param0: number): void;
                public finalize(): void;
                public getCapacity(): number;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.MemoryCacheTileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
                public constructor();
                public swigGetRawPtr(): number;
                public constructor(param0: com.carto.datasources.TileDataSource);
                public delete(): void;
                public clear(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
                public static getCPtr(param0: com.carto.datasources.MemoryCacheTileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class NMLModelLODTreeDataSource extends javalangObject {
                public swigCMemOwn: boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.NMLModelLODTreeDataSource;
                public swigGetRawPtr(): number;
                public getProjection(): com.carto.projections.Projection;
                public static getCPtr(param0: com.carto.datasources.NMLModelLODTreeDataSource): number;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getDataExtent(): com.carto.core.MapBounds;
                public swigGetDirectorObject(): javalangObject;
                public swigGetClassName(): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class OfflineNMLModelLODTreeDataSource extends com.carto.datasources.NMLModelLODTreeDataSource {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.NMLModelLODTreeDataSource;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.datasources.NMLModelLODTreeDataSource): number;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.OfflineNMLModelLODTreeDataSource;
                public getDataExtent(): com.carto.core.MapBounds;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.datasources.OfflineNMLModelLODTreeDataSource): number;
                public swigGetClassName(): string;
                public constructor(param0: string);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class OnlineNMLModelLODTreeDataSource extends com.carto.datasources.NMLModelLODTreeDataSource {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.NMLModelLODTreeDataSource;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.OnlineNMLModelLODTreeDataSource;
                public static getCPtr(param0: com.carto.datasources.NMLModelLODTreeDataSource): number;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.datasources.OnlineNMLModelLODTreeDataSource): number;
                public swigGetDirectorObject(): javalangObject;
                public swigGetClassName(): string;
                public constructor(param0: string);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class PackageManagerTileDataSource extends com.carto.datasources.TileDataSource {
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.PackageManagerTileDataSource;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
                public getPackageManager(): com.carto.packagemanager.PackageManager;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public constructor(param0: com.carto.packagemanager.PackageManager);
                public static getCPtr(param0: com.carto.datasources.PackageManagerTileDataSource): number;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class PersistentCacheTileDataSource extends com.carto.datasources.CacheTileDataSource {
                public constructor(param0: number, param1: number);
                public static getCPtr(param0: com.carto.datasources.PersistentCacheTileDataSource): number;
                public swigDirectorDisconnect(): void;
                public startDownloadArea(param0: com.carto.core.MapBounds, param1: number, param2: number, param3: com.carto.datasources.TileDownloadListener): void;
                public static getCPtr(param0: com.carto.datasources.CacheTileDataSource): number;
                public stopAllDownloads(): void;
                public setCapacity(param0: number): void;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
                public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
                public constructor();
                public constructor(param0: com.carto.datasources.TileDataSource, param1: string);
                public isCacheOnlyMode(): boolean;
                public constructor(param0: com.carto.datasources.TileDataSource);
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.PersistentCacheTileDataSource;
                public clear(): void;
                public swigGetDirectorObject(): javalangObject;
                public swigReleaseOwnership(): void;
                public setCacheOnlyMode(param0: boolean): void;
                public close(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.CacheTileDataSource;
                public getCapacity(): number;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetRawPtr(): number;
                public isOpen(): boolean;
                public swigTakeOwnership(): void;
                public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class TileDataSource extends javalangObject {
                public swigCMemOwn: boolean;
                public constructor(param0: number, param1: number);
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public getProjection(): com.carto.projections.Projection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
                public swigGetClassName(): string;
                public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
                public getMaxZoom(): number;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public getDataExtent(): com.carto.core.MapBounds;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
                public notifyTilesChanged(param0: boolean): void;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class TileDownloadListener extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public onDownloadCompleted(): void;
                public finalize(): void;
                public onDownloadStarting(param0: number): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.datasources.TileDownloadListener): number;
                public onDownloadProgress(param0: number): void;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDownloadListener;
                public onDownloadFailed(param0: com.carto.core.MapTile): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export class VectorDataSource extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public getProjection(): com.carto.projections.Projection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.VectorDataSource;
                public constructor(param0: com.carto.projections.Projection);
                public loadElements(param0: com.carto.renderers.components.CullState): com.carto.datasources.components.VectorData;
                public swigTakeOwnership(): void;
                public getDataExtent(): com.carto.core.MapBounds;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.datasources.VectorDataSource): number;
                public notifyElementsChanged(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace datasources {
            export namespace components {
                export class TileData extends javalangObject {
                    public swigCMemOwn: boolean;
                    public delete(): void;
                    public equals(param0: javalangObject): boolean;
                    public finalize(): void;
                    public getData(): com.carto.core.BinaryData;
                    public constructor(param0: com.carto.core.BinaryData);
                    public isReplaceWithParent(): boolean;
                    public swigGetRawPtr(): number;
                    public constructor(param0: number, param1: boolean);
                    public getMaxAge(): number;
                    public setMaxAge(param0: number): void;
                    public setReplaceWithParent(param0: boolean): void;
                    public static getCPtr(param0: com.carto.datasources.components.TileData): number;
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
                export class VectorData extends javalangObject {
                    public swigCMemOwn: boolean;
                    public constructor(param0: com.carto.vectorelements.VectorElementVector);
                    public static getCPtr(param0: com.carto.datasources.components.VectorData): number;
                    public delete(): void;
                    public equals(param0: javalangObject): boolean;
                    public finalize(): void;
                    public hashCode(): number;
                    public swigGetRawPtr(): number;
                    public constructor(param0: number, param1: boolean);
                    public getElements(): com.carto.vectorelements.VectorElementVector;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class GeocodingRequest extends javalangObject {
                public swigCMemOwn: boolean;
                public getProjection(): com.carto.projections.Projection;
                public static getCPtr(param0: com.carto.geocoding.GeocodingRequest): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setLocation(param0: com.carto.core.MapPos): void;
                public toString(): string;
                public getLocationRadius(): number;
                public swigGetRawPtr(): number;
                public setLocationRadius(param0: number): void;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getQuery(): string;
                public getLocation(): com.carto.core.MapPos;
                public constructor(param0: com.carto.projections.Projection, param1: string);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class GeocodingResult extends javalangObject {
                public swigCMemOwn: boolean;
                public getProjection(): com.carto.projections.Projection;
                public finalize(): void;
                public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.Address, param2: number, param3: com.carto.geometry.FeatureCollection);
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.geocoding.GeocodingResult): number;
                public getAddress(): com.carto.core.Address;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getFeatureCollection(): com.carto.geometry.FeatureCollection;
                public getRank(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class GeocodingResultVector extends javalangObject {
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public delete(): void;
                public static getCPtr(param0: com.carto.geocoding.GeocodingResultVector): number;
                public capacity(): number;
                public add(param0: com.carto.geocoding.GeocodingResult): void;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public get(param0: number): com.carto.geocoding.GeocodingResult;
                public set(param0: number, param1: com.carto.geocoding.GeocodingResult): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class GeocodingService extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.geocoding.GeocodingService): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.GeocodingService;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class MapBoxOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setAutocomplete(param0: boolean): void;
                public isAutocomplete(): boolean;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
                public constructor(param0: string);
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.geocoding.GeocodingService): number;
                public setLanguage(param0: string): void;
                public static getCPtr(param0: com.carto.geocoding.MapBoxOnlineGeocodingService): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.MapBoxOnlineGeocodingService;
                public getLanguage(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.GeocodingService;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class MapBoxOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static getCPtr(param0: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): number;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.MapBoxOnlineReverseGeocodingService;
                public swigGetClassName(): string;
                public constructor(param0: string);
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingService): number;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public getLanguage(): string;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.ReverseGeocodingService;
                public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class OSMOfflineGeocodingService extends com.carto.geocoding.GeocodingService {
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setAutocomplete(param0: boolean): void;
                public isAutocomplete(): boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.OSMOfflineGeocodingService;
                public swigGetClassName(): string;
                public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
                public constructor(param0: string);
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.geocoding.GeocodingService): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public getLanguage(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.GeocodingService;
                public static getCPtr(param0: com.carto.geocoding.OSMOfflineGeocodingService): number;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class OSMOfflineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor(param0: string);
                public constructor();
                public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingService): number;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public getLanguage(): string;
                public static getCPtr(param0: com.carto.geocoding.OSMOfflineReverseGeocodingService): number;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.ReverseGeocodingService;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.OSMOfflineReverseGeocodingService;
                public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class PackageManagerGeocodingService extends com.carto.geocoding.GeocodingService {
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setAutocomplete(param0: boolean): void;
                public isAutocomplete(): boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.geocoding.PackageManagerGeocodingService): number;
                public swigGetClassName(): string;
                public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
                public constructor();
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.PackageManagerGeocodingService;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.geocoding.GeocodingService): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public getLanguage(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.GeocodingService;
                public swigTakeOwnership(): void;
                public constructor(param0: com.carto.packagemanager.PackageManager);
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class PackageManagerReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
                public static getCPtr(param0: com.carto.geocoding.PackageManagerReverseGeocodingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor();
                public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingService): number;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public getLanguage(): string;
                public swigTakeOwnership(): void;
                public constructor(param0: com.carto.packagemanager.PackageManager);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.PackageManagerReverseGeocodingService;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.ReverseGeocodingService;
                public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class PeliasOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setAutocomplete(param0: boolean): void;
                public isAutocomplete(): boolean;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
                public constructor(param0: string);
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.geocoding.GeocodingService): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public static getCPtr(param0: com.carto.geocoding.PeliasOnlineGeocodingService): number;
                public getLanguage(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.GeocodingService;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.PeliasOnlineGeocodingService;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class PeliasOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.geocoding.PeliasOnlineReverseGeocodingService): number;
                public swigGetClassName(): string;
                public constructor(param0: string);
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingService): number;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.PeliasOnlineReverseGeocodingService;
                public delete(): void;
                public getLanguage(): string;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.ReverseGeocodingService;
                public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class ReverseGeocodingRequest extends javalangObject {
                public swigCMemOwn: boolean;
                public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPos);
                public getProjection(): com.carto.projections.Projection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setSearchRadius(param0: number): void;
                public toString(): string;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getLocation(): com.carto.core.MapPos;
                public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingRequest): number;
                public getSearchRadius(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class ReverseGeocodingService extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor();
                public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingService): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.ReverseGeocodingService;
                public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class TomTomOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setAutocomplete(param0: boolean): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.TomTomOnlineGeocodingService;
                public isAutocomplete(): boolean;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
                public constructor(param0: string);
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.geocoding.GeocodingService): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public getLanguage(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.GeocodingService;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.geocoding.TomTomOnlineGeocodingService): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geocoding {
            export class TomTomOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor(param0: string);
                public constructor();
                public setCustomServiceURL(param0: string): void;
                public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingService): number;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public delete(): void;
                public getLanguage(): string;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.TomTomOnlineReverseGeocodingService;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.geocoding.TomTomOnlineReverseGeocodingService): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.ReverseGeocodingService;
                public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class DouglasPeuckerGeometrySimplifier extends com.carto.geometry.GeometrySimplifier {
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.geometry.GeometrySimplifier): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.GeometrySimplifier;
                public simplify(param0: com.carto.geometry.Geometry, param1: number): com.carto.geometry.Geometry;
                public delete(): void;
                public static getCPtr(param0: com.carto.geometry.DouglasPeuckerGeometrySimplifier): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: number);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.DouglasPeuckerGeometrySimplifier;
                public swigGetDirectorObject(): javalangObject;
                public swigGetClassName(): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class Feature extends javalangObject {
                public swigCMemOwn: boolean;
                public getProperties(): com.carto.core.Variant;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Feature;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.geometry.Feature): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.core.Variant);
                public swigGetDirectorObject(): javalangObject;
                public getGeometry(): com.carto.geometry.Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class FeatureCollection extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: com.carto.geometry.FeatureVector);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.FeatureCollection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetDirectorObject(): javalangObject;
                public getFeatureCount(): number;
                public swigGetClassName(): string;
                public getFeature(param0: number): com.carto.geometry.Feature;
                public static getCPtr(param0: com.carto.geometry.FeatureCollection): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class FeatureVector extends javalangObject {
                public swigCMemOwn: boolean;
                public get(param0: number): com.carto.geometry.Feature;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public add(param0: com.carto.geometry.Feature): void;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public static getCPtr(param0: com.carto.geometry.FeatureVector): number;
                public set(param0: number, param1: com.carto.geometry.Feature): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class GeoJSONGeometryReader extends javalangObject {
                public swigCMemOwn: boolean;
                public getTargetProjection(): com.carto.projections.Projection;
                public delete(): void;
                public readFeatureCollection(param0: string): com.carto.geometry.FeatureCollection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setTargetProjection(param0: com.carto.projections.Projection): void;
                public readGeometry(param0: string): com.carto.geometry.Geometry;
                public static getCPtr(param0: com.carto.geometry.GeoJSONGeometryReader): number;
                public readFeature(param0: string): com.carto.geometry.Feature;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class GeoJSONGeometryWriter extends javalangObject {
                public swigCMemOwn: boolean;
                public setZ(param0: boolean): void;
                public delete(): void;
                public writeFeature(param0: com.carto.geometry.Feature): string;
                public getZ(): boolean;
                public writeFeatureCollection(param0: com.carto.geometry.FeatureCollection): string;
                public static getCPtr(param0: com.carto.geometry.GeoJSONGeometryWriter): number;
                public finalize(): void;
                public writeGeometry(param0: com.carto.geometry.Geometry): string;
                public constructor(param0: number, param1: boolean);
                public setSourceProjection(param0: com.carto.projections.Projection): void;
                public getSourceProjection(): com.carto.projections.Projection;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class Geometry extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Geometry;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public static getCPtr(param0: com.carto.geometry.Geometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getCenterPos(): com.carto.core.MapPos;
                public getBounds(): com.carto.core.MapBounds;
                public swigGetDirectorObject(): javalangObject;
                public swigGetClassName(): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class GeometrySimplifier extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.geometry.GeometrySimplifier): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.GeometrySimplifier;
                public simplify(param0: com.carto.geometry.Geometry, param1: number): com.carto.geometry.Geometry;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetDirectorObject(): javalangObject;
                public swigGetClassName(): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class GeometryVector extends javalangObject {
                public swigCMemOwn: boolean;
                public set(param0: number, param1: com.carto.geometry.Geometry): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public get(param0: number): com.carto.geometry.Geometry;
                public clear(): void;
                public add(param0: com.carto.geometry.Geometry): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public static getCPtr(param0: com.carto.geometry.GeometryVector): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class LineGeometry extends com.carto.geometry.Geometry {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Geometry;
                public static getCPtr(param0: com.carto.geometry.Geometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getCenterPos(): com.carto.core.MapPos;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.LineGeometry;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.geometry.LineGeometry): number;
                public delete(): void;
                public constructor(param0: com.carto.core.MapPosVector);
                public swigGetDirectorObject(): javalangObject;
                public getPoses(): com.carto.core.MapPosVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class LineGeometryVector extends javalangObject {
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public set(param0: number, param1: com.carto.geometry.LineGeometry): void;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public add(param0: com.carto.geometry.LineGeometry): void;
                public static getCPtr(param0: com.carto.geometry.LineGeometryVector): number;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public get(param0: number): com.carto.geometry.LineGeometry;
            }
        }
    }
}
declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class MultiGeometry extends com.carto.geometry.Geometry {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Geometry;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.MultiGeometry;
                public static getCPtr(param0: com.carto.geometry.Geometry): number;
                public static getCPtr(param0: com.carto.geometry.MultiGeometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getCenterPos(): com.carto.core.MapPos;
                public getGeometry(param0: number): com.carto.geometry.Geometry;
                public swigGetClassName(): string;
                public constructor(param0: com.carto.geometry.GeometryVector);
                public swigGetRawPtr(): number;
                public delete(): void;
                public getGeometryCount(): number;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class MultiLineGeometry extends com.carto.geometry.MultiGeometry {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Geometry;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.MultiLineGeometry;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.MultiGeometry;
                public static getCPtr(param0: com.carto.geometry.MultiGeometry): number;
                public static getCPtr(param0: com.carto.geometry.Geometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getGeometry(param0: number): com.carto.geometry.Geometry;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.geometry.MultiLineGeometry): number;
                public constructor(param0: com.carto.geometry.GeometryVector);
                public constructor(param0: com.carto.geometry.LineGeometryVector);
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigGetDirectorObject(): javalangObject;
                public getGeometry(param0: number): com.carto.geometry.LineGeometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class MultiPointGeometry extends com.carto.geometry.MultiGeometry {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Geometry;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.MultiGeometry;
                public static getCPtr(param0: com.carto.geometry.MultiGeometry): number;
                public static getCPtr(param0: com.carto.geometry.Geometry): number;
                public static getCPtr(param0: com.carto.geometry.MultiPointGeometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getGeometry(param0: number): com.carto.geometry.Geometry;
                public getGeometry(param0: number): com.carto.geometry.PointGeometry;
                public swigGetClassName(): string;
                public constructor(param0: com.carto.geometry.GeometryVector);
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.MultiPointGeometry;
                public constructor(param0: com.carto.geometry.PointGeometryVector);
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class MultiPolygonGeometry extends com.carto.geometry.MultiGeometry {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Geometry;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.MultiGeometry;
                public static getCPtr(param0: com.carto.geometry.MultiGeometry): number;
                public static getCPtr(param0: com.carto.geometry.Geometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.MultiPolygonGeometry;
                public getGeometry(param0: number): com.carto.geometry.Geometry;
                public swigGetClassName(): string;
                public constructor(param0: com.carto.geometry.GeometryVector);
                public getGeometry(param0: number): com.carto.geometry.PolygonGeometry;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: com.carto.geometry.MultiPolygonGeometry): number;
                public swigGetDirectorObject(): javalangObject;
                public constructor(param0: com.carto.geometry.PolygonGeometryVector);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class PointGeometry extends com.carto.geometry.Geometry {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Geometry;
                public static getCPtr(param0: com.carto.geometry.Geometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getCenterPos(): com.carto.core.MapPos;
                public getPos(): com.carto.core.MapPos;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.PointGeometry;
                public static getCPtr(param0: com.carto.geometry.PointGeometry): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: com.carto.core.MapPos);
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class PointGeometryVector extends javalangObject {
                public swigCMemOwn: boolean;
                public get(param0: number): com.carto.geometry.PointGeometry;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public add(param0: com.carto.geometry.PointGeometry): void;
                public set(param0: number, param1: com.carto.geometry.PointGeometry): void;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.geometry.PointGeometryVector): number;
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
            export class PolygonGeometry extends com.carto.geometry.Geometry {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.PolygonGeometry;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Geometry;
                public getHoles(): com.carto.core.MapPosVectorVector;
                public static getCPtr(param0: com.carto.geometry.PolygonGeometry): number;
                public static getCPtr(param0: com.carto.geometry.Geometry): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getCenterPos(): com.carto.core.MapPos;
                public swigGetClassName(): string;
                public swigGetRawPtr(): number;
                public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.core.MapPosVectorVector);
                public delete(): void;
                public constructor(param0: com.carto.core.MapPosVector);
                public getRings(): com.carto.core.MapPosVectorVector;
                public swigGetDirectorObject(): javalangObject;
                public constructor(param0: com.carto.core.MapPosVectorVector);
                public getPoses(): com.carto.core.MapPosVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class PolygonGeometryModuleJNI extends javalangObject {
                public static PolygonGeometry_swigGetDirectorObject(param0: number, param1: com.carto.geometry.PolygonGeometry): javalangObject;
                public static PolygonGeometry_getHoles(param0: number, param1: com.carto.geometry.PolygonGeometry): number;
                public static new_PolygonGeometryVector__SWIG_0(): number;
                public static PolygonGeometryVector_capacity(param0: number, param1: com.carto.geometry.PolygonGeometryVector): number;
                public static delete_PolygonGeometry(param0: number): void;
                public static PolygonGeometry_swigGetRawPtr(param0: number, param1: com.carto.geometry.PolygonGeometry): number;
                public static PolygonGeometryVector_set(
                    param0: number,
                    param1: com.carto.geometry.PolygonGeometryVector,
                    param2: number,
                    param3: number,
                    param4: com.carto.geometry.PolygonGeometry
                ): void;
                public constructor();
                public static new_PolygonGeometry__SWIG_1(param0: number, param1: com.carto.core.MapPosVector, param2: number, param3: com.carto.core.MapPosVectorVector): number;
                public static PolygonGeometry_getCenterPos(param0: number, param1: com.carto.geometry.PolygonGeometry): number;
                public static PolygonGeometryVector_get(param0: number, param1: com.carto.geometry.PolygonGeometryVector, param2: number): number;
                public static PolygonGeometryVector_size(param0: number, param1: com.carto.geometry.PolygonGeometryVector): number;
                public static PolygonGeometryVector_add(param0: number, param1: com.carto.geometry.PolygonGeometryVector, param2: number, param3: com.carto.geometry.PolygonGeometry): void;
                public static PolygonGeometryVector_reserve(param0: number, param1: com.carto.geometry.PolygonGeometryVector, param2: number): void;
                public static PolygonGeometry_getRings(param0: number, param1: com.carto.geometry.PolygonGeometry): number;
                public static PolygonGeometryVector_swigGetRawPtr(param0: number, param1: com.carto.geometry.PolygonGeometryVector): number;
                public static new_PolygonGeometry__SWIG_0(param0: number, param1: com.carto.core.MapPosVector): number;
                public static PolygonGeometryVector_clear(param0: number, param1: com.carto.geometry.PolygonGeometryVector): void;
                public static new_PolygonGeometry__SWIG_2(param0: number, param1: com.carto.core.MapPosVectorVector): number;
                public static PolygonGeometryVector_isEmpty(param0: number, param1: com.carto.geometry.PolygonGeometryVector): boolean;
                public static new_PolygonGeometryVector__SWIG_1(param0: number): number;
                public static delete_PolygonGeometryVector(param0: number): void;
                public static PolygonGeometry_swigGetClassName(param0: number, param1: com.carto.geometry.PolygonGeometry): string;
                public static PolygonGeometry_SWIGSmartPtrUpcast(param0: number): number;
                public static PolygonGeometry_getPoses(param0: number, param1: com.carto.geometry.PolygonGeometry): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class PolygonGeometryVector extends javalangObject {
                public swigCMemOwn: boolean;
                public get(param0: number): com.carto.geometry.PolygonGeometry;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public add(param0: com.carto.geometry.PolygonGeometry): void;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public set(param0: number, param1: com.carto.geometry.PolygonGeometry): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public static getCPtr(param0: com.carto.geometry.PolygonGeometryVector): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class VectorTileFeature extends com.carto.geometry.Feature {
                public getId(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Feature;
                public constructor(param0: number, param1: com.carto.core.MapTile, param2: string, param3: com.carto.geometry.Geometry, param4: com.carto.core.Variant);
                public getLayerName(): string;
                public static getCPtr(param0: com.carto.geometry.VectorTileFeature): number;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.geometry.Feature): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.VectorTileFeature;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.core.Variant);
                public hashCode(): number;
                public getMapTile(): com.carto.core.MapTile;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class VectorTileFeatureCollection extends com.carto.geometry.FeatureCollection {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.FeatureCollection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getFeature(param0: number): com.carto.geometry.Feature;
                public static getCPtr(param0: com.carto.geometry.FeatureCollection): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.VectorTileFeatureCollection;
                public static getCPtr(param0: com.carto.geometry.VectorTileFeatureCollection): number;
                public swigGetRawPtr(): number;
                public getFeature(param0: number): com.carto.geometry.VectorTileFeature;
                public delete(): void;
                public constructor(param0: com.carto.geometry.FeatureVector);
                public constructor(param0: com.carto.geometry.VectorTileFeatureVector);
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class VectorTileFeatureCollectionModuleJNI extends javalangObject {
                public static VectorTileFeatureCollection_getFeature(param0: number, param1: com.carto.geometry.VectorTileFeatureCollection, param2: number): number;
                public static VectorTileFeatureCollection_swigGetDirectorObject(param0: number, param1: com.carto.geometry.VectorTileFeatureCollection): javalangObject;
                public static new_VectorTileFeatureCollection(param0: number, param1: com.carto.geometry.VectorTileFeatureVector): number;
                public static delete_VectorTileFeatureCollection(param0: number): void;
                public static VectorTileFeatureCollection_swigGetClassName(param0: number, param1: com.carto.geometry.VectorTileFeatureCollection): string;
                public static VectorTileFeatureCollection_SWIGSmartPtrUpcast(param0: number): number;
                public static VectorTileFeatureCollection_swigGetRawPtr(param0: number, param1: com.carto.geometry.VectorTileFeatureCollection): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class VectorTileFeatureModuleJNI extends javalangObject {
                public static VectorTileFeature_getMapTile(param0: number, param1: com.carto.geometry.VectorTileFeature): number;
                public static VectorTileFeatureVector_size(param0: number, param1: com.carto.geometry.VectorTileFeatureVector): number;
                public static delete_VectorTileFeatureVector(param0: number): void;
                public static new_VectorTileFeature(
                    param0: number,
                    param1: number,
                    param2: com.carto.core.MapTile,
                    param3: string,
                    param4: number,
                    param5: com.carto.geometry.Geometry,
                    param6: number,
                    param7: com.carto.core.Variant
                ): number;
                public static VectorTileFeature_getLayerName(param0: number, param1: com.carto.geometry.VectorTileFeature): string;
                public static new_VectorTileFeatureVector__SWIG_1(param0: number): number;
                public static VectorTileFeatureVector_swigGetRawPtr(param0: number, param1: com.carto.geometry.VectorTileFeatureVector): number;
                public static VectorTileFeature_swigGetClassName(param0: number, param1: com.carto.geometry.VectorTileFeature): string;
                public static VectorTileFeature_swigGetDirectorObject(param0: number, param1: com.carto.geometry.VectorTileFeature): javalangObject;
                public static VectorTileFeatureVector_get(param0: number, param1: com.carto.geometry.VectorTileFeatureVector, param2: number): number;
                public static VectorTileFeatureVector_capacity(param0: number, param1: com.carto.geometry.VectorTileFeatureVector): number;
                public constructor();
                public static VectorTileFeatureVector_set(
                    param0: number,
                    param1: com.carto.geometry.VectorTileFeatureVector,
                    param2: number,
                    param3: number,
                    param4: com.carto.geometry.VectorTileFeature
                ): void;
                public static VectorTileFeature_SWIGSmartPtrUpcast(param0: number): number;
                public static VectorTileFeature_swigGetRawPtr(param0: number, param1: com.carto.geometry.VectorTileFeature): number;
                public static VectorTileFeatureVector_reserve(param0: number, param1: com.carto.geometry.VectorTileFeatureVector, param2: number): void;
                public static new_VectorTileFeatureVector__SWIG_0(): number;
                public static VectorTileFeatureVector_isEmpty(param0: number, param1: com.carto.geometry.VectorTileFeatureVector): boolean;
                public static VectorTileFeatureVector_clear(param0: number, param1: com.carto.geometry.VectorTileFeatureVector): void;
                public static VectorTileFeature_getId(param0: number, param1: com.carto.geometry.VectorTileFeature): number;
                public static VectorTileFeatureVector_add(param0: number, param1: com.carto.geometry.VectorTileFeatureVector, param2: number, param3: com.carto.geometry.VectorTileFeature): void;
                public static delete_VectorTileFeature(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class VectorTileFeatureVector extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.geometry.VectorTileFeatureVector): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public get(param0: number): com.carto.geometry.VectorTileFeature;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public add(param0: com.carto.geometry.VectorTileFeature): void;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public set(param0: number, param1: com.carto.geometry.VectorTileFeature): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKBGeometryReader extends javalangObject {
                public swigCMemOwn: boolean;
                public delete(): void;
                public static getCPtr(param0: com.carto.geometry.WKBGeometryReader): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public readGeometry(param0: com.carto.core.BinaryData): com.carto.geometry.Geometry;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKBGeometryReaderModuleJNI extends javalangObject {
                public static new_WKBGeometryReader(): number;
                public static WKBGeometryReader_readGeometry(param0: number, param1: com.carto.geometry.WKBGeometryReader, param2: number, param3: com.carto.core.BinaryData): number;
                public static delete_WKBGeometryReader(param0: number): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKBGeometryWriter extends javalangObject {
                public swigCMemOwn: boolean;
                public setZ(param0: boolean): void;
                public setBigEndian(param0: boolean): void;
                public writeGeometry(param0: com.carto.geometry.Geometry): com.carto.core.BinaryData;
                public delete(): void;
                public getZ(): boolean;
                public static getCPtr(param0: com.carto.geometry.WKBGeometryWriter): number;
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
            export class WKBGeometryWriterModuleJNI extends javalangObject {
                public static WKBGeometryWriter_setBigEndian(param0: number, param1: com.carto.geometry.WKBGeometryWriter, param2: boolean): void;
                public static new_WKBGeometryWriter(): number;
                public static delete_WKBGeometryWriter(param0: number): void;
                public static WKBGeometryWriter_setZ(param0: number, param1: com.carto.geometry.WKBGeometryWriter, param2: boolean): void;
                public static WKBGeometryWriter_getZ(param0: number, param1: com.carto.geometry.WKBGeometryWriter): boolean;
                public static WKBGeometryWriter_writeGeometry(param0: number, param1: com.carto.geometry.WKBGeometryWriter, param2: number, param3: com.carto.geometry.Geometry): number;
                public static WKBGeometryWriter_getBigEndian(param0: number, param1: com.carto.geometry.WKBGeometryWriter): boolean;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKTGeometryReader extends javalangObject {
                public swigCMemOwn: boolean;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public readGeometry(param0: string): com.carto.geometry.Geometry;
                public static getCPtr(param0: com.carto.geometry.WKTGeometryReader): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKTGeometryReaderModuleJNI extends javalangObject {
                public static new_WKTGeometryReader(): number;
                public static delete_WKTGeometryReader(param0: number): void;
                public constructor();
                public static WKTGeometryReader_readGeometry(param0: number, param1: com.carto.geometry.WKTGeometryReader, param2: string): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKTGeometryWriter extends javalangObject {
                public swigCMemOwn: boolean;
                public setZ(param0: boolean): void;
                public delete(): void;
                public getZ(): boolean;
                public static getCPtr(param0: com.carto.geometry.WKTGeometryWriter): number;
                public finalize(): void;
                public writeGeometry(param0: com.carto.geometry.Geometry): string;
                public constructor(param0: number, param1: boolean);
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace geometry {
            export class WKTGeometryWriterModuleJNI extends javalangObject {
                public static WKTGeometryWriter_getZ(param0: number, param1: com.carto.geometry.WKTGeometryWriter): boolean;
                public static WKTGeometryWriter_writeGeometry(param0: number, param1: com.carto.geometry.WKTGeometryWriter, param2: number, param3: com.carto.geometry.Geometry): string;
                public static WKTGeometryWriter_setZ(param0: number, param1: com.carto.geometry.WKTGeometryWriter, param2: boolean): void;
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
            export class Bitmap extends javalangObject {
                public swigCMemOwn: boolean;
                public getHeight(): number;
                public getPaddedBitmap(param0: number, param1: number): com.carto.graphics.Bitmap;
                public getPixelData(): com.carto.core.BinaryData;
                public static getCPtr(param0: com.carto.graphics.Bitmap): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static createFromCompressed(param0: com.carto.core.BinaryData): com.carto.graphics.Bitmap;
                public getResizedBitmap(param0: number, param1: number): com.carto.graphics.Bitmap;
                public swigGetRawPtr(): number;
                public getWidth(): number;
                public getSubBitmap(param0: number, param1: number, param2: number, param3: number): com.carto.graphics.Bitmap;
                public getRGBABitmap(): com.carto.graphics.Bitmap;
                public getColorFormat(): com.carto.graphics.ColorFormat;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public compressToInternal(): com.carto.core.BinaryData;
                public getBytesPerPixel(): number;
                public constructor(param0: com.carto.core.BinaryData, param1: number, param2: number, param3: com.carto.graphics.ColorFormat, param4: number);
                public compressToPng(): com.carto.core.BinaryData;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class BitmapModuleJNI extends javalangObject {
                public static COLOR_FORMAT_RGB_565_get(): number;
                public static delete_Bitmap(param0: number): void;
                public static COLOR_FORMAT_UNSUPPORTED_get(): number;
                public static Bitmap_compressToPng(param0: number, param1: com.carto.graphics.Bitmap): number;
                public static Bitmap_getResizedBitmap(param0: number, param1: com.carto.graphics.Bitmap, param2: number, param3: number): number;
                public static COLOR_FORMAT_RGBA_get(): number;
                public static Bitmap_getPixelData(param0: number, param1: com.carto.graphics.Bitmap): number;
                public static COLOR_FORMAT_GRAYSCALE_ALPHA_get(): number;
                public static COLOR_FORMAT_GRAYSCALE_get(): number;
                public static new_Bitmap(param0: number, param1: com.carto.core.BinaryData, param2: number, param3: number, param4: number, param5: number): number;
                public static Bitmap_swigGetRawPtr(param0: number, param1: com.carto.graphics.Bitmap): number;
                public static Bitmap_getColorFormat(param0: number, param1: com.carto.graphics.Bitmap): number;
                public static COLOR_FORMAT_BGRA_get(): number;
                public constructor();
                public static COLOR_FORMAT_RGBA_4444_get(): number;
                public static Bitmap_getHeight(param0: number, param1: com.carto.graphics.Bitmap): number;
                public static Bitmap_getBytesPerPixel(param0: number, param1: com.carto.graphics.Bitmap): number;
                public static Bitmap_createFromCompressed(param0: number, param1: com.carto.core.BinaryData): number;
                public static Bitmap_getWidth(param0: number, param1: com.carto.graphics.Bitmap): number;
                public static Bitmap_compressToInternal(param0: number, param1: com.carto.graphics.Bitmap): number;
                public static Bitmap_getSubBitmap(param0: number, param1: com.carto.graphics.Bitmap, param2: number, param3: number, param4: number, param5: number): number;
                public static COLOR_FORMAT_RGB_get(): number;
                public static Bitmap_getPaddedBitmap(param0: number, param1: com.carto.graphics.Bitmap, param2: number, param3: number): number;
                public static Bitmap_getRGBABitmap(param0: number, param1: com.carto.graphics.Bitmap): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class Color extends javalangObject {
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
                public equals(param0: javalangObject): boolean;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public hashCode(): number;
                public constructor(param0: number);
                public getG(): number;
                public static getCPtr(param0: com.carto.graphics.Color): number;
                public getARGB(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class ColorFormat extends javalangEnum<any> {
                public static COLOR_FORMAT_UNSUPPORTED: com.carto.graphics.ColorFormat;
                public static COLOR_FORMAT_GRAYSCALE: com.carto.graphics.ColorFormat;
                public static COLOR_FORMAT_GRAYSCALE_ALPHA: com.carto.graphics.ColorFormat;
                public static COLOR_FORMAT_RGB: com.carto.graphics.ColorFormat;
                public static COLOR_FORMAT_RGBA: com.carto.graphics.ColorFormat;
                public static COLOR_FORMAT_BGRA: com.carto.graphics.ColorFormat;
                public static COLOR_FORMAT_RGBA_4444: com.carto.graphics.ColorFormat;
                public static COLOR_FORMAT_RGB_565: com.carto.graphics.ColorFormat;
                public swigValue(): number;
                public static values(): native.Array<com.carto.graphics.ColorFormat>;
                public static swigToEnum(param0: number): com.carto.graphics.ColorFormat;
                public static valueOf(param0: string): com.carto.graphics.ColorFormat;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace ColorFormat {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class ColorModuleJNI extends javalangObject {
                public static new_Color__SWIG_2(param0: number): number;
                public static Color_toString(param0: number, param1: com.carto.graphics.Color): string;
                public static Color_getA(param0: number, param1: com.carto.graphics.Color): number;
                public static delete_Color(param0: number): void;
                public static new_Color__SWIG_0(): number;
                public constructor();
                public static Color_swigGetRawPtr(param0: number, param1: com.carto.graphics.Color): number;
                public static Color_getB(param0: number, param1: com.carto.graphics.Color): number;
                public static new_Color__SWIG_1(param0: number, param1: number, param2: number, param3: number): number;
                public static Color_getARGB(param0: number, param1: com.carto.graphics.Color): number;
                public static Color_getR(param0: number, param1: com.carto.graphics.Color): number;
                public static Color_getG(param0: number, param1: com.carto.graphics.Color): number;
                public static Color_hashCodeInternal(param0: number, param1: com.carto.graphics.Color): number;
                public static Color_equalsInternal(param0: number, param1: com.carto.graphics.Color, param2: number, param3: com.carto.graphics.Color): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class Frustum extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public circleIntersects(param0: com.carto.core.MapPos, param1: number): boolean;
                public cuboidIntersects(param0: com.carto.core.MapBounds): boolean;
                public finalize(): void;
                public pointInside(param0: com.carto.core.MapPos): boolean;
                public constructor(param0: number, param1: boolean);
                public sphereIntersects(param0: com.carto.core.MapPos, param1: number): boolean;
                public squareIntersects(param0: com.carto.core.MapBounds): boolean;
                public static getCPtr(param0: com.carto.graphics.Frustum): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class FrustumModuleJNI extends javalangObject {
                public static Frustum_squareIntersects(param0: number, param1: com.carto.graphics.Frustum, param2: number, param3: com.carto.core.MapBounds): boolean;
                public static Frustum_pointInside(param0: number, param1: com.carto.graphics.Frustum, param2: number, param3: com.carto.core.MapPos): boolean;
                public static Frustum_sphereIntersects(param0: number, param1: com.carto.graphics.Frustum, param2: number, param3: com.carto.core.MapPos, param4: number): boolean;
                public static Frustum_swigGetRawPtr(param0: number, param1: com.carto.graphics.Frustum): number;
                public static Frustum_cuboidIntersects(param0: number, param1: com.carto.graphics.Frustum, param2: number, param3: com.carto.core.MapBounds): boolean;
                public static delete_Frustum(param0: number): void;
                public constructor();
                public static Frustum_circleIntersects(param0: number, param1: com.carto.graphics.Frustum, param2: number, param3: com.carto.core.MapPos, param4: number): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class ViewState extends javalangObject {
                public swigCMemOwn: boolean;
                public getHeight(): number;
                public getFrustum(): com.carto.graphics.Frustum;
                public getZoom(): number;
                public finalize(): void;
                public getScreenWidth(): number;
                public isCameraChanged(): boolean;
                public getNear(): number;
                public getUnitToDPCoef(): number;
                public getScreenHeight(): number;
                public getUnitToPXCoef(): number;
                public delete(): void;
                public hashCode(): number;
                public getDPI(): number;
                public getProjectionMode(): com.carto.components.ProjectionMode;
                public constructor(param0: number, param1: boolean);
                public getCameraPos(): com.carto.core.MapPos;
                public getAspectRatio(): number;
                public getFar(): number;
                public swigGetRawPtr(): number;
                public getWidth(): number;
                public getFOVY(): number;
                public equals(param0: javalangObject): boolean;
                public getRotation(): number;
                public getFocusPos(): com.carto.core.MapPos;
                public getUpVec(): com.carto.core.MapVec;
                public getTilt(): number;
                public getZoom0Distance(): number;
                public getDPToPX(): number;
                public static getCPtr(param0: com.carto.graphics.ViewState): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace graphics {
            export class ViewStateModuleJNI extends javalangObject {
                public static ViewState_getUpVec(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getNear(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getAspectRatio(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getDPI(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getHeight(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getTilt(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getUnitToDPCoef(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getCameraPos(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getScreenWidth(param0: number, param1: com.carto.graphics.ViewState): number;
                public constructor();
                public static ViewState_getUnitToPXCoef(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getDPToPX(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getZoom0Distance(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getScreenHeight(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getWidth(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getFOVY(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getFar(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getRotation(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_isCameraChanged(param0: number, param1: com.carto.graphics.ViewState): boolean;
                public static ViewState_getFocusPos(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_swigGetRawPtr(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getZoom(param0: number, param1: com.carto.graphics.ViewState): number;
                public static delete_ViewState(param0: number): void;
                public static ViewState_getFrustum(param0: number, param1: com.carto.graphics.ViewState): number;
                public static ViewState_getProjectionMode(param0: number, param1: com.carto.graphics.ViewState): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoBaseMapStyle extends javalangEnum<any> {
                public static CARTO_BASEMAP_STYLE_POSITRON: com.carto.layers.CartoBaseMapStyle;
                public static CARTO_BASEMAP_STYLE_DARKMATTER: com.carto.layers.CartoBaseMapStyle;
                public static CARTO_BASEMAP_STYLE_VOYAGER: com.carto.layers.CartoBaseMapStyle;
                public static values(): native.Array<com.carto.layers.CartoBaseMapStyle>;
                public swigValue(): number;
                public static swigToEnum(param0: number): com.carto.layers.CartoBaseMapStyle;
                public static valueOf(param0: string): com.carto.layers.CartoBaseMapStyle;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace CartoBaseMapStyle {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoOfflineVectorTileLayer extends com.carto.layers.CartoVectorTileLayer {
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage);
                public static getCPtr(param0: com.carto.layers.TileLayer): number;
                public constructor(param0: com.carto.packagemanager.CartoPackageManager, param1: com.carto.utils.AssetPackage);
                public constructor(param0: com.carto.packagemanager.CartoPackageManager, param1: com.carto.layers.CartoBaseMapStyle);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.layers.CartoVectorTileLayer): number;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.layers.VectorTileLayer): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public delete(): void;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage, param2: string);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoVectorTileLayer;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileLayer;
                public swigGetDirectorObject(): javalangObject;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoOfflineVectorTileLayer;
                public static getCPtr(param0: com.carto.layers.CartoOfflineVectorTileLayer): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.layers.CartoBaseMapStyle);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoOfflineVectorTileLayerModuleJNI extends javalangObject {
                public static new_CartoOfflineVectorTileLayer__SWIG_0(param0: number, param1: com.carto.packagemanager.CartoPackageManager, param2: number): number;
                public static new_CartoOfflineVectorTileLayer__SWIG_1(
                    param0: number,
                    param1: com.carto.packagemanager.CartoPackageManager,
                    param2: number,
                    param3: com.carto.utils.AssetPackage
                ): number;
                public static CartoOfflineVectorTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.CartoOfflineVectorTileLayer): number;
                public static CartoOfflineVectorTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.CartoOfflineVectorTileLayer): javalangObject;
                public static CartoOfflineVectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static delete_CartoOfflineVectorTileLayer(param0: number): void;
                public static CartoOfflineVectorTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.CartoOfflineVectorTileLayer): string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoOnlineRasterTileLayer extends com.carto.layers.RasterTileLayer {
                public static getCPtr(param0: com.carto.layers.TileLayer): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.RasterTileLayer;
                public static getCPtr(param0: com.carto.layers.CartoOnlineRasterTileLayer): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.layers.RasterTileLayer): number;
                public constructor(param0: string);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
                public swigGetRawPtr(): number;
                public constructor(param0: com.carto.datasources.TileDataSource);
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoOnlineRasterTileLayer;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoOnlineRasterTileLayerModuleJNI extends javalangObject {
                public static CartoOnlineRasterTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.CartoOnlineRasterTileLayer): javalangObject;
                public static delete_CartoOnlineRasterTileLayer(param0: number): void;
                public static CartoOnlineRasterTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.CartoOnlineRasterTileLayer): string;
                public static CartoOnlineRasterTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.CartoOnlineRasterTileLayer): number;
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
            export class CartoOnlineVectorTileLayer extends com.carto.layers.CartoVectorTileLayer {
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage);
                public constructor(param0: com.carto.layers.CartoBaseMapStyle);
                public static createDataSource(param0: com.carto.layers.CartoBaseMapStyle): com.carto.datasources.TileDataSource;
                public static getCPtr(param0: com.carto.layers.TileLayer): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.layers.CartoOnlineVectorTileLayer): number;
                public static getCPtr(param0: com.carto.layers.CartoVectorTileLayer): number;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.layers.VectorTileLayer): number;
                public constructor(param0: string, param1: com.carto.utils.AssetPackage);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoOnlineVectorTileLayer;
                public constructor(param0: com.carto.layers.CartoBaseMapStyle);
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage, param2: string);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoVectorTileLayer;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileLayer;
                public swigGetDirectorObject(): javalangObject;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
                public constructor(param0: string, param1: com.carto.layers.CartoBaseMapStyle);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.layers.CartoBaseMapStyle);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoOnlineVectorTileLayerModuleJNI extends javalangObject {
                public static CartoOnlineVectorTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.CartoOnlineVectorTileLayer): number;
                public static new_CartoOnlineVectorTileLayer__SWIG_0(param0: number): number;
                public static delete_CartoOnlineVectorTileLayer(param0: number): void;
                public static CartoOnlineVectorTileLayer_createDataSource(param0: number): number;
                public static new_CartoOnlineVectorTileLayer__SWIG_1(param0: string, param1: number): number;
                public static CartoOnlineVectorTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.CartoOnlineVectorTileLayer): javalangObject;
                public static new_CartoOnlineVectorTileLayer__SWIG_2(param0: string, param1: number, param2: com.carto.utils.AssetPackage): number;
                public static CartoOnlineVectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static CartoOnlineVectorTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.CartoOnlineVectorTileLayer): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoVectorTileLayer extends com.carto.layers.VectorTileLayer {
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage);
                public static getCPtr(param0: com.carto.layers.TileLayer): number;
                public finalize(): void;
                public static getCPtr(param0: com.carto.layers.CartoVectorTileLayer): number;
                public delete(): void;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage, param2: string);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoVectorTileLayer;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileLayer;
                public swigGetDirectorObject(): javalangObject;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
                public getFallbackLanguage(): string;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.layers.VectorTileLayer): number;
                public static createTileDecoder(param0: com.carto.utils.AssetPackage): com.carto.vectortiles.VectorTileDecoder;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
                public swigGetRawPtr(): number;
                public setLanguage(param0: string): void;
                public static createTileDecoder(param0: com.carto.utils.AssetPackage, param1: string): com.carto.vectortiles.VectorTileDecoder;
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public getLanguage(): string;
                public static createTileDecoder(param0: com.carto.layers.CartoBaseMapStyle): com.carto.vectortiles.VectorTileDecoder;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.layers.CartoBaseMapStyle);
                public setFallbackLanguage(param0: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class CartoVectorTileLayerModuleJNI extends javalangObject {
                public static new_CartoVectorTileLayer__SWIG_0(param0: number, param1: com.carto.datasources.TileDataSource, param2: number): number;
                public static new_CartoVectorTileLayer__SWIG_1(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.utils.AssetPackage): number;
                public static CartoVectorTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.CartoVectorTileLayer): string;
                public static CartoVectorTileLayer_createTileDecoder__SWIG_2(param0: number, param1: com.carto.utils.AssetPackage, param2: string): number;
                public static CartoVectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static CartoVectorTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.CartoVectorTileLayer): javalangObject;
                public constructor();
                public static CartoVectorTileLayer_getLanguage(param0: number, param1: com.carto.layers.CartoVectorTileLayer): string;
                public static CartoVectorTileLayer_createTileDecoder__SWIG_1(param0: number, param1: com.carto.utils.AssetPackage): number;
                public static CartoVectorTileLayer_createTileDecoder__SWIG_0(param0: number): number;
                public static CartoVectorTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.CartoVectorTileLayer): number;
                public static delete_CartoVectorTileLayer(param0: number): void;
                public static new_CartoVectorTileLayer__SWIG_2(
                    param0: number,
                    param1: com.carto.datasources.TileDataSource,
                    param2: number,
                    param3: com.carto.utils.AssetPackage,
                    param4: string
                ): number;
                public static CartoVectorTileLayer_setLanguage(param0: number, param1: com.carto.layers.CartoVectorTileLayer, param2: string): void;
                public static CartoVectorTileLayer_getFallbackLanguage(param0: number, param1: com.carto.layers.CartoVectorTileLayer): string;
                public static CartoVectorTileLayer_setFallbackLanguage(param0: number, param1: com.carto.layers.CartoVectorTileLayer, param2: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class ClusterBuilderMode extends javalangEnum<any> {
                public static CLUSTER_BUILDER_MODE_ELEMENTS: com.carto.layers.ClusterBuilderMode;
                public static CLUSTER_BUILDER_MODE_ELEMENT_COUNT: com.carto.layers.ClusterBuilderMode;
                public static swigToEnum(param0: number): com.carto.layers.ClusterBuilderMode;
                public swigValue(): number;
                public static values(): native.Array<com.carto.layers.ClusterBuilderMode>;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
                public static valueOf(param0: string): com.carto.layers.ClusterBuilderMode;
            }
            export namespace ClusterBuilderMode {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class ClusterElementBuilder extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.ClusterElementBuilder;
                public static getCPtr(param0: com.carto.layers.ClusterElementBuilder): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public buildClusterElement(param0: com.carto.core.MapPos, param1: number): com.carto.vectorelements.VectorElement;
                public buildClusterElement(param0: com.carto.core.MapPos, param1: com.carto.vectorelements.VectorElementVector): com.carto.vectorelements.VectorElement;
                public swigGetClassName(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public getBuilderMode(): com.carto.layers.ClusterBuilderMode;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class ClusterElementBuilderModuleJNI extends javalangObject {
                public static ClusterElementBuilder_getBuilderMode(param0: number, param1: com.carto.layers.ClusterElementBuilder): number;
                public static ClusterElementBuilder_change_ownership(param0: com.carto.layers.ClusterElementBuilder, param1: number, param2: boolean): void;
                public static ClusterElementBuilder_buildClusterElementSwigExplicitClusterElementBuilder__SWIG_1(
                    param0: number,
                    param1: com.carto.layers.ClusterElementBuilder,
                    param2: number,
                    param3: com.carto.core.MapPos,
                    param4: number,
                    param5: com.carto.vectorelements.VectorElementVector
                ): number;
                public static SwigDirector_ClusterElementBuilder_buildClusterElement__SWIG_0(param0: com.carto.layers.ClusterElementBuilder, param1: number, param2: number): number;
                public static delete_ClusterElementBuilder(param0: number): void;
                public static ClusterElementBuilder_buildClusterElementSwigExplicitClusterElementBuilder__SWIG_0(
                    param0: number,
                    param1: com.carto.layers.ClusterElementBuilder,
                    param2: number,
                    param3: com.carto.core.MapPos,
                    param4: number
                ): number;
                public static ClusterElementBuilder_getBuilderModeSwigExplicitClusterElementBuilder(param0: number, param1: com.carto.layers.ClusterElementBuilder): number;
                public static ClusterElementBuilder_buildClusterElement__SWIG_1(
                    param0: number,
                    param1: com.carto.layers.ClusterElementBuilder,
                    param2: number,
                    param3: com.carto.core.MapPos,
                    param4: number,
                    param5: com.carto.vectorelements.VectorElementVector
                ): number;
                public constructor();
                public static ClusterElementBuilder_swigGetRawPtr(param0: number, param1: com.carto.layers.ClusterElementBuilder): number;
                public static ClusterElementBuilder_swigGetClassName(param0: number, param1: com.carto.layers.ClusterElementBuilder): string;
                public static SwigDirector_ClusterElementBuilder_buildClusterElement__SWIG_1(param0: com.carto.layers.ClusterElementBuilder, param1: number, param2: number): number;
                public static SwigDirector_ClusterElementBuilder_getBuilderMode(param0: com.carto.layers.ClusterElementBuilder): number;
                public static ClusterElementBuilder_buildClusterElement__SWIG_0(
                    param0: number,
                    param1: com.carto.layers.ClusterElementBuilder,
                    param2: number,
                    param3: com.carto.core.MapPos,
                    param4: number
                ): number;
                public static new_ClusterElementBuilder(): number;
                public static ClusterElementBuilder_swigGetDirectorObject(param0: number, param1: com.carto.layers.ClusterElementBuilder): javalangObject;
                public static ClusterElementBuilder_director_connect(param0: com.carto.layers.ClusterElementBuilder, param1: number, param2: boolean, param3: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class ClusteredVectorLayer extends com.carto.layers.VectorLayer {
                public expandCluster(param0: com.carto.vectorelements.VectorElement, param1: number): boolean;
                public setMaximumClusterZoom(param0: number): void;
                public static getCPtr(param0: com.carto.layers.VectorLayer): number;
                public finalize(): void;
                public setAnimatedClusters(param0: boolean): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: com.carto.datasources.VectorDataSource);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.ClusteredVectorLayer;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.layers.ClusteredVectorLayer): number;
                public getMinimumClusterDistance(): number;
                public getMaximumClusterZoom(): number;
                public isAnimatedClusters(): boolean;
                public swigGetRawPtr(): number;
                public constructor(param0: com.carto.datasources.LocalVectorDataSource, param1: com.carto.layers.ClusterElementBuilder);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorLayer;
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public delete(): void;
                public refresh(): void;
                public getClusterElementBuilder(): com.carto.layers.ClusterElementBuilder;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
                public setMinimumClusterDistance(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class ClusteredVectorLayerModuleJNI extends javalangObject {
                public static ClusteredVectorLayer_setMinimumClusterDistance(param0: number, param1: com.carto.layers.ClusteredVectorLayer, param2: number): void;
                public static ClusteredVectorLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.ClusteredVectorLayer): javalangObject;
                public static ClusteredVectorLayer_setMaximumClusterZoom(param0: number, param1: com.carto.layers.ClusteredVectorLayer, param2: number): void;
                public static delete_ClusteredVectorLayer(param0: number): void;
                public static ClusteredVectorLayer_getClusterElementBuilder(param0: number, param1: com.carto.layers.ClusteredVectorLayer): number;
                public static ClusteredVectorLayer_refresh(param0: number, param1: com.carto.layers.ClusteredVectorLayer): void;
                public constructor();
                public static ClusteredVectorLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.ClusteredVectorLayer): number;
                public static ClusteredVectorLayer_isAnimatedClusters(param0: number, param1: com.carto.layers.ClusteredVectorLayer): boolean;
                public static ClusteredVectorLayer_setAnimatedClusters(param0: number, param1: com.carto.layers.ClusteredVectorLayer, param2: boolean): void;
                public static ClusteredVectorLayer_swigGetClassName(param0: number, param1: com.carto.layers.ClusteredVectorLayer): string;
                public static new_ClusteredVectorLayer(param0: number, param1: com.carto.datasources.LocalVectorDataSource, param2: number, param3: com.carto.layers.ClusterElementBuilder): number;
                public static ClusteredVectorLayer_getMinimumClusterDistance(param0: number, param1: com.carto.layers.ClusteredVectorLayer): number;
                public static ClusteredVectorLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static ClusteredVectorLayer_getMaximumClusterZoom(param0: number, param1: com.carto.layers.ClusteredVectorLayer): number;
                public static ClusteredVectorLayer_expandCluster(
                    param0: number,
                    param1: com.carto.layers.ClusteredVectorLayer,
                    param2: number,
                    param3: com.carto.vectorelements.VectorElement,
                    param4: number
                ): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class EditableVectorLayer extends com.carto.layers.VectorLayer {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.EditableVectorLayer;
                public static getCPtr(param0: com.carto.layers.VectorLayer): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: com.carto.datasources.VectorDataSource);
                public static getCPtr(param0: com.carto.layers.EditableVectorLayer): number;
                public swigGetClassName(): string;
                public swigGetRawPtr(): number;
                public getVectorEditEventListener(): com.carto.layers.VectorEditEventListener;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorLayer;
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public delete(): void;
                public getSelectedVectorElement(): com.carto.vectorelements.VectorElement;
                public setVectorEditEventListener(param0: com.carto.layers.VectorEditEventListener): void;
                public swigGetDirectorObject(): javalangObject;
                public setSelectedVectorElement(param0: com.carto.vectorelements.VectorElement): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class EditableVectorLayerModuleJNI extends javalangObject {
                public static delete_EditableVectorLayer(param0: number): void;
                public static EditableVectorLayer_setVectorEditEventListener(
                    param0: number,
                    param1: com.carto.layers.EditableVectorLayer,
                    param2: number,
                    param3: com.carto.layers.VectorEditEventListener
                ): void;
                public static EditableVectorLayer_getSelectedVectorElement(param0: number, param1: com.carto.layers.EditableVectorLayer): number;
                public static EditableVectorLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static EditableVectorLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.EditableVectorLayer): number;
                public static EditableVectorLayer_swigGetClassName(param0: number, param1: com.carto.layers.EditableVectorLayer): string;
                public static new_EditableVectorLayer(param0: number, param1: com.carto.datasources.VectorDataSource): number;
                public static EditableVectorLayer_getVectorEditEventListener(param0: number, param1: com.carto.layers.EditableVectorLayer): number;
                public static EditableVectorLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.EditableVectorLayer): javalangObject;
                public static EditableVectorLayer_setSelectedVectorElement(
                    param0: number,
                    param1: com.carto.layers.EditableVectorLayer,
                    param2: number,
                    param3: com.carto.vectorelements.VectorElement
                ): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class Layer extends javalangObject {
                public swigCMemOwn: boolean;
                public isVisible(): boolean;
                public getUpdatePriority(): number;
                public update(param0: com.carto.renderers.components.CullState): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setOpacity(param0: number): void;
                public swigGetClassName(): string;
                public setUpdatePriority(param0: number): void;
                public setVisibleZoomRange(param0: com.carto.core.MapRange): void;
                public getVisibleZoomRange(): com.carto.core.MapRange;
                public swigGetRawPtr(): number;
                public simulateClick(param0: com.carto.ui.ClickType, param1: com.carto.core.ScreenPos, param2: com.carto.graphics.ViewState): void;
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public refresh(): void;
                public setCullDelay(param0: number): void;
                public isUpdateInProgress(): boolean;
                public swigGetDirectorObject(): javalangObject;
                public setVisible(param0: boolean): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
                public getOpacity(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class LayerModuleJNI extends javalangObject {
                public static LayerVector_get(param0: number, param1: com.carto.layers.LayerVector, param2: number): number;
                public static Layer_setOpacity(param0: number, param1: com.carto.layers.Layer, param2: number): void;
                public static Layer_isVisible(param0: number, param1: com.carto.layers.Layer): boolean;
                public static LayerVector_add(param0: number, param1: com.carto.layers.LayerVector, param2: number, param3: com.carto.layers.Layer): void;
                public static LayerVector_swigGetRawPtr(param0: number, param1: com.carto.layers.LayerVector): number;
                public static LayerVector_capacity(param0: number, param1: com.carto.layers.LayerVector): number;
                public static Layer_setUpdatePriority(param0: number, param1: com.carto.layers.Layer, param2: number): void;
                public static Layer_swigGetRawPtr(param0: number, param1: com.carto.layers.Layer): number;
                public static Layer_getVisibleZoomRange(param0: number, param1: com.carto.layers.Layer): number;
                public constructor();
                public static delete_Layer(param0: number): void;
                public static Layer_isUpdateInProgress(param0: number, param1: com.carto.layers.Layer): boolean;
                public static new_LayerVector__SWIG_1(param0: number): number;
                public static Layer_update(param0: number, param1: com.carto.layers.Layer, param2: number, param3: com.carto.renderers.components.CullState): void;
                public static LayerVector_isEmpty(param0: number, param1: com.carto.layers.LayerVector): boolean;
                public static Layer_swigGetClassName(param0: number, param1: com.carto.layers.Layer): string;
                public static Layer_swigGetDirectorObject(param0: number, param1: com.carto.layers.Layer): javalangObject;
                public static LayerVector_reserve(param0: number, param1: com.carto.layers.LayerVector, param2: number): void;
                public static Layer_simulateClick(
                    param0: number,
                    param1: com.carto.layers.Layer,
                    param2: number,
                    param3: number,
                    param4: com.carto.core.ScreenPos,
                    param5: number,
                    param6: com.carto.graphics.ViewState
                ): void;
                public static Layer_setVisibleZoomRange(param0: number, param1: com.carto.layers.Layer, param2: number, param3: com.carto.core.MapRange): void;
                public static LayerVector_size(param0: number, param1: com.carto.layers.LayerVector): number;
                public static Layer_setVisible(param0: number, param1: com.carto.layers.Layer, param2: boolean): void;
                public static Layer_getUpdatePriority(param0: number, param1: com.carto.layers.Layer): number;
                public static new_LayerVector__SWIG_0(): number;
                public static delete_LayerVector(param0: number): void;
                public static Layer_setCullDelay(param0: number, param1: com.carto.layers.Layer, param2: number): void;
                public static Layer_getOpacity(param0: number, param1: com.carto.layers.Layer): number;
                public static LayerVector_set(param0: number, param1: com.carto.layers.LayerVector, param2: number, param3: number, param4: com.carto.layers.Layer): void;
                public static LayerVector_clear(param0: number, param1: com.carto.layers.LayerVector): void;
                public static Layer_refresh(param0: number, param1: com.carto.layers.Layer): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class LayerVector extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.layers.LayerVector): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public set(param0: number, param1: com.carto.layers.Layer): void;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public get(param0: number): com.carto.layers.Layer;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public add(param0: com.carto.layers.Layer): void;
                public isEmpty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class NMLModelLODTreeEventListener extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.layers.NMLModelLODTreeEventListener): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.NMLModelLODTreeEventListener;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public onNMLModelLODTreeClicked(param0: com.carto.ui.NMLModelLODTreeClickInfo): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class NMLModelLODTreeEventListenerModuleJNI extends javalangObject {
                public static NMLModelLODTreeEventListener_onNMLModelLODTreeClickedSwigExplicitNMLModelLODTreeEventListener(
                    param0: number,
                    param1: com.carto.layers.NMLModelLODTreeEventListener,
                    param2: number,
                    param3: com.carto.ui.NMLModelLODTreeClickInfo
                ): boolean;
                public static NMLModelLODTreeEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.NMLModelLODTreeEventListener): javalangObject;
                public static new_NMLModelLODTreeEventListener(): number;
                public static NMLModelLODTreeEventListener_swigGetClassName(param0: number, param1: com.carto.layers.NMLModelLODTreeEventListener): string;
                public static NMLModelLODTreeEventListener_onNMLModelLODTreeClicked(
                    param0: number,
                    param1: com.carto.layers.NMLModelLODTreeEventListener,
                    param2: number,
                    param3: com.carto.ui.NMLModelLODTreeClickInfo
                ): boolean;
                public static NMLModelLODTreeEventListener_change_ownership(param0: com.carto.layers.NMLModelLODTreeEventListener, param1: number, param2: boolean): void;
                public static NMLModelLODTreeEventListener_director_connect(param0: com.carto.layers.NMLModelLODTreeEventListener, param1: number, param2: boolean, param3: boolean): void;
                public static delete_NMLModelLODTreeEventListener(param0: number): void;
                public static SwigDirector_NMLModelLODTreeEventListener_onNMLModelLODTreeClicked(param0: com.carto.layers.NMLModelLODTreeEventListener, param1: number): boolean;
                public constructor();
                public static NMLModelLODTreeEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.NMLModelLODTreeEventListener): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class NMLModelLODTreeLayer extends com.carto.layers.Layer {
                public getMaxMemorySize(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.NMLModelLODTreeLayer;
                public getNMLModelLODTreeEventListener(): com.carto.layers.NMLModelLODTreeEventListener;
                public constructor(param0: com.carto.datasources.NMLModelLODTreeDataSource);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setMaxMemorySize(param0: number): void;
                public swigGetClassName(): string;
                public getLODResolutionFactor(): number;
                public getDataSource(): com.carto.datasources.NMLModelLODTreeDataSource;
                public static getCPtr(param0: com.carto.layers.NMLModelLODTreeLayer): number;
                public swigGetRawPtr(): number;
                public setLODResolutionFactor(param0: number): void;
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public delete(): void;
                public isUpdateInProgress(): boolean;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
                public setNMLModelLODTreeEventListener(param0: com.carto.layers.NMLModelLODTreeEventListener): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class NMLModelLODTreeLayerModuleJNI extends javalangObject {
                public static NMLModelLODTreeLayer_setLODResolutionFactor(param0: number, param1: com.carto.layers.NMLModelLODTreeLayer, param2: number): void;
                public static delete_NMLModelLODTreeLayer(param0: number): void;
                public static NMLModelLODTreeLayer_getDataSource(param0: number, param1: com.carto.layers.NMLModelLODTreeLayer): number;
                public static NMLModelLODTreeLayer_getMaxMemorySize(param0: number, param1: com.carto.layers.NMLModelLODTreeLayer): number;
                public static NMLModelLODTreeLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static NMLModelLODTreeLayer_setNMLModelLODTreeEventListener(
                    param0: number,
                    param1: com.carto.layers.NMLModelLODTreeLayer,
                    param2: number,
                    param3: com.carto.layers.NMLModelLODTreeEventListener
                ): void;
                public static NMLModelLODTreeLayer_setMaxMemorySize(param0: number, param1: com.carto.layers.NMLModelLODTreeLayer, param2: number): void;
                public static NMLModelLODTreeLayer_isUpdateInProgress(param0: number, param1: com.carto.layers.NMLModelLODTreeLayer): boolean;
                public static NMLModelLODTreeLayer_getLODResolutionFactor(param0: number, param1: com.carto.layers.NMLModelLODTreeLayer): number;
                public static NMLModelLODTreeLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.NMLModelLODTreeLayer): javalangObject;
                public constructor();
                public static new_NMLModelLODTreeLayer(param0: number, param1: com.carto.datasources.NMLModelLODTreeDataSource): number;
                public static NMLModelLODTreeLayer_getNMLModelLODTreeEventListener(param0: number, param1: com.carto.layers.NMLModelLODTreeLayer): number;
                public static NMLModelLODTreeLayer_swigGetClassName(param0: number, param1: com.carto.layers.NMLModelLODTreeLayer): string;
                public static NMLModelLODTreeLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.NMLModelLODTreeLayer): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class RasterTileEventListener extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.RasterTileEventListener;
                public finalize(): void;
                public onRasterTileClicked(param0: com.carto.ui.RasterTileClickInfo): boolean;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.layers.RasterTileEventListener): number;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class RasterTileEventListenerModuleJNI extends javalangObject {
                public static RasterTileEventListener_onRasterTileClicked(
                    param0: number,
                    param1: com.carto.layers.RasterTileEventListener,
                    param2: number,
                    param3: com.carto.ui.RasterTileClickInfo
                ): boolean;
                public static RasterTileEventListener_swigGetClassName(param0: number, param1: com.carto.layers.RasterTileEventListener): string;
                public static RasterTileEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.RasterTileEventListener): number;
                public static RasterTileEventListener_onRasterTileClickedSwigExplicitRasterTileEventListener(
                    param0: number,
                    param1: com.carto.layers.RasterTileEventListener,
                    param2: number,
                    param3: com.carto.ui.RasterTileClickInfo
                ): boolean;
                public static SwigDirector_RasterTileEventListener_onRasterTileClicked(param0: com.carto.layers.RasterTileEventListener, param1: number): boolean;
                public static RasterTileEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.RasterTileEventListener): javalangObject;
                public static new_RasterTileEventListener(): number;
                public static RasterTileEventListener_director_connect(param0: com.carto.layers.RasterTileEventListener, param1: number, param2: boolean, param3: boolean): void;
                public constructor();
                public static delete_RasterTileEventListener(param0: number): void;
                public static RasterTileEventListener_change_ownership(param0: com.carto.layers.RasterTileEventListener, param1: number, param2: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class RasterTileLayer extends com.carto.layers.TileLayer {
                public getTextureCacheCapacity(): number;
                public static getCPtr(param0: com.carto.layers.TileLayer): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.RasterTileLayer;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getRasterTileEventListener(): com.carto.layers.RasterTileEventListener;
                public static getCPtr(param0: com.carto.layers.RasterTileLayer): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
                public swigGetRawPtr(): number;
                public constructor(param0: com.carto.datasources.TileDataSource);
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public delete(): void;
                public setRasterTileEventListener(param0: com.carto.layers.RasterTileEventListener): void;
                public swigGetDirectorObject(): javalangObject;
                public setTextureCacheCapacity(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class RasterTileLayerModuleJNI extends javalangObject {
                public static RasterTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static new_RasterTileLayer(param0: number, param1: com.carto.datasources.TileDataSource): number;
                public static RasterTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.RasterTileLayer): string;
                public static RasterTileLayer_setTextureCacheCapacity(param0: number, param1: com.carto.layers.RasterTileLayer, param2: number): void;
                public static RasterTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.RasterTileLayer): number;
                public static RasterTileLayer_getTextureCacheCapacity(param0: number, param1: com.carto.layers.RasterTileLayer): number;
                public static RasterTileLayer_getRasterTileEventListener(param0: number, param1: com.carto.layers.RasterTileLayer): number;
                public static delete_RasterTileLayer(param0: number): void;
                public static RasterTileLayer_setRasterTileEventListener(
                    param0: number,
                    param1: com.carto.layers.RasterTileLayer,
                    param2: number,
                    param3: com.carto.layers.RasterTileEventListener
                ): void;
                public constructor();
                public static RasterTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.RasterTileLayer): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class SolidLayer extends com.carto.layers.Layer {
                public setBitmap(param0: com.carto.graphics.Bitmap): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setColor(param0: com.carto.graphics.Color): void;
                public static getCPtr(param0: com.carto.layers.SolidLayer): number;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.SolidLayer;
                public getBitmapScale(): number;
                public getBitmap(): com.carto.graphics.Bitmap;
                public swigGetRawPtr(): number;
                public setBitmapScale(param0: number): void;
                public constructor(param0: com.carto.graphics.Color);
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public delete(): void;
                public constructor(param0: com.carto.graphics.Bitmap);
                public getColor(): com.carto.graphics.Color;
                public isUpdateInProgress(): boolean;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class SolidLayerModuleJNI extends javalangObject {
                public static SolidLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.SolidLayer): number;
                public static SolidLayer_setColor(param0: number, param1: com.carto.layers.SolidLayer, param2: number, param3: com.carto.graphics.Color): void;
                public static SolidLayer_isUpdateInProgress(param0: number, param1: com.carto.layers.SolidLayer): boolean;
                public static SolidLayer_swigGetClassName(param0: number, param1: com.carto.layers.SolidLayer): string;
                public static SolidLayer_getBitmap(param0: number, param1: com.carto.layers.SolidLayer): number;
                public static new_SolidLayer__SWIG_0(param0: number, param1: com.carto.graphics.Color): number;
                public static new_SolidLayer__SWIG_1(param0: number, param1: com.carto.graphics.Bitmap): number;
                public static SolidLayer_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static delete_SolidLayer(param0: number): void;
                public static SolidLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.SolidLayer): javalangObject;
                public static SolidLayer_setBitmapScale(param0: number, param1: com.carto.layers.SolidLayer, param2: number): void;
                public static SolidLayer_getColor(param0: number, param1: com.carto.layers.SolidLayer): number;
                public static SolidLayer_getBitmapScale(param0: number, param1: com.carto.layers.SolidLayer): number;
                public static SolidLayer_setBitmap(param0: number, param1: com.carto.layers.SolidLayer, param2: number, param3: com.carto.graphics.Bitmap): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TileLayer extends com.carto.layers.Layer {
                public setUTFGridEventListener(param0: com.carto.layers.UTFGridEventListener): void;
                public static getCPtr(param0: com.carto.layers.TileLayer): number;
                public setTileLoadListener(param0: com.carto.layers.TileLoadListener): void;
                public getTileSubstitutionPolicy(): com.carto.layers.TileSubstitutionPolicy;
                public getZoomLevelBias(): number;
                public setZoomLevelBias(param0: number): void;
                public finalize(): void;
                public calculateMapTileOrigin(param0: com.carto.core.MapTile): com.carto.core.MapPos;
                public setUTFGridDataSource(param0: com.carto.datasources.TileDataSource): void;
                public getDataSource(): com.carto.datasources.TileDataSource;
                public calculateMapTile(param0: com.carto.core.MapPos, param1: number): com.carto.core.MapTile;
                public calculateMapTileBounds(param0: com.carto.core.MapTile): com.carto.core.MapBounds;
                public getTileLoadListener(): com.carto.layers.TileLoadListener;
                public isSynchronizedRefresh(): boolean;
                public delete(): void;
                public setFrameNr(param0: number): void;
                public getUTFGridDataSource(): com.carto.datasources.TileDataSource;
                public isUpdateInProgress(): boolean;
                public swigGetDirectorObject(): javalangObject;
                public setMaxOverzoomLevel(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
                public getUTFGridEventListener(): com.carto.layers.UTFGridEventListener;
                public setMaxUnderzoomLevel(param0: number): void;
                public getMaxOverzoomLevel(): number;
                public constructor(param0: number, param1: boolean);
                public clearTileCaches(param0: boolean): void;
                public swigGetClassName(): string;
                public setPreloading(param0: boolean): void;
                public setTileSubstitutionPolicy(param0: com.carto.layers.TileSubstitutionPolicy): void;
                public getMaxUnderzoomLevel(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.layers.Layer): number;
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
            export class TileLayerModuleJNI extends javalangObject {
                public static TileLayer_clearTileCaches(param0: number, param1: com.carto.layers.TileLayer, param2: boolean): void;
                public static TileLayer_isPreloading(param0: number, param1: com.carto.layers.TileLayer): boolean;
                public static TileLayer_setFrameNr(param0: number, param1: com.carto.layers.TileLayer, param2: number): void;
                public static TileLayer_getMaxOverzoomLevel(param0: number, param1: com.carto.layers.TileLayer): number;
                public static TileLayer_setTileLoadListener(param0: number, param1: com.carto.layers.TileLayer, param2: number, param3: com.carto.layers.TileLoadListener): void;
                public static TileLayer_setPreloading(param0: number, param1: com.carto.layers.TileLayer, param2: boolean): void;
                public constructor();
                public static TileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static TileLayer_getMaxUnderzoomLevel(param0: number, param1: com.carto.layers.TileLayer): number;
                public static TileLayer_getTileSubstitutionPolicy(param0: number, param1: com.carto.layers.TileLayer): number;
                public static TileLayer_setUTFGridEventListener(param0: number, param1: com.carto.layers.TileLayer, param2: number, param3: com.carto.layers.UTFGridEventListener): void;
                public static TileLayer_getTileLoadListener(param0: number, param1: com.carto.layers.TileLayer): number;
                public static TileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.TileLayer): javalangObject;
                public static TileLayer_calculateMapTileBounds(param0: number, param1: com.carto.layers.TileLayer, param2: number, param3: com.carto.core.MapTile): number;
                public static TileLayer_swigGetClassName(param0: number, param1: com.carto.layers.TileLayer): string;
                public static TileLayer_calculateMapTileOrigin(param0: number, param1: com.carto.layers.TileLayer, param2: number, param3: com.carto.core.MapTile): number;
                public static TileLayer_isUpdateInProgress(param0: number, param1: com.carto.layers.TileLayer): boolean;
                public static TileLayer_setSynchronizedRefresh(param0: number, param1: com.carto.layers.TileLayer, param2: boolean): void;
                public static TileLayer_calculateMapTile(param0: number, param1: com.carto.layers.TileLayer, param2: number, param3: com.carto.core.MapPos, param4: number): number;
                public static TileLayer_setMaxOverzoomLevel(param0: number, param1: com.carto.layers.TileLayer, param2: number): void;
                public static TileLayer_getDataSource(param0: number, param1: com.carto.layers.TileLayer): number;
                public static TileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.TileLayer): number;
                public static TileLayer_setUTFGridDataSource(param0: number, param1: com.carto.layers.TileLayer, param2: number, param3: com.carto.datasources.TileDataSource): void;
                public static delete_TileLayer(param0: number): void;
                public static TileLayer_getFrameNr(param0: number, param1: com.carto.layers.TileLayer): number;
                public static TileLayer_getUTFGridEventListener(param0: number, param1: com.carto.layers.TileLayer): number;
                public static TileLayer_setZoomLevelBias(param0: number, param1: com.carto.layers.TileLayer, param2: number): void;
                public static TileLayer_setTileSubstitutionPolicy(param0: number, param1: com.carto.layers.TileLayer, param2: number): void;
                public static TileLayer_isSynchronizedRefresh(param0: number, param1: com.carto.layers.TileLayer): boolean;
                public static TileLayer_getZoomLevelBias(param0: number, param1: com.carto.layers.TileLayer): number;
                public static TileLayer_setMaxUnderzoomLevel(param0: number, param1: com.carto.layers.TileLayer, param2: number): void;
                public static TileLayer_getUTFGridDataSource(param0: number, param1: com.carto.layers.TileLayer): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TileLoadListener extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.layers.TileLoadListener): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public onVisibleTilesLoaded(): void;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLoadListener;
                public swigGetDirectorObject(): javalangObject;
                public onPreloadingTilesLoaded(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TileLoadListenerModuleJNI extends javalangObject {
                public static TileLoadListener_onPreloadingTilesLoadedSwigExplicitTileLoadListener(param0: number, param1: com.carto.layers.TileLoadListener): void;
                public static TileLoadListener_onPreloadingTilesLoaded(param0: number, param1: com.carto.layers.TileLoadListener): void;
                public static TileLoadListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.TileLoadListener): javalangObject;
                public static TileLoadListener_onVisibleTilesLoadedSwigExplicitTileLoadListener(param0: number, param1: com.carto.layers.TileLoadListener): void;
                public static TileLoadListener_swigGetRawPtr(param0: number, param1: com.carto.layers.TileLoadListener): number;
                public static new_TileLoadListener(): number;
                public constructor();
                public static SwigDirector_TileLoadListener_onVisibleTilesLoaded(param0: com.carto.layers.TileLoadListener): void;
                public static TileLoadListener_onVisibleTilesLoaded(param0: number, param1: com.carto.layers.TileLoadListener): void;
                public static TileLoadListener_swigGetClassName(param0: number, param1: com.carto.layers.TileLoadListener): string;
                public static TileLoadListener_director_connect(param0: com.carto.layers.TileLoadListener, param1: number, param2: boolean, param3: boolean): void;
                public static delete_TileLoadListener(param0: number): void;
                public static SwigDirector_TileLoadListener_onPreloadingTilesLoaded(param0: com.carto.layers.TileLoadListener): void;
                public static TileLoadListener_change_ownership(param0: com.carto.layers.TileLoadListener, param1: number, param2: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TileSubstitutionPolicy extends javalangEnum<any> {
                public static TILE_SUBSTITUTION_POLICY_ALL: com.carto.layers.TileSubstitutionPolicy;
                public static TILE_SUBSTITUTION_POLICY_VISIBLE: com.carto.layers.TileSubstitutionPolicy;
                public static TILE_SUBSTITUTION_POLICY_NONE: com.carto.layers.TileSubstitutionPolicy;
                public static valueOf(param0: string): com.carto.layers.TileSubstitutionPolicy;
                public swigValue(): number;
                public static values(): native.Array<com.carto.layers.TileSubstitutionPolicy>;
                public static swigToEnum(param0: number): com.carto.layers.TileSubstitutionPolicy;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace TileSubstitutionPolicy {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TorqueTileLayer extends com.carto.layers.VectorTileLayer {
                public static getCPtr(param0: com.carto.layers.TorqueTileLayer): number;
                public static getCPtr(param0: com.carto.layers.TileLayer): number;
                public countVisibleFeatures(param0: number): number;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.TorqueTileDecoder);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.layers.VectorTileLayer): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TorqueTileLayer;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileLayer;
                public swigGetDirectorObject(): javalangObject;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class TorqueTileLayerModuleJNI extends javalangObject {
                public static TorqueTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.TorqueTileLayer): string;
                public static delete_TorqueTileLayer(param0: number): void;
                public static TorqueTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.TorqueTileLayer): javalangObject;
                public static TorqueTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static new_TorqueTileLayer(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.vectortiles.TorqueTileDecoder): number;
                public static TorqueTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.TorqueTileLayer): number;
                public constructor();
                public static TorqueTileLayer_countVisibleFeatures(param0: number, param1: com.carto.layers.TorqueTileLayer, param2: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class UTFGridEventListener extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public onUTFGridClicked(param0: com.carto.ui.UTFGridClickInfo): boolean;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.UTFGridEventListener;
                public static getCPtr(param0: com.carto.layers.UTFGridEventListener): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class UTFGridEventListenerModuleJNI extends javalangObject {
                public static UTFGridEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.UTFGridEventListener): number;
                public static SwigDirector_UTFGridEventListener_onUTFGridClicked(param0: com.carto.layers.UTFGridEventListener, param1: number): boolean;
                public static UTFGridEventListener_swigGetClassName(param0: number, param1: com.carto.layers.UTFGridEventListener): string;
                public static delete_UTFGridEventListener(param0: number): void;
                public static UTFGridEventListener_onUTFGridClicked(param0: number, param1: com.carto.layers.UTFGridEventListener, param2: number, param3: com.carto.ui.UTFGridClickInfo): boolean;
                public static UTFGridEventListener_change_ownership(param0: com.carto.layers.UTFGridEventListener, param1: number, param2: boolean): void;
                public static UTFGridEventListener_director_connect(param0: com.carto.layers.UTFGridEventListener, param1: number, param2: boolean, param3: boolean): void;
                public static UTFGridEventListener_onUTFGridClickedSwigExplicitUTFGridEventListener(
                    param0: number,
                    param1: com.carto.layers.UTFGridEventListener,
                    param2: number,
                    param3: com.carto.ui.UTFGridClickInfo
                ): boolean;
                public static UTFGridEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.UTFGridEventListener): javalangObject;
                public constructor();
                public static new_UTFGridEventListener(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorEditEventListener extends javalangObject {
                public swigCMemOwn: boolean;
                public onElementModify(param0: com.carto.vectorelements.VectorElement, param1: com.carto.geometry.Geometry): void;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public onElementDeselected(param0: com.carto.vectorelements.VectorElement): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public onElementSelect(param0: com.carto.vectorelements.VectorElement): boolean;
                public onSelectDragPointStyle(param0: com.carto.vectorelements.VectorElement, param1: com.carto.layers.VectorElementDragPointStyle): com.carto.styles.PointStyle;
                public onDragMove(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
                public constructor();
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorEditEventListener;
                public onDragEnd(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
                public delete(): void;
                public static getCPtr(param0: com.carto.layers.VectorEditEventListener): number;
                public swigTakeOwnership(): void;
                public onDragStart(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
                public swigGetDirectorObject(): javalangObject;
                public onElementDelete(param0: com.carto.vectorelements.VectorElement): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorEditEventListenerModuleJNI extends javalangObject {
                public static VectorEditEventListener_onDragStart(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
                public static SwigDirector_VectorEditEventListener_onDragStart(param0: com.carto.layers.VectorEditEventListener, param1: number): number;
                public static VectorEditEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorEditEventListener): number;
                public static SwigDirector_VectorEditEventListener_onElementDeselected(param0: com.carto.layers.VectorEditEventListener, param1: number): void;
                public static VectorEditEventListener_onDragMove(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
                public constructor();
                public static SwigDirector_VectorEditEventListener_onDragEnd(param0: com.carto.layers.VectorEditEventListener, param1: number): number;
                public static VectorEditEventListener_onDragMoveSwigExplicitVectorEditEventListener(
                    param0: number,
                    param1: com.carto.layers.VectorEditEventListener,
                    param2: number,
                    param3: com.carto.ui.VectorElementDragInfo
                ): number;
                public static SwigDirector_VectorEditEventListener_onElementDelete(param0: com.carto.layers.VectorEditEventListener, param1: number): void;
                public static SwigDirector_VectorEditEventListener_onElementSelect(param0: com.carto.layers.VectorEditEventListener, param1: number): boolean;
                public static VectorEditEventListener_onElementSelect(
                    param0: number,
                    param1: com.carto.layers.VectorEditEventListener,
                    param2: number,
                    param3: com.carto.vectorelements.VectorElement
                ): boolean;
                public static VectorEditEventListener_onElementSelectSwigExplicitVectorEditEventListener(
                    param0: number,
                    param1: com.carto.layers.VectorEditEventListener,
                    param2: number,
                    param3: com.carto.vectorelements.VectorElement
                ): boolean;
                public static new_VectorEditEventListener(): number;
                public static SwigDirector_VectorEditEventListener_onDragMove(param0: com.carto.layers.VectorEditEventListener, param1: number): number;
                public static VectorEditEventListener_swigGetClassName(param0: number, param1: com.carto.layers.VectorEditEventListener): string;
                public static VectorEditEventListener_onElementModify(
                    param0: number,
                    param1: com.carto.layers.VectorEditEventListener,
                    param2: number,
                    param3: com.carto.vectorelements.VectorElement,
                    param4: number,
                    param5: com.carto.geometry.Geometry
                ): void;
                public static VectorEditEventListener_director_connect(param0: com.carto.layers.VectorEditEventListener, param1: number, param2: boolean, param3: boolean): void;
                public static SwigDirector_VectorEditEventListener_onSelectDragPointStyle(param0: com.carto.layers.VectorEditEventListener, param1: number, param2: number): number;
                public static VectorEditEventListener_onElementDeselectedSwigExplicitVectorEditEventListener(
                    param0: number,
                    param1: com.carto.layers.VectorEditEventListener,
                    param2: number,
                    param3: com.carto.vectorelements.VectorElement
                ): void;
                public static VectorEditEventListener_onElementDeselected(
                    param0: number,
                    param1: com.carto.layers.VectorEditEventListener,
                    param2: number,
                    param3: com.carto.vectorelements.VectorElement
                ): void;
                public static VectorEditEventListener_onDragEnd(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
                public static VectorEditEventListener_onSelectDragPointStyle(
                    param0: number,
                    param1: com.carto.layers.VectorEditEventListener,
                    param2: number,
                    param3: com.carto.vectorelements.VectorElement,
                    param4: number
                ): number;
                public static SwigDirector_VectorEditEventListener_onElementModify(param0: com.carto.layers.VectorEditEventListener, param1: number, param2: number): void;
                public static VectorEditEventListener_change_ownership(param0: com.carto.layers.VectorEditEventListener, param1: number, param2: boolean): void;
                public static VectorEditEventListener_onElementDelete(
                    param0: number,
                    param1: com.carto.layers.VectorEditEventListener,
                    param2: number,
                    param3: com.carto.vectorelements.VectorElement
                ): void;
                public static delete_VectorEditEventListener(param0: number): void;
                public static VectorEditEventListener_onDragStartSwigExplicitVectorEditEventListener(
                    param0: number,
                    param1: com.carto.layers.VectorEditEventListener,
                    param2: number,
                    param3: com.carto.ui.VectorElementDragInfo
                ): number;
                public static VectorEditEventListener_onDragEndSwigExplicitVectorEditEventListener(
                    param0: number,
                    param1: com.carto.layers.VectorEditEventListener,
                    param2: number,
                    param3: com.carto.ui.VectorElementDragInfo
                ): number;
                public static VectorEditEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.VectorEditEventListener): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorElementDragPointStyle extends javalangEnum<any> {
                public static VECTOR_ELEMENT_DRAG_POINT_STYLE_NORMAL: com.carto.layers.VectorElementDragPointStyle;
                public static VECTOR_ELEMENT_DRAG_POINT_STYLE_VIRTUAL: com.carto.layers.VectorElementDragPointStyle;
                public static VECTOR_ELEMENT_DRAG_POINT_STYLE_SELECTED: com.carto.layers.VectorElementDragPointStyle;
                public swigValue(): number;
                public static swigToEnum(param0: number): com.carto.layers.VectorElementDragPointStyle;
                public static valueOf(param0: string): com.carto.layers.VectorElementDragPointStyle;
                public static values(): native.Array<com.carto.layers.VectorElementDragPointStyle>;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace VectorElementDragPointStyle {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorElementDragResult extends javalangEnum<any> {
                public static VECTOR_ELEMENT_DRAG_RESULT_IGNORE: com.carto.layers.VectorElementDragResult;
                public static VECTOR_ELEMENT_DRAG_RESULT_STOP: com.carto.layers.VectorElementDragResult;
                public static VECTOR_ELEMENT_DRAG_RESULT_MODIFY: com.carto.layers.VectorElementDragResult;
                public static VECTOR_ELEMENT_DRAG_RESULT_DELETE: com.carto.layers.VectorElementDragResult;
                public static swigToEnum(param0: number): com.carto.layers.VectorElementDragResult;
                public static values(): native.Array<com.carto.layers.VectorElementDragResult>;
                public swigValue(): number;
                public static valueOf(param0: string): com.carto.layers.VectorElementDragResult;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace VectorElementDragResult {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorElementEventListener extends javalangObject {
                public swigCMemOwn: boolean;
                public onVectorElementClicked(param0: com.carto.ui.VectorElementClickInfo): boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.layers.VectorElementEventListener): number;
                public swigGetClassName(): string;
                public constructor();
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorElementEventListener;
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorElementEventListenerModuleJNI extends javalangObject {
                public static new_VectorElementEventListener(): number;
                public static SwigDirector_VectorElementEventListener_onVectorElementClicked(param0: com.carto.layers.VectorElementEventListener, param1: number): boolean;
                public static VectorElementEventListener_swigGetClassName(param0: number, param1: com.carto.layers.VectorElementEventListener): string;
                public static delete_VectorElementEventListener(param0: number): void;
                public static VectorElementEventListener_onVectorElementClicked(
                    param0: number,
                    param1: com.carto.layers.VectorElementEventListener,
                    param2: number,
                    param3: com.carto.ui.VectorElementClickInfo
                ): boolean;
                public static VectorElementEventListener_onVectorElementClickedSwigExplicitVectorElementEventListener(
                    param0: number,
                    param1: com.carto.layers.VectorElementEventListener,
                    param2: number,
                    param3: com.carto.ui.VectorElementClickInfo
                ): boolean;
                public static VectorElementEventListener_director_connect(param0: com.carto.layers.VectorElementEventListener, param1: number, param2: boolean, param3: boolean): void;
                public static VectorElementEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorElementEventListener): number;
                public static VectorElementEventListener_change_ownership(param0: com.carto.layers.VectorElementEventListener, param1: number, param2: boolean): void;
                public static VectorElementEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.VectorElementEventListener): javalangObject;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorLayer extends com.carto.layers.Layer {
                public static getCPtr(param0: com.carto.layers.VectorLayer): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: com.carto.datasources.VectorDataSource);
                public swigGetClassName(): string;
                public getDataSource(): com.carto.datasources.VectorDataSource;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorLayer;
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public delete(): void;
                public getVectorElementEventListener(): com.carto.layers.VectorElementEventListener;
                public isUpdateInProgress(): boolean;
                public swigGetDirectorObject(): javalangObject;
                public setVectorElementEventListener(param0: com.carto.layers.VectorElementEventListener): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorLayerModuleJNI extends javalangObject {
                public static VectorLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.VectorLayer): javalangObject;
                public static VectorLayer_swigGetClassName(param0: number, param1: com.carto.layers.VectorLayer): string;
                public static delete_VectorLayer(param0: number): void;
                public static VectorLayer_setVectorElementEventListener(
                    param0: number,
                    param1: com.carto.layers.VectorLayer,
                    param2: number,
                    param3: com.carto.layers.VectorElementEventListener
                ): void;
                public static new_VectorLayer(param0: number, param1: com.carto.datasources.VectorDataSource): number;
                public static VectorLayer_isUpdateInProgress(param0: number, param1: com.carto.layers.VectorLayer): boolean;
                public static VectorLayer_getVectorElementEventListener(param0: number, param1: com.carto.layers.VectorLayer): number;
                public static VectorLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorLayer): number;
                public static VectorLayer_getDataSource(param0: number, param1: com.carto.layers.VectorLayer): number;
                public static VectorLayer_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorTileEventListener extends javalangObject {
                public swigCMemOwn: boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileEventListener;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public onVectorTileClicked(param0: com.carto.ui.VectorTileClickInfo): boolean;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.layers.VectorTileEventListener): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorTileEventListenerModuleJNI extends javalangObject {
                public static VectorTileEventListener_onVectorTileClickedSwigExplicitVectorTileEventListener(
                    param0: number,
                    param1: com.carto.layers.VectorTileEventListener,
                    param2: number,
                    param3: com.carto.ui.VectorTileClickInfo
                ): boolean;
                public static VectorTileEventListener_director_connect(param0: com.carto.layers.VectorTileEventListener, param1: number, param2: boolean, param3: boolean): void;
                public static VectorTileEventListener_swigGetClassName(param0: number, param1: com.carto.layers.VectorTileEventListener): string;
                public static VectorTileEventListener_onVectorTileClicked(
                    param0: number,
                    param1: com.carto.layers.VectorTileEventListener,
                    param2: number,
                    param3: com.carto.ui.VectorTileClickInfo
                ): boolean;
                public static delete_VectorTileEventListener(param0: number): void;
                public static VectorTileEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorTileEventListener): number;
                public static new_VectorTileEventListener(): number;
                public static VectorTileEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.VectorTileEventListener): javalangObject;
                public static SwigDirector_VectorTileEventListener_onVectorTileClicked(param0: com.carto.layers.VectorTileEventListener, param1: number): boolean;
                public constructor();
                public static VectorTileEventListener_change_ownership(param0: com.carto.layers.VectorTileEventListener, param1: number, param2: boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorTileLayer extends com.carto.layers.TileLayer {
                public getTileCacheCapacity(): number;
                public static getCPtr(param0: com.carto.layers.TileLayer): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getTileDecoder(): com.carto.vectortiles.VectorTileDecoder;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.layers.VectorTileLayer): number;
                public getVectorTileEventListener(): com.carto.layers.VectorTileEventListener;
                public setLabelRenderOrder(param0: com.carto.layers.VectorTileRenderOrder): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.layers.Layer): number;
                public delete(): void;
                public getLabelRenderOrder(): com.carto.layers.VectorTileRenderOrder;
                public getBuildingRenderOrder(): com.carto.layers.VectorTileRenderOrder;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileLayer;
                public swigGetDirectorObject(): javalangObject;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
                public setVectorTileEventListener(param0: com.carto.layers.VectorTileEventListener): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
                public setTileCacheCapacity(param0: number): void;
                public setBuildingRenderOrder(param0: com.carto.layers.VectorTileRenderOrder): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorTileLayerModuleJNI extends javalangObject {
                public static VectorTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.VectorTileLayer): string;
                public static VECTOR_TILE_RENDER_ORDER_HIDDEN_get(): number;
                public static VectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
                public static delete_VectorTileLayer(param0: number): void;
                public static VectorTileLayer_getTileCacheCapacity(param0: number, param1: com.carto.layers.VectorTileLayer): number;
                public static VectorTileLayer_setTileCacheCapacity(param0: number, param1: com.carto.layers.VectorTileLayer, param2: number): void;
                public static VectorTileLayer_getLabelRenderOrder(param0: number, param1: com.carto.layers.VectorTileLayer): number;
                public static VectorTileLayer_getVectorTileEventListener(param0: number, param1: com.carto.layers.VectorTileLayer): number;
                public static VectorTileLayer_getBuildingRenderOrder(param0: number, param1: com.carto.layers.VectorTileLayer): number;
                public constructor();
                public static VECTOR_TILE_RENDER_ORDER_LAYER_get(): number;
                public static VectorTileLayer_setBuildingRenderOrder(param0: number, param1: com.carto.layers.VectorTileLayer, param2: number): void;
                public static VectorTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.VectorTileLayer): javalangObject;
                public static VECTOR_TILE_RENDER_ORDER_LAST_get(): number;
                public static new_VectorTileLayer(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.vectortiles.VectorTileDecoder): number;
                public static VectorTileLayer_getTileDecoder(param0: number, param1: com.carto.layers.VectorTileLayer): number;
                public static VectorTileLayer_setLabelRenderOrder(param0: number, param1: com.carto.layers.VectorTileLayer, param2: number): void;
                public static VectorTileLayer_setVectorTileEventListener(
                    param0: number,
                    param1: com.carto.layers.VectorTileLayer,
                    param2: number,
                    param3: com.carto.layers.VectorTileEventListener
                ): void;
                public static VectorTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorTileLayer): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace layers {
            export class VectorTileRenderOrder extends javalangEnum<any> {
                public static VECTOR_TILE_RENDER_ORDER_HIDDEN: com.carto.layers.VectorTileRenderOrder;
                public static VECTOR_TILE_RENDER_ORDER_LAYER: com.carto.layers.VectorTileRenderOrder;
                public static VECTOR_TILE_RENDER_ORDER_LAST: com.carto.layers.VectorTileRenderOrder;
                public swigValue(): number;
                public static swigToEnum(param0: number): com.carto.layers.VectorTileRenderOrder;
                public static values(): native.Array<com.carto.layers.VectorTileRenderOrder>;
                public static valueOf(param0: string): com.carto.layers.VectorTileRenderOrder;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace VectorTileRenderOrder {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class CartoPackageManager extends com.carto.packagemanager.PackageManager {
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.packagemanager.PackageManager;
                public constructor(param0: number, param1: boolean);
                public getStyleAssetPackage(param0: com.carto.layers.CartoBaseMapStyle): com.carto.utils.AssetPackage;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.packagemanager.CartoPackageManager;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.packagemanager.PackageManager): number;
                public delete(): void;
                public constructor(param0: string, param1: string, param2: string, param3: string);
                public startStyleDownload(param0: com.carto.layers.CartoBaseMapStyle): boolean;
                public static getCPtr(param0: com.carto.packagemanager.CartoPackageManager): number;
                public swigGetDirectorObject(): javalangObject;
                public constructor(param0: string, param1: string);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class CartoPackageManagerModuleJNI extends javalangObject {
                public static CartoPackageManager_swigGetClassName(param0: number, param1: com.carto.packagemanager.CartoPackageManager): string;
                public static CartoPackageManager_startStyleDownload(param0: number, param1: com.carto.packagemanager.CartoPackageManager, param2: number): boolean;
                public static CartoPackageManager_getStyleAssetPackage(param0: number, param1: com.carto.packagemanager.CartoPackageManager, param2: number): number;
                public static new_CartoPackageManager(param0: string, param1: string): number;
                public static CartoPackageManager_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.CartoPackageManager): number;
                public static CartoPackageManager_swigGetDirectorObject(param0: number, param1: com.carto.packagemanager.CartoPackageManager): javalangObject;
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
            export class PackageAction extends javalangEnum<any> {
                public static PACKAGE_ACTION_READY: com.carto.packagemanager.PackageAction;
                public static PACKAGE_ACTION_WAITING: com.carto.packagemanager.PackageAction;
                public static PACKAGE_ACTION_DOWNLOADING: com.carto.packagemanager.PackageAction;
                public static PACKAGE_ACTION_COPYING: com.carto.packagemanager.PackageAction;
                public static PACKAGE_ACTION_REMOVING: com.carto.packagemanager.PackageAction;
                public static valueOf(param0: string): com.carto.packagemanager.PackageAction;
                public swigValue(): number;
                public static values(): native.Array<com.carto.packagemanager.PackageAction>;
                public static swigToEnum(param0: number): com.carto.packagemanager.PackageAction;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace PackageAction {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageErrorType extends javalangEnum<any> {
                public static PACKAGE_ERROR_TYPE_SYSTEM: com.carto.packagemanager.PackageErrorType;
                public static PACKAGE_ERROR_TYPE_CONNECTION: com.carto.packagemanager.PackageErrorType;
                public static PACKAGE_ERROR_TYPE_DOWNLOAD_LIMIT_EXCEEDED: com.carto.packagemanager.PackageErrorType;
                public static PACKAGE_ERROR_TYPE_PACKAGE_TOO_BIG: com.carto.packagemanager.PackageErrorType;
                public static PACKAGE_ERROR_TYPE_NO_OFFLINE_PLAN: com.carto.packagemanager.PackageErrorType;
                public swigValue(): number;
                public static values(): native.Array<com.carto.packagemanager.PackageErrorType>;
                public static swigToEnum(param0: number): com.carto.packagemanager.PackageErrorType;
                public static valueOf(param0: string): com.carto.packagemanager.PackageErrorType;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace PackageErrorType {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageInfo extends javalangObject {
                public swigCMemOwn: boolean;
                public constructor(
                    param0: string,
                    param1: com.carto.packagemanager.PackageType,
                    param2: number,
                    param3: javamathBigInteger,
                    param4: string,
                    param5: com.carto.packagemanager.PackageTileMask,
                    param6: com.carto.packagemanager.PackageMetaInfo
                );
                public getTileMask(): com.carto.packagemanager.PackageTileMask;
                public getMetaInfo(): com.carto.packagemanager.PackageMetaInfo;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getName(): string;
                public static getCPtr(param0: com.carto.packagemanager.PackageInfo): number;
                public getPackageType(): com.carto.packagemanager.PackageType;
                public swigGetRawPtr(): number;
                public getNames(param0: string): com.carto.core.StringVector;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public getVersion(): number;
                public hashCode(): number;
                public getPackageId(): string;
                public getSize(): javamathBigInteger;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageInfoModuleJNI extends javalangObject {
                public static PackageInfoVector_add(param0: number, param1: com.carto.packagemanager.PackageInfoVector, param2: number, param3: com.carto.packagemanager.PackageInfo): void;
                public static PackageInfo_getNames(param0: number, param1: com.carto.packagemanager.PackageInfo, param2: string): number;
                public static PackageInfoVector_size(param0: number, param1: com.carto.packagemanager.PackageInfoVector): number;
                public static PackageInfo_getName(param0: number, param1: com.carto.packagemanager.PackageInfo): string;
                public static PackageInfo_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.PackageInfo): number;
                public static PackageInfoVector_get(param0: number, param1: com.carto.packagemanager.PackageInfoVector, param2: number): number;
                public static PackageInfoVector_isEmpty(param0: number, param1: com.carto.packagemanager.PackageInfoVector): boolean;
                public static PackageInfo_getTileMask(param0: number, param1: com.carto.packagemanager.PackageInfo): number;
                public static PACKAGE_TYPE_VALHALLA_ROUTING_get(): number;
                public static PackageInfo_getSize(param0: number, param1: com.carto.packagemanager.PackageInfo): javamathBigInteger;
                public constructor();
                public static PackageInfoVector_reserve(param0: number, param1: com.carto.packagemanager.PackageInfoVector, param2: number): void;
                public static PackageInfo_getMetaInfo(param0: number, param1: com.carto.packagemanager.PackageInfo): number;
                public static PackageInfoVector_clear(param0: number, param1: com.carto.packagemanager.PackageInfoVector): void;
                public static PackageInfo_getVersion(param0: number, param1: com.carto.packagemanager.PackageInfo): number;
                public static new_PackageInfoVector__SWIG_1(param0: number): number;
                public static PackageInfo_getPackageId(param0: number, param1: com.carto.packagemanager.PackageInfo): string;
                public static delete_PackageInfo(param0: number): void;
                public static new_PackageInfoVector__SWIG_0(): number;
                public static new_PackageInfo(
                    param0: string,
                    param1: number,
                    param2: number,
                    param3: javamathBigInteger,
                    param4: string,
                    param5: number,
                    param6: com.carto.packagemanager.PackageTileMask,
                    param7: number,
                    param8: com.carto.packagemanager.PackageMetaInfo
                ): number;
                public static PackageInfoVector_set(
                    param0: number,
                    param1: com.carto.packagemanager.PackageInfoVector,
                    param2: number,
                    param3: number,
                    param4: com.carto.packagemanager.PackageInfo
                ): void;
                public static PackageInfo_getPackageType(param0: number, param1: com.carto.packagemanager.PackageInfo): number;
                public static PackageInfoVector_capacity(param0: number, param1: com.carto.packagemanager.PackageInfoVector): number;
                public static PACKAGE_TYPE_MAP_get(): number;
                public static PACKAGE_TYPE_ROUTING_get(): number;
                public static PACKAGE_TYPE_GEOCODING_get(): number;
                public static PackageInfoVector_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.PackageInfoVector): number;
                public static delete_PackageInfoVector(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageInfoVector extends javalangObject {
                public swigCMemOwn: boolean;
                public add(param0: com.carto.packagemanager.PackageInfo): void;
                public set(param0: number, param1: com.carto.packagemanager.PackageInfo): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public get(param0: number): com.carto.packagemanager.PackageInfo;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.packagemanager.PackageInfoVector): number;
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
            export class PackageManager extends javalangObject {
                public swigCMemOwn: boolean;
                public startPackageImport(param0: string, param1: number, param2: string): boolean;
                public getLocalPackageStatus(param0: string, param1: number): com.carto.packagemanager.PackageStatus;
                public setPackageManagerListener(param0: com.carto.packagemanager.PackageManagerListener): void;
                public startPackageListDownload(): boolean;
                public finalize(): void;
                public suggestPackages(param0: com.carto.core.MapPos, param1: com.carto.projections.Projection): com.carto.packagemanager.PackageInfoVector;
                public startPackageRemove(param0: string): boolean;
                public delete(): void;
                public start(): boolean;
                public hashCode(): number;
                public getServerPackageListAge(): number;
                public startPackageDownload(param0: string): boolean;
                public swigGetDirectorObject(): javalangObject;
                public getLocalPackages(): com.carto.packagemanager.PackageInfoVector;
                public getLocalPackage(param0: string): com.carto.packagemanager.PackageInfo;
                public cancelPackageTasks(param0: string): void;
                public getServerPackages(): com.carto.packagemanager.PackageInfoVector;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.packagemanager.PackageManager;
                public constructor(param0: number, param1: boolean);
                public getServerPackage(param0: string): com.carto.packagemanager.PackageInfo;
                public swigGetClassName(): string;
                public setPackagePriority(param0: string, param1: number): void;
                public stop(param0: boolean): void;
                public swigGetRawPtr(): number;
                public isAreaDownloaded(param0: com.carto.core.MapBounds, param1: number, param2: com.carto.projections.Projection): boolean;
                public getServerPackageListMetaInfo(): com.carto.packagemanager.PackageMetaInfo;
                public static getCPtr(param0: com.carto.packagemanager.PackageManager): number;
                public equals(param0: javalangObject): boolean;
                public constructor(param0: string, param1: string, param2: string, param3: string);
                public getPackageManagerListener(): com.carto.packagemanager.PackageManagerListener;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageManagerListener extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public onPackageListFailed(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public onPackageFailed(param0: string, param1: number, param2: com.carto.packagemanager.PackageErrorType): void;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.packagemanager.PackageManagerListener): number;
                public onPackageListUpdated(): void;
                public onPackageUpdated(param0: string, param1: number): void;
                public onStyleFailed(param0: string): void;
                public constructor();
                public onPackageStatusChanged(param0: string, param1: number, param2: com.carto.packagemanager.PackageStatus): void;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.packagemanager.PackageManagerListener;
                public onPackageCancelled(param0: string, param1: number): void;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public onStyleUpdated(param0: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageManagerListenerModuleJNI extends javalangObject {
                public static new_PackageManagerListener(): number;
                public static PackageManagerListener_onPackageListUpdated(param0: number, param1: com.carto.packagemanager.PackageManagerListener): void;
                public static PackageManagerListener_onPackageFailed(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number, param4: number): void;
                public static PackageManagerListener_swigGetClassName(param0: number, param1: com.carto.packagemanager.PackageManagerListener): string;
                public constructor();
                public static PackageManagerListener_onPackageListUpdatedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener): void;
                public static SwigDirector_PackageManagerListener_onStyleFailed(param0: com.carto.packagemanager.PackageManagerListener, param1: string): void;
                public static SwigDirector_PackageManagerListener_onPackageFailed(param0: com.carto.packagemanager.PackageManagerListener, param1: string, param2: number, param3: number): void;
                public static PackageManagerListener_onPackageListFailedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener): void;
                public static SwigDirector_PackageManagerListener_onPackageUpdated(param0: com.carto.packagemanager.PackageManagerListener, param1: string, param2: number): void;
                public static SwigDirector_PackageManagerListener_onPackageListUpdated(param0: com.carto.packagemanager.PackageManagerListener): void;
                public static PackageManagerListener_onPackageFailedSwigExplicitPackageManagerListener(
                    param0: number,
                    param1: com.carto.packagemanager.PackageManagerListener,
                    param2: string,
                    param3: number,
                    param4: number
                ): void;
                public static PackageManagerListener_change_ownership(param0: com.carto.packagemanager.PackageManagerListener, param1: number, param2: boolean): void;
                public static PackageManagerListener_onStyleFailed(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string): void;
                public static delete_PackageManagerListener(param0: number): void;
                public static PackageManagerListener_onPackageCancelledSwigExplicitPackageManagerListener(
                    param0: number,
                    param1: com.carto.packagemanager.PackageManagerListener,
                    param2: string,
                    param3: number
                ): void;
                public static SwigDirector_PackageManagerListener_onPackageListFailed(param0: com.carto.packagemanager.PackageManagerListener): void;
                public static PackageManagerListener_onPackageCancelled(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number): void;
                public static SwigDirector_PackageManagerListener_onPackageStatusChanged(param0: com.carto.packagemanager.PackageManagerListener, param1: string, param2: number, param3: number): void;
                public static PackageManagerListener_director_connect(param0: com.carto.packagemanager.PackageManagerListener, param1: number, param2: boolean, param3: boolean): void;
                public static PackageManagerListener_onStyleFailedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string): void;
                public static PackageManagerListener_onPackageStatusChanged(
                    param0: number,
                    param1: com.carto.packagemanager.PackageManagerListener,
                    param2: string,
                    param3: number,
                    param4: number,
                    param5: com.carto.packagemanager.PackageStatus
                ): void;
                public static PackageManagerListener_onPackageUpdatedSwigExplicitPackageManagerListener(
                    param0: number,
                    param1: com.carto.packagemanager.PackageManagerListener,
                    param2: string,
                    param3: number
                ): void;
                public static PackageManagerListener_onPackageListFailed(param0: number, param1: com.carto.packagemanager.PackageManagerListener): void;
                public static PackageManagerListener_onPackageStatusChangedSwigExplicitPackageManagerListener(
                    param0: number,
                    param1: com.carto.packagemanager.PackageManagerListener,
                    param2: string,
                    param3: number,
                    param4: number,
                    param5: com.carto.packagemanager.PackageStatus
                ): void;
                public static SwigDirector_PackageManagerListener_onStyleUpdated(param0: com.carto.packagemanager.PackageManagerListener, param1: string): void;
                public static PackageManagerListener_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.PackageManagerListener): number;
                public static PackageManagerListener_swigGetDirectorObject(param0: number, param1: com.carto.packagemanager.PackageManagerListener): javalangObject;
                public static PackageManagerListener_onPackageUpdated(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number): void;
                public static SwigDirector_PackageManagerListener_onPackageCancelled(param0: com.carto.packagemanager.PackageManagerListener, param1: string, param2: number): void;
                public static PackageManagerListener_onStyleUpdatedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string): void;
                public static PackageManagerListener_onStyleUpdated(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageManagerModuleJNI extends javalangObject {
                public static PackageManager_getServerPackage(param0: number, param1: com.carto.packagemanager.PackageManager, param2: string): number;
                public static PackageManager_setPackageManagerListener(
                    param0: number,
                    param1: com.carto.packagemanager.PackageManager,
                    param2: number,
                    param3: com.carto.packagemanager.PackageManagerListener
                ): void;
                public static new_PackageManager(param0: string, param1: string, param2: string, param3: string): number;
                public static PackageManager_getServerPackageListMetaInfo(param0: number, param1: com.carto.packagemanager.PackageManager): number;
                public static PackageManager_getLocalPackage(param0: number, param1: com.carto.packagemanager.PackageManager, param2: string): number;
                public constructor();
                public static PackageManager_startPackageListDownload(param0: number, param1: com.carto.packagemanager.PackageManager): boolean;
                public static PackageManager_startPackageImport(param0: number, param1: com.carto.packagemanager.PackageManager, param2: string, param3: number, param4: string): boolean;
                public static PackageManager_stop(param0: number, param1: com.carto.packagemanager.PackageManager, param2: boolean): void;
                public static PackageManager_getServerPackages(param0: number, param1: com.carto.packagemanager.PackageManager): number;
                public static PackageManager_startPackageRemove(param0: number, param1: com.carto.packagemanager.PackageManager, param2: string): boolean;
                public static PackageManager_startPackageDownload(param0: number, param1: com.carto.packagemanager.PackageManager, param2: string): boolean;
                public static PackageManager_isAreaDownloaded(
                    param0: number,
                    param1: com.carto.packagemanager.PackageManager,
                    param2: number,
                    param3: com.carto.core.MapBounds,
                    param4: number,
                    param5: number,
                    param6: com.carto.projections.Projection
                ): boolean;
                public static delete_PackageManager(param0: number): void;
                public static PackageManager_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.PackageManager): number;
                public static PackageManager_suggestPackages(
                    param0: number,
                    param1: com.carto.packagemanager.PackageManager,
                    param2: number,
                    param3: com.carto.core.MapPos,
                    param4: number,
                    param5: com.carto.projections.Projection
                ): number;
                public static PackageManager_setPackagePriority(param0: number, param1: com.carto.packagemanager.PackageManager, param2: string, param3: number): void;
                public static PackageManager_swigGetDirectorObject(param0: number, param1: com.carto.packagemanager.PackageManager): javalangObject;
                public static PackageManager_getLocalPackages(param0: number, param1: com.carto.packagemanager.PackageManager): number;
                public static PackageManager_getLocalPackageStatus(param0: number, param1: com.carto.packagemanager.PackageManager, param2: string, param3: number): number;
                public static PackageManager_getPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManager): number;
                public static PackageManager_swigGetClassName(param0: number, param1: com.carto.packagemanager.PackageManager): string;
                public static PackageManager_cancelPackageTasks(param0: number, param1: com.carto.packagemanager.PackageManager, param2: string): void;
                public static PackageManager_start(param0: number, param1: com.carto.packagemanager.PackageManager): boolean;
                public static PackageManager_getServerPackageListAge(param0: number, param1: com.carto.packagemanager.PackageManager): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageMetaInfo extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.packagemanager.PackageMetaInfo): number;
                public getVariant(): com.carto.core.Variant;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: com.carto.core.Variant);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageMetaInfoModuleJNI extends javalangObject {
                public static delete_PackageMetaInfo(param0: number): void;
                public static new_PackageMetaInfo(param0: number, param1: com.carto.core.Variant): number;
                public static PackageMetaInfo_getVariant(param0: number, param1: com.carto.packagemanager.PackageMetaInfo): number;
                public static PackageMetaInfo_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.PackageMetaInfo): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageStatus extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public constructor(param0: com.carto.packagemanager.PackageAction, param1: boolean, param2: number);
                public getCurrentAction(): com.carto.packagemanager.PackageAction;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public getProgress(): number;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.packagemanager.PackageStatus): number;
                public isPaused(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageStatusModuleJNI extends javalangObject {
                public static PACKAGE_ACTION_WAITING_get(): number;
                public static PACKAGE_ACTION_REMOVING_get(): number;
                public static delete_PackageStatus(param0: number): void;
                public static PACKAGE_ACTION_COPYING_get(): number;
                public static PACKAGE_ACTION_DOWNLOADING_get(): number;
                public static new_PackageStatus(param0: number, param1: boolean, param2: number): number;
                public static PackageStatus_isPaused(param0: number, param1: com.carto.packagemanager.PackageStatus): boolean;
                public static PackageStatus_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.PackageStatus): number;
                public static PACKAGE_ACTION_READY_get(): number;
                public static PackageStatus_getCurrentAction(param0: number, param1: com.carto.packagemanager.PackageStatus): number;
                public static PackageStatus_getProgress(param0: number, param1: com.carto.packagemanager.PackageStatus): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageTileMask extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.packagemanager.PackageTileMask): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public getMaxZoomLevel(): number;
                public getBoundingPolygon(param0: com.carto.projections.Projection): com.carto.geometry.MultiPolygonGeometry;
                public hashCode(): number;
                public getTileStatus(param0: com.carto.core.MapTile): com.carto.packagemanager.PackageTileStatus;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getStringValue(): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageTileMaskModuleJNI extends javalangObject {
                public static PackageTileMask_getStringValue(param0: number, param1: com.carto.packagemanager.PackageTileMask): string;
                public static PackageTileMask_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.PackageTileMask): number;
                public static PackageTileMask_getTileStatus(param0: number, param1: com.carto.packagemanager.PackageTileMask, param2: number, param3: com.carto.core.MapTile): number;
                public static delete_PackageTileMask(param0: number): void;
                public static PackageTileMask_getMaxZoomLevel(param0: number, param1: com.carto.packagemanager.PackageTileMask): number;
                public static PackageTileMask_getBoundingPolygon(param0: number, param1: com.carto.packagemanager.PackageTileMask, param2: number, param3: com.carto.projections.Projection): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageTileStatus extends javalangEnum<any> {
                public static PACKAGE_TILE_STATUS_MISSING: com.carto.packagemanager.PackageTileStatus;
                public static PACKAGE_TILE_STATUS_PARTIAL: com.carto.packagemanager.PackageTileStatus;
                public static PACKAGE_TILE_STATUS_FULL: com.carto.packagemanager.PackageTileStatus;
                public static valueOf(param0: string): com.carto.packagemanager.PackageTileStatus;
                public swigValue(): number;
                public static values(): native.Array<com.carto.packagemanager.PackageTileStatus>;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
                public static swigToEnum(param0: number): com.carto.packagemanager.PackageTileStatus;
            }
            export namespace PackageTileStatus {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace packagemanager {
            export class PackageType extends javalangEnum<any> {
                public static PACKAGE_TYPE_MAP: com.carto.packagemanager.PackageType;
                public static PACKAGE_TYPE_ROUTING: com.carto.packagemanager.PackageType;
                public static PACKAGE_TYPE_GEOCODING: com.carto.packagemanager.PackageType;
                public static PACKAGE_TYPE_VALHALLA_ROUTING: com.carto.packagemanager.PackageType;
                public static valueOf(param0: string): com.carto.packagemanager.PackageType;
                public swigValue(): number;
                public static values(): native.Array<com.carto.packagemanager.PackageType>;
                public static swigToEnum(param0: number): com.carto.packagemanager.PackageType;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace PackageType {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace projections {
            export class EPSG3857 extends com.carto.projections.Projection {
                public toWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.projections.Projection;
                public getName(): string;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.projections.Projection): number;
                public constructor();
                public fromInternalScale(param0: number): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.projections.EPSG3857;
                public static getCPtr(param0: com.carto.projections.EPSG3857): number;
                public fromWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace projections {
            export class EPSG3857ModuleJNI extends javalangObject {
                public static EPSG3857_getName(param0: number, param1: com.carto.projections.EPSG3857): string;
                public static EPSG3857_swigGetClassName(param0: number, param1: com.carto.projections.EPSG3857): string;
                public static new_EPSG3857(): number;
                public static EPSG3857_fromWgs84(param0: number, param1: com.carto.projections.EPSG3857, param2: number, param3: com.carto.core.MapPos): number;
                public static delete_EPSG3857(param0: number): void;
                public static EPSG3857_swigGetRawPtr(param0: number, param1: com.carto.projections.EPSG3857): number;
                public static EPSG3857_swigGetDirectorObject(param0: number, param1: com.carto.projections.EPSG3857): javalangObject;
                public static EPSG3857_fromInternalScale(param0: number, param1: com.carto.projections.EPSG3857, param2: number): number;
                public static EPSG3857_toWgs84(param0: number, param1: com.carto.projections.EPSG3857, param2: number, param3: com.carto.core.MapPos): number;
                public static EPSG3857_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace projections {
            export class Projection extends javalangObject {
                public swigCMemOwn: boolean;
                public fromLatLong(param0: number, param1: number): com.carto.core.MapPos;
                public toWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.projections.Projection;
                public getBounds(): com.carto.core.MapBounds;
                public getLocalScale(param0: com.carto.core.MapPos): number;
                public getName(): string;
                public toLatLong(param0: number, param1: number): com.carto.core.MapPos;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.projections.Projection): number;
                public fromInternalScale(param0: number): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public fromWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace projections {
            export class ProjectionModuleJNI extends javalangObject {
                public static Projection_toWgs84(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPos): number;
                public static Projection_fromLatLong(param0: number, param1: com.carto.projections.Projection, param2: number, param3: number): number;
                public static Projection_fromInternalScale(param0: number, param1: com.carto.projections.Projection, param2: number): number;
                public static Projection_swigGetRawPtr(param0: number, param1: com.carto.projections.Projection): number;
                public static Projection_getLocalScale(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPos): number;
                public constructor();
                public static Projection_getBounds(param0: number, param1: com.carto.projections.Projection): number;
                public static Projection_swigGetDirectorObject(param0: number, param1: com.carto.projections.Projection): javalangObject;
                public static Projection_fromWgs84(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPos): number;
                public static Projection_getName(param0: number, param1: com.carto.projections.Projection): string;
                public static delete_Projection(param0: number): void;
                public static Projection_toLatLong(param0: number, param1: com.carto.projections.Projection, param2: number, param3: number): number;
                public static Projection_swigGetClassName(param0: number, param1: com.carto.projections.Projection): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class MapRenderer extends javalangObject {
                public swigCMemOwn: boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.renderers.MapRenderer): number;
                public getMapRendererListener(): com.carto.renderers.MapRendererListener;
                public requestRedraw(): void;
                public screenToMap(param0: com.carto.core.ScreenPos, param1: com.carto.graphics.ViewState): com.carto.core.MapPos;
                public swigGetRawPtr(): number;
                public getViewState(): com.carto.graphics.ViewState;
                public captureRendering(param0: com.carto.renderers.RendererCaptureListener, param1: boolean): void;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public setMapRendererListener(param0: com.carto.renderers.MapRendererListener): void;
                public mapToScreen(param0: com.carto.core.MapPos, param1: com.carto.graphics.ViewState): com.carto.core.ScreenPos;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class MapRendererListener extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static getCPtr(param0: com.carto.renderers.MapRendererListener): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public onBeforeDrawFrame(): void;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.renderers.MapRendererListener;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public onAfterDrawFrame(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class MapRendererListenerModuleJNI extends javalangObject {
                public static MapRendererListener_onBeforeDrawFrameSwigExplicitMapRendererListener(param0: number, param1: com.carto.renderers.MapRendererListener): void;
                public static MapRendererListener_director_connect(param0: com.carto.renderers.MapRendererListener, param1: number, param2: boolean, param3: boolean): void;
                public static MapRendererListener_onBeforeDrawFrame(param0: number, param1: com.carto.renderers.MapRendererListener): void;
                public static MapRendererListener_change_ownership(param0: com.carto.renderers.MapRendererListener, param1: number, param2: boolean): void;
                public static delete_MapRendererListener(param0: number): void;
                public static new_MapRendererListener(): number;
                public static MapRendererListener_onAfterDrawFrame(param0: number, param1: com.carto.renderers.MapRendererListener): void;
                public static MapRendererListener_swigGetRawPtr(param0: number, param1: com.carto.renderers.MapRendererListener): number;
                public constructor();
                public static SwigDirector_MapRendererListener_onBeforeDrawFrame(param0: com.carto.renderers.MapRendererListener): void;
                public static SwigDirector_MapRendererListener_onAfterDrawFrame(param0: com.carto.renderers.MapRendererListener): void;
                public static MapRendererListener_swigGetDirectorObject(param0: number, param1: com.carto.renderers.MapRendererListener): javalangObject;
                public static MapRendererListener_onAfterDrawFrameSwigExplicitMapRendererListener(param0: number, param1: com.carto.renderers.MapRendererListener): void;
                public static MapRendererListener_swigGetClassName(param0: number, param1: com.carto.renderers.MapRendererListener): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class MapRendererModuleJNI extends javalangObject {
                public static MapRenderer_setMapRendererListener(param0: number, param1: com.carto.renderers.MapRenderer, param2: number, param3: com.carto.renderers.MapRendererListener): void;
                public static MapRenderer_screenToMap(
                    param0: number,
                    param1: com.carto.renderers.MapRenderer,
                    param2: number,
                    param3: com.carto.core.ScreenPos,
                    param4: number,
                    param5: com.carto.graphics.ViewState
                ): number;
                public static delete_MapRenderer(param0: number): void;
                public static MapRenderer_getMapRendererListener(param0: number, param1: com.carto.renderers.MapRenderer): number;
                public static MapRenderer_requestRedraw(param0: number, param1: com.carto.renderers.MapRenderer): void;
                public static MapRenderer_getViewState(param0: number, param1: com.carto.renderers.MapRenderer): number;
                public static MapRenderer_mapToScreen(
                    param0: number,
                    param1: com.carto.renderers.MapRenderer,
                    param2: number,
                    param3: com.carto.core.MapPos,
                    param4: number,
                    param5: com.carto.graphics.ViewState
                ): number;
                public static MapRenderer_captureRendering(
                    param0: number,
                    param1: com.carto.renderers.MapRenderer,
                    param2: number,
                    param3: com.carto.renderers.RendererCaptureListener,
                    param4: boolean
                ): void;
                public static MapRenderer_swigGetRawPtr(param0: number, param1: com.carto.renderers.MapRenderer): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class RedrawRequestListener extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public onRedrawRequested(): void;
                public static getCPtr(param0: com.carto.renderers.RedrawRequestListener): number;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.renderers.RedrawRequestListener;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class RedrawRequestListenerModuleJNI extends javalangObject {
                public static SwigDirector_RedrawRequestListener_onRedrawRequested(param0: com.carto.renderers.RedrawRequestListener): void;
                public static RedrawRequestListener_onRedrawRequestedSwigExplicitRedrawRequestListener(param0: number, param1: com.carto.renderers.RedrawRequestListener): void;
                public static RedrawRequestListener_swigGetClassName(param0: number, param1: com.carto.renderers.RedrawRequestListener): string;
                public static RedrawRequestListener_swigGetRawPtr(param0: number, param1: com.carto.renderers.RedrawRequestListener): number;
                public static RedrawRequestListener_director_connect(param0: com.carto.renderers.RedrawRequestListener, param1: number, param2: boolean, param3: boolean): void;
                public static RedrawRequestListener_change_ownership(param0: com.carto.renderers.RedrawRequestListener, param1: number, param2: boolean): void;
                public static RedrawRequestListener_swigGetDirectorObject(param0: number, param1: com.carto.renderers.RedrawRequestListener): javalangObject;
                public static delete_RedrawRequestListener(param0: number): void;
                public static RedrawRequestListener_onRedrawRequested(param0: number, param1: com.carto.renderers.RedrawRequestListener): void;
                public static new_RedrawRequestListener(): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class RendererCaptureListener extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.renderers.RendererCaptureListener;
                public finalize(): void;
                public onMapRendered(param0: com.carto.graphics.Bitmap): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.renderers.RendererCaptureListener): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export class RendererCaptureListenerModuleJNI extends javalangObject {
                public static delete_RendererCaptureListener(param0: number): void;
                public static RendererCaptureListener_change_ownership(param0: com.carto.renderers.RendererCaptureListener, param1: number, param2: boolean): void;
                public static RendererCaptureListener_onMapRendered(param0: number, param1: com.carto.renderers.RendererCaptureListener, param2: number, param3: com.carto.graphics.Bitmap): void;
                public static new_RendererCaptureListener(): number;
                public static RendererCaptureListener_swigGetClassName(param0: number, param1: com.carto.renderers.RendererCaptureListener): string;
                public static RendererCaptureListener_swigGetRawPtr(param0: number, param1: com.carto.renderers.RendererCaptureListener): number;
                public static RendererCaptureListener_onMapRenderedSwigExplicitRendererCaptureListener(
                    param0: number,
                    param1: com.carto.renderers.RendererCaptureListener,
                    param2: number,
                    param3: com.carto.graphics.Bitmap
                ): void;
                public static RendererCaptureListener_director_connect(param0: com.carto.renderers.RendererCaptureListener, param1: number, param2: boolean, param3: boolean): void;
                public static RendererCaptureListener_swigGetDirectorObject(param0: number, param1: com.carto.renderers.RendererCaptureListener): javalangObject;
                public static SwigDirector_RendererCaptureListener_onMapRendered(param0: com.carto.renderers.RendererCaptureListener, param1: number): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export namespace components {
                export class CullState extends javalangObject {
                    public swigCMemOwn: boolean;
                    public getProjectionEnvelope(param0: com.carto.projections.Projection): com.carto.core.MapEnvelope;
                    public delete(): void;
                    public equals(param0: javalangObject): boolean;
                    public finalize(): void;
                    public constructor(param0: com.carto.core.MapEnvelope, param1: com.carto.graphics.ViewState);
                    public hashCode(): number;
                    public static getCPtr(param0: com.carto.renderers.components.CullState): number;
                    public swigGetRawPtr(): number;
                    public constructor(param0: number, param1: boolean);
                    public getViewState(): com.carto.graphics.ViewState;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace renderers {
            export namespace components {
                export class CullStateModuleJNI extends javalangObject {
                    public static new_CullState(param0: number, param1: com.carto.core.MapEnvelope, param2: number, param3: com.carto.graphics.ViewState): number;
                    public constructor();
                    public static delete_CullState(param0: number): void;
                    public static CullState_swigGetRawPtr(param0: number, param1: com.carto.renderers.components.CullState): number;
                    public static CullState_getViewState(param0: number, param1: com.carto.renderers.components.CullState): number;
                    public static CullState_getProjectionEnvelope(param0: number, param1: com.carto.renderers.components.CullState, param2: number, param3: com.carto.projections.Projection): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class CartoOnlineRoutingService extends com.carto.routing.RoutingService {
                public static getCPtr(param0: com.carto.routing.RoutingService): number;
                public swigReleaseOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.CartoOnlineRoutingService;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor(param0: string);
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: com.carto.routing.CartoOnlineRoutingService): number;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class CartoOnlineRoutingServiceModuleJNI extends javalangObject {
                public static new_CartoOnlineRoutingService(param0: string): number;
                public static CartoOnlineRoutingService_director_connect(param0: com.carto.routing.CartoOnlineRoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static CartoOnlineRoutingService_calculateRoute(
                    param0: number,
                    param1: com.carto.routing.CartoOnlineRoutingService,
                    param2: number,
                    param3: com.carto.routing.RoutingRequest
                ): number;
                public static CartoOnlineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
                public static CartoOnlineRoutingService_calculateRouteSwigExplicitCartoOnlineRoutingService(
                    param0: number,
                    param1: com.carto.routing.CartoOnlineRoutingService,
                    param2: number,
                    param3: com.carto.routing.RoutingRequest
                ): number;
                public static SwigDirector_CartoOnlineRoutingService_calculateRoute(param0: com.carto.routing.CartoOnlineRoutingService, param1: number): number;
                public static CartoOnlineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.CartoOnlineRoutingService): javalangObject;
                public static delete_CartoOnlineRoutingService(param0: number): void;
                public static CartoOnlineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.CartoOnlineRoutingService): string;
                public static CartoOnlineRoutingService_change_ownership(param0: com.carto.routing.CartoOnlineRoutingService, param1: number, param2: boolean): void;
                public static CartoOnlineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.CartoOnlineRoutingService): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class OSRMOfflineRoutingService extends com.carto.routing.RoutingService {
                public static getCPtr(param0: com.carto.routing.RoutingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
                public static getCPtr(param0: com.carto.routing.OSRMOfflineRoutingService): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.OSRMOfflineRoutingService;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor(param0: string);
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class OSRMOfflineRoutingServiceModuleJNI extends javalangObject {
                public static OSRMOfflineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
                public static OSRMOfflineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): string;
                public static OSRMOfflineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): javalangObject;
                public static new_OSRMOfflineRoutingService(param0: string): number;
                public static OSRMOfflineRoutingService_director_connect(param0: com.carto.routing.OSRMOfflineRoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static delete_OSRMOfflineRoutingService(param0: number): void;
                public static OSRMOfflineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): number;
                public static OSRMOfflineRoutingService_calculateRoute(
                    param0: number,
                    param1: com.carto.routing.OSRMOfflineRoutingService,
                    param2: number,
                    param3: com.carto.routing.RoutingRequest
                ): number;
                public static OSRMOfflineRoutingService_calculateRouteSwigExplicitOSRMOfflineRoutingService(
                    param0: number,
                    param1: com.carto.routing.OSRMOfflineRoutingService,
                    param2: number,
                    param3: com.carto.routing.RoutingRequest
                ): number;
                public static OSRMOfflineRoutingService_change_ownership(param0: com.carto.routing.OSRMOfflineRoutingService, param1: number, param2: boolean): void;
                public static SwigDirector_OSRMOfflineRoutingService_calculateRoute(param0: com.carto.routing.OSRMOfflineRoutingService, param1: number): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class PackageManagerRoutingService extends com.carto.routing.RoutingService {
                public static getCPtr(param0: com.carto.routing.RoutingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor();
                public static getCPtr(param0: com.carto.routing.PackageManagerRoutingService): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public constructor(param0: com.carto.packagemanager.PackageManager);
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.PackageManagerRoutingService;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class PackageManagerRoutingServiceModuleJNI extends javalangObject {
                public static PackageManagerRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.PackageManagerRoutingService): string;
                public static PackageManagerRoutingService_director_connect(param0: com.carto.routing.PackageManagerRoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static PackageManagerRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.PackageManagerRoutingService): number;
                public static PackageManagerRoutingService_SWIGSmartPtrUpcast(param0: number): number;
                public static delete_PackageManagerRoutingService(param0: number): void;
                public static PackageManagerRoutingService_change_ownership(param0: com.carto.routing.PackageManagerRoutingService, param1: number, param2: boolean): void;
                public static PackageManagerRoutingService_calculateRoute(
                    param0: number,
                    param1: com.carto.routing.PackageManagerRoutingService,
                    param2: number,
                    param3: com.carto.routing.RoutingRequest
                ): number;
                public static PackageManagerRoutingService_calculateRouteSwigExplicitPackageManagerRoutingService(
                    param0: number,
                    param1: com.carto.routing.PackageManagerRoutingService,
                    param2: number,
                    param3: com.carto.routing.RoutingRequest
                ): number;
                public static PackageManagerRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.PackageManagerRoutingService): javalangObject;
                public static SwigDirector_PackageManagerRoutingService_calculateRoute(param0: com.carto.routing.PackageManagerRoutingService, param1: number): number;
                public static new_PackageManagerRoutingService(param0: number, param1: com.carto.packagemanager.PackageManager): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class PackageManagerValhallaRoutingService extends com.carto.routing.RoutingService {
                public static getCPtr(param0: com.carto.routing.RoutingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.PackageManagerValhallaRoutingService;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor();
                public setProfile(param0: string): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public getProfile(): string;
                public swigTakeOwnership(): void;
                public constructor(param0: com.carto.packagemanager.PackageManager);
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.routing.PackageManagerValhallaRoutingService): number;
                public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class PackageManagerValhallaRoutingServiceModuleJNI extends javalangObject {
                public static PackageManagerValhallaRoutingService_calculateRoute(
                    param0: number,
                    param1: com.carto.routing.PackageManagerValhallaRoutingService,
                    param2: number,
                    param3: com.carto.routing.RoutingRequest
                ): number;
                public static PackageManagerValhallaRoutingService_calculateRouteSwigExplicitPackageManagerValhallaRoutingService(
                    param0: number,
                    param1: com.carto.routing.PackageManagerValhallaRoutingService,
                    param2: number,
                    param3: com.carto.routing.RoutingRequest
                ): number;
                public static PackageManagerValhallaRoutingService_director_connect(
                    param0: com.carto.routing.PackageManagerValhallaRoutingService,
                    param1: number,
                    param2: boolean,
                    param3: boolean
                ): void;
                public static PackageManagerValhallaRoutingService_getProfile(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): string;
                public static PackageManagerValhallaRoutingService_matchRoute(
                    param0: number,
                    param1: com.carto.routing.PackageManagerValhallaRoutingService,
                    param2: number,
                    param3: com.carto.routing.RouteMatchingRequest
                ): number;
                public static delete_PackageManagerValhallaRoutingService(param0: number): void;
                public static PackageManagerValhallaRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): javalangObject;
                public constructor();
                public static PackageManagerValhallaRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): string;
                public static PackageManagerValhallaRoutingService_SWIGSmartPtrUpcast(param0: number): number;
                public static SwigDirector_PackageManagerValhallaRoutingService_calculateRoute(param0: com.carto.routing.PackageManagerValhallaRoutingService, param1: number): number;
                public static PackageManagerValhallaRoutingService_setProfile(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: string): void;
                public static PackageManagerValhallaRoutingService_change_ownership(param0: com.carto.routing.PackageManagerValhallaRoutingService, param1: number, param2: boolean): void;
                public static new_PackageManagerValhallaRoutingService(param0: number, param1: com.carto.packagemanager.PackageManager): number;
                public static PackageManagerValhallaRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingRequest extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public getPoints(): com.carto.core.MapPosVector;
                public getProjection(): com.carto.projections.Projection;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPosVector, param2: number);
                public static getCPtr(param0: com.carto.routing.RouteMatchingRequest): number;
                public getAccuracy(): number;
                public toString(): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingRequestModuleJNI extends javalangObject {
                public static new_RouteMatchingRequest(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPosVector, param4: number): number;
                public static RouteMatchingRequest_swigGetRawPtr(param0: number, param1: com.carto.routing.RouteMatchingRequest): number;
                public static RouteMatchingRequest_toString(param0: number, param1: com.carto.routing.RouteMatchingRequest): string;
                public static delete_RouteMatchingRequest(param0: number): void;
                public static RouteMatchingRequest_getProjection(param0: number, param1: com.carto.routing.RouteMatchingRequest): number;
                public static RouteMatchingRequest_getAccuracy(param0: number, param1: com.carto.routing.RouteMatchingRequest): number;
                public constructor();
                public static RouteMatchingRequest_getPoints(param0: number, param1: com.carto.routing.RouteMatchingRequest): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingResult extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public getPoints(): com.carto.core.MapPosVector;
                public getProjection(): com.carto.projections.Projection;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.routing.RouteMatchingResult): number;
                public toString(): string;
                public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPosVector);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RouteMatchingResultModuleJNI extends javalangObject {
                public static RouteMatchingResult_getPoints(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
                public static RouteMatchingResult_getProjection(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
                public static delete_RouteMatchingResult(param0: number): void;
                public static new_RouteMatchingResult(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPosVector): number;
                public static RouteMatchingResult_swigGetRawPtr(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
                public static RouteMatchingResult_toString(param0: number, param1: com.carto.routing.RouteMatchingResult): string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingAction extends javalangEnum<any> {
                public static ROUTING_ACTION_HEAD_ON: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_FINISH: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_NO_TURN: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_GO_STRAIGHT: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_TURN_RIGHT: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_UTURN: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_TURN_LEFT: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_REACH_VIA_LOCATION: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_ENTER_ROUNDABOUT: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_LEAVE_ROUNDABOUT: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_STAY_ON_ROUNDABOUT: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_START_AT_END_OF_STREET: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_ENTER_AGAINST_ALLOWED_DIRECTION: com.carto.routing.RoutingAction;
                public static ROUTING_ACTION_LEAVE_AGAINST_ALLOWED_DIRECTION: com.carto.routing.RoutingAction;
                public swigValue(): number;
                public static values(): native.Array<com.carto.routing.RoutingAction>;
                public static swigToEnum(param0: number): com.carto.routing.RoutingAction;
                public static valueOf(param0: string): com.carto.routing.RoutingAction;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace RoutingAction {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingInstruction extends javalangObject {
                public swigCMemOwn: boolean;
                public constructor(param0: com.carto.routing.RoutingAction, param1: number, param2: string, param3: number, param4: number, param5: number, param6: number);
                public getPointIndex(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public getTime(): number;
                public constructor();
                public getTurnAngle(): number;
                public swigGetRawPtr(): number;
                public getStreetName(): string;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getDistance(): number;
                public static getCPtr(param0: com.carto.routing.RoutingInstruction): number;
                public getAzimuth(): number;
                public getAction(): com.carto.routing.RoutingAction;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingInstructionModuleJNI extends javalangObject {
                public static RoutingInstructionVector_swigGetRawPtr(param0: number, param1: com.carto.routing.RoutingInstructionVector): number;
                public static RoutingInstructionVector_size(param0: number, param1: com.carto.routing.RoutingInstructionVector): number;
                public static RoutingInstruction_getTurnAngle(param0: number, param1: com.carto.routing.RoutingInstruction): number;
                public static RoutingInstruction_getAzimuth(param0: number, param1: com.carto.routing.RoutingInstruction): number;
                public static RoutingInstructionVector_set(
                    param0: number,
                    param1: com.carto.routing.RoutingInstructionVector,
                    param2: number,
                    param3: number,
                    param4: com.carto.routing.RoutingInstruction
                ): void;
                public static new_RoutingInstruction__SWIG_1(param0: number, param1: number, param2: string, param3: number, param4: number, param5: number, param6: number): number;
                public static RoutingInstruction_getPointIndex(param0: number, param1: com.carto.routing.RoutingInstruction): number;
                public static RoutingInstruction_getAction(param0: number, param1: com.carto.routing.RoutingInstruction): number;
                public static RoutingInstruction_getTime(param0: number, param1: com.carto.routing.RoutingInstruction): number;
                public constructor();
                public static RoutingInstructionVector_reserve(param0: number, param1: com.carto.routing.RoutingInstructionVector, param2: number): void;
                public static new_RoutingInstructionVector__SWIG_0(): number;
                public static RoutingInstructionVector_capacity(param0: number, param1: com.carto.routing.RoutingInstructionVector): number;
                public static RoutingInstruction_swigGetRawPtr(param0: number, param1: com.carto.routing.RoutingInstruction): number;
                public static RoutingInstructionVector_add(param0: number, param1: com.carto.routing.RoutingInstructionVector, param2: number, param3: com.carto.routing.RoutingInstruction): void;
                public static delete_RoutingInstructionVector(param0: number): void;
                public static new_RoutingInstruction__SWIG_0(): number;
                public static RoutingInstruction_getDistance(param0: number, param1: com.carto.routing.RoutingInstruction): number;
                public static RoutingInstructionVector_get(param0: number, param1: com.carto.routing.RoutingInstructionVector, param2: number): number;
                public static RoutingInstructionVector_isEmpty(param0: number, param1: com.carto.routing.RoutingInstructionVector): boolean;
                public static RoutingInstruction_toString(param0: number, param1: com.carto.routing.RoutingInstruction): string;
                public static delete_RoutingInstruction(param0: number): void;
                public static new_RoutingInstructionVector__SWIG_1(param0: number): number;
                public static RoutingInstruction_getStreetName(param0: number, param1: com.carto.routing.RoutingInstruction): string;
                public static RoutingInstructionVector_clear(param0: number, param1: com.carto.routing.RoutingInstructionVector): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingInstructionVector extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.routing.RoutingInstructionVector): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public set(param0: number, param1: com.carto.routing.RoutingInstruction): void;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public add(param0: com.carto.routing.RoutingInstruction): void;
                public clear(): void;
                public constructor(param0: number);
                public isEmpty(): boolean;
                public get(param0: number): com.carto.routing.RoutingInstruction;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingRequest extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public getPoints(): com.carto.core.MapPosVector;
                public getProjection(): com.carto.projections.Projection;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.routing.RoutingRequest): number;
                public toString(): string;
                public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPosVector);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingRequestModuleJNI extends javalangObject {
                public static RoutingRequest_getPoints(param0: number, param1: com.carto.routing.RoutingRequest): number;
                public static RoutingRequest_getProjection(param0: number, param1: com.carto.routing.RoutingRequest): number;
                public static RoutingRequest_toString(param0: number, param1: com.carto.routing.RoutingRequest): string;
                public static new_RoutingRequest(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPosVector): number;
                public static RoutingRequest_swigGetRawPtr(param0: number, param1: com.carto.routing.RoutingRequest): number;
                public static delete_RoutingRequest(param0: number): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingResult extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.routing.RoutingResult): number;
                public getProjection(): com.carto.projections.Projection;
                public getInstructions(): com.carto.routing.RoutingInstructionVector;
                public getTotalTime(): number;
                public finalize(): void;
                public getTotalDistance(): number;
                public constructor(param0: number, param1: boolean);
                public toString(): string;
                public swigGetRawPtr(): number;
                public getPoints(): com.carto.core.MapPosVector;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPosVector, param2: com.carto.routing.RoutingInstructionVector);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingResultModuleJNI extends javalangObject {
                public static RoutingResult_toString(param0: number, param1: com.carto.routing.RoutingResult): string;
                public static RoutingResult_getPoints(param0: number, param1: com.carto.routing.RoutingResult): number;
                public static RoutingResult_swigGetRawPtr(param0: number, param1: com.carto.routing.RoutingResult): number;
                public static delete_RoutingResult(param0: number): void;
                public static RoutingResult_getProjection(param0: number, param1: com.carto.routing.RoutingResult): number;
                public static RoutingResult_getTotalTime(param0: number, param1: com.carto.routing.RoutingResult): number;
                public static new_RoutingResult(
                    param0: number,
                    param1: com.carto.projections.Projection,
                    param2: number,
                    param3: com.carto.core.MapPosVector,
                    param4: number,
                    param5: com.carto.routing.RoutingInstructionVector
                ): number;
                public constructor();
                public static RoutingResult_getInstructions(param0: number, param1: com.carto.routing.RoutingResult): number;
                public static RoutingResult_getTotalDistance(param0: number, param1: com.carto.routing.RoutingResult): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingService extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.routing.RoutingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class RoutingServiceModuleJNI extends javalangObject {
                public static RoutingService_change_ownership(param0: com.carto.routing.RoutingService, param1: number, param2: boolean): void;
                public static SwigDirector_RoutingService_calculateRoute(param0: com.carto.routing.RoutingService, param1: number): number;
                public static RoutingService_calculateRoute(param0: number, param1: com.carto.routing.RoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
                public static new_RoutingService(): number;
                public static RoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.RoutingService): number;
                public static RoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.RoutingService): javalangObject;
                public static delete_RoutingService(param0: number): void;
                public static RoutingService_swigGetClassName(param0: number, param1: com.carto.routing.RoutingService): string;
                public static RoutingService_director_connect(param0: com.carto.routing.RoutingService, param1: number, param2: boolean, param3: boolean): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class ValhallaOfflineRoutingService extends com.carto.routing.RoutingService {
                public static getCPtr(param0: com.carto.routing.RoutingService): number;
                public static getCPtr(param0: com.carto.routing.ValhallaOfflineRoutingService): number;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor(param0: string);
                public constructor();
                public setProfile(param0: string): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public getProfile(): string;
                public swigTakeOwnership(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.ValhallaOfflineRoutingService;
                public swigGetDirectorObject(): javalangObject;
                public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class ValhallaOfflineRoutingServiceModuleJNI extends javalangObject {
                public static SwigDirector_ValhallaOfflineRoutingService_calculateRoute(param0: com.carto.routing.ValhallaOfflineRoutingService, param1: number): number;
                public static ValhallaOfflineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
                public static delete_ValhallaOfflineRoutingService(param0: number): void;
                public static ValhallaOfflineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): string;
                public static ValhallaOfflineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): javalangObject;
                public static ValhallaOfflineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): number;
                public constructor();
                public static ValhallaOfflineRoutingService_calculateRouteSwigExplicitValhallaOfflineRoutingService(
                    param0: number,
                    param1: com.carto.routing.ValhallaOfflineRoutingService,
                    param2: number,
                    param3: com.carto.routing.RoutingRequest
                ): number;
                public static ValhallaOfflineRoutingService_director_connect(param0: com.carto.routing.ValhallaOfflineRoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static ValhallaOfflineRoutingService_change_ownership(param0: com.carto.routing.ValhallaOfflineRoutingService, param1: number, param2: boolean): void;
                public static new_ValhallaOfflineRoutingService(param0: string): number;
                public static ValhallaOfflineRoutingService_getProfile(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): string;
                public static ValhallaOfflineRoutingService_setProfile(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: string): void;
                public static ValhallaOfflineRoutingService_calculateRoute(
                    param0: number,
                    param1: com.carto.routing.ValhallaOfflineRoutingService,
                    param2: number,
                    param3: com.carto.routing.RoutingRequest
                ): number;
                public static ValhallaOfflineRoutingService_matchRoute(
                    param0: number,
                    param1: com.carto.routing.ValhallaOfflineRoutingService,
                    param2: number,
                    param3: com.carto.routing.RouteMatchingRequest
                ): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class ValhallaOnlineRoutingService extends com.carto.routing.RoutingService {
                public static getCPtr(param0: com.carto.routing.RoutingService): number;
                public swigReleaseOwnership(): void;
                public static getCPtr(param0: com.carto.routing.ValhallaOnlineRoutingService): number;
                public swigDirectorDisconnect(): void;
                public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
                public finalize(): void;
                public getCustomServiceURL(): string;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor(param0: string);
                public constructor();
                public setProfile(param0: string): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.ValhallaOnlineRoutingService;
                public setCustomServiceURL(param0: string): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public getProfile(): string;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace routing {
            export class ValhallaOnlineRoutingServiceModuleJNI extends javalangObject {
                public static ValhallaOnlineRoutingService_calculateRouteSwigExplicitValhallaOnlineRoutingService(
                    param0: number,
                    param1: com.carto.routing.ValhallaOnlineRoutingService,
                    param2: number,
                    param3: com.carto.routing.RoutingRequest
                ): number;
                public static ValhallaOnlineRoutingService_change_ownership(param0: com.carto.routing.ValhallaOnlineRoutingService, param1: number, param2: boolean): void;
                public static ValhallaOnlineRoutingService_getProfile(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): string;
                public static ValhallaOnlineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): number;
                public static new_ValhallaOnlineRoutingService(param0: string): number;
                public static ValhallaOnlineRoutingService_setProfile(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: string): void;
                public constructor();
                public static delete_ValhallaOnlineRoutingService(param0: number): void;
                public static ValhallaOnlineRoutingService_director_connect(param0: com.carto.routing.ValhallaOnlineRoutingService, param1: number, param2: boolean, param3: boolean): void;
                public static ValhallaOnlineRoutingService_getCustomServiceURL(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): string;
                public static ValhallaOnlineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): javalangObject;
                public static ValhallaOnlineRoutingService_setCustomServiceURL(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: string): void;
                public static ValhallaOnlineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): string;
                public static SwigDirector_ValhallaOnlineRoutingService_calculateRoute(param0: com.carto.routing.ValhallaOnlineRoutingService, param1: number): number;
                public static ValhallaOnlineRoutingService_calculateRoute(
                    param0: number,
                    param1: com.carto.routing.ValhallaOnlineRoutingService,
                    param2: number,
                    param3: com.carto.routing.RoutingRequest
                ): number;
                public static ValhallaOnlineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class FeatureCollectionSearchService extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public getProjection(): com.carto.projections.Projection;
                public static getCPtr(param0: com.carto.search.FeatureCollectionSearchService): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.search.FeatureCollectionSearchService;
                public findFeatures(param0: com.carto.search.SearchRequest): com.carto.geometry.FeatureCollection;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor(param0: com.carto.projections.Projection, param1: com.carto.geometry.FeatureCollection);
                public swigGetRawPtr(): number;
                public delete(): void;
                public getFeatureCollection(): com.carto.geometry.FeatureCollection;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class FeatureCollectionSearchServiceModuleJNI extends javalangObject {
                public static FeatureCollectionSearchService_change_ownership(param0: com.carto.search.FeatureCollectionSearchService, param1: number, param2: boolean): void;
                public static SwigDirector_FeatureCollectionSearchService_findFeatures(param0: com.carto.search.FeatureCollectionSearchService, param1: number): number;
                public static FeatureCollectionSearchService_swigGetDirectorObject(param0: number, param1: com.carto.search.FeatureCollectionSearchService): javalangObject;
                public static FeatureCollectionSearchService_director_connect(param0: com.carto.search.FeatureCollectionSearchService, param1: number, param2: boolean, param3: boolean): void;
                public constructor();
                public static new_FeatureCollectionSearchService(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.geometry.FeatureCollection): number;
                public static FeatureCollectionSearchService_getProjection(param0: number, param1: com.carto.search.FeatureCollectionSearchService): number;
                public static FeatureCollectionSearchService_findFeaturesSwigExplicitFeatureCollectionSearchService(
                    param0: number,
                    param1: com.carto.search.FeatureCollectionSearchService,
                    param2: number,
                    param3: com.carto.search.SearchRequest
                ): number;
                public static FeatureCollectionSearchService_swigGetRawPtr(param0: number, param1: com.carto.search.FeatureCollectionSearchService): number;
                public static FeatureCollectionSearchService_swigGetClassName(param0: number, param1: com.carto.search.FeatureCollectionSearchService): string;
                public static delete_FeatureCollectionSearchService(param0: number): void;
                public static FeatureCollectionSearchService_getFeatureCollection(param0: number, param1: com.carto.search.FeatureCollectionSearchService): number;
                public static FeatureCollectionSearchService_findFeatures(
                    param0: number,
                    param1: com.carto.search.FeatureCollectionSearchService,
                    param2: number,
                    param3: com.carto.search.SearchRequest
                ): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class SearchRequest extends javalangObject {
                public swigCMemOwn: boolean;
                public getProjection(): com.carto.projections.Projection;
                public getFilterExpression(): string;
                public getRegexFilter(): string;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setProjection(param0: com.carto.projections.Projection): void;
                public setFilterExpression(param0: string): void;
                public setSearchRadius(param0: number): void;
                public toString(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public setGeometry(param0: com.carto.geometry.Geometry): void;
                public hashCode(): number;
                public setRegexFilter(param0: string): void;
                public getSearchRadius(): number;
                public getGeometry(): com.carto.geometry.Geometry;
                public static getCPtr(param0: com.carto.search.SearchRequest): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class SearchRequestModuleJNI extends javalangObject {
                public static SearchRequest_setRegexFilter(param0: number, param1: com.carto.search.SearchRequest, param2: string): void;
                public static SearchRequest_setProjection(param0: number, param1: com.carto.search.SearchRequest, param2: number, param3: com.carto.projections.Projection): void;
                public static SearchRequest_getSearchRadius(param0: number, param1: com.carto.search.SearchRequest): number;
                public static SearchRequest_setGeometry(param0: number, param1: com.carto.search.SearchRequest, param2: number, param3: com.carto.geometry.Geometry): void;
                public static SearchRequest_getProjection(param0: number, param1: com.carto.search.SearchRequest): number;
                public static SearchRequest_getGeometry(param0: number, param1: com.carto.search.SearchRequest): number;
                public static SearchRequest_setFilterExpression(param0: number, param1: com.carto.search.SearchRequest, param2: string): void;
                public static SearchRequest_toString(param0: number, param1: com.carto.search.SearchRequest): string;
                public constructor();
                public static new_SearchRequest(): number;
                public static delete_SearchRequest(param0: number): void;
                public static SearchRequest_getRegexFilter(param0: number, param1: com.carto.search.SearchRequest): string;
                public static SearchRequest_swigGetRawPtr(param0: number, param1: com.carto.search.SearchRequest): number;
                public static SearchRequest_setSearchRadius(param0: number, param1: com.carto.search.SearchRequest, param2: number): void;
                public static SearchRequest_getFilterExpression(param0: number, param1: com.carto.search.SearchRequest): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class VectorElementSearchService extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: com.carto.datasources.VectorDataSource);
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.search.VectorElementSearchService): number;
                public getDataSource(): com.carto.datasources.VectorDataSource;
                public swigGetRawPtr(): number;
                public findElements(param0: com.carto.search.SearchRequest): com.carto.vectorelements.VectorElementVector;
                public delete(): void;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.search.VectorElementSearchService;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class VectorElementSearchServiceModuleJNI extends javalangObject {
                public static VectorElementSearchService_director_connect(param0: com.carto.search.VectorElementSearchService, param1: number, param2: boolean, param3: boolean): void;
                public static VectorElementSearchService_swigGetClassName(param0: number, param1: com.carto.search.VectorElementSearchService): string;
                public static new_VectorElementSearchService(param0: number, param1: com.carto.datasources.VectorDataSource): number;
                public static VectorElementSearchService_change_ownership(param0: com.carto.search.VectorElementSearchService, param1: number, param2: boolean): void;
                public static SwigDirector_VectorElementSearchService_findElements(param0: com.carto.search.VectorElementSearchService, param1: number): number;
                public static delete_VectorElementSearchService(param0: number): void;
                public static VectorElementSearchService_getDataSource(param0: number, param1: com.carto.search.VectorElementSearchService): number;
                public static VectorElementSearchService_findElements(
                    param0: number,
                    param1: com.carto.search.VectorElementSearchService,
                    param2: number,
                    param3: com.carto.search.SearchRequest
                ): number;
                public static VectorElementSearchService_swigGetDirectorObject(param0: number, param1: com.carto.search.VectorElementSearchService): javalangObject;
                public static VectorElementSearchService_findElementsSwigExplicitVectorElementSearchService(
                    param0: number,
                    param1: com.carto.search.VectorElementSearchService,
                    param2: number,
                    param3: com.carto.search.SearchRequest
                ): number;
                public static VectorElementSearchService_swigGetRawPtr(param0: number, param1: com.carto.search.VectorElementSearchService): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace search {
            export class VectorTileSearchService extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getTileDecoder(): com.carto.vectortiles.VectorTileDecoder;
                public swigGetClassName(): string;
                public getDataSource(): com.carto.datasources.TileDataSource;
                public getMaxZoom(): number;
                public swigGetRawPtr(): number;
                public setMaxZoom(param0: number): void;
                public static getCPtr(param0: com.carto.search.VectorTileSearchService): number;
                public delete(): void;
                public findFeatures(param0: com.carto.search.SearchRequest): com.carto.geometry.VectorTileFeatureCollection;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.search.VectorTileSearchService;
                public getMinZoom(): number;
                public setMinZoom(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace services {
            export class CartoMapsService extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.services.CartoMapsService): number;
                public getAPIKey(): string;
                public getVectorTileAssetPackage(): com.carto.utils.AssetPackage;
                public isInteractive(): boolean;
                public finalize(): void;
                public constructor();
                public buildNamedMap(param0: string, param1: com.carto.core.StringVariantMap): com.carto.layers.LayerVector;
                public setInteractive(param0: boolean): void;
                public setDefaultVectorLayerMode(param0: boolean): void;
                public delete(): void;
                public hashCode(): number;
                public setUsername(param0: string): void;
                public getUsername(): string;
                public setAPIKey(param0: string): void;
                public getAPITemplate(): string;
                public setVectorTileBufferSize(param0: number): void;
                public getAuthTokens(): com.carto.core.StringVector;
                public setVectorTileAssetPackage(param0: com.carto.utils.AssetPackage): void;
                public constructor(param0: number, param1: boolean);
                public isStrictMode(): boolean;
                public setLayerIndices(param0: com.carto.core.IntVector): void;
                public swigGetRawPtr(): number;
                public setAuthTokens(param0: com.carto.core.StringVector): void;
                public setAPITemplate(param0: string): void;
                public equals(param0: javalangObject): boolean;
                public getLayerIndices(): com.carto.core.IntVector;
                public setStrictMode(param0: boolean): void;
                public buildMap(param0: com.carto.core.Variant): com.carto.layers.LayerVector;
                public isDefaultVectorLayerMode(): boolean;
                public getVectorTileBufferSize(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace services {
            export class CartoSQLService extends javalangObject {
                public swigCMemOwn: boolean;
                public setAPIKey(param0: string): void;
                public getAPIKey(): string;
                public getAPITemplate(): string;
                public queryData(param0: string): com.carto.core.Variant;
                public static getCPtr(param0: com.carto.services.CartoSQLService): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor();
                public swigGetRawPtr(): number;
                public setAPITemplate(param0: string): void;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public setUsername(param0: string): void;
                public getUsername(): string;
                public queryFeatures(param0: string, param1: com.carto.projections.Projection): com.carto.geometry.FeatureCollection;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace services {
            export class CartoVisBuilder extends javalangObject {
                public swigCMemOwn: boolean;
                public setBounds(param0: com.carto.core.MapBounds): void;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public setZoom(param0: number): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public addLayer(param0: com.carto.layers.Layer, param1: com.carto.core.Variant): void;
                public constructor();
                public setCenter(param0: com.carto.core.MapPos): void;
                public static getCPtr(param0: com.carto.services.CartoVisBuilder): number;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.services.CartoVisBuilder;
                public delete(): void;
                public swigTakeOwnership(): void;
                public setDescription(param0: com.carto.core.Variant): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace services {
            export class CartoVisLoader extends javalangObject {
                public swigCMemOwn: boolean;
                public getVectorTileAssetPackage(): com.carto.utils.AssetPackage;
                public static getCPtr(param0: com.carto.services.CartoVisLoader): number;
                public setVectorTileAssetPackage(param0: com.carto.utils.AssetPackage): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public isStrictMode(): boolean;
                public constructor();
                public loadVis(param0: com.carto.services.CartoVisBuilder, param1: string): void;
                public swigGetRawPtr(): number;
                public setDefaultVectorLayerMode(param0: boolean): void;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public setStrictMode(param0: boolean): void;
                public isDefaultVectorLayerMode(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class AnimationStyle extends javalangObject {
                public swigCMemOwn: boolean;
                public getPhaseOutDuration(): number;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.AnimationStyle;
                public constructor(param0: number, param1: boolean);
                public getFadeAnimationType(): com.carto.styles.AnimationType;
                public static getCPtr(param0: com.carto.styles.AnimationStyle): number;
                public swigGetClassName(): string;
                public swigGetRawPtr(): number;
                public getRelativeSpeed(): number;
                public getPhaseInDuration(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public swigGetDirectorObject(): javalangObject;
                public getSizeAnimationType(): com.carto.styles.AnimationType;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class AnimationStyleBuilder extends javalangObject {
                public swigCMemOwn: boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.AnimationStyleBuilder;
                public getPhaseOutDuration(): number;
                public setFadeAnimationType(param0: com.carto.styles.AnimationType): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getFadeAnimationType(): com.carto.styles.AnimationType;
                public buildStyle(): com.carto.styles.AnimationStyle;
                public setSizeAnimationType(param0: com.carto.styles.AnimationType): void;
                public swigGetClassName(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public setPhaseInDuration(param0: number): void;
                public setPhaseOutDuration(param0: number): void;
                public getRelativeSpeed(): number;
                public getPhaseInDuration(): number;
                public delete(): void;
                public swigGetDirectorObject(): javalangObject;
                public setRelativeSpeed(param0: number): void;
                public static getCPtr(param0: com.carto.styles.AnimationStyleBuilder): number;
                public getSizeAnimationType(): com.carto.styles.AnimationType;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class AnimationType extends javalangEnum<any> {
                public static ANIMATION_TYPE_NONE: com.carto.styles.AnimationType;
                public static ANIMATION_TYPE_STEP: com.carto.styles.AnimationType;
                public static ANIMATION_TYPE_LINEAR: com.carto.styles.AnimationType;
                public static ANIMATION_TYPE_SMOOTHSTEP: com.carto.styles.AnimationType;
                public static ANIMATION_TYPE_SPRING: com.carto.styles.AnimationType;
                public swigValue(): number;
                public static values(): native.Array<com.carto.styles.AnimationType>;
                public static valueOf(param0: string): com.carto.styles.AnimationType;
                public static swigToEnum(param0: number): com.carto.styles.AnimationType;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace AnimationType {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BalloonPopupMargins extends javalangObject {
                public swigCMemOwn: boolean;
                public getTop(): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public static getCPtr(param0: com.carto.styles.BalloonPopupMargins): number;
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
            export class BalloonPopupStyle extends com.carto.styles.PopupStyle {
                public getStrokeWidth(): number;
                public finalize(): void;
                public getRightMargins(): com.carto.styles.BalloonPopupMargins;
                public getRightImage(): com.carto.graphics.Bitmap;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BalloonPopupStyle;
                public static getCPtr(param0: com.carto.styles.BillboardStyle): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
                public isTitleWrap(): boolean;
                public getTriangleHeight(): number;
                public delete(): void;
                public getTitleFontSize(): number;
                public getLeftImage(): com.carto.graphics.Bitmap;
                public isDescriptionWrap(): boolean;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyle;
                public static getCPtr(param0: com.carto.styles.BalloonPopupStyle): number;
                public getLeftColor(): com.carto.graphics.Color;
                public getDescriptionMargins(): com.carto.styles.BalloonPopupMargins;
                public getDescriptionFontSize(): number;
                public getBackgroundColor(): com.carto.graphics.Color;
                public constructor(param0: number, param1: boolean);
                public getDescriptionColor(): com.carto.graphics.Color;
                public static getCPtr(param0: com.carto.styles.PopupStyle): number;
                public getTitleMargins(): com.carto.styles.BalloonPopupMargins;
                public getTitleField(): string;
                public swigGetClassName(): string;
                public getLeftMargins(): com.carto.styles.BalloonPopupMargins;
                public getTriangleWidth(): number;
                public swigGetRawPtr(): number;
                public getCornerRadius(): number;
                public getRightColor(): com.carto.graphics.Color;
                public getDescriptionField(): string;
                public getTitleColor(): com.carto.graphics.Color;
                public getTitleFontName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PopupStyle;
                public static getCPtr(param0: com.carto.styles.Style): number;
                public getDescriptionFontName(): string;
                public getStrokeColor(): com.carto.graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BalloonPopupStyleBuilder extends com.carto.styles.PopupStyleBuilder {
                public setLeftColor(param0: com.carto.graphics.Color): void;
                public getStrokeWidth(): number;
                public setTriangleWidth(param0: number): void;
                public setRightColor(param0: com.carto.graphics.Color): void;
                public static getCPtr(param0: com.carto.styles.BalloonPopupStyleBuilder): number;
                public getRightImage(): com.carto.graphics.Bitmap;
                public setRightImage(param0: com.carto.graphics.Bitmap): void;
                public setDescriptionFontSize(param0: number): void;
                public setDescriptionWrap(param0: boolean): void;
                public constructor();
                public buildStyle(): com.carto.styles.BalloonPopupStyle;
                public static getCPtr(param0: com.carto.styles.BillboardStyleBuilder): number;
                public isDescriptionWrap(): boolean;
                public setDescriptionMargins(param0: com.carto.styles.BalloonPopupMargins): void;
                public swigGetDirectorObject(): javalangObject;
                public setRightMargins(param0: com.carto.styles.BalloonPopupMargins): void;
                public setStrokeWidth(param0: number): void;
                public getDescriptionMargins(): com.carto.styles.BalloonPopupMargins;
                public getDescriptionFontSize(): number;
                public setTitleColor(param0: com.carto.graphics.Color): void;
                public getTitleMargins(): com.carto.styles.BalloonPopupMargins;
                public getTitleField(): string;
                public buildStyle(): com.carto.styles.PopupStyle;
                public getCornerRadius(): number;
                public getRightColor(): com.carto.graphics.Color;
                public getDescriptionField(): string;
                public static getCPtr(param0: com.carto.styles.PopupStyleBuilder): number;
                public getTitleColor(): com.carto.graphics.Color;
                public setTitleMargins(param0: com.carto.styles.BalloonPopupMargins): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyleBuilder;
                public setCornerRadius(param0: number): void;
                public getTitleFontName(): string;
                public setTitleWrap(param0: boolean): void;
                public setTitleFontSize(param0: number): void;
                public finalize(): void;
                public getRightMargins(): com.carto.styles.BalloonPopupMargins;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
                public setStrokeColor(param0: com.carto.graphics.Color): void;
                public isTitleWrap(): boolean;
                public getTriangleHeight(): number;
                public delete(): void;
                public getTitleFontSize(): number;
                public getLeftImage(): com.carto.graphics.Bitmap;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PopupStyleBuilder;
                public getLeftColor(): com.carto.graphics.Color;
                public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
                public setTitleField(param0: string): void;
                public setTriangleHeight(param0: number): void;
                public setLeftImage(param0: com.carto.graphics.Bitmap): void;
                public setLeftMargins(param0: com.carto.styles.BalloonPopupMargins): void;
                public constructor(param0: number, param1: boolean);
                public getDescriptionColor(): com.carto.graphics.Color;
                public swigGetClassName(): string;
                public getLeftMargins(): com.carto.styles.BalloonPopupMargins;
                public setDescriptionColor(param0: com.carto.graphics.Color): void;
                public getTriangleWidth(): number;
                public swigGetRawPtr(): number;
                public setDescriptionFontName(param0: string): void;
                public setDescriptionField(param0: string): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BalloonPopupStyleBuilder;
                public setTitleFontName(param0: string): void;
                public getDescriptionFontName(): string;
                public getStrokeColor(): com.carto.graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BillboardOrientation extends javalangEnum<any> {
                public static BILLBOARD_ORIENTATION_FACE_CAMERA: com.carto.styles.BillboardOrientation;
                public static BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND: com.carto.styles.BillboardOrientation;
                public static BILLBOARD_ORIENTATION_GROUND: com.carto.styles.BillboardOrientation;
                public swigValue(): number;
                public static valueOf(param0: string): com.carto.styles.BillboardOrientation;
                public static values(): native.Array<com.carto.styles.BillboardOrientation>;
                public static swigToEnum(param0: number): com.carto.styles.BillboardOrientation;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace BillboardOrientation {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BillboardScaling extends javalangEnum<any> {
                public static BILLBOARD_SCALING_WORLD_SIZE: com.carto.styles.BillboardScaling;
                public static BILLBOARD_SCALING_SCREEN_SIZE: com.carto.styles.BillboardScaling;
                public static BILLBOARD_SCALING_CONST_SCREEN_SIZE: com.carto.styles.BillboardScaling;
                public swigValue(): number;
                public static swigToEnum(param0: number): com.carto.styles.BillboardScaling;
                public static values(): native.Array<com.carto.styles.BillboardScaling>;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
                public static valueOf(param0: string): com.carto.styles.BillboardScaling;
            }
            export namespace BillboardScaling {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BillboardStyle extends com.carto.styles.Style {
                public isHideIfOverlapped(): boolean;
                public getPlacementPriority(): number;
                public finalize(): void;
                public getAttachAnchorPointY(): number;
                public constructor(param0: number, param1: boolean);
                public isScaleWithDPI(): boolean;
                public getVerticalOffset(): number;
                public getAnimationStyle(): com.carto.styles.AnimationStyle;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.styles.BillboardStyle): number;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
                public delete(): void;
                public isCausesOverlap(): boolean;
                public getAttachAnchorPointX(): number;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.styles.Style): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyle;
                public getHorizontalOffset(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class BillboardStyleBuilder extends com.carto.styles.StyleBuilder {
                public setVerticalOffset(param0: number): void;
                public setAttachAnchorPoint(param0: number, param1: number): void;
                public finalize(): void;
                public isScaleWithDPI(): boolean;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
                public setHorizontalOffset(param0: number): void;
                public setAnimationStyle(param0: com.carto.styles.AnimationStyle): void;
                public delete(): void;
                public isCausesOverlap(): boolean;
                public static getCPtr(param0: com.carto.styles.BillboardStyleBuilder): number;
                public setScaleWithDPI(param0: boolean): void;
                public getAttachAnchorPointX(): number;
                public swigGetDirectorObject(): javalangObject;
                public setAttachAnchorPointY(param0: number): void;
                public getHorizontalOffset(): number;
                public isHideIfOverlapped(): boolean;
                public getPlacementPriority(): number;
                public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
                public getAttachAnchorPointY(): number;
                public constructor(param0: number, param1: boolean);
                public getVerticalOffset(): number;
                public getAnimationStyle(): com.carto.styles.AnimationStyle;
                public swigGetClassName(): string;
                public setPlacementPriority(param0: number): void;
                public swigGetRawPtr(): number;
                public setCausesOverlap(param0: boolean): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyleBuilder;
                public setHideIfOverlapped(param0: boolean): void;
                public setAttachAnchorPointX(param0: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class CartoCSSStyleSet extends javalangObject {
                public swigCMemOwn: boolean;
                public getCartoCSS(): string;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public static getCPtr(param0: com.carto.styles.CartoCSSStyleSet): number;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getAssetPackage(): com.carto.utils.AssetPackage;
                public constructor(param0: string);
                public constructor(param0: string, param1: com.carto.utils.AssetPackage);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class CompiledStyleSet extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public getStyleAssetName(): string;
                public hashCode(): number;
                public constructor(param0: com.carto.utils.AssetPackage, param1: string);
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.styles.CompiledStyleSet): number;
                public getAssetPackage(): com.carto.utils.AssetPackage;
                public getStyleName(): string;
                public constructor(param0: com.carto.utils.AssetPackage);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class GeometryCollectionStyle extends com.carto.styles.Style {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.GeometryCollectionStyle;
                public static getCPtr(param0: com.carto.styles.GeometryCollectionStyle): number;
                public getPointStyle(): com.carto.styles.PointStyle;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getPolygonStyle(): com.carto.styles.PolygonStyle;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
                public delete(): void;
                public swigGetDirectorObject(): javalangObject;
                public getLineStyle(): com.carto.styles.LineStyle;
                public static getCPtr(param0: com.carto.styles.Style): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class GeometryCollectionStyleBuilder extends com.carto.styles.StyleBuilder {
                public setPolygonStyle(param0: com.carto.styles.PolygonStyle): void;
                public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
                public setLineStyle(param0: com.carto.styles.LineStyle): void;
                public getPointStyle(): com.carto.styles.PointStyle;
                public static getCPtr(param0: com.carto.styles.GeometryCollectionStyleBuilder): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
                public swigGetClassName(): string;
                public getPolygonStyle(): com.carto.styles.PolygonStyle;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.GeometryCollectionStyleBuilder;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public buildStyle(): com.carto.styles.GeometryCollectionStyle;
                public swigGetDirectorObject(): javalangObject;
                public setPointStyle(param0: com.carto.styles.PointStyle): void;
                public getLineStyle(): com.carto.styles.LineStyle;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LabelStyle extends com.carto.styles.BillboardStyle {
                public isFlippable(): boolean;
                public getScalingMode(): com.carto.styles.BillboardScaling;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.styles.LabelStyle): number;
                public getAnchorPointY(): number;
                public swigGetClassName(): string;
                public getOrientationMode(): com.carto.styles.BillboardOrientation;
                public static getCPtr(param0: com.carto.styles.BillboardStyle): number;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.LabelStyle;
                public getRenderScale(): number;
                public swigGetDirectorObject(): javalangObject;
                public getAnchorPointX(): number;
                public static getCPtr(param0: com.carto.styles.Style): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyle;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LabelStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
                public setScalingMode(param0: com.carto.styles.BillboardScaling): void;
                public getScalingMode(): com.carto.styles.BillboardScaling;
                public finalize(): void;
                public setFlippable(param0: boolean): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
                public setAnchorPointY(param0: number): void;
                public constructor();
                public delete(): void;
                public setAnchorPoint(param0: number, param1: number): void;
                public static getCPtr(param0: com.carto.styles.BillboardStyleBuilder): number;
                public swigGetDirectorObject(): javalangObject;
                public getAnchorPointX(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.LabelStyleBuilder;
                public static getCPtr(param0: com.carto.styles.LabelStyleBuilder): number;
                public isFlippable(): boolean;
                public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
                public buildStyle(): com.carto.styles.LabelStyle;
                public constructor(param0: number, param1: boolean);
                public getAnchorPointY(): number;
                public swigGetClassName(): string;
                public getOrientationMode(): com.carto.styles.BillboardOrientation;
                public setAnchorPointX(param0: number): void;
                public swigGetRawPtr(): number;
                public setRenderScale(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyleBuilder;
                public getRenderScale(): number;
                public setOrientationMode(param0: com.carto.styles.BillboardOrientation): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LineEndType extends javalangEnum<any> {
                public static LINE_END_TYPE_NONE: com.carto.styles.LineEndType;
                public static LINE_END_TYPE_SQUARE: com.carto.styles.LineEndType;
                public static LINE_END_TYPE_ROUND: com.carto.styles.LineEndType;
                public swigValue(): number;
                public static valueOf(param0: string): com.carto.styles.LineEndType;
                public static values(): native.Array<com.carto.styles.LineEndType>;
                public static swigToEnum(param0: number): com.carto.styles.LineEndType;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace LineEndType {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LineJoinType extends javalangEnum<any> {
                public static LINE_JOIN_TYPE_NONE: com.carto.styles.LineJoinType;
                public static LINE_JOIN_TYPE_MITER: com.carto.styles.LineJoinType;
                public static LINE_JOIN_TYPE_BEVEL: com.carto.styles.LineJoinType;
                public static LINE_JOIN_TYPE_ROUND: com.carto.styles.LineJoinType;
                public swigValue(): number;
                public static swigToEnum(param0: number): com.carto.styles.LineJoinType;
                public static values(): native.Array<com.carto.styles.LineJoinType>;
                public static valueOf(param0: string): com.carto.styles.LineJoinType;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace LineJoinType {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LineStyle extends com.carto.styles.Style {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.LineStyle;
                public getClickWidth(): number;
                public getLineJoinType(): com.carto.styles.LineJoinType;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getBitmap(): com.carto.graphics.Bitmap;
                public swigGetRawPtr(): number;
                public getWidth(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
                public static getCPtr(param0: com.carto.styles.LineStyle): number;
                public delete(): void;
                public swigGetDirectorObject(): javalangObject;
                public getLineEndType(): com.carto.styles.LineEndType;
                public getStretchFactor(): number;
                public static getCPtr(param0: com.carto.styles.Style): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class LineStyleBuilder extends com.carto.styles.StyleBuilder {
                public setBitmap(param0: com.carto.graphics.Bitmap): void;
                public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
                public getClickWidth(): number;
                public getLineJoinType(): com.carto.styles.LineJoinType;
                public finalize(): void;
                public setLineEndType(param0: com.carto.styles.LineEndType): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.LineStyleBuilder;
                public setStretchFactor(param0: number): void;
                public swigGetClassName(): string;
                public constructor();
                public getBitmap(): com.carto.graphics.Bitmap;
                public setWidth(param0: number): void;
                public swigGetRawPtr(): number;
                public getWidth(): number;
                public delete(): void;
                public buildStyle(): com.carto.styles.LineStyle;
                public setLineJoinType(param0: com.carto.styles.LineJoinType): void;
                public swigGetDirectorObject(): javalangObject;
                public setClickWidth(param0: number): void;
                public getLineEndType(): com.carto.styles.LineEndType;
                public getStretchFactor(): number;
                public static getCPtr(param0: com.carto.styles.LineStyleBuilder): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class MarkerStyle extends com.carto.styles.BillboardStyle {
                public getScalingMode(): com.carto.styles.BillboardScaling;
                public finalize(): void;
                public getClickSize(): number;
                public constructor(param0: number, param1: boolean);
                public getAnchorPointY(): number;
                public swigGetClassName(): string;
                public getOrientationMode(): com.carto.styles.BillboardOrientation;
                public getBitmap(): com.carto.graphics.Bitmap;
                public static getCPtr(param0: com.carto.styles.BillboardStyle): number;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
                public delete(): void;
                public getSize(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.MarkerStyle;
                public swigGetDirectorObject(): javalangObject;
                public getAnchorPointX(): number;
                public static getCPtr(param0: com.carto.styles.MarkerStyle): number;
                public static getCPtr(param0: com.carto.styles.Style): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyle;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class MarkerStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
                public setScalingMode(param0: com.carto.styles.BillboardScaling): void;
                public getScalingMode(): com.carto.styles.BillboardScaling;
                public finalize(): void;
                public static getCPtr(param0: com.carto.styles.MarkerStyleBuilder): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
                public setAnchorPointY(param0: number): void;
                public setSize(param0: number): void;
                public constructor();
                public delete(): void;
                public setClickSize(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.MarkerStyleBuilder;
                public getSize(): number;
                public setAnchorPoint(param0: number, param1: number): void;
                public static getCPtr(param0: com.carto.styles.BillboardStyleBuilder): number;
                public swigGetDirectorObject(): javalangObject;
                public getAnchorPointX(): number;
                public setBitmap(param0: com.carto.graphics.Bitmap): void;
                public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
                public getClickSize(): number;
                public constructor(param0: number, param1: boolean);
                public getAnchorPointY(): number;
                public swigGetClassName(): string;
                public getOrientationMode(): com.carto.styles.BillboardOrientation;
                public setAnchorPointX(param0: number): void;
                public getBitmap(): com.carto.graphics.Bitmap;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyleBuilder;
                public setOrientationMode(param0: com.carto.styles.BillboardOrientation): void;
                public buildStyle(): com.carto.styles.MarkerStyle;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PointStyle extends com.carto.styles.Style {
                public static getCPtr(param0: com.carto.styles.PointStyle): number;
                public finalize(): void;
                public getClickSize(): number;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getBitmap(): com.carto.graphics.Bitmap;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
                public delete(): void;
                public getSize(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PointStyle;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.styles.Style): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PointStyleBuilder extends com.carto.styles.StyleBuilder {
                public setBitmap(param0: com.carto.graphics.Bitmap): void;
                public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
                public finalize(): void;
                public getClickSize(): number;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
                public swigGetClassName(): string;
                public setSize(param0: number): void;
                public static getCPtr(param0: com.carto.styles.PointStyleBuilder): number;
                public constructor();
                public getBitmap(): com.carto.graphics.Bitmap;
                public buildStyle(): com.carto.styles.PointStyle;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PointStyleBuilder;
                public setClickSize(param0: number): void;
                public getSize(): number;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class Polygon3DStyle extends com.carto.styles.Style {
                public getSideColor(): com.carto.graphics.Color;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.styles.Polygon3DStyle): number;
                public swigGetDirectorObject(): javalangObject;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Polygon3DStyle;
                public static getCPtr(param0: com.carto.styles.Style): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class Polygon3DStyleBuilder extends com.carto.styles.StyleBuilder {
                public setSideColor(param0: com.carto.graphics.Color): void;
                public getSideColor(): com.carto.graphics.Color;
                public static getCPtr(param0: com.carto.styles.Polygon3DStyleBuilder): number;
                public buildStyle(): com.carto.styles.Polygon3DStyle;
                public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Polygon3DStyleBuilder;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PolygonStyle extends com.carto.styles.Style {
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PolygonStyle;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
                public static getCPtr(param0: com.carto.styles.PolygonStyle): number;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetDirectorObject(): javalangObject;
                public swigGetClassName(): string;
                public getLineStyle(): com.carto.styles.LineStyle;
                public static getCPtr(param0: com.carto.styles.Style): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PolygonStyleBuilder extends com.carto.styles.StyleBuilder {
                public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
                public setLineStyle(param0: com.carto.styles.LineStyle): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
                public swigGetClassName(): string;
                public buildStyle(): com.carto.styles.PolygonStyle;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: com.carto.styles.PolygonStyleBuilder): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PolygonStyleBuilder;
                public swigGetDirectorObject(): javalangObject;
                public getLineStyle(): com.carto.styles.LineStyle;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PopupStyle extends com.carto.styles.BillboardStyle {
                public static getCPtr(param0: com.carto.styles.BillboardStyle): number;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
                public delete(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.styles.PopupStyle): number;
                public swigGetDirectorObject(): javalangObject;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PopupStyle;
                public static getCPtr(param0: com.carto.styles.Style): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyle;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class PopupStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
                public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
                public swigGetClassName(): string;
                public buildStyle(): com.carto.styles.PopupStyle;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: com.carto.styles.BillboardStyleBuilder): number;
                public static getCPtr(param0: com.carto.styles.PopupStyleBuilder): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyleBuilder;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PopupStyleBuilder;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class StringCartoCSSStyleSetMap extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.styles.StringCartoCSSStyleSetMap): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public del(param0: string): void;
                public constructor();
                public size(): number;
                public get_key(param0: number): string;
                public delete(): void;
                public get(param0: string): com.carto.styles.CartoCSSStyleSet;
                public set(param0: string, param1: com.carto.styles.CartoCSSStyleSet): void;
                public constructor(param0: com.carto.styles.StringCartoCSSStyleSetMap);
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
            export class Style extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getColor(): com.carto.graphics.Color;
                public swigGetDirectorObject(): javalangObject;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.styles.Style): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class StyleBuilder extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getColor(): com.carto.graphics.Color;
                public setColor(param0: com.carto.graphics.Color): void;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
                public swigGetClassName(): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class TextMargins extends javalangObject {
                public swigCMemOwn: boolean;
                public getTop(): number;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.styles.TextMargins): number;
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
            export class TextStyle extends com.carto.styles.LabelStyle {
                public getStrokeWidth(): number;
                public finalize(): void;
                public isBreakLines(): boolean;
                public getTextField(): string;
                public static getCPtr(param0: com.carto.styles.BillboardStyle): number;
                public getFontColor(): com.carto.graphics.Color;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
                public delete(): void;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyle;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.TextStyle;
                public getBorderColor(): com.carto.graphics.Color;
                public getBackgroundColor(): com.carto.graphics.Color;
                public constructor(param0: number, param1: boolean);
                public getFontName(): string;
                public static getCPtr(param0: com.carto.styles.LabelStyle): number;
                public static getCPtr(param0: com.carto.styles.TextStyle): number;
                public swigGetClassName(): string;
                public swigGetRawPtr(): number;
                public getFontSize(): number;
                public getTextMargins(): com.carto.styles.TextMargins;
                public getBorderWidth(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.LabelStyle;
                public static getCPtr(param0: com.carto.styles.Style): number;
                public getStrokeColor(): com.carto.graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace styles {
            export class TextStyleBuilder extends com.carto.styles.LabelStyleBuilder {
                public getStrokeWidth(): number;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
                public isBreakLines(): boolean;
                public getTextField(): string;
                public constructor();
                public setBreakLines(param0: boolean): void;
                public setTextField(param0: string): void;
                public setStrokeColor(param0: com.carto.graphics.Color): void;
                public delete(): void;
                public static getCPtr(param0: com.carto.styles.BillboardStyleBuilder): number;
                public swigGetDirectorObject(): javalangObject;
                public setFontSize(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.LabelStyleBuilder;
                public static getCPtr(param0: com.carto.styles.LabelStyleBuilder): number;
                public setTextMargins(param0: com.carto.styles.TextMargins): void;
                public setStrokeWidth(param0: number): void;
                public getBorderColor(): com.carto.graphics.Color;
                public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
                public static getCPtr(param0: com.carto.styles.TextStyleBuilder): number;
                public buildStyle(): com.carto.styles.LabelStyle;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.TextStyleBuilder;
                public getBackgroundColor(): com.carto.graphics.Color;
                public constructor(param0: number, param1: boolean);
                public getFontName(): string;
                public swigGetClassName(): string;
                public setBorderColor(param0: com.carto.graphics.Color): void;
                public swigGetRawPtr(): number;
                public getFontSize(): number;
                public setFontName(param0: string): void;
                public getTextMargins(): com.carto.styles.TextMargins;
                public getBorderWidth(): number;
                public setBackgroundColor(param0: com.carto.graphics.Color): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyleBuilder;
                public setBorderWidth(param0: number): void;
                public buildStyle(): com.carto.styles.TextStyle;
                public getStrokeColor(): com.carto.graphics.Color;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class BaseMapView extends javalangObject {
                public swigCMemOwn: boolean;
                public onSurfaceCreated(): void;
                public getZoom(): number;
                public setZoom(param0: number, param1: number): void;
                public onSurfaceDestroyed(): void;
                public finalize(): void;
                public mapToScreen(param0: com.carto.core.MapPos): com.carto.core.ScreenPos;
                public onWheelEvent(param0: number, param1: number, param2: number): void;
                public static getCPtr(param0: com.carto.ui.BaseMapView): number;
                public onInputEvent(param0: number, param1: number, param2: number, param3: number, param4: number): void;
                public getRedrawRequestListener(): com.carto.renderers.RedrawRequestListener;
                public constructor();
                public setFocusPos(param0: com.carto.core.MapPos, param1: number): void;
                public cancelAllTasks(): void;
                public delete(): void;
                public setTilt(param0: number, param1: number): void;
                public clearPreloadingCaches(): void;
                public clearAllCaches(): void;
                public static getSDKVersion(): string;
                public setRotation(param0: number, param1: number): void;
                public tilt(param0: number, param1: number): void;
                public getLayers(): com.carto.components.Layers;
                public setMapEventListener(param0: com.carto.ui.MapEventListener): void;
                public zoom(param0: number, param1: number): void;
                public pan(param0: com.carto.core.MapVec, param1: number): void;
                public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
                public rotate(param0: number, param1: number): void;
                public constructor(param0: number, param1: boolean);
                public setRotation(param0: number, param1: com.carto.core.MapPos, param2: number): void;
                public zoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
                public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: number): void;
                public onSurfaceChanged(param0: number, param1: number): void;
                public setZoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
                public getMapEventListener(): com.carto.ui.MapEventListener;
                public getRotation(): number;
                public rotate(param0: number, param1: com.carto.core.MapPos, param2: number): void;
                public getFocusPos(): com.carto.core.MapPos;
                public getTilt(): number;
                public screenToMap(param0: com.carto.core.ScreenPos): com.carto.core.MapPos;
                public static registerLicense(param0: string, param1: com.carto.components.LicenseManagerListener): boolean;
                public getOptions(): com.carto.components.Options;
                public onDrawFrame(): void;
                public getMapRenderer(): com.carto.renderers.MapRenderer;
                public setRedrawRequestListener(param0: com.carto.renderers.RedrawRequestListener): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class ClickType extends javalangEnum<any> {
                public static CLICK_TYPE_SINGLE: com.carto.ui.ClickType;
                public static CLICK_TYPE_LONG: com.carto.ui.ClickType;
                public static CLICK_TYPE_DOUBLE: com.carto.ui.ClickType;
                public static CLICK_TYPE_DUAL: com.carto.ui.ClickType;
                public swigValue(): number;
                public static values(): native.Array<com.carto.ui.ClickType>;
                public static valueOf(param0: string): com.carto.ui.ClickType;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
                public static swigToEnum(param0: number): com.carto.ui.ClickType;
            }
            export namespace ClickType {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

import androidopenglGLSurfaceViewEGLConfigChooser = android.opengl.GLSurfaceView.EGLConfigChooser;

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class ConfigChooser extends javalangObject implements androidopenglGLSurfaceViewEGLConfigChooser {
                public chooseConfig(param0: any, param1: any): any;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class MapClickInfo extends javalangObject {
                public swigCMemOwn: boolean;
                public getClickType(): com.carto.ui.ClickType;
                public swigGetRawPtr(): number;
                public getClickPos(): com.carto.core.MapPos;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.ui.MapClickInfo): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class MapEventListener extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public onMapMoved(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.ui.MapEventListener): number;
                public swigGetClassName(): string;
                public constructor();
                public onMapStable(): void;
                public swigGetRawPtr(): number;
                public onMapClicked(param0: com.carto.ui.MapClickInfo): void;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.ui.MapEventListener;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public onMapIdle(): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class MapRedrawRequestListener extends com.carto.renderers.RedrawRequestListener {
                public constructor(param0: number, param1: boolean);
                public onRedrawRequested(): void;
                public constructor(param0: com.carto.ui.MapView);
                public constructor();
            }
        }
    }
}

import androidopenglGLSurfaceViewRenderer = android.opengl.GLSurfaceView.Renderer;
import androidopenglGLSurfaceView = android.opengl.GLSurfaceView;
import androidcontentContext = android.content.Context;
import androidutilAttributeSet = android.util.AttributeSet;
import androidviewMotionEvent = android.view.MotionEvent;
import androidviewKeyEvent = android.view.KeyEvent;
import androidgraphicsdrawableDrawable = android.graphics.drawable.Drawable;
import androidviewSurfaceHolder = android.view.SurfaceHolder;
import androidviewaccessibilityAccessibilityEvent = android.view.accessibility.AccessibilityEvent;

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class MapView extends androidopenglGLSurfaceView implements androidopenglGLSurfaceViewRenderer {
                public unscheduleDrawable(param0: androidgraphicsdrawableDrawable, param1: javalangRunnable): void;
                public mapToScreen(param0: com.carto.core.MapPos): com.carto.core.ScreenPos;
                public onSurfaceChanged(param0: any, param1: number, param2: number): void;
                public onSurfaceCreated(param0: any, param1: any): void;
                public cancelAllTasks(): void;
                public sendAccessibilityEvent(param0: number): void;
                public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
                public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number, param3: number);
                public setTilt(param0: number, param1: number): void;
                public onKeyUp(param0: number, param1: androidviewKeyEvent): boolean;
                public clearPreloadingCaches(): void;
                public clearAllCaches(): void;
                public static registerLicense(param0: string, param1: androidcontentContext): boolean;
                public getLayers(): com.carto.components.Layers;
                public zoom(param0: number, param1: number): void;
                public pan(param0: com.carto.core.MapVec, param1: number): void;
                public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
                public rotate(param0: number, param1: number): void;
                public onDrawFrame(param0: any): void;
                public scheduleDrawable(param0: androidgraphicsdrawableDrawable, param1: javalangRunnable, param2: number): void;
                public zoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
                public surfaceRedrawNeeded(param0: androidviewSurfaceHolder): void;
                public setZoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
                public onKeyMultiple(param0: number, param1: number, param2: androidviewKeyEvent): boolean;
                public invalidateDrawable(param0: androidgraphicsdrawableDrawable): void;
                public getMapEventListener(): com.carto.ui.MapEventListener;
                public getFocusPos(): com.carto.core.MapPos;
                public screenToMap(param0: com.carto.core.ScreenPos): com.carto.core.MapPos;
                public getOptions(): com.carto.components.Options;
                public constructor(param0: androidcontentContext);
                public getMapRenderer(): com.carto.renderers.MapRenderer;
                public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
                public setMapRotation(param0: number, param1: number): void;
                public getZoom(): number;
                public setZoom(param0: number, param1: number): void;
                public getMapRotation(): number;
                public onKeyDown(param0: number, param1: androidviewKeyEvent): boolean;
                public setFocusPos(param0: com.carto.core.MapPos, param1: number): void;
                public delete(): void;
                public sendAccessibilityEventUnchecked(param0: androidviewaccessibilityAccessibilityEvent): void;
                public tilt(param0: number, param1: number): void;
                public setMapEventListener(param0: com.carto.ui.MapEventListener): void;
                public setMapRotation(param0: number, param1: com.carto.core.MapPos, param2: number): void;
                public unscheduleDrawable(param0: androidgraphicsdrawableDrawable): void;
                public onTouchEvent(param0: androidviewMotionEvent): boolean;
                public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: number): void;
                public rotate(param0: number, param1: com.carto.core.MapPos, param2: number): void;
                public getTilt(): number;
                public onKeyLongPress(param0: number, param1: androidviewKeyEvent): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class NMLModelLODTreeClickInfo extends javalangObject {
                public swigCMemOwn: boolean;
                public getClickType(): com.carto.ui.ClickType;
                public swigGetRawPtr(): number;
                public getClickPos(): com.carto.core.MapPos;
                public getElementClickPos(): com.carto.core.MapPos;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getMetaData(): com.carto.core.StringMap;
                public getLayer(): com.carto.layers.Layer;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.ui.NMLModelLODTreeClickInfo): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class PopupClickInfo extends javalangObject {
                public swigCMemOwn: boolean;
                public getElementClickPos(): com.carto.core.ScreenPos;
                public getClickType(): com.carto.ui.ClickType;
                public swigGetRawPtr(): number;
                public getClickPos(): com.carto.core.MapPos;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getPopup(): com.carto.vectorelements.Popup;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.ui.PopupClickInfo): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class PopupDrawInfo extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public getAnchorScreenPos(): com.carto.core.ScreenPos;
                public getScreenBounds(): com.carto.core.ScreenBounds;
                public static getCPtr(param0: com.carto.ui.PopupDrawInfo): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getPopup(): com.carto.vectorelements.Popup;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getDPToPX(): number;
                public constructor(param0: com.carto.core.ScreenPos, param1: com.carto.core.ScreenBounds, param2: com.carto.vectorelements.Popup, param3: number);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class RasterTileClickInfo extends javalangObject {
                public swigCMemOwn: boolean;
                public getClickType(): com.carto.ui.ClickType;
                public getNearestColor(): com.carto.graphics.Color;
                public getClickPos(): com.carto.core.MapPos;
                public static getCPtr(param0: com.carto.ui.RasterTileClickInfo): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getInterpolatedColor(): com.carto.graphics.Color;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getMapTile(): com.carto.core.MapTile;
                public getLayer(): com.carto.layers.Layer;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class UTFGridClickInfo extends javalangObject {
                public swigCMemOwn: boolean;
                public getClickType(): com.carto.ui.ClickType;
                public swigGetRawPtr(): number;
                public getClickPos(): com.carto.core.MapPos;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getLayer(): com.carto.layers.Layer;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.ui.UTFGridClickInfo): number;
                public getElementInfo(): com.carto.core.Variant;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class VectorElementClickInfo extends javalangObject {
                public swigCMemOwn: boolean;
                public getClickType(): com.carto.ui.ClickType;
                public swigGetRawPtr(): number;
                public getClickPos(): com.carto.core.MapPos;
                public getElementClickPos(): com.carto.core.MapPos;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getLayer(): com.carto.layers.Layer;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.ui.VectorElementClickInfo): number;
                public getVectorElement(): com.carto.vectorelements.VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class VectorElementDragInfo extends javalangObject {
                public swigCMemOwn: boolean;
                public getMapPos(): com.carto.core.MapPos;
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.ui.VectorElementDragInfo): number;
                public getDragMode(): com.carto.ui.VectorElementDragMode;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getScreenPos(): com.carto.core.ScreenPos;
                public getVectorElement(): com.carto.vectorelements.VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class VectorElementDragInfoModuleJNI extends javalangObject {
                public static VectorElementDragInfo_getVectorElement(param0: number, param1: com.carto.ui.VectorElementDragInfo): number;
                public static VectorElementDragInfo_getScreenPos(param0: number, param1: com.carto.ui.VectorElementDragInfo): number;
                public static VectorElementDragInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.VectorElementDragInfo): number;
                public static delete_VectorElementDragInfo(param0: number): void;
                public static VectorElementDragInfo_getDragMode(param0: number, param1: com.carto.ui.VectorElementDragInfo): number;
                public static VectorElementDragInfo_getMapPos(param0: number, param1: com.carto.ui.VectorElementDragInfo): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class VectorElementDragMode extends javalangEnum<any> {
                public static VECTOR_ELEMENT_DRAG_MODE_VERTEX: com.carto.ui.VectorElementDragMode;
                public static VECTOR_ELEMENT_DRAG_MODE_ELEMENT: com.carto.ui.VectorElementDragMode;
                public static values(): native.Array<com.carto.ui.VectorElementDragMode>;
                public swigValue(): number;
                public static valueOf(param0: string): com.carto.ui.VectorElementDragMode;
                public static swigToEnum(param0: number): com.carto.ui.VectorElementDragMode;
                public static valueOf(param0: javalangClass<any>, param1: string): javalangEnum<any>;
            }
            export namespace VectorElementDragMode {
                export class SwigNext extends javalangObject {}
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace ui {
            export class VectorTileClickInfo extends javalangObject {
                public swigCMemOwn: boolean;
                public getClickType(): com.carto.ui.ClickType;
                public getClickPos(): com.carto.core.MapPos;
                public static getCPtr(param0: com.carto.ui.VectorTileClickInfo): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getFeatureClickPos(): com.carto.core.MapPos;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public getMapTile(): com.carto.core.MapTile;
                public getLayer(): com.carto.layers.Layer;
                public getFeatureLayerName(): string;
                public getFeatureId(): number;
                public getFeature(): com.carto.geometry.VectorTileFeature;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class AndroidUtils extends javalangObject {
                public swigCMemOwn: boolean;
                public static getDeviceType(): string;
                public delete(): void;
                public static setContext(param0: androidcontentContext): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.utils.AndroidUtils): number;
                public static attachJVM(param0: javalangObject): void;
                public static getDeviceOS(): string;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class AssetPackage extends javalangObject {
                public swigCMemOwn: boolean;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.utils.AssetPackage;
                public equals(param0: javalangObject): boolean;
                public loadAsset(param0: string): com.carto.core.BinaryData;
                public hashCode(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getAssetNames(): com.carto.core.StringVector;
                public swigGetDirectorObject(): javalangObject;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.utils.AssetPackage): number;
            }
        }
    }
}

import androidcontentresAssetManager = android.content.res.AssetManager;

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class AssetUtils extends javalangObject {
                public swigCMemOwn: boolean;
                public delete(): void;
                public static setAssetManagerPointer(param0: androidcontentresAssetManager): void;
                public static loadAsset(param0: string): com.carto.core.BinaryData;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.utils.AssetUtils): number;
            }
        }
    }
}

import androidgraphicsBitmap = android.graphics.Bitmap;

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class BitmapUtils extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.utils.BitmapUtils): number;
                public delete(): void;
                public static createBitmapFromAndroidBitmap(param0: androidgraphicsBitmap): com.carto.graphics.Bitmap;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static createAndroidBitmapFromBitmap(param0: com.carto.graphics.Bitmap): androidgraphicsBitmap;
                public static loadBitmapFromAssets(param0: string): com.carto.graphics.Bitmap;
                public static loadBitmapFromFile(param0: string): com.carto.graphics.Bitmap;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class Log extends javalangObject {
                public swigCMemOwn: boolean;
                public static getCPtr(param0: com.carto.utils.Log): number;
                public static setShowInfo(param0: boolean): void;
                public finalize(): void;
                public static isShowInfo(): boolean;
                public constructor(param0: number, param1: boolean);
                public static fatal(param0: string): void;
                public static error(param0: string): void;
                public static setShowWarn(param0: boolean): void;
                public static setTag(param0: string): void;
                public static setLogEventListener(param0: com.carto.utils.LogEventListener): void;
                public static warn(param0: string): void;
                public static setShowDebug(param0: boolean): void;
                public static isShowError(): boolean;
                public static getLogEventListener(): com.carto.utils.LogEventListener;
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
            export class LogEventListener extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public onErrorEvent(param0: string): boolean;
                public swigDirectorDisconnect(): void;
                public static getCPtr(param0: com.carto.utils.LogEventListener): number;
                public onWarnEvent(param0: string): boolean;
                public onInfoEvent(param0: string): boolean;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.utils.LogEventListener;
                public onDebugEvent(param0: string): boolean;
                public swigTakeOwnership(): void;
                public onFatalEvent(param0: string): boolean;
                public swigGetDirectorObject(): javalangObject;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace utils {
            export class ZippedAssetPackage extends com.carto.utils.AssetPackage {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.utils.ZippedAssetPackage;
                public static getCPtr(param0: com.carto.utils.ZippedAssetPackage): number;
                public getLocalAssetNames(): com.carto.core.StringVector;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getAssetNames(): com.carto.core.StringVector;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.utils.AssetPackage): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.utils.AssetPackage;
                public loadAsset(param0: string): com.carto.core.BinaryData;
                public swigGetDirectorObject(): javalangObject;
                public constructor(param0: com.carto.core.BinaryData);
                public constructor(param0: com.carto.core.BinaryData, param1: com.carto.utils.AssetPackage);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class BalloonPopup extends com.carto.vectorelements.Popup {
                public static getCPtr(param0: com.carto.vectorelements.Popup): number;
                public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
                public constructor(param0: com.carto.vectorelements.Billboard, param1: com.carto.styles.BalloonPopupStyle, param2: string, param3: string);
                public finalize(): void;
                public getDescription(): string;
                public setStyle(param0: com.carto.styles.BalloonPopupStyle): void;
                public drawBitmap(param0: com.carto.core.ScreenPos, param1: number, param2: number, param3: number): com.carto.graphics.Bitmap;
                public setTitle(param0: string): void;
                public static getCPtr(param0: com.carto.vectorelements.BalloonPopup): number;
                public delete(): void;
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
                public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.BalloonPopupStyle, param2: string, param3: string);
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Popup;
                public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.BalloonPopupStyle, param2: string, param3: string);
                public constructor(param0: number, param1: boolean);
                public getStyle(): com.carto.styles.PopupStyle;
                public swigGetClassName(): string;
                public getTitle(): string;
                public setStyle(param0: com.carto.styles.PopupStyle): void;
                public swigGetRawPtr(): number;
                public setDescription(param0: string): void;
                public getStyle(): com.carto.styles.BalloonPopupStyle;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.BalloonPopup;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class BalloonPopupModuleJNI extends javalangObject {
                public static BalloonPopup_getTitle(param0: number, param1: com.carto.vectorelements.BalloonPopup): string;
                public static BalloonPopup_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.BalloonPopup): javalangObject;
                public static new_BalloonPopup__SWIG_1(
                    param0: number,
                    param1: com.carto.geometry.Geometry,
                    param2: number,
                    param3: com.carto.styles.BalloonPopupStyle,
                    param4: string,
                    param5: string
                ): number;
                public static delete_BalloonPopup(param0: number): void;
                public static new_BalloonPopup__SWIG_0(
                    param0: number,
                    param1: com.carto.vectorelements.Billboard,
                    param2: number,
                    param3: com.carto.styles.BalloonPopupStyle,
                    param4: string,
                    param5: string
                ): number;
                public static BalloonPopup_getStyle(param0: number, param1: com.carto.vectorelements.BalloonPopup): number;
                public static BalloonPopup_SWIGSmartPtrUpcast(param0: number): number;
                public constructor();
                public static new_BalloonPopup__SWIG_2(
                    param0: number,
                    param1: com.carto.core.MapPos,
                    param2: number,
                    param3: com.carto.styles.BalloonPopupStyle,
                    param4: string,
                    param5: string
                ): number;
                public static BalloonPopup_getDescription(param0: number, param1: com.carto.vectorelements.BalloonPopup): string;
                public static BalloonPopup_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.BalloonPopup): number;
                public static BalloonPopup_setTitle(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: string): void;
                public static BalloonPopup_setDescription(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: string): void;
                public static BalloonPopup_setStyle(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: number, param3: com.carto.styles.BalloonPopupStyle): void;
                public static BalloonPopup_swigGetClassName(param0: number, param1: com.carto.vectorelements.BalloonPopup): string;
                public static BalloonPopup_drawBitmap(
                    param0: number,
                    param1: com.carto.vectorelements.BalloonPopup,
                    param2: number,
                    param3: com.carto.core.ScreenPos,
                    param4: number,
                    param5: number,
                    param6: number
                ): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Billboard extends com.carto.vectorelements.VectorElement {
                public getRootGeometry(): com.carto.geometry.Geometry;
                public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getBounds(): com.carto.core.MapBounds;
                public setPos(param0: com.carto.core.MapPos): void;
                public swigGetClassName(): string;
                public swigGetRawPtr(): number;
                public delete(): void;
                public setBaseBillboard(param0: com.carto.vectorelements.Billboard): void;
                public setGeometry(param0: com.carto.geometry.Geometry): void;
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public getRotation(): number;
                public setRotation(param0: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
                public getBaseBillboard(): com.carto.vectorelements.Billboard;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
                public getGeometry(): com.carto.geometry.Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class CustomPopup extends com.carto.vectorelements.Popup {
                public static getCPtr(param0: com.carto.vectorelements.CustomPopup): number;
                public static getCPtr(param0: com.carto.vectorelements.Popup): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Popup;
                public constructor(param0: com.carto.vectorelements.Billboard, param1: com.carto.styles.PopupStyle, param2: com.carto.vectorelements.CustomPopupHandler);
                public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
                public getPopupHandler(): com.carto.vectorelements.CustomPopupHandler;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.CustomPopup;
                public swigGetClassName(): string;
                public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.PopupStyle, param2: com.carto.vectorelements.CustomPopupHandler);
                public drawBitmap(param0: com.carto.core.ScreenPos, param1: number, param2: number, param3: number): com.carto.graphics.Bitmap;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.PopupStyle, param2: com.carto.vectorelements.CustomPopupHandler);
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
                public processClick(param0: com.carto.ui.ClickType, param1: com.carto.core.MapPos, param2: com.carto.core.ScreenPos): boolean;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class CustomPopupHandler extends javalangObject {
                public swigCMemOwn: boolean;
                public swigReleaseOwnership(): void;
                public swigDirectorDisconnect(): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public constructor();
                public swigGetRawPtr(): number;
                public static getCPtr(param0: com.carto.vectorelements.CustomPopupHandler): number;
                public onPopupClicked(param0: com.carto.ui.PopupClickInfo): boolean;
                public delete(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.CustomPopupHandler;
                public swigTakeOwnership(): void;
                public swigGetDirectorObject(): javalangObject;
                public onDrawPopup(param0: com.carto.ui.PopupDrawInfo): com.carto.graphics.Bitmap;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class GeometryCollection extends com.carto.vectorelements.VectorElement {
                public setGeometry(param0: com.carto.geometry.MultiGeometry): void;
                public static getCPtr(param0: com.carto.vectorelements.GeometryCollection): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public constructor(param0: com.carto.geometry.MultiGeometry, param1: com.carto.styles.GeometryCollectionStyle);
                public swigGetClassName(): string;
                public getGeometry(): com.carto.geometry.MultiGeometry;
                public getStyle(): com.carto.styles.GeometryCollectionStyle;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.GeometryCollection;
                public delete(): void;
                public setStyle(param0: com.carto.styles.GeometryCollectionStyle): void;
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
                public getGeometry(): com.carto.geometry.Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Label extends com.carto.vectorelements.Billboard {
                public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Label;
                public constructor(param0: number, param1: boolean);
                public setStyle(param0: com.carto.styles.LabelStyle): void;
                public swigGetClassName(): string;
                public drawBitmap(param0: number): com.carto.graphics.Bitmap;
                public static getCPtr(param0: com.carto.vectorelements.Label): number;
                public swigGetRawPtr(): number;
                public getStyle(): com.carto.styles.LabelStyle;
                public delete(): void;
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Line extends com.carto.vectorelements.VectorElement {
                public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.styles.LineStyle);
                public setStyle(param0: com.carto.styles.LineStyle): void;
                public getGeometry(): com.carto.geometry.LineGeometry;
                public getStyle(): com.carto.styles.LineStyle;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.vectorelements.Line): number;
                public setPoses(param0: com.carto.core.MapPosVector): void;
                public swigGetClassName(): string;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
                public constructor(param0: com.carto.geometry.LineGeometry, param1: com.carto.styles.LineStyle);
                public setGeometry(param0: com.carto.geometry.LineGeometry): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Line;
                public getGeometry(): com.carto.geometry.Geometry;
                public getPoses(): com.carto.core.MapPosVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Marker extends com.carto.vectorelements.Billboard {
                public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.MarkerStyle);
                public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.vectorelements.Marker): number;
                public swigGetClassName(): string;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Marker;
                public constructor(param0: com.carto.vectorelements.Billboard, param1: com.carto.styles.MarkerStyle);
                public swigGetRawPtr(): number;
                public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.MarkerStyle);
                public delete(): void;
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
                public getStyle(): com.carto.styles.MarkerStyle;
                public setStyle(param0: com.carto.styles.MarkerStyle): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class NMLModel extends com.carto.vectorelements.VectorElement {
                public static getCPtr(param0: com.carto.vectorelements.NMLModel): number;
                public getScale(): number;
                public finalize(): void;
                public getRotationAxis(): com.carto.core.MapVec;
                public setScale(param0: number): void;
                public constructor(param0: number, param1: boolean);
                public getBounds(): com.carto.core.MapBounds;
                public setPos(param0: com.carto.core.MapPos): void;
                public constructor(param0: com.carto.core.MapPos, param1: com.carto.core.BinaryData);
                public getRotationAngle(): number;
                public setRotation(param0: com.carto.core.MapVec, param1: number): void;
                public swigGetClassName(): string;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.NMLModel;
                public delete(): void;
                public setGeometry(param0: com.carto.geometry.Geometry): void;
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
                public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.core.BinaryData);
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Point extends com.carto.vectorelements.VectorElement {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Point;
                public static getCPtr(param0: com.carto.vectorelements.Point): number;
                public getStyle(): com.carto.styles.PointStyle;
                public finalize(): void;
                public constructor(param0: com.carto.geometry.PointGeometry, param1: com.carto.styles.PointStyle);
                public constructor(param0: number, param1: boolean);
                public setPos(param0: com.carto.core.MapPos): void;
                public getPos(): com.carto.core.MapPos;
                public swigGetClassName(): string;
                public swigGetRawPtr(): number;
                public getGeometry(): com.carto.geometry.PointGeometry;
                public delete(): void;
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public setStyle(param0: com.carto.styles.PointStyle): void;
                public setGeometry(param0: com.carto.geometry.PointGeometry): void;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
                public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.PointStyle);
                public getGeometry(): com.carto.geometry.Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Polygon extends com.carto.vectorelements.VectorElement {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Polygon;
                public getHoles(): com.carto.core.MapPosVectorVector;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setGeometry(param0: com.carto.geometry.PolygonGeometry): void;
                public setHoles(param0: com.carto.core.MapPosVectorVector): void;
                public setPoses(param0: com.carto.core.MapPosVector): void;
                public swigGetClassName(): string;
                public constructor(param0: com.carto.geometry.PolygonGeometry, param1: com.carto.styles.PolygonStyle);
                public getStyle(): com.carto.styles.PolygonStyle;
                public getGeometry(): com.carto.geometry.PolygonGeometry;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.styles.PolygonStyle);
                public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.core.MapPosVectorVector, param2: com.carto.styles.PolygonStyle);
                public static getCPtr(param0: com.carto.vectorelements.Polygon): number;
                public setStyle(param0: com.carto.styles.PolygonStyle): void;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
                public getGeometry(): com.carto.geometry.Geometry;
                public getPoses(): com.carto.core.MapPosVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Polygon3D extends com.carto.vectorelements.VectorElement {
                public setHeight(param0: number): void;
                public getHeight(): number;
                public getHoles(): com.carto.core.MapPosVectorVector;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Polygon3D;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public setGeometry(param0: com.carto.geometry.PolygonGeometry): void;
                public setHoles(param0: com.carto.core.MapPosVectorVector): void;
                public setPoses(param0: com.carto.core.MapPosVector): void;
                public swigGetClassName(): string;
                public getStyle(): com.carto.styles.Polygon3DStyle;
                public setStyle(param0: com.carto.styles.Polygon3DStyle): void;
                public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.core.MapPosVectorVector, param2: com.carto.styles.Polygon3DStyle, param3: number);
                public getGeometry(): com.carto.geometry.PolygonGeometry;
                public swigGetRawPtr(): number;
                public delete(): void;
                public constructor(param0: com.carto.geometry.PolygonGeometry, param1: com.carto.styles.Polygon3DStyle, param2: number);
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.styles.Polygon3DStyle, param2: number);
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.vectorelements.Polygon3D): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
                public getGeometry(): com.carto.geometry.Geometry;
                public getPoses(): com.carto.core.MapPosVector;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Popup extends com.carto.vectorelements.Billboard {
                public static getCPtr(param0: com.carto.vectorelements.Popup): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Popup;
                public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getStyle(): com.carto.styles.PopupStyle;
                public getAnchorPointY(): number;
                public swigGetClassName(): string;
                public setAnchorPointY(param0: number): void;
                public drawBitmap(param0: com.carto.core.ScreenPos, param1: number, param2: number, param3: number): com.carto.graphics.Bitmap;
                public setAnchorPointX(param0: number): void;
                public setStyle(param0: com.carto.styles.PopupStyle): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public setAnchorPoint(param0: number, param1: number): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
                public getAnchorPointX(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class Text extends com.carto.vectorelements.Label {
                public constructor(param0: com.carto.vectorelements.Billboard, param1: com.carto.styles.TextStyle, param2: string);
                public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Label;
                public constructor(param0: number, param1: boolean);
                public setStyle(param0: com.carto.styles.LabelStyle): void;
                public swigGetClassName(): string;
                public drawBitmap(param0: number): com.carto.graphics.Bitmap;
                public getText(): string;
                public static getCPtr(param0: com.carto.vectorelements.Label): number;
                public swigGetRawPtr(): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Text;
                public getStyle(): com.carto.styles.LabelStyle;
                public delete(): void;
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
                public static getCPtr(param0: com.carto.vectorelements.Text): number;
                public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.TextStyle, param2: string);
                public swigGetDirectorObject(): javalangObject;
                public getStyle(): com.carto.styles.TextStyle;
                public setStyle(param0: com.carto.styles.TextStyle): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
                public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.TextStyle, param2: string);
                public setText(param0: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class VectorElement extends javalangObject {
                public swigCMemOwn: boolean;
                public setMetaData(param0: com.carto.core.StringVariantMap): void;
                public isVisible(): boolean;
                public notifyElementChanged(): void;
                public getId(): number;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public getBounds(): com.carto.core.MapBounds;
                public swigGetClassName(): string;
                public getMetaDataElement(param0: string): com.carto.core.Variant;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public setMetaDataElement(param0: string, param1: com.carto.core.Variant): void;
                public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
                public hashCode(): number;
                public setId(param0: number): void;
                public swigGetDirectorObject(): javalangObject;
                public getMetaData(): com.carto.core.StringVariantMap;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
                public containsMetaDataKey(param0: string): boolean;
                public setVisible(param0: boolean): void;
                public getGeometry(): com.carto.geometry.Geometry;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectorelements {
            export class VectorElementVector extends javalangObject {
                public swigCMemOwn: boolean;
                public get(param0: number): com.carto.vectorelements.VectorElement;
                public add(param0: com.carto.vectorelements.VectorElement): void;
                public finalize(): void;
                public constructor(param0: number, param1: boolean);
                public static getCPtr(param0: com.carto.vectorelements.VectorElementVector): number;
                public constructor();
                public size(): number;
                public reserve(param0: number): void;
                public swigGetRawPtr(): number;
                public delete(): void;
                public capacity(): number;
                public clear(): void;
                public constructor(param0: number);
                public set(param0: number, param1: com.carto.vectorelements.VectorElement): void;
                public isEmpty(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectortiles {
            export class CartoVectorTileDecoder extends com.carto.vectortiles.VectorTileDecoder {
                public setLayerStyleSet(param0: string, param1: com.carto.styles.CartoCSSStyleSet): void;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.VectorTileDecoder;
                public constructor(param0: com.carto.core.StringVector, param1: com.carto.styles.StringCartoCSSStyleSetMap);
                public setLayerVisible(param0: string, param1: boolean): void;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getMaxZoom(): number;
                public swigGetRawPtr(): number;
                public isLayerVisible(param0: string): boolean;
                public static getCPtr(param0: com.carto.vectortiles.CartoVectorTileDecoder): number;
                public delete(): void;
                public getLayerStyleSet(param0: string): com.carto.styles.CartoCSSStyleSet;
                public swigGetDirectorObject(): javalangObject;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.CartoVectorTileDecoder;
                public getLayerIds(): com.carto.core.StringVector;
                public static getCPtr(param0: com.carto.vectortiles.VectorTileDecoder): number;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectortiles {
            export class MBVectorTileDecoder extends com.carto.vectortiles.VectorTileDecoder {
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.MBVectorTileDecoder;
                public constructor(param0: com.carto.styles.CartoCSSStyleSet);
                public getCartoCSSStyleSet(): com.carto.styles.CartoCSSStyleSet;
                public getStyleParameters(): com.carto.core.StringVector;
                public constructor(param0: com.carto.styles.CompiledStyleSet);
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.VectorTileDecoder;
                public setCartoCSSStyleSet(param0: com.carto.styles.CartoCSSStyleSet): void;
                public constructor(param0: number, param1: boolean);
                public setCompiledStyleSet(param0: com.carto.styles.CompiledStyleSet): void;
                public getCompiledStyleSet(): com.carto.styles.CompiledStyleSet;
                public swigGetClassName(): string;
                public static getCPtr(param0: com.carto.vectortiles.MBVectorTileDecoder): number;
                public setStyleParameter(param0: string, param1: string): boolean;
                public getMaxZoom(): number;
                public getStyleParameter(param0: string): string;
                public swigGetRawPtr(): number;
                public delete(): void;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.vectortiles.VectorTileDecoder): number;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectortiles {
            export class TorqueTileDecoder extends com.carto.vectortiles.VectorTileDecoder {
                public constructor(param0: com.carto.styles.CartoCSSStyleSet);
                public getStyleSet(): com.carto.styles.CartoCSSStyleSet;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.VectorTileDecoder;
                public constructor(param0: number, param1: boolean);
                public getFrameCount(): number;
                public swigGetClassName(): string;
                public setResolution(param0: number): void;
                public getMaxZoom(): number;
                public setStyleSet(param0: com.carto.styles.CartoCSSStyleSet): void;
                public swigGetRawPtr(): number;
                public getResolution(): number;
                public static getCPtr(param0: com.carto.vectortiles.TorqueTileDecoder): number;
                public delete(): void;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.vectortiles.VectorTileDecoder): number;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.TorqueTileDecoder;
                public getMinZoom(): number;
            }
        }
    }
}

declare namespace com {
    export namespace carto {
        export namespace vectortiles {
            export class VectorTileDecoder extends javalangObject {
                public swigCMemOwn: boolean;
                public finalize(): void;
                public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.VectorTileDecoder;
                public constructor(param0: number, param1: boolean);
                public swigGetClassName(): string;
                public getMaxZoom(): number;
                public swigGetRawPtr(): number;
                public delete(): void;
                public equals(param0: javalangObject): boolean;
                public notifyDecoderChanged(): void;
                public hashCode(): number;
                public swigGetDirectorObject(): javalangObject;
                public static getCPtr(param0: com.carto.vectortiles.VectorTileDecoder): number;
                public getMinZoom(): number;
            }
        }
    }
}
