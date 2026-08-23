/**
 * Just enough of @nativescript/core to typecheck the surface API without installing the whole
 * NativeScript toolchain. The real one is a superset; anything this misses shows up as a
 * compile error here rather than being silently accepted.
 */
export interface EventData {
    eventName: string;
    object: any;
}

export declare class Observable {
    addEventListener(eventNames: string, callback: (data: EventData) => void, thisArg?: any, once?: boolean): void;
    removeEventListener(eventNames: string, callback?: any, thisArg?: any): void;
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): void;
    off(eventNames: string, callback?: any, thisArg?: any): void;
    once(eventNames: string, callback: (data: EventData) => void, thisArg?: any): void;
    notify<T extends Partial<EventData>>(data: T): void;
    hasListeners(eventName: string): boolean;
}
