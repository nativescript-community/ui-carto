/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

declare namespace com {
	export namespace carto {
		export namespace components {
			export class Layers extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.Layers>;
				public swigCMemOwn: boolean;
				public set(index: number, layer: com.carto.layers.Layer): void;
				public remove(layer: com.carto.layers.Layer): boolean;
				public get(index: number): com.carto.layers.Layer;
				public finalize(): void;
				public static getCPtr(obj: com.carto.components.Layers): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public setAll(layers: com.carto.layers.LayerVector): void;
				public insert(index: number, layer: com.carto.layers.Layer): void;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
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
			export class LayersModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.LayersModuleJNI>;
				public static Layers_swigGetRawPtr(param0: number, param1: com.carto.components.Layers): number;
				public static Layers_addAll(param0: number, param1: com.carto.components.Layers, param2: number, param3: com.carto.layers.LayerVector): void;
				public static Layers_remove(param0: number, param1: com.carto.components.Layers, param2: number, param3: com.carto.layers.Layer): boolean;
				public static Layers_count(param0: number, param1: com.carto.components.Layers): number;
				public static Layers_add(param0: number, param1: com.carto.components.Layers, param2: number, param3: com.carto.layers.Layer): void;
				public static Layers_setAll(param0: number, param1: com.carto.components.Layers, param2: number, param3: com.carto.layers.LayerVector): void;
				public static Layers_insert(param0: number, param1: com.carto.components.Layers, param2: number, param3: number, param4: com.carto.layers.Layer): void;
				public constructor();
				public static Layers_get(param0: number, param1: com.carto.components.Layers, param2: number): number;
				public static delete_Layers(param0: number): void;
				public static Layers_clear(param0: number, param1: com.carto.components.Layers): void;
				public static Layers_removeAll(param0: number, param1: com.carto.components.Layers, param2: number, param3: com.carto.layers.LayerVector): boolean;
				public static Layers_set(param0: number, param1: com.carto.components.Layers, param2: number, param3: number, param4: com.carto.layers.Layer): void;
				public static Layers_getAll(param0: number, param1: com.carto.components.Layers): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace components {
			export class Options extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.Options>;
				public swigCMemOwn: boolean;
				public setSkyColor(color: com.carto.graphics.Color): void;
				public isDoubleClickDetection(): boolean;
				public getPivotMode(): com.carto.components.PivotMode;
				public isRotatable(): boolean;
				public setDoubleClickMaxDuration(duration: number): void;
				public setDPI(dpi: number): void;
				public static getCPtr(obj: com.carto.components.Options): number;
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
				public finalize(): void;
				public isUserInput(): boolean;
				public setFieldOfViewY(fovY: number): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getClearColor(): com.carto.graphics.Color;
				public getTiltRange(): com.carto.core.MapRange;
				public delete(): void;
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
				public swigGetRawPtr(): number;
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
			export class OptionsModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.OptionsModuleJNI>;
				public static Options_getPanningMode(param0: number, param1: com.carto.components.Options): number;
				public static Options_getBackgroundBitmap(param0: number, param1: com.carto.components.Options): number;
				public static Options_setBackgroundBitmap(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.graphics.Bitmap): void;
				public static Options_getPivotMode(param0: number, param1: com.carto.components.Options): number;
				public static delete_Options(param0: number): void;
				public static Options_getDPI(param0: number, param1: com.carto.components.Options): number;
				public static Options_setTiltRange(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.core.MapRange): void;
				public static Options_getDrawDistance(param0: number, param1: com.carto.components.Options): number;
				public static Options_setDrawDistance(param0: number, param1: com.carto.components.Options, param2: number): void;
				public constructor();
				public static Options_getFieldOfViewY(param0: number, param1: com.carto.components.Options): number;
				public static Options_isLayersLabelsProcessedInReverseOrder(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_isKineticZoom(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_getSkyColor(param0: number, param1: com.carto.components.Options): number;
				public static Options_setMainLightDirection(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.core.MapVec): void;
				public static Options_setZoomRange(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.core.MapRange): void;
				public static Options_isZoomGestures(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_setTileDrawSize(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_isKineticPan(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_getMainLightColor(param0: number, param1: com.carto.components.Options): number;
				public static Options_getRenderProjectionMode(param0: number, param1: com.carto.components.Options): number;
				public static Options_setAmbientLightColor(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.graphics.Color): void;
				public static Options_getTileThreadPoolSize(param0: number, param1: com.carto.components.Options): number;
				public static Options_setRestrictedPanning(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_setRotatable(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_getClearColor(param0: number, param1: com.carto.components.Options): number;
				public static Options_getTileDrawSize(param0: number, param1: com.carto.components.Options): number;
				public static Options_isKineticRotation(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_setBaseProjection(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.projections.Projection): void;
				public static Options_swigGetRawPtr(param0: number, param1: com.carto.components.Options): number;
				public static Options_isClickTypeDetection(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_setDPI(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_setKineticRotation(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_isRotationGestures(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_getMainLightDirection(param0: number, param1: com.carto.components.Options): number;
				public static Options_isUserInput(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_setKineticZoom(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_getBaseProjection(param0: number, param1: com.carto.components.Options): number;
				public static Options_setUserInput(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_isTiltGestureReversed(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_getTiltRange(param0: number, param1: com.carto.components.Options): number;
				public static Options_getPanBounds(param0: number, param1: com.carto.components.Options): number;
				public static Options_setLongClickDuration(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_setRenderProjectionMode(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_isDoubleClickDetection(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_getDoubleClickMaxDuration(param0: number, param1: com.carto.components.Options): number;
				public static Options_isSeamlessPanning(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_getFocusPointOffset(param0: number, param1: com.carto.components.Options): number;
				public static Options_setPanBounds(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.core.MapBounds): void;
				public static Options_setSkyColor(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.graphics.Color): void;
				public static Options_isRotatable(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_setLayersLabelsProcessedInReverseOrder(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_setSeamlessPanning(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_setDoubleClickMaxDuration(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_setZoomGestures(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_setPivotMode(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_setRotationGestures(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_getAmbientLightColor(param0: number, param1: com.carto.components.Options): number;
				public static Options_setEnvelopeThreadPoolSize(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_setDoubleClickDetection(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_setPanningMode(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_getEnvelopeThreadPoolSize(param0: number, param1: com.carto.components.Options): number;
				public static Options_setKineticPan(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_setFocusPointOffset(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.core.ScreenPos): void;
				public static Options_setFieldOfViewY(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_isRestrictedPanning(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_setTiltGestureReversed(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_setTileThreadPoolSize(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_setClickTypeDetection(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_setClearColor(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.graphics.Color): void;
				public static Options_getZoomRange(param0: number, param1: com.carto.components.Options): number;
				public static Options_getLongClickDuration(param0: number, param1: com.carto.components.Options): number;
				public static Options_setMainLightColor(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.graphics.Color): void;
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
				public swigCMemOwn: boolean;
				public getStreet(): string;
				public static getCPtr(obj: com.carto.core.Address): number;
				public getCountry(): string;
				public finalize(): void;
				public getCounty(): string;
				public getName(): string;
				public getCategories(): com.carto.core.StringVector;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getNeighbourhood(): string;
				public constructor();
				public constructor(country: string, region: string, county: string, locality: string, neighbourhood: string, street: string, postcode: string, houseNumber: string, name: string, categories: com.carto.core.StringVector);
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
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
			export class AddressModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.AddressModuleJNI>;
				public static Address_swigGetRawPtr(param0: number, param1: com.carto.core.Address): number;
				public static Address_getCategories(param0: number, param1: com.carto.core.Address): number;
				public static Address_getPostcode(param0: number, param1: com.carto.core.Address): string;
				public static delete_Address(param0: number): void;
				public static Address_getNeighbourhood(param0: number, param1: com.carto.core.Address): string;
				public static Address_getStreet(param0: number, param1: com.carto.core.Address): string;
				public static Address_getLocality(param0: number, param1: com.carto.core.Address): string;
				public static Address_getCountry(param0: number, param1: com.carto.core.Address): string;
				public static Address_getRegion(param0: number, param1: com.carto.core.Address): string;
				public static Address_toString(param0: number, param1: com.carto.core.Address): string;
				public constructor();
				public static Address_getHouseNumber(param0: number, param1: com.carto.core.Address): string;
				public static Address_getName(param0: number, param1: com.carto.core.Address): string;
				public static new_Address__SWIG_1(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: number, param10: com.carto.core.StringVector): number;
				public static Address_getCounty(param0: number, param1: com.carto.core.Address): string;
				public static Address_equalsInternal(param0: number, param1: com.carto.core.Address, param2: number, param3: com.carto.core.Address): boolean;
				public static new_Address__SWIG_0(): number;
				public static Address_hashCodeInternal(param0: number, param1: com.carto.core.Address): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class BinaryData extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.BinaryData>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public getData(): androidNative.Array<number>;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.core.BinaryData): number;
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
			export class BinaryDataModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.BinaryDataModuleJNI>;
				public static BinaryData_swigGetRawPtr(param0: number, param1: com.carto.core.BinaryData): number;
				public static BinaryData_size(param0: number, param1: com.carto.core.BinaryData): number;
				public static BinaryData_getData(param0: number, param1: com.carto.core.BinaryData): androidNative.Array<number>;
				public static new_BinaryData__SWIG_1(param0: androidNative.Array<number>): number;
				public static BinaryData_toString(param0: number, param1: com.carto.core.BinaryData): string;
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
			export class DoubleVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.DoubleVector>;
				public swigCMemOwn: boolean;
				public set(i: number, val: number): void;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public get(i: number): number;
				public constructor();
				public size(): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public capacity(): number;
				public add(x: number): void;
				public clear(): void;
				public static getCPtr(obj: com.carto.core.DoubleVector): number;
				public isEmpty(): boolean;
				public reserve(n: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class DoubleVectorModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.DoubleVectorModuleJNI>;
				public static new_DoubleVector__SWIG_1(param0: number): number;
				public static new_DoubleVector__SWIG_0(): number;
				public static DoubleVector_swigGetRawPtr(param0: number, param1: com.carto.core.DoubleVector): number;
				public static DoubleVector_get(param0: number, param1: com.carto.core.DoubleVector, param2: number): number;
				public static DoubleVector_clear(param0: number, param1: com.carto.core.DoubleVector): void;
				public static DoubleVector_size(param0: number, param1: com.carto.core.DoubleVector): number;
				public static DoubleVector_reserve(param0: number, param1: com.carto.core.DoubleVector, param2: number): void;
				public constructor();
				public static DoubleVector_add(param0: number, param1: com.carto.core.DoubleVector, param2: number): void;
				public static DoubleVector_set(param0: number, param1: com.carto.core.DoubleVector, param2: number, param3: number): void;
				public static DoubleVector_isEmpty(param0: number, param1: com.carto.core.DoubleVector): boolean;
				public static delete_DoubleVector(param0: number): void;
				public static DoubleVector_capacity(param0: number, param1: com.carto.core.DoubleVector): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class IntVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.IntVector>;
				public swigCMemOwn: boolean;
				public set(i: number, val: number): void;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public get(i: number): number;
				public constructor();
				public size(): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(obj: com.carto.core.IntVector): number;
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
			export class IntVectorModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.IntVectorModuleJNI>;
				public static IntVector_add(param0: number, param1: com.carto.core.IntVector, param2: number): void;
				public static new_IntVector__SWIG_0(): number;
				public static IntVector_size(param0: number, param1: com.carto.core.IntVector): number;
				public static IntVector_isEmpty(param0: number, param1: com.carto.core.IntVector): boolean;
				public static IntVector_set(param0: number, param1: com.carto.core.IntVector, param2: number, param3: number): void;
				public static IntVector_capacity(param0: number, param1: com.carto.core.IntVector): number;
				public static IntVector_clear(param0: number, param1: com.carto.core.IntVector): void;
				public static IntVector_swigGetRawPtr(param0: number, param1: com.carto.core.IntVector): number;
				public constructor();
				public static IntVector_reserve(param0: number, param1: com.carto.core.IntVector, param2: number): void;
				public static IntVector_get(param0: number, param1: com.carto.core.IntVector, param2: number): number;
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
				public static class: java.lang.Class<com.carto.core.MapBounds>;
				public swigCMemOwn: boolean;
				public getMax(): com.carto.core.MapPos;
				public shrinkToIntersection(bounds: com.carto.core.MapBounds): void;
				public static getCPtr(obj: com.carto.core.MapBounds): number;
				public contains(bounds: com.carto.core.MapBounds): boolean;
				public finalize(): void;
				public intersects(bounds: com.carto.core.MapBounds): boolean;
				public getCenter(): com.carto.core.MapPos;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public contains(pos: com.carto.core.MapPos): boolean;
				public constructor();
				public getMin(): com.carto.core.MapPos;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public getDelta(): com.carto.core.MapVec;
				public delete(): void;
				public hashCode(): number;
				public constructor(min: com.carto.core.MapPos, max: com.carto.core.MapPos);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapBoundsModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapBoundsModuleJNI>;
				public static MapBounds_contains__SWIG_1(param0: number, param1: com.carto.core.MapBounds, param2: number, param3: com.carto.core.MapBounds): boolean;
				public static MapBounds_contains__SWIG_0(param0: number, param1: com.carto.core.MapBounds, param2: number, param3: com.carto.core.MapPos): boolean;
				public static MapBounds_toString(param0: number, param1: com.carto.core.MapBounds): string;
				public static MapBounds_swigGetRawPtr(param0: number, param1: com.carto.core.MapBounds): number;
				public static MapBounds_getCenter(param0: number, param1: com.carto.core.MapBounds): number;
				public static MapBounds_getMin(param0: number, param1: com.carto.core.MapBounds): number;
				public static new_MapBounds__SWIG_1(param0: number, param1: com.carto.core.MapPos, param2: number, param3: com.carto.core.MapPos): number;
				public static delete_MapBounds(param0: number): void;
				public constructor();
				public static MapBounds_intersects(param0: number, param1: com.carto.core.MapBounds, param2: number, param3: com.carto.core.MapBounds): boolean;
				public static MapBounds_shrinkToIntersection(param0: number, param1: com.carto.core.MapBounds, param2: number, param3: com.carto.core.MapBounds): void;
				public static MapBounds_getMax(param0: number, param1: com.carto.core.MapBounds): number;
				public static new_MapBounds__SWIG_0(): number;
				public static MapBounds_hashCodeInternal(param0: number, param1: com.carto.core.MapBounds): number;
				public static MapBounds_equalsInternal(param0: number, param1: com.carto.core.MapBounds, param2: number, param3: com.carto.core.MapBounds): boolean;
				public static MapBounds_getDelta(param0: number, param1: com.carto.core.MapBounds): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapEnvelope extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapEnvelope>;
				public swigCMemOwn: boolean;
				public constructor(bounds: com.carto.core.MapBounds);
				public finalize(): void;
				public getBounds(): com.carto.core.MapBounds;
				public intersects(envelope: com.carto.core.MapEnvelope): boolean;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public contains(envelope: com.carto.core.MapEnvelope): boolean;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public static getCPtr(obj: com.carto.core.MapEnvelope): number;
				public delete(): void;
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
			export class MapEnvelopeModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapEnvelopeModuleJNI>;
				public static MapEnvelope_equalsInternal(param0: number, param1: com.carto.core.MapEnvelope, param2: number, param3: com.carto.core.MapEnvelope): boolean;
				public static MapEnvelope_hashCodeInternal(param0: number, param1: com.carto.core.MapEnvelope): number;
				public static MapEnvelope_getBounds(param0: number, param1: com.carto.core.MapEnvelope): number;
				public static MapEnvelope_contains(param0: number, param1: com.carto.core.MapEnvelope, param2: number, param3: com.carto.core.MapEnvelope): boolean;
				public static new_MapEnvelope__SWIG_1(param0: number, param1: com.carto.core.MapBounds): number;
				public static new_MapEnvelope__SWIG_2(param0: number, param1: com.carto.core.MapPosVector): number;
				public static new_MapEnvelope__SWIG_0(): number;
				public static delete_MapEnvelope(param0: number): void;
				public constructor();
				public static MapEnvelope_toString(param0: number, param1: com.carto.core.MapEnvelope): string;
				public static MapEnvelope_swigGetRawPtr(param0: number, param1: com.carto.core.MapEnvelope): number;
				public static MapEnvelope_getConvexHull(param0: number, param1: com.carto.core.MapEnvelope): number;
				public static MapEnvelope_intersects(param0: number, param1: com.carto.core.MapEnvelope, param2: number, param3: com.carto.core.MapEnvelope): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapPos extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapPos>;
				public swigCMemOwn: boolean;
				public constructor(x: number, y: number);
				public constructor(x: number, y: number, z: number);
				public subPos(p: com.carto.core.MapPos): com.carto.core.MapVec;
				public getY(): number;
				public finalize(): void;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public getX(): number;
				public add(v: com.carto.core.MapVec): com.carto.core.MapPos;
				public subVec(v: com.carto.core.MapVec): com.carto.core.MapPos;
				public getZ(): number;
				public static getCPtr(obj: com.carto.core.MapPos): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapPosModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapPosModuleJNI>;
				public static MapPos_add(param0: number, param1: com.carto.core.MapPos, param2: number, param3: com.carto.core.MapVec): number;
				public static MapPosVector_add(param0: number, param1: com.carto.core.MapPosVector, param2: number, param3: com.carto.core.MapPos): void;
				public static MapPosVector_set(param0: number, param1: com.carto.core.MapPosVector, param2: number, param3: number, param4: com.carto.core.MapPos): void;
				public static new_MapPosVectorVector__SWIG_0(): number;
				public static MapPosVectorVector_set(param0: number, param1: com.carto.core.MapPosVectorVector, param2: number, param3: number, param4: com.carto.core.MapPosVector): void;
				public static new_MapPosVectorVector__SWIG_1(param0: number): number;
				public static delete_MapPosVectorVector(param0: number): void;
				public static MapPos_getY(param0: number, param1: com.carto.core.MapPos): number;
				public static MapPosVector_clear(param0: number, param1: com.carto.core.MapPosVector): void;
				public static MapPos_subVec(param0: number, param1: com.carto.core.MapPos, param2: number, param3: com.carto.core.MapVec): number;
				public constructor();
				public static MapPosVector_swigGetRawPtr(param0: number, param1: com.carto.core.MapPosVector): number;
				public static MapPosVectorVector_swigGetRawPtr(param0: number, param1: com.carto.core.MapPosVectorVector): number;
				public static MapPosVectorVector_capacity(param0: number, param1: com.carto.core.MapPosVectorVector): number;
				public static MapPos_swigGetRawPtr(param0: number, param1: com.carto.core.MapPos): number;
				public static MapPosVectorVector_add(param0: number, param1: com.carto.core.MapPosVectorVector, param2: number, param3: com.carto.core.MapPosVector): void;
				public static MapPosVectorVector_reserve(param0: number, param1: com.carto.core.MapPosVectorVector, param2: number): void;
				public static new_MapPos__SWIG_2(param0: number, param1: number, param2: number): number;
				public static MapPos_getX(param0: number, param1: com.carto.core.MapPos): number;
				public static MapPosVector_reserve(param0: number, param1: com.carto.core.MapPosVector, param2: number): void;
				public static MapPos_getZ(param0: number, param1: com.carto.core.MapPos): number;
				public static new_MapPosVector__SWIG_1(param0: number): number;
				public static MapPosVectorVector_size(param0: number, param1: com.carto.core.MapPosVectorVector): number;
				public static MapPosVector_isEmpty(param0: number, param1: com.carto.core.MapPosVector): boolean;
				public static MapPosVectorVector_get(param0: number, param1: com.carto.core.MapPosVectorVector, param2: number): number;
				public static MapPosVectorVector_clear(param0: number, param1: com.carto.core.MapPosVectorVector): void;
				public static MapPos_subPos(param0: number, param1: com.carto.core.MapPos, param2: number, param3: com.carto.core.MapPos): number;
				public static MapPosVector_size(param0: number, param1: com.carto.core.MapPosVector): number;
				public static delete_MapPosVector(param0: number): void;
				public static MapPos_hashCodeInternal(param0: number, param1: com.carto.core.MapPos): number;
				public static MapPosVector_get(param0: number, param1: com.carto.core.MapPosVector, param2: number): number;
				public static MapPosVector_capacity(param0: number, param1: com.carto.core.MapPosVector): number;
				public static delete_MapPos(param0: number): void;
				public static MapPos_toString(param0: number, param1: com.carto.core.MapPos): string;
				public static MapPosVectorVector_isEmpty(param0: number, param1: com.carto.core.MapPosVectorVector): boolean;
				public static new_MapPosVector__SWIG_0(): number;
				public static new_MapPos__SWIG_0(): number;
				public static new_MapPos__SWIG_1(param0: number, param1: number): number;
				public static MapPos_equalsInternal(param0: number, param1: com.carto.core.MapPos, param2: number, param3: com.carto.core.MapPos): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapPosVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapPosVector>;
				public swigCMemOwn: boolean;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public static getCPtr(obj: com.carto.core.MapPosVector): number;
				public get(i: number): com.carto.core.MapPos;
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public add(x: com.carto.core.MapPosVector): void;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public set(i: number, val: com.carto.core.MapPosVector): void;
				public capacity(): number;
				public static getCPtr(obj: com.carto.core.MapPosVectorVector): number;
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
				public swigCMemOwn: boolean;
				public getMin(): number;
				public length(): number;
				public finalize(): void;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public getMax(): number;
				public swigGetRawPtr(): number;
				public constructor(min: number, max: number);
				public equals(obj: any): boolean;
				public inRange(value: number): boolean;
				public delete(): void;
				public hashCode(): number;
				public getMidrange(): number;
				public static getCPtr(obj: com.carto.core.MapRange): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapRangeModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapRangeModuleJNI>;
				public static MapRange_getMin(param0: number, param1: com.carto.core.MapRange): number;
				public static MapRange_toString(param0: number, param1: com.carto.core.MapRange): string;
				public static new_MapRange__SWIG_0(): number;
				public static MapRange_getMax(param0: number, param1: com.carto.core.MapRange): number;
				public static new_MapRange__SWIG_1(param0: number, param1: number): number;
				public static MapRange_length(param0: number, param1: com.carto.core.MapRange): number;
				public static MapRange_equalsInternal(param0: number, param1: com.carto.core.MapRange, param2: number, param3: com.carto.core.MapRange): boolean;
				public constructor();
				public static MapRange_hashCodeInternal(param0: number, param1: com.carto.core.MapRange): number;
				public static MapRange_inRange(param0: number, param1: com.carto.core.MapRange, param2: number): boolean;
				public static MapRange_swigGetRawPtr(param0: number, param1: com.carto.core.MapRange): number;
				public static MapRange_getMidrange(param0: number, param1: com.carto.core.MapRange): number;
				public static delete_MapRange(param0: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapTile extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapTile>;
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.core.MapTile): number;
				public getTileId(): number;
				public getZoom(): number;
				public getY(): number;
				public finalize(): void;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public constructor(x: number, y: number, zoom: number, frameNr: number);
				public delete(): void;
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
			export class MapTileModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapTileModuleJNI>;
				public static delete_MapTile(param0: number): void;
				public static MapTile_getY(param0: number, param1: com.carto.core.MapTile): number;
				public static MapTile_getTileId(param0: number, param1: com.carto.core.MapTile): number;
				public static MapTile_toString(param0: number, param1: com.carto.core.MapTile): string;
				public static MapTile_equalsInternal(param0: number, param1: com.carto.core.MapTile, param2: number, param3: com.carto.core.MapTile): boolean;
				public static MapTile_getX(param0: number, param1: com.carto.core.MapTile): number;
				public constructor();
				public static MapTile_hashCodeInternal(param0: number, param1: com.carto.core.MapTile): number;
				public static MapTile_getZoom(param0: number, param1: com.carto.core.MapTile): number;
				public static new_MapTile__SWIG_1(param0: number, param1: number, param2: number, param3: number): number;
				public static new_MapTile__SWIG_0(): number;
				public static MapTile_swigGetRawPtr(param0: number, param1: com.carto.core.MapTile): number;
				public static MapTile_getFrameNr(param0: number, param1: com.carto.core.MapTile): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class MapVec extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapVec>;
				public swigCMemOwn: boolean;
				public constructor(x: number, y: number);
				public sub(v: com.carto.core.MapVec): com.carto.core.MapVec;
				public constructor(x: number, y: number, z: number);
				public getY(): number;
				public length(): number;
				public finalize(): void;
				public crossProduct3D(v: com.carto.core.MapVec): com.carto.core.MapVec;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public crossProduct2D(v: com.carto.core.MapVec): number;
				public constructor();
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public add(v: com.carto.core.MapVec): com.carto.core.MapVec;
				public dotProduct(v: com.carto.core.MapVec): number;
				public hashCode(): number;
				public getX(): number;
				public static getCPtr(obj: com.carto.core.MapVec): number;
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
			export class MapVecModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapVecModuleJNI>;
				public static MapVec_getNormalized(param0: number, param1: com.carto.core.MapVec): number;
				public static MapVec_crossProduct2D(param0: number, param1: com.carto.core.MapVec, param2: number, param3: com.carto.core.MapVec): number;
				public static new_MapVec__SWIG_2(param0: number, param1: number, param2: number): number;
				public static MapVec_length(param0: number, param1: com.carto.core.MapVec): number;
				public static MapVec_mul(param0: number, param1: com.carto.core.MapVec, param2: number): number;
				public static new_MapVec__SWIG_0(): number;
				public static MapVec_crossProduct3D(param0: number, param1: com.carto.core.MapVec, param2: number, param3: com.carto.core.MapVec): number;
				public static MapVec_hashCodeInternal(param0: number, param1: com.carto.core.MapVec): number;
				public static MapVec_getY(param0: number, param1: com.carto.core.MapVec): number;
				public constructor();
				public static MapVec_dotProduct(param0: number, param1: com.carto.core.MapVec, param2: number, param3: com.carto.core.MapVec): number;
				public static MapVec_getX(param0: number, param1: com.carto.core.MapVec): number;
				public static MapVec_swigGetRawPtr(param0: number, param1: com.carto.core.MapVec): number;
				public static MapVec_add(param0: number, param1: com.carto.core.MapVec, param2: number, param3: com.carto.core.MapVec): number;
				public static MapVec_equalsInternal(param0: number, param1: com.carto.core.MapVec, param2: number, param3: com.carto.core.MapVec): boolean;
				public static new_MapVec__SWIG_1(param0: number, param1: number): number;
				public static delete_MapVec(param0: number): void;
				public static MapVec_toString(param0: number, param1: com.carto.core.MapVec): string;
				public static MapVec_getZ(param0: number, param1: com.carto.core.MapVec): number;
				public static MapVec_sub(param0: number, param1: com.carto.core.MapVec, param2: number, param3: com.carto.core.MapVec): number;
				public static MapVec_div(param0: number, param1: com.carto.core.MapVec, param2: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class ScreenBounds extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.ScreenBounds>;
				public swigCMemOwn: boolean;
				public getHeight(): number;
				public getMin(): com.carto.core.ScreenPos;
				public finalize(): void;
				public contains(bounds: com.carto.core.ScreenBounds): boolean;
				public constructor(min: com.carto.core.ScreenPos, max: com.carto.core.ScreenPos);
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public intersects(bounds: com.carto.core.ScreenBounds): boolean;
				public getCenter(): com.carto.core.ScreenPos;
				public swigGetRawPtr(): number;
				public getWidth(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public static getCPtr(obj: com.carto.core.ScreenBounds): number;
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
			export class ScreenBoundsModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.ScreenBoundsModuleJNI>;
				public static new_ScreenBounds__SWIG_0(): number;
				public static ScreenBounds_getWidth(param0: number, param1: com.carto.core.ScreenBounds): number;
				public static ScreenBounds_equalsInternal(param0: number, param1: com.carto.core.ScreenBounds, param2: number, param3: com.carto.core.ScreenBounds): boolean;
				public static ScreenBounds_getCenter(param0: number, param1: com.carto.core.ScreenBounds): number;
				public static new_ScreenBounds__SWIG_1(param0: number, param1: com.carto.core.ScreenPos, param2: number, param3: com.carto.core.ScreenPos): number;
				public static ScreenBounds_intersects(param0: number, param1: com.carto.core.ScreenBounds, param2: number, param3: com.carto.core.ScreenBounds): boolean;
				public static ScreenBounds_getMax(param0: number, param1: com.carto.core.ScreenBounds): number;
				public static ScreenBounds_toString(param0: number, param1: com.carto.core.ScreenBounds): string;
				public static ScreenBounds_swigGetRawPtr(param0: number, param1: com.carto.core.ScreenBounds): number;
				public constructor();
				public static delete_ScreenBounds(param0: number): void;
				public static ScreenBounds_contains__SWIG_0(param0: number, param1: com.carto.core.ScreenBounds, param2: number, param3: com.carto.core.ScreenPos): boolean;
				public static ScreenBounds_getMin(param0: number, param1: com.carto.core.ScreenBounds): number;
				public static ScreenBounds_hashCodeInternal(param0: number, param1: com.carto.core.ScreenBounds): number;
				public static ScreenBounds_getHeight(param0: number, param1: com.carto.core.ScreenBounds): number;
				public static ScreenBounds_contains__SWIG_1(param0: number, param1: com.carto.core.ScreenBounds, param2: number, param3: com.carto.core.ScreenBounds): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class ScreenPos extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.ScreenPos>;
				public swigCMemOwn: boolean;
				public constructor(x: number, y: number);
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public static getCPtr(obj: com.carto.core.ScreenPos): number;
				public delete(): void;
				public hashCode(): number;
				public getX(): number;
				public getY(): number;
				public finalize(): void;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class ScreenPosModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.ScreenPosModuleJNI>;
				public static new_ScreenPos__SWIG_0(): number;
				public static ScreenPos_getY(param0: number, param1: com.carto.core.ScreenPos): number;
				public static ScreenPos_getX(param0: number, param1: com.carto.core.ScreenPos): number;
				public static ScreenPosVector_swigGetRawPtr(param0: number, param1: com.carto.core.ScreenPosVector): number;
				public static delete_ScreenPos(param0: number): void;
				public static new_ScreenPosVector__SWIG_1(param0: number): number;
				public static ScreenPosVector_isEmpty(param0: number, param1: com.carto.core.ScreenPosVector): boolean;
				public static new_ScreenPos__SWIG_1(param0: number, param1: number): number;
				public static ScreenPos_swigGetRawPtr(param0: number, param1: com.carto.core.ScreenPos): number;
				public constructor();
				public static ScreenPosVector_set(param0: number, param1: com.carto.core.ScreenPosVector, param2: number, param3: number, param4: com.carto.core.ScreenPos): void;
				public static ScreenPos_hashCodeInternal(param0: number, param1: com.carto.core.ScreenPos): number;
				public static ScreenPosVector_get(param0: number, param1: com.carto.core.ScreenPosVector, param2: number): number;
				public static ScreenPos_equalsInternal(param0: number, param1: com.carto.core.ScreenPos, param2: number, param3: com.carto.core.ScreenPos): boolean;
				public static ScreenPos_toString(param0: number, param1: com.carto.core.ScreenPos): string;
				public static ScreenPosVector_capacity(param0: number, param1: com.carto.core.ScreenPosVector): number;
				public static delete_ScreenPosVector(param0: number): void;
				public static new_ScreenPosVector__SWIG_0(): number;
				public static ScreenPosVector_reserve(param0: number, param1: com.carto.core.ScreenPosVector, param2: number): void;
				public static ScreenPosVector_clear(param0: number, param1: com.carto.core.ScreenPosVector): void;
				public static ScreenPosVector_size(param0: number, param1: com.carto.core.ScreenPosVector): number;
				public static ScreenPosVector_add(param0: number, param1: com.carto.core.ScreenPosVector, param2: number, param3: com.carto.core.ScreenPos): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class ScreenPosVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.ScreenPosVector>;
				public swigCMemOwn: boolean;
				public add(x: com.carto.core.ScreenPos): void;
				public finalize(): void;
				public set(i: number, val: com.carto.core.ScreenPos): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public static getCPtr(obj: com.carto.core.ScreenPosVector): number;
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.core.StringMap): number;
				public get(key: string): string;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public constructor(arg0: com.carto.core.StringMap);
				public swigGetRawPtr(): number;
				public delete(): void;
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
			export class StringMapModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.StringMapModuleJNI>;
				public static StringMap_get_key(param0: number, param1: com.carto.core.StringMap, param2: number): string;
				public static StringMap_swigGetRawPtr(param0: number, param1: com.carto.core.StringMap): number;
				public static StringMap_set(param0: number, param1: com.carto.core.StringMap, param2: string, param3: string): void;
				public static StringMap_size(param0: number, param1: com.carto.core.StringMap): number;
				public static delete_StringMap(param0: number): void;
				public static new_StringMap__SWIG_0(): number;
				public static new_StringMap__SWIG_1(param0: number, param1: com.carto.core.StringMap): number;
				public constructor();
				public static StringMap_get(param0: number, param1: com.carto.core.StringMap, param2: string): string;
				public static StringMap_del(param0: number, param1: com.carto.core.StringMap, param2: string): void;
				public static StringMap_empty(param0: number, param1: com.carto.core.StringMap): boolean;
				public static StringMap_has_key(param0: number, param1: com.carto.core.StringMap, param2: string): boolean;
				public static StringMap_clear(param0: number, param1: com.carto.core.StringMap): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class StringVariantMap extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.StringVariantMap>;
				public swigCMemOwn: boolean;
				public set(key: string, x: com.carto.core.Variant): void;
				public finalize(): void;
				public get(key: string): com.carto.core.Variant;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.core.StringVariantMap): number;
				public constructor();
				public size(): number;
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public finalize(): void;
				public set(i: number, val: string): void;
				public constructor(n: number);
				public static getCPtr(obj: com.carto.core.StringVector): number;
				public add(x: string): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public swigGetRawPtr(): number;
				public delete(): void;
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
			export class StringVectorModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.StringVectorModuleJNI>;
				public static StringVector_add(param0: number, param1: com.carto.core.StringVector, param2: string): void;
				public static delete_StringVector(param0: number): void;
				public static new_StringVector__SWIG_1(param0: number): number;
				public static StringVector_get(param0: number, param1: com.carto.core.StringVector, param2: number): string;
				public static StringVector_set(param0: number, param1: com.carto.core.StringVector, param2: number, param3: string): void;
				public static new_StringVector__SWIG_0(): number;
				public static StringVector_capacity(param0: number, param1: com.carto.core.StringVector): number;
				public constructor();
				public static StringVector_reserve(param0: number, param1: com.carto.core.StringVector, param2: number): void;
				public static StringVector_swigGetRawPtr(param0: number, param1: com.carto.core.StringVector): number;
				public static StringVector_size(param0: number, param1: com.carto.core.StringVector): number;
				public static StringVector_isEmpty(param0: number, param1: com.carto.core.StringVector): boolean;
				public static StringVector_clear(param0: number, param1: com.carto.core.StringVector): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class Variant extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.Variant>;
				public swigCMemOwn: boolean;
				public constructor(longVal: number);
				public getBool(): boolean;
				public finalize(): void;
				public getObjectKeys(): com.carto.core.StringVector;
				public constructor(boolVal: boolean);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public containsObjectKey(key: string): boolean;
				public delete(): void;
				public constructor(string: string);
				public hashCode(): number;
				public getType(): com.carto.core.VariantType;
				public constructor(doubleVal: number);
				public getString(): string;
				public toString(): string;
				public constructor(object: com.carto.core.StringVariantMap);
				public swigGetRawPtr(): number;
				public getDouble(): number;
				public equals(obj: any): boolean;
				public getObjectElement(key: string): com.carto.core.Variant;
				public static fromString(str: string): com.carto.core.Variant;
				public static getCPtr(obj: com.carto.core.Variant): number;
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
				public swigCMemOwn: boolean;
				public buildVariant(): com.carto.core.Variant;
				public addDouble(val: number): void;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.core.VariantArrayBuilder): number;
				public constructor();
				public addString(str: string): void;
				public swigGetRawPtr(): number;
				public addBool(val: boolean): void;
				public equals(obj: any): boolean;
				public addLong(val: number): void;
				public delete(): void;
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
			export class VariantArrayBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.VariantArrayBuilderModuleJNI>;
				public static VariantArrayBuilder_clear(param0: number, param1: com.carto.core.VariantArrayBuilder): void;
				public static VariantArrayBuilder_addString(param0: number, param1: com.carto.core.VariantArrayBuilder, param2: string): void;
				public static VariantArrayBuilder_addBool(param0: number, param1: com.carto.core.VariantArrayBuilder, param2: boolean): void;
				public static VariantArrayBuilder_addDouble(param0: number, param1: com.carto.core.VariantArrayBuilder, param2: number): void;
				public static VariantArrayBuilder_swigGetRawPtr(param0: number, param1: com.carto.core.VariantArrayBuilder): number;
				public static VariantArrayBuilder_buildVariant(param0: number, param1: com.carto.core.VariantArrayBuilder): number;
				public static delete_VariantArrayBuilder(param0: number): void;
				public static VariantArrayBuilder_addLong(param0: number, param1: com.carto.core.VariantArrayBuilder, param2: number): void;
				public static VariantArrayBuilder_addVariant(param0: number, param1: com.carto.core.VariantArrayBuilder, param2: number, param3: com.carto.core.Variant): void;
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
				public static class: java.lang.Class<com.carto.core.VariantModuleJNI>;
				public static VariantVector_size(param0: number, param1: com.carto.core.VariantVector): number;
				public static VariantVector_add(param0: number, param1: com.carto.core.VariantVector, param2: number, param3: com.carto.core.Variant): void;
				public static delete_VariantVector(param0: number): void;
				public static VariantVector_clear(param0: number, param1: com.carto.core.VariantVector): void;
				public static Variant_getObjectKeys(param0: number, param1: com.carto.core.Variant): number;
				public static Variant_getLong(param0: number, param1: com.carto.core.Variant): number;
				public static Variant_toString(param0: number, param1: com.carto.core.Variant): string;
				public static VariantVector_capacity(param0: number, param1: com.carto.core.VariantVector): number;
				public static Variant_getObjectElement(param0: number, param1: com.carto.core.Variant, param2: string): number;
				public static new_Variant__SWIG_1(param0: boolean): number;
				public static StringVariantMap_set(param0: number, param1: com.carto.core.StringVariantMap, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static delete_Variant(param0: number): void;
				public constructor();
				public static VariantVector_reserve(param0: number, param1: com.carto.core.VariantVector, param2: number): void;
				public static new_StringVariantMap__SWIG_0(): number;
				public static StringVariantMap_has_key(param0: number, param1: com.carto.core.StringVariantMap, param2: string): boolean;
				public static new_VariantVector__SWIG_0(): number;
				public static Variant_swigGetRawPtr(param0: number, param1: com.carto.core.Variant): number;
				public static new_Variant__SWIG_4(param0: string): number;
				public static Variant_containsObjectKey(param0: number, param1: com.carto.core.Variant, param2: string): boolean;
				public static Variant_equalsInternal(param0: number, param1: com.carto.core.Variant, param2: number, param3: com.carto.core.Variant): boolean;
				public static VariantVector_get(param0: number, param1: com.carto.core.VariantVector, param2: number): number;
				public static StringVariantMap_clear(param0: number, param1: com.carto.core.StringVariantMap): void;
				public static StringVariantMap_get_key(param0: number, param1: com.carto.core.StringVariantMap, param2: number): string;
				public static Variant_hashCodeInternal(param0: number, param1: com.carto.core.Variant): number;
				public static VariantVector_swigGetRawPtr(param0: number, param1: com.carto.core.VariantVector): number;
				public static StringVariantMap_get(param0: number, param1: com.carto.core.StringVariantMap, param2: string): number;
				public static StringVariantMap_swigGetRawPtr(param0: number, param1: com.carto.core.StringVariantMap): number;
				public static new_VariantVector__SWIG_1(param0: number): number;
				public static delete_StringVariantMap(param0: number): void;
				public static new_Variant__SWIG_5(param0: number, param1: com.carto.core.VariantVector): number;
				public static new_Variant__SWIG_6(param0: number, param1: com.carto.core.StringVariantMap): number;
				public static new_Variant__SWIG_0(): number;
				public static StringVariantMap_del(param0: number, param1: com.carto.core.StringVariantMap, param2: string): void;
				public static Variant_getType(param0: number, param1: com.carto.core.Variant): number;
				public static Variant_getString(param0: number, param1: com.carto.core.Variant): string;
				public static VariantVector_isEmpty(param0: number, param1: com.carto.core.VariantVector): boolean;
				public static Variant_fromString(param0: string): number;
				public static Variant_getDouble(param0: number, param1: com.carto.core.Variant): number;
				public static Variant_getArraySize(param0: number, param1: com.carto.core.Variant): number;
				public static StringVariantMap_empty(param0: number, param1: com.carto.core.StringVariantMap): boolean;
				public static new_Variant__SWIG_2(param0: number): number;
				public static VariantVector_set(param0: number, param1: com.carto.core.VariantVector, param2: number, param3: number, param4: com.carto.core.Variant): void;
				public static new_Variant__SWIG_3(param0: number): number;
				public static Variant_getArrayElement(param0: number, param1: com.carto.core.Variant, param2: number): number;
				public static new_StringVariantMap__SWIG_1(param0: number, param1: com.carto.core.StringVariantMap): number;
				public static StringVariantMap_size(param0: number, param1: com.carto.core.StringVariantMap): number;
				public static Variant_getBool(param0: number, param1: com.carto.core.Variant): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class VariantObjectBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.VariantObjectBuilder>;
				public swigCMemOwn: boolean;
				public setLong(key: string, val: number): void;
				public setDouble(key: string, val: number): void;
				public buildVariant(): com.carto.core.Variant;
				public setVariant(key: string, var_: com.carto.core.Variant): void;
				public finalize(): void;
				public setString(key: string, str: string): void;
				public static getCPtr(obj: com.carto.core.VariantObjectBuilder): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public setBool(key: string, val: boolean): void;
				public constructor();
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public clear(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace core {
			export class VariantObjectBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.VariantObjectBuilderModuleJNI>;
				public static VariantObjectBuilder_setBool(param0: number, param1: com.carto.core.VariantObjectBuilder, param2: string, param3: boolean): void;
				public static VariantObjectBuilder_clear(param0: number, param1: com.carto.core.VariantObjectBuilder): void;
				public static VariantObjectBuilder_swigGetRawPtr(param0: number, param1: com.carto.core.VariantObjectBuilder): number;
				public static VariantObjectBuilder_setLong(param0: number, param1: com.carto.core.VariantObjectBuilder, param2: string, param3: number): void;
				public static VariantObjectBuilder_setDouble(param0: number, param1: com.carto.core.VariantObjectBuilder, param2: string, param3: number): void;
				public static delete_VariantObjectBuilder(param0: number): void;
				public static VariantObjectBuilder_setVariant(param0: number, param1: com.carto.core.VariantObjectBuilder, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static new_VariantObjectBuilder(): number;
				public static VariantObjectBuilder_setString(param0: number, param1: com.carto.core.VariantObjectBuilder, param2: string, param3: string): void;
				public constructor();
				public static VariantObjectBuilder_buildVariant(param0: number, param1: com.carto.core.VariantObjectBuilder): number;
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
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.core.VariantVector): number;
				public finalize(): void;
				public get(i: number): com.carto.core.Variant;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public set(i: number, val: com.carto.core.Variant): void;
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(minZoom: number, maxZoom: number);
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public swigGetDirectorObject(): any;
				public constructor();
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.AssetTileDataSource;
				public swigGetRawPtr(): number;
				public buildAssetPath(basePath: string, tile: com.carto.core.MapTile): string;
				public constructor(minZoom: number, maxZoom: number, basePath: string);
				public delete(): void;
				public swigTakeOwnership(): void;
				public static getCPtr(obj: com.carto.datasources.AssetTileDataSource): number;
				public loadTile(tile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class AssetTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.AssetTileDataSourceModuleJNI>;
				public static SwigDirector_AssetTileDataSource_getMaxZoom(self: com.carto.datasources.AssetTileDataSource): number;
				public static SwigDirector_AssetTileDataSource_getMinZoom(self: com.carto.datasources.AssetTileDataSource): number;
				public static AssetTileDataSource_loadTileSwigExplicitAssetTileDataSource(param0: number, param1: com.carto.datasources.AssetTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static SwigDirector_AssetTileDataSource_buildAssetPath(self: com.carto.datasources.AssetTileDataSource, basePath: string, tile: number): string;
				public static delete_AssetTileDataSource(param0: number): void;
				public static AssetTileDataSource_director_connect(param0: com.carto.datasources.AssetTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static new_AssetTileDataSource(param0: number, param1: number, param2: string): number;
				public static AssetTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_AssetTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.AssetTileDataSource): number;
				public static SwigDirector_AssetTileDataSource_loadTile(self: com.carto.datasources.AssetTileDataSource, tile: number): number;
				public constructor();
				public static AssetTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.AssetTileDataSource): string;
				public static AssetTileDataSource_change_ownership(param0: com.carto.datasources.AssetTileDataSource, param1: number, param2: boolean): void;
				public static AssetTileDataSource_loadTile(param0: number, param1: com.carto.datasources.AssetTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static SwigDirector_AssetTileDataSource_notifyTilesChanged(self: com.carto.datasources.AssetTileDataSource, removeTiles: boolean): void;
				public static AssetTileDataSource_buildAssetPath(param0: number, param1: com.carto.datasources.AssetTileDataSource, param2: string, param3: number, param4: com.carto.core.MapTile): string;
				public static AssetTileDataSource_buildAssetPathSwigExplicitAssetTileDataSource(param0: number, param1: com.carto.datasources.AssetTileDataSource, param2: string, param3: number, param4: com.carto.core.MapTile): string;
				public static AssetTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.AssetTileDataSource): any;
				public static SwigDirector_AssetTileDataSource_getDataExtent(self: com.carto.datasources.AssetTileDataSource): number;
				public static AssetTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.AssetTileDataSource): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class BitmapOverlayRasterTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.BitmapOverlayRasterTileDataSource>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(minZoom: number, maxZoom: number);
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public static getCPtr(obj: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public constructor(minZoom: number, maxZoom: number, bitmap: com.carto.graphics.Bitmap, projection: com.carto.projections.Projection, mapPoses: com.carto.core.MapPosVector, bitmapPoses: com.carto.core.ScreenPosVector);
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.BitmapOverlayRasterTileDataSource;
				public getDataExtent(): com.carto.core.MapBounds;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class BitmapOverlayRasterTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.BitmapOverlayRasterTileDataSourceModuleJNI>;
				public static new_BitmapOverlayRasterTileDataSource(param0: number, param1: number, param2: number, param3: com.carto.graphics.Bitmap, param4: number, param5: com.carto.projections.Projection, param6: number, param7: com.carto.core.MapPosVector, param8: number, param9: com.carto.core.ScreenPosVector): number;
				public static BitmapOverlayRasterTileDataSource_loadTile(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static BitmapOverlayRasterTileDataSource_change_ownership(param0: com.carto.datasources.BitmapOverlayRasterTileDataSource, param1: number, param2: boolean): void;
				public static BitmapOverlayRasterTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource): string;
				public static SwigDirector_BitmapOverlayRasterTileDataSource_getMaxZoom(self: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public static BitmapOverlayRasterTileDataSource_loadTileSwigExplicitBitmapOverlayRasterTileDataSource(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static SwigDirector_BitmapOverlayRasterTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public constructor();
				public static BitmapOverlayRasterTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public static SwigDirector_BitmapOverlayRasterTileDataSource_notifyTilesChanged(self: com.carto.datasources.BitmapOverlayRasterTileDataSource, removeTiles: boolean): void;
				public static delete_BitmapOverlayRasterTileDataSource(param0: number): void;
				public static SwigDirector_BitmapOverlayRasterTileDataSource_getDataExtent(self: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public static BitmapOverlayRasterTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_BitmapOverlayRasterTileDataSource_getMinZoom(self: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public static BitmapOverlayRasterTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public static BitmapOverlayRasterTileDataSource_getDataExtentSwigExplicitBitmapOverlayRasterTileDataSource(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public static BitmapOverlayRasterTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource): any;
				public static BitmapOverlayRasterTileDataSource_director_connect(param0: com.carto.datasources.BitmapOverlayRasterTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_BitmapOverlayRasterTileDataSource_loadTile(self: com.carto.datasources.BitmapOverlayRasterTileDataSource, mapTile: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class CacheTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.CacheTileDataSource>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(minZoom: number, maxZoom: number);
				public static getCPtr(obj: com.carto.datasources.CacheTileDataSource): number;
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.CacheTileDataSource;
				public finalize(): void;
				public getCapacity(): number;
				public setCapacity(capacityInBytes: number): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getDataSource(): com.carto.datasources.TileDataSource;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public notifyTilesChanged(removeTiles: boolean): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public clear(): void;
				public swigTakeOwnership(): void;
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
			export class CacheTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.CacheTileDataSourceModuleJNI>;
				public static CacheTileDataSource_getMinZoom(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static SwigDirector_CacheTileDataSource_getMinZoom(self: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_getMaxZoomSwigExplicitCacheTileDataSource(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static SwigDirector_CacheTileDataSource_getCapacity(self: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_getMinZoomSwigExplicitCacheTileDataSource(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_clear(param0: number, param1: com.carto.datasources.CacheTileDataSource): void;
				public static CacheTileDataSource_director_connect(param0: com.carto.datasources.CacheTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static CacheTileDataSource_change_ownership(param0: com.carto.datasources.CacheTileDataSource, param1: number, param2: boolean): void;
				public constructor();
				public static SwigDirector_CacheTileDataSource_getMaxZoom(self: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_notifyTilesChanged(param0: number, param1: com.carto.datasources.CacheTileDataSource, param2: boolean): void;
				public static SwigDirector_CacheTileDataSource_loadTile(self: com.carto.datasources.CacheTileDataSource, tile: number): number;
				public static CacheTileDataSource_getDataExtentSwigExplicitCacheTileDataSource(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_getDataSource(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_getCapacity(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static delete_CacheTileDataSource(param0: number): void;
				public static SwigDirector_CacheTileDataSource_setCapacity(self: com.carto.datasources.CacheTileDataSource, capacityInBytes: number): void;
				public static new_CacheTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static CacheTileDataSource_getMaxZoom(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static SwigDirector_CacheTileDataSource_notifyTilesChanged(self: com.carto.datasources.CacheTileDataSource, removeTiles: boolean): void;
				public static CacheTileDataSource_notifyTilesChangedSwigExplicitCacheTileDataSource(param0: number, param1: com.carto.datasources.CacheTileDataSource, param2: boolean): void;
				public static CacheTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static SwigDirector_CacheTileDataSource_clear(self: com.carto.datasources.CacheTileDataSource): void;
				public static CacheTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.CacheTileDataSource): string;
				public static CacheTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_CacheTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.CacheTileDataSource): number;
				public static SwigDirector_CacheTileDataSource_getDataExtent(self: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_setCapacity(param0: number, param1: com.carto.datasources.CacheTileDataSource, param2: number): void;
				public static CacheTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.CacheTileDataSource): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class CombinedTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.CombinedTileDataSource>;
				public swigReleaseOwnership(): void;
				public static getCPtr(obj: com.carto.datasources.CombinedTileDataSource): number;
				public swigDirectorDisconnect(): void;
				public constructor(minZoom: number, maxZoom: number);
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(dataSource1: com.carto.datasources.TileDataSource, dataSource2: com.carto.datasources.TileDataSource, zoomLevel: number);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.CombinedTileDataSource;
				public swigTakeOwnership(): void;
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
			export class CombinedTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.CombinedTileDataSourceModuleJNI>;
				public static SwigDirector_CombinedTileDataSource_loadTile(self: com.carto.datasources.CombinedTileDataSource, tile: number): number;
				public static SwigDirector_CombinedTileDataSource_notifyTilesChanged(self: com.carto.datasources.CombinedTileDataSource, removeTiles: boolean): void;
				public static CombinedTileDataSource_getDataExtentSwigExplicitCombinedTileDataSource(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static CombinedTileDataSource_getMaxZoom(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.CombinedTileDataSource): string;
				public static SwigDirector_CombinedTileDataSource_getMaxZoom(self: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_getMinZoomSwigExplicitCombinedTileDataSource(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public constructor();
				public static new_CombinedTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.datasources.TileDataSource, param4: number): number;
				public static CombinedTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.CombinedTileDataSource): any;
				public static SwigDirector_CombinedTileDataSource_getDataExtent(self: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_director_connect(param0: com.carto.datasources.CombinedTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static CombinedTileDataSource_getMaxZoomSwigExplicitCombinedTileDataSource(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public static SwigDirector_CombinedTileDataSource_getMinZoom(self: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_change_ownership(param0: com.carto.datasources.CombinedTileDataSource, param1: number, param2: boolean): void;
				public static delete_CombinedTileDataSource(param0: number): void;
				public static CombinedTileDataSource_getMinZoom(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_loadTileSwigExplicitCombinedTileDataSource(param0: number, param1: com.carto.datasources.CombinedTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static SwigDirector_CombinedTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_loadTile(param0: number, param1: com.carto.datasources.CombinedTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static CombinedTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class GeoJSONVectorTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.GeoJSONVectorTileDataSource>;
				public swigDirectorDisconnect(): void;
				public updateGeoJSONFeature(layerIndex: number, geoJSON: com.carto.core.Variant): void;
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public setLayerGeoJSONString(layerIndex: number, geoJSON: string): void;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public constructor();
				public setLayerFeatureCollection(layerIndex: number, projection: com.carto.projections.Projection, featureCollection: com.carto.geometry.FeatureCollection): void;
				public setSimplifyTolerance(tolerance: number): void;
				public setLayerGeoJSON(layerIndex: number, geoJSON: com.carto.core.Variant): void;
				public delete(): void;
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getDataExtent(): com.carto.core.MapBounds;
				public createLayer(name: string): number;
				public getSimplifyTolerance(): number;
				public deleteLayer(layerIndex: number): void;
				public swigReleaseOwnership(): void;
				public constructor(minZoom: number, maxZoom: number);
				public getDefaultLayerBuffer(): number;
				public updateGeoJSONStringFeature(layerIndex: number, geoJSON: string): void;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.GeoJSONVectorTileDataSource;
				public swigGetDirectorObject(): any;
				public removeGeoJSONFeature(layerIndex: number, id: com.carto.core.Variant): void;
				public swigGetRawPtr(): number;
				public addGeoJSONStringFeature(layerIndex: number, geoJSON: string): void;
				public swigTakeOwnership(): void;
				public setDefaultLayerBuffer(tolerance: number): void;
				public addGeoJSONFeature(layerIndex: number, geoJSON: com.carto.core.Variant): void;
				public static getCPtr(obj: com.carto.datasources.GeoJSONVectorTileDataSource): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class GeoJSONVectorTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.GeoJSONVectorTileDataSourceModuleJNI>;
				public static GeoJSONVectorTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static SwigDirector_GeoJSONVectorTileDataSource_getMaxZoom(self: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static GeoJSONVectorTileDataSource_getSimplifyTolerance(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static GeoJSONVectorTileDataSource_updateGeoJSONFeature(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: number, param4: com.carto.core.Variant): void;
				public static GeoJSONVectorTileDataSource_getDefaultLayerBuffer(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static delete_GeoJSONVectorTileDataSource(param0: number): void;
				public static GeoJSONVectorTileDataSource_updateGeoJSONStringFeature(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: string): void;
				public static GeoJSONVectorTileDataSource_loadTileSwigExplicitGeoJSONVectorTileDataSource(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static SwigDirector_GeoJSONVectorTileDataSource_getDataExtent(self: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static GeoJSONVectorTileDataSource_setLayerGeoJSONString(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: string): void;
				public constructor();
				public static GeoJSONVectorTileDataSource_addGeoJSONStringFeature(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: string): void;
				public static SwigDirector_GeoJSONVectorTileDataSource_notifyTilesChanged(self: com.carto.datasources.GeoJSONVectorTileDataSource, removeTiles: boolean): void;
				public static GeoJSONVectorTileDataSource_getDataExtentSwigExplicitGeoJSONVectorTileDataSource(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static GeoJSONVectorTileDataSource_setLayerGeoJSON(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: number, param4: com.carto.core.Variant): void;
				public static GeoJSONVectorTileDataSource_director_connect(param0: com.carto.datasources.GeoJSONVectorTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static GeoJSONVectorTileDataSource_setLayerFeatureCollection(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: number, param4: com.carto.projections.Projection, param5: number, param6: com.carto.geometry.FeatureCollection): void;
				public static GeoJSONVectorTileDataSource_deleteLayer(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number): void;
				public static GeoJSONVectorTileDataSource_loadTile(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static GeoJSONVectorTileDataSource_change_ownership(param0: com.carto.datasources.GeoJSONVectorTileDataSource, param1: number, param2: boolean): void;
				public static SwigDirector_GeoJSONVectorTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static GeoJSONVectorTileDataSource_setDefaultLayerBuffer(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number): void;
				public static GeoJSONVectorTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static GeoJSONVectorTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource): string;
				public static SwigDirector_GeoJSONVectorTileDataSource_loadTile(self: com.carto.datasources.GeoJSONVectorTileDataSource, mapTile: number): number;
				public static new_GeoJSONVectorTileDataSource(param0: number, param1: number): number;
				public static GeoJSONVectorTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static GeoJSONVectorTileDataSource_createLayer(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: string): number;
				public static GeoJSONVectorTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource): any;
				public static SwigDirector_GeoJSONVectorTileDataSource_getMinZoom(self: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static GeoJSONVectorTileDataSource_setSimplifyTolerance(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number): void;
				public static GeoJSONVectorTileDataSource_addGeoJSONFeature(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: number, param4: com.carto.core.Variant): void;
				public static GeoJSONVectorTileDataSource_removeGeoJSONFeature(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: number, param4: com.carto.core.Variant): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class HTTPTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.HTTPTileDataSource>;
				public swigDirectorDisconnect(): void;
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public finalize(): void;
				public buildTileURL(baseURL: string, tile: com.carto.core.MapTile): string;
				public setTimeout(timeout: number): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public constructor();
				public setBaseURL(baseURL: string): void;
				public delete(): void;
				public setSubdomains(subdomains: com.carto.core.StringVector): void;
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public constructor(minZoom: number, maxZoom: number, baseURL: string);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.HTTPTileDataSource;
				public setHTTPHeaders(headers: com.carto.core.StringMap): void;
				public swigReleaseOwnership(): void;
				public getSubdomains(): com.carto.core.StringVector;
				public setTMSScheme(tmsScheme: boolean): void;
				public constructor(minZoom: number, maxZoom: number);
				public isTMSScheme(): boolean;
				public static getCPtr(obj: com.carto.datasources.HTTPTileDataSource): number;
				public setMaxAgeHeaderCheck(maxAgeCheck: boolean): void;
				public getTimeout(): number;
				public swigGetClassName(): string;
				public getHTTPHeaders(): com.carto.core.StringMap;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public isMaxAgeHeaderCheck(): boolean;
				public getBaseURL(): string;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class HTTPTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.HTTPTileDataSourceModuleJNI>;
				public static SwigDirector_HTTPTileDataSource_getDataExtent(self: com.carto.datasources.HTTPTileDataSource): number;
				public static HTTPTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.HTTPTileDataSource): string;
				public static HTTPTileDataSource_setMaxAgeHeaderCheck(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: boolean): void;
				public static HTTPTileDataSource_director_connect(param0: com.carto.datasources.HTTPTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static HTTPTileDataSource_getTimeout(param0: number, param1: com.carto.datasources.HTTPTileDataSource): number;
				public constructor();
				public static HTTPTileDataSource_getHTTPHeaders(param0: number, param1: com.carto.datasources.HTTPTileDataSource): number;
				public static SwigDirector_HTTPTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.HTTPTileDataSource): number;
				public static SwigDirector_HTTPTileDataSource_notifyTilesChanged(self: com.carto.datasources.HTTPTileDataSource, removeTiles: boolean): void;
				public static delete_HTTPTileDataSource(param0: number): void;
				public static HTTPTileDataSource_setTMSScheme(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: boolean): void;
				public static new_HTTPTileDataSource(param0: number, param1: number, param2: string): number;
				public static HTTPTileDataSource_isMaxAgeHeaderCheck(param0: number, param1: com.carto.datasources.HTTPTileDataSource): boolean;
				public static HTTPTileDataSource_setHTTPHeaders(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: number, param3: com.carto.core.StringMap): void;
				public static HTTPTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static HTTPTileDataSource_setSubdomains(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: number, param3: com.carto.core.StringVector): void;
				public static HTTPTileDataSource_getBaseURL(param0: number, param1: com.carto.datasources.HTTPTileDataSource): string;
				public static SwigDirector_HTTPTileDataSource_getMinZoom(self: com.carto.datasources.HTTPTileDataSource): number;
				public static HTTPTileDataSource_loadTile(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static HTTPTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.HTTPTileDataSource): any;
				public static HTTPTileDataSource_loadTileSwigExplicitHTTPTileDataSource(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static HTTPTileDataSource_buildTileURL(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: string, param3: number, param4: com.carto.core.MapTile): string;
				public static HTTPTileDataSource_isTMSScheme(param0: number, param1: com.carto.datasources.HTTPTileDataSource): boolean;
				public static SwigDirector_HTTPTileDataSource_getMaxZoom(self: com.carto.datasources.HTTPTileDataSource): number;
				public static HTTPTileDataSource_setBaseURL(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: string): void;
				public static SwigDirector_HTTPTileDataSource_loadTile(self: com.carto.datasources.HTTPTileDataSource, mapTile: number): number;
				public static SwigDirector_HTTPTileDataSource_buildTileURL(self: com.carto.datasources.HTTPTileDataSource, baseURL: string, tile: number): string;
				public static HTTPTileDataSource_getSubdomains(param0: number, param1: com.carto.datasources.HTTPTileDataSource): number;
				public static HTTPTileDataSource_change_ownership(param0: com.carto.datasources.HTTPTileDataSource, param1: number, param2: boolean): void;
				public static HTTPTileDataSource_buildTileURLSwigExplicitHTTPTileDataSource(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: string, param3: number, param4: com.carto.core.MapTile): string;
				public static HTTPTileDataSource_setTimeout(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: number): void;
				public static HTTPTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.HTTPTileDataSource): number;
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
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public addFeatureCollection(featureCollection: com.carto.geometry.FeatureCollection, style: com.carto.styles.Style): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public loadElements(cullState: com.carto.renderers.components.CullState): com.carto.datasources.components.VectorData;
				public getAll(): com.carto.vectorelements.VectorElementVector;
				public delete(): void;
				public clear(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.VectorDataSource;
				public add(element: com.carto.vectorelements.VectorElement): void;
				public swigReleaseOwnership(): void;
				public static getCPtr(obj: com.carto.datasources.LocalVectorDataSource): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.LocalVectorDataSource;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public removeAll(elements: com.carto.vectorelements.VectorElementVector): boolean;
				public swigGetRawPtr(): number;
				public getGeometrySimplifier(): com.carto.geometry.GeometrySimplifier;
				public getFeatureCollection(): com.carto.geometry.FeatureCollection;
				public setAll(elements: com.carto.vectorelements.VectorElementVector): void;
				public swigTakeOwnership(): void;
				public constructor(projection: com.carto.projections.Projection);
				public addAll(elements: com.carto.vectorelements.VectorElementVector): void;
				public static getCPtr(obj: com.carto.datasources.VectorDataSource): number;
				public constructor(projection: com.carto.projections.Projection, spatialIndexType: com.carto.datasources.LocalSpatialIndexType);
				public remove(element: com.carto.vectorelements.VectorElement): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class LocalVectorDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.LocalVectorDataSourceModuleJNI>;
				public static LocalVectorDataSource_setGeometrySimplifier(param0: number, param1: com.carto.datasources.LocalVectorDataSource, param2: number, param3: com.carto.geometry.GeometrySimplifier): void;
				public static LocalVectorDataSource_getDataExtent(param0: number, param1: com.carto.datasources.LocalVectorDataSource): number;
				public static new_LocalVectorDataSource__SWIG_0(param0: number, param1: com.carto.projections.Projection): number;
				public static LocalVectorDataSource_loadElementsSwigExplicitLocalVectorDataSource(param0: number, param1: com.carto.datasources.LocalVectorDataSource, param2: number, param3: com.carto.renderers.components.CullState): number;
				public static LocalVectorDataSource_addFeatureCollection(param0: number, param1: com.carto.datasources.LocalVectorDataSource, param2: number, param3: com.carto.geometry.FeatureCollection, param4: number, param5: com.carto.styles.Style): void;
				public constructor();
				public static LocalVectorDataSource_addAll(param0: number, param1: com.carto.datasources.LocalVectorDataSource, param2: number, param3: com.carto.vectorelements.VectorElementVector): void;
				public static LocalVectorDataSource_director_connect(param0: com.carto.datasources.LocalVectorDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static LocalVectorDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static LocalVectorDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.LocalVectorDataSource): any;
				public static LocalVectorDataSource_setAll(param0: number, param1: com.carto.datasources.LocalVectorDataSource, param2: number, param3: com.carto.vectorelements.VectorElementVector): void;
				public static LocalVectorDataSource_change_ownership(param0: com.carto.datasources.LocalVectorDataSource, param1: number, param2: boolean): void;
				public static LocalVectorDataSource_add(param0: number, param1: com.carto.datasources.LocalVectorDataSource, param2: number, param3: com.carto.vectorelements.VectorElement): void;
				public static LocalVectorDataSource_clear(param0: number, param1: com.carto.datasources.LocalVectorDataSource): void;
				public static LocalVectorDataSource_loadElements(param0: number, param1: com.carto.datasources.LocalVectorDataSource, param2: number, param3: com.carto.renderers.components.CullState): number;
				public static LocalVectorDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.LocalVectorDataSource): string;
				public static LocalVectorDataSource_getDataExtentSwigExplicitLocalVectorDataSource(param0: number, param1: com.carto.datasources.LocalVectorDataSource): number;
				public static LocalVectorDataSource_removeAll(param0: number, param1: com.carto.datasources.LocalVectorDataSource, param2: number, param3: com.carto.vectorelements.VectorElementVector): boolean;
				public static SwigDirector_LocalVectorDataSource_loadElements(self: com.carto.datasources.LocalVectorDataSource, cullState: number): number;
				public static delete_LocalVectorDataSource(param0: number): void;
				public static SwigDirector_LocalVectorDataSource_getDataExtent(self: com.carto.datasources.LocalVectorDataSource): number;
				public static new_LocalVectorDataSource__SWIG_1(param0: number, param1: com.carto.projections.Projection, param2: number): number;
				public static LocalVectorDataSource_getFeatureCollection(param0: number, param1: com.carto.datasources.LocalVectorDataSource): number;
				public static LocalVectorDataSource_getAll(param0: number, param1: com.carto.datasources.LocalVectorDataSource): number;
				public static LocalVectorDataSource_getGeometrySimplifier(param0: number, param1: com.carto.datasources.LocalVectorDataSource): number;
				public static LocalVectorDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.LocalVectorDataSource): number;
				public static LocalVectorDataSource_remove(param0: number, param1: com.carto.datasources.LocalVectorDataSource, param2: number, param3: com.carto.vectorelements.VectorElement): boolean;
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
				public swigDirectorDisconnect(): void;
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public constructor();
				public constructor(path: string);
				public getMetaData(key: string): string;
				public delete(): void;
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getDataExtent(): com.carto.core.MapBounds;
				public swigReleaseOwnership(): void;
				public constructor(minZoom: number, maxZoom: number, path: string, scheme: com.carto.datasources.MBTilesScheme);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.MBTilesTileDataSource;
				public constructor(minZoom: number, maxZoom: number);
				public getMetaData(): com.carto.core.StringMap;
				public swigGetClassName(): string;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public swigTakeOwnership(): void;
				public static getCPtr(obj: com.carto.datasources.MBTilesTileDataSource): number;
				public getMinZoom(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MBTilesTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.MBTilesTileDataSourceModuleJNI>;
				public static new_MBTilesTileDataSource__SWIG_1(param0: number, param1: number, param2: string): number;
				public static delete_MBTilesTileDataSource(param0: number): void;
				public static MBTilesTileDataSource_getMetaData__SWIG_0(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): number;
				public static SwigDirector_MBTilesTileDataSource_getTileMask(self: com.carto.datasources.MBTilesTileDataSource): string;
				public static MBTilesTileDataSource_getDataExtentSwigExplicitMBTilesTileDataSource(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): number;
				public static SwigDirector_MBTilesTileDataSource_getMinZoom(self: com.carto.datasources.MBTilesTileDataSource): number;
				public static MBTilesTileDataSource_getMinZoomSwigExplicitMBTilesTileDataSource(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): number;
				public constructor();
				public static new_MBTilesTileDataSource__SWIG_2(param0: number, param1: number, param2: string, param3: number): number;
				public static MBTilesTileDataSource_getTileMaskSwigExplicitMBTilesTileDataSource(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): string;
				public static MBTilesTileDataSource_change_ownership(param0: com.carto.datasources.MBTilesTileDataSource, param1: number, param2: boolean): void;
				public static MBTilesTileDataSource_getMaxZoom(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): number;
				public static MBTilesTileDataSource_getMaxZoomSwigExplicitMBTilesTileDataSource(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): number;
				public static MBTilesTileDataSource_director_connect(param0: com.carto.datasources.MBTilesTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_MBTilesTileDataSource_getMaxZoom(self: com.carto.datasources.MBTilesTileDataSource): number;
				public static MBTilesTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): string;
				public static MBTilesTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): number;
				public static MBTilesTileDataSource_getMinZoom(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): number;
				public static new_MBTilesTileDataSource__SWIG_0(param0: string): number;
				public static MBTilesTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): any;
				public static MBTilesTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static MBTilesTileDataSource_getMetaData__SWIG_1(param0: number, param1: com.carto.datasources.MBTilesTileDataSource, param2: string): string;
				public static MBTilesTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): number;
				public static SwigDirector_MBTilesTileDataSource_notifyTilesChanged(self: com.carto.datasources.MBTilesTileDataSource, removeTiles: boolean): void;
				public static SwigDirector_MBTilesTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.MBTilesTileDataSource): number;
				public static SwigDirector_MBTilesTileDataSource_loadTile(self: com.carto.datasources.MBTilesTileDataSource, mapTile: number): number;
				public static MBTilesTileDataSource_getTileMask(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): string;
				public static MBTilesTileDataSource_loadTileSwigExplicitMBTilesTileDataSource(param0: number, param1: com.carto.datasources.MBTilesTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static SwigDirector_MBTilesTileDataSource_getDataExtent(self: com.carto.datasources.MBTilesTileDataSource): number;
				public static MBTilesTileDataSource_loadTile(param0: number, param1: com.carto.datasources.MBTilesTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MapTilerOnlineTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MapTilerOnlineTileDataSource>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(minZoom: number, maxZoom: number);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.MapTilerOnlineTileDataSource;
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public finalize(): void;
				public getCustomServiceURL(): string;
				public getTimeout(): number;
				public setTimeout(timeout: number): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public swigGetDirectorObject(): any;
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public constructor(key: string);
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public swigTakeOwnership(): void;
				public static getCPtr(obj: com.carto.datasources.MapTilerOnlineTileDataSource): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MapTilerOnlineTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.MapTilerOnlineTileDataSourceModuleJNI>;
				public static SwigDirector_MapTilerOnlineTileDataSource_notifyTilesChanged(self: com.carto.datasources.MapTilerOnlineTileDataSource, removeTiles: boolean): void;
				public static delete_MapTilerOnlineTileDataSource(param0: number): void;
				public static MapTilerOnlineTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource): any;
				public static SwigDirector_MapTilerOnlineTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.MapTilerOnlineTileDataSource): number;
				public static MapTilerOnlineTileDataSource_loadTileSwigExplicitMapTilerOnlineTileDataSource(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static MapTilerOnlineTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_MapTilerOnlineTileDataSource_getMaxZoom(self: com.carto.datasources.MapTilerOnlineTileDataSource): number;
				public static MapTilerOnlineTileDataSource_setCustomServiceURL(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource, param2: string): void;
				public static SwigDirector_MapTilerOnlineTileDataSource_getDataExtent(self: com.carto.datasources.MapTilerOnlineTileDataSource): number;
				public static MapTilerOnlineTileDataSource_getTimeout(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource): number;
				public static MapTilerOnlineTileDataSource_director_connect(param0: com.carto.datasources.MapTilerOnlineTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public constructor();
				public static SwigDirector_MapTilerOnlineTileDataSource_loadTile(self: com.carto.datasources.MapTilerOnlineTileDataSource, mapTile: number): number;
				public static MapTilerOnlineTileDataSource_getCustomServiceURL(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource): string;
				public static new_MapTilerOnlineTileDataSource(param0: string): number;
				public static MapTilerOnlineTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource): number;
				public static MapTilerOnlineTileDataSource_change_ownership(param0: com.carto.datasources.MapTilerOnlineTileDataSource, param1: number, param2: boolean): void;
				public static MapTilerOnlineTileDataSource_setTimeout(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource, param2: number): void;
				public static MapTilerOnlineTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource): string;
				public static SwigDirector_MapTilerOnlineTileDataSource_getMinZoom(self: com.carto.datasources.MapTilerOnlineTileDataSource): number;
				public static MapTilerOnlineTileDataSource_loadTile(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MemoryCacheTileDataSource extends com.carto.datasources.CacheTileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MemoryCacheTileDataSource>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(minZoom: number, maxZoom: number);
				public static getCPtr(obj: com.carto.datasources.CacheTileDataSource): number;
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.CacheTileDataSource;
				public finalize(): void;
				public getCapacity(): number;
				public setCapacity(capacityInBytes: number): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.datasources.MemoryCacheTileDataSource): number;
				public delete(): void;
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public clear(): void;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.MemoryCacheTileDataSource;
				public constructor(dataSource: com.carto.datasources.TileDataSource);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MemoryCacheTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.MemoryCacheTileDataSourceModuleJNI>;
				public static MemoryCacheTileDataSource_getCapacitySwigExplicitMemoryCacheTileDataSource(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static SwigDirector_MemoryCacheTileDataSource_getDataExtent(self: com.carto.datasources.MemoryCacheTileDataSource): number;
				public constructor();
				public static MemoryCacheTileDataSource_change_ownership(param0: com.carto.datasources.MemoryCacheTileDataSource, param1: number, param2: boolean): void;
				public static MemoryCacheTileDataSource_clearSwigExplicitMemoryCacheTileDataSource(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): void;
				public static SwigDirector_MemoryCacheTileDataSource_setCapacity(self: com.carto.datasources.MemoryCacheTileDataSource, capacityInBytes: number): void;
				public static SwigDirector_MemoryCacheTileDataSource_loadTile(self: com.carto.datasources.MemoryCacheTileDataSource, mapTile: number): number;
				public static SwigDirector_MemoryCacheTileDataSource_notifyTilesChanged(self: com.carto.datasources.MemoryCacheTileDataSource, removeTiles: boolean): void;
				public static MemoryCacheTileDataSource_clear(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): void;
				public static SwigDirector_MemoryCacheTileDataSource_clear(self: com.carto.datasources.MemoryCacheTileDataSource): void;
				public static SwigDirector_MemoryCacheTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static delete_MemoryCacheTileDataSource(param0: number): void;
				public static MemoryCacheTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static MemoryCacheTileDataSource_getCapacity(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static SwigDirector_MemoryCacheTileDataSource_getCapacity(self: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static MemoryCacheTileDataSource_setCapacitySwigExplicitMemoryCacheTileDataSource(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource, param2: number): void;
				public static new_MemoryCacheTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static MemoryCacheTileDataSource_setCapacity(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource, param2: number): void;
				public static MemoryCacheTileDataSource_loadTile(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static SwigDirector_MemoryCacheTileDataSource_getMaxZoom(self: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static MemoryCacheTileDataSource_director_connect(param0: com.carto.datasources.MemoryCacheTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static MemoryCacheTileDataSource_loadTileSwigExplicitMemoryCacheTileDataSource(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static SwigDirector_MemoryCacheTileDataSource_getMinZoom(self: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static MemoryCacheTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static MemoryCacheTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): string;
				public static MemoryCacheTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): any;
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
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.MergedMBVTTileDataSource;
				public constructor(minZoom: number, maxZoom: number);
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public constructor(dataSource1: com.carto.datasources.TileDataSource, dataSource2: com.carto.datasources.TileDataSource);
				public static getCPtr(obj: com.carto.datasources.MergedMBVTTileDataSource): number;
				public swigTakeOwnership(): void;
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
			export class MergedMBVTTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.MergedMBVTTileDataSourceModuleJNI>;
				public static MergedMBVTTileDataSource_getTileMask(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): string;
				public static MergedMBVTTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static MergedMBVTTileDataSource_getTileMaskSwigExplicitMergedMBVTTileDataSource(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): string;
				public static SwigDirector_MergedMBVTTileDataSource_loadTile(self: com.carto.datasources.MergedMBVTTileDataSource, tile: number): number;
				public constructor();
				public static MergedMBVTTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): any;
				public static MergedMBVTTileDataSource_loadTile(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static MergedMBVTTileDataSource_getDataExtentSwigExplicitMergedMBVTTileDataSource(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static SwigDirector_MergedMBVTTileDataSource_notifyTilesChanged(self: com.carto.datasources.MergedMBVTTileDataSource, removeTiles: boolean): void;
				public static MergedMBVTTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static new_MergedMBVTTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.datasources.TileDataSource): number;
				public static MergedMBVTTileDataSource_getMinZoomSwigExplicitMergedMBVTTileDataSource(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static MergedMBVTTileDataSource_director_connect(param0: com.carto.datasources.MergedMBVTTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static MergedMBVTTileDataSource_getMinZoom(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static SwigDirector_MergedMBVTTileDataSource_getTileMask(self: com.carto.datasources.MergedMBVTTileDataSource): string;
				public static MergedMBVTTileDataSource_getMaxZoom(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static MergedMBVTTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static SwigDirector_MergedMBVTTileDataSource_getMaxZoom(self: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static MergedMBVTTileDataSource_change_ownership(param0: com.carto.datasources.MergedMBVTTileDataSource, param1: number, param2: boolean): void;
				public static MergedMBVTTileDataSource_loadTileSwigExplicitMergedMBVTTileDataSource(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static SwigDirector_MergedMBVTTileDataSource_getDataExtent(self: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static SwigDirector_MergedMBVTTileDataSource_getMinZoom(self: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static delete_MergedMBVTTileDataSource(param0: number): void;
				public static SwigDirector_MergedMBVTTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static MergedMBVTTileDataSource_getMaxZoomSwigExplicitMergedMBVTTileDataSource(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static MergedMBVTTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MultiTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.MultiTileDataSource>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(minZoom: number, maxZoom: number);
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public finalize(): void;
				public swigGetClassName(): string;
				public add(datasource: com.carto.datasources.TileDataSource): void;
				public add(datasource: com.carto.datasources.TileDataSource, tileMask: string): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public swigTakeOwnership(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public remove(datasource: com.carto.datasources.TileDataSource): boolean;
				public static getCPtr(obj: com.carto.datasources.MultiTileDataSource): number;
				public constructor(maxOpenedPackages: number);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.MultiTileDataSource;
				public getMinZoom(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class MultiTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.MultiTileDataSourceModuleJNI>;
				public static SwigDirector_MultiTileDataSource_getMinZoom(self: com.carto.datasources.MultiTileDataSource): number;
				public static MultiTileDataSource_remove(param0: number, param1: com.carto.datasources.MultiTileDataSource, param2: number, param3: com.carto.datasources.TileDataSource): boolean;
				public static new_MultiTileDataSource__SWIG_1(param0: number): number;
				public static MultiTileDataSource_add__SWIG_1(param0: number, param1: com.carto.datasources.MultiTileDataSource, param2: number, param3: com.carto.datasources.TileDataSource, param4: string): void;
				public static MultiTileDataSource_getMinZoomSwigExplicitMultiTileDataSource(param0: number, param1: com.carto.datasources.MultiTileDataSource): number;
				public static MultiTileDataSource_getDataExtentSwigExplicitMultiTileDataSource(param0: number, param1: com.carto.datasources.MultiTileDataSource): number;
				public static SwigDirector_MultiTileDataSource_getMaxZoom(self: com.carto.datasources.MultiTileDataSource): number;
				public static MultiTileDataSource_getMaxZoom(param0: number, param1: com.carto.datasources.MultiTileDataSource): number;
				public static MultiTileDataSource_getMaxZoomSwigExplicitMultiTileDataSource(param0: number, param1: com.carto.datasources.MultiTileDataSource): number;
				public static MultiTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.MultiTileDataSource): any;
				public static SwigDirector_MultiTileDataSource_notifyTilesChanged(self: com.carto.datasources.MultiTileDataSource, removeTiles: boolean): void;
				public static SwigDirector_MultiTileDataSource_getDataExtent(self: com.carto.datasources.MultiTileDataSource): number;
				public constructor();
				public static MultiTileDataSource_director_connect(param0: com.carto.datasources.MultiTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static new_MultiTileDataSource__SWIG_0(): number;
				public static MultiTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.MultiTileDataSource): string;
				public static MultiTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.MultiTileDataSource): number;
				public static MultiTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static MultiTileDataSource_change_ownership(param0: com.carto.datasources.MultiTileDataSource, param1: number, param2: boolean): void;
				public static SwigDirector_MultiTileDataSource_loadTile(self: com.carto.datasources.MultiTileDataSource, mapTile: number): number;
				public static MultiTileDataSource_getMinZoom(param0: number, param1: com.carto.datasources.MultiTileDataSource): number;
				public static SwigDirector_MultiTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.MultiTileDataSource): number;
				public static delete_MultiTileDataSource(param0: number): void;
				public static MultiTileDataSource_add__SWIG_0(param0: number, param1: com.carto.datasources.MultiTileDataSource, param2: number, param3: com.carto.datasources.TileDataSource): void;
				public static MultiTileDataSource_loadTile(param0: number, param1: com.carto.datasources.MultiTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static MultiTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.MultiTileDataSource): number;
				public static MultiTileDataSource_loadTileSwigExplicitMultiTileDataSource(param0: number, param1: com.carto.datasources.MultiTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class OfflineNMLModelLODTreeDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.OfflineNMLModelLODTreeDataSourceModuleJNI>;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class OrderedTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.OrderedTileDataSource>;
				public static getCPtr(obj: com.carto.datasources.OrderedTileDataSource): number;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(minZoom: number, maxZoom: number);
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.OrderedTileDataSource;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public constructor(dataSource1: com.carto.datasources.TileDataSource, dataSource2: com.carto.datasources.TileDataSource);
				public swigTakeOwnership(): void;
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
			export class OrderedTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.OrderedTileDataSourceModuleJNI>;
				public static OrderedTileDataSource_getDataExtentSwigExplicitOrderedTileDataSource(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static OrderedTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.OrderedTileDataSource): string;
				public static SwigDirector_OrderedTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.OrderedTileDataSource): number;
				public static OrderedTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.OrderedTileDataSource): any;
				public static OrderedTileDataSource_getMinZoomSwigExplicitOrderedTileDataSource(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static OrderedTileDataSource_getMaxZoom(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static SwigDirector_OrderedTileDataSource_loadTile(self: com.carto.datasources.OrderedTileDataSource, tile: number): number;
				public static OrderedTileDataSource_loadTile(param0: number, param1: com.carto.datasources.OrderedTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public constructor();
				public static SwigDirector_OrderedTileDataSource_getMinZoom(self: com.carto.datasources.OrderedTileDataSource): number;
				public static OrderedTileDataSource_loadTileSwigExplicitOrderedTileDataSource(param0: number, param1: com.carto.datasources.OrderedTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static OrderedTileDataSource_director_connect(param0: com.carto.datasources.OrderedTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static OrderedTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static OrderedTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static SwigDirector_OrderedTileDataSource_getDataExtent(self: com.carto.datasources.OrderedTileDataSource): number;
				public static SwigDirector_OrderedTileDataSource_notifyTilesChanged(self: com.carto.datasources.OrderedTileDataSource, removeTiles: boolean): void;
				public static OrderedTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static OrderedTileDataSource_change_ownership(param0: com.carto.datasources.OrderedTileDataSource, param1: number, param2: boolean): void;
				public static OrderedTileDataSource_getMaxZoomSwigExplicitOrderedTileDataSource(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static OrderedTileDataSource_getMinZoom(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static new_OrderedTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.datasources.TileDataSource): number;
				public static delete_OrderedTileDataSource(param0: number): void;
				public static SwigDirector_OrderedTileDataSource_getMaxZoom(self: com.carto.datasources.OrderedTileDataSource): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class PackageManagerTileDataSource extends com.carto.datasources.TileDataSource {
				public static class: java.lang.Class<com.carto.datasources.PackageManagerTileDataSource>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(minZoom: number, maxZoom: number);
				public constructor(packageManager: com.carto.packagemanager.PackageManager);
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public finalize(): void;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.PackageManagerTileDataSource;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getPackageManager(): com.carto.packagemanager.PackageManager;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public swigTakeOwnership(): void;
				public static getCPtr(obj: com.carto.datasources.PackageManagerTileDataSource): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class PackageManagerTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.PackageManagerTileDataSourceModuleJNI>;
				public static PackageManagerTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.PackageManagerTileDataSource): string;
				public static PackageManagerTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.PackageManagerTileDataSource): any;
				public static SwigDirector_PackageManagerTileDataSource_getDataExtent(self: com.carto.datasources.PackageManagerTileDataSource): number;
				public static PackageManagerTileDataSource_change_ownership(param0: com.carto.datasources.PackageManagerTileDataSource, param1: number, param2: boolean): void;
				public static delete_PackageManagerTileDataSource(param0: number): void;
				public static SwigDirector_PackageManagerTileDataSource_notifyTilesChanged(self: com.carto.datasources.PackageManagerTileDataSource, removeTiles: boolean): void;
				public static PackageManagerTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_PackageManagerTileDataSource_getMaxZoom(self: com.carto.datasources.PackageManagerTileDataSource): number;
				public constructor();
				public static SwigDirector_PackageManagerTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.PackageManagerTileDataSource): number;
				public static SwigDirector_PackageManagerTileDataSource_loadTile(self: com.carto.datasources.PackageManagerTileDataSource, mapTile: number): number;
				public static PackageManagerTileDataSource_loadTileSwigExplicitPackageManagerTileDataSource(param0: number, param1: com.carto.datasources.PackageManagerTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static new_PackageManagerTileDataSource(param0: number, param1: com.carto.packagemanager.PackageManager): number;
				public static SwigDirector_PackageManagerTileDataSource_getMinZoom(self: com.carto.datasources.PackageManagerTileDataSource): number;
				public static PackageManagerTileDataSource_director_connect(param0: com.carto.datasources.PackageManagerTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static PackageManagerTileDataSource_getPackageManager(param0: number, param1: com.carto.datasources.PackageManagerTileDataSource): number;
				public static PackageManagerTileDataSource_loadTile(param0: number, param1: com.carto.datasources.PackageManagerTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static PackageManagerTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.PackageManagerTileDataSource): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class PersistentCacheTileDataSource extends com.carto.datasources.CacheTileDataSource {
				public static class: java.lang.Class<com.carto.datasources.PersistentCacheTileDataSource>;
				public swigDirectorDisconnect(): void;
				public static getCPtr(obj: com.carto.datasources.CacheTileDataSource): number;
				public startDownloadArea(mapBounds: com.carto.core.MapBounds, minZoom: number, maxZoom: number, tileDownloadListener: com.carto.datasources.TileDownloadListener): void;
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public stopAllDownloads(): void;
				public finalize(): void;
				public setCapacity(capacityInBytes: number): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public constructor();
				public isCacheOnlyMode(): boolean;
				public delete(): void;
				public loadTile(mapTile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public clear(): void;
				public constructor(dataSource: com.carto.datasources.TileDataSource, databasePath: string);
				public constructor(dataSource: com.carto.datasources.TileDataSource);
				public swigReleaseOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.PersistentCacheTileDataSource;
				public close(): void;
				public constructor(minZoom: number, maxZoom: number);
				public setCacheOnlyMode(enabled: boolean): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.CacheTileDataSource;
				public getCapacity(): number;
				public swigGetClassName(): string;
				public static getCPtr(obj: com.carto.datasources.PersistentCacheTileDataSource): number;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public isOpen(): boolean;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class PersistentCacheTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.PersistentCacheTileDataSourceModuleJNI>;
				public static PersistentCacheTileDataSource_stopAllDownloads(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): void;
				public static SwigDirector_PersistentCacheTileDataSource_getCapacity(self: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static PersistentCacheTileDataSource_setCacheOnlyMode(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource, param2: boolean): void;
				public static SwigDirector_PersistentCacheTileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static SwigDirector_PersistentCacheTileDataSource_getMaxZoom(self: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static PersistentCacheTileDataSource_close(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): void;
				public static PersistentCacheTileDataSource_setCapacitySwigExplicitPersistentCacheTileDataSource(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource, param2: number): void;
				public static PersistentCacheTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): any;
				public static PersistentCacheTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static PersistentCacheTileDataSource_isOpen(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): boolean;
				public static PersistentCacheTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): string;
				public static PersistentCacheTileDataSource_director_connect(param0: com.carto.datasources.PersistentCacheTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public constructor();
				public static PersistentCacheTileDataSource_clear(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): void;
				public static PersistentCacheTileDataSource_getCapacitySwigExplicitPersistentCacheTileDataSource(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static SwigDirector_PersistentCacheTileDataSource_setCapacity(self: com.carto.datasources.PersistentCacheTileDataSource, capacityInBytes: number): void;
				public static PersistentCacheTileDataSource_startDownloadArea(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource, param2: number, param3: com.carto.core.MapBounds, param4: number, param5: number, param6: number, param7: com.carto.datasources.TileDownloadListener): void;
				public static PersistentCacheTileDataSource_clearSwigExplicitPersistentCacheTileDataSource(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): void;
				public static SwigDirector_PersistentCacheTileDataSource_clear(self: com.carto.datasources.PersistentCacheTileDataSource): void;
				public static SwigDirector_PersistentCacheTileDataSource_notifyTilesChanged(self: com.carto.datasources.PersistentCacheTileDataSource, removeTiles: boolean): void;
				public static PersistentCacheTileDataSource_isCacheOnlyMode(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): boolean;
				public static SwigDirector_PersistentCacheTileDataSource_getDataExtent(self: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static SwigDirector_PersistentCacheTileDataSource_loadTile(self: com.carto.datasources.PersistentCacheTileDataSource, mapTile: number): number;
				public static SwigDirector_PersistentCacheTileDataSource_getMinZoom(self: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static PersistentCacheTileDataSource_loadTileSwigExplicitPersistentCacheTileDataSource(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static PersistentCacheTileDataSource_getCapacity(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static PersistentCacheTileDataSource_loadTile(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static PersistentCacheTileDataSource_setCapacity(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource, param2: number): void;
				public static PersistentCacheTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static PersistentCacheTileDataSource_change_ownership(param0: com.carto.datasources.PersistentCacheTileDataSource, param1: number, param2: boolean): void;
				public static delete_PersistentCacheTileDataSource(param0: number): void;
				public static new_PersistentCacheTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource, param2: string): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class TileDataSource extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.TileDataSource>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(minZoom: number, maxZoom: number);
				public getProjection(): com.carto.projections.Projection;
				public static getCPtr(obj: com.carto.datasources.TileDataSource): number;
				public setMaxOverzoomLevel(overzoomLevel: number): void;
				public getMaxOverzoomLevel(): number;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDataSource;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public notifyTilesChanged(removeTiles: boolean): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public getMaxZoomWithOverzoom(): number;
				public isMaxOverzoomLevelSet(): boolean;
				public loadTile(tile: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public getMinZoom(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class TileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.TileDataSourceModuleJNI>;
				public static TileDataSource_getMaxOverzoomLevel(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static SwigDirector_TileDataSource_loadTile(self: com.carto.datasources.TileDataSource, tile: number): number;
				public static TileDataSource_change_ownership(param0: com.carto.datasources.TileDataSource, param1: number, param2: boolean): void;
				public static TileDataSource_getMinZoom(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_getProjection(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_getMaxZoomWithOverzoomSwigExplicitTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public constructor();
				public static TileDataSource_getMaxZoom(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_getMaxZoomSwigExplicitTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static SwigDirector_TileDataSource_getMinZoom(self: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_director_connect(param0: com.carto.datasources.TileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static new_TileDataSource__SWIG_1(param0: number, param1: number): number;
				public static delete_TileDataSource(param0: number): void;
				public static SwigDirector_TileDataSource_getMaxZoom(self: com.carto.datasources.TileDataSource): number;
				public static SwigDirector_TileDataSource_getDataExtent(self: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.TileDataSource): any;
				public static TileDataSource_getMinZoomSwigExplicitTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_isMaxOverzoomLevelSet(param0: number, param1: com.carto.datasources.TileDataSource): boolean;
				public static SwigDirector_TileDataSource_getMaxZoomWithOverzoom(self: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_notifyTilesChangedSwigExplicitTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource, param2: boolean): void;
				public static SwigDirector_TileDataSource_notifyTilesChanged(self: com.carto.datasources.TileDataSource, removeTiles: boolean): void;
				public static new_TileDataSource__SWIG_0(): number;
				public static TileDataSource_setMaxOverzoomLevel(param0: number, param1: com.carto.datasources.TileDataSource, param2: number): void;
				public static TileDataSource_getDataExtentSwigExplicitTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_getMaxZoomWithOverzoom(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.TileDataSource): string;
				public static TileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_loadTile(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static TileDataSource_notifyTilesChanged(param0: number, param1: com.carto.datasources.TileDataSource, param2: boolean): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class TileDownloadListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.TileDownloadListener>;
				public swigCMemOwn: boolean;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.TileDownloadListener;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public onDownloadFailed(tile: com.carto.core.MapTile): void;
				public static getCPtr(obj: com.carto.datasources.TileDownloadListener): number;
				public onDownloadCompleted(): void;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public onDownloadStarting(tileCount: number): void;
				public onDownloadProgress(progress: number): void;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class TileDownloadListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.TileDownloadListenerModuleJNI>;
				public static TileDownloadListener_onDownloadCompletedSwigExplicitTileDownloadListener(param0: number, param1: com.carto.datasources.TileDownloadListener): void;
				public static TileDownloadListener_onDownloadProgress(param0: number, param1: com.carto.datasources.TileDownloadListener, param2: number): void;
				public static TileDownloadListener_swigGetClassName(param0: number, param1: com.carto.datasources.TileDownloadListener): string;
				public static TileDownloadListener_onDownloadStartingSwigExplicitTileDownloadListener(param0: number, param1: com.carto.datasources.TileDownloadListener, param2: number): void;
				public static new_TileDownloadListener(): number;
				public static delete_TileDownloadListener(param0: number): void;
				public static TileDownloadListener_change_ownership(param0: com.carto.datasources.TileDownloadListener, param1: number, param2: boolean): void;
				public static TileDownloadListener_onDownloadFailed(param0: number, param1: com.carto.datasources.TileDownloadListener, param2: number, param3: com.carto.core.MapTile): void;
				public static TileDownloadListener_onDownloadProgressSwigExplicitTileDownloadListener(param0: number, param1: com.carto.datasources.TileDownloadListener, param2: number): void;
				public static SwigDirector_TileDownloadListener_onDownloadFailed(self: com.carto.datasources.TileDownloadListener, tile: number): void;
				public static TileDownloadListener_onDownloadStarting(param0: number, param1: com.carto.datasources.TileDownloadListener, param2: number): void;
				public static TileDownloadListener_swigGetDirectorObject(param0: number, param1: com.carto.datasources.TileDownloadListener): any;
				public static SwigDirector_TileDownloadListener_onDownloadStarting(self: com.carto.datasources.TileDownloadListener, tileCount: number): void;
				public constructor();
				public static SwigDirector_TileDownloadListener_onDownloadProgress(self: com.carto.datasources.TileDownloadListener, progress: number): void;
				public static TileDownloadListener_swigGetRawPtr(param0: number, param1: com.carto.datasources.TileDownloadListener): number;
				public static TileDownloadListener_onDownloadFailedSwigExplicitTileDownloadListener(param0: number, param1: com.carto.datasources.TileDownloadListener, param2: number, param3: com.carto.core.MapTile): void;
				public static TileDownloadListener_onDownloadCompleted(param0: number, param1: com.carto.datasources.TileDownloadListener): void;
				public static TileDownloadListener_director_connect(param0: com.carto.datasources.TileDownloadListener, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_TileDownloadListener_onDownloadCompleted(self: com.carto.datasources.TileDownloadListener): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class VectorDataSource extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.VectorDataSource>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public getProjection(): com.carto.projections.Projection;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public loadElements(cullState: com.carto.renderers.components.CullState): com.carto.datasources.components.VectorData;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public getDataExtent(): com.carto.core.MapBounds;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.datasources.VectorDataSource;
				public constructor(projection: com.carto.projections.Projection);
				public static getCPtr(obj: com.carto.datasources.VectorDataSource): number;
				public notifyElementsChanged(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace datasources {
			export class VectorDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.VectorDataSourceModuleJNI>;
				public static VectorDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.VectorDataSource): number;
				public static VectorDataSource_change_ownership(param0: com.carto.datasources.VectorDataSource, param1: number, param2: boolean): void;
				public static SwigDirector_VectorDataSource_getDataExtent(self: com.carto.datasources.VectorDataSource): number;
				public static delete_VectorDataSource(param0: number): void;
				public static VectorDataSource_loadElements(param0: number, param1: com.carto.datasources.VectorDataSource, param2: number, param3: com.carto.renderers.components.CullState): number;
				public static VectorDataSource_getDataExtentSwigExplicitVectorDataSource(param0: number, param1: com.carto.datasources.VectorDataSource): number;
				public static VectorDataSource_getDataExtent(param0: number, param1: com.carto.datasources.VectorDataSource): number;
				public static new_VectorDataSource(param0: number, param1: com.carto.projections.Projection): number;
				public constructor();
				public static VectorDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.VectorDataSource): string;
				public static SwigDirector_VectorDataSource_loadElements(self: com.carto.datasources.VectorDataSource, cullState: number): number;
				public static VectorDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.VectorDataSource): any;
				public static VectorDataSource_notifyElementsChanged(param0: number, param1: com.carto.datasources.VectorDataSource): void;
				public static VectorDataSource_getProjection(param0: number, param1: com.carto.datasources.VectorDataSource): number;
				public static VectorDataSource_director_connect(param0: com.carto.datasources.VectorDataSource, param1: number, param2: boolean, param3: boolean): void;
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
					public swigCMemOwn: boolean;
					public equals(obj: any): boolean;
					public delete(): void;
					public isOverZoom(): boolean;
					public setMaxAge(maxAge: number): void;
					public finalize(): void;
					public getData(): com.carto.core.BinaryData;
					public constructor(data: com.carto.core.BinaryData);
					public isReplaceWithParent(): boolean;
					public swigGetRawPtr(): number;
					public getMaxAge(): number;
					public setIsOverZoom(flag: boolean): void;
					public setReplaceWithParent(flag: boolean): void;
					public static getCPtr(obj: com.carto.datasources.components.TileData): number;
					public hashCode(): number;
					public constructor(cPtr: number, cMemoryOwn: boolean);
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
					public static class: java.lang.Class<com.carto.datasources.components.TileDataModuleJNI>;
					public static TileData_setReplaceWithParent(param0: number, param1: com.carto.datasources.components.TileData, param2: boolean): void;
					public static TileData_swigGetRawPtr(param0: number, param1: com.carto.datasources.components.TileData): number;
					public static TileData_setIsOverZoom(param0: number, param1: com.carto.datasources.components.TileData, param2: boolean): void;
					public constructor();
					public static TileData_getData(param0: number, param1: com.carto.datasources.components.TileData): number;
					public static TileData_setMaxAge(param0: number, param1: com.carto.datasources.components.TileData, param2: number): void;
					public static new_TileData(param0: number, param1: com.carto.core.BinaryData): number;
					public static delete_TileData(param0: number): void;
					public static TileData_getMaxAge(param0: number, param1: com.carto.datasources.components.TileData): number;
					public static TileData_isOverZoom(param0: number, param1: com.carto.datasources.components.TileData): boolean;
					public static TileData_isReplaceWithParent(param0: number, param1: com.carto.datasources.components.TileData): boolean;
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
					public swigCMemOwn: boolean;
					public equals(obj: any): boolean;
					public delete(): void;
					public finalize(): void;
					public static getCPtr(obj: com.carto.datasources.components.VectorData): number;
					public hashCode(): number;
					public swigGetRawPtr(): number;
					public constructor(cPtr: number, cMemoryOwn: boolean);
					public constructor(elements: com.carto.vectorelements.VectorElementVector);
					public getElements(): com.carto.vectorelements.VectorElementVector;
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
					public static class: java.lang.Class<com.carto.datasources.components.VectorDataModuleJNI>;
					public constructor();
					public static VectorData_swigGetRawPtr(param0: number, param1: com.carto.datasources.components.VectorData): number;
					public static new_VectorData(param0: number, param1: com.carto.vectorelements.VectorElementVector): number;
					public static VectorData_getElements(param0: number, param1: com.carto.datasources.components.VectorData): number;
					public static delete_VectorData(param0: number): void;
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
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.core.Address): number;
				public delete(): void;
				public static getCPtr(obj: com.carto.geocoding.GeocodingAddress): number;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public constructor(country: string, region: string, county: string, locality: string, neighbourhood: string, street: string, postcode: string, houseNumber: string, name: string, categories: com.carto.core.StringVector);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class GeocodingAddressModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingAddressModuleJNI>;
				public static new_GeocodingAddress__SWIG_0(): number;
				public static new_GeocodingAddress__SWIG_1(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: number, param10: com.carto.core.StringVector): number;
				public static GeocodingAddress_SWIGUpcast(param0: number): number;
				public static delete_GeocodingAddress(param0: number): void;
				public static GeocodingAddress_swigGetRawPtr(param0: number, param1: com.carto.geocoding.GeocodingAddress): number;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class GeocodingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingRequest>;
				public swigCMemOwn: boolean;
				public getProjection(): com.carto.projections.Projection;
				public setLocation(pos: com.carto.core.MapPos): void;
				public finalize(): void;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getLocationRadius(): number;
				public setCustomParameter(param: string, value: com.carto.core.Variant): void;
				public getCustomParameter(param: string): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public setLocationRadius(radius: number): void;
				public delete(): void;
				public hashCode(): number;
				public getQuery(): string;
				public getLocation(): com.carto.core.MapPos;
				public static getCPtr(obj: com.carto.geocoding.GeocodingRequest): number;
				public constructor(projection: com.carto.projections.Projection, query: string);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class GeocodingRequestModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingRequestModuleJNI>;
				public static GeocodingRequest_swigGetRawPtr(param0: number, param1: com.carto.geocoding.GeocodingRequest): number;
				public static GeocodingRequest_setLocationRadius(param0: number, param1: com.carto.geocoding.GeocodingRequest, param2: number): void;
				public static GeocodingRequest_toString(param0: number, param1: com.carto.geocoding.GeocodingRequest): string;
				public static GeocodingRequest_getCustomParameter(param0: number, param1: com.carto.geocoding.GeocodingRequest, param2: string): number;
				public constructor();
				public static GeocodingRequest_getProjection(param0: number, param1: com.carto.geocoding.GeocodingRequest): number;
				public static GeocodingRequest_getLocationRadius(param0: number, param1: com.carto.geocoding.GeocodingRequest): number;
				public static GeocodingRequest_setCustomParameter(param0: number, param1: com.carto.geocoding.GeocodingRequest, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static GeocodingRequest_getQuery(param0: number, param1: com.carto.geocoding.GeocodingRequest): string;
				public static new_GeocodingRequest(param0: number, param1: com.carto.projections.Projection, param2: string): number;
				public static GeocodingRequest_getLocation(param0: number, param1: com.carto.geocoding.GeocodingRequest): number;
				public static GeocodingRequest_setLocation(param0: number, param1: com.carto.geocoding.GeocodingRequest, param2: number, param3: com.carto.core.MapPos): void;
				public static delete_GeocodingRequest(param0: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class GeocodingResult extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingResult>;
				public swigCMemOwn: boolean;
				public constructor(projection: com.carto.projections.Projection, address: com.carto.geocoding.GeocodingAddress, rank: number, featureCollection: com.carto.geometry.FeatureCollection);
				public getProjection(): com.carto.projections.Projection;
				public finalize(): void;
				public getAddress(): com.carto.geocoding.GeocodingAddress;
				public static getCPtr(obj: com.carto.geocoding.GeocodingResult): number;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
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
			export class GeocodingResultModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingResultModuleJNI>;
				public static GeocodingResultVector_capacity(param0: number, param1: com.carto.geocoding.GeocodingResultVector): number;
				public static GeocodingResult_getFeatureCollection(param0: number, param1: com.carto.geocoding.GeocodingResult): number;
				public static GeocodingResultVector_set(param0: number, param1: com.carto.geocoding.GeocodingResultVector, param2: number, param3: number, param4: com.carto.geocoding.GeocodingResult): void;
				public static GeocodingResultVector_add(param0: number, param1: com.carto.geocoding.GeocodingResultVector, param2: number, param3: com.carto.geocoding.GeocodingResult): void;
				public static GeocodingResult_getRank(param0: number, param1: com.carto.geocoding.GeocodingResult): number;
				public static GeocodingResult_swigGetRawPtr(param0: number, param1: com.carto.geocoding.GeocodingResult): number;
				public static GeocodingResult_getProjection(param0: number, param1: com.carto.geocoding.GeocodingResult): number;
				public static GeocodingResultVector_isEmpty(param0: number, param1: com.carto.geocoding.GeocodingResultVector): boolean;
				public constructor();
				public static delete_GeocodingResult(param0: number): void;
				public static GeocodingResult_toString(param0: number, param1: com.carto.geocoding.GeocodingResult): string;
				public static new_GeocodingResultVector__SWIG_0(): number;
				public static GeocodingResultVector_reserve(param0: number, param1: com.carto.geocoding.GeocodingResultVector, param2: number): void;
				public static GeocodingResultVector_size(param0: number, param1: com.carto.geocoding.GeocodingResultVector): number;
				public static GeocodingResult_getAddress(param0: number, param1: com.carto.geocoding.GeocodingResult): number;
				public static delete_GeocodingResultVector(param0: number): void;
				public static GeocodingResultVector_clear(param0: number, param1: com.carto.geocoding.GeocodingResultVector): void;
				public static new_GeocodingResult(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.geocoding.GeocodingAddress, param4: number, param5: number, param6: com.carto.geometry.FeatureCollection): number;
				public static GeocodingResultVector_get(param0: number, param1: com.carto.geocoding.GeocodingResultVector, param2: number): number;
				public static new_GeocodingResultVector__SWIG_1(param0: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class GeocodingResultVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingResultVector>;
				public swigCMemOwn: boolean;
				public finalize(): void;
				public get(i: number): com.carto.geocoding.GeocodingResult;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public static getCPtr(obj: com.carto.geocoding.GeocodingResultVector): number;
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				public finalize(): void;
				public setMaxResults(maxResults: number): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.geocoding.GeocodingService): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.GeocodingService;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class GeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingServiceModuleJNI>;
				public static GeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.GeocodingService, param2: boolean): void;
				public static GeocodingService_isAutocomplete(param0: number, param1: com.carto.geocoding.GeocodingService): boolean;
				public static SwigDirector_GeocodingService_setLanguage(self: com.carto.geocoding.GeocodingService, lang: string): void;
				public static GeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.GeocodingService): string;
				public static GeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.GeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static GeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.GeocodingService): string;
				public constructor();
				public static delete_GeocodingService(param0: number): void;
				public static new_GeocodingService(): number;
				public static SwigDirector_GeocodingService_isAutocomplete(self: com.carto.geocoding.GeocodingService): boolean;
				public static SwigDirector_GeocodingService_setAutocomplete(self: com.carto.geocoding.GeocodingService, autocomplete: boolean): void;
				public static GeocodingService_change_ownership(param0: com.carto.geocoding.GeocodingService, param1: number, param2: boolean): void;
				public static GeocodingService_director_connect(param0: com.carto.geocoding.GeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static GeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.GeocodingService, param2: string): void;
				public static SwigDirector_GeocodingService_getMaxResults(self: com.carto.geocoding.GeocodingService): number;
				public static SwigDirector_GeocodingService_getLanguage(self: com.carto.geocoding.GeocodingService): string;
				public static SwigDirector_GeocodingService_calculateAddresses(self: com.carto.geocoding.GeocodingService, request: number): number;
				public static SwigDirector_GeocodingService_setMaxResults(self: com.carto.geocoding.GeocodingService, maxResults: number): void;
				public static GeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.GeocodingService): number;
				public static GeocodingService_setMaxResults(param0: number, param1: com.carto.geocoding.GeocodingService, param2: number): void;
				public static GeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.GeocodingService): number;
				public static GeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.GeocodingService): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class MapBoxOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MapBoxOnlineGeocodingService>;
				public static getCPtr(obj: com.carto.geocoding.MapBoxOnlineGeocodingService): number;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				public finalize(): void;
				public getCustomServiceURL(): string;
				public setMaxResults(maxResults: number): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.geocoding.GeocodingService): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.MapBoxOnlineGeocodingService;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigTakeOwnership(): void;
				public constructor(accessToken: string);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.GeocodingService;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class MapBoxOnlineGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.MapBoxOnlineGeocodingServiceModuleJNI>;
				public static MapBoxOnlineGeocodingService_getLanguageSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): string;
				public static MapBoxOnlineGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: string): void;
				public static MapBoxOnlineGeocodingService_director_connect(param0: com.carto.geocoding.MapBoxOnlineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static MapBoxOnlineGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static MapBoxOnlineGeocodingService_getMaxResultsSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): number;
				public static MapBoxOnlineGeocodingService_change_ownership(param0: com.carto.geocoding.MapBoxOnlineGeocodingService, param1: number, param2: boolean): void;
				public constructor();
				public static SwigDirector_MapBoxOnlineGeocodingService_isAutocomplete(self: com.carto.geocoding.MapBoxOnlineGeocodingService): boolean;
				public static new_MapBoxOnlineGeocodingService(param0: string): number;
				public static MapBoxOnlineGeocodingService_setMaxResults(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: number): void;
				public static SwigDirector_MapBoxOnlineGeocodingService_setLanguage(self: com.carto.geocoding.MapBoxOnlineGeocodingService, lang: string): void;
				public static MapBoxOnlineGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): string;
				public static MapBoxOnlineGeocodingService_setAutocompleteSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: boolean): void;
				public static MapBoxOnlineGeocodingService_setMaxResultsSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: number): void;
				public static MapBoxOnlineGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static MapBoxOnlineGeocodingService_isAutocomplete(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): boolean;
				public static MapBoxOnlineGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): number;
				public static MapBoxOnlineGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): any;
				public static MapBoxOnlineGeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: boolean): void;
				public static SwigDirector_MapBoxOnlineGeocodingService_setAutocomplete(self: com.carto.geocoding.MapBoxOnlineGeocodingService, autocomplete: boolean): void;
				public static MapBoxOnlineGeocodingService_getCustomServiceURL(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): string;
				public static delete_MapBoxOnlineGeocodingService(param0: number): void;
				public static MapBoxOnlineGeocodingService_isAutocompleteSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): boolean;
				public static SwigDirector_MapBoxOnlineGeocodingService_calculateAddresses(self: com.carto.geocoding.MapBoxOnlineGeocodingService, request: number): number;
				public static MapBoxOnlineGeocodingService_setCustomServiceURL(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: string): void;
				public static MapBoxOnlineGeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): number;
				public static MapBoxOnlineGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): string;
				public static MapBoxOnlineGeocodingService_calculateAddressesSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static SwigDirector_MapBoxOnlineGeocodingService_setMaxResults(self: com.carto.geocoding.MapBoxOnlineGeocodingService, maxResults: number): void;
				public static SwigDirector_MapBoxOnlineGeocodingService_getLanguage(self: com.carto.geocoding.MapBoxOnlineGeocodingService): string;
				public static MapBoxOnlineGeocodingService_setLanguageSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: string): void;
				public static SwigDirector_MapBoxOnlineGeocodingService_getMaxResults(self: com.carto.geocoding.MapBoxOnlineGeocodingService): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class MapBoxOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MapBoxOnlineReverseGeocodingService>;
				public static getCPtr(obj: com.carto.geocoding.ReverseGeocodingService): number;
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public getCustomServiceURL(): string;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.ReverseGeocodingService;
				public swigGetDirectorObject(): any;
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.MapBoxOnlineReverseGeocodingService;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getLanguage(): string;
				public swigTakeOwnership(): void;
				public constructor(accessToken: string);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class MapBoxOnlineReverseGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.MapBoxOnlineReverseGeocodingServiceModuleJNI>;
				public static MapBoxOnlineReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, param2: string): void;
				public static SwigDirector_MapBoxOnlineReverseGeocodingService_setLanguage(self: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, lang: string): void;
				public static MapBoxOnlineReverseGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): string;
				public static MapBoxOnlineReverseGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static SwigDirector_MapBoxOnlineReverseGeocodingService_getLanguage(self: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): string;
				public static MapBoxOnlineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static MapBoxOnlineReverseGeocodingService_setCustomServiceURL(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, param2: string): void;
				public static delete_MapBoxOnlineReverseGeocodingService(param0: number): void;
				public static MapBoxOnlineReverseGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): number;
				public static new_MapBoxOnlineReverseGeocodingService(param0: string): number;
				public static MapBoxOnlineReverseGeocodingService_change_ownership(param0: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, param1: number, param2: boolean): void;
				public constructor();
				public static MapBoxOnlineReverseGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): any;
				public static MapBoxOnlineReverseGeocodingService_director_connect(param0: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static MapBoxOnlineReverseGeocodingService_calculateAddressesSwigExplicitMapBoxOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static MapBoxOnlineReverseGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): string;
				public static MapBoxOnlineReverseGeocodingService_setLanguageSwigExplicitMapBoxOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, param2: string): void;
				public static MapBoxOnlineReverseGeocodingService_getCustomServiceURL(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): string;
				public static MapBoxOnlineReverseGeocodingService_getLanguageSwigExplicitMapBoxOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): string;
				public static SwigDirector_MapBoxOnlineReverseGeocodingService_calculateAddresses(self: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, request: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class MultiOSMOfflineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MultiOSMOfflineGeocodingService>;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public add(database: string): void;
				public static getCPtr(obj: com.carto.geocoding.MultiOSMOfflineGeocodingService): number;
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				public finalize(): void;
				public setMaxResults(maxResults: number): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.geocoding.GeocodingService): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.MultiOSMOfflineGeocodingService;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigTakeOwnership(): void;
				public remove(database: string): boolean;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.GeocodingService;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class MultiOSMOfflineGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.MultiOSMOfflineGeocodingServiceModuleJNI>;
				public static MultiOSMOfflineGeocodingService_getLanguageSwigExplicitMultiOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService): string;
				public static new_MultiOSMOfflineGeocodingService(): number;
				public static MultiOSMOfflineGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService): any;
				public static SwigDirector_MultiOSMOfflineGeocodingService_getMaxResults(self: com.carto.geocoding.MultiOSMOfflineGeocodingService): number;
				public static MultiOSMOfflineGeocodingService_setAutocompleteSwigExplicitMultiOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService, param2: boolean): void;
				public static MultiOSMOfflineGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService): number;
				public static MultiOSMOfflineGeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService, param2: boolean): void;
				public static SwigDirector_MultiOSMOfflineGeocodingService_isAutocomplete(self: com.carto.geocoding.MultiOSMOfflineGeocodingService): boolean;
				public static MultiOSMOfflineGeocodingService_change_ownership(param0: com.carto.geocoding.MultiOSMOfflineGeocodingService, param1: number, param2: boolean): void;
				public static SwigDirector_MultiOSMOfflineGeocodingService_setAutocomplete(self: com.carto.geocoding.MultiOSMOfflineGeocodingService, autocomplete: boolean): void;
				public constructor();
				public static MultiOSMOfflineGeocodingService_calculateAddressesSwigExplicitMultiOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static MultiOSMOfflineGeocodingService_add(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService, param2: string): void;
				public static MultiOSMOfflineGeocodingService_isAutocompleteSwigExplicitMultiOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService): boolean;
				public static MultiOSMOfflineGeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService): number;
				public static MultiOSMOfflineGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static MultiOSMOfflineGeocodingService_director_connect(param0: com.carto.geocoding.MultiOSMOfflineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static MultiOSMOfflineGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService): string;
				public static MultiOSMOfflineGeocodingService_isAutocomplete(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService): boolean;
				public static SwigDirector_MultiOSMOfflineGeocodingService_setLanguage(self: com.carto.geocoding.MultiOSMOfflineGeocodingService, lang: string): void;
				public static MultiOSMOfflineGeocodingService_remove(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService, param2: string): boolean;
				public static MultiOSMOfflineGeocodingService_getMaxResultsSwigExplicitMultiOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService): number;
				public static SwigDirector_MultiOSMOfflineGeocodingService_getLanguage(self: com.carto.geocoding.MultiOSMOfflineGeocodingService): string;
				public static MultiOSMOfflineGeocodingService_setMaxResultsSwigExplicitMultiOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService, param2: number): void;
				public static MultiOSMOfflineGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService, param2: string): void;
				public static MultiOSMOfflineGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService): string;
				public static MultiOSMOfflineGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_MultiOSMOfflineGeocodingService_calculateAddresses(self: com.carto.geocoding.MultiOSMOfflineGeocodingService, request: number): number;
				public static SwigDirector_MultiOSMOfflineGeocodingService_setMaxResults(self: com.carto.geocoding.MultiOSMOfflineGeocodingService, maxResults: number): void;
				public static delete_MultiOSMOfflineGeocodingService(param0: number): void;
				public static MultiOSMOfflineGeocodingService_setLanguageSwigExplicitMultiOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService, param2: string): void;
				public static MultiOSMOfflineGeocodingService_setMaxResults(param0: number, param1: com.carto.geocoding.MultiOSMOfflineGeocodingService, param2: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class MultiOSMOfflineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.MultiOSMOfflineReverseGeocodingService>;
				public static getCPtr(obj: com.carto.geocoding.ReverseGeocodingService): number;
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public add(database: string): void;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.ReverseGeocodingService;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.MultiOSMOfflineReverseGeocodingService;
				public delete(): void;
				public getLanguage(): string;
				public swigTakeOwnership(): void;
				public remove(database: string): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class MultiOSMOfflineReverseGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.MultiOSMOfflineReverseGeocodingServiceModuleJNI>;
				public static delete_MultiOSMOfflineReverseGeocodingService(param0: number): void;
				public static MultiOSMOfflineReverseGeocodingService_calculateAddressesSwigExplicitMultiOSMOfflineReverseGeocodingService(param0: number, param1: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static MultiOSMOfflineReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService, param2: string): void;
				public static MultiOSMOfflineReverseGeocodingService_director_connect(param0: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_MultiOSMOfflineReverseGeocodingService_setLanguage(self: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService, lang: string): void;
				public static SwigDirector_MultiOSMOfflineReverseGeocodingService_calculateAddresses(self: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService, request: number): number;
				public static MultiOSMOfflineReverseGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService): string;
				public static MultiOSMOfflineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static MultiOSMOfflineReverseGeocodingService_remove(param0: number, param1: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService, param2: string): boolean;
				public constructor();
				public static MultiOSMOfflineReverseGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService): string;
				public static MultiOSMOfflineReverseGeocodingService_setLanguageSwigExplicitMultiOSMOfflineReverseGeocodingService(param0: number, param1: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService, param2: string): void;
				public static MultiOSMOfflineReverseGeocodingService_add(param0: number, param1: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService, param2: string): void;
				public static SwigDirector_MultiOSMOfflineReverseGeocodingService_getLanguage(self: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService): string;
				public static MultiOSMOfflineReverseGeocodingService_change_ownership(param0: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService, param1: number, param2: boolean): void;
				public static MultiOSMOfflineReverseGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService): number;
				public static MultiOSMOfflineReverseGeocodingService_getLanguageSwigExplicitMultiOSMOfflineReverseGeocodingService(param0: number, param1: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService): string;
				public static MultiOSMOfflineReverseGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static new_MultiOSMOfflineReverseGeocodingService(): number;
				public static MultiOSMOfflineReverseGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.MultiOSMOfflineReverseGeocodingService): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class OSMOfflineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.OSMOfflineGeocodingService>;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(obj: com.carto.geocoding.OSMOfflineGeocodingService): number;
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.OSMOfflineGeocodingService;
				public setMaxResults(maxResults: number): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.geocoding.GeocodingService): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public constructor(path: string);
				public delete(): void;
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.GeocodingService;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class OSMOfflineGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.OSMOfflineGeocodingServiceModuleJNI>;
				public static OSMOfflineGeocodingService_calculateAddressesSwigExplicitOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static SwigDirector_OSMOfflineGeocodingService_isAutocomplete(self: com.carto.geocoding.OSMOfflineGeocodingService): boolean;
				public static OSMOfflineGeocodingService_getMaxResultsSwigExplicitOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): number;
				public static OSMOfflineGeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): number;
				public static OSMOfflineGeocodingService_isAutocompleteSwigExplicitOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): boolean;
				public static SwigDirector_OSMOfflineGeocodingService_calculateAddresses(self: com.carto.geocoding.OSMOfflineGeocodingService, request: number): number;
				public static SwigDirector_OSMOfflineGeocodingService_getLanguage(self: com.carto.geocoding.OSMOfflineGeocodingService): string;
				public static OSMOfflineGeocodingService_change_ownership(param0: com.carto.geocoding.OSMOfflineGeocodingService, param1: number, param2: boolean): void;
				public static OSMOfflineGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): string;
				public static SwigDirector_OSMOfflineGeocodingService_setAutocomplete(self: com.carto.geocoding.OSMOfflineGeocodingService, autocomplete: boolean): void;
				public constructor();
				public static SwigDirector_OSMOfflineGeocodingService_setMaxResults(self: com.carto.geocoding.OSMOfflineGeocodingService, maxResults: number): void;
				public static OSMOfflineGeocodingService_director_connect(param0: com.carto.geocoding.OSMOfflineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static OSMOfflineGeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService, param2: boolean): void;
				public static SwigDirector_OSMOfflineGeocodingService_getMaxResults(self: com.carto.geocoding.OSMOfflineGeocodingService): number;
				public static OSMOfflineGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): string;
				public static SwigDirector_OSMOfflineGeocodingService_setLanguage(self: com.carto.geocoding.OSMOfflineGeocodingService, lang: string): void;
				public static OSMOfflineGeocodingService_getLanguageSwigExplicitOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): string;
				public static OSMOfflineGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService, param2: string): void;
				public static delete_OSMOfflineGeocodingService(param0: number): void;
				public static OSMOfflineGeocodingService_setAutocompleteSwigExplicitOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService, param2: boolean): void;
				public static OSMOfflineGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): number;
				public static OSMOfflineGeocodingService_setMaxResults(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService, param2: number): void;
				public static OSMOfflineGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static OSMOfflineGeocodingService_isAutocomplete(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): boolean;
				public static OSMOfflineGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static OSMOfflineGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): any;
				public static new_OSMOfflineGeocodingService(param0: string): number;
				public static OSMOfflineGeocodingService_setLanguageSwigExplicitOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService, param2: string): void;
				public static OSMOfflineGeocodingService_setMaxResultsSwigExplicitOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService, param2: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class OSMOfflineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.OSMOfflineReverseGeocodingService>;
				public static getCPtr(obj: com.carto.geocoding.ReverseGeocodingService): number;
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.OSMOfflineReverseGeocodingService;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.ReverseGeocodingService;
				public swigGetDirectorObject(): any;
				public constructor();
				public static getCPtr(obj: com.carto.geocoding.OSMOfflineReverseGeocodingService): number;
				public swigGetRawPtr(): number;
				public constructor(path: string);
				public delete(): void;
				public getLanguage(): string;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class OSMOfflineReverseGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.OSMOfflineReverseGeocodingServiceModuleJNI>;
				public static OSMOfflineReverseGeocodingService_getLanguageSwigExplicitOSMOfflineReverseGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService): string;
				public static OSMOfflineReverseGeocodingService_change_ownership(param0: com.carto.geocoding.OSMOfflineReverseGeocodingService, param1: number, param2: boolean): void;
				public static OSMOfflineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static OSMOfflineReverseGeocodingService_director_connect(param0: com.carto.geocoding.OSMOfflineReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static delete_OSMOfflineReverseGeocodingService(param0: number): void;
				public static SwigDirector_OSMOfflineReverseGeocodingService_calculateAddresses(self: com.carto.geocoding.OSMOfflineReverseGeocodingService, request: number): number;
				public static new_OSMOfflineReverseGeocodingService(param0: string): number;
				public static SwigDirector_OSMOfflineReverseGeocodingService_getLanguage(self: com.carto.geocoding.OSMOfflineReverseGeocodingService): string;
				public constructor();
				public static OSMOfflineReverseGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService): number;
				public static OSMOfflineReverseGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService): string;
				public static OSMOfflineReverseGeocodingService_calculateAddressesSwigExplicitOSMOfflineReverseGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static OSMOfflineReverseGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService): any;
				public static OSMOfflineReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService, param2: string): void;
				public static SwigDirector_OSMOfflineReverseGeocodingService_setLanguage(self: com.carto.geocoding.OSMOfflineReverseGeocodingService, lang: string): void;
				public static OSMOfflineReverseGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static OSMOfflineReverseGeocodingService_setLanguageSwigExplicitOSMOfflineReverseGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService, param2: string): void;
				public static OSMOfflineReverseGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class PackageManagerGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PackageManagerGeocodingService>;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public constructor(packageManager: com.carto.packagemanager.PackageManager);
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				public static getCPtr(obj: com.carto.geocoding.PackageManagerGeocodingService): number;
				public finalize(): void;
				public setMaxResults(maxResults: number): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.geocoding.GeocodingService): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.PackageManagerGeocodingService;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.GeocodingService;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class PackageManagerGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.PackageManagerGeocodingServiceModuleJNI>;
				public static PackageManagerGeocodingService_getLanguageSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): string;
				public static PackageManagerGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: string): void;
				public static PackageManagerGeocodingService_getMaxResultsSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): number;
				public static PackageManagerGeocodingService_change_ownership(param0: com.carto.geocoding.PackageManagerGeocodingService, param1: number, param2: boolean): void;
				public static SwigDirector_PackageManagerGeocodingService_setLanguage(self: com.carto.geocoding.PackageManagerGeocodingService, lang: string): void;
				public static PackageManagerGeocodingService_setMaxResultsSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: number): void;
				public static PackageManagerGeocodingService_isAutocompleteSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): boolean;
				public static PackageManagerGeocodingService_director_connect(param0: com.carto.geocoding.PackageManagerGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static PackageManagerGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): string;
				public static new_PackageManagerGeocodingService(param0: number, param1: com.carto.packagemanager.PackageManager): number;
				public constructor();
				public static SwigDirector_PackageManagerGeocodingService_setAutocomplete(self: com.carto.geocoding.PackageManagerGeocodingService, autocomplete: boolean): void;
				public static PackageManagerGeocodingService_calculateAddressesSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static PackageManagerGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): number;
				public static SwigDirector_PackageManagerGeocodingService_isAutocomplete(self: com.carto.geocoding.PackageManagerGeocodingService): boolean;
				public static PackageManagerGeocodingService_isAutocomplete(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): boolean;
				public static SwigDirector_PackageManagerGeocodingService_calculateAddresses(self: com.carto.geocoding.PackageManagerGeocodingService, request: number): number;
				public static PackageManagerGeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: boolean): void;
				public static PackageManagerGeocodingService_setMaxResults(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: number): void;
				public static PackageManagerGeocodingService_setAutocompleteSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: boolean): void;
				public static PackageManagerGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static PackageManagerGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): string;
				public static SwigDirector_PackageManagerGeocodingService_setMaxResults(self: com.carto.geocoding.PackageManagerGeocodingService, maxResults: number): void;
				public static delete_PackageManagerGeocodingService(param0: number): void;
				public static SwigDirector_PackageManagerGeocodingService_getLanguage(self: com.carto.geocoding.PackageManagerGeocodingService): string;
				public static PackageManagerGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): any;
				public static PackageManagerGeocodingService_setLanguageSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: string): void;
				public static PackageManagerGeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): number;
				public static PackageManagerGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static SwigDirector_PackageManagerGeocodingService_getMaxResults(self: com.carto.geocoding.PackageManagerGeocodingService): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class PackageManagerReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PackageManagerReverseGeocodingService>;
				public static getCPtr(obj: com.carto.geocoding.ReverseGeocodingService): number;
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(obj: com.carto.geocoding.PackageManagerReverseGeocodingService): number;
				public constructor(packageManager: com.carto.packagemanager.PackageManager);
				public finalize(): void;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.PackageManagerReverseGeocodingService;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.ReverseGeocodingService;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public getLanguage(): string;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class PackageManagerReverseGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.PackageManagerReverseGeocodingServiceModuleJNI>;
				public static PackageManagerReverseGeocodingService_calculateAddressesSwigExplicitPackageManagerReverseGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static PackageManagerReverseGeocodingService_director_connect(param0: com.carto.geocoding.PackageManagerReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static PackageManagerReverseGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.PackageManagerReverseGeocodingService): string;
				public static PackageManagerReverseGeocodingService_setLanguageSwigExplicitPackageManagerReverseGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerReverseGeocodingService, param2: string): void;
				public static PackageManagerReverseGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.PackageManagerReverseGeocodingService): string;
				public static PackageManagerReverseGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.PackageManagerReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static PackageManagerReverseGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.PackageManagerReverseGeocodingService): number;
				public constructor();
				public static PackageManagerReverseGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.PackageManagerReverseGeocodingService): any;
				public static SwigDirector_PackageManagerReverseGeocodingService_calculateAddresses(self: com.carto.geocoding.PackageManagerReverseGeocodingService, request: number): number;
				public static new_PackageManagerReverseGeocodingService(param0: number, param1: com.carto.packagemanager.PackageManager): number;
				public static SwigDirector_PackageManagerReverseGeocodingService_setLanguage(self: com.carto.geocoding.PackageManagerReverseGeocodingService, lang: string): void;
				public static PackageManagerReverseGeocodingService_getLanguageSwigExplicitPackageManagerReverseGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerReverseGeocodingService): string;
				public static PackageManagerReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static PackageManagerReverseGeocodingService_change_ownership(param0: com.carto.geocoding.PackageManagerReverseGeocodingService, param1: number, param2: boolean): void;
				public static delete_PackageManagerReverseGeocodingService(param0: number): void;
				public static PackageManagerReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.PackageManagerReverseGeocodingService, param2: string): void;
				public static SwigDirector_PackageManagerReverseGeocodingService_getLanguage(self: com.carto.geocoding.PackageManagerReverseGeocodingService): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class PeliasOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PeliasOnlineGeocodingService>;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.PeliasOnlineGeocodingService;
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				public finalize(): void;
				public getCustomServiceURL(): string;
				public static getCPtr(obj: com.carto.geocoding.PeliasOnlineGeocodingService): number;
				public setMaxResults(maxResults: number): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.geocoding.GeocodingService): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigTakeOwnership(): void;
				public constructor(apiKey: string);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.GeocodingService;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class PeliasOnlineGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.PeliasOnlineGeocodingServiceModuleJNI>;
				public static PeliasOnlineGeocodingService_setMaxResultsSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: number): void;
				public static SwigDirector_PeliasOnlineGeocodingService_setLanguage(self: com.carto.geocoding.PeliasOnlineGeocodingService, lang: string): void;
				public static delete_PeliasOnlineGeocodingService(param0: number): void;
				public static PeliasOnlineGeocodingService_change_ownership(param0: com.carto.geocoding.PeliasOnlineGeocodingService, param1: number, param2: boolean): void;
				public static SwigDirector_PeliasOnlineGeocodingService_getMaxResults(self: com.carto.geocoding.PeliasOnlineGeocodingService): number;
				public static PeliasOnlineGeocodingService_isAutocomplete(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): boolean;
				public static PeliasOnlineGeocodingService_getCustomServiceURL(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): string;
				public static PeliasOnlineGeocodingService_setMaxResults(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: number): void;
				public static PeliasOnlineGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static new_PeliasOnlineGeocodingService(param0: string): number;
				public static SwigDirector_PeliasOnlineGeocodingService_setAutocomplete(self: com.carto.geocoding.PeliasOnlineGeocodingService, autocomplete: boolean): void;
				public constructor();
				public static PeliasOnlineGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): any;
				public static PeliasOnlineGeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: boolean): void;
				public static SwigDirector_PeliasOnlineGeocodingService_getLanguage(self: com.carto.geocoding.PeliasOnlineGeocodingService): string;
				public static PeliasOnlineGeocodingService_calculateAddressesSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static PeliasOnlineGeocodingService_director_connect(param0: com.carto.geocoding.PeliasOnlineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static PeliasOnlineGeocodingService_getLanguageSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): string;
				public static PeliasOnlineGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: string): void;
				public static PeliasOnlineGeocodingService_getMaxResultsSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): number;
				public static PeliasOnlineGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static PeliasOnlineGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): string;
				public static SwigDirector_PeliasOnlineGeocodingService_isAutocomplete(self: com.carto.geocoding.PeliasOnlineGeocodingService): boolean;
				public static PeliasOnlineGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): string;
				public static PeliasOnlineGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): number;
				public static SwigDirector_PeliasOnlineGeocodingService_calculateAddresses(self: com.carto.geocoding.PeliasOnlineGeocodingService, request: number): number;
				public static PeliasOnlineGeocodingService_isAutocompleteSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): boolean;
				public static PeliasOnlineGeocodingService_setAutocompleteSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: boolean): void;
				public static SwigDirector_PeliasOnlineGeocodingService_setMaxResults(self: com.carto.geocoding.PeliasOnlineGeocodingService, maxResults: number): void;
				public static PeliasOnlineGeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): number;
				public static PeliasOnlineGeocodingService_setCustomServiceURL(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: string): void;
				public static PeliasOnlineGeocodingService_setLanguageSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: string): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class PeliasOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.PeliasOnlineReverseGeocodingService>;
				public static getCPtr(obj: com.carto.geocoding.ReverseGeocodingService): number;
				public static getCPtr(obj: com.carto.geocoding.PeliasOnlineReverseGeocodingService): number;
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public getCustomServiceURL(): string;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.ReverseGeocodingService;
				public swigGetDirectorObject(): any;
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.PeliasOnlineReverseGeocodingService;
				public delete(): void;
				public getLanguage(): string;
				public swigTakeOwnership(): void;
				public constructor(apiKey: string);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class PeliasOnlineReverseGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.PeliasOnlineReverseGeocodingServiceModuleJNI>;
				public static PeliasOnlineReverseGeocodingService_setLanguageSwigExplicitPeliasOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param2: string): void;
				public static PeliasOnlineReverseGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService): number;
				public static SwigDirector_PeliasOnlineReverseGeocodingService_setLanguage(self: com.carto.geocoding.PeliasOnlineReverseGeocodingService, lang: string): void;
				public static PeliasOnlineReverseGeocodingService_change_ownership(param0: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param1: number, param2: boolean): void;
				public static PeliasOnlineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_PeliasOnlineReverseGeocodingService_getLanguage(self: com.carto.geocoding.PeliasOnlineReverseGeocodingService): string;
				public static delete_PeliasOnlineReverseGeocodingService(param0: number): void;
				public static PeliasOnlineReverseGeocodingService_calculateAddressesSwigExplicitPeliasOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static PeliasOnlineReverseGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public constructor();
				public static PeliasOnlineReverseGeocodingService_getCustomServiceURL(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService): string;
				public static new_PeliasOnlineReverseGeocodingService(param0: string): number;
				public static PeliasOnlineReverseGeocodingService_director_connect(param0: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static PeliasOnlineReverseGeocodingService_setCustomServiceURL(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param2: string): void;
				public static PeliasOnlineReverseGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService): any;
				public static PeliasOnlineReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param2: string): void;
				public static SwigDirector_PeliasOnlineReverseGeocodingService_calculateAddresses(self: com.carto.geocoding.PeliasOnlineReverseGeocodingService, request: number): number;
				public static PeliasOnlineReverseGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService): string;
				public static PeliasOnlineReverseGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService): string;
				public static PeliasOnlineReverseGeocodingService_getLanguageSwigExplicitPeliasOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class ReverseGeocodingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.ReverseGeocodingRequest>;
				public swigCMemOwn: boolean;
				public getProjection(): com.carto.projections.Projection;
				public constructor(projection: com.carto.projections.Projection, location: com.carto.core.MapPos);
				public static getCPtr(obj: com.carto.geocoding.ReverseGeocodingRequest): number;
				public finalize(): void;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public setCustomParameter(param: string, value: com.carto.core.Variant): void;
				public getCustomParameter(param: string): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public setSearchRadius(radius: number): void;
				public delete(): void;
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
			export class ReverseGeocodingRequestModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.ReverseGeocodingRequestModuleJNI>;
				public static delete_ReverseGeocodingRequest(param0: number): void;
				public static ReverseGeocodingRequest_setSearchRadius(param0: number, param1: com.carto.geocoding.ReverseGeocodingRequest, param2: number): void;
				public static ReverseGeocodingRequest_toString(param0: number, param1: com.carto.geocoding.ReverseGeocodingRequest): string;
				public static ReverseGeocodingRequest_swigGetRawPtr(param0: number, param1: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static ReverseGeocodingRequest_setCustomParameter(param0: number, param1: com.carto.geocoding.ReverseGeocodingRequest, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static new_ReverseGeocodingRequest(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPos): number;
				public static ReverseGeocodingRequest_getLocation(param0: number, param1: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static ReverseGeocodingRequest_getCustomParameter(param0: number, param1: com.carto.geocoding.ReverseGeocodingRequest, param2: string): number;
				public static ReverseGeocodingRequest_getProjection(param0: number, param1: com.carto.geocoding.ReverseGeocodingRequest): number;
				public constructor();
				public static ReverseGeocodingRequest_getSearchRadius(param0: number, param1: com.carto.geocoding.ReverseGeocodingRequest): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class ReverseGeocodingService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.ReverseGeocodingService>;
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.geocoding.ReverseGeocodingService): number;
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.ReverseGeocodingService;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public getLanguage(): string;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class ReverseGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.ReverseGeocodingServiceModuleJNI>;
				public static SwigDirector_ReverseGeocodingService_calculateAddresses(self: com.carto.geocoding.ReverseGeocodingService, request: number): number;
				public static ReverseGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.ReverseGeocodingService): number;
				public static SwigDirector_ReverseGeocodingService_setLanguage(self: com.carto.geocoding.ReverseGeocodingService, lang: string): void;
				public static ReverseGeocodingService_change_ownership(param0: com.carto.geocoding.ReverseGeocodingService, param1: number, param2: boolean): void;
				public static SwigDirector_ReverseGeocodingService_getLanguage(self: com.carto.geocoding.ReverseGeocodingService): string;
				public static ReverseGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.ReverseGeocodingService): string;
				public constructor();
				public static ReverseGeocodingService_director_connect(param0: com.carto.geocoding.ReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static ReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.ReverseGeocodingService, param2: string): void;
				public static delete_ReverseGeocodingService(param0: number): void;
				public static ReverseGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.ReverseGeocodingService): any;
				public static ReverseGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.ReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static ReverseGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.ReverseGeocodingService): string;
				public static new_ReverseGeocodingService(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class TomTomOnlineGeocodingService extends com.carto.geocoding.GeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.TomTomOnlineGeocodingService>;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public swigDirectorDisconnect(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.TomTomOnlineGeocodingService;
				public isAutocomplete(): boolean;
				public setAutocomplete(autocomplete: boolean): void;
				public finalize(): void;
				public getCustomServiceURL(): string;
				public static getCPtr(obj: com.carto.geocoding.TomTomOnlineGeocodingService): number;
				public setMaxResults(maxResults: number): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.geocoding.GeocodingService): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getMaxResults(): number;
				public getLanguage(): string;
				public calculateAddresses(request: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigTakeOwnership(): void;
				public constructor(apiKey: string);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.GeocodingService;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class TomTomOnlineGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.TomTomOnlineGeocodingServiceModuleJNI>;
				public static new_TomTomOnlineGeocodingService(param0: string): number;
				public static TomTomOnlineGeocodingService_getMaxResultsSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): number;
				public static SwigDirector_TomTomOnlineGeocodingService_setMaxResults(self: com.carto.geocoding.TomTomOnlineGeocodingService, maxResults: number): void;
				public static SwigDirector_TomTomOnlineGeocodingService_setAutocomplete(self: com.carto.geocoding.TomTomOnlineGeocodingService, autocomplete: boolean): void;
				public static TomTomOnlineGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): string;
				public static TomTomOnlineGeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): number;
				public static TomTomOnlineGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static TomTomOnlineGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): any;
				public constructor();
				public static TomTomOnlineGeocodingService_isAutocompleteSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): boolean;
				public static TomTomOnlineGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: string): void;
				public static TomTomOnlineGeocodingService_director_connect(param0: com.carto.geocoding.TomTomOnlineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static TomTomOnlineGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): string;
				public static TomTomOnlineGeocodingService_change_ownership(param0: com.carto.geocoding.TomTomOnlineGeocodingService, param1: number, param2: boolean): void;
				public static TomTomOnlineGeocodingService_setMaxResultsSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: number): void;
				public static TomTomOnlineGeocodingService_isAutocomplete(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): boolean;
				public static TomTomOnlineGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): number;
				public static TomTomOnlineGeocodingService_setCustomServiceURL(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: string): void;
				public static TomTomOnlineGeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: boolean): void;
				public static delete_TomTomOnlineGeocodingService(param0: number): void;
				public static TomTomOnlineGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_TomTomOnlineGeocodingService_isAutocomplete(self: com.carto.geocoding.TomTomOnlineGeocodingService): boolean;
				public static SwigDirector_TomTomOnlineGeocodingService_setLanguage(self: com.carto.geocoding.TomTomOnlineGeocodingService, lang: string): void;
				public static TomTomOnlineGeocodingService_setAutocompleteSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: boolean): void;
				public static TomTomOnlineGeocodingService_setLanguageSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: string): void;
				public static SwigDirector_TomTomOnlineGeocodingService_getMaxResults(self: com.carto.geocoding.TomTomOnlineGeocodingService): number;
				public static TomTomOnlineGeocodingService_getLanguageSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): string;
				public static SwigDirector_TomTomOnlineGeocodingService_getLanguage(self: com.carto.geocoding.TomTomOnlineGeocodingService): string;
				public static TomTomOnlineGeocodingService_getCustomServiceURL(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): string;
				public static TomTomOnlineGeocodingService_setMaxResults(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: number): void;
				public static SwigDirector_TomTomOnlineGeocodingService_calculateAddresses(self: com.carto.geocoding.TomTomOnlineGeocodingService, request: number): number;
				public static TomTomOnlineGeocodingService_calculateAddressesSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class TomTomOnlineReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
				public static class: java.lang.Class<com.carto.geocoding.TomTomOnlineReverseGeocodingService>;
				public static getCPtr(obj: com.carto.geocoding.ReverseGeocodingService): number;
				public calculateAddresses(request: com.carto.geocoding.ReverseGeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigReleaseOwnership(): void;
				public setLanguage(lang: string): void;
				public static getCPtr(obj: com.carto.geocoding.TomTomOnlineReverseGeocodingService): number;
				public swigDirectorDisconnect(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.TomTomOnlineReverseGeocodingService;
				public finalize(): void;
				public getCustomServiceURL(): string;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geocoding.ReverseGeocodingService;
				public swigGetDirectorObject(): any;
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getLanguage(): string;
				public swigTakeOwnership(): void;
				public constructor(apiKey: string);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geocoding {
			export class TomTomOnlineReverseGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.TomTomOnlineReverseGeocodingServiceModuleJNI>;
				public static TomTomOnlineReverseGeocodingService_getLanguageSwigExplicitTomTomOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService): string;
				public static TomTomOnlineReverseGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService): number;
				public static SwigDirector_TomTomOnlineReverseGeocodingService_setLanguage(self: com.carto.geocoding.TomTomOnlineReverseGeocodingService, lang: string): void;
				public static TomTomOnlineReverseGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService): string;
				public static TomTomOnlineReverseGeocodingService_calculateAddressesSwigExplicitTomTomOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static TomTomOnlineReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param2: string): void;
				public static TomTomOnlineReverseGeocodingService_setCustomServiceURL(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param2: string): void;
				public static TomTomOnlineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_TomTomOnlineReverseGeocodingService_calculateAddresses(self: com.carto.geocoding.TomTomOnlineReverseGeocodingService, request: number): number;
				public static new_TomTomOnlineReverseGeocodingService(param0: string): number;
				public constructor();
				public static TomTomOnlineReverseGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static delete_TomTomOnlineReverseGeocodingService(param0: number): void;
				public static TomTomOnlineReverseGeocodingService_setLanguageSwigExplicitTomTomOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param2: string): void;
				public static TomTomOnlineReverseGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService): string;
				public static TomTomOnlineReverseGeocodingService_change_ownership(param0: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param1: number, param2: boolean): void;
				public static TomTomOnlineReverseGeocodingService_getCustomServiceURL(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService): string;
				public static TomTomOnlineReverseGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService): any;
				public static TomTomOnlineReverseGeocodingService_director_connect(param0: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_TomTomOnlineReverseGeocodingService_getLanguage(self: com.carto.geocoding.TomTomOnlineReverseGeocodingService): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class DouglasPeuckerGeometrySimplifier extends com.carto.geometry.GeometrySimplifier {
				public static class: java.lang.Class<com.carto.geometry.DouglasPeuckerGeometrySimplifier>;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.DouglasPeuckerGeometrySimplifier;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.geometry.GeometrySimplifier): number;
				public delete(): void;
				public finalize(): void;
				public constructor(tolerance: number);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.GeometrySimplifier;
				public swigGetClassName(): string;
				public static getCPtr(obj: com.carto.geometry.DouglasPeuckerGeometrySimplifier): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class DouglasPeuckerGeometrySimplifierModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.DouglasPeuckerGeometrySimplifierModuleJNI>;
				public static delete_DouglasPeuckerGeometrySimplifier(param0: number): void;
				public static DouglasPeuckerGeometrySimplifier_swigGetRawPtr(param0: number, param1: com.carto.geometry.DouglasPeuckerGeometrySimplifier): number;
				public static DouglasPeuckerGeometrySimplifier_swigGetDirectorObject(param0: number, param1: com.carto.geometry.DouglasPeuckerGeometrySimplifier): any;
				public static DouglasPeuckerGeometrySimplifier_swigGetClassName(param0: number, param1: com.carto.geometry.DouglasPeuckerGeometrySimplifier): string;
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
				public static class: java.lang.Class<com.carto.geometry.Feature>;
				public swigCMemOwn: boolean;
				public getProperties(): com.carto.core.Variant;
				public static getCPtr(obj: com.carto.geometry.Feature): number;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.Feature;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.geometry.FeatureBuilder): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.FeatureBuilder;
				public setGeometry(geometry: com.carto.geometry.Geometry): void;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public getPropertyValue(key: string): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
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
			export class FeatureBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.FeatureBuilderModuleJNI>;
				public static delete_FeatureBuilder(param0: number): void;
				public static new_FeatureBuilder(): number;
				public static FeatureBuilder_swigGetClassName(param0: number, param1: com.carto.geometry.FeatureBuilder): string;
				public static FeatureBuilder_setGeometry(param0: number, param1: com.carto.geometry.FeatureBuilder, param2: number, param3: com.carto.geometry.Geometry): void;
				public static FeatureBuilder_getGeometry(param0: number, param1: com.carto.geometry.FeatureBuilder): number;
				public static FeatureBuilder_swigGetRawPtr(param0: number, param1: com.carto.geometry.FeatureBuilder): number;
				public static FeatureBuilder_getPropertyValue(param0: number, param1: com.carto.geometry.FeatureBuilder, param2: string): number;
				public static FeatureBuilder_swigGetDirectorObject(param0: number, param1: com.carto.geometry.FeatureBuilder): any;
				public static FeatureBuilder_setPropertyValue(param0: number, param1: com.carto.geometry.FeatureBuilder, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static FeatureBuilder_buildFeature(param0: number, param1: com.carto.geometry.FeatureBuilder): number;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class FeatureCollection extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.FeatureCollection>;
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.geometry.FeatureCollection): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.FeatureCollection;
				public getFeatureCount(): number;
				public getFeature(index: number): com.carto.geometry.Feature;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(features: com.carto.geometry.FeatureVector);
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class FeatureCollectionModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.FeatureCollectionModuleJNI>;
				public static delete_FeatureCollection(param0: number): void;
				public static FeatureCollection_swigGetDirectorObject(param0: number, param1: com.carto.geometry.FeatureCollection): any;
				public static FeatureCollection_swigGetClassName(param0: number, param1: com.carto.geometry.FeatureCollection): string;
				public static new_FeatureCollection(param0: number, param1: com.carto.geometry.FeatureVector): number;
				public static FeatureCollection_getFeature(param0: number, param1: com.carto.geometry.FeatureCollection, param2: number): number;
				public static FeatureCollection_swigGetRawPtr(param0: number, param1: com.carto.geometry.FeatureCollection): number;
				public constructor();
				public static FeatureCollection_getFeatureCount(param0: number, param1: com.carto.geometry.FeatureCollection): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class FeatureModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.FeatureModuleJNI>;
				public static new_FeatureVector__SWIG_1(param0: number): number;
				public static FeatureVector_capacity(param0: number, param1: com.carto.geometry.FeatureVector): number;
				public static Feature_swigGetRawPtr(param0: number, param1: com.carto.geometry.Feature): number;
				public static FeatureVector_add(param0: number, param1: com.carto.geometry.FeatureVector, param2: number, param3: com.carto.geometry.Feature): void;
				public static delete_Feature(param0: number): void;
				public static FeatureVector_reserve(param0: number, param1: com.carto.geometry.FeatureVector, param2: number): void;
				public static Feature_swigGetClassName(param0: number, param1: com.carto.geometry.Feature): string;
				public constructor();
				public static Feature_swigGetDirectorObject(param0: number, param1: com.carto.geometry.Feature): any;
				public static FeatureVector_size(param0: number, param1: com.carto.geometry.FeatureVector): number;
				public static Feature_getGeometry(param0: number, param1: com.carto.geometry.Feature): number;
				public static FeatureVector_get(param0: number, param1: com.carto.geometry.FeatureVector, param2: number): number;
				public static FeatureVector_set(param0: number, param1: com.carto.geometry.FeatureVector, param2: number, param3: number, param4: com.carto.geometry.Feature): void;
				public static new_Feature(param0: number, param1: com.carto.geometry.Geometry, param2: number, param3: com.carto.core.Variant): number;
				public static delete_FeatureVector(param0: number): void;
				public static new_FeatureVector__SWIG_0(): number;
				public static Feature_getProperties(param0: number, param1: com.carto.geometry.Feature): number;
				public static FeatureVector_isEmpty(param0: number, param1: com.carto.geometry.FeatureVector): boolean;
				public static FeatureVector_clear(param0: number, param1: com.carto.geometry.FeatureVector): void;
				public static FeatureVector_swigGetRawPtr(param0: number, param1: com.carto.geometry.FeatureVector): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class FeatureVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.FeatureVector>;
				public swigCMemOwn: boolean;
				public add(x: com.carto.geometry.Feature): void;
				public set(i: number, val: com.carto.geometry.Feature): void;
				public finalize(): void;
				public constructor(n: number);
				public get(i: number): com.carto.geometry.Feature;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public capacity(): number;
				public static getCPtr(obj: com.carto.geometry.FeatureVector): number;
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
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.geometry.GeoJSONGeometryReader): number;
				public getTargetProjection(): com.carto.projections.Projection;
				public delete(): void;
				public finalize(): void;
				public setTargetProjection(proj: com.carto.projections.Projection): void;
				public readFeature(geoJSON: string): com.carto.geometry.Feature;
				public readGeometry(geoJSON: string): com.carto.geometry.Geometry;
				public readFeatureCollection(geoJSON: string): com.carto.geometry.FeatureCollection;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class GeoJSONGeometryReaderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeoJSONGeometryReaderModuleJNI>;
				public static delete_GeoJSONGeometryReader(param0: number): void;
				public static GeoJSONGeometryReader_readFeature(param0: number, param1: com.carto.geometry.GeoJSONGeometryReader, param2: string): number;
				public static GeoJSONGeometryReader_setTargetProjection(param0: number, param1: com.carto.geometry.GeoJSONGeometryReader, param2: number, param3: com.carto.projections.Projection): void;
				public static GeoJSONGeometryReader_readGeometry(param0: number, param1: com.carto.geometry.GeoJSONGeometryReader, param2: string): number;
				public static GeoJSONGeometryReader_readFeatureCollection(param0: number, param1: com.carto.geometry.GeoJSONGeometryReader, param2: string): number;
				public static new_GeoJSONGeometryReader(): number;
				public static GeoJSONGeometryReader_getTargetProjection(param0: number, param1: com.carto.geometry.GeoJSONGeometryReader): number;
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
				public swigCMemOwn: boolean;
				public delete(): void;
				public getZ(): boolean;
				public writeFeature(feature: com.carto.geometry.Feature): string;
				public finalize(): void;
				public static getCPtr(obj: com.carto.geometry.GeoJSONGeometryWriter): number;
				public setSourceProjection(proj: com.carto.projections.Projection): void;
				public writeGeometry(geometry: com.carto.geometry.Geometry): string;
				public writeFeatureCollection(featureCollection: com.carto.geometry.FeatureCollection): string;
				public setZ(z: boolean): void;
				public getSourceProjection(): com.carto.projections.Projection;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class GeoJSONGeometryWriterModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeoJSONGeometryWriterModuleJNI>;
				public static GeoJSONGeometryWriter_setSourceProjection(param0: number, param1: com.carto.geometry.GeoJSONGeometryWriter, param2: number, param3: com.carto.projections.Projection): void;
				public static GeoJSONGeometryWriter_getSourceProjection(param0: number, param1: com.carto.geometry.GeoJSONGeometryWriter): number;
				public static GeoJSONGeometryWriter_writeFeature(param0: number, param1: com.carto.geometry.GeoJSONGeometryWriter, param2: number, param3: com.carto.geometry.Feature): string;
				public static GeoJSONGeometryWriter_writeFeatureCollection(param0: number, param1: com.carto.geometry.GeoJSONGeometryWriter, param2: number, param3: com.carto.geometry.FeatureCollection): string;
				public static delete_GeoJSONGeometryWriter(param0: number): void;
				public static new_GeoJSONGeometryWriter(): number;
				public static GeoJSONGeometryWriter_getZ(param0: number, param1: com.carto.geometry.GeoJSONGeometryWriter): boolean;
				public static GeoJSONGeometryWriter_writeGeometry(param0: number, param1: com.carto.geometry.GeoJSONGeometryWriter, param2: number, param3: com.carto.geometry.Geometry): string;
				public constructor();
				public static GeoJSONGeometryWriter_setZ(param0: number, param1: com.carto.geometry.GeoJSONGeometryWriter, param2: boolean): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class Geometry extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.Geometry>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public static getCPtr(obj: com.carto.geometry.Geometry): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.Geometry;
				public hashCode(): number;
				public finalize(): void;
				public getCenterPos(): com.carto.core.MapPos;
				public getBounds(): com.carto.core.MapBounds;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class GeometryModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeometryModuleJNI>;
				public static Geometry_swigGetClassName(param0: number, param1: com.carto.geometry.Geometry): string;
				public static new_GeometryVector__SWIG_1(param0: number): number;
				public static GeometryVector_get(param0: number, param1: com.carto.geometry.GeometryVector, param2: number): number;
				public static GeometryVector_set(param0: number, param1: com.carto.geometry.GeometryVector, param2: number, param3: number, param4: com.carto.geometry.Geometry): void;
				public static GeometryVector_size(param0: number, param1: com.carto.geometry.GeometryVector): number;
				public static Geometry_swigGetRawPtr(param0: number, param1: com.carto.geometry.Geometry): number;
				public static GeometryVector_add(param0: number, param1: com.carto.geometry.GeometryVector, param2: number, param3: com.carto.geometry.Geometry): void;
				public static Geometry_swigGetDirectorObject(param0: number, param1: com.carto.geometry.Geometry): any;
				public static new_GeometryVector__SWIG_0(): number;
				public static delete_Geometry(param0: number): void;
				public constructor();
				public static GeometryVector_capacity(param0: number, param1: com.carto.geometry.GeometryVector): number;
				public static GeometryVector_isEmpty(param0: number, param1: com.carto.geometry.GeometryVector): boolean;
				public static delete_GeometryVector(param0: number): void;
				public static Geometry_getCenterPos(param0: number, param1: com.carto.geometry.Geometry): number;
				public static Geometry_getBounds(param0: number, param1: com.carto.geometry.Geometry): number;
				public static GeometryVector_clear(param0: number, param1: com.carto.geometry.GeometryVector): void;
				public static GeometryVector_reserve(param0: number, param1: com.carto.geometry.GeometryVector, param2: number): void;
				public static GeometryVector_swigGetRawPtr(param0: number, param1: com.carto.geometry.GeometryVector): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class GeometrySimplifier extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeometrySimplifier>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.geometry.GeometrySimplifier): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.GeometrySimplifier;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class GeometrySimplifierModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.GeometrySimplifierModuleJNI>;
				public static GeometrySimplifier_swigGetRawPtr(param0: number, param1: com.carto.geometry.GeometrySimplifier): number;
				public static GeometrySimplifier_swigGetClassName(param0: number, param1: com.carto.geometry.GeometrySimplifier): string;
				public static GeometrySimplifier_swigGetDirectorObject(param0: number, param1: com.carto.geometry.GeometrySimplifier): any;
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
				public static class: java.lang.Class<com.carto.geometry.GeometryVector>;
				public swigCMemOwn: boolean;
				public add(x: com.carto.geometry.Geometry): void;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public swigGetRawPtr(): number;
				public set(i: number, val: com.carto.geometry.Geometry): void;
				public delete(): void;
				public capacity(): number;
				public clear(): void;
				public get(i: number): com.carto.geometry.Geometry;
				public static getCPtr(obj: com.carto.geometry.GeometryVector): number;
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
				public static getCPtr(obj: com.carto.geometry.Geometry): number;
				public finalize(): void;
				public getCenterPos(): com.carto.core.MapPos;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(poses: com.carto.core.MapPosVector);
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.geometry.LineGeometry): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.LineGeometry;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.Geometry;
				public getPoses(): com.carto.core.MapPosVector;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class LineGeometryModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.LineGeometryModuleJNI>;
				public static new_LineGeometry(param0: number, param1: com.carto.core.MapPosVector): number;
				public static LineGeometry_swigGetDirectorObject(param0: number, param1: com.carto.geometry.LineGeometry): any;
				public static LineGeometryVector_clear(param0: number, param1: com.carto.geometry.LineGeometryVector): void;
				public static LineGeometryVector_add(param0: number, param1: com.carto.geometry.LineGeometryVector, param2: number, param3: com.carto.geometry.LineGeometry): void;
				public static LineGeometry_getCenterPos(param0: number, param1: com.carto.geometry.LineGeometry): number;
				public static LineGeometryVector_isEmpty(param0: number, param1: com.carto.geometry.LineGeometryVector): boolean;
				public static LineGeometry_SWIGSmartPtrUpcast(param0: number): number;
				public static delete_LineGeometry(param0: number): void;
				public constructor();
				public static LineGeometry_swigGetClassName(param0: number, param1: com.carto.geometry.LineGeometry): string;
				public static LineGeometryVector_swigGetRawPtr(param0: number, param1: com.carto.geometry.LineGeometryVector): number;
				public static LineGeometryVector_size(param0: number, param1: com.carto.geometry.LineGeometryVector): number;
				public static LineGeometryVector_set(param0: number, param1: com.carto.geometry.LineGeometryVector, param2: number, param3: number, param4: com.carto.geometry.LineGeometry): void;
				public static new_LineGeometryVector__SWIG_1(param0: number): number;
				public static delete_LineGeometryVector(param0: number): void;
				public static LineGeometry_swigGetRawPtr(param0: number, param1: com.carto.geometry.LineGeometry): number;
				public static LineGeometryVector_capacity(param0: number, param1: com.carto.geometry.LineGeometryVector): number;
				public static new_LineGeometryVector__SWIG_0(): number;
				public static LineGeometryVector_reserve(param0: number, param1: com.carto.geometry.LineGeometryVector, param2: number): void;
				public static LineGeometry_getPoses(param0: number, param1: com.carto.geometry.LineGeometry): number;
				public static LineGeometryVector_get(param0: number, param1: com.carto.geometry.LineGeometryVector, param2: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class LineGeometryVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.LineGeometryVector>;
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.geometry.LineGeometryVector): number;
				public set(i: number, val: com.carto.geometry.LineGeometry): void;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public add(x: com.carto.geometry.LineGeometry): void;
				public constructor();
				public size(): number;
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public static getCPtr(obj: com.carto.geometry.Geometry): number;
				public getGeometry(index: number): com.carto.geometry.Geometry;
				public finalize(): void;
				public getCenterPos(): com.carto.core.MapPos;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.geometry.MultiGeometry): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.Geometry;
				public getGeometryCount(): number;
				public constructor(geometries: com.carto.geometry.GeometryVector);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.MultiGeometry;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class MultiGeometryModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.MultiGeometryModuleJNI>;
				public static MultiGeometry_swigGetClassName(param0: number, param1: com.carto.geometry.MultiGeometry): string;
				public static delete_MultiGeometry(param0: number): void;
				public static MultiGeometry_getGeometry(param0: number, param1: com.carto.geometry.MultiGeometry, param2: number): number;
				public static MultiGeometry_swigGetDirectorObject(param0: number, param1: com.carto.geometry.MultiGeometry): any;
				public static MultiGeometry_getCenterPos(param0: number, param1: com.carto.geometry.MultiGeometry): number;
				public static MultiGeometry_swigGetRawPtr(param0: number, param1: com.carto.geometry.MultiGeometry): number;
				public static MultiGeometry_getGeometryCount(param0: number, param1: com.carto.geometry.MultiGeometry): number;
				public static MultiGeometry_SWIGSmartPtrUpcast(param0: number): number;
				public constructor();
				public static new_MultiGeometry(param0: number, param1: com.carto.geometry.GeometryVector): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class MultiLineGeometry extends com.carto.geometry.MultiGeometry {
				public static class: java.lang.Class<com.carto.geometry.MultiLineGeometry>;
				public static getCPtr(obj: com.carto.geometry.Geometry): number;
				public getGeometry(index: number): com.carto.geometry.Geometry;
				public finalize(): void;
				public getGeometry(index: number): com.carto.geometry.LineGeometry;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(geometries: com.carto.geometry.LineGeometryVector);
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.geometry.MultiGeometry): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.MultiLineGeometry;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.Geometry;
				public static getCPtr(obj: com.carto.geometry.MultiLineGeometry): number;
				public constructor(geometries: com.carto.geometry.GeometryVector);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.MultiGeometry;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class MultiLineGeometryModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.MultiLineGeometryModuleJNI>;
				public static delete_MultiLineGeometry(param0: number): void;
				public static MultiLineGeometry_getGeometry(param0: number, param1: com.carto.geometry.MultiLineGeometry, param2: number): number;
				public static MultiLineGeometry_swigGetRawPtr(param0: number, param1: com.carto.geometry.MultiLineGeometry): number;
				public static MultiLineGeometry_SWIGSmartPtrUpcast(param0: number): number;
				public static new_MultiLineGeometry(param0: number, param1: com.carto.geometry.LineGeometryVector): number;
				public static MultiLineGeometry_swigGetClassName(param0: number, param1: com.carto.geometry.MultiLineGeometry): string;
				public static MultiLineGeometry_swigGetDirectorObject(param0: number, param1: com.carto.geometry.MultiLineGeometry): any;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class MultiPointGeometry extends com.carto.geometry.MultiGeometry {
				public static class: java.lang.Class<com.carto.geometry.MultiPointGeometry>;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.MultiPointGeometry;
				public static getCPtr(obj: com.carto.geometry.Geometry): number;
				public getGeometry(index: number): com.carto.geometry.Geometry;
				public finalize(): void;
				public constructor(geometries: com.carto.geometry.PointGeometryVector);
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.geometry.MultiGeometry): number;
				public swigGetRawPtr(): number;
				public getGeometry(index: number): com.carto.geometry.PointGeometry;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.Geometry;
				public static getCPtr(obj: com.carto.geometry.MultiPointGeometry): number;
				public constructor(geometries: com.carto.geometry.GeometryVector);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.MultiGeometry;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class MultiPointGeometryModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.MultiPointGeometryModuleJNI>;
				public static new_MultiPointGeometry(param0: number, param1: com.carto.geometry.PointGeometryVector): number;
				public static MultiPointGeometry_swigGetDirectorObject(param0: number, param1: com.carto.geometry.MultiPointGeometry): any;
				public static MultiPointGeometry_SWIGSmartPtrUpcast(param0: number): number;
				public static MultiPointGeometry_swigGetRawPtr(param0: number, param1: com.carto.geometry.MultiPointGeometry): number;
				public static MultiPointGeometry_getGeometry(param0: number, param1: com.carto.geometry.MultiPointGeometry, param2: number): number;
				public constructor();
				public static delete_MultiPointGeometry(param0: number): void;
				public static MultiPointGeometry_swigGetClassName(param0: number, param1: com.carto.geometry.MultiPointGeometry): string;
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
				public static getCPtr(obj: com.carto.geometry.Geometry): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.MultiPolygonGeometry;
				public getGeometry(index: number): com.carto.geometry.Geometry;
				public finalize(): void;
				public getGeometry(index: number): com.carto.geometry.PolygonGeometry;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.geometry.MultiPolygonGeometry): number;
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.geometry.MultiGeometry): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.Geometry;
				public constructor(geometries: com.carto.geometry.GeometryVector);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.MultiGeometry;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class MultiPolygonGeometryModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.MultiPolygonGeometryModuleJNI>;
				public static MultiPolygonGeometry_swigGetDirectorObject(param0: number, param1: com.carto.geometry.MultiPolygonGeometry): any;
				public static delete_MultiPolygonGeometry(param0: number): void;
				public static new_MultiPolygonGeometry(param0: number, param1: com.carto.geometry.PolygonGeometryVector): number;
				public static MultiPolygonGeometry_swigGetClassName(param0: number, param1: com.carto.geometry.MultiPolygonGeometry): string;
				public static MultiPolygonGeometry_SWIGSmartPtrUpcast(param0: number): number;
				public constructor();
				public static MultiPolygonGeometry_getGeometry(param0: number, param1: com.carto.geometry.MultiPolygonGeometry, param2: number): number;
				public static MultiPolygonGeometry_swigGetRawPtr(param0: number, param1: com.carto.geometry.MultiPolygonGeometry): number;
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
				public static getCPtr(obj: com.carto.geometry.Geometry): number;
				public finalize(): void;
				public getCenterPos(): com.carto.core.MapPos;
				public getPos(): com.carto.core.MapPos;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.geometry.PointGeometry): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.Geometry;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.PointGeometry;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class PointGeometryModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.PointGeometryModuleJNI>;
				public static PointGeometry_getPos(param0: number, param1: com.carto.geometry.PointGeometry): number;
				public static PointGeometryVector_isEmpty(param0: number, param1: com.carto.geometry.PointGeometryVector): boolean;
				public static PointGeometryVector_add(param0: number, param1: com.carto.geometry.PointGeometryVector, param2: number, param3: com.carto.geometry.PointGeometry): void;
				public static new_PointGeometry(param0: number, param1: com.carto.core.MapPos): number;
				public static delete_PointGeometry(param0: number): void;
				public static PointGeometryVector_capacity(param0: number, param1: com.carto.geometry.PointGeometryVector): number;
				public static PointGeometry_SWIGSmartPtrUpcast(param0: number): number;
				public static PointGeometry_swigGetDirectorObject(param0: number, param1: com.carto.geometry.PointGeometry): any;
				public static PointGeometry_getCenterPos(param0: number, param1: com.carto.geometry.PointGeometry): number;
				public static PointGeometry_swigGetClassName(param0: number, param1: com.carto.geometry.PointGeometry): string;
				public static PointGeometry_swigGetRawPtr(param0: number, param1: com.carto.geometry.PointGeometry): number;
				public constructor();
				public static new_PointGeometryVector__SWIG_1(param0: number): number;
				public static PointGeometryVector_get(param0: number, param1: com.carto.geometry.PointGeometryVector, param2: number): number;
				public static PointGeometryVector_set(param0: number, param1: com.carto.geometry.PointGeometryVector, param2: number, param3: number, param4: com.carto.geometry.PointGeometry): void;
				public static delete_PointGeometryVector(param0: number): void;
				public static PointGeometryVector_clear(param0: number, param1: com.carto.geometry.PointGeometryVector): void;
				public static PointGeometryVector_swigGetRawPtr(param0: number, param1: com.carto.geometry.PointGeometryVector): number;
				public static new_PointGeometryVector__SWIG_0(): number;
				public static PointGeometryVector_size(param0: number, param1: com.carto.geometry.PointGeometryVector): number;
				public static PointGeometryVector_reserve(param0: number, param1: com.carto.geometry.PointGeometryVector, param2: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class PointGeometryVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.PointGeometryVector>;
				public swigCMemOwn: boolean;
				public set(i: number, val: com.carto.geometry.PointGeometry): void;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public swigGetRawPtr(): number;
				public get(i: number): com.carto.geometry.PointGeometry;
				public static getCPtr(obj: com.carto.geometry.PointGeometryVector): number;
				public delete(): void;
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
				public static getCPtr(obj: com.carto.geometry.Geometry): number;
				public static getCPtr(obj: com.carto.geometry.PolygonGeometry): number;
				public finalize(): void;
				public getCenterPos(): com.carto.core.MapPos;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(poses: com.carto.core.MapPosVector);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.PolygonGeometry;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public constructor(poses: com.carto.core.MapPosVector, holes: com.carto.core.MapPosVectorVector);
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.Geometry;
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
			export class PolygonGeometryModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.PolygonGeometryModuleJNI>;
				public static PolygonGeometry_getHoles(param0: number, param1: com.carto.geometry.PolygonGeometry): number;
				public static new_PolygonGeometryVector__SWIG_0(): number;
				public static PolygonGeometryVector_capacity(param0: number, param1: com.carto.geometry.PolygonGeometryVector): number;
				public static delete_PolygonGeometry(param0: number): void;
				public static PolygonGeometry_swigGetRawPtr(param0: number, param1: com.carto.geometry.PolygonGeometry): number;
				public static PolygonGeometryVector_set(param0: number, param1: com.carto.geometry.PolygonGeometryVector, param2: number, param3: number, param4: com.carto.geometry.PolygonGeometry): void;
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
				public static PolygonGeometry_swigGetDirectorObject(param0: number, param1: com.carto.geometry.PolygonGeometry): any;
				public static PolygonGeometry_SWIGSmartPtrUpcast(param0: number): number;
				public static PolygonGeometry_getPoses(param0: number, param1: com.carto.geometry.PolygonGeometry): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class PolygonGeometryVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.PolygonGeometryVector>;
				public swigCMemOwn: boolean;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public get(i: number): com.carto.geometry.PolygonGeometry;
				public swigGetRawPtr(): number;
				public set(i: number, val: com.carto.geometry.PolygonGeometry): void;
				public delete(): void;
				public capacity(): number;
				public clear(): void;
				public static getCPtr(obj: com.carto.geometry.PolygonGeometryVector): number;
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
				public static getCPtr(obj: com.carto.geometry.Feature): number;
				public getId(): number;
				public finalize(): void;
				public getLayerName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.Feature;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.VectorTileFeature;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public getMapTile(): com.carto.core.MapTile;
				public constructor(id: number, mapTile: com.carto.core.MapTile, layerName: string, geometry: com.carto.geometry.Geometry, properties: com.carto.core.Variant);
				public getDistance(): number;
				public constructor(geometry: com.carto.geometry.Geometry, properties: com.carto.core.Variant);
				public static getCPtr(obj: com.carto.geometry.VectorTileFeature): number;
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
				public static getCPtr(obj: com.carto.geometry.FeatureBuilder): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.FeatureBuilder;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.VectorTileFeatureBuilder;
				public getId(): number;
				public finalize(): void;
				public setLayerName(layerName: string): void;
				public buildVectorTileFeature(): com.carto.geometry.VectorTileFeature;
				public getLayerName(): string;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public setId(id: number): void;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public getMapTile(): com.carto.core.MapTile;
				public static getCPtr(obj: com.carto.geometry.VectorTileFeatureBuilder): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class VectorTileFeatureBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureBuilderModuleJNI>;
				public static VectorTileFeatureBuilder_getMapTile(param0: number, param1: com.carto.geometry.VectorTileFeatureBuilder): number;
				public static VectorTileFeatureBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public static VectorTileFeatureBuilder_setMapTile(param0: number, param1: com.carto.geometry.VectorTileFeatureBuilder, param2: number, param3: com.carto.core.MapTile): void;
				public static VectorTileFeatureBuilder_setLayerName(param0: number, param1: com.carto.geometry.VectorTileFeatureBuilder, param2: string): void;
				public static VectorTileFeatureBuilder_swigGetDirectorObject(param0: number, param1: com.carto.geometry.VectorTileFeatureBuilder): any;
				public constructor();
				public static VectorTileFeatureBuilder_swigGetClassName(param0: number, param1: com.carto.geometry.VectorTileFeatureBuilder): string;
				public static new_VectorTileFeatureBuilder(): number;
				public static VectorTileFeatureBuilder_swigGetRawPtr(param0: number, param1: com.carto.geometry.VectorTileFeatureBuilder): number;
				public static VectorTileFeatureBuilder_buildVectorTileFeature(param0: number, param1: com.carto.geometry.VectorTileFeatureBuilder): number;
				public static delete_VectorTileFeatureBuilder(param0: number): void;
				public static VectorTileFeatureBuilder_setId(param0: number, param1: com.carto.geometry.VectorTileFeatureBuilder, param2: number): void;
				public static VectorTileFeatureBuilder_getId(param0: number, param1: com.carto.geometry.VectorTileFeatureBuilder): number;
				public static VectorTileFeatureBuilder_getLayerName(param0: number, param1: com.carto.geometry.VectorTileFeatureBuilder): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class VectorTileFeatureCollection extends com.carto.geometry.FeatureCollection {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureCollection>;
				public static getCPtr(obj: com.carto.geometry.FeatureCollection): number;
				public getFeature(index: number): com.carto.geometry.VectorTileFeature;
				public constructor(features: com.carto.geometry.VectorTileFeatureVector);
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.FeatureCollection;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(features: com.carto.geometry.FeatureVector);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.geometry.VectorTileFeatureCollection;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getFeature(index: number): com.carto.geometry.Feature;
				public static getCPtr(obj: com.carto.geometry.VectorTileFeatureCollection): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class VectorTileFeatureCollectionModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureCollectionModuleJNI>;
				public static VectorTileFeatureCollection_getFeature(param0: number, param1: com.carto.geometry.VectorTileFeatureCollection, param2: number): number;
				public static VectorTileFeatureCollection_swigGetDirectorObject(param0: number, param1: com.carto.geometry.VectorTileFeatureCollection): any;
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
			export class VectorTileFeatureModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureModuleJNI>;
				public static VectorTileFeature_getMapTile(param0: number, param1: com.carto.geometry.VectorTileFeature): number;
				public static VectorTileFeatureVector_size(param0: number, param1: com.carto.geometry.VectorTileFeatureVector): number;
				public static delete_VectorTileFeatureVector(param0: number): void;
				public static new_VectorTileFeature(param0: number, param1: number, param2: com.carto.core.MapTile, param3: string, param4: number, param5: com.carto.geometry.Geometry, param6: number, param7: com.carto.core.Variant): number;
				public static VectorTileFeature_getLayerName(param0: number, param1: com.carto.geometry.VectorTileFeature): string;
				public static new_VectorTileFeatureVector__SWIG_1(param0: number): number;
				public static VectorTileFeatureVector_swigGetRawPtr(param0: number, param1: com.carto.geometry.VectorTileFeatureVector): number;
				public static VectorTileFeature_swigGetClassName(param0: number, param1: com.carto.geometry.VectorTileFeature): string;
				public static VectorTileFeature_getDistance(param0: number, param1: com.carto.geometry.VectorTileFeature): number;
				public static VectorTileFeatureVector_get(param0: number, param1: com.carto.geometry.VectorTileFeatureVector, param2: number): number;
				public static VectorTileFeatureVector_capacity(param0: number, param1: com.carto.geometry.VectorTileFeatureVector): number;
				public constructor();
				public static VectorTileFeature_swigGetDirectorObject(param0: number, param1: com.carto.geometry.VectorTileFeature): any;
				public static VectorTileFeatureVector_set(param0: number, param1: com.carto.geometry.VectorTileFeatureVector, param2: number, param3: number, param4: com.carto.geometry.VectorTileFeature): void;
				public static VectorTileFeature_SWIGSmartPtrUpcast(param0: number): number;
				public static VectorTileFeature_swigGetRawPtr(param0: number, param1: com.carto.geometry.VectorTileFeature): number;
				public static VectorTileFeatureVector_reserve(param0: number, param1: com.carto.geometry.VectorTileFeatureVector, param2: number): void;
				public static new_VectorTileFeatureVector__SWIG_0(): number;
				public static VectorTileFeatureVector_isEmpty(param0: number, param1: com.carto.geometry.VectorTileFeatureVector): boolean;
				public static VectorTileFeatureVector_clear(param0: number, param1: com.carto.geometry.VectorTileFeatureVector): void;
				public static VectorTileFeature_getId(param0: number, param1: com.carto.geometry.VectorTileFeature): number;
				public static VectorTileFeature_setDistance(param0: number, param1: com.carto.geometry.VectorTileFeature, param2: number): void;
				public static VectorTileFeatureVector_add(param0: number, param1: com.carto.geometry.VectorTileFeatureVector, param2: number, param3: com.carto.geometry.VectorTileFeature): void;
				public static delete_VectorTileFeature(param0: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class VectorTileFeatureVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureVector>;
				public swigCMemOwn: boolean;
				public get(i: number): com.carto.geometry.VectorTileFeature;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public add(x: com.carto.geometry.VectorTileFeature): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public capacity(): number;
				public clear(): void;
				public set(i: number, val: com.carto.geometry.VectorTileFeature): void;
				public isEmpty(): boolean;
				public reserve(n: number): void;
				public static getCPtr(obj: com.carto.geometry.VectorTileFeatureVector): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class WKBGeometryReader extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKBGeometryReader>;
				public swigCMemOwn: boolean;
				public readGeometry(wkbData: com.carto.core.BinaryData): com.carto.geometry.Geometry;
				public delete(): void;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.geometry.WKBGeometryReader): number;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class WKBGeometryReaderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKBGeometryReaderModuleJNI>;
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
			export class WKBGeometryWriter extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKBGeometryWriter>;
				public swigCMemOwn: boolean;
				public writeGeometry(geometry: com.carto.geometry.Geometry): com.carto.core.BinaryData;
				public delete(): void;
				public setBigEndian(bigEndian: boolean): void;
				public getZ(): boolean;
				public finalize(): void;
				public static getCPtr(obj: com.carto.geometry.WKBGeometryWriter): number;
				public getBigEndian(): boolean;
				public setZ(z: boolean): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class WKBGeometryWriterModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKBGeometryWriterModuleJNI>;
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
			export class WKTGeometryReader extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKTGeometryReader>;
				public swigCMemOwn: boolean;
				public readGeometry(wkt: string): com.carto.geometry.Geometry;
				public delete(): void;
				public static getCPtr(obj: com.carto.geometry.WKTGeometryReader): number;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class WKTGeometryReaderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKTGeometryReaderModuleJNI>;
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
			export class WKTGeometryWriter extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKTGeometryWriter>;
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.geometry.WKTGeometryWriter): number;
				public delete(): void;
				public getZ(): boolean;
				public finalize(): void;
				public writeGeometry(geometry: com.carto.geometry.Geometry): string;
				public setZ(z: boolean): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace geometry {
			export class WKTGeometryWriterModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.WKTGeometryWriterModuleJNI>;
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
			export class Bitmap extends java.lang.Object {
				public static class: java.lang.Class<com.carto.graphics.Bitmap>;
				public swigCMemOwn: boolean;
				public getSubBitmap(xOffset: number, yOffset: number, width: number, height: number): com.carto.graphics.Bitmap;
				public getHeight(): number;
				public getPixelData(): com.carto.core.BinaryData;
				public static getCPtr(obj: com.carto.graphics.Bitmap): number;
				public finalize(): void;
				public static createFromCompressed(compressedData: com.carto.core.BinaryData): com.carto.graphics.Bitmap;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getResizedBitmap(width: number, height: number): com.carto.graphics.Bitmap;
				public getPaddedBitmap(xPadding: number, yPadding: number): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public getWidth(): number;
				public equals(obj: any): boolean;
				public getRGBABitmap(): com.carto.graphics.Bitmap;
				public getColorFormat(): com.carto.graphics.ColorFormat;
				public delete(): void;
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
			export class BitmapModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.graphics.BitmapModuleJNI>;
				public static Bitmap_compressToPNG(param0: number, param1: com.carto.graphics.Bitmap): number;
				public static COLOR_FORMAT_RGB_565_get(): number;
				public static delete_Bitmap(param0: number): void;
				public static COLOR_FORMAT_UNSUPPORTED_get(): number;
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
			export class Color extends java.lang.Object {
				public static class: java.lang.Class<com.carto.graphics.Color>;
				public swigCMemOwn: boolean;
				public constructor(r: number, g: number, b: number, a: number);
				public getR(): number;
				public static getCPtr(obj: com.carto.graphics.Color): number;
				public getA(): number;
				public finalize(): void;
				public getB(): number;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
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
			export class ColorModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.graphics.ColorModuleJNI>;
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
			export class ViewState extends java.lang.Object {
				public static class: java.lang.Class<com.carto.graphics.ViewState>;
				public swigCMemOwn: boolean;
				public getHeight(): number;
				public getZoom(): number;
				public finalize(): void;
				public static getCPtr(obj: com.carto.graphics.ViewState): number;
				public getScreenWidth(): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getAspectRatio(): number;
				public getFar(): number;
				public isCameraChanged(): boolean;
				public swigGetRawPtr(): number;
				public getWidth(): number;
				public getFOVY(): number;
				public equals(obj: any): boolean;
				public getNear(): number;
				public getUnitToDPCoef(): number;
				public getScreenHeight(): number;
				public getUnitToPXCoef(): number;
				public delete(): void;
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
		export namespace graphics {
			export class ViewStateModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.graphics.ViewStateModuleJNI>;
				public static ViewState_getRotation(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_getNear(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_getAspectRatio(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_getDPI(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_isCameraChanged(param0: number, param1: com.carto.graphics.ViewState): boolean;
				public static ViewState_getHeight(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_getTilt(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_getUnitToDPCoef(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_getScreenWidth(param0: number, param1: com.carto.graphics.ViewState): number;
				public constructor();
				public static ViewState_getUnitToPXCoef(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_getDPToPX(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_getZoom0Distance(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_getScreenHeight(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_swigGetRawPtr(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_getZoom(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_getWidth(param0: number, param1: com.carto.graphics.ViewState): number;
				public static ViewState_getFOVY(param0: number, param1: com.carto.graphics.ViewState): number;
				public static delete_ViewState(param0: number): void;
				public static ViewState_getFar(param0: number, param1: com.carto.graphics.ViewState): number;
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
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(obj: com.carto.layers.ClusterElementBuilder): number;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.ClusterElementBuilder;
				public swigTakeOwnership(): void;
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
			export class ClusterElementBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.ClusterElementBuilderModuleJNI>;
				public static ClusterElementBuilder_getBuilderMode(param0: number, param1: com.carto.layers.ClusterElementBuilder): number;
				public static ClusterElementBuilder_change_ownership(param0: com.carto.layers.ClusterElementBuilder, param1: number, param2: boolean): void;
				public static ClusterElementBuilder_swigGetDirectorObject(param0: number, param1: com.carto.layers.ClusterElementBuilder): any;
				public static ClusterElementBuilder_buildClusterElementSwigExplicitClusterElementBuilder__SWIG_1(param0: number, param1: com.carto.layers.ClusterElementBuilder, param2: number, param3: com.carto.core.MapPos, param4: number, param5: com.carto.vectorelements.VectorElementVector): number;
				public static delete_ClusterElementBuilder(param0: number): void;
				public static ClusterElementBuilder_buildClusterElementSwigExplicitClusterElementBuilder__SWIG_0(param0: number, param1: com.carto.layers.ClusterElementBuilder, param2: number, param3: com.carto.core.MapPos, param4: number): number;
				public static ClusterElementBuilder_getBuilderModeSwigExplicitClusterElementBuilder(param0: number, param1: com.carto.layers.ClusterElementBuilder): number;
				public static ClusterElementBuilder_buildClusterElement__SWIG_1(param0: number, param1: com.carto.layers.ClusterElementBuilder, param2: number, param3: com.carto.core.MapPos, param4: number, param5: com.carto.vectorelements.VectorElementVector): number;
				public constructor();
				public static ClusterElementBuilder_swigGetRawPtr(param0: number, param1: com.carto.layers.ClusterElementBuilder): number;
				public static ClusterElementBuilder_swigGetClassName(param0: number, param1: com.carto.layers.ClusterElementBuilder): string;
				public static SwigDirector_ClusterElementBuilder_buildClusterElement__SWIG_1(self: com.carto.layers.ClusterElementBuilder, mapPos: number, elements: number): number;
				public static ClusterElementBuilder_buildClusterElement__SWIG_0(param0: number, param1: com.carto.layers.ClusterElementBuilder, param2: number, param3: com.carto.core.MapPos, param4: number): number;
				public static new_ClusterElementBuilder(): number;
				public static ClusterElementBuilder_director_connect(param0: com.carto.layers.ClusterElementBuilder, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_ClusterElementBuilder_getBuilderMode(self: com.carto.layers.ClusterElementBuilder): number;
				public static SwigDirector_ClusterElementBuilder_buildClusterElement__SWIG_0(self: com.carto.layers.ClusterElementBuilder, mapPos: number, elementCount: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class ClusteredVectorLayer extends com.carto.layers.VectorLayer {
				public static class: java.lang.Class<com.carto.layers.ClusteredVectorLayer>;
				public static getCPtr(obj: com.carto.layers.Layer): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.Layer;
				public finalize(): void;
				public constructor(dataSource: com.carto.datasources.VectorDataSource);
				public setMinimumClusterDistance(px: number): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.VectorLayer;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(dataSource: com.carto.datasources.LocalVectorDataSource, clusterElementBuilder: com.carto.layers.ClusterElementBuilder);
				public getMinimumClusterDistance(): number;
				public getMaximumClusterZoom(): number;
				public isAnimatedClusters(): boolean;
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.layers.VectorLayer): number;
				public swigGetRawPtr(): number;
				public setAnimatedClusters(animated: boolean): void;
				public delete(): void;
				public refresh(): void;
				public expandCluster(clusterElement: com.carto.vectorelements.VectorElement, px: number): boolean;
				public getClusterElementBuilder(): com.carto.layers.ClusterElementBuilder;
				public setMaximumClusterZoom(maxZoom: number): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.ClusteredVectorLayer;
				public static getCPtr(obj: com.carto.layers.ClusteredVectorLayer): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class ClusteredVectorLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.ClusteredVectorLayerModuleJNI>;
				public static ClusteredVectorLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.ClusteredVectorLayer): any;
				public static ClusteredVectorLayer_setMinimumClusterDistance(param0: number, param1: com.carto.layers.ClusteredVectorLayer, param2: number): void;
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
				public static ClusteredVectorLayer_expandCluster(param0: number, param1: com.carto.layers.ClusteredVectorLayer, param2: number, param3: com.carto.vectorelements.VectorElement, param4: number): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class EditableVectorLayer extends com.carto.layers.VectorLayer {
				public static class: java.lang.Class<com.carto.layers.EditableVectorLayer>;
				public static getCPtr(obj: com.carto.layers.Layer): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.Layer;
				public finalize(): void;
				public constructor(dataSource: com.carto.datasources.VectorDataSource);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.VectorLayer;
				public swigGetClassName(): string;
				public setSelectedVectorElement(element: com.carto.vectorelements.VectorElement): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.layers.VectorLayer): number;
				public static getCPtr(obj: com.carto.layers.EditableVectorLayer): number;
				public swigGetRawPtr(): number;
				public getVectorEditEventListener(): com.carto.layers.VectorEditEventListener;
				public delete(): void;
				public getSelectedVectorElement(): com.carto.vectorelements.VectorElement;
				public setVectorEditEventListener(listener: com.carto.layers.VectorEditEventListener): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.EditableVectorLayer;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class EditableVectorLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.EditableVectorLayerModuleJNI>;
				public static delete_EditableVectorLayer(param0: number): void;
				public static EditableVectorLayer_setVectorEditEventListener(param0: number, param1: com.carto.layers.EditableVectorLayer, param2: number, param3: com.carto.layers.VectorEditEventListener): void;
				public static EditableVectorLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.EditableVectorLayer): any;
				public static EditableVectorLayer_getSelectedVectorElement(param0: number, param1: com.carto.layers.EditableVectorLayer): number;
				public static EditableVectorLayer_SWIGSmartPtrUpcast(param0: number): number;
				public static EditableVectorLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.EditableVectorLayer): number;
				public static EditableVectorLayer_swigGetClassName(param0: number, param1: com.carto.layers.EditableVectorLayer): string;
				public static new_EditableVectorLayer(param0: number, param1: com.carto.datasources.VectorDataSource): number;
				public static EditableVectorLayer_getVectorEditEventListener(param0: number, param1: com.carto.layers.EditableVectorLayer): number;
				public static EditableVectorLayer_setSelectedVectorElement(param0: number, param1: com.carto.layers.EditableVectorLayer, param2: number, param3: com.carto.vectorelements.VectorElement): void;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class HillshadeRasterTileLayer extends com.carto.layers.RasterTileLayer {
				public static class: java.lang.Class<com.carto.layers.HillshadeRasterTileLayer>;
				public static getCPtr(obj: com.carto.layers.Layer): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.Layer;
				public getIlluminationDirection(): com.carto.core.MapVec;
				public getElevation(pos: com.carto.core.MapPos): number;
				public finalize(): void;
				public constructor(dataSource: com.carto.datasources.TileDataSource, elevationDecoder: com.carto.rastertiles.ElevationDecoder);
				public getElevations(poses: com.carto.core.MapPosVector): com.carto.core.DoubleVector;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public setIlluminationDirection(direction: com.carto.core.MapVec): void;
				public getHighlightColor(): com.carto.graphics.Color;
				public setNormalMapLightingShader(shader: string): void;
				public static getCPtr(obj: com.carto.layers.RasterTileLayer): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.TileLayer;
				public getShadowColor(): com.carto.graphics.Color;
				public getExagerateHeightScaleEnabled(): boolean;
				public constructor(dataSource: com.carto.datasources.TileDataSource);
				public setShadowColor(color: com.carto.graphics.Color): void;
				public setHeightScale(heightScale: number): void;
				public setIlluminationMapRotationEnabled(enabled: boolean): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.RasterTileLayer;
				public setHighlightColor(color: com.carto.graphics.Color): void;
				public swigGetClassName(): string;
				public getContrast(): number;
				public getAccentColor(): com.carto.graphics.Color;
				public setAccentColor(color: com.carto.graphics.Color): void;
				public swigGetDirectorObject(): any;
				public getNormalMapLightingShader(): string;
				public getIlluminationMapRotationEnabled(): boolean;
				public swigGetRawPtr(): number;
				public getHeightScale(): number;
				public static getCPtr(obj: com.carto.layers.HillshadeRasterTileLayer): number;
				public setContrast(contrast: number): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.HillshadeRasterTileLayer;
				public static getCPtr(obj: com.carto.layers.TileLayer): number;
				public setExagerateHeightScaleEnabled(enabled: boolean): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class HillshadeRasterTileLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.HillshadeRasterTileLayerModuleJNI>;
				public static new_HillshadeRasterTileLayer(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.rastertiles.ElevationDecoder): number;
				public static HillshadeRasterTileLayer_setIlluminationDirection(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer, param2: number, param3: com.carto.core.MapVec): void;
				public static delete_HillshadeRasterTileLayer(param0: number): void;
				public static HillshadeRasterTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer): string;
				public static HillshadeRasterTileLayer_setShadowColor(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer, param2: number, param3: com.carto.graphics.Color): void;
				public static HillshadeRasterTileLayer_getIlluminationMapRotationEnabled(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer): boolean;
				public constructor();
				public static HillshadeRasterTileLayer_getNormalMapLightingShader(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer): string;
				public static HillshadeRasterTileLayer_getHeightScale(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer): number;
				public static HillshadeRasterTileLayer_SWIGSmartPtrUpcast(param0: number): number;
				public static HillshadeRasterTileLayer_setHeightScale(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer, param2: number): void;
				public static HillshadeRasterTileLayer_getHighlightColor(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer): number;
				public static HillshadeRasterTileLayer_getElevation(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer, param2: number, param3: com.carto.core.MapPos): number;
				public static HillshadeRasterTileLayer_getContrast(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer): number;
				public static HillshadeRasterTileLayer_setExagerateHeightScaleEnabled(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer, param2: boolean): void;
				public static HillshadeRasterTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer): any;
				public static HillshadeRasterTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer): number;
				public static HillshadeRasterTileLayer_getIlluminationDirection(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer): number;
				public static HillshadeRasterTileLayer_getElevations(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer, param2: number, param3: com.carto.core.MapPosVector): number;
				public static HillshadeRasterTileLayer_setNormalMapLightingShader(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer, param2: string): void;
				public static HillshadeRasterTileLayer_getExagerateHeightScaleEnabled(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer): boolean;
				public static HillshadeRasterTileLayer_setAccentColor(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer, param2: number, param3: com.carto.graphics.Color): void;
				public static HillshadeRasterTileLayer_setContrast(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer, param2: number): void;
				public static HillshadeRasterTileLayer_setIlluminationMapRotationEnabled(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer, param2: boolean): void;
				public static HillshadeRasterTileLayer_getShadowColor(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer): number;
				public static HillshadeRasterTileLayer_setHighlightColor(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer, param2: number, param3: com.carto.graphics.Color): void;
				public static HillshadeRasterTileLayer_getAccentColor(param0: number, param1: com.carto.layers.HillshadeRasterTileLayer): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class Layer extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.Layer>;
				public swigCMemOwn: boolean;
				public isVisible(): boolean;
				public containsMetaDataKey(key: string): boolean;
				public static getCPtr(obj: com.carto.layers.Layer): number;
				public simulateClick(clickType: com.carto.ui.ClickType, screenPos: com.carto.core.ScreenPos, viewState: com.carto.graphics.ViewState): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.Layer;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public setCullDelay(delay: number): void;
				public delete(): void;
				public hashCode(): number;
				public isUpdateInProgress(): boolean;
				public getMetaData(): com.carto.core.StringVariantMap;
				public setVisible(visible: boolean): void;
				public getUpdatePriority(): number;
				public setMetaDataElement(key: string, element: com.carto.core.Variant): void;
				public setUpdatePriority(priority: number): void;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public getMetaDataElement(key: string): com.carto.core.Variant;
				public getVisibleZoomRange(): com.carto.core.MapRange;
				public setVisibleZoomRange(range: com.carto.core.MapRange): void;
				public swigGetRawPtr(): number;
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
			export class LayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.LayerModuleJNI>;
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
				public static Layer_getMetaData(param0: number, param1: com.carto.layers.Layer): number;
				public static LayerVector_reserve(param0: number, param1: com.carto.layers.LayerVector, param2: number): void;
				public static Layer_simulateClick(param0: number, param1: com.carto.layers.Layer, param2: number, param3: number, param4: com.carto.core.ScreenPos, param5: number, param6: com.carto.graphics.ViewState): void;
				public static Layer_getMetaDataElement(param0: number, param1: com.carto.layers.Layer, param2: string): number;
				public static Layer_setVisibleZoomRange(param0: number, param1: com.carto.layers.Layer, param2: number, param3: com.carto.core.MapRange): void;
				public static LayerVector_size(param0: number, param1: com.carto.layers.LayerVector): number;
				public static Layer_setVisible(param0: number, param1: com.carto.layers.Layer, param2: boolean): void;
				public static Layer_getUpdatePriority(param0: number, param1: com.carto.layers.Layer): number;
				public static new_LayerVector__SWIG_0(): number;
				public static delete_LayerVector(param0: number): void;
				public static Layer_setMetaData(param0: number, param1: com.carto.layers.Layer, param2: number, param3: com.carto.core.StringVariantMap): void;
				public static Layer_setCullDelay(param0: number, param1: com.carto.layers.Layer, param2: number): void;
				public static Layer_setMetaDataElement(param0: number, param1: com.carto.layers.Layer, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static Layer_getOpacity(param0: number, param1: com.carto.layers.Layer): number;
				public static LayerVector_set(param0: number, param1: com.carto.layers.LayerVector, param2: number, param3: number, param4: com.carto.layers.Layer): void;
				public static LayerVector_clear(param0: number, param1: com.carto.layers.LayerVector): void;
				public static Layer_swigGetDirectorObject(param0: number, param1: com.carto.layers.Layer): any;
				public static Layer_containsMetaDataKey(param0: number, param1: com.carto.layers.Layer, param2: string): boolean;
				public static Layer_refresh(param0: number, param1: com.carto.layers.Layer): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class LayerVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.LayerVector>;
				public swigCMemOwn: boolean;
				public get(i: number): com.carto.layers.Layer;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public add(x: com.carto.layers.Layer): void;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.layers.LayerVector): number;
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.RasterTileEventListener;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.layers.RasterTileEventListener): number;
				public onRasterTileClicked(clickInfo: com.carto.ui.RasterTileClickInfo): boolean;
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
				public static class: java.lang.Class<com.carto.layers.RasterTileEventListenerModuleJNI>;
				public static SwigDirector_RasterTileEventListener_onRasterTileClicked(self: com.carto.layers.RasterTileEventListener, clickInfo: number): boolean;
				public static RasterTileEventListener_onRasterTileClicked(param0: number, param1: com.carto.layers.RasterTileEventListener, param2: number, param3: com.carto.ui.RasterTileClickInfo): boolean;
				public static RasterTileEventListener_swigGetClassName(param0: number, param1: com.carto.layers.RasterTileEventListener): string;
				public static RasterTileEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.RasterTileEventListener): any;
				public static RasterTileEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.RasterTileEventListener): number;
				public static RasterTileEventListener_onRasterTileClickedSwigExplicitRasterTileEventListener(param0: number, param1: com.carto.layers.RasterTileEventListener, param2: number, param3: com.carto.ui.RasterTileClickInfo): boolean;
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
			export class RasterTileLayer extends com.carto.layers.TileLayer {
				public static class: java.lang.Class<com.carto.layers.RasterTileLayer>;
				public getTileFilterMode(): com.carto.layers.RasterTileFilterMode;
				public getTextureCacheCapacity(): number;
				public setTileFilterMode(filterMode: com.carto.layers.RasterTileFilterMode): void;
				public static getCPtr(obj: com.carto.layers.Layer): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.Layer;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.RasterTileLayer;
				public getTileBlendingSpeed(): number;
				public swigGetClassName(): string;
				public getRasterTileEventListener(): com.carto.layers.RasterTileEventListener;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public setTextureCacheCapacity(capacityInBytes: number): void;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.layers.RasterTileLayer): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.TileLayer;
				public setTileBlendingSpeed(speed: number): void;
				public static getCPtr(obj: com.carto.layers.TileLayer): number;
				public constructor(dataSource: com.carto.datasources.TileDataSource);
				public setRasterTileEventListener(eventListener: com.carto.layers.RasterTileEventListener): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class RasterTileLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.RasterTileLayerModuleJNI>;
				public static RasterTileLayer_SWIGSmartPtrUpcast(param0: number): number;
				public static new_RasterTileLayer(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static RasterTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.RasterTileLayer): any;
				public static RasterTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.RasterTileLayer): string;
				public static RasterTileLayer_setTextureCacheCapacity(param0: number, param1: com.carto.layers.RasterTileLayer, param2: number): void;
				public static RasterTileLayer_getTileBlendingSpeed(param0: number, param1: com.carto.layers.RasterTileLayer): number;
				public static RasterTileLayer_setRasterTileEventListener(param0: number, param1: com.carto.layers.RasterTileLayer, param2: number, param3: com.carto.layers.RasterTileEventListener): void;
				public constructor();
				public static RasterTileLayer_setTileFilterMode(param0: number, param1: com.carto.layers.RasterTileLayer, param2: number): void;
				public static RasterTileLayer_setTileBlendingSpeed(param0: number, param1: com.carto.layers.RasterTileLayer, param2: number): void;
				public static RasterTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.RasterTileLayer): number;
				public static RasterTileLayer_getTextureCacheCapacity(param0: number, param1: com.carto.layers.RasterTileLayer): number;
				public static RasterTileLayer_getTileFilterMode(param0: number, param1: com.carto.layers.RasterTileLayer): number;
				public static RasterTileLayer_getRasterTileEventListener(param0: number, param1: com.carto.layers.RasterTileLayer): number;
				public static delete_RasterTileLayer(param0: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class SolidLayer extends com.carto.layers.Layer {
				public static class: java.lang.Class<com.carto.layers.SolidLayer>;
				public static getCPtr(obj: com.carto.layers.Layer): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.Layer;
				public finalize(): void;
				public constructor(bitmap: com.carto.graphics.Bitmap);
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getBitmapScale(): number;
				public swigGetDirectorObject(): any;
				public getBitmap(): com.carto.graphics.Bitmap;
				public setBitmapScale(scale: number): void;
				public swigGetRawPtr(): number;
				public setColor(color: com.carto.graphics.Color): void;
				public delete(): void;
				public constructor(color: com.carto.graphics.Color);
				public getColor(): com.carto.graphics.Color;
				public isUpdateInProgress(): boolean;
				public static getCPtr(obj: com.carto.layers.SolidLayer): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.SolidLayer;
				public setBitmap(bitmap: com.carto.graphics.Bitmap): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class SolidLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.SolidLayerModuleJNI>;
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
				public static SolidLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.SolidLayer): any;
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
				public static class: java.lang.Class<com.carto.layers.TileLayer>;
				public setTileLoadListener(tileLoadListener: com.carto.layers.TileLoadListener): void;
				public getTileSubstitutionPolicy(): com.carto.layers.TileSubstitutionPolicy;
				public static getCPtr(obj: com.carto.layers.Layer): number;
				public setTileSubstitutionPolicy(policy: com.carto.layers.TileSubstitutionPolicy): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.Layer;
				public getZoomLevelBias(): number;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getDataSource(): com.carto.datasources.TileDataSource;
				public setUTFGridDataSource(dataSource: com.carto.datasources.TileDataSource): void;
				public calculateMapTile(mapPos: com.carto.core.MapPos, zoom: number): com.carto.core.MapTile;
				public getTileLoadListener(): com.carto.layers.TileLoadListener;
				public isSynchronizedRefresh(): boolean;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.TileLayer;
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
				public swigGetClassName(): string;
				public setPreloading(preloading: boolean): void;
				public getMaxUnderzoomLevel(): number;
				public swigGetDirectorObject(): any;
				public setMaxUnderzoomLevel(underzoomLevel: number): void;
				public swigGetRawPtr(): number;
				public calculateMapTileOrigin(mapTile: com.carto.core.MapTile): com.carto.core.MapPos;
				public setFrameNr(frameNr: number): void;
				public getFrameNr(): number;
				public isPreloading(): boolean;
				public static getCPtr(obj: com.carto.layers.TileLayer): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class TileLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.TileLayerModuleJNI>;
				public static TileLayer_clearTileCaches(param0: number, param1: com.carto.layers.TileLayer, param2: boolean): void;
				public static TileLayer_isPreloading(param0: number, param1: com.carto.layers.TileLayer): boolean;
				public static TileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.TileLayer): any;
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
			export class TileLoadListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.TileLoadListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.TileLoadListener;
				public static getCPtr(obj: com.carto.layers.TileLoadListener): number;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public onVisibleTilesLoaded(): void;
				public swigTakeOwnership(): void;
				public onPreloadingTilesLoaded(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class TileLoadListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.TileLoadListenerModuleJNI>;
				public static TileLoadListener_onPreloadingTilesLoadedSwigExplicitTileLoadListener(param0: number, param1: com.carto.layers.TileLoadListener): void;
				public static SwigDirector_TileLoadListener_onVisibleTilesLoaded(self: com.carto.layers.TileLoadListener): void;
				public static SwigDirector_TileLoadListener_onPreloadingTilesLoaded(self: com.carto.layers.TileLoadListener): void;
				public static TileLoadListener_onPreloadingTilesLoaded(param0: number, param1: com.carto.layers.TileLoadListener): void;
				public static TileLoadListener_onVisibleTilesLoadedSwigExplicitTileLoadListener(param0: number, param1: com.carto.layers.TileLoadListener): void;
				public static TileLoadListener_swigGetRawPtr(param0: number, param1: com.carto.layers.TileLoadListener): number;
				public static new_TileLoadListener(): number;
				public constructor();
				public static TileLoadListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.TileLoadListener): any;
				public static TileLoadListener_onVisibleTilesLoaded(param0: number, param1: com.carto.layers.TileLoadListener): void;
				public static TileLoadListener_swigGetClassName(param0: number, param1: com.carto.layers.TileLoadListener): string;
				public static TileLoadListener_director_connect(param0: com.carto.layers.TileLoadListener, param1: number, param2: boolean, param3: boolean): void;
				public static delete_TileLoadListener(param0: number): void;
				public static TileLoadListener_change_ownership(param0: com.carto.layers.TileLoadListener, param1: number, param2: boolean): void;
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
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.TorqueTileLayer;
				public countVisibleFeatures(frameNr: number): number;
				public static getCPtr(obj: com.carto.layers.Layer): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.Layer;
				public finalize(): void;
				public static getCPtr(obj: com.carto.layers.VectorTileLayer): number;
				public swigGetClassName(): string;
				public static getCPtr(obj: com.carto.layers.TorqueTileLayer): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(dataSource: com.carto.datasources.TileDataSource, decoder: com.carto.vectortiles.TorqueTileDecoder);
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public constructor(dataSource: com.carto.datasources.TileDataSource, decoder: com.carto.vectortiles.VectorTileDecoder);
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.TileLayer;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.VectorTileLayer;
				public static getCPtr(obj: com.carto.layers.TileLayer): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class TorqueTileLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.TorqueTileLayerModuleJNI>;
				public static TorqueTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.TorqueTileLayer): string;
				public static delete_TorqueTileLayer(param0: number): void;
				public static TorqueTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.TorqueTileLayer): any;
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
			export class UTFGridEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.UTFGridEventListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.layers.UTFGridEventListener): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.UTFGridEventListener;
				public delete(): void;
				public swigTakeOwnership(): void;
				public onUTFGridClicked(clickInfo: com.carto.ui.UTFGridClickInfo): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class UTFGridEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.UTFGridEventListenerModuleJNI>;
				public static UTFGridEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.UTFGridEventListener): number;
				public static UTFGridEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.UTFGridEventListener): any;
				public static UTFGridEventListener_swigGetClassName(param0: number, param1: com.carto.layers.UTFGridEventListener): string;
				public static SwigDirector_UTFGridEventListener_onUTFGridClicked(self: com.carto.layers.UTFGridEventListener, clickInfo: number): boolean;
				public static delete_UTFGridEventListener(param0: number): void;
				public static UTFGridEventListener_onUTFGridClicked(param0: number, param1: com.carto.layers.UTFGridEventListener, param2: number, param3: com.carto.ui.UTFGridClickInfo): boolean;
				public static UTFGridEventListener_change_ownership(param0: com.carto.layers.UTFGridEventListener, param1: number, param2: boolean): void;
				public static UTFGridEventListener_director_connect(param0: com.carto.layers.UTFGridEventListener, param1: number, param2: boolean, param3: boolean): void;
				public static UTFGridEventListener_onUTFGridClickedSwigExplicitUTFGridEventListener(param0: number, param1: com.carto.layers.UTFGridEventListener, param2: number, param3: com.carto.ui.UTFGridClickInfo): boolean;
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
				public static class: java.lang.Class<com.carto.layers.VectorEditEventListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public onElementDelete(element: com.carto.vectorelements.VectorElement): void;
				public swigDirectorDisconnect(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.VectorEditEventListener;
				public onDragStart(dragInfo: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
				public onElementModify(element: com.carto.vectorelements.VectorElement, geometry: com.carto.geometry.Geometry): void;
				public onElementDeselected(element: com.carto.vectorelements.VectorElement): void;
				public finalize(): void;
				public onDragMove(dragInfo: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
				public swigGetClassName(): string;
				public onDragEnd(dragInfo: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public onElementSelect(element: com.carto.vectorelements.VectorElement): boolean;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(obj: com.carto.layers.VectorEditEventListener): number;
				public onSelectDragPointStyle(element: com.carto.vectorelements.VectorElement, dragPointStyle: com.carto.layers.VectorElementDragPointStyle): com.carto.styles.PointStyle;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class VectorEditEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorEditEventListenerModuleJNI>;
				public static SwigDirector_VectorEditEventListener_onElementDelete(self: com.carto.layers.VectorEditEventListener, element: number): void;
				public static VectorEditEventListener_onDragStart(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
				public static VectorEditEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorEditEventListener): number;
				public static SwigDirector_VectorEditEventListener_onElementSelect(self: com.carto.layers.VectorEditEventListener, element: number): boolean;
				public static SwigDirector_VectorEditEventListener_onElementDeselected(self: com.carto.layers.VectorEditEventListener, element: number): void;
				public static SwigDirector_VectorEditEventListener_onDragStart(self: com.carto.layers.VectorEditEventListener, dragInfo: number): number;
				public static SwigDirector_VectorEditEventListener_onDragEnd(self: com.carto.layers.VectorEditEventListener, dragInfo: number): number;
				public static VectorEditEventListener_onDragMove(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
				public constructor();
				public static VectorEditEventListener_onDragMoveSwigExplicitVectorEditEventListener(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
				public static VectorEditEventListener_onElementSelect(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement): boolean;
				public static VectorEditEventListener_onElementSelectSwigExplicitVectorEditEventListener(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement): boolean;
				public static new_VectorEditEventListener(): number;
				public static VectorEditEventListener_swigGetClassName(param0: number, param1: com.carto.layers.VectorEditEventListener): string;
				public static SwigDirector_VectorEditEventListener_onDragMove(self: com.carto.layers.VectorEditEventListener, dragInfo: number): number;
				public static VectorEditEventListener_onElementModify(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement, param4: number, param5: com.carto.geometry.Geometry): void;
				public static VectorEditEventListener_director_connect(param0: com.carto.layers.VectorEditEventListener, param1: number, param2: boolean, param3: boolean): void;
				public static VectorEditEventListener_onElementDeselectedSwigExplicitVectorEditEventListener(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement): void;
				public static SwigDirector_VectorEditEventListener_onSelectDragPointStyle(self: com.carto.layers.VectorEditEventListener, element: number, dragPointStyle: number): number;
				public static SwigDirector_VectorEditEventListener_onElementModify(self: com.carto.layers.VectorEditEventListener, element: number, geometry: number): void;
				public static VectorEditEventListener_onElementDeselected(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement): void;
				public static VectorEditEventListener_onDragEnd(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
				public static VectorEditEventListener_onSelectDragPointStyle(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement, param4: number): number;
				public static VectorEditEventListener_change_ownership(param0: com.carto.layers.VectorEditEventListener, param1: number, param2: boolean): void;
				public static VectorEditEventListener_onElementDelete(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement): void;
				public static delete_VectorEditEventListener(param0: number): void;
				public static VectorEditEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.VectorEditEventListener): any;
				public static VectorEditEventListener_onDragStartSwigExplicitVectorEditEventListener(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
				public static VectorEditEventListener_onDragEndSwigExplicitVectorEditEventListener(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
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
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.VectorElementEventListener;
				public onVectorElementClicked(clickInfo: com.carto.ui.VectorElementClickInfo): boolean;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.layers.VectorElementEventListener): number;
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
				public static class: java.lang.Class<com.carto.layers.VectorElementEventListenerModuleJNI>;
				public static new_VectorElementEventListener(): number;
				public static SwigDirector_VectorElementEventListener_onVectorElementClicked(self: com.carto.layers.VectorElementEventListener, clickInfo: number): boolean;
				public static VectorElementEventListener_swigGetClassName(param0: number, param1: com.carto.layers.VectorElementEventListener): string;
				public static delete_VectorElementEventListener(param0: number): void;
				public static VectorElementEventListener_onVectorElementClicked(param0: number, param1: com.carto.layers.VectorElementEventListener, param2: number, param3: com.carto.ui.VectorElementClickInfo): boolean;
				public static VectorElementEventListener_onVectorElementClickedSwigExplicitVectorElementEventListener(param0: number, param1: com.carto.layers.VectorElementEventListener, param2: number, param3: com.carto.ui.VectorElementClickInfo): boolean;
				public static VectorElementEventListener_director_connect(param0: com.carto.layers.VectorElementEventListener, param1: number, param2: boolean, param3: boolean): void;
				public static VectorElementEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorElementEventListener): number;
				public static VectorElementEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.VectorElementEventListener): any;
				public static VectorElementEventListener_change_ownership(param0: com.carto.layers.VectorElementEventListener, param1: number, param2: boolean): void;
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
				public static getCPtr(obj: com.carto.layers.Layer): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.Layer;
				public finalize(): void;
				public constructor(dataSource: com.carto.datasources.VectorDataSource);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.VectorLayer;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.layers.VectorLayer): number;
				public getDataSource(): com.carto.datasources.VectorDataSource;
				public swigGetRawPtr(): number;
				public delete(): void;
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
			export class VectorLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorLayerModuleJNI>;
				public static VectorLayer_swigGetClassName(param0: number, param1: com.carto.layers.VectorLayer): string;
				public static delete_VectorLayer(param0: number): void;
				public static VectorLayer_setVectorElementEventListener(param0: number, param1: com.carto.layers.VectorLayer, param2: number, param3: com.carto.layers.VectorElementEventListener): void;
				public static new_VectorLayer(param0: number, param1: com.carto.datasources.VectorDataSource): number;
				public static VectorLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.VectorLayer): any;
				public static VectorLayer_setZBuffering(param0: number, param1: com.carto.layers.VectorLayer, param2: boolean): void;
				public constructor();
				public static VectorLayer_isUpdateInProgress(param0: number, param1: com.carto.layers.VectorLayer): boolean;
				public static VectorLayer_isZBuffering(param0: number, param1: com.carto.layers.VectorLayer): boolean;
				public static VectorLayer_getVectorElementEventListener(param0: number, param1: com.carto.layers.VectorLayer): number;
				public static VectorLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorLayer): number;
				public static VectorLayer_getDataSource(param0: number, param1: com.carto.layers.VectorLayer): number;
				public static VectorLayer_SWIGSmartPtrUpcast(param0: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class VectorTileEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorTileEventListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public onVectorTileClicked(clickInfo: com.carto.ui.VectorTileClickInfo): boolean;
				public swigTakeOwnership(): void;
				public static getCPtr(obj: com.carto.layers.VectorTileEventListener): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.VectorTileEventListener;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class VectorTileEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorTileEventListenerModuleJNI>;
				public static VectorTileEventListener_onVectorTileClickedSwigExplicitVectorTileEventListener(param0: number, param1: com.carto.layers.VectorTileEventListener, param2: number, param3: com.carto.ui.VectorTileClickInfo): boolean;
				public static VectorTileEventListener_director_connect(param0: com.carto.layers.VectorTileEventListener, param1: number, param2: boolean, param3: boolean): void;
				public static VectorTileEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.VectorTileEventListener): any;
				public static SwigDirector_VectorTileEventListener_onVectorTileClicked(self: com.carto.layers.VectorTileEventListener, clickInfo: number): boolean;
				public static VectorTileEventListener_swigGetClassName(param0: number, param1: com.carto.layers.VectorTileEventListener): string;
				public static VectorTileEventListener_onVectorTileClicked(param0: number, param1: com.carto.layers.VectorTileEventListener, param2: number, param3: com.carto.ui.VectorTileClickInfo): boolean;
				public static delete_VectorTileEventListener(param0: number): void;
				public static VectorTileEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorTileEventListener): number;
				public static new_VectorTileEventListener(): number;
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
				public static class: java.lang.Class<com.carto.layers.VectorTileLayer>;
				public getTileCacheCapacity(): number;
				public static getCPtr(obj: com.carto.layers.Layer): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.Layer;
				public getClickRadius(): number;
				public finalize(): void;
				public setRendererLayerFilter(filter: string): void;
				public static getCPtr(obj: com.carto.layers.VectorTileLayer): number;
				public getTileDecoder(): com.carto.vectortiles.VectorTileDecoder;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getRendererLayerFilter(): string;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.TileLayer;
				public getBuildingRenderOrder(): com.carto.layers.VectorTileRenderOrder;
				public setBuildingRenderOrder(renderOrder: com.carto.layers.VectorTileRenderOrder): void;
				public setClickHandlerLayerFilter(filter: string): void;
				public setVectorTileEventListener(eventListener: com.carto.layers.VectorTileEventListener): void;
				public setTileCacheCapacity(capacityInBytes: number): void;
				public swigGetClassName(): string;
				public setLabelBlendingSpeed(speed: number): void;
				public getVectorTileEventListener(): com.carto.layers.VectorTileEventListener;
				public swigGetDirectorObject(): any;
				public getClickHandlerLayerFilter(): string;
				public setLabelRenderOrder(renderOrder: com.carto.layers.VectorTileRenderOrder): void;
				public setLayerBlendingSpeed(speed: number): void;
				public swigGetRawPtr(): number;
				public constructor(dataSource: com.carto.datasources.TileDataSource, decoder: com.carto.vectortiles.VectorTileDecoder);
				public getLabelRenderOrder(): com.carto.layers.VectorTileRenderOrder;
				public setClickRadius(radius: number): void;
				public getLayerBlendingSpeed(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.layers.VectorTileLayer;
				public static getCPtr(obj: com.carto.layers.TileLayer): number;
				public getLabelBlendingSpeed(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace layers {
			export class VectorTileLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorTileLayerModuleJNI>;
				public static VectorTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.VectorTileLayer): string;
				public static VectorTileLayer_setLayerBlendingSpeed(param0: number, param1: com.carto.layers.VectorTileLayer, param2: number): void;
				public static VectorTileLayer_setLabelBlendingSpeed(param0: number, param1: com.carto.layers.VectorTileLayer, param2: number): void;
				public static delete_VectorTileLayer(param0: number): void;
				public static VectorTileLayer_getTileCacheCapacity(param0: number, param1: com.carto.layers.VectorTileLayer): number;
				public static VectorTileLayer_getLayerBlendingSpeed(param0: number, param1: com.carto.layers.VectorTileLayer): number;
				public static VectorTileLayer_getVectorTileEventListener(param0: number, param1: com.carto.layers.VectorTileLayer): number;
				public static VectorTileLayer_getBuildingRenderOrder(param0: number, param1: com.carto.layers.VectorTileLayer): number;
				public constructor();
				public static VectorTileLayer_getClickRadius(param0: number, param1: com.carto.layers.VectorTileLayer): number;
				public static VectorTileLayer_getClickHandlerLayerFilter(param0: number, param1: com.carto.layers.VectorTileLayer): string;
				public static VECTOR_TILE_RENDER_ORDER_LAYER_get(): number;
				public static VectorTileLayer_setRendererLayerFilter(param0: number, param1: com.carto.layers.VectorTileLayer, param2: string): void;
				public static new_VectorTileLayer(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.vectortiles.VectorTileDecoder): number;
				public static VectorTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorTileLayer): number;
				public static VectorTileLayer_getRendererLayerFilter(param0: number, param1: com.carto.layers.VectorTileLayer): string;
				public static VECTOR_TILE_RENDER_ORDER_HIDDEN_get(): number;
				public static VectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
				public static VectorTileLayer_getLabelBlendingSpeed(param0: number, param1: com.carto.layers.VectorTileLayer): number;
				public static VectorTileLayer_setTileCacheCapacity(param0: number, param1: com.carto.layers.VectorTileLayer, param2: number): void;
				public static VectorTileLayer_getLabelRenderOrder(param0: number, param1: com.carto.layers.VectorTileLayer): number;
				public static VectorTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.VectorTileLayer): any;
				public static VectorTileLayer_setClickHandlerLayerFilter(param0: number, param1: com.carto.layers.VectorTileLayer, param2: string): void;
				public static VectorTileLayer_setBuildingRenderOrder(param0: number, param1: com.carto.layers.VectorTileLayer, param2: number): void;
				public static VECTOR_TILE_RENDER_ORDER_LAST_get(): number;
				public static VectorTileLayer_getTileDecoder(param0: number, param1: com.carto.layers.VectorTileLayer): number;
				public static VectorTileLayer_setLabelRenderOrder(param0: number, param1: com.carto.layers.VectorTileLayer, param2: number): void;
				public static VectorTileLayer_setClickRadius(param0: number, param1: com.carto.layers.VectorTileLayer, param2: number): void;
				public static VectorTileLayer_setVectorTileEventListener(param0: number, param1: com.carto.layers.VectorTileLayer, param2: number, param3: com.carto.layers.VectorTileEventListener): void;
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
				public swigCMemOwn: boolean;
				public getNames(lang: string): com.carto.core.StringVector;
				public getTileMask(): com.carto.packagemanager.PackageTileMask;
				public getMetaInfo(): com.carto.packagemanager.PackageMetaInfo;
				public finalize(): void;
				public getName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getPackageType(): com.carto.packagemanager.PackageType;
				public swigGetRawPtr(): number;
				public constructor(packageId: string, packageType: com.carto.packagemanager.PackageType, version: number, size: java.math.BigInteger, serverURL: string, tileMask: com.carto.packagemanager.PackageTileMask, metaInfo: com.carto.packagemanager.PackageMetaInfo);
				public equals(obj: any): boolean;
				public delete(): void;
				public getVersion(): number;
				public hashCode(): number;
				public static getCPtr(obj: com.carto.packagemanager.PackageInfo): number;
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
				public static class: java.lang.Class<com.carto.packagemanager.PackageInfoModuleJNI>;
				public static PackageInfoVector_add(param0: number, param1: com.carto.packagemanager.PackageInfoVector, param2: number, param3: com.carto.packagemanager.PackageInfo): void;
				public static PackageInfo_getNames(param0: number, param1: com.carto.packagemanager.PackageInfo, param2: string): number;
				public static PackageInfoVector_size(param0: number, param1: com.carto.packagemanager.PackageInfoVector): number;
				public static PackageInfo_getName(param0: number, param1: com.carto.packagemanager.PackageInfo): string;
				public static PackageInfo_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.PackageInfo): number;
				public static PackageInfoVector_get(param0: number, param1: com.carto.packagemanager.PackageInfoVector, param2: number): number;
				public static PackageInfoVector_isEmpty(param0: number, param1: com.carto.packagemanager.PackageInfoVector): boolean;
				public static PackageInfo_getTileMask(param0: number, param1: com.carto.packagemanager.PackageInfo): number;
				public static PACKAGE_TYPE_VALHALLA_ROUTING_get(): number;
				public constructor();
				public static PackageInfoVector_reserve(param0: number, param1: com.carto.packagemanager.PackageInfoVector, param2: number): void;
				public static PackageInfo_getMetaInfo(param0: number, param1: com.carto.packagemanager.PackageInfo): number;
				public static PackageInfoVector_clear(param0: number, param1: com.carto.packagemanager.PackageInfoVector): void;
				public static PackageInfo_getVersion(param0: number, param1: com.carto.packagemanager.PackageInfo): number;
				public static new_PackageInfoVector__SWIG_1(param0: number): number;
				public static new_PackageInfo(param0: string, param1: number, param2: number, param3: java.math.BigInteger, param4: string, param5: number, param6: com.carto.packagemanager.PackageTileMask, param7: number, param8: com.carto.packagemanager.PackageMetaInfo): number;
				public static PackageInfo_getPackageId(param0: number, param1: com.carto.packagemanager.PackageInfo): string;
				public static delete_PackageInfo(param0: number): void;
				public static new_PackageInfoVector__SWIG_0(): number;
				public static PackageInfoVector_set(param0: number, param1: com.carto.packagemanager.PackageInfoVector, param2: number, param3: number, param4: com.carto.packagemanager.PackageInfo): void;
				public static PackageInfo_getPackageType(param0: number, param1: com.carto.packagemanager.PackageInfo): number;
				public static PackageInfoVector_capacity(param0: number, param1: com.carto.packagemanager.PackageInfoVector): number;
				public static PACKAGE_TYPE_MAP_get(): number;
				public static PACKAGE_TYPE_ROUTING_get(): number;
				public static PACKAGE_TYPE_GEOCODING_get(): number;
				public static PackageInfoVector_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.PackageInfoVector): number;
				public static delete_PackageInfoVector(param0: number): void;
				public static PackageInfo_getSize(param0: number, param1: com.carto.packagemanager.PackageInfo): java.math.BigInteger;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageInfoVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageInfoVector>;
				public swigCMemOwn: boolean;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public swigGetRawPtr(): number;
				public get(i: number): com.carto.packagemanager.PackageInfo;
				public delete(): void;
				public capacity(): number;
				public clear(): void;
				public set(i: number, val: com.carto.packagemanager.PackageInfo): void;
				public static getCPtr(obj: com.carto.packagemanager.PackageInfoVector): number;
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
				public swigCMemOwn: boolean;
				public startPackageDownload(packageId: string): boolean;
				public startPackageRemove(packageId: string): boolean;
				public startPackageListDownload(): boolean;
				public finalize(): void;
				public isAreaDownloaded(mapBounds: com.carto.core.MapBounds, zoom: number, projection: com.carto.projections.Projection): boolean;
				public setPackagePriority(packageId: string, priority: number): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getLocalPackage(packageId: string): com.carto.packagemanager.PackageInfo;
				public delete(): void;
				public start(): boolean;
				public hashCode(): number;
				public getServerPackageListAge(): number;
				public static getCPtr(obj: com.carto.packagemanager.PackageManager): number;
				public stop(wait: boolean): void;
				public constructor(packageListURL: string, dataFolder: string, serverEncKey: string, localEncKey: string);
				public setPackageManagerListener(listener: com.carto.packagemanager.PackageManagerListener): void;
				public getLocalPackages(): com.carto.packagemanager.PackageInfoVector;
				public suggestPackages(mapPos: com.carto.core.MapPos, projection: com.carto.projections.Projection): com.carto.packagemanager.PackageInfoVector;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.packagemanager.PackageManager;
				public cancelPackageTasks(packageId: string): void;
				public getServerPackages(): com.carto.packagemanager.PackageInfoVector;
				public getServerPackage(packageId: string): com.carto.packagemanager.PackageInfo;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public getLocalPackageStatus(packageId: string, version: number): com.carto.packagemanager.PackageStatus;
				public swigGetRawPtr(): number;
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
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public onStyleUpdated(styleName: string): void;
				public swigDirectorDisconnect(): void;
				public onPackageListFailed(): void;
				public onPackageFailed(id: string, version: number, errorType: com.carto.packagemanager.PackageErrorType): void;
				public onStyleFailed(styleName: string): void;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public onPackageListUpdated(): void;
				public onPackageUpdated(id: string, version: number): void;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public onPackageCancelled(id: string, version: number): void;
				public onPackageStatusChanged(id: string, version: number, status: com.carto.packagemanager.PackageStatus): void;
				public delete(): void;
				public static getCPtr(obj: com.carto.packagemanager.PackageManagerListener): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.packagemanager.PackageManagerListener;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageManagerListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageManagerListenerModuleJNI>;
				public static SwigDirector_PackageManagerListener_onPackageListUpdated(self: com.carto.packagemanager.PackageManagerListener): void;
				public static PackageManagerListener_swigGetDirectorObject(param0: number, param1: com.carto.packagemanager.PackageManagerListener): any;
				public static new_PackageManagerListener(): number;
				public static PackageManagerListener_onPackageListUpdated(param0: number, param1: com.carto.packagemanager.PackageManagerListener): void;
				public static SwigDirector_PackageManagerListener_onPackageFailed(self: com.carto.packagemanager.PackageManagerListener, id: string, version: number, errorType: number): void;
				public static PackageManagerListener_onPackageFailed(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number, param4: number): void;
				public static PackageManagerListener_swigGetClassName(param0: number, param1: com.carto.packagemanager.PackageManagerListener): string;
				public constructor();
				public static PackageManagerListener_onPackageListUpdatedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener): void;
				public static PackageManagerListener_onPackageListFailedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener): void;
				public static SwigDirector_PackageManagerListener_onStyleFailed(self: com.carto.packagemanager.PackageManagerListener, styleName: string): void;
				public static PackageManagerListener_onPackageFailedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number, param4: number): void;
				public static PackageManagerListener_change_ownership(param0: com.carto.packagemanager.PackageManagerListener, param1: number, param2: boolean): void;
				public static PackageManagerListener_onStyleFailed(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string): void;
				public static delete_PackageManagerListener(param0: number): void;
				public static PackageManagerListener_onPackageCancelledSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number): void;
				public static PackageManagerListener_onPackageCancelled(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number): void;
				public static PackageManagerListener_director_connect(param0: com.carto.packagemanager.PackageManagerListener, param1: number, param2: boolean, param3: boolean): void;
				public static PackageManagerListener_onStyleFailedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string): void;
				public static PackageManagerListener_onPackageStatusChanged(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number, param4: number, param5: com.carto.packagemanager.PackageStatus): void;
				public static PackageManagerListener_onPackageUpdatedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number): void;
				public static SwigDirector_PackageManagerListener_onPackageStatusChanged(self: com.carto.packagemanager.PackageManagerListener, id: string, version: number, status: number): void;
				public static SwigDirector_PackageManagerListener_onPackageCancelled(self: com.carto.packagemanager.PackageManagerListener, id: string, version: number): void;
				public static SwigDirector_PackageManagerListener_onPackageUpdated(self: com.carto.packagemanager.PackageManagerListener, id: string, version: number): void;
				public static SwigDirector_PackageManagerListener_onStyleUpdated(self: com.carto.packagemanager.PackageManagerListener, styleName: string): void;
				public static PackageManagerListener_onPackageListFailed(param0: number, param1: com.carto.packagemanager.PackageManagerListener): void;
				public static PackageManagerListener_onPackageStatusChangedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number, param4: number, param5: com.carto.packagemanager.PackageStatus): void;
				public static SwigDirector_PackageManagerListener_onPackageListFailed(self: com.carto.packagemanager.PackageManagerListener): void;
				public static PackageManagerListener_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.PackageManagerListener): number;
				public static PackageManagerListener_onPackageUpdated(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number): void;
				public static PackageManagerListener_onStyleUpdatedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string): void;
				public static PackageManagerListener_onStyleUpdated(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageManagerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageManagerModuleJNI>;
				public static PackageManager_getServerPackage(param0: number, param1: com.carto.packagemanager.PackageManager, param2: string): number;
				public static PackageManager_swigGetDirectorObject(param0: number, param1: com.carto.packagemanager.PackageManager): any;
				public static PackageManager_setPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManager, param2: number, param3: com.carto.packagemanager.PackageManagerListener): void;
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
				public static PackageManager_isAreaDownloaded(param0: number, param1: com.carto.packagemanager.PackageManager, param2: number, param3: com.carto.core.MapBounds, param4: number, param5: number, param6: com.carto.projections.Projection): boolean;
				public static delete_PackageManager(param0: number): void;
				public static PackageManager_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.PackageManager): number;
				public static PackageManager_suggestPackages(param0: number, param1: com.carto.packagemanager.PackageManager, param2: number, param3: com.carto.core.MapPos, param4: number, param5: com.carto.projections.Projection): number;
				public static PackageManager_setPackagePriority(param0: number, param1: com.carto.packagemanager.PackageManager, param2: string, param3: number): void;
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
			export class PackageMetaInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageMetaInfo>;
				public swigCMemOwn: boolean;
				public getVariant(): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.packagemanager.PackageMetaInfo): number;
				public constructor(var_: com.carto.core.Variant);
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageMetaInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageMetaInfoModuleJNI>;
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
			export class PackageStatus extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageStatus>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public getCurrentAction(): com.carto.packagemanager.PackageAction;
				public delete(): void;
				public getProgress(): number;
				public hashCode(): number;
				public finalize(): void;
				public static getCPtr(obj: com.carto.packagemanager.PackageStatus): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(currentAction: com.carto.packagemanager.PackageAction, paused: boolean, progress: number);
				public isPaused(): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageStatusModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageStatusModuleJNI>;
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
			export class PackageTileMask extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageTileMask>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public getMaxZoomLevel(): number;
				public hashCode(): number;
				public static getCPtr(obj: com.carto.packagemanager.PackageTileMask): number;
				public finalize(): void;
				public getTileStatus(tile: com.carto.core.MapTile): com.carto.packagemanager.PackageTileStatus;
				public getBoundingPolygon(projection: com.carto.projections.Projection): com.carto.geometry.MultiPolygonGeometry;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getStringValue(): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace packagemanager {
			export class PackageTileMaskModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageTileMaskModuleJNI>;
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
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.projections.EPSG3857;
				public finalize(): void;
				public getName(): string;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public static getCPtr(obj: com.carto.projections.Projection): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(obj: com.carto.projections.EPSG3857): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.projections.Projection;
				public fromWgs84(wgs84Pos: com.carto.core.MapPos): com.carto.core.MapPos;
				public toWgs84(mapPos: com.carto.core.MapPos): com.carto.core.MapPos;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace projections {
			export class EPSG3857ModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.projections.EPSG3857ModuleJNI>;
				public static EPSG3857_swigGetDirectorObject(param0: number, param1: com.carto.projections.EPSG3857): any;
				public static EPSG3857_getName(param0: number, param1: com.carto.projections.EPSG3857): string;
				public static EPSG3857_swigGetClassName(param0: number, param1: com.carto.projections.EPSG3857): string;
				public static new_EPSG3857(): number;
				public static EPSG3857_fromWgs84(param0: number, param1: com.carto.projections.EPSG3857, param2: number, param3: com.carto.core.MapPos): number;
				public static delete_EPSG3857(param0: number): void;
				public static EPSG3857_swigGetRawPtr(param0: number, param1: com.carto.projections.EPSG3857): number;
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
			export class EPSG4326 extends com.carto.projections.Projection {
				public static class: java.lang.Class<com.carto.projections.EPSG4326>;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.projections.EPSG4326;
				public finalize(): void;
				public getName(): string;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public static getCPtr(obj: com.carto.projections.Projection): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(obj: com.carto.projections.EPSG4326): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.projections.Projection;
				public fromWgs84(wgs84Pos: com.carto.core.MapPos): com.carto.core.MapPos;
				public toWgs84(mapPos: com.carto.core.MapPos): com.carto.core.MapPos;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace projections {
			export class EPSG4326ModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.projections.EPSG4326ModuleJNI>;
				public static EPSG4326_swigGetDirectorObject(param0: number, param1: com.carto.projections.EPSG4326): any;
				public static EPSG4326_toWgs84(param0: number, param1: com.carto.projections.EPSG4326, param2: number, param3: com.carto.core.MapPos): number;
				public static EPSG4326_swigGetClassName(param0: number, param1: com.carto.projections.EPSG4326): string;
				public static EPSG4326_swigGetRawPtr(param0: number, param1: com.carto.projections.EPSG4326): number;
				public static EPSG4326_SWIGSmartPtrUpcast(param0: number): number;
				public static EPSG4326_fromWgs84(param0: number, param1: com.carto.projections.EPSG4326, param2: number, param3: com.carto.core.MapPos): number;
				public static new_EPSG4326(): number;
				public static delete_EPSG4326(param0: number): void;
				public static EPSG4326_getName(param0: number, param1: com.carto.projections.EPSG4326): string;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace projections {
			export class Projection extends java.lang.Object {
				public static class: java.lang.Class<com.carto.projections.Projection>;
				public swigCMemOwn: boolean;
				public toLatLong(x: number, y: number): com.carto.core.MapPos;
				public finalize(): void;
				public getBounds(): com.carto.core.MapBounds;
				public getName(): string;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public fromLatLong(lat: number, lng: number): com.carto.core.MapPos;
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.projections.Projection): number;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public toWgs84(pos: com.carto.core.MapPos): com.carto.core.MapPos;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.projections.Projection;
				public fromWgs84(pos: com.carto.core.MapPos): com.carto.core.MapPos;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace projections {
			export class ProjectionModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.projections.ProjectionModuleJNI>;
				public static Projection_toWgs84(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPos): number;
				public static Projection_fromLatLong(param0: number, param1: com.carto.projections.Projection, param2: number, param3: number): number;
				public static Projection_swigGetDirectorObject(param0: number, param1: com.carto.projections.Projection): any;
				public static Projection_getBounds(param0: number, param1: com.carto.projections.Projection): number;
				public static Projection_swigGetRawPtr(param0: number, param1: com.carto.projections.Projection): number;
				public static Projection_fromWgs84(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPos): number;
				public static Projection_getName(param0: number, param1: com.carto.projections.Projection): string;
				public static delete_Projection(param0: number): void;
				public static Projection_toLatLong(param0: number, param1: com.carto.projections.Projection, param2: number, param3: number): number;
				public constructor();
				public static Projection_swigGetClassName(param0: number, param1: com.carto.projections.Projection): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace rastertiles {
			export class ElevationDecoder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.rastertiles.ElevationDecoder>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.rastertiles.ElevationDecoder;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.rastertiles.ElevationDecoder): number;
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace rastertiles {
			export class ElevationDecoderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.rastertiles.ElevationDecoderModuleJNI>;
				public static delete_ElevationDecoder(param0: number): void;
				public static ElevationDecoder_swigGetClassName(param0: number, param1: com.carto.rastertiles.ElevationDecoder): string;
				public static ElevationDecoder_swigGetDirectorObject(param0: number, param1: com.carto.rastertiles.ElevationDecoder): any;
				public static ElevationDecoder_swigGetRawPtr(param0: number, param1: com.carto.rastertiles.ElevationDecoder): number;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace rastertiles {
			export class MapBoxElevationDataDecoder extends com.carto.rastertiles.ElevationDecoder {
				public static class: java.lang.Class<com.carto.rastertiles.MapBoxElevationDataDecoder>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.rastertiles.ElevationDecoder): number;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.rastertiles.MapBoxElevationDataDecoder;
				public constructor();
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public static getCPtr(obj: com.carto.rastertiles.MapBoxElevationDataDecoder): number;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.rastertiles.ElevationDecoder;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace rastertiles {
			export class MapBoxElevationDataDecoderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.rastertiles.MapBoxElevationDataDecoderModuleJNI>;
				public static MapBoxElevationDataDecoder_swigGetDirectorObject(param0: number, param1: com.carto.rastertiles.MapBoxElevationDataDecoder): any;
				public static MapBoxElevationDataDecoder_change_ownership(param0: com.carto.rastertiles.MapBoxElevationDataDecoder, param1: number, param2: boolean): void;
				public static MapBoxElevationDataDecoder_director_connect(param0: com.carto.rastertiles.MapBoxElevationDataDecoder, param1: number, param2: boolean, param3: boolean): void;
				public static MapBoxElevationDataDecoder_swigGetRawPtr(param0: number, param1: com.carto.rastertiles.MapBoxElevationDataDecoder): number;
				public static delete_MapBoxElevationDataDecoder(param0: number): void;
				public static new_MapBoxElevationDataDecoder(): number;
				public constructor();
				public static MapBoxElevationDataDecoder_swigGetClassName(param0: number, param1: com.carto.rastertiles.MapBoxElevationDataDecoder): string;
				public static MapBoxElevationDataDecoder_SWIGSmartPtrUpcast(param0: number): number;
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
				public static getCPtr(obj: com.carto.rastertiles.SWIGTYPE_p_std__arrayT_double_4_t): number;
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
				public static getCPtr(obj: com.carto.rastertiles.SWIGTYPE_p_std__arrayT_float_4_t): number;
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
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.rastertiles.TerrariumElevationDataDecoder;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.rastertiles.ElevationDecoder): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public static getCPtr(obj: com.carto.rastertiles.TerrariumElevationDataDecoder): number;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.rastertiles.ElevationDecoder;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace rastertiles {
			export class TerrariumElevationDataDecoderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.rastertiles.TerrariumElevationDataDecoderModuleJNI>;
				public static TerrariumElevationDataDecoder_swigGetDirectorObject(param0: number, param1: com.carto.rastertiles.TerrariumElevationDataDecoder): any;
				public static TerrariumElevationDataDecoder_swigGetClassName(param0: number, param1: com.carto.rastertiles.TerrariumElevationDataDecoder): string;
				public static delete_TerrariumElevationDataDecoder(param0: number): void;
				public static TerrariumElevationDataDecoder_swigGetRawPtr(param0: number, param1: com.carto.rastertiles.TerrariumElevationDataDecoder): number;
				public static TerrariumElevationDataDecoder_SWIGSmartPtrUpcast(param0: number): number;
				public static TerrariumElevationDataDecoder_change_ownership(param0: com.carto.rastertiles.TerrariumElevationDataDecoder, param1: number, param2: boolean): void;
				public static new_TerrariumElevationDataDecoder(): number;
				public static TerrariumElevationDataDecoder_director_connect(param0: com.carto.rastertiles.TerrariumElevationDataDecoder, param1: number, param2: boolean, param3: boolean): void;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace renderers {
			export class MapRenderer extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.MapRenderer>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public setMapRendererListener(listener: com.carto.renderers.MapRendererListener): void;
				public getViewState(): com.carto.graphics.ViewState;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public static getCPtr(obj: com.carto.renderers.MapRenderer): number;
				public finalize(): void;
				public captureRendering(listener: com.carto.renderers.RendererCaptureListener, waitWhileUpdating: boolean): void;
				public getMapRendererListener(): com.carto.renderers.MapRendererListener;
				public requestRedraw(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace renderers {
			export class MapRendererListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.MapRendererListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public onBeforeDrawFrame(): void;
				public delete(): void;
				public onSurfaceChanged(width: number, height: number): void;
				public swigTakeOwnership(): void;
				public static getCPtr(obj: com.carto.renderers.MapRendererListener): number;
				public onAfterDrawFrame(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.renderers.MapRendererListener;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace renderers {
			export class MapRendererListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.MapRendererListenerModuleJNI>;
				public static MapRendererListener_onBeforeDrawFrameSwigExplicitMapRendererListener(param0: number, param1: com.carto.renderers.MapRendererListener): void;
				public static SwigDirector_MapRendererListener_onAfterDrawFrame(self: com.carto.renderers.MapRendererListener): void;
				public static MapRendererListener_swigGetDirectorObject(param0: number, param1: com.carto.renderers.MapRendererListener): any;
				public static MapRendererListener_director_connect(param0: com.carto.renderers.MapRendererListener, param1: number, param2: boolean, param3: boolean): void;
				public static MapRendererListener_onSurfaceChangedSwigExplicitMapRendererListener(param0: number, param1: com.carto.renderers.MapRendererListener, param2: number, param3: number): void;
				public static MapRendererListener_onBeforeDrawFrame(param0: number, param1: com.carto.renderers.MapRendererListener): void;
				public static MapRendererListener_change_ownership(param0: com.carto.renderers.MapRendererListener, param1: number, param2: boolean): void;
				public static delete_MapRendererListener(param0: number): void;
				public static new_MapRendererListener(): number;
				public static MapRendererListener_onAfterDrawFrame(param0: number, param1: com.carto.renderers.MapRendererListener): void;
				public static MapRendererListener_swigGetRawPtr(param0: number, param1: com.carto.renderers.MapRendererListener): number;
				public static SwigDirector_MapRendererListener_onBeforeDrawFrame(self: com.carto.renderers.MapRendererListener): void;
				public constructor();
				public static MapRendererListener_onSurfaceChanged(param0: number, param1: com.carto.renderers.MapRendererListener, param2: number, param3: number): void;
				public static MapRendererListener_onAfterDrawFrameSwigExplicitMapRendererListener(param0: number, param1: com.carto.renderers.MapRendererListener): void;
				public static SwigDirector_MapRendererListener_onSurfaceChanged(self: com.carto.renderers.MapRendererListener, width: number, height: number): void;
				public static MapRendererListener_swigGetClassName(param0: number, param1: com.carto.renderers.MapRendererListener): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace renderers {
			export class MapRendererModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.MapRendererModuleJNI>;
				public static MapRenderer_setMapRendererListener(param0: number, param1: com.carto.renderers.MapRenderer, param2: number, param3: com.carto.renderers.MapRendererListener): void;
				public static delete_MapRenderer(param0: number): void;
				public static MapRenderer_getMapRendererListener(param0: number, param1: com.carto.renderers.MapRenderer): number;
				public static MapRenderer_requestRedraw(param0: number, param1: com.carto.renderers.MapRenderer): void;
				public static MapRenderer_getViewState(param0: number, param1: com.carto.renderers.MapRenderer): number;
				public static MapRenderer_captureRendering(param0: number, param1: com.carto.renderers.MapRenderer, param2: number, param3: com.carto.renderers.RendererCaptureListener, param4: boolean): void;
				public static MapRenderer_swigGetRawPtr(param0: number, param1: com.carto.renderers.MapRenderer): number;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace renderers {
			export class RedrawRequestListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.RedrawRequestListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(obj: com.carto.renderers.RedrawRequestListener): number;
				public finalize(): void;
				public swigGetClassName(): string;
				public onRedrawRequested(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.renderers.RedrawRequestListener;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace renderers {
			export class RedrawRequestListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.RedrawRequestListenerModuleJNI>;
				public static SwigDirector_RedrawRequestListener_onRedrawRequested(self: com.carto.renderers.RedrawRequestListener): void;
				public static RedrawRequestListener_onRedrawRequestedSwigExplicitRedrawRequestListener(param0: number, param1: com.carto.renderers.RedrawRequestListener): void;
				public static RedrawRequestListener_swigGetClassName(param0: number, param1: com.carto.renderers.RedrawRequestListener): string;
				public static RedrawRequestListener_swigGetRawPtr(param0: number, param1: com.carto.renderers.RedrawRequestListener): number;
				public static RedrawRequestListener_director_connect(param0: com.carto.renderers.RedrawRequestListener, param1: number, param2: boolean, param3: boolean): void;
				public static RedrawRequestListener_change_ownership(param0: com.carto.renderers.RedrawRequestListener, param1: number, param2: boolean): void;
				public static delete_RedrawRequestListener(param0: number): void;
				public static RedrawRequestListener_onRedrawRequested(param0: number, param1: com.carto.renderers.RedrawRequestListener): void;
				public static new_RedrawRequestListener(): number;
				public static RedrawRequestListener_swigGetDirectorObject(param0: number, param1: com.carto.renderers.RedrawRequestListener): any;
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
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public onMapRendered(bitmap: com.carto.graphics.Bitmap): void;
				public finalize(): void;
				public static getCPtr(obj: com.carto.renderers.RendererCaptureListener): number;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.renderers.RendererCaptureListener;
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
		export namespace renderers {
			export class RendererCaptureListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.RendererCaptureListenerModuleJNI>;
				public static delete_RendererCaptureListener(param0: number): void;
				public static RendererCaptureListener_change_ownership(param0: com.carto.renderers.RendererCaptureListener, param1: number, param2: boolean): void;
				public static RendererCaptureListener_onMapRendered(param0: number, param1: com.carto.renderers.RendererCaptureListener, param2: number, param3: com.carto.graphics.Bitmap): void;
				public static new_RendererCaptureListener(): number;
				public static RendererCaptureListener_swigGetClassName(param0: number, param1: com.carto.renderers.RendererCaptureListener): string;
				public static RendererCaptureListener_swigGetRawPtr(param0: number, param1: com.carto.renderers.RendererCaptureListener): number;
				public static RendererCaptureListener_onMapRenderedSwigExplicitRendererCaptureListener(param0: number, param1: com.carto.renderers.RendererCaptureListener, param2: number, param3: com.carto.graphics.Bitmap): void;
				public static RendererCaptureListener_director_connect(param0: com.carto.renderers.RendererCaptureListener, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_RendererCaptureListener_onMapRendered(self: com.carto.renderers.RendererCaptureListener, bitmap: number): void;
				public static RendererCaptureListener_swigGetDirectorObject(param0: number, param1: com.carto.renderers.RendererCaptureListener): any;
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
					public swigCMemOwn: boolean;
					public equals(obj: any): boolean;
					public delete(): void;
					public getProjectionEnvelope(projection: com.carto.projections.Projection): com.carto.core.MapEnvelope;
					public static getCPtr(obj: com.carto.renderers.components.CullState): number;
					public finalize(): void;
					public constructor(envelope: com.carto.core.MapEnvelope, viewState: com.carto.graphics.ViewState);
					public hashCode(): number;
					public swigGetRawPtr(): number;
					public constructor(cPtr: number, cMemoryOwn: boolean);
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
				export class CullStateModuleJNI extends java.lang.Object {
					public static class: java.lang.Class<com.carto.renderers.components.CullStateModuleJNI>;
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
			export class MultiValhallaOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.MultiValhallaOfflineRoutingService>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public add(database: string): void;
				public static getCPtr(obj: com.carto.routing.RoutingService): number;
				public addLocale(key: string, json: string): void;
				public finalize(): void;
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.RoutingService;
				public getConfigurationParameter(param: string): com.carto.core.Variant;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.routing.MultiValhallaOfflineRoutingService): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setConfigurationParameter(param: string, value: com.carto.core.Variant): void;
				public setProfile(profile: string): void;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.MultiValhallaOfflineRoutingService;
				public getProfile(): string;
				public swigTakeOwnership(): void;
				public remove(database: string): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class MultiValhallaOfflineRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.MultiValhallaOfflineRoutingServiceModuleJNI>;
				public static delete_MultiValhallaOfflineRoutingService(param0: number): void;
				public static SwigDirector_MultiValhallaOfflineRoutingService_setProfile(self: com.carto.routing.MultiValhallaOfflineRoutingService, profile: string): void;
				public static MultiValhallaOfflineRoutingService_getProfile(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService): string;
				public static MultiValhallaOfflineRoutingService_setConfigurationParameter(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static MultiValhallaOfflineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService): number;
				public constructor();
				public static MultiValhallaOfflineRoutingService_calculateRouteSwigExplicitMultiValhallaOfflineRoutingService(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static MultiValhallaOfflineRoutingService_director_connect(param0: com.carto.routing.MultiValhallaOfflineRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static new_MultiValhallaOfflineRoutingService(): number;
				public static MultiValhallaOfflineRoutingService_getConfigurationParameter(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService, param2: string): number;
				public static SwigDirector_MultiValhallaOfflineRoutingService_getProfile(self: com.carto.routing.MultiValhallaOfflineRoutingService): string;
				public static SwigDirector_MultiValhallaOfflineRoutingService_calculateRoute(self: com.carto.routing.MultiValhallaOfflineRoutingService, request: number): number;
				public static MultiValhallaOfflineRoutingService_setProfile(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService, param2: string): void;
				public static MultiValhallaOfflineRoutingService_change_ownership(param0: com.carto.routing.MultiValhallaOfflineRoutingService, param1: number, param2: boolean): void;
				public static MultiValhallaOfflineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService): any;
				public static MultiValhallaOfflineRoutingService_calculateRoute(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static MultiValhallaOfflineRoutingService_add(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService, param2: string): void;
				public static MultiValhallaOfflineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService): string;
				public static MultiValhallaOfflineRoutingService_matchRouteSwigExplicitMultiValhallaOfflineRoutingService(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static MultiValhallaOfflineRoutingService_setProfileSwigExplicitMultiValhallaOfflineRoutingService(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService, param2: string): void;
				public static MultiValhallaOfflineRoutingService_remove(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService, param2: string): boolean;
				public static MultiValhallaOfflineRoutingService_addLocale(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService, param2: string, param3: string): void;
				public static MultiValhallaOfflineRoutingService_matchRoute(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static SwigDirector_MultiValhallaOfflineRoutingService_matchRoute(self: com.carto.routing.MultiValhallaOfflineRoutingService, request: number): number;
				public static MultiValhallaOfflineRoutingService_getProfileSwigExplicitMultiValhallaOfflineRoutingService(param0: number, param1: com.carto.routing.MultiValhallaOfflineRoutingService): string;
				public static MultiValhallaOfflineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class OSRMOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.OSRMOfflineRoutingService>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.OSRMOfflineRoutingService;
				public static getCPtr(obj: com.carto.routing.RoutingService): number;
				public finalize(): void;
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.RoutingService;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.routing.OSRMOfflineRoutingService): number;
				public constructor(path: string);
				public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setProfile(profile: string): void;
				public delete(): void;
				public getProfile(): string;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class OSRMOfflineRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.OSRMOfflineRoutingServiceModuleJNI>;
				public static SwigDirector_OSRMOfflineRoutingService_getProfile(self: com.carto.routing.OSRMOfflineRoutingService): string;
				public static OSRMOfflineRoutingService_getProfile(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): string;
				public static OSRMOfflineRoutingService_matchRouteSwigExplicitOSRMOfflineRoutingService(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static OSRMOfflineRoutingService_getProfileSwigExplicitOSRMOfflineRoutingService(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): string;
				public static OSRMOfflineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): number;
				public static OSRMOfflineRoutingService_calculateRoute(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static OSRMOfflineRoutingService_change_ownership(param0: com.carto.routing.OSRMOfflineRoutingService, param1: number, param2: boolean): void;
				public constructor();
				public static OSRMOfflineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
				public static OSRMOfflineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): string;
				public static OSRMOfflineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): any;
				public static OSRMOfflineRoutingService_setProfile(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService, param2: string): void;
				public static SwigDirector_OSRMOfflineRoutingService_calculateRoute(self: com.carto.routing.OSRMOfflineRoutingService, request: number): number;
				public static new_OSRMOfflineRoutingService(param0: string): number;
				public static OSRMOfflineRoutingService_director_connect(param0: com.carto.routing.OSRMOfflineRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_OSRMOfflineRoutingService_setProfile(self: com.carto.routing.OSRMOfflineRoutingService, profile: string): void;
				public static SwigDirector_OSRMOfflineRoutingService_matchRoute(self: com.carto.routing.OSRMOfflineRoutingService, request: number): number;
				public static delete_OSRMOfflineRoutingService(param0: number): void;
				public static OSRMOfflineRoutingService_matchRoute(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static OSRMOfflineRoutingService_calculateRouteSwigExplicitOSRMOfflineRoutingService(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static OSRMOfflineRoutingService_setProfileSwigExplicitOSRMOfflineRoutingService(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService, param2: string): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class PackageManagerRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.PackageManagerRoutingService>;
				public static getCPtr(obj: com.carto.routing.PackageManagerRoutingService): number;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(packageManager: com.carto.packagemanager.PackageManager);
				public static getCPtr(obj: com.carto.routing.RoutingService): number;
				public finalize(): void;
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.RoutingService;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setProfile(profile: string): void;
				public delete(): void;
				public getProfile(): string;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.PackageManagerRoutingService;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class PackageManagerRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.PackageManagerRoutingServiceModuleJNI>;
				public static PackageManagerRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.PackageManagerRoutingService): any;
				public static PackageManagerRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.PackageManagerRoutingService): number;
				public static PackageManagerRoutingService_matchRoute(param0: number, param1: com.carto.routing.PackageManagerRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static PackageManagerRoutingService_setProfile(param0: number, param1: com.carto.routing.PackageManagerRoutingService, param2: string): void;
				public static PackageManagerRoutingService_calculateRouteSwigExplicitPackageManagerRoutingService(param0: number, param1: com.carto.routing.PackageManagerRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static new_PackageManagerRoutingService(param0: number, param1: com.carto.packagemanager.PackageManager): number;
				public constructor();
				public static PackageManagerRoutingService_matchRouteSwigExplicitPackageManagerRoutingService(param0: number, param1: com.carto.routing.PackageManagerRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static PackageManagerRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.PackageManagerRoutingService): string;
				public static SwigDirector_PackageManagerRoutingService_calculateRoute(self: com.carto.routing.PackageManagerRoutingService, request: number): number;
				public static PackageManagerRoutingService_director_connect(param0: com.carto.routing.PackageManagerRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static PackageManagerRoutingService_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_PackageManagerRoutingService_setProfile(self: com.carto.routing.PackageManagerRoutingService, profile: string): void;
				public static PackageManagerRoutingService_getProfile(param0: number, param1: com.carto.routing.PackageManagerRoutingService): string;
				public static SwigDirector_PackageManagerRoutingService_getProfile(self: com.carto.routing.PackageManagerRoutingService): string;
				public static PackageManagerRoutingService_getProfileSwigExplicitPackageManagerRoutingService(param0: number, param1: com.carto.routing.PackageManagerRoutingService): string;
				public static PackageManagerRoutingService_setProfileSwigExplicitPackageManagerRoutingService(param0: number, param1: com.carto.routing.PackageManagerRoutingService, param2: string): void;
				public static delete_PackageManagerRoutingService(param0: number): void;
				public static PackageManagerRoutingService_change_ownership(param0: com.carto.routing.PackageManagerRoutingService, param1: number, param2: boolean): void;
				public static PackageManagerRoutingService_calculateRoute(param0: number, param1: com.carto.routing.PackageManagerRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static SwigDirector_PackageManagerRoutingService_matchRoute(self: com.carto.routing.PackageManagerRoutingService, request: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class PackageManagerValhallaRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.PackageManagerValhallaRoutingService>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public constructor(packageManager: com.carto.packagemanager.PackageManager);
				public static getCPtr(obj: com.carto.routing.RoutingService): number;
				public addLocale(key: string, json: string): void;
				public finalize(): void;
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.RoutingService;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.PackageManagerValhallaRoutingService;
				public getConfigurationParameter(param: string): com.carto.core.Variant;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.routing.PackageManagerValhallaRoutingService): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setConfigurationParameter(param: string, value: com.carto.core.Variant): void;
				public setProfile(profile: string): void;
				public delete(): void;
				public getProfile(): string;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class PackageManagerValhallaRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.PackageManagerValhallaRoutingServiceModuleJNI>;
				public static PackageManagerValhallaRoutingService_getProfileSwigExplicitPackageManagerValhallaRoutingService(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): string;
				public static PackageManagerValhallaRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): any;
				public static PackageManagerValhallaRoutingService_setConfigurationParameter(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static PackageManagerValhallaRoutingService_getConfigurationParameter(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: string): number;
				public static PackageManagerValhallaRoutingService_calculateRoute(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static PackageManagerValhallaRoutingService_calculateRouteSwigExplicitPackageManagerValhallaRoutingService(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static PackageManagerValhallaRoutingService_director_connect(param0: com.carto.routing.PackageManagerValhallaRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_PackageManagerValhallaRoutingService_getProfile(self: com.carto.routing.PackageManagerValhallaRoutingService): string;
				public static PackageManagerValhallaRoutingService_getProfile(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): string;
				public static PackageManagerValhallaRoutingService_matchRoute(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static delete_PackageManagerValhallaRoutingService(param0: number): void;
				public static PackageManagerValhallaRoutingService_addLocale(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: string, param3: string): void;
				public constructor();
				public static PackageManagerValhallaRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): string;
				public static PackageManagerValhallaRoutingService_matchRouteSwigExplicitPackageManagerValhallaRoutingService(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static PackageManagerValhallaRoutingService_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_PackageManagerValhallaRoutingService_setProfile(self: com.carto.routing.PackageManagerValhallaRoutingService, profile: string): void;
				public static PackageManagerValhallaRoutingService_setProfile(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: string): void;
				public static PackageManagerValhallaRoutingService_change_ownership(param0: com.carto.routing.PackageManagerValhallaRoutingService, param1: number, param2: boolean): void;
				public static new_PackageManagerValhallaRoutingService(param0: number, param1: com.carto.packagemanager.PackageManager): number;
				public static PackageManagerValhallaRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): number;
				public static SwigDirector_PackageManagerValhallaRoutingService_matchRoute(self: com.carto.routing.PackageManagerValhallaRoutingService, request: number): number;
				public static PackageManagerValhallaRoutingService_setProfileSwigExplicitPackageManagerValhallaRoutingService(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: string): void;
				public static SwigDirector_PackageManagerValhallaRoutingService_calculateRoute(self: com.carto.routing.PackageManagerValhallaRoutingService, request: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingEdge extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingEdge>;
				public swigCMemOwn: boolean;
				public constructor(attributes: com.carto.core.StringVariantMap);
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public containsAttribute(name: string): boolean;
				public getAttribute(name: string): com.carto.core.Variant;
				public static getCPtr(obj: com.carto.routing.RouteMatchingEdge): number;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingEdgeModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingEdgeModuleJNI>;
				public static RouteMatchingEdgeVector_isEmpty(param0: number, param1: com.carto.routing.RouteMatchingEdgeVector): boolean;
				public static RouteMatchingEdge_swigGetRawPtr(param0: number, param1: com.carto.routing.RouteMatchingEdge): number;
				public static delete_RouteMatchingEdgeVector(param0: number): void;
				public static RouteMatchingEdgeVector_reserve(param0: number, param1: com.carto.routing.RouteMatchingEdgeVector, param2: number): void;
				public static RouteMatchingEdgeVector_capacity(param0: number, param1: com.carto.routing.RouteMatchingEdgeVector): number;
				public static RouteMatchingEdge_toString(param0: number, param1: com.carto.routing.RouteMatchingEdge): string;
				public static RouteMatchingEdgeVector_set(param0: number, param1: com.carto.routing.RouteMatchingEdgeVector, param2: number, param3: number, param4: com.carto.routing.RouteMatchingEdge): void;
				public static new_RouteMatchingEdge__SWIG_0(): number;
				public static RouteMatchingEdgeVector_clear(param0: number, param1: com.carto.routing.RouteMatchingEdgeVector): void;
				public static RouteMatchingEdgeVector_get(param0: number, param1: com.carto.routing.RouteMatchingEdgeVector, param2: number): number;
				public static delete_RouteMatchingEdge(param0: number): void;
				public static RouteMatchingEdgeVector_add(param0: number, param1: com.carto.routing.RouteMatchingEdgeVector, param2: number, param3: com.carto.routing.RouteMatchingEdge): void;
				public constructor();
				public static new_RouteMatchingEdgeVector__SWIG_0(): number;
				public static new_RouteMatchingEdge__SWIG_1(param0: number, param1: com.carto.core.StringVariantMap): number;
				public static RouteMatchingEdge_containsAttribute(param0: number, param1: com.carto.routing.RouteMatchingEdge, param2: string): boolean;
				public static new_RouteMatchingEdgeVector__SWIG_1(param0: number): number;
				public static RouteMatchingEdgeVector_swigGetRawPtr(param0: number, param1: com.carto.routing.RouteMatchingEdgeVector): number;
				public static RouteMatchingEdgeVector_size(param0: number, param1: com.carto.routing.RouteMatchingEdgeVector): number;
				public static RouteMatchingEdge_getAttribute(param0: number, param1: com.carto.routing.RouteMatchingEdge, param2: string): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingEdgeVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingEdgeVector>;
				public swigCMemOwn: boolean;
				public get(i: number): com.carto.routing.RouteMatchingEdge;
				public finalize(): void;
				public static getCPtr(obj: com.carto.routing.RouteMatchingEdgeVector): number;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public add(x: com.carto.routing.RouteMatchingEdge): void;
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.routing.RouteMatchingPoint): number;
				public finalize(): void;
				public getPos(): com.carto.core.MapPos;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(pos: com.carto.core.MapPos, type: com.carto.routing.RouteMatchingPointType, edgeIndex: number);
				public constructor();
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
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
			export class RouteMatchingPointModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingPointModuleJNI>;
				public static RouteMatchingPoint_getType(param0: number, param1: com.carto.routing.RouteMatchingPoint): number;
				public static RouteMatchingPointVector_isEmpty(param0: number, param1: com.carto.routing.RouteMatchingPointVector): boolean;
				public static RouteMatchingPointVector_swigGetRawPtr(param0: number, param1: com.carto.routing.RouteMatchingPointVector): number;
				public static RouteMatchingPointVector_size(param0: number, param1: com.carto.routing.RouteMatchingPointVector): number;
				public static RouteMatchingPointVector_set(param0: number, param1: com.carto.routing.RouteMatchingPointVector, param2: number, param3: number, param4: com.carto.routing.RouteMatchingPoint): void;
				public static new_RouteMatchingPoint__SWIG_0(): number;
				public static RouteMatchingPointVector_reserve(param0: number, param1: com.carto.routing.RouteMatchingPointVector, param2: number): void;
				public static RouteMatchingPoint_getEdgeIndex(param0: number, param1: com.carto.routing.RouteMatchingPoint): number;
				public static RouteMatchingPointVector_capacity(param0: number, param1: com.carto.routing.RouteMatchingPointVector): number;
				public constructor();
				public static RouteMatchingPoint_getPos(param0: number, param1: com.carto.routing.RouteMatchingPoint): number;
				public static RouteMatchingPointVector_get(param0: number, param1: com.carto.routing.RouteMatchingPointVector, param2: number): number;
				public static delete_RouteMatchingPoint(param0: number): void;
				public static RouteMatchingPoint_swigGetRawPtr(param0: number, param1: com.carto.routing.RouteMatchingPoint): number;
				public static new_RouteMatchingPointVector__SWIG_0(): number;
				public static RouteMatchingPoint_toString(param0: number, param1: com.carto.routing.RouteMatchingPoint): string;
				public static new_RouteMatchingPoint__SWIG_1(param0: number, param1: com.carto.core.MapPos, param2: number, param3: number): number;
				public static RouteMatchingPointVector_clear(param0: number, param1: com.carto.routing.RouteMatchingPointVector): void;
				public static RouteMatchingPointVector_add(param0: number, param1: com.carto.routing.RouteMatchingPointVector, param2: number, param3: com.carto.routing.RouteMatchingPoint): void;
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
				public swigCMemOwn: boolean;
				public finalize(): void;
				public constructor(n: number);
				public set(i: number, val: com.carto.routing.RouteMatchingPoint): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public swigGetRawPtr(): number;
				public add(x: com.carto.routing.RouteMatchingPoint): void;
				public delete(): void;
				public capacity(): number;
				public clear(): void;
				public get(i: number): com.carto.routing.RouteMatchingPoint;
				public isEmpty(): boolean;
				public static getCPtr(obj: com.carto.routing.RouteMatchingPointVector): number;
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
				public swigCMemOwn: boolean;
				public constructor(projection: com.carto.projections.Projection, points: com.carto.core.MapPosVector, accuracy: number);
				public setPointParameter(index: number, param: string, value: com.carto.core.Variant): void;
				public getProjection(): com.carto.projections.Projection;
				public finalize(): void;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getPointParameter(index: number, param: string): com.carto.core.Variant;
				public setCustomParameter(param: string, value: com.carto.core.Variant): void;
				public getCustomParameter(param: string): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public getPoints(): com.carto.core.MapPosVector;
				public static getCPtr(obj: com.carto.routing.RouteMatchingRequest): number;
				public delete(): void;
				public hashCode(): number;
				public getAccuracy(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingRequestModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingRequestModuleJNI>;
				public static new_RouteMatchingRequest(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPosVector, param4: number): number;
				public static RouteMatchingRequest_getCustomParameter(param0: number, param1: com.carto.routing.RouteMatchingRequest, param2: string): number;
				public static RouteMatchingRequest_getPointParameter(param0: number, param1: com.carto.routing.RouteMatchingRequest, param2: number, param3: string): number;
				public static RouteMatchingRequest_swigGetRawPtr(param0: number, param1: com.carto.routing.RouteMatchingRequest): number;
				public static RouteMatchingRequest_toString(param0: number, param1: com.carto.routing.RouteMatchingRequest): string;
				public static RouteMatchingRequest_setCustomParameter(param0: number, param1: com.carto.routing.RouteMatchingRequest, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static delete_RouteMatchingRequest(param0: number): void;
				public static RouteMatchingRequest_getProjection(param0: number, param1: com.carto.routing.RouteMatchingRequest): number;
				public static RouteMatchingRequest_getAccuracy(param0: number, param1: com.carto.routing.RouteMatchingRequest): number;
				public constructor();
				public static RouteMatchingRequest_getPoints(param0: number, param1: com.carto.routing.RouteMatchingRequest): number;
				public static RouteMatchingRequest_setPointParameter(param0: number, param1: com.carto.routing.RouteMatchingRequest, param2: number, param3: string, param4: number, param5: com.carto.core.Variant): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingResult extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingResult>;
				public swigCMemOwn: boolean;
				public getRawResult(): string;
				public getProjection(): com.carto.projections.Projection;
				public finalize(): void;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getMatchingPoints(): com.carto.routing.RouteMatchingPointVector;
				public swigGetRawPtr(): number;
				public constructor(projection: com.carto.projections.Projection, matchingPoints: com.carto.routing.RouteMatchingPointVector, matchingEdges: com.carto.routing.RouteMatchingEdgeVector, rawResult: string);
				public equals(obj: any): boolean;
				public getPoints(): com.carto.core.MapPosVector;
				public delete(): void;
				public hashCode(): number;
				public getMatchingEdges(): com.carto.routing.RouteMatchingEdgeVector;
				public static getCPtr(obj: com.carto.routing.RouteMatchingResult): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RouteMatchingResultModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingResultModuleJNI>;
				public static RouteMatchingResult_getPoints(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
				public static RouteMatchingResult_getMatchingEdges(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
				public static RouteMatchingResult_getProjection(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
				public static delete_RouteMatchingResult(param0: number): void;
				public static RouteMatchingResult_swigGetRawPtr(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
				public static RouteMatchingResult_getRawResult(param0: number, param1: com.carto.routing.RouteMatchingResult): string;
				public static RouteMatchingResult_toString(param0: number, param1: com.carto.routing.RouteMatchingResult): string;
				public static new_RouteMatchingResult(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.routing.RouteMatchingPointVector, param4: number, param5: com.carto.routing.RouteMatchingEdgeVector, param6: string): number;
				public static RouteMatchingResult_getMatchingPoints(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
				public constructor();
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
				public swigCMemOwn: boolean;
				public getPointIndex(): number;
				public finalize(): void;
				public constructor(action: com.carto.routing.RoutingAction, pointIndex: number, streetName: string, instruction: string, turnAngle: number, azimuth: number, distance: number, time: number, geometryTag: com.carto.core.Variant);
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getTime(): number;
				public static getCPtr(obj: com.carto.routing.RoutingInstruction): number;
				public constructor();
				public getTurnAngle(): number;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public getStreetName(): string;
				public delete(): void;
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
			export class RoutingInstructionModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingInstructionModuleJNI>;
				public static RoutingInstructionVector_swigGetRawPtr(param0: number, param1: com.carto.routing.RoutingInstructionVector): number;
				public static RoutingInstructionVector_size(param0: number, param1: com.carto.routing.RoutingInstructionVector): number;
				public static RoutingInstruction_getTurnAngle(param0: number, param1: com.carto.routing.RoutingInstruction): number;
				public static RoutingInstruction_getAzimuth(param0: number, param1: com.carto.routing.RoutingInstruction): number;
				public static RoutingInstructionVector_set(param0: number, param1: com.carto.routing.RoutingInstructionVector, param2: number, param3: number, param4: com.carto.routing.RoutingInstruction): void;
				public static RoutingInstruction_getInstruction(param0: number, param1: com.carto.routing.RoutingInstruction): string;
				public static RoutingInstruction_getPointIndex(param0: number, param1: com.carto.routing.RoutingInstruction): number;
				public static RoutingInstruction_getAction(param0: number, param1: com.carto.routing.RoutingInstruction): number;
				public static RoutingInstruction_getTime(param0: number, param1: com.carto.routing.RoutingInstruction): number;
				public constructor();
				public static new_RoutingInstruction__SWIG_1(param0: number, param1: number, param2: string, param3: string, param4: number, param5: number, param6: number, param7: number, param8: number, param9: com.carto.core.Variant): number;
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
				public static RoutingInstruction_getGeometryTag(param0: number, param1: com.carto.routing.RoutingInstruction): number;
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
			export class RoutingInstructionVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingInstructionVector>;
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.routing.RoutingInstructionVector): number;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public set(i: number, val: com.carto.routing.RoutingInstruction): void;
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.routing.RoutingRequest): number;
				public setPointParameter(index: number, param: string, value: com.carto.core.Variant): void;
				public getProjection(): com.carto.projections.Projection;
				public finalize(): void;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getPointParameter(index: number, param: string): com.carto.core.Variant;
				public setCustomParameter(param: string, value: com.carto.core.Variant): void;
				public getCustomParameter(param: string): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public getPoints(): com.carto.core.MapPosVector;
				public delete(): void;
				public hashCode(): number;
				public constructor(projection: com.carto.projections.Projection, points: com.carto.core.MapPosVector);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RoutingRequestModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingRequestModuleJNI>;
				public static RoutingRequest_getPoints(param0: number, param1: com.carto.routing.RoutingRequest): number;
				public static RoutingRequest_getProjection(param0: number, param1: com.carto.routing.RoutingRequest): number;
				public static RoutingRequest_toString(param0: number, param1: com.carto.routing.RoutingRequest): string;
				public static new_RoutingRequest(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPosVector): number;
				public static RoutingRequest_swigGetRawPtr(param0: number, param1: com.carto.routing.RoutingRequest): number;
				public static RoutingRequest_getPointParameter(param0: number, param1: com.carto.routing.RoutingRequest, param2: number, param3: string): number;
				public static RoutingRequest_getCustomParameter(param0: number, param1: com.carto.routing.RoutingRequest, param2: string): number;
				public static RoutingRequest_setCustomParameter(param0: number, param1: com.carto.routing.RoutingRequest, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static delete_RoutingRequest(param0: number): void;
				public static RoutingRequest_setPointParameter(param0: number, param1: com.carto.routing.RoutingRequest, param2: number, param3: string, param4: number, param5: com.carto.core.Variant): void;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RoutingResult extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingResult>;
				public swigCMemOwn: boolean;
				public getRawResult(): string;
				public getProjection(): com.carto.projections.Projection;
				public getInstructions(): com.carto.routing.RoutingInstructionVector;
				public getTotalTime(): number;
				public finalize(): void;
				public getTotalDistance(): number;
				public constructor(projection: com.carto.projections.Projection, points: com.carto.core.MapPosVector, instructions: com.carto.routing.RoutingInstructionVector, rawResult: string);
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.routing.RoutingResult): number;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public getPoints(): com.carto.core.MapPosVector;
				public delete(): void;
				public hashCode(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RoutingResultModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingResultModuleJNI>;
				public static new_RoutingResult(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPosVector, param4: number, param5: com.carto.routing.RoutingInstructionVector, param6: string): number;
				public static RoutingResult_toString(param0: number, param1: com.carto.routing.RoutingResult): string;
				public static RoutingResult_getPoints(param0: number, param1: com.carto.routing.RoutingResult): number;
				public static RoutingResult_swigGetRawPtr(param0: number, param1: com.carto.routing.RoutingResult): number;
				public static delete_RoutingResult(param0: number): void;
				public static RoutingResult_getProjection(param0: number, param1: com.carto.routing.RoutingResult): number;
				public static RoutingResult_getRawResult(param0: number, param1: com.carto.routing.RoutingResult): string;
				public static RoutingResult_getTotalTime(param0: number, param1: com.carto.routing.RoutingResult): number;
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
			export class RoutingService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingService>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(obj: com.carto.routing.RoutingService): number;
				public finalize(): void;
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.RoutingService;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setProfile(profile: string): void;
				public delete(): void;
				public getProfile(): string;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class RoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingServiceModuleJNI>;
				public static RoutingService_change_ownership(param0: com.carto.routing.RoutingService, param1: number, param2: boolean): void;
				public static RoutingService_calculateRoute(param0: number, param1: com.carto.routing.RoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static SwigDirector_RoutingService_matchRoute(self: com.carto.routing.RoutingService, request: number): number;
				public static RoutingService_setProfile(param0: number, param1: com.carto.routing.RoutingService, param2: string): void;
				public static SwigDirector_RoutingService_calculateRoute(self: com.carto.routing.RoutingService, request: number): number;
				public static RoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.RoutingService): any;
				public static SwigDirector_RoutingService_setProfile(self: com.carto.routing.RoutingService, profile: string): void;
				public static SwigDirector_RoutingService_getProfile(self: com.carto.routing.RoutingService): string;
				public constructor();
				public static new_RoutingService(): number;
				public static RoutingService_getProfile(param0: number, param1: com.carto.routing.RoutingService): string;
				public static RoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.RoutingService): number;
				public static RoutingService_matchRoute(param0: number, param1: com.carto.routing.RoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static delete_RoutingService(param0: number): void;
				public static RoutingService_swigGetClassName(param0: number, param1: com.carto.routing.RoutingService): string;
				public static RoutingService_director_connect(param0: com.carto.routing.RoutingService, param1: number, param2: boolean, param3: boolean): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class SGREOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.SGREOfflineRoutingService>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public setRoutingParameter(param: string, value: number): void;
				public static getCPtr(obj: com.carto.routing.SGREOfflineRoutingService): number;
				public static getCPtr(obj: com.carto.routing.RoutingService): number;
				public finalize(): void;
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.RoutingService;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setProfile(profile: string): void;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.SGREOfflineRoutingService;
				public constructor(projection: com.carto.projections.Projection, featureCollection: com.carto.geometry.FeatureCollection, config: com.carto.core.Variant);
				public getProfile(): string;
				public getRoutingParameter(param: string): number;
				public swigTakeOwnership(): void;
				public constructor(geoJSON: com.carto.core.Variant, config: com.carto.core.Variant);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class SGREOfflineRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.SGREOfflineRoutingServiceModuleJNI>;
				public static SwigDirector_SGREOfflineRoutingService_matchRoute(self: com.carto.routing.SGREOfflineRoutingService, request: number): number;
				public static SGREOfflineRoutingService_matchRouteSwigExplicitSGREOfflineRoutingService(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static SGREOfflineRoutingService_matchRoute(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static SGREOfflineRoutingService_getProfile(param0: number, param1: com.carto.routing.SGREOfflineRoutingService): string;
				public static SGREOfflineRoutingService_getProfileSwigExplicitSGREOfflineRoutingService(param0: number, param1: com.carto.routing.SGREOfflineRoutingService): string;
				public static new_SGREOfflineRoutingService__SWIG_1(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.geometry.FeatureCollection, param4: number, param5: com.carto.core.Variant): number;
				public static SGREOfflineRoutingService_setProfile(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: string): void;
				public static SGREOfflineRoutingService_change_ownership(param0: com.carto.routing.SGREOfflineRoutingService, param1: number, param2: boolean): void;
				public static SwigDirector_SGREOfflineRoutingService_calculateRoute(self: com.carto.routing.SGREOfflineRoutingService, request: number): number;
				public static SGREOfflineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_SGREOfflineRoutingService_setProfile(self: com.carto.routing.SGREOfflineRoutingService, profile: string): void;
				public static delete_SGREOfflineRoutingService(param0: number): void;
				public static SGREOfflineRoutingService_setRoutingParameter(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: string, param3: number): void;
				public constructor();
				public static SwigDirector_SGREOfflineRoutingService_getProfile(self: com.carto.routing.SGREOfflineRoutingService): string;
				public static SGREOfflineRoutingService_calculateRoute(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static SGREOfflineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.SGREOfflineRoutingService): any;
				public static SGREOfflineRoutingService_calculateRouteSwigExplicitSGREOfflineRoutingService(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static SGREOfflineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.SGREOfflineRoutingService): number;
				public static SGREOfflineRoutingService_director_connect(param0: com.carto.routing.SGREOfflineRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static new_SGREOfflineRoutingService__SWIG_0(param0: number, param1: com.carto.core.Variant, param2: number, param3: com.carto.core.Variant): number;
				public static SGREOfflineRoutingService_setProfileSwigExplicitSGREOfflineRoutingService(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: string): void;
				public static SGREOfflineRoutingService_getRoutingParameter(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: string): number;
				public static SGREOfflineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.SGREOfflineRoutingService): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class ValhallaOfflineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.ValhallaOfflineRoutingService>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(obj: com.carto.routing.RoutingService): number;
				public addLocale(key: string, json: string): void;
				public finalize(): void;
				public static getCPtr(obj: com.carto.routing.ValhallaOfflineRoutingService): number;
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.RoutingService;
				public getConfigurationParameter(param: string): com.carto.core.Variant;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.ValhallaOfflineRoutingService;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public constructor(path: string);
				public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setConfigurationParameter(param: string, value: com.carto.core.Variant): void;
				public setProfile(profile: string): void;
				public delete(): void;
				public getProfile(): string;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class ValhallaOfflineRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.ValhallaOfflineRoutingServiceModuleJNI>;
				public static ValhallaOfflineRoutingService_getProfileSwigExplicitValhallaOfflineRoutingService(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): string;
				public static SwigDirector_ValhallaOfflineRoutingService_getProfile(self: com.carto.routing.ValhallaOfflineRoutingService): string;
				public static SwigDirector_ValhallaOfflineRoutingService_matchRoute(self: com.carto.routing.ValhallaOfflineRoutingService, request: number): number;
				public static ValhallaOfflineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
				public static delete_ValhallaOfflineRoutingService(param0: number): void;
				public static ValhallaOfflineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): string;
				public static SwigDirector_ValhallaOfflineRoutingService_calculateRoute(self: com.carto.routing.ValhallaOfflineRoutingService, request: number): number;
				public static ValhallaOfflineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): number;
				public constructor();
				public static ValhallaOfflineRoutingService_setProfileSwigExplicitValhallaOfflineRoutingService(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: string): void;
				public static ValhallaOfflineRoutingService_calculateRouteSwigExplicitValhallaOfflineRoutingService(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static ValhallaOfflineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): any;
				public static ValhallaOfflineRoutingService_addLocale(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: string, param3: string): void;
				public static ValhallaOfflineRoutingService_director_connect(param0: com.carto.routing.ValhallaOfflineRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static ValhallaOfflineRoutingService_change_ownership(param0: com.carto.routing.ValhallaOfflineRoutingService, param1: number, param2: boolean): void;
				public static new_ValhallaOfflineRoutingService(param0: string): number;
				public static ValhallaOfflineRoutingService_getConfigurationParameter(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: string): number;
				public static ValhallaOfflineRoutingService_matchRouteSwigExplicitValhallaOfflineRoutingService(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static ValhallaOfflineRoutingService_getProfile(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): string;
				public static ValhallaOfflineRoutingService_setProfile(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: string): void;
				public static ValhallaOfflineRoutingService_calculateRoute(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static SwigDirector_ValhallaOfflineRoutingService_setProfile(self: com.carto.routing.ValhallaOfflineRoutingService, profile: string): void;
				public static ValhallaOfflineRoutingService_setConfigurationParameter(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static ValhallaOfflineRoutingService_matchRoute(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class ValhallaOnlineRoutingService extends com.carto.routing.RoutingService {
				public static class: java.lang.Class<com.carto.routing.ValhallaOnlineRoutingService>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(obj: com.carto.routing.RoutingService): number;
				public finalize(): void;
				public getCustomServiceURL(): string;
				public calculateRoute(request: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.RoutingService;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public setCustomServiceURL(serviceURL: string): void;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.routing.ValhallaOnlineRoutingService;
				public static getCPtr(obj: com.carto.routing.ValhallaOnlineRoutingService): number;
				public matchRoute(request: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
				public setProfile(profile: string): void;
				public delete(): void;
				public getProfile(): string;
				public swigTakeOwnership(): void;
				public constructor(apiKey: string);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace routing {
			export class ValhallaOnlineRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.ValhallaOnlineRoutingServiceModuleJNI>;
				public static new_ValhallaOnlineRoutingService__SWIG_0(param0: string): number;
				public static ValhallaOnlineRoutingService_calculateRouteSwigExplicitValhallaOnlineRoutingService(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static ValhallaOnlineRoutingService_change_ownership(param0: com.carto.routing.ValhallaOnlineRoutingService, param1: number, param2: boolean): void;
				public static SwigDirector_ValhallaOnlineRoutingService_calculateRoute(self: com.carto.routing.ValhallaOnlineRoutingService, request: number): number;
				public static ValhallaOnlineRoutingService_getProfile(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): string;
				public static ValhallaOnlineRoutingService_setProfileSwigExplicitValhallaOnlineRoutingService(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: string): void;
				public static ValhallaOnlineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): number;
				public static ValhallaOnlineRoutingService_matchRoute(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static ValhallaOnlineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): any;
				public static ValhallaOnlineRoutingService_setProfile(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: string): void;
				public constructor();
				public static delete_ValhallaOnlineRoutingService(param0: number): void;
				public static ValhallaOnlineRoutingService_director_connect(param0: com.carto.routing.ValhallaOnlineRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static ValhallaOnlineRoutingService_matchRouteSwigExplicitValhallaOnlineRoutingService(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static SwigDirector_ValhallaOnlineRoutingService_setProfile(self: com.carto.routing.ValhallaOnlineRoutingService, profile: string): void;
				public static new_ValhallaOnlineRoutingService__SWIG_1(): number;
				public static ValhallaOnlineRoutingService_getCustomServiceURL(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): string;
				public static ValhallaOnlineRoutingService_getProfileSwigExplicitValhallaOnlineRoutingService(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): string;
				public static SwigDirector_ValhallaOnlineRoutingService_matchRoute(self: com.carto.routing.ValhallaOnlineRoutingService, request: number): number;
				public static ValhallaOnlineRoutingService_setCustomServiceURL(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: string): void;
				public static ValhallaOnlineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): string;
				public static SwigDirector_ValhallaOnlineRoutingService_getProfile(self: com.carto.routing.ValhallaOnlineRoutingService): string;
				public static ValhallaOnlineRoutingService_calculateRoute(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static ValhallaOnlineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace search {
			export class FeatureCollectionSearchService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.FeatureCollectionSearchService>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public constructor(projection: com.carto.projections.Projection, featureCollection: com.carto.geometry.FeatureCollection);
				public swigDirectorDisconnect(): void;
				public getProjection(): com.carto.projections.Projection;
				public static getCPtr(obj: com.carto.search.FeatureCollectionSearchService): number;
				public finalize(): void;
				public setMaxResults(maxResults: number): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getMaxResults(): number;
				public findFeatures(request: com.carto.search.SearchRequest): com.carto.geometry.FeatureCollection;
				public getFeatureCollection(): com.carto.geometry.FeatureCollection;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.search.FeatureCollectionSearchService;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace search {
			export class FeatureCollectionSearchServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.FeatureCollectionSearchServiceModuleJNI>;
				public static FeatureCollectionSearchService_setMaxResults(param0: number, param1: com.carto.search.FeatureCollectionSearchService, param2: number): void;
				public static FeatureCollectionSearchService_change_ownership(param0: com.carto.search.FeatureCollectionSearchService, param1: number, param2: boolean): void;
				public static SwigDirector_FeatureCollectionSearchService_findFeatures(self: com.carto.search.FeatureCollectionSearchService, request: number): number;
				public static FeatureCollectionSearchService_getMaxResults(param0: number, param1: com.carto.search.FeatureCollectionSearchService): number;
				public static FeatureCollectionSearchService_swigGetDirectorObject(param0: number, param1: com.carto.search.FeatureCollectionSearchService): any;
				public static FeatureCollectionSearchService_director_connect(param0: com.carto.search.FeatureCollectionSearchService, param1: number, param2: boolean, param3: boolean): void;
				public constructor();
				public static new_FeatureCollectionSearchService(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.geometry.FeatureCollection): number;
				public static FeatureCollectionSearchService_getProjection(param0: number, param1: com.carto.search.FeatureCollectionSearchService): number;
				public static FeatureCollectionSearchService_findFeaturesSwigExplicitFeatureCollectionSearchService(param0: number, param1: com.carto.search.FeatureCollectionSearchService, param2: number, param3: com.carto.search.SearchRequest): number;
				public static FeatureCollectionSearchService_swigGetRawPtr(param0: number, param1: com.carto.search.FeatureCollectionSearchService): number;
				public static FeatureCollectionSearchService_swigGetClassName(param0: number, param1: com.carto.search.FeatureCollectionSearchService): string;
				public static delete_FeatureCollectionSearchService(param0: number): void;
				public static FeatureCollectionSearchService_getFeatureCollection(param0: number, param1: com.carto.search.FeatureCollectionSearchService): number;
				public static FeatureCollectionSearchService_findFeatures(param0: number, param1: com.carto.search.FeatureCollectionSearchService, param2: number, param3: com.carto.search.SearchRequest): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace search {
			export class SearchRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.SearchRequest>;
				public swigCMemOwn: boolean;
				public getProjection(): com.carto.projections.Projection;
				public setGeometry(geometry: com.carto.geometry.Geometry): void;
				public getFilterExpression(): string;
				public getRegexFilter(): string;
				public finalize(): void;
				public setProjection(projection: com.carto.projections.Projection): void;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public swigGetRawPtr(): number;
				public setRegexFilter(regex: string): void;
				public equals(obj: any): boolean;
				public setSearchRadius(radius: number): void;
				public delete(): void;
				public hashCode(): number;
				public setFilterExpression(expr: string): void;
				public getSearchRadius(): number;
				public getGeometry(): com.carto.geometry.Geometry;
				public static getCPtr(obj: com.carto.search.SearchRequest): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace search {
			export class SearchRequestModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.SearchRequestModuleJNI>;
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
			export class VectorElementSearchService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.VectorElementSearchService>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public findElements(request: com.carto.search.SearchRequest): com.carto.vectorelements.VectorElementVector;
				public constructor(dataSource: com.carto.datasources.VectorDataSource);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.search.VectorElementSearchService;
				public setMaxResults(maxResults: number): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public getDataSource(): com.carto.datasources.VectorDataSource;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getMaxResults(): number;
				public swigTakeOwnership(): void;
				public static getCPtr(obj: com.carto.search.VectorElementSearchService): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace search {
			export class VectorElementSearchServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.VectorElementSearchServiceModuleJNI>;
				public static VectorElementSearchService_director_connect(param0: com.carto.search.VectorElementSearchService, param1: number, param2: boolean, param3: boolean): void;
				public static VectorElementSearchService_swigGetClassName(param0: number, param1: com.carto.search.VectorElementSearchService): string;
				public static delete_VectorElementSearchService(param0: number): void;
				public static VectorElementSearchService_getDataSource(param0: number, param1: com.carto.search.VectorElementSearchService): number;
				public static VectorElementSearchService_findElements(param0: number, param1: com.carto.search.VectorElementSearchService, param2: number, param3: com.carto.search.SearchRequest): number;
				public static VectorElementSearchService_findElementsSwigExplicitVectorElementSearchService(param0: number, param1: com.carto.search.VectorElementSearchService, param2: number, param3: com.carto.search.SearchRequest): number;
				public static VectorElementSearchService_getMaxResults(param0: number, param1: com.carto.search.VectorElementSearchService): number;
				public constructor();
				public static new_VectorElementSearchService(param0: number, param1: com.carto.datasources.VectorDataSource): number;
				public static VectorElementSearchService_swigGetDirectorObject(param0: number, param1: com.carto.search.VectorElementSearchService): any;
				public static SwigDirector_VectorElementSearchService_findElements(self: com.carto.search.VectorElementSearchService, request: number): number;
				public static VectorElementSearchService_setMaxResults(param0: number, param1: com.carto.search.VectorElementSearchService, param2: number): void;
				public static VectorElementSearchService_change_ownership(param0: com.carto.search.VectorElementSearchService, param1: number, param2: boolean): void;
				public static VectorElementSearchService_swigGetRawPtr(param0: number, param1: com.carto.search.VectorElementSearchService): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace search {
			export class VectorTileSearchService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.VectorTileSearchService>;
				public swigCMemOwn: boolean;
				public swigDirectorDisconnect(): void;
				public constructor(dataSource: com.carto.datasources.TileDataSource, tileDecoder: com.carto.vectortiles.VectorTileDecoder);
				public setSortByDistance(sortByDistance: boolean): void;
				public finalize(): void;
				public getTileDecoder(): com.carto.vectortiles.VectorTileDecoder;
				public setMaxResults(maxResults: number): void;
				public getSortByDistance(): boolean;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getDataSource(): com.carto.datasources.TileDataSource;
				public setLayers(layers: com.carto.core.StringVector): void;
				public delete(): void;
				public findFeatures(request: com.carto.search.SearchRequest): com.carto.geometry.VectorTileFeatureCollection;
				public getPreventDuplicates(): boolean;
				public swigReleaseOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.search.VectorTileSearchService;
				public setMaxZoom(maxZoom: number): void;
				public swigGetClassName(): string;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public setPreventDuplicates(preventDuplicates: boolean): void;
				public swigGetRawPtr(): number;
				public getMaxResults(): number;
				public static getCPtr(obj: com.carto.search.VectorTileSearchService): number;
				public swigTakeOwnership(): void;
				public getLayers(): com.carto.core.StringVector;
				public setMinZoom(minZoom: number): void;
				public getMinZoom(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace search {
			export class VectorTileSearchServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.VectorTileSearchServiceModuleJNI>;
				public static VectorTileSearchService_getLayers(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public static VectorTileSearchService_setSortByDistance(param0: number, param1: com.carto.search.VectorTileSearchService, param2: boolean): void;
				public static VectorTileSearchService_getTileDecoder(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public constructor();
				public static VectorTileSearchService_swigGetRawPtr(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public static VectorTileSearchService_setMaxZoom(param0: number, param1: com.carto.search.VectorTileSearchService, param2: number): void;
				public static SwigDirector_VectorTileSearchService_findFeatures(self: com.carto.search.VectorTileSearchService, request: number): number;
				public static VectorTileSearchService_findFeaturesSwigExplicitVectorTileSearchService(param0: number, param1: com.carto.search.VectorTileSearchService, param2: number, param3: com.carto.search.SearchRequest): number;
				public static VectorTileSearchService_swigGetDirectorObject(param0: number, param1: com.carto.search.VectorTileSearchService): any;
				public static VectorTileSearchService_setLayers(param0: number, param1: com.carto.search.VectorTileSearchService, param2: number, param3: com.carto.core.StringVector): void;
				public static VectorTileSearchService_findFeatures(param0: number, param1: com.carto.search.VectorTileSearchService, param2: number, param3: com.carto.search.SearchRequest): number;
				public static VectorTileSearchService_getMaxZoom(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public static VectorTileSearchService_getPreventDuplicates(param0: number, param1: com.carto.search.VectorTileSearchService): boolean;
				public static VectorTileSearchService_getMaxResults(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public static VectorTileSearchService_setPreventDuplicates(param0: number, param1: com.carto.search.VectorTileSearchService, param2: boolean): void;
				public static VectorTileSearchService_setMinZoom(param0: number, param1: com.carto.search.VectorTileSearchService, param2: number): void;
				public static delete_VectorTileSearchService(param0: number): void;
				public static VectorTileSearchService_getDataSource(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public static VectorTileSearchService_setMaxResults(param0: number, param1: com.carto.search.VectorTileSearchService, param2: number): void;
				public static VectorTileSearchService_swigGetClassName(param0: number, param1: com.carto.search.VectorTileSearchService): string;
				public static VectorTileSearchService_director_connect(param0: com.carto.search.VectorTileSearchService, param1: number, param2: boolean, param3: boolean): void;
				public static new_VectorTileSearchService(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.vectortiles.VectorTileDecoder): number;
				public static VectorTileSearchService_getSortByDistance(param0: number, param1: com.carto.search.VectorTileSearchService): boolean;
				public static VectorTileSearchService_getMinZoom(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public static VectorTileSearchService_change_ownership(param0: com.carto.search.VectorTileSearchService, param1: number, param2: boolean): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class AnimationStyle extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.AnimationStyle>;
				public swigCMemOwn: boolean;
				public getPhaseOutDuration(): number;
				public finalize(): void;
				public getFadeAnimationType(): com.carto.styles.AnimationType;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.AnimationStyle;
				public equals(obj: any): boolean;
				public getRelativeSpeed(): number;
				public getPhaseInDuration(): number;
				public static getCPtr(obj: com.carto.styles.AnimationStyle): number;
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public getPhaseOutDuration(): number;
				public finalize(): void;
				public getFadeAnimationType(): com.carto.styles.AnimationType;
				public setFadeAnimationType(animType: com.carto.styles.AnimationType): void;
				public buildStyle(): com.carto.styles.AnimationStyle;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public setPhaseOutDuration(duration: number): void;
				public swigGetRawPtr(): number;
				public setSizeAnimationType(animType: com.carto.styles.AnimationType): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.AnimationStyleBuilder;
				public getRelativeSpeed(): number;
				public getPhaseInDuration(): number;
				public delete(): void;
				public setRelativeSpeed(relativeSpeed: number): void;
				public static getCPtr(obj: com.carto.styles.AnimationStyleBuilder): number;
				public setPhaseInDuration(duration: number): void;
				public getSizeAnimationType(): com.carto.styles.AnimationType;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class AnimationStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.AnimationStyleBuilderModuleJNI>;
				public static new_AnimationStyleBuilder(): number;
				public static AnimationStyleBuilder_getPhaseInDuration(param0: number, param1: com.carto.styles.AnimationStyleBuilder): number;
				public static AnimationStyleBuilder_setSizeAnimationType(param0: number, param1: com.carto.styles.AnimationStyleBuilder, param2: number): void;
				public static AnimationStyleBuilder_setPhaseInDuration(param0: number, param1: com.carto.styles.AnimationStyleBuilder, param2: number): void;
				public static AnimationStyleBuilder_getPhaseOutDuration(param0: number, param1: com.carto.styles.AnimationStyleBuilder): number;
				public static AnimationStyleBuilder_getFadeAnimationType(param0: number, param1: com.carto.styles.AnimationStyleBuilder): number;
				public static AnimationStyleBuilder_setFadeAnimationType(param0: number, param1: com.carto.styles.AnimationStyleBuilder, param2: number): void;
				public constructor();
				public static AnimationStyleBuilder_getRelativeSpeed(param0: number, param1: com.carto.styles.AnimationStyleBuilder): number;
				public static AnimationStyleBuilder_getSizeAnimationType(param0: number, param1: com.carto.styles.AnimationStyleBuilder): number;
				public static AnimationStyleBuilder_setPhaseOutDuration(param0: number, param1: com.carto.styles.AnimationStyleBuilder, param2: number): void;
				public static delete_AnimationStyleBuilder(param0: number): void;
				public static AnimationStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.AnimationStyleBuilder): number;
				public static AnimationStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.AnimationStyleBuilder): number;
				public static AnimationStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.AnimationStyleBuilder): string;
				public static AnimationStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.AnimationStyleBuilder): any;
				public static AnimationStyleBuilder_setRelativeSpeed(param0: number, param1: com.carto.styles.AnimationStyleBuilder, param2: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class AnimationStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.AnimationStyleModuleJNI>;
				public static AnimationStyle_getSizeAnimationType(param0: number, param1: com.carto.styles.AnimationStyle): number;
				public static AnimationStyle_getRelativeSpeed(param0: number, param1: com.carto.styles.AnimationStyle): number;
				public static AnimationStyle_swigGetClassName(param0: number, param1: com.carto.styles.AnimationStyle): string;
				public static AnimationStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.AnimationStyle): any;
				public static AnimationStyle_getPhaseInDuration(param0: number, param1: com.carto.styles.AnimationStyle): number;
				public static AnimationStyle_getFadeAnimationType(param0: number, param1: com.carto.styles.AnimationStyle): number;
				public static delete_AnimationStyle(param0: number): void;
				public static AnimationStyle_getPhaseOutDuration(param0: number, param1: com.carto.styles.AnimationStyle): number;
				public static AnimationStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.AnimationStyle): number;
				public constructor();
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
				public finalize(): void;
				public getBackgroundColor(): com.carto.graphics.Color;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public swigGetRawPtr(): number;
				public getTextFontName(): string;
				public getCornerRadius(): number;
				public delete(): void;
				public getTextFontSize(): number;
				public static getCPtr(obj: com.carto.styles.BalloonPopupButtonStyle): number;
				public getButtonWidth(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BalloonPopupButtonStyle;
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
				public finalize(): void;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public static getCPtr(obj: com.carto.styles.BalloonPopupButtonStyleBuilder): number;
				public constructor();
				public setCornerRadius(cornerRadius: number): void;
				public getTextFontName(): string;
				public setStrokeWidth(strokeWidth: number): void;
				public setTextColor(textColor: com.carto.graphics.Color): void;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BalloonPopupButtonStyleBuilder;
				public getTextMargins(): com.carto.styles.BalloonPopupMargins;
				public setStrokeColor(strokeColor: com.carto.graphics.Color): void;
				public setTextMargins(textMargins: com.carto.styles.BalloonPopupMargins): void;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
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
			export class BalloonPopupButtonStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupButtonStyleBuilderModuleJNI>;
				public static BalloonPopupButtonStyleBuilder_getTextFontSize(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder): number;
				public static BalloonPopupButtonStyleBuilder_getStrokeWidth(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder): number;
				public static BalloonPopupButtonStyleBuilder_setButtonWidth(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder, param2: number): void;
				public static BalloonPopupButtonStyleBuilder_getButtonWidth(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder): number;
				public static BalloonPopupButtonStyleBuilder_setTextColor(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder, param2: number, param3: com.carto.graphics.Color): void;
				public static BalloonPopupButtonStyleBuilder_getTextMargins(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder): number;
				public static BalloonPopupButtonStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder): number;
				public static BalloonPopupButtonStyleBuilder_getCornerRadius(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder): number;
				public static BalloonPopupButtonStyleBuilder_setCornerRadius(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder, param2: number): void;
				public constructor();
				public static BalloonPopupButtonStyleBuilder_getTextFontName(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder): string;
				public static BalloonPopupButtonStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder): number;
				public static BalloonPopupButtonStyleBuilder_setTextFontSize(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder, param2: number): void;
				public static BalloonPopupButtonStyleBuilder_setStrokeWidth(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder, param2: number): void;
				public static BalloonPopupButtonStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder): string;
				public static BalloonPopupButtonStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public static BalloonPopupButtonStyleBuilder_setTextMargins(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder, param2: number, param3: com.carto.styles.BalloonPopupMargins): void;
				public static BalloonPopupButtonStyleBuilder_setTextFontName(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder, param2: string): void;
				public static BalloonPopupButtonStyleBuilder_setStrokeColor(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder, param2: number, param3: com.carto.graphics.Color): void;
				public static new_BalloonPopupButtonStyleBuilder(): number;
				public static delete_BalloonPopupButtonStyleBuilder(param0: number): void;
				public static BalloonPopupButtonStyleBuilder_getTextColor(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder): number;
				public static BalloonPopupButtonStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder): any;
				public static BalloonPopupButtonStyleBuilder_getStrokeColor(param0: number, param1: com.carto.styles.BalloonPopupButtonStyleBuilder): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BalloonPopupButtonStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupButtonStyleModuleJNI>;
				public static BalloonPopupButtonStyle_getTextColor(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle): number;
				public static BalloonPopupButtonStyle_getTextFontSize(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle): number;
				public static BalloonPopupButtonStyle_SWIGSmartPtrUpcast(param0: number): number;
				public static BalloonPopupButtonStyle_getCornerRadius(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle): number;
				public static BalloonPopupButtonStyle_getStrokeWidth(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle): number;
				public static delete_BalloonPopupButtonStyle(param0: number): void;
				public static BalloonPopupButtonStyle_getTextMargins(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle): number;
				public constructor();
				public static BalloonPopupButtonStyle_getTextFontName(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle): string;
				public static BalloonPopupButtonStyle_getStrokeColor(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle): number;
				public static BalloonPopupButtonStyle_swigGetClassName(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle): string;
				public static BalloonPopupButtonStyle_getButtonWidth(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle): number;
				public static BalloonPopupButtonStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle): any;
				public static BalloonPopupButtonStyle_getBackgroundColor(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle): number;
				public static BalloonPopupButtonStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BalloonPopupMargins extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupMargins>;
				public swigCMemOwn: boolean;
				public getTop(): number;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.styles.BalloonPopupMargins): number;
				public delete(): void;
				public getLeft(): number;
				public finalize(): void;
				public getBottom(): number;
				public getRight(): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
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
				public finalize(): void;
				public getRightMargins(): com.carto.styles.BalloonPopupMargins;
				public getRightImage(): com.carto.graphics.Bitmap;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BalloonPopupStyle;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.PopupStyle;
				public static getCPtr(obj: com.carto.styles.BillboardStyle): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public isTitleWrap(): boolean;
				public getTriangleHeight(): number;
				public delete(): void;
				public getTitleFontSize(): number;
				public getButtonMargins(): com.carto.styles.BalloonPopupMargins;
				public getLeftImage(): com.carto.graphics.Bitmap;
				public isDescriptionWrap(): boolean;
				public static getCPtr(obj: com.carto.styles.BalloonPopupStyle): number;
				public getLeftColor(): com.carto.graphics.Color;
				public getDescriptionMargins(): com.carto.styles.BalloonPopupMargins;
				public getDescriptionFontSize(): number;
				public getBackgroundColor(): com.carto.graphics.Color;
				public getDescriptionColor(): com.carto.graphics.Color;
				public getTitleMargins(): com.carto.styles.BalloonPopupMargins;
				public getTitleField(): string;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyle;
				public getLeftMargins(): com.carto.styles.BalloonPopupMargins;
				public swigGetDirectorObject(): any;
				public getTriangleWidth(): number;
				public swigGetRawPtr(): number;
				public getCornerRadius(): number;
				public getRightColor(): com.carto.graphics.Color;
				public getDescriptionField(): string;
				public static getCPtr(obj: com.carto.styles.PopupStyle): number;
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
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BalloonPopupStyleBuilder;
				public setTitleColor(titleColor: com.carto.graphics.Color): void;
				public getRightImage(): com.carto.graphics.Bitmap;
				public setButtonMargins(buttonMargins: com.carto.styles.BalloonPopupMargins): void;
				public constructor();
				public setTitleField(field: string): void;
				public setStrokeWidth(strokeWidth: number): void;
				public setTriangleWidth(triangleWidth: number): void;
				public buildStyle(): com.carto.styles.BalloonPopupStyle;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.PopupStyleBuilder;
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
				public static getCPtr(obj: com.carto.styles.BillboardStyleBuilder): number;
				public getTitleColor(): com.carto.graphics.Color;
				public getTitleFontName(): string;
				public setTitleFontSize(titleFontSize: number): void;
				public setDescriptionWrap(descWrap: boolean): void;
				public finalize(): void;
				public getRightMargins(): com.carto.styles.BalloonPopupMargins;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public static getCPtr(obj: com.carto.styles.BalloonPopupStyleBuilder): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public setCornerRadius(cornerRadius: number): void;
				public isTitleWrap(): boolean;
				public getTriangleHeight(): number;
				public delete(): void;
				public getTitleFontSize(): number;
				public getButtonMargins(): com.carto.styles.BalloonPopupMargins;
				public getLeftImage(): com.carto.graphics.Bitmap;
				public setDescriptionFontSize(descFontSize: number): void;
				public getLeftColor(): com.carto.graphics.Color;
				public setLeftImage(leftImage: com.carto.graphics.Bitmap): void;
				public getDescriptionColor(): com.carto.graphics.Color;
				public swigGetClassName(): string;
				public getLeftMargins(): com.carto.styles.BalloonPopupMargins;
				public swigGetDirectorObject(): any;
				public setDescriptionColor(descColor: com.carto.graphics.Color): void;
				public getTriangleWidth(): number;
				public swigGetRawPtr(): number;
				public setTriangleHeight(triangleHeight: number): void;
				public static getCPtr(obj: com.carto.styles.PopupStyleBuilder): number;
				public setLeftMargins(leftMargins: com.carto.styles.BalloonPopupMargins): void;
				public setRightMargins(rightMargins: com.carto.styles.BalloonPopupMargins): void;
				public setTitleWrap(titleWrap: boolean): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyleBuilder;
				public getDescriptionFontName(): string;
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BalloonPopupStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupStyleBuilderModuleJNI>;
				public static BalloonPopupStyleBuilder_setRightImage(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number, param3: com.carto.graphics.Bitmap): void;
				public static delete_BalloonPopupStyleBuilder(param0: number): void;
				public static BalloonPopupStyleBuilder_setTitleColor(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number, param3: com.carto.graphics.Color): void;
				public static BalloonPopupStyleBuilder_setTitleFontSize(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number): void;
				public static BalloonPopupStyleBuilder_setDescriptionWrap(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: boolean): void;
				public constructor();
				public static BalloonPopupStyleBuilder_setDescriptionFontSize(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number): void;
				public static BalloonPopupStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_setRightColor(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number, param3: com.carto.graphics.Color): void;
				public static BalloonPopupStyleBuilder_getLeftColor(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_getDescriptionFontName(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): string;
				public static BalloonPopupStyleBuilder_setDescriptionMargins(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number, param3: com.carto.styles.BalloonPopupMargins): void;
				public static BalloonPopupStyleBuilder_getRightColor(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_setDescriptionColor(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number, param3: com.carto.graphics.Color): void;
				public static BalloonPopupStyleBuilder_isDescriptionWrap(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): boolean;
				public static BalloonPopupStyleBuilder_setTriangleHeight(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number): void;
				public static BalloonPopupStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): string;
				public static BalloonPopupStyleBuilder_setTriangleWidth(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number): void;
				public static BalloonPopupStyleBuilder_getLeftMargins(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_setLeftMargins(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number, param3: com.carto.styles.BalloonPopupMargins): void;
				public static BalloonPopupStyleBuilder_getTitleColor(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_setTitleMargins(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number, param3: com.carto.styles.BalloonPopupMargins): void;
				public static BalloonPopupStyleBuilder_isTitleWrap(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): boolean;
				public static BalloonPopupStyleBuilder_getTitleFontName(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): string;
				public static BalloonPopupStyleBuilder_getDescriptionField(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): string;
				public static BalloonPopupStyleBuilder_getButtonMargins(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_getRightMargins(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_setStrokeWidth(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number): void;
				public static BalloonPopupStyleBuilder_setTitleField(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: string): void;
				public static BalloonPopupStyleBuilder_setButtonMargins(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number, param3: com.carto.styles.BalloonPopupMargins): void;
				public static BalloonPopupStyleBuilder_setStrokeColor(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number, param3: com.carto.graphics.Color): void;
				public static BalloonPopupStyleBuilder_getStrokeWidth(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_getDescriptionMargins(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_getCornerRadius(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_setDescriptionField(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: string): void;
				public static BalloonPopupStyleBuilder_setLeftColor(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number, param3: com.carto.graphics.Color): void;
				public static BalloonPopupStyleBuilder_getRightImage(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_getTriangleHeight(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_setTitleFontName(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: string): void;
				public static BalloonPopupStyleBuilder_getDescriptionFontSize(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_getTitleMargins(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_setDescriptionFontName(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: string): void;
				public static BalloonPopupStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public static BalloonPopupStyleBuilder_getLeftImage(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_setRightMargins(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number, param3: com.carto.styles.BalloonPopupMargins): void;
				public static BalloonPopupStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): any;
				public static BalloonPopupStyleBuilder_setTitleWrap(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: boolean): void;
				public static BalloonPopupStyleBuilder_getDescriptionColor(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_getStrokeColor(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_setLeftImage(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number, param3: com.carto.graphics.Bitmap): void;
				public static BalloonPopupStyleBuilder_setCornerRadius(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder, param2: number): void;
				public static BalloonPopupStyleBuilder_getTriangleWidth(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static new_BalloonPopupStyleBuilder(): number;
				public static BalloonPopupStyleBuilder_getTitleFontSize(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): number;
				public static BalloonPopupStyleBuilder_getTitleField(param0: number, param1: com.carto.styles.BalloonPopupStyleBuilder): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BalloonPopupStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.BalloonPopupStyleModuleJNI>;
				public static BalloonPopupStyle_getRightMargins(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static new_BalloonPopupMargins(param0: number, param1: number, param2: number, param3: number): number;
				public static BalloonPopupMargins_getBottom(param0: number, param1: com.carto.styles.BalloonPopupMargins): number;
				public static BalloonPopupStyle_getTriangleWidth(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_getRightImage(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_getTitleField(param0: number, param1: com.carto.styles.BalloonPopupStyle): string;
				public static BalloonPopupStyle_getCornerRadius(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_getRightColor(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_getBackgroundColor(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_getTriangleHeight(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_getDescriptionField(param0: number, param1: com.carto.styles.BalloonPopupStyle): string;
				public static BalloonPopupStyle_getDescriptionFontSize(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupMargins_getRight(param0: number, param1: com.carto.styles.BalloonPopupMargins): number;
				public static BalloonPopupStyle_isTitleWrap(param0: number, param1: com.carto.styles.BalloonPopupStyle): boolean;
				public constructor();
				public static BalloonPopupStyle_getTitleColor(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_getTitleMargins(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_getLeftMargins(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_getDescriptionMargins(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupMargins_swigGetRawPtr(param0: number, param1: com.carto.styles.BalloonPopupMargins): number;
				public static BalloonPopupStyle_getDescriptionColor(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupMargins_getTop(param0: number, param1: com.carto.styles.BalloonPopupMargins): number;
				public static BalloonPopupStyle_swigGetClassName(param0: number, param1: com.carto.styles.BalloonPopupStyle): string;
				public static BalloonPopupStyle_SWIGSmartPtrUpcast(param0: number): number;
				public static BalloonPopupStyle_getDescriptionFontName(param0: number, param1: com.carto.styles.BalloonPopupStyle): string;
				public static BalloonPopupStyle_getStrokeWidth(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_getTitleFontSize(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_getLeftColor(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.BalloonPopupStyle): any;
				public static BalloonPopupStyle_getLeftImage(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupStyle_getStrokeColor(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static delete_BalloonPopupMargins(param0: number): void;
				public static BalloonPopupStyle_getButtonMargins(param0: number, param1: com.carto.styles.BalloonPopupStyle): number;
				public static BalloonPopupMargins_getLeft(param0: number, param1: com.carto.styles.BalloonPopupMargins): number;
				public static delete_BalloonPopupStyle(param0: number): void;
				public static BalloonPopupStyle_getTitleFontName(param0: number, param1: com.carto.styles.BalloonPopupStyle): string;
				public static BalloonPopupStyle_isDescriptionWrap(param0: number, param1: com.carto.styles.BalloonPopupStyle): boolean;
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
				public finalize(): void;
				public getAttachAnchorPointY(): number;
				public isScaleWithDPI(): boolean;
				public getVerticalOffset(): number;
				public getAnimationStyle(): com.carto.styles.AnimationStyle;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyle;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.styles.BillboardStyle): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public finalize(): void;
				public isScaleWithDPI(): boolean;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public setAttachAnchorPointX(attachAnchorPointX: number): void;
				public setCausesOverlap(causesOverlap: boolean): void;
				public delete(): void;
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
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public setHorizontalOffset(horizontalOffset: number): void;
				public setAnimationStyle(animStyle: com.carto.styles.AnimationStyle): void;
				public static getCPtr(obj: com.carto.styles.BillboardStyleBuilder): number;
				public setVerticalOffset(verticalOffset: number): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyleBuilder;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BillboardStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.BillboardStyleBuilderModuleJNI>;
				public static BillboardStyleBuilder_isScaleWithDPI(param0: number, param1: com.carto.styles.BillboardStyleBuilder): boolean;
				public static BillboardStyleBuilder_getVerticalOffset(param0: number, param1: com.carto.styles.BillboardStyleBuilder): number;
				public static BillboardStyleBuilder_isCausesOverlap(param0: number, param1: com.carto.styles.BillboardStyleBuilder): boolean;
				public constructor();
				public static BillboardStyleBuilder_setScaleWithDPI(param0: number, param1: com.carto.styles.BillboardStyleBuilder, param2: boolean): void;
				public static BillboardStyleBuilder_setAnimationStyle(param0: number, param1: com.carto.styles.BillboardStyleBuilder, param2: number, param3: com.carto.styles.AnimationStyle): void;
				public static BillboardStyleBuilder_setAttachAnchorPoint(param0: number, param1: com.carto.styles.BillboardStyleBuilder, param2: number, param3: number): void;
				public static BillboardStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.BillboardStyleBuilder): number;
				public static BillboardStyleBuilder_getHorizontalOffset(param0: number, param1: com.carto.styles.BillboardStyleBuilder): number;
				public static BillboardStyleBuilder_getPlacementPriority(param0: number, param1: com.carto.styles.BillboardStyleBuilder): number;
				public static BillboardStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.BillboardStyleBuilder): any;
				public static BillboardStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.BillboardStyleBuilder): string;
				public static BillboardStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public static BillboardStyleBuilder_setHorizontalOffset(param0: number, param1: com.carto.styles.BillboardStyleBuilder, param2: number): void;
				public static BillboardStyleBuilder_setAttachAnchorPointX(param0: number, param1: com.carto.styles.BillboardStyleBuilder, param2: number): void;
				public static delete_BillboardStyleBuilder(param0: number): void;
				public static BillboardStyleBuilder_setCausesOverlap(param0: number, param1: com.carto.styles.BillboardStyleBuilder, param2: boolean): void;
				public static BillboardStyleBuilder_setAttachAnchorPointY(param0: number, param1: com.carto.styles.BillboardStyleBuilder, param2: number): void;
				public static BillboardStyleBuilder_setHideIfOverlapped(param0: number, param1: com.carto.styles.BillboardStyleBuilder, param2: boolean): void;
				public static BillboardStyleBuilder_isHideIfOverlapped(param0: number, param1: com.carto.styles.BillboardStyleBuilder): boolean;
				public static BillboardStyleBuilder_setPlacementPriority(param0: number, param1: com.carto.styles.BillboardStyleBuilder, param2: number): void;
				public static BillboardStyleBuilder_getAttachAnchorPointY(param0: number, param1: com.carto.styles.BillboardStyleBuilder): number;
				public static BillboardStyleBuilder_setVerticalOffset(param0: number, param1: com.carto.styles.BillboardStyleBuilder, param2: number): void;
				public static BillboardStyleBuilder_getAnimationStyle(param0: number, param1: com.carto.styles.BillboardStyleBuilder): number;
				public static BillboardStyleBuilder_getAttachAnchorPointX(param0: number, param1: com.carto.styles.BillboardStyleBuilder): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class BillboardStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.BillboardStyleModuleJNI>;
				public static delete_BillboardStyle(param0: number): void;
				public static BillboardStyle_getVerticalOffset(param0: number, param1: com.carto.styles.BillboardStyle): number;
				public static BillboardStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.BillboardStyle): number;
				public constructor();
				public static BillboardStyle_getPlacementPriority(param0: number, param1: com.carto.styles.BillboardStyle): number;
				public static BillboardStyle_getAttachAnchorPointX(param0: number, param1: com.carto.styles.BillboardStyle): number;
				public static BillboardStyle_getAttachAnchorPointY(param0: number, param1: com.carto.styles.BillboardStyle): number;
				public static BillboardStyle_getAnimationStyle(param0: number, param1: com.carto.styles.BillboardStyle): number;
				public static BillboardStyle_isCausesOverlap(param0: number, param1: com.carto.styles.BillboardStyle): boolean;
				public static BillboardStyle_isHideIfOverlapped(param0: number, param1: com.carto.styles.BillboardStyle): boolean;
				public static BillboardStyle_getHorizontalOffset(param0: number, param1: com.carto.styles.BillboardStyle): number;
				public static BillboardStyle_SWIGSmartPtrUpcast(param0: number): number;
				public static BillboardStyle_isScaleWithDPI(param0: number, param1: com.carto.styles.BillboardStyle): boolean;
				public static BillboardStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.BillboardStyle): any;
				public static BillboardStyle_swigGetClassName(param0: number, param1: com.carto.styles.BillboardStyle): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class CartoCSSStyleSet extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.CartoCSSStyleSet>;
				public swigCMemOwn: boolean;
				public getCartoCSS(): string;
				public constructor(cartoCSS: string, assetPackage: com.carto.utils.AssetPackage);
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public getAssetPackage(): com.carto.utils.AssetPackage;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(cartoCSS: string);
				public static getCPtr(obj: com.carto.styles.CartoCSSStyleSet): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class CartoCSSStyleSetModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.CartoCSSStyleSetModuleJNI>;
				public static new_StringCartoCSSStyleSetMap__SWIG_0(): number;
				public static delete_StringCartoCSSStyleSetMap(param0: number): void;
				public static new_CartoCSSStyleSet__SWIG_0(param0: string): number;
				public static StringCartoCSSStyleSetMap_has_key(param0: number, param1: com.carto.styles.StringCartoCSSStyleSetMap, param2: string): boolean;
				public static StringCartoCSSStyleSetMap_get_key(param0: number, param1: com.carto.styles.StringCartoCSSStyleSetMap, param2: number): string;
				public static StringCartoCSSStyleSetMap_get(param0: number, param1: com.carto.styles.StringCartoCSSStyleSetMap, param2: string): number;
				public static new_CartoCSSStyleSet__SWIG_1(param0: string, param1: number, param2: com.carto.utils.AssetPackage): number;
				public constructor();
				public static new_StringCartoCSSStyleSetMap__SWIG_1(param0: number, param1: com.carto.styles.StringCartoCSSStyleSetMap): number;
				public static StringCartoCSSStyleSetMap_clear(param0: number, param1: com.carto.styles.StringCartoCSSStyleSetMap): void;
				public static delete_CartoCSSStyleSet(param0: number): void;
				public static StringCartoCSSStyleSetMap_del(param0: number, param1: com.carto.styles.StringCartoCSSStyleSetMap, param2: string): void;
				public static StringCartoCSSStyleSetMap_empty(param0: number, param1: com.carto.styles.StringCartoCSSStyleSetMap): boolean;
				public static CartoCSSStyleSet_getCartoCSS(param0: number, param1: com.carto.styles.CartoCSSStyleSet): string;
				public static CartoCSSStyleSet_getAssetPackage(param0: number, param1: com.carto.styles.CartoCSSStyleSet): number;
				public static CartoCSSStyleSet_swigGetRawPtr(param0: number, param1: com.carto.styles.CartoCSSStyleSet): number;
				public static StringCartoCSSStyleSetMap_set(param0: number, param1: com.carto.styles.StringCartoCSSStyleSetMap, param2: string, param3: number, param4: com.carto.styles.CartoCSSStyleSet): void;
				public static StringCartoCSSStyleSetMap_size(param0: number, param1: com.carto.styles.StringCartoCSSStyleSetMap): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class CompiledStyleSet extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.CompiledStyleSet>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public getStyleAssetName(): string;
				public hashCode(): number;
				public finalize(): void;
				public constructor(assetPackage: com.carto.utils.AssetPackage);
				public getAssetPackage(): com.carto.utils.AssetPackage;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.CompiledStyleSet): number;
				public constructor(assetPackage: com.carto.utils.AssetPackage, styleName: string);
				public getStyleName(): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class CompiledStyleSetModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.CompiledStyleSetModuleJNI>;
				public static delete_CompiledStyleSet(param0: number): void;
				public static new_CompiledStyleSet__SWIG_1(param0: number, param1: com.carto.utils.AssetPackage, param2: string): number;
				public static CompiledStyleSet_getStyleAssetName(param0: number, param1: com.carto.styles.CompiledStyleSet): string;
				public static CompiledStyleSet_getStyleName(param0: number, param1: com.carto.styles.CompiledStyleSet): string;
				public static new_CompiledStyleSet__SWIG_0(param0: number, param1: com.carto.utils.AssetPackage): number;
				public static CompiledStyleSet_getAssetPackage(param0: number, param1: com.carto.styles.CompiledStyleSet): number;
				public static CompiledStyleSet_swigGetRawPtr(param0: number, param1: com.carto.styles.CompiledStyleSet): number;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class GeometryCollectionStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.GeometryCollectionStyle>;
				public static getCPtr(obj: com.carto.styles.GeometryCollectionStyle): number;
				public getPointStyle(): com.carto.styles.PointStyle;
				public finalize(): void;
				public swigGetClassName(): string;
				public getPolygonStyle(): com.carto.styles.PolygonStyle;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.GeometryCollectionStyle;
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
				public finalize(): void;
				public setLineStyle(lineStyle: com.carto.styles.LineStyle): void;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public swigGetClassName(): string;
				public getPolygonStyle(): com.carto.styles.PolygonStyle;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.GeometryCollectionStyleBuilder;
				public delete(): void;
				public buildStyle(): com.carto.styles.GeometryCollectionStyle;
				public static getCPtr(obj: com.carto.styles.GeometryCollectionStyleBuilder): number;
				public getLineStyle(): com.carto.styles.LineStyle;
				public setPointStyle(pointStyle: com.carto.styles.PointStyle): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class GeometryCollectionStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.GeometryCollectionStyleBuilderModuleJNI>;
				public static GeometryCollectionStyleBuilder_getPolygonStyle(param0: number, param1: com.carto.styles.GeometryCollectionStyleBuilder): number;
				public static new_GeometryCollectionStyleBuilder(): number;
				public static GeometryCollectionStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.GeometryCollectionStyleBuilder): any;
				public static GeometryCollectionStyleBuilder_getLineStyle(param0: number, param1: com.carto.styles.GeometryCollectionStyleBuilder): number;
				public static GeometryCollectionStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.GeometryCollectionStyleBuilder): string;
				public static GeometryCollectionStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public constructor();
				public static GeometryCollectionStyleBuilder_setPolygonStyle(param0: number, param1: com.carto.styles.GeometryCollectionStyleBuilder, param2: number, param3: com.carto.styles.PolygonStyle): void;
				public static GeometryCollectionStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.GeometryCollectionStyleBuilder): number;
				public static GeometryCollectionStyleBuilder_getPointStyle(param0: number, param1: com.carto.styles.GeometryCollectionStyleBuilder): number;
				public static GeometryCollectionStyleBuilder_setPointStyle(param0: number, param1: com.carto.styles.GeometryCollectionStyleBuilder, param2: number, param3: com.carto.styles.PointStyle): void;
				public static GeometryCollectionStyleBuilder_setLineStyle(param0: number, param1: com.carto.styles.GeometryCollectionStyleBuilder, param2: number, param3: com.carto.styles.LineStyle): void;
				public static delete_GeometryCollectionStyleBuilder(param0: number): void;
				public static GeometryCollectionStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.GeometryCollectionStyleBuilder): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class GeometryCollectionStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.GeometryCollectionStyleModuleJNI>;
				public static GeometryCollectionStyle_getPolygonStyle(param0: number, param1: com.carto.styles.GeometryCollectionStyle): number;
				public static GeometryCollectionStyle_SWIGSmartPtrUpcast(param0: number): number;
				public static GeometryCollectionStyle_getLineStyle(param0: number, param1: com.carto.styles.GeometryCollectionStyle): number;
				public static delete_GeometryCollectionStyle(param0: number): void;
				public static GeometryCollectionStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.GeometryCollectionStyle): any;
				public static GeometryCollectionStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.GeometryCollectionStyle): number;
				public static GeometryCollectionStyle_getPointStyle(param0: number, param1: com.carto.styles.GeometryCollectionStyle): number;
				public static GeometryCollectionStyle_swigGetClassName(param0: number, param1: com.carto.styles.GeometryCollectionStyle): string;
				public constructor();
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
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.LabelStyle;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				public finalize(): void;
				public getAnchorPointY(): number;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyle;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.styles.BillboardStyle): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getRenderScale(): number;
				public getAnchorPointX(): number;
				public static getCPtr(obj: com.carto.styles.LabelStyle): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class LabelStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.LabelStyleBuilder>;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.LabelStyleBuilder;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				public finalize(): void;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public setAnchorPoint(anchorPointX: number, anchorPointY: number): void;
				public constructor();
				public setRenderScale(renderScale: number): void;
				public setOrientationMode(orientationMode: com.carto.styles.BillboardOrientation): void;
				public delete(): void;
				public static getCPtr(obj: com.carto.styles.LabelStyleBuilder): number;
				public getAnchorPointX(): number;
				public setAnchorPointY(anchorPointY: number): void;
				public isFlippable(): boolean;
				public buildStyle(): com.carto.styles.LabelStyle;
				public setAnchorPointX(anchorPointX: number): void;
				public getAnchorPointY(): number;
				public swigGetClassName(): string;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public setScalingMode(scalingMode: com.carto.styles.BillboardScaling): void;
				public setFlippable(flippable: boolean): void;
				public static getCPtr(obj: com.carto.styles.BillboardStyleBuilder): number;
				public getRenderScale(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyleBuilder;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class LabelStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.LabelStyleBuilderModuleJNI>;
				public static LabelStyleBuilder_setAnchorPoint(param0: number, param1: com.carto.styles.LabelStyleBuilder, param2: number, param3: number): void;
				public static LabelStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.LabelStyleBuilder): any;
				public static LabelStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public static LabelStyleBuilder_setRenderScale(param0: number, param1: com.carto.styles.LabelStyleBuilder, param2: number): void;
				public static LabelStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.LabelStyleBuilder): number;
				public static new_LabelStyleBuilder(): number;
				public static LabelStyleBuilder_setScalingMode(param0: number, param1: com.carto.styles.LabelStyleBuilder, param2: number): void;
				public constructor();
				public static LabelStyleBuilder_isFlippable(param0: number, param1: com.carto.styles.LabelStyleBuilder): boolean;
				public static LabelStyleBuilder_getScalingMode(param0: number, param1: com.carto.styles.LabelStyleBuilder): number;
				public static LabelStyleBuilder_setFlippable(param0: number, param1: com.carto.styles.LabelStyleBuilder, param2: boolean): void;
				public static LabelStyleBuilder_getRenderScale(param0: number, param1: com.carto.styles.LabelStyleBuilder): number;
				public static LabelStyleBuilder_setAnchorPointX(param0: number, param1: com.carto.styles.LabelStyleBuilder, param2: number): void;
				public static LabelStyleBuilder_setAnchorPointY(param0: number, param1: com.carto.styles.LabelStyleBuilder, param2: number): void;
				public static LabelStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.LabelStyleBuilder): number;
				public static LabelStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.LabelStyleBuilder): string;
				public static delete_LabelStyleBuilder(param0: number): void;
				public static LabelStyleBuilder_getAnchorPointY(param0: number, param1: com.carto.styles.LabelStyleBuilder): number;
				public static LabelStyleBuilder_getAnchorPointX(param0: number, param1: com.carto.styles.LabelStyleBuilder): number;
				public static LabelStyleBuilder_getOrientationMode(param0: number, param1: com.carto.styles.LabelStyleBuilder): number;
				public static LabelStyleBuilder_setOrientationMode(param0: number, param1: com.carto.styles.LabelStyleBuilder, param2: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class LabelStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.LabelStyleModuleJNI>;
				public static LabelStyle_getRenderScale(param0: number, param1: com.carto.styles.LabelStyle): number;
				public static LabelStyle_isFlippable(param0: number, param1: com.carto.styles.LabelStyle): boolean;
				public static LabelStyle_swigGetClassName(param0: number, param1: com.carto.styles.LabelStyle): string;
				public static LabelStyle_getScalingMode(param0: number, param1: com.carto.styles.LabelStyle): number;
				public static LabelStyle_getAnchorPointX(param0: number, param1: com.carto.styles.LabelStyle): number;
				public static LabelStyle_SWIGSmartPtrUpcast(param0: number): number;
				public static LabelStyle_getAnchorPointY(param0: number, param1: com.carto.styles.LabelStyle): number;
				public static LabelStyle_getOrientationMode(param0: number, param1: com.carto.styles.LabelStyle): number;
				public static delete_LabelStyle(param0: number): void;
				public static LabelStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.LabelStyle): number;
				public static LabelStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.LabelStyle): any;
				public constructor();
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
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
				public getBitmap(): com.carto.graphics.Bitmap;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.styles.LineStyle): number;
				public getWidth(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.LineStyle;
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
				public static getCPtr(obj: com.carto.styles.LineStyleBuilder): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.LineStyleBuilder;
				public finalize(): void;
				public setLineJoinType(lineJoinType: com.carto.styles.LineJoinType): void;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public swigGetDirectorObject(): any;
				public constructor();
				public getBitmap(): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public getWidth(): number;
				public delete(): void;
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
			export class LineStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.LineStyleBuilderModuleJNI>;
				public static LineStyleBuilder_setWidth(param0: number, param1: com.carto.styles.LineStyleBuilder, param2: number): void;
				public static LineStyleBuilder_setBitmap(param0: number, param1: com.carto.styles.LineStyleBuilder, param2: number, param3: com.carto.graphics.Bitmap): void;
				public static LineStyleBuilder_getLineEndType(param0: number, param1: com.carto.styles.LineStyleBuilder): number;
				public static LineStyleBuilder_setStretchFactor(param0: number, param1: com.carto.styles.LineStyleBuilder, param2: number): void;
				public constructor();
				public static LineStyleBuilder_getClickWidth(param0: number, param1: com.carto.styles.LineStyleBuilder): number;
				public static LineStyleBuilder_getStretchFactor(param0: number, param1: com.carto.styles.LineStyleBuilder): number;
				public static LineStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public static LineStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.LineStyleBuilder): any;
				public static LineStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.LineStyleBuilder): number;
				public static LineStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.LineStyleBuilder): number;
				public static LineStyleBuilder_setClickWidth(param0: number, param1: com.carto.styles.LineStyleBuilder, param2: number): void;
				public static LineStyleBuilder_setLineEndType(param0: number, param1: com.carto.styles.LineStyleBuilder, param2: number): void;
				public static LineStyleBuilder_getBitmap(param0: number, param1: com.carto.styles.LineStyleBuilder): number;
				public static LineStyleBuilder_setLineJoinType(param0: number, param1: com.carto.styles.LineStyleBuilder, param2: number): void;
				public static delete_LineStyleBuilder(param0: number): void;
				public static LineStyleBuilder_getLineJoinType(param0: number, param1: com.carto.styles.LineStyleBuilder): number;
				public static new_LineStyleBuilder(): number;
				public static LineStyleBuilder_getWidth(param0: number, param1: com.carto.styles.LineStyleBuilder): number;
				public static LineStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.LineStyleBuilder): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class LineStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.LineStyleModuleJNI>;
				public static LineStyle_SWIGSmartPtrUpcast(param0: number): number;
				public static LineStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.LineStyle): any;
				public static LineStyle_getClickWidth(param0: number, param1: com.carto.styles.LineStyle): number;
				public static LineStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.LineStyle): number;
				public static LineStyle_swigGetClassName(param0: number, param1: com.carto.styles.LineStyle): string;
				public static LineStyle_getStretchFactor(param0: number, param1: com.carto.styles.LineStyle): number;
				public static delete_LineStyle(param0: number): void;
				public static LineStyle_getLineEndType(param0: number, param1: com.carto.styles.LineStyle): number;
				public static LineStyle_getBitmap(param0: number, param1: com.carto.styles.LineStyle): number;
				public static LineStyle_getLineJoinType(param0: number, param1: com.carto.styles.LineStyle): number;
				public static LineStyle_getWidth(param0: number, param1: com.carto.styles.LineStyle): number;
				public constructor();
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
				public finalize(): void;
				public getClickSize(): number;
				public getAnchorPointY(): number;
				public swigGetClassName(): string;
				public static getCPtr(obj: com.carto.styles.MarkerStyle): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyle;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
				public getBitmap(): com.carto.graphics.Bitmap;
				public static getCPtr(obj: com.carto.styles.BillboardStyle): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getSize(): number;
				public getAnchorPointX(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.MarkerStyle;
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
				public finalize(): void;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public setAnchorPoint(anchorPointX: number, anchorPointY: number): void;
				public constructor();
				public static getCPtr(obj: com.carto.styles.MarkerStyleBuilder): number;
				public setOrientationMode(orientationMode: com.carto.styles.BillboardOrientation): void;
				public setClickSize(size: number): void;
				public delete(): void;
				public getSize(): number;
				public getAnchorPointX(): number;
				public setAnchorPointY(anchorPointY: number): void;
				public setAnchorPointX(anchorPointX: number): void;
				public getClickSize(): number;
				public getAnchorPointY(): number;
				public swigGetClassName(): string;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public swigGetDirectorObject(): any;
				public getBitmap(): com.carto.graphics.Bitmap;
				public swigGetRawPtr(): number;
				public setScalingMode(scalingMode: com.carto.styles.BillboardScaling): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.MarkerStyleBuilder;
				public setSize(size: number): void;
				public static getCPtr(obj: com.carto.styles.BillboardStyleBuilder): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyleBuilder;
				public buildStyle(): com.carto.styles.MarkerStyle;
				public setBitmap(bitmap: com.carto.graphics.Bitmap): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class MarkerStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.MarkerStyleBuilderModuleJNI>;
				public static MarkerStyleBuilder_setAnchorPointY(param0: number, param1: com.carto.styles.MarkerStyleBuilder, param2: number): void;
				public static MarkerStyleBuilder_setClickSize(param0: number, param1: com.carto.styles.MarkerStyleBuilder, param2: number): void;
				public static delete_MarkerStyleBuilder(param0: number): void;
				public static MarkerStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.MarkerStyleBuilder): number;
				public static MarkerStyleBuilder_getOrientationMode(param0: number, param1: com.carto.styles.MarkerStyleBuilder): number;
				public static MarkerStyleBuilder_setOrientationMode(param0: number, param1: com.carto.styles.MarkerStyleBuilder, param2: number): void;
				public static MarkerStyleBuilder_getSize(param0: number, param1: com.carto.styles.MarkerStyleBuilder): number;
				public static MarkerStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public static MarkerStyleBuilder_setScalingMode(param0: number, param1: com.carto.styles.MarkerStyleBuilder, param2: number): void;
				public static new_MarkerStyleBuilder(): number;
				public static MarkerStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.MarkerStyleBuilder): number;
				public constructor();
				public static MarkerStyleBuilder_setBitmap(param0: number, param1: com.carto.styles.MarkerStyleBuilder, param2: number, param3: com.carto.graphics.Bitmap): void;
				public static MarkerStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.MarkerStyleBuilder): any;
				public static MarkerStyleBuilder_getAnchorPointX(param0: number, param1: com.carto.styles.MarkerStyleBuilder): number;
				public static MarkerStyleBuilder_setAnchorPointX(param0: number, param1: com.carto.styles.MarkerStyleBuilder, param2: number): void;
				public static MarkerStyleBuilder_setSize(param0: number, param1: com.carto.styles.MarkerStyleBuilder, param2: number): void;
				public static MarkerStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.MarkerStyleBuilder): string;
				public static MarkerStyleBuilder_getScalingMode(param0: number, param1: com.carto.styles.MarkerStyleBuilder): number;
				public static MarkerStyleBuilder_setAnchorPoint(param0: number, param1: com.carto.styles.MarkerStyleBuilder, param2: number, param3: number): void;
				public static MarkerStyleBuilder_getAnchorPointY(param0: number, param1: com.carto.styles.MarkerStyleBuilder): number;
				public static MarkerStyleBuilder_getBitmap(param0: number, param1: com.carto.styles.MarkerStyleBuilder): number;
				public static MarkerStyleBuilder_getClickSize(param0: number, param1: com.carto.styles.MarkerStyleBuilder): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class MarkerStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.MarkerStyleModuleJNI>;
				public static MarkerStyle_swigGetClassName(param0: number, param1: com.carto.styles.MarkerStyle): string;
				public static MarkerStyle_getBitmap(param0: number, param1: com.carto.styles.MarkerStyle): number;
				public static MarkerStyle_getScalingMode(param0: number, param1: com.carto.styles.MarkerStyle): number;
				public static MarkerStyle_getAnchorPointY(param0: number, param1: com.carto.styles.MarkerStyle): number;
				public static MarkerStyle_SWIGSmartPtrUpcast(param0: number): number;
				public static MarkerStyle_getAnchorPointX(param0: number, param1: com.carto.styles.MarkerStyle): number;
				public static MarkerStyle_getClickSize(param0: number, param1: com.carto.styles.MarkerStyle): number;
				public constructor();
				public static MarkerStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.MarkerStyle): any;
				public static delete_MarkerStyle(param0: number): void;
				public static MarkerStyle_getOrientationMode(param0: number, param1: com.carto.styles.MarkerStyle): number;
				public static MarkerStyle_getSize(param0: number, param1: com.carto.styles.MarkerStyle): number;
				public static MarkerStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.MarkerStyle): number;
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
				public finalize(): void;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyle;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public static getCPtr(obj: com.carto.styles.NMLModelStyle): number;
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.styles.BillboardStyle): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.NMLModelStyle;
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
				public static getCPtr(obj: com.carto.styles.NMLModelStyleBuilder): number;
				public finalize(): void;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public swigGetClassName(): string;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.NMLModelStyleBuilder;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public setOrientationMode(orientationMode: com.carto.styles.BillboardOrientation): void;
				public delete(): void;
				public setScalingMode(scalingMode: com.carto.styles.BillboardScaling): void;
				public buildStyle(): com.carto.styles.NMLModelStyle;
				public static getCPtr(obj: com.carto.styles.BillboardStyleBuilder): number;
				public setModelAsset(modelAsset: com.carto.core.BinaryData): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyleBuilder;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class NMLModelStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.NMLModelStyleBuilderModuleJNI>;
				public static NMLModelStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public static NMLModelStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.NMLModelStyleBuilder): number;
				public static NMLModelStyleBuilder_setScalingMode(param0: number, param1: com.carto.styles.NMLModelStyleBuilder, param2: number): void;
				public static NMLModelStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.NMLModelStyleBuilder): string;
				public static NMLModelStyleBuilder_setOrientationMode(param0: number, param1: com.carto.styles.NMLModelStyleBuilder, param2: number): void;
				public static NMLModelStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.NMLModelStyleBuilder): any;
				public constructor();
				public static new_NMLModelStyleBuilder(): number;
				public static NMLModelStyleBuilder_setModelAsset(param0: number, param1: com.carto.styles.NMLModelStyleBuilder, param2: number, param3: com.carto.core.BinaryData): void;
				public static delete_NMLModelStyleBuilder(param0: number): void;
				public static NMLModelStyleBuilder_getScalingMode(param0: number, param1: com.carto.styles.NMLModelStyleBuilder): number;
				public static NMLModelStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.NMLModelStyleBuilder): number;
				public static NMLModelStyleBuilder_getOrientationMode(param0: number, param1: com.carto.styles.NMLModelStyleBuilder): number;
				public static NMLModelStyleBuilder_getModelAsset(param0: number, param1: com.carto.styles.NMLModelStyleBuilder): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class NMLModelStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.NMLModelStyleModuleJNI>;
				public static NMLModelStyle_getOrientationMode(param0: number, param1: com.carto.styles.NMLModelStyle): number;
				public static NMLModelStyle_getScalingMode(param0: number, param1: com.carto.styles.NMLModelStyle): number;
				public static NMLModelStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.NMLModelStyle): any;
				public static NMLModelStyle_swigGetClassName(param0: number, param1: com.carto.styles.NMLModelStyle): string;
				public static delete_NMLModelStyle(param0: number): void;
				public static NMLModelStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.NMLModelStyle): number;
				public static NMLModelStyle_SWIGSmartPtrUpcast(param0: number): number;
				public constructor();
				public static NMLModelStyle_getModelAsset(param0: number, param1: com.carto.styles.NMLModelStyle): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PointStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.PointStyle>;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.PointStyle;
				public finalize(): void;
				public getClickSize(): number;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
				public getBitmap(): com.carto.graphics.Bitmap;
				public static getCPtr(obj: com.carto.styles.PointStyle): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public static getCPtr(obj: com.carto.styles.PointStyleBuilder): number;
				public finalize(): void;
				public getClickSize(): number;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public swigGetDirectorObject(): any;
				public constructor();
				public getBitmap(): com.carto.graphics.Bitmap;
				public buildStyle(): com.carto.styles.PointStyle;
				public swigGetRawPtr(): number;
				public setClickSize(size: number): void;
				public delete(): void;
				public getSize(): number;
				public setSize(size: number): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.PointStyleBuilder;
				public setBitmap(bitmap: com.carto.graphics.Bitmap): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PointStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.PointStyleBuilderModuleJNI>;
				public static new_PointStyleBuilder(): number;
				public static PointStyleBuilder_setClickSize(param0: number, param1: com.carto.styles.PointStyleBuilder, param2: number): void;
				public constructor();
				public static delete_PointStyleBuilder(param0: number): void;
				public static PointStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.PointStyleBuilder): number;
				public static PointStyleBuilder_setSize(param0: number, param1: com.carto.styles.PointStyleBuilder, param2: number): void;
				public static PointStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.PointStyleBuilder): any;
				public static PointStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.PointStyleBuilder): number;
				public static PointStyleBuilder_getSize(param0: number, param1: com.carto.styles.PointStyleBuilder): number;
				public static PointStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public static PointStyleBuilder_setBitmap(param0: number, param1: com.carto.styles.PointStyleBuilder, param2: number, param3: com.carto.graphics.Bitmap): void;
				public static PointStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.PointStyleBuilder): string;
				public static PointStyleBuilder_getBitmap(param0: number, param1: com.carto.styles.PointStyleBuilder): number;
				public static PointStyleBuilder_getClickSize(param0: number, param1: com.carto.styles.PointStyleBuilder): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PointStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.PointStyleModuleJNI>;
				public static PointStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.PointStyle): number;
				public static delete_PointStyle(param0: number): void;
				public static PointStyle_getClickSize(param0: number, param1: com.carto.styles.PointStyle): number;
				public static PointStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.PointStyle): any;
				public static PointStyle_SWIGSmartPtrUpcast(param0: number): number;
				public static PointStyle_getBitmap(param0: number, param1: com.carto.styles.PointStyle): number;
				public static PointStyle_swigGetClassName(param0: number, param1: com.carto.styles.PointStyle): string;
				public static PointStyle_getSize(param0: number, param1: com.carto.styles.PointStyle): number;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class Polygon3DStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.Polygon3DStyle>;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public getSideColor(): com.carto.graphics.Color;
				public swigGetRawPtr(): number;
				public delete(): void;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Polygon3DStyle;
				public static getCPtr(obj: com.carto.styles.Polygon3DStyle): number;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
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
				public static getCPtr(obj: com.carto.styles.Polygon3DStyleBuilder): number;
				public finalize(): void;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Polygon3DStyleBuilder;
				public setSideColor(sideColor: com.carto.graphics.Color): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class Polygon3DStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.Polygon3DStyleBuilderModuleJNI>;
				public static Polygon3DStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.Polygon3DStyleBuilder): string;
				public static Polygon3DStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.Polygon3DStyleBuilder): number;
				public static new_Polygon3DStyleBuilder(): number;
				public static Polygon3DStyleBuilder_getSideColor(param0: number, param1: com.carto.styles.Polygon3DStyleBuilder): number;
				public static Polygon3DStyleBuilder_setSideColor(param0: number, param1: com.carto.styles.Polygon3DStyleBuilder, param2: number, param3: com.carto.graphics.Color): void;
				public static Polygon3DStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public static delete_Polygon3DStyleBuilder(param0: number): void;
				public static Polygon3DStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.Polygon3DStyleBuilder): number;
				public static Polygon3DStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.Polygon3DStyleBuilder): any;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class Polygon3DStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.Polygon3DStyleModuleJNI>;
				public static delete_Polygon3DStyle(param0: number): void;
				public static Polygon3DStyle_getSideColor(param0: number, param1: com.carto.styles.Polygon3DStyle): number;
				public static Polygon3DStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.Polygon3DStyle): number;
				public static Polygon3DStyle_SWIGSmartPtrUpcast(param0: number): number;
				public static Polygon3DStyle_swigGetClassName(param0: number, param1: com.carto.styles.Polygon3DStyle): string;
				public static Polygon3DStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.Polygon3DStyle): any;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PolygonStyle extends com.carto.styles.Style {
				public static class: java.lang.Class<com.carto.styles.PolygonStyle>;
				public static getCPtr(obj: com.carto.styles.PolygonStyle): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public swigGetRawPtr(): number;
				public delete(): void;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.PolygonStyle;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getLineStyle(): com.carto.styles.LineStyle;
				public static getCPtr(obj: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PolygonStyleBuilder extends com.carto.styles.StyleBuilder {
				public static class: java.lang.Class<com.carto.styles.PolygonStyleBuilder>;
				public static getCPtr(obj: com.carto.styles.PolygonStyleBuilder): number;
				public finalize(): void;
				public setLineStyle(lineStyle: com.carto.styles.LineStyle): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.PolygonStyleBuilder;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public swigGetClassName(): string;
				public buildStyle(): com.carto.styles.PolygonStyle;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public getLineStyle(): com.carto.styles.LineStyle;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PolygonStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.PolygonStyleBuilderModuleJNI>;
				public static PolygonStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.PolygonStyleBuilder): string;
				public static PolygonStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public static PolygonStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.PolygonStyleBuilder): any;
				public static delete_PolygonStyleBuilder(param0: number): void;
				public static new_PolygonStyleBuilder(): number;
				public static PolygonStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.PolygonStyleBuilder): number;
				public static PolygonStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.PolygonStyleBuilder): number;
				public static PolygonStyleBuilder_setLineStyle(param0: number, param1: com.carto.styles.PolygonStyleBuilder, param2: number, param3: com.carto.styles.LineStyle): void;
				public constructor();
				public static PolygonStyleBuilder_getLineStyle(param0: number, param1: com.carto.styles.PolygonStyleBuilder): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PolygonStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.PolygonStyleModuleJNI>;
				public static delete_PolygonStyle(param0: number): void;
				public static PolygonStyle_SWIGSmartPtrUpcast(param0: number): number;
				public static PolygonStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.PolygonStyle): number;
				public static PolygonStyle_swigGetClassName(param0: number, param1: com.carto.styles.PolygonStyle): string;
				public static PolygonStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.PolygonStyle): any;
				public static PolygonStyle_getLineStyle(param0: number, param1: com.carto.styles.PolygonStyle): number;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PopupStyle extends com.carto.styles.BillboardStyle {
				public static class: java.lang.Class<com.carto.styles.PopupStyle>;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.PopupStyle;
				public static getCPtr(obj: com.carto.styles.BillboardStyle): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public swigGetRawPtr(): number;
				public delete(): void;
				public finalize(): void;
				public static getCPtr(obj: com.carto.styles.PopupStyle): number;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyle;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PopupStyleBuilder extends com.carto.styles.BillboardStyleBuilder {
				public static class: java.lang.Class<com.carto.styles.PopupStyleBuilder>;
				public finalize(): void;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public buildStyle(): com.carto.styles.PopupStyle;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.PopupStyleBuilder;
				public delete(): void;
				public static getCPtr(obj: com.carto.styles.BillboardStyleBuilder): number;
				public static getCPtr(obj: com.carto.styles.PopupStyleBuilder): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyleBuilder;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PopupStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.PopupStyleBuilderModuleJNI>;
				public static PopupStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.PopupStyleBuilder): number;
				public static new_PopupStyleBuilder(): number;
				public static PopupStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.PopupStyleBuilder): number;
				public static PopupStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.PopupStyleBuilder): any;
				public static PopupStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public constructor();
				public static delete_PopupStyleBuilder(param0: number): void;
				public static PopupStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.PopupStyleBuilder): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class PopupStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.PopupStyleModuleJNI>;
				public static delete_PopupStyle(param0: number): void;
				public static PopupStyle_swigGetClassName(param0: number, param1: com.carto.styles.PopupStyle): string;
				public static PopupStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.PopupStyle): any;
				public static PopupStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.PopupStyle): number;
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
				public static class: java.lang.Class<com.carto.styles.StringCartoCSSStyleSetMap>;
				public swigCMemOwn: boolean;
				public get(key: string): com.carto.styles.CartoCSSStyleSet;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(arg0: com.carto.styles.StringCartoCSSStyleSetMap);
				public constructor();
				public size(): number;
				public delete(): void;
				public set(key: string, x: com.carto.styles.CartoCSSStyleSet): void;
				public has_key(key: string): boolean;
				public clear(): void;
				public del(key: string): void;
				public get_key(idx: number): string;
				public static getCPtr(obj: com.carto.styles.StringCartoCSSStyleSetMap): number;
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
				public swigCMemOwn: boolean;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public getColor(): com.carto.graphics.Color;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class StyleBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.StyleBuilder>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public setColor(color: com.carto.graphics.Color): void;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public getColor(): com.carto.graphics.Color;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class StyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.StyleBuilderModuleJNI>;
				public static StyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.StyleBuilder): any;
				public static delete_StyleBuilder(param0: number): void;
				public static StyleBuilder_getColor(param0: number, param1: com.carto.styles.StyleBuilder): number;
				public static StyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.StyleBuilder): string;
				public static StyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.StyleBuilder): number;
				public static StyleBuilder_setColor(param0: number, param1: com.carto.styles.StyleBuilder, param2: number, param3: com.carto.graphics.Color): void;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class StyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.StyleModuleJNI>;
				public static Style_getColor(param0: number, param1: com.carto.styles.Style): number;
				public static Style_swigGetRawPtr(param0: number, param1: com.carto.styles.Style): number;
				public static delete_Style(param0: number): void;
				public constructor();
				public static Style_swigGetClassName(param0: number, param1: com.carto.styles.Style): string;
				public static Style_swigGetDirectorObject(param0: number, param1: com.carto.styles.Style): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class TextMargins extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.TextMargins>;
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.styles.TextMargins): number;
				public getTop(): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getLeft(): number;
				public finalize(): void;
				public getBottom(): number;
				public getRight(): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
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
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.LabelStyle;
				public finalize(): void;
				public isBreakLines(): boolean;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.styles.Style): number;
				public getTextField(): string;
				public static getCPtr(obj: com.carto.styles.BillboardStyle): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.Style;
				public getFontColor(): com.carto.graphics.Color;
				public delete(): void;
				public static getCPtr(obj: com.carto.styles.TextStyle): number;
				public getBorderColor(): com.carto.graphics.Color;
				public getBackgroundColor(): com.carto.graphics.Color;
				public getFontName(): string;
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyle;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public getFontSize(): number;
				public getTextMargins(): com.carto.styles.TextMargins;
				public getBorderWidth(): number;
				public static getCPtr(obj: com.carto.styles.LabelStyle): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.TextStyle;
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
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.LabelStyleBuilder;
				public finalize(): void;
				public static getCPtr(obj: com.carto.styles.StyleBuilder): number;
				public isBreakLines(): boolean;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.StyleBuilder;
				public getTextField(): string;
				public constructor();
				public setStrokeWidth(strokeWidth: number): void;
				public delete(): void;
				public setFontSize(size: number): void;
				public setBackgroundColor(backgroundColor: com.carto.graphics.Color): void;
				public static getCPtr(obj: com.carto.styles.LabelStyleBuilder): number;
				public setTextMargins(textMargins: com.carto.styles.TextMargins): void;
				public static getCPtr(obj: com.carto.styles.TextStyleBuilder): number;
				public getBorderColor(): com.carto.graphics.Color;
				public buildStyle(): com.carto.styles.LabelStyle;
				public setStrokeColor(strokeColor: com.carto.graphics.Color): void;
				public getBackgroundColor(): com.carto.graphics.Color;
				public getFontName(): string;
				public swigGetClassName(): string;
				public setBreakLines(enable: boolean): void;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public getFontSize(): number;
				public setBorderColor(borderColor: com.carto.graphics.Color): void;
				public getTextMargins(): com.carto.styles.TextMargins;
				public getBorderWidth(): number;
				public setFontName(fontName: string): void;
				public setTextField(field: string): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.TextStyleBuilder;
				public static getCPtr(obj: com.carto.styles.BillboardStyleBuilder): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.styles.BillboardStyleBuilder;
				public setBorderWidth(borderWidth: number): void;
				public buildStyle(): com.carto.styles.TextStyle;
				public getStrokeColor(): com.carto.graphics.Color;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class TextStyleBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.TextStyleBuilderModuleJNI>;
				public static TextStyleBuilder_setFontSize(param0: number, param1: com.carto.styles.TextStyleBuilder, param2: number): void;
				public static TextStyleBuilder_setBackgroundColor(param0: number, param1: com.carto.styles.TextStyleBuilder, param2: number, param3: com.carto.graphics.Color): void;
				public static TextStyleBuilder_getFontName(param0: number, param1: com.carto.styles.TextStyleBuilder): string;
				public static TextStyleBuilder_setStrokeWidth(param0: number, param1: com.carto.styles.TextStyleBuilder, param2: number): void;
				public static TextStyleBuilder_swigGetClassName(param0: number, param1: com.carto.styles.TextStyleBuilder): string;
				public static TextStyleBuilder_setTextMargins(param0: number, param1: com.carto.styles.TextStyleBuilder, param2: number, param3: com.carto.styles.TextMargins): void;
				public constructor();
				public static TextStyleBuilder_swigGetDirectorObject(param0: number, param1: com.carto.styles.TextStyleBuilder): any;
				public static new_TextStyleBuilder(): number;
				public static TextStyleBuilder_SWIGSmartPtrUpcast(param0: number): number;
				public static TextStyleBuilder_getTextField(param0: number, param1: com.carto.styles.TextStyleBuilder): string;
				public static TextStyleBuilder_getBorderWidth(param0: number, param1: com.carto.styles.TextStyleBuilder): number;
				public static TextStyleBuilder_buildStyle(param0: number, param1: com.carto.styles.TextStyleBuilder): number;
				public static delete_TextStyleBuilder(param0: number): void;
				public static TextStyleBuilder_getFontSize(param0: number, param1: com.carto.styles.TextStyleBuilder): number;
				public static TextStyleBuilder_setBreakLines(param0: number, param1: com.carto.styles.TextStyleBuilder, param2: boolean): void;
				public static TextStyleBuilder_setBorderWidth(param0: number, param1: com.carto.styles.TextStyleBuilder, param2: number): void;
				public static TextStyleBuilder_setFontName(param0: number, param1: com.carto.styles.TextStyleBuilder, param2: string): void;
				public static TextStyleBuilder_getStrokeWidth(param0: number, param1: com.carto.styles.TextStyleBuilder): number;
				public static TextStyleBuilder_setTextField(param0: number, param1: com.carto.styles.TextStyleBuilder, param2: string): void;
				public static TextStyleBuilder_getTextMargins(param0: number, param1: com.carto.styles.TextStyleBuilder): number;
				public static TextStyleBuilder_isBreakLines(param0: number, param1: com.carto.styles.TextStyleBuilder): boolean;
				public static TextStyleBuilder_getBackgroundColor(param0: number, param1: com.carto.styles.TextStyleBuilder): number;
				public static TextStyleBuilder_swigGetRawPtr(param0: number, param1: com.carto.styles.TextStyleBuilder): number;
				public static TextStyleBuilder_getBorderColor(param0: number, param1: com.carto.styles.TextStyleBuilder): number;
				public static TextStyleBuilder_getStrokeColor(param0: number, param1: com.carto.styles.TextStyleBuilder): number;
				public static TextStyleBuilder_setStrokeColor(param0: number, param1: com.carto.styles.TextStyleBuilder, param2: number, param3: com.carto.graphics.Color): void;
				public static TextStyleBuilder_setBorderColor(param0: number, param1: com.carto.styles.TextStyleBuilder, param2: number, param3: com.carto.graphics.Color): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace styles {
			export class TextStyleModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.TextStyleModuleJNI>;
				public static TextStyle_getFontSize(param0: number, param1: com.carto.styles.TextStyle): number;
				public static TextStyle_getBorderWidth(param0: number, param1: com.carto.styles.TextStyle): number;
				public static delete_TextStyle(param0: number): void;
				public static TextStyle_getTextMargins(param0: number, param1: com.carto.styles.TextStyle): number;
				public static TextStyle_swigGetRawPtr(param0: number, param1: com.carto.styles.TextStyle): number;
				public static new_TextMargins(param0: number, param1: number, param2: number, param3: number): number;
				public static TextStyle_isBreakLines(param0: number, param1: com.carto.styles.TextStyle): boolean;
				public static TextMargins_getLeft(param0: number, param1: com.carto.styles.TextMargins): number;
				public static TextStyle_getStrokeWidth(param0: number, param1: com.carto.styles.TextStyle): number;
				public static TextMargins_getBottom(param0: number, param1: com.carto.styles.TextMargins): number;
				public constructor();
				public static TextStyle_getFontName(param0: number, param1: com.carto.styles.TextStyle): string;
				public static TextStyle_swigGetClassName(param0: number, param1: com.carto.styles.TextStyle): string;
				public static TextStyle_getBorderColor(param0: number, param1: com.carto.styles.TextStyle): number;
				public static TextMargins_getTop(param0: number, param1: com.carto.styles.TextMargins): number;
				public static TextStyle_getTextField(param0: number, param1: com.carto.styles.TextStyle): string;
				public static TextStyle_getBackgroundColor(param0: number, param1: com.carto.styles.TextStyle): number;
				public static TextStyle_swigGetDirectorObject(param0: number, param1: com.carto.styles.TextStyle): any;
				public static delete_TextMargins(param0: number): void;
				public static TextStyle_SWIGSmartPtrUpcast(param0: number): number;
				public static TextStyle_getFontColor(param0: number, param1: com.carto.styles.TextStyle): number;
				public static TextMargins_getRight(param0: number, param1: com.carto.styles.TextMargins): number;
				public static TextMargins_swigGetRawPtr(param0: number, param1: com.carto.styles.TextMargins): number;
				public static TextStyle_getStrokeColor(param0: number, param1: com.carto.styles.TextStyle): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class BalloonPopupButtonClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.BalloonPopupButtonClickInfo>;
				public swigCMemOwn: boolean;
				public getButton(): com.carto.vectorelements.BalloonPopupButton;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public static getCPtr(obj: com.carto.ui.BalloonPopupButtonClickInfo): number;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getClickInfo(): com.carto.ui.ClickInfo;
				public getVectorElement(): com.carto.vectorelements.VectorElement;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class BalloonPopupButtonClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.BalloonPopupButtonClickInfoModuleJNI>;
				public static BalloonPopupButtonClickInfo_getClickType(param0: number, param1: com.carto.ui.BalloonPopupButtonClickInfo): number;
				public static BalloonPopupButtonClickInfo_getClickInfo(param0: number, param1: com.carto.ui.BalloonPopupButtonClickInfo): number;
				public static BalloonPopupButtonClickInfo_getButton(param0: number, param1: com.carto.ui.BalloonPopupButtonClickInfo): number;
				public static BalloonPopupButtonClickInfo_getVectorElement(param0: number, param1: com.carto.ui.BalloonPopupButtonClickInfo): number;
				public static BalloonPopupButtonClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.BalloonPopupButtonClickInfo): number;
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
				public static class: java.lang.Class<com.carto.ui.BaseMapView>;
				public swigCMemOwn: boolean;
				public onSurfaceCreated(): void;
				public getZoom(): number;
				public onSurfaceDestroyed(): void;
				public finalize(): void;
				public finishRendering(): void;
				public screenToMap(screenPos: com.carto.core.ScreenPos): com.carto.core.MapPos;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public setFocusPos(pos: com.carto.core.MapPos, durationSeconds: number): void;
				public moveToFitBounds(mapBounds: com.carto.core.MapBounds, screenBounds: com.carto.core.ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number): void;
				public getRedrawRequestListener(): com.carto.renderers.RedrawRequestListener;
				public constructor();
				public rotate(deltaAngle: number, durationSeconds: number): void;
				public cancelAllTasks(): void;
				public tilt(deltaTilt: number, durationSeconds: number): void;
				public delete(): void;
				public setMapEventListener(mapEventListener: com.carto.ui.MapEventListener): void;
				public onSurfaceChanged(width: number, height: number): void;
				public clearPreloadingCaches(): void;
				public clearAllCaches(): void;
				public static getSDKVersion(): string;
				public pan(deltaPos: com.carto.core.MapVec, durationSeconds: number): void;
				public getLayers(): com.carto.components.Layers;
				public setRotation(angle: number, durationSeconds: number): void;
				public setTilt(tilt: number, durationSeconds: number): void;
				public static getCPtr(obj: com.carto.ui.BaseMapView): number;
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
			export class BaseMapViewModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.BaseMapViewModuleJNI>;
				public static BaseMapView_onSurfaceChanged(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number): void;
				public static BaseMapView_setFocusPos(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: com.carto.core.MapPos, param4: number): void;
				public static BaseMapView_tilt(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number): void;
				public static BaseMapView_getRotation(param0: number, param1: com.carto.ui.BaseMapView): number;
				public static BaseMapView_getMapRenderer(param0: number, param1: com.carto.ui.BaseMapView): number;
				public static BaseMapView_rotate__SWIG_1(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number, param4: com.carto.core.MapPos, param5: number): void;
				public static BaseMapView_getRedrawRequestListener(param0: number, param1: com.carto.ui.BaseMapView): number;
				public static BaseMapView_clearAllCaches(param0: number, param1: com.carto.ui.BaseMapView): void;
				public static BaseMapView_getZoom(param0: number, param1: com.carto.ui.BaseMapView): number;
				public static BaseMapView_setZoom__SWIG_0(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number): void;
				public constructor();
				public static BaseMapView_getTilt(param0: number, param1: com.carto.ui.BaseMapView): number;
				public static BaseMapView_onWheelEvent(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number, param4: number): void;
				public static BaseMapView_cancelAllTasks(param0: number, param1: com.carto.ui.BaseMapView): void;
				public static BaseMapView_setZoom__SWIG_1(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number, param4: com.carto.core.MapPos, param5: number): void;
				public static BaseMapView_onSurfaceCreated(param0: number, param1: com.carto.ui.BaseMapView): void;
				public static BaseMapView_finishRendering(param0: number, param1: com.carto.ui.BaseMapView): void;
				public static BaseMapView_pan(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: com.carto.core.MapVec, param4: number): void;
				public static BaseMapView_screenToMap(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: com.carto.core.ScreenPos): number;
				public static new_BaseMapView(): number;
				public static BaseMapView_onSurfaceDestroyed(param0: number, param1: com.carto.ui.BaseMapView): void;
				public static BaseMapView_setTilt(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number): void;
				public static BaseMapView_clearPreloadingCaches(param0: number, param1: com.carto.ui.BaseMapView): void;
				public static BaseMapView_moveToFitBounds__SWIG_0(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: com.carto.core.MapBounds, param4: number, param5: com.carto.core.ScreenBounds, param6: boolean, param7: number): void;
				public static BaseMapView_zoom__SWIG_0(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number): void;
				public static BaseMapView_zoom__SWIG_1(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number, param4: com.carto.core.MapPos, param5: number): void;
				public static BaseMapView_setMapEventListener(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: com.carto.ui.MapEventListener): void;
				public static BaseMapView_onInputEvent(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public static BaseMapView_moveToFitBounds__SWIG_1(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: com.carto.core.MapBounds, param4: number, param5: com.carto.core.ScreenBounds, param6: boolean, param7: boolean, param8: boolean, param9: number): void;
				public static BaseMapView_setRotation__SWIG_1(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number, param4: com.carto.core.MapPos, param5: number): void;
				public static BaseMapView_onDrawFrame(param0: number, param1: com.carto.ui.BaseMapView): void;
				public static BaseMapView_getSDKVersion(): string;
				public static BaseMapView_getOptions(param0: number, param1: com.carto.ui.BaseMapView): number;
				public static BaseMapView_getLayers(param0: number, param1: com.carto.ui.BaseMapView): number;
				public static delete_BaseMapView(param0: number): void;
				public static BaseMapView_getMapEventListener(param0: number, param1: com.carto.ui.BaseMapView): number;
				public static BaseMapView_rotate__SWIG_0(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number): void;
				public static BaseMapView_setRotation__SWIG_0(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number): void;
				public static BaseMapView_mapToScreen(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: com.carto.core.MapPos): number;
				public static BaseMapView_getFocusPos(param0: number, param1: com.carto.ui.BaseMapView): number;
				public static BaseMapView_setRedrawRequestListener(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: com.carto.renderers.RedrawRequestListener): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class ClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.ClickInfo>;
				public swigCMemOwn: boolean;
				public constructor(clickType: com.carto.ui.ClickType, duration: number);
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public getDuration(): number;
				public finalize(): void;
				public toString(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.ui.ClickInfo): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class ClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.ClickInfoModuleJNI>;
				public static ClickInfo_hashCodeInternal(param0: number, param1: com.carto.ui.ClickInfo): number;
				public static delete_ClickInfo(param0: number): void;
				public static ClickInfo_getClickType(param0: number, param1: com.carto.ui.ClickInfo): number;
				public static new_ClickInfo(param0: number, param1: number): number;
				public static ClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.ClickInfo): number;
				public static ClickInfo_toString(param0: number, param1: com.carto.ui.ClickInfo): string;
				public static ClickInfo_getDuration(param0: number, param1: com.carto.ui.ClickInfo): number;
				public static ClickInfo_equalsInternal(param0: number, param1: com.carto.ui.ClickInfo, param2: number, param3: com.carto.ui.ClickInfo): boolean;
				public constructor();
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
				public finalize(): void;
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
				public swigCMemOwn: boolean;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public getClickPos(): com.carto.core.MapPos;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public static getCPtr(obj: com.carto.ui.MapClickInfo): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getClickInfo(): com.carto.ui.ClickInfo;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class MapClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapClickInfoModuleJNI>;
				public static delete_MapClickInfo(param0: number): void;
				public static MapClickInfo_getClickInfo(param0: number, param1: com.carto.ui.MapClickInfo): number;
				public static MapClickInfo_getClickPos(param0: number, param1: com.carto.ui.MapClickInfo): number;
				public static MapClickInfo_getClickType(param0: number, param1: com.carto.ui.MapClickInfo): number;
				public static MapClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.MapClickInfo): number;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class MapEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapEventListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public onMapMoved(): void;
				public swigDirectorDisconnect(): void;
				public onMapClicked(mapClickInfo: com.carto.ui.MapClickInfo): void;
				public finalize(): void;
				public swigGetClassName(): string;
				public onMapInteraction(mapInteractionInfo: com.carto.ui.MapInteractionInfo): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.ui.MapEventListener): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public onMapStable(): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.ui.MapEventListener;
				public onMapIdle(): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class MapEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapEventListenerModuleJNI>;
				public static MapEventListener_onMapIdle(param0: number, param1: com.carto.ui.MapEventListener): void;
				public static MapEventListener_onMapInteractionSwigExplicitMapEventListener(param0: number, param1: com.carto.ui.MapEventListener, param2: number, param3: com.carto.ui.MapInteractionInfo): void;
				public static SwigDirector_MapEventListener_onMapStable(self: com.carto.ui.MapEventListener): void;
				public static MapEventListener_swigGetDirectorObject(param0: number, param1: com.carto.ui.MapEventListener): any;
				public static MapEventListener_onMapIdleSwigExplicitMapEventListener(param0: number, param1: com.carto.ui.MapEventListener): void;
				public static SwigDirector_MapEventListener_onMapClicked(self: com.carto.ui.MapEventListener, mapClickInfo: number): void;
				public static MapEventListener_onMapInteraction(param0: number, param1: com.carto.ui.MapEventListener, param2: number, param3: com.carto.ui.MapInteractionInfo): void;
				public static SwigDirector_MapEventListener_onMapInteraction(self: com.carto.ui.MapEventListener, mapInteractionInfo: number): void;
				public static delete_MapEventListener(param0: number): void;
				public static MapEventListener_swigGetClassName(param0: number, param1: com.carto.ui.MapEventListener): string;
				public static SwigDirector_MapEventListener_onMapMoved(self: com.carto.ui.MapEventListener): void;
				public static SwigDirector_MapEventListener_onMapIdle(self: com.carto.ui.MapEventListener): void;
				public constructor();
				public static MapEventListener_onMapClickedSwigExplicitMapEventListener(param0: number, param1: com.carto.ui.MapEventListener, param2: number, param3: com.carto.ui.MapClickInfo): void;
				public static MapEventListener_swigGetRawPtr(param0: number, param1: com.carto.ui.MapEventListener): number;
				public static MapEventListener_onMapMoved(param0: number, param1: com.carto.ui.MapEventListener): void;
				public static MapEventListener_change_ownership(param0: com.carto.ui.MapEventListener, param1: number, param2: boolean): void;
				public static MapEventListener_onMapStable(param0: number, param1: com.carto.ui.MapEventListener): void;
				public static MapEventListener_onMapMovedSwigExplicitMapEventListener(param0: number, param1: com.carto.ui.MapEventListener): void;
				public static MapEventListener_onMapStableSwigExplicitMapEventListener(param0: number, param1: com.carto.ui.MapEventListener): void;
				public static MapEventListener_director_connect(param0: com.carto.ui.MapEventListener, param1: number, param2: boolean, param3: boolean): void;
				public static MapEventListener_onMapClicked(param0: number, param1: com.carto.ui.MapEventListener, param2: number, param3: com.carto.ui.MapClickInfo): void;
				public static new_MapEventListener(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class MapInteractionInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapInteractionInfo>;
				public swigCMemOwn: boolean;
				public isPanAction(): boolean;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public isRotateAction(): boolean;
				public delete(): void;
				public hashCode(): number;
				public static getCPtr(obj: com.carto.ui.MapInteractionInfo): number;
				public finalize(): void;
				public isAnimationStarted(): boolean;
				public isZoomAction(): boolean;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public isTiltAction(): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class MapInteractionInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapInteractionInfoModuleJNI>;
				public static MapInteractionInfo_isTiltAction(param0: number, param1: com.carto.ui.MapInteractionInfo): boolean;
				public static MapInteractionInfo_isZoomAction(param0: number, param1: com.carto.ui.MapInteractionInfo): boolean;
				public static MapInteractionInfo_isAnimationStarted(param0: number, param1: com.carto.ui.MapInteractionInfo): boolean;
				public static MapInteractionInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.MapInteractionInfo): number;
				public static MapInteractionInfo_isRotateAction(param0: number, param1: com.carto.ui.MapInteractionInfo): boolean;
				public static MapInteractionInfo_isPanAction(param0: number, param1: com.carto.ui.MapInteractionInfo): boolean;
				public constructor();
				public static delete_MapInteractionInfo(param0: number): void;
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
				public constructor(cPtr: number, cMemoryOwn: boolean);
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
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public getElementClickPos(): com.carto.core.ScreenPos;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public getClickPos(): com.carto.core.MapPos;
				public delete(): void;
				public hashCode(): number;
				public getPopup(): com.carto.vectorelements.Popup;
				public finalize(): void;
				public static getCPtr(obj: com.carto.ui.PopupClickInfo): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getClickInfo(): com.carto.ui.ClickInfo;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class PopupClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.PopupClickInfoModuleJNI>;
				public static PopupClickInfo_getClickPos(param0: number, param1: com.carto.ui.PopupClickInfo): number;
				public static delete_PopupClickInfo(param0: number): void;
				public static PopupClickInfo_getClickInfo(param0: number, param1: com.carto.ui.PopupClickInfo): number;
				public static PopupClickInfo_getPopup(param0: number, param1: com.carto.ui.PopupClickInfo): number;
				public static PopupClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.PopupClickInfo): number;
				public static PopupClickInfo_getClickType(param0: number, param1: com.carto.ui.PopupClickInfo): number;
				public static PopupClickInfo_getElementClickPos(param0: number, param1: com.carto.ui.PopupClickInfo): number;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class PopupDrawInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.PopupDrawInfo>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public getAnchorScreenPos(): com.carto.core.ScreenPos;
				public getScreenBounds(): com.carto.core.ScreenBounds;
				public delete(): void;
				public hashCode(): number;
				public getPopup(): com.carto.vectorelements.Popup;
				public finalize(): void;
				public static getCPtr(obj: com.carto.ui.PopupDrawInfo): number;
				public constructor(anchorScreenPos: com.carto.core.ScreenPos, screenBounds: com.carto.core.ScreenBounds, popup: com.carto.vectorelements.Popup, dpToPX: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getDPToPX(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class PopupDrawInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.PopupDrawInfoModuleJNI>;
				public static delete_PopupDrawInfo(param0: number): void;
				public static PopupDrawInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.PopupDrawInfo): number;
				public static PopupDrawInfo_getDPToPX(param0: number, param1: com.carto.ui.PopupDrawInfo): number;
				public static PopupDrawInfo_getPopup(param0: number, param1: com.carto.ui.PopupDrawInfo): number;
				public static new_PopupDrawInfo(param0: number, param1: com.carto.core.ScreenPos, param2: number, param3: com.carto.core.ScreenBounds, param4: number, param5: com.carto.vectorelements.Popup, param6: number): number;
				public constructor();
				public static PopupDrawInfo_getAnchorScreenPos(param0: number, param1: com.carto.ui.PopupDrawInfo): number;
				public static PopupDrawInfo_getScreenBounds(param0: number, param1: com.carto.ui.PopupDrawInfo): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class RasterTileClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.RasterTileClickInfo>;
				public swigCMemOwn: boolean;
				public getClickType(): com.carto.ui.ClickType;
				public getNearestColor(): com.carto.graphics.Color;
				public getClickPos(): com.carto.core.MapPos;
				public finalize(): void;
				public getInterpolatedColor(): com.carto.graphics.Color;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getClickInfo(): com.carto.ui.ClickInfo;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public getMapTile(): com.carto.core.MapTile;
				public getLayer(): com.carto.layers.Layer;
				public static getCPtr(obj: com.carto.ui.RasterTileClickInfo): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class RasterTileClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.RasterTileClickInfoModuleJNI>;
				public static RasterTileClickInfo_getMapTile(param0: number, param1: com.carto.ui.RasterTileClickInfo): number;
				public static RasterTileClickInfo_getClickInfo(param0: number, param1: com.carto.ui.RasterTileClickInfo): number;
				public static RasterTileClickInfo_getInterpolatedColor(param0: number, param1: com.carto.ui.RasterTileClickInfo): number;
				public static RasterTileClickInfo_getLayer(param0: number, param1: com.carto.ui.RasterTileClickInfo): number;
				public static RasterTileClickInfo_getClickPos(param0: number, param1: com.carto.ui.RasterTileClickInfo): number;
				public static RasterTileClickInfo_getClickType(param0: number, param1: com.carto.ui.RasterTileClickInfo): number;
				public static delete_RasterTileClickInfo(param0: number): void;
				public constructor();
				public static RasterTileClickInfo_getNearestColor(param0: number, param1: com.carto.ui.RasterTileClickInfo): number;
				public static RasterTileClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.RasterTileClickInfo): number;
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
				public constructor(cPtr: number, cMemoryOwn: boolean);
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
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public getClickPos(): com.carto.core.MapPos;
				public delete(): void;
				public hashCode(): number;
				public getLayer(): com.carto.layers.Layer;
				public finalize(): void;
				public static getCPtr(obj: com.carto.ui.UTFGridClickInfo): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getElementInfo(): com.carto.core.Variant;
				public getClickInfo(): com.carto.ui.ClickInfo;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class UTFGridClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.UTFGridClickInfoModuleJNI>;
				public static UTFGridClickInfo_getClickPos(param0: number, param1: com.carto.ui.UTFGridClickInfo): number;
				public static delete_UTFGridClickInfo(param0: number): void;
				public static UTFGridClickInfo_getClickType(param0: number, param1: com.carto.ui.UTFGridClickInfo): number;
				public static UTFGridClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.UTFGridClickInfo): number;
				public static UTFGridClickInfo_getClickInfo(param0: number, param1: com.carto.ui.UTFGridClickInfo): number;
				public static UTFGridClickInfo_getElementInfo(param0: number, param1: com.carto.ui.UTFGridClickInfo): number;
				public static UTFGridClickInfo_getLayer(param0: number, param1: com.carto.ui.UTFGridClickInfo): number;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class VectorElementClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorElementClickInfo>;
				public swigCMemOwn: boolean;
				public getClickType(): com.carto.ui.ClickType;
				public static getCPtr(obj: com.carto.ui.VectorElementClickInfo): number;
				public getClickPos(): com.carto.core.MapPos;
				public getElementClickPos(): com.carto.core.MapPos;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getClickInfo(): com.carto.ui.ClickInfo;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
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
			export class VectorElementClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorElementClickInfoModuleJNI>;
				public static delete_VectorElementClickInfo(param0: number): void;
				public static VectorElementClickInfo_getVectorElement(param0: number, param1: com.carto.ui.VectorElementClickInfo): number;
				public static VectorElementClickInfo_getClickInfo(param0: number, param1: com.carto.ui.VectorElementClickInfo): number;
				public static VectorElementClickInfo_getElementClickPos(param0: number, param1: com.carto.ui.VectorElementClickInfo): number;
				public static VectorElementClickInfo_getClickPos(param0: number, param1: com.carto.ui.VectorElementClickInfo): number;
				public static VectorElementClickInfo_getLayer(param0: number, param1: com.carto.ui.VectorElementClickInfo): number;
				public static VectorElementClickInfo_getClickType(param0: number, param1: com.carto.ui.VectorElementClickInfo): number;
				public constructor();
				public static VectorElementClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.VectorElementClickInfo): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class VectorElementDragInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorElementDragInfo>;
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.ui.VectorElementDragInfo): number;
				public getMapPos(): com.carto.core.MapPos;
				public swigGetRawPtr(): number;
				public getDragMode(): com.carto.ui.VectorElementDragMode;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public getScreenPos(): com.carto.core.ScreenPos;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getVectorElement(): com.carto.vectorelements.VectorElement;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace ui {
			export class VectorElementDragInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorElementDragInfoModuleJNI>;
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
				public swigCMemOwn: boolean;
				public getClickType(): com.carto.ui.ClickType;
				public getFeaturePosIndex(): number;
				public getClickPos(): com.carto.core.MapPos;
				public finalize(): void;
				public static getCPtr(obj: com.carto.ui.VectorTileClickInfo): number;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getFeatureClickPos(): com.carto.core.MapPos;
				public getClickInfo(): com.carto.ui.ClickInfo;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
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
		export namespace ui {
			export class VectorTileClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorTileClickInfoModuleJNI>;
				public static VectorTileClickInfo_getFeature(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_getFeatureId(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_getClickType(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_getClickInfo(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public constructor();
				public static VectorTileClickInfo_getFeaturePosIndex(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_getClickPos(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_getFeatureClickPos(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_getMapTile(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_getFeatureLayerName(param0: number, param1: com.carto.ui.VectorTileClickInfo): string;
				public static VectorTileClickInfo_getLayer(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static delete_VectorTileClickInfo(param0: number): void;
				public static VectorTileClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace utils {
			export class AndroidUtils extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.AndroidUtils>;
				public swigCMemOwn: boolean;
				public static setContext(context: globalAndroid.content.Context): void;
				public static getDeviceType(): string;
				public delete(): void;
				public finalize(): void;
				public static getCPtr(obj: com.carto.utils.AndroidUtils): number;
				public static getDeviceOS(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static attachJVM(jenv: any): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace utils {
			export class AndroidUtilsModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.AndroidUtilsModuleJNI>;
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
				public static class: java.lang.Class<com.carto.utils.AssetPackage>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public getAssetNames(): com.carto.core.StringVector;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public loadAsset(name: string): com.carto.core.BinaryData;
				public delete(): void;
				public hashCode(): number;
				public static getCPtr(obj: com.carto.utils.AssetPackage): number;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.utils.AssetPackage;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace utils {
			export class AssetPackageModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.AssetPackageModuleJNI>;
				public static new_AssetPackage(): number;
				public static AssetPackage_swigGetDirectorObject(param0: number, param1: com.carto.utils.AssetPackage): any;
				public static AssetPackage_change_ownership(param0: com.carto.utils.AssetPackage, param1: number, param2: boolean): void;
				public static AssetPackage_loadAsset(param0: number, param1: com.carto.utils.AssetPackage, param2: string): number;
				public static AssetPackage_getAssetNames(param0: number, param1: com.carto.utils.AssetPackage): number;
				public static AssetPackage_director_connect(param0: com.carto.utils.AssetPackage, param1: number, param2: boolean, param3: boolean): void;
				public static delete_AssetPackage(param0: number): void;
				public static AssetPackage_swigGetRawPtr(param0: number, param1: com.carto.utils.AssetPackage): number;
				public static AssetPackage_swigGetClassName(param0: number, param1: com.carto.utils.AssetPackage): string;
				public static SwigDirector_AssetPackage_loadAsset(self: com.carto.utils.AssetPackage, name: string): number;
				public constructor();
				public static SwigDirector_AssetPackage_getAssetNames(self: com.carto.utils.AssetPackage): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace utils {
			export class AssetUtils extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.AssetUtils>;
				public swigCMemOwn: boolean;
				public delete(): void;
				public static getCPtr(obj: com.carto.utils.AssetUtils): number;
				public static setAssetManagerPointer(androidAssetManager: globalAndroid.content.res.AssetManager): void;
				public finalize(): void;
				public static loadAsset(path: string): com.carto.core.BinaryData;
				public constructor(cPtr: number, cMemoryOwn: boolean);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace utils {
			export class AssetUtilsModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.AssetUtilsModuleJNI>;
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
				public static class: java.lang.Class<com.carto.utils.BitmapUtils>;
				public swigCMemOwn: boolean;
				public static loadBitmapFromFile(filePath: string): com.carto.graphics.Bitmap;
				public static createBitmapFromAndroidBitmap(androidBitmap: globalAndroid.graphics.Bitmap): com.carto.graphics.Bitmap;
				public static createAndroidBitmapFromBitmap(bitmap: com.carto.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public delete(): void;
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static loadBitmapFromAssets(assetPath: string): com.carto.graphics.Bitmap;
				public static getCPtr(obj: com.carto.utils.BitmapUtils): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace utils {
			export class BitmapUtilsModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.BitmapUtilsModuleJNI>;
				public static BitmapUtils_loadBitmapFromFile(param0: string): number;
				public static BitmapUtils_createAndroidBitmapFromBitmap(param0: number, param1: com.carto.graphics.Bitmap): globalAndroid.graphics.Bitmap;
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
				public swigCMemOwn: boolean;
				public static setShowInfo(showInfo: boolean): void;
				public static fatal(message: string): void;
				public static setTag(tag: string): void;
				public static setLogEventListener(listener: com.carto.utils.LogEventListener): void;
				public finalize(): void;
				public static isShowInfo(): boolean;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static getCPtr(obj: com.carto.utils.Log): number;
				public static setShowError(showError: boolean): void;
				public static setShowWarn(showWarn: boolean): void;
				public static error(message: string): void;
				public static info(message: string): void;
				public static isShowError(): boolean;
				public static getLogEventListener(): com.carto.utils.LogEventListener;
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public onInfoEvent(message: string): boolean;
				public static getCPtr(obj: com.carto.utils.LogEventListener): number;
				public swigGetClassName(): string;
				public onFatalEvent(message: string): boolean;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public onDebugEvent(message: string): boolean;
				public constructor();
				public swigGetRawPtr(): number;
				public onErrorEvent(message: string): boolean;
				public delete(): void;
				public onWarnEvent(message: string): boolean;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.utils.LogEventListener;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace utils {
			export class LogEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.LogEventListenerModuleJNI>;
				public static LogEventListener_onErrorEvent(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static LogEventListener_swigGetClassName(param0: number, param1: com.carto.utils.LogEventListener): string;
				public static SwigDirector_LogEventListener_onFatalEvent(self: com.carto.utils.LogEventListener, message: string): boolean;
				public static LogEventListener_onWarnEventSwigExplicitLogEventListener(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static LogEventListener_onErrorEventSwigExplicitLogEventListener(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static SwigDirector_LogEventListener_onInfoEvent(self: com.carto.utils.LogEventListener, message: string): boolean;
				public static delete_LogEventListener(param0: number): void;
				public static LogEventListener_onFatalEventSwigExplicitLogEventListener(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static SwigDirector_LogEventListener_onDebugEvent(self: com.carto.utils.LogEventListener, message: string): boolean;
				public constructor();
				public static SwigDirector_LogEventListener_onWarnEvent(self: com.carto.utils.LogEventListener, message: string): boolean;
				public static LogEventListener_onDebugEventSwigExplicitLogEventListener(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static LogEventListener_onFatalEvent(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static SwigDirector_LogEventListener_onErrorEvent(self: com.carto.utils.LogEventListener, message: string): boolean;
				public static LogEventListener_onInfoEventSwigExplicitLogEventListener(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static LogEventListener_director_connect(param0: com.carto.utils.LogEventListener, param1: number, param2: boolean, param3: boolean): void;
				public static LogEventListener_change_ownership(param0: com.carto.utils.LogEventListener, param1: number, param2: boolean): void;
				public static LogEventListener_onWarnEvent(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static LogEventListener_swigGetDirectorObject(param0: number, param1: com.carto.utils.LogEventListener): any;
				public static new_LogEventListener(): number;
				public static LogEventListener_onInfoEvent(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static LogEventListener_swigGetRawPtr(param0: number, param1: com.carto.utils.LogEventListener): number;
				public static LogEventListener_onDebugEvent(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace utils {
			export class LogModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.LogModuleJNI>;
				public static Log_fatal(param0: string): void;
				public static Log_isShowDebug(): boolean;
				public static Log_isShowError(): boolean;
				public static Log_isShowWarn(): boolean;
				public static Log_info(param0: string): void;
				public constructor();
				public static Log_setLogEventListener(param0: number, param1: com.carto.utils.LogEventListener): void;
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
				public static class: java.lang.Class<com.carto.utils.TileUtils>;
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.utils.TileUtils): number;
				public static calculateClippedMapTile(mapPos: com.carto.core.MapPos, zoom: number, proj: com.carto.projections.Projection): com.carto.core.MapTile;
				public static calculateMapTileOrigin(mapTile: com.carto.core.MapTile, proj: com.carto.projections.Projection): com.carto.core.MapPos;
				public delete(): void;
				public finalize(): void;
				public static calculateMapTile(mapPos: com.carto.core.MapPos, zoom: number, proj: com.carto.projections.Projection): com.carto.core.MapTile;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public static calculateMapTileBounds(mapTile: com.carto.core.MapTile, proj: com.carto.projections.Projection): com.carto.core.MapBounds;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace utils {
			export class TileUtilsModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.TileUtilsModuleJNI>;
				public static TileUtils_calculateMapTile(param0: number, param1: com.carto.core.MapPos, param2: number, param3: number, param4: com.carto.projections.Projection): number;
				public static TileUtils_calculateMapTileOrigin(param0: number, param1: com.carto.core.MapTile, param2: number, param3: com.carto.projections.Projection): number;
				public static TileUtils_calculateClippedMapTile(param0: number, param1: com.carto.core.MapPos, param2: number, param3: number, param4: com.carto.projections.Projection): number;
				public static delete_TileUtils(param0: number): void;
				public static TileUtils_calculateMapTileBounds(param0: number, param1: com.carto.core.MapTile, param2: number, param3: com.carto.projections.Projection): number;
				public constructor();
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
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.utils.ZippedAssetPackage;
				public getAssetNames(): com.carto.core.StringVector;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public loadAsset(name: string): com.carto.core.BinaryData;
				public delete(): void;
				public static getCPtr(obj: com.carto.utils.AssetPackage): number;
				public constructor(zipData: com.carto.core.BinaryData);
				public static getCPtr(obj: com.carto.utils.ZippedAssetPackage): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.utils.AssetPackage;
				public constructor(zipData: com.carto.core.BinaryData, baseAssetPackage: com.carto.utils.AssetPackage);
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace utils {
			export class ZippedAssetPackageModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.ZippedAssetPackageModuleJNI>;
				public static new_ZippedAssetPackage__SWIG_0(param0: number, param1: com.carto.core.BinaryData): number;
				public static ZippedAssetPackage_getAssetNames(param0: number, param1: com.carto.utils.ZippedAssetPackage): number;
				public static ZippedAssetPackage_loadAsset(param0: number, param1: com.carto.utils.ZippedAssetPackage, param2: string): number;
				public static ZippedAssetPackage_getLocalAssetNames(param0: number, param1: com.carto.utils.ZippedAssetPackage): number;
				public static ZippedAssetPackage_SWIGSmartPtrUpcast(param0: number): number;
				public static delete_ZippedAssetPackage(param0: number): void;
				public static ZippedAssetPackage_swigGetRawPtr(param0: number, param1: com.carto.utils.ZippedAssetPackage): number;
				public static ZippedAssetPackage_swigGetDirectorObject(param0: number, param1: com.carto.utils.ZippedAssetPackage): any;
				public constructor();
				public static new_ZippedAssetPackage__SWIG_1(param0: number, param1: com.carto.core.BinaryData, param2: number, param3: com.carto.utils.AssetPackage): number;
				public static ZippedAssetPackage_swigGetClassName(param0: number, param1: com.carto.utils.ZippedAssetPackage): string;
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
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Billboard;
				public static getCPtr(obj: com.carto.vectorelements.BalloonPopup): number;
				public clearButtons(): void;
				public finalize(): void;
				public constructor(geometry: com.carto.geometry.Geometry, style: com.carto.styles.BalloonPopupStyle, title: string, desc: string);
				public getDescription(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getBalloonPopupEventListener(): com.carto.vectorelements.BalloonPopupEventListener;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
				public removeButton(button: com.carto.vectorelements.BalloonPopupButton): void;
				public setTitle(title: string): void;
				public static getCPtr(obj: com.carto.vectorelements.Billboard): number;
				public static getCPtr(obj: com.carto.vectorelements.Popup): number;
				public drawBitmap(anchorScreenPos: com.carto.core.ScreenPos, screenWidth: number, screenHeight: number, dpToPX: number): com.carto.graphics.Bitmap;
				public constructor(baseBillboard: com.carto.vectorelements.Billboard, style: com.carto.styles.BalloonPopupStyle, title: string, desc: string);
				public getStyle(): com.carto.styles.PopupStyle;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.BalloonPopup;
				public swigGetClassName(): string;
				public getTitle(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public getStyle(): com.carto.styles.BalloonPopupStyle;
				public replaceButton(oldButton: com.carto.vectorelements.BalloonPopupButton, newButton: com.carto.vectorelements.BalloonPopupButton): void;
				public setStyle(style: com.carto.styles.PopupStyle): void;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public setDescription(desc: string): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Popup;
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
				public swigCMemOwn: boolean;
				public constructor(style: com.carto.styles.BalloonPopupButtonStyle, text: string);
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public getText(): string;
				public swigGetRawPtr(): number;
				public getTag(): com.carto.core.Variant;
				public delete(): void;
				public getStyle(): com.carto.styles.BalloonPopupButtonStyle;
				public static getCPtr(obj: com.carto.vectorelements.BalloonPopupButton): number;
				public setTag(tag: com.carto.core.Variant): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.BalloonPopupButton;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class BalloonPopupButtonModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopupButtonModuleJNI>;
				public static new_BalloonPopupButton(param0: number, param1: com.carto.styles.BalloonPopupButtonStyle, param2: string): number;
				public static BalloonPopupButton_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.BalloonPopupButton): any;
				public static BalloonPopupButton_getTag(param0: number, param1: com.carto.vectorelements.BalloonPopupButton): number;
				public static BalloonPopupButton_getText(param0: number, param1: com.carto.vectorelements.BalloonPopupButton): string;
				public static BalloonPopupButton_getStyle(param0: number, param1: com.carto.vectorelements.BalloonPopupButton): number;
				public static BalloonPopupButton_swigGetClassName(param0: number, param1: com.carto.vectorelements.BalloonPopupButton): string;
				public static BalloonPopupButton_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.BalloonPopupButton): number;
				public static BalloonPopupButton_setTag(param0: number, param1: com.carto.vectorelements.BalloonPopupButton, param2: number, param3: com.carto.core.Variant): void;
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
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopupEventListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.BalloonPopupEventListener;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
				public onButtonClicked(clickInfo: com.carto.ui.BalloonPopupButtonClickInfo): boolean;
				public static getCPtr(obj: com.carto.vectorelements.BalloonPopupEventListener): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class BalloonPopupEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopupEventListenerModuleJNI>;
				public static BalloonPopupEventListener_director_connect(param0: com.carto.vectorelements.BalloonPopupEventListener, param1: number, param2: boolean, param3: boolean): void;
				public static BalloonPopupEventListener_swigGetClassName(param0: number, param1: com.carto.vectorelements.BalloonPopupEventListener): string;
				public static SwigDirector_BalloonPopupEventListener_onButtonClicked(self: com.carto.vectorelements.BalloonPopupEventListener, clickInfo: number): boolean;
				public static delete_BalloonPopupEventListener(param0: number): void;
				public static BalloonPopupEventListener_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.BalloonPopupEventListener): number;
				public static BalloonPopupEventListener_change_ownership(param0: com.carto.vectorelements.BalloonPopupEventListener, param1: number, param2: boolean): void;
				public static BalloonPopupEventListener_onButtonClickedSwigExplicitBalloonPopupEventListener(param0: number, param1: com.carto.vectorelements.BalloonPopupEventListener, param2: number, param3: com.carto.ui.BalloonPopupButtonClickInfo): boolean;
				public static BalloonPopupEventListener_onButtonClicked(param0: number, param1: com.carto.vectorelements.BalloonPopupEventListener, param2: number, param3: com.carto.ui.BalloonPopupButtonClickInfo): boolean;
				public static BalloonPopupEventListener_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.BalloonPopupEventListener): any;
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
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopupModuleJNI>;
				public static BalloonPopup_removeButton(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: number, param3: com.carto.vectorelements.BalloonPopupButton): void;
				public static BalloonPopup_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.BalloonPopup): any;
				public static BalloonPopup_getTitle(param0: number, param1: com.carto.vectorelements.BalloonPopup): string;
				public static BalloonPopup_clearButtons(param0: number, param1: com.carto.vectorelements.BalloonPopup): void;
				public static BalloonPopup_replaceButton(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: number, param3: com.carto.vectorelements.BalloonPopupButton, param4: number, param5: com.carto.vectorelements.BalloonPopupButton): void;
				public static new_BalloonPopup__SWIG_1(param0: number, param1: com.carto.geometry.Geometry, param2: number, param3: com.carto.styles.BalloonPopupStyle, param4: string, param5: string): number;
				public static delete_BalloonPopup(param0: number): void;
				public static new_BalloonPopup__SWIG_0(param0: number, param1: com.carto.vectorelements.Billboard, param2: number, param3: com.carto.styles.BalloonPopupStyle, param4: string, param5: string): number;
				public static BalloonPopup_getStyle(param0: number, param1: com.carto.vectorelements.BalloonPopup): number;
				public static BalloonPopup_SWIGSmartPtrUpcast(param0: number): number;
				public static BalloonPopup_getBalloonPopupEventListener(param0: number, param1: com.carto.vectorelements.BalloonPopup): number;
				public static BalloonPopup_processClick(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: number, param3: com.carto.ui.ClickInfo, param4: number, param5: com.carto.core.MapPos, param6: number, param7: com.carto.core.ScreenPos): boolean;
				public static BalloonPopup_addButton(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: number, param3: com.carto.vectorelements.BalloonPopupButton): void;
				public constructor();
				public static new_BalloonPopup__SWIG_2(param0: number, param1: com.carto.core.MapPos, param2: number, param3: com.carto.styles.BalloonPopupStyle, param4: string, param5: string): number;
				public static BalloonPopup_getDescription(param0: number, param1: com.carto.vectorelements.BalloonPopup): string;
				public static BalloonPopup_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.BalloonPopup): number;
				public static BalloonPopup_setTitle(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: string): void;
				public static BalloonPopup_setDescription(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: string): void;
				public static BalloonPopup_setStyle(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: number, param3: com.carto.styles.BalloonPopupStyle): void;
				public static BalloonPopup_setBalloonPopupEventListener(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: number, param3: com.carto.vectorelements.BalloonPopupEventListener): void;
				public static BalloonPopup_swigGetClassName(param0: number, param1: com.carto.vectorelements.BalloonPopup): string;
				public static BalloonPopup_drawBitmap(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: number, param3: com.carto.core.ScreenPos, param4: number, param5: number, param6: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class Billboard extends com.carto.vectorelements.VectorElement {
				public static class: java.lang.Class<com.carto.vectorelements.Billboard>;
				public static getCPtr(obj: com.carto.vectorelements.Billboard): number;
				public setRotation(rotation: number): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Billboard;
				public getRootGeometry(): com.carto.geometry.Geometry;
				public setGeometry(geometry: com.carto.geometry.Geometry): void;
				public finalize(): void;
				public getBounds(): com.carto.core.MapBounds;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getRotation(): number;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
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
			export class BillboardModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.BillboardModuleJNI>;
				public static Billboard_setGeometry(param0: number, param1: com.carto.vectorelements.Billboard, param2: number, param3: com.carto.geometry.Geometry): void;
				public static Billboard_getRootGeometry(param0: number, param1: com.carto.vectorelements.Billboard): number;
				public static Billboard_setRotation(param0: number, param1: com.carto.vectorelements.Billboard, param2: number): void;
				public static Billboard_getBounds(param0: number, param1: com.carto.vectorelements.Billboard): number;
				public static Billboard_getBaseBillboard(param0: number, param1: com.carto.vectorelements.Billboard): number;
				public constructor();
				public static Billboard_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.Billboard): number;
				public static Billboard_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.Billboard): any;
				public static Billboard_getRotation(param0: number, param1: com.carto.vectorelements.Billboard): number;
				public static Billboard_swigGetClassName(param0: number, param1: com.carto.vectorelements.Billboard): string;
				public static Billboard_SWIGSmartPtrUpcast(param0: number): number;
				public static Billboard_getGeometry(param0: number, param1: com.carto.vectorelements.Billboard): number;
				public static Billboard_setBaseBillboard(param0: number, param1: com.carto.vectorelements.Billboard, param2: number, param3: com.carto.vectorelements.Billboard): void;
				public static Billboard_setPos(param0: number, param1: com.carto.vectorelements.Billboard, param2: number, param3: com.carto.core.MapPos): void;
				public static delete_Billboard(param0: number): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class CustomPopup extends com.carto.vectorelements.Popup {
				public static class: java.lang.Class<com.carto.vectorelements.CustomPopup>;
				public static getCPtr(obj: com.carto.vectorelements.Billboard): number;
				public static getCPtr(obj: com.carto.vectorelements.Popup): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Billboard;
				public drawBitmap(anchorScreenPos: com.carto.core.ScreenPos, screenWidth: number, screenHeight: number, dpToPX: number): com.carto.graphics.Bitmap;
				public getPopupHandler(): com.carto.vectorelements.CustomPopupHandler;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(pos: com.carto.core.MapPos, style: com.carto.styles.PopupStyle, popupHandler: com.carto.vectorelements.CustomPopupHandler);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public static getCPtr(obj: com.carto.vectorelements.CustomPopup): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.CustomPopup;
				public constructor(geometry: com.carto.geometry.Geometry, style: com.carto.styles.PopupStyle, popupHandler: com.carto.vectorelements.CustomPopupHandler);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Popup;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
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
				public swigCMemOwn: boolean;
				public static getCPtr(obj: com.carto.vectorelements.CustomPopupHandler): number;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public onPopupClicked(popupClickInfo: com.carto.ui.PopupClickInfo): boolean;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.CustomPopupHandler;
				public swigTakeOwnership(): void;
				public onDrawPopup(popupDrawInfo: com.carto.ui.PopupDrawInfo): com.carto.graphics.Bitmap;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class CustomPopupHandlerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.CustomPopupHandlerModuleJNI>;
				public static CustomPopupHandler_onDrawPopup(param0: number, param1: com.carto.vectorelements.CustomPopupHandler, param2: number, param3: com.carto.ui.PopupDrawInfo): number;
				public static CustomPopupHandler_onPopupClicked(param0: number, param1: com.carto.vectorelements.CustomPopupHandler, param2: number, param3: com.carto.ui.PopupClickInfo): boolean;
				public static CustomPopupHandler_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.CustomPopupHandler): any;
				public static SwigDirector_CustomPopupHandler_onPopupClicked(self: com.carto.vectorelements.CustomPopupHandler, popupClickInfo: number): boolean;
				public constructor();
				public static new_CustomPopupHandler(): number;
				public static SwigDirector_CustomPopupHandler_onDrawPopup(self: com.carto.vectorelements.CustomPopupHandler, popupDrawInfo: number): number;
				public static CustomPopupHandler_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.CustomPopupHandler): number;
				public static CustomPopupHandler_change_ownership(param0: com.carto.vectorelements.CustomPopupHandler, param1: number, param2: boolean): void;
				public static CustomPopupHandler_swigGetClassName(param0: number, param1: com.carto.vectorelements.CustomPopupHandler): string;
				public static delete_CustomPopupHandler(param0: number): void;
				public static CustomPopupHandler_onDrawPopupSwigExplicitCustomPopupHandler(param0: number, param1: com.carto.vectorelements.CustomPopupHandler, param2: number, param3: com.carto.ui.PopupDrawInfo): number;
				public static CustomPopupHandler_onPopupClickedSwigExplicitCustomPopupHandler(param0: number, param1: com.carto.vectorelements.CustomPopupHandler, param2: number, param3: com.carto.ui.PopupClickInfo): boolean;
				public static CustomPopupHandler_director_connect(param0: com.carto.vectorelements.CustomPopupHandler, param1: number, param2: boolean, param3: boolean): void;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class CustomPopupModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.CustomPopupModuleJNI>;
				public static CustomPopup_swigGetClassName(param0: number, param1: com.carto.vectorelements.CustomPopup): string;
				public static new_CustomPopup__SWIG_0(param0: number, param1: com.carto.vectorelements.Billboard, param2: number, param3: com.carto.styles.PopupStyle, param4: number, param5: com.carto.vectorelements.CustomPopupHandler): number;
				public static new_CustomPopup__SWIG_1(param0: number, param1: com.carto.geometry.Geometry, param2: number, param3: com.carto.styles.PopupStyle, param4: number, param5: com.carto.vectorelements.CustomPopupHandler): number;
				public static delete_CustomPopup(param0: number): void;
				public static CustomPopup_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.CustomPopup): number;
				public static CustomPopup_processClick(param0: number, param1: com.carto.vectorelements.CustomPopup, param2: number, param3: com.carto.ui.ClickInfo, param4: number, param5: com.carto.core.MapPos, param6: number, param7: com.carto.core.ScreenPos): boolean;
				public static CustomPopup_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.CustomPopup): any;
				public static CustomPopup_SWIGSmartPtrUpcast(param0: number): number;
				public static CustomPopup_drawBitmap(param0: number, param1: com.carto.vectorelements.CustomPopup, param2: number, param3: com.carto.core.ScreenPos, param4: number, param5: number, param6: number): number;
				public static new_CustomPopup__SWIG_2(param0: number, param1: com.carto.core.MapPos, param2: number, param3: com.carto.styles.PopupStyle, param4: number, param5: com.carto.vectorelements.CustomPopupHandler): number;
				public static CustomPopup_getPopupHandler(param0: number, param1: com.carto.vectorelements.CustomPopup): number;
				public constructor();
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
				public finalize(): void;
				public swigGetClassName(): string;
				public getGeometry(): com.carto.geometry.MultiGeometry;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public setStyle(style: com.carto.styles.GeometryCollectionStyle): void;
				public swigGetDirectorObject(): any;
				public getStyle(): com.carto.styles.GeometryCollectionStyle;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.GeometryCollection;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public static getCPtr(obj: com.carto.vectorelements.GeometryCollection): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
				public setGeometry(geometry: com.carto.geometry.MultiGeometry): void;
				public getGeometry(): com.carto.geometry.Geometry;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class GeometryCollectionModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.GeometryCollectionModuleJNI>;
				public static delete_GeometryCollection(param0: number): void;
				public static GeometryCollection_SWIGSmartPtrUpcast(param0: number): number;
				public static new_GeometryCollection(param0: number, param1: com.carto.geometry.MultiGeometry, param2: number, param3: com.carto.styles.GeometryCollectionStyle): number;
				public static GeometryCollection_setGeometry(param0: number, param1: com.carto.vectorelements.GeometryCollection, param2: number, param3: com.carto.geometry.MultiGeometry): void;
				public static GeometryCollection_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.GeometryCollection): number;
				public static GeometryCollection_swigGetClassName(param0: number, param1: com.carto.vectorelements.GeometryCollection): string;
				public static GeometryCollection_getStyle(param0: number, param1: com.carto.vectorelements.GeometryCollection): number;
				public static GeometryCollection_setStyle(param0: number, param1: com.carto.vectorelements.GeometryCollection, param2: number, param3: com.carto.styles.GeometryCollectionStyle): void;
				public static GeometryCollection_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.GeometryCollection): any;
				public constructor();
				public static GeometryCollection_getGeometry(param0: number, param1: com.carto.vectorelements.GeometryCollection): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class Label extends com.carto.vectorelements.Billboard {
				public static class: java.lang.Class<com.carto.vectorelements.Label>;
				public static getCPtr(obj: com.carto.vectorelements.Billboard): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Billboard;
				public setStyle(style: com.carto.styles.LabelStyle): void;
				public finalize(): void;
				public drawBitmap(dpToPX: number): com.carto.graphics.Bitmap;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.vectorelements.Label): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Label;
				public swigGetRawPtr(): number;
				public getStyle(): com.carto.styles.LabelStyle;
				public delete(): void;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class LabelModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.LabelModuleJNI>;
				public static delete_Label(param0: number): void;
				public static Label_drawBitmap(param0: number, param1: com.carto.vectorelements.Label, param2: number): number;
				public static Label_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.Label): number;
				public static Label_SWIGSmartPtrUpcast(param0: number): number;
				public static Label_swigGetClassName(param0: number, param1: com.carto.vectorelements.Label): string;
				public static Label_getStyle(param0: number, param1: com.carto.vectorelements.Label): number;
				public static Label_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.Label): any;
				public static Label_setStyle(param0: number, param1: com.carto.vectorelements.Label, param2: number, param3: com.carto.styles.LabelStyle): void;
				public constructor();
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
				public finalize(): void;
				public setGeometry(geometry: com.carto.geometry.LineGeometry): void;
				public swigGetClassName(): string;
				public setPoses(poses: com.carto.core.MapPosVector): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.vectorelements.Line): number;
				public constructor(geometry: com.carto.geometry.LineGeometry, style: com.carto.styles.LineStyle);
				public delete(): void;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
				public setStyle(style: com.carto.styles.LineStyle): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Line;
				public getGeometry(): com.carto.geometry.Geometry;
				public getPoses(): com.carto.core.MapPosVector;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class LineModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.LineModuleJNI>;
				public static new_Line__SWIG_0(param0: number, param1: com.carto.geometry.LineGeometry, param2: number, param3: com.carto.styles.LineStyle): number;
				public static Line_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.Line): number;
				public static Line_swigGetClassName(param0: number, param1: com.carto.vectorelements.Line): string;
				public static Line_getPoses(param0: number, param1: com.carto.vectorelements.Line): number;
				public static Line_setStyle(param0: number, param1: com.carto.vectorelements.Line, param2: number, param3: com.carto.styles.LineStyle): void;
				public static Line_getStyle(param0: number, param1: com.carto.vectorelements.Line): number;
				public constructor();
				public static new_Line__SWIG_1(param0: number, param1: com.carto.core.MapPosVector, param2: number, param3: com.carto.styles.LineStyle): number;
				public static Line_setGeometry(param0: number, param1: com.carto.vectorelements.Line, param2: number, param3: com.carto.geometry.LineGeometry): void;
				public static delete_Line(param0: number): void;
				public static Line_setPoses(param0: number, param1: com.carto.vectorelements.Line, param2: number, param3: com.carto.core.MapPosVector): void;
				public static Line_SWIGSmartPtrUpcast(param0: number): number;
				public static Line_getGeometry(param0: number, param1: com.carto.vectorelements.Line): number;
				public static Line_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.Line): any;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class Marker extends com.carto.vectorelements.Billboard {
				public static class: java.lang.Class<com.carto.vectorelements.Marker>;
				public static getCPtr(obj: com.carto.vectorelements.Billboard): number;
				public setStyle(style: com.carto.styles.MarkerStyle): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Billboard;
				public finalize(): void;
				public static getCPtr(obj: com.carto.vectorelements.Marker): number;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor(geometry: com.carto.geometry.Geometry, style: com.carto.styles.MarkerStyle);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Marker;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public constructor(baseBillboard: com.carto.vectorelements.Billboard, style: com.carto.styles.MarkerStyle);
				public delete(): void;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
				public constructor(pos: com.carto.core.MapPos, style: com.carto.styles.MarkerStyle);
				public getStyle(): com.carto.styles.MarkerStyle;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class MarkerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.MarkerModuleJNI>;
				public static new_Marker__SWIG_1(param0: number, param1: com.carto.geometry.Geometry, param2: number, param3: com.carto.styles.MarkerStyle): number;
				public static Marker_setStyle(param0: number, param1: com.carto.vectorelements.Marker, param2: number, param3: com.carto.styles.MarkerStyle): void;
				public static Marker_getStyle(param0: number, param1: com.carto.vectorelements.Marker): number;
				public static Marker_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.Marker): any;
				public static Marker_SWIGSmartPtrUpcast(param0: number): number;
				public static Marker_swigGetClassName(param0: number, param1: com.carto.vectorelements.Marker): string;
				public static new_Marker__SWIG_0(param0: number, param1: com.carto.vectorelements.Billboard, param2: number, param3: com.carto.styles.MarkerStyle): number;
				public static new_Marker__SWIG_2(param0: number, param1: com.carto.core.MapPos, param2: number, param3: com.carto.styles.MarkerStyle): number;
				public static delete_Marker(param0: number): void;
				public static Marker_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.Marker): number;
				public constructor();
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
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Billboard;
				public getStyle(): com.carto.styles.NMLModelStyle;
				public getScale(): number;
				public finalize(): void;
				public setRotation(axis: com.carto.core.MapVec, angle: number): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public delete(): void;
				public setRotationAxis(axis: com.carto.core.MapVec): void;
				public constructor(geometry: com.carto.geometry.Geometry, style: com.carto.styles.NMLModelStyle);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
				/** @deprecated */
				public getRotationAngle(): number;
				public setStyle(style: com.carto.styles.NMLModelStyle): void;
				public static getCPtr(obj: com.carto.vectorelements.Billboard): number;
				public constructor(pos: com.carto.core.MapPos, style: com.carto.styles.NMLModelStyle);
				public constructor(baseBillboard: com.carto.vectorelements.Billboard, style: com.carto.styles.NMLModelStyle);
				public getRotationAxis(): com.carto.core.MapVec;
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public setScale(scale: number): void;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.NMLModel;
				/** @deprecated */
				public setRotationAngle(angle: number): void;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public static getCPtr(obj: com.carto.vectorelements.NMLModel): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class NMLModelModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.NMLModelModuleJNI>;
				public static NMLModel_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.NMLModel): number;
				public static NMLModel_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.NMLModel): any;
				public static new_NMLModel__SWIG_0(param0: number, param1: com.carto.vectorelements.Billboard, param2: number, param3: com.carto.styles.NMLModelStyle): number;
				public static NMLModel_SWIGSmartPtrUpcast(param0: number): number;
				public static NMLModel_setStyle(param0: number, param1: com.carto.vectorelements.NMLModel, param2: number, param3: com.carto.styles.NMLModelStyle): void;
				public static delete_NMLModel(param0: number): void;
				public static NMLModel_setRotationAngle(param0: number, param1: com.carto.vectorelements.NMLModel, param2: number): void;
				public constructor();
				public static new_NMLModel__SWIG_1(param0: number, param1: com.carto.geometry.Geometry, param2: number, param3: com.carto.styles.NMLModelStyle): number;
				public static NMLModel_setScale(param0: number, param1: com.carto.vectorelements.NMLModel, param2: number): void;
				public static NMLModel_swigGetClassName(param0: number, param1: com.carto.vectorelements.NMLModel): string;
				public static NMLModel_getStyle(param0: number, param1: com.carto.vectorelements.NMLModel): number;
				public static NMLModel_getRotationAxis(param0: number, param1: com.carto.vectorelements.NMLModel): number;
				public static new_NMLModel__SWIG_2(param0: number, param1: com.carto.core.MapPos, param2: number, param3: com.carto.styles.NMLModelStyle): number;
				public static NMLModel_getScale(param0: number, param1: com.carto.vectorelements.NMLModel): number;
				public static NMLModel_setRotationAxis(param0: number, param1: com.carto.vectorelements.NMLModel, param2: number, param3: com.carto.core.MapVec): void;
				public static NMLModel_getRotationAngle(param0: number, param1: com.carto.vectorelements.NMLModel): number;
				public static NMLModel_setRotation(param0: number, param1: com.carto.vectorelements.NMLModel, param2: number, param3: com.carto.core.MapVec, param4: number): void;
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
				public static getCPtr(obj: com.carto.vectorelements.Point): number;
				public getStyle(): com.carto.styles.PointStyle;
				public finalize(): void;
				public getPos(): com.carto.core.MapPos;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public getGeometry(): com.carto.geometry.PointGeometry;
				public delete(): void;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Point;
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
			export class PointModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.PointModuleJNI>;
				public static Point_getPos(param0: number, param1: com.carto.vectorelements.Point): number;
				public static Point_swigGetClassName(param0: number, param1: com.carto.vectorelements.Point): string;
				public static Point_getGeometry(param0: number, param1: com.carto.vectorelements.Point): number;
				public static Point_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.Point): number;
				public static new_Point__SWIG_0(param0: number, param1: com.carto.geometry.PointGeometry, param2: number, param3: com.carto.styles.PointStyle): number;
				public static Point_getStyle(param0: number, param1: com.carto.vectorelements.Point): number;
				public static Point_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.Point): any;
				public constructor();
				public static Point_setStyle(param0: number, param1: com.carto.vectorelements.Point, param2: number, param3: com.carto.styles.PointStyle): void;
				public static delete_Point(param0: number): void;
				public static Point_setPos(param0: number, param1: com.carto.vectorelements.Point, param2: number, param3: com.carto.core.MapPos): void;
				public static new_Point__SWIG_1(param0: number, param1: com.carto.core.MapPos, param2: number, param3: com.carto.styles.PointStyle): number;
				public static Point_setGeometry(param0: number, param1: com.carto.vectorelements.Point, param2: number, param3: com.carto.geometry.PointGeometry): void;
				public static Point_SWIGSmartPtrUpcast(param0: number): number;
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
				public finalize(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Polygon;
				public swigGetClassName(): string;
				public setPoses(poses: com.carto.core.MapPosVector): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getStyle(): com.carto.styles.PolygonStyle;
				public swigGetDirectorObject(): any;
				public getGeometry(): com.carto.geometry.PolygonGeometry;
				public constructor(geometry: com.carto.geometry.PolygonGeometry, style: com.carto.styles.PolygonStyle);
				public swigGetRawPtr(): number;
				public delete(): void;
				public constructor(poses: com.carto.core.MapPosVector, style: com.carto.styles.PolygonStyle);
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
				public setGeometry(geometry: com.carto.geometry.PolygonGeometry): void;
				public static getCPtr(obj: com.carto.vectorelements.Polygon): number;
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
				public finalize(): void;
				public constructor(poses: com.carto.core.MapPosVector, holes: com.carto.core.MapPosVectorVector, style: com.carto.styles.Polygon3DStyle, height: number);
				public swigGetClassName(): string;
				public setPoses(poses: com.carto.core.MapPosVector): void;
				public getStyle(): com.carto.styles.Polygon3DStyle;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public setStyle(style: com.carto.styles.Polygon3DStyle): void;
				public setHeight(height: number): void;
				public swigGetDirectorObject(): any;
				public getGeometry(): com.carto.geometry.PolygonGeometry;
				public swigGetRawPtr(): number;
				public constructor(poses: com.carto.core.MapPosVector, style: com.carto.styles.Polygon3DStyle, height: number);
				public delete(): void;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public constructor(geometry: com.carto.geometry.PolygonGeometry, style: com.carto.styles.Polygon3DStyle, height: number);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Polygon3D;
				public setGeometry(geometry: com.carto.geometry.PolygonGeometry): void;
				public static getCPtr(obj: com.carto.vectorelements.Polygon3D): number;
				public getGeometry(): com.carto.geometry.Geometry;
				public getPoses(): com.carto.core.MapPosVector;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class Polygon3DModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.Polygon3DModuleJNI>;
				public static Polygon3D_getGeometry(param0: number, param1: com.carto.vectorelements.Polygon3D): number;
				public static delete_Polygon3D(param0: number): void;
				public static Polygon3D_setStyle(param0: number, param1: com.carto.vectorelements.Polygon3D, param2: number, param3: com.carto.styles.Polygon3DStyle): void;
				public static new_Polygon3D__SWIG_0(param0: number, param1: com.carto.geometry.PolygonGeometry, param2: number, param3: com.carto.styles.Polygon3DStyle, param4: number): number;
				public static Polygon3D_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.Polygon3D): any;
				public static Polygon3D_getHoles(param0: number, param1: com.carto.vectorelements.Polygon3D): number;
				public constructor();
				public static Polygon3D_swigGetClassName(param0: number, param1: com.carto.vectorelements.Polygon3D): string;
				public static Polygon3D_getPoses(param0: number, param1: com.carto.vectorelements.Polygon3D): number;
				public static Polygon3D_setPoses(param0: number, param1: com.carto.vectorelements.Polygon3D, param2: number, param3: com.carto.core.MapPosVector): void;
				public static Polygon3D_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.Polygon3D): number;
				public static Polygon3D_setHoles(param0: number, param1: com.carto.vectorelements.Polygon3D, param2: number, param3: com.carto.core.MapPosVectorVector): void;
				public static new_Polygon3D__SWIG_1(param0: number, param1: com.carto.core.MapPosVector, param2: number, param3: com.carto.styles.Polygon3DStyle, param4: number): number;
				public static Polygon3D_SWIGSmartPtrUpcast(param0: number): number;
				public static Polygon3D_getStyle(param0: number, param1: com.carto.vectorelements.Polygon3D): number;
				public static Polygon3D_setGeometry(param0: number, param1: com.carto.vectorelements.Polygon3D, param2: number, param3: com.carto.geometry.PolygonGeometry): void;
				public static new_Polygon3D__SWIG_2(param0: number, param1: com.carto.core.MapPosVector, param2: number, param3: com.carto.core.MapPosVectorVector, param4: number, param5: com.carto.styles.Polygon3DStyle, param6: number): number;
				public static Polygon3D_setHeight(param0: number, param1: com.carto.vectorelements.Polygon3D, param2: number): void;
				public static Polygon3D_getHeight(param0: number, param1: com.carto.vectorelements.Polygon3D): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class PolygonModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.PolygonModuleJNI>;
				public static Polygon_getHoles(param0: number, param1: com.carto.vectorelements.Polygon): number;
				public static Polygon_setHoles(param0: number, param1: com.carto.vectorelements.Polygon, param2: number, param3: com.carto.core.MapPosVectorVector): void;
				public static new_Polygon__SWIG_0(param0: number, param1: com.carto.geometry.PolygonGeometry, param2: number, param3: com.carto.styles.PolygonStyle): number;
				public static Polygon_SWIGSmartPtrUpcast(param0: number): number;
				public static Polygon_getPoses(param0: number, param1: com.carto.vectorelements.Polygon): number;
				public static new_Polygon__SWIG_1(param0: number, param1: com.carto.core.MapPosVector, param2: number, param3: com.carto.styles.PolygonStyle): number;
				public static new_Polygon__SWIG_2(param0: number, param1: com.carto.core.MapPosVector, param2: number, param3: com.carto.core.MapPosVectorVector, param4: number, param5: com.carto.styles.PolygonStyle): number;
				public static Polygon_getStyle(param0: number, param1: com.carto.vectorelements.Polygon): number;
				public static Polygon_swigGetClassName(param0: number, param1: com.carto.vectorelements.Polygon): string;
				public constructor();
				public static Polygon_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.Polygon): any;
				public static delete_Polygon(param0: number): void;
				public static Polygon_setGeometry(param0: number, param1: com.carto.vectorelements.Polygon, param2: number, param3: com.carto.geometry.PolygonGeometry): void;
				public static Polygon_getGeometry(param0: number, param1: com.carto.vectorelements.Polygon): number;
				public static Polygon_setPoses(param0: number, param1: com.carto.vectorelements.Polygon, param2: number, param3: com.carto.core.MapPosVector): void;
				public static Polygon_setStyle(param0: number, param1: com.carto.vectorelements.Polygon, param2: number, param3: com.carto.styles.PolygonStyle): void;
				public static Polygon_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.Polygon): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class Popup extends com.carto.vectorelements.Billboard {
				public static class: java.lang.Class<com.carto.vectorelements.Popup>;
				public static getCPtr(obj: com.carto.vectorelements.Billboard): number;
				public static getCPtr(obj: com.carto.vectorelements.Popup): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Billboard;
				public drawBitmap(anchorScreenPos: com.carto.core.ScreenPos, screenWidth: number, screenHeight: number, dpToPX: number): com.carto.graphics.Bitmap;
				public setAnchorPointX(anchorPointX: number): void;
				public finalize(): void;
				public getStyle(): com.carto.styles.PopupStyle;
				public getAnchorPointY(): number;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public setAnchorPoint(anchorPointX: number, anchorPointY: number): void;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public delete(): void;
				public setStyle(style: com.carto.styles.PopupStyle): void;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Popup;
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
			export class PopupModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.PopupModuleJNI>;
				public static Popup_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.Popup): number;
				public static Popup_setAnchorPoint(param0: number, param1: com.carto.vectorelements.Popup, param2: number, param3: number): void;
				public static Popup_getAnchorPointX(param0: number, param1: com.carto.vectorelements.Popup): number;
				public static Popup_setAnchorPointX(param0: number, param1: com.carto.vectorelements.Popup, param2: number): void;
				public static Popup_SWIGSmartPtrUpcast(param0: number): number;
				public constructor();
				public static Popup_setStyle(param0: number, param1: com.carto.vectorelements.Popup, param2: number, param3: com.carto.styles.PopupStyle): void;
				public static Popup_drawBitmap(param0: number, param1: com.carto.vectorelements.Popup, param2: number, param3: com.carto.core.ScreenPos, param4: number, param5: number, param6: number): number;
				public static Popup_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.Popup): any;
				public static Popup_getStyle(param0: number, param1: com.carto.vectorelements.Popup): number;
				public static Popup_getAnchorPointY(param0: number, param1: com.carto.vectorelements.Popup): number;
				public static delete_Popup(param0: number): void;
				public static Popup_setAnchorPointY(param0: number, param1: com.carto.vectorelements.Popup, param2: number): void;
				public static Popup_processClick(param0: number, param1: com.carto.vectorelements.Popup, param2: number, param3: com.carto.ui.ClickInfo, param4: number, param5: com.carto.core.MapPos, param6: number, param7: com.carto.core.ScreenPos): boolean;
				public static Popup_swigGetClassName(param0: number, param1: com.carto.vectorelements.Popup): string;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class Text extends com.carto.vectorelements.Label {
				public static class: java.lang.Class<com.carto.vectorelements.Text>;
				public static getCPtr(obj: com.carto.vectorelements.Billboard): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Billboard;
				public setStyle(style: com.carto.styles.LabelStyle): void;
				public finalize(): void;
				public constructor(geometry: com.carto.geometry.Geometry, style: com.carto.styles.TextStyle, text: string);
				public drawBitmap(dpToPX: number): com.carto.graphics.Bitmap;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public getText(): string;
				public static getCPtr(obj: com.carto.vectorelements.Label): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Label;
				public swigGetRawPtr(): number;
				public getStyle(): com.carto.styles.LabelStyle;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.Text;
				public static getCPtr(obj: com.carto.vectorelements.Text): number;
				public constructor(pos: com.carto.core.MapPos, style: com.carto.styles.TextStyle, text: string);
				public delete(): void;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
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
			export class TextModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.TextModuleJNI>;
				public static Text_setStyle(param0: number, param1: com.carto.vectorelements.Text, param2: number, param3: com.carto.styles.TextStyle): void;
				public static Text_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.Text): any;
				public static Text_swigGetClassName(param0: number, param1: com.carto.vectorelements.Text): string;
				public static Text_getStyle(param0: number, param1: com.carto.vectorelements.Text): number;
				public constructor();
				public static Text_setText(param0: number, param1: com.carto.vectorelements.Text, param2: string): void;
				public static new_Text__SWIG_0(param0: number, param1: com.carto.vectorelements.Billboard, param2: number, param3: com.carto.styles.TextStyle, param4: string): number;
				public static new_Text__SWIG_2(param0: number, param1: com.carto.core.MapPos, param2: number, param3: com.carto.styles.TextStyle, param4: string): number;
				public static Text_getText(param0: number, param1: com.carto.vectorelements.Text): string;
				public static Text_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.Text): number;
				public static new_Text__SWIG_1(param0: number, param1: com.carto.geometry.Geometry, param2: number, param3: com.carto.styles.TextStyle, param4: string): number;
				public static delete_Text(param0: number): void;
				public static Text_drawBitmap(param0: number, param1: com.carto.vectorelements.Text, param2: number): number;
				public static Text_SWIGSmartPtrUpcast(param0: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class VectorElement extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.VectorElement>;
				public swigCMemOwn: boolean;
				public isVisible(): boolean;
				public containsMetaDataKey(key: string): boolean;
				public notifyElementChanged(): void;
				public setMetaDataElement(key: string, element: com.carto.core.Variant): void;
				public getId(): number;
				public finalize(): void;
				public getBounds(): com.carto.core.MapBounds;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public swigGetDirectorObject(): any;
				public getMetaDataElement(key: string): com.carto.core.Variant;
				public setId(id: number): void;
				public swigGetRawPtr(): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public static getCPtr(obj: com.carto.vectorelements.VectorElement): number;
				public setMetaData(metaData: com.carto.core.StringVariantMap): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectorelements.VectorElement;
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
			export class VectorElementModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.VectorElementModuleJNI>;
				public static VectorElement_getId(param0: number, param1: com.carto.vectorelements.VectorElement): number;
				public static VectorElement_getMetaData(param0: number, param1: com.carto.vectorelements.VectorElement): number;
				public static VectorElementVector_size(param0: number, param1: com.carto.vectorelements.VectorElementVector): number;
				public static VectorElementVector_add(param0: number, param1: com.carto.vectorelements.VectorElementVector, param2: number, param3: com.carto.vectorelements.VectorElement): void;
				public static VectorElementVector_isEmpty(param0: number, param1: com.carto.vectorelements.VectorElementVector): boolean;
				public static new_VectorElementVector__SWIG_0(): number;
				public static VectorElement_containsMetaDataKey(param0: number, param1: com.carto.vectorelements.VectorElement, param2: string): boolean;
				public static VectorElementVector_reserve(param0: number, param1: com.carto.vectorelements.VectorElementVector, param2: number): void;
				public constructor();
				public static VectorElement_getGeometry(param0: number, param1: com.carto.vectorelements.VectorElement): number;
				public static VectorElementVector_get(param0: number, param1: com.carto.vectorelements.VectorElementVector, param2: number): number;
				public static VectorElementVector_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.VectorElementVector): number;
				public static delete_VectorElement(param0: number): void;
				public static VectorElement_getBounds(param0: number, param1: com.carto.vectorelements.VectorElement): number;
				public static new_VectorElementVector__SWIG_1(param0: number): number;
				public static VectorElement_notifyElementChanged(param0: number, param1: com.carto.vectorelements.VectorElement): void;
				public static VectorElementVector_capacity(param0: number, param1: com.carto.vectorelements.VectorElementVector): number;
				public static VectorElement_setMetaData(param0: number, param1: com.carto.vectorelements.VectorElement, param2: number, param3: com.carto.core.StringVariantMap): void;
				public static delete_VectorElementVector(param0: number): void;
				public static VectorElement_setVisible(param0: number, param1: com.carto.vectorelements.VectorElement, param2: boolean): void;
				public static VectorElement_setId(param0: number, param1: com.carto.vectorelements.VectorElement, param2: number): void;
				public static VectorElementVector_set(param0: number, param1: com.carto.vectorelements.VectorElementVector, param2: number, param3: number, param4: com.carto.vectorelements.VectorElement): void;
				public static VectorElement_setMetaDataElement(param0: number, param1: com.carto.vectorelements.VectorElement, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static VectorElement_getMetaDataElement(param0: number, param1: com.carto.vectorelements.VectorElement, param2: string): number;
				public static VectorElement_swigGetClassName(param0: number, param1: com.carto.vectorelements.VectorElement): string;
				public static VectorElement_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.VectorElement): any;
				public static VectorElement_isVisible(param0: number, param1: com.carto.vectorelements.VectorElement): boolean;
				public static VectorElementVector_clear(param0: number, param1: com.carto.vectorelements.VectorElementVector): void;
				public static VectorElement_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.VectorElement): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectorelements {
			export class VectorElementVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.VectorElementVector>;
				public swigCMemOwn: boolean;
				public add(x: com.carto.vectorelements.VectorElement): void;
				public get(i: number): com.carto.vectorelements.VectorElement;
				public finalize(): void;
				public constructor(n: number);
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public constructor();
				public size(): number;
				public set(i: number, val: com.carto.vectorelements.VectorElement): void;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.vectorelements.VectorElementVector): number;
				public delete(): void;
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
				public finalize(): void;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public setFeatureIdOverride(idOverride: boolean): void;
				public static getCPtr(obj: com.carto.vectortiles.VectorTileDecoder): number;
				public delete(): void;
				public setStyleParameter(param: string, value: string): boolean;
				public constructor(cartoCSSStyleSet: com.carto.styles.CartoCSSStyleSet);
				public addFallbackFont(fontData: com.carto.core.BinaryData): void;
				public getCompiledStyleSet(): com.carto.styles.CompiledStyleSet;
				public swigGetClassName(): string;
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public static getCPtr(obj: com.carto.vectortiles.MBVectorTileDecoder): number;
				public swigGetRawPtr(): number;
				public setCartoCSSStyleSet(styleSet: com.carto.styles.CartoCSSStyleSet): void;
				public constructor(compiledStyleSet: com.carto.styles.CompiledStyleSet);
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectortiles.VectorTileDecoder;
				public getStyleParameter(param: string): string;
				public isFeatureIdOverride(): boolean;
				public setJSONStyleParameters(params: string): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectortiles.MBVectorTileDecoder;
				public setStyleParameters(params: com.carto.core.StringMap): void;
				public getMinZoom(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectortiles {
			export class MBVectorTileDecoderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectortiles.MBVectorTileDecoderModuleJNI>;
				public static MBVectorTileDecoder_getCartoCSSStyleSet(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder): number;
				public static MBVectorTileDecoder_setCartoCSSStyleSet(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder, param2: number, param3: com.carto.styles.CartoCSSStyleSet): void;
				public static new_MBVectorTileDecoder__SWIG_0(param0: number, param1: com.carto.styles.CompiledStyleSet): number;
				public static MBVectorTileDecoder_SWIGSmartPtrUpcast(param0: number): number;
				public static MBVectorTileDecoder_isFeatureIdOverride(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder): boolean;
				public static MBVectorTileDecoder_setFeatureIdOverride(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder, param2: boolean): void;
				public static MBVectorTileDecoder_swigGetRawPtr(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder): number;
				public static MBVectorTileDecoder_addFallbackFont(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder, param2: number, param3: com.carto.core.BinaryData): void;
				public static MBVectorTileDecoder_setCompiledStyleSet(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder, param2: number, param3: com.carto.styles.CompiledStyleSet): void;
				public constructor();
				public static MBVectorTileDecoder_getStyleParameters(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder): number;
				public static MBVectorTileDecoder_swigGetDirectorObject(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder): any;
				public static MBVectorTileDecoder_getCompiledStyleSet(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder): number;
				public static MBVectorTileDecoder_getStyleParameter(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder, param2: string): string;
				public static MBVectorTileDecoder_getMinZoom(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder): number;
				public static MBVectorTileDecoder_getMaxZoom(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder): number;
				public static new_MBVectorTileDecoder__SWIG_1(param0: number, param1: com.carto.styles.CartoCSSStyleSet): number;
				public static delete_MBVectorTileDecoder(param0: number): void;
				public static MBVectorTileDecoder_setStyleParameter(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder, param2: string, param3: string): boolean;
				public static MBVectorTileDecoder_setStyleParameters(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder, param2: number, param3: com.carto.core.StringMap): void;
				public static MBVectorTileDecoder_swigGetClassName(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder): string;
				public static MBVectorTileDecoder_setJSONStyleParameters(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder, param2: string): void;
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
				public static getCPtr(obj: com.carto.vectortiles.TorqueTileDecoder): number;
				public finalize(): void;
				public getFrameCount(): number;
				public setStyleSet(styleSet: com.carto.styles.CartoCSSStyleSet): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.vectortiles.VectorTileDecoder): number;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectortiles.TorqueTileDecoder;
				public getResolution(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectortiles.VectorTileDecoder;
				public getAnimationDuration(): number;
				public getMinZoom(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectortiles {
			export class TorqueTileDecoderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectortiles.TorqueTileDecoderModuleJNI>;
				public static TorqueTileDecoder_setStyleSet(param0: number, param1: com.carto.vectortiles.TorqueTileDecoder, param2: number, param3: com.carto.styles.CartoCSSStyleSet): void;
				public static TorqueTileDecoder_SWIGSmartPtrUpcast(param0: number): number;
				public static TorqueTileDecoder_getAnimationDuration(param0: number, param1: com.carto.vectortiles.TorqueTileDecoder): number;
				public static new_TorqueTileDecoder(param0: number, param1: com.carto.styles.CartoCSSStyleSet): number;
				public static TorqueTileDecoder_getResolution(param0: number, param1: com.carto.vectortiles.TorqueTileDecoder): number;
				public static TorqueTileDecoder_addFallbackFont(param0: number, param1: com.carto.vectortiles.TorqueTileDecoder, param2: number, param3: com.carto.core.BinaryData): void;
				public static TorqueTileDecoder_getMaxZoom(param0: number, param1: com.carto.vectortiles.TorqueTileDecoder): number;
				public static TorqueTileDecoder_swigGetDirectorObject(param0: number, param1: com.carto.vectortiles.TorqueTileDecoder): any;
				public constructor();
				public static TorqueTileDecoder_swigGetClassName(param0: number, param1: com.carto.vectortiles.TorqueTileDecoder): string;
				public static TorqueTileDecoder_getFrameCount(param0: number, param1: com.carto.vectortiles.TorqueTileDecoder): number;
				public static TorqueTileDecoder_getMinZoom(param0: number, param1: com.carto.vectortiles.TorqueTileDecoder): number;
				public static delete_TorqueTileDecoder(param0: number): void;
				public static TorqueTileDecoder_swigGetRawPtr(param0: number, param1: com.carto.vectortiles.TorqueTileDecoder): number;
				public static TorqueTileDecoder_getStyleSet(param0: number, param1: com.carto.vectortiles.TorqueTileDecoder): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectortiles {
			export class VectorTileDecoder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectortiles.VectorTileDecoder>;
				public swigCMemOwn: boolean;
				public addFallbackFont(fontData: com.carto.core.BinaryData): void;
				public finalize(): void;
				public swigGetClassName(): string;
				public constructor(cPtr: number, cMemoryOwn: boolean);
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public static getCPtr(obj: com.carto.vectortiles.VectorTileDecoder): number;
				public equals(obj: any): boolean;
				public delete(): void;
				public static swigCreatePolymorphicInstance(objClass: number, argTypes: boolean): com.carto.vectortiles.VectorTileDecoder;
				public notifyDecoderChanged(): void;
				public hashCode(): number;
				public getMinZoom(): number;
			}
		}
	}
}

declare namespace com {
	export namespace carto {
		export namespace vectortiles {
			export class VectorTileDecoderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectortiles.VectorTileDecoderModuleJNI>;
				public static delete_VectorTileDecoder(param0: number): void;
				public static VectorTileDecoder_notifyDecoderChanged(param0: number, param1: com.carto.vectortiles.VectorTileDecoder): void;
				public static VectorTileDecoder_addFallbackFont(param0: number, param1: com.carto.vectortiles.VectorTileDecoder, param2: number, param3: com.carto.core.BinaryData): void;
				public static VectorTileDecoder_swigGetClassName(param0: number, param1: com.carto.vectortiles.VectorTileDecoder): string;
				public static VectorTileDecoder_getMaxZoom(param0: number, param1: com.carto.vectortiles.VectorTileDecoder): number;
				public static VectorTileDecoder_swigGetDirectorObject(param0: number, param1: com.carto.vectortiles.VectorTileDecoder): any;
				public static VectorTileDecoder_getMinZoom(param0: number, param1: com.carto.vectortiles.VectorTileDecoder): number;
				public static VectorTileDecoder_swigGetRawPtr(param0: number, param1: com.carto.vectortiles.VectorTileDecoder): number;
				public constructor();
			}
		}
	}
}

//Generics information:

