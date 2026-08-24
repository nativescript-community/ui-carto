// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.layers.VectorEditEventListener / MSFVectorEditEventListener */
export const METHODS = ['onDragEnd', 'onDragMove', 'onDragStart', 'onElementDelete', 'onElementDeselected', 'onElementModify', 'onElementSelect', 'onSelectDragPointStyle'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    onDragEnd(arg0: any): number;
    onDragMove(arg0: any): number;
    onDragStart(arg0: any): number;
    onElementDelete(arg0: any): void;
    onElementDeselected(arg0: any): void;
    onElementModify(arg0: any, arg1: any): void;
    onElementSelect(arg0: any): boolean;
    onSelectDragPointStyle(arg0: any, arg1: number): any;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    onElementModify: 'onElementModifyGeometry',
    onSelectDragPointStyle: 'onSelectDragPointStyleDragPointStyle',
};
