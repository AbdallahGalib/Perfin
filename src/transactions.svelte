<div>
    <h1 class = "text-3xl bg-blue-700 px-2 flex">
        Transactions
        <span class = "ml-auto">
        <button on:click = "{add}">add</button>
        <button on:click = "{save}">save</button>
    </span>
    </h1>
	<ul>
		{#each $transactions as transaction}
			<li on:click = "{()=> {selected = transaction}}" class:selected = "{selected === transaction}"><Transaction data={transaction}/></li>
		{/each}
	</ul>
</div>

<script>
	import {transactions} from './store.js'
	import Editor from './editor.svelte'
	import Transaction from './Transaction.svelte'
	let selected
	// transactions = localStorage.getItem('transactions')
    // transactions = transactions ? JSON.parse(transactions) : []
    function add(){
        // transactions = [{name:'', amount:0, adding:true}, ...transactions]
        let max = $transactions.length == 0 ? 0 : $transactions.reduce(function(a, b) {
            return a.id > b.id ? a.id : b.id; 
        })
        transactions.update(arr => [{id: max + 1, name:'', amount:0, adding:true}, ...$transactions])
    }
    function save(){
        localStorage.setItem( 'transactions', JSON.stringify($transactions) )
    }

     
 
</script>
		 
<style>
	
	ul, li {padding:0.5rem;; margin: 0}
    .selected {background-color: blue;}
</style>
