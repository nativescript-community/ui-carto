// SCAFFOLD - generated starting point, review before use.

import { BaseNative } from '../BaseNative';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS, Accessors, METHODS, SELECTORS } from '../bindings/layers/CelestialLayer';
import { CelestialLayerOptions, CelestialEventListener as ICelestialEventListener } from './CelestialLayer';
import { ACCESSORS as ACC_Layer, Accessors as Acc_Layer, METHODS as MET_Layer, Methods as Met_Layer, SELECTORS as SEL_Layer } from '../bindings/layers/Layer';
import { mapRangeConverter } from '..';

// TODO add NSMSFCelestialEventListener (copy NSMSFRasterTileEventListener.swift, rerun typings.ios)
export class MSFCelestialEventListenerImpl extends NSMSFCelestialEventListener {
    private _owner: WeakRef<ICelestialEventListener>;
    private _wrapper: WeakRef<CelestialLayer>;
    public static initWithOwner(owner: WeakRef<ICelestialEventListener>, wrapper: WeakRef<CelestialLayer>): MSFCelestialEventListenerImpl {
        const delegate = MSFCelestialEventListenerImpl.new() as MSFCelestialEventListenerImpl;
        delegate._owner = owner;
        delegate._wrapper = wrapper;
        return delegate;
    }
    public onCelestialObjectClickedThreaded(arg0: MSFClickInfo, arg1: MSFCelestialObject) {
        const owner = this._owner?.get();
        if (!owner?.onCelestialObjectClicked) {
            return false;
        }
        // TODO marshal the native arguments into the shape the listener interface declares
        return owner.onCelestialObjectClicked(arg0 as any, arg1 as any) || false;
    }
}

export interface CelestialLayer extends Accessors {}

export class CelestialLayer extends BaseNative<MSFCelestialLayer, CelestialLayerOptions> {
    createNative(options: CelestialLayerOptions) {
        return MSFCelestialLayer.alloc().init(); // TODO pick the right overload
    }

    mCelestialEventListener?: ICelestialEventListener;
    nCelestialEventListener?: MSFCelestialEventListener;
    setCelestialEventListener(listener: ICelestialEventListener) {
        this.mCelestialEventListener = listener;
        this.nCelestialEventListener = listener ? MSFCelestialEventListenerImpl.initWithOwner(new WeakRef(listener), new WeakRef(this as any as CelestialLayer)) : null;
        this.getNative().setCelestialEventListener(this.nCelestialEventListener);
    }
}

bindNative(CelestialLayer, METHODS, ACCESSORS, { selectors: SELECTORS, exclude: ['celestialEventListener', 'setCelestialEventListener', 'getCelestialEventListener'] });

export interface CelestialLayer extends Acc_Layer, Omit<Met_Layer, 'isUpdateInProgress'> {}
bindNative(CelestialLayer, MET_Layer, ACC_Layer, { selectors: SEL_Layer, converters: { visibleZoomRange: mapRangeConverter } });
