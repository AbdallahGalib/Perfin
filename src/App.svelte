
<div>
	<ul>
		{#each funds as fund}
		<li grid-2 class = "fund" full><span>{fund.name}</span><span amount>{fund.amount} {fund.cur || 'TK.'}</span></li>
		{/each}
	</ul>
</div>

<script>
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
</style>

