import { ProjectionClass } from '.';
import { EPSG4326Options } from './epsg4326';

export class EPSG4326 extends ProjectionClass<com.carto.projections.EPSG4326, EPSG4326Options> {
    createNative() {
        return new com.carto.projections.EPSG4326();
    }
}
