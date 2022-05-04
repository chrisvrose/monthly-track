<script lang="ts">
import type { DatabaseID, DatabaseItem } from "../data/DatabaseItem";

import type { Item } from "../data/Item";

    export let item:DatabaseItem;
    export let remove:(id:DatabaseID)=>void;
</script>


<tr>
    <td>
        <div>{item.id} Here is another item, {item.desc} + {item.value}</div>
    </td>
    <td>
        <button on:click={()=>remove(item.id)}>Remove</button>
    </td>
</tr>