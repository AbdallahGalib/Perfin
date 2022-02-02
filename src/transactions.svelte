<div>
    <h1 class = "text-3xl bg-blue-700 px-2 flex">
        Transactions
        <span class = "ml-auto">
        <button on:click = "{add}">add</button>
        <button on:click = "{save}">save</button>
        <button on:click = "{remove}">remove</button>
    </span>
    </h1>
	<ul>
		{#each transactions as transaction}
			<li><Transaction data={transaction}/></li>
		{/each}
	</ul>
</div>

<script>
	import {data} from './store.js'
	import Editor from './editor.svelte'
	import Transaction from './Transaction.svelte'
	let selected
	let transactions = localStorage.getItem('transactions')
    transactions = transactions ? JSON.parse(transactions) : []
    function add(){
        transactions = [{name:'', amount:0, adding:true}, ...transactions]
    }
    function save(){
        localStorage.setItem( 'transactions', JSON.stringify(transactions) )
    }
    function remove(){
        
    }

     
 
</script>
		 
<style>
	
	ul, li {padding:0.5rem;; margin: 0}
</style>
