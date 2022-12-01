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
    accuracy: number;
}

export interface RoutingServiceOptions {}

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
}

export interface RouteMatchingResult<T = DefaultLatLonKeys> {
    getPoints(): MapPosVector<T>;
    getProjection(): Projection;
}

export class RoutingService<T, U extends RoutingServiceOptions> extends BaseNative<T, U> {
    calculateRoute<T = DefaultLatLonKeys>(options: RoutingRequest<T>, profile?: string): Promise<RoutingResult<T>>;
    routingResultToJSON<T = DefaultLatLonKeys>(options: RoutingResult<T>): Promise<string>;
}

export interface PackageManagerRoutingServiceOptions extends RoutingServiceOptions {
    packageManager: CartoPackageManager;
}
export class PackageManagerRoutingService extends RoutingService<any, PackageManagerRoutingServiceOptions> {}

export type ValhallaProfile = 'car' | 'auto' | 'bus' | 'bicycle' | 'pedestrian' | 'truck';

export interface ValhallaOfflineRoutingServiceOptions extends RoutingServiceOptions {
    path: string;
    profile?: ValhallaProfile;
}
export class ValhallaOfflineRoutingService extends RoutingService<any, ValhallaOfflineRoutingServiceOptions> {
    profile: ValhallaProfile;
    matchRoute<T = DefaultLatLonKeys>(options: RouteMatchingRequest, profile?: ValhallaProfile): Promise<RouteMatchingResult<T>>;
}

export interface ValhallaOnlineRoutingServiceOptions extends RoutingServiceOptions {
    apiKey: string;
    profile?: ValhallaProfile;
    customServiceURL?: string;
}
export class ValhallaOnlineRoutingService extends RoutingService<any, ValhallaOnlineRoutingServiceOptions> {
    profile: ValhallaProfile;
    matchRoute<T = DefaultLatLonKeys>(options: RouteMatchingRequest, profile?: ValhallaProfile): Promise<RouteMatchingResult<T>>;
}

export interface PackageManagerValhallaRoutingServiceOptions extends RoutingServiceOptions {
    packageManager: CartoPackageManager;
    profile?: ValhallaProfile;
}
export class PackageManagerValhallaRoutingService extends RoutingService<any, PackageManagerValhallaRoutingServiceOptions> {
    profile: ValhallaProfile;
    matchRoute<T = DefaultLatLonKeys>(options: RouteMatchingRequest, profile?: ValhallaProfile): Promise<RouteMatchingResult<T>>;
}

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
