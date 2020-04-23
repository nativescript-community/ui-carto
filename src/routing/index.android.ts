import { mapPosVectorFromArgs, nativeProperty } from '..';
import { NativeVector } from '../core';
import {
    CartoOnlineRoutingServiceOptions,
    OSRMOfflineRoutingServiceOptions,
    PackageManagerRoutingServiceOptions,
    PackageManagerValhallaRoutingServiceOptions,
    RouteMatchingRequest,
    RoutingInstruction,
    RoutingRequest,
    RoutingServiceOptions,
    SGREOfflineRoutingServiceOptions,
    ValhallaOfflineRoutingServiceOptions,
    ValhallaOnlineRoutingServiceOptions,
} from '.';
import { BaseRoutingService, RouteMatchingResult, RoutingResult } from './index.common';
import { JSVariantToNative } from 'nativescript-carto/utils';

export const RoutingAction = {
    get HEAD_ON() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_HEAD_ON;
    },
    get FINISH() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_FINISH;
    },
    get NO_TURN() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_NO_TURN;
    },
    get GO_STRAIGHT() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_GO_STRAIGHT;
    },
    get TURN_RIGHT() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_TURN_RIGHT;
    },
    get UTURN() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_UTURN;
    },
    get TURN_LEFT() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_TURN_LEFT;
    },
    get REACH_VIA_LOCATION() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_REACH_VIA_LOCATION;
    },
    get ENTER_ROUNDABOUT() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_ENTER_ROUNDABOUT;
    },
    get LEAVE_ROUNDABOUT() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_LEAVE_ROUNDABOUT;
    },
    get STAY_ON_ROUNDABOUT() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_STAY_ON_ROUNDABOUT;
    },
    get START_AT_END_OF_STREET() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_START_AT_END_OF_STREET;
    },
    get ENTER_AGAINST_ALLOWED_DIRECTION() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_ENTER_AGAINST_ALLOWED_DIRECTION;
    },
    get LEAVE_AGAINST_ALLOWED_DIRECTION() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_LEAVE_AGAINST_ALLOWED_DIRECTION;
    },
    get GO_UP() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_GO_UP;
    },
    get GO_DOWN() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_GO_DOWN;
    },
    get WAIT() {
        return com.carto.routing.RoutingAction.ROUTING_ACTION_WAIT;
    },
};
abstract class RoutingService<T extends com.akylas.carto.additions.AKRoutingService, U extends RoutingServiceOptions> extends BaseRoutingService<T, U> {
    // createNative(options: RoutingServiceOptions) {
    //     return new com.carto.geocoding.RoutingService();
    // }
    public calculateRoute(options: RoutingRequest, callback: (err: Error, res: RoutingResult) => void) {
        const nRequest = new com.carto.routing.RoutingRequest(options.projection.getNative(), mapPosVectorFromArgs(options.points));
        this.getNative().calculateRouteCallback(
            nRequest,
            new com.akylas.carto.additions.RoutingServiceRouteCallback({
                onRoutingResult: (err, res) => {
                    callback(err, res ? new RoutingResult(res) : null);
                },
            })
        );
    }
}

export class RoutingInstructionVector extends NativeVector<RoutingInstruction> {
    native: com.carto.routing.RoutingInstructionVector;
    constructor(native: com.carto.routing.RoutingInstructionVector) {
        super();
        this.native = native;
    }
}

class PackageManagerRoutingService extends RoutingService<com.akylas.carto.additions.AKPackageManagerRoutingService, PackageManagerRoutingServiceOptions> {
    createNative(options: PackageManagerRoutingServiceOptions) {
        return new com.akylas.carto.additions.AKPackageManagerRoutingService(options.packageManager.getNative());
    }
}

class SGREOfflineRoutingService extends RoutingService<com.akylas.carto.additions.AKSGREOfflineRoutingService, SGREOfflineRoutingServiceOptions> {
    createNative(options: SGREOfflineRoutingServiceOptions) {
        return new com.akylas.carto.additions.AKSGREOfflineRoutingService(options.projection.getNative(), options.features.getNative(), JSVariantToNative(options.config));
    }
}

class CartoOnlineRoutingService extends RoutingService<com.akylas.carto.additions.AKCartoOnlineRoutingService, CartoOnlineRoutingServiceOptions> {
    createNative(options: CartoOnlineRoutingServiceOptions) {
        return new com.akylas.carto.additions.AKCartoOnlineRoutingService(options.source);
    }
}
class OSRMOfflineRoutingService extends RoutingService<com.akylas.carto.additions.AKOSRMOfflineRoutingService, OSRMOfflineRoutingServiceOptions> {
    createNative(options: OSRMOfflineRoutingServiceOptions) {
        return new com.akylas.carto.additions.AKOSRMOfflineRoutingService(options.path);
    }
}

class ValhallaOfflineRoutingService extends RoutingService<com.akylas.carto.additions.AKValhallaOfflineRoutingService, ValhallaOfflineRoutingServiceOptions> {
    @nativeProperty profile: string;
    createNative(options: ValhallaOfflineRoutingServiceOptions) {
        return new com.akylas.carto.additions.AKValhallaOfflineRoutingService(options.path);
    }
    public matchRoute(options: RouteMatchingRequest, callback: (err: Error, res: RouteMatchingResult) => void) {
        const nRequest = new com.carto.routing.RouteMatchingRequest(options.projection.getNative(), mapPosVectorFromArgs(options.points));
        this.getNative().matchRouteCallback(
            nRequest,
            new com.akylas.carto.additions.RoutingServiceRouteMatchingCallback({
                onRouteMatchingResult: (err, res) => {
                    callback(err, res ? new RouteMatchingResult(res) : null);
                },
            })
        );
    }
    // public rawCall(option: string, request: string, callback: (err: Error, res: string) => void) {
    //     // const nRequest = new com.carto.routing.RouteMatchingRequest(options.projection.getNative(), mapPosVectorFromArgs(options.points));
    //     this.getNative().rawCallCallback(
    //         option,
    //         request,
    //         new com.akylas.carto.additions.RoutingServiceRawCallCallback({
    //             onRoutingResult: (err, res) => {
    //                 callback(err, res);
    //             },
    //         })
    //     );
    // }
}

class ValhallaOnlineRoutingService extends RoutingService<com.akylas.carto.additions.AKValhallaOnlineRoutingService, ValhallaOnlineRoutingServiceOptions> {
    @nativeProperty profile: string;
    @nativeProperty customServiceURL: string;
    createNative(options: ValhallaOnlineRoutingServiceOptions) {
        return new com.akylas.carto.additions.AKValhallaOnlineRoutingService(options.apiKey);
    }
}

class PackageManagerValhallaRoutingService extends RoutingService<com.akylas.carto.additions.AKPackageManagerValhallaRoutingService, PackageManagerValhallaRoutingServiceOptions> {
    @nativeProperty profile: string;
    createNative(options: PackageManagerValhallaRoutingServiceOptions) {
        return new com.akylas.carto.additions.AKPackageManagerValhallaRoutingService(options.packageManager.getNative());
    }
    public matchRoute(options: RouteMatchingRequest, callback: (err: Error, res: RouteMatchingResult) => void) {
        const nRequest = new com.carto.routing.RouteMatchingRequest(options.projection.getNative(), mapPosVectorFromArgs(options.points));
        this.getNative().matchRouteCallback(
            nRequest,
            new com.akylas.carto.additions.RoutingServiceRouteMatchingCallback({
                onRouteMatchingResult: (err, res) => {
                    callback(err, res ? new RouteMatchingResult(res) : null);
                },
            })
        );
    }
}

export {
    RoutingService,
    RoutingResult,
    PackageManagerRoutingService,
    SGREOfflineRoutingService,
    OSRMOfflineRoutingService,
    CartoOnlineRoutingService,
    ValhallaOfflineRoutingService,
    ValhallaOnlineRoutingService,
    PackageManagerValhallaRoutingService,
};
