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
<footer>
	<h2>footer</h2>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur incidunt alias quasi quisquam
		ab commodi temporibus placeat et.
	</p>
</footer>
