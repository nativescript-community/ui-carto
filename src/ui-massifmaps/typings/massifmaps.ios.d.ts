/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

declare class MSFAddress extends NSObject {
    static alloc(): MSFAddress; // inherited from NSObject

    static new(): MSFAddress; // inherited from NSObject

    constructor(o: {
        country: string;
        region: string;
        county: string;
        locality: string;
        neighbourhood: string;
        street: string;
        postcode: string;
        houseNumber: string;
        name: string;
        categories: MSFStringVector;
    });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    description(): string;

    getCategories(): MSFStringVector;

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

    hash(): number;

    hashInternal(): number;

    initWithCountryRegionCountyLocalityNeighbourhoodStreetPostcodeHouseNumberNameCategories(
        country: string,
        region: string,
        county: string,
        locality: string,
        neighbourhood: string,
        street: string,
        postcode: string,
        houseNumber: string,
        name: string,
        categories: MSFStringVector
    ): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEqualInternal(address: MSFAddress): boolean;

    swigGetRawPtr(): number;
}

declare class MSFAnimationStyle extends NSObject {
    static alloc(): MSFAnimationStyle; // inherited from NSObject

    static new(): MSFAnimationStyle; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFAnimationStyle;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getFadeAnimationType(): MSFAnimationType;

    getPhaseInDuration(): number;

    getPhaseOutDuration(): number;

    getRelativeSpeed(): number;

    getSizeAnimationType(): MSFAnimationType;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFAnimationStyleBuilder extends NSObject {
    static alloc(): MSFAnimationStyleBuilder; // inherited from NSObject

    static new(): MSFAnimationStyleBuilder; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFAnimationStyleBuilder;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    buildStyle(): MSFAnimationStyle;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getFadeAnimationType(): MSFAnimationType;

    getPhaseInDuration(): number;

    getPhaseOutDuration(): number;

    getRelativeSpeed(): number;

    getSizeAnimationType(): MSFAnimationType;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    setFadeAnimationType(animType: MSFAnimationType): void;

    setPhaseInDuration(duration: number): void;

    setPhaseOutDuration(duration: number): void;

    setRelativeSpeed(relativeSpeed: number): void;

    setSizeAnimationType(animType: MSFAnimationType): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare const enum MSFAnimationType {
    T_ANIMATION_TYPE_NONE = 0,

    T_ANIMATION_TYPE_STEP = 1,

    T_ANIMATION_TYPE_LINEAR = 2,

    T_ANIMATION_TYPE_SMOOTHSTEP = 3,

    T_ANIMATION_TYPE_SPRING = 4
}

declare class MSFAssetPackage extends NSObject {
    static alloc(): MSFAssetPackage; // inherited from NSObject

    static new(): MSFAssetPackage; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFAssetPackage;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getAssetNames(): MSFStringVector;

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    loadAsset(name: string): MSFBinaryData;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFAssetTileDataSource extends MSFTileDataSource {
    static alloc(): MSFAssetTileDataSource; // inherited from NSObject

    static new(): MSFAssetTileDataSource; // inherited from NSObject

    constructor(o: { minZoom: number; maxZoom: number; basePath: string });

    buildAssetPathSwigExplicitNTAssetTileDataSourceTile(basePath: string, tile: MSFMapTile): string;

    buildAssetPathTile(basePath: string, tile: MSFMapTile): string;

    initWithMinZoomMaxZoomBasePath(minZoom: number, maxZoom: number, basePath: string): this;

    loadTileSwigExplicitNTAssetTileDataSource(tile: MSFMapTile): MSFTileData;
}

declare class MSFAssetUtils extends NSObject {
    static alloc(): MSFAssetUtils; // inherited from NSObject

    static calculateResourcePath(resourceName: string): string;

    static calculateWritablePath(fileName: string): string;

    static loadAsset(path: string): MSFBinaryData;

    static new(): MSFAssetUtils; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;
}

declare class MSFBalloonPopup extends MSFPopup {
    static alloc(): MSFBalloonPopup; // inherited from NSObject

    static new(): MSFBalloonPopup; // inherited from NSObject

    constructor(o: { baseBillboard: MSFBillboard; style: MSFBalloonPopupStyle; title: string; desc: string });

    constructor(o: { geometry: MSFGeometry; style: MSFBalloonPopupStyle; title: string; desc: string });

    constructor(o: { pos: MSFMapPos; style: MSFBalloonPopupStyle; title: string; desc: string });

    addButton(button: MSFBalloonPopupButton): void;

    clearButtons(): void;

    getBalloonPopupEventListener(): MSFBalloonPopupEventListener;

    getDescription(): string;

    getStyle(): MSFBalloonPopupStyle;

    getTitle(): string;

    initWithBaseBillboardStyleTitleDesc(baseBillboard: MSFBillboard, style: MSFBalloonPopupStyle, title: string, desc: string): this;

    initWithGeometryStyleTitleDesc(geometry: MSFGeometry, style: MSFBalloonPopupStyle, title: string, desc: string): this;

    initWithPosStyleTitleDesc(pos: MSFMapPos, style: MSFBalloonPopupStyle, title: string, desc: string): this;

    removeButton(button: MSFBalloonPopupButton): void;

    replaceButtonNewButton(oldButton: MSFBalloonPopupButton, newButton: MSFBalloonPopupButton): void;

    setBalloonPopupEventListener(eventListener: MSFBalloonPopupEventListener): void;

    setDescription(desc: string): void;

    setStyle(style: MSFBalloonPopupStyle): void;

    setTitle(title: string): void;
}

declare class MSFBalloonPopupButton extends NSObject {
    static alloc(): MSFBalloonPopupButton; // inherited from NSObject

    static new(): MSFBalloonPopupButton; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFBalloonPopupButton;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { style: MSFBalloonPopupButtonStyle; text: string });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getStyle(): MSFBalloonPopupButtonStyle;

    getTag(): MSFVariant;

    getText(): string;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithStyleText(style: MSFBalloonPopupButtonStyle, text: string): this;

    setTag(tag: MSFVariant): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFBalloonPopupButtonClickInfo extends NSObject {
    static alloc(): MSFBalloonPopupButtonClickInfo; // inherited from NSObject

    static new(): MSFBalloonPopupButtonClickInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getButton(): MSFBalloonPopupButton;

    getClickInfo(): MSFClickInfo;

    getClickType(): MSFClickType;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getVectorElement(): MSFVectorElement;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFBalloonPopupButtonStyle extends MSFStyle {
    static alloc(): MSFBalloonPopupButtonStyle; // inherited from NSObject

    static new(): MSFBalloonPopupButtonStyle; // inherited from NSObject

    getBackgroundColor(): MSFColor;

    getButtonWidth(): number;

    getCornerRadius(): number;

    getStrokeColor(): MSFColor;

    getStrokeWidth(): number;

    getTextColor(): MSFColor;

    getTextFontName(): string;

    getTextFontSize(): number;

    getTextMargins(): MSFBalloonPopupMargins;
}

declare class MSFBalloonPopupButtonStyleBuilder extends MSFStyleBuilder {
    static alloc(): MSFBalloonPopupButtonStyleBuilder; // inherited from NSObject

    static new(): MSFBalloonPopupButtonStyleBuilder; // inherited from NSObject

    buildStyle(): MSFBalloonPopupButtonStyle;

    getButtonWidth(): number;

    getCornerRadius(): number;

    getStrokeColor(): MSFColor;

    getStrokeWidth(): number;

    getTextColor(): MSFColor;

    getTextFontName(): string;

    getTextFontSize(): number;

    getTextMargins(): MSFBalloonPopupMargins;

    setButtonWidth(buttonWidth: number): void;

    setCornerRadius(cornerRadius: number): void;

    setStrokeColor(strokeColor: MSFColor): void;

    setStrokeWidth(strokeWidth: number): void;

    setTextColor(textColor: MSFColor): void;

    setTextFontName(textFontName: string): void;

    setTextFontSize(textFontSize: number): void;

    setTextMargins(textMargins: MSFBalloonPopupMargins): void;
}

declare class MSFBalloonPopupEventListener extends NSObject {
    static alloc(): MSFBalloonPopupEventListener; // inherited from NSObject

    static new(): MSFBalloonPopupEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFBalloonPopupEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onButtonClicked(clickInfo: MSFBalloonPopupButtonClickInfo): boolean;

    onButtonClickedSwigExplicitNTBalloonPopupEventListener(clickInfo: MSFBalloonPopupButtonClickInfo): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFBalloonPopupMargins extends NSObject {
    static alloc(): MSFBalloonPopupMargins; // inherited from NSObject

    static new(): MSFBalloonPopupMargins; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { left: number; top: number; right: number; bottom: number });

    getBottom(): number;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getLeft(): number;

    getRight(): number;

    getTop(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithLeftTopRightBottom(left: number, top: number, right: number, bottom: number): this;

    swigGetRawPtr(): number;
}

declare class MSFBalloonPopupStyle extends MSFPopupStyle {
    static alloc(): MSFBalloonPopupStyle; // inherited from NSObject

    static new(): MSFBalloonPopupStyle; // inherited from NSObject

    getBackgroundColor(): MSFColor;

    getButtonMargins(): MSFBalloonPopupMargins;

    getCornerRadius(): number;

    getDescriptionColor(): MSFColor;

    getDescriptionField(): string;

    getDescriptionFontName(): string;

    getDescriptionFontSize(): number;

    getDescriptionMargins(): MSFBalloonPopupMargins;

    getLeftColor(): MSFColor;

    getLeftImage(): MSFBitmap;

    getLeftMargins(): MSFBalloonPopupMargins;

    getRightColor(): MSFColor;

    getRightImage(): MSFBitmap;

    getRightMargins(): MSFBalloonPopupMargins;

    getStrokeColor(): MSFColor;

    getStrokeWidth(): number;

    getTitleColor(): MSFColor;

    getTitleField(): string;

    getTitleFontName(): string;

    getTitleFontSize(): number;

    getTitleMargins(): MSFBalloonPopupMargins;

    getTriangleHeight(): number;

    getTriangleWidth(): number;

    isDescriptionWrap(): boolean;

    isTitleWrap(): boolean;
}

declare class MSFBalloonPopupStyleBuilder extends MSFPopupStyleBuilder {
    static alloc(): MSFBalloonPopupStyleBuilder; // inherited from NSObject

    static new(): MSFBalloonPopupStyleBuilder; // inherited from NSObject

    buildStyle(): MSFBalloonPopupStyle;

    getButtonMargins(): MSFBalloonPopupMargins;

    getCornerRadius(): number;

    getDescriptionColor(): MSFColor;

    getDescriptionField(): string;

    getDescriptionFontName(): string;

    getDescriptionFontSize(): number;

    getDescriptionMargins(): MSFBalloonPopupMargins;

    getLeftColor(): MSFColor;

    getLeftImage(): MSFBitmap;

    getLeftMargins(): MSFBalloonPopupMargins;

    getRightColor(): MSFColor;

    getRightImage(): MSFBitmap;

    getRightMargins(): MSFBalloonPopupMargins;

    getStrokeColor(): MSFColor;

    getStrokeWidth(): number;

    getTitleColor(): MSFColor;

    getTitleField(): string;

    getTitleFontName(): string;

    getTitleFontSize(): number;

    getTitleMargins(): MSFBalloonPopupMargins;

    getTriangleHeight(): number;

    getTriangleWidth(): number;

    isDescriptionWrap(): boolean;

    isTitleWrap(): boolean;

    setButtonMargins(buttonMargins: MSFBalloonPopupMargins): void;

    setCornerRadius(cornerRadius: number): void;

    setDescriptionColor(descColor: MSFColor): void;

    setDescriptionField(field: string): void;

    setDescriptionFontName(descFontName: string): void;

    setDescriptionFontSize(descFontSize: number): void;

    setDescriptionMargins(descMargins: MSFBalloonPopupMargins): void;

    setDescriptionWrap(descWrap: boolean): void;

    setLeftColor(leftColor: MSFColor): void;

    setLeftImage(leftImage: MSFBitmap): void;

    setLeftMargins(leftMargins: MSFBalloonPopupMargins): void;

    setRightColor(rightColor: MSFColor): void;

    setRightImage(rightImage: MSFBitmap): void;

    setRightMargins(rightMargins: MSFBalloonPopupMargins): void;

    setStrokeColor(strokeColor: MSFColor): void;

    setStrokeWidth(strokeWidth: number): void;

    setTitleColor(titleColor: MSFColor): void;

    setTitleField(field: string): void;

    setTitleFontName(titleFontName: string): void;

    setTitleFontSize(titleFontSize: number): void;

    setTitleMargins(titleMargins: MSFBalloonPopupMargins): void;

    setTitleWrap(titleWrap: boolean): void;

    setTriangleHeight(triangleHeight: number): void;

    setTriangleWidth(triangleWidth: number): void;
}

declare class MSFBillboard extends MSFVectorElement {
    static alloc(): MSFBillboard; // inherited from NSObject

    static new(): MSFBillboard; // inherited from NSObject

    getBaseBillboard(): MSFBillboard;

    getRootGeometry(): MSFGeometry;

    getRotation(): number;

    setBaseBillboard(baseBillboard: MSFBillboard): void;

    setGeometry(geometry: MSFGeometry): void;

    setPos(pos: MSFMapPos): void;

    setRotation(rotation: number): void;
}

declare const enum MSFBillboardOrientation {
    T_BILLBOARD_ORIENTATION_FACE_CAMERA = 0,

    T_BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND = 1,

    T_BILLBOARD_ORIENTATION_GROUND = 2
}

declare const enum MSFBillboardScaling {
    T_BILLBOARD_SCALING_WORLD_SIZE = 0,

    T_BILLBOARD_SCALING_SCREEN_SIZE = 1,

    T_BILLBOARD_SCALING_CONST_SCREEN_SIZE = 2
}

declare class MSFBillboardStyle extends MSFStyle {
    static alloc(): MSFBillboardStyle; // inherited from NSObject

    static new(): MSFBillboardStyle; // inherited from NSObject

    getAnimationStyle(): MSFAnimationStyle;

    getAttachAnchorPointX(): number;

    getAttachAnchorPointY(): number;

    getHorizontalOffset(): number;

    getPlacementPriority(): number;

    getVerticalOffset(): number;

    isCausesOverlap(): boolean;

    isHideIfOverlapped(): boolean;

    isScaleWithDPI(): boolean;
}

declare class MSFBillboardStyleBuilder extends MSFStyleBuilder {
    static alloc(): MSFBillboardStyleBuilder; // inherited from NSObject

    static new(): MSFBillboardStyleBuilder; // inherited from NSObject

    getAnimationStyle(): MSFAnimationStyle;

    getAttachAnchorPointX(): number;

    getAttachAnchorPointY(): number;

    getHorizontalOffset(): number;

    getPlacementPriority(): number;

    getVerticalOffset(): number;

    isCausesOverlap(): boolean;

    isHideIfOverlapped(): boolean;

    isScaleWithDPI(): boolean;

    setAnimationStyle(animStyle: MSFAnimationStyle): void;

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

declare class MSFBinaryData extends NSObject {
    static alloc(): MSFBinaryData; // inherited from NSObject

    static new(): MSFBinaryData; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { dataPtr: string | interop.Pointer | interop.Reference<any>; size: number });

    description(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getData(): string;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithDataPtrSize(dataPtr: string | interop.Pointer | interop.Reference<any>, size: number): this;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFBitmap extends NSObject {
    static alloc(): MSFBitmap; // inherited from NSObject

    static createFromCompressed(compressedData: MSFBinaryData): MSFBitmap;

    static new(): MSFBitmap; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { pixelData: MSFBinaryData; width: number; height: number; colorFormat: MSFColorFormat; bytesPerRow: number });

    compressToInternal(): MSFBinaryData;

    compressToPNG(): MSFBinaryData;

    getBytesPerPixel(): number;

    getColorFormat(): MSFColorFormat;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getHeight(): number;

    getPaddedBitmapYPadding(xPadding: number, yPadding: number): MSFBitmap;

    getPixelData(): MSFBinaryData;

    getRGBABitmap(): MSFBitmap;

    getResizedBitmapHeight(width: number, height: number): MSFBitmap;

    getSubBitmapYOffsetWidthHeight(xOffset: number, yOffset: number, width: number, height: number): MSFBitmap;

    getWidth(): number;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithPixelDataWidthHeightColorFormatBytesPerRow(pixelData: MSFBinaryData, width: number, height: number, colorFormat: MSFColorFormat, bytesPerRow: number): this;

    swigGetRawPtr(): number;
}

declare class MSFBitmapOverlayRasterTileDataSource extends MSFTileDataSource {
    static alloc(): MSFBitmapOverlayRasterTileDataSource; // inherited from NSObject

    static new(): MSFBitmapOverlayRasterTileDataSource; // inherited from NSObject

    constructor(o: { minZoom: number; maxZoom: number; bitmap: MSFBitmap; projection: MSFProjection; mapPoses: MSFMapPosVector; bitmapPoses: MSFScreenPosVector });

    getDataExtentSwigExplicitNTBitmapOverlayRasterTileDataSource(): MSFMapBounds;

    initWithMinZoomMaxZoomBitmapProjectionMapPosesBitmapPoses(
        minZoom: number,
        maxZoom: number,
        bitmap: MSFBitmap,
        projection: MSFProjection,
        mapPoses: MSFMapPosVector,
        bitmapPoses: MSFScreenPosVector
    ): this;

    loadTileSwigExplicitNTBitmapOverlayRasterTileDataSource(mapTile: MSFMapTile): MSFTileData;
}

declare class MSFBitmapUtils extends NSObject {
    static alloc(): MSFBitmapUtils; // inherited from NSObject

    static createBitmapFromUIImage(image: UIImage): MSFBitmap;

    static createUIImageFromBitmap(bitmap: MSFBitmap): UIImage;

    static loadBitmapFromAssets(assetPath: string): MSFBitmap;

    static loadBitmapFromFile(filePath: string): MSFBitmap;

    static new(): MSFBitmapUtils; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;
}

declare class MSFCacheTileDataSource extends MSFTileDataSource {
    static alloc(): MSFCacheTileDataSource; // inherited from NSObject

    static new(): MSFCacheTileDataSource; // inherited from NSObject

    constructor(o: { dataSource: MSFTileDataSource });

    clear(): void;

    getCapacity(): number;

    getDataExtentSwigExplicitNTCacheTileDataSource(): MSFMapBounds;

    getDataSource(): MSFTileDataSource;

    getMaxZoomSwigExplicitNTCacheTileDataSource(): number;

    getMinZoomSwigExplicitNTCacheTileDataSource(): number;

    initWithDataSource(dataSource: MSFTileDataSource): this;

    notifyTilesChangedSwigExplicitNTCacheTileDataSource(removeTiles: boolean): void;

    setCapacity(capacityInBytes: number): void;
}

declare class MSFCartoCSSStyleSet extends NSObject {
    static alloc(): MSFCartoCSSStyleSet; // inherited from NSObject

    static new(): MSFCartoCSSStyleSet; // inherited from NSObject

    constructor(o: { cartoCSS: string });

    constructor(o: { cartoCSS: string; assetPackage: MSFAssetPackage });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getAssetPackage(): MSFAssetPackage;

    getCartoCSS(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithCartoCSS(cartoCSS: string): this;

    initWithCartoCSSAssetPackage(cartoCSS: string, assetPackage: MSFAssetPackage): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFClickInfo extends NSObject {
    static alloc(): MSFClickInfo; // inherited from NSObject

    static new(): MSFClickInfo; // inherited from NSObject

    constructor(o: { clickType: MSFClickType; duration: number });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    description(): string;

    getClickType(): MSFClickType;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getDuration(): number;

    hash(): number;

    hashInternal(): number;

    initWithClickTypeDuration(clickType: MSFClickType, duration: number): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEqualInternal(clickInfo: MSFClickInfo): boolean;

    swigGetRawPtr(): number;
}

declare const enum MSFClickType {
    T_CLICK_TYPE_SINGLE = 0,

    T_CLICK_TYPE_LONG = 1,

    T_CLICK_TYPE_DOUBLE = 2,

    T_CLICK_TYPE_DUAL = 3
}

declare const enum MSFClusterBuilderMode {
    T_CLUSTER_BUILDER_MODE_ELEMENTS = 0,

    T_CLUSTER_BUILDER_MODE_ELEMENT_COUNT = 1
}

declare class MSFClusterElementBuilder extends NSObject {
    static alloc(): MSFClusterElementBuilder; // inherited from NSObject

    static new(): MSFClusterElementBuilder; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFClusterElementBuilder;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    buildClusterElementElementCount(mapPos: MSFMapPos, elementCount: number): MSFVectorElement;

    buildClusterElementElements(mapPos: MSFMapPos, elements: MSFVectorElementVector): MSFVectorElement;

    buildClusterElementSwigExplicitNTClusterElementBuilderElementCount(mapPos: MSFMapPos, elementCount: number): MSFVectorElement;

    buildClusterElementSwigExplicitNTClusterElementBuilderElements(mapPos: MSFMapPos, elements: MSFVectorElementVector): MSFVectorElement;

    getBuilderMode(): MSFClusterBuilderMode;

    getBuilderModeSwigExplicitNTClusterElementBuilder(): MSFClusterBuilderMode;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFClusteredVectorLayer extends MSFVectorLayer {
    static alloc(): MSFClusteredVectorLayer; // inherited from NSObject

    static new(): MSFClusteredVectorLayer; // inherited from NSObject

    constructor(o: { dataSource: MSFLocalVectorDataSource; clusterElementBuilder: MSFClusterElementBuilder });

    expandClusterPx(clusterElement: MSFVectorElement, px: number): boolean;

    getClusterElementBuilder(): MSFClusterElementBuilder;

    getMaximumClusterZoom(): number;

    getMinimumClusterDistance(): number;

    initWithDataSourceClusterElementBuilder(dataSource: MSFLocalVectorDataSource, clusterElementBuilder: MSFClusterElementBuilder): this;

    isAnimatedClusters(): boolean;

    setAnimatedClusters(animated: boolean): void;

    setMaximumClusterZoom(maxZoom: number): void;

    setMinimumClusterDistance(px: number): void;
}

declare class MSFColor extends NSObject {
    static alloc(): MSFColor; // inherited from NSObject

    static new(): MSFColor; // inherited from NSObject

    constructor(o: { color: number });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { r: number; g: number; b: number; a: number });

    description(): string;

    getA(): number;

    getARGB(): number;

    getB(): number;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getG(): number;

    getR(): number;

    hash(): number;

    hashInternal(): number;

    initWithColor(color: number): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithRGBA(r: number, g: number, b: number, a: number): this;

    isEqualInternal(color: MSFColor): boolean;

    swigGetRawPtr(): number;
}

declare const enum MSFColorFormat {
    T_COLOR_FORMAT_UNSUPPORTED = 0,

    T_COLOR_FORMAT_GRAYSCALE = 6409,

    T_COLOR_FORMAT_GRAYSCALE_ALPHA = 6410,

    T_COLOR_FORMAT_RGB = 6407,

    T_COLOR_FORMAT_RGBA = 6408,

    T_COLOR_FORMAT_BGRA = 1,

    T_COLOR_FORMAT_RGBA_4444 = 2,

    T_COLOR_FORMAT_RGB_565 = 3
}

declare class MSFCombinedTileDataSource extends MSFTileDataSource {
    static alloc(): MSFCombinedTileDataSource; // inherited from NSObject

    static new(): MSFCombinedTileDataSource; // inherited from NSObject

    constructor(o: { dataSource1: MSFTileDataSource; dataSource2: MSFTileDataSource; zoomLevel: number });

    getDataExtentSwigExplicitNTCombinedTileDataSource(): MSFMapBounds;

    getMaxZoomSwigExplicitNTCombinedTileDataSource(): number;

    getMinZoomSwigExplicitNTCombinedTileDataSource(): number;

    initWithDataSource1DataSource2ZoomLevel(dataSource1: MSFTileDataSource, dataSource2: MSFTileDataSource, zoomLevel: number): this;

    loadTileSwigExplicitNTCombinedTileDataSource(tile: MSFMapTile): MSFTileData;
}

declare class MSFCompiledStyleSet extends NSObject {
    static alloc(): MSFCompiledStyleSet; // inherited from NSObject

    static new(): MSFCompiledStyleSet; // inherited from NSObject

    constructor(o: { assetPackage: MSFAssetPackage });

    constructor(o: { assetPackage: MSFAssetPackage; styleName: string });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getAssetPackage(): MSFAssetPackage;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getStyleAssetName(): string;

    getStyleName(): string;

    hash(): number;

    initWithAssetPackage(assetPackage: MSFAssetPackage): this;

    initWithAssetPackageStyleName(assetPackage: MSFAssetPackage, styleName: string): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFCullState extends NSObject {
    static alloc(): MSFCullState; // inherited from NSObject

    static new(): MSFCullState; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { envelope: MSFMapEnvelope; viewState: MSFViewState });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getProjectionEnvelope(projection: MSFProjection): MSFMapEnvelope;

    getViewState(): MSFViewState;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithEnvelopeViewState(envelope: MSFMapEnvelope, viewState: MSFViewState): this;

    swigGetRawPtr(): number;
}

declare class MSFCustomPopup extends MSFPopup {
    static alloc(): MSFCustomPopup; // inherited from NSObject

    static new(): MSFCustomPopup; // inherited from NSObject

    constructor(o: { baseBillboard: MSFBillboard; style: MSFPopupStyle; popupHandler: MSFCustomPopupHandler });

    constructor(o: { geometry: MSFGeometry; style: MSFPopupStyle; popupHandler: MSFCustomPopupHandler });

    constructor(o: { pos: MSFMapPos; style: MSFPopupStyle; popupHandler: MSFCustomPopupHandler });

    getPopupHandler(): MSFCustomPopupHandler;

    initWithBaseBillboardStylePopupHandler(baseBillboard: MSFBillboard, style: MSFPopupStyle, popupHandler: MSFCustomPopupHandler): this;

    initWithGeometryStylePopupHandler(geometry: MSFGeometry, style: MSFPopupStyle, popupHandler: MSFCustomPopupHandler): this;

    initWithPosStylePopupHandler(pos: MSFMapPos, style: MSFPopupStyle, popupHandler: MSFCustomPopupHandler): this;
}

declare class MSFCustomPopupHandler extends NSObject {
    static alloc(): MSFCustomPopupHandler; // inherited from NSObject

    static new(): MSFCustomPopupHandler; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFCustomPopupHandler;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onDrawPopup(popupDrawInfo: MSFPopupDrawInfo): MSFBitmap;

    onDrawPopupSwigExplicitNTCustomPopupHandler(popupDrawInfo: MSFPopupDrawInfo): MSFBitmap;

    onPopupClicked(popupClickInfo: MSFPopupClickInfo): boolean;

    onPopupClickedSwigExplicitNTCustomPopupHandler(popupClickInfo: MSFPopupClickInfo): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFDoubleVector extends NSObject {
    static alloc(): MSFDoubleVector; // inherited from NSObject

    static new(): MSFDoubleVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

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

declare class MSFDouglasPeuckerGeometrySimplifier extends MSFGeometrySimplifier {
    static alloc(): MSFDouglasPeuckerGeometrySimplifier; // inherited from NSObject

    static new(): MSFDouglasPeuckerGeometrySimplifier; // inherited from NSObject

    constructor(o: { tolerance: number });

    initWithTolerance(tolerance: number): this;
}

declare class MSFEPSG3857 extends MSFProjection {
    static alloc(): MSFEPSG3857; // inherited from NSObject

    static new(): MSFEPSG3857; // inherited from NSObject
}

declare class MSFEPSG4326 extends MSFProjection {
    static alloc(): MSFEPSG4326; // inherited from NSObject

    static new(): MSFEPSG4326; // inherited from NSObject
}

declare class MSFEditableVectorLayer extends MSFVectorLayer {
    static alloc(): MSFEditableVectorLayer; // inherited from NSObject

    static new(): MSFEditableVectorLayer; // inherited from NSObject

    getSelectedVectorElement(): MSFVectorElement;

    getVectorEditEventListener(): MSFVectorEditEventListener;

    setSelectedVectorElement(element: MSFVectorElement): void;

    setVectorEditEventListener(listener: MSFVectorEditEventListener): void;
}

declare class MSFElevationDecoder extends NSObject {
    static alloc(): MSFElevationDecoder; // inherited from NSObject

    static new(): MSFElevationDecoder; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFElevationDecoder;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFExceptionWrapper extends NSObject {
    static alloc(): MSFExceptionWrapper; // inherited from NSObject

    static catchExceptionError(tryBlock: () => void): boolean;

    static new(): MSFExceptionWrapper; // inherited from NSObject
}

declare class MSFFeature extends NSObject {
    static alloc(): MSFFeature; // inherited from NSObject

    static new(): MSFFeature; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFFeature;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { geometry: MSFGeometry; properties: MSFVariant });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getGeometry(): MSFGeometry;

    getProperties(): MSFVariant;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithGeometryProperties(geometry: MSFGeometry, properties: MSFVariant): this;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFFeatureCollection extends NSObject {
    static alloc(): MSFFeatureCollection; // inherited from NSObject

    static new(): MSFFeatureCollection; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFFeatureCollection;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { features: MSFFeatureVector });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getFeature(index: number): MSFFeature;

    getFeatureCount(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithFeatures(features: MSFFeatureVector): this;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFFeatureCollectionSearchService extends NSObject {
    static alloc(): MSFFeatureCollectionSearchService; // inherited from NSObject

    static new(): MSFFeatureCollectionSearchService; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFFeatureCollectionSearchService;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { projection: MSFProjection; featureCollection: MSFFeatureCollection });

    findFeatures(request: MSFSearchRequest): MSFFeatureCollection;

    findFeaturesSwigExplicitNTFeatureCollectionSearchService(request: MSFSearchRequest): MSFFeatureCollection;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getFeatureCollection(): MSFFeatureCollection;

    getMaxResults(): number;

    getProjection(): MSFProjection;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithProjectionFeatureCollection(projection: MSFProjection, featureCollection: MSFFeatureCollection): this;

    setMaxResults(maxResults: number): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFFeatureVector extends NSObject {
    static alloc(): MSFFeatureVector; // inherited from NSObject

    static new(): MSFFeatureVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFFeature): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFFeature;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFFeature): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFGeoJSONGeometryReader extends NSObject {
    static alloc(): MSFGeoJSONGeometryReader; // inherited from NSObject

    static new(): MSFGeoJSONGeometryReader; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getTargetProjection(): MSFProjection;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    readFeature(geoJSON: string): MSFFeature;

    readFeatureCollection(geoJSON: string): MSFFeatureCollection;

    readGeometry(geoJSON: string): MSFGeometry;

    setTargetProjection(proj: MSFProjection): void;
}

declare class MSFGeoJSONGeometryWriter extends NSObject {
    static alloc(): MSFGeoJSONGeometryWriter; // inherited from NSObject

    static new(): MSFGeoJSONGeometryWriter; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getSourceProjection(): MSFProjection;

    getZ(): boolean;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    setSourceProjection(proj: MSFProjection): void;

    setZ(z: boolean): void;

    writeFeature(feature: MSFFeature): string;

    writeFeatureCollection(featureCollection: MSFFeatureCollection): string;

    writeGeometry(geometry: MSFGeometry): string;
}

declare class MSFGeoJSONVectorTileDataSource extends MSFTileDataSource {
    static alloc(): MSFGeoJSONVectorTileDataSource; // inherited from NSObject

    static new(): MSFGeoJSONVectorTileDataSource; // inherited from NSObject

    addGeoJSONFeatureGeoJSON(layerIndex: number, geoJSON: MSFVariant): void;

    addGeoJSONStringFeatureGeoJSON(layerIndex: number, geoJSON: string): void;

    createLayer(name: string): number;

    deleteLayer(layerIndex: number): void;

    getDataExtentSwigExplicitNTGeoJSONVectorTileDataSource(): MSFMapBounds;

    getDefaultLayerBuffer(): number;

    getSimplifyTolerance(): number;

    loadTileSwigExplicitNTGeoJSONVectorTileDataSource(mapTile: MSFMapTile): MSFTileData;

    removeGeoJSONFeatureArg2(layerIndex: number, arg2: MSFVariant): void;

    setDefaultLayerBuffer(tolerance: number): void;

    setLayerFeatureCollectionProjectionFeatureCollection(layerIndex: number, projection: MSFProjection, featureCollection: MSFFeatureCollection): void;

    setLayerGeoJSONGeoJSON(layerIndex: number, geoJSON: MSFVariant): void;

    setLayerGeoJSONStringGeoJSON(layerIndex: number, geoJSON: string): void;

    setSimplifyTolerance(tolerance: number): void;

    updateGeoJSONFeatureGeoJSON(layerIndex: number, geoJSON: MSFVariant): void;

    updateGeoJSONStringFeatureGeoJSON(layerIndex: number, geoJSON: string): void;
}

declare class MSFGeocodingAddress extends MSFAddress {
    static alloc(): MSFGeocodingAddress; // inherited from NSObject

    static new(): MSFGeocodingAddress; // inherited from NSObject
}

declare class MSFGeocodingRequest extends NSObject {
    static alloc(): MSFGeocodingRequest; // inherited from NSObject

    static new(): MSFGeocodingRequest; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { projection: MSFProjection; query: string });

    description(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getCustomParameter(param: string): MSFVariant;

    getLocation(): MSFMapPos;

    getLocationRadius(): number;

    getProjection(): MSFProjection;

    getQuery(): string;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithProjectionQuery(projection: MSFProjection, query: string): this;

    setCustomParameterValue(param: string, value: MSFVariant): void;

    setLocation(pos: MSFMapPos): void;

    setLocationRadius(radius: number): void;

    swigGetRawPtr(): number;
}

declare class MSFGeocodingResult extends NSObject {
    static alloc(): MSFGeocodingResult; // inherited from NSObject

    static new(): MSFGeocodingResult; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { projection: MSFProjection; address: MSFGeocodingAddress; rank: number; featureCollection: MSFFeatureCollection });

    description(): string;

    getAddress(): MSFGeocodingAddress;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getFeatureCollection(): MSFFeatureCollection;

    getProjection(): MSFProjection;

    getRank(): number;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithProjectionAddressRankFeatureCollection(projection: MSFProjection, address: MSFGeocodingAddress, rank: number, featureCollection: MSFFeatureCollection): this;

    swigGetRawPtr(): number;
}

declare class MSFGeocodingResultVector extends NSObject {
    static alloc(): MSFGeocodingResultVector; // inherited from NSObject

    static new(): MSFGeocodingResultVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFGeocodingResult): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFGeocodingResult;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFGeocodingResult): void;

    size(): number;
}

declare class MSFGeocodingService extends NSObject {
    static alloc(): MSFGeocodingService; // inherited from NSObject

    static new(): MSFGeocodingService; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFGeocodingService;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    calculateAddresses(request: MSFGeocodingRequest): MSFGeocodingResultVector;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getLanguage(): string;

    getMaxResults(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isAutocomplete(): boolean;

    setAutocomplete(autocomplete: boolean): void;

    setLanguage(lang: string): void;

    setMaxResults(maxResults: number): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFGeometry extends NSObject {
    static alloc(): MSFGeometry; // inherited from NSObject

    static new(): MSFGeometry; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFGeometry;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getBounds(): MSFMapBounds;

    getCenterPos(): MSFMapPos;

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFGeometryCollection extends MSFVectorElement {
    static alloc(): MSFGeometryCollection; // inherited from NSObject

    static new(): MSFGeometryCollection; // inherited from NSObject

    constructor(o: { geometry: MSFMultiGeometry; style: MSFGeometryCollectionStyle });

    getGeometry(): MSFMultiGeometry;

    getStyle(): MSFGeometryCollectionStyle;

    initWithGeometryStyle(geometry: MSFMultiGeometry, style: MSFGeometryCollectionStyle): this;

    setGeometry(geometry: MSFMultiGeometry): void;

    setStyle(style: MSFGeometryCollectionStyle): void;
}

declare class MSFGeometryCollectionStyle extends MSFStyle {
    static alloc(): MSFGeometryCollectionStyle; // inherited from NSObject

    static new(): MSFGeometryCollectionStyle; // inherited from NSObject

    getLineStyle(): MSFLineStyle;

    getPointStyle(): MSFPointStyle;

    getPolygonStyle(): MSFPolygonStyle;
}

declare class MSFGeometryCollectionStyleBuilder extends MSFStyleBuilder {
    static alloc(): MSFGeometryCollectionStyleBuilder; // inherited from NSObject

    static new(): MSFGeometryCollectionStyleBuilder; // inherited from NSObject

    buildStyle(): MSFGeometryCollectionStyle;

    getLineStyle(): MSFLineStyle;

    getPointStyle(): MSFPointStyle;

    getPolygonStyle(): MSFPolygonStyle;

    setLineStyle(lineStyle: MSFLineStyle): void;

    setPointStyle(pointStyle: MSFPointStyle): void;

    setPolygonStyle(polygonStyle: MSFPolygonStyle): void;
}

declare class MSFGeometrySimplifier extends NSObject {
    static alloc(): MSFGeometrySimplifier; // inherited from NSObject

    static new(): MSFGeometrySimplifier; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFGeometrySimplifier;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFGeometryVector extends NSObject {
    static alloc(): MSFGeometryVector; // inherited from NSObject

    static new(): MSFGeometryVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFGeometry): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFGeometry;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFGeometry): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFHTTPTileDataSource extends MSFTileDataSource {
    static alloc(): MSFHTTPTileDataSource; // inherited from NSObject

    static new(): MSFHTTPTileDataSource; // inherited from NSObject

    constructor(o: { minZoom: number; maxZoom: number; baseURL: string });

    buildTileURLSwigExplicitNTHTTPTileDataSourceTile(baseURL: string, tile: MSFMapTile): string;

    buildTileURLTile(baseURL: string, tile: MSFMapTile): string;

    getBaseURL(): string;

    getHTTPHeaders(): MSFStringMap;

    getSubdomains(): MSFStringVector;

    getTimeout(): number;

    initWithMinZoomMaxZoomBaseURL(minZoom: number, maxZoom: number, baseURL: string): this;

    isMaxAgeHeaderCheck(): boolean;

    isTMSScheme(): boolean;

    loadTileSwigExplicitNTHTTPTileDataSource(mapTile: MSFMapTile): MSFTileData;

    setBaseURL(baseURL: string): void;

    setHTTPHeaders(headers: MSFStringMap): void;

    setMaxAgeHeaderCheck(maxAgeCheck: boolean): void;

    setSubdomains(subdomains: MSFStringVector): void;

    setTMSScheme(tmsScheme: boolean): void;

    setTimeout(timeout: number): void;
}

declare class MSFHillshadeRasterTileLayer extends MSFRasterTileLayer {
    static alloc(): MSFHillshadeRasterTileLayer; // inherited from NSObject

    static new(): MSFHillshadeRasterTileLayer; // inherited from NSObject

    constructor(o: { dataSource: MSFTileDataSource; elevationDecoder: MSFElevationDecoder });

    getAccentColor(): MSFColor;

    getContrast(): number;

    getElevation(pos: MSFMapPos): number;

    getElevations(poses: MSFMapPosVector): MSFDoubleVector;

    getExagerateHeightScaleEnabled(): boolean;

    getHeightScale(): number;

    getHighlightColor(): MSFColor;

    getIlluminationDirection(): MSFMapVec;

    getIlluminationMapRotationEnabled(): boolean;

    getNormalMapLightingShader(): string;

    getShadowColor(): MSFColor;

    initWithDataSourceElevationDecoder(dataSource: MSFTileDataSource, elevationDecoder: MSFElevationDecoder): this;

    setAccentColor(color: MSFColor): void;

    setContrast(contrast: number): void;

    setExagerateHeightScaleEnabled(enabled: boolean): void;

    setHeightScale(heightScale: number): void;

    setHighlightColor(color: MSFColor): void;

    setIlluminationDirection(direction: MSFMapVec): void;

    setIlluminationMapRotationEnabled(enabled: boolean): void;

    setNormalMapLightingShader(shader: string): void;

    setShadowColor(color: MSFColor): void;
}

declare class MSFLabel extends MSFBillboard {
    static alloc(): MSFLabel; // inherited from NSObject

    static new(): MSFLabel; // inherited from NSObject

    drawBitmap(dpToPX: number): MSFBitmap;

    getStyle(): MSFLabelStyle;

    setStyle(style: MSFLabelStyle): void;
}

declare class MSFLabelStyle extends MSFBillboardStyle {
    static alloc(): MSFLabelStyle; // inherited from NSObject

    static new(): MSFLabelStyle; // inherited from NSObject

    getAnchorPointX(): number;

    getAnchorPointY(): number;

    getOrientationMode(): MSFBillboardOrientation;

    getRenderScale(): number;

    getScalingMode(): MSFBillboardScaling;

    isFlippable(): boolean;
}

declare class MSFLabelStyleBuilder extends MSFBillboardStyleBuilder {
    static alloc(): MSFLabelStyleBuilder; // inherited from NSObject

    static new(): MSFLabelStyleBuilder; // inherited from NSObject

    buildStyle(): MSFLabelStyle;

    getAnchorPointX(): number;

    getAnchorPointY(): number;

    getOrientationMode(): MSFBillboardOrientation;

    getRenderScale(): number;

    getScalingMode(): MSFBillboardScaling;

    isFlippable(): boolean;

    setAnchorPointX(anchorPointX: number): void;

    setAnchorPointXAnchorPointY(anchorPointX: number, anchorPointY: number): void;

    setAnchorPointY(anchorPointY: number): void;

    setFlippable(flippable: boolean): void;

    setOrientationMode(orientationMode: MSFBillboardOrientation): void;

    setRenderScale(renderScale: number): void;

    setScalingMode(scalingMode: MSFBillboardScaling): void;
}

declare class MSFLayer extends NSObject {
    static alloc(): MSFLayer; // inherited from NSObject

    static new(): MSFLayer; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFLayer;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    containsMetaDataKey(key: string): boolean;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getMetaData(): MSFStringVariantMap;

    getMetaDataElement(key: string): MSFVariant;

    getOpacity(): number;

    getUpdatePriority(): number;

    getVisibleZoomRange(): MSFMapRange;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isUpdateInProgress(): boolean;

    isVisible(): boolean;

    refresh(): void;

    setCullDelay(delay: number): void;

    setMetaData(metaData: MSFStringVariantMap): void;

    setMetaDataElementElement(key: string, element: MSFVariant): void;

    setOpacity(opacity: number): void;

    setUpdatePriority(priority: number): void;

    setVisible(visible: boolean): void;

    setVisibleZoomRange(range: MSFMapRange): void;

    simulateClickScreenPosViewState(clickType: MSFClickType, screenPos: MSFScreenPos, viewState: MSFViewState): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;

    update(cullState: MSFCullState): void;
}

declare class MSFLayerVector extends NSObject {
    static alloc(): MSFLayerVector; // inherited from NSObject

    static new(): MSFLayerVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFLayer): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFLayer;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFLayer): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFLayers extends NSObject {
    static alloc(): MSFLayers; // inherited from NSObject

    static new(): MSFLayers; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(layer: MSFLayer): void;

    addAll(layers: MSFLayerVector): void;

    clear(): void;

    count(): number;

    get(index: number): MSFLayer;

    getAll(): MSFLayerVector;

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    insertLayer(index: number, layer: MSFLayer): void;

    remove(layer: MSFLayer): boolean;

    removeAll(layers: MSFLayerVector): boolean;

    setAll(layers: MSFLayerVector): void;

    setLayer(index: number, layer: MSFLayer): void;

    swigGetRawPtr(): number;
}

declare class MSFLine extends MSFVectorElement {
    static alloc(): MSFLine; // inherited from NSObject

    static new(): MSFLine; // inherited from NSObject

    constructor(o: { geometry: MSFLineGeometry; style: MSFLineStyle });

    constructor(o: { poses: MSFMapPosVector; style: MSFLineStyle });

    getGeometry(): MSFLineGeometry;

    getPoses(): MSFMapPosVector;

    getStyle(): MSFLineStyle;

    initWithGeometryStyle(geometry: MSFLineGeometry, style: MSFLineStyle): this;

    initWithPosesStyle(poses: MSFMapPosVector, style: MSFLineStyle): this;

    setGeometry(geometry: MSFLineGeometry): void;

    setPoses(poses: MSFMapPosVector): void;

    setStyle(style: MSFLineStyle): void;
}

declare const enum MSFLineEndType {
    T_LINE_END_TYPE_NONE = 0,

    T_LINE_END_TYPE_SQUARE = 1,

    T_LINE_END_TYPE_ROUND = 2
}

declare class MSFLineGeometry extends MSFGeometry {
    static alloc(): MSFLineGeometry; // inherited from NSObject

    static new(): MSFLineGeometry; // inherited from NSObject

    constructor(o: { poses: MSFMapPosVector });

    getPoses(): MSFMapPosVector;

    initWithPoses(poses: MSFMapPosVector): this;
}

declare class MSFLineGeometryVector extends NSObject {
    static alloc(): MSFLineGeometryVector; // inherited from NSObject

    static new(): MSFLineGeometryVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFLineGeometry): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFLineGeometry;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFLineGeometry): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare const enum MSFLineJoinType {
    T_LINE_JOIN_TYPE_NONE = 0,

    T_LINE_JOIN_TYPE_MITER = 1,

    T_LINE_JOIN_TYPE_BEVEL = 2,

    T_LINE_JOIN_TYPE_ROUND = 3
}

declare class MSFLineStyle extends MSFStyle {
    static alloc(): MSFLineStyle; // inherited from NSObject

    static new(): MSFLineStyle; // inherited from NSObject

    getBitmap(): MSFBitmap;

    getClickWidth(): number;

    getLineEndType(): MSFLineEndType;

    getLineJoinType(): MSFLineJoinType;

    getStretchFactor(): number;

    getWidth(): number;
}

declare class MSFLineStyleBuilder extends MSFStyleBuilder {
    static alloc(): MSFLineStyleBuilder; // inherited from NSObject

    static new(): MSFLineStyleBuilder; // inherited from NSObject

    buildStyle(): MSFLineStyle;

    getBitmap(): MSFBitmap;

    getClickWidth(): number;

    getLineEndType(): MSFLineEndType;

    getLineJoinType(): MSFLineJoinType;

    getStretchFactor(): number;

    getWidth(): number;

    setBitmap(bitmap: MSFBitmap): void;

    setClickWidth(clickWidth: number): void;

    setLineEndType(lineEndType: MSFLineEndType): void;

    setLineJoinType(lineJoinType: MSFLineJoinType): void;

    setStretchFactor(stretchFactor: number): void;

    setWidth(width: number): void;
}

declare const enum MSFLocalSpatialIndexType {
    T_LOCAL_SPATIAL_INDEX_TYPE_NULL = 0,

    T_LOCAL_SPATIAL_INDEX_TYPE_KDTREE = 1
}

declare class MSFLocalVectorDataSource extends MSFVectorDataSource {
    static alloc(): MSFLocalVectorDataSource; // inherited from NSObject

    static new(): MSFLocalVectorDataSource; // inherited from NSObject

    constructor(o: { projection: MSFProjection; spatialIndexType: MSFLocalSpatialIndexType });

    add(element: MSFVectorElement): void;

    addAll(elements: MSFVectorElementVector): void;

    addFeatureCollectionStyle(featureCollection: MSFFeatureCollection, style: MSFStyle): void;

    clear(): void;

    getAll(): MSFVectorElementVector;

    getDataExtentSwigExplicitNTLocalVectorDataSource(): MSFMapBounds;

    getFeatureCollection(): MSFFeatureCollection;

    getGeometrySimplifier(): MSFGeometrySimplifier;

    initWithProjectionSpatialIndexType(projection: MSFProjection, spatialIndexType: MSFLocalSpatialIndexType): this;

    loadElementsSwigExplicitNTLocalVectorDataSource(cullState: MSFCullState): MSFVectorData;

    remove(element: MSFVectorElement): boolean;

    removeAll(elements: MSFVectorElementVector): boolean;

    setAll(elements: MSFVectorElementVector): void;

    setGeometrySimplifier(simplifier: MSFGeometrySimplifier): void;
}

declare class MSFLog extends NSObject {
    static alloc(): MSFLog; // inherited from NSObject

    static debug(message: string): void;

    static error(message: string): void;

    static fatal(message: string): void;

    static getLogEventListener(): MSFLogEventListener;

    static getTag(): string;

    static info(message: string): void;

    static isShowDebug(): boolean;

    static isShowError(): boolean;

    static isShowInfo(): boolean;

    static isShowWarn(): boolean;

    static new(): MSFLog; // inherited from NSObject

    static setLogEventListener(listener: MSFLogEventListener): void;

    static setShowDebug(showDebug: boolean): void;

    static setShowError(showError: boolean): void;

    static setShowInfo(showInfo: boolean): void;

    static setShowWarn(showWarn: boolean): void;

    static setTag(tag: string): void;

    static warn(message: string): void;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;
}

declare class MSFLogEventListener extends NSObject {
    static alloc(): MSFLogEventListener; // inherited from NSObject

    static new(): MSFLogEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFLogEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

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

declare const enum MSFMBTilesScheme {
    T_MBTILES_SCHEME_TMS = 0,

    T_MBTILES_SCHEME_XYZ = 1
}

declare class MSFMBTilesTileDataSource extends MSFTileDataSource {
    static alloc(): MSFMBTilesTileDataSource; // inherited from NSObject

    static new(): MSFMBTilesTileDataSource; // inherited from NSObject

    constructor(o: { minZoom: number; maxZoom: number; path: string });

    constructor(o: { minZoom: number; maxZoom: number; path: string; scheme: MSFMBTilesScheme });

    constructor(o: { path: string });

    getDataExtentSwigExplicitNTMBTilesTileDataSource(): MSFMapBounds;

    getMaxZoomSwigExplicitNTMBTilesTileDataSource(): number;

    getMetaData(): MSFStringMap;

    getMinZoomSwigExplicitNTMBTilesTileDataSource(): number;

    getTileMask(): string;

    getTileMaskSwigExplicitNTMBTilesTileDataSource(): string;

    initWithMinZoomMaxZoomPath(minZoom: number, maxZoom: number, path: string): this;

    initWithMinZoomMaxZoomPathScheme(minZoom: number, maxZoom: number, path: string, scheme: MSFMBTilesScheme): this;

    initWithPath(path: string): this;

    loadTileSwigExplicitNTMBTilesTileDataSource(mapTile: MSFMapTile): MSFTileData;
}


declare class MSFPMTilesTileDataSource extends MSFTileDataSource {
    static alloc(): MSFPMTilesTileDataSource; // inherited from NSObject

    static new(): MSFPMTilesTileDataSource; // inherited from NSObject

    constructor(o: { minZoom: number; maxZoom: number; path: string });

    constructor(o: { minZoom: number; maxZoom: number; path: string; scheme: MSFMBTilesScheme });

    constructor(o: { path: string });


    getMetaData(): MSFStringMap;

    initWithMinZoomMaxZoomPath(minZoom: number, maxZoom: number, path: string): this;

    initWithPath(path: string): this;
}

declare class MSFMBVectorTileDecoder extends MSFVectorTileDecoder {
    static alloc(): MSFMBVectorTileDecoder; // inherited from NSObject

    static new(): MSFMBVectorTileDecoder; // inherited from NSObject

    constructor(o: { cartoCSSStyleSet: MSFCartoCSSStyleSet });

    constructor(o: { compiledStyleSet: MSFCompiledStyleSet });

    getCartoCSSStyleSet(): MSFCartoCSSStyleSet;

    getCompiledStyleSet(): MSFCompiledStyleSet;

    getStyleParameter(param: string): string;

    getStyleParameters(): MSFStringVector;

    initWithCartoCSSStyleSet(cartoCSSStyleSet: MSFCartoCSSStyleSet): this;

    initWithCompiledStyleSet(compiledStyleSet: MSFCompiledStyleSet): this;

    isFeatureIdOverride(): boolean;

    setCartoCSSStyleSet(styleSet: MSFCartoCSSStyleSet): void;

    setCompiledStyleSet(styleSet: MSFCompiledStyleSet): void;

    setFeatureIdOverride(idOverride: boolean): void;

    setJSONStyleParameters(params: string): void;

    setStyleParameterValue(param: string, value: string): boolean;

    setStyleParameters(params: MSFStringMap): void;
}

declare class MSFMapBounds extends NSObject {
    static alloc(): MSFMapBounds; // inherited from NSObject

    static new(): MSFMapBounds; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { min: MSFMapPos; max: MSFMapPos });

    containsBounds(bounds: MSFMapBounds): boolean;

    containsPos(pos: MSFMapPos): boolean;

    description(): string;

    getCenter(): MSFMapPos;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getDelta(): MSFMapVec;

    getMax(): MSFMapPos;

    getMin(): MSFMapPos;

    hash(): number;

    hashInternal(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithMinMax(min: MSFMapPos, max: MSFMapPos): this;

    intersects(bounds: MSFMapBounds): boolean;

    isEqualInternal(mapBounds: MSFMapBounds): boolean;

    shrinkToIntersection(bounds: MSFMapBounds): void;

    swigGetRawPtr(): number;
}

declare class MSFMapBoxElevationDataDecoder extends MSFElevationDecoder {
    static alloc(): MSFMapBoxElevationDataDecoder; // inherited from NSObject

    static new(): MSFMapBoxElevationDataDecoder; // inherited from NSObject
}

declare class MSFMapBoxOnlineGeocodingService extends MSFGeocodingService {
    static alloc(): MSFMapBoxOnlineGeocodingService; // inherited from NSObject

    static new(): MSFMapBoxOnlineGeocodingService; // inherited from NSObject

    constructor(o: { accessToken: string });

    calculateAddressesSwigExplicitNTMapBoxOnlineGeocodingService(request: MSFGeocodingRequest): MSFGeocodingResultVector;

    getCustomServiceURL(): string;

    getLanguageSwigExplicitNTMapBoxOnlineGeocodingService(): string;

    getMaxResultsSwigExplicitNTMapBoxOnlineGeocodingService(): number;

    initWithAccessToken(accessToken: string): this;

    isAutocompleteSwigExplicitNTMapBoxOnlineGeocodingService(): boolean;

    setAutocompleteSwigExplicitNTMapBoxOnlineGeocodingService(autocomplete: boolean): void;

    setCustomServiceURL(serviceURL: string): void;

    setLanguageSwigExplicitNTMapBoxOnlineGeocodingService(lang: string): void;

    setMaxResultsSwigExplicitNTMapBoxOnlineGeocodingService(maxResults: number): void;
}

declare class MSFMapBoxOnlineReverseGeocodingService extends MSFReverseGeocodingService {
    static alloc(): MSFMapBoxOnlineReverseGeocodingService; // inherited from NSObject

    static new(): MSFMapBoxOnlineReverseGeocodingService; // inherited from NSObject

    constructor(o: { accessToken: string });

    calculateAddressesSwigExplicitNTMapBoxOnlineReverseGeocodingService(request: MSFReverseGeocodingRequest): MSFGeocodingResultVector;

    getCustomServiceURL(): string;

    getLanguageSwigExplicitNTMapBoxOnlineReverseGeocodingService(): string;

    initWithAccessToken(accessToken: string): this;

    setCustomServiceURL(serviceURL: string): void;

    setLanguageSwigExplicitNTMapBoxOnlineReverseGeocodingService(lang: string): void;
}

declare class MSFMapClickInfo extends NSObject {
    static alloc(): MSFMapClickInfo; // inherited from NSObject

    static new(): MSFMapClickInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getClickInfo(): MSFClickInfo;

    getClickPos(): MSFMapPos;

    getClickType(): MSFClickType;

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFMapEnvelope extends NSObject {
    static alloc(): MSFMapEnvelope; // inherited from NSObject

    static new(): MSFMapEnvelope; // inherited from NSObject

    constructor(o: { bounds: MSFMapBounds });

    constructor(o: { convexHull: MSFMapPosVector });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    contains(envelope: MSFMapEnvelope): boolean;

    description(): string;

    getBounds(): MSFMapBounds;

    getConvexHull(): MSFMapPosVector;

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    hashInternal(): number;

    initWithBounds(bounds: MSFMapBounds): this;

    initWithConvexHull(convexHull: MSFMapPosVector): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    intersects(envelope: MSFMapEnvelope): boolean;

    isEqualInternal(envelope: MSFMapEnvelope): boolean;

    swigGetRawPtr(): number;
}

declare class MSFMapEventListener extends NSObject {
    static alloc(): MSFMapEventListener; // inherited from NSObject

    static new(): MSFMapEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFMapEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onMapClicked(mapClickInfo: MSFMapClickInfo): void;

    onMapClickedSwigExplicitNTMapEventListener(mapClickInfo: MSFMapClickInfo): void;

    onMapIdle(): void;

    onMapIdleSwigExplicitNTMapEventListener(): void;

    onMapInteraction(mapInteractionInfo: MSFMapInteractionInfo): void;

    onMapInteractionSwigExplicitNTMapEventListener(mapInteractionInfo: MSFMapInteractionInfo): void;

    onMapMoved(): void;

    onMapMovedSwigExplicitNTMapEventListener(): void;

    onMapStable(): void;

    onMapStableSwigExplicitNTMapEventListener(): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFMapInteractionInfo extends NSObject {
    static alloc(): MSFMapInteractionInfo; // inherited from NSObject

    static new(): MSFMapInteractionInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isAnimationStarted(): boolean;

    isPanAction(): boolean;

    isRotateAction(): boolean;

    isTiltAction(): boolean;

    isZoomAction(): boolean;

    swigGetRawPtr(): number;
}

declare class MSFMapPos extends NSObject {
    static alloc(): MSFMapPos; // inherited from NSObject

    static new(): MSFMapPos; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { x: number; y: number });

    constructor(o: { x: number; y: number; z: number });

    add(v: MSFMapVec): MSFMapPos;

    description(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getX(): number;

    getY(): number;

    getZ(): number;

    hash(): number;

    hashInternal(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithXY(x: number, y: number): this;

    initWithXYZ(x: number, y: number, z: number): this;

    isEqualInternal(p: MSFMapPos): boolean;

    subPos(p: MSFMapPos): MSFMapVec;

    subVec(v: MSFMapVec): MSFMapPos;

    swigGetRawPtr(): number;
}

declare class MSFMapPosVector extends NSObject {
    static alloc(): MSFMapPosVector; // inherited from NSObject

    static new(): MSFMapPosVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFMapPos): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFMapPos;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFMapPos): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFMapPosVectorVector extends NSObject {
    static alloc(): MSFMapPosVectorVector; // inherited from NSObject

    static new(): MSFMapPosVectorVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFMapPosVector): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFMapPosVector;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFMapPosVector): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFMapRange extends NSObject {
    static alloc(): MSFMapRange; // inherited from NSObject

    static new(): MSFMapRange; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { min: number; max: number });

    description(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getMax(): number;

    getMidrange(): number;

    getMin(): number;

    hash(): number;

    hashInternal(): number;

    inRange(value: number): boolean;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithMinMax(min: number, max: number): this;

    isEqualInternal(mapRange: MSFMapRange): boolean;

    length(): number;

    swigGetRawPtr(): number;
}

declare class MSFMapRenderer extends NSObject {
    static alloc(): MSFMapRenderer; // inherited from NSObject

    static new(): MSFMapRenderer; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    captureRenderingWaitWhileUpdating(listener: MSFRendererCaptureListener, waitWhileUpdating: boolean): void;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getMapRendererListener(): MSFMapRendererListener;

    getViewState(): MSFViewState;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    requestRedraw(): void;

    setMapRendererListener(listener: MSFMapRendererListener): void;

    swigGetRawPtr(): number;
}

declare class MSFMapRendererListener extends NSObject {
    static alloc(): MSFMapRendererListener; // inherited from NSObject

    static new(): MSFMapRendererListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFMapRendererListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onAfterDrawFrame(): void;

    onAfterDrawFrameSwigExplicitNTMapRendererListener(): void;

    onBeforeDrawFrame(): void;

    onBeforeDrawFrameSwigExplicitNTMapRendererListener(): void;

    onSurfaceChangedHeight(width: number, height: number): void;

    onSurfaceChangedSwigExplicitNTMapRendererListenerHeight(width: number, height: number): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFMapTile extends NSObject {
    static alloc(): MSFMapTile; // inherited from NSObject

    static new(): MSFMapTile; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { x: number; y: number; zoom: number; frameNr: number });

    description(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getFrameNr(): number;

    getTileId(): number;

    getX(): number;

    getY(): number;

    getZoom(): number;

    hash(): number;

    hashInternal(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithXYZoomFrameNr(x: number, y: number, zoom: number, frameNr: number): this;

    isEqualInternal(tile: MSFMapTile): boolean;

    swigGetRawPtr(): number;
}

declare class MSFMapTilerOnlineTileDataSource extends MSFTileDataSource {
    static alloc(): MSFMapTilerOnlineTileDataSource; // inherited from NSObject

    static new(): MSFMapTilerOnlineTileDataSource; // inherited from NSObject

    constructor(o: { key: string });

    getCustomServiceURL(): string;

    getTimeout(): number;

    initWithKey(key: string): this;

    loadTileSwigExplicitNTMapTilerOnlineTileDataSource(mapTile: MSFMapTile): MSFTileData;

    setCustomServiceURL(serviceURL: string): void;

    setTimeout(timeout: number): void;
}

declare class MSFMapVec extends NSObject {
    static alloc(): MSFMapVec; // inherited from NSObject

    static new(): MSFMapVec; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { x: number; y: number });

    constructor(o: { x: number; y: number; z: number });

    add(v: MSFMapVec): MSFMapVec;

    crossProduct2D(v: MSFMapVec): number;

    crossProduct3D(v: MSFMapVec): MSFMapVec;

    description(): string;

    div(divider: number): MSFMapVec;

    dotProduct(v: MSFMapVec): number;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getNormalized(): MSFMapVec;

    getX(): number;

    getY(): number;

    getZ(): number;

    hash(): number;

    hashInternal(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithXY(x: number, y: number): this;

    initWithXYZ(x: number, y: number, z: number): this;

    isEqualInternal(v: MSFMapVec): boolean;

    length(): number;

    mul(multiplier: number): MSFMapVec;

    sub(v: MSFMapVec): MSFMapVec;

    swigGetRawPtr(): number;
}

declare class MSFMapView extends GLKView {
    static alloc(): MSFMapView; // inherited from NSObject

    static appearance(): MSFMapView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): MSFMapView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MSFMapView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MSFMapView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MSFMapView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MSFMapView; // inherited from UIAppearance

    static new(): MSFMapView; // inherited from NSObject

    cancelAllTasks(): void;

    clearAllCaches(): void;

    clearPreloadingCaches(): void;

    getFocusPos(): MSFMapPos;

    getLayers(): MSFLayers;

    getMapEventListener(): MSFMapEventListener;

    getMapRenderer(): MSFMapRenderer;

    getOptions(): MSFOptions;

    getRotation(): number;

    getTilt(): number;

    getZoom(): number;

    mapToScreen(mapPos: MSFMapPos): MSFScreenPos;

    moveToFitBoundsScreenBoundsIntegerZoomDurationSeconds(mapBounds: MSFMapBounds, screenBounds: MSFScreenBounds, integerZoom: boolean, durationSeconds: number): void;

    moveToFitBoundsScreenBoundsIntegerZoomResetRotationResetTiltDurationSeconds(
        mapBounds: MSFMapBounds,
        screenBounds: MSFScreenBounds,
        integerZoom: boolean,
        resetRotation: boolean,
        resetTilt: boolean,
        durationSeconds: number
    ): void;

    panDurationSeconds(deltaPos: MSFMapVec, durationSeconds: number): void;

    rotateDurationSeconds(deltaAngle: number, durationSeconds: number): void;

    rotateTargetPosDurationSeconds(deltaAngle: number, targetPos: MSFMapPos, durationSeconds: number): void;

    screenToMap(screenPos: MSFScreenPos): MSFMapPos;

    setFocusPosDurationSeconds(pos: MSFMapPos, durationSeconds: number): void;

    setMapEventListener(mapEventListener: MSFMapEventListener): void;

    setRotationDurationSeconds(angle: number, durationSeconds: number): void;

    setRotationTargetPosDurationSeconds(angle: number, targetPos: MSFMapPos, durationSeconds: number): void;

    setTiltDurationSeconds(tilt: number, durationSeconds: number): void;

    setZoomDurationSeconds(zoom: number, durationSeconds: number): void;

    setZoomTargetPosDurationSeconds(zoom: number, targetPos: MSFMapPos, durationSeconds: number): void;

    tiltDurationSeconds(deltaTilt: number, durationSeconds: number): void;

    zoomDurationSeconds(deltaZoom: number, durationSeconds: number): void;

    zoomTargetPosDurationSeconds(deltaZoom: number, targetPos: MSFMapPos, durationSeconds: number): void;
}

declare class MSFMarker extends MSFBillboard {
    static alloc(): MSFMarker; // inherited from NSObject

    static new(): MSFMarker; // inherited from NSObject

    constructor(o: { baseBillboard: MSFBillboard; style: MSFMarkerStyle });

    constructor(o: { geometry: MSFGeometry; style: MSFMarkerStyle });

    constructor(o: { pos: MSFMapPos; style: MSFMarkerStyle });

    getStyle(): MSFMarkerStyle;

    initWithBaseBillboardStyle(baseBillboard: MSFBillboard, style: MSFMarkerStyle): this;

    initWithGeometryStyle(geometry: MSFGeometry, style: MSFMarkerStyle): this;

    initWithPosStyle(pos: MSFMapPos, style: MSFMarkerStyle): this;

    setStyle(style: MSFMarkerStyle): void;
}

declare class MSFMarkerStyle extends MSFBillboardStyle {
    static alloc(): MSFMarkerStyle; // inherited from NSObject

    static new(): MSFMarkerStyle; // inherited from NSObject

    getAnchorPointX(): number;

    getAnchorPointY(): number;

    getBitmap(): MSFBitmap;

    getClickSize(): number;

    getOrientationMode(): MSFBillboardOrientation;

    getScalingMode(): MSFBillboardScaling;

    getSize(): number;
}

declare class MSFMarkerStyleBuilder extends MSFBillboardStyleBuilder {
    static alloc(): MSFMarkerStyleBuilder; // inherited from NSObject

    static new(): MSFMarkerStyleBuilder; // inherited from NSObject

    buildStyle(): MSFMarkerStyle;

    getAnchorPointX(): number;

    getAnchorPointY(): number;

    getBitmap(): MSFBitmap;

    getClickSize(): number;

    getOrientationMode(): MSFBillboardOrientation;

    getScalingMode(): MSFBillboardScaling;

    getSize(): number;

    setAnchorPointX(anchorPointX: number): void;

    setAnchorPointXAnchorPointY(anchorPointX: number, anchorPointY: number): void;

    setAnchorPointY(anchorPointY: number): void;

    setBitmap(bitmap: MSFBitmap): void;

    setClickSize(size: number): void;

    setOrientationMode(orientationMode: MSFBillboardOrientation): void;

    setScalingMode(scalingMode: MSFBillboardScaling): void;

    setSize(size: number): void;
}

declare class MSFMemoryCacheTileDataSource extends MSFCacheTileDataSource {
    static alloc(): MSFMemoryCacheTileDataSource; // inherited from NSObject

    static new(): MSFMemoryCacheTileDataSource; // inherited from NSObject

    clearSwigExplicitNTMemoryCacheTileDataSource(): void;

    getCapacitySwigExplicitNTMemoryCacheTileDataSource(): number;

    loadTileSwigExplicitNTMemoryCacheTileDataSource(mapTile: MSFMapTile): MSFTileData;

    setCapacitySwigExplicitNTMemoryCacheTileDataSource(capacityInBytes: number): void;
}

declare class MSFMergedMBVTTileDataSource extends MSFTileDataSource {
    static alloc(): MSFMergedMBVTTileDataSource; // inherited from NSObject

    static new(): MSFMergedMBVTTileDataSource; // inherited from NSObject

    constructor(o: { dataSource1: MSFTileDataSource; dataSource2: MSFTileDataSource });

    getDataExtentSwigExplicitNTMergedMBVTTileDataSource(): MSFMapBounds;

    getMaxZoomSwigExplicitNTMergedMBVTTileDataSource(): number;

    getMinZoomSwigExplicitNTMergedMBVTTileDataSource(): number;

    getTileMask(): string;

    getTileMaskSwigExplicitNTMergedMBVTTileDataSource(): string;

    initWithDataSource1DataSource2(dataSource1: MSFTileDataSource, dataSource2: MSFTileDataSource): this;

    loadTileSwigExplicitNTMergedMBVTTileDataSource(tile: MSFMapTile): MSFTileData;
}

declare class MSFMultiGeometry extends MSFGeometry {
    static alloc(): MSFMultiGeometry; // inherited from NSObject

    static new(): MSFMultiGeometry; // inherited from NSObject

    constructor(o: { geometries: MSFGeometryVector });

    getGeometry(index: number): MSFGeometry;

    getGeometryCount(): number;

    initWithGeometries(geometries: MSFGeometryVector): this;
}

declare class MSFMultiLineGeometry extends MSFMultiGeometry {
    static alloc(): MSFMultiLineGeometry; // inherited from NSObject

    static new(): MSFMultiLineGeometry; // inherited from NSObject

    constructor(o: { geometries: MSFLineGeometryVector });

    getGeometry(index: number): MSFLineGeometry;

    initWithGeometries(geometries: MSFLineGeometryVector): this;
}

declare class MSFMultiOSMOfflineGeocodingService extends MSFGeocodingService {
    static alloc(): MSFMultiOSMOfflineGeocodingService; // inherited from NSObject

    static new(): MSFMultiOSMOfflineGeocodingService; // inherited from NSObject

    add(database: string): void;

    calculateAddressesSwigExplicitNTMultiOSMOfflineGeocodingService(request: MSFGeocodingRequest): MSFGeocodingResultVector;

    getLanguageSwigExplicitNTMultiOSMOfflineGeocodingService(): string;

    getMaxResultsSwigExplicitNTMultiOSMOfflineGeocodingService(): number;

    isAutocompleteSwigExplicitNTMultiOSMOfflineGeocodingService(): boolean;

    remove(database: string): boolean;

    setAutocompleteSwigExplicitNTMultiOSMOfflineGeocodingService(autocomplete: boolean): void;

    setLanguageSwigExplicitNTMultiOSMOfflineGeocodingService(lang: string): void;

    setMaxResultsSwigExplicitNTMultiOSMOfflineGeocodingService(maxResults: number): void;
}

declare class MSFMultiOSMOfflineReverseGeocodingService extends MSFReverseGeocodingService {
    static alloc(): MSFMultiOSMOfflineReverseGeocodingService; // inherited from NSObject

    static new(): MSFMultiOSMOfflineReverseGeocodingService; // inherited from NSObject

    add(database: string): void;

    calculateAddressesSwigExplicitNTMultiOSMOfflineReverseGeocodingService(request: MSFReverseGeocodingRequest): MSFGeocodingResultVector;

    getLanguageSwigExplicitNTMultiOSMOfflineReverseGeocodingService(): string;

    remove(database: string): boolean;

    setLanguageSwigExplicitNTMultiOSMOfflineReverseGeocodingService(lang: string): void;
}

declare class MSFMultiPointGeometry extends MSFMultiGeometry {
    static alloc(): MSFMultiPointGeometry; // inherited from NSObject

    static new(): MSFMultiPointGeometry; // inherited from NSObject

    constructor(o: { geometries: MSFPointGeometryVector });

    getGeometry(index: number): MSFPointGeometry;

    initWithGeometries(geometries: MSFPointGeometryVector): this;
}

declare class MSFMultiPolygonGeometry extends MSFMultiGeometry {
    static alloc(): MSFMultiPolygonGeometry; // inherited from NSObject

    static new(): MSFMultiPolygonGeometry; // inherited from NSObject

    constructor(o: { geometries: MSFPolygonGeometryVector });

    getGeometry(index: number): MSFPolygonGeometry;

    initWithGeometries(geometries: MSFPolygonGeometryVector): this;
}

declare class MSFMultiTileDataSource extends MSFTileDataSource {
    static alloc(): MSFMultiTileDataSource; // inherited from NSObject

    static new(): MSFMultiTileDataSource; // inherited from NSObject

    constructor(o: { maxOpenedPackages: number });

    add(datasource: MSFTileDataSource): void;

    addTileMask(datasource: MSFTileDataSource, tileMask: string): void;

    getDataExtentSwigExplicitNTMultiTileDataSource(): MSFMapBounds;

    getMaxZoomSwigExplicitNTMultiTileDataSource(): number;

    getMinZoomSwigExplicitNTMultiTileDataSource(): number;

    initWithMaxOpenedPackages(maxOpenedPackages: number): this;

    loadTileSwigExplicitNTMultiTileDataSource(mapTile: MSFMapTile): MSFTileData;

    remove(datasource: MSFTileDataSource): boolean;
}

declare class MSFMultiValhallaOfflineRoutingService extends MSFRoutingService {
    static alloc(): MSFMultiValhallaOfflineRoutingService; // inherited from NSObject

    static new(): MSFMultiValhallaOfflineRoutingService; // inherited from NSObject

    add(database: string): void;

    addLocaleJson(key: string, json: string): void;

    calculateRouteSwigExplicitNTMultiValhallaOfflineRoutingService(request: MSFRoutingRequest): MSFRoutingResult;

    getConfigurationParameter(param: string): MSFVariant;

    getProfileSwigExplicitNTMultiValhallaOfflineRoutingService(): string;

    matchRouteSwigExplicitNTMultiValhallaOfflineRoutingService(request: MSFRouteMatchingRequest): MSFRouteMatchingResult;

    remove(database: string): boolean;

    setConfigurationParameterValue(param: string, value: MSFVariant): void;

    setProfileSwigExplicitNTMultiValhallaOfflineRoutingService(profile: string): void;
}

declare class MSFNMLModel extends MSFBillboard {
    static alloc(): MSFNMLModel; // inherited from NSObject

    static new(): MSFNMLModel; // inherited from NSObject

    constructor(o: { baseBillboard: MSFBillboard; style: MSFNMLModelStyle });

    constructor(o: { geometry: MSFGeometry; style: MSFNMLModelStyle });

    constructor(o: { pos: MSFMapPos; style: MSFNMLModelStyle });

    getRotationAngle(): number;

    getRotationAxis(): MSFMapVec;

    getScale(): number;

    getStyle(): MSFNMLModelStyle;

    initWithBaseBillboardStyle(baseBillboard: MSFBillboard, style: MSFNMLModelStyle): this;

    initWithGeometryStyle(geometry: MSFGeometry, style: MSFNMLModelStyle): this;

    initWithPosStyle(pos: MSFMapPos, style: MSFNMLModelStyle): this;

    setRotationAngle(angle: number): void;

    setRotationAxis(axis: MSFMapVec): void;

    setScale(scale: number): void;

    setStyle(style: MSFNMLModelStyle): void;
}

declare class MSFNMLModelStyle extends MSFBillboardStyle {
    static alloc(): MSFNMLModelStyle; // inherited from NSObject

    static new(): MSFNMLModelStyle; // inherited from NSObject

    getModelAsset(): MSFBinaryData;

    getOrientationMode(): MSFBillboardOrientation;

    getScalingMode(): MSFBillboardScaling;
}

declare class MSFNMLModelStyleBuilder extends MSFBillboardStyleBuilder {
    static alloc(): MSFNMLModelStyleBuilder; // inherited from NSObject

    static new(): MSFNMLModelStyleBuilder; // inherited from NSObject

    buildStyle(): MSFNMLModelStyle;

    getModelAsset(): MSFBinaryData;

    getOrientationMode(): MSFBillboardOrientation;

    getScalingMode(): MSFBillboardScaling;

    setModelAsset(modelAsset: MSFBinaryData): void;

    setOrientationMode(orientationMode: MSFBillboardOrientation): void;

    setScalingMode(scalingMode: MSFBillboardScaling): void;
}

declare class MSFOSMOfflineGeocodingService extends MSFGeocodingService {
    static alloc(): MSFOSMOfflineGeocodingService; // inherited from NSObject

    static new(): MSFOSMOfflineGeocodingService; // inherited from NSObject

    constructor(o: { path: string });

    calculateAddressesSwigExplicitNTOSMOfflineGeocodingService(request: MSFGeocodingRequest): MSFGeocodingResultVector;

    getLanguageSwigExplicitNTOSMOfflineGeocodingService(): string;

    getMaxResultsSwigExplicitNTOSMOfflineGeocodingService(): number;

    initWithPath(path: string): this;

    isAutocompleteSwigExplicitNTOSMOfflineGeocodingService(): boolean;

    setAutocompleteSwigExplicitNTOSMOfflineGeocodingService(autocomplete: boolean): void;

    setLanguageSwigExplicitNTOSMOfflineGeocodingService(lang: string): void;

    setMaxResultsSwigExplicitNTOSMOfflineGeocodingService(maxResults: number): void;
}

declare class MSFOSMOfflineReverseGeocodingService extends MSFReverseGeocodingService {
    static alloc(): MSFOSMOfflineReverseGeocodingService; // inherited from NSObject

    static new(): MSFOSMOfflineReverseGeocodingService; // inherited from NSObject

    constructor(o: { path: string });

    calculateAddressesSwigExplicitNTOSMOfflineReverseGeocodingService(request: MSFReverseGeocodingRequest): MSFGeocodingResultVector;

    getLanguageSwigExplicitNTOSMOfflineReverseGeocodingService(): string;

    initWithPath(path: string): this;

    setLanguageSwigExplicitNTOSMOfflineReverseGeocodingService(lang: string): void;
}

declare class MSFOSRMOfflineRoutingService extends MSFRoutingService {
    static alloc(): MSFOSRMOfflineRoutingService; // inherited from NSObject

    static new(): MSFOSRMOfflineRoutingService; // inherited from NSObject

    constructor(o: { path: string });

    calculateRouteSwigExplicitNTOSRMOfflineRoutingService(request: MSFRoutingRequest): MSFRoutingResult;

    getProfileSwigExplicitNTOSRMOfflineRoutingService(): string;

    initWithPath(path: string): this;

    matchRouteSwigExplicitNTOSRMOfflineRoutingService(request: MSFRouteMatchingRequest): MSFRouteMatchingResult;

    setProfileSwigExplicitNTOSRMOfflineRoutingService(profile: string): void;
}

declare class MSFOptions extends NSObject {
    static alloc(): MSFOptions; // inherited from NSObject

    static new(): MSFOptions; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getAmbientLightColor(): MSFColor;

    getBackgroundBitmap(): MSFBitmap;

    getBaseProjection(): MSFProjection;

    getClearColor(): MSFColor;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getDPI(): number;

    getDoubleClickMaxDuration(): number;

    getDrawDistance(): number;

    getEnvelopeThreadPoolSize(): number;

    getFieldOfViewY(): number;

    getFocusPointOffset(): MSFScreenPos;

    getLongClickDuration(): number;

    getMainLightColor(): MSFColor;

    getMainLightDirection(): MSFMapVec;

    getPanBounds(): MSFMapBounds;

    getPanningMode(): MSFPanningMode;

    getPivotMode(): MSFPivotMode;

    getRenderProjectionMode(): MSFRenderProjectionMode;

    getSkyColor(): MSFColor;

    getTileDrawSize(): number;

    getTileThreadPoolSize(): number;

    getTiltRange(): MSFMapRange;

    getZoomRange(): MSFMapRange;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isClickTypeDetection(): boolean;

    isDoubleClickDetection(): boolean;

    isKineticPan(): boolean;

    isKineticRotation(): boolean;

    isKineticZoom(): boolean;

    isLayersLabelsProcessedInReverseOrder(): boolean;

    isRestrictedPanning(): boolean;

    isRotatable(): boolean;

    isRotationGestures(): boolean;

    isSeamlessPanning(): boolean;

    isTiltGestureReversed(): boolean;

    isUserInput(): boolean;

    isZoomGestures(): boolean;

    setAmbientLightColor(color: MSFColor): void;

    setBackgroundBitmap(backgroundBitmap: MSFBitmap): void;

    setBaseProjection(baseProjection: MSFProjection): void;

    setClearColor(color: MSFColor): void;

    setClickTypeDetection(enabled: boolean): void;

    setDPI(dpi: number): void;

    setDoubleClickDetection(enabled: boolean): void;

    setDoubleClickMaxDuration(duration: number): void;

    setDrawDistance(drawDistance: number): void;

    setEnvelopeThreadPoolSize(poolSize: number): void;

    setFieldOfViewY(fovY: number): void;

    setFocusPointOffset(offset: MSFScreenPos): void;

    setKineticPan(enabled: boolean): void;

    setKineticRotation(enabled: boolean): void;

    setKineticZoom(enabled: boolean): void;

    setLayersLabelsProcessedInReverseOrder(enabled: boolean): void;

    setLongClickDuration(duration: number): void;

    setMainLightColor(color: MSFColor): void;

    setMainLightDirection(direction: MSFMapVec): void;

    setPanBounds(panBounds: MSFMapBounds): void;

    setPanningMode(panningMode: MSFPanningMode): void;

    setPivotMode(pivotMode: MSFPivotMode): void;

    setRenderProjectionMode(renderProjectionMode: MSFRenderProjectionMode): void;

    setRestrictedPanning(enabled: boolean): void;

    setRotatable(enabled: boolean): void;

    setRotationGestures(enabled: boolean): void;

    setSeamlessPanning(enabled: boolean): void;

    setSkyColor(color: MSFColor): void;

    setTileDrawSize(tileDrawSize: number): void;

    setTileThreadPoolSize(poolSize: number): void;

    setTiltGestureReversed(reversed: boolean): void;

    setTiltRange(tiltRange: MSFMapRange): void;

    setUserInput(enabled: boolean): void;

    setZoomGestures(enabled: boolean): void;

    setZoomRange(zoomRange: MSFMapRange): void;

    swigGetRawPtr(): number;
}

declare class MSFOrderedTileDataSource extends MSFTileDataSource {
    static alloc(): MSFOrderedTileDataSource; // inherited from NSObject

    static new(): MSFOrderedTileDataSource; // inherited from NSObject

    constructor(o: { dataSource1: MSFTileDataSource; dataSource2: MSFTileDataSource });

    getDataExtentSwigExplicitNTOrderedTileDataSource(): MSFMapBounds;

    getMaxZoomSwigExplicitNTOrderedTileDataSource(): number;

    getMinZoomSwigExplicitNTOrderedTileDataSource(): number;

    initWithDataSource1DataSource2(dataSource1: MSFTileDataSource, dataSource2: MSFTileDataSource): this;

    loadTileSwigExplicitNTOrderedTileDataSource(tile: MSFMapTile): MSFTileData;
}

declare const enum MSFPackageAction {
    T_PACKAGE_ACTION_READY = 0,

    T_PACKAGE_ACTION_WAITING = 1,

    T_PACKAGE_ACTION_DOWNLOADING = 2,

    T_PACKAGE_ACTION_COPYING = 3,

    T_PACKAGE_ACTION_REMOVING = 4
}

declare const enum MSFPackageErrorType {
    T_PACKAGE_ERROR_TYPE_SYSTEM = 0,

    T_PACKAGE_ERROR_TYPE_CONNECTION = 1,

    T_PACKAGE_ERROR_TYPE_DOWNLOAD_LIMIT_EXCEEDED = 2,

    T_PACKAGE_ERROR_TYPE_PACKAGE_TOO_BIG = 3,

    T_PACKAGE_ERROR_TYPE_NO_OFFLINE_PLAN = 4
}

declare class MSFPackageInfo extends NSObject {
    static alloc(): MSFPackageInfo; // inherited from NSObject

    static new(): MSFPackageInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { packageId: string; packageType: MSFPackageType; version: number; size: number; serverURL: string; tileMask: MSFPackageTileMask; metaInfo: MSFPackageMetaInfo });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getMetaInfo(): MSFPackageMetaInfo;

    getName(): string;

    getNames(lang: string): MSFStringVector;

    getPackageId(): string;

    getPackageType(): MSFPackageType;

    getSize(): number;

    getTileMask(): MSFPackageTileMask;

    getVersion(): number;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithPackageIdPackageTypeVersionSizeServerURLTileMaskMetaInfo(
        packageId: string,
        packageType: MSFPackageType,
        version: number,
        size: number,
        serverURL: string,
        tileMask: MSFPackageTileMask,
        metaInfo: MSFPackageMetaInfo
    ): this;

    swigGetRawPtr(): number;
}

declare class MSFPackageInfoVector extends NSObject {
    static alloc(): MSFPackageInfoVector; // inherited from NSObject

    static new(): MSFPackageInfoVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFPackageInfo): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFPackageInfo;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFPackageInfo): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFPackageManager extends NSObject {
    static alloc(): MSFPackageManager; // inherited from NSObject

    static new(): MSFPackageManager; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFPackageManager;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { packageListURL: string; dataFolder: string; serverEncKey: string; localEncKey: string });

    cancelPackageTasks(packageId: string): void;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getLocalPackage(packageId: string): MSFPackageInfo;

    getLocalPackageStatusVersion(packageId: string, version: number): MSFPackageStatus;

    getLocalPackages(): MSFPackageInfoVector;

    getPackageManagerListener(): MSFPackageManagerListener;

    getServerPackage(packageId: string): MSFPackageInfo;

    getServerPackageListAge(): number;

    getServerPackageListMetaInfo(): MSFPackageMetaInfo;

    getServerPackages(): MSFPackageInfoVector;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithPackageListURLDataFolderServerEncKeyLocalEncKey(packageListURL: string, dataFolder: string, serverEncKey: string, localEncKey: string): this;

    isAreaDownloadedZoomProjection(mapBounds: MSFMapBounds, zoom: number, projection: MSFProjection): boolean;

    setPackageManagerListener(listener: MSFPackageManagerListener): void;

    setPackagePriorityPriority(packageId: string, priority: number): void;

    start(): boolean;

    startPackageDownload(packageId: string): boolean;

    startPackageImportVersionPackageFileName(packageId: string, version: number, packageFileName: string): boolean;

    startPackageListDownload(): boolean;

    startPackageRemove(packageId: string): boolean;

    stop(wait: boolean): void;

    suggestPackagesProjection(mapPos: MSFMapPos, projection: MSFProjection): MSFPackageInfoVector;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFPackageManagerGeocodingService extends MSFGeocodingService {
    static alloc(): MSFPackageManagerGeocodingService; // inherited from NSObject

    static new(): MSFPackageManagerGeocodingService; // inherited from NSObject

    constructor(o: { packageManager: MSFPackageManager });

    calculateAddressesSwigExplicitNTPackageManagerGeocodingService(request: MSFGeocodingRequest): MSFGeocodingResultVector;

    getLanguageSwigExplicitNTPackageManagerGeocodingService(): string;

    getMaxResultsSwigExplicitNTPackageManagerGeocodingService(): number;

    initWithPackageManager(packageManager: MSFPackageManager): this;

    isAutocompleteSwigExplicitNTPackageManagerGeocodingService(): boolean;

    setAutocompleteSwigExplicitNTPackageManagerGeocodingService(autocomplete: boolean): void;

    setLanguageSwigExplicitNTPackageManagerGeocodingService(lang: string): void;

    setMaxResultsSwigExplicitNTPackageManagerGeocodingService(maxResults: number): void;
}

declare class MSFPackageManagerListener extends NSObject {
    static alloc(): MSFPackageManagerListener; // inherited from NSObject

    static new(): MSFPackageManagerListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFPackageManagerListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onPackageCancelledSwigExplicitNTPackageManagerListenerVersion(arg1: string, version: number): void;

    onPackageCancelledVersion(arg1: string, version: number): void;

    onPackageFailedSwigExplicitNTPackageManagerListenerVersionErrorType(arg1: string, version: number, errorType: MSFPackageErrorType): void;

    onPackageFailedVersionErrorType(arg1: string, version: number, errorType: MSFPackageErrorType): void;

    onPackageListFailed(): void;

    onPackageListFailedSwigExplicitNTPackageManagerListener(): void;

    onPackageListUpdated(): void;

    onPackageListUpdatedSwigExplicitNTPackageManagerListener(): void;

    onPackageStatusChangedSwigExplicitNTPackageManagerListenerVersionStatus(arg1: string, version: number, status: MSFPackageStatus): void;

    onPackageStatusChangedVersionStatus(arg1: string, version: number, status: MSFPackageStatus): void;

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

declare class MSFPackageManagerReverseGeocodingService extends MSFReverseGeocodingService {
    static alloc(): MSFPackageManagerReverseGeocodingService; // inherited from NSObject

    static new(): MSFPackageManagerReverseGeocodingService; // inherited from NSObject

    constructor(o: { packageManager: MSFPackageManager });

    calculateAddressesSwigExplicitNTPackageManagerReverseGeocodingService(request: MSFReverseGeocodingRequest): MSFGeocodingResultVector;

    getLanguageSwigExplicitNTPackageManagerReverseGeocodingService(): string;

    initWithPackageManager(packageManager: MSFPackageManager): this;

    setLanguageSwigExplicitNTPackageManagerReverseGeocodingService(lang: string): void;
}

declare class MSFPackageManagerRoutingService extends MSFRoutingService {
    static alloc(): MSFPackageManagerRoutingService; // inherited from NSObject

    static new(): MSFPackageManagerRoutingService; // inherited from NSObject

    constructor(o: { packageManager: MSFPackageManager });

    calculateRouteSwigExplicitNTPackageManagerRoutingService(request: MSFRoutingRequest): MSFRoutingResult;

    getProfileSwigExplicitNTPackageManagerRoutingService(): string;

    initWithPackageManager(packageManager: MSFPackageManager): this;

    matchRouteSwigExplicitNTPackageManagerRoutingService(request: MSFRouteMatchingRequest): MSFRouteMatchingResult;

    setProfileSwigExplicitNTPackageManagerRoutingService(profile: string): void;
}

declare class MSFPackageManagerTileDataSource extends MSFTileDataSource {
    static alloc(): MSFPackageManagerTileDataSource; // inherited from NSObject

    static new(): MSFPackageManagerTileDataSource; // inherited from NSObject

    constructor(o: { packageManager: MSFPackageManager });

    getPackageManager(): MSFPackageManager;

    initWithPackageManager(packageManager: MSFPackageManager): this;

    loadTileSwigExplicitNTPackageManagerTileDataSource(mapTile: MSFMapTile): MSFTileData;
}

declare class MSFPackageManagerValhallaRoutingService extends MSFRoutingService {
    static alloc(): MSFPackageManagerValhallaRoutingService; // inherited from NSObject

    static new(): MSFPackageManagerValhallaRoutingService; // inherited from NSObject

    constructor(o: { packageManager: MSFPackageManager });

    addLocaleJson(key: string, json: string): void;

    calculateRouteSwigExplicitNTPackageManagerValhallaRoutingService(request: MSFRoutingRequest): MSFRoutingResult;

    getConfigurationParameter(param: string): MSFVariant;

    getProfileSwigExplicitNTPackageManagerValhallaRoutingService(): string;

    initWithPackageManager(packageManager: MSFPackageManager): this;

    matchRouteSwigExplicitNTPackageManagerValhallaRoutingService(request: MSFRouteMatchingRequest): MSFRouteMatchingResult;

    setConfigurationParameterValue(param: string, value: MSFVariant): void;

    setProfileSwigExplicitNTPackageManagerValhallaRoutingService(profile: string): void;
}

declare class MSFPackageMetaInfo extends NSObject {
    static alloc(): MSFPackageMetaInfo; // inherited from NSObject

    static new(): MSFPackageMetaInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { varnt: MSFVariant });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getVariant(): MSFVariant;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithVar(varnt: MSFVariant): this;

    swigGetRawPtr(): number;
}

declare class MSFPackageStatus extends NSObject {
    static alloc(): MSFPackageStatus; // inherited from NSObject

    static new(): MSFPackageStatus; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { currentAction: MSFPackageAction; paused: boolean; progress: number });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getCurrentAction(): MSFPackageAction;

    getProgress(): number;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithCurrentActionPausedProgress(currentAction: MSFPackageAction, paused: boolean, progress: number): this;

    isPaused(): boolean;

    swigGetRawPtr(): number;
}

declare class MSFPackageTileMask extends NSObject {
    static alloc(): MSFPackageTileMask; // inherited from NSObject

    static new(): MSFPackageTileMask; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getBoundingPolygon(projection: MSFProjection): MSFMultiPolygonGeometry;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getMaxZoomLevel(): number;

    getStringValue(): string;

    getTileStatus(tile: MSFMapTile): MSFPackageTileStatus;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare const enum MSFPackageTileStatus {
    T_PACKAGE_TILE_STATUS_MISSING = 0,

    T_PACKAGE_TILE_STATUS_PARTIAL = 1,

    T_PACKAGE_TILE_STATUS_FULL = 2
}

declare const enum MSFPackageType {
    T_PACKAGE_TYPE_MAP = 0,

    T_PACKAGE_TYPE_ROUTING = 1,

    T_PACKAGE_TYPE_GEOCODING = 2,

    T_PACKAGE_TYPE_VALHALLA_ROUTING = 3
}

declare const enum MSFPanningMode {
    T_PANNING_MODE_FREE = 0,

    T_PANNING_MODE_STICKY = 1,

    T_PANNING_MODE_STICKY_FINAL = 2
}

declare class MSFPeliasOnlineGeocodingService extends MSFGeocodingService {
    static alloc(): MSFPeliasOnlineGeocodingService; // inherited from NSObject

    static new(): MSFPeliasOnlineGeocodingService; // inherited from NSObject

    constructor(o: { apiKey: string });

    calculateAddressesSwigExplicitNTPeliasOnlineGeocodingService(request: MSFGeocodingRequest): MSFGeocodingResultVector;

    getCustomServiceURL(): string;

    getLanguageSwigExplicitNTPeliasOnlineGeocodingService(): string;

    getMaxResultsSwigExplicitNTPeliasOnlineGeocodingService(): number;

    initWithApiKey(apiKey: string): this;

    isAutocompleteSwigExplicitNTPeliasOnlineGeocodingService(): boolean;

    setAutocompleteSwigExplicitNTPeliasOnlineGeocodingService(autocomplete: boolean): void;

    setCustomServiceURL(serviceURL: string): void;

    setLanguageSwigExplicitNTPeliasOnlineGeocodingService(lang: string): void;

    setMaxResultsSwigExplicitNTPeliasOnlineGeocodingService(maxResults: number): void;
}

declare class MSFPeliasOnlineReverseGeocodingService extends MSFReverseGeocodingService {
    static alloc(): MSFPeliasOnlineReverseGeocodingService; // inherited from NSObject

    static new(): MSFPeliasOnlineReverseGeocodingService; // inherited from NSObject

    constructor(o: { apiKey: string });

    calculateAddressesSwigExplicitNTPeliasOnlineReverseGeocodingService(request: MSFReverseGeocodingRequest): MSFGeocodingResultVector;

    getCustomServiceURL(): string;

    getLanguageSwigExplicitNTPeliasOnlineReverseGeocodingService(): string;

    initWithApiKey(apiKey: string): this;

    setCustomServiceURL(serviceURL: string): void;

    setLanguageSwigExplicitNTPeliasOnlineReverseGeocodingService(lang: string): void;
}

declare class MSFPersistentCacheTileDataSource extends MSFCacheTileDataSource {
    static alloc(): MSFPersistentCacheTileDataSource; // inherited from NSObject

    static new(): MSFPersistentCacheTileDataSource; // inherited from NSObject

    constructor(o: { dataSource: MSFTileDataSource; databasePath: string });

    clearSwigExplicitNTPersistentCacheTileDataSource(): void;

    close(): void;

    getCapacitySwigExplicitNTPersistentCacheTileDataSource(): number;

    initWithDataSourceDatabasePath(dataSource: MSFTileDataSource, databasePath: string): this;

    isCacheOnlyMode(): boolean;

    isOpen(): boolean;

    loadTileSwigExplicitNTPersistentCacheTileDataSource(mapTile: MSFMapTile): MSFTileData;

    setCacheOnlyMode(enabled: boolean): void;

    setCapacitySwigExplicitNTPersistentCacheTileDataSource(capacityInBytes: number): void;

    startDownloadAreaMinZoomMaxZoomTileDownloadListener(mapBounds: MSFMapBounds, minZoom: number, maxZoom: number, tileDownloadListener: MSFTileDownloadListener): void;

    stopAllDownloads(): void;
}

declare const enum MSFPivotMode {
    T_PIVOT_MODE_TOUCHPOINT = 0,

    T_PIVOT_MODE_CENTERPOINT = 1
}

declare class MSFPoint extends MSFVectorElement {
    static alloc(): MSFPoint; // inherited from NSObject

    static new(): MSFPoint; // inherited from NSObject

    constructor(o: { geometry: MSFPointGeometry; style: MSFPointStyle });

    constructor(o: { pos: MSFMapPos; style: MSFPointStyle });

    getGeometry(): MSFPointGeometry;

    getPos(): MSFMapPos;

    getStyle(): MSFPointStyle;

    initWithGeometryStyle(geometry: MSFPointGeometry, style: MSFPointStyle): this;

    initWithPosStyle(pos: MSFMapPos, style: MSFPointStyle): this;

    setGeometry(geometry: MSFPointGeometry): void;

    setPos(pos: MSFMapPos): void;

    setStyle(style: MSFPointStyle): void;
}

declare class MSFPointGeometry extends MSFGeometry {
    static alloc(): MSFPointGeometry; // inherited from NSObject

    static new(): MSFPointGeometry; // inherited from NSObject

    constructor(o: { pos: MSFMapPos });

    getPos(): MSFMapPos;

    initWithPos(pos: MSFMapPos): this;
}

declare class MSFPointGeometryVector extends NSObject {
    static alloc(): MSFPointGeometryVector; // inherited from NSObject

    static new(): MSFPointGeometryVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFPointGeometry): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFPointGeometry;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFPointGeometry): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFPointStyle extends MSFStyle {
    static alloc(): MSFPointStyle; // inherited from NSObject

    static new(): MSFPointStyle; // inherited from NSObject

    getBitmap(): MSFBitmap;

    getClickSize(): number;

    getSize(): number;
}

declare class MSFPointStyleBuilder extends MSFStyleBuilder {
    static alloc(): MSFPointStyleBuilder; // inherited from NSObject

    static new(): MSFPointStyleBuilder; // inherited from NSObject

    buildStyle(): MSFPointStyle;

    getBitmap(): MSFBitmap;

    getClickSize(): number;

    getSize(): number;

    setBitmap(bitmap: MSFBitmap): void;

    setClickSize(size: number): void;

    setSize(size: number): void;
}

declare class MSFPolygon extends MSFVectorElement {
    static alloc(): MSFPolygon; // inherited from NSObject

    static new(): MSFPolygon; // inherited from NSObject

    constructor(o: { geometry: MSFPolygonGeometry; style: MSFPolygonStyle });

    constructor(o: { poses: MSFMapPosVector; holes: MSFMapPosVectorVector; style: MSFPolygonStyle });

    constructor(o: { poses: MSFMapPosVector; style: MSFPolygonStyle });

    getGeometry(): MSFPolygonGeometry;

    getHoles(): MSFMapPosVectorVector;

    getPoses(): MSFMapPosVector;

    getStyle(): MSFPolygonStyle;

    initWithGeometryStyle(geometry: MSFPolygonGeometry, style: MSFPolygonStyle): this;

    initWithPosesHolesStyle(poses: MSFMapPosVector, holes: MSFMapPosVectorVector, style: MSFPolygonStyle): this;

    initWithPosesStyle(poses: MSFMapPosVector, style: MSFPolygonStyle): this;

    setGeometry(geometry: MSFPolygonGeometry): void;

    setHoles(holes: MSFMapPosVectorVector): void;

    setPoses(poses: MSFMapPosVector): void;

    setStyle(style: MSFPolygonStyle): void;
}

declare class MSFPolygon3D extends MSFVectorElement {
    static alloc(): MSFPolygon3D; // inherited from NSObject

    static new(): MSFPolygon3D; // inherited from NSObject

    constructor(o: { geometry: MSFPolygonGeometry; style: MSFPolygon3DStyle; height: number });

    constructor(o: { poses: MSFMapPosVector; holes: MSFMapPosVectorVector; style: MSFPolygon3DStyle; height: number });

    constructor(o: { poses: MSFMapPosVector; style: MSFPolygon3DStyle; height: number });

    getGeometry(): MSFPolygonGeometry;

    getHeight(): number;

    getHoles(): MSFMapPosVectorVector;

    getPoses(): MSFMapPosVector;

    getStyle(): MSFPolygon3DStyle;

    initWithGeometryStyleHeight(geometry: MSFPolygonGeometry, style: MSFPolygon3DStyle, height: number): this;

    initWithPosesHolesStyleHeight(poses: MSFMapPosVector, holes: MSFMapPosVectorVector, style: MSFPolygon3DStyle, height: number): this;

    initWithPosesStyleHeight(poses: MSFMapPosVector, style: MSFPolygon3DStyle, height: number): this;

    setGeometry(geometry: MSFPolygonGeometry): void;

    setHeight(height: number): void;

    setHoles(holes: MSFMapPosVectorVector): void;

    setPoses(poses: MSFMapPosVector): void;

    setStyle(style: MSFPolygon3DStyle): void;
}

declare class MSFPolygon3DStyle extends MSFStyle {
    static alloc(): MSFPolygon3DStyle; // inherited from NSObject

    static new(): MSFPolygon3DStyle; // inherited from NSObject

    getSideColor(): MSFColor;
}

declare class MSFPolygon3DStyleBuilder extends MSFStyleBuilder {
    static alloc(): MSFPolygon3DStyleBuilder; // inherited from NSObject

    static new(): MSFPolygon3DStyleBuilder; // inherited from NSObject

    buildStyle(): MSFPolygon3DStyle;

    getSideColor(): MSFColor;

    setSideColor(sideColor: MSFColor): void;
}

declare class MSFPolygonGeometry extends MSFGeometry {
    static alloc(): MSFPolygonGeometry; // inherited from NSObject

    static new(): MSFPolygonGeometry; // inherited from NSObject

    constructor(o: { poses: MSFMapPosVector });

    constructor(o: { poses: MSFMapPosVector; holes: MSFMapPosVectorVector });

    constructor(o: { rings: MSFMapPosVectorVector });

    getHoles(): MSFMapPosVectorVector;

    getPoses(): MSFMapPosVector;

    getRings(): MSFMapPosVectorVector;

    initWithPoses(poses: MSFMapPosVector): this;

    initWithPosesHoles(poses: MSFMapPosVector, holes: MSFMapPosVectorVector): this;

    initWithRings(rings: MSFMapPosVectorVector): this;
}

declare class MSFPolygonGeometryVector extends NSObject {
    static alloc(): MSFPolygonGeometryVector; // inherited from NSObject

    static new(): MSFPolygonGeometryVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFPolygonGeometry): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFPolygonGeometry;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFPolygonGeometry): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFPolygonStyle extends MSFStyle {
    static alloc(): MSFPolygonStyle; // inherited from NSObject

    static new(): MSFPolygonStyle; // inherited from NSObject

    getLineStyle(): MSFLineStyle;
}

declare class MSFPolygonStyleBuilder extends MSFStyleBuilder {
    static alloc(): MSFPolygonStyleBuilder; // inherited from NSObject

    static new(): MSFPolygonStyleBuilder; // inherited from NSObject

    buildStyle(): MSFPolygonStyle;

    getLineStyle(): MSFLineStyle;

    setLineStyle(lineStyle: MSFLineStyle): void;
}

declare class MSFPopup extends MSFBillboard {
    static alloc(): MSFPopup; // inherited from NSObject

    static new(): MSFPopup; // inherited from NSObject

    drawBitmapScreenWidthScreenHeightDpToPX(anchorScreenPos: MSFScreenPos, screenWidth: number, screenHeight: number, dpToPX: number): MSFBitmap;

    getAnchorPointX(): number;

    getAnchorPointY(): number;

    getStyle(): MSFPopupStyle;

    processClickClickPosElementClickPos(clickInfo: MSFClickInfo, clickPos: MSFMapPos, elementClickPos: MSFScreenPos): boolean;

    setAnchorPointX(anchorPointX: number): void;

    setAnchorPointXAnchorPointY(anchorPointX: number, anchorPointY: number): void;

    setAnchorPointY(anchorPointY: number): void;

    setStyle(style: MSFPopupStyle): void;
}

declare class MSFPopupClickInfo extends NSObject {
    static alloc(): MSFPopupClickInfo; // inherited from NSObject

    static new(): MSFPopupClickInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getClickInfo(): MSFClickInfo;

    getClickPos(): MSFMapPos;

    getClickType(): MSFClickType;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getElementClickPos(): MSFScreenPos;

    getPopup(): MSFPopup;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFPopupDrawInfo extends NSObject {
    static alloc(): MSFPopupDrawInfo; // inherited from NSObject

    static new(): MSFPopupDrawInfo; // inherited from NSObject

    constructor(o: { anchorScreenPos: MSFScreenPos; screenBounds: MSFScreenBounds; popup: MSFPopup; dpToPX: number });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getAnchorScreenPos(): MSFScreenPos;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getDPToPX(): number;

    getPopup(): MSFPopup;

    getScreenBounds(): MSFScreenBounds;

    hash(): number;

    initWithAnchorScreenPosScreenBoundsPopupDpToPX(anchorScreenPos: MSFScreenPos, screenBounds: MSFScreenBounds, popup: MSFPopup, dpToPX: number): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFPopupStyle extends MSFBillboardStyle {
    static alloc(): MSFPopupStyle; // inherited from NSObject

    static new(): MSFPopupStyle; // inherited from NSObject
}

declare class MSFPopupStyleBuilder extends MSFBillboardStyleBuilder {
    static alloc(): MSFPopupStyleBuilder; // inherited from NSObject

    static new(): MSFPopupStyleBuilder; // inherited from NSObject

    buildStyle(): MSFPopupStyle;
}

declare class MSFProjection extends NSObject {
    static alloc(): MSFProjection; // inherited from NSObject

    static new(): MSFProjection; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFProjection;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    fromLatLng(lat: number, lng: number): MSFMapPos;

    fromWgs84(pos: MSFMapPos): MSFMapPos;

    getBounds(): MSFMapBounds;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getName(): string;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;

    toLatLongY(x: number, y: number): MSFMapPos;

    toWgs84(pos: MSFMapPos): MSFMapPos;
}

declare class MSFRasterTileClickInfo extends NSObject {
    static alloc(): MSFRasterTileClickInfo; // inherited from NSObject

    static new(): MSFRasterTileClickInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getClickInfo(): MSFClickInfo;

    getClickPos(): MSFMapPos;

    getClickType(): MSFClickType;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getInterpolatedColor(): MSFColor;

    getLayer(): MSFLayer;

    getMapTile(): MSFMapTile;

    getNearestColor(): MSFColor;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFRasterTileEventListener extends NSObject {
    static alloc(): MSFRasterTileEventListener; // inherited from NSObject

    static new(): MSFRasterTileEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFRasterTileEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onRasterTileClicked(clickInfo: MSFRasterTileClickInfo): boolean;

    onRasterTileClickedSwigExplicitNTRasterTileEventListener(clickInfo: MSFRasterTileClickInfo): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare const enum MSFRasterTileFilterMode {
    T_RASTER_TILE_FILTER_MODE_NEAREST = 0,

    T_RASTER_TILE_FILTER_MODE_BILINEAR = 1,

    T_RASTER_TILE_FILTER_MODE_BICUBIC = 2
}


declare const enum MSFHillshadeMethod {
    STANDARD = 0,

    COMBINED = 1,

    IGOR = 2,

    MULTIDIRECTIONAL = 3,

    BASIC = 4
}

declare class MSFRasterTileLayer extends MSFTileLayer {
    static alloc(): MSFRasterTileLayer; // inherited from NSObject

    static new(): MSFRasterTileLayer; // inherited from NSObject

    constructor(o: { dataSource: MSFTileDataSource });

    getRasterTileEventListener(): MSFRasterTileEventListener;

    getTextureCacheCapacity(): number;

    getTileBlendingSpeed(): number;

    getTileFilterMode(): MSFRasterTileFilterMode;

    initWithDataSource(dataSource: MSFTileDataSource): this;

    setRasterTileEventListener(eventListener: MSFRasterTileEventListener): void;

    setTextureCacheCapacity(capacityInBytes: number): void;

    setTileBlendingSpeed(speed: number): void;

    setTileFilterMode(filterMode: MSFRasterTileFilterMode): void;
}

declare class MSFRedrawRequestListener extends NSObject {
    static alloc(): MSFRedrawRequestListener; // inherited from NSObject

    static new(): MSFRedrawRequestListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFRedrawRequestListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onRedrawRequested(): void;

    onRedrawRequestedSwigExplicitNTRedrawRequestListener(): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare const enum MSFRenderProjectionMode {
    T_RENDER_PROJECTION_MODE_PLANAR = 0,

    T_RENDER_PROJECTION_MODE_SPHERICAL = 1
}

declare class MSFRendererCaptureListener extends NSObject {
    static alloc(): MSFRendererCaptureListener; // inherited from NSObject

    static new(): MSFRendererCaptureListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFRendererCaptureListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onMapRendered(bitmap: MSFBitmap): void;

    onMapRenderedSwigExplicitNTRendererCaptureListener(bitmap: MSFBitmap): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFReverseGeocodingRequest extends NSObject {
    static alloc(): MSFReverseGeocodingRequest; // inherited from NSObject

    static new(): MSFReverseGeocodingRequest; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { projection: MSFProjection; location: MSFMapPos });

    description(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getCustomParameter(param: string): MSFVariant;

    getLocation(): MSFMapPos;

    getProjection(): MSFProjection;

    getSearchRadius(): number;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithProjectionLocation(projection: MSFProjection, location: MSFMapPos): this;

    setCustomParameterValue(param: string, value: MSFVariant): void;

    setSearchRadius(radius: number): void;

    swigGetRawPtr(): number;
}

declare class MSFReverseGeocodingService extends NSObject {
    static alloc(): MSFReverseGeocodingService; // inherited from NSObject

    static new(): MSFReverseGeocodingService; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFReverseGeocodingService;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    calculateAddresses(request: MSFReverseGeocodingRequest): MSFGeocodingResultVector;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getLanguage(): string;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    setLanguage(lang: string): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFRouteMatchingEdge extends NSObject {
    static alloc(): MSFRouteMatchingEdge; // inherited from NSObject

    static new(): MSFRouteMatchingEdge; // inherited from NSObject

    constructor(o: { attributes: MSFStringVariantMap });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    containsAttribute(name: string): boolean;

    description(): string;

    getAttribute(name: string): MSFVariant;

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithAttributes(attributes: MSFStringVariantMap): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFRouteMatchingEdgeVector extends NSObject {
    static alloc(): MSFRouteMatchingEdgeVector; // inherited from NSObject

    static new(): MSFRouteMatchingEdgeVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFRouteMatchingEdge): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFRouteMatchingEdge;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFRouteMatchingEdge): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFRouteMatchingPoint extends NSObject {
    static alloc(): MSFRouteMatchingPoint; // inherited from NSObject

    static new(): MSFRouteMatchingPoint; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { pos: MSFMapPos; type: MSFRouteMatchingPointType; edgeIndex: number });

    description(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getEdgeIndex(): number;

    getPos(): MSFMapPos;

    getType(): MSFRouteMatchingPointType;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithPosTypeEdgeIndex(pos: MSFMapPos, type: MSFRouteMatchingPointType, edgeIndex: number): this;

    swigGetRawPtr(): number;
}

declare const enum MSFRouteMatchingPointType {
    T_ROUTE_MATCHING_POINT_UNMATCHED = 0,

    T_ROUTE_MATCHING_POINT_INTERPOLATED = 1,

    T_ROUTE_MATCHING_POINT_MATCHED = 2
}

declare class MSFRouteMatchingPointVector extends NSObject {
    static alloc(): MSFRouteMatchingPointVector; // inherited from NSObject

    static new(): MSFRouteMatchingPointVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFRouteMatchingPoint): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFRouteMatchingPoint;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFRouteMatchingPoint): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFRouteMatchingRequest extends NSObject {
    static alloc(): MSFRouteMatchingRequest; // inherited from NSObject

    static new(): MSFRouteMatchingRequest; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { projection: MSFProjection; points: MSFMapPosVector; accuracy: number });

    description(): string;

    getAccuracy(): number;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getCustomParameter(param: string): MSFVariant;

    getPointParameterParam(index: number, param: string): MSFVariant;

    getPoints(): MSFMapPosVector;

    getProjection(): MSFProjection;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithProjectionPointsAccuracy(projection: MSFProjection, points: MSFMapPosVector, accuracy: number): this;

    setCustomParameterValue(param: string, value: MSFVariant): void;

    setPointParameterParamValue(index: number, param: string, value: MSFVariant): void;

    swigGetRawPtr(): number;
}

declare class MSFRouteMatchingResult extends NSObject {
    static alloc(): MSFRouteMatchingResult; // inherited from NSObject

    static new(): MSFRouteMatchingResult; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { projection: MSFProjection; matchingPoints: MSFRouteMatchingPointVector; matchingEdges: MSFRouteMatchingEdgeVector; rawResult: string });

    description(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getMatchingEdges(): MSFRouteMatchingEdgeVector;

    getMatchingPoints(): MSFRouteMatchingPointVector;

    getPoints(): MSFMapPosVector;

    getProjection(): MSFProjection;

    getRawResult(): string;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithProjectionMatchingPointsMatchingEdgesRawResult(projection: MSFProjection, matchingPoints: MSFRouteMatchingPointVector, matchingEdges: MSFRouteMatchingEdgeVector, rawResult: string): this;

    swigGetRawPtr(): number;
}

declare const enum MSFRoutingAction {
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

    T_ROUTING_ACTION_WAIT = 16,

    T_ROUTING_ACTION_ENTER_FERRY = 17,

    T_ROUTING_ACTION_LEAVE_FERRY = 18
}

declare class MSFRoutingInstruction extends NSObject {
    static alloc(): MSFRoutingInstruction; // inherited from NSObject

    static new(): MSFRoutingInstruction; // inherited from NSObject

    constructor(o: {
        action: MSFRoutingAction;
        pointIndex: number;
        streetName: string;
        instruction: string;
        turnAngle: number;
        azimuth: number;
        distance: number;
        time: number;
        geometryTag: MSFVariant;
    });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    description(): string;

    getAction(): MSFRoutingAction;

    getAzimuth(): number;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getDistance(): number;

    getGeometryTag(): MSFVariant;

    getInstruction(): string;

    getPointIndex(): number;

    getStreetName(): string;

    getTime(): number;

    getTurnAngle(): number;

    hash(): number;

    initWithActionPointIndexStreetNameInstructionTurnAngleAzimuthDistanceTimeGeometryTag(
        action: MSFRoutingAction,
        pointIndex: number,
        streetName: string,
        instruction: string,
        turnAngle: number,
        azimuth: number,
        distance: number,
        time: number,
        geometryTag: MSFVariant
    ): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFRoutingInstructionVector extends NSObject {
    static alloc(): MSFRoutingInstructionVector; // inherited from NSObject

    static new(): MSFRoutingInstructionVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFRoutingInstruction): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFRoutingInstruction;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFRoutingInstruction): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFRoutingRequest extends NSObject {
    static alloc(): MSFRoutingRequest; // inherited from NSObject

    static new(): MSFRoutingRequest; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { projection: MSFProjection; points: MSFMapPosVector });

    description(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getCustomParameter(param: string): MSFVariant;

    getPointParameterParam(index: number, param: string): MSFVariant;

    getPoints(): MSFMapPosVector;

    getProjection(): MSFProjection;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithProjectionPoints(projection: MSFProjection, points: MSFMapPosVector): this;

    setCustomParameterValue(param: string, value: MSFVariant): void;

    setPointParameterParamValue(index: number, param: string, value: MSFVariant): void;

    swigGetRawPtr(): number;
}

declare class MSFRoutingResult extends NSObject {
    static alloc(): MSFRoutingResult; // inherited from NSObject

    static new(): MSFRoutingResult; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { projection: MSFProjection; points: MSFMapPosVector; instructions: MSFRoutingInstructionVector; rawResult: string });

    description(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getInstructions(): MSFRoutingInstructionVector;

    getPoints(): MSFMapPosVector;

    getProjection(): MSFProjection;

    getRawResult(): string;

    getTotalDistance(): number;

    getTotalTime(): number;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithProjectionPointsInstructionsRawResult(projection: MSFProjection, points: MSFMapPosVector, instructions: MSFRoutingInstructionVector, rawResult: string): this;

    swigGetRawPtr(): number;
}

declare class MSFRoutingService extends NSObject {
    static alloc(): MSFRoutingService; // inherited from NSObject

    static new(): MSFRoutingService; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFRoutingService;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    calculateRoute(request: MSFRoutingRequest): MSFRoutingResult;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getProfile(): string;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    matchRoute(request: MSFRouteMatchingRequest): MSFRouteMatchingResult;

    setProfile(profile: string): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFSGREOfflineRoutingService extends MSFRoutingService {
    static alloc(): MSFSGREOfflineRoutingService; // inherited from NSObject

    static new(): MSFSGREOfflineRoutingService; // inherited from NSObject

    constructor(o: { geoJSON: MSFVariant; config: MSFVariant });

    constructor(o: { projection: MSFProjection; featureCollection: MSFFeatureCollection; config: MSFVariant });

    calculateRouteSwigExplicitNTSGREOfflineRoutingService(request: MSFRoutingRequest): MSFRoutingResult;

    getProfileSwigExplicitNTSGREOfflineRoutingService(): string;

    getRoutingParameter(param: string): number;

    initWithGeoJSONConfig(geoJSON: MSFVariant, config: MSFVariant): this;

    initWithProjectionFeatureCollectionConfig(projection: MSFProjection, featureCollection: MSFFeatureCollection, config: MSFVariant): this;

    matchRouteSwigExplicitNTSGREOfflineRoutingService(request: MSFRouteMatchingRequest): MSFRouteMatchingResult;

    setProfileSwigExplicitNTSGREOfflineRoutingService(profile: string): void;

    setRoutingParameterValue(param: string, value: number): void;
}

declare class MSFScreenBounds extends NSObject {
    static alloc(): MSFScreenBounds; // inherited from NSObject

    static new(): MSFScreenBounds; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { min: MSFScreenPos; max: MSFScreenPos });

    containsBounds(bounds: MSFScreenBounds): boolean;

    containsPos(pos: MSFScreenPos): boolean;

    description(): string;

    getCenter(): MSFScreenPos;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getHeight(): number;

    getMax(): MSFScreenPos;

    getMin(): MSFScreenPos;

    getWidth(): number;

    hash(): number;

    hashInternal(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithMinMax(min: MSFScreenPos, max: MSFScreenPos): this;

    intersects(bounds: MSFScreenBounds): boolean;

    isEqualInternal(ScreenBounds: MSFScreenBounds): boolean;

    swigGetRawPtr(): number;
}

declare class MSFScreenPos extends NSObject {
    static alloc(): MSFScreenPos; // inherited from NSObject

    static new(): MSFScreenPos; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { x: number; y: number });

    description(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getX(): number;

    getY(): number;

    hash(): number;

    hashInternal(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithXY(x: number, y: number): this;

    isEqualInternal(p: MSFScreenPos): boolean;

    swigGetRawPtr(): number;
}

declare class MSFScreenPosVector extends NSObject {
    static alloc(): MSFScreenPosVector; // inherited from NSObject

    static new(): MSFScreenPosVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFScreenPos): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFScreenPos;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFScreenPos): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFSearchRequest extends NSObject {
    static alloc(): MSFSearchRequest; // inherited from NSObject

    static new(): MSFSearchRequest; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    description(): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getFilterExpression(): string;

    getGeometry(): MSFGeometry;

    getProjection(): MSFProjection;

    getRegexFilter(): string;

    getSearchRadius(): number;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    setFilterExpression(expr: string): void;

    setGeometry(geometry: MSFGeometry): void;

    setProjection(projection: MSFProjection): void;

    setRegexFilter(regex: string): void;

    setSearchRadius(radius: number): void;

    swigGetRawPtr(): number;
}

declare class MSFSolidLayer extends MSFLayer {
    static alloc(): MSFSolidLayer; // inherited from NSObject

    static new(): MSFSolidLayer; // inherited from NSObject

    constructor(o: { bitmap: MSFBitmap });

    constructor(o: { color: MSFColor });

    getBitmap(): MSFBitmap;

    getBitmapScale(): number;

    getColor(): MSFColor;

    initWithBitmap(bitmap: MSFBitmap): this;

    initWithColor(color: MSFColor): this;

    setBitmap(bitmap: MSFBitmap): void;

    setBitmapScale(scale: number): void;

    setColor(color: MSFColor): void;
}

declare class MSFStringCartoCSSStyleSetMap extends NSObject {
    static alloc(): MSFStringCartoCSSStyleSetMap; // inherited from NSObject

    static new(): MSFStringCartoCSSStyleSetMap; // inherited from NSObject

    constructor(o: { arg0: MSFStringCartoCSSStyleSetMap });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    clear(): void;

    del(key: string): void;

    empty(): boolean;

    get(key: string): MSFCartoCSSStyleSet;

    getCptr(): interop.Pointer | interop.Reference<any>;

    get_key(idx: number): string;

    has_key(key: string): boolean;

    initWithArg0(arg0: MSFStringCartoCSSStyleSetMap): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    setX(key: string, x: MSFCartoCSSStyleSet): void;

    size(): number;
}

declare class MSFStringMap extends NSObject {
    static alloc(): MSFStringMap; // inherited from NSObject

    static new(): MSFStringMap; // inherited from NSObject

    constructor(o: { arg0: MSFStringMap });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    clear(): void;

    del(key: string): void;

    empty(): boolean;

    get(key: string): string;

    getCptr(): interop.Pointer | interop.Reference<any>;

    get_key(idx: number): string;

    has_key(key: string): boolean;

    initWithArg0(arg0: MSFStringMap): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    setX(key: string, x: string): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFStringVariantMap extends NSObject {
    static alloc(): MSFStringVariantMap; // inherited from NSObject

    static new(): MSFStringVariantMap; // inherited from NSObject

    constructor(o: { arg0: MSFStringVariantMap });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    clear(): void;

    del(key: string): void;

    empty(): boolean;

    get(key: string): MSFVariant;

    getCptr(): interop.Pointer | interop.Reference<any>;

    get_key(idx: number): string;

    has_key(key: string): boolean;

    initWithArg0(arg0: MSFStringVariantMap): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    setX(key: string, x: MSFVariant): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFStringVector extends NSObject {
    static alloc(): MSFStringVector; // inherited from NSObject

    static new(): MSFStringVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

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

declare class MSFStyle extends NSObject {
    static alloc(): MSFStyle; // inherited from NSObject

    static new(): MSFStyle; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFStyle;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getColor(): MSFColor;

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFStyleBuilder extends NSObject {
    static alloc(): MSFStyleBuilder; // inherited from NSObject

    static new(): MSFStyleBuilder; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFStyleBuilder;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getColor(): MSFColor;

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    setColor(color: MSFColor): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFTerrariumElevationDataDecoder extends MSFElevationDecoder {
    static alloc(): MSFTerrariumElevationDataDecoder; // inherited from NSObject

    static new(): MSFTerrariumElevationDataDecoder; // inherited from NSObject
}

declare class MSFText extends MSFLabel {
    static alloc(): MSFText; // inherited from NSObject

    static new(): MSFText; // inherited from NSObject

    constructor(o: { baseBillboard: MSFBillboard; style: MSFTextStyle; text: string });

    constructor(o: { geometry: MSFGeometry; style: MSFTextStyle; text: string });

    constructor(o: { pos: MSFMapPos; style: MSFTextStyle; text: string });

    getStyle(): MSFTextStyle;

    getText(): string;

    initWithBaseBillboardStyleText(baseBillboard: MSFBillboard, style: MSFTextStyle, text: string): this;

    initWithGeometryStyleText(geometry: MSFGeometry, style: MSFTextStyle, text: string): this;

    initWithPosStyleText(pos: MSFMapPos, style: MSFTextStyle, text: string): this;

    setStyle(style: MSFTextStyle): void;

    setText(text: string): void;
}

declare class MSFTextMargins extends NSObject {
    static alloc(): MSFTextMargins; // inherited from NSObject

    static new(): MSFTextMargins; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { left: number; top: number; right: number; bottom: number });

    getBottom(): number;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getLeft(): number;

    getRight(): number;

    getTop(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithLeftTopRightBottom(left: number, top: number, right: number, bottom: number): this;

    swigGetRawPtr(): number;
}

declare class MSFTextStyle extends MSFLabelStyle {
    static alloc(): MSFTextStyle; // inherited from NSObject

    static new(): MSFTextStyle; // inherited from NSObject

    getBackgroundColor(): MSFColor;

    getBorderColor(): MSFColor;

    getBorderWidth(): number;

    getFontColor(): MSFColor;

    getFontName(): string;

    getFontSize(): number;

    getStrokeColor(): MSFColor;

    getStrokeWidth(): number;

    getTextField(): string;

    getTextMargins(): MSFTextMargins;

    isBreakLines(): boolean;
}

declare class MSFTextStyleBuilder extends MSFLabelStyleBuilder {
    static alloc(): MSFTextStyleBuilder; // inherited from NSObject

    static new(): MSFTextStyleBuilder; // inherited from NSObject

    buildStyle(): MSFTextStyle;

    getBackgroundColor(): MSFColor;

    getBorderColor(): MSFColor;

    getBorderWidth(): number;

    getFontName(): string;

    getFontSize(): number;

    getStrokeColor(): MSFColor;

    getStrokeWidth(): number;

    getTextField(): string;

    getTextMargins(): MSFTextMargins;

    isBreakLines(): boolean;

    setBackgroundColor(backgroundColor: MSFColor): void;

    setBorderColor(borderColor: MSFColor): void;

    setBorderWidth(borderWidth: number): void;

    setBreakLines(enable: boolean): void;

    setFontName(fontName: string): void;

    setFontSize(size: number): void;

    setStrokeColor(strokeColor: MSFColor): void;

    setStrokeWidth(strokeWidth: number): void;

    setTextField(field: string): void;

    setTextMargins(textMargins: MSFTextMargins): void;
}

declare class MSFTileData extends NSObject {
    static alloc(): MSFTileData; // inherited from NSObject

    static new(): MSFTileData; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { data: MSFBinaryData });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getData(): MSFBinaryData;

    getMaxAge(): number;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithData(data: MSFBinaryData): this;

    isOverZoom(): boolean;

    isReplaceWithParent(): boolean;

    setIsOverZoom(flag: boolean): void;

    setMaxAge(maxAge: number): void;

    setReplaceWithParent(flag: boolean): void;

    swigGetRawPtr(): number;
}

declare class MSFTileDataSource extends NSObject {
    static alloc(): MSFTileDataSource; // inherited from NSObject

    static new(): MSFTileDataSource; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFTileDataSource;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { minZoom: number; maxZoom: number });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getDataExtent(): MSFMapBounds;

    getDataExtentSwigExplicitNTTileDataSource(): MSFMapBounds;

    getMaxOverzoomLevel(): number;

    getMaxZoom(): number;

    getMaxZoomSwigExplicitNTTileDataSource(): number;

    getMaxZoomWithOverzoom(): number;

    getMaxZoomWithOverzoomSwigExplicitNTTileDataSource(): number;

    getMinZoom(): number;

    getMinZoomSwigExplicitNTTileDataSource(): number;

    getProjection(): MSFProjection;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithMinZoomMaxZoom(minZoom: number, maxZoom: number): this;

    isMaxOverzoomLevelSet(): boolean;

    loadTile(tile: MSFMapTile): MSFTileData;

    notifyTilesChanged(removeTiles: boolean): void;

    notifyTilesChangedSwigExplicitNTTileDataSource(removeTiles: boolean): void;

    setMaxOverzoomLevel(overzoomLevel: number): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFTileDownloadListener extends NSObject {
    static alloc(): MSFTileDownloadListener; // inherited from NSObject

    static new(): MSFTileDownloadListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFTileDownloadListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onDownloadCompleted(): void;

    onDownloadCompletedSwigExplicitNTTileDownloadListener(): void;

    onDownloadFailed(tile: MSFMapTile): void;

    onDownloadFailedSwigExplicitNTTileDownloadListener(tile: MSFMapTile): void;

    onDownloadProgress(progress: number): void;

    onDownloadProgressSwigExplicitNTTileDownloadListener(progress: number): void;

    onDownloadStarting(tileCount: number): void;

    onDownloadStartingSwigExplicitNTTileDownloadListener(tileCount: number): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFTileLayer extends MSFLayer {
    static alloc(): MSFTileLayer; // inherited from NSObject

    static new(): MSFTileLayer; // inherited from NSObject

    calculateMapTileBounds(mapTile: MSFMapTile): MSFMapBounds;

    calculateMapTileOrigin(mapTile: MSFMapTile): MSFMapPos;

    calculateMapTileZoom(mapPos: MSFMapPos, zoom: number): MSFMapTile;

    clearTileCaches(all: boolean): void;

    getDataSource(): MSFTileDataSource;

    getFrameNr(): number;

    getMaxOverzoomLevel(): number;

    getMaxUnderzoomLevel(): number;

    getTileLoadListener(): MSFTileLoadListener;

    getTileSubstitutionPolicy(): MSFTileSubstitutionPolicy;

    getUTFGridDataSource(): MSFTileDataSource;

    getUTFGridEventListener(): MSFUTFGridEventListener;

    getZoomLevelBias(): number;

    isPreloading(): boolean;

    isSynchronizedRefresh(): boolean;

    setFrameNr(frameNr: number): void;

    setMaxOverzoomLevel(overzoomLevel: number): void;

    setMaxUnderzoomLevel(underzoomLevel: number): void;

    setPreloading(preloading: boolean): void;

    setSynchronizedRefresh(synchronizedRefresh: boolean): void;

    setTileLoadListener(tileLoadListener: MSFTileLoadListener): void;

    setTileSubstitutionPolicy(policy: MSFTileSubstitutionPolicy): void;

    setUTFGridDataSource(dataSource: MSFTileDataSource): void;

    setUTFGridEventListener(utfGridEventListener: MSFUTFGridEventListener): void;

    setZoomLevelBias(bias: number): void;
}

declare class MSFTileLoadListener extends NSObject {
    static alloc(): MSFTileLoadListener; // inherited from NSObject

    static new(): MSFTileLoadListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFTileLoadListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

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

declare const enum MSFTileSubstitutionPolicy {
    T_TILE_SUBSTITUTION_POLICY_ALL = 0,

    T_TILE_SUBSTITUTION_POLICY_VISIBLE = 1,

    T_TILE_SUBSTITUTION_POLICY_NONE = 2
}

declare class MSFTileUtils extends NSObject {
    static alloc(): MSFTileUtils; // inherited from NSObject

    static calculateClippedMapTileZoomProj(mapPos: MSFMapPos, zoom: number, proj: MSFProjection): MSFMapTile;

    static calculateMapTileBoundsProj(mapTile: MSFMapTile, proj: MSFProjection): MSFMapBounds;

    static calculateMapTileOriginProj(mapTile: MSFMapTile, proj: MSFProjection): MSFMapPos;

    static calculateMapTileZoomProj(mapPos: MSFMapPos, zoom: number, proj: MSFProjection): MSFMapTile;

    static new(): MSFTileUtils; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;
}

declare class MSFTomTomOnlineGeocodingService extends MSFGeocodingService {
    static alloc(): MSFTomTomOnlineGeocodingService; // inherited from NSObject

    static new(): MSFTomTomOnlineGeocodingService; // inherited from NSObject

    constructor(o: { apiKey: string });

    calculateAddressesSwigExplicitNTTomTomOnlineGeocodingService(request: MSFGeocodingRequest): MSFGeocodingResultVector;

    getCustomServiceURL(): string;

    getLanguageSwigExplicitNTTomTomOnlineGeocodingService(): string;

    getMaxResultsSwigExplicitNTTomTomOnlineGeocodingService(): number;

    initWithApiKey(apiKey: string): this;

    isAutocompleteSwigExplicitNTTomTomOnlineGeocodingService(): boolean;

    setAutocompleteSwigExplicitNTTomTomOnlineGeocodingService(autocomplete: boolean): void;

    setCustomServiceURL(serviceURL: string): void;

    setLanguageSwigExplicitNTTomTomOnlineGeocodingService(lang: string): void;

    setMaxResultsSwigExplicitNTTomTomOnlineGeocodingService(maxResults: number): void;
}

declare class MSFTomTomOnlineReverseGeocodingService extends MSFReverseGeocodingService {
    static alloc(): MSFTomTomOnlineReverseGeocodingService; // inherited from NSObject

    static new(): MSFTomTomOnlineReverseGeocodingService; // inherited from NSObject

    constructor(o: { apiKey: string });

    calculateAddressesSwigExplicitNTTomTomOnlineReverseGeocodingService(request: MSFReverseGeocodingRequest): MSFGeocodingResultVector;

    getCustomServiceURL(): string;

    getLanguageSwigExplicitNTTomTomOnlineReverseGeocodingService(): string;

    initWithApiKey(apiKey: string): this;

    setCustomServiceURL(serviceURL: string): void;

    setLanguageSwigExplicitNTTomTomOnlineReverseGeocodingService(lang: string): void;
}

declare class MSFTorqueTileDecoder extends MSFVectorTileDecoder {
    static alloc(): MSFTorqueTileDecoder; // inherited from NSObject

    static new(): MSFTorqueTileDecoder; // inherited from NSObject

    constructor(o: { styleSet: MSFCartoCSSStyleSet });

    getAnimationDuration(): number;

    getFrameCount(): number;

    getResolution(): number;

    getStyleSet(): MSFCartoCSSStyleSet;

    initWithStyleSet(styleSet: MSFCartoCSSStyleSet): this;

    setStyleSet(styleSet: MSFCartoCSSStyleSet): void;
}

declare class MSFTorqueTileLayer extends MSFVectorTileLayer {
    static alloc(): MSFTorqueTileLayer; // inherited from NSObject

    static new(): MSFTorqueTileLayer; // inherited from NSObject

    constructor(o: { dataSource: MSFTileDataSource; decoder: MSFTorqueTileDecoder });

    countVisibleFeatures(frameNr: number): number;

    initWithDataSourceDecoder(dataSource: MSFTileDataSource, decoder: MSFTorqueTileDecoder): this;
}

declare class MSFUTFGridClickInfo extends NSObject {
    static alloc(): MSFUTFGridClickInfo; // inherited from NSObject

    static new(): MSFUTFGridClickInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getClickInfo(): MSFClickInfo;

    getClickPos(): MSFMapPos;

    getClickType(): MSFClickType;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getElementInfo(): MSFVariant;

    getLayer(): MSFLayer;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFUTFGridEventListener extends NSObject {
    static alloc(): MSFUTFGridEventListener; // inherited from NSObject

    static new(): MSFUTFGridEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFUTFGridEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onUTFGridClicked(clickInfo: MSFUTFGridClickInfo): boolean;

    onUTFGridClickedSwigExplicitNTUTFGridEventListener(clickInfo: MSFUTFGridClickInfo): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFValhallaOfflineRoutingService extends MSFRoutingService {
    static alloc(): MSFValhallaOfflineRoutingService; // inherited from NSObject

    static new(): MSFValhallaOfflineRoutingService; // inherited from NSObject

    constructor(o: { path: string });

    addLocaleJson(key: string, json: string): void;

    calculateRouteSwigExplicitNTValhallaOfflineRoutingService(request: MSFRoutingRequest): MSFRoutingResult;

    getConfigurationParameter(param: string): MSFVariant;

    getProfileSwigExplicitNTValhallaOfflineRoutingService(): string;

    initWithPath(path: string): this;

    matchRouteSwigExplicitNTValhallaOfflineRoutingService(request: MSFRouteMatchingRequest): MSFRouteMatchingResult;

    setConfigurationParameterValue(param: string, value: MSFVariant): void;

    setProfileSwigExplicitNTValhallaOfflineRoutingService(profile: string): void;
}

declare class MSFValhallaOnlineRoutingService extends MSFRoutingService {
    static alloc(): MSFValhallaOnlineRoutingService; // inherited from NSObject

    static new(): MSFValhallaOnlineRoutingService; // inherited from NSObject

    constructor(o: { apiKey: string });

    calculateRouteSwigExplicitNTValhallaOnlineRoutingService(request: MSFRoutingRequest): MSFRoutingResult;

    getCustomServiceURL(): string;

    getProfileSwigExplicitNTValhallaOnlineRoutingService(): string;

    initWithApiKey(apiKey: string): this;

    matchRouteSwigExplicitNTValhallaOnlineRoutingService(request: MSFRouteMatchingRequest): MSFRouteMatchingResult;

    setCustomServiceURL(serviceURL: string): void;

    setHTTPHeaders(headers: MSFStringMap): void;

    setProfileSwigExplicitNTValhallaOnlineRoutingService(profile: string): void;
}

declare class MSFVariant extends NSObject {
    static alloc(): MSFVariant; // inherited from NSObject

    static fromString(str: string): MSFVariant;

    static new(): MSFVariant; // inherited from NSObject

    constructor(o: { array: MSFVariantVector });

    constructor(o: { boolVal: boolean });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { doubleVal: number });

    constructor(o: { longVal: number });

    constructor(o: { object: MSFStringVariantMap });

    constructor(o: { str: string });

    containsObjectKey(key: string): boolean;

    description(): string;

    getArrayElement(idx: number): MSFVariant;

    getArraySize(): number;

    getBool(): boolean;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getDouble(): number;

    getLong(): number;

    getObjectElement(key: string): MSFVariant;

    getObjectKeys(): MSFStringVector;

    getString(): string;

    getType(): MSFVariantType;

    hash(): number;

    hashInternal(): number;

    initWithArray(array: MSFVariantVector): this;

    initWithBoolVal(boolVal: boolean): this;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithDoubleVal(doubleVal: number): this;

    initWithLongVal(longVal: number): this;

    initWithObject(object: MSFStringVariantMap): this;

    initWithString(str: string): this;

    isEqualInternal(varnt: MSFVariant): boolean;

    swigGetRawPtr(): number;
}

declare class MSFVariantArrayBuilder extends NSObject {
    static alloc(): MSFVariantArrayBuilder; // inherited from NSObject

    static new(): MSFVariantArrayBuilder; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    addBool(val: boolean): void;

    addDouble(val: number): void;

    addLong(val: number): void;

    addString(str: string): void;

    addVariant(varnt: MSFVariant): void;

    buildVariant(): MSFVariant;

    clear(): void;

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFVariantObjectBuilder extends NSObject {
    static alloc(): MSFVariantObjectBuilder; // inherited from NSObject

    static new(): MSFVariantObjectBuilder; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    buildVariant(): MSFVariant;

    clear(): void;

    getCptr(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    setBoolVal(key: string, val: boolean): void;

    setDoubleVal(key: string, val: number): void;

    setLongVal(key: string, val: number): void;

    setStringStr(key: string, str: string): void;

    setVariantVar(key: string, varnt: MSFVariant): void;

    swigGetRawPtr(): number;
}

declare const enum MSFVariantType {
    T_VARIANT_TYPE_NULL = 0,

    T_VARIANT_TYPE_STRING = 1,

    T_VARIANT_TYPE_BOOL = 2,

    T_VARIANT_TYPE_INTEGER = 3,

    T_VARIANT_TYPE_DOUBLE = 4,

    T_VARIANT_TYPE_ARRAY = 5,

    T_VARIANT_TYPE_OBJECT = 6
}

declare class MSFVariantVector extends NSObject {
    static alloc(): MSFVariantVector; // inherited from NSObject

    static new(): MSFVariantVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFVariant): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFVariant;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFVariant): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFVectorData extends NSObject {
    static alloc(): MSFVectorData; // inherited from NSObject

    static new(): MSFVectorData; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { elements: MSFVectorElementVector });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getElements(): MSFVectorElementVector;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithElements(elements: MSFVectorElementVector): this;

    swigGetRawPtr(): number;
}

declare class MSFVectorDataSource extends NSObject {
    static alloc(): MSFVectorDataSource; // inherited from NSObject

    static new(): MSFVectorDataSource; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorDataSource;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { projection: MSFProjection });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getDataExtent(): MSFMapBounds;

    getDataExtentSwigExplicitNTVectorDataSource(): MSFMapBounds;

    getProjection(): MSFProjection;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithProjection(projection: MSFProjection): this;

    loadElements(cullState: MSFCullState): MSFVectorData;

    notifyElementsChanged(): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFVectorEditEventListener extends NSObject {
    static alloc(): MSFVectorEditEventListener; // inherited from NSObject

    static new(): MSFVectorEditEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorEditEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onDragEnd(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onDragEndSwigExplicitNTVectorEditEventListener(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onDragMove(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onDragMoveSwigExplicitNTVectorEditEventListener(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onDragStart(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onDragStartSwigExplicitNTVectorEditEventListener(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onElementDelete(element: MSFVectorElement): void;

    onElementDeselected(element: MSFVectorElement): void;

    onElementDeselectedSwigExplicitNTVectorEditEventListener(element: MSFVectorElement): void;

    onElementModifyGeometry(element: MSFVectorElement, geometry: MSFGeometry): void;

    onElementSelect(element: MSFVectorElement): boolean;

    onElementSelectSwigExplicitNTVectorEditEventListener(element: MSFVectorElement): boolean;

    onSelectDragPointStyleDragPointStyle(element: MSFVectorElement, dragPointStyle: MSFVectorElementDragPointStyle): MSFPointStyle;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFVectorElement extends NSObject {
    static alloc(): MSFVectorElement; // inherited from NSObject

    static new(): MSFVectorElement; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorElement;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    containsMetaDataKey(key: string): boolean;

    getBounds(): MSFMapBounds;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getGeometry(): MSFGeometry;

    getId(): number;

    getMetaData(): MSFStringVariantMap;

    getMetaDataElement(key: string): MSFVariant;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isVisible(): boolean;

    notifyElementChanged(): void;

    setId(arg1: number): void;

    setMetaData(metaData: MSFStringVariantMap): void;

    setMetaDataElementElement(key: string, element: MSFVariant): void;

    setVisible(visible: boolean): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFVectorElementClickInfo extends NSObject {
    static alloc(): MSFVectorElementClickInfo; // inherited from NSObject

    static new(): MSFVectorElementClickInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getClickInfo(): MSFClickInfo;

    getClickPos(): MSFMapPos;

    getClickType(): MSFClickType;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getElementClickPos(): MSFMapPos;

    getLayer(): MSFLayer;

    getVectorElement(): MSFVectorElement;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFVectorElementDragInfo extends NSObject {
    static alloc(): MSFVectorElementDragInfo; // inherited from NSObject

    static new(): MSFVectorElementDragInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getDragMode(): MSFVectorElementDragMode;

    getMapPos(): MSFMapPos;

    getScreenPos(): MSFScreenPos;

    getVectorElement(): MSFVectorElement;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare const enum MSFVectorElementDragMode {
    T_VECTOR_ELEMENT_DRAG_MODE_VERTEX = 0,

    T_VECTOR_ELEMENT_DRAG_MODE_ELEMENT = 1
}

declare const enum MSFVectorElementDragPointStyle {
    T_VECTOR_ELEMENT_DRAG_POINT_STYLE_NORMAL = 0,

    T_VECTOR_ELEMENT_DRAG_POINT_STYLE_VIRTUAL = 1,

    T_VECTOR_ELEMENT_DRAG_POINT_STYLE_SELECTED = 2
}

declare const enum MSFVectorElementDragResult {
    T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE = 0,

    T_VECTOR_ELEMENT_DRAG_RESULT_STOP = 1,

    T_VECTOR_ELEMENT_DRAG_RESULT_MODIFY = 2,

    T_VECTOR_ELEMENT_DRAG_RESULT_DELETE = 3
}

declare class MSFVectorElementEventListener extends NSObject {
    static alloc(): MSFVectorElementEventListener; // inherited from NSObject

    static new(): MSFVectorElementEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorElementEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onVectorElementClicked(clickInfo: MSFVectorElementClickInfo): boolean;

    onVectorElementClickedSwigExplicitNTVectorElementEventListener(clickInfo: MSFVectorElementClickInfo): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFVectorElementSearchService extends NSObject {
    static alloc(): MSFVectorElementSearchService; // inherited from NSObject

    static new(): MSFVectorElementSearchService; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorElementSearchService;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { dataSource: MSFVectorDataSource });

    findElements(request: MSFSearchRequest): MSFVectorElementVector;

    findElementsSwigExplicitNTVectorElementSearchService(request: MSFSearchRequest): MSFVectorElementVector;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getDataSource(): MSFVectorDataSource;

    getMaxResults(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithDataSource(dataSource: MSFVectorDataSource): this;

    setMaxResults(maxResults: number): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFVectorElementVector extends NSObject {
    static alloc(): MSFVectorElementVector; // inherited from NSObject

    static new(): MSFVectorElementVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFVectorElement): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFVectorElement;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFVectorElement): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFVectorLayer extends MSFLayer {
    static alloc(): MSFVectorLayer; // inherited from NSObject

    static new(): MSFVectorLayer; // inherited from NSObject

    constructor(o: { dataSource: MSFVectorDataSource });

    getDataSource(): MSFVectorDataSource;

    getVectorElementEventListener(): MSFVectorElementEventListener;

    initWithDataSource(dataSource: MSFVectorDataSource): this;

    isZBuffering(): boolean;

    setVectorElementEventListener(eventListener: MSFVectorElementEventListener): void;

    setZBuffering(enabled: boolean): void;
}

declare class MSFVectorTileClickInfo extends NSObject {
    static alloc(): MSFVectorTileClickInfo; // inherited from NSObject

    static new(): MSFVectorTileClickInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getClickInfo(): MSFClickInfo;

    getClickPos(): MSFMapPos;

    getClickType(): MSFClickType;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getFeature(): MSFVectorTileFeature;

    getFeatureClickPos(): MSFMapPos;

    getFeatureId(): number;

    getFeatureLayerName(): string;

    getFeaturePosIndex(): number;

    getLayer(): MSFLayer;

    getMapTile(): MSFMapTile;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    swigGetRawPtr(): number;
}

declare class MSFVectorTileDecoder extends NSObject {
    static alloc(): MSFVectorTileDecoder; // inherited from NSObject

    static new(): MSFVectorTileDecoder; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorTileDecoder;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    addFallbackFont(fontData: MSFBinaryData): void;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getMaxZoom(): number;

    getMinZoom(): number;

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    notifyDecoderChanged(): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFVectorTileEventListener extends NSObject {
    static alloc(): MSFVectorTileEventListener; // inherited from NSObject

    static new(): MSFVectorTileEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorTileEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    onVectorTileClicked(clickInfo: MSFVectorTileClickInfo): boolean;

    onVectorTileClickedSwigExplicitNTVectorTileEventListener(clickInfo: MSFVectorTileClickInfo): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFVectorTileFeature extends MSFFeature {
    static alloc(): MSFVectorTileFeature; // inherited from NSObject

    static new(): MSFVectorTileFeature; // inherited from NSObject

    constructor(o: { arg0: number; mapTile: MSFMapTile; layerName: string; geometry: MSFGeometry; properties: MSFVariant });

    getDistance(): number;

    getId(): number;

    getLayerName(): string;

    getMapTile(): MSFMapTile;

    initWithArg0MapTileLayerNameGeometryProperties(arg0: number, mapTile: MSFMapTile, layerName: string, geometry: MSFGeometry, properties: MSFVariant): this;

    setDistance(value: number): void;
}

declare class MSFVectorTileFeatureCollection extends MSFFeatureCollection {
    static alloc(): MSFVectorTileFeatureCollection; // inherited from NSObject

    static new(): MSFVectorTileFeatureCollection; // inherited from NSObject

    constructor(o: { features: MSFVectorTileFeatureVector });

    getFeature(index: number): MSFVectorTileFeature;

    initWithFeatures(features: MSFVectorTileFeatureVector): this;
}

declare class MSFVectorTileFeatureVector extends NSObject {
    static alloc(): MSFVectorTileFeatureVector; // inherited from NSObject

    static new(): MSFVectorTileFeatureVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    add(x: MSFVectorTileFeature): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFVectorTileFeature;

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFVectorTileFeature): void;

    size(): number;

    swigGetRawPtr(): number;
}

declare class MSFVectorTileLayer extends MSFTileLayer {
    static alloc(): MSFVectorTileLayer; // inherited from NSObject

    static new(): MSFVectorTileLayer; // inherited from NSObject

    constructor(o: { dataSource: MSFTileDataSource; decoder: MSFVectorTileDecoder });

    getBuildingRenderOrder(): MSFVectorTileRenderOrder;

    getClickHandlerLayerFilter(): string;

    getClickRadius(): number;

    getLabelBlendingSpeed(): number;

    getLabelRenderOrder(): MSFVectorTileRenderOrder;

    getLayerBlendingSpeed(): number;

    getRendererLayerFilter(): string;

    getTileCacheCapacity(): number;

    getTileDecoder(): MSFVectorTileDecoder;

    getVectorTileEventListener(): MSFVectorTileEventListener;

    initWithDataSourceDecoder(dataSource: MSFTileDataSource, decoder: MSFVectorTileDecoder): this;

    setBuildingRenderOrder(renderOrder: MSFVectorTileRenderOrder): void;

    setClickHandlerLayerFilter(filter: string): void;

    setClickRadius(radius: number): void;

    setLabelBlendingSpeed(speed: number): void;

    setLabelRenderOrder(renderOrder: MSFVectorTileRenderOrder): void;

    setLayerBlendingSpeed(speed: number): void;

    setRendererLayerFilter(filter: string): void;

    setTileCacheCapacity(capacityInBytes: number): void;

    setVectorTileEventListener(eventListener: MSFVectorTileEventListener): void;
}

declare const enum MSFVectorTileRenderOrder {
    T_VECTOR_TILE_RENDER_ORDER_HIDDEN = -1,

    T_VECTOR_TILE_RENDER_ORDER_LAYER = 0,

    T_VECTOR_TILE_RENDER_ORDER_LAST = 1
}

declare class MSFVectorTileSearchService extends NSObject {
    static alloc(): MSFVectorTileSearchService; // inherited from NSObject

    static new(): MSFVectorTileSearchService; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorTileSearchService;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    constructor(o: { dataSource: MSFTileDataSource; tileDecoder: MSFVectorTileDecoder });

    findFeatures(request: MSFSearchRequest): MSFVectorTileFeatureCollection;

    findFeaturesSwigExplicitNTVectorTileSearchService(request: MSFSearchRequest): MSFVectorTileFeatureCollection;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getDataSource(): MSFTileDataSource;

    getLayers(): MSFStringVector;

    getMaxResults(): number;

    getMaxZoom(): number;

    getMinZoom(): number;

    getPreventDuplicates(): boolean;

    getSortByDistance(): boolean;

    getTileDecoder(): MSFVectorTileDecoder;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    initWithDataSourceTileDecoder(dataSource: MSFTileDataSource, tileDecoder: MSFVectorTileDecoder): this;

    setLayers(layers: MSFStringVector): void;

    setMaxResults(maxResults: number): void;

    setMaxZoom(maxZoom: number): void;

    setMinZoom(minZoom: number): void;

    setPreventDuplicates(preventDuplicates: boolean): void;

    setSortByDistance(sortByDistance: boolean): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    swigGetRawPtr(): number;
}

declare class MSFViewState extends NSObject {
    static alloc(): MSFViewState; // inherited from NSObject

    static new(): MSFViewState; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

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

    hash(): number;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    isCameraChanged(): boolean;

    swigGetRawPtr(): number;
}

declare class MSFWKBGeometryReader extends NSObject {
    static alloc(): MSFWKBGeometryReader; // inherited from NSObject

    static new(): MSFWKBGeometryReader; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    readGeometry(wkbData: MSFBinaryData): MSFGeometry;
}

declare class MSFWKBGeometryWriter extends NSObject {
    static alloc(): MSFWKBGeometryWriter; // inherited from NSObject

    static new(): MSFWKBGeometryWriter; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getBigEndian(): boolean;

    getCptr(): interop.Pointer | interop.Reference<any>;

    getZ(): boolean;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    setBigEndian(bigEndian: boolean): void;

    setZ(z: boolean): void;

    writeGeometry(geometry: MSFGeometry): MSFBinaryData;
}

declare class MSFWKTGeometryReader extends NSObject {
    static alloc(): MSFWKTGeometryReader; // inherited from NSObject

    static new(): MSFWKTGeometryReader; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    readGeometry(wkt: string): MSFGeometry;
}

declare class MSFWKTGeometryWriter extends NSObject {
    static alloc(): MSFWKTGeometryWriter; // inherited from NSObject

    static new(): MSFWKTGeometryWriter; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean });

    getCptr(): interop.Pointer | interop.Reference<any>;

    getZ(): boolean;

    initWithCptrSwigOwnCObject(cptr: interop.Pointer | interop.Reference<any>, ownCObject: boolean): this;

    setZ(z: boolean): void;

    writeGeometry(geometry: MSFGeometry): string;
}

declare class MSFZippedAssetPackage extends MSFAssetPackage {
    static alloc(): MSFZippedAssetPackage; // inherited from NSObject

    static new(): MSFZippedAssetPackage; // inherited from NSObject

    constructor(o: { zipData: MSFBinaryData });

    constructor(o: { zipData: MSFBinaryData; baseAssetPackage: MSFAssetPackage });

    getLocalAssetNames(): MSFStringVector;

    initWithZipData(zipData: MSFBinaryData): this;

    initWithZipDataBaseAssetPackage(zipData: MSFBinaryData, baseAssetPackage: MSFAssetPackage): this;
}
