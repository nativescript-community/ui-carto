import { ProjectionClass } from './projection';
import { EPSG3857Options } from './epsg3857';

export class EPSG3857 extends ProjectionClass<com.carto.projections.EPSG3857, EPSG3857Options> {
    createNative() {
        return new com.carto.projections.EPSG3857();
    }
}
