// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color } from '@nativescript/core';

/** com.massifmaps.styles.BalloonPopupButtonStyleBuilder / MSFBalloonPopupButtonStyleBuilder */
export const METHODS = ['buildStyle', 'getButtonWidth', 'getCornerRadius', 'getStrokeColor', 'getStrokeWidth', 'getTextColor', 'getTextFontName', 'getTextFontSize', 'getTextMargins', 'setButtonWidth', 'setCornerRadius', 'setStrokeColor', 'setStrokeWidth', 'setTextColor', 'setTextFontName', 'setTextFontSize', 'setTextMargins'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getButtonWidth(): number;
    getCornerRadius(): number;
    getStrokeColor(): Color;
    getStrokeWidth(): number;
    getTextColor(): Color;
    getTextFontName(): string;
    getTextFontSize(): number;
    getTextMargins(): any;
    setButtonWidth(arg0: number): void;
    setCornerRadius(arg0: number): void;
    setStrokeColor(arg0: Color | string): void;
    setStrokeWidth(arg0: number): void;
    setTextColor(arg0: Color | string): void;
    setTextFontName(arg0: string): void;
    setTextFontSize(arg0: number): void;
    setTextMargins(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    buttonWidth: ['getButtonWidth', 'setButtonWidth'],
    cornerRadius: ['getCornerRadius', 'setCornerRadius'],
    strokeColor: ['getStrokeColor', 'setStrokeColor'],
    strokeWidth: ['getStrokeWidth', 'setStrokeWidth'],
    textColor: ['getTextColor', 'setTextColor'],
    textFontName: ['getTextFontName', 'setTextFontName'],
    textFontSize: ['getTextFontSize', 'setTextFontSize'],
    textMargins: ['getTextMargins', 'setTextMargins'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    buttonWidth: number;
    cornerRadius: number;
    strokeColor: Color | string;
    strokeWidth: number;
    textColor: Color | string;
    textFontName: string;
    textFontSize: number;
    textMargins: any;  // com.massifmaps.styles.BalloonPopupMargins
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['strokeColor', 'colorConverter'], ['textColor', 'colorConverter']] as const;

export const SELECTORS: Record<string, string> = {};
