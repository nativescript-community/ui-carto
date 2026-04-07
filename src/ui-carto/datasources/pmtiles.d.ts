import { DataSource, TileDataSource, TileDataSourceOptions } from '.';

export enum PMTilesScheme {
    PMTILES_SCHEME_TMS,
    PMTILES_SCHEME_XYZ
}

export interface PMTilesTileDataSourceOptions extends TileDataSourceOptions {
    databasePath?: string;
    scheme?: PMTilesScheme;
}
export class PMTilesTileDataSource extends TileDataSource<any, PMTilesTileDataSourceOptions> {}
