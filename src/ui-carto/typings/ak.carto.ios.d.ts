/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/unified-signatures */

declare class CartoAdditionsUtils extends NSObject {
    static alloc(): CartoAdditionsUtils; // inherited from NSObject

    static distanceToEndWithIntPoly(index: number, poly: NTMapPosVector): number;

    static isLocationOnPoly(point: NTMapPos, poly: NTMapPosVector): number;

    static isLocationOnPolyClosed(point: NTMapPos, poly: NTMapPosVector, closed: boolean): number;

    static isLocationOnPolyClosedGeodesic(point: NTMapPos, poly: NTMapPosVector, closed: boolean, geodesic: boolean): number;

    static isLocationOnPolyClosedGeodesicToleranceEarth(point: NTMapPos, poly: NTMapPosVector, closed: boolean, geodesic: boolean, toleranceEarth: number): number;

    static new(): CartoAdditionsUtils; // inherited from NSObject
}

declare class AkClusterElementBuilder extends NTClusterElementBuilder {}

declare class AKFeatureCollectionSearchService extends NTFeatureCollectionSearchService {
    static alloc(): AKFeatureCollectionSearchService; // inherited from NSObject

    static new(): AKFeatureCollectionSearchService; // inherited from NSObject

    findFeaturesCallback(request: NTSearchRequest, callback: (p1: NTFeatureCollection) => void): void;
}

declare class AKGeocodingServiceAdditions extends NSObject {
    static alloc(): AKGeocodingServiceAdditions; // inherited from NSObject

    static calculateAddress(service: NTGeocodingService, request: NTGeocodingRequest, callback: (p1: NTGeocodingResultVector, p2: NSException) => void): void;

    static calculateAddressReverse(service: NTReverseGeocodingService, request: NTReverseGeocodingRequest, callback: (p1: NTGeocodingResultVector, p2: NSException) => void): void;

    static new(): AKGeocodingServiceAdditions; // inherited from NSObject

    static setRunOnMainThread(value: boolean): void;

    static runOnMainThread: boolean;
}

declare class AKHillshadeRasterTileLayer extends NTHillshadeRasterTileLayer {
    static alloc(): AKHillshadeRasterTileLayer; // inherited from NSObject

    static new(): AKHillshadeRasterTileLayer; // inherited from NSObject

    runOnMainThread: boolean;

    getElevationCallback(pos: NTMapPos, callback: (p1: number) => void): void;

    getElevationsCallback(pos: NTMapPosVector, callback: (p1: NTDoubleVector) => void): void;
}

interface AKMapEventListener {
    onMapClicked(mapClickInfo: NTMapClickInfo): void;

    onMapIdle(): void;

    onMapInteraction(mapInteractionInfo: NTMapInteractionInfo, userAction: boolean): void;

    onMapMoved(userAction: boolean): void;

    onMapStable(userAction: boolean): void;
}
declare let AKMapEventListener: {
    prototype: AKMapEventListener;
};

declare class AKMapView extends NTMapView {
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

declare class AKRasterTileEventListener extends NTRasterTileEventListener {
    static alloc(): AKRasterTileEventListener; // inherited from NSObject

    static new(): AKRasterTileEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onRasterTileClickedThreaded(clickInfo: NTRasterTileClickInfo): boolean;
}

declare class AKRendererCaptureListener extends NTRendererCaptureListener {
    static alloc(): AKRendererCaptureListener; // inherited from NSObject

    static new(): AKRendererCaptureListener; // inherited from NSObject

    runOnMainThread: boolean;

    onMapRenderedThreaded(bitmap: NTBitmap): void;
}

declare class AKRoutingServiceAdditions extends NSObject {
    static alloc(): AKRoutingServiceAdditions; // inherited from NSObject

    static calculateRoute(service: NTRoutingService, request: NTRoutingRequest, profile: string, stringifyResult: boolean, callback: (p1: NTRoutingResult, p2: string, error: NSError) => void): void;

    static matchRoute(service: NTRoutingService, request: NTRouteMatchingRequest, profile: string, callback: (p1: NTRouteMatchingResult) => void): void;

    static new(): AKRoutingServiceAdditions; // inherited from NSObject

    static setRunOnMainThread(value: boolean): void;

    static stringifyRouteResult(result: NTRoutingResult): string;

    static runOnMainThread: boolean;
}

declare class AKTileDownloadListener extends NTTileDownloadListener {
    static alloc(): AKTileDownloadListener; // inherited from NSObject

    static new(): AKTileDownloadListener; // inherited from NSObject

    runOnMainThread: boolean;

    onDownloadCompletedThreaded(): void;

    onDownloadFailedThreaded(tile: NTMapTile): void;

    onDownloadProgressThreaded(progress: number): void;

    onDownloadStartingThreaded(tileCount: number): void;
}

declare class AKVectorEditEventListener extends NTVectorEditEventListener {
    static alloc(): AKVectorEditEventListener; // inherited from NSObject

    static new(): AKVectorEditEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onDragEndThreaded(clickInfo: NTVectorElementDragInfo): NTVectorElementDragResult;

    onDragMoveThreaded(clickInfo: NTVectorElementDragInfo): NTVectorElementDragResult;

    onDragStartThreaded(clickInfo: NTVectorElementDragInfo): NTVectorElementDragResult;

    onElementDeleteThreaded(element: NTVectorElement): void;

    onElementDeselectedThreaded(element: NTVectorElement): void;

    onElementModifyThreadedGeometry(element: NTVectorElement, geometry: NTGeometry): void;

    onElementSelectThreaded(element: NTVectorElement): boolean;

    onSelectDragPointStyleThreadedDragPointStyle(element: NTVectorElement, dragPointStyle: NTVectorElementDragPointStyle): NTPointStyle;
}

declare class AKVectorElementEventListener extends NTVectorElementEventListener {
    static alloc(): AKVectorElementEventListener; // inherited from NSObject

    static new(): AKVectorElementEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onVectorElementClickedThreaded(clickInfo: NTVectorElementClickInfo): boolean;
}

declare class AKVectorTileEventListener extends NTVectorTileEventListener {
    static alloc(): AKVectorTileEventListener; // inherited from NSObject

    static new(): AKVectorTileEventListener; // inherited from NSObject

    runOnMainThread: boolean;

    onVectorTileClickedThreaded(clickInfo: NTVectorTileClickInfo): boolean;
}
declare class AKVectorTileEventListener2 extends AKVectorTileEventListener {}

declare class AKVectorTileSearchService extends NTVectorTileSearchService {
    static alloc(): AKVectorTileSearchService; // inherited from NSObject

    static new(): AKVectorTileSearchService; // inherited from NSObject

    findFeaturesCallback(request: NTSearchRequest, callback: (p1: NTVectorTileFeatureCollection) => void): void;
}
