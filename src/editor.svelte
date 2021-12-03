<span> 
    <input bind:value = {data.name} placeholder = "Name" />
    <input bind:value = {data.amount} placeholder = "Amount" />
    <button on:click = {update}></button>
</span>

<script>

    // import {data} from './store.js'
    export let data = {name:'', amount:0}

    function update(){
        // data.name = item.name
        // data.value = item.amount
    }

</script>