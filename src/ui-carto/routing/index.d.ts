import { BaseNative } from '..';
import { Projection } from '../projections';
import { FeatureCollection } from '../geometry/feature';
import { DefaultLatLonKeys, GenericMapPos, MapPosVector, NativeVector } from '../core';
import { CartoPackageManager } from '../packagemanager';

declare enum RoutingAction {
    HEAD_ON,
    FINISH,
    NO_TURN,
    GO_STRAIGHT,
    TURN_RIGHT,
    UTURN,
    TURN_LEFT,
    REACH_VIA_LOCATION,
    ENTER_ROUNDABOUT,
    LEAVE_ROUNDABOUT,
    STAY_ON_ROUNDABOUT,
    START_AT_END_OF_STREET,
    ENTER_AGAINST_ALLOWED_DIRECTION,
    LEAVE_AGAINST_ALLOWED_DIRECTION,
    GO_UP,
    GO_DOWN,
    WAIT
}
export interface RoutingRequest<T = DefaultLatLonKeys> {
    projection: Projection<T>;
    points: GenericMapPos<T>[];
    customOptions: any;
}

export interface RouteMatchingRequest<T = DefaultLatLonKeys> {
    projection: Projection<T>;
    points: GenericMapPos<T>[];
    accuracy?: number;
    customOptions?: any;
}

export interface RoutingServiceOptions {}
export interface ValhallaRoutingServiceOptions {
    profile: ValhallaProfile;
}

export interface RoutingInstruction {
    getPointIndex(): number;
    getTurnAngle(): number;
    getTime(): number;
    getStreetName(): string;
    getInstruction(): string;
    getDistance(): number;
    getAzimuth(): number;
    getAction(): RoutingAction;
}
export class RoutingInstructionVector extends NativeVector<RoutingInstruction> {}

export interface RoutingResult<T = DefaultLatLonKeys> {
    getPoints(): MapPosVector<T>;
    getTotalTime(): number;
    getTotalDistance(): number;
    getInstructions(): RoutingInstructionVector;
    getRawResult(): string;
}

export interface RouteMatchingResult<T = DefaultLatLonKeys> {
    getPoints(): MapPosVector<T>;
    getProjection(): Projection;
    getRawResult(): string;
}

export class RoutingService<T, U extends RoutingServiceOptions> extends BaseNative<T, U> {
    calculateRoute<T = DefaultLatLonKeys>(options: RoutingRequest<T>, profile?: string): Promise<RoutingResult<T>>;
    routingResultToJSON<T = DefaultLatLonKeys>(options: RoutingResult<T>): Promise<string>;
}
export class ValhallaRoutingService<T, U extends ValhallaRoutingServiceOptions> extends RoutingService<T, U> {
    profile: ValhallaProfile;
    matchRoute<T = DefaultLatLonKeys>(options: RouteMatchingRequest, profile?: string): Promise<RouteMatchingResult<T>>;
}

export interface PackageManagerRoutingServiceOptions extends RoutingServiceOptions {
    packageManager: CartoPackageManager;
}
export class PackageManagerRoutingService extends RoutingService<any, PackageManagerRoutingServiceOptions> {}

export type ValhallaProfile = 'car' | 'auto' | 'bus' | 'bicycle' | 'pedestrian' | 'truck' | 'motorcycle';

export interface ValhallaOfflineRoutingServiceOptions extends ValhallaRoutingServiceOptions {
    path: string;
}
export class ValhallaOfflineRoutingService extends RoutingService<any, ValhallaOfflineRoutingServiceOptions> {
    profile: ValhallaProfile;
}

export interface MultiValhallaOfflineRoutingServiceOptions extends ValhallaRoutingServiceOptions {
}
export class MultiValhallaOfflineRoutingService extends ValhallaRoutingService<any, MultiValhallaOfflineRoutingServiceOptions> {
    add(database: string);
    remove(database: string);
}

export interface ValhallaOnlineRoutingServiceOptions extends ValhallaRoutingServiceOptions {
    apiKey: string;
    customServiceURL?: string;
}
export class ValhallaOnlineRoutingService extends ValhallaRoutingService<any, ValhallaOnlineRoutingServiceOptions> {
    profile: ValhallaProfile;
}

export interface PackageManagerValhallaRoutingServiceOptions extends ValhallaRoutingServiceOptions {
    packageManager: CartoPackageManager;
}
export class PackageManagerValhallaRoutingService extends ValhallaRoutingService<any, PackageManagerValhallaRoutingServiceOptions> {}

export interface SGREOfflineRoutingServiceOptions {
    projection: Projection;
    features: FeatureCollection;
    config: any;
}
export class SGREOfflineRoutingService extends RoutingService<any, SGREOfflineRoutingServiceOptions> {}

export interface CartoOnlineRoutingServiceOptions {
    source: string;
}
export class CartoOnlineRoutingService extends RoutingService<any, CartoOnlineRoutingServiceOptions> {}

export interface OSRMOfflineRoutingServiceOptions {
    path?: string;
}
export class OSRMOfflineRoutingService extends RoutingService<any, OSRMOfflineRoutingServiceOptions> {}
