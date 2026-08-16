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
    HEAD_ON = MSFRoutingAction.T_ROUTING_ACTION_HEAD_ON,
    FINISH = MSFRoutingAction.T_ROUTING_ACTION_FINISH,
    NO_TURN = MSFRoutingAction.T_ROUTING_ACTION_NO_TURN,
    GO_STRAIGHT = MSFRoutingAction.T_ROUTING_ACTION_GO_STRAIGHT,
    TURN_RIGHT = MSFRoutingAction.T_ROUTING_ACTION_TURN_RIGHT,
    UTURN = MSFRoutingAction.T_ROUTING_ACTION_UTURN,
    TURN_LEFT = MSFRoutingAction.T_ROUTING_ACTION_TURN_LEFT,
    REACH_VIA_LOCATION = MSFRoutingAction.T_ROUTING_ACTION_REACH_VIA_LOCATION,
    ENTER_ROUNDABOUT = MSFRoutingAction.T_ROUTING_ACTION_ENTER_ROUNDABOUT,
    LEAVE_ROUNDABOUT = MSFRoutingAction.T_ROUTING_ACTION_LEAVE_ROUNDABOUT,
    STAY_ON_ROUNDABOUT = MSFRoutingAction.T_ROUTING_ACTION_STAY_ON_ROUNDABOUT,
    START_AT_END_OF_STREET = MSFRoutingAction.T_ROUTING_ACTION_START_AT_END_OF_STREET,
    ENTER_AGAINST_ALLOWED_DIRECTION = MSFRoutingAction.T_ROUTING_ACTION_ENTER_AGAINST_ALLOWED_DIRECTION,
    LEAVE_AGAINST_ALLOWED_DIRECTION = MSFRoutingAction.T_ROUTING_ACTION_LEAVE_AGAINST_ALLOWED_DIRECTION,
    GO_UP = MSFRoutingAction.T_ROUTING_ACTION_GO_UP,
    GO_DOWN = MSFRoutingAction.T_ROUTING_ACTION_GO_DOWN,
    WAIT = MSFRoutingAction.T_ROUTING_ACTION_WAIT
}
export abstract class RoutingService<T extends MSFRoutingService, U extends RoutingServiceOptions> extends BaseRoutingService<T, U> {
    @nativeProperty profile: string;
    public calculateRoute(options: RoutingRequest, profile = this.profile, jsonStr = false) {
        return new Promise((resolve, reject) => {
            const nRequest = MSFRoutingRequest.alloc().initWithProjectionPoints(options.projection.getNative(), mapPosVectorFromArgs(options.points));
            if (options.customOptions) {
                Object.keys(options.customOptions).forEach((k) => {
                    nRequest.setCustomParameterValue(k, JSVariantToNative(options.customOptions[k]));
                });
            }
            AKRoutingServiceAdditions.calculateRoute(this.getNative(), nRequest, profile, jsonStr, (res, strRes, error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(strRes || (res ? new RoutingResult(res) : null));
                }
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
    T extends MSFPackageManagerValhallaRoutingService | MSFValhallaOfflineRoutingService | MSFMultiValhallaOfflineRoutingService | MSFValhallaOnlineRoutingService,
    U extends ValhallaRoutingServiceOptions
> extends RoutingService<T, U> {
    public matchRoute(options: RouteMatchingRequest, profile = this.profile) {
        return new Promise((resolve, reject) => {
            const nRequest = MSFRouteMatchingRequest.alloc().initWithProjectionPointsAccuracy(options.projection.getNative(), mapPosVectorFromArgs(options.points), options.accuracy);
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
        if (!(native instanceof MSFValhallaOnlineRoutingService)) {
            native.setConfigurationParameterValue(param, JSVariantToNative(value));
        }
    }
    public getConfigurationParameter(param: string) {
        const native = this.getNative();
        if (!(native instanceof MSFValhallaOnlineRoutingService)) {
            return nativeVariantToJS(native.getConfigurationParameter(param));
        }
    }
    public addLocale(key: string, json: string) {
        const native = this.getNative();
        if (!(native instanceof MSFValhallaOnlineRoutingService)) {
            native.addLocaleJson(key, json);
        }
    }
}

export class PackageManagerRoutingService extends RoutingService<MSFPackageManagerRoutingService, PackageManagerRoutingServiceOptions> {
    createNative(options: PackageManagerRoutingServiceOptions) {
        return MSFPackageManagerRoutingService.alloc().initWithPackageManager(options.packageManager.getNative());
    }
}

export class SGREOfflineRoutingService extends RoutingService<MSFSGREOfflineRoutingService, SGREOfflineRoutingServiceOptions> {
    createNative(options: SGREOfflineRoutingServiceOptions) {
        return MSFSGREOfflineRoutingService.alloc().initWithProjectionFeatureCollectionConfig(options.projection.getNative(), options.features.getNative(), JSVariantToNative(options.config));
    }
}

export class OSRMOfflineRoutingService extends RoutingService<MSFOSRMOfflineRoutingService, OSRMOfflineRoutingServiceOptions> {
    createNative(options: OSRMOfflineRoutingServiceOptions) {
        return MSFOSRMOfflineRoutingService.alloc().initWithPath(options.path);
    }
}

export class ValhallaOfflineRoutingService extends ValhallaRoutingService<MSFValhallaOfflineRoutingService, ValhallaOfflineRoutingServiceOptions> {
    createNative(options: ValhallaOfflineRoutingServiceOptions) {
        return MSFValhallaOfflineRoutingService.alloc().initWithPath(options.path);
    }
}

export class MultiValhallaOfflineRoutingService extends ValhallaRoutingService<MSFMultiValhallaOfflineRoutingService, MultiValhallaOfflineRoutingServiceOptions> {
    createNative(options: ValhallaOfflineRoutingServiceOptions) {
        return MSFMultiValhallaOfflineRoutingService.alloc().init();
    }
    add(database: string) {
        this.getNative().add(database);
    }
    remove(database: string) {
        this.getNative().remove(database);
    }
}

export class ValhallaOnlineRoutingService extends ValhallaRoutingService<MSFValhallaOnlineRoutingService, ValhallaOnlineRoutingServiceOptions> {
    @nativeProperty profile: string;
    @nativeProperty customServiceURL: string;
    @nativeProperty timeout: number;
    createNative(options: ValhallaOnlineRoutingServiceOptions) {
        if (options.apiKey) {
            return MSFValhallaOnlineRoutingService.alloc().initWithApiKey(options.apiKey);
        } else {
            return MSFValhallaOnlineRoutingService.alloc().init();
        }
    }
    set httpHeaders(value: { [k: string]: string }) {
        const map = MSFStringMap.alloc().init();
        for (const key in value) {
            map.setX(key, value[key]);
        }
        this.native.setHTTPHeaders(map);
    }
}

export class PackageManagerValhallaRoutingService extends ValhallaRoutingService<MSFPackageManagerValhallaRoutingService, PackageManagerValhallaRoutingServiceOptions> {
    createNative(options: PackageManagerValhallaRoutingServiceOptions) {
        return MSFPackageManagerValhallaRoutingService.alloc().initWithPackageManager(options.packageManager.getNative());
    }
}
