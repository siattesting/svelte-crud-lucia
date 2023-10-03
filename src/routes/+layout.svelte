<script>
	import '../styles.css';
</script>

<header>
	<h1>svelte-crud-lucia | Sveltekit</h1>
</header>
<nav>
	<a href="/">Home</a>
	<a href="/transactions">Transactions</a>
	<a href="/about">About</a>
	<a href="/team">Team</a>
	<a href="/contact">Contact</a>
	<a href="/todos">Todos</a>
	<a href="/partners">Partners</a>
</nav>
<main>
	<slot />
</main>
<footer style="background-color: #ccc; text-align: center;">
	<p>&copy siattesting | svelte-crud-lucia</p>
</footer>
