/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run typings.android` / `npm run typings.ios`.


declare class MassifMapsAdditionsUtils extends NSObject {

    static alloc(): MassifMapsAdditionsUtils; // inherited from NSObject

    static distanceToEndWithIntPoly(index: number, poly: MSFMapPosVector): number;

    static isLocationOnPoly(point: MSFMapPos, poly: MSFMapPosVector): number;

    static isLocationOnPolyClosed(point: MSFMapPos, poly: MSFMapPosVector, closed: boolean): number;

    static isLocationOnPolyClosedGeodesic(point: MSFMapPos, poly: MSFMapPosVector, closed: boolean, geodesic: boolean): number;

    static isLocationOnPolyClosedGeodesicToleranceEarth(point: MSFMapPos, poly: MSFMapPosVector, closed: boolean, geodesic: boolean, toleranceEarth: number): number;

    static new(): MassifMapsAdditionsUtils; // inherited from NSObject

    static toNTColor(color: UIColor): MSFColor;
}

declare class NSMSFCelestialEventListener extends MSFCelestialEventListener {

    static alloc(): NSMSFCelestialEventListener; // inherited from NSObject

    static new(): NSMSFCelestialEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onCelestialObjectClickedThreadedCelestialObject(clickInfo: MSFClickInfo, celestialObject: MSFCelestialObject): boolean;
}

declare class NSMSFClusterElementBuilder extends MSFClusterElementBuilder {

    static alloc(): NSMSFClusterElementBuilder; // inherited from NSObject

    static new(): NSMSFClusterElementBuilder; // inherited from NSObject

    setBbox(value: boolean): void;

    setBitmap(value: UIImage): void;

    setColor(value: UIColor): void;

    setFont(value: UIFont): void;

    setShape(value: string): void;

    setSize(value: number): void;

    setTextColor(value: UIColor): void;

    setTextSize(value: number): void;
}

declare class NSMSFRasterTileEventListener extends MSFRasterTileEventListener {

    static alloc(): NSMSFRasterTileEventListener; // inherited from NSObject

    static new(): NSMSFRasterTileEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onRasterTileClickedThreaded(clickInfo: MSFRasterTileClickInfo): boolean;
}

declare class NSMSFRendererCaptureListener extends MSFRendererCaptureListener {

    static alloc(): NSMSFRendererCaptureListener; // inherited from NSObject

    static new(): NSMSFRendererCaptureListener; // inherited from NSObject

    runOnMainThread: boolean;

    onMapRenderedThreaded(bitmap: MSFBitmap): void;
}

declare class NSMSFTileDownloadListener extends MSFTileDownloadListener {

    static alloc(): NSMSFTileDownloadListener; // inherited from NSObject

    static new(): NSMSFTileDownloadListener; // inherited from NSObject

    runOnMainThread: boolean;

    onDownloadCompletedThreaded(): void;

    onDownloadFailedThreaded(tile: MSFMapTile): void;

    onDownloadProgressThreaded(progress: number): void;

    onDownloadStartingThreaded(tileCount: number): void;
}

declare class NSMSFVectorEditEventListener extends MSFVectorEditEventListener {

    static alloc(): NSMSFVectorEditEventListener; // inherited from NSObject

    static new(): NSMSFVectorEditEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onDragEndThreaded(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onDragMoveThreaded(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onDragStartThreaded(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onElementDeleteThreaded(element: MSFVectorElement): void;

    onElementDeselectedThreaded(element: MSFVectorElement): void;

    onElementModifyThreadedGeometry(element: MSFVectorElement, geometry: MSFGeometry): void;

    onElementSelectThreaded(element: MSFVectorElement): boolean;

    onSelectDragPointStyleThreadedDragPointStyle(element: MSFVectorElement, dragPointStyle: MSFVectorElementDragPointStyle): MSFPointStyle;
}

declare class NSMSFVectorElementEventListener extends MSFVectorElementEventListener {

    static alloc(): NSMSFVectorElementEventListener; // inherited from NSObject

    static new(): NSMSFVectorElementEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onVectorElementClickedThreaded(clickInfo: MSFVectorElementClickInfo): boolean;
}

declare class NSMSFVectorTileEventListener extends MSFVectorTileEventListener {

    static alloc(): NSMSFVectorTileEventListener; // inherited from NSObject

    static new(): NSMSFVectorTileEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onVectorTileClickedThreaded(clickInfo: MSFVectorTileClickInfo): boolean;
}

declare class NSMSFFeatureCollectionSearchService extends MSFFeatureCollectionSearchService {

    static alloc(): NSMSFFeatureCollectionSearchService; // inherited from NSObject

    static new(): NSMSFFeatureCollectionSearchService; // inherited from NSObject

    findFeaturesCallback(request: MSFSearchRequest, callback: (p1: MSFFeatureCollection) => void): void;
}

declare class NSMSFGeocodingServiceAdditions extends NSObject {

    static alloc(): NSMSFGeocodingServiceAdditions; // inherited from NSObject

    static calculateAddress(service: MSFGeocodingService, request: MSFGeocodingRequest, callback: (p1: MSFGeocodingResultVector, p2: NSException) => void): void;

    static calculateAddressReverse(service: MSFReverseGeocodingService, request: MSFReverseGeocodingRequest, callback: (p1: MSFGeocodingResultVector, p2: NSException) => void): void;

    static new(): NSMSFGeocodingServiceAdditions; // inherited from NSObject

    static setRunOnMainThread(value: boolean): void;

    static runOnMainThread: boolean;
}

declare class NSMSFHillshadeRasterTileLayer extends MSFHillshadeRasterTileLayer {

    static alloc(): NSMSFHillshadeRasterTileLayer; // inherited from NSObject

    static new(): NSMSFHillshadeRasterTileLayer; // inherited from NSObject

    runOnMainThread: boolean;

    getElevationCallback(pos: MSFMapPos, callback: (p1: number) => void): void;

    getElevationsCallback(pos: MSFMapPosVector, callback: (p1: MSFDoubleVector) => void): void;
}

interface NSMSFMapEventListener {

    onMapClicked(mapClickInfo: MSFMapClickInfo): void;

    onMapIdle(): void;

    onMapInteraction(mapInteractionInfo: MSFMapInteractionInfo, reason: number): void;

    onMapMoved(reason: number): void;

    onMapStable(reason: number): void;
}

declare var NSMSFMapEventListener: {  prototype: NSMSFMapEventListener; };

declare class NSMSFMapView extends MSFMapView {

    static alloc(): NSMSFMapView; // inherited from NSObject

    static appearance(): NSMSFMapView; // inherited from UIAppearance

    /**
     * @since 8.0
     */
    static appearanceForTraitCollection(trait: UITraitCollection): NSMSFMapView; // inherited from UIAppearance

    /**
     * @since 8.0
     * @deprecated 9.0
     */
    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSMSFMapView; // inherited from UIAppearance

    /**
     * @since 9.0
     */
    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NSMSFMapView; // inherited from UIAppearance

    /**
     * @since 5.0
     * @deprecated 9.0
     */
    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSMSFMapView; // inherited from UIAppearance

    /**
     * @since 9.0
     */
    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NSMSFMapView; // inherited from UIAppearance

    static new(): NSMSFMapView; // inherited from NSObject

    static setRUN_ON_MAIN_THREAD(value: boolean): void;

    static setRunOnMainThreadWithValue(value: boolean): void;

    listener: NSMSFMapEventListener;

    static RUN_ON_MAIN_THREAD: boolean;

    setAKMapEventListener(listener: NSMSFMapEventListener): void;
}

declare class NSMSFRoutingServiceAdditions extends NSObject {

    static alloc(): NSMSFRoutingServiceAdditions; // inherited from NSObject

    static calculateRoute(service: MSFRoutingService, request: MSFRoutingRequest, profile: string, stringifyResult: boolean, callback: (p1: MSFRoutingResult, p2: string, p3: NSException) => void): void;

    static matchRoute(service: MSFRoutingService, request: MSFRouteMatchingRequest, profile: string, callback: (p1: MSFRouteMatchingResult, p2: NSException) => void): void;

    static new(): NSMSFRoutingServiceAdditions; // inherited from NSObject

    static setRunOnMainThread(value: boolean): void;

    static stringifyRouteResult(result: MSFRoutingResult): string;

    static runOnMainThread: boolean;
}

declare class NSMSFVectorTileSearchService extends MSFVectorTileSearchService {

    static alloc(): NSMSFVectorTileSearchService; // inherited from NSObject

    static new(): NSMSFVectorTileSearchService; // inherited from NSObject

    findFeaturesCallback(request: MSFSearchRequest, callback: (p1: MSFVectorTileFeatureCollection, p2: NSException) => void): void;
}
