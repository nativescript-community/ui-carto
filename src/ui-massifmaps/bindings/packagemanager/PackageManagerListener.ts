// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.packagemanager.PackageManagerListener / MSFPackageManagerListener */
export const METHODS = ['onPackageCancelled', 'onPackageFailed', 'onPackageListFailed', 'onPackageListUpdated', 'onPackageStatusChanged', 'onPackageUpdated', 'onStyleFailed', 'onStyleUpdated'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    onPackageCancelled(arg0: string, arg1: number): void;
    onPackageFailed(arg0: string, arg1: number, arg2: number): void;
    onPackageListFailed(): void;
    onPackageListUpdated(): void;
    onPackageStatusChanged(arg0: string, arg1: number, arg2: any): void;
    onPackageUpdated(arg0: string, arg1: number): void;
    onStyleFailed(arg0: string): void;
    onStyleUpdated(arg0: string): void;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    onPackageCancelled: 'onPackageCancelledVersion',
    onPackageFailed: 'onPackageFailedVersionErrorType',
    onPackageStatusChanged: 'onPackageStatusChangedVersionStatus',
    onPackageUpdated: 'onPackageUpdatedVersion',
};
