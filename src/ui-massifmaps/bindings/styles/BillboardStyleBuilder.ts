// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.styles.BillboardStyleBuilder / MSFBillboardStyleBuilder */
export const METHODS = ['getAnimationStyle', 'getAttachAnchorPointX', 'getAttachAnchorPointY', 'getHorizontalOffset', 'getPlacementPriority', 'getVerticalOffset', 'isCausesOverlap', 'isHideIfOverlapped', 'isScaleWithDPI', 'setAnimationStyle', 'setAttachAnchorPoint', 'setAttachAnchorPointX', 'setAttachAnchorPointY', 'setCausesOverlap', 'setHideIfOverlapped', 'setHorizontalOffset', 'setPlacementPriority', 'setScaleWithDPI', 'setVerticalOffset'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getAnimationStyle(): any;
    getAttachAnchorPointX(): number;
    getAttachAnchorPointY(): number;
    getHorizontalOffset(): number;
    getPlacementPriority(): number;
    getVerticalOffset(): number;
    isCausesOverlap(): boolean;
    isHideIfOverlapped(): boolean;
    isScaleWithDPI(): boolean;
    setAnimationStyle(arg0: any): void;
    setAttachAnchorPoint(arg0: number, arg1: number): void;
    setAttachAnchorPointX(arg0: number): void;
    setAttachAnchorPointY(arg0: number): void;
    setCausesOverlap(arg0: boolean): void;
    setHideIfOverlapped(arg0: boolean): void;
    setHorizontalOffset(arg0: number): void;
    setPlacementPriority(arg0: number): void;
    setScaleWithDPI(arg0: boolean): void;
    setVerticalOffset(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    animationStyle: ['getAnimationStyle', 'setAnimationStyle'],
    attachAnchorPointX: ['getAttachAnchorPointX', 'setAttachAnchorPointX'],
    attachAnchorPointY: ['getAttachAnchorPointY', 'setAttachAnchorPointY'],
    causesOverlap: ['isCausesOverlap', 'setCausesOverlap'],
    hideIfOverlapped: ['isHideIfOverlapped', 'setHideIfOverlapped'],
    horizontalOffset: ['getHorizontalOffset', 'setHorizontalOffset'],
    placementPriority: ['getPlacementPriority', 'setPlacementPriority'],
    scaleWithDPI: ['isScaleWithDPI', 'setScaleWithDPI'],
    verticalOffset: ['getVerticalOffset', 'setVerticalOffset'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    animationStyle: any;  // com.massifmaps.styles.AnimationStyle
    attachAnchorPointX: number;
    attachAnchorPointY: number;
    causesOverlap: boolean;
    hideIfOverlapped: boolean;
    horizontalOffset: number;
    placementPriority: number;
    scaleWithDPI: boolean;
    verticalOffset: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setAttachAnchorPoint: 'setAttachAnchorPointXAttachAnchorPointY',
};
