// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color, ImageAsset, ImageSource } from '@nativescript/core';

/** com.massifmaps.styles.BalloonPopupStyleBuilder / MSFBalloonPopupStyleBuilder */
export const METHODS = ['buildStyle', 'getButtonMargins', 'getCornerRadius', 'getDescriptionColor', 'getDescriptionField', 'getDescriptionFontName', 'getDescriptionFontSize', 'getDescriptionMargins', 'getLeftColor', 'getLeftImage', 'getLeftMargins', 'getRightColor', 'getRightImage', 'getRightMargins', 'getStrokeColor', 'getStrokeWidth', 'getTitleColor', 'getTitleField', 'getTitleFontName', 'getTitleFontSize', 'getTitleMargins', 'getTriangleHeight', 'getTriangleWidth', 'isDescriptionWrap', 'isTitleWrap', 'setButtonMargins', 'setCornerRadius', 'setDescriptionColor', 'setDescriptionField', 'setDescriptionFontName', 'setDescriptionFontSize', 'setDescriptionMargins', 'setDescriptionWrap', 'setLeftColor', 'setLeftImage', 'setLeftMargins', 'setRightColor', 'setRightImage', 'setRightMargins', 'setStrokeColor', 'setStrokeWidth', 'setTitleColor', 'setTitleField', 'setTitleFontName', 'setTitleFontSize', 'setTitleMargins', 'setTitleWrap', 'setTriangleHeight', 'setTriangleWidth'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getButtonMargins(): any;
    getCornerRadius(): number;
    getDescriptionColor(): Color;
    getDescriptionField(): string;
    getDescriptionFontName(): string;
    getDescriptionFontSize(): number;
    getDescriptionMargins(): any;
    getLeftColor(): Color;
    getLeftImage(): ImageSource;
    getLeftMargins(): any;
    getRightColor(): Color;
    getRightImage(): ImageSource;
    getRightMargins(): any;
    getStrokeColor(): Color;
    getStrokeWidth(): number;
    getTitleColor(): Color;
    getTitleField(): string;
    getTitleFontName(): string;
    getTitleFontSize(): number;
    getTitleMargins(): any;
    getTriangleHeight(): number;
    getTriangleWidth(): number;
    isDescriptionWrap(): boolean;
    isTitleWrap(): boolean;
    setButtonMargins(arg0: any): void;
    setCornerRadius(arg0: number): void;
    setDescriptionColor(arg0: Color | string): void;
    setDescriptionField(arg0: string): void;
    setDescriptionFontName(arg0: string): void;
    setDescriptionFontSize(arg0: number): void;
    setDescriptionMargins(arg0: any): void;
    setDescriptionWrap(arg0: boolean): void;
    setLeftColor(arg0: Color | string): void;
    setLeftImage(arg0: string | ImageSource | ImageAsset): void;
    setLeftMargins(arg0: any): void;
    setRightColor(arg0: Color | string): void;
    setRightImage(arg0: string | ImageSource | ImageAsset): void;
    setRightMargins(arg0: any): void;
    setStrokeColor(arg0: Color | string): void;
    setStrokeWidth(arg0: number): void;
    setTitleColor(arg0: Color | string): void;
    setTitleField(arg0: string): void;
    setTitleFontName(arg0: string): void;
    setTitleFontSize(arg0: number): void;
    setTitleMargins(arg0: any): void;
    setTitleWrap(arg0: boolean): void;
    setTriangleHeight(arg0: number): void;
    setTriangleWidth(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    buttonMargins: ['getButtonMargins', 'setButtonMargins'],
    cornerRadius: ['getCornerRadius', 'setCornerRadius'],
    descriptionColor: ['getDescriptionColor', 'setDescriptionColor'],
    descriptionField: ['getDescriptionField', 'setDescriptionField'],
    descriptionFontName: ['getDescriptionFontName', 'setDescriptionFontName'],
    descriptionFontSize: ['getDescriptionFontSize', 'setDescriptionFontSize'],
    descriptionMargins: ['getDescriptionMargins', 'setDescriptionMargins'],
    descriptionWrap: ['isDescriptionWrap', 'setDescriptionWrap'],
    leftColor: ['getLeftColor', 'setLeftColor'],
    leftImage: ['getLeftImage', 'setLeftImage'],
    leftMargins: ['getLeftMargins', 'setLeftMargins'],
    rightColor: ['getRightColor', 'setRightColor'],
    rightImage: ['getRightImage', 'setRightImage'],
    rightMargins: ['getRightMargins', 'setRightMargins'],
    strokeColor: ['getStrokeColor', 'setStrokeColor'],
    strokeWidth: ['getStrokeWidth', 'setStrokeWidth'],
    titleColor: ['getTitleColor', 'setTitleColor'],
    titleField: ['getTitleField', 'setTitleField'],
    titleFontName: ['getTitleFontName', 'setTitleFontName'],
    titleFontSize: ['getTitleFontSize', 'setTitleFontSize'],
    titleMargins: ['getTitleMargins', 'setTitleMargins'],
    titleWrap: ['isTitleWrap', 'setTitleWrap'],
    triangleHeight: ['getTriangleHeight', 'setTriangleHeight'],
    triangleWidth: ['getTriangleWidth', 'setTriangleWidth'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    buttonMargins: any;  // com.massifmaps.styles.BalloonPopupMargins
    cornerRadius: number;
    descriptionColor: Color | string;
    descriptionField: string;
    descriptionFontName: string;
    descriptionFontSize: number;
    descriptionMargins: any;  // com.massifmaps.styles.BalloonPopupMargins
    descriptionWrap: boolean;
    leftColor: Color | string;
    leftImage: string | ImageSource | ImageAsset;
    leftMargins: any;  // com.massifmaps.styles.BalloonPopupMargins
    rightColor: Color | string;
    rightImage: string | ImageSource | ImageAsset;
    rightMargins: any;  // com.massifmaps.styles.BalloonPopupMargins
    strokeColor: Color | string;
    strokeWidth: number;
    titleColor: Color | string;
    titleField: string;
    titleFontName: string;
    titleFontSize: number;
    titleMargins: any;  // com.massifmaps.styles.BalloonPopupMargins
    titleWrap: boolean;
    triangleHeight: number;
    triangleWidth: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['descriptionColor', 'colorConverter'], ['leftColor', 'colorConverter'], ['leftImage', 'massifImageConverter'], ['rightColor', 'colorConverter'], ['rightImage', 'massifImageConverter'], ['strokeColor', 'colorConverter'], ['titleColor', 'colorConverter']] as const;

export const SELECTORS: Record<string, string> = {};
