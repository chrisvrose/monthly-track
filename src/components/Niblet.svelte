<script lang="ts">
    import App from "../App.svelte";
import { DatabaseID, DatabaseItem } from "../data/DatabaseItem";

    import { Item } from "../data/Item";
    import { LocalStorageDB } from "../data/LocalStorageDB";
    import ItemView from "./ItemView.svelte";

    let items: DatabaseItem[] = [];
    let counter = 0;
    try {
        const itemstring = localStorage.getItem(LocalStorageDB.KEY_ITEMS)??'[]';
        const counterString = localStorage.getItem(LocalStorageDB.KEY_COUNTER)??'0';

        items = JSON.parse(itemstring) as DatabaseItem[];
        counter = Number.parseInt(counterString);
    } catch {
        items = [];
        counter = 0;
        console.log("Did not find anything on localStorage, creating new");
    }
    function removeItem(id: DatabaseID) {
        items = items.filter((e, i) => e.id !== id);
    }
</script>

<button on:click={(e) => {
    items = [...items,DatabaseItem.fromItem(counter,new Item(Math.random(),'555 desc'))];
    counter+=1;
}}>Hello</button>

{#each items as item}
    <ItemView  {item} remove={removeItem} />
{/each}
