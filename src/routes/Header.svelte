<header>
	<nav>
		<ul>
			<li><a href="/">Blog</a></li>
			<li><a href="/shops">Shops</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/todos">Todos</a></li>
			<li><a href="/contact">Contact</a></li>
			<li><a href="/team">Meet the team</a></li>
			{#if !user}
				<li><a href="/login">Login</a></li>
			{/if}
		</ul>
	</nav>
</header>
