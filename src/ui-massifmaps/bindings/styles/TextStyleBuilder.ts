// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color } from '@nativescript/core';

/** com.massifmaps.styles.TextStyleBuilder / MSFTextStyleBuilder */
export const METHODS = ['buildStyle', 'getBackgroundColor', 'getBorderColor', 'getBorderWidth', 'getFontName', 'getFontSize', 'getStrokeColor', 'getStrokeWidth', 'getTextField', 'getTextMargins', 'isBreakLines', 'setBackgroundColor', 'setBorderColor', 'setBorderWidth', 'setBreakLines', 'setFontName', 'setFontSize', 'setStrokeColor', 'setStrokeWidth', 'setTextField', 'setTextMargins'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getBackgroundColor(): Color;
    getBorderColor(): Color;
    getBorderWidth(): number;
    getFontName(): string;
    getFontSize(): number;
    getStrokeColor(): Color;
    getStrokeWidth(): number;
    getTextField(): string;
    getTextMargins(): any;
    isBreakLines(): boolean;
    setBackgroundColor(arg0: Color | string): void;
    setBorderColor(arg0: Color | string): void;
    setBorderWidth(arg0: number): void;
    setBreakLines(arg0: boolean): void;
    setFontName(arg0: string): void;
    setFontSize(arg0: number): void;
    setStrokeColor(arg0: Color | string): void;
    setStrokeWidth(arg0: number): void;
    setTextField(arg0: string): void;
    setTextMargins(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    backgroundColor: ['getBackgroundColor', 'setBackgroundColor'],
    borderColor: ['getBorderColor', 'setBorderColor'],
    borderWidth: ['getBorderWidth', 'setBorderWidth'],
    breakLines: ['isBreakLines', 'setBreakLines'],
    fontName: ['getFontName', 'setFontName'],
    fontSize: ['getFontSize', 'setFontSize'],
    strokeColor: ['getStrokeColor', 'setStrokeColor'],
    strokeWidth: ['getStrokeWidth', 'setStrokeWidth'],
    textField: ['getTextField', 'setTextField'],
    textMargins: ['getTextMargins', 'setTextMargins'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    backgroundColor: Color | string;
    borderColor: Color | string;
    borderWidth: number;
    breakLines: boolean;
    fontName: string;
    fontSize: number;
    strokeColor: Color | string;
    strokeWidth: number;
    textField: string;
    textMargins: any;  // com.massifmaps.styles.TextMargins
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['backgroundColor', 'colorConverter'], ['borderColor', 'colorConverter'], ['strokeColor', 'colorConverter']] as const;

export const SELECTORS: Record<string, string> = {};
