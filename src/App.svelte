
<svelte:head><link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/></svelte:head>
<div>
	<ul>
		{#each funds as fund}
		{#if fund.editing}
			<Editor data={fund}/>
		{:else}
			<li full grid-2 class = "fund" class:selected = "{selectedFund == fund}" on:click = {()=>edit(fund)}><span>{fund.name}</span><span amount>{fund.amount} {fund.cur || 'TK.'}</span></li>
		{/if}
		
		{/each}
	</ul>
</div>

<script>
	import {data} from './store.js'
	import Editor from './editor.svelte'
	let selectedFund
	function edit(fund){
		if(selectedFund)
			selectedFund.editing = false
		selectedFund = fund; 
		selectedFund.editing = true
		funds = [...funds]
	}
	let funds = [
		{name:'Wallet', amount:1000}, 
		{name:'Bank', amount:100000}, 
		{name:'Drawer', amount:2000}, 
		{name:'Almira', amount:2000, cur:'$'}
	]
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

