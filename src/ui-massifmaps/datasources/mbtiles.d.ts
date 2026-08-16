import { DataSource, TileDataSource, TileDataSourceOptions } from '.';

export enum MBTilesScheme {
    MBTILES_SCHEME_TMS,
    MBTILES_SCHEME_XYZ
}

export interface MBTilesTileDataSourceOptions extends TileDataSourceOptions {
    databasePath?: string;
    scheme?: MBTilesScheme;
}
export class MBTilesTileDataSource extends TileDataSource<any, MBTilesTileDataSourceOptions> {}
