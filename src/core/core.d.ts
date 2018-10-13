export class Position {
    public latitude: number;
    public longitude: number;
    public altitude?: number;
    public speed?: number;
}

export class Bounds {
    public northeast: Position;
    public southwest: Position;
    public static fromCoordinates(southwest: Position, northeast: Position): Bounds;
}
export declare function fromNativeMapPos(pos): Position;
export declare function toNativeMapPos(pos: Position): any;
export declare function fromNativeMapBounds(bounds: any): Bounds;
export declare function toNativeMapBounds(bounds: Bounds): any;

declare enum CartoMapStyle {
    VOYAGER,
    POSITRON,
    DARKMATTER
}

declare enum ClickType {
    SINGLE,
    LONG,
    DOUBLE,
    DUAL
}
