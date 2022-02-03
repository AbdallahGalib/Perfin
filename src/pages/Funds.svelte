<div>
    <h1 class = "text-3xl bg-yellow-300 px-2">Funds</h1>
	<ul>
		{#each $funds as fund}
		{#if fund.editing}
			<Editor data={fund}/>
		{:else}
			<li full grid-2 class = "fund" class:selected = "{selected == fund}" on:click = {()=>edit(fund)}><span>{fund.name}</span><span amount>{fund.amount} {fund.cur || 'TK.'}</span></li>
		{/if}
		
		{/each}
	</ul>
</div>

<script>
	import {funds} from '../lib/store.js'
	import Editor from '../components/editor.svelte'
	let selected
	function edit(fund){
		if(selected)
		selected.editing = false
		selected = fund; 
		selected.editing = true
		// funds = [...funds]
	}
</script>
		 
<style>
	[grid-2] {display: grid; grid-template-columns: repeat(2, 1fr);}
	
	.fund { gap:2rem; }
	[amount] {text-align:right;}
	[full] {width:100%;}
	ul, li {padding:0.5rem;; margin: 0}
	* { box-sizing: border-box; }
	.selected {background: darkseagreen;}
</style>
