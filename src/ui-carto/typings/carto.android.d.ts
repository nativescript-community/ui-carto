/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module carto {
		export class BuildConfig extends java.lang.Object {
			public static class: java.lang.Class<com.carto.BuildConfig>;
			public static DEBUG: boolean;
			public static LIBRARY_PACKAGE_NAME: string;
			public static BUILD_TYPE: string;
			public constructor();
		}
	}
}

declare module com {
	export module carto {
		export module components {
			export class Layers extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.Layers>;
				public insert(param0: number, param1: com.carto.layers.Layer): void;
				public constructor(param0: number, param1: boolean);
				public set(param0: number, param1: com.carto.layers.Layer): void;
				public removeAll(param0: com.carto.layers.LayerVector): boolean;
				public remove(param0: com.carto.layers.Layer): boolean;
				public swigGetRawPtr(): number;
				public get(param0: number): com.carto.layers.Layer;
				public addAll(param0: com.carto.layers.LayerVector): void;
				public hashCode(): number;
				public getAll(): com.carto.layers.LayerVector;
				public equals(param0: any): boolean;
				public clear(): void;
				public setAll(param0: com.carto.layers.LayerVector): void;
				public add(param0: com.carto.layers.Layer): void;
				public count(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module components {
			export class LicenseManagerListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.LicenseManagerListener>;
				public constructor(param0: number, param1: boolean);
				public onLicenseUpdated(param0: string): void;
				public constructor();
				public swigGetRawPtr(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module components {
			export class Options extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.Options>;
				public setTileThreadPoolSize(param0: number): void;
				public setRenderProjectionMode(param0: com.carto.components.RenderProjectionMode): void;
				public setDoubleClickMaxDuration(param0: number): void;
				public setDPI(param0: number): void;
				public isDoubleClickDetection(): boolean;
				public setWatermarkAlignmentY(param0: number): void;
				public setUserInput(param0: boolean): void;
				public getPivotMode(): com.carto.components.PivotMode;
				public setEnvelopeThreadPoolSize(param0: number): void;
				public isRotatable(): boolean;
				public setWatermarkPadding(param0: com.carto.core.ScreenPos): void;
				public setBackgroundBitmap(param0: com.carto.graphics.Bitmap): void;
				public getWatermarkBitmap(): com.carto.graphics.Bitmap;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getBackgroundBitmap(): com.carto.graphics.Bitmap;
				public getDoubleClickMaxDuration(): number;
				public getSkyColor(): com.carto.graphics.Color;
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
				public getLongClickDuration(): number;
				public setRotatable(param0: boolean): void;
				public isSeamlessPanning(): boolean;
				public setRotationGestures(param0: boolean): void;
				public setWatermarkBitmap(param0: com.carto.graphics.Bitmap): void;
				public setTiltGestureReversed(param0: boolean): void;
				public isClickTypeDetection(): boolean;
				public setDoubleClickDetection(param0: boolean): void;
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
				public getRenderProjectionMode(): com.carto.components.RenderProjectionMode;
				public setLongClickDuration(param0: number): void;
				public getWatermarkScale(): number;
				public isKineticRotation(): boolean;
				public setPivotMode(param0: com.carto.components.PivotMode): void;
				public isUserInput(): boolean;
				public setPanBounds(param0: com.carto.core.MapBounds): void;
				public getWatermarkAlignmentX(): number;
				public getClearColor(): com.carto.graphics.Color;
				public getTiltRange(): com.carto.core.MapRange;
				public setPanningMode(param0: com.carto.components.PanningMode): void;
				public setKineticPan(param0: boolean): void;
				public getWatermarkPadding(): com.carto.core.ScreenPos;
				public isKineticZoom(): boolean;
				public getDPI(): number;
				public getWatermarkAlignmentY(): number;
				public setZoomRange(param0: com.carto.core.MapRange): void;
				public getBaseProjection(): com.carto.projections.Projection;
				public isRotationGestures(): boolean;
				public constructor(param0: number, param1: boolean);
				public setSkyColor(param0: com.carto.graphics.Color): void;
				public isKineticPan(): boolean;
				public getZoomRange(): com.carto.core.MapRange;
				public setDrawDistance(param0: number): void;
				public getPanningMode(): com.carto.components.PanningMode;
				public swigGetRawPtr(): number;
				public getMainLightDirection(): com.carto.core.MapVec;
				public getMainLightColor(): com.carto.graphics.Color;
				public getTileDrawSize(): number;
				public isRestrictedPanning(): boolean;
				public setWatermarkScale(param0: number): void;
				public setKineticZoom(param0: boolean): void;
				public getEnvelopeThreadPoolSize(): number;
				public setFocusPointOffset(param0: com.carto.core.ScreenPos): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module components {
			export class PanningMode {
				public static class: java.lang.Class<com.carto.components.PanningMode>;
				public static PANNING_MODE_FREE: com.carto.components.PanningMode;
				public static PANNING_MODE_STICKY: com.carto.components.PanningMode;
				public static PANNING_MODE_STICKY_FINAL: com.carto.components.PanningMode;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.components.PanningMode;
				public static values(): androidNative.Array<com.carto.components.PanningMode>;
				public static valueOf(param0: string): com.carto.components.PanningMode;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module PanningMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.components.PanningMode.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module components {
			export class PivotMode {
				public static class: java.lang.Class<com.carto.components.PivotMode>;
				public static PIVOT_MODE_TOUCHPOINT: com.carto.components.PivotMode;
				public static PIVOT_MODE_CENTERPOINT: com.carto.components.PivotMode;
				public static values(): androidNative.Array<com.carto.components.PivotMode>;
				public static valueOf(param0: string): com.carto.components.PivotMode;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.components.PivotMode;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module PivotMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.components.PivotMode.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module components {
			export class RenderProjectionMode {
				public static class: java.lang.Class<com.carto.components.RenderProjectionMode>;
				public static RENDER_PROJECTION_MODE_PLANAR: com.carto.components.RenderProjectionMode;
				public static RENDER_PROJECTION_MODE_SPHERICAL: com.carto.components.RenderProjectionMode;
				public static values(): androidNative.Array<com.carto.components.RenderProjectionMode>;
				public swigValue(): number;
				public static valueOf(param0: string): com.carto.components.RenderProjectionMode;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static swigToEnum(param0: number): com.carto.components.RenderProjectionMode;
			}
			export module RenderProjectionMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.components.RenderProjectionMode.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module core {
			export class Address extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.Address>;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: com.carto.core.StringVector);
				public getStreet(): string;
				public getCountry(): string;
				public getCounty(): string;
				public constructor(param0: number, param1: boolean);
				public getName(): string;
				public getCategories(): com.carto.core.StringVector;
				public toString(): string;
				public getNeighbourhood(): string;
				public constructor();
				public swigGetRawPtr(): number;
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



declare module com {
	export module carto {
		export module core {
			export class BinaryData extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.BinaryData>;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public constructor(param0: androidNative.Array<number>);
				public equals(param0: any): boolean;
				public getData(): androidNative.Array<number>;
				public constructor(param0: number, param1: boolean);
				public toString(): string;
				public constructor();
				public size(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class DoubleVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.DoubleVector>;
				public constructor(param0: number, param1: boolean);
				public get(param0: number): number;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
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



declare module com {
	export module carto {
		export module core {
			export class IntVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.IntVector>;
				public constructor(param0: number, param1: boolean);
				public get(param0: number): number;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
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



declare module com {
	export module carto {
		export module core {
			export class MapBounds extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapBounds>;
				public getMax(): com.carto.core.MapPos;
				public contains(param0: com.carto.core.MapPos): boolean;
				public constructor(param0: number, param1: boolean);
				public getCenter(): com.carto.core.MapPos;
				public toString(): string;
				public intersects(param0: com.carto.core.MapBounds): boolean;
				public shrinkToIntersection(param0: com.carto.core.MapBounds): void;
				public constructor();
				public getMin(): com.carto.core.MapPos;
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.core.MapPos);
				public swigGetRawPtr(): number;
				public getDelta(): com.carto.core.MapVec;
				public hashCode(): number;
				public contains(param0: com.carto.core.MapBounds): boolean;
				public equals(param0: any): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class MapEnvelope extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapEnvelope>;
				public constructor(param0: number, param1: boolean);
				public getBounds(): com.carto.core.MapBounds;
				public contains(param0: com.carto.core.MapEnvelope): boolean;
				public toString(): string;
				public constructor();
				public intersects(param0: com.carto.core.MapEnvelope): boolean;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.core.MapPosVector);
				public hashCode(): number;
				public constructor(param0: com.carto.core.MapBounds);
				public equals(param0: any): boolean;
				public getConvexHull(): com.carto.core.MapPosVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class MapPos extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapPos>;
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: number);
				public subVec(param0: com.carto.core.MapVec): com.carto.core.MapPos;
				public add(param0: com.carto.core.MapVec): com.carto.core.MapPos;
				public getY(): number;
				public constructor(param0: number, param1: boolean);
				public toString(): string;
				public subPos(param0: com.carto.core.MapPos): com.carto.core.MapVec;
				public constructor();
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public getX(): number;
				public equals(param0: any): boolean;
				public getZ(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class MapPosVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapPosVector>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public get(param0: number): com.carto.core.MapPos;
				public swigGetRawPtr(): number;
				public add(param0: com.carto.core.MapPos): void;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
				public set(param0: number, param1: com.carto.core.MapPos): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module core {
			export class MapPosVectorVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapPosVectorVector>;
				public constructor(param0: number, param1: boolean);
				public add(param0: com.carto.core.MapPosVector): void;
				public set(param0: number, param1: com.carto.core.MapPosVector): void;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public get(param0: number): com.carto.core.MapPosVector;
				public swigGetRawPtr(): number;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module core {
			export class MapRange extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapRange>;
				public constructor(param0: number, param1: number);
				public getMin(): number;
				public length(): number;
				public constructor(param0: number, param1: boolean);
				public toString(): string;
				public inRange(param0: number): boolean;
				public constructor();
				public getMax(): number;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public getMidrange(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class MapTile extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapTile>;
				public getTileId(): number;
				public getZoom(): number;
				public getY(): number;
				public constructor(param0: number, param1: boolean);
				public toString(): string;
				public constructor();
				public swigGetRawPtr(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public hashCode(): number;
				public getX(): number;
				public equals(param0: any): boolean;
				public getFrameNr(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class MapVec extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapVec>;
				public constructor(param0: number, param1: number);
				public mul(param0: number): com.carto.core.MapVec;
				public constructor(param0: number, param1: number, param2: number);
				public crossProduct3D(param0: com.carto.core.MapVec): com.carto.core.MapVec;
				public getY(): number;
				public length(): number;
				public constructor(param0: number, param1: boolean);
				public sub(param0: com.carto.core.MapVec): com.carto.core.MapVec;
				public crossProduct2D(param0: com.carto.core.MapVec): number;
				public toString(): string;
				public constructor();
				public swigGetRawPtr(): number;
				public dotProduct(param0: com.carto.core.MapVec): number;
				public hashCode(): number;
				public getX(): number;
				public div(param0: number): com.carto.core.MapVec;
				public equals(param0: any): boolean;
				public getZ(): number;
				public add(param0: com.carto.core.MapVec): com.carto.core.MapVec;
				public getNormalized(): com.carto.core.MapVec;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class ScreenBounds extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.ScreenBounds>;
				public intersects(param0: com.carto.core.ScreenBounds): boolean;
				public getHeight(): number;
				public getMin(): com.carto.core.ScreenPos;
				public constructor(param0: com.carto.core.ScreenPos, param1: com.carto.core.ScreenPos);
				public constructor(param0: number, param1: boolean);
				public toString(): string;
				public constructor();
				public getCenter(): com.carto.core.ScreenPos;
				public swigGetRawPtr(): number;
				public getWidth(): number;
				public contains(param0: com.carto.core.ScreenBounds): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getMax(): com.carto.core.ScreenPos;
				public contains(param0: com.carto.core.ScreenPos): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class ScreenPos extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.ScreenPos>;
				public constructor(param0: number, param1: number);
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public getX(): number;
				public getY(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public toString(): string;
				public constructor();
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class ScreenPosVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.ScreenPosVector>;
				public set(param0: number, param1: com.carto.core.ScreenPos): void;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
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

declare module com {
	export module carto {
		export module core {
			export class StringMap extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.StringMap>;
				public get(param0: string): string;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.core.StringMap);
				public set(param0: string, param1: string): void;
				public del(param0: string): void;
				public constructor();
				public size(): number;
				public get_key(param0: number): string;
				public swigGetRawPtr(): number;
				public clear(): void;
				public has_key(param0: string): boolean;
				public empty(): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class StringVariantMap extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.StringVariantMap>;
				public set(param0: string, param1: com.carto.core.Variant): void;
				public constructor(param0: number, param1: boolean);
				public get(param0: string): com.carto.core.Variant;
				public del(param0: string): void;
				public constructor();
				public constructor(param0: com.carto.core.StringVariantMap);
				public size(): number;
				public get_key(param0: number): string;
				public swigGetRawPtr(): number;
				public clear(): void;
				public has_key(param0: string): boolean;
				public empty(): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module core {
			export class StringVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.StringVector>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public add(param0: string): void;
				public swigGetRawPtr(): number;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
				public get(param0: number): string;
				public set(param0: number, param1: string): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class Variant extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.Variant>;
				public constructor(param0: com.carto.core.VariantVector);
				public getBool(): boolean;
				public constructor(param0: boolean);
				public getObjectKeys(): com.carto.core.StringVector;
				public constructor(param0: string);
				public constructor();
				public constructor(param0: com.carto.core.StringVariantMap);
				public hashCode(): number;
				public getType(): com.carto.core.VariantType;
				public equals(param0: any): boolean;
				public getString(): string;
				public constructor(param0: number, param1: boolean);
				public toString(): string;
				public static fromString(param0: string): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public getDouble(): number;
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

declare module com {
	export module carto {
		export module core {
			export class VariantArrayBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.VariantArrayBuilder>;
				public buildVariant(): com.carto.core.Variant;
				public constructor(param0: number, param1: boolean);
				public addLong(param0: number): void;
				public constructor();
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public addBool(param0: boolean): void;
				public equals(param0: any): boolean;
				public clear(): void;
				public addDouble(param0: number): void;
				public addString(param0: string): void;
				public addVariant(param0: com.carto.core.Variant): void;
			}
		}
	}
}





declare module com {
	export module carto {
		export module core {
			export class VariantObjectBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.VariantObjectBuilder>;
				public buildVariant(): com.carto.core.Variant;
				public setBool(param0: string, param1: boolean): void;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public setVariant(param0: string, param1: com.carto.core.Variant): void;
				public equals(param0: any): boolean;
				public clear(): void;
				public setDouble(param0: string, param1: number): void;
				public setLong(param0: string, param1: number): void;
				public setString(param0: string, param1: string): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class VariantType {
				public static class: java.lang.Class<com.carto.core.VariantType>;
				public static VARIANT_TYPE_NULL: com.carto.core.VariantType;
				public static VARIANT_TYPE_STRING: com.carto.core.VariantType;
				public static VARIANT_TYPE_BOOL: com.carto.core.VariantType;
				public static VARIANT_TYPE_INTEGER: com.carto.core.VariantType;
				public static VARIANT_TYPE_DOUBLE: com.carto.core.VariantType;
				public static VARIANT_TYPE_ARRAY: com.carto.core.VariantType;
				public static VARIANT_TYPE_OBJECT: com.carto.core.VariantType;
				public swigValue(): number;
				public static valueOf(param0: string): com.carto.core.VariantType;
				public static values(): androidNative.Array<com.carto.core.VariantType>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static swigToEnum(param0: number): com.carto.core.VariantType;
			}
			export module VariantType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.core.VariantType.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module core {
			export class VariantVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.VariantVector>;
				public set(param0: number, param1: com.carto.core.Variant): void;
				public constructor(param0: number, param1: boolean);
				public add(param0: com.carto.core.Variant): void;
				public get(param0: number): com.carto.core.Variant;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class AssetTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.AssetTileDataSource>;
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: string);
				public constructor(param0: number, param1: boolean);
				public buildAssetPath(param0: string, param1: com.carto.core.MapTile): string;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public constructor();
				public swigGetRawPtr(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class BitmapOverlayRasterTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.BitmapOverlayRasterTileDataSource>;
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: com.carto.graphics.Bitmap, param3: com.carto.projections.Projection, param4: com.carto.core.MapPosVector, param5: com.carto.core.ScreenPosVector);
				public constructor(param0: number, param1: boolean);
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public constructor();
				public swigGetRawPtr(): number;
				public getDataExtent(): com.carto.core.MapBounds;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class CacheTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.CacheTileDataSource>;
				public constructor(param0: number, param1: number);
				public setCapacity(param0: number): void;
				public getCapacity(): number;
				public constructor(param0: number, param1: boolean);
				public getDataSource(): com.carto.datasources.TileDataSource;
				public getMaxZoom(): number;
				public constructor();
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.TileDataSource);
				public clear(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public notifyTilesChanged(param0: boolean): void;
				public getMinZoom(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class CartoOnlineTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.CartoOnlineTileDataSource>;
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: boolean);
				public getTimeout(): number;
				public setTimeout(param0: number): void;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public constructor(param0: string);
				public constructor();
				public swigGetRawPtr(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class CombinedTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.CombinedTileDataSource>;
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: boolean);
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMaxZoom(): number;
				public constructor();
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.datasources.TileDataSource, param2: number);
				public getDataExtent(): com.carto.core.MapBounds;
				public getMinZoom(): number;
			}
		}
	}
}





declare module com {
	export module carto {
		export module datasources {
			export class GeoJSONVectorTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.GeoJSONVectorTileDataSource>;
				public constructor(param0: number, param1: number);
				public setDefaultLayerBuffer(param0: number): void;
				public setLayerFeatureCollection(param0: number, param1: com.carto.projections.Projection, param2: com.carto.geometry.FeatureCollection): void;
				public deleteLayer(param0: number): void;
				public createLayer(param0: string): number;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public removeGeoJSONFeature(param0: number, param1: com.carto.core.Variant): void;
				public constructor();
				public setSimplifyTolerance(param0: number): void;
				public updateGeoJSONFeature(param0: number, param1: com.carto.core.Variant): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public getSimplifyTolerance(): number;
				public getDefaultLayerBuffer(): number;
				public setLayerGeoJSON(param0: number, param1: com.carto.core.Variant): void;
				public constructor(param0: number, param1: boolean);
				public updateGeoJSONStringFeature(param0: number, param1: string): void;
				public addGeoJSONStringFeature(param0: number, param1: string): void;
				public swigGetRawPtr(): number;
				public setLayerGeoJSONString(param0: number, param1: string): void;
				public addGeoJSONFeature(param0: number, param1: com.carto.core.Variant): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class HTTPTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.HTTPTileDataSource>;
				public constructor(param0: number, param1: number);
				public setTMSScheme(param0: boolean): void;
				public setSubdomains(param0: com.carto.core.StringVector): void;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public constructor();
				public setHTTPHeaders(param0: com.carto.core.StringMap): void;
				public setMaxAgeHeaderCheck(param0: boolean): void;
				public getSubdomains(): com.carto.core.StringVector;
				public isTMSScheme(): boolean;
				public constructor(param0: number, param1: number, param2: string);
				public constructor(param0: number, param1: boolean);
				public getTimeout(): number;
				public setTimeout(param0: number): void;
				public getHTTPHeaders(): com.carto.core.StringMap;
				public buildTileURL(param0: string, param1: com.carto.core.MapTile): string;
				public swigGetRawPtr(): number;
				public isMaxAgeHeaderCheck(): boolean;
				public getBaseURL(): string;
				public setBaseURL(param0: string): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class LocalSpatialIndexType {
				public static class: java.lang.Class<com.carto.datasources.LocalSpatialIndexType>;
				public static LOCAL_SPATIAL_INDEX_TYPE_NULL: com.carto.datasources.LocalSpatialIndexType;
				public static LOCAL_SPATIAL_INDEX_TYPE_KDTREE: com.carto.datasources.LocalSpatialIndexType;
				public static values(): androidNative.Array<com.carto.datasources.LocalSpatialIndexType>;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.datasources.LocalSpatialIndexType;
				public static valueOf(param0: string): com.carto.datasources.LocalSpatialIndexType;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module LocalSpatialIndexType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.datasources.LocalSpatialIndexType.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class LocalVectorDataSource extends com.carto.datasources.VectorDataSource {
				public static class: java.lang.Class<com.carto.datasources.LocalVectorDataSource>;
				public getAll(): com.carto.vectorelements.VectorElementVector;
				public setGeometrySimplifier(param0: com.carto.geometry.GeometrySimplifier): void;
				public constructor(param0: com.carto.projections.Projection);
				public clear(): void;
				public loadElements(param0: com.carto.renderers.components.CullState): com.carto.datasources.components.VectorData;
				public getDataExtent(): com.carto.core.MapBounds;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.datasources.LocalSpatialIndexType);
				public setAll(param0: com.carto.vectorelements.VectorElementVector): void;
				public addAll(param0: com.carto.vectorelements.VectorElementVector): void;
				public removeAll(param0: com.carto.vectorelements.VectorElementVector): boolean;
				public add(param0: com.carto.vectorelements.VectorElement): void;
				public constructor(param0: number, param1: boolean);
				public remove(param0: com.carto.vectorelements.VectorElement): boolean;
				public swigGetRawPtr(): number;
				public getGeometrySimplifier(): com.carto.geometry.GeometrySimplifier;
				public addFeatureCollection(param0: com.carto.geometry.FeatureCollection, param1: com.carto.styles.Style): void;
				public getFeatureCollection(): com.carto.geometry.FeatureCollection;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class MBTilesScheme {
				public static class: java.lang.Class<com.carto.datasources.MBTilesScheme>;
				public static MBTILES_SCHEME_TMS: com.carto.datasources.MBTilesScheme;
				public static MBTILES_SCHEME_XYZ: com.carto.datasources.MBTilesScheme;
				public static valueOf(param0: string): com.carto.datasources.MBTilesScheme;
				public static swigToEnum(param0: number): com.carto.datasources.MBTilesScheme;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.datasources.MBTilesScheme>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module MBTilesScheme {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.datasources.MBTilesScheme.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class MBTilesTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MBTilesTileDataSource>;
				public constructor(param0: number, param1: number);
				public getTileMask(): string;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public constructor(param0: string);
				public constructor();
				public getDataExtent(): com.carto.core.MapBounds;
				public constructor(param0: number, param1: number, param2: string, param3: com.carto.datasources.MBTilesScheme);
				public getMetaData(): com.carto.core.StringMap;
				public constructor(param0: number, param1: number, param2: string);
				public constructor(param0: number, param1: boolean);
				public getMetaData(param0: string): string;
				public getMaxZoom(): number;
				public swigGetRawPtr(): number;
				public getMinZoom(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class MapTilerOnlineTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MapTilerOnlineTileDataSource>;
				public constructor(param0: number, param1: number);
				public getCustomServiceURL(): string;
				public constructor(param0: number, param1: boolean);
				public getTimeout(): number;
				public setTimeout(param0: number): void;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public constructor(param0: string);
				public constructor();
				public setCustomServiceURL(param0: string): void;
				public swigGetRawPtr(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class MemoryCacheTileDataSource extends com.carto.datasources.CacheTileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MemoryCacheTileDataSource>;
				public constructor(param0: number, param1: number);
				public setCapacity(param0: number): void;
				public getCapacity(): number;
				public constructor(param0: number, param1: boolean);
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public constructor();
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.TileDataSource);
				public clear(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class MergedMBVTTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MergedMBVTTileDataSource>;
				public constructor(param0: number, param1: number);
				public getTileMask(): string;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.datasources.TileDataSource);
				public constructor(param0: number, param1: boolean);
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMaxZoom(): number;
				public constructor();
				public swigGetRawPtr(): number;
				public getDataExtent(): com.carto.core.MapBounds;
				public getMinZoom(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class MultiTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MultiTileDataSource>;
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: boolean);
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMaxZoom(): number;
				public constructor();
				public add(param0: com.carto.datasources.TileDataSource, param1: string): void;
				public swigGetRawPtr(): number;
				public constructor(param0: number);
				public getDataExtent(): com.carto.core.MapBounds;
				public remove(param0: com.carto.datasources.TileDataSource): boolean;
				public add(param0: com.carto.datasources.TileDataSource): void;
				public getMinZoom(): number;
			}
		}
	}
}













declare module com {
	export module carto {
		export module datasources {
			export class OrderedTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.OrderedTileDataSource>;
				public constructor(param0: number, param1: number);
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.datasources.TileDataSource);
				public constructor(param0: number, param1: boolean);
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMaxZoom(): number;
				public constructor();
				public swigGetRawPtr(): number;
				public getDataExtent(): com.carto.core.MapBounds;
				public getMinZoom(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class PackageManagerTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.PackageManagerTileDataSource>;
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: boolean);
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getPackageManager(): com.carto.packagemanager.PackageManager;
				public constructor();
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.packagemanager.PackageManager);
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class PersistentCacheTileDataSource extends com.carto.datasources.CacheTileDataSource {
				public static class: java.lang.Class<com.carto.datasources.PersistentCacheTileDataSource>;
				public constructor(param0: number, param1: number);
				public startDownloadArea(param0: com.carto.core.MapBounds, param1: number, param2: number, param3: com.carto.datasources.TileDownloadListener): void;
				public stopAllDownloads(): void;
				public setCapacity(param0: number): void;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public constructor();
				public constructor(param0: com.carto.datasources.TileDataSource, param1: string);
				public isCacheOnlyMode(): boolean;
				public constructor(param0: com.carto.datasources.TileDataSource);
				public clear(): void;
				public setCacheOnlyMode(param0: boolean): void;
				public close(): void;
				public getCapacity(): number;
				public constructor(param0: number, param1: boolean);
				public swigGetRawPtr(): number;
				public isOpen(): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class TileDataSource extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.TileDataSource>;
				public constructor(param0: number, param1: number);
				public getProjection(): com.carto.projections.Projection;
				public getMaxOverzoomLevel(): number;
				public constructor(param0: number, param1: boolean);
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMaxZoom(): number;
				public constructor();
				public swigGetRawPtr(): number;
				public getDataExtent(): com.carto.core.MapBounds;
				public getMaxZoomWithOverzoom(): number;
				public setMaxOverzoomLevel(param0: number): void;
				public isMaxOverzoomLevelSet(): boolean;
				public notifyTilesChanged(param0: boolean): void;
				public getMinZoom(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class TileDownloadListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.TileDownloadListener>;
				public onDownloadCompleted(): void;
				public onDownloadStarting(param0: number): void;
				public constructor(param0: number, param1: boolean);
				public onDownloadProgress(param0: number): void;
				public constructor();
				public swigGetRawPtr(): number;
				public onDownloadFailed(param0: com.carto.core.MapTile): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class VectorDataSource extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.VectorDataSource>;
				public getProjection(): com.carto.projections.Projection;
				public constructor(param0: number, param1: boolean);
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.projections.Projection);
				public loadElements(param0: com.carto.renderers.components.CullState): com.carto.datasources.components.VectorData;
				public getDataExtent(): com.carto.core.MapBounds;
				public notifyElementsChanged(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export module components {
				export class TileData extends java.lang.Object {
					public static class: java.lang.Class<com.carto.datasources.components.TileData>;
					public isOverZoom(): boolean;
					public getData(): com.carto.core.BinaryData;
					public constructor(param0: com.carto.core.BinaryData);
					public isReplaceWithParent(): boolean;
					public swigGetRawPtr(): number;
					public constructor(param0: number, param1: boolean);
					public getMaxAge(): number;
					public equals(param0: any): boolean;
					public setMaxAge(param0: number): void;
					public setReplaceWithParent(param0: boolean): void;
					public setIsOverZoom(param0: boolean): void;
					public hashCode(): number;
				}
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export module components {
				export class VectorData extends java.lang.Object {
					public static class: java.lang.Class<com.carto.datasources.components.VectorData>;
					public equals(param0: any): boolean;
					public constructor(param0: com.carto.vectorelements.VectorElementVector);
					public hashCode(): number;
					public swigGetRawPtr(): number;
					public constructor(param0: number, param1: boolean);
					public getElements(): com.carto.vectorelements.VectorElementVector;
				}
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class GeocodingAddress extends com.carto.core.Address {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingAddress>;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: com.carto.core.StringVector);
				public swigGetRawPtr(): number;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class GeocodingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingRequest>;
				public getProjection(): com.carto.projections.Projection;
				public constructor(param0: number, param1: boolean);
				public setLocation(param0: com.carto.core.MapPos): void;
				public getCustomParameter(param0: string): com.carto.core.Variant;
				public setCustomParameter(param0: string, param1: com.carto.core.Variant): void;
				public toString(): string;
				public getLocationRadius(): number;
				public swigGetRawPtr(): number;
				public setLocationRadius(param0: number): void;
				public hashCode(): number;
				public getQuery(): string;
				public getLocation(): com.carto.core.MapPos;
				public equals(param0: any): boolean;
				public constructor(param0: com.carto.projections.Projection, param1: string);
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class GeocodingResult extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingResult>;
				public getProjection(): com.carto.projections.Projection;
				public constructor(param0: number, param1: boolean);
				public getAddress(): com.carto.geocoding.GeocodingAddress;
				public toString(): string;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public getFeatureCollection(): com.carto.geometry.FeatureCollection;
				public equals(param0: any): boolean;
				public getRank(): number;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.geocoding.GeocodingAddress, param2: number, param3: com.carto.geometry.FeatureCollection);
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class GeocodingResultVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingResultVector>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
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

declare module com {
	export module carto {
		export module geocoding {
			export class GeocodingService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingService>;
				public setAutocomplete(param0: boolean): void;
				public isAutocomplete(): boolean;
				public constructor(param0: number, param1: boolean);
				public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public constructor();
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public setMaxResults(param0: number): void;
				public getMaxResults(): number;
				public getLanguage(): string;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class MapBoxOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MapBoxOnlineGeocodingService>;
				public setAutocomplete(param0: boolean): void;
				public isAutocomplete(): boolean;
				public getCustomServiceURL(): string;
				public constructor(param0: number, param1: boolean);
				public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public constructor(param0: string);
				public constructor();
				public setCustomServiceURL(param0: string): void;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public setMaxResults(param0: number): void;
				public getMaxResults(): number;
				public getLanguage(): string;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class MapBoxOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MapBoxOnlineReverseGeocodingService>;
				public getCustomServiceURL(): string;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: string);
				public constructor();
				public setCustomServiceURL(param0: string): void;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public getLanguage(): string;
				public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class MultiOSMOfflineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MultiOSMOfflineGeocodingService>;
				public remove(param0: string): boolean;
				public setAutocomplete(param0: boolean): void;
				public isAutocomplete(): boolean;
				public constructor(param0: number, param1: boolean);
				public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public constructor();
				public add(param0: string): void;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public setMaxResults(param0: number): void;
				public getMaxResults(): number;
				public getLanguage(): string;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class MultiOSMOfflineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MultiOSMOfflineReverseGeocodingService>;
				public remove(param0: string): boolean;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public add(param0: string): void;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public getLanguage(): string;
				public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class OSMOfflineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.OSMOfflineGeocodingService>;
				public setAutocomplete(param0: boolean): void;
				public isAutocomplete(): boolean;
				public constructor(param0: number, param1: boolean);
				public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public constructor(param0: string);
				public constructor();
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public setMaxResults(param0: number): void;
				public getMaxResults(): number;
				public getLanguage(): string;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class OSMOfflineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.OSMOfflineReverseGeocodingService>;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: string);
				public constructor();
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public getLanguage(): string;
				public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class PackageManagerGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PackageManagerGeocodingService>;
				public setAutocomplete(param0: boolean): void;
				public isAutocomplete(): boolean;
				public constructor(param0: number, param1: boolean);
				public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public constructor();
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public setMaxResults(param0: number): void;
				public getMaxResults(): number;
				public getLanguage(): string;
				public constructor(param0: com.carto.packagemanager.PackageManager);
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class PackageManagerReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PackageManagerReverseGeocodingService>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public getLanguage(): string;
				public constructor(param0: com.carto.packagemanager.PackageManager);
				public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class PeliasOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PeliasOnlineGeocodingService>;
				public setAutocomplete(param0: boolean): void;
				public isAutocomplete(): boolean;
				public getCustomServiceURL(): string;
				public constructor(param0: number, param1: boolean);
				public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public constructor(param0: string);
				public constructor();
				public setCustomServiceURL(param0: string): void;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public setMaxResults(param0: number): void;
				public getMaxResults(): number;
				public getLanguage(): string;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class PeliasOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PeliasOnlineReverseGeocodingService>;
				public getCustomServiceURL(): string;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: string);
				public constructor();
				public setCustomServiceURL(param0: string): void;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public getLanguage(): string;
				public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class ReverseGeocodingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.ReverseGeocodingRequest>;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPos);
				public getProjection(): com.carto.projections.Projection;
				public constructor(param0: number, param1: boolean);
				public setSearchRadius(param0: number): void;
				public getCustomParameter(param0: string): com.carto.core.Variant;
				public setCustomParameter(param0: string, param1: com.carto.core.Variant): void;
				public toString(): string;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public getLocation(): com.carto.core.MapPos;
				public equals(param0: any): boolean;
				public getSearchRadius(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class ReverseGeocodingService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.ReverseGeocodingService>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public getLanguage(): string;
				public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class TomTomOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.TomTomOnlineGeocodingService>;
				public setAutocomplete(param0: boolean): void;
				public isAutocomplete(): boolean;
				public getCustomServiceURL(): string;
				public constructor(param0: number, param1: boolean);
				public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public constructor(param0: string);
				public constructor();
				public setCustomServiceURL(param0: string): void;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public setMaxResults(param0: number): void;
				public getMaxResults(): number;
				public getLanguage(): string;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class TomTomOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.TomTomOnlineReverseGeocodingService>;
				public getCustomServiceURL(): string;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: string);
				public constructor();
				public setCustomServiceURL(param0: string): void;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public getLanguage(): string;
				public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class DouglasPeuckerGeometrySimplifier extends com.carto.geometry.GeometrySimplifier {
				public static class: java.lang.Class<com.carto.geometry.DouglasPeuckerGeometrySimplifier>;
				public swigGetRawPtr(): number;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: number);
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class Feature extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.Feature>;
				public getProperties(): com.carto.core.Variant;
				public constructor(param0: number, param1: boolean);
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.core.Variant);
				public equals(param0: any): boolean;
				public getGeometry(): com.carto.geometry.Geometry;
			}
		}
	}
}

declare module com {
	export module carto {
		export module geometry {
			export class FeatureBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.FeatureBuilder>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public getPropertyValue(param0: string): com.carto.core.Variant;
				public setGeometry(param0: com.carto.geometry.Geometry): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public setPropertyValue(param0: string, param1: com.carto.core.Variant): void;
				public buildFeature(): com.carto.geometry.Feature;
				public getGeometry(): com.carto.geometry.Geometry;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class FeatureCollection extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.FeatureCollection>;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.geometry.FeatureVector);
				public constructor(param0: number, param1: boolean);
				public getFeatureCount(): number;
				public getFeature(param0: number): com.carto.geometry.Feature;
			}
		}
	}
}





declare module com {
	export module carto {
		export module geometry {
			export class FeatureVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.FeatureVector>;
				public get(param0: number): com.carto.geometry.Feature;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
				public capacity(): number;
				public add(param0: com.carto.geometry.Feature): void;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
				public set(param0: number, param1: com.carto.geometry.Feature): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module geometry {
			export class GeoJSONGeometryReader extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeoJSONGeometryReader>;
				public getTargetProjection(): com.carto.projections.Projection;
				public readFeatureCollection(param0: string): com.carto.geometry.FeatureCollection;
				public constructor(param0: number, param1: boolean);
				public setTargetProjection(param0: com.carto.projections.Projection): void;
				public readGeometry(param0: string): com.carto.geometry.Geometry;
				public readFeature(param0: string): com.carto.geometry.Feature;
				public constructor();
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class GeoJSONGeometryWriter extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeoJSONGeometryWriter>;
				public setZ(param0: boolean): void;
				public writeFeature(param0: com.carto.geometry.Feature): string;
				public getZ(): boolean;
				public writeFeatureCollection(param0: com.carto.geometry.FeatureCollection): string;
				public writeGeometry(param0: com.carto.geometry.Geometry): string;
				public constructor(param0: number, param1: boolean);
				public setSourceProjection(param0: com.carto.projections.Projection): void;
				public getSourceProjection(): com.carto.projections.Projection;
				public constructor();
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class Geometry extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.Geometry>;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getCenterPos(): com.carto.core.MapPos;
				public getBounds(): com.carto.core.MapBounds;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class GeometrySimplifier extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeometrySimplifier>;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class GeometryVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeometryVector>;
				public set(param0: number, param1: com.carto.geometry.Geometry): void;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
				public capacity(): number;
				public get(param0: number): com.carto.geometry.Geometry;
				public clear(): void;
				public add(param0: com.carto.geometry.Geometry): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module geometry {
			export class LineGeometry extends com.carto.geometry.Geometry {
				public static class: java.lang.Class<com.carto.geometry.LineGeometry>;
				public constructor(param0: number, param1: boolean);
				public getCenterPos(): com.carto.core.MapPos;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.core.MapPosVector);
				public getPoses(): com.carto.core.MapPosVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class LineGeometryVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.LineGeometryVector>;
				public constructor(param0: number, param1: boolean);
				public set(param0: number, param1: com.carto.geometry.LineGeometry): void;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
				public add(param0: com.carto.geometry.LineGeometry): void;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
				public get(param0: number): com.carto.geometry.LineGeometry;
			}
		}
	}
}

declare module com {
	export module carto {
		export module geometry {
			export class MultiGeometry extends com.carto.geometry.Geometry {
				public static class: java.lang.Class<com.carto.geometry.MultiGeometry>;
				public constructor(param0: number, param1: boolean);
				public getCenterPos(): com.carto.core.MapPos;
				public getGeometry(param0: number): com.carto.geometry.Geometry;
				public constructor(param0: com.carto.geometry.GeometryVector);
				public swigGetRawPtr(): number;
				public getGeometryCount(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class MultiLineGeometry extends com.carto.geometry.MultiGeometry {
				public static class: java.lang.Class<com.carto.geometry.MultiLineGeometry>;
				public constructor(param0: number, param1: boolean);
				public getGeometry(param0: number): com.carto.geometry.Geometry;
				public constructor(param0: com.carto.geometry.GeometryVector);
				public constructor(param0: com.carto.geometry.LineGeometryVector);
				public swigGetRawPtr(): number;
				public getGeometry(param0: number): com.carto.geometry.LineGeometry;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class MultiPointGeometry extends com.carto.geometry.MultiGeometry {
				public static class: java.lang.Class<com.carto.geometry.MultiPointGeometry>;
				public constructor(param0: number, param1: boolean);
				public getGeometry(param0: number): com.carto.geometry.Geometry;
				public getGeometry(param0: number): com.carto.geometry.PointGeometry;
				public constructor(param0: com.carto.geometry.GeometryVector);
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.geometry.PointGeometryVector);
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class MultiPolygonGeometry extends com.carto.geometry.MultiGeometry {
				public static class: java.lang.Class<com.carto.geometry.MultiPolygonGeometry>;
				public constructor(param0: number, param1: boolean);
				public getGeometry(param0: number): com.carto.geometry.Geometry;
				public constructor(param0: com.carto.geometry.GeometryVector);
				public getGeometry(param0: number): com.carto.geometry.PolygonGeometry;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.geometry.PolygonGeometryVector);
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class PointGeometry extends com.carto.geometry.Geometry {
				public static class: java.lang.Class<com.carto.geometry.PointGeometry>;
				public constructor(param0: number, param1: boolean);
				public getCenterPos(): com.carto.core.MapPos;
				public getPos(): com.carto.core.MapPos;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.core.MapPos);
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class PointGeometryVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.PointGeometryVector>;
				public get(param0: number): com.carto.geometry.PointGeometry;
				public constructor(param0: number, param1: boolean);
				public add(param0: com.carto.geometry.PointGeometry): void;
				public set(param0: number, param1: com.carto.geometry.PointGeometry): void;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module geometry {
			export class PolygonGeometry extends com.carto.geometry.Geometry {
				public static class: java.lang.Class<com.carto.geometry.PolygonGeometry>;
				public getHoles(): com.carto.core.MapPosVectorVector;
				public constructor(param0: number, param1: boolean);
				public getCenterPos(): com.carto.core.MapPos;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.core.MapPosVectorVector);
				public constructor(param0: com.carto.core.MapPosVector);
				public getRings(): com.carto.core.MapPosVectorVector;
				public constructor(param0: com.carto.core.MapPosVectorVector);
				public getPoses(): com.carto.core.MapPosVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class PolygonGeometryVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.PolygonGeometryVector>;
				public get(param0: number): com.carto.geometry.PolygonGeometry;
				public constructor(param0: number, param1: boolean);
				public add(param0: com.carto.geometry.PolygonGeometry): void;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
				public set(param0: number, param1: com.carto.geometry.PolygonGeometry): void;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module geometry {
			export class VectorTileFeature extends com.carto.geometry.Feature {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeature>;
				public setDistance(param0: number): void;
				public getId(): number;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: number, param1: com.carto.core.MapTile, param2: string, param3: com.carto.geometry.Geometry, param4: com.carto.core.Variant);
				public getLayerName(): string;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.core.Variant);
				public hashCode(): number;
				public getMapTile(): com.carto.core.MapTile;
				public equals(param0: any): boolean;
				public getDistance(): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module geometry {
			export class VectorTileFeatureBuilder extends com.carto.geometry.FeatureBuilder {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureBuilder>;
				public getId(): number;
				public constructor(param0: number, param1: boolean);
				public buildVectorTileFeature(): com.carto.geometry.VectorTileFeature;
				public getLayerName(): string;
				public constructor();
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public getMapTile(): com.carto.core.MapTile;
				public setMapTile(param0: com.carto.core.MapTile): void;
				public equals(param0: any): boolean;
				public setId(param0: number): void;
				public setLayerName(param0: string): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class VectorTileFeatureCollection extends com.carto.geometry.FeatureCollection {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureCollection>;
				public constructor(param0: number, param1: boolean);
				public getFeature(param0: number): com.carto.geometry.Feature;
				public swigGetRawPtr(): number;
				public getFeature(param0: number): com.carto.geometry.VectorTileFeature;
				public constructor(param0: com.carto.geometry.FeatureVector);
				public constructor(param0: com.carto.geometry.VectorTileFeatureVector);
			}
		}
	}
}





declare module com {
	export module carto {
		export module geometry {
			export class VectorTileFeatureVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureVector>;
				public constructor(param0: number, param1: boolean);
				public get(param0: number): com.carto.geometry.VectorTileFeature;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
				public add(param0: com.carto.geometry.VectorTileFeature): void;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
				public set(param0: number, param1: com.carto.geometry.VectorTileFeature): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module geometry {
			export class WKBGeometryReader extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKBGeometryReader>;
				public constructor(param0: number, param1: boolean);
				public readGeometry(param0: com.carto.core.BinaryData): com.carto.geometry.Geometry;
				public constructor();
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class WKBGeometryWriter extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKBGeometryWriter>;
				public setZ(param0: boolean): void;
				public setBigEndian(param0: boolean): void;
				public writeGeometry(param0: com.carto.geometry.Geometry): com.carto.core.BinaryData;
				public getZ(): boolean;
				public constructor(param0: number, param1: boolean);
				public getBigEndian(): boolean;
				public constructor();
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class WKTGeometryReader extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKTGeometryReader>;
				public constructor(param0: number, param1: boolean);
				public readGeometry(param0: string): com.carto.geometry.Geometry;
				public constructor();
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class WKTGeometryWriter extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKTGeometryWriter>;
				public setZ(param0: boolean): void;
				public getZ(): boolean;
				public writeGeometry(param0: com.carto.geometry.Geometry): string;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}



declare module com {
	export module carto {
		export module graphics {
			export class Bitmap extends java.lang.Object {
				public static class: java.lang.Class<com.carto.graphics.Bitmap>;
				public getHeight(): number;
				public getPaddedBitmap(param0: number, param1: number): com.carto.graphics.Bitmap;
				public getPixelData(): com.carto.core.BinaryData;
				public constructor(param0: number, param1: boolean);
				public static createFromCompressed(param0: com.carto.core.BinaryData): com.carto.graphics.Bitmap;
				public getResizedBitmap(param0: number, param1: number): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public getWidth(): number;
				public getSubBitmap(param0: number, param1: number, param2: number, param3: number): com.carto.graphics.Bitmap;
				public getRGBABitmap(): com.carto.graphics.Bitmap;
				public getColorFormat(): com.carto.graphics.ColorFormat;
				public hashCode(): number;
				public compressToInternal(): com.carto.core.BinaryData;
				public equals(param0: any): boolean;
				public getBytesPerPixel(): number;
				public constructor(param0: com.carto.core.BinaryData, param1: number, param2: number, param3: com.carto.graphics.ColorFormat, param4: number);
				public compressToPNG(): com.carto.core.BinaryData;
			}
		}
	}
}



declare module com {
	export module carto {
		export module graphics {
			export class Color extends java.lang.Object {
				public static class: java.lang.Class<com.carto.graphics.Color>;
				public getR(): number;
				public getA(): number;
				public getB(): number;
				public constructor(param0: number, param1: boolean);
				public toString(): string;
				public constructor();
				public swigGetRawPtr(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number);
				public getG(): number;
				public getARGB(): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module graphics {
			export class ColorFormat {
				public static class: java.lang.Class<com.carto.graphics.ColorFormat>;
				public static COLOR_FORMAT_UNSUPPORTED: com.carto.graphics.ColorFormat;
				public static COLOR_FORMAT_GRAYSCALE: com.carto.graphics.ColorFormat;
				public static COLOR_FORMAT_GRAYSCALE_ALPHA: com.carto.graphics.ColorFormat;
				public static COLOR_FORMAT_RGB: com.carto.graphics.ColorFormat;
				public static COLOR_FORMAT_RGBA: com.carto.graphics.ColorFormat;
				public static COLOR_FORMAT_BGRA: com.carto.graphics.ColorFormat;
				public static COLOR_FORMAT_RGBA_4444: com.carto.graphics.ColorFormat;
				public static COLOR_FORMAT_RGB_565: com.carto.graphics.ColorFormat;
				public static values(): androidNative.Array<com.carto.graphics.ColorFormat>;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.graphics.ColorFormat;
				public static valueOf(param0: string): com.carto.graphics.ColorFormat;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module ColorFormat {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.graphics.ColorFormat.SwigNext>;
				}
			}
		}
	}
}



declare module com {
	export module carto {
		export module graphics {
			export class ViewState extends java.lang.Object {
				public static class: java.lang.Class<com.carto.graphics.ViewState>;
				public getHeight(): number;
				public getZoom(): number;
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
				public hashCode(): number;
				public getRotation(): number;
				public getDPI(): number;
				public equals(param0: any): boolean;
				public getTilt(): number;
				public getZoom0Distance(): number;
				public getDPToPX(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class CartoBaseMapBuildingRenderMode {
				public static class: java.lang.Class<com.carto.layers.CartoBaseMapBuildingRenderMode>;
				public static CARTO_BASEMAP_BUILDING_RENDER_MODE_NONE: com.carto.layers.CartoBaseMapBuildingRenderMode;
				public static CARTO_BASEMAP_BUILDING_RENDER_MODE_2D: com.carto.layers.CartoBaseMapBuildingRenderMode;
				public static CARTO_BASEMAP_BUILDING_RENDER_MODE_3D: com.carto.layers.CartoBaseMapBuildingRenderMode;
				public static swigToEnum(param0: number): com.carto.layers.CartoBaseMapBuildingRenderMode;
				public static values(): androidNative.Array<com.carto.layers.CartoBaseMapBuildingRenderMode>;
				public static valueOf(param0: string): com.carto.layers.CartoBaseMapBuildingRenderMode;
				public swigValue(): number;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module CartoBaseMapBuildingRenderMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.CartoBaseMapBuildingRenderMode.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
			export class CartoBaseMapPOIRenderMode {
				public static class: java.lang.Class<com.carto.layers.CartoBaseMapPOIRenderMode>;
				public static CARTO_BASEMAP_POI_RENDER_MODE_NONE: com.carto.layers.CartoBaseMapPOIRenderMode;
				public static CARTO_BASEMAP_POI_RENDER_MODE_ICON: com.carto.layers.CartoBaseMapPOIRenderMode;
				public static CARTO_BASEMAP_POI_RENDER_MODE_FULL: com.carto.layers.CartoBaseMapPOIRenderMode;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.layers.CartoBaseMapPOIRenderMode>;
				public static swigToEnum(param0: number): com.carto.layers.CartoBaseMapPOIRenderMode;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static valueOf(param0: string): com.carto.layers.CartoBaseMapPOIRenderMode;
			}
			export module CartoBaseMapPOIRenderMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.CartoBaseMapPOIRenderMode.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
			export class CartoBaseMapStyle {
				public static class: java.lang.Class<com.carto.layers.CartoBaseMapStyle>;
				public static CARTO_BASEMAP_STYLE_POSITRON: com.carto.layers.CartoBaseMapStyle;
				public static CARTO_BASEMAP_STYLE_DARKMATTER: com.carto.layers.CartoBaseMapStyle;
				public static CARTO_BASEMAP_STYLE_VOYAGER: com.carto.layers.CartoBaseMapStyle;
				public static values(): androidNative.Array<com.carto.layers.CartoBaseMapStyle>;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.layers.CartoBaseMapStyle;
				public static valueOf(param0: string): com.carto.layers.CartoBaseMapStyle;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module CartoBaseMapStyle {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.CartoBaseMapStyle.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
			export class CartoOfflineVectorTileLayer extends com.carto.layers.CartoVectorTileLayer {
				public static class: java.lang.Class<com.carto.layers.CartoOfflineVectorTileLayer>;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage);
				public constructor(param0: com.carto.packagemanager.CartoPackageManager, param1: com.carto.utils.AssetPackage);
				public constructor(param0: com.carto.packagemanager.CartoPackageManager, param1: com.carto.layers.CartoBaseMapStyle);
				public constructor(param0: number, param1: boolean);
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage, param2: string);
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.layers.CartoBaseMapStyle);
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class CartoOnlineRasterTileLayer extends com.carto.layers.RasterTileLayer {
				public static class: java.lang.Class<com.carto.layers.CartoOnlineRasterTileLayer>;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: string);
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.TileDataSource);
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class CartoOnlineVectorTileLayer extends com.carto.layers.CartoVectorTileLayer {
				public static class: java.lang.Class<com.carto.layers.CartoOnlineVectorTileLayer>;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage);
				public static createDataSource(param0: com.carto.layers.CartoBaseMapStyle): com.carto.datasources.TileDataSource;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: string, param1: com.carto.utils.AssetPackage);
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.layers.CartoBaseMapStyle);
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage, param2: string);
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public constructor(param0: string, param1: com.carto.layers.CartoBaseMapStyle);
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.layers.CartoBaseMapStyle);
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class CartoVectorTileLayer extends com.carto.layers.VectorTileLayer {
				public static class: java.lang.Class<com.carto.layers.CartoVectorTileLayer>;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage);
				public getPOIRenderMode(): com.carto.layers.CartoBaseMapPOIRenderMode;
				public getBuildingRenderMode(): com.carto.layers.CartoBaseMapBuildingRenderMode;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage, param2: string);
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public getFallbackLanguage(): string;
				public setPOIRenderMode(param0: com.carto.layers.CartoBaseMapPOIRenderMode): void;
				public constructor(param0: number, param1: boolean);
				public static createTileDecoder(param0: com.carto.utils.AssetPackage): com.carto.vectortiles.VectorTileDecoder;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public static createTileDecoder(param0: com.carto.utils.AssetPackage, param1: string): com.carto.vectortiles.VectorTileDecoder;
				public setBuildingRenderMode(param0: com.carto.layers.CartoBaseMapBuildingRenderMode): void;
				public getLanguage(): string;
				public static createTileDecoder(param0: com.carto.layers.CartoBaseMapStyle): com.carto.vectortiles.VectorTileDecoder;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.layers.CartoBaseMapStyle);
				public setFallbackLanguage(param0: string): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class ClusterBuilderMode {
				public static class: java.lang.Class<com.carto.layers.ClusterBuilderMode>;
				public static CLUSTER_BUILDER_MODE_ELEMENTS: com.carto.layers.ClusterBuilderMode;
				public static CLUSTER_BUILDER_MODE_ELEMENT_COUNT: com.carto.layers.ClusterBuilderMode;
				public static values(): androidNative.Array<com.carto.layers.ClusterBuilderMode>;
				public static swigToEnum(param0: number): com.carto.layers.ClusterBuilderMode;
				public swigValue(): number;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static valueOf(param0: string): com.carto.layers.ClusterBuilderMode;
			}
			export module ClusterBuilderMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.ClusterBuilderMode.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
			export class ClusterElementBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.ClusterElementBuilder>;
				public constructor(param0: number, param1: boolean);
				public buildClusterElement(param0: com.carto.core.MapPos, param1: number): com.carto.vectorelements.VectorElement;
				public buildClusterElement(param0: com.carto.core.MapPos, param1: com.carto.vectorelements.VectorElementVector): com.carto.vectorelements.VectorElement;
				public constructor();
				public swigGetRawPtr(): number;
				public getBuilderMode(): com.carto.layers.ClusterBuilderMode;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class ClusteredVectorLayer extends com.carto.layers.VectorLayer {
				public static class: java.lang.Class<com.carto.layers.ClusteredVectorLayer>;
				public expandCluster(param0: com.carto.vectorelements.VectorElement, param1: number): boolean;
				public setMaximumClusterZoom(param0: number): void;
				public setAnimatedClusters(param0: boolean): void;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.datasources.VectorDataSource);
				public getMinimumClusterDistance(): number;
				public getMaximumClusterZoom(): number;
				public isAnimatedClusters(): boolean;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.LocalVectorDataSource, param1: com.carto.layers.ClusterElementBuilder);
				public refresh(): void;
				public getClusterElementBuilder(): com.carto.layers.ClusterElementBuilder;
				public setMinimumClusterDistance(param0: number): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class EditableVectorLayer extends com.carto.layers.VectorLayer {
				public static class: java.lang.Class<com.carto.layers.EditableVectorLayer>;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.datasources.VectorDataSource);
				public swigGetRawPtr(): number;
				public getVectorEditEventListener(): com.carto.layers.VectorEditEventListener;
				public getSelectedVectorElement(): com.carto.vectorelements.VectorElement;
				public setVectorEditEventListener(param0: com.carto.layers.VectorEditEventListener): void;
				public setSelectedVectorElement(param0: com.carto.vectorelements.VectorElement): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class HillshadeRasterTileLayer extends com.carto.layers.RasterTileLayer {
				public static class: java.lang.Class<com.carto.layers.HillshadeRasterTileLayer>;
				public setIlluminationMapRotationEnabled(param0: boolean): void;
				public getIlluminationDirection(): com.carto.core.MapVec;
				public setExagerateHeightScaleEnabled(param0: boolean): void;
				public setNormalMapLightingShader(param0: string): void;
				public setIlluminationDirection(param0: com.carto.core.MapVec): void;
				public getElevation(param0: com.carto.core.MapPos): number;
				public getHighlightColor(): com.carto.graphics.Color;
				public constructor(param0: com.carto.datasources.TileDataSource);
				public setContrast(param0: number): void;
				public getShadowColor(): com.carto.graphics.Color;
				public getExagerateHeightScaleEnabled(): boolean;
				public setAccentColor(param0: com.carto.graphics.Color): void;
				public setShadowColor(param0: com.carto.graphics.Color): void;
				public constructor(param0: number, param1: boolean);
				public setHighlightColor(param0: com.carto.graphics.Color): void;
				public getContrast(): number;
				public getAccentColor(): com.carto.graphics.Color;
				public getNormalMapLightingShader(): string;
				public getIlluminationMapRotationEnabled(): boolean;
				public swigGetRawPtr(): number;
				public getHeightScale(): number;
				public getElevations(param0: com.carto.core.MapPosVector): com.carto.core.DoubleVector;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.rastertiles.ElevationDecoder);
				public setHeightScale(param0: number): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class Layer extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.Layer>;
				public setMetaData(param0: com.carto.core.StringVariantMap): void;
				public isVisible(): boolean;
				public setVisibleZoomRange(param0: com.carto.core.MapRange): void;
				public setMetaDataElement(param0: string, param1: com.carto.core.Variant): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public setCullDelay(param0: number): void;
				public isUpdateInProgress(): boolean;
				public getMetaData(): com.carto.core.StringVariantMap;
				public setVisible(param0: boolean): void;
				public getUpdatePriority(): number;
				public update(param0: com.carto.renderers.components.CullState): void;
				public constructor(param0: number, param1: boolean);
				public setOpacity(param0: number): void;
				public setUpdatePriority(param0: number): void;
				public getMetaDataElement(param0: string): com.carto.core.Variant;
				public getVisibleZoomRange(): com.carto.core.MapRange;
				public swigGetRawPtr(): number;
				public simulateClick(param0: com.carto.ui.ClickType, param1: com.carto.core.ScreenPos, param2: com.carto.graphics.ViewState): void;
				public refresh(): void;
				public containsMetaDataKey(param0: string): boolean;
				public getOpacity(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class LayerVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.LayerVector>;
				public constructor(param0: number, param1: boolean);
				public set(param0: number, param1: com.carto.layers.Layer): void;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
				public get(param0: number): com.carto.layers.Layer;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public add(param0: com.carto.layers.Layer): void;
				public isEmpty(): boolean;
			}
		}
	}
}





declare module com {
	export module carto {
		export module layers {
			export class RasterTileEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.RasterTileEventListener>;
				public onRasterTileClicked(param0: com.carto.ui.RasterTileClickInfo): boolean;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class RasterTileFilterMode {
				public static class: java.lang.Class<com.carto.layers.RasterTileFilterMode>;
				public static RASTER_TILE_FILTER_MODE_NEAREST: com.carto.layers.RasterTileFilterMode;
				public static RASTER_TILE_FILTER_MODE_BILINEAR: com.carto.layers.RasterTileFilterMode;
				public static RASTER_TILE_FILTER_MODE_BICUBIC: com.carto.layers.RasterTileFilterMode;
				public static values(): androidNative.Array<com.carto.layers.RasterTileFilterMode>;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.layers.RasterTileFilterMode;
				public static valueOf(param0: string): com.carto.layers.RasterTileFilterMode;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module RasterTileFilterMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.RasterTileFilterMode.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
			export class RasterTileLayer extends com.carto.layers.TileLayer {
				public static class: java.lang.Class<com.carto.layers.RasterTileLayer>;
				public getTileFilterMode(): com.carto.layers.RasterTileFilterMode;
				public getTextureCacheCapacity(): number;
				public setTileBlendingSpeed(param0: number): void;
				public constructor(param0: number, param1: boolean);
				public getTileBlendingSpeed(): number;
				public setTileFilterMode(param0: com.carto.layers.RasterTileFilterMode): void;
				public getRasterTileEventListener(): com.carto.layers.RasterTileEventListener;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.TileDataSource);
				public setRasterTileEventListener(param0: com.carto.layers.RasterTileEventListener): void;
				public setTextureCacheCapacity(param0: number): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class SolidLayer extends com.carto.layers.Layer {
				public static class: java.lang.Class<com.carto.layers.SolidLayer>;
				public setBitmap(param0: com.carto.graphics.Bitmap): void;
				public constructor(param0: number, param1: boolean);
				public setColor(param0: com.carto.graphics.Color): void;
				public getBitmapScale(): number;
				public getBitmap(): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public setBitmapScale(param0: number): void;
				public constructor(param0: com.carto.graphics.Color);
				public constructor(param0: com.carto.graphics.Bitmap);
				public getColor(): com.carto.graphics.Color;
				public isUpdateInProgress(): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class TileLayer extends com.carto.layers.Layer {
				public static class: java.lang.Class<com.carto.layers.TileLayer>;
				public setUTFGridEventListener(param0: com.carto.layers.UTFGridEventListener): void;
				public setTileLoadListener(param0: com.carto.layers.TileLoadListener): void;
				public getTileSubstitutionPolicy(): com.carto.layers.TileSubstitutionPolicy;
				public getZoomLevelBias(): number;
				public setZoomLevelBias(param0: number): void;
				public calculateMapTileOrigin(param0: com.carto.core.MapTile): com.carto.core.MapPos;
				public setUTFGridDataSource(param0: com.carto.datasources.TileDataSource): void;
				public getDataSource(): com.carto.datasources.TileDataSource;
				public calculateMapTile(param0: com.carto.core.MapPos, param1: number): com.carto.core.MapTile;
				public calculateMapTileBounds(param0: com.carto.core.MapTile): com.carto.core.MapBounds;
				public getTileLoadListener(): com.carto.layers.TileLoadListener;
				public isSynchronizedRefresh(): boolean;
				public setFrameNr(param0: number): void;
				public getUTFGridDataSource(): com.carto.datasources.TileDataSource;
				public isUpdateInProgress(): boolean;
				public setMaxOverzoomLevel(param0: number): void;
				public getUTFGridEventListener(): com.carto.layers.UTFGridEventListener;
				public setMaxUnderzoomLevel(param0: number): void;
				public getMaxOverzoomLevel(): number;
				public constructor(param0: number, param1: boolean);
				public clearTileCaches(param0: boolean): void;
				public setPreloading(param0: boolean): void;
				public setTileSubstitutionPolicy(param0: com.carto.layers.TileSubstitutionPolicy): void;
				public getMaxUnderzoomLevel(): number;
				public swigGetRawPtr(): number;
				public getFrameNr(): number;
				public isPreloading(): boolean;
				public setSynchronizedRefresh(param0: boolean): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class TileLoadListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.TileLoadListener>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public onVisibleTilesLoaded(): void;
				public onPreloadingTilesLoaded(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class TileSubstitutionPolicy {
				public static class: java.lang.Class<com.carto.layers.TileSubstitutionPolicy>;
				public static TILE_SUBSTITUTION_POLICY_ALL: com.carto.layers.TileSubstitutionPolicy;
				public static TILE_SUBSTITUTION_POLICY_VISIBLE: com.carto.layers.TileSubstitutionPolicy;
				public static TILE_SUBSTITUTION_POLICY_NONE: com.carto.layers.TileSubstitutionPolicy;
				public static valueOf(param0: string): com.carto.layers.TileSubstitutionPolicy;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.layers.TileSubstitutionPolicy>;
				public static swigToEnum(param0: number): com.carto.layers.TileSubstitutionPolicy;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module TileSubstitutionPolicy {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.TileSubstitutionPolicy.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
			export class TorqueTileLayer extends com.carto.layers.VectorTileLayer {
				public static class: java.lang.Class<com.carto.layers.TorqueTileLayer>;
				public countVisibleFeatures(param0: number): number;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.TorqueTileDecoder);
				public constructor(param0: number, param1: boolean);
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class UTFGridEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.UTFGridEventListener>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public onUTFGridClicked(param0: com.carto.ui.UTFGridClickInfo): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class VectorEditEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorEditEventListener>;
				public onElementModify(param0: com.carto.vectorelements.VectorElement, param1: com.carto.geometry.Geometry): void;
				public onElementDeselected(param0: com.carto.vectorelements.VectorElement): void;
				public constructor(param0: number, param1: boolean);
				public onElementSelect(param0: com.carto.vectorelements.VectorElement): boolean;
				public onSelectDragPointStyle(param0: com.carto.vectorelements.VectorElement, param1: com.carto.layers.VectorElementDragPointStyle): com.carto.styles.PointStyle;
				public onDragMove(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
				public constructor();
				public swigGetRawPtr(): number;
				public onDragEnd(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
				public onDragStart(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
				public onElementDelete(param0: com.carto.vectorelements.VectorElement): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class VectorElementDragPointStyle {
				public static class: java.lang.Class<com.carto.layers.VectorElementDragPointStyle>;
				public static VECTOR_ELEMENT_DRAG_POINT_STYLE_NORMAL: com.carto.layers.VectorElementDragPointStyle;
				public static VECTOR_ELEMENT_DRAG_POINT_STYLE_VIRTUAL: com.carto.layers.VectorElementDragPointStyle;
				public static VECTOR_ELEMENT_DRAG_POINT_STYLE_SELECTED: com.carto.layers.VectorElementDragPointStyle;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.layers.VectorElementDragPointStyle;
				public static valueOf(param0: string): com.carto.layers.VectorElementDragPointStyle;
				public static values(): androidNative.Array<com.carto.layers.VectorElementDragPointStyle>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module VectorElementDragPointStyle {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.VectorElementDragPointStyle.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
			export class VectorElementDragResult {
				public static class: java.lang.Class<com.carto.layers.VectorElementDragResult>;
				public static VECTOR_ELEMENT_DRAG_RESULT_IGNORE: com.carto.layers.VectorElementDragResult;
				public static VECTOR_ELEMENT_DRAG_RESULT_STOP: com.carto.layers.VectorElementDragResult;
				public static VECTOR_ELEMENT_DRAG_RESULT_MODIFY: com.carto.layers.VectorElementDragResult;
				public static VECTOR_ELEMENT_DRAG_RESULT_DELETE: com.carto.layers.VectorElementDragResult;
				public static swigToEnum(param0: number): com.carto.layers.VectorElementDragResult;
				public swigValue(): number;
				public static valueOf(param0: string): com.carto.layers.VectorElementDragResult;
				public static values(): androidNative.Array<com.carto.layers.VectorElementDragResult>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module VectorElementDragResult {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.VectorElementDragResult.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
			export class VectorElementEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorElementEventListener>;
				public onVectorElementClicked(param0: com.carto.ui.VectorElementClickInfo): boolean;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class VectorLayer extends com.carto.layers.Layer {
				public static class: java.lang.Class<com.carto.layers.VectorLayer>;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.datasources.VectorDataSource);
				public getDataSource(): com.carto.datasources.VectorDataSource;
				public setZBuffering(param0: boolean): void;
				public swigGetRawPtr(): number;
				public isZBuffering(): boolean;
				public getVectorElementEventListener(): com.carto.layers.VectorElementEventListener;
				public isUpdateInProgress(): boolean;
				public setVectorElementEventListener(param0: com.carto.layers.VectorElementEventListener): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class VectorTileEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorTileEventListener>;
				public onVectorTileClicked(param0: com.carto.ui.VectorTileClickInfo): boolean;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class VectorTileLayer extends com.carto.layers.TileLayer {
				public static class: java.lang.Class<com.carto.layers.VectorTileLayer>;
				public getTileCacheCapacity(): number;
				public getClickRadius(): number;
				public getTileDecoder(): com.carto.vectortiles.VectorTileDecoder;
				public setLayerBlendingSpeed(param0: number): void;
				public getRendererLayerFilter(): string;
				public getBuildingRenderOrder(): com.carto.layers.VectorTileRenderOrder;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public setTileCacheCapacity(param0: number): void;
				public setBuildingRenderOrder(param0: com.carto.layers.VectorTileRenderOrder): void;
				public setClickRadius(param0: number): void;
				public setRendererLayerFilter(param0: string): void;
				public constructor(param0: number, param1: boolean);
				public setLabelBlendingSpeed(param0: number): void;
				public getVectorTileEventListener(): com.carto.layers.VectorTileEventListener;
				public setLabelRenderOrder(param0: com.carto.layers.VectorTileRenderOrder): void;
				public getClickHandlerLayerFilter(): string;
				public swigGetRawPtr(): number;
				public setClickHandlerLayerFilter(param0: string): void;
				public getLabelRenderOrder(): com.carto.layers.VectorTileRenderOrder;
				public getLayerBlendingSpeed(): number;
				public setVectorTileEventListener(param0: com.carto.layers.VectorTileEventListener): void;
				public getLabelBlendingSpeed(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class VectorTileRenderOrder {
				public static class: java.lang.Class<com.carto.layers.VectorTileRenderOrder>;
				public static VECTOR_TILE_RENDER_ORDER_HIDDEN: com.carto.layers.VectorTileRenderOrder;
				public static VECTOR_TILE_RENDER_ORDER_LAYER: com.carto.layers.VectorTileRenderOrder;
				public static VECTOR_TILE_RENDER_ORDER_LAST: com.carto.layers.VectorTileRenderOrder;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.layers.VectorTileRenderOrder;
				public static values(): androidNative.Array<com.carto.layers.VectorTileRenderOrder>;
				public static valueOf(param0: string): com.carto.layers.VectorTileRenderOrder;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module VectorTileRenderOrder {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.VectorTileRenderOrder.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module packagemanager {
			export class CartoPackageManager extends com.carto.packagemanager.PackageManager {
				public static class: java.lang.Class<com.carto.packagemanager.CartoPackageManager>;
				public constructor(param0: number, param1: boolean);
				public getStyleAssetPackage(param0: com.carto.layers.CartoBaseMapStyle): com.carto.utils.AssetPackage;
				public swigGetRawPtr(): number;
				public constructor(param0: string, param1: string, param2: string, param3: string);
				public startStyleDownload(param0: com.carto.layers.CartoBaseMapStyle): boolean;
				public constructor(param0: string, param1: string);
			}
		}
	}
}



declare module com {
	export module carto {
		export module packagemanager {
			export class PackageAction {
				public static class: java.lang.Class<com.carto.packagemanager.PackageAction>;
				public static PACKAGE_ACTION_READY: com.carto.packagemanager.PackageAction;
				public static PACKAGE_ACTION_WAITING: com.carto.packagemanager.PackageAction;
				public static PACKAGE_ACTION_DOWNLOADING: com.carto.packagemanager.PackageAction;
				public static PACKAGE_ACTION_COPYING: com.carto.packagemanager.PackageAction;
				public static PACKAGE_ACTION_REMOVING: com.carto.packagemanager.PackageAction;
				public static valueOf(param0: string): com.carto.packagemanager.PackageAction;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.packagemanager.PackageAction>;
				public static swigToEnum(param0: number): com.carto.packagemanager.PackageAction;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module PackageAction {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.packagemanager.PackageAction.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module packagemanager {
			export class PackageErrorType {
				public static class: java.lang.Class<com.carto.packagemanager.PackageErrorType>;
				public static PACKAGE_ERROR_TYPE_SYSTEM: com.carto.packagemanager.PackageErrorType;
				public static PACKAGE_ERROR_TYPE_CONNECTION: com.carto.packagemanager.PackageErrorType;
				public static PACKAGE_ERROR_TYPE_DOWNLOAD_LIMIT_EXCEEDED: com.carto.packagemanager.PackageErrorType;
				public static PACKAGE_ERROR_TYPE_PACKAGE_TOO_BIG: com.carto.packagemanager.PackageErrorType;
				public static PACKAGE_ERROR_TYPE_NO_OFFLINE_PLAN: com.carto.packagemanager.PackageErrorType;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.packagemanager.PackageErrorType>;
				public static swigToEnum(param0: number): com.carto.packagemanager.PackageErrorType;
				public static valueOf(param0: string): com.carto.packagemanager.PackageErrorType;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module PackageErrorType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.packagemanager.PackageErrorType.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module packagemanager {
			export class PackageInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageInfo>;
				public getTileMask(): com.carto.packagemanager.PackageTileMask;
				public getMetaInfo(): com.carto.packagemanager.PackageMetaInfo;
				public constructor(param0: number, param1: boolean);
				public getName(): string;
				public constructor(param0: string, param1: com.carto.packagemanager.PackageType, param2: number, param3: java.math.BigInteger, param4: string, param5: com.carto.packagemanager.PackageTileMask, param6: com.carto.packagemanager.PackageMetaInfo);
				public getPackageType(): com.carto.packagemanager.PackageType;
				public swigGetRawPtr(): number;
				public getNames(param0: string): com.carto.core.StringVector;
				public getVersion(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getPackageId(): string;
				public getSize(): java.math.BigInteger;
			}
		}
	}
}



declare module com {
	export module carto {
		export module packagemanager {
			export class PackageInfoVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageInfoVector>;
				public add(param0: com.carto.packagemanager.PackageInfo): void;
				public set(param0: number, param1: com.carto.packagemanager.PackageInfo): void;
				public constructor(param0: number, param1: boolean);
				public get(param0: number): com.carto.packagemanager.PackageInfo;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module packagemanager {
			export class PackageManager extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageManager>;
				public startPackageImport(param0: string, param1: number, param2: string): boolean;
				public getLocalPackageStatus(param0: string, param1: number): com.carto.packagemanager.PackageStatus;
				public setPackageManagerListener(param0: com.carto.packagemanager.PackageManagerListener): void;
				public startPackageListDownload(): boolean;
				public suggestPackages(param0: com.carto.core.MapPos, param1: com.carto.projections.Projection): com.carto.packagemanager.PackageInfoVector;
				public startPackageRemove(param0: string): boolean;
				public start(): boolean;
				public hashCode(): number;
				public getServerPackageListAge(): number;
				public equals(param0: any): boolean;
				public startPackageDownload(param0: string): boolean;
				public getLocalPackages(): com.carto.packagemanager.PackageInfoVector;
				public getLocalPackage(param0: string): com.carto.packagemanager.PackageInfo;
				public cancelPackageTasks(param0: string): void;
				public getServerPackages(): com.carto.packagemanager.PackageInfoVector;
				public constructor(param0: number, param1: boolean);
				public getServerPackage(param0: string): com.carto.packagemanager.PackageInfo;
				public setPackagePriority(param0: string, param1: number): void;
				public stop(param0: boolean): void;
				public swigGetRawPtr(): number;
				public isAreaDownloaded(param0: com.carto.core.MapBounds, param1: number, param2: com.carto.projections.Projection): boolean;
				public getServerPackageListMetaInfo(): com.carto.packagemanager.PackageMetaInfo;
				public constructor(param0: string, param1: string, param2: string, param3: string);
				public getPackageManagerListener(): com.carto.packagemanager.PackageManagerListener;
			}
		}
	}
}

declare module com {
	export module carto {
		export module packagemanager {
			export class PackageManagerListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageManagerListener>;
				public onPackageListFailed(): void;
				public constructor(param0: number, param1: boolean);
				public onPackageFailed(param0: string, param1: number, param2: com.carto.packagemanager.PackageErrorType): void;
				public onPackageListUpdated(): void;
				public onPackageUpdated(param0: string, param1: number): void;
				public onStyleFailed(param0: string): void;
				public constructor();
				public onPackageStatusChanged(param0: string, param1: number, param2: com.carto.packagemanager.PackageStatus): void;
				public swigGetRawPtr(): number;
				public onPackageCancelled(param0: string, param1: number): void;
				public onStyleUpdated(param0: string): void;
			}
		}
	}
}





declare module com {
	export module carto {
		export module packagemanager {
			export class PackageMetaInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageMetaInfo>;
				public getVariant(): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.core.Variant);
			}
		}
	}
}



declare module com {
	export module carto {
		export module packagemanager {
			export class PackageStatus extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageStatus>;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.packagemanager.PackageAction, param1: boolean, param2: number);
				public getCurrentAction(): com.carto.packagemanager.PackageAction;
				public getProgress(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public isPaused(): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module packagemanager {
			export class PackageTileMask extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageTileMask>;
				public swigGetRawPtr(): number;
				public getMaxZoomLevel(): number;
				public getBoundingPolygon(param0: com.carto.projections.Projection): com.carto.geometry.MultiPolygonGeometry;
				public hashCode(): number;
				public getTileStatus(param0: com.carto.core.MapTile): com.carto.packagemanager.PackageTileStatus;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getStringValue(): string;
			}
		}
	}
}



declare module com {
	export module carto {
		export module packagemanager {
			export class PackageTileStatus {
				public static class: java.lang.Class<com.carto.packagemanager.PackageTileStatus>;
				public static PACKAGE_TILE_STATUS_MISSING: com.carto.packagemanager.PackageTileStatus;
				public static PACKAGE_TILE_STATUS_PARTIAL: com.carto.packagemanager.PackageTileStatus;
				public static PACKAGE_TILE_STATUS_FULL: com.carto.packagemanager.PackageTileStatus;
				public static valueOf(param0: string): com.carto.packagemanager.PackageTileStatus;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.packagemanager.PackageTileStatus>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static swigToEnum(param0: number): com.carto.packagemanager.PackageTileStatus;
			}
			export module PackageTileStatus {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.packagemanager.PackageTileStatus.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module packagemanager {
			export class PackageType {
				public static class: java.lang.Class<com.carto.packagemanager.PackageType>;
				public static PACKAGE_TYPE_MAP: com.carto.packagemanager.PackageType;
				public static PACKAGE_TYPE_ROUTING: com.carto.packagemanager.PackageType;
				public static PACKAGE_TYPE_GEOCODING: com.carto.packagemanager.PackageType;
				public static PACKAGE_TYPE_VALHALLA_ROUTING: com.carto.packagemanager.PackageType;
				public static valueOf(param0: string): com.carto.packagemanager.PackageType;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.packagemanager.PackageType;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static values(): androidNative.Array<com.carto.packagemanager.PackageType>;
			}
			export module PackageType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.packagemanager.PackageType.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module projections {
			export class EPSG3857 extends com.carto.projections.Projection {
				public static class: java.lang.Class<com.carto.projections.EPSG3857>;
				public toWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
				public constructor(param0: number, param1: boolean);
				public getName(): string;
				public constructor();
				public swigGetRawPtr(): number;
				public fromWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
			}
		}
	}
}



declare module com {
	export module carto {
		export module projections {
			export class EPSG4326 extends com.carto.projections.Projection {
				public static class: java.lang.Class<com.carto.projections.EPSG4326>;
				public toWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
				public constructor(param0: number, param1: boolean);
				public getName(): string;
				public constructor();
				public swigGetRawPtr(): number;
				public fromWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
			}
		}
	}
}



declare module com {
	export module carto {
		export module projections {
			export class Projection extends java.lang.Object {
				public static class: java.lang.Class<com.carto.projections.Projection>;
				public fromLatLong(param0: number, param1: number): com.carto.core.MapPos;
				public toWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
				public constructor(param0: number, param1: boolean);
				public getBounds(): com.carto.core.MapBounds;
				public getName(): string;
				public toLatLong(param0: number, param1: number): com.carto.core.MapPos;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public fromWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
			}
		}
	}
}



declare module com {
	export module carto {
		export module rastertiles {
			export class ElevationDecoder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.rastertiles.ElevationDecoder>;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
			}
		}
	}
}



declare module com {
	export module carto {
		export module rastertiles {
			export class MapBoxElevationDataDecoder extends com.carto.rastertiles.ElevationDecoder {
				public static class: java.lang.Class<com.carto.rastertiles.MapBoxElevationDataDecoder>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module rastertiles {
			export class SWIGTYPE_p_std__arrayT_double_4_t extends java.lang.Object {
				public static class: java.lang.Class<com.carto.rastertiles.SWIGTYPE_p_std__arrayT_double_4_t>;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module rastertiles {
			export class SWIGTYPE_p_std__arrayT_float_4_t extends java.lang.Object {
				public static class: java.lang.Class<com.carto.rastertiles.SWIGTYPE_p_std__arrayT_float_4_t>;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module rastertiles {
			export class TerrariumElevationDataDecoder extends com.carto.rastertiles.ElevationDecoder {
				public static class: java.lang.Class<com.carto.rastertiles.TerrariumElevationDataDecoder>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module renderers {
			export class MapRenderer extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.MapRenderer>;
				public swigGetRawPtr(): number;
				public getViewState(): com.carto.graphics.ViewState;
				public captureRendering(param0: com.carto.renderers.RendererCaptureListener, param1: boolean): void;
				public hashCode(): number;
				public setMapRendererListener(param0: com.carto.renderers.MapRendererListener): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getMapRendererListener(): com.carto.renderers.MapRendererListener;
				public requestRedraw(): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module renderers {
			export class MapRendererListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.MapRendererListener>;
				public constructor(param0: number, param1: boolean);
				public onSurfaceChanged(param0: number, param1: number): void;
				public constructor();
				public swigGetRawPtr(): number;
				public onBeforeDrawFrame(): void;
				public onAfterDrawFrame(): void;
			}
		}
	}
}





declare module com {
	export module carto {
		export module renderers {
			export class RedrawRequestListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.RedrawRequestListener>;
				public constructor(param0: number, param1: boolean);
				public onRedrawRequested(): void;
				public constructor();
				public swigGetRawPtr(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module renderers {
			export class RendererCaptureListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.RendererCaptureListener>;
				public onMapRendered(param0: com.carto.graphics.Bitmap): void;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module renderers {
			export module components {
				export class CullState extends java.lang.Object {
					public static class: java.lang.Class<com.carto.renderers.components.CullState>;
					public equals(param0: any): boolean;
					public getProjectionEnvelope(param0: com.carto.projections.Projection): com.carto.core.MapEnvelope;
					public constructor(param0: com.carto.core.MapEnvelope, param1: com.carto.graphics.ViewState);
					public hashCode(): number;
					public swigGetRawPtr(): number;
					public constructor(param0: number, param1: boolean);
					public getViewState(): com.carto.graphics.ViewState;
				}
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class CartoOnlineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.CartoOnlineRoutingService>;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: string);
				public constructor();
				public setProfile(param0: string): void;
				public swigGetRawPtr(): number;
				public getProfile(): string;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class MultiValhallaOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.MultiValhallaOfflineRoutingService>;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public remove(param0: string): boolean;
				public getConfigurationParameter(param0: string): com.carto.core.Variant;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public setProfile(param0: string): void;
				public add(param0: string): void;
				public setConfigurationParameter(param0: string, param1: com.carto.core.Variant): void;
				public swigGetRawPtr(): number;
				public getProfile(): string;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class OSRMOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.OSRMOfflineRoutingService>;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: string);
				public constructor();
				public setProfile(param0: string): void;
				public swigGetRawPtr(): number;
				public getProfile(): string;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class PackageManagerRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.PackageManagerRoutingService>;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public setProfile(param0: string): void;
				public swigGetRawPtr(): number;
				public getProfile(): string;
				public constructor(param0: com.carto.packagemanager.PackageManager);
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class PackageManagerValhallaRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.PackageManagerValhallaRoutingService>;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public getConfigurationParameter(param0: string): com.carto.core.Variant;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public setProfile(param0: string): void;
				public setConfigurationParameter(param0: string, param1: com.carto.core.Variant): void;
				public swigGetRawPtr(): number;
				public getProfile(): string;
				public constructor(param0: com.carto.packagemanager.PackageManager);
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingEdge extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingEdge>;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public containsAttribute(param0: string): boolean;
				public getAttribute(param0: string): com.carto.core.Variant;
				public toString(): string;
				public constructor();
				public constructor(param0: com.carto.core.StringVariantMap);
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingEdgeVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingEdgeVector>;
				public constructor(param0: number, param1: boolean);
				public add(param0: com.carto.routing.RouteMatchingEdge): void;
				public get(param0: number): com.carto.routing.RouteMatchingEdge;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
				public set(param0: number, param1: com.carto.routing.RouteMatchingEdge): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingPoint extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingPoint>;
				public constructor(param0: number, param1: boolean);
				public getPos(): com.carto.core.MapPos;
				public toString(): string;
				public constructor();
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.routing.RouteMatchingPointType, param2: number);
				public equals(param0: any): boolean;
				public getType(): com.carto.routing.RouteMatchingPointType;
				public getEdgeIndex(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingPointType {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingPointType>;
				public static ROUTE_MATCHING_POINT_UNMATCHED: com.carto.routing.RouteMatchingPointType;
				public static ROUTE_MATCHING_POINT_INTERPOLATED: com.carto.routing.RouteMatchingPointType;
				public static ROUTE_MATCHING_POINT_MATCHED: com.carto.routing.RouteMatchingPointType;
				public swigValue(): number;
				public static valueOf(param0: string): com.carto.routing.RouteMatchingPointType;
				public static values(): androidNative.Array<com.carto.routing.RouteMatchingPointType>;
				public static swigToEnum(param0: number): com.carto.routing.RouteMatchingPointType;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module RouteMatchingPointType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.routing.RouteMatchingPointType.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingPointVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingPointVector>;
				public set(param0: number, param1: com.carto.routing.RouteMatchingPoint): void;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public add(param0: com.carto.routing.RouteMatchingPoint): void;
				public swigGetRawPtr(): number;
				public get(param0: number): com.carto.routing.RouteMatchingPoint;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingRequest>;
				public getProjection(): com.carto.projections.Projection;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPosVector, param2: number);
				public getCustomParameter(param0: string): com.carto.core.Variant;
				public setPointParameter(param0: number, param1: string, param2: com.carto.core.Variant): void;
				public setCustomParameter(param0: string, param1: com.carto.core.Variant): void;
				public toString(): string;
				public getPointParameter(param0: number, param1: string): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public getPoints(): com.carto.core.MapPosVector;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getAccuracy(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingResult extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingResult>;
				public getRawResult(): string;
				public getProjection(): com.carto.projections.Projection;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.routing.RouteMatchingPointVector, param2: com.carto.routing.RouteMatchingEdgeVector, param3: string);
				public constructor(param0: number, param1: boolean);
				public toString(): string;
				public getMatchingPoints(): com.carto.routing.RouteMatchingPointVector;
				public swigGetRawPtr(): number;
				public getPoints(): com.carto.core.MapPosVector;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getMatchingEdges(): com.carto.routing.RouteMatchingEdgeVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class RoutingAction {
				public static class: java.lang.Class<com.carto.routing.RoutingAction>;
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
				public static ROUTING_ACTION_GO_UP: com.carto.routing.RoutingAction;
				public static ROUTING_ACTION_GO_DOWN: com.carto.routing.RoutingAction;
				public static ROUTING_ACTION_WAIT: com.carto.routing.RoutingAction;
				public static ROUTING_ACTION_ENTER_FERRY: com.carto.routing.RoutingAction;
				public static ROUTING_ACTION_LEAVE_FERRY: com.carto.routing.RoutingAction;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.routing.RoutingAction;
				public static valueOf(param0: string): com.carto.routing.RoutingAction;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static values(): androidNative.Array<com.carto.routing.RoutingAction>;
			}
			export module RoutingAction {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.routing.RoutingAction.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class RoutingInstruction extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingInstruction>;
				public getPointIndex(): number;
				public constructor(param0: com.carto.routing.RoutingAction, param1: number, param2: string, param3: string, param4: number, param5: number, param6: number, param7: number, param8: com.carto.core.Variant);
				public constructor(param0: number, param1: boolean);
				public toString(): string;
				public getTime(): number;
				public constructor();
				public getTurnAngle(): number;
				public swigGetRawPtr(): number;
				public getStreetName(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getDistance(): number;
				public getAzimuth(): number;
				public getGeometryTag(): com.carto.core.Variant;
				public getInstruction(): string;
				public getAction(): com.carto.routing.RoutingAction;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class RoutingInstructionVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingInstructionVector>;
				public constructor(param0: number, param1: boolean);
				public set(param0: number, param1: com.carto.routing.RoutingInstruction): void;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
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

declare module com {
	export module carto {
		export module routing {
			export class RoutingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingRequest>;
				public getProjection(): com.carto.projections.Projection;
				public constructor(param0: number, param1: boolean);
				public getCustomParameter(param0: string): com.carto.core.Variant;
				public setPointParameter(param0: number, param1: string, param2: com.carto.core.Variant): void;
				public setCustomParameter(param0: string, param1: com.carto.core.Variant): void;
				public toString(): string;
				public getPointParameter(param0: number, param1: string): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public getPoints(): com.carto.core.MapPosVector;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPosVector);
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class RoutingResult extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingResult>;
				public getRawResult(): string;
				public getProjection(): com.carto.projections.Projection;
				public getInstructions(): com.carto.routing.RoutingInstructionVector;
				public getTotalTime(): number;
				public getTotalDistance(): number;
				public constructor(param0: number, param1: boolean);
				public toString(): string;
				public swigGetRawPtr(): number;
				public getPoints(): com.carto.core.MapPosVector;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPosVector, param2: com.carto.routing.RoutingInstructionVector, param3: string);
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class RoutingService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingService>;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public constructor(param0: number, param1: boolean);
				public setProfile(param0: string): void;
				public constructor();
				public swigGetRawPtr(): number;
				public getProfile(): string;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class SGREOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.SGREOfflineRoutingService>;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.geometry.FeatureCollection, param2: com.carto.core.Variant);
				public getRoutingParameter(param0: string): number;
				public constructor(param0: number, param1: boolean);
				public setRoutingParameter(param0: string, param1: number): void;
				public constructor();
				public setProfile(param0: string): void;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.core.Variant, param1: com.carto.core.Variant);
				public getProfile(): string;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class ValhallaOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.ValhallaOfflineRoutingService>;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public getConfigurationParameter(param0: string): com.carto.core.Variant;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: string);
				public constructor();
				public setProfile(param0: string): void;
				public setConfigurationParameter(param0: string, param1: com.carto.core.Variant): void;
				public swigGetRawPtr(): number;
				public getProfile(): string;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class ValhallaOnlineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.ValhallaOnlineRoutingService>;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public getCustomServiceURL(): string;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: string);
				public constructor();
				public setProfile(param0: string): void;
				public setCustomServiceURL(param0: string): void;
				public swigGetRawPtr(): number;
				public getProfile(): string;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}



declare module com {
	export module carto {
		export module search {
			export class FeatureCollectionSearchService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.FeatureCollectionSearchService>;
				public getProjection(): com.carto.projections.Projection;
				public findFeatures(param0: com.carto.search.SearchRequest): com.carto.geometry.FeatureCollection;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.geometry.FeatureCollection);
				public swigGetRawPtr(): number;
				public setMaxResults(param0: number): void;
				public getMaxResults(): number;
				public getFeatureCollection(): com.carto.geometry.FeatureCollection;
			}
		}
	}
}



declare module com {
	export module carto {
		export module search {
			export class SearchRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.SearchRequest>;
				public getProjection(): com.carto.projections.Projection;
				public getFilterExpression(): string;
				public getRegexFilter(): string;
				public constructor(param0: number, param1: boolean);
				public setProjection(param0: com.carto.projections.Projection): void;
				public setFilterExpression(param0: string): void;
				public setSearchRadius(param0: number): void;
				public toString(): string;
				public constructor();
				public swigGetRawPtr(): number;
				public setGeometry(param0: com.carto.geometry.Geometry): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public setRegexFilter(param0: string): void;
				public getSearchRadius(): number;
				public getGeometry(): com.carto.geometry.Geometry;
			}
		}
	}
}



declare module com {
	export module carto {
		export module search {
			export class VectorElementSearchService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.VectorElementSearchService>;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.datasources.VectorDataSource);
				public getDataSource(): com.carto.datasources.VectorDataSource;
				public swigGetRawPtr(): number;
				public setMaxResults(param0: number): void;
				public findElements(param0: com.carto.search.SearchRequest): com.carto.vectorelements.VectorElementVector;
				public getMaxResults(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module search {
			export class VectorTileSearchService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.VectorTileSearchService>;
				public getTileDecoder(): com.carto.vectortiles.VectorTileDecoder;
				public getSortByDistance(): boolean;
				public getDataSource(): com.carto.datasources.TileDataSource;
				public setMaxResults(param0: number): void;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public getPreventDuplicates(): boolean;
				public setMinZoom(param0: number): void;
				public setLayers(param0: com.carto.core.StringVector): void;
				public constructor(param0: number, param1: boolean);
				public setPreventDuplicates(param0: boolean): void;
				public getMaxZoom(): number;
				public swigGetRawPtr(): number;
				public setSortByDistance(param0: boolean): void;
				public setMaxZoom(param0: number): void;
				public getMaxResults(): number;
				public findFeatures(param0: com.carto.search.SearchRequest): com.carto.geometry.VectorTileFeatureCollection;
				public getLayers(): com.carto.core.StringVector;
				public getMinZoom(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module services {
			export class CartoMapsService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.services.CartoMapsService>;
				public getAPIKey(): string;
				public getVectorTileAssetPackage(): com.carto.utils.AssetPackage;
				public isInteractive(): boolean;
				public constructor();
				public buildNamedMap(param0: string, param1: com.carto.core.StringVariantMap): com.carto.layers.LayerVector;
				public setInteractive(param0: boolean): void;
				public setDefaultVectorLayerMode(param0: boolean): void;
				public hashCode(): number;
				public setUsername(param0: string): void;
				public equals(param0: any): boolean;
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
				public getLayerIndices(): com.carto.core.IntVector;
				public setStrictMode(param0: boolean): void;
				public buildMap(param0: com.carto.core.Variant): com.carto.layers.LayerVector;
				public isDefaultVectorLayerMode(): boolean;
				public getVectorTileBufferSize(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module services {
			export class CartoSQLService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.services.CartoSQLService>;
				public setAPIKey(param0: string): void;
				public getAPIKey(): string;
				public getAPITemplate(): string;
				public queryData(param0: string): com.carto.core.Variant;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public setAPITemplate(param0: string): void;
				public hashCode(): number;
				public setUsername(param0: string): void;
				public equals(param0: any): boolean;
				public getUsername(): string;
				public queryFeatures(param0: string, param1: com.carto.projections.Projection): com.carto.geometry.FeatureCollection;
			}
		}
	}
}



declare module com {
	export module carto {
		export module styles {
			export class AnimationStyle extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.AnimationStyle>;
				public getPhaseOutDuration(): number;
				public constructor(param0: number, param1: boolean);
				public getFadeAnimationType(): com.carto.styles.AnimationType;
				public swigGetRawPtr(): number;
				public getRelativeSpeed(): number;
				public getPhaseInDuration(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getSizeAnimationType(): com.carto.styles.AnimationType;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class AnimationStyleBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.AnimationStyleBuilder>;
				public getPhaseOutDuration(): number;
				public setFadeAnimationType(param0: com.carto.styles.AnimationType): void;
				public constructor(param0: number, param1: boolean);
				public getFadeAnimationType(): com.carto.styles.AnimationType;
				public buildStyle(): com.carto.styles.AnimationStyle;
				public setSizeAnimationType(param0: com.carto.styles.AnimationType): void;
				public constructor();
				public swigGetRawPtr(): number;
				public setPhaseInDuration(param0: number): void;
				public setPhaseOutDuration(param0: number): void;
				public getRelativeSpeed(): number;
				public getPhaseInDuration(): number;
				public setRelativeSpeed(param0: number): void;
				public getSizeAnimationType(): com.carto.styles.AnimationType;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class AnimationType {
				public static class: java.lang.Class<com.carto.styles.AnimationType>;
				public static ANIMATION_TYPE_NONE: com.carto.styles.AnimationType;
				public static ANIMATION_TYPE_STEP: com.carto.styles.AnimationType;
				public static ANIMATION_TYPE_LINEAR: com.carto.styles.AnimationType;
				public static ANIMATION_TYPE_SMOOTHSTEP: com.carto.styles.AnimationType;
				public static ANIMATION_TYPE_SPRING: com.carto.styles.AnimationType;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.styles.AnimationType>;
				public static valueOf(param0: string): com.carto.styles.AnimationType;
				public static swigToEnum(param0: number): com.carto.styles.AnimationType;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module AnimationType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.styles.AnimationType.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class BalloonPopupButtonStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupButtonStyle>;
				public getTextColor(): com.carto.graphics.Color;
				public getTextMargins(): com.carto.styles.BalloonPopupMargins;
				public getStrokeWidth(): number;
				public getBackgroundColor(): com.carto.graphics.Color;
				public constructor(param0: number, param1: boolean);
				public swigGetRawPtr(): number;
				public getTextFontName(): string;
				public getCornerRadius(): number;
				public getTextFontSize(): number;
				public getButtonWidth(): number;
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class BalloonPopupButtonStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupButtonStyleBuilder>;
				public getTextColor(): com.carto.graphics.Color;
				public getStrokeWidth(): number;
				public constructor();
				public getTextFontName(): string;
				public setStrokeColor(param0: com.carto.graphics.Color): void;
				public setTextFontSize(param0: number): void;
				public setStrokeWidth(param0: number): void;
				public getTextMargins(): com.carto.styles.BalloonPopupMargins;
				public setTextMargins(param0: com.carto.styles.BalloonPopupMargins): void;
				public constructor(param0: number, param1: boolean);
				public swigGetRawPtr(): number;
				public setButtonWidth(param0: number): void;
				public getCornerRadius(): number;
				public buildStyle(): com.carto.styles.BalloonPopupButtonStyle;
				public getTextFontSize(): number;
				public getButtonWidth(): number;
				public setTextFontName(param0: string): void;
				public setCornerRadius(param0: number): void;
				public setTextColor(param0: com.carto.graphics.Color): void;
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class BalloonPopupMargins extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupMargins>;
				public getTop(): number;
				public swigGetRawPtr(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public getLeft(): number;
				public constructor(param0: number, param1: boolean);
				public getBottom(): number;
				public getRight(): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class BalloonPopupStyle extends com.carto.styles.PopupStyle {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupStyle>;
				public getStrokeWidth(): number;
				public getRightMargins(): com.carto.styles.BalloonPopupMargins;
				public getRightImage(): com.carto.graphics.Bitmap;
				public isTitleWrap(): boolean;
				public getTriangleHeight(): number;
				public getTitleFontSize(): number;
				public getButtonMargins(): com.carto.styles.BalloonPopupMargins;
				public getLeftImage(): com.carto.graphics.Bitmap;
				public isDescriptionWrap(): boolean;
				public getLeftColor(): com.carto.graphics.Color;
				public getDescriptionMargins(): com.carto.styles.BalloonPopupMargins;
				public getDescriptionFontSize(): number;
				public getBackgroundColor(): com.carto.graphics.Color;
				public constructor(param0: number, param1: boolean);
				public getDescriptionColor(): com.carto.graphics.Color;
				public getTitleMargins(): com.carto.styles.BalloonPopupMargins;
				public getTitleField(): string;
				public getLeftMargins(): com.carto.styles.BalloonPopupMargins;
				public getTriangleWidth(): number;
				public swigGetRawPtr(): number;
				public getCornerRadius(): number;
				public getRightColor(): com.carto.graphics.Color;
				public getDescriptionField(): string;
				public getTitleColor(): com.carto.graphics.Color;
				public getTitleFontName(): string;
				public getDescriptionFontName(): string;
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class BalloonPopupStyleBuilder extends com.carto.styles.PopupStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupStyleBuilder>;
				public setLeftColor(param0: com.carto.graphics.Color): void;
				public getStrokeWidth(): number;
				public setTriangleWidth(param0: number): void;
				public setRightColor(param0: com.carto.graphics.Color): void;
				public getRightImage(): com.carto.graphics.Bitmap;
				public setRightImage(param0: com.carto.graphics.Bitmap): void;
				public setDescriptionFontSize(param0: number): void;
				public setDescriptionWrap(param0: boolean): void;
				public constructor();
				public buildStyle(): com.carto.styles.BalloonPopupStyle;
				public isDescriptionWrap(): boolean;
				public setDescriptionMargins(param0: com.carto.styles.BalloonPopupMargins): void;
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
				public getTitleColor(): com.carto.graphics.Color;
				public setTitleMargins(param0: com.carto.styles.BalloonPopupMargins): void;
				public setCornerRadius(param0: number): void;
				public getTitleFontName(): string;
				public setTitleWrap(param0: boolean): void;
				public setTitleFontSize(param0: number): void;
				public getRightMargins(): com.carto.styles.BalloonPopupMargins;
				public setStrokeColor(param0: com.carto.graphics.Color): void;
				public isTitleWrap(): boolean;
				public getTriangleHeight(): number;
				public getTitleFontSize(): number;
				public getButtonMargins(): com.carto.styles.BalloonPopupMargins;
				public getLeftImage(): com.carto.graphics.Bitmap;
				public getLeftColor(): com.carto.graphics.Color;
				public setTitleField(param0: string): void;
				public setTriangleHeight(param0: number): void;
				public setLeftImage(param0: com.carto.graphics.Bitmap): void;
				public setLeftMargins(param0: com.carto.styles.BalloonPopupMargins): void;
				public constructor(param0: number, param1: boolean);
				public getDescriptionColor(): com.carto.graphics.Color;
				public getLeftMargins(): com.carto.styles.BalloonPopupMargins;
				public setDescriptionColor(param0: com.carto.graphics.Color): void;
				public getTriangleWidth(): number;
				public swigGetRawPtr(): number;
				public setDescriptionFontName(param0: string): void;
				public setDescriptionField(param0: string): void;
				public setButtonMargins(param0: com.carto.styles.BalloonPopupMargins): void;
				public setTitleFontName(param0: string): void;
				public getDescriptionFontName(): string;
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class BillboardOrientation {
				public static class: java.lang.Class<com.carto.styles.BillboardOrientation>;
				public static BILLBOARD_ORIENTATION_FACE_CAMERA: com.carto.styles.BillboardOrientation;
				public static BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND: com.carto.styles.BillboardOrientation;
				public static BILLBOARD_ORIENTATION_GROUND: com.carto.styles.BillboardOrientation;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.styles.BillboardOrientation>;
				public static valueOf(param0: string): com.carto.styles.BillboardOrientation;
				public static swigToEnum(param0: number): com.carto.styles.BillboardOrientation;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module BillboardOrientation {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.styles.BillboardOrientation.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class BillboardScaling {
				public static class: java.lang.Class<com.carto.styles.BillboardScaling>;
				public static BILLBOARD_SCALING_WORLD_SIZE: com.carto.styles.BillboardScaling;
				public static BILLBOARD_SCALING_SCREEN_SIZE: com.carto.styles.BillboardScaling;
				public static BILLBOARD_SCALING_CONST_SCREEN_SIZE: com.carto.styles.BillboardScaling;
				public static values(): androidNative.Array<com.carto.styles.BillboardScaling>;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.styles.BillboardScaling;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static valueOf(param0: string): com.carto.styles.BillboardScaling;
			}
			export module BillboardScaling {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.styles.BillboardScaling.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class BillboardStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.BillboardStyle>;
				public isHideIfOverlapped(): boolean;
				public getPlacementPriority(): number;
				public getAttachAnchorPointY(): number;
				public constructor(param0: number, param1: boolean);
				public isScaleWithDPI(): boolean;
				public getVerticalOffset(): number;
				public getAnimationStyle(): com.carto.styles.AnimationStyle;
				public swigGetRawPtr(): number;
				public isCausesOverlap(): boolean;
				public getAttachAnchorPointX(): number;
				public getHorizontalOffset(): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class BillboardStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.BillboardStyleBuilder>;
				public setVerticalOffset(param0: number): void;
				public setAttachAnchorPoint(param0: number, param1: number): void;
				public isScaleWithDPI(): boolean;
				public setHorizontalOffset(param0: number): void;
				public setAnimationStyle(param0: com.carto.styles.AnimationStyle): void;
				public isCausesOverlap(): boolean;
				public setScaleWithDPI(param0: boolean): void;
				public getAttachAnchorPointX(): number;
				public setAttachAnchorPointY(param0: number): void;
				public getHorizontalOffset(): number;
				public isHideIfOverlapped(): boolean;
				public getPlacementPriority(): number;
				public getAttachAnchorPointY(): number;
				public constructor(param0: number, param1: boolean);
				public getVerticalOffset(): number;
				public getAnimationStyle(): com.carto.styles.AnimationStyle;
				public setPlacementPriority(param0: number): void;
				public swigGetRawPtr(): number;
				public setCausesOverlap(param0: boolean): void;
				public setHideIfOverlapped(param0: boolean): void;
				public setAttachAnchorPointX(param0: number): void;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class CartoCSSStyleSet extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.CartoCSSStyleSet>;
				public getCartoCSS(): string;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getAssetPackage(): com.carto.utils.AssetPackage;
				public constructor(param0: string);
				public constructor(param0: string, param1: com.carto.utils.AssetPackage);
			}
		}
	}
}



declare module com {
	export module carto {
		export module styles {
			export class CompiledStyleSet extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.CompiledStyleSet>;
				public swigGetRawPtr(): number;
				public getStyleAssetName(): string;
				public hashCode(): number;
				public constructor(param0: com.carto.utils.AssetPackage, param1: string);
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getAssetPackage(): com.carto.utils.AssetPackage;
				public getStyleName(): string;
				public constructor(param0: com.carto.utils.AssetPackage);
			}
		}
	}
}



declare module com {
	export module carto {
		export module styles {
			export class GeometryCollectionStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.GeometryCollectionStyle>;
				public getPointStyle(): com.carto.styles.PointStyle;
				public constructor(param0: number, param1: boolean);
				public getPolygonStyle(): com.carto.styles.PolygonStyle;
				public swigGetRawPtr(): number;
				public getLineStyle(): com.carto.styles.LineStyle;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class GeometryCollectionStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.GeometryCollectionStyleBuilder>;
				public setPolygonStyle(param0: com.carto.styles.PolygonStyle): void;
				public setLineStyle(param0: com.carto.styles.LineStyle): void;
				public getPointStyle(): com.carto.styles.PointStyle;
				public constructor(param0: number, param1: boolean);
				public getPolygonStyle(): com.carto.styles.PolygonStyle;
				public constructor();
				public swigGetRawPtr(): number;
				public buildStyle(): com.carto.styles.GeometryCollectionStyle;
				public setPointStyle(param0: com.carto.styles.PointStyle): void;
				public getLineStyle(): com.carto.styles.LineStyle;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class LabelStyle extends com.carto.styles.BillboardStyle {
				public static class: java.lang.Class<com.carto.styles.LabelStyle>;
				public isFlippable(): boolean;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				public constructor(param0: number, param1: boolean);
				public getAnchorPointY(): number;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public swigGetRawPtr(): number;
				public getRenderScale(): number;
				public getAnchorPointX(): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class LabelStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.LabelStyleBuilder>;
				public setScalingMode(param0: com.carto.styles.BillboardScaling): void;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				public setFlippable(param0: boolean): void;
				public setAnchorPointY(param0: number): void;
				public constructor();
				public setAnchorPoint(param0: number, param1: number): void;
				public getAnchorPointX(): number;
				public isFlippable(): boolean;
				public buildStyle(): com.carto.styles.LabelStyle;
				public constructor(param0: number, param1: boolean);
				public getAnchorPointY(): number;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public setAnchorPointX(param0: number): void;
				public swigGetRawPtr(): number;
				public setRenderScale(param0: number): void;
				public getRenderScale(): number;
				public setOrientationMode(param0: com.carto.styles.BillboardOrientation): void;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class LineEndType {
				public static class: java.lang.Class<com.carto.styles.LineEndType>;
				public static LINE_END_TYPE_NONE: com.carto.styles.LineEndType;
				public static LINE_END_TYPE_SQUARE: com.carto.styles.LineEndType;
				public static LINE_END_TYPE_ROUND: com.carto.styles.LineEndType;
				public swigValue(): number;
				public static valueOf(param0: string): com.carto.styles.LineEndType;
				public static values(): androidNative.Array<com.carto.styles.LineEndType>;
				public static swigToEnum(param0: number): com.carto.styles.LineEndType;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module LineEndType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.styles.LineEndType.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class LineJoinType {
				public static class: java.lang.Class<com.carto.styles.LineJoinType>;
				public static LINE_JOIN_TYPE_NONE: com.carto.styles.LineJoinType;
				public static LINE_JOIN_TYPE_MITER: com.carto.styles.LineJoinType;
				public static LINE_JOIN_TYPE_BEVEL: com.carto.styles.LineJoinType;
				public static LINE_JOIN_TYPE_ROUND: com.carto.styles.LineJoinType;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.styles.LineJoinType;
				public static values(): androidNative.Array<com.carto.styles.LineJoinType>;
				public static valueOf(param0: string): com.carto.styles.LineJoinType;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module LineJoinType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.styles.LineJoinType.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class LineStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.LineStyle>;
				public getClickWidth(): number;
				public getLineJoinType(): com.carto.styles.LineJoinType;
				public constructor(param0: number, param1: boolean);
				public getBitmap(): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public getWidth(): number;
				public getLineEndType(): com.carto.styles.LineEndType;
				public getStretchFactor(): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class LineStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.LineStyleBuilder>;
				public setBitmap(param0: com.carto.graphics.Bitmap): void;
				public getClickWidth(): number;
				public getLineJoinType(): com.carto.styles.LineJoinType;
				public setLineEndType(param0: com.carto.styles.LineEndType): void;
				public constructor(param0: number, param1: boolean);
				public setStretchFactor(param0: number): void;
				public constructor();
				public getBitmap(): com.carto.graphics.Bitmap;
				public setWidth(param0: number): void;
				public swigGetRawPtr(): number;
				public getWidth(): number;
				public buildStyle(): com.carto.styles.LineStyle;
				public setLineJoinType(param0: com.carto.styles.LineJoinType): void;
				public setClickWidth(param0: number): void;
				public getLineEndType(): com.carto.styles.LineEndType;
				public getStretchFactor(): number;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class MarkerStyle extends com.carto.styles.BillboardStyle {
				public static class: java.lang.Class<com.carto.styles.MarkerStyle>;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				public getClickSize(): number;
				public constructor(param0: number, param1: boolean);
				public getAnchorPointY(): number;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public getBitmap(): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public getSize(): number;
				public getAnchorPointX(): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class MarkerStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.MarkerStyleBuilder>;
				public setScalingMode(param0: com.carto.styles.BillboardScaling): void;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				public setAnchorPointY(param0: number): void;
				public setSize(param0: number): void;
				public constructor();
				public setClickSize(param0: number): void;
				public getSize(): number;
				public setAnchorPoint(param0: number, param1: number): void;
				public getAnchorPointX(): number;
				public setBitmap(param0: com.carto.graphics.Bitmap): void;
				public getClickSize(): number;
				public constructor(param0: number, param1: boolean);
				public getAnchorPointY(): number;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public setAnchorPointX(param0: number): void;
				public getBitmap(): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public setOrientationMode(param0: com.carto.styles.BillboardOrientation): void;
				public buildStyle(): com.carto.styles.MarkerStyle;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class NMLModelStyle extends com.carto.styles.BillboardStyle {
				public static class: java.lang.Class<com.carto.styles.NMLModelStyle>;
				public getModelAsset(): com.carto.core.BinaryData;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				public constructor(param0: number, param1: boolean);
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public swigGetRawPtr(): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class NMLModelStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.NMLModelStyleBuilder>;
				public getModelAsset(): com.carto.core.BinaryData;
				public setScalingMode(param0: com.carto.styles.BillboardScaling): void;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				public constructor(param0: number, param1: boolean);
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public setModelAsset(param0: com.carto.core.BinaryData): void;
				public constructor();
				public swigGetRawPtr(): number;
				public buildStyle(): com.carto.styles.NMLModelStyle;
				public setOrientationMode(param0: com.carto.styles.BillboardOrientation): void;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class PointStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.PointStyle>;
				public getClickSize(): number;
				public constructor(param0: number, param1: boolean);
				public getBitmap(): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public getSize(): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class PointStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.PointStyleBuilder>;
				public setBitmap(param0: com.carto.graphics.Bitmap): void;
				public getClickSize(): number;
				public constructor(param0: number, param1: boolean);
				public setSize(param0: number): void;
				public constructor();
				public getBitmap(): com.carto.graphics.Bitmap;
				public buildStyle(): com.carto.styles.PointStyle;
				public swigGetRawPtr(): number;
				public setClickSize(param0: number): void;
				public getSize(): number;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class Polygon3DStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.Polygon3DStyle>;
				public getSideColor(): com.carto.graphics.Color;
				public swigGetRawPtr(): number;
				public constructor(param0: number, param1: boolean);
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class Polygon3DStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.Polygon3DStyleBuilder>;
				public setSideColor(param0: com.carto.graphics.Color): void;
				public getSideColor(): com.carto.graphics.Color;
				public buildStyle(): com.carto.styles.Polygon3DStyle;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class PolygonStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.PolygonStyle>;
				public swigGetRawPtr(): number;
				public constructor(param0: number, param1: boolean);
				public getLineStyle(): com.carto.styles.LineStyle;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class PolygonStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.PolygonStyleBuilder>;
				public setLineStyle(param0: com.carto.styles.LineStyle): void;
				public constructor(param0: number, param1: boolean);
				public buildStyle(): com.carto.styles.PolygonStyle;
				public constructor();
				public swigGetRawPtr(): number;
				public getLineStyle(): com.carto.styles.LineStyle;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class PopupStyle extends com.carto.styles.BillboardStyle {
				public static class: java.lang.Class<com.carto.styles.PopupStyle>;
				public swigGetRawPtr(): number;
				public constructor(param0: number, param1: boolean);
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class PopupStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.PopupStyleBuilder>;
				public constructor(param0: number, param1: boolean);
				public buildStyle(): com.carto.styles.PopupStyle;
				public constructor();
				public swigGetRawPtr(): number;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class StringCartoCSSStyleSetMap extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.StringCartoCSSStyleSetMap>;
				public constructor(param0: number, param1: boolean);
				public del(param0: string): void;
				public constructor();
				public size(): number;
				public get_key(param0: number): string;
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

declare module com {
	export module carto {
		export module styles {
			export class Style extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.Style>;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getColor(): com.carto.graphics.Color;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class StyleBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.StyleBuilder>;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getColor(): com.carto.graphics.Color;
				public setColor(param0: com.carto.graphics.Color): void;
			}
		}
	}
}









declare module com {
	export module carto {
		export module styles {
			export class TextMargins extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.TextMargins>;
				public getTop(): number;
				public swigGetRawPtr(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public getLeft(): number;
				public constructor(param0: number, param1: boolean);
				public getBottom(): number;
				public getRight(): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class TextStyle extends com.carto.styles.LabelStyle {
				public static class: java.lang.Class<com.carto.styles.TextStyle>;
				public getStrokeWidth(): number;
				public isBreakLines(): boolean;
				public getTextField(): string;
				public getFontColor(): com.carto.graphics.Color;
				public getBorderColor(): com.carto.graphics.Color;
				public getBackgroundColor(): com.carto.graphics.Color;
				public constructor(param0: number, param1: boolean);
				public getFontName(): string;
				public swigGetRawPtr(): number;
				public getFontSize(): number;
				public getTextMargins(): com.carto.styles.TextMargins;
				public getBorderWidth(): number;
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class TextStyleBuilder extends com.carto.styles.LabelStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.TextStyleBuilder>;
				public getStrokeWidth(): number;
				public isBreakLines(): boolean;
				public getTextField(): string;
				public constructor();
				public setBreakLines(param0: boolean): void;
				public setTextField(param0: string): void;
				public setStrokeColor(param0: com.carto.graphics.Color): void;
				public setFontSize(param0: number): void;
				public setTextMargins(param0: com.carto.styles.TextMargins): void;
				public setStrokeWidth(param0: number): void;
				public getBorderColor(): com.carto.graphics.Color;
				public buildStyle(): com.carto.styles.LabelStyle;
				public getBackgroundColor(): com.carto.graphics.Color;
				public constructor(param0: number, param1: boolean);
				public getFontName(): string;
				public setBorderColor(param0: com.carto.graphics.Color): void;
				public swigGetRawPtr(): number;
				public getFontSize(): number;
				public setFontName(param0: string): void;
				public getTextMargins(): com.carto.styles.TextMargins;
				public getBorderWidth(): number;
				public setBackgroundColor(param0: com.carto.graphics.Color): void;
				public setBorderWidth(param0: number): void;
				public buildStyle(): com.carto.styles.TextStyle;
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}





declare module com {
	export module carto {
		export module ui {
			export class BalloonPopupButtonClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.BalloonPopupButtonClickInfo>;
				public getButton(): com.carto.vectorelements.BalloonPopupButton;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getClickInfo(): com.carto.ui.ClickInfo;
				public getVectorElement(): com.carto.vectorelements.VectorElement;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class BaseMapView extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.BaseMapView>;
				public onSurfaceCreated(): void;
				public getZoom(): number;
				public setZoom(param0: number, param1: number): void;
				public onSurfaceDestroyed(): void;
				public finishRendering(): void;
				public mapToScreen(param0: com.carto.core.MapPos): com.carto.core.ScreenPos;
				public onWheelEvent(param0: number, param1: number, param2: number): void;
				public onInputEvent(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				public getRedrawRequestListener(): com.carto.renderers.RedrawRequestListener;
				public constructor();
				public setFocusPos(param0: com.carto.core.MapPos, param1: number): void;
				public cancelAllTasks(): void;
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



declare module com {
	export module carto {
		export module ui {
			export class ClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.ClickInfo>;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.ui.ClickType, param1: number);
				public hashCode(): number;
				public getDuration(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public toString(): string;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class ClickType {
				public static class: java.lang.Class<com.carto.ui.ClickType>;
				public static CLICK_TYPE_SINGLE: com.carto.ui.ClickType;
				public static CLICK_TYPE_LONG: com.carto.ui.ClickType;
				public static CLICK_TYPE_DOUBLE: com.carto.ui.ClickType;
				public static CLICK_TYPE_DUAL: com.carto.ui.ClickType;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.ui.ClickType>;
				public static valueOf(param0: string): com.carto.ui.ClickType;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static swigToEnum(param0: number): com.carto.ui.ClickType;
			}
			export module ClickType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.ui.ClickType.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class ConfigChooser extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.EGLConfigChooser {
				public static class: java.lang.Class<com.carto.ui.ConfigChooser>;
				public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class GLTextureView extends globalAndroid.view.TextureView implements globalAndroid.view.TextureView.SurfaceTextureListener, globalAndroid.view.View.OnLayoutChangeListener {
				public static class: java.lang.Class<com.carto.ui.GLTextureView>;
				public static RENDERMODE_WHEN_DIRTY: number;
				public static RENDERMODE_CONTINUOUSLY: number;
				public static DEBUG_CHECK_GL_ERROR: number;
				public static DEBUG_LOG_GL_CALLS: number;
				public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
				public surfaceCreated(param0: globalAndroid.graphics.SurfaceTexture): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onPause(): void;
				public setEGLConfigChooser(param0: boolean): void;
				public setGLWrapper(param0: globalAndroid.opengl.GLSurfaceView.GLWrapper): void;
				public surfaceDestroyed(param0: globalAndroid.graphics.SurfaceTexture): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
				public sendAccessibilityEvent(param0: number): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public setDebugFlags(param0: number): void;
				public surfaceChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number, param3: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setEGLConfigChooser(param0: globalAndroid.opengl.GLSurfaceView.EGLConfigChooser): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
				public getPreserveEGLContextOnPause(): boolean;
				public setEGLContextFactory(param0: globalAndroid.opengl.GLSurfaceView.EGLContextFactory): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onResume(): void;
				public addSurfaceTextureListener(param0: globalAndroid.view.TextureView.SurfaceTextureListener): void;
				public queueEvent(param0: java.lang.Runnable): void;
				public setRenderer(param0: globalAndroid.opengl.GLSurfaceView.Renderer): void;
				public setEGLConfigChooser(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setEGLContextClientVersion(param0: number): void;
				public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public getDebugFlags(): number;
				public setRenderMode(param0: number): void;
				public getRenderMode(): number;
				public requestRender(): void;
				public onDetachedFromWindow(): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setPreserveEGLContextOnPause(param0: boolean): void;
				public onAttachedToWindow(): void;
				public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
				public setEGLWindowSurfaceFactory(param0: globalAndroid.opengl.GLSurfaceView.EGLWindowSurfaceFactory): void;
			}
			export module GLTextureView {
				export abstract class BaseConfigChooser extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.EGLConfigChooser {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.BaseConfigChooser>;
					public mConfigSpec: androidNative.Array<number>;
					public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					public constructor(param0: com.carto.ui.GLTextureView, param1: androidNative.Array<number>);
				}
				export class ComponentSizeChooser extends com.carto.ui.GLTextureView.BaseConfigChooser {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.ComponentSizeChooser>;
					public redSize: number;
					public greenSize: number;
					public blueSize: number;
					public alphaSize: number;
					public depthSize: number;
					public stencilSize: number;
					public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					public constructor(param0: com.carto.ui.GLTextureView, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
					public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: androidNative.Array<javax.microedition.khronos.egl.EGLConfig>): javax.microedition.khronos.egl.EGLConfig;
					public constructor(param0: com.carto.ui.GLTextureView, param1: androidNative.Array<number>);
				}
				export class DefaultContextFactory extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.EGLContextFactory {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.DefaultContextFactory>;
					public destroyContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLContext): void;
					public createContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
				}
				export class DefaultWindowSurfaceFactory extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.EGLWindowSurfaceFactory {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.DefaultWindowSurfaceFactory>;
					public createWindowSurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig, param3: any): javax.microedition.khronos.egl.EGLSurface;
					public destroySurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLSurface): void;
				}
				export class EglHelper extends java.lang.Object {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.EglHelper>;
					public static throwEglException(param0: string, param1: number): void;
					public static logEglErrorAsWarning(param0: string, param1: string, param2: number): void;
					public swap(): number;
					public finish(): void;
					public start(): void;
					public createSurface(): boolean;
					public destroySurface(): void;
					public static formatEglError(param0: string, param1: number): string;
					public constructor(param0: java.lang.ref.WeakReference<com.carto.ui.GLTextureView>);
				}
				export class GLThread extends java.lang.Thread {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.GLThread>;
					public ableToDraw(): boolean;
					public run(): void;
					public queueEvent(param0: java.lang.Runnable): void;
					public surfaceDestroyed(): void;
					public requestRender(): void;
					public onResume(): void;
					public requestReleaseEglContextLocked(): void;
					public surfaceCreated(): void;
					public onWindowResize(param0: number, param1: number): void;
					public getRenderMode(): number;
					public onPause(): void;
					public requestExitAndWait(): void;
					public setRenderMode(param0: number): void;
				}
				export class GLThreadManager extends java.lang.Object {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.GLThreadManager>;
					public tryAcquireEglContextLocked(param0: com.carto.ui.GLTextureView.GLThread): boolean;
					public releaseEglContextLocked(param0: com.carto.ui.GLTextureView.GLThread): void;
					public shouldReleaseEGLContextWhenPausing(): boolean;
					public checkGLDriver(param0: javax.microedition.khronos.opengles.GL10): void;
					public shouldTerminateEGLWhenPausing(): boolean;
					public threadExiting(param0: com.carto.ui.GLTextureView.GLThread): void;
				}
				export class LogWriter extends java.io.Writer {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.LogWriter>;
					public write(param0: string, param1: number, param2: number): void;
					public append(param0: string, param1: number, param2: number): java.io.Writer;
					public write(param0: string): void;
					public append(param0: string): java.lang.Appendable;
					public close(): void;
					public write(param0: androidNative.Array<string>): void;
					public flush(): void;
					public write(param0: number): void;
					public append(param0: string): java.io.Writer;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public write(param0: androidNative.Array<string>, param1: number, param2: number): void;
				}
				export class SimpleEGLConfigChooser extends com.carto.ui.GLTextureView.ComponentSizeChooser {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.SimpleEGLConfigChooser>;
					public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					public constructor(param0: com.carto.ui.GLTextureView, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
					public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: androidNative.Array<javax.microedition.khronos.egl.EGLConfig>): javax.microedition.khronos.egl.EGLConfig;
					public constructor(param0: com.carto.ui.GLTextureView, param1: androidNative.Array<number>);
					public constructor(param0: com.carto.ui.GLTextureView, param1: boolean);
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class MapClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapClickInfo>;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public getClickPos(): com.carto.core.MapPos;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getClickInfo(): com.carto.ui.ClickInfo;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class MapEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapEventListener>;
				public onMapMoved(): void;
				public constructor(param0: number, param1: boolean);
				public onMapInteraction(param0: com.carto.ui.MapInteractionInfo): void;
				public constructor();
				public onMapStable(): void;
				public swigGetRawPtr(): number;
				public onMapClicked(param0: com.carto.ui.MapClickInfo): void;
				public onMapIdle(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class MapInteractionInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapInteractionInfo>;
				public isPanAction(): boolean;
				public swigGetRawPtr(): number;
				public isRotateAction(): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public isAnimationStarted(): boolean;
				public isZoomAction(): boolean;
				public isTiltAction(): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class MapRedrawRequestListener extends com.carto.renderers.RedrawRequestListener {
				public static class: java.lang.Class<com.carto.ui.MapRedrawRequestListener>;
				public constructor(param0: number, param1: boolean);
				public onRedrawRequested(): void;
				public constructor(param0: com.carto.ui.MapView);
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class MapView extends globalAndroid.opengl.GLSurfaceView implements globalAndroid.opengl.GLSurfaceView.Renderer, com.carto.ui.MapViewInterface {
				public static class: java.lang.Class<com.carto.ui.MapView>;
				public surfaceRedrawNeededAsync(param0: globalAndroid.view.SurfaceHolder, param1: java.lang.Runnable): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public mapToScreen(param0: com.carto.core.MapPos): com.carto.core.ScreenPos;
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
				public getLayers(): com.carto.components.Layers;
				public zoom(param0: number, param1: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public pan(param0: com.carto.core.MapVec, param1: number): void;
				public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public rotate(param0: number, param1: number): void;
				public zoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public static registerLicense(param0: string, param1: globalAndroid.content.Context): boolean;
				public setZoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public getMapEventListener(): com.carto.ui.MapEventListener;
				public getFocusPos(): com.carto.core.MapPos;
				public screenToMap(param0: com.carto.core.ScreenPos): com.carto.core.MapPos;
				public getOptions(): com.carto.components.Options;
				public surfaceRedrawNeeded(param0: globalAndroid.view.SurfaceHolder): void;
				public getMapRenderer(): com.carto.renderers.MapRenderer;
				public setMapRotation(param0: number, param1: number): void;
				public getZoom(): number;
				public setZoom(param0: number, param1: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getMapRotation(): number;
				public setFocusPos(param0: com.carto.core.MapPos, param1: number): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public tilt(param0: number, param1: number): void;
				public setMapEventListener(param0: com.carto.ui.MapEventListener): void;
				public setMapRotation(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: number): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public rotate(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public getTilt(): number;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class MapViewInterface extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapViewInterface>;
				/**
				 * Constructs a new instance of the com.carto.ui.MapViewInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getLayers(): com.carto.components.Layers;
					getOptions(): com.carto.components.Options;
					getMapRenderer(): com.carto.renderers.MapRenderer;
					getFocusPos(): com.carto.core.MapPos;
					getMapRotation(): number;
					getTilt(): number;
					getZoom(): number;
					pan(param0: com.carto.core.MapVec, param1: number): void;
					setFocusPos(param0: com.carto.core.MapPos, param1: number): void;
					rotate(param0: number, param1: number): void;
					rotate(param0: number, param1: com.carto.core.MapPos, param2: number): void;
					setMapRotation(param0: number, param1: number): void;
					setMapRotation(param0: number, param1: com.carto.core.MapPos, param2: number): void;
					tilt(param0: number, param1: number): void;
					setTilt(param0: number, param1: number): void;
					zoom(param0: number, param1: number): void;
					zoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
					setZoom(param0: number, param1: number): void;
					setZoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
					moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: number): void;
					moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
					getMapEventListener(): com.carto.ui.MapEventListener;
					setMapEventListener(param0: com.carto.ui.MapEventListener): void;
					screenToMap(param0: com.carto.core.ScreenPos): com.carto.core.MapPos;
					mapToScreen(param0: com.carto.core.MapPos): com.carto.core.ScreenPos;
					cancelAllTasks(): void;
					clearPreloadingCaches(): void;
					clearAllCaches(): void;
				});
				public constructor();
				public setMapRotation(param0: number, param1: number): void;
				public getZoom(): number;
				public setZoom(param0: number, param1: number): void;
				public mapToScreen(param0: com.carto.core.MapPos): com.carto.core.ScreenPos;
				public getMapRotation(): number;
				public setFocusPos(param0: com.carto.core.MapPos, param1: number): void;
				public cancelAllTasks(): void;
				public setTilt(param0: number, param1: number): void;
				public clearPreloadingCaches(): void;
				public clearAllCaches(): void;
				public tilt(param0: number, param1: number): void;
				public getLayers(): com.carto.components.Layers;
				public setMapEventListener(param0: com.carto.ui.MapEventListener): void;
				public zoom(param0: number, param1: number): void;
				public pan(param0: com.carto.core.MapVec, param1: number): void;
				public setMapRotation(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
				public rotate(param0: number, param1: number): void;
				public zoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: number): void;
				public setZoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public getMapEventListener(): com.carto.ui.MapEventListener;
				public rotate(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public getFocusPos(): com.carto.core.MapPos;
				public getTilt(): number;
				public screenToMap(param0: com.carto.core.ScreenPos): com.carto.core.MapPos;
				public getOptions(): com.carto.components.Options;
				public getMapRenderer(): com.carto.renderers.MapRenderer;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class PopupClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.PopupClickInfo>;
				public getElementClickPos(): com.carto.core.ScreenPos;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public getClickPos(): com.carto.core.MapPos;
				public hashCode(): number;
				public getPopup(): com.carto.vectorelements.Popup;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getClickInfo(): com.carto.ui.ClickInfo;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class PopupDrawInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.PopupDrawInfo>;
				public swigGetRawPtr(): number;
				public getAnchorScreenPos(): com.carto.core.ScreenPos;
				public getScreenBounds(): com.carto.core.ScreenBounds;
				public hashCode(): number;
				public getPopup(): com.carto.vectorelements.Popup;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getDPToPX(): number;
				public constructor(param0: com.carto.core.ScreenPos, param1: com.carto.core.ScreenBounds, param2: com.carto.vectorelements.Popup, param3: number);
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class RasterTileClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.RasterTileClickInfo>;
				public getClickType(): com.carto.ui.ClickType;
				public getNearestColor(): com.carto.graphics.Color;
				public getClickPos(): com.carto.core.MapPos;
				public constructor(param0: number, param1: boolean);
				public getInterpolatedColor(): com.carto.graphics.Color;
				public getClickInfo(): com.carto.ui.ClickInfo;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public getMapTile(): com.carto.core.MapTile;
				public getLayer(): com.carto.layers.Layer;
				public equals(param0: any): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class TextureMapRedrawRequestListener extends com.carto.renderers.RedrawRequestListener {
				public static class: java.lang.Class<com.carto.ui.TextureMapRedrawRequestListener>;
				public constructor(param0: com.carto.ui.TextureMapView);
				public constructor(param0: number, param1: boolean);
				public onRedrawRequested(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class TextureMapView extends com.carto.ui.GLTextureView implements globalAndroid.opengl.GLSurfaceView.Renderer, com.carto.ui.MapViewInterface {
				public static class: java.lang.Class<com.carto.ui.TextureMapView>;
				public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public mapToScreen(param0: com.carto.core.MapPos): com.carto.core.ScreenPos;
				public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public cancelAllTasks(): void;
				public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
				public sendAccessibilityEvent(param0: number): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public setTilt(param0: number, param1: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public clearPreloadingCaches(): void;
				public clearAllCaches(): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public getLayers(): com.carto.components.Layers;
				public zoom(param0: number, param1: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public pan(param0: com.carto.core.MapVec, param1: number): void;
				public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public rotate(param0: number, param1: number): void;
				public zoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public static registerLicense(param0: string, param1: globalAndroid.content.Context): boolean;
				public setZoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public getMapEventListener(): com.carto.ui.MapEventListener;
				public getFocusPos(): com.carto.core.MapPos;
				public screenToMap(param0: com.carto.core.ScreenPos): com.carto.core.MapPos;
				public getOptions(): com.carto.components.Options;
				public getMapRenderer(): com.carto.renderers.MapRenderer;
				public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
				public setMapRotation(param0: number, param1: number): void;
				public getZoom(): number;
				public setZoom(param0: number, param1: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getMapRotation(): number;
				public setFocusPos(param0: com.carto.core.MapPos, param1: number): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public tilt(param0: number, param1: number): void;
				public setMapEventListener(param0: com.carto.ui.MapEventListener): void;
				public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
				public setMapRotation(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: number): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public rotate(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public getTilt(): number;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class UTFGridClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.UTFGridClickInfo>;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public getClickPos(): com.carto.core.MapPos;
				public hashCode(): number;
				public getLayer(): com.carto.layers.Layer;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getElementInfo(): com.carto.core.Variant;
				public getClickInfo(): com.carto.ui.ClickInfo;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class VectorElementClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorElementClickInfo>;
				public getClickType(): com.carto.ui.ClickType;
				public getClickPos(): com.carto.core.MapPos;
				public getElementClickPos(): com.carto.core.MapPos;
				public constructor(param0: number, param1: boolean);
				public getClickInfo(): com.carto.ui.ClickInfo;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public getLayer(): com.carto.layers.Layer;
				public equals(param0: any): boolean;
				public getVectorElement(): com.carto.vectorelements.VectorElement;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class VectorElementDragInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorElementDragInfo>;
				public getMapPos(): com.carto.core.MapPos;
				public swigGetRawPtr(): number;
				public getDragMode(): com.carto.ui.VectorElementDragMode;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getScreenPos(): com.carto.core.ScreenPos;
				public getVectorElement(): com.carto.vectorelements.VectorElement;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class VectorElementDragMode {
				public static class: java.lang.Class<com.carto.ui.VectorElementDragMode>;
				public static VECTOR_ELEMENT_DRAG_MODE_VERTEX: com.carto.ui.VectorElementDragMode;
				public static VECTOR_ELEMENT_DRAG_MODE_ELEMENT: com.carto.ui.VectorElementDragMode;
				public static values(): androidNative.Array<com.carto.ui.VectorElementDragMode>;
				public swigValue(): number;
				public static valueOf(param0: string): com.carto.ui.VectorElementDragMode;
				public static swigToEnum(param0: number): com.carto.ui.VectorElementDragMode;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module VectorElementDragMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.ui.VectorElementDragMode.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class VectorTileClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorTileClickInfo>;
				public getClickType(): com.carto.ui.ClickType;
				public getClickPos(): com.carto.core.MapPos;
				public constructor(param0: number, param1: boolean);
				public getFeatureClickPos(): com.carto.core.MapPos;
				public getClickInfo(): com.carto.ui.ClickInfo;
				public swigGetRawPtr(): number;
				public hashCode(): number;
				public getMapTile(): com.carto.core.MapTile;
				public getLayer(): com.carto.layers.Layer;
				public equals(param0: any): boolean;
				public getFeatureLayerName(): string;
				public getFeatureId(): number;
				public getFeature(): com.carto.geometry.VectorTileFeature;
			}
		}
	}
}



declare module com {
	export module carto {
		export module utils {
			export class AndroidUtils extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.AndroidUtils>;
				public static getDeviceType(): string;
				public constructor(param0: number, param1: boolean);
				public static attachJVM(param0: any): void;
				public static getDeviceOS(): string;
				public static setContext(param0: globalAndroid.content.Context): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module utils {
			export class AssetPackage extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.AssetPackage>;
				public constructor(param0: number, param1: boolean);
				public getAssetNames(): com.carto.core.StringVector;
				public constructor();
				public swigGetRawPtr(): number;
				public loadAsset(param0: string): com.carto.core.BinaryData;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module utils {
			export class AssetUtils extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.AssetUtils>;
				public static setAssetManagerPointer(param0: globalAndroid.content.res.AssetManager): void;
				public static loadAsset(param0: string): com.carto.core.BinaryData;
				public constructor(param0: number, param1: boolean);
			}
		}
	}
}



declare module com {
	export module carto {
		export module utils {
			export class BitmapUtils extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.BitmapUtils>;
				public constructor(param0: number, param1: boolean);
				public static createAndroidBitmapFromBitmap(param0: com.carto.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public static loadBitmapFromAssets(param0: string): com.carto.graphics.Bitmap;
				public static createBitmapFromAndroidBitmap(param0: globalAndroid.graphics.Bitmap): com.carto.graphics.Bitmap;
				public static loadBitmapFromFile(param0: string): com.carto.graphics.Bitmap;
			}
		}
	}
}



declare module com {
	export module carto {
		export module utils {
			export class DontObfuscate extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<com.carto.utils.DontObfuscate>;
				/**
				 * Constructs a new instance of the com.carto.utils.DontObfuscate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module carto {
		export module utils {
			export class Log extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.Log>;
				public static setShowInfo(param0: boolean): void;
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

declare module com {
	export module carto {
		export module utils {
			export class LogEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.LogEventListener>;
				public onErrorEvent(param0: string): boolean;
				public onWarnEvent(param0: string): boolean;
				public onInfoEvent(param0: string): boolean;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public onDebugEvent(param0: string): boolean;
				public onFatalEvent(param0: string): boolean;
			}
		}
	}
}





declare module com {
	export module carto {
		export module utils {
			export class TileUtils extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.TileUtils>;
				public static calculateMapTileOrigin(param0: com.carto.core.MapTile, param1: com.carto.projections.Projection): com.carto.core.MapPos;
				public static calculateMapTile(param0: com.carto.core.MapPos, param1: number, param2: com.carto.projections.Projection): com.carto.core.MapTile;
				public constructor(param0: number, param1: boolean);
				public static calculateMapTileBounds(param0: com.carto.core.MapTile, param1: com.carto.projections.Projection): com.carto.core.MapBounds;
				public static calculateClippedMapTile(param0: com.carto.core.MapPos, param1: number, param2: com.carto.projections.Projection): com.carto.core.MapTile;
			}
		}
	}
}



declare module com {
	export module carto {
		export module utils {
			export class ZippedAssetPackage extends com.carto.utils.AssetPackage {
				public static class: java.lang.Class<com.carto.utils.ZippedAssetPackage>;
				public getLocalAssetNames(): com.carto.core.StringVector;
				public constructor(param0: number, param1: boolean);
				public getAssetNames(): com.carto.core.StringVector;
				public constructor();
				public swigGetRawPtr(): number;
				public loadAsset(param0: string): com.carto.core.BinaryData;
				public constructor(param0: com.carto.core.BinaryData);
				public constructor(param0: com.carto.core.BinaryData, param1: com.carto.utils.AssetPackage);
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class BalloonPopup extends com.carto.vectorelements.Popup {
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopup>;
				public removeButton(param0: com.carto.vectorelements.BalloonPopupButton): void;
				public addButton(param0: com.carto.vectorelements.BalloonPopupButton): void;
				public constructor(param0: com.carto.vectorelements.Billboard, param1: com.carto.styles.BalloonPopupStyle, param2: string, param3: string);
				public clearButtons(): void;
				public getDescription(): string;
				public setBalloonPopupEventListener(param0: com.carto.vectorelements.BalloonPopupEventListener): void;
				public setStyle(param0: com.carto.styles.BalloonPopupStyle): void;
				public getBalloonPopupEventListener(): com.carto.vectorelements.BalloonPopupEventListener;
				public drawBitmap(param0: com.carto.core.ScreenPos, param1: number, param2: number, param3: number): com.carto.graphics.Bitmap;
				public setTitle(param0: string): void;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.BalloonPopupStyle, param2: string, param3: string);
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.BalloonPopupStyle, param2: string, param3: string);
				public constructor(param0: number, param1: boolean);
				public getStyle(): com.carto.styles.PopupStyle;
				public getTitle(): string;
				public setStyle(param0: com.carto.styles.PopupStyle): void;
				public swigGetRawPtr(): number;
				public replaceButton(param0: com.carto.vectorelements.BalloonPopupButton, param1: com.carto.vectorelements.BalloonPopupButton): void;
				public processClick(param0: com.carto.ui.ClickInfo, param1: com.carto.core.MapPos, param2: com.carto.core.ScreenPos): boolean;
				public setDescription(param0: string): void;
				public getStyle(): com.carto.styles.BalloonPopupStyle;
			}
		}
	}
}

declare module com {
	export module carto {
		export module vectorelements {
			export class BalloonPopupButton extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopupButton>;
				public setTag(param0: com.carto.core.Variant): void;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.styles.BalloonPopupButtonStyle, param1: string);
				public getText(): string;
				public swigGetRawPtr(): number;
				public getTag(): com.carto.core.Variant;
				public getStyle(): com.carto.styles.BalloonPopupButtonStyle;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class BalloonPopupEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopupEventListener>;
				public onButtonClicked(param0: com.carto.ui.BalloonPopupButtonClickInfo): boolean;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
			}
		}
	}
}





declare module com {
	export module carto {
		export module vectorelements {
			export class Billboard extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.Billboard>;
				public getRootGeometry(): com.carto.geometry.Geometry;
				public constructor(param0: number, param1: boolean);
				public getBounds(): com.carto.core.MapBounds;
				public setPos(param0: com.carto.core.MapPos): void;
				public swigGetRawPtr(): number;
				public setBaseBillboard(param0: com.carto.vectorelements.Billboard): void;
				public setGeometry(param0: com.carto.geometry.Geometry): void;
				public getRotation(): number;
				public setRotation(param0: number): void;
				public getBaseBillboard(): com.carto.vectorelements.Billboard;
				public getGeometry(): com.carto.geometry.Geometry;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class CustomPopup extends com.carto.vectorelements.Popup {
				public static class: java.lang.Class<com.carto.vectorelements.CustomPopup>;
				public constructor(param0: com.carto.vectorelements.Billboard, param1: com.carto.styles.PopupStyle, param2: com.carto.vectorelements.CustomPopupHandler);
				public getPopupHandler(): com.carto.vectorelements.CustomPopupHandler;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.PopupStyle, param2: com.carto.vectorelements.CustomPopupHandler);
				public drawBitmap(param0: com.carto.core.ScreenPos, param1: number, param2: number, param3: number): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public processClick(param0: com.carto.ui.ClickInfo, param1: com.carto.core.MapPos, param2: com.carto.core.ScreenPos): boolean;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.PopupStyle, param2: com.carto.vectorelements.CustomPopupHandler);
			}
		}
	}
}

declare module com {
	export module carto {
		export module vectorelements {
			export class CustomPopupHandler extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.CustomPopupHandler>;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public onPopupClicked(param0: com.carto.ui.PopupClickInfo): boolean;
				public onDrawPopup(param0: com.carto.ui.PopupDrawInfo): com.carto.graphics.Bitmap;
			}
		}
	}
}





declare module com {
	export module carto {
		export module vectorelements {
			export class GeometryCollection extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.GeometryCollection>;
				public setGeometry(param0: com.carto.geometry.MultiGeometry): void;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.geometry.MultiGeometry, param1: com.carto.styles.GeometryCollectionStyle);
				public getGeometry(): com.carto.geometry.MultiGeometry;
				public getStyle(): com.carto.styles.GeometryCollectionStyle;
				public swigGetRawPtr(): number;
				public setStyle(param0: com.carto.styles.GeometryCollectionStyle): void;
				public getGeometry(): com.carto.geometry.Geometry;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class Label extends com.carto.vectorelements.Billboard {
				public static class: java.lang.Class<com.carto.vectorelements.Label>;
				public constructor(param0: number, param1: boolean);
				public setStyle(param0: com.carto.styles.LabelStyle): void;
				public drawBitmap(param0: number): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public getStyle(): com.carto.styles.LabelStyle;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class Line extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.Line>;
				public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.styles.LineStyle);
				public setStyle(param0: com.carto.styles.LineStyle): void;
				public getGeometry(): com.carto.geometry.LineGeometry;
				public getStyle(): com.carto.styles.LineStyle;
				public constructor(param0: number, param1: boolean);
				public setPoses(param0: com.carto.core.MapPosVector): void;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.geometry.LineGeometry, param1: com.carto.styles.LineStyle);
				public setGeometry(param0: com.carto.geometry.LineGeometry): void;
				public getGeometry(): com.carto.geometry.Geometry;
				public getPoses(): com.carto.core.MapPosVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class Marker extends com.carto.vectorelements.Billboard {
				public static class: java.lang.Class<com.carto.vectorelements.Marker>;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.MarkerStyle);
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.vectorelements.Billboard, param1: com.carto.styles.MarkerStyle);
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.MarkerStyle);
				public getStyle(): com.carto.styles.MarkerStyle;
				public setStyle(param0: com.carto.styles.MarkerStyle): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class NMLModel extends com.carto.vectorelements.Billboard {
				public static class: java.lang.Class<com.carto.vectorelements.NMLModel>;
				public setRotationAxis(param0: com.carto.core.MapVec): void;
				public getStyle(): com.carto.styles.NMLModelStyle;
				public getScale(): number;
				public setRotation(param0: com.carto.core.MapVec, param1: number): void;
				public constructor(param0: com.carto.vectorelements.Billboard, param1: com.carto.styles.NMLModelStyle);
				public setStyle(param0: com.carto.styles.NMLModelStyle): void;
				/** @deprecated */
				public setRotationAngle(param0: number): void;
				/** @deprecated */
				public getRotationAngle(): number;
				public getRotationAxis(): com.carto.core.MapVec;
				public setScale(param0: number): void;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.NMLModelStyle);
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.NMLModelStyle);
				public swigGetRawPtr(): number;
				public setRotation(param0: number): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class Point extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.Point>;
				public getStyle(): com.carto.styles.PointStyle;
				public constructor(param0: com.carto.geometry.PointGeometry, param1: com.carto.styles.PointStyle);
				public constructor(param0: number, param1: boolean);
				public setPos(param0: com.carto.core.MapPos): void;
				public getPos(): com.carto.core.MapPos;
				public swigGetRawPtr(): number;
				public getGeometry(): com.carto.geometry.PointGeometry;
				public setStyle(param0: com.carto.styles.PointStyle): void;
				public setGeometry(param0: com.carto.geometry.PointGeometry): void;
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.PointStyle);
				public getGeometry(): com.carto.geometry.Geometry;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class Polygon extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.Polygon>;
				public getHoles(): com.carto.core.MapPosVectorVector;
				public constructor(param0: number, param1: boolean);
				public setGeometry(param0: com.carto.geometry.PolygonGeometry): void;
				public setHoles(param0: com.carto.core.MapPosVectorVector): void;
				public setPoses(param0: com.carto.core.MapPosVector): void;
				public constructor(param0: com.carto.geometry.PolygonGeometry, param1: com.carto.styles.PolygonStyle);
				public getStyle(): com.carto.styles.PolygonStyle;
				public getGeometry(): com.carto.geometry.PolygonGeometry;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.styles.PolygonStyle);
				public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.core.MapPosVectorVector, param2: com.carto.styles.PolygonStyle);
				public setStyle(param0: com.carto.styles.PolygonStyle): void;
				public getGeometry(): com.carto.geometry.Geometry;
				public getPoses(): com.carto.core.MapPosVector;
			}
		}
	}
}

declare module com {
	export module carto {
		export module vectorelements {
			export class Polygon3D extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.Polygon3D>;
				public setHeight(param0: number): void;
				public getHeight(): number;
				public getHoles(): com.carto.core.MapPosVectorVector;
				public constructor(param0: number, param1: boolean);
				public setGeometry(param0: com.carto.geometry.PolygonGeometry): void;
				public setHoles(param0: com.carto.core.MapPosVectorVector): void;
				public setPoses(param0: com.carto.core.MapPosVector): void;
				public getStyle(): com.carto.styles.Polygon3DStyle;
				public setStyle(param0: com.carto.styles.Polygon3DStyle): void;
				public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.core.MapPosVectorVector, param2: com.carto.styles.Polygon3DStyle, param3: number);
				public getGeometry(): com.carto.geometry.PolygonGeometry;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.geometry.PolygonGeometry, param1: com.carto.styles.Polygon3DStyle, param2: number);
				public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.styles.Polygon3DStyle, param2: number);
				public getGeometry(): com.carto.geometry.Geometry;
				public getPoses(): com.carto.core.MapPosVector;
			}
		}
	}
}





declare module com {
	export module carto {
		export module vectorelements {
			export class Popup extends com.carto.vectorelements.Billboard {
				public static class: java.lang.Class<com.carto.vectorelements.Popup>;
				public constructor(param0: number, param1: boolean);
				public getStyle(): com.carto.styles.PopupStyle;
				public getAnchorPointY(): number;
				public setAnchorPointY(param0: number): void;
				public drawBitmap(param0: com.carto.core.ScreenPos, param1: number, param2: number, param3: number): com.carto.graphics.Bitmap;
				public setAnchorPointX(param0: number): void;
				public setStyle(param0: com.carto.styles.PopupStyle): void;
				public swigGetRawPtr(): number;
				public processClick(param0: com.carto.ui.ClickInfo, param1: com.carto.core.MapPos, param2: com.carto.core.ScreenPos): boolean;
				public setAnchorPoint(param0: number, param1: number): void;
				public getAnchorPointX(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class Text extends com.carto.vectorelements.Label {
				public static class: java.lang.Class<com.carto.vectorelements.Text>;
				public constructor(param0: com.carto.vectorelements.Billboard, param1: com.carto.styles.TextStyle, param2: string);
				public constructor(param0: number, param1: boolean);
				public setStyle(param0: com.carto.styles.LabelStyle): void;
				public drawBitmap(param0: number): com.carto.graphics.Bitmap;
				public getText(): string;
				public swigGetRawPtr(): number;
				public getStyle(): com.carto.styles.LabelStyle;
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.TextStyle, param2: string);
				public getStyle(): com.carto.styles.TextStyle;
				public setStyle(param0: com.carto.styles.TextStyle): void;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.TextStyle, param2: string);
				public setText(param0: string): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class VectorElement extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.VectorElement>;
				public setMetaData(param0: com.carto.core.StringVariantMap): void;
				public isVisible(): boolean;
				public notifyElementChanged(): void;
				public getId(): number;
				public constructor(param0: number, param1: boolean);
				public getBounds(): com.carto.core.MapBounds;
				public getMetaDataElement(param0: string): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public setMetaDataElement(param0: string, param1: com.carto.core.Variant): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public setId(param0: number): void;
				public getMetaData(): com.carto.core.StringVariantMap;
				public containsMetaDataKey(param0: string): boolean;
				public setVisible(param0: boolean): void;
				public getGeometry(): com.carto.geometry.Geometry;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class VectorElementVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.VectorElementVector>;
				public get(param0: number): com.carto.vectorelements.VectorElement;
				public add(param0: com.carto.vectorelements.VectorElement): void;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
				public capacity(): number;
				public clear(): void;
				public constructor(param0: number);
				public set(param0: number, param1: com.carto.vectorelements.VectorElement): void;
				public isEmpty(): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module vectortiles {
			export class CartoVectorTileDecoder extends com.carto.vectortiles.VectorTileDecoder {
				public static class: java.lang.Class<com.carto.vectortiles.CartoVectorTileDecoder>;
				public addFallbackFont(param0: com.carto.core.BinaryData): void;
				public setLayerStyleSet(param0: string, param1: com.carto.styles.CartoCSSStyleSet): void;
				public constructor(param0: com.carto.core.StringVector, param1: com.carto.styles.StringCartoCSSStyleSetMap);
				public setLayerVisible(param0: string, param1: boolean): void;
				public constructor(param0: number, param1: boolean);
				public getMaxZoom(): number;
				public swigGetRawPtr(): number;
				public isLayerVisible(param0: string): boolean;
				public getLayerStyleSet(param0: string): com.carto.styles.CartoCSSStyleSet;
				public getLayerIds(): com.carto.core.StringVector;
				public getMinZoom(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectortiles {
			export class MBVectorTileDecoder extends com.carto.vectortiles.VectorTileDecoder {
				public static class: java.lang.Class<com.carto.vectortiles.MBVectorTileDecoder>;
				public getCartoCSSStyleSet(): com.carto.styles.CartoCSSStyleSet;
				public getStyleParameters(): com.carto.core.StringVector;
				public addFallbackFont(param0: com.carto.core.BinaryData): void;
				public constructor(param0: com.carto.styles.CompiledStyleSet);
				public getStyleParameter(param0: string): string;
				public constructor(param0: com.carto.styles.CartoCSSStyleSet);
				public setJSONStyleParameters(param0: string): void;
				public setCartoCSSStyleSet(param0: com.carto.styles.CartoCSSStyleSet): void;
				public constructor(param0: number, param1: boolean);
				public setCompiledStyleSet(param0: com.carto.styles.CompiledStyleSet): void;
				public getCompiledStyleSet(): com.carto.styles.CompiledStyleSet;
				public setStyleParameter(param0: string, param1: string): boolean;
				public getMaxZoom(): number;
				public swigGetRawPtr(): number;
				public setFeatureIdOverride(param0: boolean): void;
				public isFeatureIdOverride(): boolean;
				public setStyleParameters(param0: com.carto.core.StringMap): void;
				public getMinZoom(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectortiles {
			export class TorqueTileDecoder extends com.carto.vectortiles.VectorTileDecoder {
				public static class: java.lang.Class<com.carto.vectortiles.TorqueTileDecoder>;
				public constructor(param0: com.carto.styles.CartoCSSStyleSet);
				public addFallbackFont(param0: com.carto.core.BinaryData): void;
				public getStyleSet(): com.carto.styles.CartoCSSStyleSet;
				public constructor(param0: number, param1: boolean);
				public getFrameCount(): number;
				public getMaxZoom(): number;
				public setStyleSet(param0: com.carto.styles.CartoCSSStyleSet): void;
				public swigGetRawPtr(): number;
				public getResolution(): number;
				public getAnimationDuration(): number;
				public getMinZoom(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectortiles {
			export class VectorTileDecoder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectortiles.VectorTileDecoder>;
				public addFallbackFont(param0: com.carto.core.BinaryData): void;
				public constructor(param0: number, param1: boolean);
				public getMaxZoom(): number;
				public swigGetRawPtr(): number;
				public notifyDecoderChanged(): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getMinZoom(): number;
			}
		}
	}
}



//Generics information:

