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
import { ACCESSORS as ACC_RoutingService, Accessors as Acc_RoutingService, METHODS as MET_RoutingService, Methods as Met_RoutingService, SELECTORS as SEL_RoutingService } from '../bindings/routing/RoutingService';

export const RoutingAction = {
    get HEAD_ON() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_HEAD_ON;
    },
    get FINISH() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_FINISH;
    },
    get NO_TURN() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_NO_TURN;
    },
    get GO_STRAIGHT() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_GO_STRAIGHT;
    },
    get TURN_RIGHT() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_TURN_RIGHT;
    },
    get UTURN() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_UTURN;
    },
    get TURN_LEFT() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_TURN_LEFT;
    },
    get REACH_VIA_LOCATION() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_REACH_VIA_LOCATION;
    },
    get ENTER_ROUNDABOUT() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_ENTER_ROUNDABOUT;
    },
    get LEAVE_ROUNDABOUT() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_LEAVE_ROUNDABOUT;
    },
    get STAY_ON_ROUNDABOUT() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_STAY_ON_ROUNDABOUT;
    },
    get START_AT_END_OF_STREET() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_START_AT_END_OF_STREET;
    },
    get ENTER_AGAINST_ALLOWED_DIRECTION() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_ENTER_AGAINST_ALLOWED_DIRECTION;
    },
    get LEAVE_AGAINST_ALLOWED_DIRECTION() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_LEAVE_AGAINST_ALLOWED_DIRECTION;
    },
    get GO_UP() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_GO_UP;
    },
    get GO_DOWN() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_GO_DOWN;
    },
    get WAIT() {
        return com.massifmaps.routing.RoutingAction.ROUTING_ACTION_WAIT;
    }
};
abstract class RoutingService<T extends com.massifmaps.routing.RoutingService, U extends RoutingServiceOptions> extends BaseRoutingService<T, U> {
    declare profile: string;
    public calculateRoute(options: RoutingRequest, profile = this.profile, jsonStr = false) {
        return new Promise((resolve, reject) => {
            const nRequest = new com.massifmaps.routing.RoutingRequest(options.projection.getNative(), mapPosVectorFromArgs(options.points));
            if (options.customOptions) {
                Object.keys(options.customOptions).forEach((k) => {
                    nRequest.setCustomParameter(k, JSVariantToNative(options.customOptions[k]));
                });
            }
            const callback = new com.nativescript.massifmaps.routing.RoutingServiceRouteCallback({
                onRoutingResult: (err, res, strRes) => (err ? reject(err) : resolve(strRes || (res ? new RoutingResult(res) : null)))
            });
            com.nativescript.massifmaps.routing.RoutingServiceAdditions.calculateRoute(this.getNative(), nRequest, profile, jsonStr, callback);
        });
    }
    public routingResultToJSON(routingResult: RoutingResult) {
        return new Promise<string>((resolve, reject) => {
            const callback = new com.nativescript.massifmaps.routing.RoutingResultToJSONCallback({
                onJSON: (err, res) => (err ? reject(err) : resolve(res))
            });
            com.nativescript.massifmaps.routing.RoutingServiceAdditions.routingResultToJSON(routingResult.getNative(), callback);
        });
    }
}
abstract class ValhallaRoutingService<
    T extends
        | com.massifmaps.routing.PackageManagerValhallaRoutingService
        | com.massifmaps.routing.ValhallaOfflineRoutingService
        | com.massifmaps.routing.MultiValhallaOfflineRoutingService
        | com.massifmaps.routing.ValhallaOnlineRoutingService,
    U extends ValhallaRoutingServiceOptions
> extends RoutingService<T, U> {
    public matchRoute(options: RouteMatchingRequest, profile = this.profile) {
        return new Promise((resolve, reject) => {
            const nRequest = new com.massifmaps.routing.RouteMatchingRequest(options.projection.getNative(), mapPosVectorFromArgs(options.points), options.accuracy);
            if (options.customOptions) {
                Object.keys(options.customOptions).forEach((k) => {
                    nRequest.setCustomParameter(k, JSVariantToNative(options.customOptions[k]));
                });
            }
            const callback = new com.nativescript.massifmaps.routing.RoutingServiceRouteMatchingCallback({
                onRouteMatchingResult: (err, res) => (err ? reject(err) : resolve(res ? new RouteMatchingResult(res) : null))
            });
            // TODO: passing profile directly seems to break terser :s Find out why
            const test = profile;
            com.nativescript.massifmaps.routing.RoutingServiceAdditions.matchRoute(this.getNative() as com.massifmaps.routing.ValhallaOfflineRoutingService, nRequest, test, callback);
        });
    }

    public setConfigurationParameter(param: string, value: any) {
        const native = this.getNative();
        if (!(native instanceof com.massifmaps.routing.ValhallaOnlineRoutingService)) {
            native.setConfigurationParameter(param, JSVariantToNative(value));
        }
    }
    public getConfigurationParameter(param: string) {
        const native = this.getNative();
        if (!(native instanceof com.massifmaps.routing.ValhallaOnlineRoutingService)) {
            return nativeVariantToJS(native.getConfigurationParameter(param));
        }
    }

    public addLocale(key: string, json: string) {
        const native = this.getNative();
        if (!(native instanceof com.massifmaps.routing.ValhallaOnlineRoutingService)) {
            native.addLocale(key, json);
        }
    }
}

export class PackageManagerRoutingService extends RoutingService<com.massifmaps.routing.PackageManagerRoutingService, PackageManagerRoutingServiceOptions> {
    createNative(options: PackageManagerRoutingServiceOptions) {
        return new com.massifmaps.routing.PackageManagerRoutingService(options.packageManager.getNative());
    }
}

export class SGREOfflineRoutingService extends RoutingService<com.massifmaps.routing.SGREOfflineRoutingService, SGREOfflineRoutingServiceOptions> {
    createNative(options: SGREOfflineRoutingServiceOptions) {
        return new com.massifmaps.routing.SGREOfflineRoutingService(options.projection.getNative(), options.features.getNative(), JSVariantToNative(options.config));
    }
}

export class OSRMOfflineRoutingService extends RoutingService<com.massifmaps.routing.OSRMOfflineRoutingService, OSRMOfflineRoutingServiceOptions> {
    createNative(options: OSRMOfflineRoutingServiceOptions) {
        return new com.massifmaps.routing.OSRMOfflineRoutingService(options.path);
    }
}

export class ValhallaOfflineRoutingService extends ValhallaRoutingService<com.massifmaps.routing.ValhallaOfflineRoutingService, ValhallaOfflineRoutingServiceOptions> {
    createNative(options: ValhallaOfflineRoutingServiceOptions) {
        return new com.massifmaps.routing.ValhallaOfflineRoutingService(options.path);
    }
}
export class MultiValhallaOfflineRoutingService extends ValhallaRoutingService<com.massifmaps.routing.MultiValhallaOfflineRoutingService, ValhallaOfflineRoutingServiceOptions> {
    createNative(options: MultiValhallaOfflineRoutingServiceOptions) {
        return new com.massifmaps.routing.MultiValhallaOfflineRoutingService();
    }
    add(database: string) {
        this.getNative().add(database);
    }
    remove(database: string) {
        this.getNative().remove(database);
    }
}

export class ValhallaOnlineRoutingService extends ValhallaRoutingService<com.massifmaps.routing.ValhallaOnlineRoutingService, ValhallaOnlineRoutingServiceOptions> {
    createNative(options: ValhallaOnlineRoutingServiceOptions) {
        if (options.apiKey) {
            return new com.massifmaps.routing.ValhallaOnlineRoutingService(options.apiKey);
        } else {
            return new com.massifmaps.routing.ValhallaOnlineRoutingService();
        }
    }

    set httpHeaders(value: { [k: string]: string }) {
        const map = new com.massifmaps.core.StringMap();
        for (const key in value) {
            map.set(key, value[key]);
        }
        console.log('httpHeaders', map, this.native.setHTTPHeaders);
        this.native.setHTTPHeaders(map);
    }
}

export class PackageManagerValhallaRoutingService extends ValhallaRoutingService<com.massifmaps.routing.PackageManagerValhallaRoutingService, PackageManagerValhallaRoutingServiceOptions> {
    createNative(options: PackageManagerValhallaRoutingServiceOptions) {
        return new com.massifmaps.routing.PackageManagerValhallaRoutingService(options.packageManager.getNative());
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
