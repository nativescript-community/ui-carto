import { mapPosVectorFromArgs, nativeProperty } from '..';
import {
    MultiValhallaOfflineRoutingServiceOptions,
    OSRMOfflineRoutingServiceOptions,
    PackageManagerRoutingServiceOptions,
    PackageManagerValhallaRoutingServiceOptions,
    RouteMatchingRequest,
    RoutingRequest,
    RoutingServiceOptions,
    SGREOfflineRoutingServiceOptions,
    ValhallaOfflineRoutingServiceOptions,
    ValhallaOnlineRoutingServiceOptions,
    ValhallaRoutingServiceOptions
} from '.';
import { BaseRoutingService, RouteMatchingResult, RoutingResult } from './index.common';
import { JSVariantToNative, nativeVariantToJS } from '../utils';

const AKRoutingServiceAdditions = com.akylas.carto.additions.AKRoutingServiceAdditions;

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
    }
};
abstract class RoutingService<T extends com.carto.routing.RoutingService, U extends RoutingServiceOptions> extends BaseRoutingService<T, U> {
    @nativeProperty profile: string;
    public calculateRoute(options: RoutingRequest, profile = this.profile, jsonStr = false) {
        return new Promise((resolve, reject) => {
            const nRequest = new com.carto.routing.RoutingRequest(options.projection.getNative(), mapPosVectorFromArgs(options.points));
            if (options.customOptions) {
                Object.keys(options.customOptions).forEach((k) => {
                    nRequest.setCustomParameter(k, JSVariantToNative(options.customOptions[k]));
                });
            }
            const callback = new com.akylas.carto.additions.RoutingServiceRouteCallback({
                onRoutingResult: (err, res, strRes) => (err ? reject(err) : resolve(strRes || (res ? new RoutingResult(res) : null)))
            });
            AKRoutingServiceAdditions.calculateRoute(this.getNative(), nRequest, profile, jsonStr, callback);
        });
    }
    public routingResultToJSON(routingResult: RoutingResult) {
        return new Promise<string>((resolve, reject) => {
            const callback = new com.akylas.carto.additions.RoutingResultToJSONCallback({
                onJSON: (err, res) => (err ? reject(err) : resolve(res))
            });
            AKRoutingServiceAdditions.routingResultToJSON(routingResult.getNative(), callback);
        });
    }
}
abstract class ValhallaRoutingService<
    T extends
        | com.carto.routing.PackageManagerValhallaRoutingService
        | com.carto.routing.ValhallaOfflineRoutingService
        | com.carto.routing.MultiValhallaOfflineRoutingService
        | com.carto.routing.ValhallaOnlineRoutingService,
    U extends ValhallaRoutingServiceOptions
> extends RoutingService<T, U> {
    public matchRoute(options: RouteMatchingRequest, profile = this.profile) {
        return new Promise((resolve, reject) => {
            const nRequest = new com.carto.routing.RouteMatchingRequest(options.projection.getNative(), mapPosVectorFromArgs(options.points), options.accuracy);
            if (options.customOptions) {
                Object.keys(options.customOptions).forEach((k) => {
                    nRequest.setCustomParameter(k, JSVariantToNative(options.customOptions[k]));
                });
            }
            const callback = new com.akylas.carto.additions.RoutingServiceRouteMatchingCallback({
                onRouteMatchingResult: (err, res) => (err ? reject(err) : resolve(res ? new RouteMatchingResult(res) : null))
            });
            // TODO: passing profile directly seems to break terser :s Find out why
            const test = profile;
            AKRoutingServiceAdditions.matchRoute(this.getNative(), nRequest, test, callback);
        });
    }

    public setConfigurationParameter(param: string, value: any) {
        const native = this.getNative();
        if (!(native instanceof com.carto.routing.ValhallaOnlineRoutingService)) {
            native.setConfigurationParameter(param, JSVariantToNative(value));
        }
    }
    public getConfigurationParameter(param: string) {
        const native = this.getNative();
        if (!(native instanceof com.carto.routing.ValhallaOnlineRoutingService)) {
            return nativeVariantToJS(native.getConfigurationParameter(param));
        }
    }
}

export class PackageManagerRoutingService extends RoutingService<com.carto.routing.PackageManagerRoutingService, PackageManagerRoutingServiceOptions> {
    createNative(options: PackageManagerRoutingServiceOptions) {
        return new com.carto.routing.PackageManagerRoutingService(options.packageManager.getNative());
    }
}

export class SGREOfflineRoutingService extends RoutingService<com.carto.routing.SGREOfflineRoutingService, SGREOfflineRoutingServiceOptions> {
    createNative(options: SGREOfflineRoutingServiceOptions) {
        return new com.carto.routing.SGREOfflineRoutingService(options.projection.getNative(), options.features.getNative(), JSVariantToNative(options.config));
    }
}

export class OSRMOfflineRoutingService extends RoutingService<com.carto.routing.OSRMOfflineRoutingService, OSRMOfflineRoutingServiceOptions> {
    createNative(options: OSRMOfflineRoutingServiceOptions) {
        return new com.carto.routing.OSRMOfflineRoutingService(options.path);
    }
}

export class ValhallaOfflineRoutingService extends ValhallaRoutingService<com.carto.routing.ValhallaOfflineRoutingService, ValhallaOfflineRoutingServiceOptions> {
    createNative(options: ValhallaOfflineRoutingServiceOptions) {
        return new com.carto.routing.ValhallaOfflineRoutingService(options.path);
    }
}
export class MultiValhallaOfflineRoutingService extends ValhallaRoutingService<com.carto.routing.MultiValhallaOfflineRoutingService, ValhallaOfflineRoutingServiceOptions> {
    createNative(options: MultiValhallaOfflineRoutingServiceOptions) {
        return new com.carto.routing.MultiValhallaOfflineRoutingService();
    }
    add(database: string) {
        this.getNative().add(database);
    }
    remove(database: string) {
        this.getNative().remove(database);
    }
}

export class ValhallaOnlineRoutingService extends ValhallaRoutingService<com.carto.routing.ValhallaOnlineRoutingService, ValhallaOnlineRoutingServiceOptions> {
    @nativeProperty profile: string;
    @nativeProperty customServiceURL: string;
    createNative(options: ValhallaOnlineRoutingServiceOptions) {
        if (options.apiKey) {
            return new com.carto.routing.ValhallaOnlineRoutingService(options.apiKey);
        } else {
            return new com.carto.routing.ValhallaOnlineRoutingService();
        }
    }
}

export class PackageManagerValhallaRoutingService extends ValhallaRoutingService<com.carto.routing.PackageManagerValhallaRoutingService, PackageManagerValhallaRoutingServiceOptions> {
    @nativeProperty profile: string;
    createNative(options: PackageManagerValhallaRoutingServiceOptions) {
        return new com.carto.routing.PackageManagerValhallaRoutingService(options.packageManager.getNative());
    }
}
