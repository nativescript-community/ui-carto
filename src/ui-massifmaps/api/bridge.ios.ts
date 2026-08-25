import { Delivery, NativeBridge, NativeEventHandler } from './bridge';

/**
 * iOS half of the surface API bridge. See bridge.d.ts for why nothing here is typed against the
 * generated SDK typings.
 *
 * Selector spellings follow the SDK's Swig-ObjC convention - the method name, then the name of
 * every parameter after the first - so `setFloat(handle, path, value)` is
 * `-setFloat:path:value:` and reads here as `setFloatPathValue`.
 */

/**
 * Stands in for "no default" when reading a string. Contains a NUL, so no real value equals it;
 * the same constant the SDK's own Objective-C sugar uses.
 */
const ABSENT = '\u0000massif:absent';

function lookup(name: string): any {
    try {
        return (global as any)[name] ?? null;
    } catch (e) {
        return null;
    }
}

const MassifApi = lookup('MSFMassifApi');
/**
 * MassifInterop is the half that takes SDK TYPES - adopt, the event bridges, the raw getters.
 * MassifApi itself is kept to strings, numbers and handles so a hand-written binding can carry it,
 * which is why these two are separate classes and not one.
 */
const MassifInterop = lookup('MSFMassifInterop');

/**
 * Whether MassifApi.on takes the consume flag.
 *
 * The selector carries its parameter names, so the overload that lets a handler claim an event
 * is a different symbol from the one that does not - no arity guessing needed.
 */
const CAN_CONSUME = typeof MassifApi?.onEventListenerDeliveryCoalesceProjectionConsume === 'function';

/**
 * The plugin's own ObjC shim over the SDK's EventListener director.
 *
 * It exists for the thread: the SDK emits from the render and tile threads and NativeScript has
 * no JavaScript runtime there, so the shim does `dispatch_sync` onto the main queue - the same
 * dance NSMSFVectorTileEventListener does, and the reason a CONSUMING subscription can still
 * answer synchronously.
 */
const NativeEventListener = lookup('NSMSFApiEventListener');

/** Keeps each subscription's director alive; the C++ side holds it as a raw pointer and ARC
 *  would otherwise collect it the moment `on` returns, silently and with no warning. */
const listeners = new Map<number, any>();

function toArrayBuffer(data: NSData): ArrayBuffer {
    const buffer = new ArrayBuffer(data.length);
    if (data.length) {
        data.getBytes(buffer as any);
    }
    return buffer;
}

export const bridge: NativeBridge = {
    available: !!MassifApi && !!MassifInterop,

    create: (kind, id, json) => MassifApi.createObjectIdJson(kind, id, json),
    destroy: (handle) => MassifApi.destroy(handle),
    isValid: (handle) => MassifApi.isValid(handle),
    findObject: (kind, id) => MassifApi.findObjectObjectId(kind, id),
    unregisterObject: (kind, id) => MassifApi.unregisterObjectObjectId(kind, id),

    setFloat: (handle, path, value) => MassifApi.setFloatPathValue(handle, path, value),
    setInt: (handle, path, value) => MassifApi.setIntPathValue(handle, path, value),
    setBool: (handle, path, value) => MassifApi.setBoolPathValue(handle, path, value),
    setString: (handle, path, value) => MassifApi.setStringPathValue(handle, path, value),
    setObject: (handle, path, value) => MassifApi.setObjectPathValue(handle, path, value),
    // Only on an SDK that carries it: an older one keeps the per-key path.
    setAll: MassifApi?.setAllJsonProjection
        ? (handle, json, projection) => MassifApi.setAllJsonProjection(handle, json, projection)
        : undefined,
    getObject: (handle, path) => MassifApi.getObjectPath(handle, path),

    getFloat: (handle, path, defaultValue) => MassifApi.getFloatPathDefaultValue(handle, path, defaultValue),
    getInt: (handle, path, defaultValue) => MassifApi.getIntPathDefaultValue(handle, path, defaultValue),
    getBool: (handle, path, defaultValue) => MassifApi.getBoolPathDefaultValue(handle, path, defaultValue),
    getString(handle, path) {
        const value = MassifApi.getStringPathDefaultValue(handle, path, ABSENT);
        return value === ABSENT ? null : value;
    },
    getPos(handle, path, projection) {
        const json = MassifApi.getPosPathProjection(handle, path, projection);
        return json ? json : null;
    },

    call: (handle, method, argsJson) => MassifApi.callMethodArgsJson(handle, method, argsJson),
    callAsync: (handle, method, argsJson, event) => MassifApi.callAsyncMethodArgsJsonEvent(handle, method, argsJson, event),
    cancelCall: (call) => MassifApi.cancelCall(call),
    cancelCalls: (handle) => MassifApi.cancelCalls(handle),

    getDoubles(handle) {
        // The module declares an NSData typemap for std::vector<double> - the raw doubles, not
        // the MSFDoubleVector proxy, which would be one call per element.
        const data: NSData = MassifApi.getDoubles(handle);
        if (!data || !data.length) {
            return [];
        }
        const buffer = new ArrayBuffer(data.length);
        data.getBytes(buffer as any);
        return Array.from(new Float64Array(buffer));
    },
    getData(handle, path) {
        // NSData over the raw bytes, not an MSFBinaryData proxy - the SDK dropped that from
        // MassifApi so the class names no SDK type. Empty is what a non-blob path returns.
        const data: NSData = MassifApi.getDataPath(handle, path);
        return data && data.length ? toArrayBuffer(data) : null;
    },

    canConsume: CAN_CONSUME,

    on(handle: number, event: string, handler: NativeEventHandler, delivery: Delivery, coalesce: boolean, projection: string, consume: boolean) {
        if (!NativeEventListener) {
            throw new Error('the plugin was built without NSMSFApiEventListener - see the surface API notes in the README');
        }
        const listener = ApiEventListenerImpl.initWithHandler(handler);
        const subscription = CAN_CONSUME
            ? MassifApi.onEventListenerDeliveryCoalesceProjectionConsume(handle, event, listener, delivery, coalesce, projection, consume)
            : MassifApi.onEventListenerDeliveryCoalesceProjection(handle, event, listener, delivery, coalesce, projection);
        if (subscription) {
            listeners.set(subscription, listener);
        }
        return subscription;
    },
    off(subscription) {
        const removed = MassifApi.off(subscription);
        listeners.delete(subscription);
        return removed;
    },
    offAll(handle) {
        return MassifApi.offAll(handle);
    },

    // adopt:objectId:options: and friends - one selector per overload, which is why the bridge
    // keeps five names rather than one.
    adoptOptions: (kind, id, options) => MassifInterop.adoptObjectIdOptions(kind, id, options),
    adoptLayer: (kind, id, layer) => MassifInterop.adoptObjectIdLayer(kind, id, layer),
    adoptLayers: (kind, id, layers) => MassifInterop.adoptObjectIdLayers(kind, id, layers),
    adoptSource: (kind, id, source) => MassifInterop.adoptObjectIdSource(kind, id, source),
    adoptView: (kind, id, view) => MassifInterop.adoptObjectIdView(kind, id, view),
    adoptAssets: (kind, id, assets) => MassifInterop.adoptObjectIdAssets(kind, id, assets),
    getNativeLayer: (id) => MassifInterop.getLayer(id),
    getNativeSource: (id) => MassifInterop.getSource(id),
    getNativeLayerByHandle: (handle) => MassifInterop.getLayerByHandle(handle),
    getNativeSourceByHandle: (handle) => MassifInterop.getSourceByHandle(handle),

    attachMapEvents(mapView, handle) {
        mapView.setMapEventListener(MassifInterop.createEventBridgeChained(handle, mapView.getMapEventListener()));
    },
    attachVectorTileEvents(layer, handle) {
        layer.setVectorTileEventListener(MassifInterop.createVectorTileEventBridgeChained(handle, layer.getVectorTileEventListener()));
    },
    attachVectorElementEvents(layer, handle) {
        layer.setVectorElementEventListener(MassifInterop.createVectorElementEventBridgeChained(handle, layer.getVectorElementEventListener()));
    },

    nativeShortClassName(nativeObject) {
        if (!nativeObject || !nativeObject.class) {
            return null;
        }
        const name = NSStringFromClass(nativeObject.class());
        return name && name.indexOf('MSF') === 0 ? name.substring(3) : null;
    }
};

/**
 * The JavaScript half of the shim: NSMSFApiEventListener does the thread hop and calls this.
 *
 * Declared with `extends` on a runtime lookup rather than on the global, because the class only
 * exists once the plugin's native additions were built against an SDK carrying the facade.
 */
const ApiEventListenerBase = (NativeEventListener ?? NSObject) as { new (): any; alloc(): any };

class ApiEventListenerImpl extends ApiEventListenerBase {
    private mHandler: NativeEventHandler;

    static initWithHandler(handler: NativeEventHandler): ApiEventListenerImpl {
        const listener = ApiEventListenerImpl.alloc().init() as ApiEventListenerImpl;
        listener.mHandler = handler;
        return listener;
    }

    /** `-onEventThreaded:event:payload:` on NSMSFApiEventListener, already on the main queue. */
    onEventThreadedEventPayload(target: number, event: string, payload: number): boolean {
        return this.mHandler ? this.mHandler(target, event, payload) : false;
    }
}
