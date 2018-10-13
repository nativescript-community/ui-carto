import { ElementOptions } from './vectorelements';
import { BaseElement } from './vectorelements.common';
import { nativeMapToJS } from '../utils/utils';

export abstract class Element<T extends com.carto.vectorelements.VectorElement, U extends ElementOptions> extends BaseElement<T, U> {
    get metaData(): Object {
        if (this.native) {
            // const theMap = this.native.getMetaData();
            // const result = {};
            // const count = theMap.size();
            // let key;
            // for (let index = 0; index < count; index++) {
            //     key = theMap.get_key(index);
            //     result[key] = theMap.get(key).getString();
            // }
            return nativeMapToJS(this.native.getMetaData());
        } else {
            return this.options.metaData;
        }
    }
    set metaData(value: Object) {
        if (this.native) {
            const theMap = new com.carto.core.StringVariantMap();
            for (const key in value) {
                theMap.set(key, new com.carto.core.Variant(value[key]));
            }
            this.native.setMetaData(theMap);
        }
    }
}
