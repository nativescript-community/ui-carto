export type LatitudeKeys = 'latitude' | 'lat';
export type LongitudeKeys = 'longitude' | 'lon' | 'lng';
export type AltitudeKeys = 'altitude' | 'alt' | 'ele';

export interface MapPos {
    latitude?: number;
    lat?: number;
    longitude?: number;
    lon?: number;
    lng?: number;
    speed?: number;
    altitude?: number;
}

export interface ScreenPos {
    x: number;
    y: number;
}
export interface MapVec {
    x: number;
    y: number;
    z: number;
}
export interface MapRange {
    min: number;
    max: number;
}

export interface MapBounds {
    northeast: MapPos;
    southwest: MapPos;
}
export interface ScreenBounds {
    min: ScreenPos;
    max: ScreenPos;
}
// export namespace MapBounds {
//     function fromCoordinates(southwest: MapPos, northeast: MapPos): MapBounds;
// }
export let LatitudeKey: LatitudeKeys = 'latitude';
export let LongitudeKey: LongitudeKeys = 'longitude';
export let AltitudeKey: AltitudeKeys = 'altitude';

export function setMapPosKeys(latitude: LatitudeKeys, longitude: LongitudeKeys, altitude: AltitudeKeys) {
    LatitudeKey = latitude;
    LongitudeKey = longitude;
    AltitudeKey = altitude;
}

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);

            if (name === 'constructor') return;
            if (descriptor && (!descriptor.writable || !descriptor.configurable || !descriptor.enumerable || descriptor.get || descriptor.set)) {
                Object.defineProperty(derivedCtor.prototype, name, descriptor);
            } else {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
        Object.getOwnPropertySymbols(baseCtor.prototype).forEach(symbol => {
            derivedCtor.prototype[symbol] = baseCtor.prototype[symbol];
        });
    });
}
