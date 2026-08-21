/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run typings.android` / `npm run typings.ios`.


declare class MGLContext extends NSObject {

    static alloc(): MGLContext; // inherited from NSObject

    static currentContext(): MGLContext;

    static currentLayer(): MGLLayer;

    static new(): MGLContext; // inherited from NSObject

    static setCurrentContext(context: MGLContext): boolean;

    static setCurrentContextForLayer(context: MGLContext, layer: MGLLayer): boolean;

    readonly API: MGLRenderingAPI;

    readonly eglDisplay: interop.Pointer | interop.Reference<any>;

    readonly sharegroup: MGLSharegroup;

    constructor(o: { API: MGLRenderingAPI; });

    constructor(o: { API: MGLRenderingAPI; sharegroup: MGLSharegroup; });

    initWithAPI(api: MGLRenderingAPI): this;

    initWithAPISharegroup(api: MGLRenderingAPI, sharegroup: MGLSharegroup): this;

    present(layer: MGLLayer): boolean;
}

declare const enum MGLDrawableColorFormat {

    RGBA8888 = 32,

    SRGBA8888 = -32,

    RGB565 = 16
}

declare const enum MGLDrawableDepthFormat {

    FormatNone = 0,

    Format16 = 16,

    Format24 = 24
}

declare const enum MGLDrawableMultisample {

    MultisampleNone = 0,

    Multisample4X = 4
}

declare const enum MGLDrawableStencilFormat {

    FormatNone = 0,

    Format8 = 8
}

declare class MGLKView extends UIView {

    static alloc(): MGLKView; // inherited from NSObject

    static appearance(): MGLKView; // inherited from UIAppearance

    /**
     * @since 8.0
     */
    static appearanceForTraitCollection(trait: UITraitCollection): MGLKView; // inherited from UIAppearance

    /**
     * @since 8.0
     * @deprecated 9.0
     */
    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MGLKView; // inherited from UIAppearance

    /**
     * @since 9.0
     */
    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MGLKView; // inherited from UIAppearance

    /**
     * @since 5.0
     * @deprecated 9.0
     */
    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MGLKView; // inherited from UIAppearance

    /**
     * @since 9.0
     */
    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MGLKView; // inherited from UIAppearance

    static new(): MGLKView; // inherited from NSObject

    context: MGLContext;

    readonly defaultOpenGLFrameBufferID: number;

    delegate: MGLKViewDelegate;

    drawableColorFormat: MGLDrawableColorFormat;

    drawableDepthFormat: MGLDrawableDepthFormat;

    readonly drawableHeight: number;

    drawableMultisample: MGLDrawableMultisample;

    readonly drawableSize: CGSize;

    drawableStencilFormat: MGLDrawableStencilFormat;

    readonly drawableWidth: number;

    enableSetNeedsDisplay: boolean;

    readonly glLayer: MGLLayer;

    retainedBacking: boolean;

    readonly snapshot: UIImage;

    constructor(o: { frame: CGRect; context: MGLContext; });

    bindDrawable(): void;

    display(): void;

    initWithFrameContext(frame: CGRect, context: MGLContext): this;
}

declare class MGLKViewController extends UIViewController implements MGLKViewDelegate {

    static alloc(): MGLKViewController; // inherited from NSObject

    static new(): MGLKViewController; // inherited from NSObject

    delegate: MGLKViewControllerDelegate;

    readonly framesDisplayed: number;

    readonly glView: MGLKView;

    pauseOnWillResignActive: boolean;

    paused: boolean;

    preferredFramesPerSecond: number;

    resumeOnDidBecomeActive: boolean;

    readonly timeSinceLastUpdate: number;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly  // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    mglkViewDrawInRect(view: MGLKView, rect: CGRect): void;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

interface MGLKViewControllerDelegate extends NSObjectProtocol {

    mglkViewControllerUpdate(controller: MGLKViewController): void;
}
declare var MGLKViewControllerDelegate: {  prototype: MGLKViewControllerDelegate; };

interface MGLKViewDelegate extends NSObjectProtocol {

    mglkViewDrawInRect(view: MGLKView, rect: CGRect): void;
}
declare var MGLKViewDelegate: {  prototype: MGLKViewDelegate; };

declare class MGLLayer extends CALayer {

    static alloc(): MGLLayer; // inherited from NSObject

    static layer(): MGLLayer; // inherited from CALayer

    static new(): MGLLayer; // inherited from NSObject

    readonly defaultOpenGLFrameBufferID: number;

    drawableColorFormat: MGLDrawableColorFormat;

    drawableDepthFormat: MGLDrawableDepthFormat;

    drawableMultisample: MGLDrawableMultisample;

    readonly drawableSize: CGSize;

    drawableStencilFormat: MGLDrawableStencilFormat;

    retainedBacking: boolean;

    bindDefaultFrameBuffer(): void;

    present(): boolean;
}

declare const enum MGLRenderingAPI {

    kMGLRenderingAPIOpenGLES1 = 1,

    kMGLRenderingAPIOpenGLES2 = 2,

    kMGLRenderingAPIOpenGLES3 = 3
}

declare class MGLSharegroup extends NSObject {

    static alloc(): MGLSharegroup; // inherited from NSObject

    static new(): MGLSharegroup; // inherited from NSObject
}

declare class MSFAddress extends NSObject {

    static alloc(): MSFAddress; // inherited from NSObject

    static new(): MSFAddress; // inherited from NSObject

    constructor(o: { country: string; region: string; county: string; locality: string; neighbourhood: string; street: string; postcode: string; houseNumber: string; name: string; categories: MSFStringVector; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    description(): string;

    getCategories(): MSFStringVector;

    getCountry(): string;

    getCounty(): string;

    getHouseNumber(): string;

    getLocality(): string;

    getName(): string;

    getNeighbourhood(): string;

    getPostcode(): string;

    getRegion(): string;

    getStreet(): string;

    hash(): number;

    hashInternal(): number;

    initWithCountryRegionCountyLocalityNeighbourhoodStreetPostcodeHouseNumberNameCategories(country: string, region: string, county: string, locality: string, neighbourhood: string, street: string, postcode: string, houseNumber: string, name: string, categories: MSFStringVector): this;

    isEqualInternal(address: MSFAddress): boolean;
}

declare class MSFAnimationStyle extends NSObject {

    static alloc(): MSFAnimationStyle; // inherited from NSObject

    static new(): MSFAnimationStyle; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFAnimationStyle;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getFadeAnimationType(): MSFAnimationType;

    getPhaseInDuration(): number;

    getPhaseOutDuration(): number;

    getRelativeSpeed(): number;

    getSizeAnimationType(): MSFAnimationType;

    hash(): number;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFAnimationStyleBuilder extends NSObject {

    static alloc(): MSFAnimationStyleBuilder; // inherited from NSObject

    static new(): MSFAnimationStyleBuilder; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFAnimationStyleBuilder;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    buildStyle(): MSFAnimationStyle;

    getFadeAnimationType(): MSFAnimationType;

    getPhaseInDuration(): number;

    getPhaseOutDuration(): number;

    getRelativeSpeed(): number;

    getSizeAnimationType(): MSFAnimationType;

    setFadeAnimationType(animType: MSFAnimationType): void;

    setPhaseInDuration(duration: number): void;

    setPhaseOutDuration(duration: number): void;

    setRelativeSpeed(relativeSpeed: number): void;

    setSizeAnimationType(animType: MSFAnimationType): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare const enum MSFAnimationType {

    F_ANIMATION_TYPE_NONE = 0,

    F_ANIMATION_TYPE_STEP = 1,

    F_ANIMATION_TYPE_LINEAR = 2,

    F_ANIMATION_TYPE_SMOOTHSTEP = 3,

    F_ANIMATION_TYPE_SPRING = 4
}

declare class MSFAssetPackage extends NSObject {

    static alloc(): MSFAssetPackage; // inherited from NSObject

    static new(): MSFAssetPackage; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFAssetPackage;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getAssetNames(): MSFStringVector;

    hash(): number;

    loadAsset(name: string): MSFBinaryData;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFAssetTileDataSource extends MSFTileDataSource {

    static alloc(): MSFAssetTileDataSource; // inherited from NSObject

    static new(): MSFAssetTileDataSource; // inherited from NSObject

    constructor(o: { minZoom: number; maxZoom: number; basePath: string; });

    buildAssetPathTile(basePath: string, tile: MSFMapTile): string;

    initWithMinZoomMaxZoomBasePath(minZoom: number, maxZoom: number, basePath: string): this;
}

declare class MSFAssetUtils extends NSObject {

    static alloc(): MSFAssetUtils; // inherited from NSObject

    static calculateResourcePath(resourceName: string): string;

    static calculateWritablePath(fileName: string): string;

    static loadAsset(path: string): MSFBinaryData;

    static new(): MSFAssetUtils; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });
}

declare class MSFBalloonPopup extends MSFPopup {

    static alloc(): MSFBalloonPopup; // inherited from NSObject

    static new(): MSFBalloonPopup; // inherited from NSObject

    constructor(o: { baseBillboard: MSFBillboard; style: MSFBalloonPopupStyle; title: string; desc: string; });

    constructor(o: { geometry: MSFGeometry; style: MSFBalloonPopupStyle; title: string; desc: string; });

    constructor(o: { pos: MSFMapPos; style: MSFBalloonPopupStyle; title: string; desc: string; });

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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { style: MSFBalloonPopupButtonStyle; text: string; });

    getStyle(): MSFBalloonPopupButtonStyle;

    getTag(): MSFVariant;

    getText(): string;

    initWithStyleText(style: MSFBalloonPopupButtonStyle, text: string): this;

    setTag(tag: MSFVariant): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFBalloonPopupButtonClickInfo extends NSObject {

    static alloc(): MSFBalloonPopupButtonClickInfo; // inherited from NSObject

    static new(): MSFBalloonPopupButtonClickInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getButton(): MSFBalloonPopupButton;

    getClickInfo(): MSFClickInfo;

    getClickType(): MSFClickType;

    getVectorElement(): MSFVectorElement;

    hash(): number;
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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onButtonClicked(clickInfo: MSFBalloonPopupButtonClickInfo): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFBalloonPopupMargins extends NSObject {

    static alloc(): MSFBalloonPopupMargins; // inherited from NSObject

    static new(): MSFBalloonPopupMargins; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { left: number; top: number; right: number; bottom: number; });

    getBottom(): number;

    getLeft(): number;

    getRight(): number;

    getTop(): number;

    initWithLeftTopRightBottom(left: number, top: number, right: number, bottom: number): this;
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

    F_BILLBOARD_ORIENTATION_FACE_CAMERA = 0,

    F_BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND = 1,

    F_BILLBOARD_ORIENTATION_GROUND = 2
}

declare const enum MSFBillboardScaling {

    F_BILLBOARD_SCALING_WORLD_SIZE = 0,

    F_BILLBOARD_SCALING_SCREEN_SIZE = 1,

    F_BILLBOARD_SCALING_CONST_SCREEN_SIZE = 2
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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { dataPtr: string | interop.Pointer | interop.Reference<any>; size: number; });

    description(): string;

    getData(): interop.Pointer | interop.Reference<any>;

    hash(): number;

    initWithDataPtrSize(dataPtr: string | interop.Pointer | interop.Reference<any>, size: number): this;

    size(): number;
}

declare class MSFBitmap extends NSObject {

    static alloc(): MSFBitmap; // inherited from NSObject

    static createFromCompressed(compressedData: MSFBinaryData): MSFBitmap;

    static new(): MSFBitmap; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { pixelData: MSFBinaryData; width: number; height: number; colorFormat: MSFColorFormat; bytesPerRow: number; });

    compressToInternal(): MSFBinaryData;

    compressToPNG(): MSFBinaryData;

    getBytesPerPixel(): number;

    getColorFormat(): MSFColorFormat;

    getHeight(): number;

    getPaddedBitmapYPadding(xPadding: number, yPadding: number): MSFBitmap;

    getPixelData(): MSFBinaryData;

    getRGBABitmap(): MSFBitmap;

    getResizedBitmapHeight(width: number, height: number): MSFBitmap;

    getSubBitmapYOffsetWidthHeight(xOffset: number, yOffset: number, width: number, height: number): MSFBitmap;

    getWidth(): number;

    hash(): number;

    initWithPixelDataWidthHeightColorFormatBytesPerRow(pixelData: MSFBinaryData, width: number, height: number, colorFormat: MSFColorFormat, bytesPerRow: number): this;
}

declare class MSFBitmapOverlayRasterTileDataSource extends MSFTileDataSource {

    static alloc(): MSFBitmapOverlayRasterTileDataSource; // inherited from NSObject

    static new(): MSFBitmapOverlayRasterTileDataSource; // inherited from NSObject

    constructor(o: { minZoom: number; maxZoom: number; bitmap: MSFBitmap; projection: MSFProjection; mapPoses: MSFMapPosVector; bitmapPoses: MSFScreenPosVector; });

    initWithMinZoomMaxZoomBitmapProjectionMapPosesBitmapPoses(minZoom: number, maxZoom: number, bitmap: MSFBitmap, projection: MSFProjection, mapPoses: MSFMapPosVector, bitmapPoses: MSFScreenPosVector): this;
}

declare class MSFBitmapUtils extends NSObject {

    static alloc(): MSFBitmapUtils; // inherited from NSObject

    static createBitmapFromUIImage(image: UIImage): MSFBitmap;

    static createUIImageFromBitmap(bitmap: MSFBitmap): UIImage;

    static loadBitmapFromAssets(assetPath: string): MSFBitmap;

    static loadBitmapFromFile(filePath: string): MSFBitmap;

    static new(): MSFBitmapUtils; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });
}

declare class MSFCacheTileDataSource extends MSFTileDataSource {

    static alloc(): MSFCacheTileDataSource; // inherited from NSObject

    static new(): MSFCacheTileDataSource; // inherited from NSObject

    constructor(o: { dataSource: MSFTileDataSource; });

    clear(): void;

    getCapacity(): number;

    getDataSource(): MSFTileDataSource;

    initWithDataSource(dataSource: MSFTileDataSource): this;

    setCapacity(capacityInBytes: number): void;
}

declare class MSFCartoCSSStyleSet extends NSObject {

    static alloc(): MSFCartoCSSStyleSet; // inherited from NSObject

    static new(): MSFCartoCSSStyleSet; // inherited from NSObject

    constructor(o: { cartoCSS: string; });

    constructor(o: { cartoCSS: string; assetPackage: MSFAssetPackage; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getAssetPackage(): MSFAssetPackage;

    getCartoCSS(): string;

    hash(): number;

    initWithCartoCSS(cartoCSS: string): this;

    initWithCartoCSSAssetPackage(cartoCSS: string, assetPackage: MSFAssetPackage): this;
}

declare class MSFCelestialArc extends MSFCelestialObject {

    static alloc(): MSFCelestialArc; // inherited from NSObject

    static new(): MSFCelestialArc; // inherited from NSObject

    getClickRadius(): number;

    getDirections(): MSFDoubleVector;

    getRadius(): number;

    getWidth(): number;

    isBelowHorizonVisible(): boolean;

    isSegmented(): boolean;

    setBelowHorizonVisible(visible: boolean): void;

    setCircleAxisAltitudeRadius(axisAzimuth: number, axisAltitude: number, radius: number): void;

    setClickRadius(degrees: number): void;

    setDirections(directions: MSFDoubleVector): void;

    setSegments(directions: MSFDoubleVector): void;

    setWidth(pixels: number): void;
}

declare class MSFCelestialEventListener extends NSObject {

    static alloc(): MSFCelestialEventListener; // inherited from NSObject

    static new(): MSFCelestialEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFCelestialEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onCelestialObjectClickedCelestialObject(clickInfo: MSFClickInfo, celestialObject: MSFCelestialObject): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFCelestialLayer extends MSFLayer {

    static alloc(): MSFCelestialLayer; // inherited from NSObject

    static new(): MSFCelestialLayer; // inherited from NSObject

    add(object: MSFCelestialObject): void;

    addAll(objects: MSFCelestialObjectVector): void;

    clear(): void;

    getAll(): MSFCelestialObjectVector;

    getCelestialEventListener(): MSFCelestialEventListener;

    remove(object: MSFCelestialObject): boolean;

    setCelestialEventListener(listener: MSFCelestialEventListener): void;
}

declare class MSFCelestialObject extends NSObject {

    static alloc(): MSFCelestialObject; // inherited from NSObject

    static new(): MSFCelestialObject; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFCelestialObject;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getAltitude(): number;

    getAzimuth(): number;

    getColor(): MSFColor;

    getDistance(): number;

    getMetaDataElement(key: string): MSFVariant;

    getPosition(): MSFMapPos;

    getPositionAltitude(): number;

    hash(): number;

    isDirectionAnchored(): boolean;

    isVisible(): boolean;

    setColor(color: MSFColor): void;

    setDirectionAltitudeDistance(azimuth: number, altitude: number, distance: number): void;

    setMetaDataElementElement(key: string, element: MSFVariant): void;

    setPositionAltitude(pos: MSFMapPos, altitude: number): void;

    setVisible(visible: boolean): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFCelestialObjectVector extends NSObject {

    static alloc(): MSFCelestialObjectVector; // inherited from NSObject

    static new(): MSFCelestialObjectVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFCelestialObject): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFCelestialObject;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFCelestialObject): void;

    size(): number;
}

declare class MSFCelestialSprite extends MSFCelestialObject {

    static alloc(): MSFCelestialSprite; // inherited from NSObject

    static new(): MSFCelestialSprite; // inherited from NSObject

    getAngularSize(): number;

    getBitmap(): MSFBitmap;

    getClickRadius(): number;

    getScreenSize(): number;

    getSoftness(): number;

    setAngularSize(degrees: number): void;

    setBitmap(bitmap: MSFBitmap): void;

    setClickRadius(degrees: number): void;

    setScreenSize(pixels: number): void;

    setSoftness(softness: number): void;
}

declare class MSFClickInfo extends NSObject {

    static alloc(): MSFClickInfo; // inherited from NSObject

    static new(): MSFClickInfo; // inherited from NSObject

    constructor(o: { clickType: MSFClickType; duration: number; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    description(): string;

    getClickType(): MSFClickType;

    getDuration(): number;

    hash(): number;

    hashInternal(): number;

    initWithClickTypeDuration(clickType: MSFClickType, duration: number): this;

    isEqualInternal(clickInfo: MSFClickInfo): boolean;
}

declare const enum MSFClickType {

    F_CLICK_TYPE_SINGLE = 0,

    F_CLICK_TYPE_LONG = 1,

    F_CLICK_TYPE_DOUBLE = 2,

    F_CLICK_TYPE_DUAL = 3
}

declare const enum MSFClusterBuilderMode {

    F_CLUSTER_BUILDER_MODE_ELEMENTS = 0,

    F_CLUSTER_BUILDER_MODE_ELEMENT_COUNT = 1
}

declare class MSFClusterElementBuilder extends NSObject {

    static alloc(): MSFClusterElementBuilder; // inherited from NSObject

    static new(): MSFClusterElementBuilder; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFClusterElementBuilder;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    buildClusterElementElementCount(mapPos: MSFMapPos, elementCount: number): MSFVectorElement;

    buildClusterElementElements(mapPos: MSFMapPos, elements: MSFVectorElementVector): MSFVectorElement;

    getBuilderMode(): MSFClusterBuilderMode;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFClusteredVectorLayer extends MSFVectorLayer {

    static alloc(): MSFClusteredVectorLayer; // inherited from NSObject

    static new(): MSFClusteredVectorLayer; // inherited from NSObject

    constructor(o: { dataSource: MSFLocalVectorDataSource; clusterElementBuilder: MSFClusterElementBuilder; });

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

    constructor(o: { color: number; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { r: number; g: number; b: number; a: number; });

    description(): string;

    getA(): number;

    getARGB(): number;

    getB(): number;

    getG(): number;

    getR(): number;

    hash(): number;

    hashInternal(): number;

    initWithColor(color: number): this;

    initWithRGBA(r: number, g: number, b: number, a: number): this;

    isEqualInternal(color: MSFColor): boolean;
}

declare const enum MSFColorFormat {

    F_COLOR_FORMAT_UNSUPPORTED = 0,

    F_COLOR_FORMAT_GRAYSCALE = 6409,

    F_COLOR_FORMAT_GRAYSCALE_ALPHA = 6410,

    F_COLOR_FORMAT_RGB = 6407,

    F_COLOR_FORMAT_RGBA = 6408,

    F_COLOR_FORMAT_BGRA = 1,

    F_COLOR_FORMAT_RGBA_4444 = 2,

    F_COLOR_FORMAT_RGB_565 = 3
}

declare class MSFCombinedTileDataSource extends MSFTileDataSource {

    static alloc(): MSFCombinedTileDataSource; // inherited from NSObject

    static new(): MSFCombinedTileDataSource; // inherited from NSObject

    constructor(o: { dataSource1: MSFTileDataSource; dataSource2: MSFTileDataSource; zoomLevel: number; });

    initWithDataSource1DataSource2ZoomLevel(dataSource1: MSFTileDataSource, dataSource2: MSFTileDataSource, zoomLevel: number): this;
}

declare class MSFCompiledStyleSet extends NSObject {

    static alloc(): MSFCompiledStyleSet; // inherited from NSObject

    static new(): MSFCompiledStyleSet; // inherited from NSObject

    constructor(o: { assetPackage: MSFAssetPackage; });

    constructor(o: { assetPackage: MSFAssetPackage; styleName: string; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getAssetPackage(): MSFAssetPackage;

    getStyleAssetName(): string;

    getStyleName(): string;

    hash(): number;

    initWithAssetPackage(assetPackage: MSFAssetPackage): this;

    initWithAssetPackageStyleName(assetPackage: MSFAssetPackage, styleName: string): this;
}

declare const enum MSFCompositeSourceType {

    F_COMPOSITE_SOURCE_TYPE_RASTER = 0,

    F_COMPOSITE_SOURCE_TYPE_HILLSHADE = 1,

    F_COMPOSITE_SOURCE_TYPE_VECTOR = 2
}

declare class MSFCompositeVectorTileLayer extends MSFVectorTileLayer {

    static alloc(): MSFCompositeVectorTileLayer; // inherited from NSObject

    static new(): MSFCompositeVectorTileLayer; // inherited from NSObject

    addExternalDataSourceDataSourceType(name: string, dataSource: MSFTileDataSource, type: MSFCompositeSourceType): void;

    addExternalDataSourceDataSourceTypeElevationDecoder(name: string, dataSource: MSFTileDataSource, type: MSFCompositeSourceType, elevationDecoder: MSFElevationDecoder): void;

    addVectorDataSourceDataSource(name: string, dataSource: MSFTileDataSource): void;

    clearExternalDataSourceZoomLevelBias(name: string): void;

    getExternalDataSourceMaxOverzoomLevel(name: string): number;

    getExternalDataSourceNames(): MSFStringVector;

    getExternalDataSourceZoomLevelBias(name: string): number;

    isSinglePassRenderingEnabled(): boolean;

    removeExternalDataSource(name: string): boolean;

    setExternalDataSourceMaxOverzoomLevelLevel(name: string, level: number): void;

    setExternalDataSourceZoomLevelBiasBias(name: string, bias: number): void;

    setSinglePassRenderingEnabled(enabled: boolean): void;
}

declare class MSFContourTileDataSource extends MSFTileDataSource {

    static alloc(): MSFContourTileDataSource; // inherited from NSObject

    static new(): MSFContourTileDataSource; // inherited from NSObject

    constructor(o: { dataSource: MSFTileDataSource; });

    constructor(o: { dataSource: MSFTileDataSource; elevationDecoder: MSFElevationDecoder; });

    clearIntervalMultipliers(): void;

    clearResolutionsForZoom(): void;

    getBaseInterval(): number;

    getIntervalMultiplier(zoom: number): number;

    getLabelInterval(): number;

    getLayerName(): string;

    getMinVisibleZoom(): number;

    getResolution(): number;

    getResolutionForZoom(zoom: number): number;

    getSimplifyTolerance(): number;

    getTerrainOptions(): MSFTerrainOptions;

    initWithDataSource(dataSource: MSFTileDataSource): this;

    initWithDataSourceElevationDecoder(dataSource: MSFTileDataSource, elevationDecoder: MSFElevationDecoder): this;

    isLabelStubsEnabled(): boolean;

    isSeamlessEdgesEnabled(): boolean;

    setBaseInterval(interval: number): void;

    setIntervalMultiplierMultiplier(maxZoom: number, multiplier: number): void;

    setLabelInterval(interval: number): void;

    setLabelStubsEnabled(enabled: boolean): void;

    setLayerName(name: string): void;

    setMinVisibleZoom(zoom: number): void;

    setResolution(resolution: number): void;

    setResolutionForZoomResolution(maxZoom: number, resolution: number): void;

    setSeamlessEdgesEnabled(enabled: boolean): void;

    setSimplifyTolerance(tolerance: number): void;

    setTerrainOptions(terrainOptions: MSFTerrainOptions): void;
}

declare class MSFCullState extends NSObject {

    static alloc(): MSFCullState; // inherited from NSObject

    static new(): MSFCullState; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { envelope: MSFMapEnvelope; viewState: MSFViewState; });

    getProjectionEnvelope(projection: MSFProjection): MSFMapEnvelope;

    getViewState(): MSFViewState;

    hash(): number;

    initWithEnvelopeViewState(envelope: MSFMapEnvelope, viewState: MSFViewState): this;
}

declare class MSFCustomPopup extends MSFPopup {

    static alloc(): MSFCustomPopup; // inherited from NSObject

    static new(): MSFCustomPopup; // inherited from NSObject

    constructor(o: { baseBillboard: MSFBillboard; style: MSFPopupStyle; popupHandler: MSFCustomPopupHandler; });

    constructor(o: { geometry: MSFGeometry; style: MSFPopupStyle; popupHandler: MSFCustomPopupHandler; });

    constructor(o: { pos: MSFMapPos; style: MSFPopupStyle; popupHandler: MSFCustomPopupHandler; });

    getPopupHandler(): MSFCustomPopupHandler;

    initWithBaseBillboardStylePopupHandler(baseBillboard: MSFBillboard, style: MSFPopupStyle, popupHandler: MSFCustomPopupHandler): this;

    initWithGeometryStylePopupHandler(geometry: MSFGeometry, style: MSFPopupStyle, popupHandler: MSFCustomPopupHandler): this;

    initWithPosStylePopupHandler(pos: MSFMapPos, style: MSFPopupStyle, popupHandler: MSFCustomPopupHandler): this;
}

declare class MSFCustomPopupHandler extends NSObject {

    static alloc(): MSFCustomPopupHandler; // inherited from NSObject

    static new(): MSFCustomPopupHandler; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFCustomPopupHandler;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onDrawPopup(popupDrawInfo: MSFPopupDrawInfo): MSFBitmap;

    onPopupClicked(popupClickInfo: MSFPopupClickInfo): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFCustomRasterTileLayer extends MSFRasterTileLayer {

    static alloc(): MSFCustomRasterTileLayer; // inherited from NSObject

    static new(): MSFCustomRasterTileLayer; // inherited from NSObject

    getShaderSource(): string;

    setShaderSource(shaderSource: string): void;
}

declare class MSFDirAssetPackage extends MSFAssetPackage {

    static alloc(): MSFDirAssetPackage; // inherited from NSObject

    static new(): MSFDirAssetPackage; // inherited from NSObject

    constructor(o: { dirPath: string; });

    constructor(o: { dirPath: string; baseAssetPackage: MSFAssetPackage; });

    getDirPath(): string;

    getLocalAssetNames(): MSFStringVector;

    initWithDirPath(dirPath: string): this;

    initWithDirPathBaseAssetPackage(dirPath: string, baseAssetPackage: MSFAssetPackage): this;

    reload(): void;
}

declare class MSFDoubleVector extends NSObject {

    static alloc(): MSFDoubleVector; // inherited from NSObject

    static new(): MSFDoubleVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: number): void;

    capacity(): number;

    clear(): void;

    get(i: number): number;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: number): void;

    size(): number;
}

declare class MSFDouglasPeuckerGeometrySimplifier extends MSFGeometrySimplifier {

    static alloc(): MSFDouglasPeuckerGeometrySimplifier; // inherited from NSObject

    static new(): MSFDouglasPeuckerGeometrySimplifier; // inherited from NSObject

    constructor(o: { tolerance: number; });

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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getMinimumHeightScale(): number;

    hash(): number;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { geometry: MSFGeometry; properties: MSFVariant; });

    getGeometry(): MSFGeometry;

    getProperties(): MSFVariant;

    hash(): number;

    initWithGeometryProperties(geometry: MSFGeometry, properties: MSFVariant): this;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFFeatureCollection extends NSObject {

    static alloc(): MSFFeatureCollection; // inherited from NSObject

    static new(): MSFFeatureCollection; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFFeatureCollection;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { features: MSFFeatureVector; });

    getFeature(index: number): MSFFeature;

    getFeatureCount(): number;

    initWithFeatures(features: MSFFeatureVector): this;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFFeatureCollectionSearchService extends NSObject {

    static alloc(): MSFFeatureCollectionSearchService; // inherited from NSObject

    static new(): MSFFeatureCollectionSearchService; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFFeatureCollectionSearchService;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { projection: MSFProjection; featureCollection: MSFFeatureCollection; });

    findFeatures(request: MSFSearchRequest): MSFFeatureCollection;

    getFeatureCollection(): MSFFeatureCollection;

    getMaxResults(): number;

    getProjection(): MSFProjection;

    initWithProjectionFeatureCollection(projection: MSFProjection, featureCollection: MSFFeatureCollection): this;

    setMaxResults(maxResults: number): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFFeatureVector extends NSObject {

    static alloc(): MSFFeatureVector; // inherited from NSObject

    static new(): MSFFeatureVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFFeature): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFFeature;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFFeature): void;

    size(): number;
}

declare class MSFFogOptions extends NSObject {

    static alloc(): MSFFogOptions; // inherited from NSObject

    static new(): MSFFogOptions; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getColor(): MSFColor;

    getHighColor(): MSFColor;

    getHorizonAngle(): number;

    getHorizonBlend(): number;

    getRangeEnd(): number;

    getRangeStart(): number;

    getShaderSource(): string;

    getSpaceColor(): MSFColor;

    getStarIntensity(): number;

    isEnabled(): boolean;

    setColor(color: MSFColor): void;

    setEnabled(enabled: boolean): void;

    setHighColor(color: MSFColor): void;

    setHorizonAngle(degrees: number): void;

    setHorizonBlend(horizonBlend: number): void;

    setRangeEnd(rangeEnd: number): void;

    setRangeStart(rangeStart: number): void;

    setShaderSource(shaderSource: string): void;

    setSpaceColor(color: MSFColor): void;

    setStarIntensity(starIntensity: number): void;
}

declare const enum MSFFreeRoamMode {

    F_FREE_ROAM_MODE_OFF = 0,

    F_FREE_ROAM_MODE_LOOK = 1,

    F_FREE_ROAM_MODE_FIRST_PERSON = 2
}

declare class MSFGeoJSONGeometryReader extends NSObject {

    static alloc(): MSFGeoJSONGeometryReader; // inherited from NSObject

    static new(): MSFGeoJSONGeometryReader; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getTargetProjection(): MSFProjection;

    readFeature(geoJSON: string): MSFFeature;

    readFeatureCollection(geoJSON: string): MSFFeatureCollection;

    readGeometry(geoJSON: string): MSFGeometry;

    setTargetProjection(proj: MSFProjection): void;
}

declare class MSFGeoJSONGeometryWriter extends NSObject {

    static alloc(): MSFGeoJSONGeometryWriter; // inherited from NSObject

    static new(): MSFGeoJSONGeometryWriter; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getSourceProjection(): MSFProjection;

    getZ(): boolean;

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

    getDefaultLayerBuffer(): number;

    getSimplifyTolerance(): number;

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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { projection: MSFProjection; query: string; });

    description(): string;

    getCustomParameter(param: string): MSFVariant;

    getLocation(): MSFMapPos;

    getLocationRadius(): number;

    getProjection(): MSFProjection;

    getQuery(): string;

    hash(): number;

    initWithProjectionQuery(projection: MSFProjection, query: string): this;

    setCustomParameterValue(param: string, value: MSFVariant): void;

    setLocation(pos: MSFMapPos): void;

    setLocationRadius(radius: number): void;
}

declare class MSFGeocodingResult extends NSObject {

    static alloc(): MSFGeocodingResult; // inherited from NSObject

    static new(): MSFGeocodingResult; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { projection: MSFProjection; address: MSFGeocodingAddress; rank: number; featureCollection: MSFFeatureCollection; });

    description(): string;

    getAddress(): MSFGeocodingAddress;

    getFeatureCollection(): MSFFeatureCollection;

    getProjection(): MSFProjection;

    getRank(): number;

    hash(): number;

    initWithProjectionAddressRankFeatureCollection(projection: MSFProjection, address: MSFGeocodingAddress, rank: number, featureCollection: MSFFeatureCollection): this;
}

declare class MSFGeocodingResultVector extends NSObject {

    static alloc(): MSFGeocodingResultVector; // inherited from NSObject

    static new(): MSFGeocodingResultVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFGeocodingResult): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFGeocodingResult;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFGeocodingResult): void;

    size(): number;
}

declare class MSFGeocodingService extends NSObject {

    static alloc(): MSFGeocodingService; // inherited from NSObject

    static new(): MSFGeocodingService; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFGeocodingService;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    calculateAddresses(request: MSFGeocodingRequest): MSFGeocodingResultVector;

    getLanguage(): string;

    getMaxResults(): number;

    isAutocomplete(): boolean;

    setAutocomplete(autocomplete: boolean): void;

    setLanguage(lang: string): void;

    setMaxResults(maxResults: number): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFGeometry extends NSObject {

    static alloc(): MSFGeometry; // inherited from NSObject

    static new(): MSFGeometry; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFGeometry;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getBounds(): MSFMapBounds;

    getCenterPos(): MSFMapPos;

    hash(): number;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFGeometryCollection extends MSFVectorElement {

    static alloc(): MSFGeometryCollection; // inherited from NSObject

    static new(): MSFGeometryCollection; // inherited from NSObject

    constructor(o: { geometry: MSFMultiGeometry; style: MSFGeometryCollectionStyle; });

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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    hash(): number;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFGeometryVector extends NSObject {

    static alloc(): MSFGeometryVector; // inherited from NSObject

    static new(): MSFGeometryVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFGeometry): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFGeometry;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFGeometry): void;

    size(): number;
}

declare class MSFHTTPTileDataSource extends MSFTileDataSource {

    static alloc(): MSFHTTPTileDataSource; // inherited from NSObject

    static new(): MSFHTTPTileDataSource; // inherited from NSObject

    constructor(o: { minZoom: number; maxZoom: number; baseURL: string; });

    buildTileURLTile(baseURL: string, tile: MSFMapTile): string;

    getBaseURL(): string;

    getHTTPHeaders(): MSFStringMap;

    getSubdomains(): MSFStringVector;

    getTimeout(): number;

    initWithMinZoomMaxZoomBaseURL(minZoom: number, maxZoom: number, baseURL: string): this;

    isMaxAgeHeaderCheck(): boolean;

    isTMSScheme(): boolean;

    setBaseURL(baseURL: string): void;

    setHTTPHeaders(headers: MSFStringMap): void;

    setMaxAgeHeaderCheck(maxAgeCheck: boolean): void;

    setSubdomains(subdomains: MSFStringVector): void;

    setTMSScheme(tmsScheme: boolean): void;

    setTimeout(timeout: number): void;
}

declare const enum MSFHillshadeMethod {

    F_STANDARD = 0,

    F_COMBINED = 1,

    F_IGOR = 2,

    F_MULTIDIRECTIONAL = 3,

    F_BASIC = 4
}

declare class MSFHillshadeRasterTileLayer extends MSFCustomRasterTileLayer {

    static alloc(): MSFHillshadeRasterTileLayer; // inherited from NSObject

    static new(): MSFHillshadeRasterTileLayer; // inherited from NSObject

    constructor(o: { dataSource: MSFTileDataSource; elevationDecoder: MSFElevationDecoder; });

    getAccentColor(): MSFColor;

    getContourColor(): MSFColor;

    getContourInterval(): number;

    getContourWidth(): number;

    getContrast(): number;

    getElevation(pos: MSFMapPos): number;

    getElevations(poses: MSFMapPosVector): MSFDoubleVector;

    getExagerateHeightScaleEnabled(): boolean;

    getExaggeration(): number;

    getHeightScale(): number;

    getHighlightColor(): MSFColor;

    getHillshadeMethod(): MSFHillshadeMethod;

    getIlluminationDirection(): MSFMapVec;

    getIlluminationMapRotationEnabled(): boolean;

    getNormalMapLightingShader(): string;

    getShadowColor(): MSFColor;

    initWithDataSourceElevationDecoder(dataSource: MSFTileDataSource, elevationDecoder: MSFElevationDecoder): this;

    isContourEnabled(): boolean;

    isElevationEncodingEnabled(): boolean;

    isLegacyHeightScaleEnabled(): boolean;

    isTerrainPaintEnabled(): boolean;

    isTerrainPaintFullDetailEnabled(): boolean;

    setAccentColor(color: MSFColor): void;

    setContourColor(color: MSFColor): void;

    setContourEnabled(enabled: boolean): void;

    setContourInterval(interval: number): void;

    setContourWidth(width: number): void;

    setContrast(contrast: number): void;

    setElevationEncodingEnabled(enabled: boolean): void;

    setExagerateHeightScaleEnabled(enabled: boolean): void;

    setExaggeration(exaggeration: number): void;

    setHeightScale(heightScale: number): void;

    setHighlightColor(color: MSFColor): void;

    setHillshadeMethod(method: MSFHillshadeMethod): void;

    setIlluminationDirection(direction: MSFMapVec): void;

    setIlluminationMapRotationEnabled(enabled: boolean): void;

    setLegacyHeightScaleEnabled(enabled: boolean): void;

    setNormalMapLightingShader(shader: string): void;

    setShadowColor(color: MSFColor): void;

    setTerrainPaintEnabled(enabled: boolean): void;

    setTerrainPaintFullDetailEnabled(enabled: boolean): void;
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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    containsMetaDataKey(key: string): boolean;

    getMetaData(): MSFStringVariantMap;

    getMetaDataElement(key: string): MSFVariant;

    getOpacity(): number;

    getUpdatePriority(): number;

    getVisibleZoomRange(): MSFMapRange;

    hash(): number;

    isPostProcessed(): boolean;

    isUpdateInProgress(): boolean;

    isVisible(): boolean;

    refresh(): void;

    setCullDelay(delay: number): void;

    setMetaData(metaData: MSFStringVariantMap): void;

    setMetaDataElementElement(key: string, element: MSFVariant): void;

    setOpacity(opacity: number): void;

    setPostProcessed(postProcessed: boolean): void;

    setUpdatePriority(priority: number): void;

    setVisible(visible: boolean): void;

    setVisibleZoomRange(range: MSFMapRange): void;

    simulateClickScreenPosViewState(clickType: MSFClickType, screenPos: MSFScreenPos, viewState: MSFViewState): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    update(cullState: MSFCullState): void;
}

declare class MSFLayerVector extends NSObject {

    static alloc(): MSFLayerVector; // inherited from NSObject

    static new(): MSFLayerVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFLayer): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFLayer;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFLayer): void;

    size(): number;
}

declare class MSFLayers extends NSObject {

    static alloc(): MSFLayers; // inherited from NSObject

    static new(): MSFLayers; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(layer: MSFLayer): void;

    addAll(layers: MSFLayerVector): void;

    clear(): void;

    count(): number;

    get(index: number): MSFLayer;

    getAll(): MSFLayerVector;

    hash(): number;

    insertLayer(index: number, layer: MSFLayer): void;

    remove(layer: MSFLayer): boolean;

    removeAll(layers: MSFLayerVector): boolean;

    setAll(layers: MSFLayerVector): void;

    setLayer(index: number, layer: MSFLayer): void;
}

declare class MSFLightOptions extends NSObject {

    static alloc(): MSFLightOptions; // inherited from NSObject

    static new(): MSFLightOptions; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getAmbientIntensity(): number;

    getShadowBias(): number;

    getShadowCascades(): number;

    getShadowCasterMargin(): number;

    getShadowDistance(): number;

    getShadowMapSize(): number;

    getShadowNormalOffset(): number;

    getShadowSoftness(): number;

    getShadowStrength(): number;

    getSunAltitude(): number;

    getSunAzimuth(): number;

    getSunColor(): MSFColor;

    getSunIntensity(): number;

    isTerrainLightingEnabled(): boolean;

    setAmbientIntensity(intensity: number): void;

    setShadowBias(bias: number): void;

    setShadowCascades(cascades: number): void;

    setShadowCasterMargin(margin: number): void;

    setShadowDistance(distance: number): void;

    setShadowMapSize(size: number): void;

    setShadowNormalOffset(offset: number): void;

    setShadowSoftness(softness: number): void;

    setShadowStrength(strength: number): void;

    setSunAltitude(altitude: number): void;

    setSunAzimuth(azimuth: number): void;

    setSunColor(color: MSFColor): void;

    setSunIntensity(intensity: number): void;

    setSunPositionFromTimeMonthDayHourMinuteLatitudeLongitude(year: number, month: number, day: number, hour: number, minute: number, latitude: number, longitude: number): void;

    setTerrainLightingEnabled(enabled: boolean): void;
}

declare class MSFLine extends MSFVectorElement {

    static alloc(): MSFLine; // inherited from NSObject

    static new(): MSFLine; // inherited from NSObject

    constructor(o: { geometry: MSFLineGeometry; style: MSFLineStyle; });

    constructor(o: { poses: MSFMapPosVector; style: MSFLineStyle; });

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

    F_LINE_END_TYPE_NONE = 0,

    F_LINE_END_TYPE_SQUARE = 1,

    F_LINE_END_TYPE_ROUND = 2
}

declare class MSFLineGeometry extends MSFGeometry {

    static alloc(): MSFLineGeometry; // inherited from NSObject

    static new(): MSFLineGeometry; // inherited from NSObject

    constructor(o: { poses: MSFMapPosVector; });

    getPoses(): MSFMapPosVector;

    initWithPoses(poses: MSFMapPosVector): this;
}

declare class MSFLineGeometryVector extends NSObject {

    static alloc(): MSFLineGeometryVector; // inherited from NSObject

    static new(): MSFLineGeometryVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFLineGeometry): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFLineGeometry;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFLineGeometry): void;

    size(): number;
}

declare const enum MSFLineJoinType {

    F_LINE_JOIN_TYPE_NONE = 0,

    F_LINE_JOIN_TYPE_MITER = 1,

    F_LINE_JOIN_TYPE_BEVEL = 2,

    F_LINE_JOIN_TYPE_ROUND = 3
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

    F_LOCAL_SPATIAL_INDEX_TYPE_NULL = 0,

    F_LOCAL_SPATIAL_INDEX_TYPE_KDTREE = 1
}

declare class MSFLocalVectorDataSource extends MSFVectorDataSource {

    static alloc(): MSFLocalVectorDataSource; // inherited from NSObject

    static new(): MSFLocalVectorDataSource; // inherited from NSObject

    constructor(o: { projection: MSFProjection; spatialIndexType: MSFLocalSpatialIndexType; });

    add(element: MSFVectorElement): void;

    addAll(elements: MSFVectorElementVector): void;

    addFeatureCollectionStyle(featureCollection: MSFFeatureCollection, style: MSFStyle): void;

    clear(): void;

    getAll(): MSFVectorElementVector;

    getFeatureCollection(): MSFFeatureCollection;

    getGeometrySimplifier(): MSFGeometrySimplifier;

    initWithProjectionSpatialIndexType(projection: MSFProjection, spatialIndexType: MSFLocalSpatialIndexType): this;

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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });
}

declare class MSFLogEventListener extends NSObject {

    static alloc(): MSFLogEventListener; // inherited from NSObject

    static new(): MSFLogEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFLogEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onDebugEvent(message: string): boolean;

    onErrorEvent(message: string): boolean;

    onFatalEvent(message: string): boolean;

    onInfoEvent(message: string): boolean;

    onWarnEvent(message: string): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare const enum MSFMBTilesScheme {

    F_MBTILES_SCHEME_TMS = 0,

    F_MBTILES_SCHEME_XYZ = 1
}

declare class MSFMBTilesTileDataSource extends MSFTileDataSource {

    static alloc(): MSFMBTilesTileDataSource; // inherited from NSObject

    static new(): MSFMBTilesTileDataSource; // inherited from NSObject

    constructor(o: { minZoom: number; maxZoom: number; path: string; });

    constructor(o: { minZoom: number; maxZoom: number; path: string; scheme: MSFMBTilesScheme; });

    constructor(o: { path: string; });

    getMetaData(): MSFStringMap;

    getTileMask(): string;

    initWithMinZoomMaxZoomPath(minZoom: number, maxZoom: number, path: string): this;

    initWithMinZoomMaxZoomPathScheme(minZoom: number, maxZoom: number, path: string, scheme: MSFMBTilesScheme): this;

    initWithPath(path: string): this;
}

declare class MSFMBVectorTileDecoder extends MSFVectorTileDecoder {

    static alloc(): MSFMBVectorTileDecoder; // inherited from NSObject

    static new(): MSFMBVectorTileDecoder; // inherited from NSObject

    static parseTileFormat(format: string): MSFTileFormat;

    constructor(o: { cartoCSSStyleSet: MSFCartoCSSStyleSet; });

    constructor(o: { compiledStyleSet: MSFCompiledStyleSet; });

    getCartoCSSStyleSet(): MSFCartoCSSStyleSet;

    getCompiledStyleSet(): MSFCompiledStyleSet;

    getStyleLayerNames(): MSFStringVector;

    getStyleParameter(param: string): string;

    getStyleParameters(): MSFStringVector;

    getTileFormat(): MSFTileFormat;

    initWithCartoCSSStyleSet(cartoCSSStyleSet: MSFCartoCSSStyleSet): this;

    initWithCompiledStyleSet(compiledStyleSet: MSFCompiledStyleSet): this;

    isFeatureIdOverride(): boolean;

    setCartoCSSStyleSet(styleSet: MSFCartoCSSStyleSet): void;

    setCompiledStyleSet(styleSet: MSFCompiledStyleSet): void;

    setFeatureIdOverride(idOverride: boolean): void;

    setJSONStyleParameters(params: string): void;

    setStyleParameterValue(param: string, value: string): boolean;

    setStyleParameters(params: MSFStringMap): void;

    setTileFormat(format: MSFTileFormat): void;
}

declare class MSFManeuverArrowBuilder extends NSObject {

    static alloc(): MSFManeuverArrowBuilder; // inherited from NSObject

    static new(): MSFManeuverArrowBuilder; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    buildArrowAtIndexPointsManeuverIndex(projection: MSFProjection, points: MSFMapPosVector, maneuverIndex: number): MSFFeatureCollection;

    buildArrowPointsManeuverPos(projection: MSFProjection, points: MSFMapPosVector, maneuverPos: MSFMapPos): MSFFeatureCollection;

    getLengthAfter(): number;

    getLengthBefore(): number;

    setLengthAfter(length: number): void;

    setLengthBefore(length: number): void;
}

declare class MSFMapBounds extends NSObject {

    static alloc(): MSFMapBounds; // inherited from NSObject

    static new(): MSFMapBounds; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { min: MSFMapPos; max: MSFMapPos; });

    containsBounds(bounds: MSFMapBounds): boolean;

    containsPos(pos: MSFMapPos): boolean;

    description(): string;

    getCenter(): MSFMapPos;

    getDelta(): MSFMapVec;

    getMax(): MSFMapPos;

    getMin(): MSFMapPos;

    hash(): number;

    hashInternal(): number;

    initWithMinMax(min: MSFMapPos, max: MSFMapPos): this;

    intersects(bounds: MSFMapBounds): boolean;

    isEqualInternal(mapBounds: MSFMapBounds): boolean;

    shrinkToIntersection(bounds: MSFMapBounds): void;
}

declare class MSFMapBoxElevationDataDecoder extends MSFElevationDecoder {

    static alloc(): MSFMapBoxElevationDataDecoder; // inherited from NSObject

    static new(): MSFMapBoxElevationDataDecoder; // inherited from NSObject
}

declare class MSFMapBoxOnlineGeocodingService extends MSFGeocodingService {

    static alloc(): MSFMapBoxOnlineGeocodingService; // inherited from NSObject

    static new(): MSFMapBoxOnlineGeocodingService; // inherited from NSObject

    constructor(o: { accessToken: string; });

    getCustomServiceURL(): string;

    initWithAccessToken(accessToken: string): this;

    setCustomServiceURL(serviceURL: string): void;
}

declare class MSFMapBoxOnlineReverseGeocodingService extends MSFReverseGeocodingService {

    static alloc(): MSFMapBoxOnlineReverseGeocodingService; // inherited from NSObject

    static new(): MSFMapBoxOnlineReverseGeocodingService; // inherited from NSObject

    constructor(o: { accessToken: string; });

    getCustomServiceURL(): string;

    initWithAccessToken(accessToken: string): this;

    setCustomServiceURL(serviceURL: string): void;
}

declare class MSFMapClickInfo extends NSObject {

    static alloc(): MSFMapClickInfo; // inherited from NSObject

    static new(): MSFMapClickInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getClickInfo(): MSFClickInfo;

    getClickPos(): MSFMapPos;

    getClickType(): MSFClickType;

    hash(): number;
}

declare class MSFMapEnvelope extends NSObject {

    static alloc(): MSFMapEnvelope; // inherited from NSObject

    static new(): MSFMapEnvelope; // inherited from NSObject

    constructor(o: { bounds: MSFMapBounds; });

    constructor(o: { convexHull: MSFMapPosVector; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    contains(envelope: MSFMapEnvelope): boolean;

    description(): string;

    getBounds(): MSFMapBounds;

    getConvexHull(): MSFMapPosVector;

    hash(): number;

    hashInternal(): number;

    initWithBounds(bounds: MSFMapBounds): this;

    initWithConvexHull(convexHull: MSFMapPosVector): this;

    intersects(envelope: MSFMapEnvelope): boolean;

    isEqualInternal(envelope: MSFMapEnvelope): boolean;
}

declare class MSFMapEventListener extends NSObject {

    static alloc(): MSFMapEventListener; // inherited from NSObject

    static new(): MSFMapEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFMapEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onMapClicked(mapClickInfo: MSFMapClickInfo): void;

    onMapIdle(): void;

    onMapInteraction(mapInteractionInfo: MSFMapInteractionInfo): void;

    onMapMoved(): void;

    onMapStable(): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFMapInteractionInfo extends NSObject {

    static alloc(): MSFMapInteractionInfo; // inherited from NSObject

    static new(): MSFMapInteractionInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    hash(): number;

    isAnimationStarted(): boolean;

    isPanAction(): boolean;

    isRotateAction(): boolean;

    isTiltAction(): boolean;

    isZoomAction(): boolean;
}

declare class MSFMapPos extends NSObject {

    static alloc(): MSFMapPos; // inherited from NSObject

    static new(): MSFMapPos; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { x: number; y: number; });

    constructor(o: { x: number; y: number; z: number; });

    add(v: MSFMapVec): MSFMapPos;

    description(): string;

    getX(): number;

    getY(): number;

    getZ(): number;

    hash(): number;

    hashInternal(): number;

    initWithXY(x: number, y: number): this;

    initWithXYZ(x: number, y: number, z: number): this;

    isEqualInternal(p: MSFMapPos): boolean;

    subPos(p: MSFMapPos): MSFMapVec;

    subVec(v: MSFMapVec): MSFMapPos;
}

declare class MSFMapPosVector extends NSObject {

    static alloc(): MSFMapPosVector; // inherited from NSObject

    static new(): MSFMapPosVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFMapPos): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFMapPos;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFMapPos): void;

    size(): number;
}

declare class MSFMapPosVectorVector extends NSObject {

    static alloc(): MSFMapPosVectorVector; // inherited from NSObject

    static new(): MSFMapPosVectorVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFMapPosVector): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFMapPosVector;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFMapPosVector): void;

    size(): number;
}

declare class MSFMapRange extends NSObject {

    static alloc(): MSFMapRange; // inherited from NSObject

    static new(): MSFMapRange; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { min: number; max: number; });

    description(): string;

    getMax(): number;

    getMidrange(): number;

    getMin(): number;

    hash(): number;

    hashInternal(): number;

    inRange(value: number): boolean;

    initWithMinMax(min: number, max: number): this;

    isEqualInternal(mapRange: MSFMapRange): boolean;

    length(): number;
}

declare class MSFMapRenderer extends NSObject {

    static alloc(): MSFMapRenderer; // inherited from NSObject

    static new(): MSFMapRenderer; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    captureRenderingWaitWhileUpdating(listener: MSFRendererCaptureListener, waitWhileUpdating: boolean): void;

    getMapRendererListener(): MSFMapRendererListener;

    getPostProcessEffect(): MSFPostProcessEffect;

    getViewState(): MSFViewState;

    hash(): number;

    requestRedraw(callerFile: string): void;

    requestRedrawCallerLine(callerFile: string, callerLine: number): void;

    setMapRendererListener(listener: MSFMapRendererListener): void;

    setPostProcessEffect(postProcessEffect: MSFPostProcessEffect): void;
}

declare class MSFMapRendererListener extends NSObject {

    static alloc(): MSFMapRendererListener; // inherited from NSObject

    static new(): MSFMapRendererListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFMapRendererListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onAfterDrawFrame(): void;

    onBeforeDrawFrame(): void;

    onSurfaceChangedHeight(width: number, height: number): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFMapTile extends NSObject {

    static alloc(): MSFMapTile; // inherited from NSObject

    static new(): MSFMapTile; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { x: number; y: number; zoom: number; frameNr: number; });

    description(): string;

    getFrameNr(): number;

    getTileId(): number;

    getX(): number;

    getY(): number;

    getZoom(): number;

    hash(): number;

    hashInternal(): number;

    initWithXYZoomFrameNr(x: number, y: number, zoom: number, frameNr: number): this;

    isEqualInternal(tile: MSFMapTile): boolean;
}

declare class MSFMapTilerOnlineTileDataSource extends MSFTileDataSource {

    static alloc(): MSFMapTilerOnlineTileDataSource; // inherited from NSObject

    static new(): MSFMapTilerOnlineTileDataSource; // inherited from NSObject

    constructor(o: { key: string; });

    getCustomServiceURL(): string;

    getTimeout(): number;

    initWithKey(key: string): this;

    setCustomServiceURL(serviceURL: string): void;

    setTimeout(timeout: number): void;
}

declare class MSFMapVec extends NSObject {

    static alloc(): MSFMapVec; // inherited from NSObject

    static new(): MSFMapVec; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { x: number; y: number; });

    constructor(o: { x: number; y: number; z: number; });

    add(v: MSFMapVec): MSFMapVec;

    crossProduct2D(v: MSFMapVec): number;

    crossProduct3D(v: MSFMapVec): MSFMapVec;

    description(): string;

    div(divider: number): MSFMapVec;

    dotProduct(v: MSFMapVec): number;

    getNormalized(): MSFMapVec;

    getX(): number;

    getY(): number;

    getZ(): number;

    hash(): number;

    hashInternal(): number;

    initWithXY(x: number, y: number): this;

    initWithXYZ(x: number, y: number, z: number): this;

    isEqualInternal(v: MSFMapVec): boolean;

    length(): number;

    mul(multiplier: number): MSFMapVec;

    sub(v: MSFMapVec): MSFMapVec;
}

declare class MSFMapView extends MGLKView {

    static alloc(): MSFMapView; // inherited from NSObject

    static appearance(): MSFMapView; // inherited from UIAppearance

    /**
     * @since 8.0
     */
    static appearanceForTraitCollection(trait: UITraitCollection): MSFMapView; // inherited from UIAppearance

    /**
     * @since 8.0
     * @deprecated 9.0
     */
    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MSFMapView; // inherited from UIAppearance

    /**
     * @since 9.0
     */
    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSFMapView; // inherited from UIAppearance

    /**
     * @since 5.0
     * @deprecated 9.0
     */
    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MSFMapView; // inherited from UIAppearance

    /**
     * @since 9.0
     */
    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MSFMapView; // inherited from UIAppearance

    static new(): MSFMapView; // inherited from NSObject

    cancelAllTasks(): void;

    clearAllCaches(): void;

    clearPreloadingCaches(): void;

    flyToZoomDurationSeconds(pos: MSFMapPos, zoom: number, durationSeconds: number): void;

    flyToZoomRotationTiltClimbHeightDurationSeconds(pos: MSFMapPos, zoom: number, rotation: number, tilt: number, climbHeight: number, durationSeconds: number): void;

    flyToZoomRotationTiltDurationSeconds(pos: MSFMapPos, zoom: number, rotation: number, tilt: number, durationSeconds: number): void;

    getFlightProgress(): number;

    getFocusPos(): MSFMapPos;

    getLayers(): MSFLayers;

    getMapEventListener(): MSFMapEventListener;

    getMapRenderer(): MSFMapRenderer;

    getOptions(): MSFOptions;

    getRotation(): number;

    getTilt(): number;

    getZoom(): number;

    isFlightActive(): boolean;

    mapToScreen(mapPos: MSFMapPos): MSFScreenPos;

    moveToFitBoundsScreenBoundsIntegerZoomDurationSeconds(mapBounds: MSFMapBounds, screenBounds: MSFScreenBounds, integerZoom: boolean, durationSeconds: number): void;

    moveToFitBoundsScreenBoundsIntegerZoomResetRotationResetTiltDurationSeconds(mapBounds: MSFMapBounds, screenBounds: MSFScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number): void;

    panDurationSeconds(deltaPos: MSFMapVec, durationSeconds: number): void;

    rotateDurationSeconds(deltaAngle: number, durationSeconds: number): void;

    rotateTargetPosDurationSeconds(deltaAngle: number, targetPos: MSFMapPos, durationSeconds: number): void;

    screenToMap(screenPos: MSFScreenPos): MSFMapPos;

    setFocusPosDurationSeconds(pos: MSFMapPos, durationSeconds: number): void;

    setMapEventListener(mapEventListener: MSFMapEventListener): void;

    setRotationDurationSeconds(angle: number, durationSeconds: number): void;

    setRotationTargetPosDurationSeconds(angle: number, targetPos: MSFMapPos, durationSeconds: number): void;

    setTiltDurationSeconds(tilt: number, durationSeconds: number): void;

    setTranslucent(translucent: boolean): void;

    setZoomDurationSeconds(zoom: number, durationSeconds: number): void;

    setZoomTargetPosDurationSeconds(zoom: number, targetPos: MSFMapPos, durationSeconds: number): void;

    stopFlight(): void;

    tiltDurationSeconds(deltaTilt: number, durationSeconds: number): void;

    zoomDurationSeconds(deltaZoom: number, durationSeconds: number): void;

    zoomTargetPosDurationSeconds(deltaZoom: number, targetPos: MSFMapPos, durationSeconds: number): void;
}

declare class MSFMarker extends MSFBillboard {

    static alloc(): MSFMarker; // inherited from NSObject

    static new(): MSFMarker; // inherited from NSObject

    constructor(o: { baseBillboard: MSFBillboard; style: MSFMarkerStyle; });

    constructor(o: { geometry: MSFGeometry; style: MSFMarkerStyle; });

    constructor(o: { pos: MSFMapPos; style: MSFMarkerStyle; });

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
}

declare class MSFMergedMBVTTileDataSource extends MSFTileDataSource {

    static alloc(): MSFMergedMBVTTileDataSource; // inherited from NSObject

    static new(): MSFMergedMBVTTileDataSource; // inherited from NSObject

    constructor(o: { dataSource1: MSFTileDataSource; dataSource2: MSFTileDataSource; });

    getTileMask(): string;

    initWithDataSource1DataSource2(dataSource1: MSFTileDataSource, dataSource2: MSFTileDataSource): this;
}

declare class MSFMultiGeometry extends MSFGeometry {

    static alloc(): MSFMultiGeometry; // inherited from NSObject

    static new(): MSFMultiGeometry; // inherited from NSObject

    constructor(o: { geometries: MSFGeometryVector; });

    getGeometry(index: number): MSFGeometry;

    getGeometryCount(): number;

    initWithGeometries(geometries: MSFGeometryVector): this;
}

declare class MSFMultiLineGeometry extends MSFMultiGeometry {

    static alloc(): MSFMultiLineGeometry; // inherited from NSObject

    static new(): MSFMultiLineGeometry; // inherited from NSObject

    constructor(o: { geometries: MSFLineGeometryVector; });

    getGeometry(index: number): MSFLineGeometry;

    initWithGeometries(geometries: MSFLineGeometryVector): this;
}

declare class MSFMultiOSMOfflineGeocodingService extends MSFGeocodingService {

    static alloc(): MSFMultiOSMOfflineGeocodingService; // inherited from NSObject

    static new(): MSFMultiOSMOfflineGeocodingService; // inherited from NSObject

    add(database: string): void;

    remove(database: string): boolean;
}

declare class MSFMultiOSMOfflineReverseGeocodingService extends MSFReverseGeocodingService {

    static alloc(): MSFMultiOSMOfflineReverseGeocodingService; // inherited from NSObject

    static new(): MSFMultiOSMOfflineReverseGeocodingService; // inherited from NSObject

    add(database: string): void;

    remove(database: string): boolean;
}

declare class MSFMultiPointGeometry extends MSFMultiGeometry {

    static alloc(): MSFMultiPointGeometry; // inherited from NSObject

    static new(): MSFMultiPointGeometry; // inherited from NSObject

    constructor(o: { geometries: MSFPointGeometryVector; });

    getGeometry(index: number): MSFPointGeometry;

    initWithGeometries(geometries: MSFPointGeometryVector): this;
}

declare class MSFMultiPolygonGeometry extends MSFMultiGeometry {

    static alloc(): MSFMultiPolygonGeometry; // inherited from NSObject

    static new(): MSFMultiPolygonGeometry; // inherited from NSObject

    constructor(o: { geometries: MSFPolygonGeometryVector; });

    getGeometry(index: number): MSFPolygonGeometry;

    initWithGeometries(geometries: MSFPolygonGeometryVector): this;
}

declare class MSFMultiTileDataSource extends MSFTileDataSource {

    static alloc(): MSFMultiTileDataSource; // inherited from NSObject

    static new(): MSFMultiTileDataSource; // inherited from NSObject

    constructor(o: { maxOpenedPackages: number; });

    add(datasource: MSFTileDataSource): void;

    addTileMask(datasource: MSFTileDataSource, tileMask: string): void;

    initWithMaxOpenedPackages(maxOpenedPackages: number): this;

    remove(datasource: MSFTileDataSource): boolean;
}

declare class MSFMultiValhallaOfflineRoutingService extends MSFRoutingService {

    static alloc(): MSFMultiValhallaOfflineRoutingService; // inherited from NSObject

    static new(): MSFMultiValhallaOfflineRoutingService; // inherited from NSObject

    add(database: string): void;

    addLocaleJson(key: string, json: string): void;

    getConfigurationParameter(param: string): MSFVariant;

    remove(database: string): boolean;

    setConfigurationParameterValue(param: string, value: MSFVariant): void;
}

declare class MSFNMLModel extends MSFBillboard {

    static alloc(): MSFNMLModel; // inherited from NSObject

    static new(): MSFNMLModel; // inherited from NSObject

    constructor(o: { baseBillboard: MSFBillboard; style: MSFNMLModelStyle; });

    constructor(o: { geometry: MSFGeometry; style: MSFNMLModelStyle; });

    constructor(o: { pos: MSFMapPos; style: MSFNMLModelStyle; });

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

    constructor(o: { path: string; });

    initWithPath(path: string): this;
}

declare class MSFOSMOfflineReverseGeocodingService extends MSFReverseGeocodingService {

    static alloc(): MSFOSMOfflineReverseGeocodingService; // inherited from NSObject

    static new(): MSFOSMOfflineReverseGeocodingService; // inherited from NSObject

    constructor(o: { path: string; });

    initWithPath(path: string): this;
}

declare class MSFOSRMOfflineRoutingService extends MSFRoutingService {

    static alloc(): MSFOSRMOfflineRoutingService; // inherited from NSObject

    static new(): MSFOSRMOfflineRoutingService; // inherited from NSObject

    constructor(o: { path: string; });

    initWithPath(path: string): this;
}

declare class MSFOptions extends NSObject {

    static alloc(): MSFOptions; // inherited from NSObject

    static new(): MSFOptions; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getAmbientLightColor(): MSFColor;

    getBackgroundBitmap(): MSFBitmap;

    getBaseProjection(): MSFProjection;

    getClearColor(): MSFColor;

    getDPI(): number;

    getDoubleClickMaxDuration(): number;

    getDrawDistance(): number;

    getEnvelopeThreadPoolSize(): number;

    getFieldOfViewY(): number;

    getFocusPointOffset(): MSFScreenPos;

    getFogOptions(): MSFFogOptions;

    getFreeRoamLookSensitivity(): number;

    getFreeRoamMode(): MSFFreeRoamMode;

    getFreeRoamMoveSpeed(): number;

    getLightOptions(): MSFLightOptions;

    getLongClickDuration(): number;

    getMainLightColor(): MSFColor;

    getMainLightDirection(): MSFMapVec;

    getPanBounds(): MSFMapBounds;

    getPanningMode(): MSFPanningMode;

    getPanningSpeedMode(): MSFPanningSpeedMode;

    getPivotMode(): MSFPivotMode;

    getRenderProjectionMode(): MSFRenderProjectionMode;

    getSkyColor(): MSFColor;

    getSkyOptions(): MSFSkyOptions;

    getTerrainOptions(): MSFTerrainOptions;

    getTileDrawSize(): number;

    getTileLODFactor(): number;

    getTileThreadPoolSize(): number;

    getTiltRange(): MSFMapRange;

    getZoomRange(): MSFMapRange;

    hash(): number;

    isClickTypeDetection(): boolean;

    isDebugTileBorders(): boolean;

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

    setDebugTileBorders(enabled: boolean): void;

    setDoubleClickDetection(enabled: boolean): void;

    setDoubleClickMaxDuration(duration: number): void;

    setDrawDistance(drawDistance: number): void;

    setEnvelopeThreadPoolSize(poolSize: number): void;

    setFieldOfViewY(fovY: number): void;

    setFocusPointOffset(offset: MSFScreenPos): void;

    setFogOptions(fogOptions: MSFFogOptions): void;

    setFreeRoamLookSensitivity(degreesPerInch: number): void;

    setFreeRoamMode(mode: MSFFreeRoamMode): void;

    setFreeRoamMoveSpeed(distancePerInch: number): void;

    setKineticPan(enabled: boolean): void;

    setKineticRotation(enabled: boolean): void;

    setKineticZoom(enabled: boolean): void;

    setLayersLabelsProcessedInReverseOrder(enabled: boolean): void;

    setLightOptions(lightOptions: MSFLightOptions): void;

    setLongClickDuration(duration: number): void;

    setMainLightColor(color: MSFColor): void;

    setMainLightDirection(direction: MSFMapVec): void;

    setPanBounds(panBounds: MSFMapBounds): void;

    setPanningMode(panningMode: MSFPanningMode): void;

    setPanningSpeedMode(mode: MSFPanningSpeedMode): void;

    setPivotMode(pivotMode: MSFPivotMode): void;

    setRenderProjectionMode(renderProjectionMode: MSFRenderProjectionMode): void;

    setRestrictedPanning(enabled: boolean): void;

    setRotatable(enabled: boolean): void;

    setRotationGestures(enabled: boolean): void;

    setSeamlessPanning(enabled: boolean): void;

    setSkyColor(color: MSFColor): void;

    setSkyOptions(skyOptions: MSFSkyOptions): void;

    setTerrainOptions(terrainOptions: MSFTerrainOptions): void;

    setTileDrawSize(tileDrawSize: number): void;

    setTileLODFactor(factor: number): void;

    setTileThreadPoolSize(poolSize: number): void;

    setTiltGestureReversed(reversed: boolean): void;

    setTiltRange(tiltRange: MSFMapRange): void;

    setUserInput(enabled: boolean): void;

    setZoomGestures(enabled: boolean): void;

    setZoomRange(zoomRange: MSFMapRange): void;
}

declare class MSFOrderedTileDataSource extends MSFTileDataSource {

    static alloc(): MSFOrderedTileDataSource; // inherited from NSObject

    static new(): MSFOrderedTileDataSource; // inherited from NSObject

    constructor(o: { dataSource1: MSFTileDataSource; dataSource2: MSFTileDataSource; });

    initWithDataSource1DataSource2(dataSource1: MSFTileDataSource, dataSource2: MSFTileDataSource): this;
}

declare class MSFPMTilesTileDataSource extends MSFTileDataSource {

    static alloc(): MSFPMTilesTileDataSource; // inherited from NSObject

    static new(): MSFPMTilesTileDataSource; // inherited from NSObject

    constructor(o: { minZoom: number; maxZoom: number; path: string; });

    constructor(o: { path: string; });

    getMetaData(): string;

    initWithMinZoomMaxZoomPath(minZoom: number, maxZoom: number, path: string): this;

    initWithPath(path: string): this;
}

declare const enum MSFPackageAction {

    F_PACKAGE_ACTION_READY = 0,

    F_PACKAGE_ACTION_WAITING = 1,

    F_PACKAGE_ACTION_DOWNLOADING = 2,

    F_PACKAGE_ACTION_COPYING = 3,

    F_PACKAGE_ACTION_REMOVING = 4
}

declare const enum MSFPackageErrorType {

    F_PACKAGE_ERROR_TYPE_SYSTEM = 0,

    F_PACKAGE_ERROR_TYPE_CONNECTION = 1,

    F_PACKAGE_ERROR_TYPE_DOWNLOAD_LIMIT_EXCEEDED = 2,

    F_PACKAGE_ERROR_TYPE_PACKAGE_TOO_BIG = 3,

    F_PACKAGE_ERROR_TYPE_NO_OFFLINE_PLAN = 4
}

declare class MSFPackageInfo extends NSObject {

    static alloc(): MSFPackageInfo; // inherited from NSObject

    static new(): MSFPackageInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { packageId: string; packageType: MSFPackageType; version: number; size: number; serverURL: string; tileMask: MSFPackageTileMask; metaInfo: MSFPackageMetaInfo; });

    getMetaInfo(): MSFPackageMetaInfo;

    getName(): string;

    getNames(lang: string): MSFStringVector;

    getPackageId(): string;

    getPackageType(): MSFPackageType;

    getSize(): number;

    getTileMask(): MSFPackageTileMask;

    getVersion(): number;

    hash(): number;

    initWithPackageIdPackageTypeVersionSizeServerURLTileMaskMetaInfo(packageId: string, packageType: MSFPackageType, version: number, size: number, serverURL: string, tileMask: MSFPackageTileMask, metaInfo: MSFPackageMetaInfo): this;
}

declare class MSFPackageInfoVector extends NSObject {

    static alloc(): MSFPackageInfoVector; // inherited from NSObject

    static new(): MSFPackageInfoVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFPackageInfo): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFPackageInfo;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFPackageInfo): void;

    size(): number;
}

declare class MSFPackageManager extends NSObject {

    static alloc(): MSFPackageManager; // inherited from NSObject

    static new(): MSFPackageManager; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFPackageManager;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { packageListURL: string; dataFolder: string; serverEncKey: string; localEncKey: string; });

    cancelPackageTasks(packageId: string): void;

    getLocalPackage(packageId: string): MSFPackageInfo;

    getLocalPackageStatusVersion(packageId: string, version: number): MSFPackageStatus;

    getLocalPackages(): MSFPackageInfoVector;

    getPackageManagerListener(): MSFPackageManagerListener;

    getServerPackage(packageId: string): MSFPackageInfo;

    getServerPackageListAge(): number;

    getServerPackageListMetaInfo(): MSFPackageMetaInfo;

    getServerPackages(): MSFPackageInfoVector;

    hash(): number;

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
}

declare class MSFPackageManagerGeocodingService extends MSFGeocodingService {

    static alloc(): MSFPackageManagerGeocodingService; // inherited from NSObject

    static new(): MSFPackageManagerGeocodingService; // inherited from NSObject

    constructor(o: { packageManager: MSFPackageManager; });

    initWithPackageManager(packageManager: MSFPackageManager): this;
}

declare class MSFPackageManagerListener extends NSObject {

    static alloc(): MSFPackageManagerListener; // inherited from NSObject

    static new(): MSFPackageManagerListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFPackageManagerListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onPackageCancelledVersion(arg1: string, version: number): void;

    onPackageFailedVersionErrorType(arg1: string, version: number, errorType: MSFPackageErrorType): void;

    onPackageListFailed(): void;

    onPackageListUpdated(): void;

    onPackageStatusChangedVersionStatus(arg1: string, version: number, status: MSFPackageStatus): void;

    onPackageUpdatedVersion(arg1: string, version: number): void;

    onStyleFailed(styleName: string): void;

    onStyleUpdated(styleName: string): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFPackageManagerReverseGeocodingService extends MSFReverseGeocodingService {

    static alloc(): MSFPackageManagerReverseGeocodingService; // inherited from NSObject

    static new(): MSFPackageManagerReverseGeocodingService; // inherited from NSObject

    constructor(o: { packageManager: MSFPackageManager; });

    initWithPackageManager(packageManager: MSFPackageManager): this;
}

declare class MSFPackageManagerRoutingService extends MSFRoutingService {

    static alloc(): MSFPackageManagerRoutingService; // inherited from NSObject

    static new(): MSFPackageManagerRoutingService; // inherited from NSObject

    constructor(o: { packageManager: MSFPackageManager; });

    initWithPackageManager(packageManager: MSFPackageManager): this;
}

declare class MSFPackageManagerTileDataSource extends MSFTileDataSource {

    static alloc(): MSFPackageManagerTileDataSource; // inherited from NSObject

    static new(): MSFPackageManagerTileDataSource; // inherited from NSObject

    constructor(o: { packageManager: MSFPackageManager; });

    getPackageManager(): MSFPackageManager;

    initWithPackageManager(packageManager: MSFPackageManager): this;
}

declare class MSFPackageManagerValhallaRoutingService extends MSFRoutingService {

    static alloc(): MSFPackageManagerValhallaRoutingService; // inherited from NSObject

    static new(): MSFPackageManagerValhallaRoutingService; // inherited from NSObject

    constructor(o: { packageManager: MSFPackageManager; });

    addLocaleJson(key: string, json: string): void;

    getConfigurationParameter(param: string): MSFVariant;

    initWithPackageManager(packageManager: MSFPackageManager): this;

    setConfigurationParameterValue(param: string, value: MSFVariant): void;
}

declare class MSFPackageMetaInfo extends NSObject {

    static alloc(): MSFPackageMetaInfo; // inherited from NSObject

    static new(): MSFPackageMetaInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { var: MSFVariant; });

    getVariant(): MSFVariant;

    hash(): number;

    initWithVar(var_: MSFVariant): this;
}

declare class MSFPackageStatus extends NSObject {

    static alloc(): MSFPackageStatus; // inherited from NSObject

    static new(): MSFPackageStatus; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { currentAction: MSFPackageAction; paused: boolean; progress: number; });

    getCurrentAction(): MSFPackageAction;

    getProgress(): number;

    hash(): number;

    initWithCurrentActionPausedProgress(currentAction: MSFPackageAction, paused: boolean, progress: number): this;

    isPaused(): boolean;
}

declare class MSFPackageTileMask extends NSObject {

    static alloc(): MSFPackageTileMask; // inherited from NSObject

    static new(): MSFPackageTileMask; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getBoundingPolygon(projection: MSFProjection): MSFMultiPolygonGeometry;

    getMaxZoomLevel(): number;

    getStringValue(): string;

    getTileStatus(tile: MSFMapTile): MSFPackageTileStatus;

    hash(): number;
}

declare const enum MSFPackageTileStatus {

    F_PACKAGE_TILE_STATUS_MISSING = 0,

    F_PACKAGE_TILE_STATUS_PARTIAL = 1,

    F_PACKAGE_TILE_STATUS_FULL = 2
}

declare const enum MSFPackageType {

    F_PACKAGE_TYPE_MAP = 0,

    F_PACKAGE_TYPE_ROUTING = 1,

    F_PACKAGE_TYPE_GEOCODING = 2,

    F_PACKAGE_TYPE_VALHALLA_ROUTING = 3
}

declare const enum MSFPanningMode {

    F_PANNING_MODE_FREE = 0,

    F_PANNING_MODE_STICKY = 1,

    F_PANNING_MODE_STICKY_FINAL = 2
}

declare const enum MSFPanningSpeedMode {

    F_PANNING_SPEED_MODE_MAP = 0,

    F_PANNING_SPEED_MODE_ANCHORED = 1,

    F_PANNING_SPEED_MODE_CONSTANT = 2
}

declare class MSFPeliasOnlineGeocodingService extends MSFGeocodingService {

    static alloc(): MSFPeliasOnlineGeocodingService; // inherited from NSObject

    static new(): MSFPeliasOnlineGeocodingService; // inherited from NSObject

    constructor(o: { apiKey: string; });

    getCustomServiceURL(): string;

    initWithApiKey(apiKey: string): this;

    setCustomServiceURL(serviceURL: string): void;
}

declare class MSFPeliasOnlineReverseGeocodingService extends MSFReverseGeocodingService {

    static alloc(): MSFPeliasOnlineReverseGeocodingService; // inherited from NSObject

    static new(): MSFPeliasOnlineReverseGeocodingService; // inherited from NSObject

    constructor(o: { apiKey: string; });

    getCustomServiceURL(): string;

    initWithApiKey(apiKey: string): this;

    setCustomServiceURL(serviceURL: string): void;
}

declare class MSFPersistentCacheTileDataSource extends MSFCacheTileDataSource {

    static alloc(): MSFPersistentCacheTileDataSource; // inherited from NSObject

    static new(): MSFPersistentCacheTileDataSource; // inherited from NSObject

    constructor(o: { dataSource: MSFTileDataSource; databasePath: string; });

    close(): void;

    initWithDataSourceDatabasePath(dataSource: MSFTileDataSource, databasePath: string): this;

    isCacheOnlyMode(): boolean;

    isOpen(): boolean;

    setCacheOnlyMode(enabled: boolean): void;

    startDownloadAreaMinZoomMaxZoomFetchDelayTileDownloadListener(mapBounds: MSFMapBounds, minZoom: number, maxZoom: number, fetchDelay: number, tileDownloadListener: MSFTileDownloadListener): void;

    stopAllDownloads(): void;
}

declare const enum MSFPivotMode {

    F_PIVOT_MODE_TOUCHPOINT = 0,

    F_PIVOT_MODE_CENTERPOINT = 1
}

declare class MSFPoint extends MSFVectorElement {

    static alloc(): MSFPoint; // inherited from NSObject

    static new(): MSFPoint; // inherited from NSObject

    constructor(o: { geometry: MSFPointGeometry; style: MSFPointStyle; });

    constructor(o: { pos: MSFMapPos; style: MSFPointStyle; });

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

    constructor(o: { pos: MSFMapPos; });

    getPos(): MSFMapPos;

    initWithPos(pos: MSFMapPos): this;
}

declare class MSFPointGeometryVector extends NSObject {

    static alloc(): MSFPointGeometryVector; // inherited from NSObject

    static new(): MSFPointGeometryVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFPointGeometry): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFPointGeometry;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFPointGeometry): void;

    size(): number;
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

    constructor(o: { geometry: MSFPolygonGeometry; style: MSFPolygonStyle; });

    constructor(o: { poses: MSFMapPosVector; holes: MSFMapPosVectorVector; style: MSFPolygonStyle; });

    constructor(o: { poses: MSFMapPosVector; style: MSFPolygonStyle; });

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

    constructor(o: { geometry: MSFPolygonGeometry; style: MSFPolygon3DStyle; height: number; });

    constructor(o: { poses: MSFMapPosVector; holes: MSFMapPosVectorVector; style: MSFPolygon3DStyle; height: number; });

    constructor(o: { poses: MSFMapPosVector; style: MSFPolygon3DStyle; height: number; });

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

    constructor(o: { poses: MSFMapPosVector; });

    constructor(o: { poses: MSFMapPosVector; holes: MSFMapPosVectorVector; });

    constructor(o: { rings: MSFMapPosVectorVector; });

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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFPolygonGeometry): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFPolygonGeometry;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFPolygonGeometry): void;

    size(): number;
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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getClickInfo(): MSFClickInfo;

    getClickPos(): MSFMapPos;

    getClickType(): MSFClickType;

    getElementClickPos(): MSFScreenPos;

    getPopup(): MSFPopup;

    hash(): number;
}

declare class MSFPopupDrawInfo extends NSObject {

    static alloc(): MSFPopupDrawInfo; // inherited from NSObject

    static new(): MSFPopupDrawInfo; // inherited from NSObject

    constructor(o: { anchorScreenPos: MSFScreenPos; screenBounds: MSFScreenBounds; popup: MSFPopup; dpToPX: number; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getAnchorScreenPos(): MSFScreenPos;

    getDPToPX(): number;

    getPopup(): MSFPopup;

    getScreenBounds(): MSFScreenBounds;

    hash(): number;

    initWithAnchorScreenPosScreenBoundsPopupDpToPX(anchorScreenPos: MSFScreenPos, screenBounds: MSFScreenBounds, popup: MSFPopup, dpToPX: number): this;
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

declare class MSFPostProcessEffect extends NSObject {

    static alloc(): MSFPostProcessEffect; // inherited from NSObject

    static new(): MSFPostProcessEffect; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { name: string; fragmentShader: string; });

    getColorParameter(name: string): MSFColor;

    getFloatParameter(name: string): number;

    getFragmentShader(): string;

    getName(): string;

    hash(): number;

    initWithNameFragmentShader(name: string, fragmentShader: string): this;

    isTerrainDepthRequired(): boolean;

    setColorParameterColor(name: string, color: MSFColor): void;

    setFloatParameterValue(name: string, value: number): void;

    setTerrainDepthRequired(required: boolean): void;
}

declare class MSFProjection extends NSObject {

    static alloc(): MSFProjection; // inherited from NSObject

    static new(): MSFProjection; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFProjection;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    fromLatLng(lat: number, lng: number): MSFMapPos;

    fromWgs84(pos: MSFMapPos): MSFMapPos;

    getBounds(): MSFMapBounds;

    getName(): string;

    hash(): number;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;

    toLatLongY(x: number, y: number): MSFMapPos;

    toWgs84(pos: MSFMapPos): MSFMapPos;
}

declare class MSFRasterTileClickInfo extends NSObject {

    static alloc(): MSFRasterTileClickInfo; // inherited from NSObject

    static new(): MSFRasterTileClickInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getClickInfo(): MSFClickInfo;

    getClickPos(): MSFMapPos;

    getClickType(): MSFClickType;

    getInterpolatedColor(): MSFColor;

    getLayer(): MSFLayer;

    getMapTile(): MSFMapTile;

    getNearestColor(): MSFColor;

    hash(): number;
}

declare class MSFRasterTileEventListener extends NSObject {

    static alloc(): MSFRasterTileEventListener; // inherited from NSObject

    static new(): MSFRasterTileEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFRasterTileEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onRasterTileClicked(clickInfo: MSFRasterTileClickInfo): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare const enum MSFRasterTileFilterMode {

    F_RASTER_TILE_FILTER_MODE_NEAREST = 0,

    F_RASTER_TILE_FILTER_MODE_BILINEAR = 1,

    F_RASTER_TILE_FILTER_MODE_BICUBIC = 2
}

declare class MSFRasterTileLayer extends MSFTileLayer {

    static alloc(): MSFRasterTileLayer; // inherited from NSObject

    static new(): MSFRasterTileLayer; // inherited from NSObject

    constructor(o: { dataSource: MSFTileDataSource; });

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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onRedrawRequested(): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare const enum MSFRenderProjectionMode {

    F_RENDER_PROJECTION_MODE_PLANAR = 0,

    F_RENDER_PROJECTION_MODE_SPHERICAL = 1
}

declare class MSFRendererCaptureListener extends NSObject {

    static alloc(): MSFRendererCaptureListener; // inherited from NSObject

    static new(): MSFRendererCaptureListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFRendererCaptureListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onMapRendered(bitmap: MSFBitmap): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFReverseGeocodingRequest extends NSObject {

    static alloc(): MSFReverseGeocodingRequest; // inherited from NSObject

    static new(): MSFReverseGeocodingRequest; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { projection: MSFProjection; location: MSFMapPos; });

    description(): string;

    getCustomParameter(param: string): MSFVariant;

    getLocation(): MSFMapPos;

    getProjection(): MSFProjection;

    getSearchRadius(): number;

    hash(): number;

    initWithProjectionLocation(projection: MSFProjection, location: MSFMapPos): this;

    setCustomParameterValue(param: string, value: MSFVariant): void;

    setSearchRadius(radius: number): void;
}

declare class MSFReverseGeocodingService extends NSObject {

    static alloc(): MSFReverseGeocodingService; // inherited from NSObject

    static new(): MSFReverseGeocodingService; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFReverseGeocodingService;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    calculateAddresses(request: MSFReverseGeocodingRequest): MSFGeocodingResultVector;

    getLanguage(): string;

    setLanguage(lang: string): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFRouteMatchingEdge extends NSObject {

    static alloc(): MSFRouteMatchingEdge; // inherited from NSObject

    static new(): MSFRouteMatchingEdge; // inherited from NSObject

    constructor(o: { attributes: MSFStringVariantMap; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    containsAttribute(name: string): boolean;

    description(): string;

    getAttribute(name: string): MSFVariant;

    hash(): number;

    initWithAttributes(attributes: MSFStringVariantMap): this;
}

declare class MSFRouteMatchingEdgeVector extends NSObject {

    static alloc(): MSFRouteMatchingEdgeVector; // inherited from NSObject

    static new(): MSFRouteMatchingEdgeVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFRouteMatchingEdge): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFRouteMatchingEdge;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFRouteMatchingEdge): void;

    size(): number;
}

declare class MSFRouteMatchingPoint extends NSObject {

    static alloc(): MSFRouteMatchingPoint; // inherited from NSObject

    static new(): MSFRouteMatchingPoint; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { pos: MSFMapPos; type: MSFRouteMatchingPointType; edgeIndex: number; });

    description(): string;

    getEdgeIndex(): number;

    getPos(): MSFMapPos;

    getType(): MSFRouteMatchingPointType;

    hash(): number;

    initWithPosTypeEdgeIndex(pos: MSFMapPos, type: MSFRouteMatchingPointType, edgeIndex: number): this;
}

declare const enum MSFRouteMatchingPointType {

    F_ROUTE_MATCHING_POINT_UNMATCHED = 0,

    F_ROUTE_MATCHING_POINT_INTERPOLATED = 1,

    F_ROUTE_MATCHING_POINT_MATCHED = 2
}

declare class MSFRouteMatchingPointVector extends NSObject {

    static alloc(): MSFRouteMatchingPointVector; // inherited from NSObject

    static new(): MSFRouteMatchingPointVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFRouteMatchingPoint): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFRouteMatchingPoint;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFRouteMatchingPoint): void;

    size(): number;
}

declare class MSFRouteMatchingRequest extends NSObject {

    static alloc(): MSFRouteMatchingRequest; // inherited from NSObject

    static new(): MSFRouteMatchingRequest; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { projection: MSFProjection; points: MSFMapPosVector; accuracy: number; });

    description(): string;

    getAccuracy(): number;

    getCustomParameter(param: string): MSFVariant;

    getPointParameterParam(index: number, param: string): MSFVariant;

    getPoints(): MSFMapPosVector;

    getProjection(): MSFProjection;

    hash(): number;

    initWithProjectionPointsAccuracy(projection: MSFProjection, points: MSFMapPosVector, accuracy: number): this;

    setCustomParameterValue(param: string, value: MSFVariant): void;

    setPointParameterParamValue(index: number, param: string, value: MSFVariant): void;
}

declare class MSFRouteMatchingResult extends NSObject {

    static alloc(): MSFRouteMatchingResult; // inherited from NSObject

    static new(): MSFRouteMatchingResult; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { projection: MSFProjection; matchingPoints: MSFRouteMatchingPointVector; matchingEdges: MSFRouteMatchingEdgeVector; rawResult: string; });

    description(): string;

    getMatchingEdges(): MSFRouteMatchingEdgeVector;

    getMatchingPoints(): MSFRouteMatchingPointVector;

    getPoints(): MSFMapPosVector;

    getProjection(): MSFProjection;

    getRawResult(): string;

    hash(): number;

    initWithProjectionMatchingPointsMatchingEdgesRawResult(projection: MSFProjection, matchingPoints: MSFRouteMatchingPointVector, matchingEdges: MSFRouteMatchingEdgeVector, rawResult: string): this;
}

declare const enum MSFRoutingAction {

    F_ROUTING_ACTION_HEAD_ON = 0,

    F_ROUTING_ACTION_FINISH = 1,

    F_ROUTING_ACTION_NO_TURN = 2,

    F_ROUTING_ACTION_GO_STRAIGHT = 3,

    F_ROUTING_ACTION_TURN_RIGHT = 4,

    F_ROUTING_ACTION_UTURN = 5,

    F_ROUTING_ACTION_TURN_LEFT = 6,

    F_ROUTING_ACTION_REACH_VIA_LOCATION = 7,

    F_ROUTING_ACTION_ENTER_ROUNDABOUT = 8,

    F_ROUTING_ACTION_LEAVE_ROUNDABOUT = 9,

    F_ROUTING_ACTION_STAY_ON_ROUNDABOUT = 10,

    F_ROUTING_ACTION_START_AT_END_OF_STREET = 11,

    F_ROUTING_ACTION_ENTER_AGAINST_ALLOWED_DIRECTION = 12,

    F_ROUTING_ACTION_LEAVE_AGAINST_ALLOWED_DIRECTION = 13,

    F_ROUTING_ACTION_GO_UP = 14,

    F_ROUTING_ACTION_GO_DOWN = 15,

    F_ROUTING_ACTION_WAIT = 16,

    F_ROUTING_ACTION_ENTER_FERRY = 17,

    F_ROUTING_ACTION_LEAVE_FERRY = 18
}

declare class MSFRoutingInstruction extends NSObject {

    static alloc(): MSFRoutingInstruction; // inherited from NSObject

    static new(): MSFRoutingInstruction; // inherited from NSObject

    constructor(o: { action: MSFRoutingAction; pointIndex: number; streetName: string; instruction: string; turnAngle: number; azimuth: number; distance: number; time: number; geometryTag: MSFVariant; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    description(): string;

    getAction(): MSFRoutingAction;

    getAzimuth(): number;

    getDistance(): number;

    getGeometryTag(): MSFVariant;

    getInstruction(): string;

    getPointIndex(): number;

    getStreetName(): string;

    getTime(): number;

    getTurnAngle(): number;

    hash(): number;

    initWithActionPointIndexStreetNameInstructionTurnAngleAzimuthDistanceTimeGeometryTag(action: MSFRoutingAction, pointIndex: number, streetName: string, instruction: string, turnAngle: number, azimuth: number, distance: number, time: number, geometryTag: MSFVariant): this;
}

declare class MSFRoutingInstructionVector extends NSObject {

    static alloc(): MSFRoutingInstructionVector; // inherited from NSObject

    static new(): MSFRoutingInstructionVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFRoutingInstruction): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFRoutingInstruction;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFRoutingInstruction): void;

    size(): number;
}

declare class MSFRoutingRequest extends NSObject {

    static alloc(): MSFRoutingRequest; // inherited from NSObject

    static new(): MSFRoutingRequest; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { projection: MSFProjection; points: MSFMapPosVector; });

    description(): string;

    getCustomParameter(param: string): MSFVariant;

    getPointParameterParam(index: number, param: string): MSFVariant;

    getPoints(): MSFMapPosVector;

    getProjection(): MSFProjection;

    hash(): number;

    initWithProjectionPoints(projection: MSFProjection, points: MSFMapPosVector): this;

    setCustomParameterValue(param: string, value: MSFVariant): void;

    setPointParameterParamValue(index: number, param: string, value: MSFVariant): void;
}

declare class MSFRoutingResult extends NSObject {

    static alloc(): MSFRoutingResult; // inherited from NSObject

    static new(): MSFRoutingResult; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { projection: MSFProjection; points: MSFMapPosVector; instructions: MSFRoutingInstructionVector; rawResult: string; });

    description(): string;

    getInstructions(): MSFRoutingInstructionVector;

    getPoints(): MSFMapPosVector;

    getProjection(): MSFProjection;

    getRawResult(): string;

    getTotalDistance(): number;

    getTotalTime(): number;

    hash(): number;

    initWithProjectionPointsInstructionsRawResult(projection: MSFProjection, points: MSFMapPosVector, instructions: MSFRoutingInstructionVector, rawResult: string): this;
}

declare class MSFRoutingService extends NSObject {

    static alloc(): MSFRoutingService; // inherited from NSObject

    static new(): MSFRoutingService; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFRoutingService;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    calculateRoute(request: MSFRoutingRequest): MSFRoutingResult;

    getProfile(): string;

    matchRoute(request: MSFRouteMatchingRequest): MSFRouteMatchingResult;

    setProfile(profile: string): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFSGREOfflineRoutingService extends MSFRoutingService {

    static alloc(): MSFSGREOfflineRoutingService; // inherited from NSObject

    static new(): MSFSGREOfflineRoutingService; // inherited from NSObject

    constructor(o: { geoJSON: MSFVariant; config: MSFVariant; });

    constructor(o: { projection: MSFProjection; featureCollection: MSFFeatureCollection; config: MSFVariant; });

    getRoutingParameter(param: string): number;

    initWithGeoJSONConfig(geoJSON: MSFVariant, config: MSFVariant): this;

    initWithProjectionFeatureCollectionConfig(projection: MSFProjection, featureCollection: MSFFeatureCollection, config: MSFVariant): this;

    setRoutingParameterValue(param: string, value: number): void;
}

declare class MSFScreenBounds extends NSObject {

    static alloc(): MSFScreenBounds; // inherited from NSObject

    static new(): MSFScreenBounds; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { min: MSFScreenPos; max: MSFScreenPos; });

    containsBounds(bounds: MSFScreenBounds): boolean;

    containsPos(pos: MSFScreenPos): boolean;

    description(): string;

    getCenter(): MSFScreenPos;

    getHeight(): number;

    getMax(): MSFScreenPos;

    getMin(): MSFScreenPos;

    getWidth(): number;

    hash(): number;

    hashInternal(): number;

    initWithMinMax(min: MSFScreenPos, max: MSFScreenPos): this;

    intersects(bounds: MSFScreenBounds): boolean;

    isEqualInternal(ScreenBounds: MSFScreenBounds): boolean;
}

declare class MSFScreenPos extends NSObject {

    static alloc(): MSFScreenPos; // inherited from NSObject

    static new(): MSFScreenPos; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { x: number; y: number; });

    description(): string;

    getX(): number;

    getY(): number;

    hash(): number;

    hashInternal(): number;

    initWithXY(x: number, y: number): this;

    isEqualInternal(p: MSFScreenPos): boolean;
}

declare class MSFScreenPosVector extends NSObject {

    static alloc(): MSFScreenPosVector; // inherited from NSObject

    static new(): MSFScreenPosVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFScreenPos): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFScreenPos;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFScreenPos): void;

    size(): number;
}

declare class MSFSearchRequest extends NSObject {

    static alloc(): MSFSearchRequest; // inherited from NSObject

    static new(): MSFSearchRequest; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    description(): string;

    getFilterExpression(): string;

    getGeometry(): MSFGeometry;

    getProjection(): MSFProjection;

    getRegexFilter(): string;

    getSearchRadius(): number;

    hash(): number;

    setFilterExpression(expr: string): void;

    setGeometry(geometry: MSFGeometry): void;

    setProjection(projection: MSFProjection): void;

    setRegexFilter(regex: string): void;

    setSearchRadius(radius: number): void;
}

declare class MSFSkyOptions extends NSObject {

    static alloc(): MSFSkyOptions; // inherited from NSObject

    static new(): MSFSkyOptions; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getGroundColor(): MSFColor;

    getHorizonBlend(): number;

    getHorizonColor(): MSFColor;

    getShaderSource(): string;

    getSkyColor(): MSFColor;

    isEnabled(): boolean;

    isSunDiscEnabled(): boolean;

    setEnabled(enabled: boolean): void;

    setGroundColor(color: MSFColor): void;

    setHorizonBlend(degrees: number): void;

    setHorizonColor(color: MSFColor): void;

    setShaderSource(shaderSource: string): void;

    setSkyColor(color: MSFColor): void;

    setSunDiscEnabled(enabled: boolean): void;
}

declare class MSFSolidLayer extends MSFLayer {

    static alloc(): MSFSolidLayer; // inherited from NSObject

    static new(): MSFSolidLayer; // inherited from NSObject

    constructor(o: { bitmap: MSFBitmap; });

    constructor(o: { color: MSFColor; });

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

    constructor(o: { arg0: MSFStringCartoCSSStyleSetMap; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    clear(): void;

    del(key: string): void;

    empty(): boolean;

    get(key: string): MSFCartoCSSStyleSet;

    get_key(idx: number): string;

    has_key(key: string): boolean;

    initWithArg0(arg0: MSFStringCartoCSSStyleSetMap): this;

    setX(key: string, x: MSFCartoCSSStyleSet): void;

    size(): number;
}

declare class MSFStringMap extends NSObject {

    static alloc(): MSFStringMap; // inherited from NSObject

    static new(): MSFStringMap; // inherited from NSObject

    constructor(o: { arg0: MSFStringMap; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    clear(): void;

    del(key: string): void;

    empty(): boolean;

    get(key: string): string;

    get_key(idx: number): string;

    has_key(key: string): boolean;

    initWithArg0(arg0: MSFStringMap): this;

    setX(key: string, x: string): void;

    size(): number;
}

declare class MSFStringVariantMap extends NSObject {

    static alloc(): MSFStringVariantMap; // inherited from NSObject

    static new(): MSFStringVariantMap; // inherited from NSObject

    constructor(o: { arg0: MSFStringVariantMap; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    clear(): void;

    del(key: string): void;

    empty(): boolean;

    get(key: string): MSFVariant;

    get_key(idx: number): string;

    has_key(key: string): boolean;

    initWithArg0(arg0: MSFStringVariantMap): this;

    setX(key: string, x: MSFVariant): void;

    size(): number;
}

declare class MSFStringVector extends NSObject {

    static alloc(): MSFStringVector; // inherited from NSObject

    static new(): MSFStringVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: string): void;

    capacity(): number;

    clear(): void;

    get(i: number): string;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: string): void;

    size(): number;
}

declare class MSFStyle extends NSObject {

    static alloc(): MSFStyle; // inherited from NSObject

    static new(): MSFStyle; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFStyle;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getColor(): MSFColor;

    hash(): number;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFStyleBuilder extends NSObject {

    static alloc(): MSFStyleBuilder; // inherited from NSObject

    static new(): MSFStyleBuilder; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFStyleBuilder;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getColor(): MSFColor;

    hash(): number;

    setColor(color: MSFColor): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFTerrainOptions extends NSObject {

    static alloc(): MSFTerrainOptions; // inherited from NSObject

    static new(): MSFTerrainOptions; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { dataSource: MSFTileDataSource; });

    constructor(o: { dataSource: MSFTileDataSource; elevationDecoder: MSFElevationDecoder; });

    getBackgroundColor(): MSFColor;

    getBillboardOcclusionTolerance(): number;

    getCameraClampDuration(): number;

    getCameraClearance(): number;

    getDataSource(): MSFTileDataSource;

    getDepthBias(): number;

    getDrapeResolution(): number;

    getElevation(pos: MSFMapPos): number;

    getElevationDecoder(): MSFElevationDecoder;

    getElevations(poses: MSFMapPosVector): MSFDoubleVector;

    getExaggeration(): number;

    getMaxTileZoomCoarsening(): number;

    getMaxTileZoomOffset(): number;

    getMeshResolution(): number;

    getMinZoom(): number;

    getNoDrapeLayerFilter(): string;

    getSurfaceColorParameter(name: string): MSFColor;

    getSurfaceParameter(name: string): number;

    getSurfaceShaderSource(): string;

    getViewDistance(): number;

    getViewDistanceFactor(): number;

    initWithDataSource(dataSource: MSFTileDataSource): this;

    initWithDataSourceElevationDecoder(dataSource: MSFTileDataSource, elevationDecoder: MSFElevationDecoder): this;

    isBackgroundBitmapEnabled(): boolean;

    isBillboardOcclusionEnabled(): boolean;

    isDrapeFillsEnabled(): boolean;

    isDrapeLinesEnabled(): boolean;

    isElevationPrefetchEnabled(): boolean;

    isEnabled(): boolean;

    isSeamlessTileEdgesEnabled(): boolean;

    isTileEdgeStitchingEnabled(): boolean;

    setBackgroundBitmapEnabled(enabled: boolean): void;

    setBackgroundColor(color: MSFColor): void;

    setBillboardOcclusionEnabled(enabled: boolean): void;

    setBillboardOcclusionTolerance(tolerance: number): void;

    setCameraClampDuration(duration: number): void;

    setCameraClearance(clearance: number): void;

    setDepthBias(depthBias: number): void;

    setDrapeFillsEnabled(enabled: boolean): void;

    setDrapeLinesEnabled(enabled: boolean): void;

    setDrapeResolution(resolution: number): void;

    setElevationPrefetchEnabled(enabled: boolean): void;

    setEnabled(enabled: boolean): void;

    setExaggeration(exaggeration: number): void;

    setMaxTileZoomCoarsening(levels: number): void;

    setMaxTileZoomOffset(offset: number): void;

    setMeshResolution(meshResolution: number): void;

    setMinZoom(minZoom: number): void;

    setNoDrapeLayerFilter(filter: string): void;

    setSeamlessTileEdgesEnabled(enabled: boolean): void;

    setSurfaceColorParameterColor(name: string, color: MSFColor): void;

    setSurfaceParameterValue(name: string, value: number): void;

    setSurfaceShaderSource(shaderSource: string): void;

    setTileEdgeStitchingEnabled(enabled: boolean): void;

    setViewDistance(distance: number): void;

    setViewDistanceFactor(factor: number): void;
}

declare class MSFTerrariumElevationDataDecoder extends MSFElevationDecoder {

    static alloc(): MSFTerrariumElevationDataDecoder; // inherited from NSObject

    static new(): MSFTerrariumElevationDataDecoder; // inherited from NSObject
}

declare class MSFText extends MSFLabel {

    static alloc(): MSFText; // inherited from NSObject

    static new(): MSFText; // inherited from NSObject

    constructor(o: { baseBillboard: MSFBillboard; style: MSFTextStyle; text: string; });

    constructor(o: { geometry: MSFGeometry; style: MSFTextStyle; text: string; });

    constructor(o: { pos: MSFMapPos; style: MSFTextStyle; text: string; });

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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { left: number; top: number; right: number; bottom: number; });

    getBottom(): number;

    getLeft(): number;

    getRight(): number;

    getTop(): number;

    initWithLeftTopRightBottom(left: number, top: number, right: number, bottom: number): this;
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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { data: MSFBinaryData; });

    getData(): MSFBinaryData;

    getMaxAge(): number;

    hash(): number;

    initWithData(data: MSFBinaryData): this;

    isOverZoom(): boolean;

    isReplaceWithParent(): boolean;

    setIsOverZoom(flag: boolean): void;

    setMaxAge(maxAge: number): void;

    setReplaceWithParent(flag: boolean): void;
}

declare class MSFTileDataSource extends NSObject {

    static alloc(): MSFTileDataSource; // inherited from NSObject

    static new(): MSFTileDataSource; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFTileDataSource;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { minZoom: number; maxZoom: number; });

    buildTagValues(tile: MSFMapTile): MSFStringMap;

    getDataExtent(): MSFMapBounds;

    getEncoding(): string;

    getMaxOverzoomLevel(): number;

    getMaxZoom(): number;

    getMaxZoomWithOverzoom(): number;

    getMetaData(key: string): string;

    getMinZoom(): number;

    getProjection(): MSFProjection;

    initWithMinZoomMaxZoom(minZoom: number, maxZoom: number): this;

    isMaxOverzoomLevelSet(): boolean;

    loadTile(tile: MSFMapTile): MSFTileData;

    notifyTilesChanged(removeTiles: boolean): void;

    setEncoding(encoding: string): void;

    setMaxOverzoomLevel(overzoomLevel: number): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFTileDownloadListener extends NSObject {

    static alloc(): MSFTileDownloadListener; // inherited from NSObject

    static new(): MSFTileDownloadListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFTileDownloadListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onDownloadCompleted(): void;

    onDownloadFailed(tile: MSFMapTile): void;

    onDownloadProgress(progress: number): void;

    onDownloadStarting(tileCount: number): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare const enum MSFTileFormat {

    F_TILE_FORMAT_AUTO = 0,

    F_TILE_FORMAT_MVT = 1,

    F_TILE_FORMAT_MLT = 2
}

declare class MSFTileLayer extends MSFLayer {

    static alloc(): MSFTileLayer; // inherited from NSObject

    static new(): MSFTileLayer; // inherited from NSObject

    calculateMapTileBounds(mapTile: MSFMapTile): MSFMapBounds;

    calculateMapTileOrigin(mapTile: MSFMapTile): MSFMapPos;

    calculateMapTileZoom(mapPos: MSFMapPos, zoom: number): MSFMapTile;

    clearTileCaches(all: boolean): void;

    consumeShadowCastersMissingElevation(): number;

    getDataSource(): MSFTileDataSource;

    getFrameNr(): number;

    getMaxOverzoomLevel(): number;

    getMaxStandInLevel(): number;

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

    setMaxStandInLevel(standInLevel: number): void;

    setMaxUnderzoomLevel(underzoomLevel: number): void;

    setPreloading(preloading: boolean): void;

    setSynchronizedRefresh(synchronizedRefresh: boolean): void;

    setTerrainShadowMaskInvScreenWidthInvScreenHeight(texture: number, invScreenWidth: number, invScreenHeight: number): void;

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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onPreloadingTilesLoaded(): void;

    onVisibleTilesLoaded(): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare const enum MSFTileSubstitutionPolicy {

    F_TILE_SUBSTITUTION_POLICY_ALL = 0,

    F_TILE_SUBSTITUTION_POLICY_VISIBLE = 1,

    F_TILE_SUBSTITUTION_POLICY_NONE = 2
}

declare class MSFTileUtils extends NSObject {

    static alloc(): MSFTileUtils; // inherited from NSObject

    static calculateClippedMapTileZoomProj(mapPos: MSFMapPos, zoom: number, proj: MSFProjection): MSFMapTile;

    static calculateMapTileBoundsProj(mapTile: MSFMapTile, proj: MSFProjection): MSFMapBounds;

    static calculateMapTileOriginProj(mapTile: MSFMapTile, proj: MSFProjection): MSFMapPos;

    static calculateMapTileZoomProj(mapPos: MSFMapPos, zoom: number, proj: MSFProjection): MSFMapTile;

    static new(): MSFTileUtils; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });
}

declare class MSFTomTomOnlineGeocodingService extends MSFGeocodingService {

    static alloc(): MSFTomTomOnlineGeocodingService; // inherited from NSObject

    static new(): MSFTomTomOnlineGeocodingService; // inherited from NSObject

    constructor(o: { apiKey: string; });

    getCustomServiceURL(): string;

    initWithApiKey(apiKey: string): this;

    setCustomServiceURL(serviceURL: string): void;
}

declare class MSFTomTomOnlineReverseGeocodingService extends MSFReverseGeocodingService {

    static alloc(): MSFTomTomOnlineReverseGeocodingService; // inherited from NSObject

    static new(): MSFTomTomOnlineReverseGeocodingService; // inherited from NSObject

    constructor(o: { apiKey: string; });

    getCustomServiceURL(): string;

    initWithApiKey(apiKey: string): this;

    setCustomServiceURL(serviceURL: string): void;
}

declare class MSFTorqueTileDecoder extends MSFVectorTileDecoder {

    static alloc(): MSFTorqueTileDecoder; // inherited from NSObject

    static new(): MSFTorqueTileDecoder; // inherited from NSObject

    constructor(o: { styleSet: MSFCartoCSSStyleSet; });

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

    constructor(o: { dataSource: MSFTileDataSource; decoder: MSFTorqueTileDecoder; });

    countVisibleFeatures(frameNr: number): number;

    initWithDataSourceDecoder(dataSource: MSFTileDataSource, decoder: MSFTorqueTileDecoder): this;
}

declare class MSFUTFGridClickInfo extends NSObject {

    static alloc(): MSFUTFGridClickInfo; // inherited from NSObject

    static new(): MSFUTFGridClickInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getClickInfo(): MSFClickInfo;

    getClickPos(): MSFMapPos;

    getClickType(): MSFClickType;

    getElementInfo(): MSFVariant;

    getLayer(): MSFLayer;

    hash(): number;
}

declare class MSFUTFGridEventListener extends NSObject {

    static alloc(): MSFUTFGridEventListener; // inherited from NSObject

    static new(): MSFUTFGridEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFUTFGridEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onUTFGridClicked(clickInfo: MSFUTFGridClickInfo): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFValhallaOfflineRoutingService extends MSFRoutingService {

    static alloc(): MSFValhallaOfflineRoutingService; // inherited from NSObject

    static new(): MSFValhallaOfflineRoutingService; // inherited from NSObject

    constructor(o: { path: string; });

    addLocaleJson(key: string, json: string): void;

    getConfigurationParameter(param: string): MSFVariant;

    initWithPath(path: string): this;

    setConfigurationParameterValue(param: string, value: MSFVariant): void;
}

declare class MSFValhallaOnlineRoutingService extends MSFRoutingService {

    static alloc(): MSFValhallaOnlineRoutingService; // inherited from NSObject

    static new(): MSFValhallaOnlineRoutingService; // inherited from NSObject

    constructor(o: { apiKey: string; });

    getCustomServiceURL(): string;

    getHTTPHeaders(): MSFStringMap;

    getTimeout(): number;

    initWithApiKey(apiKey: string): this;

    setCustomServiceURL(serviceURL: string): void;

    setHTTPHeaders(headers: MSFStringMap): void;

    setTimeout(timeout: number): void;
}

declare class MSFVariant extends NSObject {

    static alloc(): MSFVariant; // inherited from NSObject

    static fromString(str: string): MSFVariant;

    static new(): MSFVariant; // inherited from NSObject

    constructor(o: { array: MSFVariantVector; });

    constructor(o: { boolVal: boolean; });

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { doubleVal: number; });

    constructor(o: { longVal: number; });

    constructor(o: { object: MSFStringVariantMap; });

    constructor(o: { string: string; });

    containsObjectKey(key: string): boolean;

    description(): string;

    getArrayElement(idx: number): MSFVariant;

    getArraySize(): number;

    getBool(): boolean;

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

    initWithDoubleVal(doubleVal: number): this;

    initWithLongVal(longVal: number): this;

    initWithObject(object: MSFStringVariantMap): this;

    initWithString(string: string): this;

    isEqualInternal(var_: MSFVariant): boolean;
}

declare class MSFVariantArrayBuilder extends NSObject {

    static alloc(): MSFVariantArrayBuilder; // inherited from NSObject

    static new(): MSFVariantArrayBuilder; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    addBool(val: boolean): void;

    addDouble(val: number): void;

    addLong(val: number): void;

    addString(str: string): void;

    addVariant(var_: MSFVariant): void;

    buildVariant(): MSFVariant;

    clear(): void;

    hash(): number;
}

declare class MSFVariantObjectBuilder extends NSObject {

    static alloc(): MSFVariantObjectBuilder; // inherited from NSObject

    static new(): MSFVariantObjectBuilder; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    buildVariant(): MSFVariant;

    clear(): void;

    hash(): number;

    setBoolVal(key: string, val: boolean): void;

    setDoubleVal(key: string, val: number): void;

    setLongVal(key: string, val: number): void;

    setStringStr(key: string, str: string): void;

    setVariantVar(key: string, var_: MSFVariant): void;
}

declare const enum MSFVariantType {

    F_VARIANT_TYPE_NULL = 0,

    F_VARIANT_TYPE_STRING = 1,

    F_VARIANT_TYPE_BOOL = 2,

    F_VARIANT_TYPE_INTEGER = 3,

    F_VARIANT_TYPE_DOUBLE = 4,

    F_VARIANT_TYPE_ARRAY = 5,

    F_VARIANT_TYPE_OBJECT = 6
}

declare class MSFVariantVector extends NSObject {

    static alloc(): MSFVariantVector; // inherited from NSObject

    static new(): MSFVariantVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFVariant): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFVariant;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFVariant): void;

    size(): number;
}

declare class MSFVectorData extends NSObject {

    static alloc(): MSFVectorData; // inherited from NSObject

    static new(): MSFVectorData; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { elements: MSFVectorElementVector; });

    getElements(): MSFVectorElementVector;

    hash(): number;

    initWithElements(elements: MSFVectorElementVector): this;
}

declare class MSFVectorDataSource extends NSObject {

    static alloc(): MSFVectorDataSource; // inherited from NSObject

    static new(): MSFVectorDataSource; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorDataSource;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { projection: MSFProjection; });

    getDataExtent(): MSFMapBounds;

    getProjection(): MSFProjection;

    initWithProjection(projection: MSFProjection): this;

    loadElements(cullState: MSFCullState): MSFVectorData;

    notifyElementsChanged(): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFVectorEditEventListener extends NSObject {

    static alloc(): MSFVectorEditEventListener; // inherited from NSObject

    static new(): MSFVectorEditEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorEditEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onDragEnd(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onDragMove(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onDragStart(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult;

    onElementDelete(element: MSFVectorElement): void;

    onElementDeselected(element: MSFVectorElement): void;

    onElementModifyGeometry(element: MSFVectorElement, geometry: MSFGeometry): void;

    onElementSelect(element: MSFVectorElement): boolean;

    onSelectDragPointStyleDragPointStyle(element: MSFVectorElement, dragPointStyle: MSFVectorElementDragPointStyle): MSFPointStyle;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFVectorElement extends NSObject {

    static alloc(): MSFVectorElement; // inherited from NSObject

    static new(): MSFVectorElement; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorElement;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    containsMetaDataKey(key: string): boolean;

    getBounds(): MSFMapBounds;

    getGeometry(): MSFGeometry;

    getId(): number;

    getMetaData(): MSFStringVariantMap;

    getMetaDataElement(key: string): MSFVariant;

    hash(): number;

    isVisible(): boolean;

    notifyElementChanged(): void;

    setId(arg1: number): void;

    setMetaData(metaData: MSFStringVariantMap): void;

    setMetaDataElementElement(key: string, element: MSFVariant): void;

    setVisible(visible: boolean): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFVectorElementClickInfo extends NSObject {

    static alloc(): MSFVectorElementClickInfo; // inherited from NSObject

    static new(): MSFVectorElementClickInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getClickInfo(): MSFClickInfo;

    getClickPos(): MSFMapPos;

    getClickType(): MSFClickType;

    getElementClickPos(): MSFMapPos;

    getLayer(): MSFLayer;

    getVectorElement(): MSFVectorElement;

    hash(): number;
}

declare class MSFVectorElementDragInfo extends NSObject {

    static alloc(): MSFVectorElementDragInfo; // inherited from NSObject

    static new(): MSFVectorElementDragInfo; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getDragMode(): MSFVectorElementDragMode;

    getMapPos(): MSFMapPos;

    getScreenPos(): MSFScreenPos;

    getVectorElement(): MSFVectorElement;

    hash(): number;
}

declare const enum MSFVectorElementDragMode {

    F_VECTOR_ELEMENT_DRAG_MODE_VERTEX = 0,

    F_VECTOR_ELEMENT_DRAG_MODE_ELEMENT = 1
}

declare const enum MSFVectorElementDragPointStyle {

    F_VECTOR_ELEMENT_DRAG_POINT_STYLE_NORMAL = 0,

    F_VECTOR_ELEMENT_DRAG_POINT_STYLE_VIRTUAL = 1,

    F_VECTOR_ELEMENT_DRAG_POINT_STYLE_SELECTED = 2
}

declare const enum MSFVectorElementDragResult {

    F_VECTOR_ELEMENT_DRAG_RESULT_IGNORE = 0,

    F_VECTOR_ELEMENT_DRAG_RESULT_STOP = 1,

    F_VECTOR_ELEMENT_DRAG_RESULT_MODIFY = 2,

    F_VECTOR_ELEMENT_DRAG_RESULT_DELETE = 3
}

declare class MSFVectorElementEventListener extends NSObject {

    static alloc(): MSFVectorElementEventListener; // inherited from NSObject

    static new(): MSFVectorElementEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorElementEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onVectorElementClicked(clickInfo: MSFVectorElementClickInfo): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFVectorElementSearchService extends NSObject {

    static alloc(): MSFVectorElementSearchService; // inherited from NSObject

    static new(): MSFVectorElementSearchService; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorElementSearchService;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { dataSource: MSFVectorDataSource; });

    findElements(request: MSFSearchRequest): MSFVectorElementVector;

    getDataSource(): MSFVectorDataSource;

    getMaxResults(): number;

    initWithDataSource(dataSource: MSFVectorDataSource): this;

    setMaxResults(maxResults: number): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFVectorElementVector extends NSObject {

    static alloc(): MSFVectorElementVector; // inherited from NSObject

    static new(): MSFVectorElementVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFVectorElement): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFVectorElement;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFVectorElement): void;

    size(): number;
}

declare class MSFVectorLayer extends MSFLayer {

    static alloc(): MSFVectorLayer; // inherited from NSObject

    static new(): MSFVectorLayer; // inherited from NSObject

    constructor(o: { dataSource: MSFVectorDataSource; });

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

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    getClickInfo(): MSFClickInfo;

    getClickPos(): MSFMapPos;

    getClickType(): MSFClickType;

    getFeature(): MSFVectorTileFeature;

    getFeatureClickPos(): MSFMapPos;

    getFeatureId(): number;

    getFeatureLayerName(): string;

    getFeaturePosIndex(): number;

    getLayer(): MSFLayer;

    getMapTile(): MSFMapTile;

    hash(): number;
}

declare class MSFVectorTileDecoder extends NSObject {

    static alloc(): MSFVectorTileDecoder; // inherited from NSObject

    static new(): MSFVectorTileDecoder; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorTileDecoder;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    addFallbackFont(fontData: MSFBinaryData): void;

    getMaxZoom(): number;

    getMinZoom(): number;

    hash(): number;

    notifyDecoderChanged(): void;

    notifyDecoderRefreshed(): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFVectorTileEventListener extends NSObject {

    static alloc(): MSFVectorTileEventListener; // inherited from NSObject

    static new(): MSFVectorTileEventListener; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorTileEventListener;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    onVectorTileClicked(clickInfo: MSFVectorTileClickInfo): boolean;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFVectorTileFeature extends MSFFeature {

    static alloc(): MSFVectorTileFeature; // inherited from NSObject

    static new(): MSFVectorTileFeature; // inherited from NSObject

    constructor(o: { arg0: number; mapTile: MSFMapTile; layerName: string; geometry: MSFGeometry; properties: MSFVariant; });

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

    constructor(o: { features: MSFVectorTileFeatureVector; });

    getFeature(index: number): MSFVectorTileFeature;

    initWithFeatures(features: MSFVectorTileFeatureVector): this;
}

declare class MSFVectorTileFeatureVector extends NSObject {

    static alloc(): MSFVectorTileFeatureVector; // inherited from NSObject

    static new(): MSFVectorTileFeatureVector; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    add(x: MSFVectorTileFeature): void;

    capacity(): number;

    clear(): void;

    get(i: number): MSFVectorTileFeature;

    isEmpty(): boolean;

    reserve(n: number): void;

    setVal(i: number, val: MSFVectorTileFeature): void;

    size(): number;
}

declare class MSFVectorTileLayer extends MSFTileLayer {

    static alloc(): MSFVectorTileLayer; // inherited from NSObject

    static new(): MSFVectorTileLayer; // inherited from NSObject

    constructor(o: { dataSource: MSFTileDataSource; decoder: MSFVectorTileDecoder; });

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

    F_VECTOR_TILE_RENDER_ORDER_HIDDEN = -1,

    F_VECTOR_TILE_RENDER_ORDER_LAYER = 0,

    F_VECTOR_TILE_RENDER_ORDER_LAST = 1
}

declare class MSFVectorTileSearchService extends NSObject {

    static alloc(): MSFVectorTileSearchService; // inherited from NSObject

    static new(): MSFVectorTileSearchService; // inherited from NSObject

    static swigCreatePolymorphicInstanceSwigOwnCObject(cPtr: interop.Pointer | interop.Reference<any>, cMemoryOwn: boolean): MSFVectorTileSearchService;

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    constructor(o: { dataSource: MSFTileDataSource; tileDecoder: MSFVectorTileDecoder; });

    findFeatures(request: MSFSearchRequest): MSFVectorTileFeatureCollection;

    getDataSource(): MSFTileDataSource;

    getLayers(): MSFStringVector;

    getMaxResults(): number;

    getMaxZoom(): number;

    getMinZoom(): number;

    getPreventDuplicates(): boolean;

    getSortByDistance(): boolean;

    getTileDecoder(): MSFVectorTileDecoder;

    initWithDataSourceTileDecoder(dataSource: MSFTileDataSource, tileDecoder: MSFVectorTileDecoder): this;

    setLayers(layers: MSFStringVector): void;

    setMaxResults(maxResults: number): void;

    setMaxZoom(maxZoom: number): void;

    setMinZoom(minZoom: number): void;

    setPreventDuplicates(preventDuplicates: boolean): void;

    setSortByDistance(sortByDistance: boolean): void;

    swigGetClassName(): string;

    swigGetDirectorObject(): interop.Pointer | interop.Reference<any>;
}

declare class MSFViewState extends NSObject {

    static alloc(): MSFViewState; // inherited from NSObject

    static new(): MSFViewState; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });

    calculateCameraDistance(): number;

    calculateViewDir(): SWIGTYPE_cglib__vec3T_double_t;

    calculateViewDistance(options: MSFOptions): number;

    getAspectRatio(): number;

    getCameraTilt(): number;

    getDPI(): number;

    getDPToPX(): number;

    getFOVY(): number;

    getFar(): number;

    getHeight(): number;

    getNear(): number;

    getRotation(): number;

    getScreenHeight(): number;

    getScreenWidth(): number;

    getSkyHorizonNDC(): number;

    getTerrainMaxZoom(): number;

    getTilt(): number;

    getUnitToDPCoef(): number;

    getUnitToPXCoef(): number;

    getWidth(): number;

    getZoom(): number;

    getZoom0Distance(): number;

    hash(): number;

    isCameraChanged(): boolean;

    setTerrainHeightRangeMaxZ(minZ: number, maxZ: number): void;

    setViewTilt(tilt: number): void;
}

declare class MSFZippedAssetPackage extends MSFAssetPackage {

    static alloc(): MSFZippedAssetPackage; // inherited from NSObject

    static new(): MSFZippedAssetPackage; // inherited from NSObject

    constructor(o: { zipData: MSFBinaryData; });

    constructor(o: { zipData: MSFBinaryData; baseAssetPackage: MSFAssetPackage; });

    getLocalAssetNames(): MSFStringVector;

    initWithZipData(zipData: MSFBinaryData): this;

    initWithZipDataBaseAssetPackage(zipData: MSFBinaryData, baseAssetPackage: MSFAssetPackage): this;
}

declare class SWIGTYPE_cglib__vec3T_double_t extends NSObject {

    static alloc(): SWIGTYPE_cglib__vec3T_double_t; // inherited from NSObject

    static new(): SWIGTYPE_cglib__vec3T_double_t; // inherited from NSObject

    constructor(o: { cptr: interop.Pointer | interop.Reference<any>; swigOwnCObject: boolean; });
}
