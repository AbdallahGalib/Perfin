import Home from "../pages/Home.svelte";
import Signin from "../pages/Signin.svelte";
import Funds from "../pages/Funds.svelte";
import Transactions from "../pages/Transactions.svelte";
import NotFound from "../pages/NotFound.svelte";
import Operations from "../pages/Operations.svelte";

export const routes = {
  "/": Home,
  // "/article/:title": Signin,
  "/transactions": Transactions,
  "/funds": Funds,
  "/signin": Signin,
  "/operations": Operations,
  "*": NotFound
};