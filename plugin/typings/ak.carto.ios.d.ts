/// <reference path="./carto.ios.d.ts" />
// declare class AKHTTPTileDataSource extends NTHTTPTileDataSource {
//     static alloc(): AKHTTPTileDataSource;
//     static new(): AKHTTPTileDataSource;
//     constructor(o?: { minZoom: number; maxZoom: number; baseURL: string });
//     setAutoHD(value: boolean);
// }

declare class CartoAdditionsUtils extends NSObject {
    static alloc(): CartoAdditionsUtils; // inherited from NSObject

    static distanceToEndWithIntPoly(index: number, poly: NTMapPosVector): number;

    static isLocationOnPoly(point: NTMapPos, poly: NTMapPosVector): number;

    static isLocationOnPolyClosed(point: NTMapPos, poly: NTMapPosVector, closed: boolean): number;

    static isLocationOnPolyClosedGeodesic(point: NTMapPos, poly: NTMapPosVector, closed: boolean, geodesic: boolean): number;

    static isLocationOnPolyClosedGeodesicToleranceEarth(point: NTMapPos, poly: NTMapPosVector, closed: boolean, geodesic: boolean, toleranceEarth: number): number;

    static new(): CartoAdditionsUtils; // inherited from NSObject
}

declare class AkMarkerClusterElementBuilder extends NTClusterElementBuilder {}
