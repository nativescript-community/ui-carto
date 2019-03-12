import { BaseNative } from '../carto.common';
import { ZippedAssetPackageOptions } from './utils';
import { File, knownFolders, path } from 'tns-core-modules/file-system';

export function nativeVectorToArray(nVector: com.carto.core.StringVector) {
    const count = nVector.size();
    const result = [];
    for (let index = 0; index < count; index++) {
        result[index] = nVector.get(index);
    }
    return result;
}

export function nativeVariantToJS(variant: NTVariant) {
    switch (variant.getType()) {
        case NTVariantType.T_VARIANT_TYPE_ARRAY: {
            const result = [];
            for (let index = 0; index < variant.getArraySize(); index++) {
                result[index] = nativeVariantToJS(variant.getArrayElement(index));
            }
            return result;
        }
        case NTVariantType.T_VARIANT_TYPE_BOOL:
            return variant.getBool();
        case NTVariantType.T_VARIANT_TYPE_DOUBLE:
            return variant.getDouble();
        case NTVariantType.T_VARIANT_TYPE_INTEGER:
            return variant.getLong();
        case NTVariantType.T_VARIANT_TYPE_NULL:
            return null;
        case NTVariantType.T_VARIANT_TYPE_STRING:
            return variant.getString();
        case NTVariantType.T_VARIANT_TYPE_OBJECT: {
            const result = {} as any;
            const keys = variant.getObjectKeys();
            let key;
            for (let index = 0; index < keys.size(); index++) {
                key = keys.get(index);
                result[key] = nativeVariantToJS(variant.getObjectElement(key));
            }
            return result;
        }
    }
    return undefined;
}

export function nativeMapToJS(theMap: NTStringVariantMap) {
    const result = {};
    const count = theMap.size();
    let key;
    for (let index = 0; index < count; index++) {
        key = theMap.get_key(index);
        result[key] = nativeVariantToJS(theMap.get(key));
    }
    return result;
}

export function setShowDebug(value: boolean) {
    NTLog.setShowDebug(value);
    NTLog.setShowWarn(value);
}

const currentAppFolder = knownFolders.currentApp();

export class ZippedAssetPackage extends BaseNative<NTZippedAssetPackage, ZippedAssetPackageOptions> {
    createNative(options: ZippedAssetPackageOptions) {
        if (File.exists(path.join(currentAppFolder.path, '..', options.zipPath))) {
            const vectorTileStyleSetData = NTAssetUtils.loadAsset(options.zipPath);
            return NTZippedAssetPackage.alloc().initWithZipData(vectorTileStyleSetData);
        } else {
            console.error(`could not find zip file: ${options.zipPath}`);
            return null;
        }
    }
}
