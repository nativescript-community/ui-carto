import { BaseNative } from '../index.common';
import { RouteMatchingResult as IRouteMatchingResult, RoutingInstructionVector, RoutingResult as IRoutingResult, RoutingServiceOptions } from '.';
import { Projection } from 'nativescript-carto/projections';
import { MapPosVector } from 'nativescript-carto/core';
export abstract class BaseRoutingService<T, U extends RoutingServiceOptions> extends BaseNative<T, U> {}

export class RoutingResult implements IRoutingResult {
    constructor(private native: any) {}
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
}

export class RouteMatchingResult implements IRouteMatchingResult {
    constructor(private native: any) {}
    getProjection() {
        return new Projection(this.native.getProjection());
    }
    getPoints() {
        return new MapPosVector(this.native.getPoints());
    }
}
