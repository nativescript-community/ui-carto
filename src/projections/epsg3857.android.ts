import { EPSG3857Base } from './epsg3857.common';

export class EPSG3857 extends EPSG3857Base<com.carto.projections.EPSG3857> {
    createNative() {
        return new com.carto.projections.EPSG3857();
    }
}
