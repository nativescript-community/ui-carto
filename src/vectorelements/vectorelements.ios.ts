import { ElementOptions } from './vectorelements';
import { BaseElement } from './vectorelements.common';

export abstract class Element<T extends NTVectorElement, U extends ElementOptions> extends BaseElement<T, U> {
    get metaData(): Object {
        if (this.native) {
            const theMap = this.native.getMetaData();
            const result = {};
            const count = theMap.size();
            let key;
            for (let index = 0; index < count; index++) {
                key = theMap.get_key(index);
                result[key] = theMap.get(key).getString();
            }
            return result;
        } else {
            return this.options.metaData;
        }
    }
    set metaData(value: Object) {
        if (this.native) {
            const theMap = NTStringVariantMap.alloc().init();
            for (const key in value) {
                theMap.setX(key, NTVariant.alloc().initWithString(value[key]));
            }
            this.native.setMetaData(theMap);
        }
    }
}
