// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { MapRange } from '../../core/index';

/** com.massifmaps.layers.Layer / MSFLayer */
export const METHODS = ['containsMetaDataKey', 'getMetaData', 'getMetaDataElement', 'getOpacity', 'getUpdatePriority', 'getVisibleZoomRange', 'isPostProcessed', 'isUpdateInProgress', 'isVisible', 'refresh', 'setCullDelay', 'setMetaData', 'setMetaDataElement', 'setOpacity', 'setPostProcessed', 'setUpdatePriority', 'setVisible', 'setVisibleZoomRange', 'simulateClick', 'update'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    containsMetaDataKey(arg0: string): boolean;
    getMetaData(): any;
    getMetaDataElement(arg0: string): any;
    getOpacity(): number;
    getUpdatePriority(): number;
    getVisibleZoomRange(): MapRange;
    isPostProcessed(): boolean;
    isUpdateInProgress(): boolean;
    isVisible(): boolean;
    refresh(): void;
    setCullDelay(arg0: number): void;
    setMetaData(arg0: any): void;
    setMetaDataElement(arg0: string, arg1: any): void;
    setOpacity(arg0: number): void;
    setPostProcessed(arg0: boolean): void;
    setUpdatePriority(arg0: number): void;
    setVisible(arg0: boolean): void;
    setVisibleZoomRange(arg0: MapRange): void;
    simulateClick(arg0: number, arg1: any, arg2: any): void;
    update(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    metaData: ['getMetaData', 'setMetaData'],
    opacity: ['getOpacity', 'setOpacity'],
    postProcessed: ['isPostProcessed', 'setPostProcessed'],
    updatePriority: ['getUpdatePriority', 'setUpdatePriority'],
    visible: ['isVisible', 'setVisible'],
    visibleZoomRange: ['getVisibleZoomRange', 'setVisibleZoomRange'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    metaData: any;  // com.massifmaps.core.StringVariantMap
    opacity: number;
    postProcessed: boolean;
    updatePriority: number;
    visible: boolean;
    visibleZoomRange: MapRange;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['visibleZoomRange', 'mapRangeConverter']] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setMetaDataElement: 'setMetaDataElementElement',
    simulateClick: 'simulateClickScreenPosViewState',
};
