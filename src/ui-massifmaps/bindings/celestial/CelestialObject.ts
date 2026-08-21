// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color } from '@nativescript/core';

/** com.massifmaps.celestial.CelestialObject / MSFCelestialObject */
export const METHODS = ['getAltitude', 'getAzimuth', 'getColor', 'getDistance', 'getMetaDataElement', 'getPosition', 'getPositionAltitude', 'isDirectionAnchored', 'isVisible', 'setColor', 'setDirection', 'setMetaDataElement', 'setPosition', 'setVisible'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getAltitude(): number;
    getAzimuth(): number;
    getColor(): Color;
    getDistance(): number;
    getMetaDataElement(arg0: string): any;
    getPosition(): any;
    getPositionAltitude(): number;
    isDirectionAnchored(): boolean;
    isVisible(): boolean;
    setColor(arg0: Color | string): void;
    setDirection(arg0: number, arg1: number, arg2: number): void;
    setMetaDataElement(arg0: string, arg1: any): void;
    setPosition(arg0: any, arg1: number): void;
    setVisible(arg0: boolean): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    color: ['getColor', 'setColor'],
    visible: ['isVisible', 'setVisible'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    color: Color | string;
    visible: boolean;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['color', 'colorConverter']] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setDirection: 'setDirectionAltitudeDistance',
    setMetaDataElement: 'setMetaDataElementElement',
    setPosition: 'setPositionAltitude',
};
