// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { AnimationType, EnumValue } from '../enums';

/** com.massifmaps.styles.AnimationStyleBuilder / MSFAnimationStyleBuilder */
export const METHODS = ['buildStyle', 'getFadeAnimationType', 'getPhaseInDuration', 'getPhaseOutDuration', 'getRelativeSpeed', 'getSizeAnimationType', 'setFadeAnimationType', 'setPhaseInDuration', 'setPhaseOutDuration', 'setRelativeSpeed', 'setSizeAnimationType'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getFadeAnimationType(): AnimationType;
    getPhaseInDuration(): number;
    getPhaseOutDuration(): number;
    getRelativeSpeed(): number;
    getSizeAnimationType(): AnimationType;
    setFadeAnimationType(arg0: EnumValue<AnimationType>): void;
    setPhaseInDuration(arg0: number): void;
    setPhaseOutDuration(arg0: number): void;
    setRelativeSpeed(arg0: number): void;
    setSizeAnimationType(arg0: EnumValue<AnimationType>): void;
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
    fadeAnimationType: EnumValue<AnimationType>;  // com.massifmaps.styles.AnimationType
    phaseInDuration: number;
    phaseOutDuration: number;
    relativeSpeed: number;
    sizeAnimationType: EnumValue<AnimationType>;  // com.massifmaps.styles.AnimationType
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
