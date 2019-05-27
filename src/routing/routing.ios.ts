import { mapPosVectorFromArgs } from '../carto';
import { NativeVector } from '../core/core';
import {
    CartoOnlineRoutingServiceOptions,
    OSRMOfflineRoutingServiceOptions,
    PackageManagerRoutingServiceOptions,
    RoutingInstruction,
    RoutingRequest,
    RoutingServiceOptions,
    SGREOfflineRoutingServiceOptions
} from './routing';
import { BaseRoutingService, RoutingResult } from './routing.common';
import { JSVariantToNative } from 'nativescript-carto/utils/utils';

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
abstract class RoutingService<T extends NTRoutingService, U extends RoutingServiceOptions> extends BaseRoutingService<T, U> {
    public calculateRoute(options: RoutingRequest, callback: (err: Error, res: RoutingResult) => void) {
        const nRequest = NTRoutingRequest.alloc().initWithProjectionPoints(options.projection.getNative(), mapPosVectorFromArgs(options.points, options.projection));

        this.log('calculateRoute', options);
        const nRes = this.getNative().calculateRoute(nRequest);
        const result = nRes ? new RoutingResult(nRes) : null;
        callback(null, result);
    }
}

export class RoutingInstructionVector extends NativeVector<RoutingInstruction> {
    native: NTRoutingInstructionVector;
    constructor(native: NTRoutingInstructionVector) {
        super();
        this.native = native;
    }
}

class PackageManagerRoutingService extends RoutingService<NTPackageManagerRoutingService, PackageManagerRoutingServiceOptions> {
    createNative(options: PackageManagerRoutingServiceOptions) {
        return NTPackageManagerRoutingService.alloc().initWithPackageManager(options.packageManager.getNative());
    }
}

class SGREOfflineRoutingService extends RoutingService<NTSGREOfflineRoutingService, SGREOfflineRoutingServiceOptions> {
    createNative(options: SGREOfflineRoutingServiceOptions) {
        return NTSGREOfflineRoutingService.alloc().initWithProjectionFeatureCollectionConfig(options.projection.getNative(), options.features.getNative(), JSVariantToNative(options.config));
    }
}

class CartoOnlineRoutingService extends RoutingService<NTCartoOnlineRoutingService, CartoOnlineRoutingServiceOptions> {
    createNative(options: CartoOnlineRoutingServiceOptions) {
        return  NTCartoOnlineRoutingService.alloc().initWithSource(options.source);
    }
}
class OSRMOfflineRoutingService extends RoutingService<NTOSRMOfflineRoutingService, OSRMOfflineRoutingServiceOptions> {
    createNative(options: OSRMOfflineRoutingServiceOptions) {
        return  NTOSRMOfflineRoutingService.alloc().initWithPath(options.path);
    }
}

export { RoutingService, RoutingResult, PackageManagerRoutingService, SGREOfflineRoutingService, OSRMOfflineRoutingService, CartoOnlineRoutingService };
