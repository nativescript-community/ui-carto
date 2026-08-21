import { Color } from '@nativescript/core';
import { BaseNative } from '..';
import { Accessors as Acc_PostProcessEffect, Methods as Met_PostProcessEffect } from '../bindings/renderers/PostProcessEffect';

/**
 * A full-screen fragment shader the renderer runs on the finished frame.
 *
 * The SDK provides the mechanism - an offscreen colour buffer, optionally the packed
 * terrain depth, and named float/colour parameters - and the application provides the
 * look, as a shader string. Install one with `map.setPostProcessEffect(effect)`, and
 * `map.setPostProcessEffect(null)` to take it off again.
 *
 * The shader always sees `uColorTex`, `uInvScreenSize`, `uProjInvScale` and `uFar`;
 * `uTerrainDepthTex` only exists when `terrainDepthRequired` is set.
 */
export interface PostProcessEffectOptions {
    /** identifies the effect to the renderer; a new name forces a shader rebuild */
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
