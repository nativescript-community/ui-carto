export interface MapPos {
    latitude: number;
    longitude: number;
    altitude?: number;
    speed?: number;
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
