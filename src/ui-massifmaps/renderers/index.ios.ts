import { Color } from '@nativescript/core';
import { colorConverter } from '..';
import { BaseNative } from '../BaseNative';
import { ACCESSORS as EFFECT_ACC, METHODS as EFFECT_MET, SELECTORS as EFFECT_SEL, Accessors as EffectAcc } from '../bindings/renderers/PostProcessEffect';
import { bindNative } from '../nativeclass.common';
import { PostProcessEffectOptions } from '.';

export class PostProcessEffect extends BaseNative<MSFPostProcessEffect, PostProcessEffectOptions> {
    createNative(options: PostProcessEffectOptions) {
        if (!options?.name || !options?.fragmentShader) {
            return null;
        }
        return MSFPostProcessEffect.alloc().initWithNameFragmentShader(options.name, options.fragmentShader);
    }
    /** the generic forwarder cannot turn a CSS string into a native Color */
    setColorParameter(name: string, color: Color | string) {
        this.getNative().setColorParameterColor(name, colorConverter.toNative.call(this, color, name));
    }
}
bindNative(PostProcessEffect, EFFECT_MET, EFFECT_ACC, { selectors: EFFECT_SEL });
export interface PostProcessEffect extends EffectAcc {}
