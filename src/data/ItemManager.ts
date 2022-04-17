import type { Item } from "./Item";

/**
 * @deprecated
 */
export class ItemManager {
    private _items: Item[];
    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }

    constructor() {
        this._items = [];
    }
    
}
