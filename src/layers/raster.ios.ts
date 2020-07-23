import { CartoOnlineRasterTileLayerOptions, HillshadeRasterTileLayerOptions, RasterTileLayerOptions } from './raster';
import { RasterTileLayerBase } from './raster.common';
import { nativeProperty } from '../';

export class RasterTileLayer extends RasterTileLayerBase<NTRasterTileLayer, RasterTileLayerOptions> {
    createNative(options: RasterTileLayerOptions) {
        return NTRasterTileLayer.alloc().initWithDataSource(options.dataSource.getNative());
    }
}

export class CartoOnlineRasterTileLayer extends RasterTileLayerBase<NTCartoOnlineRasterTileLayer, CartoOnlineRasterTileLayerOptions> {
    createNative(options) {
        return NTCartoOnlineRasterTileLayer.alloc().initWithSource(options.source);
    }
}

// export class HillshadeRasterTileLayer extends RasterTileLayerBase<NTHillshadeRasterTileLayer, HillshadeRasterTileLayerOptions> {
//     @nativeProperty heightScale: number;
//     @nativeProperty contrast: number;
//     createNative(options) {
//         if (options.decoder) {
//             return new NTHillshadeRasterTileLayer(options.dataSource.getNative(), options.decoder.getNative());

//         } else {
//             return new NTHillshadeRasterTileLayer(options.dataSource.getNative());

//         }
//     }
// }
