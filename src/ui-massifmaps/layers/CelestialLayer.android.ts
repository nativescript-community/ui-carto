// SCAFFOLD - generated starting point, review before use.

import { BaseNative } from '../BaseNative';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS, Accessors, METHODS, SELECTORS } from '../bindings/layers/CelestialLayer';
import { CelestialLayerOptions, CelestialEventListener as ICelestialEventListener } from './CelestialLayer';
import { ACCESSORS as ACC_Layer, Accessors as Acc_Layer, METHODS as MET_Layer, Methods as Met_Layer, SELECTORS as SEL_Layer } from '../bindings/layers/Layer';
import { mapRangeConverter } from '..';

export interface CelestialLayer extends Accessors {}

export class CelestialLayer extends BaseNative<com.massifmaps.layers.CelestialLayer, CelestialLayerOptions> {
    createNative(options: CelestialLayerOptions) {
        return new com.massifmaps.layers.CelestialLayer(); // TODO pick the right overload
    }

    // TODO additions.CelestialEventListener does not exist yet: copy RasterTileEventListener.java and rebuild the demo
    mCelestialEventListener?: ICelestialEventListener;
    nCelestialEventListener?: com.nativescript.massifmaps.additions.CelestialEventListener;
    setCelestialEventListener(listener: ICelestialEventListener) {
        this.mCelestialEventListener = listener;
        if (listener) {
            if (!this.nCelestialEventListener) {
                this.nCelestialEventListener = new com.nativescript.massifmaps.additions.CelestialEventListener(
                    new com.nativescript.massifmaps.additions.CelestialEventListener.Listener({
                        onCelestialObjectClicked: this.onCelestialObjectClicked.bind(this)
                    })
                );
            }
            this.getNative().setCelestialEventListener(this.nCelestialEventListener);
        } else {
            this.nCelestialEventListener = null;
            this.getNative().setCelestialEventListener(null);
        }
    }
    onCelestialObjectClicked(arg0: com.massifmaps.ui.ClickInfo, arg1: com.massifmaps.celestial.CelestialObject) {
        if (!this.mCelestialEventListener?.onCelestialObjectClicked) {
            return false;
        }
        // TODO marshal the native arguments into the shape the listener interface declares
        return this.mCelestialEventListener.onCelestialObjectClicked.call(this.mCelestialEventListener, arg0 as any, arg1 as any) || false;
    }
}

bindNative(CelestialLayer, METHODS, ACCESSORS, { selectors: SELECTORS, exclude: ['celestialEventListener', 'setCelestialEventListener', 'getCelestialEventListener'] });

export interface CelestialLayer extends Acc_Layer, Omit<Met_Layer, 'isUpdateInProgress'> {}
bindNative(CelestialLayer, MET_Layer, ACC_Layer, { selectors: SEL_Layer, converters: { visibleZoomRange: mapRangeConverter } });
