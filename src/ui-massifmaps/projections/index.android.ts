import { MapPos, fromNativeMapPos, toNativeMapPos } from '../core';
import { ProjectionOptions } from '.';
import { BaseProjection } from './index.common';
import { ACCESSORS as ACC_Projection, Accessors as Acc_Projection, METHODS as MET_Projection, Methods as Met_Projection, SELECTORS as SEL_Projection } from '../bindings/projections/Projection';
import { bindNative } from '../nativeclass.common';

export abstract class ProjectionClass<T extends com.massifmaps.projections.Projection, U extends ProjectionOptions> extends BaseProjection<T, U> {
    fromWgs84(position: MapPos) {
        return fromNativeMapPos(this.getNative().fromWgs84(toNativeMapPos(position)));
    }
    toWgs84(position: MapPos) {
        return fromNativeMapPos(this.getNative().toWgs84(toNativeMapPos(position)));
    }
    fromLatLong(latitude, longitude) {
        return fromNativeMapPos(this.getNative().fromLatLong(latitude, longitude));
    }
    toLatLong(x, y) {
        return fromNativeMapPos(this.getNative().toLatLong(x, y));
    }
}

export class Projection extends ProjectionClass<com.massifmaps.projections.Projection, ProjectionOptions> {}

// on the abstract base, so EPSG3857/EPSG4326 inherit the forwarders too - their own
// tables are a subset of this one
export interface ProjectionClass<T extends com.massifmaps.projections.Projection, U extends ProjectionOptions>
    extends Omit<Acc_Projection, 'toLatLong'>, Omit<Met_Projection, 'fromWgs84' | 'toLatLong' | 'toWgs84'> {}
bindNative(ProjectionClass, MET_Projection, ACC_Projection, { selectors: SEL_Projection });

export interface Projection extends Omit<Acc_Projection, 'toLatLong'>, Omit<Met_Projection, 'fromWgs84' | 'toLatLong' | 'toWgs84'> {}
bindNative(Projection, MET_Projection, ACC_Projection, { selectors: SEL_Projection });
