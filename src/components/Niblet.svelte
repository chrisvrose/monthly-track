<script lang="ts">
    import ItemView from "./ItemView.svelte";
    import * as LocalStorageDB from "../data/LocalStorageDB";
    import { onDestroy } from "svelte";
    import type { DatabaseItem } from "../data/DatabaseItem";

    let items = [] as DatabaseItem[];
    const unsub = LocalStorageDB.store.subscribe((data) => {
        items = data;
    });

    onDestroy(unsub);
</script>

<button
    on:click={(e) => {
        LocalStorageDB.insert(Math.random() * 512, "Hi" + Math.random());
    }}>Hello</button
>
<table>
    <thead>
        <td>ID</td>
        <td>Remove</td>
    </thead>
    <tbody>
        {#each items as item}
            <ItemView {item} remove={LocalStorageDB.remove} />
        {/each}
    </tbody>
</table>
