/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

declare module com {
	export module carto {
		export class BuildConfig extends java.lang.Object {
			public static class: java.lang.Class<com.carto.BuildConfig>;
			public static DEBUG: boolean;
			public static LIBRARY_PACKAGE_NAME: string;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module com {
	export module carto {
		export module components {
			export class Layers extends java.lang.Object {
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

declare module com {
	export module carto {
		export module components {
			export class LicenseManager extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.LicenseManager>;
				public swigCMemOwn: boolean;
				public static getCPtr(param0: com.carto.components.LicenseManager): number;
				public delete(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
			}
		}
	}
}

declare module com {
	export module carto {
		export module components {
			export class LicenseManagerListener extends java.lang.Object {
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
			export class LicenseManagerListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.LicenseManagerListenerModuleJNI>;
				public static LicenseManagerListener_change_ownership(param0: com.carto.components.LicenseManagerListener, param1: number, param2: boolean): void;
				public static SwigDirector_LicenseManagerListener_onLicenseUpdated(param0: com.carto.components.LicenseManagerListener, param1: string): void;
				public static delete_LicenseManagerListener(param0: number): void;
				public static LicenseManagerListener_swigGetClassName(param0: number, param1: com.carto.components.LicenseManagerListener): string;
				public static new_LicenseManagerListener(): number;
				public static LicenseManagerListener_director_connect(param0: com.carto.components.LicenseManagerListener, param1: number, param2: boolean, param3: boolean): void;
				public static LicenseManagerListener_onLicenseUpdated(param0: number, param1: com.carto.components.LicenseManagerListener, param2: string): void;
				public static LicenseManagerListener_swigGetRawPtr(param0: number, param1: com.carto.components.LicenseManagerListener): number;
				public static LicenseManagerListener_swigGetDirectorObject(param0: number, param1: com.carto.components.LicenseManagerListener): any;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module components {
			export class LicenseManagerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.LicenseManagerModuleJNI>;
				public constructor();
				public static delete_LicenseManager(param0: number): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module components {
			export class Options extends java.lang.Object {
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
			export class OptionsModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.components.OptionsModuleJNI>;
				public static Options_getPanningMode(param0: number, param1: com.carto.components.Options): number;
				public static Options_getBackgroundBitmap(param0: number, param1: com.carto.components.Options): number;
				public static Options_getWatermarkPadding(param0: number, param1: com.carto.components.Options): number;
				public static Options_setBackgroundBitmap(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.graphics.Bitmap): void;
				public static Options_getPivotMode(param0: number, param1: com.carto.components.Options): number;
				public static delete_Options(param0: number): void;
				public static Options_getDPI(param0: number, param1: com.carto.components.Options): number;
				public static Options_setTiltRange(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.core.MapRange): void;
				public static Options_getDrawDistance(param0: number, param1: com.carto.components.Options): number;
				public static Options_setDrawDistance(param0: number, param1: com.carto.components.Options, param2: number): void;
				public constructor();
				public static Options_getFieldOfViewY(param0: number, param1: com.carto.components.Options): number;
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
				public static Options_getWatermarkAlignmentX(param0: number, param1: com.carto.components.Options): number;
				public static Options_setWatermarkAlignmentX(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_getClearColor(param0: number, param1: com.carto.components.Options): number;
				public static Options_getTileDrawSize(param0: number, param1: com.carto.components.Options): number;
				public static Options_isKineticRotation(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_setBaseProjection(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.projections.Projection): void;
				public static Options_swigGetRawPtr(param0: number, param1: com.carto.components.Options): number;
				public static Options_isClickTypeDetection(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_setDPI(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_setKineticRotation(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_getMainLightDirection(param0: number, param1: com.carto.components.Options): number;
				public static Options_isUserInput(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_setKineticZoom(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_getBaseProjection(param0: number, param1: com.carto.components.Options): number;
				public static Options_setWatermarkBitmap(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.graphics.Bitmap): void;
				public static Options_setUserInput(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_isTiltGestureReversed(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_getTiltRange(param0: number, param1: com.carto.components.Options): number;
				public static Options_getPanBounds(param0: number, param1: com.carto.components.Options): number;
				public static Options_setWatermarkAlignmentY(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_getWatermarkScale(param0: number, param1: com.carto.components.Options): number;
				public static Options_setRenderProjectionMode(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_isSeamlessPanning(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_getWatermarkBitmap(param0: number, param1: com.carto.components.Options): number;
				public static Options_getFocusPointOffset(param0: number, param1: com.carto.components.Options): number;
				public static Options_setPanBounds(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.core.MapBounds): void;
				public static Options_setSkyColor(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.graphics.Color): void;
				public static Options_isRotatable(param0: number, param1: com.carto.components.Options): boolean;
				public static Options_setWatermarkPadding(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.core.ScreenPos): void;
				public static Options_setWatermarkScale(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_setSeamlessPanning(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_setZoomGestures(param0: number, param1: com.carto.components.Options, param2: boolean): void;
				public static Options_setPivotMode(param0: number, param1: com.carto.components.Options, param2: number): void;
				public static Options_getAmbientLightColor(param0: number, param1: com.carto.components.Options): number;
				public static Options_setEnvelopeThreadPoolSize(param0: number, param1: com.carto.components.Options, param2: number): void;
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
				public static Options_getWatermarkAlignmentY(param0: number, param1: com.carto.components.Options): number;
				public static Options_setMainLightColor(param0: number, param1: com.carto.components.Options, param2: number, param3: com.carto.graphics.Color): void;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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

declare module com {
	export module carto {
		export module core {
			export class BinaryData extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.BinaryData>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public delete(): void;
				public hashCode(): number;
				public constructor(param0: androidNative.Array<number>);
				public finalize(): void;
				public equals(param0: any): boolean;
				public getData(): androidNative.Array<number>;
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

declare module com {
	export module carto {
		export module core {
			export class DoubleVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.DoubleVector>;
				public swigCMemOwn: boolean;
				public static getCPtr(param0: com.carto.core.DoubleVector): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public get(param0: number): number;
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

declare module com {
	export module carto {
		export module core {
			export class IntVector extends java.lang.Object {
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

declare module com {
	export module carto {
		export module core {
			export class MapBounds extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.MapBounds>;
				public swigCMemOwn: boolean;
				public getMax(): com.carto.core.MapPos;
				public contains(param0: com.carto.core.MapPos): boolean;
				public finalize(): void;
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

declare module com {
	export module carto {
		export module core {
			export class MapEnvelope extends java.lang.Object {
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

declare module com {
	export module carto {
		export module core {
			export class MapPos extends java.lang.Object {
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

declare module com {
	export module carto {
		export module core {
			export class MapPosVector extends java.lang.Object {
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
			export class MapPosVectorVector extends java.lang.Object {
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
			export class MapRange extends java.lang.Object {
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

declare module com {
	export module carto {
		export module core {
			export class MapTile extends java.lang.Object {
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

declare module com {
	export module carto {
		export module core {
			export class MapVec extends java.lang.Object {
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

declare module com {
	export module carto {
		export module core {
			export class ScreenBounds extends java.lang.Object {
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

declare module com {
	export module carto {
		export module core {
			export class ScreenPos extends java.lang.Object {
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

declare module com {
	export module carto {
		export module core {
			export class ScreenPosVector extends java.lang.Object {
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
			export class StringMap extends java.lang.Object {
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
			export class StringMapModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.core.StringMapModuleJNI>;
				public static StringMap_get(param0: number, param1: com.carto.core.StringMap, param2: string): string;
				public static StringMap_get_key(param0: number, param1: com.carto.core.StringMap, param2: number): string;
				public static StringMap_set(param0: number, param1: com.carto.core.StringMap, param2: string, param3: string): void;
				public static StringMap_del(param0: number, param1: com.carto.core.StringMap, param2: string): void;
				public static StringMap_empty(param0: number, param1: com.carto.core.StringMap): boolean;
				public static StringMap_size(param0: number, param1: com.carto.core.StringMap): number;
				public static delete_StringMap(param0: number): void;
				public static new_StringMap__SWIG_0(): number;
				public static new_StringMap__SWIG_1(param0: number, param1: com.carto.core.StringMap): number;
				public static StringMap_has_key(param0: number, param1: com.carto.core.StringMap, param2: string): boolean;
				public static StringMap_clear(param0: number, param1: com.carto.core.StringMap): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module core {
			export class StringVariantMap extends java.lang.Object {
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
			export class StringVector extends java.lang.Object {
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

declare module com {
	export module carto {
		export module core {
			export class Variant extends java.lang.Object {
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
			export class VariantArrayBuilder extends java.lang.Object {
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

declare module com {
	export module carto {
		export module core {
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

declare module com {
	export module carto {
		export module core {
			export class VariantObjectBuilder extends java.lang.Object {
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
			export class AssetTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.AssetTileDataSourceModuleJNI>;
				public static SwigDirector_AssetTileDataSource_notifyTilesChanged(param0: com.carto.datasources.AssetTileDataSource, param1: boolean): void;
				public static AssetTileDataSource_loadTileSwigExplicitAssetTileDataSource(param0: number, param1: com.carto.datasources.AssetTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static SwigDirector_AssetTileDataSource_loadTile(param0: com.carto.datasources.AssetTileDataSource, param1: number): number;
				public static delete_AssetTileDataSource(param0: number): void;
				public static AssetTileDataSource_director_connect(param0: com.carto.datasources.AssetTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static new_AssetTileDataSource(param0: number, param1: number, param2: string): number;
				public static AssetTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_AssetTileDataSource_getMaxZoom(param0: com.carto.datasources.AssetTileDataSource): number;
				public static SwigDirector_AssetTileDataSource_getDataExtent(param0: com.carto.datasources.AssetTileDataSource): number;
				public constructor();
				public static AssetTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.AssetTileDataSource): string;
				public static AssetTileDataSource_change_ownership(param0: com.carto.datasources.AssetTileDataSource, param1: number, param2: boolean): void;
				public static AssetTileDataSource_loadTile(param0: number, param1: com.carto.datasources.AssetTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static AssetTileDataSource_buildAssetPath(param0: number, param1: com.carto.datasources.AssetTileDataSource, param2: string, param3: number, param4: com.carto.core.MapTile): string;
				public static AssetTileDataSource_buildAssetPathSwigExplicitAssetTileDataSource(param0: number, param1: com.carto.datasources.AssetTileDataSource, param2: string, param3: number, param4: com.carto.core.MapTile): string;
				public static SwigDirector_AssetTileDataSource_getMinZoom(param0: com.carto.datasources.AssetTileDataSource): number;
				public static AssetTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.AssetTileDataSource): any;
				public static AssetTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.AssetTileDataSource): number;
				public static SwigDirector_AssetTileDataSource_buildAssetPath(param0: com.carto.datasources.AssetTileDataSource, param1: string, param2: number): string;
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
			export class BitmapOverlayRasterTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.BitmapOverlayRasterTileDataSourceModuleJNI>;
				public static SwigDirector_BitmapOverlayRasterTileDataSource_getMaxZoom(param0: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public static new_BitmapOverlayRasterTileDataSource(param0: number, param1: number, param2: number, param3: com.carto.graphics.Bitmap, param4: number, param5: com.carto.projections.Projection, param6: number, param7: com.carto.core.MapPosVector, param8: number, param9: com.carto.core.ScreenPosVector): number;
				public static BitmapOverlayRasterTileDataSource_loadTile(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static BitmapOverlayRasterTileDataSource_change_ownership(param0: com.carto.datasources.BitmapOverlayRasterTileDataSource, param1: number, param2: boolean): void;
				public static BitmapOverlayRasterTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource): string;
				public static SwigDirector_BitmapOverlayRasterTileDataSource_loadTile(param0: com.carto.datasources.BitmapOverlayRasterTileDataSource, param1: number): number;
				public static BitmapOverlayRasterTileDataSource_loadTileSwigExplicitBitmapOverlayRasterTileDataSource(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public constructor();
				public static BitmapOverlayRasterTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public static delete_BitmapOverlayRasterTileDataSource(param0: number): void;
				public static SwigDirector_BitmapOverlayRasterTileDataSource_getDataExtent(param0: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public static BitmapOverlayRasterTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_BitmapOverlayRasterTileDataSource_getMinZoom(param0: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public static BitmapOverlayRasterTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public static BitmapOverlayRasterTileDataSource_getDataExtentSwigExplicitBitmapOverlayRasterTileDataSource(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource): number;
				public static BitmapOverlayRasterTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.BitmapOverlayRasterTileDataSource): any;
				public static BitmapOverlayRasterTileDataSource_director_connect(param0: com.carto.datasources.BitmapOverlayRasterTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_BitmapOverlayRasterTileDataSource_notifyTilesChanged(param0: com.carto.datasources.BitmapOverlayRasterTileDataSource, param1: boolean): void;
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
			export class CacheTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.CacheTileDataSourceModuleJNI>;
				public static CacheTileDataSource_getMinZoom(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_getMaxZoomSwigExplicitCacheTileDataSource(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_getMinZoomSwigExplicitCacheTileDataSource(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_clear(param0: number, param1: com.carto.datasources.CacheTileDataSource): void;
				public static CacheTileDataSource_director_connect(param0: com.carto.datasources.CacheTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static CacheTileDataSource_change_ownership(param0: com.carto.datasources.CacheTileDataSource, param1: number, param2: boolean): void;
				public constructor();
				public static CacheTileDataSource_notifyTilesChanged(param0: number, param1: com.carto.datasources.CacheTileDataSource, param2: boolean): void;
				public static SwigDirector_CacheTileDataSource_setCapacity(param0: com.carto.datasources.CacheTileDataSource, param1: number): void;
				public static CacheTileDataSource_getDataExtentSwigExplicitCacheTileDataSource(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static SwigDirector_CacheTileDataSource_clear(param0: com.carto.datasources.CacheTileDataSource): void;
				public static CacheTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_getDataSource(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_getCapacity(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static delete_CacheTileDataSource(param0: number): void;
				public static new_CacheTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static SwigDirector_CacheTileDataSource_getMinZoom(param0: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_getMaxZoom(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static SwigDirector_CacheTileDataSource_notifyTilesChanged(param0: com.carto.datasources.CacheTileDataSource, param1: boolean): void;
				public static CacheTileDataSource_notifyTilesChangedSwigExplicitCacheTileDataSource(param0: number, param1: com.carto.datasources.CacheTileDataSource, param2: boolean): void;
				public static CacheTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.CacheTileDataSource): number;
				public static SwigDirector_CacheTileDataSource_getCapacity(param0: com.carto.datasources.CacheTileDataSource): number;
				public static SwigDirector_CacheTileDataSource_getDataExtent(param0: com.carto.datasources.CacheTileDataSource): number;
				public static SwigDirector_CacheTileDataSource_loadTile(param0: com.carto.datasources.CacheTileDataSource, param1: number): number;
				public static SwigDirector_CacheTileDataSource_getMaxZoom(param0: com.carto.datasources.CacheTileDataSource): number;
				public static CacheTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.CacheTileDataSource): string;
				public static CacheTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static CacheTileDataSource_setCapacity(param0: number, param1: com.carto.datasources.CacheTileDataSource, param2: number): void;
				public static CacheTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.CacheTileDataSource): any;
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
			export class CartoOnlineTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.CartoOnlineTileDataSourceModuleJNI>;
				public static delete_CartoOnlineTileDataSource(param0: number): void;
				public static CartoOnlineTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.CartoOnlineTileDataSource): any;
				public static SwigDirector_CartoOnlineTileDataSource_getDataExtent(param0: com.carto.datasources.CartoOnlineTileDataSource): number;
				public static SwigDirector_CartoOnlineTileDataSource_getMinZoom(param0: com.carto.datasources.CartoOnlineTileDataSource): number;
				public static new_CartoOnlineTileDataSource(param0: string): number;
				public static CartoOnlineTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static CartoOnlineTileDataSource_change_ownership(param0: com.carto.datasources.CartoOnlineTileDataSource, param1: number, param2: boolean): void;
				public constructor();
				public static CartoOnlineTileDataSource_director_connect(param0: com.carto.datasources.CartoOnlineTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static CartoOnlineTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.CartoOnlineTileDataSource): number;
				public static CartoOnlineTileDataSource_loadTileSwigExplicitCartoOnlineTileDataSource(param0: number, param1: com.carto.datasources.CartoOnlineTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static CartoOnlineTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.CartoOnlineTileDataSource): string;
				public static SwigDirector_CartoOnlineTileDataSource_notifyTilesChanged(param0: com.carto.datasources.CartoOnlineTileDataSource, param1: boolean): void;
				public static CartoOnlineTileDataSource_loadTile(param0: number, param1: com.carto.datasources.CartoOnlineTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static SwigDirector_CartoOnlineTileDataSource_getMaxZoom(param0: com.carto.datasources.CartoOnlineTileDataSource): number;
				public static SwigDirector_CartoOnlineTileDataSource_loadTile(param0: com.carto.datasources.CartoOnlineTileDataSource, param1: number): number;
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
			export class CombinedTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.CombinedTileDataSourceModuleJNI>;
				public static SwigDirector_CombinedTileDataSource_getMinZoom(param0: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_getDataExtentSwigExplicitCombinedTileDataSource(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static CombinedTileDataSource_getMaxZoom(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.CombinedTileDataSource): string;
				public static CombinedTileDataSource_getMinZoomSwigExplicitCombinedTileDataSource(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public constructor();
				public static new_CombinedTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.datasources.TileDataSource, param4: number): number;
				public static CombinedTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.CombinedTileDataSource): any;
				public static SwigDirector_CombinedTileDataSource_notifyTilesChanged(param0: com.carto.datasources.CombinedTileDataSource, param1: boolean): void;
				public static SwigDirector_CombinedTileDataSource_getMaxZoom(param0: com.carto.datasources.CombinedTileDataSource): number;
				public static SwigDirector_CombinedTileDataSource_loadTile(param0: com.carto.datasources.CombinedTileDataSource, param1: number): number;
				public static CombinedTileDataSource_director_connect(param0: com.carto.datasources.CombinedTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static CombinedTileDataSource_getMaxZoomSwigExplicitCombinedTileDataSource(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_change_ownership(param0: com.carto.datasources.CombinedTileDataSource, param1: number, param2: boolean): void;
				public static delete_CombinedTileDataSource(param0: number): void;
				public static CombinedTileDataSource_getMinZoom(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public static CombinedTileDataSource_loadTileSwigExplicitCombinedTileDataSource(param0: number, param1: com.carto.datasources.CombinedTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static CombinedTileDataSource_loadTile(param0: number, param1: com.carto.datasources.CombinedTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static CombinedTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.CombinedTileDataSource): number;
				public static SwigDirector_CombinedTileDataSource_getDataExtent(param0: com.carto.datasources.CombinedTileDataSource): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class GDALRasterTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.GDALRasterTileDataSourceModuleJNI>;
				public constructor();
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
			export class GeoJSONVectorTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.GeoJSONVectorTileDataSourceModuleJNI>;
				public static SwigDirector_GeoJSONVectorTileDataSource_getMaxZoom(param0: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static GeoJSONVectorTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static SwigDirector_GeoJSONVectorTileDataSource_getDataExtent(param0: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static GeoJSONVectorTileDataSource_deleteLayer(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number): void;
				public static GeoJSONVectorTileDataSource_loadTile(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static GeoJSONVectorTileDataSource_change_ownership(param0: com.carto.datasources.GeoJSONVectorTileDataSource, param1: number, param2: boolean): void;
				public static SwigDirector_GeoJSONVectorTileDataSource_getMinZoom(param0: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static GeoJSONVectorTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static GeoJSONVectorTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource): string;
				public static delete_GeoJSONVectorTileDataSource(param0: number): void;
				public static GeoJSONVectorTileDataSource_loadTileSwigExplicitGeoJSONVectorTileDataSource(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static new_GeoJSONVectorTileDataSource(param0: number, param1: number): number;
				public static GeoJSONVectorTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public constructor();
				public static SwigDirector_GeoJSONVectorTileDataSource_loadTile(param0: com.carto.datasources.GeoJSONVectorTileDataSource, param1: number): number;
				public static GeoJSONVectorTileDataSource_getDataExtentSwigExplicitGeoJSONVectorTileDataSource(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource): number;
				public static SwigDirector_GeoJSONVectorTileDataSource_notifyTilesChanged(param0: com.carto.datasources.GeoJSONVectorTileDataSource, param1: boolean): void;
				public static GeoJSONVectorTileDataSource_setLayerGeoJSON(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: number, param4: com.carto.core.Variant): void;
				public static GeoJSONVectorTileDataSource_createLayer(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: string): number;
				public static GeoJSONVectorTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource): any;
				public static GeoJSONVectorTileDataSource_director_connect(param0: com.carto.datasources.GeoJSONVectorTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static GeoJSONVectorTileDataSource_setLayerFeatureCollection(param0: number, param1: com.carto.datasources.GeoJSONVectorTileDataSource, param2: number, param3: number, param4: com.carto.projections.Projection, param5: number, param6: com.carto.geometry.FeatureCollection): void;
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
			export class HTTPTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.HTTPTileDataSourceModuleJNI>;
				public static HTTPTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.HTTPTileDataSource): string;
				public static HTTPTileDataSource_setMaxAgeHeaderCheck(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: boolean): void;
				public static HTTPTileDataSource_director_connect(param0: com.carto.datasources.HTTPTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public constructor();
				public static HTTPTileDataSource_getHTTPHeaders(param0: number, param1: com.carto.datasources.HTTPTileDataSource): number;
				public static delete_HTTPTileDataSource(param0: number): void;
				public static HTTPTileDataSource_setTMSScheme(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: boolean): void;
				public static new_HTTPTileDataSource(param0: number, param1: number, param2: string): number;
				public static HTTPTileDataSource_isMaxAgeHeaderCheck(param0: number, param1: com.carto.datasources.HTTPTileDataSource): boolean;
				public static HTTPTileDataSource_setHTTPHeaders(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: number, param3: com.carto.core.StringMap): void;
				public static SwigDirector_HTTPTileDataSource_getMinZoom(param0: com.carto.datasources.HTTPTileDataSource): number;
				public static HTTPTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_HTTPTileDataSource_buildTileURL(param0: com.carto.datasources.HTTPTileDataSource, param1: string, param2: number): string;
				public static HTTPTileDataSource_setSubdomains(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: number, param3: com.carto.core.StringVector): void;
				public static SwigDirector_HTTPTileDataSource_getMaxZoom(param0: com.carto.datasources.HTTPTileDataSource): number;
				public static HTTPTileDataSource_getBaseURL(param0: number, param1: com.carto.datasources.HTTPTileDataSource): string;
				public static SwigDirector_HTTPTileDataSource_notifyTilesChanged(param0: com.carto.datasources.HTTPTileDataSource, param1: boolean): void;
				public static HTTPTileDataSource_loadTile(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static HTTPTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.HTTPTileDataSource): any;
				public static SwigDirector_HTTPTileDataSource_loadTile(param0: com.carto.datasources.HTTPTileDataSource, param1: number): number;
				public static HTTPTileDataSource_loadTileSwigExplicitHTTPTileDataSource(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static HTTPTileDataSource_buildTileURL(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: string, param3: number, param4: com.carto.core.MapTile): string;
				public static HTTPTileDataSource_isTMSScheme(param0: number, param1: com.carto.datasources.HTTPTileDataSource): boolean;
				public static HTTPTileDataSource_setBaseURL(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: string): void;
				public static SwigDirector_HTTPTileDataSource_getDataExtent(param0: com.carto.datasources.HTTPTileDataSource): number;
				public static HTTPTileDataSource_getSubdomains(param0: number, param1: com.carto.datasources.HTTPTileDataSource): number;
				public static HTTPTileDataSource_change_ownership(param0: com.carto.datasources.HTTPTileDataSource, param1: number, param2: boolean): void;
				public static HTTPTileDataSource_buildTileURLSwigExplicitHTTPTileDataSource(param0: number, param1: com.carto.datasources.HTTPTileDataSource, param2: string, param3: number, param4: com.carto.core.MapTile): string;
				public static HTTPTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.HTTPTileDataSource): number;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public static SwigDirector_LocalVectorDataSource_getDataExtent(param0: com.carto.datasources.LocalVectorDataSource): number;
				public static delete_LocalVectorDataSource(param0: number): void;
				public static SwigDirector_LocalVectorDataSource_loadElements(param0: com.carto.datasources.LocalVectorDataSource, param1: number): number;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
			export class MBTilesTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.MBTilesTileDataSourceModuleJNI>;
				public static new_MBTilesTileDataSource__SWIG_1(param0: number, param1: number, param2: string): number;
				public static delete_MBTilesTileDataSource(param0: number): void;
				public static SwigDirector_MBTilesTileDataSource_notifyTilesChanged(param0: com.carto.datasources.MBTilesTileDataSource, param1: boolean): void;
				public static new_MBTilesTileDataSource__SWIG_0(param0: string): number;
				public static MBTilesTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): any;
				public static MBTilesTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static MBTilesTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): number;
				public static SwigDirector_MBTilesTileDataSource_getMaxZoom(param0: com.carto.datasources.MBTilesTileDataSource): number;
				public static SwigDirector_MBTilesTileDataSource_getDataExtent(param0: com.carto.datasources.MBTilesTileDataSource): number;
				public static MBTilesTileDataSource_getDataExtentSwigExplicitMBTilesTileDataSource(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): number;
				public static MBTilesTileDataSource_getMetaData(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): number;
				public static SwigDirector_MBTilesTileDataSource_loadTile(param0: com.carto.datasources.MBTilesTileDataSource, param1: number): number;
				public constructor();
				public static new_MBTilesTileDataSource__SWIG_2(param0: number, param1: number, param2: string, param3: number): number;
				public static SwigDirector_MBTilesTileDataSource_getMinZoom(param0: com.carto.datasources.MBTilesTileDataSource): number;
				public static MBTilesTileDataSource_loadTileSwigExplicitMBTilesTileDataSource(param0: number, param1: com.carto.datasources.MBTilesTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static MBTilesTileDataSource_loadTile(param0: number, param1: com.carto.datasources.MBTilesTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static MBTilesTileDataSource_change_ownership(param0: com.carto.datasources.MBTilesTileDataSource, param1: number, param2: boolean): void;
				public static MBTilesTileDataSource_director_connect(param0: com.carto.datasources.MBTilesTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static MBTilesTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): string;
				public static MBTilesTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.MBTilesTileDataSource): number;
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
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public getCustomServiceURL(): string;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.TileDataSource;
				public swigGetClassName(): string;
				public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
				public constructor(param0: string);
				public swigGetDirectorObject(): any;
				public constructor();
				public setCustomServiceURL(param0: string): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.datasources.MapTilerOnlineTileDataSource;
				public swigTakeOwnership(): void;
				public static getCPtr(param0: com.carto.datasources.TileDataSource): number;
				public static getCPtr(param0: com.carto.datasources.MapTilerOnlineTileDataSource): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class MapTilerOnlineTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.MapTilerOnlineTileDataSourceModuleJNI>;
				public static delete_MapTilerOnlineTileDataSource(param0: number): void;
				public static MapTilerOnlineTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource): any;
				public static MapTilerOnlineTileDataSource_loadTileSwigExplicitMapTilerOnlineTileDataSource(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static MapTilerOnlineTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static MapTilerOnlineTileDataSource_setCustomServiceURL(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource, param2: string): void;
				public static SwigDirector_MapTilerOnlineTileDataSource_getMaxZoom(param0: com.carto.datasources.MapTilerOnlineTileDataSource): number;
				public static MapTilerOnlineTileDataSource_director_connect(param0: com.carto.datasources.MapTilerOnlineTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_MapTilerOnlineTileDataSource_getDataExtent(param0: com.carto.datasources.MapTilerOnlineTileDataSource): number;
				public constructor();
				public static SwigDirector_MapTilerOnlineTileDataSource_loadTile(param0: com.carto.datasources.MapTilerOnlineTileDataSource, param1: number): number;
				public static MapTilerOnlineTileDataSource_getCustomServiceURL(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource): string;
				public static new_MapTilerOnlineTileDataSource(param0: string): number;
				public static MapTilerOnlineTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource): number;
				public static MapTilerOnlineTileDataSource_change_ownership(param0: com.carto.datasources.MapTilerOnlineTileDataSource, param1: number, param2: boolean): void;
				public static MapTilerOnlineTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource): string;
				public static SwigDirector_MapTilerOnlineTileDataSource_notifyTilesChanged(param0: com.carto.datasources.MapTilerOnlineTileDataSource, param1: boolean): void;
				public static SwigDirector_MapTilerOnlineTileDataSource_getMinZoom(param0: com.carto.datasources.MapTilerOnlineTileDataSource): number;
				public static MapTilerOnlineTileDataSource_loadTile(param0: number, param1: com.carto.datasources.MapTilerOnlineTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
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
			export class MemoryCacheTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.MemoryCacheTileDataSourceModuleJNI>;
				public static SwigDirector_MemoryCacheTileDataSource_getDataExtent(param0: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static MemoryCacheTileDataSource_getCapacitySwigExplicitMemoryCacheTileDataSource(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static SwigDirector_MemoryCacheTileDataSource_loadTile(param0: com.carto.datasources.MemoryCacheTileDataSource, param1: number): number;
				public constructor();
				public static MemoryCacheTileDataSource_change_ownership(param0: com.carto.datasources.MemoryCacheTileDataSource, param1: number, param2: boolean): void;
				public static SwigDirector_MemoryCacheTileDataSource_clear(param0: com.carto.datasources.MemoryCacheTileDataSource): void;
				public static SwigDirector_MemoryCacheTileDataSource_getMinZoom(param0: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static MemoryCacheTileDataSource_clearSwigExplicitMemoryCacheTileDataSource(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): void;
				public static MemoryCacheTileDataSource_clear(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): void;
				public static SwigDirector_MemoryCacheTileDataSource_getCapacity(param0: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static SwigDirector_MemoryCacheTileDataSource_notifyTilesChanged(param0: com.carto.datasources.MemoryCacheTileDataSource, param1: boolean): void;
				public static delete_MemoryCacheTileDataSource(param0: number): void;
				public static MemoryCacheTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_MemoryCacheTileDataSource_setCapacity(param0: com.carto.datasources.MemoryCacheTileDataSource, param1: number): void;
				public static MemoryCacheTileDataSource_getCapacity(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static MemoryCacheTileDataSource_setCapacitySwigExplicitMemoryCacheTileDataSource(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource, param2: number): void;
				public static new_MemoryCacheTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static SwigDirector_MemoryCacheTileDataSource_getMaxZoom(param0: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static MemoryCacheTileDataSource_setCapacity(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource, param2: number): void;
				public static MemoryCacheTileDataSource_loadTile(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static MemoryCacheTileDataSource_director_connect(param0: com.carto.datasources.MemoryCacheTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static MemoryCacheTileDataSource_loadTileSwigExplicitMemoryCacheTileDataSource(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static MemoryCacheTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): number;
				public static MemoryCacheTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): string;
				public static MemoryCacheTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.MemoryCacheTileDataSource): any;
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
			export class MergedMBVTTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.MergedMBVTTileDataSourceModuleJNI>;
				public static MergedMBVTTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static MergedMBVTTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static MergedMBVTTileDataSource_change_ownership(param0: com.carto.datasources.MergedMBVTTileDataSource, param1: number, param2: boolean): void;
				public static SwigDirector_MergedMBVTTileDataSource_loadTile(param0: com.carto.datasources.MergedMBVTTileDataSource, param1: number): number;
				public static SwigDirector_MergedMBVTTileDataSource_notifyTilesChanged(param0: com.carto.datasources.MergedMBVTTileDataSource, param1: boolean): void;
				public static MergedMBVTTileDataSource_loadTileSwigExplicitMergedMBVTTileDataSource(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static SwigDirector_MergedMBVTTileDataSource_getMaxZoom(param0: com.carto.datasources.MergedMBVTTileDataSource): number;
				public constructor();
				public static MergedMBVTTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): any;
				public static SwigDirector_MergedMBVTTileDataSource_getDataExtent(param0: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static MergedMBVTTileDataSource_loadTile(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static MergedMBVTTileDataSource_getDataExtentSwigExplicitMergedMBVTTileDataSource(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static MergedMBVTTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static new_MergedMBVTTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.datasources.TileDataSource): number;
				public static delete_MergedMBVTTileDataSource(param0: number): void;
				public static MergedMBVTTileDataSource_getMinZoomSwigExplicitMergedMBVTTileDataSource(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static MergedMBVTTileDataSource_director_connect(param0: com.carto.datasources.MergedMBVTTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_MergedMBVTTileDataSource_getMinZoom(param0: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static MergedMBVTTileDataSource_getMinZoom(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static MergedMBVTTileDataSource_getMaxZoomSwigExplicitMergedMBVTTileDataSource(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
				public static MergedMBVTTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): string;
				public static MergedMBVTTileDataSource_getMaxZoom(param0: number, param1: com.carto.datasources.MergedMBVTTileDataSource): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class NMLModelLODTreeDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.NMLModelLODTreeDataSourceModuleJNI>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class OGRVectorDataBaseModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.OGRVectorDataBaseModuleJNI>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class OGRVectorDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.OGRVectorDataSourceModuleJNI>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class OfflineNMLModelLODTreeDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.OfflineNMLModelLODTreeDataSourceModuleJNI>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class OnlineNMLModelLODTreeDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.OnlineNMLModelLODTreeDataSourceModuleJNI>;
				public constructor();
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
			export class OrderedTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.OrderedTileDataSourceModuleJNI>;
				public static OrderedTileDataSource_getDataExtentSwigExplicitOrderedTileDataSource(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static SwigDirector_OrderedTileDataSource_getMinZoom(param0: com.carto.datasources.OrderedTileDataSource): number;
				public static OrderedTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.OrderedTileDataSource): string;
				public static SwigDirector_OrderedTileDataSource_notifyTilesChanged(param0: com.carto.datasources.OrderedTileDataSource, param1: boolean): void;
				public static OrderedTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.OrderedTileDataSource): any;
				public static OrderedTileDataSource_getMinZoomSwigExplicitOrderedTileDataSource(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static OrderedTileDataSource_getMaxZoom(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static SwigDirector_OrderedTileDataSource_getDataExtent(param0: com.carto.datasources.OrderedTileDataSource): number;
				public static SwigDirector_OrderedTileDataSource_loadTile(param0: com.carto.datasources.OrderedTileDataSource, param1: number): number;
				public static OrderedTileDataSource_loadTile(param0: number, param1: com.carto.datasources.OrderedTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public constructor();
				public static OrderedTileDataSource_loadTileSwigExplicitOrderedTileDataSource(param0: number, param1: com.carto.datasources.OrderedTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static OrderedTileDataSource_director_connect(param0: com.carto.datasources.OrderedTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static OrderedTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public static OrderedTileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static SwigDirector_OrderedTileDataSource_getMaxZoom(param0: com.carto.datasources.OrderedTileDataSource): number;
				public static OrderedTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static OrderedTileDataSource_change_ownership(param0: com.carto.datasources.OrderedTileDataSource, param1: number, param2: boolean): void;
				public static OrderedTileDataSource_getMaxZoomSwigExplicitOrderedTileDataSource(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static OrderedTileDataSource_getMinZoom(param0: number, param1: com.carto.datasources.OrderedTileDataSource): number;
				public static new_OrderedTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.datasources.TileDataSource): number;
				public static delete_OrderedTileDataSource(param0: number): void;
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
			export class PackageManagerTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.PackageManagerTileDataSourceModuleJNI>;
				public static PackageManagerTileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.PackageManagerTileDataSource): string;
				public static PackageManagerTileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.PackageManagerTileDataSource): any;
				public static PackageManagerTileDataSource_change_ownership(param0: com.carto.datasources.PackageManagerTileDataSource, param1: number, param2: boolean): void;
				public static SwigDirector_PackageManagerTileDataSource_getMaxZoom(param0: com.carto.datasources.PackageManagerTileDataSource): number;
				public static delete_PackageManagerTileDataSource(param0: number): void;
				public static SwigDirector_PackageManagerTileDataSource_notifyTilesChanged(param0: com.carto.datasources.PackageManagerTileDataSource, param1: boolean): void;
				public static PackageManagerTileDataSource_SWIGSmartPtrUpcast(param0: number): number;
				public constructor();
				public static SwigDirector_PackageManagerTileDataSource_getDataExtent(param0: com.carto.datasources.PackageManagerTileDataSource): number;
				public static PackageManagerTileDataSource_loadTileSwigExplicitPackageManagerTileDataSource(param0: number, param1: com.carto.datasources.PackageManagerTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static new_PackageManagerTileDataSource(param0: number, param1: com.carto.packagemanager.PackageManager): number;
				public static SwigDirector_PackageManagerTileDataSource_getMinZoom(param0: com.carto.datasources.PackageManagerTileDataSource): number;
				public static PackageManagerTileDataSource_director_connect(param0: com.carto.datasources.PackageManagerTileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static PackageManagerTileDataSource_getPackageManager(param0: number, param1: com.carto.datasources.PackageManagerTileDataSource): number;
				public static SwigDirector_PackageManagerTileDataSource_loadTile(param0: com.carto.datasources.PackageManagerTileDataSource, param1: number): number;
				public static PackageManagerTileDataSource_loadTile(param0: number, param1: com.carto.datasources.PackageManagerTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static PackageManagerTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.PackageManagerTileDataSource): number;
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
			export class PersistentCacheTileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.PersistentCacheTileDataSourceModuleJNI>;
				public static PersistentCacheTileDataSource_stopAllDownloads(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): void;
				public static SwigDirector_PersistentCacheTileDataSource_getMinZoom(param0: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static PersistentCacheTileDataSource_setCacheOnlyMode(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource, param2: boolean): void;
				public static SwigDirector_PersistentCacheTileDataSource_getMaxZoom(param0: com.carto.datasources.PersistentCacheTileDataSource): number;
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
				public static PersistentCacheTileDataSource_startDownloadArea(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource, param2: number, param3: com.carto.core.MapBounds, param4: number, param5: number, param6: number, param7: com.carto.datasources.TileDownloadListener): void;
				public static SwigDirector_PersistentCacheTileDataSource_getCapacity(param0: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static SwigDirector_PersistentCacheTileDataSource_setCapacity(param0: com.carto.datasources.PersistentCacheTileDataSource, param1: number): void;
				public static PersistentCacheTileDataSource_clearSwigExplicitPersistentCacheTileDataSource(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): void;
				public static SwigDirector_PersistentCacheTileDataSource_getDataExtent(param0: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static SwigDirector_PersistentCacheTileDataSource_loadTile(param0: com.carto.datasources.PersistentCacheTileDataSource, param1: number): number;
				public static PersistentCacheTileDataSource_isCacheOnlyMode(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): boolean;
				public static PersistentCacheTileDataSource_loadTileSwigExplicitPersistentCacheTileDataSource(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static PersistentCacheTileDataSource_getCapacity(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static SwigDirector_PersistentCacheTileDataSource_clear(param0: com.carto.datasources.PersistentCacheTileDataSource): void;
				public static PersistentCacheTileDataSource_loadTile(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static PersistentCacheTileDataSource_setCapacity(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource, param2: number): void;
				public static PersistentCacheTileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.PersistentCacheTileDataSource): number;
				public static SwigDirector_PersistentCacheTileDataSource_notifyTilesChanged(param0: com.carto.datasources.PersistentCacheTileDataSource, param1: boolean): void;
				public static PersistentCacheTileDataSource_change_ownership(param0: com.carto.datasources.PersistentCacheTileDataSource, param1: number, param2: boolean): void;
				public static delete_PersistentCacheTileDataSource(param0: number): void;
				public static new_PersistentCacheTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource, param2: string): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class TileDataSource extends java.lang.Object {
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
			export class TileDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.TileDataSourceModuleJNI>;
				public static TileDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.TileDataSource): any;
				public static TileDataSource_getMinZoomSwigExplicitTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static SwigDirector_TileDataSource_getMinZoom(param0: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_change_ownership(param0: com.carto.datasources.TileDataSource, param1: number, param2: boolean): void;
				public static TileDataSource_getMinZoom(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_getProjection(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static SwigDirector_TileDataSource_loadTile(param0: com.carto.datasources.TileDataSource, param1: number): number;
				public static TileDataSource_notifyTilesChangedSwigExplicitTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource, param2: boolean): void;
				public static TileDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static SwigDirector_TileDataSource_getDataExtent(param0: com.carto.datasources.TileDataSource): number;
				public constructor();
				public static TileDataSource_getMaxZoom(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_getMaxZoomSwigExplicitTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static new_TileDataSource__SWIG_0(): number;
				public static TileDataSource_director_connect(param0: com.carto.datasources.TileDataSource, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_TileDataSource_notifyTilesChanged(param0: com.carto.datasources.TileDataSource, param1: boolean): void;
				public static TileDataSource_getDataExtentSwigExplicitTileDataSource(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static new_TileDataSource__SWIG_1(param0: number, param1: number): number;
				public static delete_TileDataSource(param0: number): void;
				public static TileDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.TileDataSource): string;
				public static SwigDirector_TileDataSource_getMaxZoom(param0: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_getDataExtent(param0: number, param1: com.carto.datasources.TileDataSource): number;
				public static TileDataSource_loadTile(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.core.MapTile): number;
				public static TileDataSource_notifyTilesChanged(param0: number, param1: com.carto.datasources.TileDataSource, param2: boolean): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class TileDownloadListener extends java.lang.Object {
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
			export class TileDownloadListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.TileDownloadListenerModuleJNI>;
				public static TileDownloadListener_onDownloadCompletedSwigExplicitTileDownloadListener(param0: number, param1: com.carto.datasources.TileDownloadListener): void;
				public static TileDownloadListener_onDownloadProgress(param0: number, param1: com.carto.datasources.TileDownloadListener, param2: number): void;
				public static TileDownloadListener_swigGetClassName(param0: number, param1: com.carto.datasources.TileDownloadListener): string;
				public static TileDownloadListener_onDownloadStartingSwigExplicitTileDownloadListener(param0: number, param1: com.carto.datasources.TileDownloadListener, param2: number): void;
				public static SwigDirector_TileDownloadListener_onDownloadCompleted(param0: com.carto.datasources.TileDownloadListener): void;
				public static new_TileDownloadListener(): number;
				public static delete_TileDownloadListener(param0: number): void;
				public static TileDownloadListener_change_ownership(param0: com.carto.datasources.TileDownloadListener, param1: number, param2: boolean): void;
				public static TileDownloadListener_onDownloadFailed(param0: number, param1: com.carto.datasources.TileDownloadListener, param2: number, param3: com.carto.core.MapTile): void;
				public static TileDownloadListener_onDownloadProgressSwigExplicitTileDownloadListener(param0: number, param1: com.carto.datasources.TileDownloadListener, param2: number): void;
				public static SwigDirector_TileDownloadListener_onDownloadStarting(param0: com.carto.datasources.TileDownloadListener, param1: number): void;
				public static TileDownloadListener_onDownloadStarting(param0: number, param1: com.carto.datasources.TileDownloadListener, param2: number): void;
				public static TileDownloadListener_swigGetDirectorObject(param0: number, param1: com.carto.datasources.TileDownloadListener): any;
				public static SwigDirector_TileDownloadListener_onDownloadFailed(param0: com.carto.datasources.TileDownloadListener, param1: number): void;
				public constructor();
				public static TileDownloadListener_swigGetRawPtr(param0: number, param1: com.carto.datasources.TileDownloadListener): number;
				public static SwigDirector_TileDownloadListener_onDownloadProgress(param0: com.carto.datasources.TileDownloadListener, param1: number): void;
				public static TileDownloadListener_onDownloadFailedSwigExplicitTileDownloadListener(param0: number, param1: com.carto.datasources.TileDownloadListener, param2: number, param3: com.carto.core.MapTile): void;
				public static TileDownloadListener_onDownloadCompleted(param0: number, param1: com.carto.datasources.TileDownloadListener): void;
				public static TileDownloadListener_director_connect(param0: com.carto.datasources.TileDownloadListener, param1: number, param2: boolean, param3: boolean): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module datasources {
			export class VectorDataSource extends java.lang.Object {
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
			export class VectorDataSourceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.datasources.VectorDataSourceModuleJNI>;
				public static VectorDataSource_swigGetRawPtr(param0: number, param1: com.carto.datasources.VectorDataSource): number;
				public static VectorDataSource_change_ownership(param0: com.carto.datasources.VectorDataSource, param1: number, param2: boolean): void;
				public static delete_VectorDataSource(param0: number): void;
				public static VectorDataSource_loadElements(param0: number, param1: com.carto.datasources.VectorDataSource, param2: number, param3: com.carto.renderers.components.CullState): number;
				public static SwigDirector_VectorDataSource_loadElements(param0: com.carto.datasources.VectorDataSource, param1: number): number;
				public static SwigDirector_VectorDataSource_getDataExtent(param0: com.carto.datasources.VectorDataSource): number;
				public static VectorDataSource_getDataExtentSwigExplicitVectorDataSource(param0: number, param1: com.carto.datasources.VectorDataSource): number;
				public static VectorDataSource_getDataExtent(param0: number, param1: com.carto.datasources.VectorDataSource): number;
				public static new_VectorDataSource(param0: number, param1: com.carto.projections.Projection): number;
				public constructor();
				public static VectorDataSource_swigGetClassName(param0: number, param1: com.carto.datasources.VectorDataSource): string;
				public static VectorDataSource_swigGetDirectorObject(param0: number, param1: com.carto.datasources.VectorDataSource): any;
				public static VectorDataSource_notifyElementsChanged(param0: number, param1: com.carto.datasources.VectorDataSource): void;
				public static VectorDataSource_getProjection(param0: number, param1: com.carto.datasources.VectorDataSource): number;
				public static VectorDataSource_director_connect(param0: com.carto.datasources.VectorDataSource, param1: number, param2: boolean, param3: boolean): void;
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
		export module datasources {
			export module components {
				export class TileDataModuleJNI extends java.lang.Object {
					public static class: java.lang.Class<com.carto.datasources.components.TileDataModuleJNI>;
					public static TileData_setReplaceWithParent(param0: number, param1: com.carto.datasources.components.TileData, param2: boolean): void;
					public static TileData_swigGetRawPtr(param0: number, param1: com.carto.datasources.components.TileData): number;
					public constructor();
					public static TileData_getData(param0: number, param1: com.carto.datasources.components.TileData): number;
					public static TileData_setMaxAge(param0: number, param1: com.carto.datasources.components.TileData, param2: number): void;
					public static new_TileData(param0: number, param1: com.carto.core.BinaryData): number;
					public static delete_TileData(param0: number): void;
					public static TileData_getMaxAge(param0: number, param1: com.carto.datasources.components.TileData): number;
					public static TileData_isReplaceWithParent(param0: number, param1: com.carto.datasources.components.TileData): boolean;
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
		export module datasources {
			export module components {
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

declare module com {
	export module carto {
		export module geocoding {
			export class GeocodingAddress extends com.carto.core.Address {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingAddress>;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: com.carto.core.StringVector);
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.core.Address): number;
				public delete(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.geocoding.GeocodingAddress): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module geocoding {
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

declare module com {
	export module carto {
		export module geocoding {
			export class GeocodingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingRequest>;
				public swigCMemOwn: boolean;
				public getProjection(): com.carto.projections.Projection;
				public static getCPtr(param0: com.carto.geocoding.GeocodingRequest): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public setLocation(param0: com.carto.core.MapPos): void;
				public getCustomParameter(param0: string): com.carto.core.Variant;
				public setCustomParameter(param0: string, param1: com.carto.core.Variant): void;
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

declare module com {
	export module carto {
		export module geocoding {
			export class GeocodingResult extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingResult>;
				public swigCMemOwn: boolean;
				public getProjection(): com.carto.projections.Projection;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getAddress(): com.carto.geocoding.GeocodingAddress;
				public toString(): string;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.geocoding.GeocodingResult): number;
				public delete(): void;
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

declare module com {
	export module carto {
		export module geocoding {
			export class GeocodingResultVector extends java.lang.Object {
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
			export class GeocodingService extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingService>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public setAutocomplete(param0: boolean): void;
				public isAutocomplete(): boolean;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public calculateAddresses(param0: com.carto.geocoding.GeocodingRequest): com.carto.geocoding.GeocodingResultVector;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.geocoding.GeocodingService): number;
				public setLanguage(param0: string): void;
				public setMaxResults(param0: number): void;
				public delete(): void;
				public getMaxResults(): number;
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
			export class GeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.GeocodingServiceModuleJNI>;
				public static GeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.GeocodingService, param2: boolean): void;
				public static GeocodingService_isAutocomplete(param0: number, param1: com.carto.geocoding.GeocodingService): boolean;
				public static SwigDirector_GeocodingService_calculateAddresses(param0: com.carto.geocoding.GeocodingService, param1: number): number;
				public static GeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.GeocodingService): string;
				public static GeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.GeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static GeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.GeocodingService): string;
				public constructor();
				public static delete_GeocodingService(param0: number): void;
				public static new_GeocodingService(): number;
				public static GeocodingService_change_ownership(param0: com.carto.geocoding.GeocodingService, param1: number, param2: boolean): void;
				public static SwigDirector_GeocodingService_getLanguage(param0: com.carto.geocoding.GeocodingService): string;
				public static SwigDirector_GeocodingService_getMaxResults(param0: com.carto.geocoding.GeocodingService): number;
				public static GeocodingService_director_connect(param0: com.carto.geocoding.GeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static GeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.GeocodingService, param2: string): void;
				public static SwigDirector_GeocodingService_setAutocomplete(param0: com.carto.geocoding.GeocodingService, param1: boolean): void;
				public static SwigDirector_GeocodingService_setLanguage(param0: com.carto.geocoding.GeocodingService, param1: string): void;
				public static GeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.GeocodingService): number;
				public static SwigDirector_GeocodingService_isAutocomplete(param0: com.carto.geocoding.GeocodingService): boolean;
				public static GeocodingService_setMaxResults(param0: number, param1: com.carto.geocoding.GeocodingService, param2: number): void;
				public static GeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.GeocodingService): number;
				public static GeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.GeocodingService): any;
				public static SwigDirector_GeocodingService_setMaxResults(param0: com.carto.geocoding.GeocodingService, param1: number): void;
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
				public setMaxResults(param0: number): void;
				public static getCPtr(param0: com.carto.geocoding.MapBoxOnlineGeocodingService): number;
				public delete(): void;
				public getMaxResults(): number;
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
			export class MapBoxOnlineGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.MapBoxOnlineGeocodingServiceModuleJNI>;
				public static MapBoxOnlineGeocodingService_getLanguageSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): string;
				public static MapBoxOnlineGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: string): void;
				public static MapBoxOnlineGeocodingService_director_connect(param0: com.carto.geocoding.MapBoxOnlineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_MapBoxOnlineGeocodingService_getLanguage(param0: com.carto.geocoding.MapBoxOnlineGeocodingService): string;
				public static MapBoxOnlineGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static MapBoxOnlineGeocodingService_getMaxResultsSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): number;
				public static MapBoxOnlineGeocodingService_change_ownership(param0: com.carto.geocoding.MapBoxOnlineGeocodingService, param1: number, param2: boolean): void;
				public constructor();
				public static SwigDirector_MapBoxOnlineGeocodingService_calculateAddresses(param0: com.carto.geocoding.MapBoxOnlineGeocodingService, param1: number): number;
				public static SwigDirector_MapBoxOnlineGeocodingService_getMaxResults(param0: com.carto.geocoding.MapBoxOnlineGeocodingService): number;
				public static new_MapBoxOnlineGeocodingService(param0: string): number;
				public static MapBoxOnlineGeocodingService_setMaxResults(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: number): void;
				public static SwigDirector_MapBoxOnlineGeocodingService_isAutocomplete(param0: com.carto.geocoding.MapBoxOnlineGeocodingService): boolean;
				public static MapBoxOnlineGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): string;
				public static MapBoxOnlineGeocodingService_setAutocompleteSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: boolean): void;
				public static MapBoxOnlineGeocodingService_setMaxResultsSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: number): void;
				public static MapBoxOnlineGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static MapBoxOnlineGeocodingService_isAutocomplete(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): boolean;
				public static SwigDirector_MapBoxOnlineGeocodingService_setLanguage(param0: com.carto.geocoding.MapBoxOnlineGeocodingService, param1: string): void;
				public static MapBoxOnlineGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): number;
				public static MapBoxOnlineGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): any;
				public static MapBoxOnlineGeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: boolean): void;
				public static MapBoxOnlineGeocodingService_getCustomServiceURL(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): string;
				public static delete_MapBoxOnlineGeocodingService(param0: number): void;
				public static MapBoxOnlineGeocodingService_isAutocompleteSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): boolean;
				public static MapBoxOnlineGeocodingService_setCustomServiceURL(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: string): void;
				public static MapBoxOnlineGeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): number;
				public static SwigDirector_MapBoxOnlineGeocodingService_setMaxResults(param0: com.carto.geocoding.MapBoxOnlineGeocodingService, param1: number): void;
				public static MapBoxOnlineGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService): string;
				public static MapBoxOnlineGeocodingService_calculateAddressesSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static SwigDirector_MapBoxOnlineGeocodingService_setAutocomplete(param0: com.carto.geocoding.MapBoxOnlineGeocodingService, param1: boolean): void;
				public static MapBoxOnlineGeocodingService_setLanguageSwigExplicitMapBoxOnlineGeocodingService(param0: number, param1: com.carto.geocoding.MapBoxOnlineGeocodingService, param2: string): void;
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
			export class MapBoxOnlineReverseGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.MapBoxOnlineReverseGeocodingServiceModuleJNI>;
				public static MapBoxOnlineReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, param2: string): void;
				public static MapBoxOnlineReverseGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): string;
				public static SwigDirector_MapBoxOnlineReverseGeocodingService_getLanguage(param0: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): string;
				public static MapBoxOnlineReverseGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static SwigDirector_MapBoxOnlineReverseGeocodingService_calculateAddresses(param0: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, param1: number): number;
				public static MapBoxOnlineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static MapBoxOnlineReverseGeocodingService_setCustomServiceURL(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, param2: string): void;
				public static delete_MapBoxOnlineReverseGeocodingService(param0: number): void;
				public static MapBoxOnlineReverseGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.MapBoxOnlineReverseGeocodingService): number;
				public static SwigDirector_MapBoxOnlineReverseGeocodingService_setLanguage(param0: com.carto.geocoding.MapBoxOnlineReverseGeocodingService, param1: string): void;
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
				public setMaxResults(param0: number): void;
				public delete(): void;
				public getMaxResults(): number;
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
			export class OSMOfflineGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.OSMOfflineGeocodingServiceModuleJNI>;
				public static OSMOfflineGeocodingService_calculateAddressesSwigExplicitOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static OSMOfflineGeocodingService_getMaxResultsSwigExplicitOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): number;
				public static OSMOfflineGeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): number;
				public static SwigDirector_OSMOfflineGeocodingService_setAutocomplete(param0: com.carto.geocoding.OSMOfflineGeocodingService, param1: boolean): void;
				public static OSMOfflineGeocodingService_isAutocompleteSwigExplicitOSMOfflineGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): boolean;
				public static OSMOfflineGeocodingService_change_ownership(param0: com.carto.geocoding.OSMOfflineGeocodingService, param1: number, param2: boolean): void;
				public static OSMOfflineGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): string;
				public static SwigDirector_OSMOfflineGeocodingService_setMaxResults(param0: com.carto.geocoding.OSMOfflineGeocodingService, param1: number): void;
				public constructor();
				public static SwigDirector_OSMOfflineGeocodingService_getLanguage(param0: com.carto.geocoding.OSMOfflineGeocodingService): string;
				public static SwigDirector_OSMOfflineGeocodingService_isAutocomplete(param0: com.carto.geocoding.OSMOfflineGeocodingService): boolean;
				public static OSMOfflineGeocodingService_director_connect(param0: com.carto.geocoding.OSMOfflineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static OSMOfflineGeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService, param2: boolean): void;
				public static OSMOfflineGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.OSMOfflineGeocodingService): string;
				public static SwigDirector_OSMOfflineGeocodingService_calculateAddresses(param0: com.carto.geocoding.OSMOfflineGeocodingService, param1: number): number;
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
				public static SwigDirector_OSMOfflineGeocodingService_setLanguage(param0: com.carto.geocoding.OSMOfflineGeocodingService, param1: string): void;
				public static SwigDirector_OSMOfflineGeocodingService_getMaxResults(param0: com.carto.geocoding.OSMOfflineGeocodingService): number;
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
			export class OSMOfflineReverseGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.OSMOfflineReverseGeocodingServiceModuleJNI>;
				public static OSMOfflineReverseGeocodingService_getLanguageSwigExplicitOSMOfflineReverseGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService): string;
				public static OSMOfflineReverseGeocodingService_change_ownership(param0: com.carto.geocoding.OSMOfflineReverseGeocodingService, param1: number, param2: boolean): void;
				public static OSMOfflineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static OSMOfflineReverseGeocodingService_director_connect(param0: com.carto.geocoding.OSMOfflineReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static delete_OSMOfflineReverseGeocodingService(param0: number): void;
				public static new_OSMOfflineReverseGeocodingService(param0: string): number;
				public static SwigDirector_OSMOfflineReverseGeocodingService_getLanguage(param0: com.carto.geocoding.OSMOfflineReverseGeocodingService): string;
				public constructor();
				public static OSMOfflineReverseGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService): number;
				public static SwigDirector_OSMOfflineReverseGeocodingService_setLanguage(param0: com.carto.geocoding.OSMOfflineReverseGeocodingService, param1: string): void;
				public static SwigDirector_OSMOfflineReverseGeocodingService_calculateAddresses(param0: com.carto.geocoding.OSMOfflineReverseGeocodingService, param1: number): number;
				public static OSMOfflineReverseGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService): string;
				public static OSMOfflineReverseGeocodingService_calculateAddressesSwigExplicitOSMOfflineReverseGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static OSMOfflineReverseGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService): any;
				public static OSMOfflineReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService, param2: string): void;
				public static OSMOfflineReverseGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static OSMOfflineReverseGeocodingService_setLanguageSwigExplicitOSMOfflineReverseGeocodingService(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService, param2: string): void;
				public static OSMOfflineReverseGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.OSMOfflineReverseGeocodingService): string;
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
				public setMaxResults(param0: number): void;
				public delete(): void;
				public getMaxResults(): number;
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
			export class PackageManagerGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.PackageManagerGeocodingServiceModuleJNI>;
				public static PackageManagerGeocodingService_getLanguageSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): string;
				public static PackageManagerGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: string): void;
				public static PackageManagerGeocodingService_getMaxResultsSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): number;
				public static PackageManagerGeocodingService_change_ownership(param0: com.carto.geocoding.PackageManagerGeocodingService, param1: number, param2: boolean): void;
				public static PackageManagerGeocodingService_setMaxResultsSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: number): void;
				public static PackageManagerGeocodingService_isAutocompleteSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): boolean;
				public static PackageManagerGeocodingService_director_connect(param0: com.carto.geocoding.PackageManagerGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static PackageManagerGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): string;
				public static SwigDirector_PackageManagerGeocodingService_getMaxResults(param0: com.carto.geocoding.PackageManagerGeocodingService): number;
				public static new_PackageManagerGeocodingService(param0: number, param1: com.carto.packagemanager.PackageManager): number;
				public static SwigDirector_PackageManagerGeocodingService_isAutocomplete(param0: com.carto.geocoding.PackageManagerGeocodingService): boolean;
				public constructor();
				public static PackageManagerGeocodingService_calculateAddressesSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static PackageManagerGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): number;
				public static PackageManagerGeocodingService_isAutocomplete(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): boolean;
				public static PackageManagerGeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: boolean): void;
				public static PackageManagerGeocodingService_setMaxResults(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: number): void;
				public static PackageManagerGeocodingService_setAutocompleteSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: boolean): void;
				public static PackageManagerGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static PackageManagerGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): string;
				public static delete_PackageManagerGeocodingService(param0: number): void;
				public static SwigDirector_PackageManagerGeocodingService_calculateAddresses(param0: com.carto.geocoding.PackageManagerGeocodingService, param1: number): number;
				public static SwigDirector_PackageManagerGeocodingService_setAutocomplete(param0: com.carto.geocoding.PackageManagerGeocodingService, param1: boolean): void;
				public static PackageManagerGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): any;
				public static PackageManagerGeocodingService_setLanguageSwigExplicitPackageManagerGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: string): void;
				public static PackageManagerGeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService): number;
				public static SwigDirector_PackageManagerGeocodingService_setLanguage(param0: com.carto.geocoding.PackageManagerGeocodingService, param1: string): void;
				public static SwigDirector_PackageManagerGeocodingService_setMaxResults(param0: com.carto.geocoding.PackageManagerGeocodingService, param1: number): void;
				public static SwigDirector_PackageManagerGeocodingService_getLanguage(param0: com.carto.geocoding.PackageManagerGeocodingService): string;
				public static PackageManagerGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.PackageManagerGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
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
				public static new_PackageManagerReverseGeocodingService(param0: number, param1: com.carto.packagemanager.PackageManager): number;
				public static SwigDirector_PackageManagerReverseGeocodingService_calculateAddresses(param0: com.carto.geocoding.PackageManagerReverseGeocodingService, param1: number): number;
				public static SwigDirector_PackageManagerReverseGeocodingService_getLanguage(param0: com.carto.geocoding.PackageManagerReverseGeocodingService): string;
				public static PackageManagerReverseGeocodingService_getLanguageSwigExplicitPackageManagerReverseGeocodingService(param0: number, param1: com.carto.geocoding.PackageManagerReverseGeocodingService): string;
				public static PackageManagerReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static PackageManagerReverseGeocodingService_change_ownership(param0: com.carto.geocoding.PackageManagerReverseGeocodingService, param1: number, param2: boolean): void;
				public static SwigDirector_PackageManagerReverseGeocodingService_setLanguage(param0: com.carto.geocoding.PackageManagerReverseGeocodingService, param1: string): void;
				public static delete_PackageManagerReverseGeocodingService(param0: number): void;
				public static PackageManagerReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.PackageManagerReverseGeocodingService, param2: string): void;
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
				public setMaxResults(param0: number): void;
				public delete(): void;
				public getMaxResults(): number;
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
			export class PeliasOnlineGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.PeliasOnlineGeocodingServiceModuleJNI>;
				public static PeliasOnlineGeocodingService_setMaxResultsSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: number): void;
				public static delete_PeliasOnlineGeocodingService(param0: number): void;
				public static PeliasOnlineGeocodingService_change_ownership(param0: com.carto.geocoding.PeliasOnlineGeocodingService, param1: number, param2: boolean): void;
				public static PeliasOnlineGeocodingService_isAutocomplete(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): boolean;
				public static PeliasOnlineGeocodingService_getCustomServiceURL(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): string;
				public static PeliasOnlineGeocodingService_setMaxResults(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: number): void;
				public static PeliasOnlineGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static new_PeliasOnlineGeocodingService(param0: string): number;
				public constructor();
				public static PeliasOnlineGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): any;
				public static PeliasOnlineGeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: boolean): void;
				public static SwigDirector_PeliasOnlineGeocodingService_isAutocomplete(param0: com.carto.geocoding.PeliasOnlineGeocodingService): boolean;
				public static PeliasOnlineGeocodingService_calculateAddressesSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static PeliasOnlineGeocodingService_director_connect(param0: com.carto.geocoding.PeliasOnlineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static PeliasOnlineGeocodingService_getLanguageSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): string;
				public static SwigDirector_PeliasOnlineGeocodingService_setMaxResults(param0: com.carto.geocoding.PeliasOnlineGeocodingService, param1: number): void;
				public static SwigDirector_PeliasOnlineGeocodingService_setLanguage(param0: com.carto.geocoding.PeliasOnlineGeocodingService, param1: string): void;
				public static SwigDirector_PeliasOnlineGeocodingService_getMaxResults(param0: com.carto.geocoding.PeliasOnlineGeocodingService): number;
				public static PeliasOnlineGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: string): void;
				public static PeliasOnlineGeocodingService_getMaxResultsSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): number;
				public static PeliasOnlineGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static PeliasOnlineGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): string;
				public static SwigDirector_PeliasOnlineGeocodingService_setAutocomplete(param0: com.carto.geocoding.PeliasOnlineGeocodingService, param1: boolean): void;
				public static PeliasOnlineGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): string;
				public static PeliasOnlineGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): number;
				public static PeliasOnlineGeocodingService_isAutocompleteSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): boolean;
				public static SwigDirector_PeliasOnlineGeocodingService_getLanguage(param0: com.carto.geocoding.PeliasOnlineGeocodingService): string;
				public static PeliasOnlineGeocodingService_setAutocompleteSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: boolean): void;
				public static SwigDirector_PeliasOnlineGeocodingService_calculateAddresses(param0: com.carto.geocoding.PeliasOnlineGeocodingService, param1: number): number;
				public static PeliasOnlineGeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService): number;
				public static PeliasOnlineGeocodingService_setCustomServiceURL(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: string): void;
				public static PeliasOnlineGeocodingService_setLanguageSwigExplicitPeliasOnlineGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineGeocodingService, param2: string): void;
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
			export class PeliasOnlineReverseGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.PeliasOnlineReverseGeocodingServiceModuleJNI>;
				public static PeliasOnlineReverseGeocodingService_setLanguageSwigExplicitPeliasOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param2: string): void;
				public static PeliasOnlineReverseGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService): number;
				public static SwigDirector_PeliasOnlineReverseGeocodingService_calculateAddresses(param0: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param1: number): number;
				public static PeliasOnlineReverseGeocodingService_change_ownership(param0: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param1: number, param2: boolean): void;
				public static PeliasOnlineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static delete_PeliasOnlineReverseGeocodingService(param0: number): void;
				public static PeliasOnlineReverseGeocodingService_calculateAddressesSwigExplicitPeliasOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static SwigDirector_PeliasOnlineReverseGeocodingService_getLanguage(param0: com.carto.geocoding.PeliasOnlineReverseGeocodingService): string;
				public static PeliasOnlineReverseGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public constructor();
				public static PeliasOnlineReverseGeocodingService_getCustomServiceURL(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService): string;
				public static new_PeliasOnlineReverseGeocodingService(param0: string): number;
				public static PeliasOnlineReverseGeocodingService_director_connect(param0: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static PeliasOnlineReverseGeocodingService_setCustomServiceURL(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param2: string): void;
				public static PeliasOnlineReverseGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService): any;
				public static PeliasOnlineReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param2: string): void;
				public static SwigDirector_PeliasOnlineReverseGeocodingService_setLanguage(param0: com.carto.geocoding.PeliasOnlineReverseGeocodingService, param1: string): void;
				public static PeliasOnlineReverseGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService): string;
				public static PeliasOnlineReverseGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService): string;
				public static PeliasOnlineReverseGeocodingService_getLanguageSwigExplicitPeliasOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.PeliasOnlineReverseGeocodingService): string;
			}
		}
	}
}

declare module com {
	export module carto {
		export module geocoding {
			export class ReverseGeocodingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.ReverseGeocodingRequest>;
				public swigCMemOwn: boolean;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPos);
				public getProjection(): com.carto.projections.Projection;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public setSearchRadius(param0: number): void;
				public getCustomParameter(param0: string): com.carto.core.Variant;
				public setCustomParameter(param0: string, param1: com.carto.core.Variant): void;
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

declare module com {
	export module carto {
		export module geocoding {
			export class ReverseGeocodingService extends java.lang.Object {
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
			export class ReverseGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.ReverseGeocodingServiceModuleJNI>;
				public static ReverseGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.ReverseGeocodingService): number;
				public static ReverseGeocodingService_change_ownership(param0: com.carto.geocoding.ReverseGeocodingService, param1: number, param2: boolean): void;
				public static SwigDirector_ReverseGeocodingService_setLanguage(param0: com.carto.geocoding.ReverseGeocodingService, param1: string): void;
				public static ReverseGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.ReverseGeocodingService): string;
				public constructor();
				public static ReverseGeocodingService_director_connect(param0: com.carto.geocoding.ReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_ReverseGeocodingService_getLanguage(param0: com.carto.geocoding.ReverseGeocodingService): string;
				public static ReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.ReverseGeocodingService, param2: string): void;
				public static delete_ReverseGeocodingService(param0: number): void;
				public static ReverseGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.ReverseGeocodingService): any;
				public static ReverseGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.ReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static SwigDirector_ReverseGeocodingService_calculateAddresses(param0: com.carto.geocoding.ReverseGeocodingService, param1: number): number;
				public static ReverseGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.ReverseGeocodingService): string;
				public static new_ReverseGeocodingService(): number;
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
				public setMaxResults(param0: number): void;
				public delete(): void;
				public getMaxResults(): number;
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
			export class TomTomOnlineGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.TomTomOnlineGeocodingServiceModuleJNI>;
				public static new_TomTomOnlineGeocodingService(param0: string): number;
				public static TomTomOnlineGeocodingService_getMaxResultsSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): number;
				public static SwigDirector_TomTomOnlineGeocodingService_isAutocomplete(param0: com.carto.geocoding.TomTomOnlineGeocodingService): boolean;
				public static TomTomOnlineGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): string;
				public static SwigDirector_TomTomOnlineGeocodingService_getMaxResults(param0: com.carto.geocoding.TomTomOnlineGeocodingService): number;
				public static TomTomOnlineGeocodingService_getMaxResults(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): number;
				public static SwigDirector_TomTomOnlineGeocodingService_getLanguage(param0: com.carto.geocoding.TomTomOnlineGeocodingService): string;
				public static TomTomOnlineGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
				public static TomTomOnlineGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): any;
				public constructor();
				public static SwigDirector_TomTomOnlineGeocodingService_setMaxResults(param0: com.carto.geocoding.TomTomOnlineGeocodingService, param1: number): void;
				public static SwigDirector_TomTomOnlineGeocodingService_calculateAddresses(param0: com.carto.geocoding.TomTomOnlineGeocodingService, param1: number): number;
				public static TomTomOnlineGeocodingService_isAutocompleteSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): boolean;
				public static TomTomOnlineGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: string): void;
				public static TomTomOnlineGeocodingService_director_connect(param0: com.carto.geocoding.TomTomOnlineGeocodingService, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_TomTomOnlineGeocodingService_setAutocomplete(param0: com.carto.geocoding.TomTomOnlineGeocodingService, param1: boolean): void;
				public static TomTomOnlineGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): string;
				public static TomTomOnlineGeocodingService_change_ownership(param0: com.carto.geocoding.TomTomOnlineGeocodingService, param1: number, param2: boolean): void;
				public static TomTomOnlineGeocodingService_setMaxResultsSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: number): void;
				public static TomTomOnlineGeocodingService_isAutocomplete(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): boolean;
				public static TomTomOnlineGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): number;
				public static TomTomOnlineGeocodingService_setCustomServiceURL(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: string): void;
				public static TomTomOnlineGeocodingService_setAutocomplete(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: boolean): void;
				public static delete_TomTomOnlineGeocodingService(param0: number): void;
				public static TomTomOnlineGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static TomTomOnlineGeocodingService_setAutocompleteSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: boolean): void;
				public static TomTomOnlineGeocodingService_setLanguageSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: string): void;
				public static TomTomOnlineGeocodingService_getLanguageSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): string;
				public static TomTomOnlineGeocodingService_getCustomServiceURL(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService): string;
				public static SwigDirector_TomTomOnlineGeocodingService_setLanguage(param0: com.carto.geocoding.TomTomOnlineGeocodingService, param1: string): void;
				public static TomTomOnlineGeocodingService_setMaxResults(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: number): void;
				public static TomTomOnlineGeocodingService_calculateAddressesSwigExplicitTomTomOnlineGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineGeocodingService, param2: number, param3: com.carto.geocoding.GeocodingRequest): number;
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
		export module geocoding {
			export class TomTomOnlineReverseGeocodingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geocoding.TomTomOnlineReverseGeocodingServiceModuleJNI>;
				public static SwigDirector_TomTomOnlineReverseGeocodingService_setLanguage(param0: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param1: string): void;
				public static TomTomOnlineReverseGeocodingService_getLanguageSwigExplicitTomTomOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService): string;
				public static TomTomOnlineReverseGeocodingService_swigGetRawPtr(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService): number;
				public static TomTomOnlineReverseGeocodingService_getLanguage(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService): string;
				public static TomTomOnlineReverseGeocodingService_calculateAddressesSwigExplicitTomTomOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static TomTomOnlineReverseGeocodingService_setLanguage(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param2: string): void;
				public static TomTomOnlineReverseGeocodingService_setCustomServiceURL(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param2: string): void;
				public static TomTomOnlineReverseGeocodingService_SWIGSmartPtrUpcast(param0: number): number;
				public static new_TomTomOnlineReverseGeocodingService(param0: string): number;
				public constructor();
				public static SwigDirector_TomTomOnlineReverseGeocodingService_getLanguage(param0: com.carto.geocoding.TomTomOnlineReverseGeocodingService): string;
				public static TomTomOnlineReverseGeocodingService_calculateAddresses(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param2: number, param3: com.carto.geocoding.ReverseGeocodingRequest): number;
				public static SwigDirector_TomTomOnlineReverseGeocodingService_calculateAddresses(param0: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param1: number): number;
				public static delete_TomTomOnlineReverseGeocodingService(param0: number): void;
				public static TomTomOnlineReverseGeocodingService_setLanguageSwigExplicitTomTomOnlineReverseGeocodingService(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param2: string): void;
				public static TomTomOnlineReverseGeocodingService_swigGetClassName(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService): string;
				public static TomTomOnlineReverseGeocodingService_change_ownership(param0: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param1: number, param2: boolean): void;
				public static TomTomOnlineReverseGeocodingService_getCustomServiceURL(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService): string;
				public static TomTomOnlineReverseGeocodingService_swigGetDirectorObject(param0: number, param1: com.carto.geocoding.TomTomOnlineReverseGeocodingService): any;
				public static TomTomOnlineReverseGeocodingService_director_connect(param0: com.carto.geocoding.TomTomOnlineReverseGeocodingService, param1: number, param2: boolean, param3: boolean): void;
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

declare module com {
	export module carto {
		export module geometry {
			export class Feature extends java.lang.Object {
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
			export class FeatureBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.geometry.FeatureBuilder>;
				public swigCMemOwn: boolean;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.FeatureBuilder;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.geometry.FeatureBuilder): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public getPropertyValue(param0: string): com.carto.core.Variant;
				public delete(): void;
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

declare module com {
	export module carto {
		export module geometry {
			export class FeatureCollection extends java.lang.Object {
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

declare module com {
	export module carto {
		export module geometry {
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

declare module com {
	export module carto {
		export module geometry {
			export class FeatureVector extends java.lang.Object {
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
			export class GeoJSONGeometryReader extends java.lang.Object {
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

declare module com {
	export module carto {
		export module geometry {
			export class GeoJSONGeometryWriter extends java.lang.Object {
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

declare module com {
	export module carto {
		export module geometry {
			export class Geometry extends java.lang.Object {
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

declare module com {
	export module carto {
		export module geometry {
			export class GeometrySimplifier extends java.lang.Object {
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

declare module com {
	export module carto {
		export module geometry {
			export class GeometryVector extends java.lang.Object {
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

declare module com {
	export module carto {
		export module geometry {
			export class LineGeometryVector extends java.lang.Object {
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

declare module com {
	export module carto {
		export module geometry {
			export class PointGeometryVector extends java.lang.Object {
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

declare module com {
	export module carto {
		export module geometry {
			export class PolygonGeometryVector extends java.lang.Object {
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
			export class VectorTileFeatureBuilder extends com.carto.geometry.FeatureBuilder {
				public static class: java.lang.Class<com.carto.geometry.VectorTileFeatureBuilder>;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.VectorTileFeatureBuilder;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.geometry.FeatureBuilder;
				public getId(): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public buildVectorTileFeature(): com.carto.geometry.VectorTileFeature;
				public getLayerName(): string;
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.geometry.FeatureBuilder): number;
				public static getCPtr(param0: com.carto.geometry.VectorTileFeatureBuilder): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
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

declare module com {
	export module carto {
		export module geometry {
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
				public static VectorTileFeatureVector_add(param0: number, param1: com.carto.geometry.VectorTileFeatureVector, param2: number, param3: com.carto.geometry.VectorTileFeature): void;
				public static delete_VectorTileFeature(param0: number): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module geometry {
			export class VectorTileFeatureVector extends java.lang.Object {
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
			export class WKBGeometryReader extends java.lang.Object {
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

declare module com {
	export module carto {
		export module geometry {
			export class WKBGeometryWriter extends java.lang.Object {
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

declare module com {
	export module carto {
		export module geometry {
			export class WKTGeometryReader extends java.lang.Object {
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

declare module com {
	export module carto {
		export module geometry {
			export class WKTGeometryWriter extends java.lang.Object {
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
		export module geometry {
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

declare module com {
	export module carto {
		export module graphics {
			export class Bitmap extends java.lang.Object {
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
				public compressToPNG(): com.carto.core.BinaryData;
			}
		}
	}
}

declare module com {
	export module carto {
		export module graphics {
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

declare module com {
	export module carto {
		export module graphics {
			export class Color extends java.lang.Object {
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
				public static values(): androidNative.Array<com.carto.graphics.ColorFormat>;
				public swigValue(): number;
				public static swigToEnum(param0: number): com.carto.graphics.ColorFormat;
				public static valueOf(param0: string): com.carto.graphics.ColorFormat;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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

declare module com {
	export module carto {
		export module graphics {
			export class ViewState extends java.lang.Object {
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
		export module graphics {
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
			export class CartoOfflineVectorTileLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.CartoOfflineVectorTileLayerModuleJNI>;
				public static new_CartoOfflineVectorTileLayer__SWIG_0(param0: number, param1: com.carto.packagemanager.CartoPackageManager, param2: number): number;
				public static new_CartoOfflineVectorTileLayer__SWIG_1(param0: number, param1: com.carto.packagemanager.CartoPackageManager, param2: number, param3: com.carto.utils.AssetPackage): number;
				public static CartoOfflineVectorTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.CartoOfflineVectorTileLayer): number;
				public static CartoOfflineVectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
				public static delete_CartoOfflineVectorTileLayer(param0: number): void;
				public static CartoOfflineVectorTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.CartoOfflineVectorTileLayer): string;
				public constructor();
				public static CartoOfflineVectorTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.CartoOfflineVectorTileLayer): any;
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
			export class CartoOnlineRasterTileLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.CartoOnlineRasterTileLayerModuleJNI>;
				public static delete_CartoOnlineRasterTileLayer(param0: number): void;
				public static CartoOnlineRasterTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.CartoOnlineRasterTileLayer): string;
				public static CartoOnlineRasterTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.CartoOnlineRasterTileLayer): number;
				public static CartoOnlineRasterTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.CartoOnlineRasterTileLayer): any;
				public static new_CartoOnlineRasterTileLayer(param0: string): number;
				public static CartoOnlineRasterTileLayer_SWIGSmartPtrUpcast(param0: number): number;
				public constructor();
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
			export class CartoOnlineVectorTileLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.CartoOnlineVectorTileLayerModuleJNI>;
				public static CartoOnlineVectorTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.CartoOnlineVectorTileLayer): number;
				public static new_CartoOnlineVectorTileLayer__SWIG_0(param0: number): number;
				public static CartoOnlineVectorTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.CartoOnlineVectorTileLayer): any;
				public static delete_CartoOnlineVectorTileLayer(param0: number): void;
				public static CartoOnlineVectorTileLayer_createDataSource(param0: number): number;
				public static new_CartoOnlineVectorTileLayer__SWIG_1(param0: string, param1: number): number;
				public static new_CartoOnlineVectorTileLayer__SWIG_2(param0: string, param1: number, param2: com.carto.utils.AssetPackage): number;
				public static CartoOnlineVectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
				public constructor();
				public static CartoOnlineVectorTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.CartoOnlineVectorTileLayer): string;
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
				public static getCPtr(param0: com.carto.layers.TileLayer): number;
				public getBuildingRenderMode(): com.carto.layers.CartoBaseMapBuildingRenderMode;
				public finalize(): void;
				public static getCPtr(param0: com.carto.layers.CartoVectorTileLayer): number;
				public delete(): void;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.utils.AssetPackage, param2: string);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.CartoVectorTileLayer;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileLayer;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
				public getFallbackLanguage(): string;
				public setPOIRenderMode(param0: com.carto.layers.CartoBaseMapPOIRenderMode): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.layers.VectorTileLayer): number;
				public static createTileDecoder(param0: com.carto.utils.AssetPackage): com.carto.vectortiles.VectorTileDecoder;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
				public swigGetRawPtr(): number;
				public setLanguage(param0: string): void;
				public static createTileDecoder(param0: com.carto.utils.AssetPackage, param1: string): com.carto.vectortiles.VectorTileDecoder;
				public setBuildingRenderMode(param0: com.carto.layers.CartoBaseMapBuildingRenderMode): void;
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
			export class CartoVectorTileLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.CartoVectorTileLayerModuleJNI>;
				public static CartoVectorTileLayer_getBuildingRenderMode(param0: number, param1: com.carto.layers.CartoVectorTileLayer): number;
				public static new_CartoVectorTileLayer__SWIG_0(param0: number, param1: com.carto.datasources.TileDataSource, param2: number): number;
				public static new_CartoVectorTileLayer__SWIG_1(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.utils.AssetPackage): number;
				public static CartoVectorTileLayer_swigGetClassName(param0: number, param1: com.carto.layers.CartoVectorTileLayer): string;
				public static CartoVectorTileLayer_createTileDecoder__SWIG_2(param0: number, param1: com.carto.utils.AssetPackage, param2: string): number;
				public static CartoVectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
				public constructor();
				public static CartoVectorTileLayer_getLanguage(param0: number, param1: com.carto.layers.CartoVectorTileLayer): string;
				public static CartoVectorTileLayer_createTileDecoder__SWIG_1(param0: number, param1: com.carto.utils.AssetPackage): number;
				public static CartoVectorTileLayer_createTileDecoder__SWIG_0(param0: number): number;
				public static CartoVectorTileLayer_setPOIRenderMode(param0: number, param1: com.carto.layers.CartoVectorTileLayer, param2: number): void;
				public static CartoVectorTileLayer_setBuildingRenderMode(param0: number, param1: com.carto.layers.CartoVectorTileLayer, param2: number): void;
				public static CartoVectorTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.CartoVectorTileLayer): number;
				public static CartoVectorTileLayer_getPOIRenderMode(param0: number, param1: com.carto.layers.CartoVectorTileLayer): number;
				public static delete_CartoVectorTileLayer(param0: number): void;
				public static CartoVectorTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.CartoVectorTileLayer): any;
				public static new_CartoVectorTileLayer__SWIG_2(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.utils.AssetPackage, param4: string): number;
				public static CartoVectorTileLayer_setLanguage(param0: number, param1: com.carto.layers.CartoVectorTileLayer, param2: string): void;
				public static CartoVectorTileLayer_getFallbackLanguage(param0: number, param1: com.carto.layers.CartoVectorTileLayer): string;
				public static CartoVectorTileLayer_setFallbackLanguage(param0: number, param1: com.carto.layers.CartoVectorTileLayer, param2: string): void;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
			export class ClusterElementBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.ClusterElementBuilderModuleJNI>;
				public static ClusterElementBuilder_getBuilderMode(param0: number, param1: com.carto.layers.ClusterElementBuilder): number;
				public static ClusterElementBuilder_change_ownership(param0: com.carto.layers.ClusterElementBuilder, param1: number, param2: boolean): void;
				public static ClusterElementBuilder_swigGetDirectorObject(param0: number, param1: com.carto.layers.ClusterElementBuilder): any;
				public static ClusterElementBuilder_buildClusterElementSwigExplicitClusterElementBuilder__SWIG_1(param0: number, param1: com.carto.layers.ClusterElementBuilder, param2: number, param3: com.carto.core.MapPos, param4: number, param5: com.carto.vectorelements.VectorElementVector): number;
				public static SwigDirector_ClusterElementBuilder_buildClusterElement__SWIG_0(param0: com.carto.layers.ClusterElementBuilder, param1: number, param2: number): number;
				public static delete_ClusterElementBuilder(param0: number): void;
				public static ClusterElementBuilder_buildClusterElementSwigExplicitClusterElementBuilder__SWIG_0(param0: number, param1: com.carto.layers.ClusterElementBuilder, param2: number, param3: com.carto.core.MapPos, param4: number): number;
				public static ClusterElementBuilder_getBuilderModeSwigExplicitClusterElementBuilder(param0: number, param1: com.carto.layers.ClusterElementBuilder): number;
				public static ClusterElementBuilder_buildClusterElement__SWIG_1(param0: number, param1: com.carto.layers.ClusterElementBuilder, param2: number, param3: com.carto.core.MapPos, param4: number, param5: com.carto.vectorelements.VectorElementVector): number;
				public constructor();
				public static ClusterElementBuilder_swigGetRawPtr(param0: number, param1: com.carto.layers.ClusterElementBuilder): number;
				public static ClusterElementBuilder_swigGetClassName(param0: number, param1: com.carto.layers.ClusterElementBuilder): string;
				public static SwigDirector_ClusterElementBuilder_buildClusterElement__SWIG_1(param0: com.carto.layers.ClusterElementBuilder, param1: number, param2: number): number;
				public static SwigDirector_ClusterElementBuilder_getBuilderMode(param0: com.carto.layers.ClusterElementBuilder): number;
				public static ClusterElementBuilder_buildClusterElement__SWIG_0(param0: number, param1: com.carto.layers.ClusterElementBuilder, param2: number, param3: com.carto.core.MapPos, param4: number): number;
				public static new_ClusterElementBuilder(): number;
				public static ClusterElementBuilder_director_connect(param0: com.carto.layers.ClusterElementBuilder, param1: number, param2: boolean, param3: boolean): void;
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

declare module com {
	export module carto {
		export module layers {
			export class HillshadeRasterTileLayer extends com.carto.layers.RasterTileLayer {
				public static class: java.lang.Class<com.carto.layers.HillshadeRasterTileLayer>;
				public static getCPtr(param0: com.carto.layers.TileLayer): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.RasterTileLayer;
				public setIlluminationMapRotationEnabled(param0: boolean): void;
				public getIlluminationDirection(): com.carto.core.MapVec;
				public setExagerateHeightScaleEnabled(param0: boolean): void;
				public finalize(): void;
				public setNormalMapLightingShader(param0: string): void;
				public setIlluminationDirection(param0: com.carto.core.MapVec): void;
				public getElevation(param0: com.carto.core.MapPos): number;
				public getHighlightColor(): com.carto.graphics.Color;
				public constructor(param0: com.carto.datasources.TileDataSource);
				public delete(): void;
				public setContrast(param0: number): void;
				public getShadowColor(): com.carto.graphics.Color;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
				public getExagerateHeightScaleEnabled(): boolean;
				public static getCPtr(param0: com.carto.layers.HillshadeRasterTileLayer): number;
				public setAccentColor(param0: com.carto.graphics.Color): void;
				public setShadowColor(param0: com.carto.graphics.Color): void;
				public constructor(param0: number, param1: boolean);
				public setHighlightColor(param0: com.carto.graphics.Color): void;
				public swigGetClassName(): string;
				public getContrast(): number;
				public getAccentColor(): com.carto.graphics.Color;
				public static getCPtr(param0: com.carto.layers.RasterTileLayer): number;
				public swigGetDirectorObject(): any;
				public getNormalMapLightingShader(): string;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
				public getIlluminationMapRotationEnabled(): boolean;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.layers.Layer): number;
				public getHeightScale(): number;
				public getElevations(param0: com.carto.core.MapPosVector): com.carto.core.DoubleVector;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.HillshadeRasterTileLayer;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.rastertiles.ElevationDecoder);
				public setHeightScale(param0: number): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
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

declare module com {
	export module carto {
		export module layers {
			export class Layer extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.Layer>;
				public swigCMemOwn: boolean;
				public setMetaData(param0: com.carto.core.StringVariantMap): void;
				public isVisible(): boolean;
				public finalize(): void;
				public setVisibleZoomRange(param0: com.carto.core.MapRange): void;
				public delete(): void;
				public setMetaDataElement(param0: string, param1: com.carto.core.Variant): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public setCullDelay(param0: number): void;
				public isUpdateInProgress(): boolean;
				public getMetaData(): com.carto.core.StringVariantMap;
				public setVisible(param0: boolean): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
				public getUpdatePriority(): number;
				public update(param0: com.carto.renderers.components.CullState): void;
				public constructor(param0: number, param1: boolean);
				public setOpacity(param0: number): void;
				public swigGetClassName(): string;
				public setUpdatePriority(param0: number): void;
				public swigGetDirectorObject(): any;
				public getMetaDataElement(param0: string): com.carto.core.Variant;
				public getVisibleZoomRange(): com.carto.core.MapRange;
				public swigGetRawPtr(): number;
				public simulateClick(param0: com.carto.ui.ClickType, param1: com.carto.core.ScreenPos, param2: com.carto.graphics.ViewState): void;
				public static getCPtr(param0: com.carto.layers.Layer): number;
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

declare module com {
	export module carto {
		export module layers {
			export class LayerVector extends java.lang.Object {
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
			export class NMLModelLODTreeEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.NMLModelLODTreeEventListenerModuleJNI>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
			export class NMLModelLODTreeLayerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.NMLModelLODTreeLayerModuleJNI>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module layers {
			export class RasterTileEventListener extends java.lang.Object {
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
			export class RasterTileEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.RasterTileEventListenerModuleJNI>;
				public static RasterTileEventListener_onRasterTileClicked(param0: number, param1: com.carto.layers.RasterTileEventListener, param2: number, param3: com.carto.ui.RasterTileClickInfo): boolean;
				public static RasterTileEventListener_swigGetClassName(param0: number, param1: com.carto.layers.RasterTileEventListener): string;
				public static RasterTileEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.RasterTileEventListener): any;
				public static RasterTileEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.RasterTileEventListener): number;
				public static RasterTileEventListener_onRasterTileClickedSwigExplicitRasterTileEventListener(param0: number, param1: com.carto.layers.RasterTileEventListener, param2: number, param3: com.carto.ui.RasterTileClickInfo): boolean;
				public static SwigDirector_RasterTileEventListener_onRasterTileClicked(param0: com.carto.layers.RasterTileEventListener, param1: number): boolean;
				public static new_RasterTileEventListener(): number;
				public static RasterTileEventListener_director_connect(param0: com.carto.layers.RasterTileEventListener, param1: number, param2: boolean, param3: boolean): void;
				public constructor();
				public static delete_RasterTileEventListener(param0: number): void;
				public static RasterTileEventListener_change_ownership(param0: com.carto.layers.RasterTileEventListener, param1: number, param2: boolean): void;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public static getCPtr(param0: com.carto.layers.TileLayer): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.RasterTileLayer;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getTileBlendingSpeed(): number;
				public swigGetClassName(): string;
				public setTileFilterMode(param0: com.carto.layers.RasterTileFilterMode): void;
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

declare module com {
	export module carto {
		export module layers {
			export class TileLoadListener extends java.lang.Object {
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
			export class TileLoadListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.TileLoadListenerModuleJNI>;
				public static TileLoadListener_onPreloadingTilesLoadedSwigExplicitTileLoadListener(param0: number, param1: com.carto.layers.TileLoadListener): void;
				public static TileLoadListener_onPreloadingTilesLoaded(param0: number, param1: com.carto.layers.TileLoadListener): void;
				public static TileLoadListener_onVisibleTilesLoadedSwigExplicitTileLoadListener(param0: number, param1: com.carto.layers.TileLoadListener): void;
				public static TileLoadListener_swigGetRawPtr(param0: number, param1: com.carto.layers.TileLoadListener): number;
				public static new_TileLoadListener(): number;
				public constructor();
				public static TileLoadListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.TileLoadListener): any;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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

declare module com {
	export module carto {
		export module layers {
			export class UTFGridEventListener extends java.lang.Object {
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
			export class UTFGridEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.UTFGridEventListenerModuleJNI>;
				public static UTFGridEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.UTFGridEventListener): number;
				public static SwigDirector_UTFGridEventListener_onUTFGridClicked(param0: com.carto.layers.UTFGridEventListener, param1: number): boolean;
				public static UTFGridEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.UTFGridEventListener): any;
				public static UTFGridEventListener_swigGetClassName(param0: number, param1: com.carto.layers.UTFGridEventListener): string;
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

declare module com {
	export module carto {
		export module layers {
			export class VectorEditEventListener extends java.lang.Object {
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
			export class VectorEditEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorEditEventListenerModuleJNI>;
				public static VectorEditEventListener_onDragStart(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
				public static SwigDirector_VectorEditEventListener_onDragStart(param0: com.carto.layers.VectorEditEventListener, param1: number): number;
				public static VectorEditEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorEditEventListener): number;
				public static SwigDirector_VectorEditEventListener_onElementDeselected(param0: com.carto.layers.VectorEditEventListener, param1: number): void;
				public static VectorEditEventListener_onDragMove(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
				public constructor();
				public static SwigDirector_VectorEditEventListener_onDragEnd(param0: com.carto.layers.VectorEditEventListener, param1: number): number;
				public static VectorEditEventListener_onDragMoveSwigExplicitVectorEditEventListener(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
				public static SwigDirector_VectorEditEventListener_onElementDelete(param0: com.carto.layers.VectorEditEventListener, param1: number): void;
				public static SwigDirector_VectorEditEventListener_onElementSelect(param0: com.carto.layers.VectorEditEventListener, param1: number): boolean;
				public static VectorEditEventListener_onElementSelect(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement): boolean;
				public static VectorEditEventListener_onElementSelectSwigExplicitVectorEditEventListener(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement): boolean;
				public static new_VectorEditEventListener(): number;
				public static SwigDirector_VectorEditEventListener_onDragMove(param0: com.carto.layers.VectorEditEventListener, param1: number): number;
				public static VectorEditEventListener_swigGetClassName(param0: number, param1: com.carto.layers.VectorEditEventListener): string;
				public static VectorEditEventListener_onElementModify(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement, param4: number, param5: com.carto.geometry.Geometry): void;
				public static VectorEditEventListener_director_connect(param0: com.carto.layers.VectorEditEventListener, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_VectorEditEventListener_onSelectDragPointStyle(param0: com.carto.layers.VectorEditEventListener, param1: number, param2: number): number;
				public static VectorEditEventListener_onElementDeselectedSwigExplicitVectorEditEventListener(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement): void;
				public static VectorEditEventListener_onElementDeselected(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement): void;
				public static VectorEditEventListener_onDragEnd(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.ui.VectorElementDragInfo): number;
				public static VectorEditEventListener_onSelectDragPointStyle(param0: number, param1: com.carto.layers.VectorEditEventListener, param2: number, param3: com.carto.vectorelements.VectorElement, param4: number): number;
				public static SwigDirector_VectorEditEventListener_onElementModify(param0: com.carto.layers.VectorEditEventListener, param1: number, param2: number): void;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
			export class VectorElementEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorElementEventListenerModuleJNI>;
				public static new_VectorElementEventListener(): number;
				public static SwigDirector_VectorElementEventListener_onVectorElementClicked(param0: com.carto.layers.VectorElementEventListener, param1: number): boolean;
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

declare module com {
	export module carto {
		export module layers {
			export class VectorTileEventListener extends java.lang.Object {
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
			export class VectorTileEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.layers.VectorTileEventListenerModuleJNI>;
				public static VectorTileEventListener_onVectorTileClickedSwigExplicitVectorTileEventListener(param0: number, param1: com.carto.layers.VectorTileEventListener, param2: number, param3: com.carto.ui.VectorTileClickInfo): boolean;
				public static VectorTileEventListener_director_connect(param0: com.carto.layers.VectorTileEventListener, param1: number, param2: boolean, param3: boolean): void;
				public static VectorTileEventListener_swigGetDirectorObject(param0: number, param1: com.carto.layers.VectorTileEventListener): any;
				public static VectorTileEventListener_swigGetClassName(param0: number, param1: com.carto.layers.VectorTileEventListener): string;
				public static VectorTileEventListener_onVectorTileClicked(param0: number, param1: com.carto.layers.VectorTileEventListener, param2: number, param3: com.carto.ui.VectorTileClickInfo): boolean;
				public static delete_VectorTileEventListener(param0: number): void;
				public static VectorTileEventListener_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorTileEventListener): number;
				public static new_VectorTileEventListener(): number;
				public static SwigDirector_VectorTileEventListener_onVectorTileClicked(param0: com.carto.layers.VectorTileEventListener, param1: number): boolean;
				public constructor();
				public static VectorTileEventListener_change_ownership(param0: com.carto.layers.VectorTileEventListener, param1: number, param2: boolean): void;
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
				public getClickRadius(): number;
				public finalize(): void;
				public getTileDecoder(): com.carto.vectortiles.VectorTileDecoder;
				public setLayerBlendingSpeed(param0: number): void;
				public delete(): void;
				public getBuildingRenderOrder(): com.carto.layers.VectorTileRenderOrder;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.VectorTileLayer;
				public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.Layer;
				public setTileCacheCapacity(param0: number): void;
				public setBuildingRenderOrder(param0: com.carto.layers.VectorTileRenderOrder): void;
				public setClickRadius(param0: number): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.layers.VectorTileLayer): number;
				public setLabelBlendingSpeed(param0: number): void;
				public getVectorTileEventListener(): com.carto.layers.VectorTileEventListener;
				public setLabelRenderOrder(param0: com.carto.layers.VectorTileRenderOrder): void;
				public swigGetDirectorObject(): any;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.layers.TileLayer;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.layers.Layer): number;
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
				public static VECTOR_TILE_RENDER_ORDER_LAYER_get(): number;
				public static new_VectorTileLayer(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.vectortiles.VectorTileDecoder): number;
				public static VectorTileLayer_swigGetRawPtr(param0: number, param1: com.carto.layers.VectorTileLayer): number;
				public static VECTOR_TILE_RENDER_ORDER_HIDDEN_get(): number;
				public static VectorTileLayer_SWIGSmartPtrUpcast(param0: number): number;
				public static VectorTileLayer_getLabelBlendingSpeed(param0: number, param1: com.carto.layers.VectorTileLayer): number;
				public static VectorTileLayer_setTileCacheCapacity(param0: number, param1: com.carto.layers.VectorTileLayer, param2: number): void;
				public static VectorTileLayer_getLabelRenderOrder(param0: number, param1: com.carto.layers.VectorTileLayer): number;
				public static VectorTileLayer_swigGetDirectorObject(param0: number, param1: com.carto.layers.VectorTileLayer): any;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
			export class CartoPackageManagerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.CartoPackageManagerModuleJNI>;
				public static CartoPackageManager_swigGetClassName(param0: number, param1: com.carto.packagemanager.CartoPackageManager): string;
				public static CartoPackageManager_startStyleDownload(param0: number, param1: com.carto.packagemanager.CartoPackageManager, param2: number): boolean;
				public static CartoPackageManager_getStyleAssetPackage(param0: number, param1: com.carto.packagemanager.CartoPackageManager, param2: number): number;
				public static CartoPackageManager_swigGetDirectorObject(param0: number, param1: com.carto.packagemanager.CartoPackageManager): any;
				public static new_CartoPackageManager(param0: string, param1: string): number;
				public static CartoPackageManager_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.CartoPackageManager): number;
				public static CartoPackageManager_SWIGSmartPtrUpcast(param0: number): number;
				public constructor();
				public static delete_CartoPackageManager(param0: number): void;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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

declare module com {
	export module carto {
		export module packagemanager {
			export class PackageInfoVector extends java.lang.Object {
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
			export class PackageManager extends java.lang.Object {
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
			export class PackageManagerListener extends java.lang.Object {
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
			export class PackageManagerListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.packagemanager.PackageManagerListenerModuleJNI>;
				public static PackageManagerListener_swigGetDirectorObject(param0: number, param1: com.carto.packagemanager.PackageManagerListener): any;
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
				public static PackageManagerListener_onPackageFailedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number, param4: number): void;
				public static PackageManagerListener_change_ownership(param0: com.carto.packagemanager.PackageManagerListener, param1: number, param2: boolean): void;
				public static PackageManagerListener_onStyleFailed(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string): void;
				public static delete_PackageManagerListener(param0: number): void;
				public static PackageManagerListener_onPackageCancelledSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number): void;
				public static SwigDirector_PackageManagerListener_onPackageListFailed(param0: com.carto.packagemanager.PackageManagerListener): void;
				public static PackageManagerListener_onPackageCancelled(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number): void;
				public static SwigDirector_PackageManagerListener_onPackageStatusChanged(param0: com.carto.packagemanager.PackageManagerListener, param1: string, param2: number, param3: number): void;
				public static PackageManagerListener_director_connect(param0: com.carto.packagemanager.PackageManagerListener, param1: number, param2: boolean, param3: boolean): void;
				public static PackageManagerListener_onStyleFailedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string): void;
				public static PackageManagerListener_onPackageStatusChanged(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number, param4: number, param5: com.carto.packagemanager.PackageStatus): void;
				public static PackageManagerListener_onPackageUpdatedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number): void;
				public static PackageManagerListener_onPackageListFailed(param0: number, param1: com.carto.packagemanager.PackageManagerListener): void;
				public static PackageManagerListener_onPackageStatusChangedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number, param4: number, param5: com.carto.packagemanager.PackageStatus): void;
				public static SwigDirector_PackageManagerListener_onStyleUpdated(param0: com.carto.packagemanager.PackageManagerListener, param1: string): void;
				public static PackageManagerListener_swigGetRawPtr(param0: number, param1: com.carto.packagemanager.PackageManagerListener): number;
				public static PackageManagerListener_onPackageUpdated(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string, param3: number): void;
				public static SwigDirector_PackageManagerListener_onPackageCancelled(param0: com.carto.packagemanager.PackageManagerListener, param1: string, param2: number): void;
				public static PackageManagerListener_onStyleUpdatedSwigExplicitPackageManagerListener(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string): void;
				public static PackageManagerListener_onStyleUpdated(param0: number, param1: com.carto.packagemanager.PackageManagerListener, param2: string): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module packagemanager {
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

declare module com {
	export module carto {
		export module packagemanager {
			export class PackageMetaInfo extends java.lang.Object {
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

declare module com {
	export module carto {
		export module packagemanager {
			export class PackageStatus extends java.lang.Object {
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

declare module com {
	export module carto {
		export module packagemanager {
			export class PackageTileMask extends java.lang.Object {
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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

declare module com {
	export module carto {
		export module projections {
			export class Projection extends java.lang.Object {
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
		export module projections {
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

declare module com {
	export module carto {
		export module rastertiles {
			export class ElevationDecoder extends java.lang.Object {
				public static class: java.lang.Class<com.carto.rastertiles.ElevationDecoder>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.rastertiles.ElevationDecoder): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.rastertiles.ElevationDecoder;
				public swigGetDirectorObject(): any;
			}
		}
	}
}

declare module com {
	export module carto {
		export module rastertiles {
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

declare module com {
	export module carto {
		export module rastertiles {
			export class MapBoxElevationDataDecoder extends com.carto.rastertiles.ElevationDecoder {
				public static class: java.lang.Class<com.carto.rastertiles.MapBoxElevationDataDecoder>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(param0: com.carto.rastertiles.MapBoxElevationDataDecoder): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.rastertiles.MapBoxElevationDataDecoder;
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.rastertiles.ElevationDecoder): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.rastertiles.ElevationDecoder;
			}
		}
	}
}

declare module com {
	export module carto {
		export module rastertiles {
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

declare module com {
	export module carto {
		export module rastertiles {
			export class SWIGTYPE_p_std__arrayT_double_4_t extends java.lang.Object {
				public static class: java.lang.Class<com.carto.rastertiles.SWIGTYPE_p_std__arrayT_double_4_t>;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.rastertiles.SWIGTYPE_p_std__arrayT_double_4_t): number;
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
				public static getCPtr(param0: com.carto.rastertiles.SWIGTYPE_p_std__arrayT_float_4_t): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module rastertiles {
			export class TerrariumElevationDataDecoder extends com.carto.rastertiles.ElevationDecoder {
				public static class: java.lang.Class<com.carto.rastertiles.TerrariumElevationDataDecoder>;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.rastertiles.TerrariumElevationDataDecoder;
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.rastertiles.ElevationDecoder): number;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.rastertiles.TerrariumElevationDataDecoder): number;
				public delete(): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.rastertiles.ElevationDecoder;
			}
		}
	}
}

declare module com {
	export module carto {
		export module rastertiles {
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

declare module com {
	export module carto {
		export module renderers {
			export class MapRenderer extends java.lang.Object {
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
			export class MapRendererListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.MapRendererListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public static getCPtr(param0: com.carto.renderers.MapRendererListener): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public onSurfaceChanged(param0: number, param1: number): void;
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
			export class MapRendererListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.MapRendererListenerModuleJNI>;
				public static MapRendererListener_onBeforeDrawFrameSwigExplicitMapRendererListener(param0: number, param1: com.carto.renderers.MapRendererListener): void;
				public static MapRendererListener_swigGetDirectorObject(param0: number, param1: com.carto.renderers.MapRendererListener): any;
				public static MapRendererListener_director_connect(param0: com.carto.renderers.MapRendererListener, param1: number, param2: boolean, param3: boolean): void;
				public static MapRendererListener_onSurfaceChangedSwigExplicitMapRendererListener(param0: number, param1: com.carto.renderers.MapRendererListener, param2: number, param3: number): void;
				public static MapRendererListener_onBeforeDrawFrame(param0: number, param1: com.carto.renderers.MapRendererListener): void;
				public static MapRendererListener_change_ownership(param0: com.carto.renderers.MapRendererListener, param1: number, param2: boolean): void;
				public static delete_MapRendererListener(param0: number): void;
				public static new_MapRendererListener(): number;
				public static MapRendererListener_onAfterDrawFrame(param0: number, param1: com.carto.renderers.MapRendererListener): void;
				public static MapRendererListener_swigGetRawPtr(param0: number, param1: com.carto.renderers.MapRendererListener): number;
				public constructor();
				public static SwigDirector_MapRendererListener_onBeforeDrawFrame(param0: com.carto.renderers.MapRendererListener): void;
				public static SwigDirector_MapRendererListener_onSurfaceChanged(param0: com.carto.renderers.MapRendererListener, param1: number, param2: number): void;
				public static SwigDirector_MapRendererListener_onAfterDrawFrame(param0: com.carto.renderers.MapRendererListener): void;
				public static MapRendererListener_onSurfaceChanged(param0: number, param1: com.carto.renderers.MapRendererListener, param2: number, param3: number): void;
				public static MapRendererListener_onAfterDrawFrameSwigExplicitMapRendererListener(param0: number, param1: com.carto.renderers.MapRendererListener): void;
				public static MapRendererListener_swigGetClassName(param0: number, param1: com.carto.renderers.MapRendererListener): string;
			}
		}
	}
}

declare module com {
	export module carto {
		export module renderers {
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

declare module com {
	export module carto {
		export module renderers {
			export class RedrawRequestListener extends java.lang.Object {
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
			export class RedrawRequestListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.renderers.RedrawRequestListenerModuleJNI>;
				public static SwigDirector_RedrawRequestListener_onRedrawRequested(param0: com.carto.renderers.RedrawRequestListener): void;
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

declare module com {
	export module carto {
		export module renderers {
			export class RendererCaptureListener extends java.lang.Object {
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
				public static RendererCaptureListener_swigGetDirectorObject(param0: number, param1: com.carto.renderers.RendererCaptureListener): any;
				public static SwigDirector_RendererCaptureListener_onMapRendered(param0: com.carto.renderers.RendererCaptureListener, param1: number): void;
				public constructor();
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
		export module renderers {
			export module components {
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
				public setProfile(param0: string): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getProfile(): string;
				public static getCPtr(param0: com.carto.routing.CartoOnlineRoutingService): number;
				public swigTakeOwnership(): void;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class CartoOnlineRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.CartoOnlineRoutingServiceModuleJNI>;
				public static SwigDirector_CartoOnlineRoutingService_getProfile(param0: com.carto.routing.CartoOnlineRoutingService): string;
				public static CartoOnlineRoutingService_matchRouteSwigExplicitCartoOnlineRoutingService(param0: number, param1: com.carto.routing.CartoOnlineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static CartoOnlineRoutingService_director_connect(param0: com.carto.routing.CartoOnlineRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static CartoOnlineRoutingService_calculateRoute(param0: number, param1: com.carto.routing.CartoOnlineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static CartoOnlineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
				public static delete_CartoOnlineRoutingService(param0: number): void;
				public static CartoOnlineRoutingService_matchRoute(param0: number, param1: com.carto.routing.CartoOnlineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static CartoOnlineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.CartoOnlineRoutingService): string;
				public static CartoOnlineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.CartoOnlineRoutingService): number;
				public constructor();
				public static CartoOnlineRoutingService_getProfile(param0: number, param1: com.carto.routing.CartoOnlineRoutingService): string;
				public static SwigDirector_CartoOnlineRoutingService_matchRoute(param0: com.carto.routing.CartoOnlineRoutingService, param1: number): number;
				public static new_CartoOnlineRoutingService(param0: string): number;
				public static CartoOnlineRoutingService_setProfile(param0: number, param1: com.carto.routing.CartoOnlineRoutingService, param2: string): void;
				public static CartoOnlineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.CartoOnlineRoutingService): any;
				public static CartoOnlineRoutingService_calculateRouteSwigExplicitCartoOnlineRoutingService(param0: number, param1: com.carto.routing.CartoOnlineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static SwigDirector_CartoOnlineRoutingService_calculateRoute(param0: com.carto.routing.CartoOnlineRoutingService, param1: number): number;
				public static CartoOnlineRoutingService_setProfileSwigExplicitCartoOnlineRoutingService(param0: number, param1: com.carto.routing.CartoOnlineRoutingService, param2: string): void;
				public static SwigDirector_CartoOnlineRoutingService_setProfile(param0: com.carto.routing.CartoOnlineRoutingService, param1: string): void;
				public static CartoOnlineRoutingService_getProfileSwigExplicitCartoOnlineRoutingService(param0: number, param1: com.carto.routing.CartoOnlineRoutingService): string;
				public static CartoOnlineRoutingService_change_ownership(param0: com.carto.routing.CartoOnlineRoutingService, param1: number, param2: boolean): void;
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
				public setProfile(param0: string): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getProfile(): string;
				public swigTakeOwnership(): void;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class OSRMOfflineRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.OSRMOfflineRoutingServiceModuleJNI>;
				public static OSRMOfflineRoutingService_getProfile(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): string;
				public static OSRMOfflineRoutingService_matchRouteSwigExplicitOSRMOfflineRoutingService(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static SwigDirector_OSRMOfflineRoutingService_getProfile(param0: com.carto.routing.OSRMOfflineRoutingService): string;
				public static SwigDirector_OSRMOfflineRoutingService_matchRoute(param0: com.carto.routing.OSRMOfflineRoutingService, param1: number): number;
				public static OSRMOfflineRoutingService_getProfileSwigExplicitOSRMOfflineRoutingService(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): string;
				public static OSRMOfflineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): number;
				public static OSRMOfflineRoutingService_calculateRoute(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static OSRMOfflineRoutingService_change_ownership(param0: com.carto.routing.OSRMOfflineRoutingService, param1: number, param2: boolean): void;
				public static SwigDirector_OSRMOfflineRoutingService_calculateRoute(param0: com.carto.routing.OSRMOfflineRoutingService, param1: number): number;
				public constructor();
				public static OSRMOfflineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
				public static OSRMOfflineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): string;
				public static OSRMOfflineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService): any;
				public static OSRMOfflineRoutingService_setProfile(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService, param2: string): void;
				public static new_OSRMOfflineRoutingService(param0: string): number;
				public static OSRMOfflineRoutingService_director_connect(param0: com.carto.routing.OSRMOfflineRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static delete_OSRMOfflineRoutingService(param0: number): void;
				public static OSRMOfflineRoutingService_matchRoute(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static OSRMOfflineRoutingService_calculateRouteSwigExplicitOSRMOfflineRoutingService(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static SwigDirector_OSRMOfflineRoutingService_setProfile(param0: com.carto.routing.OSRMOfflineRoutingService, param1: string): void;
				public static OSRMOfflineRoutingService_setProfileSwigExplicitOSRMOfflineRoutingService(param0: number, param1: com.carto.routing.OSRMOfflineRoutingService, param2: string): void;
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
				public setProfile(param0: string): void;
				public static getCPtr(param0: com.carto.routing.PackageManagerRoutingService): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getProfile(): string;
				public swigTakeOwnership(): void;
				public constructor(param0: com.carto.packagemanager.PackageManager);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.PackageManagerRoutingService;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class PackageManagerRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.PackageManagerRoutingServiceModuleJNI>;
				public static PackageManagerRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.PackageManagerRoutingService): any;
				public static SwigDirector_PackageManagerRoutingService_getProfile(param0: com.carto.routing.PackageManagerRoutingService): string;
				public static PackageManagerRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.PackageManagerRoutingService): number;
				public static SwigDirector_PackageManagerRoutingService_matchRoute(param0: com.carto.routing.PackageManagerRoutingService, param1: number): number;
				public static PackageManagerRoutingService_matchRoute(param0: number, param1: com.carto.routing.PackageManagerRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static PackageManagerRoutingService_setProfile(param0: number, param1: com.carto.routing.PackageManagerRoutingService, param2: string): void;
				public static PackageManagerRoutingService_calculateRouteSwigExplicitPackageManagerRoutingService(param0: number, param1: com.carto.routing.PackageManagerRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static new_PackageManagerRoutingService(param0: number, param1: com.carto.packagemanager.PackageManager): number;
				public constructor();
				public static PackageManagerRoutingService_matchRouteSwigExplicitPackageManagerRoutingService(param0: number, param1: com.carto.routing.PackageManagerRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static PackageManagerRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.PackageManagerRoutingService): string;
				public static PackageManagerRoutingService_director_connect(param0: com.carto.routing.PackageManagerRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static PackageManagerRoutingService_SWIGSmartPtrUpcast(param0: number): number;
				public static PackageManagerRoutingService_getProfile(param0: number, param1: com.carto.routing.PackageManagerRoutingService): string;
				public static PackageManagerRoutingService_getProfileSwigExplicitPackageManagerRoutingService(param0: number, param1: com.carto.routing.PackageManagerRoutingService): string;
				public static PackageManagerRoutingService_setProfileSwigExplicitPackageManagerRoutingService(param0: number, param1: com.carto.routing.PackageManagerRoutingService, param2: string): void;
				public static delete_PackageManagerRoutingService(param0: number): void;
				public static PackageManagerRoutingService_change_ownership(param0: com.carto.routing.PackageManagerRoutingService, param1: number, param2: boolean): void;
				public static PackageManagerRoutingService_calculateRoute(param0: number, param1: com.carto.routing.PackageManagerRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static SwigDirector_PackageManagerRoutingService_calculateRoute(param0: com.carto.routing.PackageManagerRoutingService, param1: number): number;
				public static SwigDirector_PackageManagerRoutingService_setProfile(param0: com.carto.routing.PackageManagerRoutingService, param1: string): void;
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
				public getConfigurationParameter(param0: string): com.carto.core.Variant;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
				public finalize(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.PackageManagerValhallaRoutingService;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public constructor();
				public setProfile(param0: string): void;
				public setConfigurationParameter(param0: string, param1: com.carto.core.Variant): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getProfile(): string;
				public swigTakeOwnership(): void;
				public constructor(param0: com.carto.packagemanager.PackageManager);
				public static getCPtr(param0: com.carto.routing.PackageManagerValhallaRoutingService): number;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class PackageManagerValhallaRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.PackageManagerValhallaRoutingServiceModuleJNI>;
				public static PackageManagerValhallaRoutingService_getProfileSwigExplicitPackageManagerValhallaRoutingService(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): string;
				public static PackageManagerValhallaRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): any;
				public static PackageManagerValhallaRoutingService_setConfigurationParameter(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static SwigDirector_PackageManagerValhallaRoutingService_getProfile(param0: com.carto.routing.PackageManagerValhallaRoutingService): string;
				public static PackageManagerValhallaRoutingService_getConfigurationParameter(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: string): number;
				public static SwigDirector_PackageManagerValhallaRoutingService_matchRoute(param0: com.carto.routing.PackageManagerValhallaRoutingService, param1: number): number;
				public static PackageManagerValhallaRoutingService_calculateRoute(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static PackageManagerValhallaRoutingService_calculateRouteSwigExplicitPackageManagerValhallaRoutingService(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static PackageManagerValhallaRoutingService_director_connect(param0: com.carto.routing.PackageManagerValhallaRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static PackageManagerValhallaRoutingService_getProfile(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): string;
				public static PackageManagerValhallaRoutingService_matchRoute(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static delete_PackageManagerValhallaRoutingService(param0: number): void;
				public constructor();
				public static PackageManagerValhallaRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): string;
				public static PackageManagerValhallaRoutingService_matchRouteSwigExplicitPackageManagerValhallaRoutingService(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static PackageManagerValhallaRoutingService_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_PackageManagerValhallaRoutingService_setProfile(param0: com.carto.routing.PackageManagerValhallaRoutingService, param1: string): void;
				public static SwigDirector_PackageManagerValhallaRoutingService_calculateRoute(param0: com.carto.routing.PackageManagerValhallaRoutingService, param1: number): number;
				public static PackageManagerValhallaRoutingService_setProfile(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: string): void;
				public static PackageManagerValhallaRoutingService_change_ownership(param0: com.carto.routing.PackageManagerValhallaRoutingService, param1: number, param2: boolean): void;
				public static new_PackageManagerValhallaRoutingService(param0: number, param1: com.carto.packagemanager.PackageManager): number;
				public static PackageManagerValhallaRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService): number;
				public static PackageManagerValhallaRoutingService_setProfileSwigExplicitPackageManagerValhallaRoutingService(param0: number, param1: com.carto.routing.PackageManagerValhallaRoutingService, param2: string): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingEdge extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingEdge>;
				public swigCMemOwn: boolean;
				public swigGetRawPtr(): number;
				public static getCPtr(param0: com.carto.routing.RouteMatchingEdge): number;
				public delete(): void;
				public hashCode(): number;
				public finalize(): void;
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

declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingEdgeVector extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingEdgeVector>;
				public swigCMemOwn: boolean;
				public static getCPtr(param0: com.carto.routing.RouteMatchingEdgeVector): number;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public add(param0: com.carto.routing.RouteMatchingEdge): void;
				public get(param0: number): com.carto.routing.RouteMatchingEdge;
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public swigGetRawPtr(): number;
				public delete(): void;
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
				public swigCMemOwn: boolean;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public getPos(): com.carto.core.MapPos;
				public toString(): string;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public hashCode(): number;
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.routing.RouteMatchingPointType, param2: number);
				public static getCPtr(param0: com.carto.routing.RouteMatchingPoint): number;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public swigCMemOwn: boolean;
				public finalize(): void;
				public set(param0: number, param1: com.carto.routing.RouteMatchingPoint): void;
				public constructor(param0: number, param1: boolean);
				public constructor();
				public size(): number;
				public reserve(param0: number): void;
				public add(param0: com.carto.routing.RouteMatchingPoint): void;
				public swigGetRawPtr(): number;
				public get(param0: number): com.carto.routing.RouteMatchingPoint;
				public delete(): void;
				public static getCPtr(param0: com.carto.routing.RouteMatchingPointVector): number;
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
				public swigCMemOwn: boolean;
				public getProjection(): com.carto.projections.Projection;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.core.MapPosVector, param2: number);
				public static getCPtr(param0: com.carto.routing.RouteMatchingRequest): number;
				public getCustomParameter(param0: string): com.carto.core.Variant;
				public setPointParameter(param0: number, param1: string, param2: com.carto.core.Variant): void;
				public setCustomParameter(param0: string, param1: com.carto.core.Variant): void;
				public toString(): string;
				public getPointParameter(param0: number, param1: string): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public getPoints(): com.carto.core.MapPosVector;
				public delete(): void;
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

declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingResult extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingResult>;
				public swigCMemOwn: boolean;
				public getProjection(): com.carto.projections.Projection;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.routing.RouteMatchingResult): number;
				public toString(): string;
				public getMatchingPoints(): com.carto.routing.RouteMatchingPointVector;
				public swigGetRawPtr(): number;
				public getPoints(): com.carto.core.MapPosVector;
				public delete(): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getMatchingEdges(): com.carto.routing.RouteMatchingEdgeVector;
				public constructor(param0: com.carto.projections.Projection, param1: com.carto.routing.RouteMatchingPointVector, param2: com.carto.routing.RouteMatchingEdgeVector);
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class RouteMatchingResultModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RouteMatchingResultModuleJNI>;
				public static RouteMatchingResult_getPoints(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
				public static RouteMatchingResult_getMatchingEdges(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
				public static RouteMatchingResult_getProjection(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
				public static delete_RouteMatchingResult(param0: number): void;
				public static RouteMatchingResult_swigGetRawPtr(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
				public static RouteMatchingResult_toString(param0: number, param1: com.carto.routing.RouteMatchingResult): string;
				public static new_RouteMatchingResult(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.routing.RouteMatchingPointVector, param4: number, param5: com.carto.routing.RouteMatchingEdgeVector): number;
				public static RouteMatchingResult_getMatchingPoints(param0: number, param1: com.carto.routing.RouteMatchingResult): number;
				public constructor();
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public swigCMemOwn: boolean;
				public getPointIndex(): number;
				public constructor(param0: com.carto.routing.RoutingAction, param1: number, param2: string, param3: string, param4: number, param5: number, param6: number, param7: number, param8: com.carto.core.Variant);
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
				public getInstruction(): string;
				public getAction(): com.carto.routing.RoutingAction;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
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

declare module com {
	export module carto {
		export module routing {
			export class RoutingInstructionVector extends java.lang.Object {
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
			export class RoutingRequest extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingRequest>;
				public swigCMemOwn: boolean;
				public getProjection(): com.carto.projections.Projection;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static getCPtr(param0: com.carto.routing.RoutingRequest): number;
				public getCustomParameter(param0: string): com.carto.core.Variant;
				public setPointParameter(param0: number, param1: string, param2: com.carto.core.Variant): void;
				public setCustomParameter(param0: string, param1: com.carto.core.Variant): void;
				public toString(): string;
				public getPointParameter(param0: number, param1: string): com.carto.core.Variant;
				public swigGetRawPtr(): number;
				public getPoints(): com.carto.core.MapPosVector;
				public delete(): void;
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

declare module com {
	export module carto {
		export module routing {
			export class RoutingResult extends java.lang.Object {
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
			export class RoutingResultModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingResultModuleJNI>;
				public static RoutingResult_toString(param0: number, param1: com.carto.routing.RoutingResult): string;
				public static RoutingResult_getPoints(param0: number, param1: com.carto.routing.RoutingResult): number;
				public static RoutingResult_swigGetRawPtr(param0: number, param1: com.carto.routing.RoutingResult): number;
				public static delete_RoutingResult(param0: number): void;
				public static RoutingResult_getProjection(param0: number, param1: com.carto.routing.RoutingResult): number;
				public static RoutingResult_getTotalTime(param0: number, param1: com.carto.routing.RoutingResult): number;
				public static new_RoutingResult(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.core.MapPosVector, param4: number, param5: com.carto.routing.RoutingInstructionVector): number;
				public constructor();
				public static RoutingResult_getInstructions(param0: number, param1: com.carto.routing.RoutingResult): number;
				public static RoutingResult_getTotalDistance(param0: number, param1: com.carto.routing.RoutingResult): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class RoutingService extends java.lang.Object {
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
				public setProfile(param0: string): void;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public getProfile(): string;
				public swigTakeOwnership(): void;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class RoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.RoutingServiceModuleJNI>;
				public static RoutingService_change_ownership(param0: com.carto.routing.RoutingService, param1: number, param2: boolean): void;
				public static SwigDirector_RoutingService_calculateRoute(param0: com.carto.routing.RoutingService, param1: number): number;
				public static RoutingService_calculateRoute(param0: number, param1: com.carto.routing.RoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static RoutingService_setProfile(param0: number, param1: com.carto.routing.RoutingService, param2: string): void;
				public static RoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.RoutingService): any;
				public static SwigDirector_RoutingService_matchRoute(param0: com.carto.routing.RoutingService, param1: number): number;
				public constructor();
				public static new_RoutingService(): number;
				public static RoutingService_getProfile(param0: number, param1: com.carto.routing.RoutingService): string;
				public static RoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.RoutingService): number;
				public static SwigDirector_RoutingService_setProfile(param0: com.carto.routing.RoutingService, param1: string): void;
				public static RoutingService_matchRoute(param0: number, param1: com.carto.routing.RoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static delete_RoutingService(param0: number): void;
				public static RoutingService_swigGetClassName(param0: number, param1: com.carto.routing.RoutingService): string;
				public static RoutingService_director_connect(param0: com.carto.routing.RoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_RoutingService_getProfile(param0: com.carto.routing.RoutingService): string;
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
				public getRoutingParameter(param0: string): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public setRoutingParameter(param0: string, param1: number): void;
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
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class SGREOfflineRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.SGREOfflineRoutingServiceModuleJNI>;
				public static SwigDirector_SGREOfflineRoutingService_setProfile(param0: com.carto.routing.SGREOfflineRoutingService, param1: string): void;
				public static SGREOfflineRoutingService_matchRouteSwigExplicitSGREOfflineRoutingService(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static SGREOfflineRoutingService_matchRoute(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static SGREOfflineRoutingService_getProfile(param0: number, param1: com.carto.routing.SGREOfflineRoutingService): string;
				public static SGREOfflineRoutingService_getProfileSwigExplicitSGREOfflineRoutingService(param0: number, param1: com.carto.routing.SGREOfflineRoutingService): string;
				public static new_SGREOfflineRoutingService__SWIG_1(param0: number, param1: com.carto.projections.Projection, param2: number, param3: com.carto.geometry.FeatureCollection, param4: number, param5: com.carto.core.Variant): number;
				public static SGREOfflineRoutingService_setProfile(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: string): void;
				public static SGREOfflineRoutingService_change_ownership(param0: com.carto.routing.SGREOfflineRoutingService, param1: number, param2: boolean): void;
				public static SGREOfflineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_SGREOfflineRoutingService_matchRoute(param0: com.carto.routing.SGREOfflineRoutingService, param1: number): number;
				public static delete_SGREOfflineRoutingService(param0: number): void;
				public static SGREOfflineRoutingService_setRoutingParameter(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: string, param3: number): void;
				public constructor();
				public static SGREOfflineRoutingService_calculateRoute(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static SGREOfflineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.SGREOfflineRoutingService): any;
				public static SGREOfflineRoutingService_calculateRouteSwigExplicitSGREOfflineRoutingService(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static SwigDirector_SGREOfflineRoutingService_getProfile(param0: com.carto.routing.SGREOfflineRoutingService): string;
				public static SGREOfflineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.SGREOfflineRoutingService): number;
				public static SGREOfflineRoutingService_director_connect(param0: com.carto.routing.SGREOfflineRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_SGREOfflineRoutingService_calculateRoute(param0: com.carto.routing.SGREOfflineRoutingService, param1: number): number;
				public static new_SGREOfflineRoutingService__SWIG_0(param0: number, param1: com.carto.core.Variant, param2: number, param3: com.carto.core.Variant): number;
				public static SGREOfflineRoutingService_setProfileSwigExplicitSGREOfflineRoutingService(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: string): void;
				public static SGREOfflineRoutingService_getRoutingParameter(param0: number, param1: com.carto.routing.SGREOfflineRoutingService, param2: string): number;
				public static SGREOfflineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.SGREOfflineRoutingService): string;
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
				public static getCPtr(param0: com.carto.routing.ValhallaOfflineRoutingService): number;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public getConfigurationParameter(param0: string): com.carto.core.Variant;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public constructor(param0: string);
				public swigGetDirectorObject(): any;
				public constructor();
				public setProfile(param0: string): void;
				public setConfigurationParameter(param0: string, param1: com.carto.core.Variant): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getProfile(): string;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.ValhallaOfflineRoutingService;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class ValhallaOfflineRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.ValhallaOfflineRoutingServiceModuleJNI>;
				public static ValhallaOfflineRoutingService_getProfileSwigExplicitValhallaOfflineRoutingService(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): string;
				public static SwigDirector_ValhallaOfflineRoutingService_calculateRoute(param0: com.carto.routing.ValhallaOfflineRoutingService, param1: number): number;
				public static ValhallaOfflineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
				public static SwigDirector_ValhallaOfflineRoutingService_getProfile(param0: com.carto.routing.ValhallaOfflineRoutingService): string;
				public static delete_ValhallaOfflineRoutingService(param0: number): void;
				public static ValhallaOfflineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): string;
				public static ValhallaOfflineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): number;
				public constructor();
				public static ValhallaOfflineRoutingService_setProfileSwigExplicitValhallaOfflineRoutingService(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: string): void;
				public static ValhallaOfflineRoutingService_calculateRouteSwigExplicitValhallaOfflineRoutingService(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static ValhallaOfflineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): any;
				public static SwigDirector_ValhallaOfflineRoutingService_matchRoute(param0: com.carto.routing.ValhallaOfflineRoutingService, param1: number): number;
				public static ValhallaOfflineRoutingService_director_connect(param0: com.carto.routing.ValhallaOfflineRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static ValhallaOfflineRoutingService_change_ownership(param0: com.carto.routing.ValhallaOfflineRoutingService, param1: number, param2: boolean): void;
				public static new_ValhallaOfflineRoutingService(param0: string): number;
				public static ValhallaOfflineRoutingService_getConfigurationParameter(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: string): number;
				public static ValhallaOfflineRoutingService_matchRouteSwigExplicitValhallaOfflineRoutingService(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static SwigDirector_ValhallaOfflineRoutingService_setProfile(param0: com.carto.routing.ValhallaOfflineRoutingService, param1: string): void;
				public static ValhallaOfflineRoutingService_getProfile(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService): string;
				public static ValhallaOfflineRoutingService_setProfile(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: string): void;
				public static ValhallaOfflineRoutingService_calculateRoute(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static ValhallaOfflineRoutingService_setConfigurationParameter(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: string, param3: number, param4: com.carto.core.Variant): void;
				public static ValhallaOfflineRoutingService_matchRoute(param0: number, param1: com.carto.routing.ValhallaOfflineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
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
				public static getCPtr(param0: com.carto.routing.ValhallaOnlineRoutingService): number;
				public swigDirectorDisconnect(): void;
				public calculateRoute(param0: com.carto.routing.RoutingRequest): com.carto.routing.RoutingResult;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.RoutingService;
				public finalize(): void;
				public getCustomServiceURL(): string;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public constructor(param0: string);
				public swigGetDirectorObject(): any;
				public constructor();
				public setProfile(param0: string): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.routing.ValhallaOnlineRoutingService;
				public setCustomServiceURL(param0: string): void;
				public swigGetRawPtr(): number;
				public delete(): void;
				public getProfile(): string;
				public swigTakeOwnership(): void;
				public matchRoute(param0: com.carto.routing.RouteMatchingRequest): com.carto.routing.RouteMatchingResult;
			}
		}
	}
}

declare module com {
	export module carto {
		export module routing {
			export class ValhallaOnlineRoutingServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.routing.ValhallaOnlineRoutingServiceModuleJNI>;
				public static SwigDirector_ValhallaOnlineRoutingService_getProfile(param0: com.carto.routing.ValhallaOnlineRoutingService): string;
				public static ValhallaOnlineRoutingService_calculateRouteSwigExplicitValhallaOnlineRoutingService(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static ValhallaOnlineRoutingService_change_ownership(param0: com.carto.routing.ValhallaOnlineRoutingService, param1: number, param2: boolean): void;
				public static ValhallaOnlineRoutingService_getProfile(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): string;
				public static ValhallaOnlineRoutingService_setProfileSwigExplicitValhallaOnlineRoutingService(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: string): void;
				public static ValhallaOnlineRoutingService_swigGetRawPtr(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): number;
				public static new_ValhallaOnlineRoutingService(param0: string): number;
				public static ValhallaOnlineRoutingService_matchRoute(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static ValhallaOnlineRoutingService_swigGetDirectorObject(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): any;
				public static ValhallaOnlineRoutingService_setProfile(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: string): void;
				public static SwigDirector_ValhallaOnlineRoutingService_setProfile(param0: com.carto.routing.ValhallaOnlineRoutingService, param1: string): void;
				public constructor();
				public static delete_ValhallaOnlineRoutingService(param0: number): void;
				public static ValhallaOnlineRoutingService_director_connect(param0: com.carto.routing.ValhallaOnlineRoutingService, param1: number, param2: boolean, param3: boolean): void;
				public static ValhallaOnlineRoutingService_matchRouteSwigExplicitValhallaOnlineRoutingService(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: number, param3: com.carto.routing.RouteMatchingRequest): number;
				public static SwigDirector_ValhallaOnlineRoutingService_matchRoute(param0: com.carto.routing.ValhallaOnlineRoutingService, param1: number): number;
				public static ValhallaOnlineRoutingService_getCustomServiceURL(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): string;
				public static ValhallaOnlineRoutingService_getProfileSwigExplicitValhallaOnlineRoutingService(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): string;
				public static ValhallaOnlineRoutingService_setCustomServiceURL(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: string): void;
				public static ValhallaOnlineRoutingService_swigGetClassName(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService): string;
				public static SwigDirector_ValhallaOnlineRoutingService_calculateRoute(param0: com.carto.routing.ValhallaOnlineRoutingService, param1: number): number;
				public static ValhallaOnlineRoutingService_calculateRoute(param0: number, param1: com.carto.routing.ValhallaOnlineRoutingService, param2: number, param3: com.carto.routing.RoutingRequest): number;
				public static ValhallaOnlineRoutingService_SWIGSmartPtrUpcast(param0: number): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module search {
			export class FeatureCollectionSearchService extends java.lang.Object {
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
				public setMaxResults(param0: number): void;
				public delete(): void;
				public getMaxResults(): number;
				public getFeatureCollection(): com.carto.geometry.FeatureCollection;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module search {
			export class FeatureCollectionSearchServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.FeatureCollectionSearchServiceModuleJNI>;
				public static FeatureCollectionSearchService_setMaxResults(param0: number, param1: com.carto.search.FeatureCollectionSearchService, param2: number): void;
				public static FeatureCollectionSearchService_change_ownership(param0: com.carto.search.FeatureCollectionSearchService, param1: number, param2: boolean): void;
				public static FeatureCollectionSearchService_getMaxResults(param0: number, param1: com.carto.search.FeatureCollectionSearchService): number;
				public static SwigDirector_FeatureCollectionSearchService_findFeatures(param0: com.carto.search.FeatureCollectionSearchService, param1: number): number;
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

declare module com {
	export module carto {
		export module search {
			export class SearchRequest extends java.lang.Object {
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

declare module com {
	export module carto {
		export module search {
			export class VectorElementSearchService extends java.lang.Object {
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
				public setMaxResults(param0: number): void;
				public findElements(param0: com.carto.search.SearchRequest): com.carto.vectorelements.VectorElementVector;
				public delete(): void;
				public getMaxResults(): number;
				public swigTakeOwnership(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.search.VectorElementSearchService;
			}
		}
	}
}

declare module com {
	export module carto {
		export module search {
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
				public static VectorElementSearchService_setMaxResults(param0: number, param1: com.carto.search.VectorElementSearchService, param2: number): void;
				public static VectorElementSearchService_change_ownership(param0: com.carto.search.VectorElementSearchService, param1: number, param2: boolean): void;
				public static SwigDirector_VectorElementSearchService_findElements(param0: com.carto.search.VectorElementSearchService, param1: number): number;
				public static VectorElementSearchService_swigGetRawPtr(param0: number, param1: com.carto.search.VectorElementSearchService): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module search {
			export class VectorTileSearchService extends java.lang.Object {
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
				public setMaxResults(param0: number): void;
				public static getCPtr(param0: com.carto.search.VectorTileSearchService): number;
				public delete(): void;
				public getMaxResults(): number;
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
		export module search {
			export class VectorTileSearchServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.search.VectorTileSearchServiceModuleJNI>;
				public static delete_VectorTileSearchService(param0: number): void;
				public static SwigDirector_VectorTileSearchService_findFeatures(param0: com.carto.search.VectorTileSearchService, param1: number): number;
				public static VectorTileSearchService_getDataSource(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public static VectorTileSearchService_setMaxResults(param0: number, param1: com.carto.search.VectorTileSearchService, param2: number): void;
				public static VectorTileSearchService_getTileDecoder(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public constructor();
				public static VectorTileSearchService_swigGetRawPtr(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public static VectorTileSearchService_swigGetClassName(param0: number, param1: com.carto.search.VectorTileSearchService): string;
				public static VectorTileSearchService_director_connect(param0: com.carto.search.VectorTileSearchService, param1: number, param2: boolean, param3: boolean): void;
				public static VectorTileSearchService_setMaxZoom(param0: number, param1: com.carto.search.VectorTileSearchService, param2: number): void;
				public static new_VectorTileSearchService(param0: number, param1: com.carto.datasources.TileDataSource, param2: number, param3: com.carto.vectortiles.VectorTileDecoder): number;
				public static VectorTileSearchService_findFeaturesSwigExplicitVectorTileSearchService(param0: number, param1: com.carto.search.VectorTileSearchService, param2: number, param3: com.carto.search.SearchRequest): number;
				public static VectorTileSearchService_swigGetDirectorObject(param0: number, param1: com.carto.search.VectorTileSearchService): any;
				public static VectorTileSearchService_findFeatures(param0: number, param1: com.carto.search.VectorTileSearchService, param2: number, param3: com.carto.search.SearchRequest): number;
				public static VectorTileSearchService_getMaxZoom(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public static VectorTileSearchService_getMaxResults(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public static VectorTileSearchService_getMinZoom(param0: number, param1: com.carto.search.VectorTileSearchService): number;
				public static VectorTileSearchService_setMinZoom(param0: number, param1: com.carto.search.VectorTileSearchService, param2: number): void;
				public static VectorTileSearchService_change_ownership(param0: com.carto.search.VectorTileSearchService, param1: number, param2: boolean): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module services {
			export class CartoMapsService extends java.lang.Object {
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
			export class CartoMapsServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.services.CartoMapsServiceModuleJNI>;
				public static CartoMapsService_getUsername(param0: number, param1: com.carto.services.CartoMapsService): string;
				public static CartoMapsService_setLayerIndices(param0: number, param1: com.carto.services.CartoMapsService, param2: number, param3: com.carto.core.IntVector): void;
				public static CartoMapsService_setVectorTileBufferSize(param0: number, param1: com.carto.services.CartoMapsService, param2: number): void;
				public constructor();
				public static CartoMapsService_getAuthTokens(param0: number, param1: com.carto.services.CartoMapsService): number;
				public static CartoMapsService_swigGetRawPtr(param0: number, param1: com.carto.services.CartoMapsService): number;
				public static CartoMapsService_getAPIKey(param0: number, param1: com.carto.services.CartoMapsService): string;
				public static CartoMapsService_getVectorTileBufferSize(param0: number, param1: com.carto.services.CartoMapsService): number;
				public static CartoMapsService_isInteractive(param0: number, param1: com.carto.services.CartoMapsService): boolean;
				public static CartoMapsService_setInteractive(param0: number, param1: com.carto.services.CartoMapsService, param2: boolean): void;
				public static delete_CartoMapsService(param0: number): void;
				public static CartoMapsService_setUsername(param0: number, param1: com.carto.services.CartoMapsService, param2: string): void;
				public static CartoMapsService_getLayerIndices(param0: number, param1: com.carto.services.CartoMapsService): number;
				public static CartoMapsService_setAuthTokens(param0: number, param1: com.carto.services.CartoMapsService, param2: number, param3: com.carto.core.StringVector): void;
				public static CartoMapsService_setAPIKey(param0: number, param1: com.carto.services.CartoMapsService, param2: string): void;
				public static CartoMapsService_buildNamedMap(param0: number, param1: com.carto.services.CartoMapsService, param2: string, param3: number, param4: com.carto.core.StringVariantMap): number;
				public static CartoMapsService_setStrictMode(param0: number, param1: com.carto.services.CartoMapsService, param2: boolean): void;
				public static CartoMapsService_setDefaultVectorLayerMode(param0: number, param1: com.carto.services.CartoMapsService, param2: boolean): void;
				public static CartoMapsService_setAPITemplate(param0: number, param1: com.carto.services.CartoMapsService, param2: string): void;
				public static CartoMapsService_isDefaultVectorLayerMode(param0: number, param1: com.carto.services.CartoMapsService): boolean;
				public static CartoMapsService_setVectorTileAssetPackage(param0: number, param1: com.carto.services.CartoMapsService, param2: number, param3: com.carto.utils.AssetPackage): void;
				public static CartoMapsService_getVectorTileAssetPackage(param0: number, param1: com.carto.services.CartoMapsService): number;
				public static CartoMapsService_buildMap(param0: number, param1: com.carto.services.CartoMapsService, param2: number, param3: com.carto.core.Variant): number;
				public static CartoMapsService_isStrictMode(param0: number, param1: com.carto.services.CartoMapsService): boolean;
				public static new_CartoMapsService(): number;
				public static CartoMapsService_getAPITemplate(param0: number, param1: com.carto.services.CartoMapsService): string;
			}
		}
	}
}

declare module com {
	export module carto {
		export module services {
			export class CartoSQLService extends java.lang.Object {
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
		export module services {
			export class CartoSQLServiceModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.services.CartoSQLServiceModuleJNI>;
				public static CartoSQLService_setUsername(param0: number, param1: com.carto.services.CartoSQLService, param2: string): void;
				public static CartoSQLService_getAPITemplate(param0: number, param1: com.carto.services.CartoSQLService): string;
				public static new_CartoSQLService(): number;
				public static CartoSQLService_setAPIKey(param0: number, param1: com.carto.services.CartoSQLService, param2: string): void;
				public static CartoSQLService_getUsername(param0: number, param1: com.carto.services.CartoSQLService): string;
				public static CartoSQLService_queryData(param0: number, param1: com.carto.services.CartoSQLService, param2: string): number;
				public static delete_CartoSQLService(param0: number): void;
				public static CartoSQLService_swigGetRawPtr(param0: number, param1: com.carto.services.CartoSQLService): number;
				public static CartoSQLService_setAPITemplate(param0: number, param1: com.carto.services.CartoSQLService, param2: string): void;
				public static CartoSQLService_queryFeatures(param0: number, param1: com.carto.services.CartoSQLService, param2: string, param3: number, param4: com.carto.projections.Projection): number;
				public constructor();
				public static CartoSQLService_getAPIKey(param0: number, param1: com.carto.services.CartoSQLService): string;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class AnimationStyle extends java.lang.Object {
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
			export class AnimationStyleBuilder extends java.lang.Object {
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

declare module com {
	export module carto {
		export module styles {
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public finalize(): void;
				public getBackgroundColor(): com.carto.graphics.Color;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public getTextFontName(): string;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public getCornerRadius(): number;
				public static getCPtr(param0: com.carto.styles.BalloonPopupButtonStyle): number;
				public delete(): void;
				public getTextFontSize(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BalloonPopupButtonStyle;
				public getButtonWidth(): number;
				public static getCPtr(param0: com.carto.styles.Style): number;
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
				public finalize(): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
				public constructor();
				public getTextFontName(): string;
				public setStrokeColor(param0: com.carto.graphics.Color): void;
				public delete(): void;
				public static getCPtr(param0: com.carto.styles.BalloonPopupButtonStyleBuilder): number;
				public setTextFontSize(param0: number): void;
				public setStrokeWidth(param0: number): void;
				public getTextMargins(): com.carto.styles.BalloonPopupMargins;
				public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
				public setTextMargins(param0: com.carto.styles.BalloonPopupMargins): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public swigGetDirectorObject(): any;
				public swigGetRawPtr(): number;
				public setButtonWidth(param0: number): void;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BalloonPopupButtonStyleBuilder;
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

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
			export class BalloonPopupMargins extends java.lang.Object {
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
				public getButtonMargins(): com.carto.styles.BalloonPopupMargins;
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
				public getButtonMargins(): com.carto.styles.BalloonPopupMargins;
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
				public setButtonMargins(param0: com.carto.styles.BalloonPopupMargins): void;
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

declare module com {
	export module carto {
		export module styles {
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
			export class CartoCSSStyleSet extends java.lang.Object {
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

declare module com {
	export module carto {
		export module styles {
			export class CompiledStyleSet extends java.lang.Object {
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

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
			export class NMLModelStyle extends com.carto.styles.BillboardStyle {
				public static class: java.lang.Class<com.carto.styles.NMLModelStyle>;
				public getModelAsset(): com.carto.core.BinaryData;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.NMLModelStyle;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public static getCPtr(param0: com.carto.styles.NMLModelStyle): number;
				public swigGetDirectorObject(): any;
				public static getCPtr(param0: com.carto.styles.BillboardStyle): number;
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.Style;
				public delete(): void;
				public static getCPtr(param0: com.carto.styles.Style): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyle;
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
				public static getCPtr(param0: com.carto.styles.StyleBuilder): number;
				public getScalingMode(): com.carto.styles.BillboardScaling;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.StyleBuilder;
				public swigGetClassName(): string;
				public getOrientationMode(): com.carto.styles.BillboardOrientation;
				public setModelAsset(param0: com.carto.core.BinaryData): void;
				public swigGetDirectorObject(): any;
				public constructor();
				public swigGetRawPtr(): number;
				public delete(): void;
				public buildStyle(): com.carto.styles.NMLModelStyle;
				public static getCPtr(param0: com.carto.styles.BillboardStyleBuilder): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.BillboardStyleBuilder;
				public static getCPtr(param0: com.carto.styles.NMLModelStyleBuilder): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.styles.NMLModelStyleBuilder;
				public setOrientationMode(param0: com.carto.styles.BillboardOrientation): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
			export class StringCartoCSSStyleSetMap extends java.lang.Object {
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
			export class Style extends java.lang.Object {
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
			export class StyleBuilder extends java.lang.Object {
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

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
			export class StyleSelectorBuilderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.StyleSelectorBuilderModuleJNI>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class StyleSelectorModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.styles.StyleSelectorModuleJNI>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module styles {
			export class TextMargins extends java.lang.Object {
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
		export module styles {
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

declare module com {
	export module carto {
		export module styles {
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

declare module com {
	export module carto {
		export module ui {
			export class BalloonPopupButtonClickInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.BalloonPopupButtonClickInfo>;
				public swigCMemOwn: boolean;
				public getButton(): com.carto.vectorelements.BalloonPopupButton;
				public getClickType(): com.carto.ui.ClickType;
				public swigGetRawPtr(): number;
				public delete(): void;
				public static getCPtr(param0: com.carto.ui.BalloonPopupButtonClickInfo): number;
				public hashCode(): number;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public getVectorElement(): com.carto.vectorelements.VectorElement;
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class BalloonPopupButtonClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.BalloonPopupButtonClickInfoModuleJNI>;
				public static BalloonPopupButtonClickInfo_getClickType(param0: number, param1: com.carto.ui.BalloonPopupButtonClickInfo): number;
				public static BalloonPopupButtonClickInfo_getButton(param0: number, param1: com.carto.ui.BalloonPopupButtonClickInfo): number;
				public static BalloonPopupButtonClickInfo_getVectorElement(param0: number, param1: com.carto.ui.BalloonPopupButtonClickInfo): number;
				public static BalloonPopupButtonClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.BalloonPopupButtonClickInfo): number;
				public constructor();
				public static delete_BalloonPopupButtonClickInfo(param0: number): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class BaseMapView extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.BaseMapView>;
				public swigCMemOwn: boolean;
				public onSurfaceCreated(): void;
				public getZoom(): number;
				public setZoom(param0: number, param1: number): void;
				public onSurfaceDestroyed(): void;
				public finalize(): void;
				public finishRendering(): void;
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
			export class BaseMapViewModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.BaseMapViewModuleJNI>;
				public static BaseMapView_onSurfaceChanged(param0: number, param1: com.carto.ui.BaseMapView, param2: number, param3: number): void;
				public static BaseMapView_registerLicense(param0: string, param1: number, param2: com.carto.components.LicenseManagerListener): boolean;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
			export class ClickTypeModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.ClickTypeModuleJNI>;
				public constructor();
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
				public finalize(): void;
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
			export class MapClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapClickInfoModuleJNI>;
				public static delete_MapClickInfo(param0: number): void;
				public static MapClickInfo_getClickPos(param0: number, param1: com.carto.ui.MapClickInfo): number;
				public static MapClickInfo_getClickType(param0: number, param1: com.carto.ui.MapClickInfo): number;
				public static MapClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.MapClickInfo): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class MapEventListener extends java.lang.Object {
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
				public onMapInteraction(param0: com.carto.ui.MapInteractionInfo): void;
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
			export class MapEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapEventListenerModuleJNI>;
				public static MapEventListener_onMapIdle(param0: number, param1: com.carto.ui.MapEventListener): void;
				public static MapEventListener_onMapInteractionSwigExplicitMapEventListener(param0: number, param1: com.carto.ui.MapEventListener, param2: number, param3: com.carto.ui.MapInteractionInfo): void;
				public static MapEventListener_swigGetDirectorObject(param0: number, param1: com.carto.ui.MapEventListener): any;
				public static MapEventListener_onMapIdleSwigExplicitMapEventListener(param0: number, param1: com.carto.ui.MapEventListener): void;
				public static MapEventListener_onMapInteraction(param0: number, param1: com.carto.ui.MapEventListener, param2: number, param3: com.carto.ui.MapInteractionInfo): void;
				public static SwigDirector_MapEventListener_onMapIdle(param0: com.carto.ui.MapEventListener): void;
				public static SwigDirector_MapEventListener_onMapMoved(param0: com.carto.ui.MapEventListener): void;
				public static delete_MapEventListener(param0: number): void;
				public static MapEventListener_swigGetClassName(param0: number, param1: com.carto.ui.MapEventListener): string;
				public constructor();
				public static MapEventListener_onMapClickedSwigExplicitMapEventListener(param0: number, param1: com.carto.ui.MapEventListener, param2: number, param3: com.carto.ui.MapClickInfo): void;
				public static MapEventListener_swigGetRawPtr(param0: number, param1: com.carto.ui.MapEventListener): number;
				public static SwigDirector_MapEventListener_onMapStable(param0: com.carto.ui.MapEventListener): void;
				public static MapEventListener_onMapMoved(param0: number, param1: com.carto.ui.MapEventListener): void;
				public static MapEventListener_change_ownership(param0: com.carto.ui.MapEventListener, param1: number, param2: boolean): void;
				public static MapEventListener_onMapStable(param0: number, param1: com.carto.ui.MapEventListener): void;
				public static MapEventListener_onMapMovedSwigExplicitMapEventListener(param0: number, param1: com.carto.ui.MapEventListener): void;
				public static MapEventListener_onMapStableSwigExplicitMapEventListener(param0: number, param1: com.carto.ui.MapEventListener): void;
				public static MapEventListener_director_connect(param0: com.carto.ui.MapEventListener, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_MapEventListener_onMapClicked(param0: com.carto.ui.MapEventListener, param1: number): void;
				public static SwigDirector_MapEventListener_onMapInteraction(param0: com.carto.ui.MapEventListener, param1: number): void;
				public static MapEventListener_onMapClicked(param0: number, param1: com.carto.ui.MapEventListener, param2: number, param3: com.carto.ui.MapClickInfo): void;
				public static new_MapEventListener(): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class MapInteractionInfo extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapInteractionInfo>;
				public swigCMemOwn: boolean;
				public isPanAction(): boolean;
				public swigGetRawPtr(): number;
				public isRotateAction(): boolean;
				public delete(): void;
				public hashCode(): number;
				public static getCPtr(param0: com.carto.ui.MapInteractionInfo): number;
				public finalize(): void;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: boolean);
				public isZoomAction(): boolean;
				public isTiltAction(): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class MapInteractionInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.MapInteractionInfoModuleJNI>;
				public static MapInteractionInfo_isTiltAction(param0: number, param1: com.carto.ui.MapInteractionInfo): boolean;
				public static MapInteractionInfo_isZoomAction(param0: number, param1: com.carto.ui.MapInteractionInfo): boolean;
				public static MapInteractionInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.MapInteractionInfo): number;
				public static MapInteractionInfo_isRotateAction(param0: number, param1: com.carto.ui.MapInteractionInfo): boolean;
				public static MapInteractionInfo_isPanAction(param0: number, param1: com.carto.ui.MapInteractionInfo): boolean;
				public constructor();
				public static delete_MapInteractionInfo(param0: number): void;
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
				public delete(): void;
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
			export class NMLModelLODTreeClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.NMLModelLODTreeClickInfoModuleJNI>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class PopupClickInfo extends java.lang.Object {
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
			export class PopupClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.PopupClickInfoModuleJNI>;
				public static PopupClickInfo_getClickPos(param0: number, param1: com.carto.ui.PopupClickInfo): number;
				public static delete_PopupClickInfo(param0: number): void;
				public static PopupClickInfo_getPopup(param0: number, param1: com.carto.ui.PopupClickInfo): number;
				public static PopupClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.PopupClickInfo): number;
				public static PopupClickInfo_getClickType(param0: number, param1: com.carto.ui.PopupClickInfo): number;
				public static PopupClickInfo_getElementClickPos(param0: number, param1: com.carto.ui.PopupClickInfo): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class PopupDrawInfo extends java.lang.Object {
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

declare module com {
	export module carto {
		export module ui {
			export class RasterTileClickInfo extends java.lang.Object {
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
			export class RasterTileClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.RasterTileClickInfoModuleJNI>;
				public static RasterTileClickInfo_getMapTile(param0: number, param1: com.carto.ui.RasterTileClickInfo): number;
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
				public delete(): void;
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
			export class UTFGridClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.UTFGridClickInfoModuleJNI>;
				public static UTFGridClickInfo_getClickPos(param0: number, param1: com.carto.ui.UTFGridClickInfo): number;
				public static delete_UTFGridClickInfo(param0: number): void;
				public static UTFGridClickInfo_getClickType(param0: number, param1: com.carto.ui.UTFGridClickInfo): number;
				public static UTFGridClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.UTFGridClickInfo): number;
				public static UTFGridClickInfo_getElementInfo(param0: number, param1: com.carto.ui.UTFGridClickInfo): number;
				public static UTFGridClickInfo_getLayer(param0: number, param1: com.carto.ui.UTFGridClickInfo): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module ui {
			export class VectorElementClickInfo extends java.lang.Object {
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
			export class VectorElementClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorElementClickInfoModuleJNI>;
				public static delete_VectorElementClickInfo(param0: number): void;
				public static VectorElementClickInfo_getVectorElement(param0: number, param1: com.carto.ui.VectorElementClickInfo): number;
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

declare module com {
	export module carto {
		export module ui {
			export class VectorElementDragInfo extends java.lang.Object {
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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
		export module ui {
			export class VectorTileClickInfoModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.ui.VectorTileClickInfoModuleJNI>;
				public static VectorTileClickInfo_getClickPos(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_getFeatureClickPos(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_getMapTile(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_getFeature(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_getFeatureId(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_getFeatureLayerName(param0: number, param1: com.carto.ui.VectorTileClickInfo): string;
				public static VectorTileClickInfo_getLayer(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static delete_VectorTileClickInfo(param0: number): void;
				public static VectorTileClickInfo_getClickType(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public static VectorTileClickInfo_swigGetRawPtr(param0: number, param1: com.carto.ui.VectorTileClickInfo): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module utils {
			export class AndroidUtils extends java.lang.Object {
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

declare module com {
	export module carto {
		export module utils {
			export class AssetPackage extends java.lang.Object {
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
			export class AssetPackageModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.AssetPackageModuleJNI>;
				public static new_AssetPackage(): number;
				public static AssetPackage_swigGetDirectorObject(param0: number, param1: com.carto.utils.AssetPackage): any;
				public static AssetPackage_change_ownership(param0: com.carto.utils.AssetPackage, param1: number, param2: boolean): void;
				public static AssetPackage_loadAsset(param0: number, param1: com.carto.utils.AssetPackage, param2: string): number;
				public static AssetPackage_getAssetNames(param0: number, param1: com.carto.utils.AssetPackage): number;
				public static SwigDirector_AssetPackage_loadAsset(param0: com.carto.utils.AssetPackage, param1: string): number;
				public static AssetPackage_director_connect(param0: com.carto.utils.AssetPackage, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_AssetPackage_getAssetNames(param0: com.carto.utils.AssetPackage): number;
				public static delete_AssetPackage(param0: number): void;
				public static AssetPackage_swigGetRawPtr(param0: number, param1: com.carto.utils.AssetPackage): number;
				public static AssetPackage_swigGetClassName(param0: number, param1: com.carto.utils.AssetPackage): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module carto {
		export module utils {
			export class AssetUtils extends java.lang.Object {
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

declare module com {
	export module carto {
		export module utils {
			export class BitmapUtils extends java.lang.Object {
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

declare module com {
	export module carto {
		export module utils {
			export class Log extends java.lang.Object {
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
			export class LogEventListener extends java.lang.Object {
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
			export class LogEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.LogEventListenerModuleJNI>;
				public static SwigDirector_LogEventListener_onDebugEvent(param0: com.carto.utils.LogEventListener, param1: string): boolean;
				public static LogEventListener_onErrorEvent(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static LogEventListener_swigGetClassName(param0: number, param1: com.carto.utils.LogEventListener): string;
				public static LogEventListener_onWarnEventSwigExplicitLogEventListener(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static LogEventListener_onErrorEventSwigExplicitLogEventListener(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static delete_LogEventListener(param0: number): void;
				public static LogEventListener_onFatalEventSwigExplicitLogEventListener(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public constructor();
				public static LogEventListener_onDebugEventSwigExplicitLogEventListener(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static LogEventListener_onFatalEvent(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static SwigDirector_LogEventListener_onErrorEvent(param0: com.carto.utils.LogEventListener, param1: string): boolean;
				public static LogEventListener_onInfoEventSwigExplicitLogEventListener(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static LogEventListener_director_connect(param0: com.carto.utils.LogEventListener, param1: number, param2: boolean, param3: boolean): void;
				public static LogEventListener_change_ownership(param0: com.carto.utils.LogEventListener, param1: number, param2: boolean): void;
				public static LogEventListener_onWarnEvent(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static LogEventListener_swigGetDirectorObject(param0: number, param1: com.carto.utils.LogEventListener): any;
				public static new_LogEventListener(): number;
				public static LogEventListener_onInfoEvent(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static LogEventListener_swigGetRawPtr(param0: number, param1: com.carto.utils.LogEventListener): number;
				public static SwigDirector_LogEventListener_onFatalEvent(param0: com.carto.utils.LogEventListener, param1: string): boolean;
				public static LogEventListener_onDebugEvent(param0: number, param1: com.carto.utils.LogEventListener, param2: string): boolean;
				public static SwigDirector_LogEventListener_onInfoEvent(param0: com.carto.utils.LogEventListener, param1: string): boolean;
				public static SwigDirector_LogEventListener_onWarnEvent(param0: com.carto.utils.LogEventListener, param1: string): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module utils {
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

declare module com {
	export module carto {
		export module utils {
			export class TileUtils extends java.lang.Object {
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
			export class TileUtilsModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.utils.TileUtilsModuleJNI>;
				public static TileUtils_calculateMapTile(param0: number, param1: com.carto.core.MapPos, param2: number, param3: number, param4: com.carto.projections.Projection): number;
				public static TileUtils_calculateMapTileOrigin(param0: number, param1: com.carto.core.MapTile, param2: number, param3: com.carto.projections.Projection): number;
				public static delete_TileUtils(param0: number): void;
				public static TileUtils_calculateMapTileBounds(param0: number, param1: com.carto.core.MapTile, param2: number, param3: com.carto.projections.Projection): number;
				public constructor();
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
		export module utils {
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

declare module com {
	export module carto {
		export module vectorelements {
			export class BalloonPopup extends com.carto.vectorelements.Popup {
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopup>;
				public static getCPtr(param0: com.carto.vectorelements.Popup): number;
				public removeButton(param0: com.carto.vectorelements.BalloonPopupButton): void;
				public addButton(param0: com.carto.vectorelements.BalloonPopupButton): void;
				public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
				public constructor(param0: com.carto.vectorelements.Billboard, param1: com.carto.styles.BalloonPopupStyle, param2: string, param3: string);
				public clearButtons(): void;
				public finalize(): void;
				public getDescription(): string;
				public setBalloonPopupEventListener(param0: com.carto.vectorelements.BalloonPopupEventListener): void;
				public setStyle(param0: com.carto.styles.BalloonPopupStyle): void;
				public getBalloonPopupEventListener(): com.carto.vectorelements.BalloonPopupEventListener;
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
				public replaceButton(param0: com.carto.vectorelements.BalloonPopupButton, param1: com.carto.vectorelements.BalloonPopupButton): void;
				public setDescription(param0: string): void;
				public getStyle(): com.carto.styles.BalloonPopupStyle;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.BalloonPopup;
				public processClick(param0: com.carto.ui.ClickType, param1: com.carto.core.MapPos, param2: com.carto.core.ScreenPos): boolean;
			}
		}
	}
}

declare module com {
	export module carto {
		export module vectorelements {
			export class BalloonPopupButton extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopupButton>;
				public swigCMemOwn: boolean;
				public setTag(param0: com.carto.core.Variant): void;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public static getCPtr(param0: com.carto.vectorelements.BalloonPopupButton): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.BalloonPopupButton;
				public constructor(param0: com.carto.styles.BalloonPopupButtonStyle, param1: string);
				public swigGetDirectorObject(): any;
				public getText(): string;
				public swigGetRawPtr(): number;
				public getTag(): com.carto.core.Variant;
				public delete(): void;
				public getStyle(): com.carto.styles.BalloonPopupButtonStyle;
			}
		}
	}
}

declare module com {
	export module carto {
		export module vectorelements {
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

declare module com {
	export module carto {
		export module vectorelements {
			export class BalloonPopupEventListener extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopupEventListener>;
				public swigCMemOwn: boolean;
				public swigReleaseOwnership(): void;
				public swigDirectorDisconnect(): void;
				public onButtonClicked(param0: com.carto.ui.BalloonPopupButtonClickInfo): boolean;
				public finalize(): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.BalloonPopupEventListener;
				public swigGetDirectorObject(): any;
				public constructor();
				public static getCPtr(param0: com.carto.vectorelements.BalloonPopupEventListener): number;
				public swigGetRawPtr(): number;
				public delete(): void;
				public swigTakeOwnership(): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module vectorelements {
			export class BalloonPopupEventListenerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.BalloonPopupEventListenerModuleJNI>;
				public static BalloonPopupEventListener_director_connect(param0: com.carto.vectorelements.BalloonPopupEventListener, param1: number, param2: boolean, param3: boolean): void;
				public static SwigDirector_BalloonPopupEventListener_onButtonClicked(param0: com.carto.vectorelements.BalloonPopupEventListener, param1: number): boolean;
				public static BalloonPopupEventListener_swigGetClassName(param0: number, param1: com.carto.vectorelements.BalloonPopupEventListener): string;
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

declare module com {
	export module carto {
		export module vectorelements {
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
				public static BalloonPopup_processClick(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: number, param3: number, param4: com.carto.core.MapPos, param5: number, param6: com.carto.core.ScreenPos): boolean;
				public static BalloonPopup_drawBitmap(param0: number, param1: com.carto.vectorelements.BalloonPopup, param2: number, param3: com.carto.core.ScreenPos, param4: number, param5: number, param6: number): number;
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
			export class CustomPopupHandler extends java.lang.Object {
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
			export class CustomPopupHandlerModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.CustomPopupHandlerModuleJNI>;
				public static CustomPopupHandler_onDrawPopup(param0: number, param1: com.carto.vectorelements.CustomPopupHandler, param2: number, param3: com.carto.ui.PopupDrawInfo): number;
				public static SwigDirector_CustomPopupHandler_onDrawPopup(param0: com.carto.vectorelements.CustomPopupHandler, param1: number): number;
				public static CustomPopupHandler_onPopupClicked(param0: number, param1: com.carto.vectorelements.CustomPopupHandler, param2: number, param3: com.carto.ui.PopupClickInfo): boolean;
				public static SwigDirector_CustomPopupHandler_onPopupClicked(param0: com.carto.vectorelements.CustomPopupHandler, param1: number): boolean;
				public static CustomPopupHandler_swigGetDirectorObject(param0: number, param1: com.carto.vectorelements.CustomPopupHandler): any;
				public constructor();
				public static new_CustomPopupHandler(): number;
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

declare module com {
	export module carto {
		export module vectorelements {
			export class CustomPopupModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectorelements.CustomPopupModuleJNI>;
				public static CustomPopup_swigGetClassName(param0: number, param1: com.carto.vectorelements.CustomPopup): string;
				public static new_CustomPopup__SWIG_0(param0: number, param1: com.carto.vectorelements.Billboard, param2: number, param3: com.carto.styles.PopupStyle, param4: number, param5: com.carto.vectorelements.CustomPopupHandler): number;
				public static new_CustomPopup__SWIG_1(param0: number, param1: com.carto.geometry.Geometry, param2: number, param3: com.carto.styles.PopupStyle, param4: number, param5: com.carto.vectorelements.CustomPopupHandler): number;
				public static delete_CustomPopup(param0: number): void;
				public static CustomPopup_processClick(param0: number, param1: com.carto.vectorelements.CustomPopup, param2: number, param3: number, param4: com.carto.core.MapPos, param5: number, param6: com.carto.core.ScreenPos): boolean;
				public static CustomPopup_swigGetRawPtr(param0: number, param1: com.carto.vectorelements.CustomPopup): number;
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

declare module com {
	export module carto {
		export module vectorelements {
			export class NMLModel extends com.carto.vectorelements.Billboard {
				public static class: java.lang.Class<com.carto.vectorelements.NMLModel>;
				public setRotationAxis(param0: com.carto.core.MapVec): void;
				public getStyle(): com.carto.styles.NMLModelStyle;
				public getScale(): number;
				public static getCPtr(param0: com.carto.vectorelements.Billboard): number;
				public finalize(): void;
				public setRotation(param0: com.carto.core.MapVec, param1: number): void;
				public constructor(param0: com.carto.vectorelements.Billboard, param1: com.carto.styles.NMLModelStyle);
				public setStyle(param0: com.carto.styles.NMLModelStyle): void;
				public delete(): void;
				/** @deprecated */
				public setRotationAngle(param0: number): void;
				public static getCPtr(param0: com.carto.vectorelements.VectorElement): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.Billboard;
				/** @deprecated */
				public getRotationAngle(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
				public static getCPtr(param0: com.carto.vectorelements.NMLModel): number;
				public getRotationAxis(): com.carto.core.MapVec;
				public setScale(param0: number): void;
				public constructor(param0: number, param1: boolean);
				public swigGetClassName(): string;
				public constructor(param0: com.carto.core.MapPos, param1: com.carto.styles.NMLModelStyle);
				public swigGetDirectorObject(): any;
				public constructor(param0: com.carto.geometry.Geometry, param1: com.carto.styles.NMLModelStyle);
				public swigGetRawPtr(): number;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.NMLModel;
				public setRotation(param0: number): void;
			}
		}
	}
}

declare module com {
	export module carto {
		export module vectorelements {
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

declare module com {
	export module carto {
		export module vectorelements {
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
				public processClick(param0: com.carto.ui.ClickType, param1: com.carto.core.MapPos, param2: com.carto.core.ScreenPos): boolean;
				public static swigCreatePolymorphicInstance(param0: number, param1: boolean): com.carto.vectorelements.VectorElement;
				public getAnchorPointX(): number;
			}
		}
	}
}

declare module com {
	export module carto {
		export module vectorelements {
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
				public static Popup_processClick(param0: number, param1: com.carto.vectorelements.Popup, param2: number, param3: number, param4: com.carto.core.MapPos, param5: number, param6: com.carto.core.ScreenPos): boolean;
				public static delete_Popup(param0: number): void;
				public static Popup_setAnchorPointY(param0: number, param1: com.carto.vectorelements.Popup, param2: number): void;
				public static Popup_swigGetClassName(param0: number, param1: com.carto.vectorelements.Popup): string;
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

declare module com {
	export module carto {
		export module vectorelements {
			export class VectorElement extends java.lang.Object {
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

declare module com {
	export module carto {
		export module vectorelements {
			export class VectorElementVector extends java.lang.Object {
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
			export class CartoVectorTileDecoderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectortiles.CartoVectorTileDecoderModuleJNI>;
				public static CartoVectorTileDecoder_setLayerStyleSet(param0: number, param1: com.carto.vectortiles.CartoVectorTileDecoder, param2: string, param3: number, param4: com.carto.styles.CartoCSSStyleSet): void;
				public static CartoVectorTileDecoder_swigGetRawPtr(param0: number, param1: com.carto.vectortiles.CartoVectorTileDecoder): number;
				public constructor();
				public static CartoVectorTileDecoder_swigGetDirectorObject(param0: number, param1: com.carto.vectortiles.CartoVectorTileDecoder): any;
				public static new_CartoVectorTileDecoder(param0: number, param1: com.carto.core.StringVector, param2: number, param3: com.carto.styles.StringCartoCSSStyleSetMap): number;
				public static CartoVectorTileDecoder_swigGetClassName(param0: number, param1: com.carto.vectortiles.CartoVectorTileDecoder): string;
				public static CartoVectorTileDecoder_getLayerIds(param0: number, param1: com.carto.vectortiles.CartoVectorTileDecoder): number;
				public static CartoVectorTileDecoder_SWIGSmartPtrUpcast(param0: number): number;
				public static CartoVectorTileDecoder_addFallbackFont(param0: number, param1: com.carto.vectortiles.CartoVectorTileDecoder, param2: number, param3: com.carto.core.BinaryData): void;
				public static CartoVectorTileDecoder_setLayerVisible(param0: number, param1: com.carto.vectortiles.CartoVectorTileDecoder, param2: string, param3: boolean): void;
				public static CartoVectorTileDecoder_getLayerStyleSet(param0: number, param1: com.carto.vectortiles.CartoVectorTileDecoder, param2: string): number;
				public static CartoVectorTileDecoder_getMinZoom(param0: number, param1: com.carto.vectortiles.CartoVectorTileDecoder): number;
				public static CartoVectorTileDecoder_isLayerVisible(param0: number, param1: com.carto.vectortiles.CartoVectorTileDecoder, param2: string): boolean;
				public static delete_CartoVectorTileDecoder(param0: number): void;
				public static CartoVectorTileDecoder_getMaxZoom(param0: number, param1: com.carto.vectortiles.CartoVectorTileDecoder): number;
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
			export class MBVectorTileDecoderModuleJNI extends java.lang.Object {
				public static class: java.lang.Class<com.carto.vectortiles.MBVectorTileDecoderModuleJNI>;
				public static MBVectorTileDecoder_getCartoCSSStyleSet(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder): number;
				public static MBVectorTileDecoder_setCartoCSSStyleSet(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder, param2: number, param3: com.carto.styles.CartoCSSStyleSet): void;
				public static new_MBVectorTileDecoder__SWIG_0(param0: number, param1: com.carto.styles.CompiledStyleSet): number;
				public static MBVectorTileDecoder_SWIGSmartPtrUpcast(param0: number): number;
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
				public static MBVectorTileDecoder_swigGetClassName(param0: number, param1: com.carto.vectortiles.MBVectorTileDecoder): string;
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
				public getMaxZoom(): number;
				public swigGetDirectorObject(): any;
				public setStyleSet(param0: com.carto.styles.CartoCSSStyleSet): void;
				public swigGetRawPtr(): number;
				public getResolution(): number;
				public static getCPtr(param0: com.carto.vectortiles.TorqueTileDecoder): number;
				public delete(): void;
				public getAnimationDuration(): number;
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

declare module com {
	export module carto {
		export module vectortiles {
			export class VectorTileDecoder extends java.lang.Object {
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

declare module com {
	export module carto {
		export module vectortiles {
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

