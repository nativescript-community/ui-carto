import { MBTilesTileDataSourceOptions } from './mbtiles';
import { TileDataSource } from '.';

export const MBTilesScheme = {
    get MBTILES_SCHEME_TMS() {
        return com.carto.datasources.MBTilesScheme.MBTILES_SCHEME_TMS;
    },
    get MBTILES_SCHEME_XYZ() {
        return com.carto.datasources.MBTilesScheme.MBTILES_SCHEME_XYZ;
    }
};

export class MBTilesTileDataSource extends TileDataSource<com.carto.datasources.MBTilesTileDataSource, MBTilesTileDataSourceOptions> {
    createNative(options: MBTilesTileDataSourceOptions) {
        if (options.hasOwnProperty('minZoom') || options.hasOwnProperty('maxZoom')) {
            return new com.carto.datasources.MBTilesTileDataSource(
                options.minZoom || 0,
                options.maxZoom || 24,
                options.databasePath,
                options.scheme || (com.carto.datasources.MBTilesScheme.MBTILES_SCHEME_TMS as any)
            );
        } else {
            return new com.carto.datasources.MBTilesTileDataSource(options.databasePath);
        }
    }
}
