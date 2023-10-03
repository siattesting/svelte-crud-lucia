<script>
	import { enhance } from '$app/forms';

	export let data;
</script>

<h2>Partners</h2>
<div>
	<p>User id: {data.userId}</p>
	<p>Username: {data.username}</p>
</div>

<div>
	<h2>List of partners</h2>
	<ul class="grid-items">
		{#each data.partners as partner (partner.id)}
			<li class="grid-item">
				<a href="/partners/{partner.id}">
					<p>{partner.title}</p>
				</a>
				<small>{partner.content}</small>
			</li>
		{/each}
	</ul>
</div>

<article />

<h2>New Partner</h2>
<div>
	<form action="?/create" method="POST" use:enhance>
		<label for="title" class="field">
			<span class="label-text">Title</span>
			<input type="text" name="title" placeholder="Title" />
		</label>
		<label for="content" class="field">
			<span class="label-text">Content</span>
			<textarea name="content" placeholder="Description" rows={5} />
		</label>

		<button type="submit" class="field">Save</button>
	</form>
</div>

<style>
	.error {
		color: tomato;
	}

	form {
		border: 1px solid gray;
		padding: 5px;
		width: 80vw;
		max-width: 30em;
		display: grid;
		grid-template-columns: 1fr auto;
		grid-column-gap: 1em;
		margin-bottom: 1em;
	}

	/* Sub-Grids */

	.field {
		grid-column: span 2;
		display: grid;
		/* grid: inherit; */
		grid-template-columns: subgrid;
		grid-gap: inherit;
		margin-bottom: 1em;
	}

	.grid-items {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
	.grid-item {
		padding: 10px;
		border: 2px green solid;
		border-radius: 5px;
		margin: 5px;
		list-style: none;
	}
</style>
