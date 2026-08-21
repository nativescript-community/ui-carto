// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.styles.AnimationStyleBuilder / MSFAnimationStyleBuilder */
export const METHODS = ['buildStyle', 'getFadeAnimationType', 'getPhaseInDuration', 'getPhaseOutDuration', 'getRelativeSpeed', 'getSizeAnimationType', 'setFadeAnimationType', 'setPhaseInDuration', 'setPhaseOutDuration', 'setRelativeSpeed', 'setSizeAnimationType'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getFadeAnimationType(): number;
    getPhaseInDuration(): number;
    getPhaseOutDuration(): number;
    getRelativeSpeed(): number;
    getSizeAnimationType(): number;
    setFadeAnimationType(arg0: number): void;
    setPhaseInDuration(arg0: number): void;
    setPhaseOutDuration(arg0: number): void;
    setRelativeSpeed(arg0: number): void;
    setSizeAnimationType(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    fadeAnimationType: ['getFadeAnimationType', 'setFadeAnimationType'],
    phaseInDuration: ['getPhaseInDuration', 'setPhaseInDuration'],
    phaseOutDuration: ['getPhaseOutDuration', 'setPhaseOutDuration'],
    relativeSpeed: ['getRelativeSpeed', 'setRelativeSpeed'],
    sizeAnimationType: ['getSizeAnimationType', 'setSizeAnimationType'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    fadeAnimationType: number;  // com.massifmaps.styles.AnimationType
    phaseInDuration: number;
    phaseOutDuration: number;
    relativeSpeed: number;
    sizeAnimationType: number;  // com.massifmaps.styles.AnimationType
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
