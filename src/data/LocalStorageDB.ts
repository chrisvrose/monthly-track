import { DatabaseID, DatabaseItem } from "./DatabaseItem";
import { Item } from "./Item";

export const KEY_ITEMS = "TR_ITEMS";
export const KEY_COUNTER = "TR_ITEMS_COUNTER";
import { Readable, readable, writable, Writable } from "svelte/store";

let counter = 0;

let dbItems: DatabaseItem[] = [];
// let counter=0;
try {
    const itemstring = localStorage.getItem(KEY_ITEMS) ?? "[]";
    const counterString = localStorage.getItem(KEY_COUNTER) ?? "0";

    dbItems = JSON.parse(itemstring) as DatabaseItem[];
    counter = Number.parseInt(counterString);
    if (!Array.isArray(dbItems)) throw "fail";
    else if (dbItems.length === 0) counter = 0;
} catch {
    dbItems = [];
    counter = 0;
    console.log("Did not find anything on localStorage, creating new");
}

export const store: Writable<DatabaseItem[]> = writable(dbItems, () => {
    return () => {};
});

export function insertItem(item: Item) {
    store.update((items) => {
        const newItems = [...items, DatabaseItem.fromItem(counter++, item)];
        localStorage.setItem(KEY_ITEMS, JSON.stringify(newItems));
        localStorage.setItem(KEY_COUNTER, counter.toString());
        return newItems;
    });
}
export function remove(id: DatabaseID) {
    store.update((items) => {
        const newItems = items.filter((item) => item.id !== id);
        localStorage.setItem(KEY_ITEMS, JSON.stringify(newItems));
        localStorage.setItem(KEY_COUNTER, counter.toString());
        return newItems;
    });
}
export function insert(value: number, desc: string = "") {
    return insertItem(new Item(Math.random(), desc));
}
