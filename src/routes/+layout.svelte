<script>
	import '../styles.css';
</script>

<header>
	<h1>svelte-crud-lucia | Sveltekit</h1>
</header>
<nav>
	<h2>nav</h2>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/shops">Shops</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/team">Team</a></li>
		<li><a href="/contact">Contact</a></li>
		<li><a href="/todos">Todos</a></li>
	</ul>
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
