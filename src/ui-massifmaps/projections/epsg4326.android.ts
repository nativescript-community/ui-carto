import { ProjectionClass } from '.';
import { EPSG4326Options } from './epsg4326';

export class EPSG4326 extends ProjectionClass<any, com.massifmaps.projections.EPSG4326, EPSG4326Options> {
    createNative() {
        return new com.massifmaps.projections.EPSG4326();
    }
}
