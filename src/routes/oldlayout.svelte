<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Aside from './Aside.svelte';
</script>

<div class="wrapper">
	<Header />
	<main>
		<article>
			<div class="content">
				<slot />
			</div>
			<aside class="related">
				<p>
					All these veggies are brought to you by the
					<a href="https://veggieipsum.com/">Veggie Ipsum generator</a>.
				</p>
			</aside>
		</article>

		<Aside />
	</main>

	<footer><p>&copy;2019</p></footer>
</div>
