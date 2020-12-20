import * as observable from '@nativescript/core/data/observable';
import * as pages from '@nativescript/core/ui/page';
import { CartoModel } from './main-view-model';
import { CartoMap } from '@nativescript-community/ui-carto/ui';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    const mapView: CartoMap = page.getViewById('mapView');
    const context = (page.bindingContext = new CartoModel(mapView));
    // context.reloadCssFromDir();
}
