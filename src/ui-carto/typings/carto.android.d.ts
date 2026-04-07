/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

declare namespace com {
	export namespace carto {
		export namespace components {
			export class Layers extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.Layers>;
				
				public set(index: number, layer: com.carto.layers.Layer): void;
				public remove(layer: com.carto.layers.Layer): boolean;
				public get(index: number): com.carto.layers.Layer;
				
				
				
				public setAll(layers: com.carto.layers.LayerVector): void;
				public insert(index: number, layer: com.carto.layers.Layer): void;
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				public getAll(): com.carto.layers.LayerVector;
				public clear(): void;
				public addAll(layers: com.carto.layers.LayerVector): void;
				public count(): number;
				public add(layer: com.carto.layers.Layer): void;
				public removeAll(layers: com.carto.layers.LayerVector): boolean;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace components {
			export class Options extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.Options>;
				
				public setSkyColor(color: com.carto.graphics.Color): void;
				public isDoubleClickDetection(): boolean;
				public getPivotMode(): com.carto.components.PivotMode;
				public isRotatable(): boolean;
				public setDoubleClickMaxDuration(duration: number): void;
				public setDPI(dpi: number): void;
				
				public hashCode(): number;
				public setClearColor(color: com.carto.graphics.Color): void;
				public setTiltRange(tiltRange: com.carto.core.MapRange): void;
				public getBackgroundBitmap(): com.carto.graphics.Bitmap;
				public getDoubleClickMaxDuration(): number;
				public getSkyColor(): com.carto.graphics.Color;
				public setTiltGestureReversed(reversed: boolean): void;
				public setZoomRange(zoomRange: com.carto.core.MapRange): void;
				public getAmbientLightColor(): com.carto.graphics.Color;
				public isZoomGestures(): boolean;
				public getFieldOfViewY(): number;
				public getPanBounds(): com.carto.core.MapBounds;
				public setDoubleClickDetection(enabled: boolean): void;
				public setTileThreadPoolSize(poolSize: number): void;
				public setRenderProjectionMode(renderProjectionMode: com.carto.components.RenderProjectionMode): void;
				public setLongClickDuration(duration: number): void;
				public isLayersLabelsProcessedInReverseOrder(): boolean;
				public setTileDrawSize(tileDrawSize: number): void;
				public getLongClickDuration(): number;
				public setLayersLabelsProcessedInReverseOrder(enabled: boolean): void;
				public setBackgroundBitmap(backgroundBitmap: com.carto.graphics.Bitmap): void;
				public isSeamlessPanning(): boolean;
				public setClickTypeDetection(enabled: boolean): void;
				public setRestrictedPanning(enabled: boolean): void;
				public setBaseProjection(baseProjection: com.carto.projections.Projection): void;
				public setMainLightDirection(direction: com.carto.core.MapVec): void;
				public isClickTypeDetection(): boolean;
				public getFocusPointOffset(): com.carto.core.ScreenPos;
				public setFocusPointOffset(offset: com.carto.core.ScreenPos): void;
				public getTileThreadPoolSize(): number;
				public getDrawDistance(): number;
				public isTiltGestureReversed(): boolean;
				public getRenderProjectionMode(): com.carto.components.RenderProjectionMode;
				public isKineticRotation(): boolean;
				
				public isUserInput(): boolean;
				public setFieldOfViewY(fovY: number): void;
				
				public getClearColor(): com.carto.graphics.Color;
				public getTiltRange(): com.carto.core.MapRange;
				
				public isKineticZoom(): boolean;
				public setEnvelopeThreadPoolSize(poolSize: number): void;
				public getDPI(): number;
				public setUserInput(enabled: boolean): void;
				public setAmbientLightColor(color: com.carto.graphics.Color): void;
				public setKineticZoom(enabled: boolean): void;
				public setPanBounds(panBounds: com.carto.core.MapBounds): void;
				public getBaseProjection(): com.carto.projections.Projection;
				public setRotationGestures(enabled: boolean): void;
				public setPivotMode(pivotMode: com.carto.components.PivotMode): void;
				public isRotationGestures(): boolean;
				public setKineticRotation(enabled: boolean): void;
				public isKineticPan(): boolean;
				public setRotatable(enabled: boolean): void;
				public getZoomRange(): com.carto.core.MapRange;
				public setSeamlessPanning(enabled: boolean): void;
				public getPanningMode(): com.carto.components.PanningMode;
				public setKineticPan(enabled: boolean): void;
								public equals(obj: any): boolean;
				public setZoomGestures(enabled: boolean): void;
				public getMainLightDirection(): com.carto.core.MapVec;
				public getMainLightColor(): com.carto.graphics.Color;
				public getTileDrawSize(): number;
				public setPanningMode(panningMode: com.carto.components.PanningMode): void;
				public isRestrictedPanning(): boolean;
				public setDrawDistance(drawDistance: number): void;
				public getEnvelopeThreadPoolSize(): number;
				public setMainLightColor(color: com.carto.graphics.Color): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace components {
			export class PanningMode {
				public static class: java.lang.Class<com.carto.components.PanningMode>;
				public static PANNING_MODE_FREE: com.carto.components.PanningMode;
				public static PANNING_MODE_STICKY: com.carto.components.PanningMode;
				public static PANNING_MODE_STICKY_FINAL: com.carto.components.PanningMode;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.components.PanningMode>;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.carto.components.PanningMode;
				public static swigToEnum(swigEnum: number): com.carto.components.PanningMode;
			}
			export namespace PanningMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.components.PanningMode.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace components {
			export class PivotMode {
				public static class: java.lang.Class<com.carto.components.PivotMode>;
				public static PIVOT_MODE_TOUCHPOINT: com.carto.components.PivotMode;
				public static PIVOT_MODE_CENTERPOINT: com.carto.components.PivotMode;
				public static values(): androidNative.Array<com.carto.components.PivotMode>;
				public static valueOf(name: string): com.carto.components.PivotMode;
				public swigValue(): number;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static swigToEnum(swigEnum: number): com.carto.components.PivotMode;
			}
			export namespace PivotMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.components.PivotMode.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace components {
			export class RenderProjectionMode {
				public static class: java.lang.Class<com.carto.components.RenderProjectionMode>;
				public static RENDER_PROJECTION_MODE_PLANAR: com.carto.components.RenderProjectionMode;
				public static RENDER_PROJECTION_MODE_SPHERICAL: com.carto.components.RenderProjectionMode;
				public static values(): androidNative.Array<com.carto.components.RenderProjectionMode>;
				public swigValue(): number;
				public static valueOf(name: string): com.carto.components.RenderProjectionMode;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static swigToEnum(swigEnum: number): com.carto.components.RenderProjectionMode;
			}
			export namespace RenderProjectionMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.components.RenderProjectionMode.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class Address extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.Address>;
				
				public getStreet(): string;
				
				public getCountry(): string;
				
				public getCounty(): string;
				public getName(): string;
				public getCategories(): com.carto.core.StringVector;
				public toString(): string;
				
				public getNeighbourhood(): string;
				public constructor();
				public constructor(country: string, region: string, county: string, locality: string, neighbourhood: string, street: string, postcode: string, houseNumber: string, name: string, categories: com.carto.core.StringVector);
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
	export namespace carto {
		export namespace core {
			export class BinaryData extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.BinaryData>;
				
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
	export namespace carto {
		export namespace core {
			export class DoubleVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.DoubleVector>;
				
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
	export namespace carto {
		export namespace core {
			export class IntVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.IntVector>;
				
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
	export namespace carto {
		export namespace core {
			export class MapBounds extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapBounds>;
				
				public getMax(): com.carto.core.MapPos;
				public shrinkToIntersection(bounds: com.carto.core.MapBounds): void;
				
				public contains(bounds: com.carto.core.MapBounds): boolean;
				
				public intersects(bounds: com.carto.core.MapBounds): boolean;
				public getCenter(): com.carto.core.MapPos;
				public toString(): string;
				
				public contains(pos: com.carto.core.MapPos): boolean;
				public constructor();
				public getMin(): com.carto.core.MapPos;
								public equals(obj: any): boolean;
				public getDelta(): com.carto.core.MapVec;
				
				public hashCode(): number;
				public constructor(min: com.carto.core.MapPos, max: com.carto.core.MapPos);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapEnvelope extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapEnvelope>;
				
				public constructor(bounds: com.carto.core.MapBounds);
				
				public getBounds(): com.carto.core.MapBounds;
				public intersects(envelope: com.carto.core.MapEnvelope): boolean;
				public toString(): string;
				
				public constructor();
				public contains(envelope: com.carto.core.MapEnvelope): boolean;
								public equals(obj: any): boolean;
				
				
				public hashCode(): number;
				public constructor(convexHull: com.carto.core.MapPosVector);
				public getConvexHull(): com.carto.core.MapPosVector;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapPos extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapPos>;
				
				public constructor(x: number, y: number);
				public constructor(x: number, y: number, z: number);
				public subPos(p: com.carto.core.MapPos): com.carto.core.MapVec;
				public getY(): number;
				
				public toString(): string;
				
				public constructor();
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				public getX(): number;
				public add(v: com.carto.core.MapVec): com.carto.core.MapPos;
				public subVec(v: com.carto.core.MapVec): com.carto.core.MapPos;
				public getZ(): number;
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapPosVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapPosVector>;
				
				
				public constructor(n: number);
				
				public constructor();
				public size(): number;
				
				public get(i: number): com.carto.core.MapPos;
								
				public capacity(): number;
				public clear(): void;
				public add(x: com.carto.core.MapPos): void;
				public isEmpty(): boolean;
				public set(i: number, val: com.carto.core.MapPos): void;
				public reserve(n: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapPosVectorVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapPosVectorVector>;
				
				public add(x: com.carto.core.MapPosVector): void;
				
				public constructor(n: number);
				
				public constructor();
				public size(): number;
								
				public set(i: number, val: com.carto.core.MapPosVector): void;
				public capacity(): number;
				
				public clear(): void;
				public get(i: number): com.carto.core.MapPosVector;
				public isEmpty(): boolean;
				public reserve(n: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapRange extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapRange>;
				
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
	export namespace carto {
		export namespace core {
			export class MapTile extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapTile>;
				
				
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
	export namespace carto {
		export namespace core {
			export class MapVec extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapVec>;
				
				public constructor(x: number, y: number);
				public sub(v: com.carto.core.MapVec): com.carto.core.MapVec;
				public constructor(x: number, y: number, z: number);
				public getY(): number;
				public length(): number;
				
				public crossProduct3D(v: com.carto.core.MapVec): com.carto.core.MapVec;
				public toString(): string;
				
				public crossProduct2D(v: com.carto.core.MapVec): number;
				public constructor();
								public equals(obj: any): boolean;
				
				public add(v: com.carto.core.MapVec): com.carto.core.MapVec;
				public dotProduct(v: com.carto.core.MapVec): number;
				public hashCode(): number;
				public getX(): number;
				
				public mul(multiplier: number): com.carto.core.MapVec;
				public getZ(): number;
				public div(divider: number): com.carto.core.MapVec;
				public getNormalized(): com.carto.core.MapVec;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace core {
			export class ScreenBounds extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.ScreenBounds>;
				
				public getHeight(): number;
				public getMin(): com.carto.core.ScreenPos;
				
				public contains(bounds: com.carto.core.ScreenBounds): boolean;
				public constructor(min: com.carto.core.ScreenPos, max: com.carto.core.ScreenPos);
				public toString(): string;
				
				public constructor();
				public intersects(bounds: com.carto.core.ScreenBounds): boolean;
				public getCenter(): com.carto.core.ScreenPos;
								public getWidth(): number;
				public equals(obj: any): boolean;
				
				
				public hashCode(): number;
				public contains(pos: com.carto.core.ScreenPos): boolean;
				public getMax(): com.carto.core.ScreenPos;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace core {
			export class ScreenPos extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.ScreenPos>;
				
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
	export namespace carto {
		export namespace core {
			export class ScreenPosVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.ScreenPosVector>;
				
				public add(x: com.carto.core.ScreenPos): void;
				
				public set(i: number, val: com.carto.core.ScreenPos): void;
				public constructor(n: number);
				
				public constructor();
				public size(): number;
				
								
				public capacity(): number;
				public clear(): void;
				public get(i: number): com.carto.core.ScreenPos;
				public isEmpty(): boolean;
				public reserve(n: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class StringMap extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.StringMap>;
				
				
				public get(key: string): string;
				
				
				public constructor();
				public size(): number;
				public constructor(arg0: com.carto.core.StringMap);
								
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
	export namespace carto {
		export namespace core {
			export class StringVariantMap extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.StringVariantMap>;
				
				public set(key: string, x: com.carto.core.Variant): void;
				
				public get(key: string): com.carto.core.Variant;
				
				
				public constructor();
				public size(): number;
								
				public has_key(key: string): boolean;
				public clear(): void;
				public del(key: string): void;
				public get_key(idx: number): string;
				public constructor(arg0: com.carto.core.StringVariantMap);
				public empty(): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class StringVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.StringVector>;
				
				
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
	export namespace carto {
		export namespace core {
			export class Variant extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.Variant>;
				
				public constructor(longVal: number);
				public getBool(): boolean;
				
				public getObjectKeys(): com.carto.core.StringVector;
				public constructor(boolVal: boolean);
				
				public constructor();
				public containsObjectKey(key: string): boolean;
				
				public constructor(string: string);
				public hashCode(): number;
				public getType(): com.carto.core.VariantType;
				public constructor(doubleVal: number);
				public getString(): string;
				public toString(): string;
				public constructor(object: com.carto.core.StringVariantMap);
								public getDouble(): number;
				public equals(obj: any): boolean;
				public getObjectElement(key: string): com.carto.core.Variant;
				public static fromString(str: string): com.carto.core.Variant;
				
				public getArraySize(): number;
				public getArrayElement(idx: number): com.carto.core.Variant;
				public constructor(array: com.carto.core.VariantVector);
				public getLong(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class VariantArrayBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.VariantArrayBuilder>;
				
				public buildVariant(): com.carto.core.Variant;
				public addDouble(val: number): void;
				
				
				
				public constructor();
				public addString(str: string): void;
								public addBool(val: boolean): void;
				public equals(obj: any): boolean;
				public addLong(val: number): void;
				
				public hashCode(): number;
				public clear(): void;
				public addVariant(var_: com.carto.core.Variant): void;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace core {
			export class VariantObjectBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.VariantObjectBuilder>;
				
				public setLong(key: string, val: number): void;
				public setDouble(key: string, val: number): void;
				public buildVariant(): com.carto.core.Variant;
				public setVariant(key: string, var_: com.carto.core.Variant): void;
				
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
	export namespace carto {
		export namespace core {
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
				public static values(): androidNative.Array<com.carto.core.VariantType>;
				public static swigToEnum(swigEnum: number): com.carto.core.VariantType;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.carto.core.VariantType;
			}
			export namespace VariantType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.core.VariantType.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class VariantVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.VariantVector>;
				
				
				
				public get(i: number): com.carto.core.Variant;
				public constructor(n: number);
				
				public constructor();
				public size(): number;
				public set(i: number, val: com.carto.core.Variant): void;
								
				public add(x: com.carto.core.Variant): void;
				public capacity(): number;
				public clear(): void;
				public isEmpty(): boolean;
				public reserve(n: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class AssetTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.AssetTileDataSource>;
				
				
				public constructor(minZoom: number, maxZoom: number);
				
				
				
				
				
				
				public constructor();
				
								public buildAssetPath(basePath: string, tile: com.carto.core.MapTile): string;
				public constructor(minZoom: number, maxZoom: number, basePath: string);
				
								
				public loadTile(tile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class BitmapOverlayRasterTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.BitmapOverlayRasterTileDataSource>;
				
				
				public constructor(minZoom: number, maxZoom: number);
				
				
				
				
				
				
				
				public constructor();
								
				public constructor(minZoom: number, maxZoom: number, bitmap: com.carto.graphics.Bitmap, projection: com.carto.projections.Projection, mapPoses: com.carto.core.MapPosVector, bitmapPoses: com.carto.core.ScreenPosVector);
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
								
				public getDataExtent(): com.carto.core.MapBounds;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class CacheTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.CacheTileDataSource>;
				
				
				public constructor(minZoom: number, maxZoom: number);
				
				
				
				
				public getCapacity(): number;
				public setCapacity(capacityInBytes: number): void;
				
				
				public getDataSource(): com.carto.datasources.TileDataSource;
				
				public getMaxZoom(): number;
				
				public constructor();
				public notifyTilesChanged(removeTiles: boolean): void;
								
				public clear(): void;
								public getDataExtent(): com.carto.core.MapBounds;
				public getMinZoom(): number;
				public constructor(dataSource: com.carto.datasources.TileDataSource);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class CombinedTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.CombinedTileDataSource>;
				
				
				
				public constructor(minZoom: number, maxZoom: number);
				
				
				
				
				public constructor(dataSource1: com.carto.datasources.TileDataSource, dataSource2: com.carto.datasources.TileDataSource, zoomLevel: number);
				
				public getMaxZoom(): number;
				
				public constructor();
								
				
								public getDataExtent(): com.carto.core.MapBounds;
				public loadTile(tile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMinZoom(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class GeoJSONVectorTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.GeoJSONVectorTileDataSource>;
				
				public updateGeoJSONFeature(layerIndex: number, geoJSON: com.carto.core.Variant): void;
				
				public setLayerGeoJSONString(layerIndex: number, geoJSON: string): void;
				
				
				
				public constructor();
				public setLayerFeatureCollection(layerIndex: number, projection: com.carto.projections.Projection, featureCollection: com.carto.geometry.FeatureCollection): void;
				public setSimplifyTolerance(tolerance: number): void;
				public setLayerGeoJSON(layerIndex: number, geoJSON: com.carto.core.Variant): void;
				
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getDataExtent(): com.carto.core.MapBounds;
				public createLayer(name: string): number;
				public getSimplifyTolerance(): number;
				public deleteLayer(layerIndex: number): void;
				
				public constructor(minZoom: number, maxZoom: number);
				public getDefaultLayerBuffer(): number;
				public updateGeoJSONStringFeature(layerIndex: number, geoJSON: string): void;
				
				
				
				public removeGeoJSONFeature(layerIndex: number, id: com.carto.core.Variant): void;
								public addGeoJSONStringFeature(layerIndex: number, geoJSON: string): void;
								public setDefaultLayerBuffer(tolerance: number): void;
				public addGeoJSONFeature(layerIndex: number, geoJSON: com.carto.core.Variant): void;
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class HTTPTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.HTTPTileDataSource>;
				
				
				
				public buildTileURL(baseURL: string, tile: com.carto.core.MapTile): string;
				public setTimeout(timeout: number): void;
				
				
				public constructor();
				public setBaseURL(baseURL: string): void;
				
				public setSubdomains(subdomains: com.carto.core.StringVector): void;
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public constructor(minZoom: number, maxZoom: number, baseURL: string);
				
				public setHTTPHeaders(headers: com.carto.core.StringMap): void;
				
				public getSubdomains(): com.carto.core.StringVector;
				public setTMSScheme(tmsScheme: boolean): void;
				public constructor(minZoom: number, maxZoom: number);
				public isTMSScheme(): boolean;
				
				public setMaxAgeHeaderCheck(maxAgeCheck: boolean): void;
				public getTimeout(): number;
				
				public getHTTPHeaders(): com.carto.core.StringMap;
				
								public isMaxAgeHeaderCheck(): boolean;
				public getBaseURL(): string;
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class LocalSpatialIndexType {
				public static class: java.lang.Class<com.carto.datasources.LocalSpatialIndexType>;
				public static LOCAL_SPATIAL_INDEX_TYPE_NULL: com.carto.datasources.LocalSpatialIndexType;
				public static LOCAL_SPATIAL_INDEX_TYPE_KDTREE: com.carto.datasources.LocalSpatialIndexType;
				public static values(): androidNative.Array<com.carto.datasources.LocalSpatialIndexType>;
				public swigValue(): number;
				public static swigToEnum(swigEnum: number): com.carto.datasources.LocalSpatialIndexType;
				public static valueOf(name: string): com.carto.datasources.LocalSpatialIndexType;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			}
			export namespace LocalSpatialIndexType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.datasources.LocalSpatialIndexType.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class LocalVectorDataSource extends com.carto.datasources.VectorDataSource {
				public static class: java.lang.Class<com.carto.datasources.LocalVectorDataSource>;
				public setGeometrySimplifier(simplifier: com.carto.geometry.GeometrySimplifier): void;
				
				
				public addFeatureCollection(featureCollection: com.carto.geometry.FeatureCollection, style: com.carto.styles.Style): void;
				
				public loadElements(cullState: com.carto.renderers.components.CullState): com.carto.datasources.components.VectorData;
				public getAll(): com.carto.vectorelements.VectorElementVector;
				
				public clear(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				
				public add(element: com.carto.vectorelements.VectorElement): void;
				
				
				
				
				
				public removeAll(elements: com.carto.vectorelements.VectorElementVector): boolean;
								public getGeometrySimplifier(): com.carto.geometry.GeometrySimplifier;
				public getFeatureCollection(): com.carto.geometry.FeatureCollection;
				public setAll(elements: com.carto.vectorelements.VectorElementVector): void;
								public constructor(projection: com.carto.projections.Projection);
				public addAll(elements: com.carto.vectorelements.VectorElementVector): void;
				
				public constructor(projection: com.carto.projections.Projection, spatialIndexType: com.carto.datasources.LocalSpatialIndexType);
				public remove(element: com.carto.vectorelements.VectorElement): boolean;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MBTilesScheme {
				public static class: java.lang.Class<com.carto.datasources.MBTilesScheme>;
				public static MBTILES_SCHEME_TMS: com.carto.datasources.MBTilesScheme;
				public static MBTILES_SCHEME_XYZ: com.carto.datasources.MBTilesScheme;
				public static valueOf(name: string): com.carto.datasources.MBTilesScheme;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.datasources.MBTilesScheme>;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static swigToEnum(swigEnum: number): com.carto.datasources.MBTilesScheme;
			}
			export namespace MBTilesScheme {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.datasources.MBTilesScheme.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MBTilesTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MBTilesTileDataSource>;
				public getTileMask(): string;
				public constructor(minZoom: number, maxZoom: number, path: string);
				
				
				
				
				
				public constructor();
				public constructor(path: string);
				public getMetaData(key: string): string;
				
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getDataExtent(): com.carto.core.MapBounds;
				
				public constructor(minZoom: number, maxZoom: number, path: string, scheme: com.carto.datasources.MBTilesScheme);
				
				public constructor(minZoom: number, maxZoom: number);
				public getMetaData(): com.carto.core.StringMap;
				
				public getMaxZoom(): number;
				
												
				public getMinZoom(): number;
			}

			export class PMTilesTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.PMTilesTileDataSource>;
				public constructor(minZoom: number, maxZoom: number, path: string);
				public constructor();
				public constructor(path: string);
				public getMetaData(key: string): string;
				
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getDataExtent(): com.carto.core.MapBounds;
				
				public constructor(minZoom: number, maxZoom: number);
				public getMetaData(): com.carto.core.StringMap;
				
				public getMaxZoom(): number;
				
												
				public getMinZoom(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MapTilerOnlineTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MapTilerOnlineTileDataSource>;
				
				
				public constructor(minZoom: number, maxZoom: number);
				
				
				
				public getCustomServiceURL(): string;
				public getTimeout(): number;
				public setTimeout(timeout: number): void;
				
				
				
				
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
								
				public constructor(key: string);
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
								
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MemoryCacheTileDataSource extends com.carto.datasources.CacheTileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MemoryCacheTileDataSource>;
				
				
				public constructor(minZoom: number, maxZoom: number);
				
				
				
				
				public getCapacity(): number;
				public setCapacity(capacityInBytes: number): void;
				
				
				
				
				public constructor();
								
				
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public clear(): void;
								
				public constructor(dataSource: com.carto.datasources.TileDataSource);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MergedMBVTTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MergedMBVTTileDataSource>;
				public getTileMask(): string;
				
				
				
				public constructor(minZoom: number, maxZoom: number);
				
				
				
				
				
				public getMaxZoom(): number;
				
				public constructor();
								
				public constructor(dataSource1: com.carto.datasources.TileDataSource, dataSource2: com.carto.datasources.TileDataSource);
				
								public getDataExtent(): com.carto.core.MapBounds;
				public loadTile(tile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMinZoom(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MultiTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MultiTileDataSource>;
				
				
				public constructor(minZoom: number, maxZoom: number);
				
				
				
				public add(datasource: com.carto.datasources.TileDataSource): void;
				public add(datasource: com.carto.datasources.TileDataSource, tileMask: string): void;
				
				
				public getMaxZoom(): number;
				
				public constructor();
								
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
								public getDataExtent(): com.carto.core.MapBounds;
				public remove(datasource: com.carto.datasources.TileDataSource): boolean;
				
				public constructor(maxOpenedPackages: number);
				
				public getMinZoom(): number;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class OrderedTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.OrderedTileDataSource>;
				
				
				
				public constructor(minZoom: number, maxZoom: number);
				
				
				
				
				
				
				public getMaxZoom(): number;
				
				public constructor();
								
				public constructor(dataSource1: com.carto.datasources.TileDataSource, dataSource2: com.carto.datasources.TileDataSource);
								public getDataExtent(): com.carto.core.MapBounds;
				public loadTile(tile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMinZoom(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class PackageManagerTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.PackageManagerTileDataSource>;
				
				
				public constructor(minZoom: number, maxZoom: number);
				public constructor(packageManager: com.carto.packagemanager.PackageManager);
				
				
				
				
				
				public getPackageManager(): com.carto.packagemanager.PackageManager;
				
				
				public constructor();
								
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
								
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class PersistentCacheTileDataSource extends com.carto.datasources.CacheTileDataSource {
				public static class: java.lang.Class<com.carto.datasources.PersistentCacheTileDataSource>;
				
				
				public startDownloadArea(mapBounds: com.carto.core.MapBounds, minZoom: number, maxZoom: number, tileDownloadListener: com.carto.datasources.TileDownloadListener): void;
				
				public stopAllDownloads(): void;
				
				public setCapacity(capacityInBytes: number): void;
				
				
				public constructor();
				public isCacheOnlyMode(): boolean;
				
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public clear(): void;
				public constructor(dataSource: com.carto.datasources.TileDataSource, databasePath: string);
				public constructor(dataSource: com.carto.datasources.TileDataSource);
				
				
				public close(): void;
				public constructor(minZoom: number, maxZoom: number);
				public setCacheOnlyMode(enabled: boolean): void;
				
				public getCapacity(): number;
				
				
				
								public isOpen(): boolean;
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class TileDataSource extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.TileDataSource>;
				
				
				
				public constructor(minZoom: number, maxZoom: number);
				public getProjection(): com.carto.projections.Projection;
				
				public setMaxOverzoomLevel(overzoomLevel: number): void;
				public getMaxOverzoomLevel(): number;
				
				
				
				
				public getMaxZoom(): number;
				
				public constructor();
				public notifyTilesChanged(removeTiles: boolean): void;
								
								public getDataExtent(): com.carto.core.MapBounds;
				public getMaxZoomWithOverzoom(): number;
				public isMaxOverzoomLevelSet(): boolean;
				public loadTile(tile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMinZoom(): number;
				public setEncoding(encoding: string): void;

			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class TileDownloadListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.TileDownloadListener>;
				
				
				
				
				public onDownloadFailed(tile: com.carto.core.MapTile): void;
				
				public onDownloadCompleted(): void;
				
				
				
				
				public constructor();
								
				public onDownloadStarting(tileCount: number): void;
				public onDownloadProgress(progress: number): void;
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class VectorDataSource extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.VectorDataSource>;
				
				
				
				public getProjection(): com.carto.projections.Projection;
				
				
				
				public loadElements(cullState: com.carto.renderers.components.CullState): com.carto.datasources.components.VectorData;
				
								
								public getDataExtent(): com.carto.core.MapBounds;
				
				public constructor(projection: com.carto.projections.Projection);
				
				public notifyElementsChanged(): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace datasources {
			export namespace components {
				export class TileData extends java.lang.Object {
					public static class: java.lang.Class<com.carto.datasources.components.TileData>;
					
					public equals(obj: any): boolean;
					
					public isOverZoom(): boolean;
					public setMaxAge(maxAge: number): void;
					
					public getData(): com.carto.core.BinaryData;
					public constructor(data: com.carto.core.BinaryData);
					public isReplaceWithParent(): boolean;
										public getMaxAge(): number;
					public setIsOverZoom(flag: boolean): void;
					public setReplaceWithParent(flag: boolean): void;
					
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
				export class VectorData extends java.lang.Object {
					public static class: java.lang.Class<com.carto.datasources.components.VectorData>;
					
					public equals(obj: any): boolean;
					
					
					
					public hashCode(): number;
										
					public constructor(elements: com.carto.vectorelements.VectorElementVector);
					public getElements(): com.carto.vectorelements.VectorElementVector;
				}
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class GeocodingAddress extends com.carto.core.Address {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingAddress>;
								
				
				
				
				
				public constructor();
				public constructor(country: string, region: string, county: string, locality: string, neighbourhood: string, street: string, postcode: string, houseNumber: string, name: string, categories: com.carto.core.StringVector);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class GeocodingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingRequest>;
				
				public getProjection(): com.carto.projections.Projection;
				public setLocation(pos: com.carto.core.MapPos): void;
				
				public toString(): string;
				
				public getLocationRadius(): number;
				public setCustomParameter(param: string, value: com.carto.core.Variant): void;
				public getCustomParameter(param: string): com.carto.core.Variant;
								public equals(obj: any): boolean;
				public setLocationRadius(radius: number): void;
				
				public hashCode(): number;
				public getQuery(): string;
				public getLocation(): com.carto.core.MapPos;
				
				public constructor(projection: com.carto.projections.Projection, query: string);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class GeocodingResult extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingResult>;
				
				public constructor(projection: com.carto.projections.Projection, address: com.carto.geocoding.GeocodingAddress, rank: number, featureCollection: com.carto.geometry.FeatureCollection);
				public getProjection(): com.carto.projections.Projection;
				
				public getAddress(): com.carto.geocoding.GeocodingAddress;
				
				public toString(): string;
				
								public equals(obj: any): boolean;
				
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
			export class GeocodingResultVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingResultVector>;
				
				
				public get(i: number): com.carto.geocoding.GeocodingResult;
				public constructor(n: number);
				
				public constructor();
				public size(): number;
				
				
				public capacity(): number;
				public clear(): void;
				public add(x: com.carto.geocoding.GeocodingResult): void;
				public isEmpty(): boolean;
				public reserve(n: number): void;
				public set(i: number, val: com.carto.geocoding.GeocodingResult): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class GeocodingService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingService>;
				
				
				public setLanguage(lang: string): void;
				
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				
				public setMaxResults(maxResults: number): void;
				
				
				
				
				public constructor();
								
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
								
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class MapBoxOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MapBoxOnlineGeocodingService>;
				
				
				public setLanguage(lang: string): void;
				
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				
				public getCustomServiceURL(): string;
				public setMaxResults(maxResults: number): void;
				
				
				
				
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
				
								
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
								public constructor(accessToken: string);
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class MapBoxOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MapBoxOnlineReverseGeocodingService>;
				
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				
				public setLanguage(lang: string): void;
				
				
				public getCustomServiceURL(): string;
				
				
				
				
				
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
				
								
				public getLanguage(): string;
								public constructor(accessToken: string);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class MultiOSMOfflineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MultiOSMOfflineGeocodingService>;
				
				public setLanguage(lang: string): void;
				
				public add(database: string): void;
				
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				
				public setMaxResults(maxResults: number): void;
				
				
				
				
				public constructor();
				
								
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
								public remove(database: string): boolean;
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class MultiOSMOfflineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MultiOSMOfflineReverseGeocodingService>;
				
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				
				public setLanguage(lang: string): void;
				
				public add(database: string): void;
				
				
				
				
				
				
				public constructor();
								
				
				public getLanguage(): string;
								public remove(database: string): boolean;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class OSMOfflineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.OSMOfflineGeocodingService>;
				
				public setLanguage(lang: string): void;
				
				
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				
				
				public setMaxResults(maxResults: number): void;
				
				
				
				
				public constructor();
								public constructor(path: string);
				
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
								
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class OSMOfflineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.OSMOfflineReverseGeocodingService>;
				
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				
				public setLanguage(lang: string): void;
				
				
				
				
				
				
				
				public constructor();
				
								public constructor(path: string);
				
				public getLanguage(): string;
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class PackageManagerGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PackageManagerGeocodingService>;
				
				public setLanguage(lang: string): void;
				
				public constructor(packageManager: com.carto.packagemanager.PackageManager);
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				
				
				public setMaxResults(maxResults: number): void;
				
				
				
				
				public constructor();
								
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				
								
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class PackageManagerReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PackageManagerReverseGeocodingService>;
				
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				
				public setLanguage(lang: string): void;
				
				
				public constructor(packageManager: com.carto.packagemanager.PackageManager);
				
				
				
				
				
				
				public constructor();
								
				public getLanguage(): string;
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class PeliasOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PeliasOnlineGeocodingService>;
				
				public setLanguage(lang: string): void;
				
				
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				
				public getCustomServiceURL(): string;
				
				public setMaxResults(maxResults: number): void;
				
				
				
				
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
								
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
								public constructor(apiKey: string);
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class PeliasOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PeliasOnlineReverseGeocodingService>;
				
				
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				
				public setLanguage(lang: string): void;
				
				
				public getCustomServiceURL(): string;
				
				
				
				
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
								
				
				public getLanguage(): string;
								public constructor(apiKey: string);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class ReverseGeocodingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.ReverseGeocodingRequest>;
				
				public getProjection(): com.carto.projections.Projection;
				public constructor(projection: com.carto.projections.Projection, location: com.carto.core.MapPos);
				
				
				public toString(): string;
				
				public setCustomParameter(param: string, value: com.carto.core.Variant): void;
				public getCustomParameter(param: string): com.carto.core.Variant;
								public equals(obj: any): boolean;
				public setSearchRadius(radius: number): void;
				
				public hashCode(): number;
				public getLocation(): com.carto.core.MapPos;
				public getSearchRadius(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class ReverseGeocodingService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.ReverseGeocodingService>;
				
				
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				
				public setLanguage(lang: string): void;
				
				
				
				
				
				
				public constructor();
								
				public getLanguage(): string;
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class TomTomOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.TomTomOnlineGeocodingService>;
				
				public setLanguage(lang: string): void;
				
				
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				
				public getCustomServiceURL(): string;
				
				public setMaxResults(maxResults: number): void;
				
				
				
				
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
								
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
								public constructor(apiKey: string);
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class TomTomOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.TomTomOnlineReverseGeocodingService>;
				
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				
				public setLanguage(lang: string): void;
				
				
				
				
				public getCustomServiceURL(): string;
				
				
				
				
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
								
				public getLanguage(): string;
								public constructor(apiKey: string);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class DouglasPeuckerGeometrySimplifier extends com.carto.geometry.GeometrySimplifier {
				public static class: java.lang.Class<com.carto.geometry.DouglasPeuckerGeometrySimplifier>;
				
								
				
				
				public constructor(tolerance: number);
				
				
				
				
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class Feature extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.Feature>;
				
				public getProperties(): com.carto.core.Variant;
				
				
				
				
				
				
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				public constructor(geometry: com.carto.geometry.Geometry, properties: com.carto.core.Variant);
				public getGeometry(): com.carto.geometry.Geometry;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class FeatureBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.FeatureBuilder>;
				
				
				
				public setGeometry(geometry: com.carto.geometry.Geometry): void;
				
				
				
				
				public constructor();
				public getPropertyValue(key: string): com.carto.core.Variant;
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				public buildFeature(): com.carto.geometry.Feature;
				public setPropertyValue(key: string, value: com.carto.core.Variant): void;
				public getGeometry(): com.carto.geometry.Geometry;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class FeatureCollection extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.FeatureCollection>;
				
				
								
				
				
				public getFeatureCount(): number;
				public getFeature(index: number): com.carto.geometry.Feature;
				
				
				public constructor(features: com.carto.geometry.FeatureVector);
				
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class FeatureVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.FeatureVector>;
				
				public add(x: com.carto.geometry.Feature): void;
				public set(i: number, val: com.carto.geometry.Feature): void;
				
				public constructor(n: number);
				public get(i: number): com.carto.geometry.Feature;
				
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
	export namespace carto {
		export namespace geometry {
			export class GeoJSONGeometryReader extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeoJSONGeometryReader>;
				
				
				public getTargetProjection(): com.carto.projections.Projection;
				
				
				public setTargetProjection(proj: com.carto.projections.Projection): void;
				public readFeature(geoJSON: string): com.carto.geometry.Feature;
				public readGeometry(geoJSON: string): com.carto.geometry.Geometry;
				public readFeatureCollection(geoJSON: string): com.carto.geometry.FeatureCollection;
				
				public constructor();
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class GeoJSONGeometryWriter extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeoJSONGeometryWriter>;
				
				
				public getZ(): boolean;
				public writeFeature(feature: com.carto.geometry.Feature): string;
				
				
				public setSourceProjection(proj: com.carto.projections.Projection): void;
				public writeGeometry(geometry: com.carto.geometry.Geometry): string;
				public writeFeatureCollection(featureCollection: com.carto.geometry.FeatureCollection): string;
				public setZ(z: boolean): void;
				public getSourceProjection(): com.carto.projections.Projection;
				
				public constructor();
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class Geometry extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.Geometry>;
				
								public equals(obj: any): boolean;
				
				
				
				public hashCode(): number;
				
				public getCenterPos(): com.carto.core.MapPos;
				public getBounds(): com.carto.core.MapBounds;
				
				
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class GeometrySimplifier extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeometrySimplifier>;
				
								
				public equals(obj: any): boolean;
				
				public hashCode(): number;
				
				
				
				
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class GeometryVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeometryVector>;
				
				public add(x: com.carto.geometry.Geometry): void;
				
				public constructor(n: number);
				
				public constructor();
				public size(): number;
								public set(i: number, val: com.carto.geometry.Geometry): void;
				
				public capacity(): number;
				public clear(): void;
				public get(i: number): com.carto.geometry.Geometry;
				
				public isEmpty(): boolean;
				public reserve(n: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class LineGeometry extends com.carto.geometry.Geometry {
				public static class: java.lang.Class<com.carto.geometry.LineGeometry>;
				
				
				public getCenterPos(): com.carto.core.MapPos;
				
				
				public constructor(poses: com.carto.core.MapPosVector);
				
								
				
				
				
				public getPoses(): com.carto.core.MapPosVector;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class LineGeometryVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.LineGeometryVector>;
				
				
				public set(i: number, val: com.carto.geometry.LineGeometry): void;
				
				public constructor(n: number);
				
				public add(x: com.carto.geometry.LineGeometry): void;
				public constructor();
				public size(): number;
								
				public capacity(): number;
				public clear(): void;
				public get(i: number): com.carto.geometry.LineGeometry;
				public isEmpty(): boolean;
				public reserve(n: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class MultiGeometry extends com.carto.geometry.Geometry {
				public static class: java.lang.Class<com.carto.geometry.MultiGeometry>;
				
				public getGeometry(index: number): com.carto.geometry.Geometry;
				
				public getCenterPos(): com.carto.core.MapPos;
				
				
				
				
								
				
				public getGeometryCount(): number;
				public constructor(geometries: com.carto.geometry.GeometryVector);
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class MultiLineGeometry extends com.carto.geometry.MultiGeometry {
				public static class: java.lang.Class<com.carto.geometry.MultiLineGeometry>;
				
				public getGeometry(index: number): com.carto.geometry.Geometry;
				
				public getGeometry(index: number): com.carto.geometry.LineGeometry;
				
				
				public constructor(geometries: com.carto.geometry.LineGeometryVector);
				
				
				
								
				
				
				public constructor(geometries: com.carto.geometry.GeometryVector);
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class MultiPointGeometry extends com.carto.geometry.MultiGeometry {
				public static class: java.lang.Class<com.carto.geometry.MultiPointGeometry>;
				
				
				public getGeometry(index: number): com.carto.geometry.Geometry;
				
				public constructor(geometries: com.carto.geometry.PointGeometryVector);
				
				
				
				
								public getGeometry(index: number): com.carto.geometry.PointGeometry;
				
				
				
				public constructor(geometries: com.carto.geometry.GeometryVector);
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class MultiPolygonGeometry extends com.carto.geometry.MultiGeometry {
				public static class: java.lang.Class<com.carto.geometry.MultiPolygonGeometry>;
				public constructor(geometries: com.carto.geometry.PolygonGeometryVector);
				
				
				public getGeometry(index: number): com.carto.geometry.Geometry;
				
				public getGeometry(index: number): com.carto.geometry.PolygonGeometry;
				
				
				
				
				
								
				
				public constructor(geometries: com.carto.geometry.GeometryVector);
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class PointGeometry extends com.carto.geometry.Geometry {
				public static class: java.lang.Class<com.carto.geometry.PointGeometry>;
				public constructor(pos: com.carto.core.MapPos);
				
				
				public getCenterPos(): com.carto.core.MapPos;
				public getPos(): com.carto.core.MapPos;
				
				
				
								
				
				
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class PointGeometryVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.PointGeometryVector>;
				
				public set(i: number, val: com.carto.geometry.PointGeometry): void;
				
				public constructor(n: number);
				
				public constructor();
				public size(): number;
								public get(i: number): com.carto.geometry.PointGeometry;
				
				
				public capacity(): number;
				public add(x: com.carto.geometry.PointGeometry): void;
				public clear(): void;
				public isEmpty(): boolean;
				public reserve(n: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class PolygonGeometry extends com.carto.geometry.Geometry {
				public static class: java.lang.Class<com.carto.geometry.PolygonGeometry>;
				public getHoles(): com.carto.core.MapPosVectorVector;
				
				
				
				public getCenterPos(): com.carto.core.MapPos;
				
				
				public constructor(poses: com.carto.core.MapPosVector);
				
				
								public constructor(poses: com.carto.core.MapPosVector, holes: com.carto.core.MapPosVectorVector);
				
				
				public constructor(rings: com.carto.core.MapPosVectorVector);
				public getRings(): com.carto.core.MapPosVectorVector;
				public getPoses(): com.carto.core.MapPosVector;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class PolygonGeometryVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.PolygonGeometryVector>;
				
				
				public constructor(n: number);
				
				public constructor();
				public size(): number;
				public get(i: number): com.carto.geometry.PolygonGeometry;
								public set(i: number, val: com.carto.geometry.PolygonGeometry): void;
				
				public capacity(): number;
				public clear(): void;
				
				public isEmpty(): boolean;
				public reserve(n: number): void;
				public add(x: com.carto.geometry.PolygonGeometry): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class VectorTileFeature extends com.carto.geometry.Feature {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeature>;
				public setDistance(value: number): void;
				
				public getId(): number;
				
				public getLayerName(): string;
				
				
				
				
								
				public equals(obj: any): boolean;
				
				public hashCode(): number;
				public getMapTile(): com.carto.core.MapTile;
				public constructor(id: number, mapTile: com.carto.core.MapTile, layerName: string, geometry: com.carto.geometry.Geometry, properties: com.carto.core.Variant);
				public getDistance(): number;
				public constructor(geometry: com.carto.geometry.Geometry, properties: com.carto.core.Variant);
				
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class VectorTileFeatureBuilder extends com.carto.geometry.FeatureBuilder {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureBuilder>;
				public setMapTile(mapTile: com.carto.core.MapTile): void;
				
				
				
				public getId(): number;
				
				public setLayerName(layerName: string): void;
				public buildVectorTileFeature(): com.carto.geometry.VectorTileFeature;
				public getLayerName(): string;
				
				
				
				public constructor();
				public setId(id: number): void;
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				public getMapTile(): com.carto.core.MapTile;
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class VectorTileFeatureCollection extends com.carto.geometry.FeatureCollection {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureCollection>;
				
				public getFeature(index: number): com.carto.geometry.VectorTileFeature;
				public constructor(features: com.carto.geometry.VectorTileFeatureVector);
				
				
				
				
				public constructor(features: com.carto.geometry.FeatureVector);
				
				
								
				public getFeature(index: number): com.carto.geometry.Feature;
				
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class VectorTileFeatureVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureVector>;
				
				public get(i: number): com.carto.geometry.VectorTileFeature;
				
				public constructor(n: number);
				
				public constructor();
				public size(): number;
				public add(x: com.carto.geometry.VectorTileFeature): void;
								
				public capacity(): number;
				public clear(): void;
				public set(i: number, val: com.carto.geometry.VectorTileFeature): void;
				public isEmpty(): boolean;
				public reserve(n: number): void;
				
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class WKBGeometryReader extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKBGeometryReader>;
				
				public readGeometry(wkbData: com.carto.core.BinaryData): com.carto.geometry.Geometry;
				
				
				
				
				public constructor();
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class WKBGeometryWriter extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKBGeometryWriter>;
				
				public writeGeometry(geometry: com.carto.geometry.Geometry): com.carto.core.BinaryData;
				
				public setBigEndian(bigEndian: boolean): void;
				public getZ(): boolean;
				
				
				public getBigEndian(): boolean;
				public setZ(z: boolean): void;
				
				public constructor();
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class WKTGeometryReader extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKTGeometryReader>;
				
				public readGeometry(wkt: string): com.carto.geometry.Geometry;
				
				
				
				
				public constructor();
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class WKTGeometryWriter extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKTGeometryWriter>;
				
				
				
				public getZ(): boolean;
				
				public writeGeometry(geometry: com.carto.geometry.Geometry): string;
				public setZ(z: boolean): void;
				
				public constructor();
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace graphics {
			export class Bitmap extends java.lang.Object {
				public static class: java.lang.Class<com.carto.graphics.Bitmap>;
				
				public getSubBitmap(xOffset: number, yOffset: number, width: number, height: number): com.carto.graphics.Bitmap;
				public getHeight(): number;
				public getPixelData(): com.carto.core.BinaryData;
				
				
				public static createFromCompressed(compressedData: com.carto.core.BinaryData): com.carto.graphics.Bitmap;
				
				public getResizedBitmap(width: number, height: number): com.carto.graphics.Bitmap;
				public getPaddedBitmap(xPadding: number, yPadding: number): com.carto.graphics.Bitmap;
								public getWidth(): number;
				public equals(obj: any): boolean;
				public getRGBABitmap(): com.carto.graphics.Bitmap;
				public getColorFormat(): com.carto.graphics.ColorFormat;
				
				public hashCode(): number;
				public compressToInternal(): com.carto.core.BinaryData;
				public getBytesPerPixel(): number;
				public compressToPNG(): com.carto.core.BinaryData;
				public constructor(pixelData: com.carto.core.BinaryData, width: number, height: number, colorFormat: com.carto.graphics.ColorFormat, bytesPerRow: number);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace graphics {
			export class Color extends java.lang.Object {
				public static class: java.lang.Class<com.carto.graphics.Color>;
				
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
	export namespace carto {
		export namespace graphics {
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
				public static swigToEnum(swigEnum: number): com.carto.graphics.ColorFormat;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.carto.graphics.ColorFormat;
			}
			export namespace ColorFormat {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.graphics.ColorFormat.SwigNext>;
				}
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace graphics {
			export class ViewState extends java.lang.Object {
				public static class: java.lang.Class<com.carto.graphics.ViewState>;
				
				public getHeight(): number;
				public getZoom(): number;
				
				
				public getScreenWidth(): number;
				
				public getAspectRatio(): number;
				public getFar(): number;
				public isCameraChanged(): boolean;
								public getWidth(): number;
				public getFOVY(): number;
				public equals(obj: any): boolean;
				public getNear(): number;
				public getUnitToDPCoef(): number;
				public getScreenHeight(): number;
				public getUnitToPXCoef(): number;
				
				public hashCode(): number;
				public getRotation(): number;
				public getDPI(): number;
				public getTilt(): number;
				public getZoom0Distance(): number;
				public getDPToPX(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class ClusterBuilderMode {
				public static class: java.lang.Class<com.carto.layers.ClusterBuilderMode>;
				public static CLUSTER_BUILDER_MODE_ELEMENTS: com.carto.layers.ClusterBuilderMode;
				public static CLUSTER_BUILDER_MODE_ELEMENT_COUNT: com.carto.layers.ClusterBuilderMode;
				public static values(): androidNative.Array<com.carto.layers.ClusterBuilderMode>;
				public swigValue(): number;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static swigToEnum(swigEnum: number): com.carto.layers.ClusterBuilderMode;
				public static valueOf(name: string): com.carto.layers.ClusterBuilderMode;
			}
			export namespace ClusterBuilderMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.ClusterBuilderMode.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class ClusterElementBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.ClusterElementBuilder>;
				
				
				
				
				
				
				
				
				public constructor();
								
				
								public getBuilderMode(): com.carto.layers.ClusterBuilderMode;
				public buildClusterElement(mapPos: com.carto.core.MapPos, elementCount: number): com.carto.vectorelements.VectorElement;
				public buildClusterElement(mapPos: com.carto.core.MapPos, elements: com.carto.vectorelements.VectorElementVector): com.carto.vectorelements.VectorElement;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class ClusteredVectorLayer extends com.carto.layers.VectorLayer {
				public static class: java.lang.Class<com.carto.layers.ClusteredVectorLayer>;
				
				
				
				public constructor(dataSource: com.carto.datasources.VectorDataSource);
				public setMinimumClusterDistance(px: number): void;
				
				
				
				public constructor(dataSource: com.carto.datasources.LocalVectorDataSource, clusterElementBuilder: com.carto.layers.ClusterElementBuilder);
				public getMinimumClusterDistance(): number;
				public getMaximumClusterZoom(): number;
				public isAnimatedClusters(): boolean;
				
				
								public setAnimatedClusters(animated: boolean): void;
				
				public refresh(): void;
				public expandCluster(clusterElement: com.carto.vectorelements.VectorElement, px: number): boolean;
				public getClusterElementBuilder(): com.carto.layers.ClusterElementBuilder;
				public setMaximumClusterZoom(maxZoom: number): void;
				
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class EditableVectorLayer extends com.carto.layers.VectorLayer {
				public static class: java.lang.Class<com.carto.layers.EditableVectorLayer>;
				
				
				
				public constructor(dataSource: com.carto.datasources.VectorDataSource);
				
				
				public setSelectedVectorElement(element: com.carto.vectorelements.VectorElement): void;
				
				
				
				
								public getVectorEditEventListener(): com.carto.layers.VectorEditEventListener;
				
				public getSelectedVectorElement(): com.carto.vectorelements.VectorElement;
				public setVectorEditEventListener(listener: com.carto.layers.VectorEditEventListener): void;
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class HillshadeRasterTileLayer extends com.carto.layers.RasterTileLayer {
				public static class: java.lang.Class<com.carto.layers.HillshadeRasterTileLayer>;
				
				
				public getIlluminationDirection(): com.carto.core.MapVec;
				public getElevation(pos: com.carto.core.MapPos): number;
				
				public constructor(dataSource: com.carto.datasources.TileDataSource, elevationDecoder: com.carto.rastertiles.ElevationDecoder);
				public getElevations(poses: com.carto.core.MapPosVector): com.carto.core.DoubleVector;
				
				public setIlluminationDirection(direction: com.carto.core.MapVec): void;
				public getHighlightColor(): com.carto.graphics.Color;
				public setNormalMapLightingShader(shader: string): void;
				
				
				
				public getShadowColor(): com.carto.graphics.Color;
				public getExagerateHeightScaleEnabled(): boolean;
				public constructor(dataSource: com.carto.datasources.TileDataSource);
				public setShadowColor(color: com.carto.graphics.Color): void;
				public setHeightScale(heightScale: number): void;
				public setIlluminationMapRotationEnabled(enabled: boolean): void;
				
				public setHighlightColor(color: com.carto.graphics.Color): void;
				
				public getContrast(): number;
				public getAccentColor(): com.carto.graphics.Color;
				public setAccentColor(color: com.carto.graphics.Color): void;
				
				public getNormalMapLightingShader(): string;
				public getIlluminationMapRotationEnabled(): boolean;
								public getHeightScale(): number;
				
				public setContrast(contrast: number): void;
				
				
				public setExagerateHeightScaleEnabled(enabled: boolean): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class Layer extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.Layer>;
				
				public isVisible(): boolean;
				public containsMetaDataKey(key: string): boolean;
				
				public simulateClick(clickType: com.carto.ui.ClickType, screenPos: com.carto.core.ScreenPos, viewState: com.carto.graphics.ViewState): void;
				
				
				
				public setCullDelay(delay: number): void;
				
				public hashCode(): number;
				public isUpdateInProgress(): boolean;
				public getMetaData(): com.carto.core.StringVariantMap;
				public setVisible(visible: boolean): void;
				public getUpdatePriority(): number;
				public setMetaDataElement(key: string, element: com.carto.core.Variant): void;
				public setUpdatePriority(priority: number): void;
				
				
				public getMetaDataElement(key: string): com.carto.core.Variant;
				public getVisibleZoomRange(): com.carto.core.MapRange;
				public setVisibleZoomRange(range: com.carto.core.MapRange): void;
								public equals(obj: any): boolean;
				public setOpacity(opacity: number): void;
				public refresh(): void;
				public setMetaData(metaData: com.carto.core.StringVariantMap): void;
				public getOpacity(): number;
				public update(cullState: com.carto.renderers.components.CullState): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class LayerVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.LayerVector>;
				
				public get(i: number): com.carto.layers.Layer;
				
				public constructor(n: number);
				
				public constructor();
				public size(): number;
				public add(x: com.carto.layers.Layer): void;
								
				
				public set(i: number, val: com.carto.layers.Layer): void;
				public capacity(): number;
				public clear(): void;
				public isEmpty(): boolean;
				public reserve(n: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class RasterTileEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.RasterTileEventListener>;
				
				
				
				
				
				
				
				
				
				public onRasterTileClicked(clickInfo: com.carto.ui.RasterTileClickInfo): boolean;
				public constructor();
								
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class RasterTileFilterMode {
				public static class: java.lang.Class<com.carto.layers.RasterTileFilterMode>;
				public static RASTER_TILE_FILTER_MODE_NEAREST: com.carto.layers.RasterTileFilterMode;
				public static RASTER_TILE_FILTER_MODE_BILINEAR: com.carto.layers.RasterTileFilterMode;
				public static RASTER_TILE_FILTER_MODE_BICUBIC: com.carto.layers.RasterTileFilterMode;
				public static values(): androidNative.Array<com.carto.layers.RasterTileFilterMode>;
				public swigValue(): number;
				public static valueOf(name: string): com.carto.layers.RasterTileFilterMode;
				public static swigToEnum(swigEnum: number): com.carto.layers.RasterTileFilterMode;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			}
			export namespace RasterTileFilterMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.RasterTileFilterMode.SwigNext>;
				}
			}
		}
	}
}
declare namespace com {
	export namespace carto {
		export namespace layers {
			export class HillshadeMethod {
				public static class: java.lang.Class<com.carto.layers.HillshadeMethod>;
				public static STANDARD: com.carto.layers.HillshadeMethod;
				public static COMBINED: com.carto.layers.HillshadeMethod;
				public static IGOR: com.carto.layers.HillshadeMethod;
				public static MULTIDIRECTIONAL: com.carto.layers.HillshadeMethod;
				public static BASIC: com.carto.layers.HillshadeMethod;
				public static values(): androidNative.Array<com.carto.layers.HillshadeMethod>;
				public swigValue(): number;
				public static swigToEnum(swigEnum: number): com.carto.layers.HillshadeMethod;
				public static valueOf(name: string): com.carto.layers.HillshadeMethod;
			}
			export namespace HillshadeMethod {
				export class SwigNext {
					public static class: java.lang.Class<com.carto.layers.HillshadeMethod.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class RasterTileLayer extends com.carto.layers.TileLayer {
				public static class: java.lang.Class<com.carto.layers.RasterTileLayer>;
				public getTileFilterMode(): com.carto.layers.RasterTileFilterMode;
				public getTextureCacheCapacity(): number;
				public setTileFilterMode(filterMode: com.carto.layers.RasterTileFilterMode): void;
				
				
				
				
				public getTileBlendingSpeed(): number;
				
				public getRasterTileEventListener(): com.carto.layers.RasterTileEventListener;
				
				
				public setTextureCacheCapacity(capacityInBytes: number): void;
								
				
				
				public setTileBlendingSpeed(speed: number): void;
				
				public constructor(dataSource: com.carto.datasources.TileDataSource);
				public setRasterTileEventListener(eventListener: com.carto.layers.RasterTileEventListener): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class SolidLayer extends com.carto.layers.Layer {
				public static class: java.lang.Class<com.carto.layers.SolidLayer>;
				
				
				
				public constructor(bitmap: com.carto.graphics.Bitmap);
				
				
				public getBitmapScale(): number;
				
				public getBitmap(): com.carto.graphics.Bitmap;
				public setBitmapScale(scale: number): void;
								public setColor(color: com.carto.graphics.Color): void;
				
				public constructor(color: com.carto.graphics.Color);
				public getColor(): com.carto.graphics.Color;
				public isUpdateInProgress(): boolean;
				
				
				public setBitmap(bitmap: com.carto.graphics.Bitmap): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class TileLayer extends com.carto.layers.Layer {
				public static class: java.lang.Class<com.carto.layers.TileLayer>;
				public setTileLoadListener(tileLoadListener: com.carto.layers.TileLoadListener): void;
				public getTileSubstitutionPolicy(): com.carto.layers.TileSubstitutionPolicy;
				
				public setTileSubstitutionPolicy(policy: com.carto.layers.TileSubstitutionPolicy): void;
				
				public getZoomLevelBias(): number;
				
				
				public getDataSource(): com.carto.datasources.TileDataSource;
				public setUTFGridDataSource(dataSource: com.carto.datasources.TileDataSource): void;
				public calculateMapTile(mapPos: com.carto.core.MapPos, zoom: number): com.carto.core.MapTile;
				public getTileLoadListener(): com.carto.layers.TileLoadListener;
				public isSynchronizedRefresh(): boolean;
				
				
				public getUTFGridDataSource(): com.carto.datasources.TileDataSource;
				public calculateMapTileBounds(mapTile: com.carto.core.MapTile): com.carto.core.MapBounds;
				public isUpdateInProgress(): boolean;
				public setUTFGridEventListener(utfGridEventListener: com.carto.layers.UTFGridEventListener): void;
				public setZoomLevelBias(bias: number): void;
				public setSynchronizedRefresh(synchronizedRefresh: boolean): void;
				public clearTileCaches(all: boolean): void;
				public getUTFGridEventListener(): com.carto.layers.UTFGridEventListener;
				public getMaxOverzoomLevel(): number;
				public setMaxOverzoomLevel(overzoomLevel: number): void;
				
				public setPreloading(preloading: boolean): void;
				public getMaxUnderzoomLevel(): number;
				
				public setMaxUnderzoomLevel(underzoomLevel: number): void;
								public calculateMapTileOrigin(mapTile: com.carto.core.MapTile): com.carto.core.MapPos;
				public setFrameNr(frameNr: number): void;
				public getFrameNr(): number;
				public isPreloading(): boolean;
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class TileLoadListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.TileLoadListener>;
				
				
				
				
				
				
				
				
				
				public constructor();
								
				public onVisibleTilesLoaded(): void;
								public onPreloadingTilesLoaded(): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class TileSubstitutionPolicy {
				public static class: java.lang.Class<com.carto.layers.TileSubstitutionPolicy>;
				public static TILE_SUBSTITUTION_POLICY_ALL: com.carto.layers.TileSubstitutionPolicy;
				public static TILE_SUBSTITUTION_POLICY_VISIBLE: com.carto.layers.TileSubstitutionPolicy;
				public static TILE_SUBSTITUTION_POLICY_NONE: com.carto.layers.TileSubstitutionPolicy;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.layers.TileSubstitutionPolicy>;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.carto.layers.TileSubstitutionPolicy;
				public static swigToEnum(swigEnum: number): com.carto.layers.TileSubstitutionPolicy;
			}
			export namespace TileSubstitutionPolicy {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.TileSubstitutionPolicy.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class TorqueTileLayer extends com.carto.layers.VectorTileLayer {
				public static class: java.lang.Class<com.carto.layers.TorqueTileLayer>;
				
				public countVisibleFeatures(frameNr: number): number;
				
				
				
				
				
				
				
				public constructor(dataSource: com.carto.datasources.TileDataSource, decoder: com.carto.vectortiles.TorqueTileDecoder);
				
								public constructor(dataSource: com.carto.datasources.TileDataSource, decoder: com.carto.vectortiles.VectorTileDecoder);
				
				
				
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class UTFGridEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.UTFGridEventListener>;
				
				
				
				
				
				
				
				
				public constructor();
								
				
								public onUTFGridClicked(clickInfo: com.carto.ui.UTFGridClickInfo): boolean;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class VectorEditEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorEditEventListener>;
				
				
				public onElementDelete(element: com.carto.vectorelements.VectorElement): void;
				
				
				public onDragStart(dragInfo: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
				public onElementModify(element: com.carto.vectorelements.VectorElement, geometry: com.carto.geometry.Geometry): void;
				public onElementDeselected(element: com.carto.vectorelements.VectorElement): void;
				
				public onDragMove(dragInfo: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
				
				public onDragEnd(dragInfo: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
				
				public onElementSelect(element: com.carto.vectorelements.VectorElement): boolean;
				
				public constructor();
								
				
				public onSelectDragPointStyle(element: com.carto.vectorelements.VectorElement, dragPointStyle: com.carto.layers.VectorElementDragPointStyle): com.carto.styles.PointStyle;
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class VectorElementDragPointStyle {
				public static class: java.lang.Class<com.carto.layers.VectorElementDragPointStyle>;
				public static VECTOR_ELEMENT_DRAG_POINT_STYLE_NORMAL: com.carto.layers.VectorElementDragPointStyle;
				public static VECTOR_ELEMENT_DRAG_POINT_STYLE_VIRTUAL: com.carto.layers.VectorElementDragPointStyle;
				public static VECTOR_ELEMENT_DRAG_POINT_STYLE_SELECTED: com.carto.layers.VectorElementDragPointStyle;
				public swigValue(): number;
				public static valueOf(name: string): com.carto.layers.VectorElementDragPointStyle;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): androidNative.Array<com.carto.layers.VectorElementDragPointStyle>;
				public static swigToEnum(swigEnum: number): com.carto.layers.VectorElementDragPointStyle;
			}
			export namespace VectorElementDragPointStyle {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.VectorElementDragPointStyle.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class VectorElementDragResult {
				public static class: java.lang.Class<com.carto.layers.VectorElementDragResult>;
				public static VECTOR_ELEMENT_DRAG_RESULT_IGNORE: com.carto.layers.VectorElementDragResult;
				public static VECTOR_ELEMENT_DRAG_RESULT_STOP: com.carto.layers.VectorElementDragResult;
				public static VECTOR_ELEMENT_DRAG_RESULT_MODIFY: com.carto.layers.VectorElementDragResult;
				public static VECTOR_ELEMENT_DRAG_RESULT_DELETE: com.carto.layers.VectorElementDragResult;
				public static valueOf(name: string): com.carto.layers.VectorElementDragResult;
				public swigValue(): number;
				public static swigToEnum(swigEnum: number): com.carto.layers.VectorElementDragResult;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): androidNative.Array<com.carto.layers.VectorElementDragResult>;
			}
			export namespace VectorElementDragResult {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.VectorElementDragResult.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class VectorElementEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorElementEventListener>;
				
				
				
				
				
				public onVectorElementClicked(clickInfo: com.carto.ui.VectorElementClickInfo): boolean;
				
				
				
				public constructor();
								
				
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class VectorLayer extends com.carto.layers.Layer {
				public static class: java.lang.Class<com.carto.layers.VectorLayer>;
				public setZBuffering(enabled: boolean): void;
				
				
				
				public constructor(dataSource: com.carto.datasources.VectorDataSource);
				
				
				
				
				
				public getDataSource(): com.carto.datasources.VectorDataSource;
								
				public isZBuffering(): boolean;
				public getVectorElementEventListener(): com.carto.layers.VectorElementEventListener;
				public isUpdateInProgress(): boolean;
				public setVectorElementEventListener(eventListener: com.carto.layers.VectorElementEventListener): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class VectorTileEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorTileEventListener>;
				
				
				
				
				
				
				
				public constructor();
								
				public onVectorTileClicked(clickInfo: com.carto.ui.VectorTileClickInfo): boolean;
								
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class VectorTileLayer extends com.carto.layers.TileLayer {
				public static class: java.lang.Class<com.carto.layers.VectorTileLayer>;
				public getTileCacheCapacity(): number;
				
				
				public getClickRadius(): number;
				
				public setRendererLayerFilter(filter: string): void;
				
				public getTileDecoder(): com.carto.vectortiles.VectorTileDecoder;
				
				public getRendererLayerFilter(): string;
				
				
				public getBuildingRenderOrder(): com.carto.layers.VectorTileRenderOrder;
				public setBuildingRenderOrder(renderOrder: com.carto.layers.VectorTileRenderOrder): void;
				public setClickHandlerLayerFilter(filter: string): void;
				public setVectorTileEventListener(eventListener: com.carto.layers.VectorTileEventListener): void;
				public setTileCacheCapacity(capacityInBytes: number): void;
				
				public setLabelBlendingSpeed(speed: number): void;
				public getVectorTileEventListener(): com.carto.layers.VectorTileEventListener;
				
				public getClickHandlerLayerFilter(): string;
				public setLabelRenderOrder(renderOrder: com.carto.layers.VectorTileRenderOrder): void;
				public setLayerBlendingSpeed(speed: number): void;
								public constructor(dataSource: com.carto.datasources.TileDataSource, decoder: com.carto.vectortiles.VectorTileDecoder);
				public getLabelRenderOrder(): com.carto.layers.VectorTileRenderOrder;
				public setClickRadius(radius: number): void;
				public getLayerBlendingSpeed(): number;
				
				
				public getLabelBlendingSpeed(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace layers {
			export class VectorTileRenderOrder {
				public static class: java.lang.Class<com.carto.layers.VectorTileRenderOrder>;
				public static VECTOR_TILE_RENDER_ORDER_HIDDEN: com.carto.layers.VectorTileRenderOrder;
				public static VECTOR_TILE_RENDER_ORDER_LAYER: com.carto.layers.VectorTileRenderOrder;
				public static VECTOR_TILE_RENDER_ORDER_LAST: com.carto.layers.VectorTileRenderOrder;
				public swigValue(): number;
				public static valueOf(name: string): com.carto.layers.VectorTileRenderOrder;
				public static values(): androidNative.Array<com.carto.layers.VectorTileRenderOrder>;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static swigToEnum(swigEnum: number): com.carto.layers.VectorTileRenderOrder;
			}
			export namespace VectorTileRenderOrder {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.layers.VectorTileRenderOrder.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageAction {
				public static class: java.lang.Class<com.carto.packagemanager.PackageAction>;
				public static PACKAGE_ACTION_READY: com.carto.packagemanager.PackageAction;
				public static PACKAGE_ACTION_WAITING: com.carto.packagemanager.PackageAction;
				public static PACKAGE_ACTION_DOWNLOADING: com.carto.packagemanager.PackageAction;
				public static PACKAGE_ACTION_COPYING: com.carto.packagemanager.PackageAction;
				public static PACKAGE_ACTION_REMOVING: com.carto.packagemanager.PackageAction;
				public static swigToEnum(swigEnum: number): com.carto.packagemanager.PackageAction;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.packagemanager.PackageAction>;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.carto.packagemanager.PackageAction;
			}
			export namespace PackageAction {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.packagemanager.PackageAction.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageErrorType {
				public static class: java.lang.Class<com.carto.packagemanager.PackageErrorType>;
				public static PACKAGE_ERROR_TYPE_SYSTEM: com.carto.packagemanager.PackageErrorType;
				public static PACKAGE_ERROR_TYPE_CONNECTION: com.carto.packagemanager.PackageErrorType;
				public static PACKAGE_ERROR_TYPE_DOWNLOAD_LIMIT_EXCEEDED: com.carto.packagemanager.PackageErrorType;
				public static PACKAGE_ERROR_TYPE_PACKAGE_TOO_BIG: com.carto.packagemanager.PackageErrorType;
				public static PACKAGE_ERROR_TYPE_NO_OFFLINE_PLAN: com.carto.packagemanager.PackageErrorType;
				public swigValue(): number;
				public static swigToEnum(swigEnum: number): com.carto.packagemanager.PackageErrorType;
				public static values(): androidNative.Array<com.carto.packagemanager.PackageErrorType>;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.carto.packagemanager.PackageErrorType;
			}
			export namespace PackageErrorType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.packagemanager.PackageErrorType.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageInfo>;
				
				public getNames(lang: string): com.carto.core.StringVector;
				public getTileMask(): com.carto.packagemanager.PackageTileMask;
				public getMetaInfo(): com.carto.packagemanager.PackageMetaInfo;
				
				public getName(): string;
				
				public getPackageType(): com.carto.packagemanager.PackageType;
								public constructor(packageId: string, packageType: com.carto.packagemanager.PackageType, version: number, size: java.math.BigInteger, serverURL: string, tileMask: com.carto.packagemanager.PackageTileMask, metaInfo: com.carto.packagemanager.PackageMetaInfo);
				public equals(obj: any): boolean;
				
				public getVersion(): number;
				public hashCode(): number;
				
				public getPackageId(): string;
				public getSize(): java.math.BigInteger;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageInfoVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageInfoVector>;
				
				
				public constructor(n: number);
				
				public constructor();
				public size(): number;
								public get(i: number): com.carto.packagemanager.PackageInfo;
				
				public capacity(): number;
				public clear(): void;
				public set(i: number, val: com.carto.packagemanager.PackageInfo): void;
				
				public isEmpty(): boolean;
				public reserve(n: number): void;
				public add(x: com.carto.packagemanager.PackageInfo): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageManager extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageManager>;
				
				public startPackageDownload(packageId: string): boolean;
				public startPackageRemove(packageId: string): boolean;
				public startPackageListDownload(): boolean;
				
				public isAreaDownloaded(mapBounds: com.carto.core.MapBounds, zoom: number, projection: com.carto.projections.Projection): boolean;
				public setPackagePriority(packageId: string, priority: number): void;
				
				public getLocalPackage(packageId: string): com.carto.packagemanager.PackageInfo;
				
				public start(): boolean;
				public hashCode(): number;
				public getServerPackageListAge(): number;
				
				public stop(wait: boolean): void;
				public constructor(packageListURL: string, dataFolder: string, serverEncKey: string, localEncKey: string);
				public setPackageManagerListener(listener: com.carto.packagemanager.PackageManagerListener): void;
				public getLocalPackages(): com.carto.packagemanager.PackageInfoVector;
				public suggestPackages(mapPos: com.carto.core.MapPos, projection: com.carto.projections.Projection): com.carto.packagemanager.PackageInfoVector;
				
				public cancelPackageTasks(packageId: string): void;
				public getServerPackages(): com.carto.packagemanager.PackageInfoVector;
				public getServerPackage(packageId: string): com.carto.packagemanager.PackageInfo;
				
				
				public getLocalPackageStatus(packageId: string, version: number): com.carto.packagemanager.PackageStatus;
								public equals(obj: any): boolean;
				public getServerPackageListMetaInfo(): com.carto.packagemanager.PackageMetaInfo;
				public startPackageImport(packageId: string, version: number, packageFileName: string): boolean;
				public getPackageManagerListener(): com.carto.packagemanager.PackageManagerListener;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageManagerListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageManagerListener>;
				
				
				public onStyleUpdated(styleName: string): void;
				
				public onPackageListFailed(): void;
				public onPackageFailed(id: string, version: number, errorType: com.carto.packagemanager.PackageErrorType): void;
				public onStyleFailed(styleName: string): void;
				
				
				
				public onPackageListUpdated(): void;
				public onPackageUpdated(id: string, version: number): void;
				
				public constructor();
								public onPackageCancelled(id: string, version: number): void;
				public onPackageStatusChanged(id: string, version: number, status: com.carto.packagemanager.PackageStatus): void;
				
				
				
							}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageMetaInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageMetaInfo>;
				
				public getVariant(): com.carto.core.Variant;
								
				public constructor(var_: com.carto.core.Variant);
				public equals(obj: any): boolean;
				
				public hashCode(): number;
				
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageStatus extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageStatus>;
				
								public equals(obj: any): boolean;
				public getCurrentAction(): com.carto.packagemanager.PackageAction;
				
				public getProgress(): number;
				public hashCode(): number;
				
				
				
				public constructor(currentAction: com.carto.packagemanager.PackageAction, paused: boolean, progress: number);
				public isPaused(): boolean;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageTileMask extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageTileMask>;
				
								public equals(obj: any): boolean;
				
				public getMaxZoomLevel(): number;
				public hashCode(): number;
				
				
				public getTileStatus(tile: com.carto.core.MapTile): com.carto.packagemanager.PackageTileStatus;
				public getBoundingPolygon(projection: com.carto.projections.Projection): com.carto.geometry.MultiPolygonGeometry;
				
				public getStringValue(): string;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageTileStatus {
				public static class: java.lang.Class<com.carto.packagemanager.PackageTileStatus>;
				public static PACKAGE_TILE_STATUS_MISSING: com.carto.packagemanager.PackageTileStatus;
				public static PACKAGE_TILE_STATUS_PARTIAL: com.carto.packagemanager.PackageTileStatus;
				public static PACKAGE_TILE_STATUS_FULL: com.carto.packagemanager.PackageTileStatus;
				public swigValue(): number;
				public static valueOf(name: string): com.carto.packagemanager.PackageTileStatus;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static swigToEnum(swigEnum: number): com.carto.packagemanager.PackageTileStatus;
				public static values(): androidNative.Array<com.carto.packagemanager.PackageTileStatus>;
			}
			export namespace PackageTileStatus {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.packagemanager.PackageTileStatus.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageType {
				public static class: java.lang.Class<com.carto.packagemanager.PackageType>;
				public static PACKAGE_TYPE_MAP: com.carto.packagemanager.PackageType;
				public static PACKAGE_TYPE_ROUTING: com.carto.packagemanager.PackageType;
				public static PACKAGE_TYPE_GEOCODING: com.carto.packagemanager.PackageType;
				public static PACKAGE_TYPE_VALHALLA_ROUTING: com.carto.packagemanager.PackageType;
				public swigValue(): number;
				public static swigToEnum(swigEnum: number): com.carto.packagemanager.PackageType;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.carto.packagemanager.PackageType;
				public static values(): androidNative.Array<com.carto.packagemanager.PackageType>;
			}
			export namespace PackageType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.packagemanager.PackageType.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace projections {
			export class EPSG3857 extends com.carto.projections.Projection {
				public static class: java.lang.Class<com.carto.projections.EPSG3857>;
				
				
				public getName(): string;
				
				
				
				public constructor();
				
								
				
				
				public fromWgs84(wgs84Pos: com.carto.core.MapPos): com.carto.core.MapPos;
				public toWgs84(mapPos: com.carto.core.MapPos): com.carto.core.MapPos;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace projections {
			export class EPSG4326 extends com.carto.projections.Projection {
				public static class: java.lang.Class<com.carto.projections.EPSG4326>;
				
				
				public getName(): string;
				
				
				
				public constructor();
				
								
				
				
				public fromWgs84(wgs84Pos: com.carto.core.MapPos): com.carto.core.MapPos;
				public toWgs84(mapPos: com.carto.core.MapPos): com.carto.core.MapPos;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace projections {
			export class Projection extends java.lang.Object {
				public static class: java.lang.Class<com.carto.projections.Projection>;
				
				public toLatLong(x: number, y: number): com.carto.core.MapPos;
				
				public getBounds(): com.carto.core.MapBounds;
				public getName(): string;
				
				
				public fromLatLong(lat: number, lng: number): com.carto.core.MapPos;
				
				
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				public toWgs84(pos: com.carto.core.MapPos): com.carto.core.MapPos;
				
				public fromWgs84(pos: com.carto.core.MapPos): com.carto.core.MapPos;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace rastertiles {
			export class ElevationDecoder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.rastertiles.ElevationDecoder>;
				
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				
				
				
				
				
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace rastertiles {
			export class MapBoxElevationDataDecoder extends com.carto.rastertiles.ElevationDecoder {
				public static class: java.lang.Class<com.carto.rastertiles.MapBoxElevationDataDecoder>;
				
				
				
				
				
				
				
				
				public constructor();
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				
								
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace rastertiles {
			export class SWIGTYPE_p_std__arrayT_double_4_t extends java.lang.Object {
				public static class: java.lang.Class<com.carto.rastertiles.SWIGTYPE_p_std__arrayT_double_4_t>;
				public constructor(cPtr: number, futureUse: boolean);
				
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace rastertiles {
			export class SWIGTYPE_p_std__arrayT_float_4_t extends java.lang.Object {
				public static class: java.lang.Class<com.carto.rastertiles.SWIGTYPE_p_std__arrayT_float_4_t>;
				public constructor(cPtr: number, futureUse: boolean);
				
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace rastertiles {
			export class TerrariumElevationDataDecoder extends com.carto.rastertiles.ElevationDecoder {
				public static class: java.lang.Class<com.carto.rastertiles.TerrariumElevationDataDecoder>;
				
				
				
				
				
				
				
				
				public constructor();
				
								public equals(obj: any): boolean;
				
				public hashCode(): number;
								
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace renderers {
			export class MapRenderer extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.MapRenderer>;
				
								public setMapRendererListener(listener: com.carto.renderers.MapRendererListener): void;
				public getViewState(): com.carto.graphics.ViewState;
				public equals(obj: any): boolean;
				
				public hashCode(): number;
				
				
				public captureRendering(listener: com.carto.renderers.RendererCaptureListener, waitWhileUpdating: boolean): void;
				public getMapRendererListener(): com.carto.renderers.MapRendererListener;
				public requestRedraw(): void;
				
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace renderers {
			export class MapRendererListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.MapRendererListener>;
				
				
				
				
				
				
				
				public constructor();
								public onBeforeDrawFrame(): void;
				
				public onSurfaceChanged(width: number, height: number): void;
								
				public onAfterDrawFrame(): void;
				
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace renderers {
			export class RedrawRequestListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.RedrawRequestListener>;
				
				
				
				
				
				
				public onRedrawRequested(): void;
				
				
				public constructor();
								
								
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace renderers {
			export class RendererCaptureListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.RendererCaptureListener>;
				
				
				
				public onMapRendered(bitmap: com.carto.graphics.Bitmap): void;
				
				
				
				
				
				
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
					public static class: java.lang.Class<com.carto.renderers.components.CullState>;
					
					public equals(obj: any): boolean;
					
					public getProjectionEnvelope(projection: com.carto.projections.Projection): com.carto.core.MapEnvelope;
					
					
					public constructor(envelope: com.carto.core.MapEnvelope, viewState: com.carto.graphics.ViewState);
					public hashCode(): number;
										
					public getViewState(): com.carto.graphics.ViewState;
				}
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class MultiValhallaOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.MultiValhallaOfflineRoutingService>;
				
				
				public add(database: string): void;
				
				public addLocale(key: string, json: string): void;
				
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				
				
				public getConfigurationParameter(param: string): com.carto.core.Variant;
				
				
				
				public constructor();
								public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setConfigurationParameter(param: string, value: com.carto.core.Variant): void;
				public setProfile(profile: string): void;
				
				
				public getProfile(): string;
								public remove(database: string): boolean;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class OSRMOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.OSRMOfflineRoutingService>;
				
				
				
				
				
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				
				
				
				
				public constructor();
								
				public constructor(path: string);
				public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setProfile(profile: string): void;
				
				public getProfile(): string;
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class PackageManagerRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.PackageManagerRoutingService>;
				
				
				
				public constructor(packageManager: com.carto.packagemanager.PackageManager);
				
				
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				
				
				
				
				public constructor();
								public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setProfile(profile: string): void;
				
				public getProfile(): string;
								
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class PackageManagerValhallaRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.PackageManagerValhallaRoutingService>;
				
				
				public constructor(packageManager: com.carto.packagemanager.PackageManager);
				
				public addLocale(key: string, json: string): void;
				
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				
				
				
				public getConfigurationParameter(param: string): com.carto.core.Variant;
				
				
				
				public constructor();
								public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setConfigurationParameter(param: string, value: com.carto.core.Variant): void;
				public setProfile(profile: string): void;
				
				public getProfile(): string;
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingEdge extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingEdge>;
				
				public constructor(attributes: com.carto.core.StringVariantMap);
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				
				public containsAttribute(name: string): boolean;
				public getAttribute(name: string): com.carto.core.Variant;
				
				public toString(): string;
				
				public constructor();
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingEdgeVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingEdgeVector>;
				
				public get(i: number): com.carto.routing.RouteMatchingEdge;
				
				
				public constructor(n: number);
				
				public constructor();
				public size(): number;
				public add(x: com.carto.routing.RouteMatchingEdge): void;
								
				public capacity(): number;
				public clear(): void;
				public isEmpty(): boolean;
				public set(i: number, val: com.carto.routing.RouteMatchingEdge): void;
				public reserve(n: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingPoint extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingPoint>;
				
				
				
				public getPos(): com.carto.core.MapPos;
				public toString(): string;
				
				public constructor(pos: com.carto.core.MapPos, type: com.carto.routing.RouteMatchingPointType, edgeIndex: number);
				public constructor();
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				public getType(): com.carto.routing.RouteMatchingPointType;
				public getEdgeIndex(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingPointType {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingPointType>;
				public static ROUTE_MATCHING_POINT_UNMATCHED: com.carto.routing.RouteMatchingPointType;
				public static ROUTE_MATCHING_POINT_INTERPOLATED: com.carto.routing.RouteMatchingPointType;
				public static ROUTE_MATCHING_POINT_MATCHED: com.carto.routing.RouteMatchingPointType;
				public swigValue(): number;
				public static swigToEnum(swigEnum: number): com.carto.routing.RouteMatchingPointType;
				public static valueOf(name: string): com.carto.routing.RouteMatchingPointType;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): androidNative.Array<com.carto.routing.RouteMatchingPointType>;
			}
			export namespace RouteMatchingPointType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.routing.RouteMatchingPointType.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingPointVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingPointVector>;
				
				
				public constructor(n: number);
				public set(i: number, val: com.carto.routing.RouteMatchingPoint): void;
				
				public constructor();
				public size(): number;
								public add(x: com.carto.routing.RouteMatchingPoint): void;
				
				public capacity(): number;
				public clear(): void;
				public get(i: number): com.carto.routing.RouteMatchingPoint;
				public isEmpty(): boolean;
				
				public reserve(n: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingRequest>;
				
				public constructor(projection: com.carto.projections.Projection, points: com.carto.core.MapPosVector, accuracy: number);
				public setPointParameter(index: number, param: string, value: com.carto.core.Variant): void;
				public getProjection(): com.carto.projections.Projection;
				
				public toString(): string;
				
				public getPointParameter(index: number, param: string): com.carto.core.Variant;
				public setCustomParameter(param: string, value: com.carto.core.Variant): void;
				public getCustomParameter(param: string): com.carto.core.Variant;
								public equals(obj: any): boolean;
				public getPoints(): com.carto.core.MapPosVector;
				
				
				public hashCode(): number;
				public getAccuracy(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingResult extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingResult>;
				
				public getRawResult(): string;
				public getProjection(): com.carto.projections.Projection;
				
				public toString(): string;
				
				public getMatchingPoints(): com.carto.routing.RouteMatchingPointVector;
								public constructor(projection: com.carto.projections.Projection, matchingPoints: com.carto.routing.RouteMatchingPointVector, matchingEdges: com.carto.routing.RouteMatchingEdgeVector, rawResult: string);
				public equals(obj: any): boolean;
				public getPoints(): com.carto.core.MapPosVector;
				
				public hashCode(): number;
				public getMatchingEdges(): com.carto.routing.RouteMatchingEdgeVector;
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
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
				public static valueOf(name: string): com.carto.routing.RoutingAction;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static swigToEnum(swigEnum: number): com.carto.routing.RoutingAction;
				public static values(): androidNative.Array<com.carto.routing.RoutingAction>;
			}
			export namespace RoutingAction {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.routing.RoutingAction.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RoutingInstruction extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingInstruction>;
				
				public getPointIndex(): number;
				
				public constructor(action: com.carto.routing.RoutingAction, pointIndex: number, streetName: string, instruction: string, turnAngle: number, azimuth: number, distance: number, time: number, geometryTag: com.carto.core.Variant);
				public toString(): string;
				
				public getTime(): number;
				
				public constructor();
				public getTurnAngle(): number;
								public equals(obj: any): boolean;
				public getStreetName(): string;
				
				public hashCode(): number;
				public getDistance(): number;
				public getAzimuth(): number;
				public getGeometryTag(): com.carto.core.Variant;
				public getInstruction(): string;
				public getAction(): com.carto.routing.RoutingAction;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RoutingInstructionVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingInstructionVector>;
				
				
				
				public constructor(n: number);
				
				public constructor();
				public size(): number;
				public set(i: number, val: com.carto.routing.RoutingInstruction): void;
								
				public add(x: com.carto.routing.RoutingInstruction): void;
				public capacity(): number;
				public clear(): void;
				public isEmpty(): boolean;
				public reserve(n: number): void;
				public get(i: number): com.carto.routing.RoutingInstruction;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RoutingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingRequest>;
				
				
				public setPointParameter(index: number, param: string, value: com.carto.core.Variant): void;
				public getProjection(): com.carto.projections.Projection;
				
				public toString(): string;
				
				public getPointParameter(index: number, param: string): com.carto.core.Variant;
				public setCustomParameter(param: string, value: com.carto.core.Variant): void;
				public getCustomParameter(param: string): com.carto.core.Variant;
								public equals(obj: any): boolean;
				public getPoints(): com.carto.core.MapPosVector;
				
				public hashCode(): number;
				public constructor(projection: com.carto.projections.Projection, points: com.carto.core.MapPosVector);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RoutingResult extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingResult>;
				
				public getRawResult(): string;
				public getProjection(): com.carto.projections.Projection;
				public getInstructions(): com.carto.routing.RoutingInstructionVector;
				public getTotalTime(): number;
				
				public getTotalDistance(): number;
				public constructor(projection: com.carto.projections.Projection, points: com.carto.core.MapPosVector, instructions: com.carto.routing.RoutingInstructionVector, rawResult: string);
				public toString(): string;
				
				
								public equals(obj: any): boolean;
				public getPoints(): com.carto.core.MapPosVector;
				
				public hashCode(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RoutingService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingService>;
				
				
				
				
				
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				
				
				
				
				public constructor();
								public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setProfile(profile: string): void;
				
				public getProfile(): string;
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class SGREOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.SGREOfflineRoutingService>;
				
				
				public setRoutingParameter(param: string, value: number): void;
				
				
				
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				
				
				
				
				public constructor();
								public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setProfile(profile: string): void;
				
				
				public constructor(projection: com.carto.projections.Projection, featureCollection: com.carto.geometry.FeatureCollection, config: com.carto.core.Variant);
				public getProfile(): string;
				public getRoutingParameter(param: string): number;
								public constructor(geoJSON: com.carto.core.Variant, config: com.carto.core.Variant);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class ValhallaOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.ValhallaOfflineRoutingService>;
				
				
				
				public addLocale(key: string, json: string): void;
				
				
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				
				
				public getConfigurationParameter(param: string): com.carto.core.Variant;
				
				
				
				public constructor();
								public constructor(path: string);
				public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setConfigurationParameter(param: string, value: com.carto.core.Variant): void;
				public setProfile(profile: string): void;
				
				public getProfile(): string;
							}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace routing {
			export class ValhallaOnlineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.ValhallaOnlineRoutingService>;
				
				
				
				
				public getCustomServiceURL(): string;
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				
				
				
				
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
								
				
				public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setProfile(profile: string): void;
				
				public getProfile(): string;
								public constructor(apiKey: string);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace search {
			export class FeatureCollectionSearchService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.FeatureCollectionSearchService>;
				
				
				public constructor(projection: com.carto.projections.Projection, featureCollection: com.carto.geometry.FeatureCollection);
				
				public getProjection(): com.carto.projections.Projection;
				
				
				public setMaxResults(maxResults: number): void;
				
				
				
								
				public getMaxResults(): number;
				public findFeatures(request: com.carto.search.SearchRequest): com.carto.geometry.FeatureCollection;
				public getFeatureCollection(): com.carto.geometry.FeatureCollection;
								
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace search {
			export class SearchRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.SearchRequest>;
				
				public getProjection(): com.carto.projections.Projection;
				public setGeometry(geometry: com.carto.geometry.Geometry): void;
				public getFilterExpression(): string;
				public getRegexFilter(): string;
				
				public setProjection(projection: com.carto.projections.Projection): void;
				public toString(): string;
				
				public constructor();
								public setRegexFilter(regex: string): void;
				public equals(obj: any): boolean;
				public setSearchRadius(radius: number): void;
				
				public hashCode(): number;
				public setFilterExpression(expr: string): void;
				public getSearchRadius(): number;
				public getGeometry(): com.carto.geometry.Geometry;
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace search {
			export class VectorElementSearchService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.VectorElementSearchService>;
				
				
				
				
				public findElements(request: com.carto.search.SearchRequest): com.carto.vectorelements.VectorElementVector;
				public constructor(dataSource: com.carto.datasources.VectorDataSource);
				
				public setMaxResults(maxResults: number): void;
				
				
				
				public getDataSource(): com.carto.datasources.VectorDataSource;
								
				public getMaxResults(): number;
								
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace search {
			export class VectorTileSearchService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.VectorTileSearchService>;
				
				
				public constructor(dataSource: com.carto.datasources.TileDataSource, tileDecoder: com.carto.vectortiles.VectorTileDecoder);
				public setSortByDistance(sortByDistance: boolean): void;
				
				public getTileDecoder(): com.carto.vectortiles.VectorTileDecoder;
				public setMaxResults(maxResults: number): void;
				public getSortByDistance(): boolean;
				
				public getDataSource(): com.carto.datasources.TileDataSource;
				public setLayers(layers: com.carto.core.StringVector): void;
				
				public findFeatures(request: com.carto.search.SearchRequest): com.carto.geometry.VectorTileFeatureCollection;
				public getPreventDuplicates(): boolean;
				
				
				public setMaxZoom(maxZoom: number): void;
				
				public getMaxZoom(): number;
				
				public setPreventDuplicates(preventDuplicates: boolean): void;
								public getMaxResults(): number;
				
								public getLayers(): com.carto.core.StringVector;
				public setMinZoom(minZoom: number): void;
				public getMinZoom(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace styles {
			export class AnimationStyle extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.AnimationStyle>;
				
				public getPhaseOutDuration(): number;
				
				public getFadeAnimationType(): com.carto.styles.AnimationType;
				
				
				
								
				public equals(obj: any): boolean;
				public getRelativeSpeed(): number;
				public getPhaseInDuration(): number;
				
				
				public hashCode(): number;
				public getSizeAnimationType(): com.carto.styles.AnimationType;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class AnimationStyleBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.AnimationStyleBuilder>;
				
				public getPhaseOutDuration(): number;
				
				public getFadeAnimationType(): com.carto.styles.AnimationType;
				public setFadeAnimationType(animType: com.carto.styles.AnimationType): void;
				public buildStyle(): com.carto.styles.AnimationStyle;
				
				
				
				public constructor();
				public setPhaseOutDuration(duration: number): void;
								public setSizeAnimationType(animType: com.carto.styles.AnimationType): void;
				
				public getRelativeSpeed(): number;
				public getPhaseInDuration(): number;
				
				public setRelativeSpeed(relativeSpeed: number): void;
				
				public setPhaseInDuration(duration: number): void;
				public getSizeAnimationType(): com.carto.styles.AnimationType;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class AnimationType {
				public static class: java.lang.Class<com.carto.styles.AnimationType>;
				public static ANIMATION_TYPE_NONE: com.carto.styles.AnimationType;
				public static ANIMATION_TYPE_STEP: com.carto.styles.AnimationType;
				public static ANIMATION_TYPE_LINEAR: com.carto.styles.AnimationType;
				public static ANIMATION_TYPE_SMOOTHSTEP: com.carto.styles.AnimationType;
				public static ANIMATION_TYPE_SPRING: com.carto.styles.AnimationType;
				public swigValue(): number;
				public static valueOf(name: string): com.carto.styles.AnimationType;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): androidNative.Array<com.carto.styles.AnimationType>;
				public static swigToEnum(swigEnum: number): com.carto.styles.AnimationType;
			}
			export namespace AnimationType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.styles.AnimationType.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BalloonPopupButtonStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupButtonStyle>;
				public getTextColor(): com.carto.graphics.Color;
				public getTextMargins(): com.carto.styles.BalloonPopupMargins;
				public getStrokeWidth(): number;
				
				public getBackgroundColor(): com.carto.graphics.Color;
				
				
				
				
				
								public getTextFontName(): string;
				public getCornerRadius(): number;
				
				public getTextFontSize(): number;
				
				public getButtonWidth(): number;
				
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BalloonPopupButtonStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupButtonStyleBuilder>;
				public getTextColor(): com.carto.graphics.Color;
				public getStrokeWidth(): number;
				
				
				
				
				
				public constructor();
				public setCornerRadius(cornerRadius: number): void;
				public getTextFontName(): string;
				public setStrokeWidth(strokeWidth: number): void;
				public setTextColor(textColor: com.carto.graphics.Color): void;
				
				
				public getTextMargins(): com.carto.styles.BalloonPopupMargins;
				public setStrokeColor(strokeColor: com.carto.graphics.Color): void;
				public setTextMargins(textMargins: com.carto.styles.BalloonPopupMargins): void;
				
				
								public setTextFontSize(textFontSize: number): void;
				public getCornerRadius(): number;
				public buildStyle(): com.carto.styles.BalloonPopupButtonStyle;
				public getTextFontSize(): number;
				public setButtonWidth(buttonWidth: number): void;
				public getButtonWidth(): number;
				public setTextFontName(textFontName: string): void;
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BalloonPopupMargins extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupMargins>;
				
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
	export namespace carto {
		export namespace styles {
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
				public getDescriptionColor(): com.carto.graphics.Color;
				public getTitleMargins(): com.carto.styles.BalloonPopupMargins;
				public getTitleField(): string;
				
				
				public getLeftMargins(): com.carto.styles.BalloonPopupMargins;
				
				public getTriangleWidth(): number;
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

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BalloonPopupStyleBuilder extends com.carto.styles.PopupStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupStyleBuilder>;
				public setDescriptionFontName(descFontName: string): void;
				public getStrokeWidth(): number;
				
				public setTitleColor(titleColor: com.carto.graphics.Color): void;
				public getRightImage(): com.carto.graphics.Bitmap;
				public setButtonMargins(buttonMargins: com.carto.styles.BalloonPopupMargins): void;
				public constructor();
				public setTitleField(field: string): void;
				public setStrokeWidth(strokeWidth: number): void;
				public setTriangleWidth(triangleWidth: number): void;
				public buildStyle(): com.carto.styles.BalloonPopupStyle;
				
				public setRightImage(rightImage: com.carto.graphics.Bitmap): void;
				public setTitleFontName(titleFontName: string): void;
				public isDescriptionWrap(): boolean;
				public getDescriptionMargins(): com.carto.styles.BalloonPopupMargins;
				public setRightColor(rightColor: com.carto.graphics.Color): void;
				public getDescriptionFontSize(): number;
				public setStrokeColor(strokeColor: com.carto.graphics.Color): void;
				public getTitleMargins(): com.carto.styles.BalloonPopupMargins;
				public setLeftColor(leftColor: com.carto.graphics.Color): void;
				public getTitleField(): string;
				public setTitleMargins(titleMargins: com.carto.styles.BalloonPopupMargins): void;
				public buildStyle(): com.carto.styles.PopupStyle;
				public setDescriptionField(field: string): void;
				public getCornerRadius(): number;
				public getRightColor(): com.carto.graphics.Color;
				public setDescriptionMargins(descMargins: com.carto.styles.BalloonPopupMargins): void;
				public getDescriptionField(): string;
				
				public getTitleColor(): com.carto.graphics.Color;
				public getTitleFontName(): string;
				public setTitleFontSize(titleFontSize: number): void;
				public setDescriptionWrap(descWrap: boolean): void;
				
				public getRightMargins(): com.carto.styles.BalloonPopupMargins;
				
				
				
				
				public setCornerRadius(cornerRadius: number): void;
				public isTitleWrap(): boolean;
				public getTriangleHeight(): number;
				
				public getTitleFontSize(): number;
				public getButtonMargins(): com.carto.styles.BalloonPopupMargins;
				public getLeftImage(): com.carto.graphics.Bitmap;
				public setDescriptionFontSize(descFontSize: number): void;
				public getLeftColor(): com.carto.graphics.Color;
				public setLeftImage(leftImage: com.carto.graphics.Bitmap): void;
				public getDescriptionColor(): com.carto.graphics.Color;
				
				public getLeftMargins(): com.carto.styles.BalloonPopupMargins;
				
				public setDescriptionColor(descColor: com.carto.graphics.Color): void;
				public getTriangleWidth(): number;
								public setTriangleHeight(triangleHeight: number): void;
				
				public setLeftMargins(leftMargins: com.carto.styles.BalloonPopupMargins): void;
				public setRightMargins(rightMargins: com.carto.styles.BalloonPopupMargins): void;
				public setTitleWrap(titleWrap: boolean): void;
				
				public getDescriptionFontName(): string;
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BillboardOrientation {
				public static class: java.lang.Class<com.carto.styles.BillboardOrientation>;
				public static BILLBOARD_ORIENTATION_FACE_CAMERA: com.carto.styles.BillboardOrientation;
				public static BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND: com.carto.styles.BillboardOrientation;
				public static BILLBOARD_ORIENTATION_GROUND: com.carto.styles.BillboardOrientation;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.styles.BillboardOrientation>;
				public static swigToEnum(swigEnum: number): com.carto.styles.BillboardOrientation;
				public static valueOf(name: string): com.carto.styles.BillboardOrientation;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			}
			export namespace BillboardOrientation {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.styles.BillboardOrientation.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BillboardScaling {
				public static class: java.lang.Class<com.carto.styles.BillboardScaling>;
				public static BILLBOARD_SCALING_WORLD_SIZE: com.carto.styles.BillboardScaling;
				public static BILLBOARD_SCALING_SCREEN_SIZE: com.carto.styles.BillboardScaling;
				public static BILLBOARD_SCALING_CONST_SCREEN_SIZE: com.carto.styles.BillboardScaling;
				public static values(): androidNative.Array<com.carto.styles.BillboardScaling>;
				public static valueOf(name: string): com.carto.styles.BillboardScaling;
				public swigValue(): number;
				public static swigToEnum(swigEnum: number): com.carto.styles.BillboardScaling;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			}
			export namespace BillboardScaling {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.styles.BillboardScaling.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BillboardStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.BillboardStyle>;
				public isHideIfOverlapped(): boolean;
				public getPlacementPriority(): number;
				
				public getAttachAnchorPointY(): number;
				public isScaleWithDPI(): boolean;
				public getVerticalOffset(): number;
				public getAnimationStyle(): com.carto.styles.AnimationStyle;
				
				
				
				
				
				
				
								
				public isCausesOverlap(): boolean;
				public getAttachAnchorPointX(): number;
				public getHorizontalOffset(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BillboardStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.BillboardStyleBuilder>;
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
				public getAnimationStyle(): com.carto.styles.AnimationStyle;
				public setAttachAnchorPoint(attachAnchorPointX: number, attachAnchorPointY: number): void;
				
				
								public setHorizontalOffset(horizontalOffset: number): void;
				public setAnimationStyle(animStyle: com.carto.styles.AnimationStyle): void;
				
				public setVerticalOffset(verticalOffset: number): void;
				
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class CartoCSSStyleSet extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.CartoCSSStyleSet>;
				
				public getCartoCSS(): string;
				public constructor(cartoCSS: string, assetPackage: com.carto.utils.AssetPackage);
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				
				public getAssetPackage(): com.carto.utils.AssetPackage;
				
				public constructor(cartoCSS: string);
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace styles {
			export class CompiledStyleSet extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.CompiledStyleSet>;
				
								public equals(obj: any): boolean;
				
				public getStyleAssetName(): string;
				public hashCode(): number;
				
				public constructor(assetPackage: com.carto.utils.AssetPackage);
				public getAssetPackage(): com.carto.utils.AssetPackage;
				
				
				public constructor(assetPackage: com.carto.utils.AssetPackage, styleName: string);
				public getStyleName(): string;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace styles {
			export class GeometryCollectionStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.GeometryCollectionStyle>;
				
				public getPointStyle(): com.carto.styles.PointStyle;
				
				
				public getPolygonStyle(): com.carto.styles.PolygonStyle;
				
				
				
				
								
				
				public getLineStyle(): com.carto.styles.LineStyle;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class GeometryCollectionStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.GeometryCollectionStyleBuilder>;
				public getPointStyle(): com.carto.styles.PointStyle;
				public setPolygonStyle(polygonStyle: com.carto.styles.PolygonStyle): void;
				
				public setLineStyle(lineStyle: com.carto.styles.LineStyle): void;
				
				
				public getPolygonStyle(): com.carto.styles.PolygonStyle;
				
				
				
				public constructor();
								
				
				public buildStyle(): com.carto.styles.GeometryCollectionStyle;
				
				public getLineStyle(): com.carto.styles.LineStyle;
				public setPointStyle(pointStyle: com.carto.styles.PointStyle): void;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class LabelStyle extends com.carto.styles.BillboardStyle {
				public static class: java.lang.Class<com.carto.styles.LabelStyle>;
				public isFlippable(): boolean;
				
				public getScalingMode(): com.carto.styles.BillboardScaling;
				
				public getAnchorPointY(): number;
				
				
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				
				
				
				
				
								
				public getRenderScale(): number;
				public getAnchorPointX(): number;
				
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class LabelStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.LabelStyleBuilder>;
				
				public getScalingMode(): com.carto.styles.BillboardScaling;
				
				
				
				
				public setAnchorPoint(anchorPointX: number, anchorPointY: number): void;
				public constructor();
				public setRenderScale(renderScale: number): void;
				public setOrientationMode(orientationMode: com.carto.styles.BillboardOrientation): void;
				
				
				public getAnchorPointX(): number;
				public setAnchorPointY(anchorPointY: number): void;
				public isFlippable(): boolean;
				public buildStyle(): com.carto.styles.LabelStyle;
				public setAnchorPointX(anchorPointX: number): void;
				public getAnchorPointY(): number;
				
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				
								public setScalingMode(scalingMode: com.carto.styles.BillboardScaling): void;
				public setFlippable(flippable: boolean): void;
				
				public getRenderScale(): number;
				
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class LineEndType {
				public static class: java.lang.Class<com.carto.styles.LineEndType>;
				public static LINE_END_TYPE_NONE: com.carto.styles.LineEndType;
				public static LINE_END_TYPE_SQUARE: com.carto.styles.LineEndType;
				public static LINE_END_TYPE_ROUND: com.carto.styles.LineEndType;
				public swigValue(): number;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): androidNative.Array<com.carto.styles.LineEndType>;
				public static valueOf(name: string): com.carto.styles.LineEndType;
				public static swigToEnum(swigEnum: number): com.carto.styles.LineEndType;
			}
			export namespace LineEndType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.styles.LineEndType.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class LineJoinType {
				public static class: java.lang.Class<com.carto.styles.LineJoinType>;
				public static LINE_JOIN_TYPE_NONE: com.carto.styles.LineJoinType;
				public static LINE_JOIN_TYPE_MITER: com.carto.styles.LineJoinType;
				public static LINE_JOIN_TYPE_BEVEL: com.carto.styles.LineJoinType;
				public static LINE_JOIN_TYPE_ROUND: com.carto.styles.LineJoinType;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.styles.LineJoinType>;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.carto.styles.LineJoinType;
				public static swigToEnum(swigEnum: number): com.carto.styles.LineJoinType;
			}
			export namespace LineJoinType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.styles.LineJoinType.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class LineStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.LineStyle>;
				public getClickWidth(): number;
				public getLineJoinType(): com.carto.styles.LineJoinType;
				
				
				
				
				
				public getBitmap(): com.carto.graphics.Bitmap;
				
								
				public getWidth(): number;
				
				
				public getLineEndType(): com.carto.styles.LineEndType;
				public getStretchFactor(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class LineStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.LineStyleBuilder>;
				public setLineEndType(lineEndType: com.carto.styles.LineEndType): void;
				public setWidth(width: number): void;
				public getClickWidth(): number;
				public getLineJoinType(): com.carto.styles.LineJoinType;
				
				
				
				public setLineJoinType(lineJoinType: com.carto.styles.LineJoinType): void;
				
				
				
				
				
				public constructor();
				public getBitmap(): com.carto.graphics.Bitmap;
								public getWidth(): number;
				
				public buildStyle(): com.carto.styles.LineStyle;
				public setStretchFactor(stretchFactor: number): void;
				public getLineEndType(): com.carto.styles.LineEndType;
				public getStretchFactor(): number;
				public setClickWidth(clickWidth: number): void;
				public setBitmap(bitmap: com.carto.graphics.Bitmap): void;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class MarkerStyle extends com.carto.styles.BillboardStyle {
				public static class: java.lang.Class<com.carto.styles.MarkerStyle>;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				
				public getClickSize(): number;
				public getAnchorPointY(): number;
				
				
				
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				
				
				
				public getBitmap(): com.carto.graphics.Bitmap;
				
				
								
				public getSize(): number;
				public getAnchorPointX(): number;
				
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class MarkerStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.MarkerStyleBuilder>;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				
				
				
				
				public setAnchorPoint(anchorPointX: number, anchorPointY: number): void;
				public constructor();
				
				public setOrientationMode(orientationMode: com.carto.styles.BillboardOrientation): void;
				public setClickSize(size: number): void;
				
				public getSize(): number;
				public getAnchorPointX(): number;
				public setAnchorPointY(anchorPointY: number): void;
				public setAnchorPointX(anchorPointX: number): void;
				public getClickSize(): number;
				public getAnchorPointY(): number;
				
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				
				public getBitmap(): com.carto.graphics.Bitmap;
								public setScalingMode(scalingMode: com.carto.styles.BillboardScaling): void;
				
				public setSize(size: number): void;
				
				
				public buildStyle(): com.carto.styles.MarkerStyle;
				public setBitmap(bitmap: com.carto.graphics.Bitmap): void;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class NMLModelStyle extends com.carto.styles.BillboardStyle {
				public static class: java.lang.Class<com.carto.styles.NMLModelStyle>;
				public getModelAsset(): com.carto.core.BinaryData;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				
				
				
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				
				
				
				
				
				
								
				
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class NMLModelStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.NMLModelStyleBuilder>;
				public getModelAsset(): com.carto.core.BinaryData;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				
				
				
				
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				
				
				
				
				public constructor();
								public setOrientationMode(orientationMode: com.carto.styles.BillboardOrientation): void;
				
				public setScalingMode(scalingMode: com.carto.styles.BillboardScaling): void;
				public buildStyle(): com.carto.styles.NMLModelStyle;
				
				public setModelAsset(modelAsset: com.carto.core.BinaryData): void;
				
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PointStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.PointStyle>;
				
				
				public getClickSize(): number;
				
				
				
				
				public getBitmap(): com.carto.graphics.Bitmap;
				
				
								
				public getSize(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PointStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.PointStyleBuilder>;
				
				
				public getClickSize(): number;
				
				
				
				
				
				public constructor();
				public getBitmap(): com.carto.graphics.Bitmap;
				public buildStyle(): com.carto.styles.PointStyle;
								public setClickSize(size: number): void;
				
				public getSize(): number;
				public setSize(size: number): void;
				
				public setBitmap(bitmap: com.carto.graphics.Bitmap): void;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class Polygon3DStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.Polygon3DStyle>;
				
				public getSideColor(): com.carto.graphics.Color;
								
				
				
				
				
				
				
				
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class Polygon3DStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.Polygon3DStyleBuilder>;
				public getSideColor(): com.carto.graphics.Color;
				public buildStyle(): com.carto.styles.Polygon3DStyle;
				
				
				
				
				
				
				
				public constructor();
								
				
				public setSideColor(sideColor: com.carto.graphics.Color): void;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PolygonStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.PolygonStyle>;
				
				
								
				
				
				
				
				public getLineStyle(): com.carto.styles.LineStyle;
				
				
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PolygonStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.PolygonStyleBuilder>;
				
				
				public setLineStyle(lineStyle: com.carto.styles.LineStyle): void;
				
				
				
				public buildStyle(): com.carto.styles.PolygonStyle;
				
				
				
				public constructor();
								
				public getLineStyle(): com.carto.styles.LineStyle;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PopupStyle extends com.carto.styles.BillboardStyle {
				public static class: java.lang.Class<com.carto.styles.PopupStyle>;
				
				
				
								
				
				
				
				
				
				
				
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PopupStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.PopupStyleBuilder>;
				
				
				
				
				
				public buildStyle(): com.carto.styles.PopupStyle;
				
				public constructor();
								
				
				
				
				
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class StringCartoCSSStyleSetMap extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.StringCartoCSSStyleSetMap>;
				
				public get(key: string): com.carto.styles.CartoCSSStyleSet;
				
				
				public constructor(arg0: com.carto.styles.StringCartoCSSStyleSetMap);
				public constructor();
				public size(): number;
				
				public set(key: string, x: com.carto.styles.CartoCSSStyleSet): void;
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
	export namespace carto {
		export namespace styles {
			export class Style extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.Style>;
				
				
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				
				public getColor(): com.carto.graphics.Color;
				
				
				
				
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class StyleBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.StyleBuilder>;
				
								public equals(obj: any): boolean;
				public setColor(color: com.carto.graphics.Color): void;
				
				public hashCode(): number;
				
				public getColor(): com.carto.graphics.Color;
				
				
				
				
				
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace styles {
			export class TextMargins extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.TextMargins>;
				
				
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
	export namespace carto {
		export namespace styles {
			export class TextStyle extends com.carto.styles.LabelStyle {
				public static class: java.lang.Class<com.carto.styles.TextStyle>;
				public getStrokeWidth(): number;
				
				
				public isBreakLines(): boolean;
				
				
				public getTextField(): string;
				
				
				public getFontColor(): com.carto.graphics.Color;
				
				
				public getBorderColor(): com.carto.graphics.Color;
				public getBackgroundColor(): com.carto.graphics.Color;
				public getFontName(): string;
				
				
				
								public getFontSize(): number;
				public getTextMargins(): com.carto.styles.TextMargins;
				public getBorderWidth(): number;
				
				
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class TextStyleBuilder extends com.carto.styles.LabelStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.TextStyleBuilder>;
				public getStrokeWidth(): number;
				
				
				
				public isBreakLines(): boolean;
				
				
				public getTextField(): string;
				public constructor();
				public setStrokeWidth(strokeWidth: number): void;
				
				public setFontSize(size: number): void;
				public setBackgroundColor(backgroundColor: com.carto.graphics.Color): void;
				
				public setTextMargins(textMargins: com.carto.styles.TextMargins): void;
				
				public getBorderColor(): com.carto.graphics.Color;
				public buildStyle(): com.carto.styles.LabelStyle;
				public setStrokeColor(strokeColor: com.carto.graphics.Color): void;
				public getBackgroundColor(): com.carto.graphics.Color;
				public getFontName(): string;
				
				public setBreakLines(enable: boolean): void;
				
								public getFontSize(): number;
				public setBorderColor(borderColor: com.carto.graphics.Color): void;
				public getTextMargins(): com.carto.styles.TextMargins;
				public getBorderWidth(): number;
				public setFontName(fontName: string): void;
				public setTextField(field: string): void;
				
				
				
				public setBorderWidth(borderWidth: number): void;
				public buildStyle(): com.carto.styles.TextStyle;
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace ui {
			export class BalloonPopupButtonClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.BalloonPopupButtonClickInfo>;
				
				public getButton(): com.carto.vectorelements.BalloonPopupButton;
				public getClickType(): com.carto.ui.ClickType;
								public equals(obj: any): boolean;
				
				
				public hashCode(): number;
				
				
				public getClickInfo(): com.carto.ui.ClickInfo;
				public getVectorElement(): com.carto.vectorelements.VectorElement;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace ui {
			export class BaseMapView extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.BaseMapView>;
				
				public onSurfaceCreated(): void;
				public getZoom(): number;
				public onSurfaceDestroyed(): void;
				
				public finishRendering(): void;
				public screenToMap(screenPos: com.carto.core.ScreenPos): com.carto.core.MapPos;
				
				public setFocusPos(pos: com.carto.core.MapPos, durationSeconds: number): void;
				public moveToFitBounds(mapBounds: com.carto.core.MapBounds, screenBounds: com.carto.core.ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number): void;
				public getRedrawRequestListener(): com.carto.renderers.RedrawRequestListener;
				public constructor();
				public rotate(deltaAngle: number, durationSeconds: number): void;
				public cancelAllTasks(): void;
				public tilt(deltaTilt: number, durationSeconds: number): void;
				
				public setMapEventListener(mapEventListener: com.carto.ui.MapEventListener): void;
				public onSurfaceChanged(width: number, height: number): void;
				public clearPreloadingCaches(): void;
				public clearAllCaches(): void;
				public static getSDKVersion(): string;
				public pan(deltaPos: com.carto.core.MapVec, durationSeconds: number): void;
				public getLayers(): com.carto.components.Layers;
				public setRotation(angle: number, durationSeconds: number): void;
				public setTilt(tilt: number, durationSeconds: number): void;
				
				public rotate(deltaAngle: number, targetPos: com.carto.core.MapPos, durationSeconds: number): void;
				public setRedrawRequestListener(listener: com.carto.renderers.RedrawRequestListener): void;
				public setZoom(zoom: number, durationSeconds: number): void;
				public setZoom(zoom: number, targetPos: com.carto.core.MapPos, durationSeconds: number): void;
				public onWheelEvent(delta: number, x: number, y: number): void;
				public zoom(deltaZoom: number, targetPos: com.carto.core.MapPos, durationSeconds: number): void;
				public mapToScreen(mapPos: com.carto.core.MapPos): com.carto.core.ScreenPos;
				public zoom(deltaZoom: number, durationSeconds: number): void;
				public setRotation(angle: number, targetPos: com.carto.core.MapPos, durationSeconds: number): void;
				public moveToFitBounds(mapBounds: com.carto.core.MapBounds, screenBounds: com.carto.core.ScreenBounds, integerZoom: boolean, durationSeconds: number): void;
				public getMapEventListener(): com.carto.ui.MapEventListener;
				public onInputEvent(event: number, x1: number, y1: number, x2: number, y2: number): void;
				public getRotation(): number;
				public getFocusPos(): com.carto.core.MapPos;
				public getTilt(): number;
				public getOptions(): com.carto.components.Options;
				public onDrawFrame(): void;
				public getMapRenderer(): com.carto.renderers.MapRenderer;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace ui {
			export class ClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.ClickInfo>;
				
				public constructor(clickType: com.carto.ui.ClickType, duration: number);
				public getClickType(): com.carto.ui.ClickType;
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				public getDuration(): number;
				
				public toString(): string;
				
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace ui {
			export class ClickType {
				public static class: java.lang.Class<com.carto.ui.ClickType>;
				public static CLICK_TYPE_SINGLE: com.carto.ui.ClickType;
				public static CLICK_TYPE_LONG: com.carto.ui.ClickType;
				public static CLICK_TYPE_DOUBLE: com.carto.ui.ClickType;
				public static CLICK_TYPE_DUAL: com.carto.ui.ClickType;
				public swigValue(): number;
				public static values(): androidNative.Array<com.carto.ui.ClickType>;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.carto.ui.ClickType;
				public static swigToEnum(swigEnum: number): com.carto.ui.ClickType;
			}
			export namespace ClickType {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.ui.ClickType.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class ConfigChooser extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.EGLConfigChooser {
				public static class: java.lang.Class<com.carto.ui.ConfigChooser>;
				public chooseConfig(configs: javax.microedition.khronos.egl.EGL10, i: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
				public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class GLTextureView extends globalAndroid.view.TextureView implements globalAndroid.view.TextureView.SurfaceTextureListener, globalAndroid.view.View.OnLayoutChangeListener {
				public static class: java.lang.Class<com.carto.ui.GLTextureView>;
				public static RENDERMODE_WHEN_DIRTY: number; // 0
				public static RENDERMODE_CONTINUOUSLY: number; // 1
				public static DEBUG_CHECK_GL_ERROR: number; // 1
				public static DEBUG_LOG_GL_CALLS: number; // 2
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
					public static class: java.lang.Class<com.carto.ui.GLTextureView.BaseConfigChooser>;
					public mConfigSpec: androidNative.Array<number>;
					public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					public constructor(configSpec: com.carto.ui.GLTextureView, param1: androidNative.Array<number>);
					public chooseConfig(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
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
					public constructor(configSpec: com.carto.ui.GLTextureView, param1: androidNative.Array<number>);
					public chooseConfig(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					public constructor(redSize: com.carto.ui.GLTextureView, greenSize: number, blueSize: number, alphaSize: number, depthSize: number, stencilSize: number, param6: number);
					public chooseConfig(g: javax.microedition.khronos.egl.EGL10, b: javax.microedition.khronos.egl.EGLDisplay, a: androidNative.Array<javax.microedition.khronos.egl.EGLConfig>): javax.microedition.khronos.egl.EGLConfig;
				}
				export class DefaultContextFactory extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.EGLContextFactory {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.DefaultContextFactory>;
					public createContext(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay, config: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
					public destroyContext(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay, context: javax.microedition.khronos.egl.EGLContext): void;
					public destroyContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLContext): void;
					public createContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
				}
				export class DefaultWindowSurfaceFactory extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.EGLWindowSurfaceFactory {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.DefaultWindowSurfaceFactory>;
					public destroySurface(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay, surface: javax.microedition.khronos.egl.EGLSurface): void;
					public createWindowSurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig, param3: any): javax.microedition.khronos.egl.EGLSurface;
					public createWindowSurface(this_: javax.microedition.khronos.egl.EGL10, egl: javax.microedition.khronos.egl.EGLDisplay, display: javax.microedition.khronos.egl.EGLConfig, config: any): javax.microedition.khronos.egl.EGLSurface;
					public destroySurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLSurface): void;
				}
				export class EglHelper extends java.lang.Object {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.EglHelper>;
					public constructor(glTextureViewWeakReference: java.lang.ref.WeakReference<com.carto.ui.GLTextureView>);
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
					public static class: java.lang.Class<com.carto.ui.GLTextureView.GLThread>;
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
					public static class: java.lang.Class<com.carto.ui.GLTextureView.GLThreadManager>;
					public tryAcquireEglContextLocked(thread: com.carto.ui.GLTextureView.GLThread): boolean;
					public shouldReleaseEGLContextWhenPausing(): boolean;
					public threadExiting(thread: com.carto.ui.GLTextureView.GLThread): void;
					public checkGLDriver(this_: javax.microedition.khronos.opengles.GL10): void;
					public shouldTerminateEGLWhenPausing(): boolean;
					public releaseEglContextLocked(thread: com.carto.ui.GLTextureView.GLThread): void;
				}
				export class LogWriter extends java.io.Writer {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.LogWriter>;
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
				export class SimpleEGLConfigChooser extends com.carto.ui.GLTextureView.ComponentSizeChooser {
					public static class: java.lang.Class<com.carto.ui.GLTextureView.SimpleEGLConfigChooser>;
					public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					public constructor(configSpec: com.carto.ui.GLTextureView, param1: androidNative.Array<number>);
					public constructor(withDepthBuffer: com.carto.ui.GLTextureView, param1: boolean);
					public constructor(redSize: com.carto.ui.GLTextureView, greenSize: number, blueSize: number, alphaSize: number, depthSize: number, stencilSize: number, param6: number);
					public chooseConfig(g: javax.microedition.khronos.egl.EGL10, b: javax.microedition.khronos.egl.EGLDisplay, a: androidNative.Array<javax.microedition.khronos.egl.EGLConfig>): javax.microedition.khronos.egl.EGLConfig;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class MapClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapClickInfo>;
				
				public getClickType(): com.carto.ui.ClickType;
								public equals(obj: any): boolean;
				public getClickPos(): com.carto.core.MapPos;
				
				public hashCode(): number;
				
				
				
				public getClickInfo(): com.carto.ui.ClickInfo;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace ui {
			export class MapEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapEventListener>;
				
				
				public onMapMoved(): void;
				
				public onMapClicked(mapClickInfo: com.carto.ui.MapClickInfo): void;
				
				
				public onMapInteraction(mapInteractionInfo: com.carto.ui.MapInteractionInfo): void;
				
				
				
				public constructor();
				public onMapStable(): void;
								
								
				public onMapIdle(): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace ui {
			export class MapInteractionInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapInteractionInfo>;
				
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
	export namespace carto {
		export namespace ui {
			export class MapRedrawRequestListener extends com.carto.renderers.RedrawRequestListener {
				public static class: java.lang.Class<com.carto.ui.MapRedrawRequestListener>;
				public constructor(mapView: com.carto.ui.MapView);
				public onRedrawRequested(): void;
				
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class MapView extends globalAndroid.opengl.GLSurfaceView implements globalAndroid.opengl.GLSurfaceView.Renderer, com.carto.ui.MapViewInterface {
				public static class: java.lang.Class<com.carto.ui.MapView>;
				public constructor(context: globalAndroid.content.Context);
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public mapToScreen(param0: com.carto.core.MapPos): com.carto.core.ScreenPos;
				public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
				public rotate(deltaAngle: number, durationSeconds: number): void;
				public cancelAllTasks(): void;
				public sendAccessibilityEvent(param0: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public tilt(deltaTilt: number, durationSeconds: number): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public setTilt(param0: number, param1: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public onSurfaceChanged(gl: javax.microedition.khronos.opengles.GL10, width: number, height: number): void;
				public clearPreloadingCaches(): void;
				public clearAllCaches(): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public getLayers(): com.carto.components.Layers;
				public zoom(param0: number, param1: number): void;
				public setTilt(tilt: number, durationSeconds: number): void;
				public rotate(deltaAngle: number, targetPos: com.carto.core.MapPos, durationSeconds: number): void;
				public pan(param0: com.carto.core.MapVec, param1: number): void;
				public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
				public rotate(param0: number, param1: number): void;
				public mapToScreen(mapPos: com.carto.core.MapPos): com.carto.core.ScreenPos;
				public zoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public zoom(deltaZoom: number, durationSeconds: number): void;
				public setZoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public constructor(e: globalAndroid.content.Context, m: globalAndroid.util.AttributeSet);
				public moveToFitBounds(mapBounds: com.carto.core.MapBounds, screenBounds: com.carto.core.ScreenBounds, integerZoom: boolean, durationSeconds: number): void;
				public surfaceRedrawNeededAsync(holder: globalAndroid.view.SurfaceHolder, drawingFinished: java.lang.Runnable): void;
				public getMapEventListener(): com.carto.ui.MapEventListener;
				public getFocusPos(): com.carto.core.MapPos;
				public screenToMap(param0: com.carto.core.ScreenPos): com.carto.core.MapPos;
				public getOptions(): com.carto.components.Options;
				public surfaceRedrawNeeded(param0: globalAndroid.view.SurfaceHolder): void;
				public getMapRenderer(): com.carto.renderers.MapRenderer;
				public setMapRotation(angle: number, durationSeconds: number): void;
				public setMapRotation(param0: number, param1: number): void;
				public getZoom(): number;
				public setZoom(param0: number, param1: number): void;
				public screenToMap(screenPos: com.carto.core.ScreenPos): com.carto.core.MapPos;
				public getMapRotation(): number;
				public setFocusPos(pos: com.carto.core.MapPos, durationSeconds: number): void;
				public moveToFitBounds(mapBounds: com.carto.core.MapBounds, screenBounds: com.carto.core.ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number): void;
				public setFocusPos(param0: com.carto.core.MapPos, param1: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public onTouchEvent(pointer1Index: globalAndroid.view.MotionEvent): boolean;
				
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public setMapEventListener(mapEventListener: com.carto.ui.MapEventListener): void;
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public onSurfaceCreated(gl: javax.microedition.khronos.opengles.GL10, config: javax.microedition.khronos.egl.EGLConfig): void;
				public setMapRotation(angle: number, targetPos: com.carto.core.MapPos, durationSeconds: number): void;
				public pan(deltaPos: com.carto.core.MapVec, durationSeconds: number): void;
				public onDrawFrame(gl: javax.microedition.khronos.opengles.GL10): void;
				public tilt(param0: number, param1: number): void;
				public setMapEventListener(param0: com.carto.ui.MapEventListener): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setMapRotation(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public setZoom(zoom: number, durationSeconds: number): void;
				public setZoom(zoom: number, targetPos: com.carto.core.MapPos, durationSeconds: number): void;
				public zoom(deltaZoom: number, targetPos: com.carto.core.MapPos, durationSeconds: number): void;
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

declare namespace com {
	export namespace carto {
		export namespace ui {
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

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class PopupClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.PopupClickInfo>;
				
				public getElementClickPos(): com.carto.core.ScreenPos;
				public getClickType(): com.carto.ui.ClickType;
								public equals(obj: any): boolean;
				public getClickPos(): com.carto.core.MapPos;
				
				public hashCode(): number;
				public getPopup(): com.carto.vectorelements.Popup;
				
				
				
				public getClickInfo(): com.carto.ui.ClickInfo;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace ui {
			export class PopupDrawInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.PopupDrawInfo>;
				
								public equals(obj: any): boolean;
				public getAnchorScreenPos(): com.carto.core.ScreenPos;
				public getScreenBounds(): com.carto.core.ScreenBounds;
				
				public hashCode(): number;
				public getPopup(): com.carto.vectorelements.Popup;
				
				
				public constructor(anchorScreenPos: com.carto.core.ScreenPos, screenBounds: com.carto.core.ScreenBounds, popup: com.carto.vectorelements.Popup, dpToPX: number);
				
				public getDPToPX(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace ui {
			export class RasterTileClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.RasterTileClickInfo>;
				
				public getClickType(): com.carto.ui.ClickType;
				public getNearestColor(): com.carto.graphics.Color;
				public getClickPos(): com.carto.core.MapPos;
				
				public getInterpolatedColor(): com.carto.graphics.Color;
				
				public getClickInfo(): com.carto.ui.ClickInfo;
								public equals(obj: any): boolean;
				
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
			export class TextureMapRedrawRequestListener extends com.carto.renderers.RedrawRequestListener {
				public static class: java.lang.Class<com.carto.ui.TextureMapRedrawRequestListener>;
				public constructor(mapView: com.carto.ui.TextureMapView);
				public onRedrawRequested(): void;
				
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class TextureMapView extends com.carto.ui.GLTextureView implements globalAndroid.opengl.GLSurfaceView.Renderer, com.carto.ui.MapViewInterface {
				public static class: java.lang.Class<com.carto.ui.TextureMapView>;
				public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
				public constructor(context: globalAndroid.content.Context);
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public mapToScreen(param0: com.carto.core.MapPos): com.carto.core.ScreenPos;
				public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
				public rotate(deltaAngle: number, durationSeconds: number): void;
				public cancelAllTasks(): void;
				public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
				public sendAccessibilityEvent(param0: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public tilt(deltaTilt: number, durationSeconds: number): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public setTilt(param0: number, param1: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public onSurfaceChanged(gl: javax.microedition.khronos.opengles.GL10, width: number, height: number): void;
				public clearPreloadingCaches(): void;
				public clearAllCaches(): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public getLayers(): com.carto.components.Layers;
				public zoom(param0: number, param1: number): void;
				public setTilt(tilt: number, durationSeconds: number): void;
				public rotate(deltaAngle: number, targetPos: com.carto.core.MapPos, durationSeconds: number): void;
				public pan(param0: com.carto.core.MapVec, param1: number): void;
				public moveToFitBounds(param0: com.carto.core.MapBounds, param1: com.carto.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
				public rotate(param0: number, param1: number): void;
				public mapToScreen(mapPos: com.carto.core.MapPos): com.carto.core.ScreenPos;
				public zoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public constructor(e: globalAndroid.content.Context, this_: globalAndroid.util.AttributeSet);
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public zoom(deltaZoom: number, durationSeconds: number): void;
				public setZoom(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public moveToFitBounds(mapBounds: com.carto.core.MapBounds, screenBounds: com.carto.core.ScreenBounds, integerZoom: boolean, durationSeconds: number): void;
				public getMapEventListener(): com.carto.ui.MapEventListener;
				public getFocusPos(): com.carto.core.MapPos;
				public screenToMap(param0: com.carto.core.ScreenPos): com.carto.core.MapPos;
				public getOptions(): com.carto.components.Options;
				public getMapRenderer(): com.carto.renderers.MapRenderer;
				public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
				public setMapRotation(angle: number, durationSeconds: number): void;
				public setMapRotation(param0: number, param1: number): void;
				public getZoom(): number;
				public setZoom(param0: number, param1: number): void;
				public screenToMap(screenPos: com.carto.core.ScreenPos): com.carto.core.MapPos;
				public getMapRotation(): number;
				public setFocusPos(pos: com.carto.core.MapPos, durationSeconds: number): void;
				public moveToFitBounds(mapBounds: com.carto.core.MapBounds, screenBounds: com.carto.core.ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number): void;
				public setFocusPos(param0: com.carto.core.MapPos, param1: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public onTouchEvent(pointer1Index: globalAndroid.view.MotionEvent): boolean;
				
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public setMapEventListener(mapEventListener: com.carto.ui.MapEventListener): void;
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public onSurfaceCreated(gl: javax.microedition.khronos.opengles.GL10, config: javax.microedition.khronos.egl.EGLConfig): void;
				public setMapRotation(angle: number, targetPos: com.carto.core.MapPos, durationSeconds: number): void;
				public pan(deltaPos: com.carto.core.MapVec, durationSeconds: number): void;
				public onDrawFrame(gl: javax.microedition.khronos.opengles.GL10): void;
				public tilt(param0: number, param1: number): void;
				public setMapEventListener(param0: com.carto.ui.MapEventListener): void;
				public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setMapRotation(param0: number, param1: com.carto.core.MapPos, param2: number): void;
				public setZoom(zoom: number, durationSeconds: number): void;
				public setZoom(zoom: number, targetPos: com.carto.core.MapPos, durationSeconds: number): void;
				public zoom(deltaZoom: number, targetPos: com.carto.core.MapPos, durationSeconds: number): void;
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

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class UTFGridClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.UTFGridClickInfo>;
				
				public getClickType(): com.carto.ui.ClickType;
								public equals(obj: any): boolean;
				public getClickPos(): com.carto.core.MapPos;
				
				public hashCode(): number;
				public getLayer(): com.carto.layers.Layer;
				
				
				
				public getElementInfo(): com.carto.core.Variant;
				public getClickInfo(): com.carto.ui.ClickInfo;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace ui {
			export class VectorElementClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorElementClickInfo>;
				
				public getClickType(): com.carto.ui.ClickType;
				
				public getClickPos(): com.carto.core.MapPos;
				public getElementClickPos(): com.carto.core.MapPos;
				
				
				public getClickInfo(): com.carto.ui.ClickInfo;
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				public getLayer(): com.carto.layers.Layer;
				public getVectorElement(): com.carto.vectorelements.VectorElement;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace ui {
			export class VectorElementDragInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorElementDragInfo>;
				
				
				public getMapPos(): com.carto.core.MapPos;
								public getDragMode(): com.carto.ui.VectorElementDragMode;
				public equals(obj: any): boolean;
				
				public hashCode(): number;
				
				public getScreenPos(): com.carto.core.ScreenPos;
				
				public getVectorElement(): com.carto.vectorelements.VectorElement;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace ui {
			export class VectorElementDragMode {
				public static class: java.lang.Class<com.carto.ui.VectorElementDragMode>;
				public static VECTOR_ELEMENT_DRAG_MODE_VERTEX: com.carto.ui.VectorElementDragMode;
				public static VECTOR_ELEMENT_DRAG_MODE_ELEMENT: com.carto.ui.VectorElementDragMode;
				public static values(): androidNative.Array<com.carto.ui.VectorElementDragMode>;
				public swigValue(): number;
				public static valueOf(name: string): com.carto.ui.VectorElementDragMode;
				public static valueOf(enumClass: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static swigToEnum(swigEnum: number): com.carto.ui.VectorElementDragMode;
			}
			export namespace VectorElementDragMode {
				export class SwigNext extends java.lang.Object {
					public static class: java.lang.Class<com.carto.ui.VectorElementDragMode.SwigNext>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class VectorTileClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorTileClickInfo>;
				
				public getClickType(): com.carto.ui.ClickType;
				public getFeaturePosIndex(): number;
				public getClickPos(): com.carto.core.MapPos;
				
				
				
				public getFeatureClickPos(): com.carto.core.MapPos;
				public getClickInfo(): com.carto.ui.ClickInfo;
								public equals(obj: any): boolean;
				
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
			export class AndroidUtils extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.AndroidUtils>;
				
				public static setContext(context: globalAndroid.content.Context): void;
				public static getDeviceType(): string;
				
				
				
				public static getDeviceOS(): string;
				
				public static attachJVM(jenv: any): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace utils {
			export class AssetPackage extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.AssetPackage>;
				
				
				
				
				public getAssetNames(): com.carto.core.StringVector;
				
				
				
				public constructor();
								public equals(obj: any): boolean;
				public loadAsset(name: string): com.carto.core.BinaryData;
				
				public hashCode(): number;
				
								
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace utils {
			export class AssetUtils extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.AssetUtils>;
				
				
				
				public static setAssetManagerPointer(androidAssetManager: globalAndroid.content.res.AssetManager): void;
				
				public static loadAsset(path: string): com.carto.core.BinaryData;
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace utils {
			export class BitmapUtils extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.BitmapUtils>;
				
				public static loadBitmapFromFile(filePath: string): com.carto.graphics.Bitmap;
				public static createBitmapFromAndroidBitmap(androidBitmap: globalAndroid.graphics.Bitmap): com.carto.graphics.Bitmap;
				public static createAndroidBitmapFromBitmap(bitmap: com.carto.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				
				
				
				public static loadBitmapFromAssets(assetPath: string): com.carto.graphics.Bitmap;
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace utils {
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

declare namespace com {
	export namespace carto {
		export namespace utils {
			export class Log extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.Log>;
				
				public static setShowInfo(showInfo: boolean): void;
				public static fatal(message: string): void;
				public static setTag(tag: string): void;
				public static setLogEventListener(listener: com.carto.utils.LogEventListener): void;
				
				public static isShowInfo(): boolean;
				
				
				public static setShowError(showError: boolean): void;
				public static setShowWarn(showWarn: boolean): void;
				public static error(message: string): void;
				public static info(message: string): void;
				public static isShowError(): boolean;
				public static getLogEventListener(): com.carto.utils.LogEventListener;
				
				public static setShowDebug(showDebug: boolean): void;
				public static debug(message: string): void;
				public static isShowDebug(): boolean;
				public static isShowWarn(): boolean;
				public static warn(message: string): void;
				public static getTag(): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace utils {
			export class LogEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.LogEventListener>;
				
				
				
				
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
	export namespace carto {
		export namespace utils {
			export class TileUtils extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.TileUtils>;
				
				
				public static calculateClippedMapTile(mapPos: com.carto.core.MapPos, zoom: number, proj: com.carto.projections.Projection): com.carto.core.MapTile;
				public static calculateMapTileOrigin(mapTile: com.carto.core.MapTile, proj: com.carto.projections.Projection): com.carto.core.MapPos;
				
				
				public static calculateMapTile(mapPos: com.carto.core.MapPos, zoom: number, proj: com.carto.projections.Projection): com.carto.core.MapTile;
				
				public static calculateMapTileBounds(mapTile: com.carto.core.MapTile, proj: com.carto.projections.Projection): com.carto.core.MapBounds;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace utils {
			export class ZippedAssetPackage extends com.carto.utils.AssetPackage {
				public static class: java.lang.Class<com.carto.utils.ZippedAssetPackage>;
				public getLocalAssetNames(): com.carto.core.StringVector;
				
				
				public getAssetNames(): com.carto.core.StringVector;
				
				
				
				public constructor();
								public loadAsset(name: string): com.carto.core.BinaryData;
				
				
				public constructor(zipData: com.carto.core.BinaryData);
				
				
				public constructor(zipData: com.carto.core.BinaryData, baseAssetPackage: com.carto.utils.AssetPackage);
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class BalloonPopup extends com.carto.vectorelements.Popup {
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopup>;
				public setBalloonPopupEventListener(eventListener: com.carto.vectorelements.BalloonPopupEventListener): void;
				
				
				public clearButtons(): void;
				
				public constructor(geometry: com.carto.geometry.Geometry, style: com.carto.styles.BalloonPopupStyle, title: string, desc: string);
				public getDescription(): string;
				
				public getBalloonPopupEventListener(): com.carto.vectorelements.BalloonPopupEventListener;
				
				
				public removeButton(button: com.carto.vectorelements.BalloonPopupButton): void;
				public setTitle(title: string): void;
				
				
				public drawBitmap(anchorScreenPos: com.carto.core.ScreenPos, screenWidth: number, screenHeight: number, dpToPX: number): com.carto.graphics.Bitmap;
				public constructor(baseBillboard: com.carto.vectorelements.Billboard, style: com.carto.styles.BalloonPopupStyle, title: string, desc: string);
				public getStyle(): com.carto.styles.PopupStyle;
				
				
				public getTitle(): string;
				
								public getStyle(): com.carto.styles.BalloonPopupStyle;
				public replaceButton(oldButton: com.carto.vectorelements.BalloonPopupButton, newButton: com.carto.vectorelements.BalloonPopupButton): void;
				public setStyle(style: com.carto.styles.PopupStyle): void;
				
				public setDescription(desc: string): void;
				
				public processClick(clickInfo: com.carto.ui.ClickInfo, clickPos: com.carto.core.MapPos, elementClickPos: com.carto.core.ScreenPos): boolean;
				public constructor(pos: com.carto.core.MapPos, style: com.carto.styles.BalloonPopupStyle, title: string, desc: string);
				public addButton(button: com.carto.vectorelements.BalloonPopupButton): void;
				public setStyle(style: com.carto.styles.BalloonPopupStyle): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class BalloonPopupButton extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopupButton>;
				
				public constructor(style: com.carto.styles.BalloonPopupButtonStyle, text: string);
				
				
				
				
				public getText(): string;
								public getTag(): com.carto.core.Variant;
				
				public getStyle(): com.carto.styles.BalloonPopupButtonStyle;
				
				public setTag(tag: com.carto.core.Variant): void;
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class BalloonPopupEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopupEventListener>;
				
				
				
				
				
				
				
				
				public constructor();
								
								public onButtonClicked(clickInfo: com.carto.ui.BalloonPopupButtonClickInfo): boolean;
				
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class Billboard extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.Billboard>;
				
				public setRotation(rotation: number): void;
				
				public getRootGeometry(): com.carto.geometry.Geometry;
				public setGeometry(geometry: com.carto.geometry.Geometry): void;
				
				public getBounds(): com.carto.core.MapBounds;
				
				
				
								
				public getRotation(): number;
				
				
				public getBaseBillboard(): com.carto.vectorelements.Billboard;
				public setBaseBillboard(baseBillboard: com.carto.vectorelements.Billboard): void;
				public getGeometry(): com.carto.geometry.Geometry;
				public setPos(pos: com.carto.core.MapPos): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class CustomPopup extends com.carto.vectorelements.Popup {
				public static class: java.lang.Class<com.carto.vectorelements.CustomPopup>;
				
				
				
				public drawBitmap(anchorScreenPos: com.carto.core.ScreenPos, screenWidth: number, screenHeight: number, dpToPX: number): com.carto.graphics.Bitmap;
				public getPopupHandler(): com.carto.vectorelements.CustomPopupHandler;
				
				
				public constructor(pos: com.carto.core.MapPos, style: com.carto.styles.PopupStyle, popupHandler: com.carto.vectorelements.CustomPopupHandler);
				
				
								
				
				
				
				public constructor(geometry: com.carto.geometry.Geometry, style: com.carto.styles.PopupStyle, popupHandler: com.carto.vectorelements.CustomPopupHandler);
				
				
				public constructor(baseBillboard: com.carto.vectorelements.Billboard, style: com.carto.styles.PopupStyle, popupHandler: com.carto.vectorelements.CustomPopupHandler);
				public processClick(clickInfo: com.carto.ui.ClickInfo, clickPos: com.carto.core.MapPos, elementClickPos: com.carto.core.ScreenPos): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class CustomPopupHandler extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.CustomPopupHandler>;
				
				
				
				
				
				public onPopupClicked(popupClickInfo: com.carto.ui.PopupClickInfo): boolean;
				
				
				
				public constructor();
								
				
								public onDrawPopup(popupDrawInfo: com.carto.ui.PopupDrawInfo): com.carto.graphics.Bitmap;
			}
		}
	}
}





declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class GeometryCollection extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.GeometryCollection>;
				public constructor(geometry: com.carto.geometry.MultiGeometry, style: com.carto.styles.GeometryCollectionStyle);
				
				
				public getGeometry(): com.carto.geometry.MultiGeometry;
				
				public setStyle(style: com.carto.styles.GeometryCollectionStyle): void;
				
				public getStyle(): com.carto.styles.GeometryCollectionStyle;
								
				
				
				
				
				public setGeometry(geometry: com.carto.geometry.MultiGeometry): void;
				public getGeometry(): com.carto.geometry.Geometry;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class Label extends com.carto.vectorelements.Billboard {
				public static class: java.lang.Class<com.carto.vectorelements.Label>;
				
				
				public setStyle(style: com.carto.styles.LabelStyle): void;
				
				public drawBitmap(dpToPX: number): com.carto.graphics.Bitmap;
				
				
				
				
				
								public getStyle(): com.carto.styles.LabelStyle;
				
				
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class Line extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.Line>;
				public constructor(poses: com.carto.core.MapPosVector, style: com.carto.styles.LineStyle);
				public getGeometry(): com.carto.geometry.LineGeometry;
				public getStyle(): com.carto.styles.LineStyle;
				
				public setGeometry(geometry: com.carto.geometry.LineGeometry): void;
				
				public setPoses(poses: com.carto.core.MapPosVector): void;
				
				
								
				public constructor(geometry: com.carto.geometry.LineGeometry, style: com.carto.styles.LineStyle);
				
				
				
				public setStyle(style: com.carto.styles.LineStyle): void;
				
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
				public static class: java.lang.Class<com.carto.vectorelements.Marker>;
				
				public setStyle(style: com.carto.styles.MarkerStyle): void;
				
				
				
				
				
				public constructor(geometry: com.carto.geometry.Geometry, style: com.carto.styles.MarkerStyle);
				
				
								public constructor(baseBillboard: com.carto.vectorelements.Billboard, style: com.carto.styles.MarkerStyle);
				
				
				
				public constructor(pos: com.carto.core.MapPos, style: com.carto.styles.MarkerStyle);
				public getStyle(): com.carto.styles.MarkerStyle;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class NMLModel extends com.carto.vectorelements.Billboard {
				public static class: java.lang.Class<com.carto.vectorelements.NMLModel>;
				public setRotation(rotation: number): void;
				
				public getStyle(): com.carto.styles.NMLModelStyle;
				public getScale(): number;
				
				public setRotation(axis: com.carto.core.MapVec, angle: number): void;
				
				
				public setRotationAxis(axis: com.carto.core.MapVec): void;
				public constructor(geometry: com.carto.geometry.Geometry, style: com.carto.styles.NMLModelStyle);
				
				/** @deprecated */
				public getRotationAngle(): number;
				public setStyle(style: com.carto.styles.NMLModelStyle): void;
				
				public constructor(pos: com.carto.core.MapPos, style: com.carto.styles.NMLModelStyle);
				public constructor(baseBillboard: com.carto.vectorelements.Billboard, style: com.carto.styles.NMLModelStyle);
				public getRotationAxis(): com.carto.core.MapVec;
				
				
				public setScale(scale: number): void;
								
				/** @deprecated */
				public setRotationAngle(angle: number): void;
				
				
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class Point extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.Point>;
				public constructor(pos: com.carto.core.MapPos, style: com.carto.styles.PointStyle);
				
				public getStyle(): com.carto.styles.PointStyle;
				
				public getPos(): com.carto.core.MapPos;
				
				
				
								public getGeometry(): com.carto.geometry.PointGeometry;
				
				
				
				
				public constructor(geometry: com.carto.geometry.PointGeometry, style: com.carto.styles.PointStyle);
				public setStyle(style: com.carto.styles.PointStyle): void;
				public setGeometry(geometry: com.carto.geometry.PointGeometry): void;
				public getGeometry(): com.carto.geometry.Geometry;
				public setPos(pos: com.carto.core.MapPos): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class Polygon extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.Polygon>;
				public constructor(poses: com.carto.core.MapPosVector, holes: com.carto.core.MapPosVectorVector, style: com.carto.styles.PolygonStyle);
				public getHoles(): com.carto.core.MapPosVectorVector;
				public setHoles(holes: com.carto.core.MapPosVectorVector): void;
				public setStyle(style: com.carto.styles.PolygonStyle): void;
				
				
				
				public setPoses(poses: com.carto.core.MapPosVector): void;
				
				public getStyle(): com.carto.styles.PolygonStyle;
				
				public getGeometry(): com.carto.geometry.PolygonGeometry;
				public constructor(geometry: com.carto.geometry.PolygonGeometry, style: com.carto.styles.PolygonStyle);
								
				public constructor(poses: com.carto.core.MapPosVector, style: com.carto.styles.PolygonStyle);
				
				
				public setGeometry(geometry: com.carto.geometry.PolygonGeometry): void;
				
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
				public static class: java.lang.Class<com.carto.vectorelements.Polygon3D>;
				public getHeight(): number;
				public getHoles(): com.carto.core.MapPosVectorVector;
				public setHoles(holes: com.carto.core.MapPosVectorVector): void;
				
				public constructor(poses: com.carto.core.MapPosVector, holes: com.carto.core.MapPosVectorVector, style: com.carto.styles.Polygon3DStyle, height: number);
				
				public setPoses(poses: com.carto.core.MapPosVector): void;
				public getStyle(): com.carto.styles.Polygon3DStyle;
				
				public setStyle(style: com.carto.styles.Polygon3DStyle): void;
				public setHeight(height: number): void;
				
				public getGeometry(): com.carto.geometry.PolygonGeometry;
								public constructor(poses: com.carto.core.MapPosVector, style: com.carto.styles.Polygon3DStyle, height: number);
				
				
				public constructor(geometry: com.carto.geometry.PolygonGeometry, style: com.carto.styles.Polygon3DStyle, height: number);
				
				
				public setGeometry(geometry: com.carto.geometry.PolygonGeometry): void;
				
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
				public static class: java.lang.Class<com.carto.vectorelements.Popup>;
				
				
				
				public drawBitmap(anchorScreenPos: com.carto.core.ScreenPos, screenWidth: number, screenHeight: number, dpToPX: number): com.carto.graphics.Bitmap;
				public setAnchorPointX(anchorPointX: number): void;
				
				public getStyle(): com.carto.styles.PopupStyle;
				public getAnchorPointY(): number;
				
				
				public setAnchorPoint(anchorPointX: number, anchorPointY: number): void;
				
								
				public setStyle(style: com.carto.styles.PopupStyle): void;
				
				
				
				public processClick(clickInfo: com.carto.ui.ClickInfo, clickPos: com.carto.core.MapPos, elementClickPos: com.carto.core.ScreenPos): boolean;
				public getAnchorPointX(): number;
				public setAnchorPointY(anchorPointY: number): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class Text extends com.carto.vectorelements.Label {
				public static class: java.lang.Class<com.carto.vectorelements.Text>;
				
				
				public setStyle(style: com.carto.styles.LabelStyle): void;
				
				public constructor(geometry: com.carto.geometry.Geometry, style: com.carto.styles.TextStyle, text: string);
				public drawBitmap(dpToPX: number): com.carto.graphics.Bitmap;
				
				
				
				public getText(): string;
				
				
								public getStyle(): com.carto.styles.LabelStyle;
				
				
				public constructor(pos: com.carto.core.MapPos, style: com.carto.styles.TextStyle, text: string);
				
				
				
				public constructor(baseBillboard: com.carto.vectorelements.Billboard, style: com.carto.styles.TextStyle, text: string);
				public getStyle(): com.carto.styles.TextStyle;
				public setText(text: string): void;
				public setStyle(style: com.carto.styles.TextStyle): void;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class VectorElement extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.VectorElement>;
				
				public isVisible(): boolean;
				public containsMetaDataKey(key: string): boolean;
				public notifyElementChanged(): void;
				public setMetaDataElement(key: string, element: com.carto.core.Variant): void;
				public getId(): number;
				
				public getBounds(): com.carto.core.MapBounds;
				
				
				
				public getMetaDataElement(key: string): com.carto.core.Variant;
				public setId(id: number): void;
								public equals(obj: any): boolean;
				
				public hashCode(): number;
				
				public setMetaData(metaData: com.carto.core.StringVariantMap): void;
				
				public getMetaData(): com.carto.core.StringVariantMap;
				public setVisible(visible: boolean): void;
				public getGeometry(): com.carto.geometry.Geometry;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class VectorElementVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.VectorElementVector>;
				
				public add(x: com.carto.vectorelements.VectorElement): void;
				public get(i: number): com.carto.vectorelements.VectorElement;
				
				public constructor(n: number);
				
				public constructor();
				public size(): number;
				public set(i: number, val: com.carto.vectorelements.VectorElement): void;
								
				
				public capacity(): number;
				public clear(): void;
				public isEmpty(): boolean;
				public reserve(n: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectortiles {
			export class MBVectorTileDecoder extends com.carto.vectortiles.VectorTileDecoder {
				public static class: java.lang.Class<com.carto.vectortiles.MBVectorTileDecoder>;
				public getCartoCSSStyleSet(): com.carto.styles.CartoCSSStyleSet;
				public getStyleParameters(): com.carto.core.StringVector;
				public setCompiledStyleSet(styleSet: com.carto.styles.CompiledStyleSet): void;
				
				
				public setFeatureIdOverride(idOverride: boolean): void;
				
				
				public setStyleParameter(param: string, value: string): boolean;
				public constructor(cartoCSSStyleSet: com.carto.styles.CartoCSSStyleSet);
				public addFallbackFont(fontData: com.carto.core.BinaryData): void;
				public getCompiledStyleSet(): com.carto.styles.CompiledStyleSet;
				
				public getMaxZoom(): number;
				
				
								public setCartoCSSStyleSet(styleSet: com.carto.styles.CartoCSSStyleSet): void;
				public constructor(compiledStyleSet: com.carto.styles.CompiledStyleSet);
				
				public getStyleParameter(param: string): string;
				public isFeatureIdOverride(): boolean;
				public setJSONStyleParameters(params: string): void;
				
				public setStyleParameters(params: com.carto.core.StringMap): void;
				public getMinZoom(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectortiles {
			export class TorqueTileDecoder extends com.carto.vectortiles.VectorTileDecoder {
				public static class: java.lang.Class<com.carto.vectortiles.TorqueTileDecoder>;
				public constructor(styleSet: com.carto.styles.CartoCSSStyleSet);
				public getStyleSet(): com.carto.styles.CartoCSSStyleSet;
				public addFallbackFont(fontData: com.carto.core.BinaryData): void;
				
				
				public getFrameCount(): number;
				public setStyleSet(styleSet: com.carto.styles.CartoCSSStyleSet): void;
				
				
				public getMaxZoom(): number;
				
								
				
				public getResolution(): number;
				
				
				public getAnimationDuration(): number;
				public getMinZoom(): number;
			}
		}
	}
}



declare namespace com {
	export namespace carto {
		export namespace vectortiles {
			export class VectorTileDecoder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectortiles.VectorTileDecoder>;
				
				public addFallbackFont(fontData: com.carto.core.BinaryData): void;
				
				
				
				public getMaxZoom(): number;
				
								
				public equals(obj: any): boolean;
				
				
				public notifyDecoderChanged(): void;
				public hashCode(): number;
				public getMinZoom(): number;
			}
		}
	}
}



//Generics information:

