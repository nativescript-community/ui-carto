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

export * from './index.common';

export enum RoutingAction {
    HEAD_ON = NTRoutingAction.T_ROUTING_ACTION_HEAD_ON,
    FINISH = NTRoutingAction.T_ROUTING_ACTION_FINISH,
    NO_TURN = NTRoutingAction.T_ROUTING_ACTION_NO_TURN,
    GO_STRAIGHT = NTRoutingAction.T_ROUTING_ACTION_GO_STRAIGHT,
    TURN_RIGHT = NTRoutingAction.T_ROUTING_ACTION_TURN_RIGHT,
    UTURN = NTRoutingAction.T_ROUTING_ACTION_UTURN,
    TURN_LEFT = NTRoutingAction.T_ROUTING_ACTION_TURN_LEFT,
    REACH_VIA_LOCATION = NTRoutingAction.T_ROUTING_ACTION_REACH_VIA_LOCATION,
    ENTER_ROUNDABOUT = NTRoutingAction.T_ROUTING_ACTION_ENTER_ROUNDABOUT,
    LEAVE_ROUNDABOUT = NTRoutingAction.T_ROUTING_ACTION_LEAVE_ROUNDABOUT,
    STAY_ON_ROUNDABOUT = NTRoutingAction.T_ROUTING_ACTION_STAY_ON_ROUNDABOUT,
    START_AT_END_OF_STREET = NTRoutingAction.T_ROUTING_ACTION_START_AT_END_OF_STREET,
    ENTER_AGAINST_ALLOWED_DIRECTION = NTRoutingAction.T_ROUTING_ACTION_ENTER_AGAINST_ALLOWED_DIRECTION,
    LEAVE_AGAINST_ALLOWED_DIRECTION = NTRoutingAction.T_ROUTING_ACTION_LEAVE_AGAINST_ALLOWED_DIRECTION,
    GO_UP = NTRoutingAction.T_ROUTING_ACTION_GO_UP,
    GO_DOWN = NTRoutingAction.T_ROUTING_ACTION_GO_DOWN,
    WAIT = NTRoutingAction.T_ROUTING_ACTION_WAIT
}
export abstract class RoutingService<T extends NTRoutingService, U extends RoutingServiceOptions> extends BaseRoutingService<T, U> {
    @nativeProperty profile: string;
    public calculateRoute(options: RoutingRequest, profile = this.profile, jsonStr = false) {
        return new Promise((resolve, reject) => {
            const nRequest = NTRoutingRequest.alloc().initWithProjectionPoints(options.projection.getNative(), mapPosVectorFromArgs(options.points));
            if (options.customOptions) {
                Object.keys(options.customOptions).forEach((k) => {
                    nRequest.setCustomParameterValue(k, JSVariantToNative(options.customOptions[k]));
                });
            }

            AKRoutingServiceAdditions.calculateRoute(this.getNative(), nRequest, profile, jsonStr, (res, strRes) => {
                resolve(strRes || (res ? new RoutingResult(res) : null));
            });
        });
    }
    public routingResultToJSON(routingResult: RoutingResult) {
        return new Promise<string>((resolve, reject) => {
            try {
                resolve(AKRoutingServiceAdditions.stringifyRouteResult(routingResult.getNative()));
            } catch (error) {
                reject(error);
            }
        });
    }
}
abstract class ValhallaRoutingService<
    T extends NTPackageManagerValhallaRoutingService | NTValhallaOfflineRoutingService | NTMultiValhallaOfflineRoutingService | NTValhallaOnlineRoutingService,
    U extends ValhallaRoutingServiceOptions
> extends RoutingService<T, U> {
    public matchRoute(options: RouteMatchingRequest, profile = this.profile) {
        return new Promise((resolve, reject) => {
            const nRequest = NTRouteMatchingRequest.alloc().initWithProjectionPointsAccuracy(options.projection.getNative(), mapPosVectorFromArgs(options.points), options.accuracy);
            if (options.customOptions) {
                Object.keys(options.customOptions).forEach((k) => {
                    nRequest.setCustomParameterValue(k, JSVariantToNative(options.customOptions[k]));
                });
            }
            AKRoutingServiceAdditions.matchRoute(this.getNative(), nRequest, this.profile, resolve);
        });
    }
    public setConfigurationParameter(param: string, value: any) {
        const native = this.getNative();
        if (!(native instanceof NTValhallaOnlineRoutingService)) {
            native.setConfigurationParameterValue(param, JSVariantToNative(value));
        }
    }
    public getConfigurationParameter(param: string) {
        const native = this.getNative();
        if (!(native instanceof NTValhallaOnlineRoutingService)) {
            return nativeVariantToJS(native.getConfigurationParameter(param));
        }
    }
}

export class PackageManagerRoutingService extends RoutingService<NTPackageManagerRoutingService, PackageManagerRoutingServiceOptions> {
    createNative(options: PackageManagerRoutingServiceOptions) {
        return NTPackageManagerRoutingService.alloc().initWithPackageManager(options.packageManager.getNative());
    }
}

export class SGREOfflineRoutingService extends RoutingService<NTSGREOfflineRoutingService, SGREOfflineRoutingServiceOptions> {
    createNative(options: SGREOfflineRoutingServiceOptions) {
        return NTSGREOfflineRoutingService.alloc().initWithProjectionFeatureCollectionConfig(options.projection.getNative(), options.features.getNative(), JSVariantToNative(options.config));
    }
}

export class OSRMOfflineRoutingService extends RoutingService<NTOSRMOfflineRoutingService, OSRMOfflineRoutingServiceOptions> {
    createNative(options: OSRMOfflineRoutingServiceOptions) {
        return NTOSRMOfflineRoutingService.alloc().initWithPath(options.path);
    }
}

export class ValhallaOfflineRoutingService extends ValhallaRoutingService<NTValhallaOfflineRoutingService, ValhallaOfflineRoutingServiceOptions> {
    createNative(options: ValhallaOfflineRoutingServiceOptions) {
        return NTValhallaOfflineRoutingService.alloc().initWithPath(options.path);
    }
}

export class MultiValhallaOfflineRoutingService extends ValhallaRoutingService<NTMultiValhallaOfflineRoutingService, MultiValhallaOfflineRoutingServiceOptions> {
    createNative(options: ValhallaOfflineRoutingServiceOptions) {
        return NTMultiValhallaOfflineRoutingService.alloc().init();
    }
    add(database: string) {
        this.getNative().add(database);
    }
    remove(database: string) {
        this.getNative().remove(database);
    }
}

export class ValhallaOnlineRoutingService extends ValhallaRoutingService<NTValhallaOnlineRoutingService, ValhallaOnlineRoutingServiceOptions> {
    createNative(options: ValhallaOnlineRoutingServiceOptions) {
        return NTValhallaOnlineRoutingService.alloc().initWithApiKey(options.apiKey);
    }
}

export class PackageManagerValhallaRoutingService extends ValhallaRoutingService<NTPackageManagerValhallaRoutingService, PackageManagerValhallaRoutingServiceOptions> {
    createNative(options: PackageManagerValhallaRoutingServiceOptions) {
        return NTPackageManagerValhallaRoutingService.alloc().initWithPackageManager(options.packageManager.getNative());
    }
}
