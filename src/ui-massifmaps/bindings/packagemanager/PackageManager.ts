// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.packagemanager.PackageManager / MSFPackageManager */
export const METHODS = ['cancelPackageTasks', 'getLocalPackage', 'getLocalPackageStatus', 'getLocalPackages', 'getPackageManagerListener', 'getServerPackage', 'getServerPackageListAge', 'getServerPackageListMetaInfo', 'getServerPackages', 'isAreaDownloaded', 'setPackageManagerListener', 'setPackagePriority', 'start', 'startPackageDownload', 'startPackageImport', 'startPackageListDownload', 'startPackageRemove', 'stop', 'suggestPackages'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    cancelPackageTasks(arg0: string): void;
    getLocalPackage(arg0: string): any;
    getLocalPackageStatus(arg0: string, arg1: number): any;
    getLocalPackages(): any;
    getPackageManagerListener(): any;
    getServerPackage(arg0: string): any;
    getServerPackageListAge(): number;
    getServerPackageListMetaInfo(): any;
    getServerPackages(): any;
    isAreaDownloaded(arg0: any, arg1: number, arg2: any): boolean;
    setPackageManagerListener(arg0: any): void;
    setPackagePriority(arg0: string, arg1: number): void;
    start(): boolean;
    startPackageDownload(arg0: string): boolean;
    startPackageImport(arg0: string, arg1: number, arg2: string): boolean;
    startPackageListDownload(): boolean;
    startPackageRemove(arg0: string): boolean;
    stop(arg0: boolean): void;
    suggestPackages(arg0: any, arg1: any): any;
}

export const ACCESSORS: Record<string, [string, string]> = {
    packageManagerListener: ['getPackageManagerListener', 'setPackageManagerListener'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    packageManagerListener: any;  // com.massifmaps.packagemanager.PackageManagerListener
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    getLocalPackageStatus: 'getLocalPackageStatusVersion',
    isAreaDownloaded: 'isAreaDownloadedZoomProjection',
    setPackagePriority: 'setPackagePriorityPriority',
    startPackageImport: 'startPackageImportVersionPackageFileName',
    suggestPackages: 'suggestPackagesProjection',
};
