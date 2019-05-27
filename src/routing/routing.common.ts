import { BaseNative } from '../carto.common';
import { RoutingInstructionVector, RoutingResult as IRoutingResult, RoutingServiceOptions } from './routing';
import { Projection } from 'nativescript-carto/projections/projection';
import { MapPosVector } from 'nativescript-carto/core/core';
export abstract class BaseRoutingService<T, U extends RoutingServiceOptions> extends BaseNative<T, U> {}

export class RoutingResult implements IRoutingResult {
    constructor(private native: any) {
        console.log('creating RoutingResult', native, this.native);
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
}
