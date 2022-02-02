
<div>
    <Editor data={data}/>
	<button on:click = "{remove(data)}">remove</button>
</div>

<script>
	import {transactions} from './store.js'
    export let data;
	import Editor from './editor.svelte'
	let selected
	function edit(item){
		if(selected)
        selected.editing = false
		selected = item; 
		selected.editing = true
		data = {...data}
	}

    function remove(transaction){
        transactions.update(arr => [...$transactions.filter(item => item !== transaction)])
    }
	
	// let funds = [
	// 	{name:'Where?', Answer:0}, 
	// 	{name:'Why?', Answer:0}, 
	// 	{name:'Who?', Answer:0}, 
	// 	{name:'When?', Answer:0,}
	// ]
</script>