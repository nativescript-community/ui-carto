import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { CartoModel } from './main-view-model';
import { CartoMap } from 'nativescript-carto';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    const mapView: CartoMap = page.getViewById('mapView');
    const context = (page.bindingContext = new CartoModel(mapView));
    context.reloadCssFromDir();
}
