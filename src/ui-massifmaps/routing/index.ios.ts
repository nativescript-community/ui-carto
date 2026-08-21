import { mapPosVectorFromArgs } from '..';
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
import {
    ACCESSORS as ACC_PackageManagerRoutingService,
    Accessors as Acc_PackageManagerRoutingService,
    METHODS as MET_PackageManagerRoutingService,
    Methods as Met_PackageManagerRoutingService,
    SELECTORS as SEL_PackageManagerRoutingService
} from '../bindings/routing/PackageManagerRoutingService';
import { bindNative } from '../nativeclass.common';
import {
    ACCESSORS as ACC_SGREOfflineRoutingService,
    Accessors as Acc_SGREOfflineRoutingService,
    METHODS as MET_SGREOfflineRoutingService,
    Methods as Met_SGREOfflineRoutingService,
    SELECTORS as SEL_SGREOfflineRoutingService
} from '../bindings/routing/SGREOfflineRoutingService';
import {
    ACCESSORS as ACC_OSRMOfflineRoutingService,
    Accessors as Acc_OSRMOfflineRoutingService,
    METHODS as MET_OSRMOfflineRoutingService,
    Methods as Met_OSRMOfflineRoutingService,
    SELECTORS as SEL_OSRMOfflineRoutingService
} from '../bindings/routing/OSRMOfflineRoutingService';
import {
    ACCESSORS as ACC_ValhallaOfflineRoutingService,
    Accessors as Acc_ValhallaOfflineRoutingService,
    METHODS as MET_ValhallaOfflineRoutingService,
    Methods as Met_ValhallaOfflineRoutingService,
    SELECTORS as SEL_ValhallaOfflineRoutingService
} from '../bindings/routing/ValhallaOfflineRoutingService';
import {
    ACCESSORS as ACC_MultiValhallaOfflineRoutingService,
    Accessors as Acc_MultiValhallaOfflineRoutingService,
    METHODS as MET_MultiValhallaOfflineRoutingService,
    Methods as Met_MultiValhallaOfflineRoutingService,
    SELECTORS as SEL_MultiValhallaOfflineRoutingService
} from '../bindings/routing/MultiValhallaOfflineRoutingService';
import {
    ACCESSORS as ACC_ValhallaOnlineRoutingService,
    Accessors as Acc_ValhallaOnlineRoutingService,
    METHODS as MET_ValhallaOnlineRoutingService,
    Methods as Met_ValhallaOnlineRoutingService,
    SELECTORS as SEL_ValhallaOnlineRoutingService
} from '../bindings/routing/ValhallaOnlineRoutingService';
import {
    ACCESSORS as ACC_PackageManagerValhallaRoutingService,
    Accessors as Acc_PackageManagerValhallaRoutingService,
    METHODS as MET_PackageManagerValhallaRoutingService,
    Methods as Met_PackageManagerValhallaRoutingService,
    SELECTORS as SEL_PackageManagerValhallaRoutingService
} from '../bindings/routing/PackageManagerValhallaRoutingService';
import {
    ACCESSORS as ACC_RoutingService,
    Accessors as Acc_RoutingService,
    METHODS as MET_RoutingService,
    Methods as Met_RoutingService,
    SELECTORS as SEL_RoutingService
} from '../bindings/routing/RoutingService';
import {
    ACCESSORS as ACC_ValhallaRoutingService,
    Accessors as Acc_ValhallaRoutingService,
    METHODS as MET_ValhallaRoutingService,
    Methods as Met_ValhallaRoutingService,
    SELECTORS as SEL_ValhallaRoutingService
} from '../bindings/routing/PackageManagerValhallaRoutingService';

export * from './index.common';

export enum RoutingAction {
    HEAD_ON = MSFRoutingAction.F_ROUTING_ACTION_HEAD_ON,
    FINISH = MSFRoutingAction.F_ROUTING_ACTION_FINISH,
    NO_TURN = MSFRoutingAction.F_ROUTING_ACTION_NO_TURN,
    GO_STRAIGHT = MSFRoutingAction.F_ROUTING_ACTION_GO_STRAIGHT,
    TURN_RIGHT = MSFRoutingAction.F_ROUTING_ACTION_TURN_RIGHT,
    UTURN = MSFRoutingAction.F_ROUTING_ACTION_UTURN,
    TURN_LEFT = MSFRoutingAction.F_ROUTING_ACTION_TURN_LEFT,
    REACH_VIA_LOCATION = MSFRoutingAction.F_ROUTING_ACTION_REACH_VIA_LOCATION,
    ENTER_ROUNDABOUT = MSFRoutingAction.F_ROUTING_ACTION_ENTER_ROUNDABOUT,
    LEAVE_ROUNDABOUT = MSFRoutingAction.F_ROUTING_ACTION_LEAVE_ROUNDABOUT,
    STAY_ON_ROUNDABOUT = MSFRoutingAction.F_ROUTING_ACTION_STAY_ON_ROUNDABOUT,
    START_AT_END_OF_STREET = MSFRoutingAction.F_ROUTING_ACTION_START_AT_END_OF_STREET,
    ENTER_AGAINST_ALLOWED_DIRECTION = MSFRoutingAction.F_ROUTING_ACTION_ENTER_AGAINST_ALLOWED_DIRECTION,
    LEAVE_AGAINST_ALLOWED_DIRECTION = MSFRoutingAction.F_ROUTING_ACTION_LEAVE_AGAINST_ALLOWED_DIRECTION,
    GO_UP = MSFRoutingAction.F_ROUTING_ACTION_GO_UP,
    GO_DOWN = MSFRoutingAction.F_ROUTING_ACTION_GO_DOWN,
    WAIT = MSFRoutingAction.F_ROUTING_ACTION_WAIT
}
export abstract class RoutingService<T extends MSFRoutingService, U extends RoutingServiceOptions> extends BaseRoutingService<T, U> {
    declare profile: string;
    public calculateRoute(options: RoutingRequest, profile = this.profile, jsonStr = false) {
        return new Promise((resolve, reject) => {
            const nRequest = MSFRoutingRequest.alloc().initWithProjectionPoints(options.projection.getNative(), mapPosVectorFromArgs(options.points));
            if (options.customOptions) {
                Object.keys(options.customOptions).forEach((k) => {
                    nRequest.setCustomParameterValue(k, JSVariantToNative(options.customOptions[k]));
                });
            }
            NSMSFRoutingServiceAdditions.calculateRoute(this.getNative(), nRequest, profile, jsonStr, (res, strRes, error) => {
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
                resolve(NSMSFRoutingServiceAdditions.stringifyRouteResult(routingResult.getNative()));
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
            NSMSFRoutingServiceAdditions.matchRoute(this.getNative(), nRequest, this.profile, resolve);
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

export interface PackageManagerRoutingService extends Acc_PackageManagerRoutingService, Omit<Met_PackageManagerRoutingService, 'calculateRoute'> {}
bindNative(PackageManagerRoutingService, MET_PackageManagerRoutingService, ACC_PackageManagerRoutingService, { selectors: SEL_PackageManagerRoutingService });

export interface SGREOfflineRoutingService extends Acc_SGREOfflineRoutingService, Omit<Met_SGREOfflineRoutingService, 'calculateRoute'> {}
bindNative(SGREOfflineRoutingService, MET_SGREOfflineRoutingService, ACC_SGREOfflineRoutingService, { selectors: SEL_SGREOfflineRoutingService });

export interface OSRMOfflineRoutingService extends Acc_OSRMOfflineRoutingService, Omit<Met_OSRMOfflineRoutingService, 'calculateRoute'> {}
bindNative(OSRMOfflineRoutingService, MET_OSRMOfflineRoutingService, ACC_OSRMOfflineRoutingService, { selectors: SEL_OSRMOfflineRoutingService });

export interface ValhallaOfflineRoutingService
    extends Acc_ValhallaOfflineRoutingService, Omit<Met_ValhallaOfflineRoutingService, 'addLocale' | 'calculateRoute' | 'getConfigurationParameter' | 'matchRoute' | 'setConfigurationParameter'> {}
bindNative(ValhallaOfflineRoutingService, MET_ValhallaOfflineRoutingService, ACC_ValhallaOfflineRoutingService, { selectors: SEL_ValhallaOfflineRoutingService });

export interface MultiValhallaOfflineRoutingService
    extends Acc_MultiValhallaOfflineRoutingService, Omit<Met_MultiValhallaOfflineRoutingService, 'add' | 'addLocale' | 'calculateRoute' | 'getConfigurationParameter' | 'matchRoute' | 'remove' | 'setConfigurationParameter'> {}
bindNative(MultiValhallaOfflineRoutingService, MET_MultiValhallaOfflineRoutingService, ACC_MultiValhallaOfflineRoutingService, { selectors: SEL_MultiValhallaOfflineRoutingService });

export interface ValhallaOnlineRoutingService extends Omit<Acc_ValhallaOnlineRoutingService, 'httpHeaders'>, Omit<Met_ValhallaOnlineRoutingService, 'calculateRoute' | 'matchRoute'> {}
bindNative(ValhallaOnlineRoutingService, MET_ValhallaOnlineRoutingService, ACC_ValhallaOnlineRoutingService, { selectors: SEL_ValhallaOnlineRoutingService });

export interface PackageManagerValhallaRoutingService
    extends Acc_PackageManagerValhallaRoutingService, Omit<Met_PackageManagerValhallaRoutingService, 'addLocale' | 'calculateRoute' | 'getConfigurationParameter' | 'matchRoute' | 'setConfigurationParameter'> {}
bindNative(PackageManagerValhallaRoutingService, MET_PackageManagerValhallaRoutingService, ACC_PackageManagerValhallaRoutingService, { selectors: SEL_PackageManagerValhallaRoutingService });

export interface PackageManagerRoutingService extends Omit<Acc_RoutingService, 'profile'>, Omit<Met_RoutingService, 'calculateRoute' | 'getProfile' | 'matchRoute' | 'setProfile'> {}
bindNative(PackageManagerRoutingService, MET_RoutingService, ACC_RoutingService, { selectors: SEL_RoutingService });

export interface SGREOfflineRoutingService extends Omit<Acc_RoutingService, 'profile'>, Omit<Met_RoutingService, 'calculateRoute' | 'getProfile' | 'matchRoute' | 'setProfile'> {}
bindNative(SGREOfflineRoutingService, MET_RoutingService, ACC_RoutingService, { selectors: SEL_RoutingService });

export interface OSRMOfflineRoutingService extends Omit<Acc_RoutingService, 'profile'>, Omit<Met_RoutingService, 'calculateRoute' | 'getProfile' | 'matchRoute' | 'setProfile'> {}
bindNative(OSRMOfflineRoutingService, MET_RoutingService, ACC_RoutingService, { selectors: SEL_RoutingService });

export interface ValhallaOfflineRoutingService extends Omit<Acc_RoutingService, 'profile'>, Omit<Met_RoutingService, 'calculateRoute' | 'getProfile' | 'matchRoute' | 'setProfile'> {}
bindNative(ValhallaOfflineRoutingService, MET_RoutingService, ACC_RoutingService, { selectors: SEL_RoutingService });

export interface MultiValhallaOfflineRoutingService extends Omit<Acc_RoutingService, 'profile'>, Omit<Met_RoutingService, 'calculateRoute' | 'getProfile' | 'matchRoute' | 'setProfile'> {}
bindNative(MultiValhallaOfflineRoutingService, MET_RoutingService, ACC_RoutingService, { selectors: SEL_RoutingService });

export interface ValhallaOnlineRoutingService extends Omit<Acc_RoutingService, 'profile'>, Omit<Met_RoutingService, 'calculateRoute' | 'getProfile' | 'matchRoute' | 'setProfile'> {}
bindNative(ValhallaOnlineRoutingService, MET_RoutingService, ACC_RoutingService, { selectors: SEL_RoutingService });

export interface PackageManagerValhallaRoutingService extends Omit<Acc_RoutingService, 'profile'>, Omit<Met_RoutingService, 'calculateRoute' | 'getProfile' | 'matchRoute' | 'setProfile'> {}
bindNative(PackageManagerValhallaRoutingService, MET_RoutingService, ACC_RoutingService, { selectors: SEL_RoutingService });
