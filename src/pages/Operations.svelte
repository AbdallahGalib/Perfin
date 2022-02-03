
<script>
    	import Dialog from '../components/Dialog.svelte'
	// import {open} from './Signup.svelte'
	// import Funds from './Funds.svelte'
	import Transactions from './Transactions.svelte'
	let profile = localStorage.getItem('profile')
	let hasNoProfile = !profile
	// console.log(!profile)

</script>
<!-- <Funds/> -->
<Transactions/>
<!-- <Signup/> -->

<Dialog caption = "Signup" title = "Signup from here" bind:open = "{hasNoProfile}">
	<div class = "flex flex-col">
		<input type="text" placeholder = "your name">
		<input type="email" placeholder = "your email">
		<input type="password" placeholder = "a password">
		<input type="password" placeholder = "confirm the password">
	</div>
</Dialog>
<Dialog caption = "Signin" title = "Signin here">
	<div class = "flex flex-clo">
		<input type="email" placeholder = "email">
		<input type="password" placeholder = "password">
	</div>
</Dialog>