
declare class NTAddress extends NSObject {

	static alloc(): NTAddress; // inherited from NSObject

	static new(): NTAddress; // inherited from NSObject

	constructor(o: { country: string; region: string; county: string; locality: string; neighbourhood: string; street: string; postcode: string; houseNumber: string; name: string; categories: NTStringVector; });

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	// description(): string;

	getCategories(): NTStringVector;

	getCountry(): string;

	getCounty(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getHouseNumber(): string;

	getLocality(): string;

	getName(): string;

	getNeighbourhood(): string;

	getPostcode(): string;

	getRegion(): string;

	getStreet(): string;

	// hash(): number;

	hashInternal(): number;

	initWithCountryRegionCountyLocalityNeighbourhoodStreetPostcodeHouseNumberNameCategories(country: string, region: string, county: string, locality: string, neighbourhood: string, street: string, postcode: string, houseNumber: string, name: string, categories: NTStringVector): this;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEqualInternal(address: NTAddress): boolean;

	swigGetRawPtr(): number;
}

declare class NTAnimationStyle extends NSObject {

	static alloc(): NTAnimationStyle; // inherited from NSObject

	static new(): NTAnimationStyle; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTAnimationStyle;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getFadeAnimationType(): NTAnimationType;

	getPhaseInDuration(): number;

	getPhaseOutDuration(): number;

	getRelativeSpeed(): number;

	getSizeAnimationType(): NTAnimationType;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTAnimationStyleBuilder extends NSObject {

	static alloc(): NTAnimationStyleBuilder; // inherited from NSObject

	static new(): NTAnimationStyleBuilder; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTAnimationStyleBuilder;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	buildStyle(): NTAnimationStyle;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getFadeAnimationType(): NTAnimationType;

	getPhaseInDuration(): number;

	getPhaseOutDuration(): number;

	getRelativeSpeed(): number;

	getSizeAnimationType(): NTAnimationType;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	setFadeAnimationType(animType: NTAnimationType): void;

	setPhaseInDuration(duration: number): void;

	setPhaseOutDuration(duration: number): void;

	setRelativeSpeed(relativeSpeed: number): void;

	setSizeAnimationType(animType: NTAnimationType): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare const enum NTAnimationType {

	T_ANIMATION_TYPE_NONE = 0,

	T_ANIMATION_TYPE_STEP = 1,

	T_ANIMATION_TYPE_LINEAR = 2,

	T_ANIMATION_TYPE_SMOOTHSTEP = 3,

	T_ANIMATION_TYPE_SPRING = 4
}

declare class NTAssetPackage extends NSObject {

	static alloc(): NTAssetPackage; // inherited from NSObject

	static new(): NTAssetPackage; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTAssetPackage;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getAssetNames(): NTStringVector;

	getCptr(): interop.Pointer | interop.Reference<any>;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	loadAsset(name: string): NTBinaryData;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTAssetTileDataSource extends NTTileDataSource {

	static alloc(): NTAssetTileDataSource; // inherited from NSObject

	static new(): NTAssetTileDataSource; // inherited from NSObject

	constructor(o: { minZoom: number; maxZoom: number; basePath: string; });

	buildAssetPathSwigExplicitNTAssetTileDataSourceTile(basePath: string, tile: NTMapTile): string;

	buildAssetPathTile(basePath: string, tile: NTMapTile): string;

	initWithMinZoomMaxZoomBasePath(minZoom: number, maxZoom: number, basePath: string): this;

	loadTileSwigExplicitNTAssetTileDataSource(tile: NTMapTile): NTTileData;
}

declare class NTAssetUtils extends NSObject {

	static alloc(): NTAssetUtils; // inherited from NSObject

	static calculateResourcePath(resourceName: string): string;

	static calculateWritablePath(fileName: string): string;

	static loadAsset(path: string): NTBinaryData;

	static new(): NTAssetUtils; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;
}

declare class NTBalloonPopup extends NTPopup {

	static alloc(): NTBalloonPopup; // inherited from NSObject

	static new(): NTBalloonPopup; // inherited from NSObject

	constructor(o: { baseBillboard: NTBillboard; style: NTBalloonPopupStyle; title: string; desc: string; });

	constructor(o: { geometry: NTGeometry; style: NTBalloonPopupStyle; title: string; desc: string; });

	constructor(o: { pos: NTMapPos; style: NTBalloonPopupStyle; title: string; desc: string; });

	getDescription(): string;

	getStyle(): NTBalloonPopupStyle;

	getTitle(): string;

	initWithBaseBillboardStyleTitleDesc(baseBillboard: NTBillboard, style: NTBalloonPopupStyle, title: string, desc: string): this;

	initWithGeometryStyleTitleDesc(geometry: NTGeometry, style: NTBalloonPopupStyle, title: string, desc: string): this;

	initWithPosStyleTitleDesc(pos: NTMapPos, style: NTBalloonPopupStyle, title: string, desc: string): this;

	setDescription(desc: string): void;

	setStyle(style: NTBalloonPopupStyle): void;

	setTitle(title: string): void;
}

declare class NTBalloonPopupMargins extends NSObject {

	static alloc(): NTBalloonPopupMargins; // inherited from NSObject

	static new(): NTBalloonPopupMargins; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { left: number; top: number; right: number; bottom: number; });

	getBottom(): number;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getLeft(): number;

	getRight(): number;

	getTop(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithLeftTopRightBottom(left: number, top: number, right: number, bottom: number): this;

	swigGetRawPtr(): number;
}

declare class NTBalloonPopupStyle extends NTPopupStyle {

	static alloc(): NTBalloonPopupStyle; // inherited from NSObject

	static new(): NTBalloonPopupStyle; // inherited from NSObject

	getBackgroundColor(): NTColor;

	getCornerRadius(): number;

	getDescriptionColor(): NTColor;

	getDescriptionField(): string;

	getDescriptionFontName(): string;

	getDescriptionFontSize(): number;

	getDescriptionMargins(): NTBalloonPopupMargins;

	getLeftColor(): NTColor;

	getLeftImage(): NTBitmap;

	getLeftMargins(): NTBalloonPopupMargins;

	getRightColor(): NTColor;

	getRightImage(): NTBitmap;

	getRightMargins(): NTBalloonPopupMargins;

	getStrokeColor(): NTColor;

	getStrokeWidth(): number;

	getTitleColor(): NTColor;

	getTitleField(): string;

	getTitleFontName(): string;

	getTitleFontSize(): number;

	getTitleMargins(): NTBalloonPopupMargins;

	getTriangleHeight(): number;

	getTriangleWidth(): number;

	isDescriptionWrap(): boolean;

	isTitleWrap(): boolean;
}

declare class NTBalloonPopupStyleBuilder extends NTPopupStyleBuilder {

	static alloc(): NTBalloonPopupStyleBuilder; // inherited from NSObject

	static new(): NTBalloonPopupStyleBuilder; // inherited from NSObject

	buildStyle(): NTBalloonPopupStyle;

	getCornerRadius(): number;

	getDescriptionColor(): NTColor;

	getDescriptionField(): string;

	getDescriptionFontName(): string;

	getDescriptionFontSize(): number;

	getDescriptionMargins(): NTBalloonPopupMargins;

	getLeftColor(): NTColor;

	getLeftImage(): NTBitmap;

	getLeftMargins(): NTBalloonPopupMargins;

	getRightColor(): NTColor;

	getRightImage(): NTBitmap;

	getRightMargins(): NTBalloonPopupMargins;

	getStrokeColor(): NTColor;

	getStrokeWidth(): number;

	getTitleColor(): NTColor;

	getTitleField(): string;

	getTitleFontName(): string;

	getTitleFontSize(): number;

	getTitleMargins(): NTBalloonPopupMargins;

	getTriangleHeight(): number;

	getTriangleWidth(): number;

	isDescriptionWrap(): boolean;

	isTitleWrap(): boolean;

	setCornerRadius(cornerRadius: number): void;

	setDescriptionColor(descColor: NTColor): void;

	setDescriptionField(field: string): void;

	setDescriptionFontName(descFontName: string): void;

	setDescriptionFontSize(descFontSize: number): void;

	setDescriptionMargins(descMargins: NTBalloonPopupMargins): void;

	setDescriptionWrap(descWrap: boolean): void;

	setLeftColor(leftColor: NTColor): void;

	setLeftImage(leftImage: NTBitmap): void;

	setLeftMargins(leftMargins: NTBalloonPopupMargins): void;

	setRightColor(rightColor: NTColor): void;

	setRightImage(rightImage: NTBitmap): void;

	setRightMargins(rightMargins: NTBalloonPopupMargins): void;

	setStrokeColor(strokeColor: NTColor): void;

	setStrokeWidth(strokeWidth: number): void;

	setTitleColor(titleColor: NTColor): void;

	setTitleField(field: string): void;

	setTitleFontName(titleFontName: string): void;

	setTitleFontSize(titleFontSize: number): void;

	setTitleMargins(titleMargins: NTBalloonPopupMargins): void;

	setTitleWrap(titleWrap: boolean): void;

	setTriangleHeight(triangleHeight: number): void;

	setTriangleWidth(triangleWidth: number): void;
}

declare class NTBillboard extends NTVectorElement {

	static alloc(): NTBillboard; // inherited from NSObject

	static new(): NTBillboard; // inherited from NSObject

	getBaseBillboard(): NTBillboard;

	getRootGeometry(): NTGeometry;

	getRotation(): number;

	setBaseBillboard(baseBillboard: NTBillboard): void;

	setGeometry(geometry: NTGeometry): void;

	setPos(pos: NTMapPos): void;

	setRotation(rotation: number): void;
}

declare const enum NTBillboardOrientation {

	T_BILLBOARD_ORIENTATION_FACE_CAMERA = 0,

	T_BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND = 1,

	T_BILLBOARD_ORIENTATION_GROUND = 2
}

declare const enum NTBillboardScaling {

	T_BILLBOARD_SCALING_WORLD_SIZE = 0,

	T_BILLBOARD_SCALING_SCREEN_SIZE = 1,

	T_BILLBOARD_SCALING_CONST_SCREEN_SIZE = 2
}

declare class NTBillboardStyle extends NTStyle {

	static alloc(): NTBillboardStyle; // inherited from NSObject

	static new(): NTBillboardStyle; // inherited from NSObject

	getAnimationStyle(): NTAnimationStyle;

	getAttachAnchorPointX(): number;

	getAttachAnchorPointY(): number;

	getHorizontalOffset(): number;

	getPlacementPriority(): number;

	getVerticalOffset(): number;

	isCausesOverlap(): boolean;

	isHideIfOverlapped(): boolean;

	isScaleWithDPI(): boolean;
}

declare class NTBillboardStyleBuilder extends NTStyleBuilder {

	static alloc(): NTBillboardStyleBuilder; // inherited from NSObject

	static new(): NTBillboardStyleBuilder; // inherited from NSObject

	getAnimationStyle(): NTAnimationStyle;

	getAttachAnchorPointX(): number;

	getAttachAnchorPointY(): number;

	getHorizontalOffset(): number;

	getPlacementPriority(): number;

	getVerticalOffset(): number;

	isCausesOverlap(): boolean;

	isHideIfOverlapped(): boolean;

	isScaleWithDPI(): boolean;

	setAnimationStyle(animStyle: NTAnimationStyle): void;

	setAttachAnchorPointX(attachAnchorPointX: number): void;

	setAttachAnchorPointXAttachAnchorPointY(attachAnchorPointX: number, attachAnchorPointY: number): void;

	setAttachAnchorPointY(attachAnchorPointY: number): void;

	setCausesOverlap(causesOverlap: boolean): void;

	setHideIfOverlapped(hideIfOverlapped: boolean): void;

	setHorizontalOffset(horizontalOffset: number): void;

	setPlacementPriority(placementPriority: number): void;

	setScaleWithDPI(scaleWithDPI: boolean): void;

	setVerticalOffset(verticalOffset: number): void;
}

declare class NTBinaryData extends NSObject {

	static alloc(): NTBinaryData; // inherited from NSObject

	static new(): NTBinaryData; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { dataPtr: string | interop.Pointer | interop.Reference<any>; size: number; });

	// description(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getData(): string;

	// // hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithDataPtrSize(dataPtr: string | interop.Pointer | interop.Reference<any>, size: number): this;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTBitmap extends NSObject {

	static alloc(): NTBitmap; // inherited from NSObject

	static createFromCompressed(compressedData: NTBinaryData): NTBitmap;

	static new(): NTBitmap; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { pixelData: NTBinaryData; width: number; height: number; colorFormat: NTColorFormat; bytesPerRow: number; });

	compressToInternal(): NTBinaryData;

	compressToPng(): NTBinaryData;

	getBytesPerPixel(): number;

	getColorFormat(): NTColorFormat;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getHeight(): number;

	getPaddedBitmapYPadding(xPadding: number, yPadding: number): NTBitmap;

	getPixelData(): NTBinaryData;

	getRGBABitmap(): NTBitmap;

	getResizedBitmapHeight(width: number, height: number): NTBitmap;

	getSubBitmapYOffsetWidthHeight(xOffset: number, yOffset: number, width: number, height: number): NTBitmap;

	getWidth(): number;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithPixelDataWidthHeightColorFormatBytesPerRow(pixelData: NTBinaryData, width: number, height: number, colorFormat: NTColorFormat, bytesPerRow: number): this;

	swigGetRawPtr(): number;
}

declare class NTBitmapOverlayRasterTileDataSource extends NTTileDataSource {

	static alloc(): NTBitmapOverlayRasterTileDataSource; // inherited from NSObject

	static new(): NTBitmapOverlayRasterTileDataSource; // inherited from NSObject

	constructor(o: { minZoom: number; maxZoom: number; bitmap: NTBitmap; projection: NTProjection; mapPoses: NTMapPosVector; bitmapPoses: NTScreenPosVector; });

	getDataExtentSwigExplicitNTBitmapOverlayRasterTileDataSource(): NTMapBounds;

	initWithMinZoomMaxZoomBitmapProjectionMapPosesBitmapPoses(minZoom: number, maxZoom: number, bitmap: NTBitmap, projection: NTProjection, mapPoses: NTMapPosVector, bitmapPoses: NTScreenPosVector): this;

	loadTileSwigExplicitNTBitmapOverlayRasterTileDataSource(mapTile: NTMapTile): NTTileData;
}

declare class NTBitmapUtils extends NSObject {

	static alloc(): NTBitmapUtils; // inherited from NSObject

	static createBitmapFromUIImage(image: UIImage): NTBitmap;

	static createUIImageFromBitmap(bitmap: NTBitmap): UIImage;

	static loadBitmapFromAssets(assetPath: string): NTBitmap;

	static loadBitmapFromFile(filePath: string): NTBitmap;

	static new(): NTBitmapUtils; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;
}

declare class NTCacheTileDataSource extends NTTileDataSource {

	static alloc(): NTCacheTileDataSource; // inherited from NSObject

	static new(): NTCacheTileDataSource; // inherited from NSObject

	constructor(o: { dataSource: NTTileDataSource; });

	clear(): void;

	getCapacity(): number;

	getDataExtentSwigExplicitNTCacheTileDataSource(): NTMapBounds;

	getDataSource(): NTTileDataSource;

	getMaxZoomSwigExplicitNTCacheTileDataSource(): number;

	getMinZoomSwigExplicitNTCacheTileDataSource(): number;

	initWithDataSource(dataSource: NTTileDataSource): this;

	notifyTilesChangedSwigExplicitNTCacheTileDataSource(removeTiles: boolean): void;

	setCapacity(capacityInBytes: number): void;
}

declare const enum NTCartoBaseMapStyle {

	T_CARTO_BASEMAP_STYLE_POSITRON = 0,

	T_CARTO_BASEMAP_STYLE_DARKMATTER = 1,

	T_CARTO_BASEMAP_STYLE_VOYAGER = 2
}

declare class NTCartoCSSStyleSet extends NSObject {

	static alloc(): NTCartoCSSStyleSet; // inherited from NSObject

	static new(): NTCartoCSSStyleSet; // inherited from NSObject

	constructor(o: { cartoCSS: string; });

	constructor(o: { cartoCSS: string; assetPackage: NTAssetPackage; });

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getAssetPackage(): NTAssetPackage;

	getCartoCSS(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	// hash(): number;

	initWithCartoCSS(cartoCSS: string): this;

	initWithCartoCSSAssetPackage(cartoCSS: string, assetPackage: NTAssetPackage): this;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare class NTCartoMapsService extends NSObject {

	static alloc(): NTCartoMapsService; // inherited from NSObject

	static new(): NTCartoMapsService; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	buildMap(mapConfig: NTVariant): NTLayerVector;

	buildNamedMapTemplateParams(templateId: string, templateParams: NTStringVariantMap): NTLayerVector;

	getAPIKey(): string;

	getAPITemplate(): string;

	getAuthTokens(): NTStringVector;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getLayerIndices(): NTIntVector;

	getUsername(): string;

	getVectorTileAssetPackage(): NTAssetPackage;

	getVectorTileBufferSize(): number;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isDefaultVectorLayerMode(): boolean;

	isInteractive(): boolean;

	isStrictMode(): boolean;

	setAPIKey(apiKey: string): void;

	setAPITemplate(apiTemplate: string): void;

	setAuthTokens(authTokens: NTStringVector): void;

	setDefaultVectorLayerMode(vectorLayerMode: boolean): void;

	setInteractive(interactive: boolean): void;

	setLayerIndices(layerIndices: NTIntVector): void;

	setStrictMode(strictMode: boolean): void;

	setUsername(username: string): void;

	setVectorTileAssetPackage(assetPackage: NTAssetPackage): void;

	setVectorTileBufferSize(bufferSize: number): void;

	swigGetRawPtr(): number;
}

declare class NTCartoOfflineVectorTileLayer extends NTCartoVectorTileLayer {

	static alloc(): NTCartoOfflineVectorTileLayer; // inherited from NSObject

	static new(): NTCartoOfflineVectorTileLayer; // inherited from NSObject

	constructor(o: { packageManager: NTCartoPackageManager; style: NTCartoBaseMapStyle; });

	constructor(o: { packageManager: NTCartoPackageManager; styleAssetPackage: NTAssetPackage; });

	initWithPackageManagerStyle(packageManager: NTCartoPackageManager, style: NTCartoBaseMapStyle): this;

	initWithPackageManagerStyleAssetPackage(packageManager: NTCartoPackageManager, styleAssetPackage: NTAssetPackage): this;
}

declare class NTCartoOnlineRasterTileLayer extends NTRasterTileLayer {

	static alloc(): NTCartoOnlineRasterTileLayer; // inherited from NSObject

	static new(): NTCartoOnlineRasterTileLayer; // inherited from NSObject

	constructor(o: { source: string; });

	initWithSource(source: string): this;
}

declare class NTCartoOnlineRoutingService extends NTRoutingService {

	static alloc(): NTCartoOnlineRoutingService; // inherited from NSObject

	static new(): NTCartoOnlineRoutingService; // inherited from NSObject

	constructor(o: { source: string; });

	calculateRouteSwigExplicitNTCartoOnlineRoutingService(request: NTRoutingRequest): NTRoutingResult;

	initWithSource(source: string): this;
}

declare class NTCartoOnlineTileDataSource extends NTTileDataSource {

	static alloc(): NTCartoOnlineTileDataSource; // inherited from NSObject

	static new(): NTCartoOnlineTileDataSource; // inherited from NSObject

	constructor(o: { source: string; });

	initWithSource(source: string): this;

	loadTileSwigExplicitNTCartoOnlineTileDataSource(mapTile: NTMapTile): NTTileData;
}

declare class NTCartoOnlineVectorTileLayer extends NTCartoVectorTileLayer {

	static alloc(): NTCartoOnlineVectorTileLayer; // inherited from NSObject

	static createDataSource(style: NTCartoBaseMapStyle): NTTileDataSource;

	static new(): NTCartoOnlineVectorTileLayer; // inherited from NSObject

	constructor(o: { source: string; style: NTCartoBaseMapStyle; });

	constructor(o: { source: string; styleAssetPackage: NTAssetPackage; });

	constructor(o: { style: NTCartoBaseMapStyle; });

	initWithSourceStyle(source: string, style: NTCartoBaseMapStyle): this;

	initWithSourceStyleAssetPackage(source: string, styleAssetPackage: NTAssetPackage): this;

	initWithStyle(style: NTCartoBaseMapStyle): this;
}

declare class NTCartoPackageManager extends NTPackageManager {

	static alloc(): NTCartoPackageManager; // inherited from NSObject

	static new(): NTCartoPackageManager; // inherited from NSObject

	constructor(o: { source: string; dataFolder: string; });

	getStyleAssetPackage(style: NTCartoBaseMapStyle): NTAssetPackage;

	initWithSourceDataFolder(source: string, dataFolder: string): this;

	startStyleDownload(style: NTCartoBaseMapStyle): boolean;
}

declare class NTCartoSQLService extends NSObject {

	static alloc(): NTCartoSQLService; // inherited from NSObject

	static new(): NTCartoSQLService; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getAPIKey(): string;

	getAPITemplate(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getUsername(): string;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	queryData(sql: string): NTVariant;

	queryFeaturesProj(sql: string, proj: NTProjection): NTFeatureCollection;

	setAPIKey(apiKey: string): void;

	setAPITemplate(apiTemplate: string): void;

	setUsername(username: string): void;

	swigGetRawPtr(): number;
}

declare class NTCartoVectorTileDecoder extends NTVectorTileDecoder {

	static alloc(): NTCartoVectorTileDecoder; // inherited from NSObject

	static new(): NTCartoVectorTileDecoder; // inherited from NSObject

	constructor(o: { layerIds: NTStringVector; layerStyleSets: NTStringCartoCSSStyleSetMap; });

	getLayerIds(): NTStringVector;

	getLayerStyleSet(layerId: string): NTCartoCSSStyleSet;

	initWithLayerIdsLayerStyleSets(layerIds: NTStringVector, layerStyleSets: NTStringCartoCSSStyleSetMap): this;

	isLayerVisible(layerId: string): boolean;

	setLayerStyleSetStyleSet(layerId: string, styleSet: NTCartoCSSStyleSet): void;

	setLayerVisibleVisible(layerId: string, visible: boolean): void;
}

declare class NTCartoVectorTileLayer extends NTVectorTileLayer {

	static alloc(): NTCartoVectorTileLayer; // inherited from NSObject

	static createTileDecoderFromAssetPackage(styleAssetPackage: NTAssetPackage): NTVectorTileDecoder;

	static createTileDecoderFromStyle(style: NTCartoBaseMapStyle): NTVectorTileDecoder;

	static createTileDecoderStyleName(styleAssetPackage: NTAssetPackage, styleName: string): NTVectorTileDecoder;

	static new(): NTCartoVectorTileLayer; // inherited from NSObject

	constructor(o: { dataSource: NTTileDataSource; style: NTCartoBaseMapStyle; });

	constructor(o: { dataSource: NTTileDataSource; styleAssetPackage: NTAssetPackage; });

	constructor(o: { dataSource: NTTileDataSource; styleAssetPackage: NTAssetPackage; styleName: string; });

	getFallbackLanguage(): string;

	getLanguage(): string;

	initWithDataSourceStyle(dataSource: NTTileDataSource, style: NTCartoBaseMapStyle): this;

	initWithDataSourceStyleAssetPackage(dataSource: NTTileDataSource, styleAssetPackage: NTAssetPackage): this;

	initWithDataSourceStyleAssetPackageStyleName(dataSource: NTTileDataSource, styleAssetPackage: NTAssetPackage, styleName: string): this;

	setFallbackLanguage(lang: string): void;

	setLanguage(lang: string): void;
}

declare const enum NTClickType {

	T_CLICK_TYPE_SINGLE = 0,

	T_CLICK_TYPE_LONG = 1,

	T_CLICK_TYPE_DOUBLE = 2,

	T_CLICK_TYPE_DUAL = 3
}

declare const enum NTClusterBuilderMode {

	T_CLUSTER_BUILDER_MODE_ELEMENTS = 0,

	T_CLUSTER_BUILDER_MODE_ELEMENT_COUNT = 1
}

declare class NTClusterElementBuilder extends NSObject {

	static alloc(): NTClusterElementBuilder; // inherited from NSObject

	static new(): NTClusterElementBuilder; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTClusterElementBuilder;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	buildClusterElementElementCount(mapPos: NTMapPos, elementCount: number): NTVectorElement;

	buildClusterElementElements(mapPos: NTMapPos, elements: NTVectorElementVector): NTVectorElement;

	buildClusterElementSwigExplicitNTClusterElementBuilderElementCount(mapPos: NTMapPos, elementCount: number): NTVectorElement;

	buildClusterElementSwigExplicitNTClusterElementBuilderElements(mapPos: NTMapPos, elements: NTVectorElementVector): NTVectorElement;

	getBuilderMode(): NTClusterBuilderMode;

	getBuilderModeSwigExplicitNTClusterElementBuilder(): NTClusterBuilderMode;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTClusteredVectorLayer extends NTVectorLayer {

	static alloc(): NTClusteredVectorLayer; // inherited from NSObject

	static new(): NTClusteredVectorLayer; // inherited from NSObject

	constructor(o: { dataSource: NTLocalVectorDataSource; clusterElementBuilder: NTClusterElementBuilder; });

	expandClusterPx(clusterElement: NTVectorElement, px: number): boolean;

	getClusterElementBuilder(): NTClusterElementBuilder;

	getMaximumClusterZoom(): number;

	getMinimumClusterDistance(): number;

	initWithDataSourceClusterElementBuilder(dataSource: NTLocalVectorDataSource, clusterElementBuilder: NTClusterElementBuilder): this;

	isAnimatedClusters(): boolean;

	setAnimatedClusters(animated: boolean): void;

	setMaximumClusterZoom(maxZoom: number): void;

	setMinimumClusterDistance(px: number): void;
}

declare class NTColor extends NSObject {

	static alloc(): NTColor; // inherited from NSObject

	static new(): NTColor; // inherited from NSObject

	constructor(o: { color: number; });

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { r: number; g: number; b: number; a: number; });

	// description(): string;

	getA(): number;

	getARGB(): number;

	getB(): number;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getG(): number;

	getR(): number;

	// hash(): number;

	hashInternal(): number;

	initWithColor(color: number): this;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithRGBA(r: number, g: number, b: number, a: number): this;

	isEqualInternal(color: NTColor): boolean;

	swigGetRawPtr(): number;
}

declare const enum NTColorFormat {

	T_COLOR_FORMAT_UNSUPPORTED = 0,

	T_COLOR_FORMAT_GRAYSCALE = 6409,

	T_COLOR_FORMAT_GRAYSCALE_ALPHA = 6410,

	T_COLOR_FORMAT_RGB = 6407,

	T_COLOR_FORMAT_RGBA = 6408,

	T_COLOR_FORMAT_BGRA = 1,

	T_COLOR_FORMAT_RGBA_4444 = 2,

	T_COLOR_FORMAT_RGB_565 = 3
}

declare class NTCombinedTileDataSource extends NTTileDataSource {

	static alloc(): NTCombinedTileDataSource; // inherited from NSObject

	static new(): NTCombinedTileDataSource; // inherited from NSObject

	constructor(o: { dataSource1: NTTileDataSource; dataSource2: NTTileDataSource; zoomLevel: number; });

	getDataExtentSwigExplicitNTCombinedTileDataSource(): NTMapBounds;

	getMaxZoomSwigExplicitNTCombinedTileDataSource(): number;

	getMinZoomSwigExplicitNTCombinedTileDataSource(): number;

	initWithDataSource1DataSource2ZoomLevel(dataSource1: NTTileDataSource, dataSource2: NTTileDataSource, zoomLevel: number): this;

	loadTileSwigExplicitNTCombinedTileDataSource(tile: NTMapTile): NTTileData;
}

declare class NTCompiledStyleSet extends NSObject {

	static alloc(): NTCompiledStyleSet; // inherited from NSObject

	static new(): NTCompiledStyleSet; // inherited from NSObject

	constructor(o: { assetPackage: NTAssetPackage; });

	constructor(o: { assetPackage: NTAssetPackage; styleName: string; });

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getAssetPackage(): NTAssetPackage;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getStyleAssetName(): string;

	getStyleName(): string;

	// hash(): number;

	initWithAssetPackage(assetPackage: NTAssetPackage): this;

	initWithAssetPackageStyleName(assetPackage: NTAssetPackage, styleName: string): this;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare class NTCullState extends NSObject {

	static alloc(): NTCullState; // inherited from NSObject

	static new(): NTCullState; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { envelope: NTMapEnvelope; viewState: NTViewState; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getProjectionEnvelope(projection: NTProjection): NTMapEnvelope;

	getViewState(): NTViewState;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithEnvelopeViewState(envelope: NTMapEnvelope, viewState: NTViewState): this;

	swigGetRawPtr(): number;
}

declare class NTCustomPopup extends NTPopup {

	static alloc(): NTCustomPopup; // inherited from NSObject

	static new(): NTCustomPopup; // inherited from NSObject

	constructor(o: { baseBillboard: NTBillboard; style: NTPopupStyle; popupHandler: NTCustomPopupHandler; });

	constructor(o: { geometry: NTGeometry; style: NTPopupStyle; popupHandler: NTCustomPopupHandler; });

	constructor(o: { pos: NTMapPos; style: NTPopupStyle; popupHandler: NTCustomPopupHandler; });

	getPopupHandler(): NTCustomPopupHandler;

	initWithBaseBillboardStylePopupHandler(baseBillboard: NTBillboard, style: NTPopupStyle, popupHandler: NTCustomPopupHandler): this;

	initWithGeometryStylePopupHandler(geometry: NTGeometry, style: NTPopupStyle, popupHandler: NTCustomPopupHandler): this;

	initWithPosStylePopupHandler(pos: NTMapPos, style: NTPopupStyle, popupHandler: NTCustomPopupHandler): this;

	processClickClickPosElementClickPos(clickType: NTClickType, clickPos: NTMapPos, elementClickPos: NTScreenPos): boolean;
}

declare class NTCustomPopupHandler extends NSObject {

	static alloc(): NTCustomPopupHandler; // inherited from NSObject

	static new(): NTCustomPopupHandler; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTCustomPopupHandler;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onDrawPopup(popupDrawInfo: NTPopupDrawInfo): NTBitmap;

	onDrawPopupSwigExplicitNTCustomPopupHandler(popupDrawInfo: NTPopupDrawInfo): NTBitmap;

	onPopupClicked(popupClickInfo: NTPopupClickInfo): boolean;

	onPopupClickedSwigExplicitNTCustomPopupHandler(popupClickInfo: NTPopupClickInfo): boolean;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTDouglasPeuckerGeometrySimplifier extends NTGeometrySimplifier {

	static alloc(): NTDouglasPeuckerGeometrySimplifier; // inherited from NSObject

	static new(): NTDouglasPeuckerGeometrySimplifier; // inherited from NSObject

	constructor(o: { tolerance: number; });

	initWithTolerance(tolerance: number): this;
}

declare class NTEPSG3857 extends NTProjection {

	static alloc(): NTEPSG3857; // inherited from NSObject

	static new(): NTEPSG3857; // inherited from NSObject
}

declare class NTEPSG4326 extends NTProjection {

	static alloc(): NTEPSG4326; // inherited from NSObject

	static new(): NTEPSG4326; // inherited from NSObject
}

declare class NTEditableVectorLayer extends NTVectorLayer {

	static alloc(): NTEditableVectorLayer; // inherited from NSObject

	static new(): NTEditableVectorLayer; // inherited from NSObject

	getSelectedVectorElement(): NTVectorElement;

	getVectorEditEventListener(): NTVectorEditEventListener;

	setSelectedVectorElement(element: NTVectorElement): void;

	setVectorEditEventListener(listener: NTVectorEditEventListener): void;
}

declare class NTExceptionWrapper extends NSObject {

	static alloc(): NTExceptionWrapper; // inherited from NSObject

	static catchExceptionError(tryBlock: () => void): boolean;

	static new(): NTExceptionWrapper; // inherited from NSObject
}

declare class NTFeature extends NSObject {

	static alloc(): NTFeature; // inherited from NSObject

	static new(): NTFeature; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTFeature;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { geometry: NTGeometry; properties: NTVariant; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getGeometry(): NTGeometry;

	getProperties(): NTVariant;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithGeometryProperties(geometry: NTGeometry, properties: NTVariant): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTFeatureCollection extends NSObject {

	static alloc(): NTFeatureCollection; // inherited from NSObject

	static new(): NTFeatureCollection; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTFeatureCollection;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { features: NTFeatureVector; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getFeature(index: number): NTFeature;

	getFeatureCount(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithFeatures(features: NTFeatureVector): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTFeatureCollectionSearchService extends NSObject {

	static alloc(): NTFeatureCollectionSearchService; // inherited from NSObject

	static new(): NTFeatureCollectionSearchService; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTFeatureCollectionSearchService;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { projection: NTProjection; featureCollection: NTFeatureCollection; });

	findFeatures(request: NTSearchRequest): NTFeatureCollection;

	findFeaturesSwigExplicitNTFeatureCollectionSearchService(request: NTSearchRequest): NTFeatureCollection;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getFeatureCollection(): NTFeatureCollection;

	getProjection(): NTProjection;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithProjectionFeatureCollection(projection: NTProjection, featureCollection: NTFeatureCollection): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTFeatureVector extends NSObject {

	static alloc(): NTFeatureVector; // inherited from NSObject

	static new(): NTFeatureVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTFeature): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTFeature;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTFeature): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTGeoJSONGeometryReader extends NSObject {

	static alloc(): NTGeoJSONGeometryReader; // inherited from NSObject

	static new(): NTGeoJSONGeometryReader; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getTargetProjection(): NTProjection;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	readFeature(geoJSON: string): NTFeature;

	readFeatureCollection(geoJSON: string): NTFeatureCollection;

	readGeometry(geoJSON: string): NTGeometry;

	setTargetProjection(proj: NTProjection): void;
}

declare class NTGeoJSONGeometryWriter extends NSObject {

	static alloc(): NTGeoJSONGeometryWriter; // inherited from NSObject

	static new(): NTGeoJSONGeometryWriter; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getSourceProjection(): NTProjection;

	getZ(): boolean;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	setSourceProjection(proj: NTProjection): void;

	setZ(z: boolean): void;

	writeFeature(feature: NTFeature): string;

	writeFeatureCollection(featureCollection: NTFeatureCollection): string;

	writeGeometry(geometry: NTGeometry): string;
}

declare class NTGeoJSONVectorTileDataSource extends NTTileDataSource {

	static alloc(): NTGeoJSONVectorTileDataSource; // inherited from NSObject

	static new(): NTGeoJSONVectorTileDataSource; // inherited from NSObject

	createLayer(name: string): number;

	deleteLayer(layerIndex: number): void;

	getDataExtentSwigExplicitNTGeoJSONVectorTileDataSource(): NTMapBounds;

	loadTileSwigExplicitNTGeoJSONVectorTileDataSource(mapTile: NTMapTile): NTTileData;

	setLayerFeatureCollectionProjectionFeatureCollection(layerIndex: number, projection: NTProjection, featureCollection: NTFeatureCollection): void;

	setLayerGeoJSONGeoJSON(layerIndex: number, geoJSON: NTVariant): void;
}

declare class NTGeocodingRequest extends NSObject {

	static alloc(): NTGeocodingRequest; // inherited from NSObject

	static new(): NTGeocodingRequest; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { projection: NTProjection; query: string; });

	// description(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getLocation(): NTMapPos;

	getLocationRadius(): number;

	getProjection(): NTProjection;

	getQuery(): string;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithProjectionQuery(projection: NTProjection, query: string): this;

	setLocation(pos: NTMapPos): void;

	setLocationRadius(radius: number): void;

	swigGetRawPtr(): number;
}

declare class NTGeocodingResult extends NSObject {

	static alloc(): NTGeocodingResult; // inherited from NSObject

	static new(): NTGeocodingResult; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { projection: NTProjection; address: NTAddress; rank: number; featureCollection: NTFeatureCollection; });

	// description(): string;

	getAddress(): NTAddress;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getFeatureCollection(): NTFeatureCollection;

	getProjection(): NTProjection;

	getRank(): number;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithProjectionAddressRankFeatureCollection(projection: NTProjection, address: NTAddress, rank: number, featureCollection: NTFeatureCollection): this;

	swigGetRawPtr(): number;
}

declare class NTGeocodingResultVector extends NSObject {

	static alloc(): NTGeocodingResultVector; // inherited from NSObject

	static new(): NTGeocodingResultVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTGeocodingResult): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTGeocodingResult;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTGeocodingResult): void;

	size(): number;
}

declare class NTGeocodingService extends NSObject {

	static alloc(): NTGeocodingService; // inherited from NSObject

	static new(): NTGeocodingService; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTGeocodingService;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	calculateAddresses(request: NTGeocodingRequest): NTGeocodingResultVector;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTGeometry extends NSObject {

	static alloc(): NTGeometry; // inherited from NSObject

	static new(): NTGeometry; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTGeometry;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getBounds(): NTMapBounds;

	getCenterPos(): NTMapPos;

	getCptr(): interop.Pointer | interop.Reference<any>;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTGeometryCollection extends NTVectorElement {

	static alloc(): NTGeometryCollection; // inherited from NSObject

	static new(): NTGeometryCollection; // inherited from NSObject

	constructor(o: { geometry: NTMultiGeometry; style: NTGeometryCollectionStyle; });

	getGeometry(): NTMultiGeometry;

	getStyle(): NTGeometryCollectionStyle;

	initWithGeometryStyle(geometry: NTMultiGeometry, style: NTGeometryCollectionStyle): this;

	setGeometry(geometry: NTMultiGeometry): void;

	setStyle(style: NTGeometryCollectionStyle): void;
}

declare class NTGeometryCollectionStyle extends NTStyle {

	static alloc(): NTGeometryCollectionStyle; // inherited from NSObject

	static new(): NTGeometryCollectionStyle; // inherited from NSObject

	getLineStyle(): NTLineStyle;

	getPointStyle(): NTPointStyle;

	getPolygonStyle(): NTPolygonStyle;
}

declare class NTGeometryCollectionStyleBuilder extends NTStyleBuilder {

	static alloc(): NTGeometryCollectionStyleBuilder; // inherited from NSObject

	static new(): NTGeometryCollectionStyleBuilder; // inherited from NSObject

	buildStyle(): NTGeometryCollectionStyle;

	getLineStyle(): NTLineStyle;

	getPointStyle(): NTPointStyle;

	getPolygonStyle(): NTPolygonStyle;

	setLineStyle(lineStyle: NTLineStyle): void;

	setPointStyle(pointStyle: NTPointStyle): void;

	setPolygonStyle(polygonStyle: NTPolygonStyle): void;
}

declare class NTGeometrySimplifier extends NSObject {

	static alloc(): NTGeometrySimplifier; // inherited from NSObject

	static new(): NTGeometrySimplifier; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTGeometrySimplifier;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTGeometryVector extends NSObject {

	static alloc(): NTGeometryVector; // inherited from NSObject

	static new(): NTGeometryVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTGeometry): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTGeometry;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTGeometry): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTHTTPTileDataSource extends NTTileDataSource {

	static alloc(): NTHTTPTileDataSource; // inherited from NSObject

	static new(): NTHTTPTileDataSource; // inherited from NSObject

	constructor(o: { minZoom: number; maxZoom: number; baseURL: string; });

	buildTileURLSwigExplicitNTHTTPTileDataSourceTile(baseURL: string, tile: NTMapTile): string;

	buildTileURLTile(baseURL: string, tile: NTMapTile): string;

	getBaseURL(): string;

	getHTTPHeaders(): NTStringMap;

	getSubdomains(): NTStringVector;

	initWithMinZoomMaxZoomBaseURL(minZoom: number, maxZoom: number, baseURL: string): this;

	isMaxAgeHeaderCheck(): boolean;

	isTMSScheme(): boolean;

	loadTileSwigExplicitNTHTTPTileDataSource(mapTile: NTMapTile): NTTileData;

	setBaseURL(baseURL: string): void;

	setHTTPHeaders(headers: NTStringMap): void;

	setMaxAgeHeaderCheck(maxAgeCheck: boolean): void;

	setSubdomains(subdomains: NTStringVector): void;

	setTMSScheme(tmsScheme: boolean): void;
}

declare class NTIntVector extends NSObject {

	static alloc(): NTIntVector; // inherited from NSObject

	static new(): NTIntVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: number): void;

	capacity(): number;

	clear(): void;

	get(i: number): number;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: number): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTLabel extends NTBillboard {

	static alloc(): NTLabel; // inherited from NSObject

	static new(): NTLabel; // inherited from NSObject

	drawBitmap(dpToPX: number): NTBitmap;

	getStyle(): NTLabelStyle;

	setStyle(style: NTLabelStyle): void;
}

declare class NTLabelStyle extends NTBillboardStyle {

	static alloc(): NTLabelStyle; // inherited from NSObject

	static new(): NTLabelStyle; // inherited from NSObject

	getAnchorPointX(): number;

	getAnchorPointY(): number;

	getOrientationMode(): NTBillboardOrientation;

	getRenderScale(): number;

	getScalingMode(): NTBillboardScaling;

	isFlippable(): boolean;
}

declare class NTLabelStyleBuilder extends NTBillboardStyleBuilder {

	static alloc(): NTLabelStyleBuilder; // inherited from NSObject

	static new(): NTLabelStyleBuilder; // inherited from NSObject

	buildStyle(): NTLabelStyle;

	getAnchorPointX(): number;

	getAnchorPointY(): number;

	getOrientationMode(): NTBillboardOrientation;

	getRenderScale(): number;

	getScalingMode(): NTBillboardScaling;

	isFlippable(): boolean;

	setAnchorPointX(anchorPointX: number): void;

	setAnchorPointXAnchorPointY(anchorPointX: number, anchorPointY: number): void;

	setAnchorPointY(anchorPointY: number): void;

	setFlippable(flippable: boolean): void;

	setOrientationMode(orientationMode: NTBillboardOrientation): void;

	setRenderScale(renderScale: number): void;

	setScalingMode(scalingMode: NTBillboardScaling): void;
}

declare class NTLayer extends NSObject {

	static alloc(): NTLayer; // inherited from NSObject

	static new(): NTLayer; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTLayer;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getOpacity(): number;

	getUpdatePriority(): number;

	getVisibleZoomRange(): NTMapRange;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isUpdateInProgress(): boolean;

	isVisible(): boolean;

	refresh(): void;

	setCullDelay(delay: number): void;

	setOpacity(opacity: number): void;

	setUpdatePriority(priority: number): void;

	setVisible(visible: boolean): void;

	setVisibleZoomRange(range: NTMapRange): void;

	simulateClickScreenPosViewState(clickType: NTClickType, screenPos: NTScreenPos, viewState: NTViewState): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;

	update(cullState: NTCullState): void;
}

declare class NTLayerVector extends NSObject {

	static alloc(): NTLayerVector; // inherited from NSObject

	static new(): NTLayerVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTLayer): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTLayer;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTLayer): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTLayers extends NSObject {

	static alloc(): NTLayers; // inherited from NSObject

	static new(): NTLayers; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(layer: NTLayer): void;

	addAll(layers: NTLayerVector): void;

	clear(): void;

	count(): number;

	get(index: number): NTLayer;

	getAll(): NTLayerVector;

	getCptr(): interop.Pointer | interop.Reference<any>;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	insertLayer(index: number, layer: NTLayer): void;

	remove(layer: NTLayer): boolean;

	removeAll(layers: NTLayerVector): boolean;

	setAll(layers: NTLayerVector): void;

	setLayer(index: number, layer: NTLayer): void;

	swigGetRawPtr(): number;
}

declare class NTLine extends NTVectorElement {

	static alloc(): NTLine; // inherited from NSObject

	static new(): NTLine; // inherited from NSObject

	constructor(o: { geometry: NTLineGeometry; style: NTLineStyle; });

	constructor(o: { poses: NTMapPosVector; style: NTLineStyle; });

	getGeometry(): NTLineGeometry;

	getPoses(): NTMapPosVector;

	getStyle(): NTLineStyle;

	initWithGeometryStyle(geometry: NTLineGeometry, style: NTLineStyle): this;

	initWithPosesStyle(poses: NTMapPosVector, style: NTLineStyle): this;

	setGeometry(geometry: NTLineGeometry): void;

	setPoses(poses: NTMapPosVector): void;

	setStyle(style: NTLineStyle): void;
}

declare const enum NTLineEndType {

	T_LINE_END_TYPE_NONE = 0,

	T_LINE_END_TYPE_SQUARE = 1,

	T_LINE_END_TYPE_ROUND = 2
}

declare class NTLineGeometry extends NTGeometry {

	static alloc(): NTLineGeometry; // inherited from NSObject

	static new(): NTLineGeometry; // inherited from NSObject

	constructor(o: { poses: NTMapPosVector; });

	getPoses(): NTMapPosVector;

	initWithPoses(poses: NTMapPosVector): this;
}

declare class NTLineGeometryVector extends NSObject {

	static alloc(): NTLineGeometryVector; // inherited from NSObject

	static new(): NTLineGeometryVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTLineGeometry): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTLineGeometry;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTLineGeometry): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare const enum NTLineJoinType {

	T_LINE_JOIN_TYPE_NONE = 0,

	T_LINE_JOIN_TYPE_MITER = 1,

	T_LINE_JOIN_TYPE_BEVEL = 2,

	T_LINE_JOIN_TYPE_ROUND = 3
}

declare class NTLineStyle extends NTStyle {

	static alloc(): NTLineStyle; // inherited from NSObject

	static new(): NTLineStyle; // inherited from NSObject

	getBitmap(): NTBitmap;

	getClickWidth(): number;

	getLineEndType(): NTLineEndType;

	getLineJoinType(): NTLineJoinType;

	getStretchFactor(): number;

	getWidth(): number;
}

declare class NTLineStyleBuilder extends NTStyleBuilder {

	static alloc(): NTLineStyleBuilder; // inherited from NSObject

	static new(): NTLineStyleBuilder; // inherited from NSObject

	buildStyle(): NTLineStyle;

	getBitmap(): NTBitmap;

	getClickWidth(): number;

	getLineEndType(): NTLineEndType;

	getLineJoinType(): NTLineJoinType;

	getStretchFactor(): number;

	getWidth(): number;

	setBitmap(bitmap: NTBitmap): void;

	setClickWidth(clickWidth: number): void;

	setLineEndType(lineEndType: NTLineEndType): void;

	setLineJoinType(lineJoinType: NTLineJoinType): void;

	setStretchFactor(stretchFactor: number): void;

	setWidth(width: number): void;
}

declare const enum NTLocalSpatialIndexType {

	T_LOCAL_SPATIAL_INDEX_TYPE_NULL = 0,

	T_LOCAL_SPATIAL_INDEX_TYPE_KDTREE = 1
}

declare class NTLocalVectorDataSource extends NTVectorDataSource {

	static alloc(): NTLocalVectorDataSource; // inherited from NSObject

	static new(): NTLocalVectorDataSource; // inherited from NSObject

	constructor(o: { projection: NTProjection; spatialIndexType: NTLocalSpatialIndexType; });

	add(element: NTVectorElement): void;

	addAll(elements: NTVectorElementVector): void;

	addFeatureCollectionStyle(featureCollection: NTFeatureCollection, style: NTStyle): void;

	clear(): void;

	getAll(): NTVectorElementVector;

	getDataExtentSwigExplicitNTLocalVectorDataSource(): NTMapBounds;

	getFeatureCollection(): NTFeatureCollection;

	getGeometrySimplifier(): NTGeometrySimplifier;

	initWithProjectionSpatialIndexType(projection: NTProjection, spatialIndexType: NTLocalSpatialIndexType): this;

	loadElementsSwigExplicitNTLocalVectorDataSource(cullState: NTCullState): NTVectorData;

	remove(element: NTVectorElement): boolean;

	removeAll(elements: NTVectorElementVector): boolean;

	setAll(elements: NTVectorElementVector): void;

	setGeometrySimplifier(simplifier: NTGeometrySimplifier): void;
}

declare class NTLog extends NSObject {

	static alloc(): NTLog; // inherited from NSObject

	static debug(message: string): void;

	static error(message: string): void;

	static fatal(message: string): void;

	static getLogEventListener(): NTLogEventListener;

	static getTag(): string;

	static info(message: string): void;

	static isShowDebug(): boolean;

	static isShowError(): boolean;

	static isShowInfo(): boolean;

	static isShowWarn(): boolean;

	static new(): NTLog; // inherited from NSObject

	static setLogEventListener(listener: NTLogEventListener): void;

	static setShowDebug(showDebug: boolean): void;

	static setShowError(showError: boolean): void;

	static setShowInfo(showInfo: boolean): void;

	static setShowWarn(showWarn: boolean): void;

	static setTag(tag: string): void;

	static warn(message: string): void;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;
}

declare class NTLogEventListener extends NSObject {

	static alloc(): NTLogEventListener; // inherited from NSObject

	static new(): NTLogEventListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTLogEventListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onDebugEvent(message: string): boolean;

	onDebugEventSwigExplicitNTLogEventListener(message: string): boolean;

	onErrorEvent(message: string): boolean;

	onErrorEventSwigExplicitNTLogEventListener(message: string): boolean;

	onFatalEvent(message: string): boolean;

	onFatalEventSwigExplicitNTLogEventListener(message: string): boolean;

	onInfoEvent(message: string): boolean;

	onInfoEventSwigExplicitNTLogEventListener(message: string): boolean;

	onWarnEvent(message: string): boolean;

	onWarnEventSwigExplicitNTLogEventListener(message: string): boolean;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare const enum NTMBTilesScheme {

	T_MBTILES_SCHEME_TMS = 0,

	T_MBTILES_SCHEME_XYZ = 1
}

declare class NTMBTilesTileDataSource extends NTTileDataSource {

	static alloc(): NTMBTilesTileDataSource; // inherited from NSObject

	static new(): NTMBTilesTileDataSource; // inherited from NSObject

	constructor(o: { minZoom: number; maxZoom: number; path: string; });

	constructor(o: { minZoom: number; maxZoom: number; path: string; scheme: NTMBTilesScheme; });

	constructor(o: { path: string; });

	getDataExtentSwigExplicitNTMBTilesTileDataSource(): NTMapBounds;

	getMetaData(): NTStringMap;

	initWithMinZoomMaxZoomPath(minZoom: number, maxZoom: number, path: string): this;

	initWithMinZoomMaxZoomPathScheme(minZoom: number, maxZoom: number, path: string, scheme: NTMBTilesScheme): this;

	initWithPath(path: string): this;

	loadTileSwigExplicitNTMBTilesTileDataSource(mapTile: NTMapTile): NTTileData;
}

declare class NTMBVectorTileDecoder extends NTVectorTileDecoder {

	static alloc(): NTMBVectorTileDecoder; // inherited from NSObject

	static new(): NTMBVectorTileDecoder; // inherited from NSObject

	constructor(o: { cartoCSSStyleSet: NTCartoCSSStyleSet; });

	constructor(o: { compiledStyleSet: NTCompiledStyleSet; });

	getCartoCSSStyleSet(): NTCartoCSSStyleSet;

	getCompiledStyleSet(): NTCompiledStyleSet;

	getStyleParameter(param: string): string;

	getStyleParameters(): NTStringVector;

	initWithCartoCSSStyleSet(cartoCSSStyleSet: NTCartoCSSStyleSet): this;

	initWithCompiledStyleSet(compiledStyleSet: NTCompiledStyleSet): this;

	setCartoCSSStyleSet(styleSet: NTCartoCSSStyleSet): void;

	setCompiledStyleSet(styleSet: NTCompiledStyleSet): void;

	setStyleParameterValue(param: string, value: string): boolean;
}

declare class NTMapBounds extends NSObject {

	static alloc(): NTMapBounds; // inherited from NSObject

	static new(): NTMapBounds; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { min: NTMapPos; max: NTMapPos; });

	containsBounds(bounds: NTMapBounds): boolean;

	containsPos(pos: NTMapPos): boolean;

	// description(): string;

	getCenter(): NTMapPos;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getDelta(): NTMapVec;

	getMax(): NTMapPos;

	getMin(): NTMapPos;

	// hash(): number;

	hashInternal(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithMinMax(min: NTMapPos, max: NTMapPos): this;

	intersects(bounds: NTMapBounds): boolean;

	isEqualInternal(mapBounds: NTMapBounds): boolean;

	swigGetRawPtr(): number;
}

declare class NTMapBoxOnlineGeocodingService extends NTGeocodingService {

	static alloc(): NTMapBoxOnlineGeocodingService; // inherited from NSObject

	static new(): NTMapBoxOnlineGeocodingService; // inherited from NSObject

	constructor(o: { accessToken: string; });

	calculateAddressesSwigExplicitNTMapBoxOnlineGeocodingService(request: NTGeocodingRequest): NTGeocodingResultVector;

	getCustomServiceURL(): string;

	getLanguage(): string;

	initWithAccessToken(accessToken: string): this;

	isAutocomplete(): boolean;

	setAutocomplete(autocomplete: boolean): void;

	setCustomServiceURL(serviceURL: string): void;

	setLanguage(lang: string): void;
}

declare class NTMapBoxOnlineReverseGeocodingService extends NTReverseGeocodingService {

	static alloc(): NTMapBoxOnlineReverseGeocodingService; // inherited from NSObject

	static new(): NTMapBoxOnlineReverseGeocodingService; // inherited from NSObject

	constructor(o: { accessToken: string; });

	calculateAddressesSwigExplicitNTMapBoxOnlineReverseGeocodingService(request: NTReverseGeocodingRequest): NTGeocodingResultVector;

	getCustomServiceURL(): string;

	getLanguage(): string;

	initWithAccessToken(accessToken: string): this;

	setCustomServiceURL(serviceURL: string): void;

	setLanguage(lang: string): void;
}

declare class NTMapClickInfo extends NSObject {

	static alloc(): NTMapClickInfo; // inherited from NSObject

	static new(): NTMapClickInfo; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getClickPos(): NTMapPos;

	getClickType(): NTClickType;

	getCptr(): interop.Pointer | interop.Reference<any>;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare class NTMapEnvelope extends NSObject {

	static alloc(): NTMapEnvelope; // inherited from NSObject

	static new(): NTMapEnvelope; // inherited from NSObject

	constructor(o: { bounds: NTMapBounds; });

	constructor(o: { convexHull: NTMapPosVector; });

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	contains(envelope: NTMapEnvelope): boolean;

	// description(): string;

	getBounds(): NTMapBounds;

	getConvexHull(): NTMapPosVector;

	getCptr(): interop.Pointer | interop.Reference<any>;

	// hash(): number;

	hashInternal(): number;

	initWithBounds(bounds: NTMapBounds): this;

	initWithConvexHull(convexHull: NTMapPosVector): this;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	intersects(envelope: NTMapEnvelope): boolean;

	isEqualInternal(envelope: NTMapEnvelope): boolean;

	swigGetRawPtr(): number;
}

declare class NTMapEventListener extends NSObject {

	static alloc(): NTMapEventListener; // inherited from NSObject

	static new(): NTMapEventListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTMapEventListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onMapClicked(mapClickInfo: NTMapClickInfo): void;

	onMapClickedSwigExplicitNTMapEventListener(mapClickInfo: NTMapClickInfo): void;

	onMapIdle(): void;

	onMapIdleSwigExplicitNTMapEventListener(): void;

	onMapMoved(): void;

	onMapMovedSwigExplicitNTMapEventListener(): void;

	onMapStable(): void;

	onMapStableSwigExplicitNTMapEventListener(): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTMapPos extends NSObject {

	static alloc(): NTMapPos; // inherited from NSObject

	static new(): NTMapPos; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { x: number; y: number; });

	constructor(o: { x: number; y: number; z: number; });

	add(v: NTMapVec): NTMapPos;

	// description(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getX(): number;

	getY(): number;

	getZ(): number;

	// hash(): number;

	hashInternal(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithXY(x: number, y: number): this;

	initWithXYZ(x: number, y: number, z: number): this;

	isEqualInternal(p: NTMapPos): boolean;

	subPos(p: NTMapPos): NTMapVec;

	subVec(v: NTMapVec): NTMapPos;

	swigGetRawPtr(): number;
}

declare class NTMapPosVector extends NSObject {

	static alloc(): NTMapPosVector; // inherited from NSObject

	static new(): NTMapPosVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTMapPos): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTMapPos;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTMapPos): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTMapPosVectorVector extends NSObject {

	static alloc(): NTMapPosVectorVector; // inherited from NSObject

	static new(): NTMapPosVectorVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTMapPosVector): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTMapPosVector;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTMapPosVector): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTMapRange extends NSObject {

	static alloc(): NTMapRange; // inherited from NSObject

	static new(): NTMapRange; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { min: number; max: number; });

	// description(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getMax(): number;

	getMidrange(): number;

	getMin(): number;

	// hash(): number;

	hashInternal(): number;

	inRange(value: number): boolean;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithMinMax(min: number, max: number): this;

	isEqualInternal(mapRange: NTMapRange): boolean;

	length(): number;

	swigGetRawPtr(): number;
}

declare class NTMapRenderer extends NSObject {

	static alloc(): NTMapRenderer; // inherited from NSObject

	static new(): NTMapRenderer; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	captureRenderingWaitWhileUpdating(listener: NTRendererCaptureListener, waitWhileUpdating: boolean): void;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getMapRendererListener(): NTMapRendererListener;

	getViewState(): NTViewState;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	requestRedraw(): void;

	setMapRendererListener(listener: NTMapRendererListener): void;

	swigGetRawPtr(): number;
}

declare class NTMapRendererListener extends NSObject {

	static alloc(): NTMapRendererListener; // inherited from NSObject

	static new(): NTMapRendererListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTMapRendererListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onAfterDrawFrame(): void;

	onAfterDrawFrameSwigExplicitNTMapRendererListener(): void;

	onBeforeDrawFrame(): void;

	onBeforeDrawFrameSwigExplicitNTMapRendererListener(): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTMapTile extends NSObject {

	static alloc(): NTMapTile; // inherited from NSObject

	static new(): NTMapTile; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { x: number; y: number; zoom: number; frameNr: number; });

	// description(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getFrameNr(): number;

	getTileId(): number;

	getX(): number;

	getY(): number;

	getZoom(): number;

	// hash(): number;

	hashInternal(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithXYZoomFrameNr(x: number, y: number, zoom: number, frameNr: number): this;

	isEqualInternal(tile: NTMapTile): boolean;

	swigGetRawPtr(): number;
}

declare class NTMapVec extends NSObject {

	static alloc(): NTMapVec; // inherited from NSObject

	static new(): NTMapVec; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { x: number; y: number; });

	constructor(o: { x: number; y: number; z: number; });

	add(v: NTMapVec): NTMapVec;

	crossProduct2D(v: NTMapVec): number;

	crossProduct3D(v: NTMapVec): NTMapVec;

	// description(): string;

	div(divider: number): NTMapVec;

	dotProduct(v: NTMapVec): number;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getNormalized(): NTMapVec;

	getX(): number;

	getY(): number;

	getZ(): number;

	// hash(): number;

	hashInternal(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithXY(x: number, y: number): this;

	initWithXYZ(x: number, y: number, z: number): this;

	isEqualInternal(v: NTMapVec): boolean;

	length(): number;

	mul(multiplier: number): NTMapVec;

	sub(v: NTMapVec): NTMapVec;

	swigGetRawPtr(): number;
}

declare class NTMapView extends GLKView {

	static alloc(): NTMapView; // inherited from NSObject

	static appearance(): NTMapView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NTMapView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NTMapView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NTMapView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NTMapView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NTMapView; // inherited from UIAppearance

	static new(): NTMapView; // inherited from NSObject

	static registerLicense(licenseKey: string): boolean;

	readonly nativeMapView: interop.Pointer | interop.Reference<any>;

	cancelAllTasks(): void;

	clearAllCaches(): void;

	clearPreloadingCaches(): void;

	getFocusPos(): NTMapPos;

	getLayers(): NTLayers;

	getMapEventListener(): NTMapEventListener;

	getMapRenderer(): NTMapRenderer;

	getOptions(): NTOptions;

	getRotation(): number;

	getTilt(): number;

	getZoom(): number;

	mapToScreen(mapPos: NTMapPos): NTScreenPos;

	moveToFitBoundsScreenBoundsIntegerZoomDurationSeconds(mapBounds: NTMapBounds, screenBounds: NTScreenBounds, integerZoom: boolean, durationSeconds: number): void;

	moveToFitBoundsScreenBoundsIntegerZoomResetRotationResetTiltDurationSeconds(mapBounds: NTMapBounds, screenBounds: NTScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number): void;

	panDurationSeconds(deltaPos: NTMapVec, durationSeconds: number): void;

	rotateDurationSeconds(deltaAngle: number, durationSeconds: number): void;

	rotateTargetPosDurationSeconds(deltaAngle: number, targetPos: NTMapPos, durationSeconds: number): void;

	screenToMap(screenPos: NTScreenPos): NTMapPos;

	setFocusPosDurationSeconds(pos: NTMapPos, durationSeconds: number): void;

	setMapEventListener(mapEventListener: NTMapEventListener): void;

	setRotationDurationSeconds(angle: number, durationSeconds: number): void;

	setRotationTargetPosDurationSeconds(angle: number, targetPos: NTMapPos, durationSeconds: number): void;

	setTiltDurationSeconds(tilt: number, durationSeconds: number): void;

	setZoomDurationSeconds(zoom: number, durationSeconds: number): void;

	setZoomTargetPosDurationSeconds(zoom: number, targetPos: NTMapPos, durationSeconds: number): void;

	tiltDurationSeconds(deltaTilt: number, durationSeconds: number): void;

	zoomDurationSeconds(deltaZoom: number, durationSeconds: number): void;

	zoomTargetPosDurationSeconds(deltaZoom: number, targetPos: NTMapPos, durationSeconds: number): void;
}

declare class NTMarker extends NTBillboard {

	static alloc(): NTMarker; // inherited from NSObject

	static new(): NTMarker; // inherited from NSObject

	constructor(o: { baseBillboard: NTBillboard; style: NTMarkerStyle; });

	constructor(o: { geometry: NTGeometry; style: NTMarkerStyle; });

	constructor(o: { pos: NTMapPos; style: NTMarkerStyle; });

	getStyle(): NTMarkerStyle;

	initWithBaseBillboardStyle(baseBillboard: NTBillboard, style: NTMarkerStyle): this;

	initWithGeometryStyle(geometry: NTGeometry, style: NTMarkerStyle): this;

	initWithPosStyle(pos: NTMapPos, style: NTMarkerStyle): this;

	setStyle(style: NTMarkerStyle): void;
}

declare class NTMarkerStyle extends NTBillboardStyle {

	static alloc(): NTMarkerStyle; // inherited from NSObject

	static new(): NTMarkerStyle; // inherited from NSObject

	getAnchorPointX(): number;

	getAnchorPointY(): number;

	getBitmap(): NTBitmap;

	getClickSize(): number;

	getOrientationMode(): NTBillboardOrientation;

	getScalingMode(): NTBillboardScaling;

	getSize(): number;
}

declare class NTMarkerStyleBuilder extends NTBillboardStyleBuilder {

	static alloc(): NTMarkerStyleBuilder; // inherited from NSObject

	static new(): NTMarkerStyleBuilder; // inherited from NSObject

	buildStyle(): NTMarkerStyle;

	getAnchorPointX(): number;

	getAnchorPointY(): number;

	getBitmap(): NTBitmap;

	getClickSize(): number;

	getOrientationMode(): NTBillboardOrientation;

	getScalingMode(): NTBillboardScaling;

	getSize(): number;

	setAnchorPointX(anchorPointX: number): void;

	setAnchorPointXAnchorPointY(anchorPointX: number, anchorPointY: number): void;

	setAnchorPointY(anchorPointY: number): void;

	setBitmap(bitmap: NTBitmap): void;

	setClickSize(size: number): void;

	setOrientationMode(orientationMode: NTBillboardOrientation): void;

	setScalingMode(scalingMode: NTBillboardScaling): void;

	setSize(size: number): void;
}

declare class NTMemoryCacheTileDataSource extends NTCacheTileDataSource {

	static alloc(): NTMemoryCacheTileDataSource; // inherited from NSObject

	static new(): NTMemoryCacheTileDataSource; // inherited from NSObject

	clearSwigExplicitNTMemoryCacheTileDataSource(): void;

	getCapacitySwigExplicitNTMemoryCacheTileDataSource(): number;

	loadTileSwigExplicitNTMemoryCacheTileDataSource(mapTile: NTMapTile): NTTileData;

	setCapacitySwigExplicitNTMemoryCacheTileDataSource(capacityInBytes: number): void;
}

declare class NTMergedMBVTTileDataSource extends NTTileDataSource {

	static alloc(): NTMergedMBVTTileDataSource; // inherited from NSObject

	static new(): NTMergedMBVTTileDataSource; // inherited from NSObject

	constructor(o: { dataSource1: NTTileDataSource; dataSource2: NTTileDataSource; });

	getDataExtentSwigExplicitNTMergedMBVTTileDataSource(): NTMapBounds;

	getMaxZoomSwigExplicitNTMergedMBVTTileDataSource(): number;

	getMinZoomSwigExplicitNTMergedMBVTTileDataSource(): number;

	initWithDataSource1DataSource2(dataSource1: NTTileDataSource, dataSource2: NTTileDataSource): this;

	loadTileSwigExplicitNTMergedMBVTTileDataSource(tile: NTMapTile): NTTileData;
}

declare class NTMultiGeometry extends NTGeometry {

	static alloc(): NTMultiGeometry; // inherited from NSObject

	static new(): NTMultiGeometry; // inherited from NSObject

	constructor(o: { geometries: NTGeometryVector; });

	getGeometry(index: number): NTGeometry;

	getGeometryCount(): number;

	initWithGeometries(geometries: NTGeometryVector): this;
}

declare class NTMultiLineGeometry extends NTMultiGeometry {

	static alloc(): NTMultiLineGeometry; // inherited from NSObject

	static new(): NTMultiLineGeometry; // inherited from NSObject

	constructor(o: { geometries: NTLineGeometryVector; });

	getGeometry(index: number): NTLineGeometry;

	initWithGeometries(geometries: NTLineGeometryVector): this;
}

declare class NTMultiPointGeometry extends NTMultiGeometry {

	static alloc(): NTMultiPointGeometry; // inherited from NSObject

	static new(): NTMultiPointGeometry; // inherited from NSObject

	constructor(o: { geometries: NTPointGeometryVector; });

	getGeometry(index: number): NTPointGeometry;

	initWithGeometries(geometries: NTPointGeometryVector): this;
}

declare class NTMultiPolygonGeometry extends NTMultiGeometry {

	static alloc(): NTMultiPolygonGeometry; // inherited from NSObject

	static new(): NTMultiPolygonGeometry; // inherited from NSObject

	constructor(o: { geometries: NTPolygonGeometryVector; });

	getGeometry(index: number): NTPolygonGeometry;

	initWithGeometries(geometries: NTPolygonGeometryVector): this;
}

declare class NTNMLModel extends NTVectorElement {

	static alloc(): NTNMLModel; // inherited from NSObject

	static new(): NTNMLModel; // inherited from NSObject

	constructor(o: { geometry: NTGeometry; sourceModelData: NTBinaryData; });

	constructor(o: { geometry: NTGeometry; style: NTNMLModelStyle; });

	constructor(o: { pos: NTMapPos; sourceModelData: NTBinaryData; });

	constructor(o: { pos: NTMapPos; style: NTNMLModelStyle; });

	getRotationAngle(): number;

	getRotationAxis(): NTMapVec;

	getScale(): number;

	getStyle(): NTNMLModelStyle;

	initWithGeometrySourceModelData(geometry: NTGeometry, sourceModelData: NTBinaryData): this;

	initWithGeometryStyle(geometry: NTGeometry, style: NTNMLModelStyle): this;

	initWithPosSourceModelData(pos: NTMapPos, sourceModelData: NTBinaryData): this;

	initWithPosStyle(pos: NTMapPos, style: NTNMLModelStyle): this;

	setGeometry(geometry: NTGeometry): void;

	setPos(pos: NTMapPos): void;

	setRotationAngle(axis: NTMapVec, angle: number): void;

	setScale(scale: number): void;

	setStyle(style: NTNMLModelStyle): void;
}

declare class NTNMLModelStyle extends NTStyle {

	static alloc(): NTNMLModelStyle; // inherited from NSObject

	static new(): NTNMLModelStyle; // inherited from NSObject
}

declare class NTNMLModelStyleBuilder extends NTStyleBuilder {

	static alloc(): NTNMLModelStyleBuilder; // inherited from NSObject

	static new(): NTNMLModelStyleBuilder; // inherited from NSObject

	buildStyle(): NTNMLModelStyle;

	getModelAsset(): NTBinaryData;

	setModelAsset(modelAsset: NTBinaryData): void;
}

declare class NTOSMOfflineGeocodingService extends NTGeocodingService {

	static alloc(): NTOSMOfflineGeocodingService; // inherited from NSObject

	static new(): NTOSMOfflineGeocodingService; // inherited from NSObject

	constructor(o: { path: string; });

	calculateAddressesSwigExplicitNTOSMOfflineGeocodingService(request: NTGeocodingRequest): NTGeocodingResultVector;

	getLanguage(): string;

	initWithPath(path: string): this;

	isAutocomplete(): boolean;

	setAutocomplete(autocomplete: boolean): void;

	setLanguage(lang: string): void;
}

declare class NTOSMOfflineReverseGeocodingService extends NTReverseGeocodingService {

	static alloc(): NTOSMOfflineReverseGeocodingService; // inherited from NSObject

	static new(): NTOSMOfflineReverseGeocodingService; // inherited from NSObject

	constructor(o: { path: string; });

	calculateAddressesSwigExplicitNTOSMOfflineReverseGeocodingService(request: NTReverseGeocodingRequest): NTGeocodingResultVector;

	getLanguage(): string;

	initWithPath(path: string): this;

	setLanguage(lang: string): void;
}

declare class NTOSRMOfflineRoutingService extends NTRoutingService {

	static alloc(): NTOSRMOfflineRoutingService; // inherited from NSObject

	static new(): NTOSRMOfflineRoutingService; // inherited from NSObject

	constructor(o: { path: string; });

	calculateRouteSwigExplicitNTOSRMOfflineRoutingService(request: NTRoutingRequest): NTRoutingResult;

	initWithPath(path: string): this;
}

declare class NTOptions extends NSObject {

	static alloc(): NTOptions; // inherited from NSObject

	static new(): NTOptions; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getAmbientLightColor(): NTColor;

	getBackgroundBitmap(): NTBitmap;

	getBaseProjection(): NTProjection;

	getClearColor(): NTColor;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getDPI(): number;

	getDrawDistance(): number;

	getEnvelopeThreadPoolSize(): number;

	getFieldOfViewY(): number;

	getFocusPointOffset(): NTScreenPos;

	getMainLightColor(): NTColor;

	getMainLightDirection(): NTMapVec;

	getPanBounds(): NTMapBounds;

	getPanningMode(): NTPanningMode;

	getPivotMode(): NTPivotMode;

	getRenderProjectionMode(): NTRenderProjectionMode;

	getSkyColor(): NTColor;

	getTileDrawSize(): number;

	getTileThreadPoolSize(): number;

	getTiltRange(): NTMapRange;

	getWatermarkAlignmentX(): number;

	getWatermarkAlignmentY(): number;

	getWatermarkBitmap(): NTBitmap;

	getWatermarkPadding(): NTScreenPos;

	getWatermarkScale(): number;

	getZoomRange(): NTMapRange;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isClickTypeDetection(): boolean;

	isKineticPan(): boolean;

	isKineticRotation(): boolean;

	isKineticZoom(): boolean;

	isRestrictedPanning(): boolean;

	isRotatable(): boolean;

	isSeamlessPanning(): boolean;

	isTiltGestureReversed(): boolean;

	isUserInput(): boolean;

	isZoomGestures(): boolean;

	setAmbientLightColor(color: NTColor): void;

	setBackgroundBitmap(backgroundBitmap: NTBitmap): void;

	setBaseProjection(baseProjection: NTProjection): void;

	setClearColor(color: NTColor): void;

	setClickTypeDetection(enabled: boolean): void;

	setDPI(dpi: number): void;

	setDrawDistance(drawDistance: number): void;

	setEnvelopeThreadPoolSize(poolSize: number): void;

	setFieldOfViewY(fovY: number): void;

	setFocusPointOffset(offset: NTScreenPos): void;

	setKineticPan(enabled: boolean): void;

	setKineticRotation(enabled: boolean): void;

	setKineticZoom(enabled: boolean): void;

	setMainLightColor(color: NTColor): void;

	setMainLightDirection(direction: NTMapVec): void;

	setPanBounds(panBounds: NTMapBounds): void;

	setPanningMode(panningMode: NTPanningMode): void;

	setPivotMode(pivotMode: NTPivotMode): void;

	setRenderProjectionMode(renderProjectionMode: NTRenderProjectionMode): void;

	setRestrictedPanning(enabled: boolean): void;

	setRotatable(enabled: boolean): void;

	setSeamlessPanning(enabled: boolean): void;

	setSkyColor(color: NTColor): void;

	setTileDrawSize(tileDrawSize: number): void;

	setTileThreadPoolSize(poolSize: number): void;

	setTiltGestureReversed(reversed: boolean): void;

	setTiltRange(tiltRange: NTMapRange): void;

	setUserInput(enabled: boolean): void;

	setWatermarkAlignmentX(alignmentX: number): void;

	setWatermarkAlignmentY(alignmentY: number): void;

	setWatermarkBitmap(watermarkBitmap: NTBitmap): void;

	setWatermarkPadding(padding: NTScreenPos): void;

	setWatermarkScale(scale: number): void;

	setZoomGestures(enabled: boolean): void;

	setZoomRange(zoomRange: NTMapRange): void;

	swigGetRawPtr(): number;
}

declare class NTOrderedTileDataSource extends NTTileDataSource {

	static alloc(): NTOrderedTileDataSource; // inherited from NSObject

	static new(): NTOrderedTileDataSource; // inherited from NSObject

	constructor(o: { dataSource1: NTTileDataSource; dataSource2: NTTileDataSource; });

	getDataExtentSwigExplicitNTOrderedTileDataSource(): NTMapBounds;

	getMaxZoomSwigExplicitNTOrderedTileDataSource(): number;

	getMinZoomSwigExplicitNTOrderedTileDataSource(): number;

	initWithDataSource1DataSource2(dataSource1: NTTileDataSource, dataSource2: NTTileDataSource): this;

	loadTileSwigExplicitNTOrderedTileDataSource(tile: NTMapTile): NTTileData;
}

declare const enum NTPackageAction {

	T_PACKAGE_ACTION_READY = 0,

	T_PACKAGE_ACTION_WAITING = 1,

	T_PACKAGE_ACTION_DOWNLOADING = 2,

	T_PACKAGE_ACTION_COPYING = 3,

	T_PACKAGE_ACTION_REMOVING = 4
}

declare const enum NTPackageErrorType {

	T_PACKAGE_ERROR_TYPE_SYSTEM = 0,

	T_PACKAGE_ERROR_TYPE_CONNECTION = 1,

	T_PACKAGE_ERROR_TYPE_DOWNLOAD_LIMIT_EXCEEDED = 2,

	T_PACKAGE_ERROR_TYPE_PACKAGE_TOO_BIG = 3,

	T_PACKAGE_ERROR_TYPE_NO_OFFLINE_PLAN = 4
}

declare class NTPackageInfo extends NSObject {

	static alloc(): NTPackageInfo; // inherited from NSObject

	static new(): NTPackageInfo; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { packageId: string; packageType: NTPackageType; version: number; size: number; serverURL: string; tileMask: NTPackageTileMask; metaInfo: NTPackageMetaInfo; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getMetaInfo(): NTPackageMetaInfo;

	getName(): string;

	getNames(lang: string): NTStringVector;

	getPackageId(): string;

	getPackageType(): NTPackageType;

	getSize(): number;

	getTileMask(): NTPackageTileMask;

	getVersion(): number;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithPackageIdPackageTypeVersionSizeServerURLTileMaskMetaInfo(packageId: string, packageType: NTPackageType, version: number, size: number, serverURL: string, tileMask: NTPackageTileMask, metaInfo: NTPackageMetaInfo): this;

	swigGetRawPtr(): number;
}

declare class NTPackageInfoVector extends NSObject {

	static alloc(): NTPackageInfoVector; // inherited from NSObject

	static new(): NTPackageInfoVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTPackageInfo): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTPackageInfo;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTPackageInfo): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTPackageManager extends NSObject {

	static alloc(): NTPackageManager; // inherited from NSObject

	static new(): NTPackageManager; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTPackageManager;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { packageListURL: string; dataFolder: string; serverEncKey: string; localEncKey: string; });

	cancelPackageTasks(packageId: string): void;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getLocalPackage(packageId: string): NTPackageInfo;

	getLocalPackageStatusVersion(packageId: string, version: number): NTPackageStatus;

	getLocalPackages(): NTPackageInfoVector;

	getPackageManagerListener(): NTPackageManagerListener;

	getServerPackage(packageId: string): NTPackageInfo;

	getServerPackageListAge(): number;

	getServerPackageListMetaInfo(): NTPackageMetaInfo;

	getServerPackages(): NTPackageInfoVector;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithPackageListURLDataFolderServerEncKeyLocalEncKey(packageListURL: string, dataFolder: string, serverEncKey: string, localEncKey: string): this;

	isAreaDownloadedZoomProjection(mapBounds: NTMapBounds, zoom: number, projection: NTProjection): boolean;

	setPackageManagerListener(listener: NTPackageManagerListener): void;

	setPackagePriorityPriority(packageId: string, priority: number): void;

	start(): boolean;

	startPackageDownload(packageId: string): boolean;

	startPackageImportVersionPackageFileName(packageId: string, version: number, packageFileName: string): boolean;

	startPackageListDownload(): boolean;

	startPackageRemove(packageId: string): boolean;

	stop(wait: boolean): void;

	suggestPackagesProjection(mapPos: NTMapPos, projection: NTProjection): NTPackageInfoVector;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTPackageManagerGeocodingService extends NTGeocodingService {

	static alloc(): NTPackageManagerGeocodingService; // inherited from NSObject

	static new(): NTPackageManagerGeocodingService; // inherited from NSObject

	constructor(o: { packageManager: NTPackageManager; });

	calculateAddressesSwigExplicitNTPackageManagerGeocodingService(request: NTGeocodingRequest): NTGeocodingResultVector;

	getLanguage(): string;

	initWithPackageManager(packageManager: NTPackageManager): this;

	isAutocomplete(): boolean;

	setAutocomplete(autocomplete: boolean): void;

	setLanguage(lang: string): void;
}

declare class NTPackageManagerListener extends NSObject {

	static alloc(): NTPackageManagerListener; // inherited from NSObject

	static new(): NTPackageManagerListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTPackageManagerListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onPackageCancelledSwigExplicitNTPackageManagerListenerVersion(arg1: string, version: number): void;

	onPackageCancelledVersion(arg1: string, version: number): void;

	onPackageFailedSwigExplicitNTPackageManagerListenerVersionErrorType(arg1: string, version: number, errorType: NTPackageErrorType): void;

	onPackageFailedVersionErrorType(arg1: string, version: number, errorType: NTPackageErrorType): void;

	onPackageListFailed(): void;

	onPackageListFailedSwigExplicitNTPackageManagerListener(): void;

	onPackageListUpdated(): void;

	onPackageListUpdatedSwigExplicitNTPackageManagerListener(): void;

	onPackageStatusChangedSwigExplicitNTPackageManagerListenerVersionStatus(arg1: string, version: number, status: NTPackageStatus): void;

	onPackageStatusChangedVersionStatus(arg1: string, version: number, status: NTPackageStatus): void;

	onPackageUpdatedSwigExplicitNTPackageManagerListenerVersion(arg1: string, version: number): void;

	onPackageUpdatedVersion(arg1: string, version: number): void;

	onStyleFailed(styleName: string): void;

	onStyleFailedSwigExplicitNTPackageManagerListener(styleName: string): void;

	onStyleUpdated(styleName: string): void;

	onStyleUpdatedSwigExplicitNTPackageManagerListener(styleName: string): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTPackageManagerReverseGeocodingService extends NTReverseGeocodingService {

	static alloc(): NTPackageManagerReverseGeocodingService; // inherited from NSObject

	static new(): NTPackageManagerReverseGeocodingService; // inherited from NSObject

	constructor(o: { packageManager: NTPackageManager; });

	calculateAddressesSwigExplicitNTPackageManagerReverseGeocodingService(request: NTReverseGeocodingRequest): NTGeocodingResultVector;

	getLanguage(): string;

	initWithPackageManager(packageManager: NTPackageManager): this;

	setLanguage(lang: string): void;
}

declare class NTPackageManagerRoutingService extends NTRoutingService {

	static alloc(): NTPackageManagerRoutingService; // inherited from NSObject

	static new(): NTPackageManagerRoutingService; // inherited from NSObject

	constructor(o: { packageManager: NTPackageManager; });

	calculateRouteSwigExplicitNTPackageManagerRoutingService(request: NTRoutingRequest): NTRoutingResult;

	initWithPackageManager(packageManager: NTPackageManager): this;
}

declare class NTPackageManagerTileDataSource extends NTTileDataSource {

	static alloc(): NTPackageManagerTileDataSource; // inherited from NSObject

	static new(): NTPackageManagerTileDataSource; // inherited from NSObject

	constructor(o: { packageManager: NTPackageManager; });

	getPackageManager(): NTPackageManager;

	initWithPackageManager(packageManager: NTPackageManager): this;

	loadTileSwigExplicitNTPackageManagerTileDataSource(mapTile: NTMapTile): NTTileData;
}

declare class NTPackageMetaInfo extends NSObject {

	static alloc(): NTPackageMetaInfo; // inherited from NSObject

	static new(): NTPackageMetaInfo; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { variant: NTVariant; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getVariant(): NTVariant;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithVar(variant: NTVariant): this;

	swigGetRawPtr(): number;
}

declare class NTPackageStatus extends NSObject {

	static alloc(): NTPackageStatus; // inherited from NSObject

	static new(): NTPackageStatus; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { currentAction: NTPackageAction; paused: boolean; progress: number; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getCurrentAction(): NTPackageAction;

	getProgress(): number;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithCurrentActionPausedProgress(currentAction: NTPackageAction, paused: boolean, progress: number): this;

	isPaused(): boolean;

	swigGetRawPtr(): number;
}

declare class NTPackageTileMask extends NSObject {

	static alloc(): NTPackageTileMask; // inherited from NSObject

	static new(): NTPackageTileMask; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getBoundingPolygon(projection: NTProjection): NTMultiPolygonGeometry;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getMaxZoomLevel(): number;

	getStringValue(): string;

	getTileStatus(tile: NTMapTile): NTPackageTileStatus;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare const enum NTPackageTileStatus {

	T_PACKAGE_TILE_STATUS_MISSING = 0,

	T_PACKAGE_TILE_STATUS_PARTIAL = 1,

	T_PACKAGE_TILE_STATUS_FULL = 2
}

declare const enum NTPackageType {

	T_PACKAGE_TYPE_MAP = 0,

	T_PACKAGE_TYPE_ROUTING = 1,

	T_PACKAGE_TYPE_GEOCODING = 2,

	T_PACKAGE_TYPE_VALHALLA_ROUTING = 3
}

declare const enum NTPanningMode {

	T_PANNING_MODE_FREE = 0,

	T_PANNING_MODE_STICKY = 1,

	T_PANNING_MODE_STICKY_FINAL = 2
}

declare class NTPeliasOnlineGeocodingService extends NTGeocodingService {

	static alloc(): NTPeliasOnlineGeocodingService; // inherited from NSObject

	static new(): NTPeliasOnlineGeocodingService; // inherited from NSObject

	constructor(o: { apiKey: string; });

	calculateAddressesSwigExplicitNTPeliasOnlineGeocodingService(request: NTGeocodingRequest): NTGeocodingResultVector;

	getCustomServiceURL(): string;

	getLanguage(): string;

	initWithApiKey(apiKey: string): this;

	isAutocomplete(): boolean;

	setAutocomplete(autocomplete: boolean): void;

	setCustomServiceURL(serviceURL: string): void;

	setLanguage(lang: string): void;
}

declare class NTPeliasOnlineReverseGeocodingService extends NTReverseGeocodingService {

	static alloc(): NTPeliasOnlineReverseGeocodingService; // inherited from NSObject

	static new(): NTPeliasOnlineReverseGeocodingService; // inherited from NSObject

	constructor(o: { apiKey: string; });

	calculateAddressesSwigExplicitNTPeliasOnlineReverseGeocodingService(request: NTReverseGeocodingRequest): NTGeocodingResultVector;

	getCustomServiceURL(): string;

	getLanguage(): string;

	initWithApiKey(apiKey: string): this;

	setCustomServiceURL(serviceURL: string): void;

	setLanguage(lang: string): void;
}

declare class NTPersistentCacheTileDataSource extends NTCacheTileDataSource {

	static alloc(): NTPersistentCacheTileDataSource; // inherited from NSObject

	static new(): NTPersistentCacheTileDataSource; // inherited from NSObject

	constructor(o: { dataSource: NTTileDataSource; databasePath: string; });

	clearSwigExplicitNTPersistentCacheTileDataSource(): void;

	close(): void;

	getCapacitySwigExplicitNTPersistentCacheTileDataSource(): number;

	initWithDataSourceDatabasePath(dataSource: NTTileDataSource, databasePath: string): this;

	isCacheOnlyMode(): boolean;

	isOpen(): boolean;

	loadTileSwigExplicitNTPersistentCacheTileDataSource(mapTile: NTMapTile): NTTileData;

	setCacheOnlyMode(enabled: boolean): void;

	setCapacitySwigExplicitNTPersistentCacheTileDataSource(capacityInBytes: number): void;

	startDownloadAreaMinZoomMaxZoomTileDownloadListener(mapBounds: NTMapBounds, minZoom: number, maxZoom: number, tileDownloadListener: NTTileDownloadListener): void;

	stopAllDownloads(): void;
}

declare const enum NTPivotMode {

	T_PIVOT_MODE_TOUCHPOINT = 0,

	T_PIVOT_MODE_CENTERPOINT = 1
}

declare class NTPoint extends NTVectorElement {

	static alloc(): NTPoint; // inherited from NSObject

	static new(): NTPoint; // inherited from NSObject

	constructor(o: { geometry: NTPointGeometry; style: NTPointStyle; });

	constructor(o: { pos: NTMapPos; style: NTPointStyle; });

	getGeometry(): NTPointGeometry;

	getPos(): NTMapPos;

	getStyle(): NTPointStyle;

	initWithGeometryStyle(geometry: NTPointGeometry, style: NTPointStyle): this;

	initWithPosStyle(pos: NTMapPos, style: NTPointStyle): this;

	setGeometry(geometry: NTPointGeometry): void;

	setPos(pos: NTMapPos): void;

	setStyle(style: NTPointStyle): void;
}

declare class NTPointGeometry extends NTGeometry {

	static alloc(): NTPointGeometry; // inherited from NSObject

	static new(): NTPointGeometry; // inherited from NSObject

	constructor(o: { pos: NTMapPos; });

	getPos(): NTMapPos;

	initWithPos(pos: NTMapPos): this;
}

declare class NTPointGeometryVector extends NSObject {

	static alloc(): NTPointGeometryVector; // inherited from NSObject

	static new(): NTPointGeometryVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTPointGeometry): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTPointGeometry;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTPointGeometry): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTPointStyle extends NTStyle {

	static alloc(): NTPointStyle; // inherited from NSObject

	static new(): NTPointStyle; // inherited from NSObject

	getBitmap(): NTBitmap;

	getClickSize(): number;

	getSize(): number;
}

declare class NTPointStyleBuilder extends NTStyleBuilder {

	static alloc(): NTPointStyleBuilder; // inherited from NSObject

	static new(): NTPointStyleBuilder; // inherited from NSObject

	buildStyle(): NTPointStyle;

	getBitmap(): NTBitmap;

	getClickSize(): number;

	getSize(): number;

	setBitmap(bitmap: NTBitmap): void;

	setClickSize(size: number): void;

	setSize(size: number): void;
}

declare class NTPolygon extends NTVectorElement {

	static alloc(): NTPolygon; // inherited from NSObject

	static new(): NTPolygon; // inherited from NSObject

	constructor(o: { geometry: NTPolygonGeometry; style: NTPolygonStyle; });

	constructor(o: { poses: NTMapPosVector; holes: NTMapPosVectorVector; style: NTPolygonStyle; });

	constructor(o: { poses: NTMapPosVector; style: NTPolygonStyle; });

	getGeometry(): NTPolygonGeometry;

	getHoles(): NTMapPosVectorVector;

	getPoses(): NTMapPosVector;

	getStyle(): NTPolygonStyle;

	initWithGeometryStyle(geometry: NTPolygonGeometry, style: NTPolygonStyle): this;

	initWithPosesHolesStyle(poses: NTMapPosVector, holes: NTMapPosVectorVector, style: NTPolygonStyle): this;

	initWithPosesStyle(poses: NTMapPosVector, style: NTPolygonStyle): this;

	setGeometry(geometry: NTPolygonGeometry): void;

	setHoles(holes: NTMapPosVectorVector): void;

	setPoses(poses: NTMapPosVector): void;

	setStyle(style: NTPolygonStyle): void;
}

declare class NTPolygon3D extends NTVectorElement {

	static alloc(): NTPolygon3D; // inherited from NSObject

	static new(): NTPolygon3D; // inherited from NSObject

	constructor(o: { geometry: NTPolygonGeometry; style: NTPolygon3DStyle; height: number; });

	constructor(o: { poses: NTMapPosVector; holes: NTMapPosVectorVector; style: NTPolygon3DStyle; height: number; });

	constructor(o: { poses: NTMapPosVector; style: NTPolygon3DStyle; height: number; });

	getGeometry(): NTPolygonGeometry;

	getHeight(): number;

	getHoles(): NTMapPosVectorVector;

	getPoses(): NTMapPosVector;

	getStyle(): NTPolygon3DStyle;

	initWithGeometryStyleHeight(geometry: NTPolygonGeometry, style: NTPolygon3DStyle, height: number): this;

	initWithPosesHolesStyleHeight(poses: NTMapPosVector, holes: NTMapPosVectorVector, style: NTPolygon3DStyle, height: number): this;

	initWithPosesStyleHeight(poses: NTMapPosVector, style: NTPolygon3DStyle, height: number): this;

	setGeometry(geometry: NTPolygonGeometry): void;

	setHeight(height: number): void;

	setHoles(holes: NTMapPosVectorVector): void;

	setPoses(poses: NTMapPosVector): void;

	setStyle(style: NTPolygon3DStyle): void;
}

declare class NTPolygon3DStyle extends NTStyle {

	static alloc(): NTPolygon3DStyle; // inherited from NSObject

	static new(): NTPolygon3DStyle; // inherited from NSObject

	getSideColor(): NTColor;
}

declare class NTPolygon3DStyleBuilder extends NTStyleBuilder {

	static alloc(): NTPolygon3DStyleBuilder; // inherited from NSObject

	static new(): NTPolygon3DStyleBuilder; // inherited from NSObject

	buildStyle(): NTPolygon3DStyle;

	getSideColor(): NTColor;

	setSideColor(sideColor: NTColor): void;
}

declare class NTPolygonGeometry extends NTGeometry {

	static alloc(): NTPolygonGeometry; // inherited from NSObject

	static new(): NTPolygonGeometry; // inherited from NSObject

	constructor(o: { poses: NTMapPosVector; });

	constructor(o: { poses: NTMapPosVector; holes: NTMapPosVectorVector; });

	constructor(o: { rings: NTMapPosVectorVector; });

	getHoles(): NTMapPosVectorVector;

	getPoses(): NTMapPosVector;

	getRings(): NTMapPosVectorVector;

	initWithPoses(poses: NTMapPosVector): this;

	initWithPosesHoles(poses: NTMapPosVector, holes: NTMapPosVectorVector): this;

	initWithRings(rings: NTMapPosVectorVector): this;
}

declare class NTPolygonGeometryVector extends NSObject {

	static alloc(): NTPolygonGeometryVector; // inherited from NSObject

	static new(): NTPolygonGeometryVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTPolygonGeometry): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTPolygonGeometry;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTPolygonGeometry): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTPolygonStyle extends NTStyle {

	static alloc(): NTPolygonStyle; // inherited from NSObject

	static new(): NTPolygonStyle; // inherited from NSObject

	getLineStyle(): NTLineStyle;
}

declare class NTPolygonStyleBuilder extends NTStyleBuilder {

	static alloc(): NTPolygonStyleBuilder; // inherited from NSObject

	static new(): NTPolygonStyleBuilder; // inherited from NSObject

	buildStyle(): NTPolygonStyle;

	getLineStyle(): NTLineStyle;

	setLineStyle(lineStyle: NTLineStyle): void;
}

declare class NTPopup extends NTBillboard {

	static alloc(): NTPopup; // inherited from NSObject

	static new(): NTPopup; // inherited from NSObject

	drawBitmapScreenWidthScreenHeightDpToPX(anchorScreenPos: NTScreenPos, screenWidth: number, screenHeight: number, dpToPX: number): NTBitmap;

	getAnchorPointX(): number;

	getAnchorPointY(): number;

	getStyle(): NTPopupStyle;

	setAnchorPointX(anchorPointX: number): void;

	setAnchorPointXAnchorPointY(anchorPointX: number, anchorPointY: number): void;

	setAnchorPointY(anchorPointY: number): void;

	setStyle(style: NTPopupStyle): void;
}

declare class NTPopupClickInfo extends NSObject {

	static alloc(): NTPopupClickInfo; // inherited from NSObject

	static new(): NTPopupClickInfo; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getClickPos(): NTMapPos;

	getClickType(): NTClickType;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getElementClickPos(): NTScreenPos;

	getPopup(): NTPopup;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare class NTPopupDrawInfo extends NSObject {

	static alloc(): NTPopupDrawInfo; // inherited from NSObject

	static new(): NTPopupDrawInfo; // inherited from NSObject

	constructor(o: { anchorScreenPos: NTScreenPos; screenBounds: NTScreenBounds; popup: NTPopup; dpToPX: number; });

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getAnchorScreenPos(): NTScreenPos;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getDPToPX(): number;

	getPopup(): NTPopup;

	getScreenBounds(): NTScreenBounds;

	// hash(): number;

	initWithAnchorScreenPosScreenBoundsPopupDpToPX(anchorScreenPos: NTScreenPos, screenBounds: NTScreenBounds, popup: NTPopup, dpToPX: number): this;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare class NTPopupStyle extends NTBillboardStyle {

	static alloc(): NTPopupStyle; // inherited from NSObject

	static new(): NTPopupStyle; // inherited from NSObject
}

declare class NTPopupStyleBuilder extends NTBillboardStyleBuilder {

	static alloc(): NTPopupStyleBuilder; // inherited from NSObject

	static new(): NTPopupStyleBuilder; // inherited from NSObject

	buildStyle(): NTPopupStyle;
}

declare class NTProjection extends NSObject {

	static alloc(): NTProjection; // inherited from NSObject

	static new(): NTProjection; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTProjection;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	fromLatLng(lat: number, lng: number): NTMapPos;

	fromWgs84(pos: NTMapPos): NTMapPos;

	getBounds(): NTMapBounds;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getName(): string;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;

	toLatLongY(x: number, y: number): NTMapPos;

	toWgs84(pos: NTMapPos): NTMapPos;
}

declare class NTRasterTileClickInfo extends NSObject {

	static alloc(): NTRasterTileClickInfo; // inherited from NSObject

	static new(): NTRasterTileClickInfo; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getClickPos(): NTMapPos;

	getClickType(): NTClickType;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getInterpolatedColor(): NTColor;

	getLayer(): NTLayer;

	getMapTile(): NTMapTile;

	getNearestColor(): NTColor;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare class NTRasterTileEventListener extends NSObject {

	static alloc(): NTRasterTileEventListener; // inherited from NSObject

	static new(): NTRasterTileEventListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTRasterTileEventListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onRasterTileClicked(clickInfo: NTRasterTileClickInfo): boolean;

	onRasterTileClickedSwigExplicitNTRasterTileEventListener(clickInfo: NTRasterTileClickInfo): boolean;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTRasterTileLayer extends NTTileLayer {

	static alloc(): NTRasterTileLayer; // inherited from NSObject

	static new(): NTRasterTileLayer; // inherited from NSObject

	constructor(o: { dataSource: NTTileDataSource; });

	getRasterTileEventListener(): NTRasterTileEventListener;

	getTextureCacheCapacity(): number;

	initWithDataSource(dataSource: NTTileDataSource): this;

	setRasterTileEventListener(eventListener: NTRasterTileEventListener): void;

	setTextureCacheCapacity(capacityInBytes: number): void;
}

declare class NTRedrawRequestListener extends NSObject {

	static alloc(): NTRedrawRequestListener; // inherited from NSObject

	static new(): NTRedrawRequestListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTRedrawRequestListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onRedrawRequested(): void;

	onRedrawRequestedSwigExplicitNTRedrawRequestListener(): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare const enum NTRenderProjectionMode {

	T_RENDER_PROJECTION_MODE_PLANAR = 0,

	T_RENDER_PROJECTION_MODE_SPHERICAL = 1
}

declare class NTRendererCaptureListener extends NSObject {

	static alloc(): NTRendererCaptureListener; // inherited from NSObject

	static new(): NTRendererCaptureListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTRendererCaptureListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onMapRendered(bitmap: NTBitmap): void;

	onMapRenderedSwigExplicitNTRendererCaptureListener(bitmap: NTBitmap): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTReverseGeocodingRequest extends NSObject {

	static alloc(): NTReverseGeocodingRequest; // inherited from NSObject

	static new(): NTReverseGeocodingRequest; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { projection: NTProjection; location: NTMapPos; });

	// description(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getLocation(): NTMapPos;

	getProjection(): NTProjection;

	getSearchRadius(): number;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithProjectionLocation(projection: NTProjection, location: NTMapPos): this;

	setSearchRadius(radius: number): void;

	swigGetRawPtr(): number;
}

declare class NTReverseGeocodingService extends NSObject {

	static alloc(): NTReverseGeocodingService; // inherited from NSObject

	static new(): NTReverseGeocodingService; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTReverseGeocodingService;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	calculateAddresses(request: NTReverseGeocodingRequest): NTGeocodingResultVector;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTRouteMatchingRequest extends NSObject {

	static alloc(): NTRouteMatchingRequest; // inherited from NSObject

	static new(): NTRouteMatchingRequest; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { projection: NTProjection; points: NTMapPosVector; accuracy: number; });

	// description(): string;

	getAccuracy(): number;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getPoints(): NTMapPosVector;

	getProjection(): NTProjection;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithProjectionPointsAccuracy(projection: NTProjection, points: NTMapPosVector, accuracy: number): this;

	swigGetRawPtr(): number;
}

declare class NTRouteMatchingResult extends NSObject {

	static alloc(): NTRouteMatchingResult; // inherited from NSObject

	static new(): NTRouteMatchingResult; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { projection: NTProjection; points: NTMapPosVector; });

	// description(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getPoints(): NTMapPosVector;

	getProjection(): NTProjection;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithProjectionPoints(projection: NTProjection, points: NTMapPosVector): this;

	swigGetRawPtr(): number;
}

declare const enum NTRoutingAction {

	T_ROUTING_ACTION_HEAD_ON = 0,

	T_ROUTING_ACTION_FINISH = 1,

	T_ROUTING_ACTION_NO_TURN = 2,

	T_ROUTING_ACTION_GO_STRAIGHT = 3,

	T_ROUTING_ACTION_TURN_RIGHT = 4,

	T_ROUTING_ACTION_UTURN = 5,

	T_ROUTING_ACTION_TURN_LEFT = 6,

	T_ROUTING_ACTION_REACH_VIA_LOCATION = 7,

	T_ROUTING_ACTION_ENTER_ROUNDABOUT = 8,

	T_ROUTING_ACTION_LEAVE_ROUNDABOUT = 9,

	T_ROUTING_ACTION_STAY_ON_ROUNDABOUT = 10,

	T_ROUTING_ACTION_START_AT_END_OF_STREET = 11,

	T_ROUTING_ACTION_ENTER_AGAINST_ALLOWED_DIRECTION = 12,

	T_ROUTING_ACTION_LEAVE_AGAINST_ALLOWED_DIRECTION = 13,

	T_ROUTING_ACTION_GO_UP = 14,

	T_ROUTING_ACTION_GO_DOWN = 15,

	T_ROUTING_ACTION_WAIT = 16
}

declare class NTRoutingInstruction extends NSObject {

	static alloc(): NTRoutingInstruction; // inherited from NSObject

	static new(): NTRoutingInstruction; // inherited from NSObject

	constructor(o: { action: NTRoutingAction; pointIndex: number; streetName: string; turnAngle: number; azimuth: number; distance: number; time: number; });

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	// description(): string;

	getAction(): NTRoutingAction;

	getAzimuth(): number;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getDistance(): number;

	getGeometryTag(): NTVariant;

	getPointIndex(): number;

	getStreetName(): string;

	getTime(): number;

	getTurnAngle(): number;

	// hash(): number;

	initWithActionPointIndexStreetNameTurnAngleAzimuthDistanceTime(action: NTRoutingAction, pointIndex: number, streetName: string, turnAngle: number, azimuth: number, distance: number, time: number): this;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare class NTRoutingInstructionVector extends NSObject {

	static alloc(): NTRoutingInstructionVector; // inherited from NSObject

	static new(): NTRoutingInstructionVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTRoutingInstruction): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTRoutingInstruction;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTRoutingInstruction): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTRoutingRequest extends NSObject {

	static alloc(): NTRoutingRequest; // inherited from NSObject

	static new(): NTRoutingRequest; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { projection: NTProjection; points: NTMapPosVector; });

	// description(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getPoints(): NTMapPosVector;

	getProjection(): NTProjection;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithProjectionPoints(projection: NTProjection, points: NTMapPosVector): this;

	swigGetRawPtr(): number;
}

declare class NTRoutingResult extends NSObject {

	static alloc(): NTRoutingResult; // inherited from NSObject

	static new(): NTRoutingResult; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { projection: NTProjection; points: NTMapPosVector; instructions: NTRoutingInstructionVector; });

	// description(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getInstructions(): NTRoutingInstructionVector;

	getPoints(): NTMapPosVector;

	getProjection(): NTProjection;

	getTotalDistance(): number;

	getTotalTime(): number;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithProjectionPointsInstructions(projection: NTProjection, points: NTMapPosVector, instructions: NTRoutingInstructionVector): this;

	swigGetRawPtr(): number;
}

declare class NTRoutingService extends NSObject {

	static alloc(): NTRoutingService; // inherited from NSObject

	static new(): NTRoutingService; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTRoutingService;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	calculateRoute(request: NTRoutingRequest): NTRoutingResult;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTSGREOfflineRoutingService extends NTRoutingService {

	static alloc(): NTSGREOfflineRoutingService; // inherited from NSObject

	static new(): NTSGREOfflineRoutingService; // inherited from NSObject

	constructor(o: { geoJSON: NTVariant; config: NTVariant; });

	constructor(o: { projection: NTProjection; featureCollection: NTFeatureCollection; config: NTVariant; });

	calculateRouteSwigExplicitNTSGREOfflineRoutingService(request: NTRoutingRequest): NTRoutingResult;

	getProfile(): string;

	initWithGeoJSONConfig(geoJSON: NTVariant, config: NTVariant): this;

	initWithProjectionFeatureCollectionConfig(projection: NTProjection, featureCollection: NTFeatureCollection, config: NTVariant): this;

	setProfile(profile: string): void;
}

declare class NTScreenBounds extends NSObject {

	static alloc(): NTScreenBounds; // inherited from NSObject

	static new(): NTScreenBounds; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { min: NTScreenPos; max: NTScreenPos; });

	containsBounds(bounds: NTScreenBounds): boolean;

	containsPos(pos: NTScreenPos): boolean;

	// description(): string;

	getCenter(): NTScreenPos;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getHeight(): number;

	getMax(): NTScreenPos;

	getMin(): NTScreenPos;

	getWidth(): number;

	// hash(): number;

	hashInternal(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithMinMax(min: NTScreenPos, max: NTScreenPos): this;

	intersects(bounds: NTScreenBounds): boolean;

	isEqualInternal(ScreenBounds: NTScreenBounds): boolean;

	swigGetRawPtr(): number;
}

declare class NTScreenPos extends NSObject {

	static alloc(): NTScreenPos; // inherited from NSObject

	static new(): NTScreenPos; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { x: number; y: number; });

	// description(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getX(): number;

	getY(): number;

	// hash(): number;

	hashInternal(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithXY(x: number, y: number): this;

	isEqualInternal(p: NTScreenPos): boolean;

	swigGetRawPtr(): number;
}

declare class NTScreenPosVector extends NSObject {

	static alloc(): NTScreenPosVector; // inherited from NSObject

	static new(): NTScreenPosVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTScreenPos): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTScreenPos;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTScreenPos): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTSearchRequest extends NSObject {

	static alloc(): NTSearchRequest; // inherited from NSObject

	static new(): NTSearchRequest; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	// description(): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getFilterExpression(): string;

	getGeometry(): NTGeometry;

	getProjection(): NTProjection;

	getRegexFilter(): string;

	getSearchRadius(): number;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	setFilterExpression(expr: string): void;

	setGeometry(geometry: NTGeometry): void;

	setProjection(projection: NTProjection): void;

	setRegexFilter(regex: string): void;

	setSearchRadius(radius: number): void;

	swigGetRawPtr(): number;
}

declare class NTSolidLayer extends NTLayer {

	static alloc(): NTSolidLayer; // inherited from NSObject

	static new(): NTSolidLayer; // inherited from NSObject

	constructor(o: { bitmap: NTBitmap; });

	constructor(o: { color: NTColor; });

	getBitmap(): NTBitmap;

	getBitmapScale(): number;

	getColor(): NTColor;

	initWithBitmap(bitmap: NTBitmap): this;

	initWithColor(color: NTColor): this;

	setBitmap(bitmap: NTBitmap): void;

	setBitmapScale(scale: number): void;

	setColor(color: NTColor): void;
}

declare class NTStringCartoCSSStyleSetMap extends NSObject {

	static alloc(): NTStringCartoCSSStyleSetMap; // inherited from NSObject

	static new(): NTStringCartoCSSStyleSetMap; // inherited from NSObject

	constructor(o: { arg0: NTStringCartoCSSStyleSetMap; });

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	clear(): void;

	del(key: string): void;

	empty(): boolean;

	get(key: string): NTCartoCSSStyleSet;

	getCptr(): interop.Pointer | interop.Reference<any>;

	get_key(idx: number): string;

	has_key(key: string): boolean;

	initWithArg0(arg0: NTStringCartoCSSStyleSetMap): this;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	setX(key: string, x: NTCartoCSSStyleSet): void;

	size(): number;
}

declare class NTStringMap extends NSObject {

	static alloc(): NTStringMap; // inherited from NSObject

	static new(): NTStringMap; // inherited from NSObject

	constructor(o: { arg0: NTStringMap; });

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	clear(): void;

	del(key: string): void;

	empty(): boolean;

	get(key: string): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	get_key(idx: number): string;

	has_key(key: string): boolean;

	initWithArg0(arg0: NTStringMap): this;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	setX(key: string, x: string): void;

	size(): number;
}

declare class NTStringVariantMap extends NSObject {

	static alloc(): NTStringVariantMap; // inherited from NSObject

	static new(): NTStringVariantMap; // inherited from NSObject

	constructor(o: { arg0: NTStringVariantMap; });

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	clear(): void;

	del(key: string): void;

	empty(): boolean;

	get(key: string): NTVariant;

	getCptr(): interop.Pointer | interop.Reference<any>;

	get_key(idx: number): string;

	has_key(key: string): boolean;

	initWithArg0(arg0: NTStringVariantMap): this;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	setX(key: string, x: NTVariant): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTStringVector extends NSObject {

	static alloc(): NTStringVector; // inherited from NSObject

	static new(): NTStringVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: string): void;

	capacity(): number;

	clear(): void;

	get(i: number): string;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: string): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTStyle extends NSObject {

	static alloc(): NTStyle; // inherited from NSObject

	static new(): NTStyle; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTStyle;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getColor(): NTColor;

	getCptr(): interop.Pointer | interop.Reference<any>;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTStyleBuilder extends NSObject {

	static alloc(): NTStyleBuilder; // inherited from NSObject

	static new(): NTStyleBuilder; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTStyleBuilder;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getColor(): NTColor;

	getCptr(): interop.Pointer | interop.Reference<any>;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	setColor(color: NTColor): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTText extends NTLabel {

	static alloc(): NTText; // inherited from NSObject

	static new(): NTText; // inherited from NSObject

	constructor(o: { baseBillboard: NTBillboard; style: NTTextStyle; text: string; });

	constructor(o: { geometry: NTGeometry; style: NTTextStyle; text: string; });

	constructor(o: { pos: NTMapPos; style: NTTextStyle; text: string; });

	getStyle(): NTTextStyle;

	getText(): string;

	initWithBaseBillboardStyleText(baseBillboard: NTBillboard, style: NTTextStyle, text: string): this;

	initWithGeometryStyleText(geometry: NTGeometry, style: NTTextStyle, text: string): this;

	initWithPosStyleText(pos: NTMapPos, style: NTTextStyle, text: string): this;

	setStyle(style: NTTextStyle): void;

	setText(text: string): void;
}

declare class NTTextMargins extends NSObject {

	static alloc(): NTTextMargins; // inherited from NSObject

	static new(): NTTextMargins; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { left: number; top: number; right: number; bottom: number; });

	getBottom(): number;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getLeft(): number;

	getRight(): number;

	getTop(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithLeftTopRightBottom(left: number, top: number, right: number, bottom: number): this;

	swigGetRawPtr(): number;
}

declare class NTTextStyle extends NTLabelStyle {

	static alloc(): NTTextStyle; // inherited from NSObject

	static new(): NTTextStyle; // inherited from NSObject

	getBackgroundColor(): NTColor;

	getBorderColor(): NTColor;

	getBorderWidth(): number;

	getFontColor(): NTColor;

	getFontName(): string;

	getFontSize(): number;

	getStrokeColor(): NTColor;

	getStrokeWidth(): number;

	getTextField(): string;

	getTextMargins(): NTTextMargins;

	isBreakLines(): boolean;
}

declare class NTTextStyleBuilder extends NTLabelStyleBuilder {

	static alloc(): NTTextStyleBuilder; // inherited from NSObject

	static new(): NTTextStyleBuilder; // inherited from NSObject

	buildStyle(): NTTextStyle;

	getBackgroundColor(): NTColor;

	getBorderColor(): NTColor;

	getBorderWidth(): number;

	getFontName(): string;

	getFontSize(): number;

	getStrokeColor(): NTColor;

	getStrokeWidth(): number;

	getTextField(): string;

	getTextMargins(): NTTextMargins;

	isBreakLines(): boolean;

	setBackgroundColor(backgroundColor: NTColor): void;

	setBorderColor(borderColor: NTColor): void;

	setBorderWidth(borderWidth: number): void;

	setBreakLines(enable: boolean): void;

	setFontName(fontName: string): void;

	setFontSize(size: number): void;

	setStrokeColor(strokeColor: NTColor): void;

	setStrokeWidth(strokeWidth: number): void;

	setTextField(field: string): void;

	setTextMargins(textMargins: NTTextMargins): void;
}

declare class NTTileData extends NSObject {

	static alloc(): NTTileData; // inherited from NSObject

	static new(): NTTileData; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { data: NTBinaryData; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getData(): NTBinaryData;

	getMaxAge(): number;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithData(data: NTBinaryData): this;

	isReplaceWithParent(): boolean;

	setMaxAge(maxAge: number): void;

	setReplaceWithParent(flag: boolean): void;

	swigGetRawPtr(): number;
}

declare class NTTileDataSource extends NSObject {

	static alloc(): NTTileDataSource; // inherited from NSObject

	static new(): NTTileDataSource; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTTileDataSource;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { minZoom: number; maxZoom: number; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getDataExtent(): NTMapBounds;

	getDataExtentSwigExplicitNTTileDataSource(): NTMapBounds;

	getMaxZoom(): number;

	getMaxZoomSwigExplicitNTTileDataSource(): number;

	getMinZoom(): number;

	getMinZoomSwigExplicitNTTileDataSource(): number;

	getProjection(): NTProjection;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithMinZoomMaxZoom(minZoom: number, maxZoom: number): this;

	loadTile(tile: NTMapTile): NTTileData;

	notifyTilesChanged(removeTiles: boolean): void;

	notifyTilesChangedSwigExplicitNTTileDataSource(removeTiles: boolean): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTTileDownloadListener extends NSObject {

	static alloc(): NTTileDownloadListener; // inherited from NSObject

	static new(): NTTileDownloadListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTTileDownloadListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onDownloadCompleted(): void;

	onDownloadCompletedSwigExplicitNTTileDownloadListener(): void;

	onDownloadFailed(tile: NTMapTile): void;

	onDownloadFailedSwigExplicitNTTileDownloadListener(tile: NTMapTile): void;

	onDownloadProgress(progress: number): void;

	onDownloadProgressSwigExplicitNTTileDownloadListener(progress: number): void;

	onDownloadStarting(tileCount: number): void;

	onDownloadStartingSwigExplicitNTTileDownloadListener(tileCount: number): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTTileLayer extends NTLayer {

	static alloc(): NTTileLayer; // inherited from NSObject

	static new(): NTTileLayer; // inherited from NSObject

	calculateMapTileBounds(mapTile: NTMapTile): NTMapBounds;

	calculateMapTileOrigin(mapTile: NTMapTile): NTMapPos;

	calculateMapTileZoom(mapPos: NTMapPos, zoom: number): NTMapTile;

	clearTileCaches(all: boolean): void;

	getDataSource(): NTTileDataSource;

	getFrameNr(): number;

	getMaxOverzoomLevel(): number;

	getMaxUnderzoomLevel(): number;

	getTileLoadListener(): NTTileLoadListener;

	getTileSubstitutionPolicy(): NTTileSubstitutionPolicy;

	getUTFGridDataSource(): NTTileDataSource;

	getUTFGridEventListener(): NTUTFGridEventListener;

	getZoomLevelBias(): number;

	isPreloading(): boolean;

	isSynchronizedRefresh(): boolean;

	setFrameNr(frameNr: number): void;

	setMaxOverzoomLevel(overzoomLevel: number): void;

	setMaxUnderzoomLevel(underzoomLevel: number): void;

	setPreloading(preloading: boolean): void;

	setSynchronizedRefresh(synchronizedRefresh: boolean): void;

	setTileLoadListener(tileLoadListener: NTTileLoadListener): void;

	setTileSubstitutionPolicy(policy: NTTileSubstitutionPolicy): void;

	setUTFGridDataSource(dataSource: NTTileDataSource): void;

	setUTFGridEventListener(utfGridEventListener: NTUTFGridEventListener): void;

	setZoomLevelBias(bias: number): void;
}

declare class NTTileLoadListener extends NSObject {

	static alloc(): NTTileLoadListener; // inherited from NSObject

	static new(): NTTileLoadListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTTileLoadListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onPreloadingTilesLoaded(): void;

	onPreloadingTilesLoadedSwigExplicitNTTileLoadListener(): void;

	onVisibleTilesLoaded(): void;

	onVisibleTilesLoadedSwigExplicitNTTileLoadListener(): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare const enum NTTileSubstitutionPolicy {

	T_TILE_SUBSTITUTION_POLICY_ALL = 0,

	T_TILE_SUBSTITUTION_POLICY_VISIBLE = 1,

	T_TILE_SUBSTITUTION_POLICY_NONE = 2
}

declare class NTTileUtils extends NSObject {

	static alloc(): NTTileUtils; // inherited from NSObject

	static calculateMapTileBoundsProj(mapTile: NTMapTile, proj: NTProjection): NTMapBounds;

	static calculateMapTileOriginProj(mapTile: NTMapTile, proj: NTProjection): NTMapPos;

	static calculateMapTileZoomProj(mapPos: NTMapPos, zoom: number, proj: NTProjection): NTMapTile;

	static new(): NTTileUtils; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;
}

declare class NTTomTomOnlineGeocodingService extends NTGeocodingService {

	static alloc(): NTTomTomOnlineGeocodingService; // inherited from NSObject

	static new(): NTTomTomOnlineGeocodingService; // inherited from NSObject

	constructor(o: { apiKey: string; });

	calculateAddressesSwigExplicitNTTomTomOnlineGeocodingService(request: NTGeocodingRequest): NTGeocodingResultVector;

	getCustomServiceURL(): string;

	getLanguage(): string;

	initWithApiKey(apiKey: string): this;

	isAutocomplete(): boolean;

	setAutocomplete(autocomplete: boolean): void;

	setCustomServiceURL(serviceURL: string): void;

	setLanguage(lang: string): void;
}

declare class NTTomTomOnlineReverseGeocodingService extends NTReverseGeocodingService {

	static alloc(): NTTomTomOnlineReverseGeocodingService; // inherited from NSObject

	static new(): NTTomTomOnlineReverseGeocodingService; // inherited from NSObject

	constructor(o: { apiKey: string; });

	calculateAddressesSwigExplicitNTTomTomOnlineReverseGeocodingService(request: NTReverseGeocodingRequest): NTGeocodingResultVector;

	getCustomServiceURL(): string;

	getLanguage(): string;

	initWithApiKey(apiKey: string): this;

	setCustomServiceURL(serviceURL: string): void;

	setLanguage(lang: string): void;
}

declare class NTTorqueTileDecoder extends NTVectorTileDecoder {

	static alloc(): NTTorqueTileDecoder; // inherited from NSObject

	static new(): NTTorqueTileDecoder; // inherited from NSObject

	constructor(o: { styleSet: NTCartoCSSStyleSet; });

	getFrameCount(): number;

	getResolution(): number;

	getStyleSet(): NTCartoCSSStyleSet;

	initWithStyleSet(styleSet: NTCartoCSSStyleSet): this;

	setResolution(resolution: number): void;

	setStyleSet(styleSet: NTCartoCSSStyleSet): void;
}

declare class NTTorqueTileLayer extends NTVectorTileLayer {

	static alloc(): NTTorqueTileLayer; // inherited from NSObject

	static new(): NTTorqueTileLayer; // inherited from NSObject

	constructor(o: { dataSource: NTTileDataSource; decoder: NTTorqueTileDecoder; });

	countVisibleFeatures(frameNr: number): number;

	initWithDataSourceDecoder(dataSource: NTTileDataSource, decoder: NTTorqueTileDecoder): this;
}

declare class NTUTFGridClickInfo extends NSObject {

	static alloc(): NTUTFGridClickInfo; // inherited from NSObject

	static new(): NTUTFGridClickInfo; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getClickPos(): NTMapPos;

	getClickType(): NTClickType;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getElementInfo(): NTVariant;

	getLayer(): NTLayer;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare class NTUTFGridEventListener extends NSObject {

	static alloc(): NTUTFGridEventListener; // inherited from NSObject

	static new(): NTUTFGridEventListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTUTFGridEventListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onUTFGridClicked(clickInfo: NTUTFGridClickInfo): boolean;

	onUTFGridClickedSwigExplicitNTUTFGridEventListener(clickInfo: NTUTFGridClickInfo): boolean;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTVariant extends NSObject {

	static alloc(): NTVariant; // inherited from NSObject

	static fromString(str: string): NTVariant;

	static new(): NTVariant; // inherited from NSObject

	constructor(o: { array: NTVariantVector; });

	constructor(o: { boolVal: boolean; });

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { doubleVal: number; });

	constructor(o: { longVal: number; });

	constructor(o: { object: NTStringVariantMap; });

	constructor(o: { string: string; });

	containsObjectKey(key: string): boolean;

	// description(): string;

	getArrayElement(idx: number): NTVariant;

	getArraySize(): number;

	getBool(): boolean;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getDouble(): number;

	getLong(): number;

	getObjectElement(key: string): NTVariant;

	getObjectKeys(): NTStringVector;

	getString(): string;

	getType(): NTVariantType;

	// hash(): number;

	hashInternal(): number;

	initWithArray(array: NTVariantVector): this;

	initWithBoolVal(boolVal: boolean): this;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithDoubleVal(doubleVal: number): this;

	initWithLongVal(longVal: number): this;

	initWithObject(object: NTStringVariantMap): this;

	initWithString(string: string): this;

	isEqualInternal(variant: NTVariant): boolean;

	swigGetRawPtr(): number;
}

declare class NTVariantArrayBuilder extends NSObject {

	static alloc(): NTVariantArrayBuilder; // inherited from NSObject

	static new(): NTVariantArrayBuilder; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	addBool(val: boolean): void;

	addDouble(val: number): void;

	addLong(val: number): void;

	addString(str: string): void;

	addVariant(variant: NTVariant): void;

	buildVariant(): NTVariant;

	getCptr(): interop.Pointer | interop.Reference<any>;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare class NTVariantObjectBuilder extends NSObject {

	static alloc(): NTVariantObjectBuilder; // inherited from NSObject

	static new(): NTVariantObjectBuilder; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	buildVariant(): NTVariant;

	getCptr(): interop.Pointer | interop.Reference<any>;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	setBoolVal(key: string, val: boolean): void;

	setDoubleVal(key: string, val: number): void;

	setLongVal(key: string, val: number): void;

	setStringStr(key: string, str: string): void;

	setVariantVar(key: string, variant: NTVariant): void;

	swigGetRawPtr(): number;
}

declare const enum NTVariantType {

	T_VARIANT_TYPE_NULL = 0,

	T_VARIANT_TYPE_STRING = 1,

	T_VARIANT_TYPE_BOOL = 2,

	T_VARIANT_TYPE_INTEGER = 3,

	T_VARIANT_TYPE_DOUBLE = 4,

	T_VARIANT_TYPE_ARRAY = 5,

	T_VARIANT_TYPE_OBJECT = 6
}

declare class NTVariantVector extends NSObject {

	static alloc(): NTVariantVector; // inherited from NSObject

	static new(): NTVariantVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTVariant): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTVariant;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTVariant): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTVectorData extends NSObject {

	static alloc(): NTVectorData; // inherited from NSObject

	static new(): NTVectorData; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { elements: NTVectorElementVector; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getElements(): NTVectorElementVector;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithElements(elements: NTVectorElementVector): this;

	swigGetRawPtr(): number;
}

declare class NTVectorDataSource extends NSObject {

	static alloc(): NTVectorDataSource; // inherited from NSObject

	static new(): NTVectorDataSource; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTVectorDataSource;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { projection: NTProjection; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getDataExtent(): NTMapBounds;

	getDataExtentSwigExplicitNTVectorDataSource(): NTMapBounds;

	getProjection(): NTProjection;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithProjection(projection: NTProjection): this;

	loadElements(cullState: NTCullState): NTVectorData;

	notifyElementsChanged(): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTVectorEditEventListener extends NSObject {

	static alloc(): NTVectorEditEventListener; // inherited from NSObject

	static new(): NTVectorEditEventListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTVectorEditEventListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onDragEnd(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult;

	onDragEndSwigExplicitNTVectorEditEventListener(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult;

	onDragMove(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult;

	onDragMoveSwigExplicitNTVectorEditEventListener(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult;

	onDragStart(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult;

	onDragStartSwigExplicitNTVectorEditEventListener(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult;

	onElementDelete(element: NTVectorElement): void;

	onElementDeselected(element: NTVectorElement): void;

	onElementDeselectedSwigExplicitNTVectorEditEventListener(element: NTVectorElement): void;

	onElementModifyGeometry(element: NTVectorElement, geometry: NTGeometry): void;

	onElementSelect(element: NTVectorElement): boolean;

	onElementSelectSwigExplicitNTVectorEditEventListener(element: NTVectorElement): boolean;

	onSelectDragPointStyleDragPointStyle(element: NTVectorElement, dragPointStyle: NTVectorElementDragPointStyle): NTPointStyle;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTVectorElement extends NSObject {

	static alloc(): NTVectorElement; // inherited from NSObject

	static new(): NTVectorElement; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTVectorElement;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	containsMetaDataKey(key: string): boolean;

	getBounds(): NTMapBounds;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getGeometry(): NTGeometry;

	getId(): number;

	getMetaData(): NTStringVariantMap;

	getMetaDataElement(key: string): NTVariant;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isVisible(): boolean;

	notifyElementChanged(): void;

	setId(arg1: number): void;

	setMetaData(metaData: NTStringVariantMap): void;

	setMetaDataElementElement(key: string, element: NTVariant): void;

	setVisible(visible: boolean): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTVectorElementClickInfo extends NSObject {

	static alloc(): NTVectorElementClickInfo; // inherited from NSObject

	static new(): NTVectorElementClickInfo; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getClickPos(): NTMapPos;

	getClickType(): NTClickType;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getElementClickPos(): NTMapPos;

	getLayer(): NTLayer;

	getVectorElement(): NTVectorElement;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare class NTVectorElementDragInfo extends NSObject {

	static alloc(): NTVectorElementDragInfo; // inherited from NSObject

	static new(): NTVectorElementDragInfo; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getDragMode(): NTVectorElementDragMode;

	getMapPos(): NTMapPos;

	getScreenPos(): NTScreenPos;

	getVectorElement(): NTVectorElement;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare const enum NTVectorElementDragMode {

	T_VECTOR_ELEMENT_DRAG_MODE_VERTEX = 0,

	T_VECTOR_ELEMENT_DRAG_MODE_ELEMENT = 1
}

declare const enum NTVectorElementDragPointStyle {

	T_VECTOR_ELEMENT_DRAG_POINT_STYLE_NORMAL = 0,

	T_VECTOR_ELEMENT_DRAG_POINT_STYLE_VIRTUAL = 1,

	T_VECTOR_ELEMENT_DRAG_POINT_STYLE_SELECTED = 2
}

declare const enum NTVectorElementDragResult {

	T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE = 0,

	T_VECTOR_ELEMENT_DRAG_RESULT_STOP = 1,

	T_VECTOR_ELEMENT_DRAG_RESULT_MODIFY = 2,

	T_VECTOR_ELEMENT_DRAG_RESULT_DELETE = 3
}

declare class NTVectorElementEventListener extends NSObject {

	static alloc(): NTVectorElementEventListener; // inherited from NSObject

	static new(): NTVectorElementEventListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTVectorElementEventListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onVectorElementClicked(clickInfo: NTVectorElementClickInfo): boolean;

	onVectorElementClickedSwigExplicitNTVectorElementEventListener(clickInfo: NTVectorElementClickInfo): boolean;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTVectorElementSearchService extends NSObject {

	static alloc(): NTVectorElementSearchService; // inherited from NSObject

	static new(): NTVectorElementSearchService; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTVectorElementSearchService;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { dataSource: NTVectorDataSource; });

	findElements(request: NTSearchRequest): NTVectorElementVector;

	findElementsSwigExplicitNTVectorElementSearchService(request: NTSearchRequest): NTVectorElementVector;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getDataSource(): NTVectorDataSource;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithDataSource(dataSource: NTVectorDataSource): this;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTVectorElementVector extends NSObject {

	static alloc(): NTVectorElementVector; // inherited from NSObject

	static new(): NTVectorElementVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTVectorElement): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTVectorElement;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTVectorElement): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTVectorLayer extends NTLayer {

	static alloc(): NTVectorLayer; // inherited from NSObject

	static new(): NTVectorLayer; // inherited from NSObject

	constructor(o: { dataSource: NTVectorDataSource; });

	getDataSource(): NTVectorDataSource;

	getVectorElementEventListener(): NTVectorElementEventListener;

	initWithDataSource(dataSource: NTVectorDataSource): this;

	isZBuffering(): boolean;

	setVectorElementEventListener(eventListener: NTVectorElementEventListener): void;

	setZBuffering(enabled: boolean): void;
}

declare class NTVectorTileClickInfo extends NSObject {

	static alloc(): NTVectorTileClickInfo; // inherited from NSObject

	static new(): NTVectorTileClickInfo; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getClickPos(): NTMapPos;

	getClickType(): NTClickType;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getFeature(): NTVectorTileFeature;

	getFeatureClickPos(): NTMapPos;

	getFeatureId(): number;

	getFeatureLayerName(): string;

	getLayer(): NTLayer;

	getMapTile(): NTMapTile;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	swigGetRawPtr(): number;
}

declare class NTVectorTileDecoder extends NSObject {

	static alloc(): NTVectorTileDecoder; // inherited from NSObject

	static new(): NTVectorTileDecoder; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTVectorTileDecoder;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	addFallbackFont(fontData: NTBinaryData): void;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getMaxZoom(): number;

	getMinZoom(): number;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	notifyDecoderChanged(): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTVectorTileEventListener extends NSObject {

	static alloc(): NTVectorTileEventListener; // inherited from NSObject

	static new(): NTVectorTileEventListener; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTVectorTileEventListener;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	onVectorTileClicked(clickInfo: NTVectorTileClickInfo): boolean;

	onVectorTileClickedSwigExplicitNTVectorTileEventListener(clickInfo: NTVectorTileClickInfo): boolean;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTVectorTileFeature extends NTFeature {

	static alloc(): NTVectorTileFeature; // inherited from NSObject

	static new(): NTVectorTileFeature; // inherited from NSObject

	constructor(o: { arg0: number; mapTile: NTMapTile; layerName: string; geometry: NTGeometry; properties: NTVariant; });

	getId(): number;

	getLayerName(): string;

	getMapTile(): NTMapTile;

	initWithArg0MapTileLayerNameGeometryProperties(arg0: number, mapTile: NTMapTile, layerName: string, geometry: NTGeometry, properties: NTVariant): this;
}

declare class NTVectorTileFeatureCollection extends NTFeatureCollection {

	static alloc(): NTVectorTileFeatureCollection; // inherited from NSObject

	static new(): NTVectorTileFeatureCollection; // inherited from NSObject

	constructor(o: { features: NTVectorTileFeatureVector; });

	getFeature(index: number): NTVectorTileFeature;

	initWithFeatures(features: NTVectorTileFeatureVector): this;
}

declare class NTVectorTileFeatureVector extends NSObject {

	static alloc(): NTVectorTileFeatureVector; // inherited from NSObject

	static new(): NTVectorTileFeatureVector; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	add(x: NTVectorTileFeature): void;

	capacity(): number;

	clear(): void;

	get(i: number): NTVectorTileFeature;

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isEmpty(): boolean;

	reserve(n: number): void;

	setVal(i: number, val: NTVectorTileFeature): void;

	size(): number;

	swigGetRawPtr(): number;
}

declare class NTVectorTileLayer extends NTTileLayer {

	static alloc(): NTVectorTileLayer; // inherited from NSObject

	static new(): NTVectorTileLayer; // inherited from NSObject

	constructor(o: { dataSource: NTTileDataSource; decoder: NTVectorTileDecoder; });

	getBuildingRenderOrder(): NTVectorTileRenderOrder;

	getLabelRenderOrder(): NTVectorTileRenderOrder;

	getTileCacheCapacity(): number;

	getTileDecoder(): NTVectorTileDecoder;

	getVectorTileEventListener(): NTVectorTileEventListener;

	initWithDataSourceDecoder(dataSource: NTTileDataSource, decoder: NTVectorTileDecoder): this;

	setBuildingRenderOrder(renderOrder: NTVectorTileRenderOrder): void;

	setLabelRenderOrder(renderOrder: NTVectorTileRenderOrder): void;

	setTileCacheCapacity(capacityInBytes: number): void;

	setVectorTileEventListener(eventListener: NTVectorTileEventListener): void;
}

declare const enum NTVectorTileRenderOrder {

	T_VECTOR_TILE_RENDER_ORDER_HIDDEN = -1,

	T_VECTOR_TILE_RENDER_ORDER_LAYER = 0,

	T_VECTOR_TILE_RENDER_ORDER_LAST = 1
}

declare class NTVectorTileSearchService extends NSObject {

	static alloc(): NTVectorTileSearchService; // inherited from NSObject

	static new(): NTVectorTileSearchService; // inherited from NSObject

	static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): NTVectorTileSearchService;

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	constructor(o: { dataSource: NTTileDataSource; tileDecoder: NTVectorTileDecoder; });

	findFeatures(request: NTSearchRequest): NTVectorTileFeatureCollection;

	findFeaturesSwigExplicitNTVectorTileSearchService(request: NTSearchRequest): NTVectorTileFeatureCollection;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getDataSource(): NTTileDataSource;

	getMaxZoom(): number;

	getMinZoom(): number;

	getTileDecoder(): NTVectorTileDecoder;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	initWithDataSourceTileDecoder(dataSource: NTTileDataSource, tileDecoder: NTVectorTileDecoder): this;

	setMaxZoom(maxZoom: number): void;

	setMinZoom(minZoom: number): void;

	swigGetClassName(): string;

	swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

	swigGetRawPtr(): number;
}

declare class NTViewState extends NSObject {

	static alloc(): NTViewState; // inherited from NSObject

	static new(): NTViewState; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getAspectRatio(): number;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getDPI(): number;

	getDPToPX(): number;

	getFOVY(): number;

	getFar(): number;

	getHeight(): number;

	getNear(): number;

	getRotation(): number;

	getScreenHeight(): number;

	getScreenWidth(): number;

	getTilt(): number;

	getUnitToDPCoef(): number;

	getUnitToPXCoef(): number;

	getWidth(): number;

	getZoom(): number;

	getZoom0Distance(): number;

	// hash(): number;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	isCameraChanged(): boolean;

	swigGetRawPtr(): number;
}

declare class NTWKBGeometryReader extends NSObject {

	static alloc(): NTWKBGeometryReader; // inherited from NSObject

	static new(): NTWKBGeometryReader; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	readGeometry(wkbData: NTBinaryData): NTGeometry;
}

declare class NTWKBGeometryWriter extends NSObject {

	static alloc(): NTWKBGeometryWriter; // inherited from NSObject

	static new(): NTWKBGeometryWriter; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getBigEndian(): boolean;

	getCptr(): interop.Pointer | interop.Reference<any>;

	getZ(): boolean;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	setBigEndian(bigEndian: boolean): void;

	setZ(z: boolean): void;

	writeGeometry(geometry: NTGeometry): NTBinaryData;
}

declare class NTWKTGeometryReader extends NSObject {

	static alloc(): NTWKTGeometryReader; // inherited from NSObject

	static new(): NTWKTGeometryReader; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	readGeometry(wkt: string): NTGeometry;
}

declare class NTWKTGeometryWriter extends NSObject {

	static alloc(): NTWKTGeometryWriter; // inherited from NSObject

	static new(): NTWKTGeometryWriter; // inherited from NSObject

	constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

	getCptr(): interop.Pointer | interop.Reference<any>;

	getZ(): boolean;

	initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

	setZ(z: boolean): void;

	writeGeometry(geometry: NTGeometry): string;
}

declare class NTZippedAssetPackage extends NTAssetPackage {

	static alloc(): NTZippedAssetPackage; // inherited from NSObject

	static new(): NTZippedAssetPackage; // inherited from NSObject

	constructor(o: { zipData: NTBinaryData; });

	constructor(o: { zipData: NTBinaryData; baseAssetPackage: NTAssetPackage; });

	getLocalAssetNames(): NTStringVector;

	initWithZipData(zipData: NTBinaryData): this;

	initWithZipDataBaseAssetPackage(zipData: NTBinaryData, baseAssetPackage: NTAssetPackage): this;
}
