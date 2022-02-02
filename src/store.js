import {writable} from 'svelte/store'
// localStorage.setItem("transactions", '[]')
// localStorage.setItem("funds", '[]')
let transactions = localStorage.getItem("transactions") || '[]'
transactions =JSON.parse(transactions)
transactions = writable(transactions)//

transactions.subscribe(list => {
    // debugger
    localStorage.setItem("transactions", JSON.stringify(list));
})

// let funds =  JSON.parse(localStorage.getItem("funds"))
// funds = writable(funds)//

// funds.subscribe(list => {
//     localStorage.setItem("funds", list);
// })

export {transactions}