import { DatabaseItem } from "./DatabaseItem";
import type { Item } from "./Item";

export class LocalStorageDB {
    public static KEY_ITEMS = "TR_ITEMS" as const;
    public static KEY_COUNTER = "TR_ITEMS" as const;

    public dbItems: DatabaseItem[];
    public counter: number;

    constructor() {
        try {
            const itemstring = localStorage.getItem(LocalStorageDB.KEY_ITEMS)??'[]';
            const counterString = localStorage.getItem(
                LocalStorageDB.KEY_COUNTER
            )??'0';

            this.dbItems = JSON.parse(itemstring) as DatabaseItem[];
            this.counter = Number.parseInt(counterString);
        } catch {
            this.dbItems=[];
            this.counter=0;
            console.log("Did not find anything on localStorage, creating new");
        }
    }

    insert(item:Item){
        this.dbItems = [...this.dbItems,DatabaseItem.fromItem(this.counter++,item)];
    }
    getItems(){
        return this.dbItems??[];
    }
}
