import { MapPos } from '../core';
import { GroupBase } from './group.common';

export class Group extends GroupBase {
    getNativePos(pos: MapPos) {
        return null;
    }
    //@ts-ignore
    get position() {
        return this.options.position;
    }
    set position(pos: MapPos) {
        this.options.position = pos;
        this.elements.forEach((el) => (el.position = pos));
    }
    //@ts-ignore
    get visible() {
        return this.options.visible;
    }
    set visible(value: boolean) {
        this.options.visible = value;
        this.elements.forEach((el) => (el.visible = value));
    }
    //@ts-ignore
    get metaData(): { [k: string]: string } {
        return this.options.metaData;
    }
    set metaData(value: { [k: string]: string }) {
        this.options.metaData = value;
        this.elements.forEach((el) => (el.metaData = value));
    }
}
