import { Observable } from 'tns-core-modules/data/observable';
import { CartoMap } from 'nativescript-carto/ui/ui';
import { Zip } from 'nativescript-zip2';
import * as fs from 'tns-core-modules/file-system';

const destZip = fs.File.fromPath(fs.path.join(fs.knownFolders.temp().path, 'carto.zip'));
let appPath = fs.knownFolders.currentApp().path;
export class CartoModel extends Observable {
  constructor(private mapView:CartoMap) {
    super();
  }

  // reloadCssFromDir() {
  //   console.log(`reloadCssFromDir ${destZip.path}`);
  //   Zip.zip({
  //     destination:destZip.path,
  //     folderToArchive:fs.path.join(appPath, 'mss'),
  //     keepParentDirectory:false
  //   })
  //     .then(() => {
  //       console.log(`zipped file ${destZip.path}`);
  //       this.mapView.updateDecoderStyle(destZip.path);
  //     })
  //     .catch((err) => {
  //       console.log(`zip error: ${err}`);
  //     });
  // }
}
 