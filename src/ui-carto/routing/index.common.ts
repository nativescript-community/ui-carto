import type { RouteMatchingResult as IRouteMatchingResult, RoutingResult as IRoutingResult, RoutingInstruction, RoutingServiceOptions } from '.';
import { BaseNative } from '../BaseNative';
import { MapPosVector, NativeVector } from '../core';
import { Projection } from '../projections';

export abstract class BaseRoutingService<T, U extends RoutingServiceOptions> extends BaseNative<T, U> {}

export class RoutingInstructionVector extends NativeVector<RoutingInstruction> {}

export class RoutingResult extends BaseNative<any, {}> implements IRoutingResult {
    constructor(native) {
        super(null, native);
    }
    getProjection() {
        return new Projection(this.native.getProjection());
    }
    getTotalTime() {
        return this.native.getTotalTime();
    }
    getPoints() {
        return new MapPosVector(this.native.getPoints());
    }
    getTotalDistance() {
        return this.native.getTotalDistance();
    }
    getInstructions() {
        return new RoutingInstructionVector(this.native.getInstructions());
    }
    getRawResult() {
        return this.native.getRawResult();
    }
}

export class RouteMatchingResult extends BaseNative<any, {}> implements IRouteMatchingResult {
    constructor(native) {
        super(null, native);
    }
    getProjection() {
        return new Projection(this.native.getProjection());
    }
    getPoints() {
        return new MapPosVector(this.native.getPoints());
    }
    getRawResult() {
        return this.native.getRawResult();
    }
}
