// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.layers.ClusteredVectorLayer / MSFClusteredVectorLayer */
export const METHODS = ['expandCluster', 'getClusterElementBuilder', 'getMaximumClusterZoom', 'getMinimumClusterDistance', 'isAnimatedClusters', 'refresh', 'setAnimatedClusters', 'setMaximumClusterZoom', 'setMinimumClusterDistance'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    expandCluster(arg0: any, arg1: number): boolean;
    getClusterElementBuilder(): any;
    getMaximumClusterZoom(): number;
    getMinimumClusterDistance(): number;
    isAnimatedClusters(): boolean;
    refresh(): void;
    setAnimatedClusters(arg0: boolean): void;
    setMaximumClusterZoom(arg0: number): void;
    setMinimumClusterDistance(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    animatedClusters: ['isAnimatedClusters', 'setAnimatedClusters'],
    maximumClusterZoom: ['getMaximumClusterZoom', 'setMaximumClusterZoom'],
    minimumClusterDistance: ['getMinimumClusterDistance', 'setMinimumClusterDistance'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    animatedClusters: boolean;
    maximumClusterZoom: number;
    minimumClusterDistance: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    expandCluster: 'expandClusterPx',
};
