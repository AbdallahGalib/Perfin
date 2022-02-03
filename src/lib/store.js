import {writable} from 'svelte/store'
// localStorage.setItem("transactions", '[]')
// localStorage.setItem("funds", '[]')
let transactions = localStorage.getItem("transactions") || '[]'
transactions = transactions == '[object Object]' ? [] : JSON.parse(transactions)
transactions = writable(transactions)//

transactions.subscribe(list => {
    // debugger
    localStorage.setItem("transactions", JSON.stringify(list));
})

let funds = localStorage.getItem("funds") || '[]'
funds = funds == '[object Object]' ? [] : JSON.parse(funds)
funds = writable(funds)

funds.subscribe(list => {
    localStorage.setItem("funds", list);
})

export {transactions, funds}