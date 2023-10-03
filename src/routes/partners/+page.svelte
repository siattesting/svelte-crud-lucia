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
	{#each data.partners as partner}
		<p>{partner.id} - {partner.title}</p>
	{/each}
</div>
<p>
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, inventore? Neque nobis dolore
	reprehenderit officia.
</p>

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
</style>
