/**
 * Forwarders from a generated name list, not a Proxy: half the native surface is SWIG plumbing
 * that must stay private, and prototype forwarders are far cheaper than Proxy traps.
 * Anything already on the prototype (hand-written method, `@nativeProperty`) wins.
 */

export interface NativeConverter {
    toNative(value: any, key: string): any;
    fromNative(value: any, key: string): any;
}

export interface NativeBinding {
    /** android method name -> ObjC selector, generated. Ignored on android. */
    selectors?: Record<string, string>;
    /** by synthesised property name; replaces the @native*Property decorators */
    converters?: Record<string, NativeConverter>;
    /** trailing arguments to pad a short call with, by method name */
    defaults?: Record<string, any[]>;
    /** skip these entirely (declared natively but not part of our public API) */
    exclude?: string[];
}

/** Lets `options.terrainOptions = terrain` work instead of `setTerrainOptions(terrain.getNative())`. */
export function unwrapNative(value: any) {
    return value !== null && typeof value === 'object' && typeof value.getNative === 'function' ? value.getNative() : value;
}

function forwarder(nativeName: string, pad?: any[]) {
    return function (this: any) {
        const native = this.getNative();
        const len = arguments.length;
        if (len === 0 && !pad) {
            return native[nativeName]();
        }
        const total = pad ? Math.max(len, pad.length) : len;
        const args = new Array(total);
        for (let i = 0; i < len; i++) {
            // eslint-disable-next-line prefer-rest-params
            args[i] = unwrapNative(arguments[i]);
        }
        for (let i = len; i < total; i++) {
            args[i] = pad[i];
        }
        // eslint-disable-next-line prefer-spread
        return native[nativeName].apply(native, args);
    };
}

export function bindNative(cls: any, methods: readonly string[], accessors: Record<string, [string, string]> = {}, binding: NativeBinding = {}) {
    const proto = cls.prototype;
    const selectors = __IOS__ ? binding.selectors : undefined;
    const { converters, defaults, exclude } = binding;

    for (const name of methods) {
        if (name in proto || exclude?.indexOf(name) >= 0) {
            continue;
        }
        Object.defineProperty(proto, name, {
            configurable: true,
            writable: true,
            value: forwarder(selectors?.[name] ?? name, defaults?.[name])
        });
    }

    for (const key in accessors) {
        if (key in proto || exclude?.indexOf(key) >= 0) {
            continue;
        }
        const [rawGetter, rawSetter] = accessors[key];
        const getterName = selectors?.[rawGetter] ?? rawGetter;
        const setterName = selectors?.[rawSetter] ?? rawSetter;
        const converter = converters?.[key];
        Object.defineProperty(proto, key, {
            configurable: true,
            enumerable: true,
            get(this: any) {
                const native = this.native || this.getNative();
                if (!native) {
                    return this.options?.[key];
                }
                const value = native[getterName]();
                return converter ? converter.fromNative.call(this, value, key) : value;
            },
            set(this: any, value: any) {
                if (this.options) {
                    this.options[key] = value;
                }
                const native = this.native || this.getNative();
                if (!native || !native[setterName]) {
                    return;
                }
                const actualValue = converter ? converter.toNative.call(this, value, key) : unwrapNative(value);
                if (actualValue === undefined) {
                    console.warn('undefined is not a correct value to pass to ' + setterName + ' on ' + native);
                } else {
                    native[setterName](actualValue);
                    // a style builder caches its built style; any property change invalidates it
                    this.mBuildStyle = null;
                }
            }
        });
    }
    return cls;
}

type Uncap<S extends string> = S extends `${infer A}${infer B}` ? `${Lowercase<A>}${B}` : S;

/** Only get/set pairs: a getter with no setter is not turned into a property at runtime. */
type AccessorsWithPrefix<T, Pre extends string> = {
    [K in keyof T as K extends `${Pre}${infer P}` ? (T[K] extends () => any ? (`set${P}` extends keyof T ? Uncap<P> : never) : never) : never]: T[K] extends () => infer R ? R : never;
};

/** Covers `getX`/`setX` and SWIG's boolean `isX`/`setX`. `Omit` keys that need a converter and redeclare them. */
export type NativeAccessors<T> = AccessorsWithPrefix<T, 'get'> & AccessorsWithPrefix<T, 'is'>;

export type NativeMethods<T> = {
    [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K];
};
