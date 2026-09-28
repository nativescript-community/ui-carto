import { Color } from '@nativescript/core';
import { BaseNative } from '..';
import { Accessors as Acc_PostProcessEffect, Methods as Met_PostProcessEffect } from '../bindings/renderers/PostProcessEffect';

/**
 * Full-screen fragment shader run on the finished frame. It always sees `uColorTex`, `uInvScreenSize`,
 * `uProjInvScale` and `uFar`; `uTerrainDepthTex` only exists when `terrainDepthRequired` is set.
 */
export interface PostProcessEffectOptions {
    /** a new name forces a shader rebuild */
    name: string;
    /** the fragment shader source, `void main(void)` and all */
    fragmentShader: string;
}

export interface PostProcessEffect extends Acc_PostProcessEffect, Omit<Met_PostProcessEffect, 'getColorParameter' | 'setColorParameter'> {}
export class PostProcessEffect extends BaseNative<any, PostProcessEffectOptions> {
    constructor(options: PostProcessEffectOptions, native?: any);
    /** the generic forwarder cannot turn a CSS string into a native Color */
    setColorParameter(name: string, color: Color | string): void;
    getColorParameter(name: string): Color;
}
