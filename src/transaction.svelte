
<div>
    <Editor data={data}/>
</div>

<script>
	// import {data} from './store.js'
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
	// let funds = [
	// 	{name:'Where?', Answer:0}, 
	// 	{name:'Why?', Answer:0}, 
	// 	{name:'Who?', Answer:0}, 
	// 	{name:'When?', Answer:0,}
	// ]
</script>