<script>
	import { enhance } from '$app/forms';

	export let form;
</script>

<div class="main">
	<form method="post" use:enhance>
		<h2>Create Todo</h2>
		{#if form?.missing}<p class="error">A required field is missing</p>{/if}
		<label for="title" class="field">
			<span class="label-text">Title</span>
			<input type="text" placeholder="Title" name="title" value={form?.title ?? ''} />
		</label>
		<button type="submit" class="field">Create</button>

		<a href="/todos" class="field">Cancel</a>
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
