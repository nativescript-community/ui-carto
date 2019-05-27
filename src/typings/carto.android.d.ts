declare module com {
	export module carto {
		export module components {
			export class Layers {
				public static class: java.lang.Class<com.carto.components.Layers>;
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
				public addAll(param0: com.carto.layers.LayerVector): void;
				public hashCode(): number;
				public getAll(): com.carto.layers.LayerVector;
				public equals(param0: any): boolean;
				public clear(): void;
				public static getCPtr(param0: com.carto.components.Layers): number;
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
			export class LicenseManagerListener {
				public static class: java.lang.Class<com.carto.components.LicenseManagerListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(param0: com.carto.components.LicenseManagerListener): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public onLicenseUpdated(param0: string): void;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.components.LicenseManagerListener;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
			}
		}
	}
}





declare module com {
	export module carto {
		export module components {
			export class Options {
				public static class: java.lang.Class<com.carto.components.Options>;
				public swigCMemOwn: boolean;
				public setTileThreadPoolSize(param0: number): void;
				public setRenderProjectionMode(param0: com.carto.components.RenderProjectionMode): void;
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
				public equals(param0: any): boolean;
				public getBackgroundBitmap(): com.carto.graphics.Bitmap;
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
				public getRenderProjectionMode(): com.carto.components.RenderProjectionMode;
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
				public getWatermarkAlignmentY(): number;
				public setZoomRange(param0: com.carto.core.MapRange): void;
				public getBaseProjection(): com.carto.projections.Projection;
				public static getCPtr(param0: com.carto.components.Options): number;
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
				public static values(): native.Array<com.carto.components.PanningMode>;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.components.PanningMode;
				public static valueOf(param0: string): com.carto.components.PanningMode;
			}
			export module PanningMode {
				export class SwigNext {
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
				public static valueOf(param0: string): com.carto.components.PivotMode;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.components.PivotMode;
				public static values(): native.Array<com.carto.components.PivotMode>;
			}
			export module PivotMode {
				export class SwigNext {
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
				public static values(): native.Array<com.carto.components.RenderProjectionMode>;
				public swigValue(): number;
				public static valueOf(param0: string): com.carto.components.RenderProjectionMode;
				public static swigToEnum(param0: number): com.carto.components.RenderProjectionMode;
			}
			export module RenderProjectionMode {
				export class SwigNext {
					public static class: java.lang.Class<com.carto.components.RenderProjectionMode.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module core {
			export class Address {
				public static class: java.lang.Class<com.carto.core.Address>;
				public swigCMemOwn: boolean;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: com.carto.core.StringVector);
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
			export class BinaryData {
				public static class: java.lang.Class<com.carto.core.BinaryData>;
				public swigCMemOwn: boolean;
				public constructor(param0: native.Array<number>);
				public getData(): native.Array<number>;
				public swigGetRawPtr(): number;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.core.BinaryData): number;
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
			export class IntVector {
				public static class: java.lang.Class<com.carto.core.IntVector>;
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



declare module com {
	export module carto {
		export module core {
			export class MapBounds {
				public static class: java.lang.Class<com.carto.core.MapBounds>;
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
				public hashCode(): number;
				public contains(param0: com.carto.core.MapBounds): boolean;
				public equals(param0: any): boolean;
				public static getCPtr(param0: com.carto.core.MapBounds): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class MapEnvelope {
				public static class: java.lang.Class<com.carto.core.MapEnvelope>;
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
				public constructor(param0: com.carto.core.MapPosVector);
				public hashCode(): number;
				public constructor(param0: com.carto.core.MapBounds);
				public equals(param0: any): boolean;
				public getConvexHull(): com.carto.core.MapPosVector;
				public static getCPtr(param0: com.carto.core.MapEnvelope): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class MapPos {
				public static class: java.lang.Class<com.carto.core.MapPos>;
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
				public hashCode(): number;
				public getX(): number;
				public equals(param0: any): boolean;
				public getZ(): number;
				public static getCPtr(param0: com.carto.core.MapPos): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class MapPosVector {
				public static class: java.lang.Class<com.carto.core.MapPosVector>;
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

declare module com {
	export module carto {
		export module core {
			export class MapPosVectorVector {
				public static class: java.lang.Class<com.carto.core.MapPosVectorVector>;
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

declare module com {
	export module carto {
		export module core {
			export class MapRange {
				public static class: java.lang.Class<com.carto.core.MapRange>;
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
			export class MapTile {
				public static class: java.lang.Class<com.carto.core.MapTile>;
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
			export class MapVec {
				public static class: java.lang.Class<com.carto.core.MapVec>;
				public swigCMemOwn: boolean;
				public constructor(param0: number, param1: number);
				public mul(param0: number): com.carto.core.MapVec;
				public constructor(param0: number, param1: number, param2: number);
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
			export class ScreenBounds {
				public static class: java.lang.Class<com.carto.core.ScreenBounds>;
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
			export class ScreenPos {
				public static class: java.lang.Class<com.carto.core.ScreenPos>;
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
				public static getCPtr(param0: com.carto.core.ScreenPos): number;
				public constructor();
			}
		}
	}
}



declare module com {
	export module carto {
		export module core {
			export class ScreenPosVector {
				public static class: java.lang.Class<com.carto.core.ScreenPosVector>;
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

declare module com {
	export module carto {
		export module core {
			export class StringMap {
				public static class: java.lang.Class<com.carto.core.StringMap>;
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



declare module com {
	export module carto {
		export module core {
			export class StringVariantMap {
				public static class: java.lang.Class<com.carto.core.StringVariantMap>;
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

declare module com {
	export module carto {
		export module core {
			export class StringVector {
				public static class: java.lang.Class<com.carto.core.StringVector>;
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



declare module com {
	export module carto {
		export module core {
			export class Variant {
				public static class: java.lang.Class<com.carto.core.Variant>;
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
			export class VariantArrayBuilder {
				public static class: java.lang.Class<com.carto.core.VariantArrayBuilder>;
				public swigCMemOwn: boolean;
				public buildVariant(): com.carto.core.Variant;
				public static getCPtr(param0: com.carto.core.VariantArrayBuilder): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public addLong(param0: number): void;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public hashCode(): number;
				public addBool(param0: boolean): void;
				public equals(param0: any): boolean;
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
			export class VariantObjectBuilder {
				public static class: java.lang.Class<com.carto.core.VariantObjectBuilder>;
				public swigCMemOwn: boolean;
				public buildVariant(): com.carto.core.Variant;
				public setBool(param0: string, param1: boolean): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public static getCPtr(param0: com.carto.core.VariantObjectBuilder): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public hashCode(): number;
				public setVariant(param0: string, param1: com.carto.core.Variant): void;
				public equals(param0: any): boolean;
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
				public static values(): native.Array<com.carto.core.VariantType>;
				public static swigToEnum(param0: number): com.carto.core.VariantType;
			}
			export module VariantType {
				export class SwigNext {
					public static class: java.lang.Class<com.carto.core.VariantType.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module core {
			export class VariantVector {
				public static class: java.lang.Class<com.carto.core.VariantVector>;
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

declare module com {
	export module carto {
		export module datasources {
			export class AssetTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.AssetTileDataSource>;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
				public static getCPtr(param0: com.carto.datasources.AssetTileDataSource): number;
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
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(param0: number, param1: number, param2: com.carto.graphics.Bitmap, param3: com.carto.projections.Projection, param4: com.carto.core.MapPosVector, param5: com.carto.core.ScreenPosVector);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.BitmapOverlayRasterTileDataSource;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
				public swigGetClassName(): string;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.TileDataSource);
				public delete(): void;
				public clear(): void;
				public swigTakeOwnership(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
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
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(param0: com.carto.datasources.CartoOnlineTileDataSource): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
				public swigGetClassName(): string;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public constructor(param0: string);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.CartoOnlineTileDataSource;
				public swigTakeOwnership(): void;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
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
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
				public swigGetClassName(): string;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.CombinedTileDataSource;
				public delete(): void;
				public swigTakeOwnership(): void;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.datasources.TileDataSource, param2: number);
				public static getCPtr(param0: com.carto.datasources.CombinedTileDataSource): number;
				public getDataExtent(): com.carto.core.MapBounds;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
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
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public setLayerGeoJSON(param0: number, param1: com.carto.core.Variant): void;
				public setLayerFeatureCollection(param0: number, param1: com.carto.projections.Projection, param2: com.carto.geometry.FeatureCollection): void;
				public deleteLayer(param0: number): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
				public swigGetClassName(): string;
				public createLayer(param0: string): number;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.GeoJSONVectorTileDataSource;
				public swigTakeOwnership(): void;
				public static getCPtr(param0: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public getDataExtent(): com.carto.core.MapBounds;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
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
				public swigReleaseOwnership(): void;
				public getSubdomains(): com.carto.core.StringVector;
				public isTMSScheme(): boolean;
				public constructor(param0: number, param1: number, param2: string);
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public getHTTPHeaders(): com.carto.core.StringMap;
				public swigGetDirectorObject(): any;
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



declare module com {
	export module carto {
		export module datasources {
			export class LocalSpatialIndexType {
				public static class: java.lang.Class<com.carto.datasources.LocalSpatialIndexType>;
				public static LOCAL_SPATIAL_INDEX_TYPE_NULL: com.carto.datasources.LocalSpatialIndexType;
				public static LOCAL_SPATIAL_INDEX_TYPE_KDTREE: com.carto.datasources.LocalSpatialIndexType;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.datasources.LocalSpatialIndexType;
				public static values(): native.Array<com.carto.datasources.LocalSpatialIndexType>;
				public static valueOf(param0: string): com.carto.datasources.LocalSpatialIndexType;
			}
			export module LocalSpatialIndexType {
				export class SwigNext {
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
				public swigGetDirectorObject(): any;
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



declare module com {
	export module carto {
		export module datasources {
			export class MBTilesScheme {
				public static class: java.lang.Class<com.carto.datasources.MBTilesScheme>;
				public static MBTILES_SCHEME_TMS: com.carto.datasources.MBTilesScheme;
				public static MBTILES_SCHEME_XYZ: com.carto.datasources.MBTilesScheme;
				public static values(): native.Array<com.carto.datasources.MBTilesScheme>;
				public static valueOf(param0: string): com.carto.datasources.MBTilesScheme;
				public static swigToEnum(param0: number): com.carto.datasources.MBTilesScheme;
				public swigValue(): number;
			}
			export module MBTilesScheme {
				export class SwigNext {
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
				public swigGetDirectorObject(): any;
				public constructor();
				public static getCPtr(param0: com.carto.datasources.MBTilesTileDataSource): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
				public constructor(param0: number, param1: number, param2: string, param3: com.carto.datasources.MBTilesScheme);
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
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.TileDataSource);
				public delete(): void;
				public clear(): void;
				public swigTakeOwnership(): void;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
				public static getCPtr(param0: com.carto.datasources.MemoryCacheTileDataSource): number;
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
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.datasources.TileDataSource);
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
				public swigGetClassName(): string;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.MergedMBVTTileDataSource;
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
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.datasources.TileDataSource);
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
				public swigGetClassName(): string;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public static getCPtr(param0: com.carto.datasources.OrderedTileDataSource): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.OrderedTileDataSource;
				public swigTakeOwnership(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
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
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.PackageManagerTileDataSource;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
				public swigGetClassName(): string;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getPackageManager(): com.carto.packagemanager.PackageManager;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public constructor(param0: com.carto.packagemanager.PackageManager);
				public static getCPtr(param0: com.carto.datasources.PackageManagerTileDataSource): number;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
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
				public swigReleaseOwnership(): void;
				public setCacheOnlyMode(param0: boolean): void;
				public close(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.CacheTileDataSource;
				public getCapacity(): number;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public isOpen(): boolean;
				public swigTakeOwnership(): void;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.TileDataSource>;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
				public notifyTilesChanged(param0: boolean): void;
				public getMinZoom(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class TileDownloadListener {
				public static class: java.lang.Class<com.carto.datasources.TileDownloadListener>;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDownloadListener;
				public onDownloadFailed(param0: com.carto.core.MapTile): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export class VectorDataSource {
				public static class: java.lang.Class<com.carto.datasources.VectorDataSource>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public getProjection(): com.carto.projections.Projection;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.VectorDataSource;
				public constructor(param0: com.carto.projections.Projection);
				public loadElements(param0: com.carto.renderers.components.CullState): com.carto.datasources.components.VectorData;
				public swigTakeOwnership(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public static getCPtr(param0: com.carto.datasources.VectorDataSource): number;
				public notifyElementsChanged(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module datasources {
			export module components {
				export class TileData {
					public static class: java.lang.Class<com.carto.datasources.components.TileData>;
					public swigCMemOwn: boolean;
					public delete(): void;
					public finalize(): void;
					public getData(): com.carto.core.BinaryData;
					public constructor(param0: com.carto.core.BinaryData);
					public isReplaceWithParent(): boolean;
					public swigGetRawPtr(): number;
					public constructor(param0: number, param1: boolean);
					public getMaxAge(): number;
					public equals(param0: any): boolean;
					public setMaxAge(param0: number): void;
					public setReplaceWithParent(param0: boolean): void;
					public static getCPtr(param0: com.carto.datasources.components.TileData): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		
	}
}

declare module com {
	export module carto {
		export module datasources {
			export module components {
				export class VectorData {
					public static class: java.lang.Class<com.carto.datasources.components.VectorData>;
					public swigCMemOwn: boolean;
					public equals(param0: any): boolean;
					public constructor(param0: com.carto.vectorelements.VectorElementVector);
					public static getCPtr(param0: com.carto.datasources.components.VectorData): number;
					public delete(): void;
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

declare module com {
	export module carto {
		
	}
}

declare module com {
	export module carto {
		export module geocoding {
			export class GeocodingRequest {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingRequest>;
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
			export class GeocodingResult {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingResult>;
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
				public hashCode(): number;
				public getFeatureCollection(): com.carto.geometry.FeatureCollection;
				public equals(param0: any): boolean;
				public getRank(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class GeocodingResultVector {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingResultVector>;
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

declare module com {
	export module carto {
		export module geocoding {
			export class GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingService>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.geocoding.GeocodingService): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.GeocodingService;
				public swigTakeOwnership(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class MapBoxOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MapBoxOnlineGeocodingService>;
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
				public swigGetDirectorObject(): any;
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
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class MapBoxOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MapBoxOnlineReverseGeocodingService>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(param0: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): number;
				public finalize(): void;
				public getCustomServiceURL(): string;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.MapBoxOnlineReverseGeocodingService;
				public swigGetClassName(): string;
				public constructor(param0: string);
				public swigGetDirectorObject(): any;
				public constructor();
				public setCustomServiceURL(param0: string): void;
				public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingService): number;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public delete(): void;
				public getLanguage(): string;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.ReverseGeocodingService;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.geocoding.GeocodingService): number;
				public setLanguage(param0: string): void;
				public delete(): void;
				public getLanguage(): string;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.GeocodingService;
				public static getCPtr(param0: com.carto.geocoding.OSMOfflineGeocodingService): number;
				public swigTakeOwnership(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class OSMOfflineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.OSMOfflineReverseGeocodingService>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public constructor(param0: string);
				public swigGetDirectorObject(): any;
				public constructor();
				public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingService): number;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public delete(): void;
				public getLanguage(): string;
				public static getCPtr(param0: com.carto.geocoding.OSMOfflineReverseGeocodingService): number;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.ReverseGeocodingService;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.OSMOfflineReverseGeocodingService;
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
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public setAutocomplete(param0: boolean): void;
				public isAutocomplete(): boolean;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.geocoding.PackageManagerGeocodingService): number;
				public swigGetClassName(): string;
				public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigGetDirectorObject(): any;
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
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class PackageManagerReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PackageManagerReverseGeocodingService>;
				public static getCPtr(param0: com.carto.geocoding.PackageManagerReverseGeocodingService): number;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingService): number;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public delete(): void;
				public getLanguage(): string;
				public swigTakeOwnership(): void;
				public constructor(param0: com.carto.packagemanager.PackageManager);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.PackageManagerReverseGeocodingService;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.ReverseGeocodingService;
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
				public swigGetDirectorObject(): any;
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
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class PeliasOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PeliasOnlineReverseGeocodingService>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public getCustomServiceURL(): string;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.geocoding.PeliasOnlineReverseGeocodingService): number;
				public swigGetClassName(): string;
				public constructor(param0: string);
				public swigGetDirectorObject(): any;
				public constructor();
				public setCustomServiceURL(param0: string): void;
				public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingService): number;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.PeliasOnlineReverseGeocodingService;
				public delete(): void;
				public getLanguage(): string;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.ReverseGeocodingService;
				public calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class ReverseGeocodingRequest {
				public static class: java.lang.Class<com.carto.geocoding.ReverseGeocodingRequest>;
				public swigCMemOwn: boolean;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPos);
				public getProjection(): com.carto.projections.Projection;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public setSearchRadius(param0: number): void;
				public toString(): string;
				public swigGetRawPtr(): number;
				public delete(): void;
				public hashCode(): number;
				public getLocation(): com.carto.core.MapPos;
				public equals(param0: any): boolean;
				public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingRequest): number;
				public getSearchRadius(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.ReverseGeocodingService>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingService): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.ReverseGeocodingService;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public setCustomServiceURL(param0: string): void;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.geocoding.GeocodingService): number;
				public setLanguage(param0: string): void;
				public delete(): void;
				public getLanguage(): string;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.GeocodingService;
				public swigTakeOwnership(): void;
				public static getCPtr(param0: com.carto.geocoding.TomTomOnlineGeocodingService): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geocoding {
			export class TomTomOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.TomTomOnlineReverseGeocodingService>;
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
				public static getCPtr(param0: com.carto.geocoding.ReverseGeocodingService): number;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public delete(): void;
				public getLanguage(): string;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.TomTomOnlineReverseGeocodingService;
				public static getCPtr(param0: com.carto.geocoding.TomTomOnlineReverseGeocodingService): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geocoding.ReverseGeocodingService;
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
				public static getCPtr(param0: com.carto.geometry.GeometrySimplifier): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.GeometrySimplifier;
				public delete(): void;
				public static getCPtr(param0: com.carto.geometry.DouglasPeuckerGeometrySimplifier): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: number);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.DouglasPeuckerGeometrySimplifier;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class Feature {
				public static class: java.lang.Class<com.carto.geometry.Feature>;
				public swigCMemOwn: boolean;
				public getProperties(): com.carto.core.Variant;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Feature;
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.geometry.Feature): number;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
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
			export class FeatureCollection {
				public static class: java.lang.Class<com.carto.geometry.FeatureCollection>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public delete(): void;
				public constructor(param0: com.carto.geometry.FeatureVector);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.FeatureCollection;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getFeatureCount(): number;
				public swigGetClassName(): string;
				public getFeature(param0: number): com.carto.geometry.Feature;
				public swigGetDirectorObject(): any;
				public static getCPtr(param0: com.carto.geometry.FeatureCollection): number;
			}
		}
	}
}





declare module com {
	export module carto {
		export module geometry {
			export class FeatureVector {
				public static class: java.lang.Class<com.carto.geometry.FeatureVector>;
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

declare module com {
	export module carto {
		export module geometry {
			export class GeoJSONGeometryReader {
				public static class: java.lang.Class<com.carto.geometry.GeoJSONGeometryReader>;
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



declare module com {
	export module carto {
		export module geometry {
			export class GeoJSONGeometryWriter {
				public static class: java.lang.Class<com.carto.geometry.GeoJSONGeometryWriter>;
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



declare module com {
	export module carto {
		export module geometry {
			export class Geometry {
				public static class: java.lang.Class<com.carto.geometry.Geometry>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Geometry;
				public delete(): void;
				public hashCode(): number;
				public static getCPtr(param0: com.carto.geometry.Geometry): number;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getCenterPos(): com.carto.core.MapPos;
				public getBounds(): com.carto.core.MapBounds;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class GeometrySimplifier {
				public static class: java.lang.Class<com.carto.geometry.GeometrySimplifier>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.geometry.GeometrySimplifier): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.GeometrySimplifier;
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



declare module com {
	export module carto {
		export module geometry {
			export class GeometryVector {
				public static class: java.lang.Class<com.carto.geometry.GeometryVector>;
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

declare module com {
	export module carto {
		export module geometry {
			export class LineGeometry extends com.carto.geometry.Geometry {
				public static class: java.lang.Class<com.carto.geometry.LineGeometry>;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Geometry;
				public static getCPtr(param0: com.carto.geometry.Geometry): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getCenterPos(): com.carto.core.MapPos;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.LineGeometry;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.geometry.LineGeometry): number;
				public delete(): void;
				public constructor(param0: com.carto.core.MapPosVector);
				public getPoses(): com.carto.core.MapPosVector;
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class LineGeometryVector {
				public static class: java.lang.Class<com.carto.geometry.LineGeometryVector>;
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

declare module com {
	export module carto {
		export module geometry {
			export class MultiGeometry extends com.carto.geometry.Geometry {
				public static class: java.lang.Class<com.carto.geometry.MultiGeometry>;
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
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public swigGetDirectorObject(): any;
				public constructor(param0: com.carto.geometry.LineGeometryVector);
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.MultiPointGeometry;
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
				public swigGetDirectorObject(): any;
				public getGeometry(param0: number): com.carto.geometry.PolygonGeometry;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(param0: com.carto.geometry.MultiPolygonGeometry): number;
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
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Geometry;
				public static getCPtr(param0: com.carto.geometry.Geometry): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getCenterPos(): com.carto.core.MapPos;
				public getPos(): com.carto.core.MapPos;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.PointGeometry;
				public swigGetDirectorObject(): any;
				public static getCPtr(param0: com.carto.geometry.PointGeometry): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public constructor(param0: com.carto.core.MapPos);
			}
		}
	}
}



declare module com {
	export module carto {
		export module geometry {
			export class PointGeometryVector {
				public static class: java.lang.Class<com.carto.geometry.PointGeometryVector>;
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

declare module com {
	export module carto {
		export module geometry {
			export class PolygonGeometry extends com.carto.geometry.Geometry {
				public static class: java.lang.Class<com.carto.geometry.PolygonGeometry>;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.PolygonGeometry;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Geometry;
				public getHoles(): com.carto.core.MapPosVectorVector;
				public static getCPtr(param0: com.carto.geometry.PolygonGeometry): number;
				public static getCPtr(param0: com.carto.geometry.Geometry): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getCenterPos(): com.carto.core.MapPos;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.core.MapPosVectorVector);
				public delete(): void;
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
			export class PolygonGeometryVector {
				public static class: java.lang.Class<com.carto.geometry.PolygonGeometryVector>;
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

declare module com {
	export module carto {
		export module geometry {
			export class VectorTileFeature extends com.carto.geometry.Feature {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeature>;
				public getId(): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.Feature;
				public constructor(param0: number, param1: com.carto.core.MapTile, param2: string, param3: com.carto.geometry.Geometry, param4: com.carto.core.Variant);
				public getLayerName(): string;
				public static getCPtr(param0: com.carto.geometry.VectorTileFeature): number;
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.geometry.Feature): number;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.VectorTileFeature;
				public swigGetRawPtr(): number;
				public delete(): void;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.core.Variant);
				public hashCode(): number;
				public getMapTile(): com.carto.core.MapTile;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module geometry {
			export class VectorTileFeatureCollection extends com.carto.geometry.FeatureCollection {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureCollection>;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.FeatureCollection;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public getFeature(param0: number): com.carto.geometry.Feature;
				public swigGetDirectorObject(): any;
				public static getCPtr(param0: com.carto.geometry.FeatureCollection): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.VectorTileFeatureCollection;
				public static getCPtr(param0: com.carto.geometry.VectorTileFeatureCollection): number;
				public swigGetRawPtr(): number;
				public getFeature(param0: number): com.carto.geometry.VectorTileFeature;
				public delete(): void;
				public constructor(param0: com.carto.geometry.FeatureVector);
				public constructor(param0: com.carto.geometry.VectorTileFeatureVector);
			}
		}
	}
}





declare module com {
	export module carto {
		export module geometry {
			export class VectorTileFeatureVector {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureVector>;
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

declare module com {
	export module carto {
		export module geometry {
			export class WKBGeometryReader {
				public static class: java.lang.Class<com.carto.geometry.WKBGeometryReader>;
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



declare module com {
	export module carto {
		export module geometry {
			export class WKBGeometryWriter {
				public static class: java.lang.Class<com.carto.geometry.WKBGeometryWriter>;
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



declare module com {
	export module carto {
		export module geometry {
			export class WKTGeometryReader {
				public static class: java.lang.Class<com.carto.geometry.WKTGeometryReader>;
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



declare module com {
	export module carto {
		export module geometry {
			export class WKTGeometryWriter {
				public static class: java.lang.Class<com.carto.geometry.WKTGeometryWriter>;
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



declare module com {
	export module carto {
		export module graphics {
			export class Bitmap {
				public static class: java.lang.Class<com.carto.graphics.Bitmap>;
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
				public hashCode(): number;
				public compressToInternal(): com.carto.core.BinaryData;
				public equals(param0: any): boolean;
				public getBytesPerPixel(): number;
				public constructor(param0: com.carto.core.BinaryData, param1: number, param2: number, param3: com.carto.graphics.ColorFormat, param4: number);
				public compressToPng(): com.carto.core.BinaryData;
			}
		}
	}
}



declare module com {
	export module carto {
		export module graphics {
			export class Color {
				public static class: java.lang.Class<com.carto.graphics.Color>;
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
				public static getCPtr(param0: com.carto.graphics.Color): number;
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
				public swigValue(): number;
				public static values(): native.Array<com.carto.graphics.ColorFormat>;
				public static swigToEnum(param0: number): com.carto.graphics.ColorFormat;
				public static valueOf(param0: string): com.carto.graphics.ColorFormat;
			}
			export module ColorFormat {
				export class SwigNext {
					public static class: java.lang.Class<com.carto.graphics.ColorFormat.SwigNext>;
				}
			}
		}
	}
}



declare module com {
	export module carto {
		export module graphics {
			export class ViewState {
				public static class: java.lang.Class<com.carto.graphics.ViewState>;
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
				public static getCPtr(param0: com.carto.graphics.ViewState): number;
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
				public static values(): native.Array<com.carto.layers.CartoBaseMapStyle>;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.layers.CartoBaseMapStyle;
				public static valueOf(param0: string): com.carto.layers.CartoBaseMapStyle;
			}
			export module CartoBaseMapStyle {
				export class SwigNext {
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
				public static getCPtr(param0: com.carto.layers.TileLayer): number;
				public constructor(param0: com.carto.packagemanager.CartoPackageManager, param1: com.carto.utils.AssetPackage);
				public constructor(param0: com.carto.packagemanager.CartoPackageManager, param1: com.carto.layers.CartoBaseMapStyle);
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.layers.CartoVectorTileLayer): number;
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.layers.VectorTileLayer): number;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.layers.Layer): number;
				public delete(): void;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage, param2: string);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoVectorTileLayer;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileLayer;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoOfflineVectorTileLayer;
				public static getCPtr(param0: com.carto.layers.CartoOfflineVectorTileLayer): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
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
				public static getCPtr(param0: com.carto.layers.TileLayer): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.RasterTileLayer;
				public static getCPtr(param0: com.carto.layers.CartoOnlineRasterTileLayer): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.layers.RasterTileLayer): number;
				public constructor(param0: string);
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.TileDataSource);
				public static getCPtr(param0: com.carto.layers.Layer): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoOnlineRasterTileLayer;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
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
				public static getCPtr(param0: com.carto.layers.TileLayer): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.layers.CartoOnlineVectorTileLayer): number;
				public static getCPtr(param0: com.carto.layers.CartoVectorTileLayer): number;
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.layers.VectorTileLayer): number;
				public constructor(param0: string, param1: com.carto.utils.AssetPackage);
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.layers.Layer): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoOnlineVectorTileLayer;
				public constructor(param0: com.carto.layers.CartoBaseMapStyle);
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage, param2: string);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoVectorTileLayer;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileLayer;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public constructor(param0: string, param1: com.carto.layers.CartoBaseMapStyle);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
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
				public static getCPtr(param0: com.carto.layers.TileLayer): number;
				public finalize(): void;
				public static getCPtr(param0: com.carto.layers.CartoVectorTileLayer): number;
				public delete(): void;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage, param2: string);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoVectorTileLayer;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileLayer;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
				public getFallbackLanguage(): string;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.layers.VectorTileLayer): number;
				public static createTileDecoder(param0: com.carto.utils.AssetPackage): com.carto.vectortiles.VectorTileDecoder;
				public swigGetDirectorObject(): any;
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



declare module com {
	export module carto {
		export module layers {
			export class ClusterBuilderMode {
				public static class: java.lang.Class<com.carto.layers.ClusterBuilderMode>;
				public static CLUSTER_BUILDER_MODE_ELEMENTS: com.carto.layers.ClusterBuilderMode;
				public static CLUSTER_BUILDER_MODE_ELEMENT_COUNT: com.carto.layers.ClusterBuilderMode;
				public static swigToEnum(param0: number): com.carto.layers.ClusterBuilderMode;
				public swigValue(): number;
				public static values(): native.Array<com.carto.layers.ClusterBuilderMode>;
				public static valueOf(param0: string): com.carto.layers.ClusterBuilderMode;
			}
			export module ClusterBuilderMode {
				export class SwigNext {
					public static class: java.lang.Class<com.carto.layers.ClusterBuilderMode.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
			export class ClusterElementBuilder {
				public static class: java.lang.Class<com.carto.layers.ClusterElementBuilder>;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
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
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.LocalVectorDataSource, param1: com.carto.layers.ClusterElementBuilder);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorLayer;
				public static getCPtr(param0: com.carto.layers.Layer): number;
				public delete(): void;
				public refresh(): void;
				public getClusterElementBuilder(): com.carto.layers.ClusterElementBuilder;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
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
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.EditableVectorLayer;
				public static getCPtr(param0: com.carto.layers.VectorLayer): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.datasources.VectorDataSource);
				public static getCPtr(param0: com.carto.layers.EditableVectorLayer): number;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public getVectorEditEventListener(): com.carto.layers.VectorEditEventListener;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorLayer;
				public static getCPtr(param0: com.carto.layers.Layer): number;
				public delete(): void;
				public getSelectedVectorElement(): com.carto.vectorelements.VectorElement;
				public setVectorEditEventListener(param0: com.carto.layers.VectorEditEventListener): void;
				public setSelectedVectorElement(param0: com.carto.vectorelements.VectorElement): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class Layer {
				public static class: java.lang.Class<com.carto.layers.Layer>;
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
				public swigGetDirectorObject(): any;
				public getVisibleZoomRange(): com.carto.core.MapRange;
				public swigGetRawPtr(): number;
				public simulateClick(param0: com.carto.ui.ClickType, param1: com.carto.core.ScreenPos, param2: com.carto.graphics.ViewState): void;
				public static getCPtr(param0: com.carto.layers.Layer): number;
				public delete(): void;
				public hashCode(): number;
				public refresh(): void;
				public equals(param0: any): boolean;
				public setCullDelay(param0: number): void;
				public isUpdateInProgress(): boolean;
				public setVisible(param0: boolean): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
				public getOpacity(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class LayerVector {
				public static class: java.lang.Class<com.carto.layers.LayerVector>;
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





declare module com {
	export module carto {
		export module layers {
			export class RasterTileEventListener {
				public static class: java.lang.Class<com.carto.layers.RasterTileEventListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.RasterTileEventListener;
				public finalize(): void;
				public onRasterTileClicked(param0: com.carto.ui.RasterTileClickInfo): boolean;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.layers.RasterTileEventListener): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class RasterTileLayer extends com.carto.layers.TileLayer {
				public static class: java.lang.Class<com.carto.layers.RasterTileLayer>;
				public getTextureCacheCapacity(): number;
				public static getCPtr(param0: com.carto.layers.TileLayer): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.RasterTileLayer;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public getRasterTileEventListener(): com.carto.layers.RasterTileEventListener;
				public static getCPtr(param0: com.carto.layers.RasterTileLayer): number;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.datasources.TileDataSource);
				public static getCPtr(param0: com.carto.layers.Layer): number;
				public delete(): void;
				public setRasterTileEventListener(param0: com.carto.layers.RasterTileEventListener): void;
				public setTextureCacheCapacity(param0: number): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
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
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public setColor(param0: com.carto.graphics.Color): void;
				public static getCPtr(param0: com.carto.layers.SolidLayer): number;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.SolidLayer;
				public getBitmapScale(): number;
				public swigGetDirectorObject(): any;
				public getBitmap(): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public setBitmapScale(param0: number): void;
				public constructor(param0: com.carto.graphics.Color);
				public static getCPtr(param0: com.carto.layers.Layer): number;
				public delete(): void;
				public constructor(param0: com.carto.graphics.Bitmap);
				public getColor(): com.carto.graphics.Color;
				public isUpdateInProgress(): boolean;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
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
				public swigGetDirectorObject(): any;
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



declare module com {
	export module carto {
		export module layers {
			export class TileLoadListener {
				public static class: java.lang.Class<com.carto.layers.TileLoadListener>;
				public swigCMemOwn: boolean;
				public static getCPtr(param0: com.carto.layers.TileLoadListener): number;
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
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLoadListener;
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
				public static values(): native.Array<com.carto.layers.TileSubstitutionPolicy>;
				public static swigToEnum(param0: number): com.carto.layers.TileSubstitutionPolicy;
			}
			export module TileSubstitutionPolicy {
				export class SwigNext {
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
				public static getCPtr(param0: com.carto.layers.TorqueTileLayer): number;
				public static getCPtr(param0: com.carto.layers.TileLayer): number;
				public countVisibleFeatures(param0: number): number;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.TorqueTileDecoder);
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.layers.VectorTileLayer): number;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TorqueTileLayer;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.layers.Layer): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileLayer;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class UTFGridEventListener {
				public static class: java.lang.Class<com.carto.layers.UTFGridEventListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public onUTFGridClicked(param0: com.carto.ui.UTFGridClickInfo): boolean;
				public delete(): void;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.UTFGridEventListener;
				public static getCPtr(param0: com.carto.layers.UTFGridEventListener): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class VectorEditEventListener {
				public static class: java.lang.Class<com.carto.layers.VectorEditEventListener>;
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
				public swigGetDirectorObject(): any;
				public onDragMove(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
				public constructor();
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorEditEventListener;
				public onDragEnd(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
				public delete(): void;
				public static getCPtr(param0: com.carto.layers.VectorEditEventListener): number;
				public swigTakeOwnership(): void;
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
				public static values(): native.Array<com.carto.layers.VectorElementDragPointStyle>;
			}
			export module VectorElementDragPointStyle {
				export class SwigNext {
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
				public static values(): native.Array<com.carto.layers.VectorElementDragResult>;
				public swigValue(): number;
				public static valueOf(param0: string): com.carto.layers.VectorElementDragResult;
			}
			export module VectorElementDragResult {
				export class SwigNext {
					public static class: java.lang.Class<com.carto.layers.VectorElementDragResult.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
			export class VectorElementEventListener {
				public static class: java.lang.Class<com.carto.layers.VectorElementEventListener>;
				public swigCMemOwn: boolean;
				public onVectorElementClicked(param0: com.carto.ui.VectorElementClickInfo): boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.layers.VectorElementEventListener): number;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorElementEventListener;
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class VectorLayer extends com.carto.layers.Layer {
				public static class: java.lang.Class<com.carto.layers.VectorLayer>;
				public static getCPtr(param0: com.carto.layers.VectorLayer): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.datasources.VectorDataSource);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public getDataSource(): com.carto.datasources.VectorDataSource;
				public setZBuffering(param0: boolean): void;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorLayer;
				public static getCPtr(param0: com.carto.layers.Layer): number;
				public delete(): void;
				public isZBuffering(): boolean;
				public getVectorElementEventListener(): com.carto.layers.VectorElementEventListener;
				public isUpdateInProgress(): boolean;
				public setVectorElementEventListener(param0: com.carto.layers.VectorElementEventListener): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
			}
		}
	}
}



declare module com {
	export module carto {
		export module layers {
			export class VectorTileEventListener {
				public static class: java.lang.Class<com.carto.layers.VectorTileEventListener>;
				public swigCMemOwn: boolean;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileEventListener;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public onVectorTileClicked(param0: com.carto.ui.VectorTileClickInfo): boolean;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public static getCPtr(param0: com.carto.layers.VectorTileEventListener): number;
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
				public static getCPtr(param0: com.carto.layers.TileLayer): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getTileDecoder(): com.carto.vectortiles.VectorTileDecoder;
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.layers.VectorTileLayer): number;
				public getVectorTileEventListener(): com.carto.layers.VectorTileEventListener;
				public setLabelRenderOrder(param0: com.carto.layers.VectorTileRenderOrder): void;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.layers.Layer): number;
				public delete(): void;
				public getLabelRenderOrder(): com.carto.layers.VectorTileRenderOrder;
				public getBuildingRenderOrder(): com.carto.layers.VectorTileRenderOrder;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileLayer;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public setVectorTileEventListener(param0: com.carto.layers.VectorTileEventListener): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
				public setTileCacheCapacity(param0: number): void;
				public setBuildingRenderOrder(param0: com.carto.layers.VectorTileRenderOrder): void;
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
				public static values(): native.Array<com.carto.layers.VectorTileRenderOrder>;
				public static valueOf(param0: string): com.carto.layers.VectorTileRenderOrder;
			}
			export module VectorTileRenderOrder {
				export class SwigNext {
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
				public finalize(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.packagemanager.PackageManager;
				public constructor(param0: number, param1: boolean);
				public getStyleAssetPackage(param0: com.carto.layers.CartoBaseMapStyle): com.carto.utils.AssetPackage;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.packagemanager.CartoPackageManager;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.packagemanager.PackageManager): number;
				public delete(): void;
				public constructor(param0: string, param1: string, param2: string, param3: string);
				public startStyleDownload(param0: com.carto.layers.CartoBaseMapStyle): boolean;
				public static getCPtr(param0: com.carto.packagemanager.CartoPackageManager): number;
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
				public static values(): native.Array<com.carto.packagemanager.PackageAction>;
				public static swigToEnum(param0: number): com.carto.packagemanager.PackageAction;
			}
			export module PackageAction {
				export class SwigNext {
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
				public static values(): native.Array<com.carto.packagemanager.PackageErrorType>;
				public static swigToEnum(param0: number): com.carto.packagemanager.PackageErrorType;
				public static valueOf(param0: string): com.carto.packagemanager.PackageErrorType;
			}
			export module PackageErrorType {
				export class SwigNext {
					public static class: java.lang.Class<com.carto.packagemanager.PackageErrorType.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module packagemanager {
			export class PackageInfo {
				public static class: java.lang.Class<com.carto.packagemanager.PackageInfo>;
				public swigCMemOwn: boolean;
				public getTileMask(): com.carto.packagemanager.PackageTileMask;
				public getMetaInfo(): com.carto.packagemanager.PackageMetaInfo;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getName(): string;
				public static getCPtr(param0: com.carto.packagemanager.PackageInfo): number;
				public constructor(param0: string, param1: com.carto.packagemanager.PackageType, param2: number, param3: java.math.BigInteger, param4: string, param5: com.carto.packagemanager.PackageTileMask, param6: com.carto.packagemanager.PackageMetaInfo);
				public getPackageType(): com.carto.packagemanager.PackageType;
				public swigGetRawPtr(): number;
				public getNames(param0: string): com.carto.core.StringVector;
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



declare module com {
	export module carto {
		export module packagemanager {
			export class PackageInfoVector {
				public static class: java.lang.Class<com.carto.packagemanager.PackageInfoVector>;
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

declare module com {
	export module carto {
		export module packagemanager {
			export class PackageManager {
				public static class: java.lang.Class<com.carto.packagemanager.PackageManager>;
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
				public equals(param0: any): boolean;
				public startPackageDownload(param0: string): boolean;
				public getLocalPackages(): com.carto.packagemanager.PackageInfoVector;
				public getLocalPackage(param0: string): com.carto.packagemanager.PackageInfo;
				public cancelPackageTasks(param0: string): void;
				public getServerPackages(): com.carto.packagemanager.PackageInfoVector;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.packagemanager.PackageManager;
				public constructor(param0: number, param1: boolean);
				public getServerPackage(param0: string): com.carto.packagemanager.PackageInfo;
				public swigGetClassName(): string;
				public setPackagePriority(param0: string, param1: number): void;
				public swigGetDirectorObject(): any;
				public stop(param0: boolean): void;
				public swigGetRawPtr(): number;
				public isAreaDownloaded(param0: com.carto.core.MapBounds, param1: number, param2: com.carto.projections.Projection): boolean;
				public getServerPackageListMetaInfo(): com.carto.packagemanager.PackageMetaInfo;
				public static getCPtr(param0: com.carto.packagemanager.PackageManager): number;
				public constructor(param0: string, param1: string, param2: string, param3: string);
				public getPackageManagerListener(): com.carto.packagemanager.PackageManagerListener;
			}
		}
	}
}

declare module com {
	export module carto {
		export module packagemanager {
			export class PackageManagerListener {
				public static class: java.lang.Class<com.carto.packagemanager.PackageManagerListener>;
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
				public swigGetDirectorObject(): any;
				public onStyleFailed(param0: string): void;
				public constructor();
				public onPackageStatusChanged(param0: string, param1: number, param2: com.carto.packagemanager.PackageStatus): void;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.packagemanager.PackageManagerListener;
				public onPackageCancelled(param0: string, param1: number): void;
				public delete(): void;
				public swigTakeOwnership(): void;
				public onStyleUpdated(param0: string): void;
			}
		}
	}
}





declare module com {
	export module carto {
		export module packagemanager {
			export class PackageMetaInfo {
				public static class: java.lang.Class<com.carto.packagemanager.PackageMetaInfo>;
				public swigCMemOwn: boolean;
				public static getCPtr(param0: com.carto.packagemanager.PackageMetaInfo): number;
				public getVariant(): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
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
			export class PackageStatus {
				public static class: java.lang.Class<com.carto.packagemanager.PackageStatus>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.packagemanager.PackageAction, param1: boolean, param2: number);
				public getCurrentAction(): com.carto.packagemanager.PackageAction;
				public delete(): void;
				public getProgress(): number;
				public hashCode(): number;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.packagemanager.PackageStatus): number;
				public isPaused(): boolean;
			}
		}
	}
}



declare module com {
	export module carto {
		export module packagemanager {
			export class PackageTileMask {
				public static class: java.lang.Class<com.carto.packagemanager.PackageTileMask>;
				public swigCMemOwn: boolean;
				public static getCPtr(param0: com.carto.packagemanager.PackageTileMask): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getMaxZoomLevel(): number;
				public getBoundingPolygon(param0: com.carto.projections.Projection): com.carto.geometry.MultiPolygonGeometry;
				public hashCode(): number;
				public getTileStatus(param0: com.carto.core.MapTile): com.carto.packagemanager.PackageTileStatus;
				public finalize(): void;
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
				public static values(): native.Array<com.carto.packagemanager.PackageTileStatus>;
				public static swigToEnum(param0: number): com.carto.packagemanager.PackageTileStatus;
			}
			export module PackageTileStatus {
				export class SwigNext {
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
				public static values(): native.Array<com.carto.packagemanager.PackageType>;
				public static swigToEnum(param0: number): com.carto.packagemanager.PackageType;
			}
			export module PackageType {
				export class SwigNext {
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
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.projections.Projection;
				public getName(): string;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public static getCPtr(param0: com.carto.projections.Projection): number;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.projections.EPSG3857;
				public static getCPtr(param0: com.carto.projections.EPSG3857): number;
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
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.projections.EPSG4326;
				public toWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.projections.Projection;
				public getName(): string;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public static getCPtr(param0: com.carto.projections.Projection): number;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(param0: com.carto.projections.EPSG4326): number;
				public fromWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
			}
		}
	}
}



declare module com {
	export module carto {
		export module projections {
			export class Projection {
				public static class: java.lang.Class<com.carto.projections.Projection>;
				public swigCMemOwn: boolean;
				public fromLatLong(param0: number, param1: number): com.carto.core.MapPos;
				public toWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.projections.Projection;
				public getBounds(): com.carto.core.MapBounds;
				public getName(): string;
				public toLatLong(param0: number, param1: number): com.carto.core.MapPos;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public static getCPtr(param0: com.carto.projections.Projection): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public fromWgs84(param0: com.carto.core.MapPos): com.carto.core.MapPos;
			}
		}
	}
}



declare module com {
	export module carto {
		export module renderers {
			export class MapRenderer {
				public static class: java.lang.Class<com.carto.renderers.MapRenderer>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public getViewState(): com.carto.graphics.ViewState;
				public captureRendering(param0: com.carto.renderers.RendererCaptureListener, param1: boolean): void;
				public delete(): void;
				public hashCode(): number;
				public setMapRendererListener(param0: com.carto.renderers.MapRendererListener): void;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.renderers.MapRenderer): number;
				public getMapRendererListener(): com.carto.renderers.MapRendererListener;
				public requestRedraw(): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module renderers {
			export class MapRendererListener {
				public static class: java.lang.Class<com.carto.renderers.MapRendererListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(param0: com.carto.renderers.MapRendererListener): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public onBeforeDrawFrame(): void;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.renderers.MapRendererListener;
				public swigTakeOwnership(): void;
				public onAfterDrawFrame(): void;
			}
		}
	}
}





declare module com {
	export module carto {
		export module renderers {
			export class RedrawRequestListener {
				public static class: java.lang.Class<com.carto.renderers.RedrawRequestListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public onRedrawRequested(): void;
				public static getCPtr(param0: com.carto.renderers.RedrawRequestListener): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.renderers.RedrawRequestListener;
				public swigTakeOwnership(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module renderers {
			export class RendererCaptureListener {
				public static class: java.lang.Class<com.carto.renderers.RendererCaptureListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.renderers.RendererCaptureListener;
				public finalize(): void;
				public onMapRendered(param0: com.carto.graphics.Bitmap): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public static getCPtr(param0: com.carto.renderers.RendererCaptureListener): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module renderers {
			export module components {
				export class CullState {
					public static class: java.lang.Class<com.carto.renderers.components.CullState>;
					public swigCMemOwn: boolean;
					public equals(param0: any): boolean;
					public getProjectionEnvelope(param0: com.carto.projections.Projection): com.carto.core.MapEnvelope;
					public delete(): void;
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

declare module com {
	export module carto {
		
	}
}

declare module com {
	export module carto {
		export module routing {
			export class CartoOnlineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.CartoOnlineRoutingService>;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(param0: com.carto.routing.CartoOnlineRoutingService): number;
				public swigTakeOwnership(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class OSRMOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.OSRMOfflineRoutingService>;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class PackageManagerValhallaRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.PackageManagerValhallaRoutingService>;
				public static getCPtr(param0: com.carto.routing.RoutingService): number;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public static getCPtr(param0: com.carto.routing.PackageManagerValhallaRoutingService): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public constructor(param0: com.carto.packagemanager.PackageManager);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.PackageManagerValhallaRoutingService;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class ValhallaOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.ValhallaOfflineRoutingService>;
				public static getCPtr(param0: com.carto.routing.RoutingService): number;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public static getCPtr(param0: com.carto.routing.ValhallaOfflineRoutingService): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.ValhallaOfflineRoutingService;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public constructor(param0: string);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class ValhallaOnlineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.ValhallaOnlineRoutingService>;
				public static getCPtr(param0: com.carto.routing.RoutingService): number;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public static getCPtr(param0: com.carto.routing.ValhallaOnlineRoutingService): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.ValhallaOnlineRoutingService;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public constructor(param0: string);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class PackageManagerRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.PackageManagerRoutingService>;
				public static getCPtr(param0: com.carto.routing.RoutingService): number;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public static getCPtr(param0: com.carto.routing.PackageManagerRoutingService): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public constructor(param0: com.carto.packagemanager.PackageManager);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.PackageManagerRoutingService;
			}
		}
	}
}





declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingRequest {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingRequest>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public getPoints(): com.carto.core.MapPosVector;
				public getProjection(): com.carto.projections.Projection;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPosVector, param2: number);
				public static getCPtr(param0: com.carto.routing.RouteMatchingRequest): number;
				public getAccuracy(): number;
				public toString(): string;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingResult {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingResult>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public getPoints(): com.carto.core.MapPosVector;
				public getProjection(): com.carto.projections.Projection;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.routing.RouteMatchingResult): number;
				public toString(): string;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPosVector);
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
				public swigValue(): number;
				public static values(): native.Array<com.carto.routing.RoutingAction>;
				public static swigToEnum(param0: number): com.carto.routing.RoutingAction;
				public static valueOf(param0: string): com.carto.routing.RoutingAction;
			}
			export module RoutingAction {
				export class SwigNext {
					public static class: java.lang.Class<com.carto.routing.RoutingAction.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class RoutingInstruction {
				public static class: java.lang.Class<com.carto.routing.RoutingInstruction>;
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
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getDistance(): number;
				public static getCPtr(param0: com.carto.routing.RoutingInstruction): number;
				public getAzimuth(): number;
				public getGeometryTag(): com.carto.core.Variant;
				public getAction(): com.carto.routing.RoutingAction;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class RoutingInstructionVector {
				public static class: java.lang.Class<com.carto.routing.RoutingInstructionVector>;
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

declare module com {
	export module carto {
		export module routing {
			export class RoutingRequest {
				public static class: java.lang.Class<com.carto.routing.RoutingRequest>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public getPoints(): com.carto.core.MapPosVector;
				public getProjection(): com.carto.projections.Projection;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.routing.RoutingRequest): number;
				public toString(): string;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPosVector);
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class RoutingResult {
				public static class: java.lang.Class<com.carto.routing.RoutingResult>;
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
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPosVector, param2: com.carto.routing.RoutingInstructionVector);
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class RoutingService {
				public static class: java.lang.Class<com.carto.routing.RoutingService>;
				public swigCMemOwn: boolean;
				public static getCPtr(param0: com.carto.routing.RoutingService): number;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module routing {
			export class SGREOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.SGREOfflineRoutingService>;
				public static getCPtr(param0: com.carto.routing.RoutingService): number;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.geometry.FeatureCollection, param2: com.carto.core.Variant);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public setProfile(param0: string): void;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.SGREOfflineRoutingService;
				public delete(): void;
				public constructor(param0: com.carto.core.Variant, param1: com.carto.core.Variant);
				public getProfile(): string;
				public static getCPtr(param0: com.carto.routing.SGREOfflineRoutingService): number;
				public swigTakeOwnership(): void;
			}
		}
	}
}







declare module com {
	export module carto {
		export module search {
			export class FeatureCollectionSearchService {
				public static class: java.lang.Class<com.carto.search.FeatureCollectionSearchService>;
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
				public swigGetDirectorObject(): any;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.geometry.FeatureCollection);
				public swigGetRawPtr(): number;
				public delete(): void;
				public getFeatureCollection(): com.carto.geometry.FeatureCollection;
				public swigTakeOwnership(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module search {
			export class SearchRequest {
				public static class: java.lang.Class<com.carto.search.SearchRequest>;
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
				public setGeometry(param0: com.carto.geometry.Geometry): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public setRegexFilter(param0: string): void;
				public getSearchRadius(): number;
				public getGeometry(): com.carto.geometry.Geometry;
				public static getCPtr(param0: com.carto.search.SearchRequest): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module search {
			export class VectorElementSearchService {
				public static class: java.lang.Class<com.carto.search.VectorElementSearchService>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.datasources.VectorDataSource);
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.search.VectorElementSearchService): number;
				public swigGetDirectorObject(): any;
				public getDataSource(): com.carto.datasources.VectorDataSource;
				public swigGetRawPtr(): number;
				public findElements(param0: com.carto.search.SearchRequest): com.carto.vectorelements.VectorElementVector;
				public delete(): void;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.search.VectorElementSearchService;
			}
		}
	}
}



declare module com {
	export module carto {
		export module search {
			export class VectorTileSearchService {
				public static class: java.lang.Class<com.carto.search.VectorTileSearchService>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getTileDecoder(): com.carto.vectortiles.VectorTileDecoder;
				public swigGetClassName(): string;
				public getDataSource(): com.carto.datasources.TileDataSource;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public setMaxZoom(param0: number): void;
				public static getCPtr(param0: com.carto.search.VectorTileSearchService): number;
				public delete(): void;
				public findFeatures(param0: com.carto.search.SearchRequest): com.carto.geometry.VectorTileFeatureCollection;
				public swigTakeOwnership(): void;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.search.VectorTileSearchService;
				public getMinZoom(): number;
				public setMinZoom(param0: number): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module services {
			export class CartoMapsService {
				public static class: java.lang.Class<com.carto.services.CartoMapsService>;
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
			export class CartoSQLService {
				public static class: java.lang.Class<com.carto.services.CartoSQLService>;
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
			export class AnimationStyle {
				public static class: java.lang.Class<com.carto.styles.AnimationStyle>;
				public swigCMemOwn: boolean;
				public getPhaseOutDuration(): number;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.AnimationStyle;
				public constructor(param0: number, param1: boolean);
				public getFadeAnimationType(): com.carto.styles.AnimationType;
				public static getCPtr(param0: com.carto.styles.AnimationStyle): number;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public getRelativeSpeed(): number;
				public getPhaseInDuration(): number;
				public delete(): void;
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
			export class AnimationStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.AnimationStyleBuilder>;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public setPhaseInDuration(param0: number): void;
				public setPhaseOutDuration(param0: number): void;
				public getRelativeSpeed(): number;
				public getPhaseInDuration(): number;
				public delete(): void;
				public setRelativeSpeed(param0: number): void;
				public static getCPtr(param0: com.carto.styles.AnimationStyleBuilder): number;
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
				public static values(): native.Array<com.carto.styles.AnimationType>;
				public static valueOf(param0: string): com.carto.styles.AnimationType;
				public static swigToEnum(param0: number): com.carto.styles.AnimationType;
			}
			export module AnimationType {
				export class SwigNext {
					public static class: java.lang.Class<com.carto.styles.AnimationType.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class BalloonPopupMargins {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupMargins>;
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

declare module com {
	export module carto {
		export module styles {
			export class BalloonPopupStyle extends com.carto.styles.PopupStyle {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupStyle>;
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
				public swigGetDirectorObject(): any;
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

declare module com {
	export module carto {
		export module styles {
			export class BalloonPopupStyleBuilder extends com.carto.styles.PopupStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupStyleBuilder>;
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
				public swigGetDirectorObject(): any;
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





declare module com {
	export module carto {
		export module styles {
			export class BillboardOrientation {
				public static class: java.lang.Class<com.carto.styles.BillboardOrientation>;
				public static BILLBOARD_ORIENTATION_FACE_CAMERA: com.carto.styles.BillboardOrientation;
				public static BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND: com.carto.styles.BillboardOrientation;
				public static BILLBOARD_ORIENTATION_GROUND: com.carto.styles.BillboardOrientation;
				public swigValue(): number;
				public static valueOf(param0: string): com.carto.styles.BillboardOrientation;
				public static values(): native.Array<com.carto.styles.BillboardOrientation>;
				public static swigToEnum(param0: number): com.carto.styles.BillboardOrientation;
			}
			export module BillboardOrientation {
				export class SwigNext {
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
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.styles.BillboardScaling;
				public static values(): native.Array<com.carto.styles.BillboardScaling>;
				public static valueOf(param0: string): com.carto.styles.BillboardScaling;
			}
			export module BillboardScaling {
				export class SwigNext {
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
				public finalize(): void;
				public getAttachAnchorPointY(): number;
				public constructor(param0: number, param1: boolean);
				public isScaleWithDPI(): boolean;
				public getVerticalOffset(): number;
				public getAnimationStyle(): com.carto.styles.AnimationStyle;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public static getCPtr(param0: com.carto.styles.BillboardStyle): number;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public delete(): void;
				public isCausesOverlap(): boolean;
				public getAttachAnchorPointX(): number;
				public static getCPtr(param0: com.carto.styles.Style): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyle;
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
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public setCausesOverlap(param0: boolean): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyleBuilder;
				public setHideIfOverlapped(param0: boolean): void;
				public setAttachAnchorPointX(param0: number): void;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class CartoCSSStyleSet {
				public static class: java.lang.Class<com.carto.styles.CartoCSSStyleSet>;
				public swigCMemOwn: boolean;
				public getCartoCSS(): string;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(param0: com.carto.styles.CartoCSSStyleSet): number;
				public hashCode(): number;
				public finalize(): void;
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
			export class CompiledStyleSet {
				public static class: java.lang.Class<com.carto.styles.CompiledStyleSet>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getStyleAssetName(): string;
				public hashCode(): number;
				public constructor(param0: com.carto.utils.AssetPackage, param1: string);
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.styles.CompiledStyleSet): number;
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
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.GeometryCollectionStyle;
				public static getCPtr(param0: com.carto.styles.GeometryCollectionStyle): number;
				public getPointStyle(): com.carto.styles.PointStyle;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public getPolygonStyle(): com.carto.styles.PolygonStyle;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public delete(): void;
				public getLineStyle(): com.carto.styles.LineStyle;
				public static getCPtr(param0: com.carto.styles.Style): number;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.styles.LabelStyle): number;
				public getAnchorPointY(): number;
				public swigGetClassName(): string;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public swigGetDirectorObject(): any;
				public static getCPtr(param0: com.carto.styles.BillboardStyle): number;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.LabelStyle;
				public getRenderScale(): number;
				public getAnchorPointX(): number;
				public static getCPtr(param0: com.carto.styles.Style): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyle;
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
				public finalize(): void;
				public setFlippable(param0: boolean): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
				public setAnchorPointY(param0: number): void;
				public constructor();
				public delete(): void;
				public setAnchorPoint(param0: number, param1: number): void;
				public static getCPtr(param0: com.carto.styles.BillboardStyleBuilder): number;
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
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public setRenderScale(param0: number): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyleBuilder;
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
				public static values(): native.Array<com.carto.styles.LineEndType>;
				public static swigToEnum(param0: number): com.carto.styles.LineEndType;
			}
			export module LineEndType {
				export class SwigNext {
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
				public static values(): native.Array<com.carto.styles.LineJoinType>;
				public static valueOf(param0: string): com.carto.styles.LineJoinType;
			}
			export module LineJoinType {
				export class SwigNext {
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
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.LineStyle;
				public getClickWidth(): number;
				public getLineJoinType(): com.carto.styles.LineJoinType;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public getBitmap(): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public getWidth(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public static getCPtr(param0: com.carto.styles.LineStyle): number;
				public delete(): void;
				public getLineEndType(): com.carto.styles.LineEndType;
				public getStretchFactor(): number;
				public static getCPtr(param0: com.carto.styles.Style): number;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public getBitmap(): com.carto.graphics.Bitmap;
				public setWidth(param0: number): void;
				public swigGetRawPtr(): number;
				public getWidth(): number;
				public delete(): void;
				public buildStyle(): com.carto.styles.LineStyle;
				public setLineJoinType(param0: com.carto.styles.LineJoinType): void;
				public setClickWidth(param0: number): void;
				public getLineEndType(): com.carto.styles.LineEndType;
				public getStretchFactor(): number;
				public static getCPtr(param0: com.carto.styles.LineStyleBuilder): number;
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
				public finalize(): void;
				public getClickSize(): number;
				public constructor(param0: number, param1: boolean);
				public getAnchorPointY(): number;
				public swigGetClassName(): string;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public swigGetDirectorObject(): any;
				public getBitmap(): com.carto.graphics.Bitmap;
				public static getCPtr(param0: com.carto.styles.BillboardStyle): number;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public delete(): void;
				public getSize(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.MarkerStyle;
				public getAnchorPointX(): number;
				public static getCPtr(param0: com.carto.styles.MarkerStyle): number;
				public static getCPtr(param0: com.carto.styles.Style): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyle;
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
				public getAnchorPointX(): number;
				public setBitmap(param0: com.carto.graphics.Bitmap): void;
				public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
				public getClickSize(): number;
				public constructor(param0: number, param1: boolean);
				public getAnchorPointY(): number;
				public swigGetClassName(): string;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public setAnchorPointX(param0: number): void;
				public swigGetDirectorObject(): any;
				public getBitmap(): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyleBuilder;
				public setOrientationMode(param0: com.carto.styles.BillboardOrientation): void;
				public buildStyle(): com.carto.styles.MarkerStyle;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class NMLModelStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.NMLModelStyle>;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.NMLModelStyle;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public delete(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.styles.Style): number;
				public static getCPtr(param0: com.carto.styles.NMLModelStyle): number;
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class NMLModelStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.NMLModelStyleBuilder>;
				public getModelAsset(): com.carto.core.BinaryData;
				public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
				public swigGetClassName(): string;
				public setModelAsset(param0: com.carto.core.BinaryData): void;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public buildStyle(): com.carto.styles.NMLModelStyle;
				public static getCPtr(param0: com.carto.styles.NMLModelStyleBuilder): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.NMLModelStyleBuilder;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class PointStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.PointStyle>;
				public static getCPtr(param0: com.carto.styles.PointStyle): number;
				public finalize(): void;
				public getClickSize(): number;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public getBitmap(): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public delete(): void;
				public getSize(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PointStyle;
				public static getCPtr(param0: com.carto.styles.Style): number;
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
				public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
				public finalize(): void;
				public getClickSize(): number;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
				public swigGetClassName(): string;
				public setSize(param0: number): void;
				public static getCPtr(param0: com.carto.styles.PointStyleBuilder): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public getBitmap(): com.carto.graphics.Bitmap;
				public buildStyle(): com.carto.styles.PointStyle;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PointStyleBuilder;
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
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public delete(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.styles.Polygon3DStyle): number;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Polygon3DStyle;
				public static getCPtr(param0: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
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
				public static getCPtr(param0: com.carto.styles.Polygon3DStyleBuilder): number;
				public buildStyle(): com.carto.styles.Polygon3DStyle;
				public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Polygon3DStyleBuilder;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PolygonStyle;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public static getCPtr(param0: com.carto.styles.PolygonStyle): number;
				public delete(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public getLineStyle(): com.carto.styles.LineStyle;
				public static getCPtr(param0: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class PolygonStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.PolygonStyleBuilder>;
				public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
				public setLineStyle(param0: com.carto.styles.LineStyle): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
				public swigGetClassName(): string;
				public buildStyle(): com.carto.styles.PolygonStyle;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(param0: com.carto.styles.PolygonStyleBuilder): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PolygonStyleBuilder;
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
				public static getCPtr(param0: com.carto.styles.BillboardStyle): number;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public delete(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.styles.PopupStyle): number;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PopupStyle;
				public static getCPtr(param0: com.carto.styles.Style): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyle;
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class PopupStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.PopupStyleBuilder>;
				public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
				public swigGetClassName(): string;
				public buildStyle(): com.carto.styles.PopupStyle;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(param0: com.carto.styles.BillboardStyleBuilder): number;
				public static getCPtr(param0: com.carto.styles.PopupStyleBuilder): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyleBuilder;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.PopupStyleBuilder;
			}
		}
	}
}





declare module com {
	export module carto {
		export module styles {
			export class StringCartoCSSStyleSetMap {
				public static class: java.lang.Class<com.carto.styles.StringCartoCSSStyleSetMap>;
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

declare module com {
	export module carto {
		export module styles {
			export class Style {
				public static class: java.lang.Class<com.carto.styles.Style>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getColor(): com.carto.graphics.Color;
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.StyleBuilder>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getColor(): com.carto.graphics.Color;
				public setColor(param0: com.carto.graphics.Color): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
			}
		}
	}
}









declare module com {
	export module carto {
		export module styles {
			export class TextMargins {
				public static class: java.lang.Class<com.carto.styles.TextMargins>;
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

declare module com {
	export module carto {
		export module styles {
			export class TextStyle extends com.carto.styles.LabelStyle {
				public static class: java.lang.Class<com.carto.styles.TextStyle>;
				public getStrokeWidth(): number;
				public finalize(): void;
				public isBreakLines(): boolean;
				public getTextField(): string;
				public static getCPtr(param0: com.carto.styles.BillboardStyle): number;
				public getFontColor(): com.carto.graphics.Color;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyle;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.TextStyle;
				public getBorderColor(): com.carto.graphics.Color;
				public getBackgroundColor(): com.carto.graphics.Color;
				public constructor(param0: number, param1: boolean);
				public getFontName(): string;
				public static getCPtr(param0: com.carto.styles.LabelStyle): number;
				public static getCPtr(param0: com.carto.styles.TextStyle): number;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
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

declare module com {
	export module carto {
		export module styles {
			export class TextStyleBuilder extends com.carto.styles.LabelStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.TextStyleBuilder>;
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
				public swigGetDirectorObject(): any;
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





declare module com {
	export module carto {
		export module ui {
			export class BaseMapView {
				public static class: java.lang.Class<com.carto.ui.BaseMapView>;
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
				public static values(): native.Array<com.carto.ui.ClickType>;
				public static valueOf(param0: string): com.carto.ui.ClickType;
				public static swigToEnum(param0: number): com.carto.ui.ClickType;
			}
			export module ClickType {
				export class SwigNext {
					public static class: java.lang.Class<com.carto.ui.ClickType.SwigNext>;
				}
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class ConfigChooser {
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
			export class MapClickInfo {
				public static class: java.lang.Class<com.carto.ui.MapClickInfo>;
				public swigCMemOwn: boolean;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public getClickPos(): com.carto.core.MapPos;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.ui.MapClickInfo): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class MapEventListener {
				public static class: java.lang.Class<com.carto.ui.MapEventListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public onMapMoved(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.ui.MapEventListener): number;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public onMapStable(): void;
				public swigGetRawPtr(): number;
				public onMapClicked(param0: com.carto.ui.MapClickInfo): void;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.ui.MapEventListener;
				public swigTakeOwnership(): void;
				public onMapIdle(): void;
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
			export class MapView {
				public static class: java.lang.Class<com.carto.ui.MapView>;
				public setMapRotation(param0: number, param1: number): void;
				public getZoom(): number;
				public setZoom(param0: number, param1: number): void;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public mapToScreen(param0: com.carto.core.MapPos): com.carto.core.ScreenPos;
				public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
				public getMapRotation(): number;
				public setFocusPos(param0: com.carto.core.MapPos, param1: number): void;
				public cancelAllTasks(): void;
				public delete(): void;
				public constructor(param0: globalAndroid.content.Context);
				public setTilt(param0: number, param1: number): void;
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public clearPreloadingCaches(): void;
				public clearAllCaches(): void;
				public tilt(param0: number, param1: number): void;
				public getLayers(): com.carto.components.Layers;
				public setMapEventListener(param0: com.carto.ui.MapEventListener): void;
				public zoom(param0: number, param1: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public pan(param0: com.carto.core.MapVec, param1: number): void;
				public setMapRotation(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public rotate(param0: number, param1: number): void;
				public zoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: number): void;
				public static registerLicense(param0: string, param1: globalAndroid.content.Context): boolean;
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
			export class PopupClickInfo {
				public static class: java.lang.Class<com.carto.ui.PopupClickInfo>;
				public swigCMemOwn: boolean;
				public getElementClickPos(): com.carto.core.ScreenPos;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public getClickPos(): com.carto.core.MapPos;
				public delete(): void;
				public hashCode(): number;
				public getPopup(): com.carto.vectorelements.Popup;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.ui.PopupClickInfo): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class PopupDrawInfo {
				public static class: java.lang.Class<com.carto.ui.PopupDrawInfo>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public getAnchorScreenPos(): com.carto.core.ScreenPos;
				public getScreenBounds(): com.carto.core.ScreenBounds;
				public static getCPtr(param0: com.carto.ui.PopupDrawInfo): number;
				public delete(): void;
				public hashCode(): number;
				public getPopup(): com.carto.vectorelements.Popup;
				public finalize(): void;
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
			export class RasterTileClickInfo {
				public static class: java.lang.Class<com.carto.ui.RasterTileClickInfo>;
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
			export class UTFGridClickInfo {
				public static class: java.lang.Class<com.carto.ui.UTFGridClickInfo>;
				public swigCMemOwn: boolean;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public getClickPos(): com.carto.core.MapPos;
				public delete(): void;
				public hashCode(): number;
				public getLayer(): com.carto.layers.Layer;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.ui.UTFGridClickInfo): number;
				public getElementInfo(): com.carto.core.Variant;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class VectorElementClickInfo {
				public static class: java.lang.Class<com.carto.ui.VectorElementClickInfo>;
				public swigCMemOwn: boolean;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public getClickPos(): com.carto.core.MapPos;
				public getElementClickPos(): com.carto.core.MapPos;
				public delete(): void;
				public hashCode(): number;
				public getLayer(): com.carto.layers.Layer;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.ui.VectorElementClickInfo): number;
				public getVectorElement(): com.carto.vectorelements.VectorElement;
			}
		}
	}
}



declare module com {
	export module carto {
		export module ui {
			export class VectorElementDragInfo {
				public static class: java.lang.Class<com.carto.ui.VectorElementDragInfo>;
				public swigCMemOwn: boolean;
				public getMapPos(): com.carto.core.MapPos;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.ui.VectorElementDragInfo): number;
				public getDragMode(): com.carto.ui.VectorElementDragMode;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
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
				public static values(): native.Array<com.carto.ui.VectorElementDragMode>;
				public swigValue(): number;
				public static valueOf(param0: string): com.carto.ui.VectorElementDragMode;
				public static swigToEnum(param0: number): com.carto.ui.VectorElementDragMode;
			}
			export module VectorElementDragMode {
				export class SwigNext {
					public static class: java.lang.Class<com.carto.ui.VectorElementDragMode.SwigNext>;
				}
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class VectorTileClickInfo {
				public static class: java.lang.Class<com.carto.ui.VectorTileClickInfo>;
				public swigCMemOwn: boolean;
				public getClickType(): com.carto.ui.ClickType;
				public getClickPos(): com.carto.core.MapPos;
				public static getCPtr(param0: com.carto.ui.VectorTileClickInfo): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getFeatureClickPos(): com.carto.core.MapPos;
				public swigGetRawPtr(): number;
				public delete(): void;
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
			export class AndroidUtils {
				public static class: java.lang.Class<com.carto.utils.AndroidUtils>;
				public swigCMemOwn: boolean;
				public static getDeviceType(): string;
				public delete(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.utils.AndroidUtils): number;
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
			export class AssetPackage {
				public static class: java.lang.Class<com.carto.utils.AssetPackage>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getAssetNames(): com.carto.core.StringVector;
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.utils.AssetPackage): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.utils.AssetPackage;
				public loadAsset(param0: string): com.carto.core.BinaryData;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public swigTakeOwnership(): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module utils {
			export class AssetUtils {
				public static class: java.lang.Class<com.carto.utils.AssetUtils>;
				public swigCMemOwn: boolean;
				public static setAssetManagerPointer(param0: globalAndroid.content.res.AssetManager): void;
				public delete(): void;
				public static loadAsset(param0: string): com.carto.core.BinaryData;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.utils.AssetUtils): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module utils {
			export class BitmapUtils {
				public static class: java.lang.Class<com.carto.utils.BitmapUtils>;
				public swigCMemOwn: boolean;
				public static getCPtr(param0: com.carto.utils.BitmapUtils): number;
				public delete(): void;
				public finalize(): void;
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
			export class Log {
				public static class: java.lang.Class<com.carto.utils.Log>;
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

declare module com {
	export module carto {
		export module utils {
			export class LogEventListener {
				public static class: java.lang.Class<com.carto.utils.LogEventListener>;
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
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.utils.LogEventListener;
				public onDebugEvent(param0: string): boolean;
				public swigTakeOwnership(): void;
				public onFatalEvent(param0: string): boolean;
			}
		}
	}
}





declare module com {
	export module carto {
		export module utils {
			export class TileUtils {
				public static class: java.lang.Class<com.carto.utils.TileUtils>;
				public swigCMemOwn: boolean;
				public static getCPtr(param0: com.carto.utils.TileUtils): number;
				public static calculateMapTileOrigin(param0: com.carto.core.MapTile, param1: com.carto.projections.Projection): com.carto.core.MapPos;
				public static calculateMapTile(param0: com.carto.core.MapPos, param1: number, param2: com.carto.projections.Projection): com.carto.core.MapTile;
				public delete(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static calculateMapTileBounds(param0: com.carto.core.MapTile, param1: com.carto.projections.Projection): com.carto.core.MapBounds;
			}
		}
	}
}



declare module com {
	export module carto {
		export module utils {
			export class ZippedAssetPackage extends com.carto.utils.AssetPackage {
				public static class: java.lang.Class<com.carto.utils.ZippedAssetPackage>;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.utils.ZippedAssetPackage;
				public static getCPtr(param0: com.carto.utils.ZippedAssetPackage): number;
				public getLocalAssetNames(): com.carto.core.StringVector;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getAssetNames(): com.carto.core.StringVector;
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.utils.AssetPackage): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.utils.AssetPackage;
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
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Popup;
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.BalloonPopupStyle, param2: string, param3: string);
				public constructor(param0: number, param1: boolean);
				public getStyle(): com.carto.styles.PopupStyle;
				public swigGetClassName(): string;
				public getTitle(): string;
				public swigGetDirectorObject(): any;
				public setStyle(param0: com.carto.styles.PopupStyle): void;
				public swigGetRawPtr(): number;
				public setDescription(param0: string): void;
				public getStyle(): com.carto.styles.BalloonPopupStyle;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.BalloonPopup;
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
				public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getBounds(): com.carto.core.MapBounds;
				public setPos(param0: com.carto.core.MapPos): void;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
				public setBaseBillboard(param0: com.carto.vectorelements.Billboard): void;
				public setGeometry(param0: com.carto.geometry.Geometry): void;
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
				public getRotation(): number;
				public setRotation(param0: number): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
				public getBaseBillboard(): com.carto.vectorelements.Billboard;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
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
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.PopupStyle, param2: com.carto.vectorelements.CustomPopupHandler);
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
				public processClick(param0: com.carto.ui.ClickType, param1: com.carto.core.MapPos, param2: com.carto.core.ScreenPos): boolean;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
			}
		}
	}
}

declare module com {
	export module carto {
		export module vectorelements {
			export class CustomPopupHandler {
				public static class: java.lang.Class<com.carto.vectorelements.CustomPopupHandler>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.vectorelements.CustomPopupHandler): number;
				public onPopupClicked(param0: com.carto.ui.PopupClickInfo): boolean;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.CustomPopupHandler;
				public swigTakeOwnership(): void;
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
				public static getCPtr(param0: com.carto.vectorelements.GeometryCollection): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.geometry.MultiGeometry, param1: com.carto.styles.GeometryCollectionStyle);
				public swigGetClassName(): string;
				public getGeometry(): com.carto.geometry.MultiGeometry;
				public swigGetDirectorObject(): any;
				public getStyle(): com.carto.styles.GeometryCollectionStyle;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.GeometryCollection;
				public delete(): void;
				public setStyle(param0: com.carto.styles.GeometryCollectionStyle): void;
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
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
				public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Label;
				public constructor(param0: number, param1: boolean);
				public setStyle(param0: com.carto.styles.LabelStyle): void;
				public swigGetClassName(): string;
				public drawBitmap(param0: number): com.carto.graphics.Bitmap;
				public swigGetDirectorObject(): any;
				public static getCPtr(param0: com.carto.vectorelements.Label): number;
				public swigGetRawPtr(): number;
				public getStyle(): com.carto.styles.LabelStyle;
				public delete(): void;
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
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
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.vectorelements.Line): number;
				public setPoses(param0: com.carto.core.MapPosVector): void;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
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



declare module com {
	export module carto {
		export module vectorelements {
			export class Marker extends com.carto.vectorelements.Billboard {
				public static class: java.lang.Class<com.carto.vectorelements.Marker>;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.MarkerStyle);
				public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.vectorelements.Marker): number;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Marker;
				public constructor(param0: com.carto.vectorelements.Billboard, param1: com.carto.styles.MarkerStyle);
				public swigGetRawPtr(): number;
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.MarkerStyle);
				public delete(): void;
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
				public getStyle(): com.carto.styles.MarkerStyle;
				public setStyle(param0: com.carto.styles.MarkerStyle): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class NMLModel extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.NMLModel>;
				public getStyle(): com.carto.styles.NMLModelStyle;
				public static getCPtr(param0: com.carto.vectorelements.NMLModel): number;
				public getScale(): number;
				public finalize(): void;
				public getRotationAxis(): com.carto.core.MapVec;
				public setScale(param0: number): void;
				public constructor(param0: number, param1: boolean);
				public setPos(param0: com.carto.core.MapPos): void;
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.core.BinaryData);
				public getRotationAngle(): number;
				public setRotation(param0: com.carto.core.MapVec, param1: number): void;
				public swigGetClassName(): string;
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.NMLModelStyle);
				public setStyle(param0: com.carto.styles.NMLModelStyle): void;
				public swigGetDirectorObject(): any;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.NMLModelStyle);
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.NMLModel;
				public delete(): void;
				public setGeometry(param0: com.carto.geometry.Geometry): void;
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.core.BinaryData);
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class Point extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.Point>;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Point;
				public static getCPtr(param0: com.carto.vectorelements.Point): number;
				public getStyle(): com.carto.styles.PointStyle;
				public finalize(): void;
				public constructor(param0: com.carto.geometry.PointGeometry, param1: com.carto.styles.PointStyle);
				public constructor(param0: number, param1: boolean);
				public setPos(param0: com.carto.core.MapPos): void;
				public getPos(): com.carto.core.MapPos;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public getGeometry(): com.carto.geometry.PointGeometry;
				public delete(): void;
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
				public setStyle(param0: com.carto.styles.PointStyle): void;
				public setGeometry(param0: com.carto.geometry.PointGeometry): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
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
				public swigGetDirectorObject(): any;
				public getGeometry(): com.carto.geometry.PolygonGeometry;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
				public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.styles.PolygonStyle);
				public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.core.MapPosVectorVector, param2: com.carto.styles.PolygonStyle);
				public static getCPtr(param0: com.carto.vectorelements.Polygon): number;
				public setStyle(param0: com.carto.styles.PolygonStyle): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
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
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Polygon3D;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public setGeometry(param0: com.carto.geometry.PolygonGeometry): void;
				public setHoles(param0: com.carto.core.MapPosVectorVector): void;
				public setPoses(param0: com.carto.core.MapPosVector): void;
				public swigGetClassName(): string;
				public getStyle(): com.carto.styles.Polygon3DStyle;
				public setStyle(param0: com.carto.styles.Polygon3DStyle): void;
				public swigGetDirectorObject(): any;
				public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.core.MapPosVectorVector, param2: com.carto.styles.Polygon3DStyle, param3: number);
				public getGeometry(): com.carto.geometry.PolygonGeometry;
				public swigGetRawPtr(): number;
				public delete(): void;
				public constructor(param0: com.carto.geometry.PolygonGeometry, param1: com.carto.styles.Polygon3DStyle, param2: number);
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
				public constructor(param0: com.carto.core.MapPosVector, param1: com.carto.styles.Polygon3DStyle, param2: number);
				public static getCPtr(param0: com.carto.vectorelements.Polygon3D): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
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
				public swigGetDirectorObject(): any;
				public setStyle(param0: com.carto.styles.PopupStyle): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
				public setAnchorPoint(param0: number, param1: number): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
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
				public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Label;
				public constructor(param0: number, param1: boolean);
				public setStyle(param0: com.carto.styles.LabelStyle): void;
				public swigGetClassName(): string;
				public drawBitmap(param0: number): com.carto.graphics.Bitmap;
				public swigGetDirectorObject(): any;
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
				public getStyle(): com.carto.styles.TextStyle;
				public setStyle(param0: com.carto.styles.TextStyle): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.TextStyle, param2: string);
				public setText(param0: string): void;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectorelements {
			export class VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.VectorElement>;
				public swigCMemOwn: boolean;
				public setMetaData(param0: com.carto.core.StringVariantMap): void;
				public isVisible(): boolean;
				public notifyElementChanged(): void;
				public getId(): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getBounds(): com.carto.core.MapBounds;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public getMetaDataElement(param0: string): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public delete(): void;
				public setMetaDataElement(param0: string, param1: com.carto.core.Variant): void;
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public setId(param0: number): void;
				public getMetaData(): com.carto.core.StringVariantMap;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
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
			export class VectorElementVector {
				public static class: java.lang.Class<com.carto.vectorelements.VectorElementVector>;
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

declare module com {
	export module carto {
		export module vectortiles {
			export class CartoVectorTileDecoder extends com.carto.vectortiles.VectorTileDecoder {
				public static class: java.lang.Class<com.carto.vectortiles.CartoVectorTileDecoder>;
				public addFallbackFont(param0: com.carto.core.BinaryData): void;
				public setLayerStyleSet(param0: string, param1: com.carto.styles.CartoCSSStyleSet): void;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.VectorTileDecoder;
				public constructor(param0: com.carto.core.StringVector, param1: com.carto.styles.StringCartoCSSStyleSetMap);
				public setLayerVisible(param0: string, param1: boolean): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public isLayerVisible(param0: string): boolean;
				public static getCPtr(param0: com.carto.vectortiles.CartoVectorTileDecoder): number;
				public delete(): void;
				public getLayerStyleSet(param0: string): com.carto.styles.CartoCSSStyleSet;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.CartoVectorTileDecoder;
				public getLayerIds(): com.carto.core.StringVector;
				public static getCPtr(param0: com.carto.vectortiles.VectorTileDecoder): number;
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
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.MBVectorTileDecoder;
				public constructor(param0: com.carto.styles.CartoCSSStyleSet);
				public getCartoCSSStyleSet(): com.carto.styles.CartoCSSStyleSet;
				public getStyleParameters(): com.carto.core.StringVector;
				public addFallbackFont(param0: com.carto.core.BinaryData): void;
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
				public swigGetDirectorObject(): any;
				public getStyleParameter(param0: string): string;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(param0: com.carto.vectortiles.VectorTileDecoder): number;
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
				public finalize(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.VectorTileDecoder;
				public constructor(param0: number, param1: boolean);
				public getFrameCount(): number;
				public swigGetClassName(): string;
				public setResolution(param0: number): void;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public setStyleSet(param0: com.carto.styles.CartoCSSStyleSet): void;
				public swigGetRawPtr(): number;
				public getResolution(): number;
				public static getCPtr(param0: com.carto.vectortiles.TorqueTileDecoder): number;
				public delete(): void;
				public static getCPtr(param0: com.carto.vectortiles.VectorTileDecoder): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.TorqueTileDecoder;
				public getMinZoom(): number;
			}
		}
	}
}



declare module com {
	export module carto {
		export module vectortiles {
			export class VectorTileDecoder {
				public static class: java.lang.Class<com.carto.vectortiles.VectorTileDecoder>;
				public swigCMemOwn: boolean;
				public addFallbackFont(param0: com.carto.core.BinaryData): void;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectortiles.VectorTileDecoder;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
				public notifyDecoderChanged(): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public static getCPtr(param0: com.carto.vectortiles.VectorTileDecoder): number;
				public getMinZoom(): number;
			}
		}
	}
}



//Generics information:

