export declare function nativeVectorToArray(nVector: com.carto.core.StringVector): any[];
export declare function nativeVariantToJS(variant: com.carto.core.Variant): {};
export declare function nativeMapToJS(theMap: com.carto.core.StringVariantMap): {};
export interface LogEventListener extends com.carto.utils.LogEventListener {
    new (): LogEventListener;
}
export declare function setShowDebug(value: boolean): void;
