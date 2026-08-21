import { TileDataSource } from '../datasources';
import { nativeVectorToArray } from '../utils';
import { VectorTileLayer } from './vector';
import { CompositeVectorTileLayerOptions } from './composite';

export const CompositeSourceType = {
    get COMPOSITE_SOURCE_TYPE_RASTER() {
        return com.massifmaps.layers.CompositeSourceType.COMPOSITE_SOURCE_TYPE_RASTER;
    },
    get COMPOSITE_SOURCE_TYPE_HILLSHADE() {
        return com.massifmaps.layers.CompositeSourceType.COMPOSITE_SOURCE_TYPE_HILLSHADE;
    },
    get COMPOSITE_SOURCE_TYPE_VECTOR() {
        return com.massifmaps.layers.CompositeSourceType.COMPOSITE_SOURCE_TYPE_VECTOR;
    }
};

export class CompositeVectorTileLayer extends VectorTileLayer {
    readonly supported = true;

    createNative(options: CompositeVectorTileLayerOptions) {
        if (!options?.dataSource || !options?.decoder) {
            return null;
        }
        const dataSource = options.dataSource.getNative();
        const decoder = options.decoder.getNative();
        if (!dataSource || !decoder) {
            return null;
        }
        return new com.massifmaps.layers.CompositeVectorTileLayer(dataSource, decoder);
    }

    get singlePassRenderingEnabled() {
        return this.getNative().isSinglePassRenderingEnabled();
    }
    set singlePassRenderingEnabled(value: boolean) {
        this.getNative().setSinglePassRenderingEnabled(value);
    }

    addExternalDataSource(name: string, dataSource: TileDataSource<any, any>, type: any) {
        this.getNative().addExternalDataSource(name, dataSource.getNative(), type);
    }
    /** the master tile absorbs the source's own layers, which is what a contour slot wants */
    addVectorDataSource(name: string, dataSource: TileDataSource<any, any>) {
        this.getNative().addVectorDataSource(name, dataSource.getNative());
    }
    removeExternalDataSource(name: string) {
        return this.getNative().removeExternalDataSource(name);
    }
    getExternalDataSourceNames(): string[] {
        return nativeVectorToArray(this.getNative().getExternalDataSourceNames());
    }
    setExternalDataSourceZoomLevelBias(name: string, bias: number) {
        this.getNative().setExternalDataSourceZoomLevelBias(name, bias);
    }
    getExternalDataSourceZoomLevelBias(name: string) {
        return this.getNative().getExternalDataSourceZoomLevelBias(name);
    }
    clearExternalDataSourceZoomLevelBias(name: string) {
        this.getNative().clearExternalDataSourceZoomLevelBias(name);
    }
    setExternalDataSourceMaxOverzoomLevel(name: string, level: number) {
        this.getNative().setExternalDataSourceMaxOverzoomLevel(name, level);
    }
}
