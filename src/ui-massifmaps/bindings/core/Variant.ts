// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { EnumValue, VariantType } from '../enums';

/** com.massifmaps.core.Variant / MSFVariant */
export const METHODS = ['containsObjectKey', 'fromString', 'getArrayElement', 'getArraySize', 'getBool', 'getDouble', 'getLong', 'getObjectElement', 'getObjectKeys', 'getString', 'getType'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    containsObjectKey(arg0: string): boolean;
    getArrayElement(arg0: number): any;
    getArraySize(): number;
    getBool(): boolean;
    getDouble(): number;
    getLong(): number;
    getObjectElement(arg0: string): any;
    getObjectKeys(): string[];
    getString(): string;
    getType(): VariantType;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
