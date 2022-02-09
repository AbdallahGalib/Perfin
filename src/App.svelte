<svelte:head><link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/></svelte:head>

<script>
	import Router, { link } from "svelte-spa-router";
	import { routes } from "./lib/routes.js";
</script>
<nav class = "flex gap-3 divide-x divide-dashed  hover:divide-solid ">
	Menu: <a href = "/" use:link>Home</a>
	<a href = "/transactions" use:link>Transactions</a>
	<a href = "/funds" use:link>Funds</a>
	<!-- <a href = "/article/the special one" use:link>Funds</a> |  -->
	<!-- <a href = "/somethingelse" use:link>Unknown</a> -->
	<a class = "ml-auto			" href = "/signin" use:link>Sign in</a>
	<a class = "ml		" href = "/signup" use:link>Sign up</a>
</nav>
<Router {routes}/>
