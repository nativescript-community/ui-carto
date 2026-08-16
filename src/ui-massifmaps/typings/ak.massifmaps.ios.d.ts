/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/unified-signatures */

declare class MassifMapsAdditionsUtils extends NSObject {
    static alloc(): MassifMapsAdditionsUtils; // inherited from NSObject

    static distanceToEndWithIntPoly(index: number, poly: MSFMapPosVector): number;

    static isLocationOnPoly(point: MSFMapPos, poly: MSFMapPosVector): number;

    static isLocationOnPolyClosed(point: MSFMapPos, poly: MSFMapPosVector, closed: boolean): number;

    static isLocationOnPolyClosedGeodesic(point: MSFMapPos, poly: MSFMapPosVector, closed: boolean, geodesic: boolean): number;

    static isLocationOnPolyClosedGeodesicToleranceEarth(point: MSFMapPos, poly: MSFMapPosVector, closed: boolean, geodesic: boolean, toleranceEarth: number): number;

    static new(): MassifMapsAdditionsUtils; // inherited from NSObject
}

declare class AkClusterElementBuilder extends MSFClusterElementBuilder {}

declare class AKFeatureCollectionSearchService extends MSFFeatureCollectionSearchService {
    static alloc(): AKFeatureCollectionSearchService; // inherited from NSObject

    static new(): AKFeatureCollectionSearchService; // inherited from NSObject

    findFeaturesCallback(request: MSFSearchRequest, callback: (p1: MSFFeatureCollection) => void): void;
}

declare class AKGeocodingServiceAdditions extends NSObject {
    static alloc(): AKGeocodingServiceAdditions; // inherited from NSObject

    static calculateAddress(service: MSFGeocodingService, request: MSFGeocodingRequest, callback: (p1: MSFGeocodingResultVector, p2: NSException) => void): void;

    static calculateAddressReverse(service: MSFReverseGeocodingService, request: MSFReverseGeocodingRequest, callback: (p1: MSFGeocodingResultVector, p2: NSException) => void): void;

    static new(): AKGeocodingServiceAdditions; // inherited from NSObject

    static setRunOnMainThread(value: boolean): void;

    static runOnMainThread: boolean;
}

declare class AKHillshadeRasterTileLayer extends MSFHillshadeRasterTileLayer {
    static alloc(): AKHillshadeRasterTileLayer; // inherited from NSObject

    static new(): AKHillshadeRasterTileLayer; // inherited from NSObject

    runOnMainThread: boolean;

    getElevationCallback(pos: MSFMapPos, callback: (p1: number) => void): void;

    getElevationsCallback(pos: MSFMapPosVector, callback: (p1: MSFDoubleVector) => void): void;
}

interface AKMapEventListener {
    onMapClicked(mapClickInfo: MSFMapClickInfo): void;

    onMapIdle(): void;

    onMapInteraction(mapInteractionInfo: MSFMapInteractionInfo, userAction: boolean): void;

    onMapMoved(userAction: boolean): void;

    onMapStable(userAction: boolean): void;
}
declare let AKMapEventListener: {
    prototype: AKMapEventListener;
};

declare class AKMapView extends MSFMapView {
    static alloc(): AKMapView; // inherited from NSObject

    static appearance(): AKMapView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): AKMapView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AKMapView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): AKMapView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AKMapView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): AKMapView; // inherited from UIAppearance

    static new(): AKMapView; // inherited from NSObject

    static setRUN_ON_MAIN_THREAD(value: boolean): void;

    static setRunOnMainThreadWithValue(value: boolean): void;

    listener: AKMapEventListener;

    userAction: boolean;

    static RUN_ON_MAIN_THREAD: boolean;

    setAKMapEventListener(listener: AKMapEventListener): void;
}

declare class AKRasterTileEventListener extends MSFRasterTileEventListener {
    static alloc(): AKRasterTileEventListener; // inherited from NSObject

    static new(): AKRasterTileEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onRasterTileClickedThreaded(clickInfo: MSFRasterTileClickInfo): boolean;
}

declare class AKRendererCaptureListener extends MSFRendererCaptureListener {
    static alloc(): AKRendererCaptureListener; // inherited from NSObject

    static new(): AKRendererCaptureListener; // inherited from NSObject

    runOnMainThread: boolean;

    onMapRenderedThreaded(bitmap: MSFBitmap): void;
}

declare class AKRoutingServiceAdditions extends NSObject {
    static alloc(): AKRoutingServiceAdditions; // inherited from NSObject

    static calculateRoute(service: MSFRoutingService, request: MSFRoutingRequest, profile: string, stringifyResult: boolean, callback: (p1: MSFRoutingResult, p2: string, error: NSError) => void): void;

    static matchRoute(service: MSFRoutingService, request: MSFRouteMatchingRequest, profile: string, callback: (p1: MSFRouteMatchingResult) => void): void;

    static new(): AKRoutingServiceAdditions; // inherited from NSObject

    static setRunOnMainThread(value: boolean): void;

    static stringifyRouteResult(result: MSFRoutingResult): string;

    static runOnMainThread: boolean;
}

declare class AKTileDownloadListener extends MSFTileDownloadListener {
    static alloc(): AKTileDownloadListener; // inherited from NSObject

    static new(): AKTileDownloadListener; // inherited from NSObject

    runOnMainThread: boolean;

    onDownloadCompletedThreaded(): void;

    onDownloadFailedThreaded(tile: MSFMapTile): void;

    onDownloadProgressThreaded(progress: number): void;

    onDownloadStartingThreaded(tileCount: number): void;
}

declare class AKVectorEditEventListener extends MSFVectorEditEventListener {
    static alloc(): AKVectorEditEventListener; // inherited from NSObject

    static new(): AKVectorEditEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onDragEndThreaded(clickInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onDragMoveThreaded(clickInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onDragStartThreaded(clickInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onElementDeleteThreaded(element: MSFVectorElement): void;

    onElementDeselectedThreaded(element: MSFVectorElement): void;

    onElementModifyThreadedGeometry(element: MSFVectorElement, geometry: MSFGeometry): void;

    onElementSelectThreaded(element: MSFVectorElement): boolean;

    onSelectDragPointStyleThreadedDragPointStyle(element: MSFVectorElement, dragPointStyle: MSFVectorElementDragPointStyle): MSFPointStyle;
}

declare class AKVectorElementEventListener extends MSFVectorElementEventListener {
    static alloc(): AKVectorElementEventListener; // inherited from NSObject

    static new(): AKVectorElementEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onVectorElementClickedThreaded(clickInfo: MSFVectorElementClickInfo): boolean;
}

declare class AKVectorTileEventListener extends MSFVectorTileEventListener {
    static alloc(): AKVectorTileEventListener; // inherited from NSObject

    static new(): AKVectorTileEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onVectorTileClickedThreaded(clickInfo: MSFVectorTileClickInfo): boolean;
}
declare class AKVectorTileEventListener2 extends AKVectorTileEventListener {}

declare class AKVectorTileSearchService extends MSFVectorTileSearchService {
    static alloc(): AKVectorTileSearchService; // inherited from NSObject

    static new(): AKVectorTileSearchService; // inherited from NSObject

    findFeaturesCallback(request: MSFSearchRequest, callback: (p1: MSFVectorTileFeatureCollection) => void): void;
}
