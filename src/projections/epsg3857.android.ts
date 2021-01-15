import { ProjectionClass } from '.';
import { EPSG3857Options } from './epsg3857';

export class EPSG3857 extends ProjectionClass<any, com.carto.projections.EPSG3857, EPSG3857Options> {
    createNative() {
        return new com.carto.projections.EPSG3857();
    }
}
