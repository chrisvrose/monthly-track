import { Item } from "./Item";

export class DatabaseItem extends Item {
    constructor(public id: number, value: number = 0, desc: string = "") {
        super(value, desc);
    }
    static fromItem(id: number, item: Item) {
        return new DatabaseItem(id, item.value, item.desc);
    }
}
export type DatabaseID = DatabaseItem['id'];