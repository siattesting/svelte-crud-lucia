<script>
	import { enhance } from '$app/forms';

	export let data;
	export let form;
	const categories = ['OUTFLOW', 'INFLOW'];
	const partners = data.partners;

	// USE enhance
	// Create a laoding state
	let loading = false;
	function add(input) {
		// befor the form is submitted, set the loading state to true
		loading = true;
		return async ({ update }) => {
			// Update the loading to false after the form is submitted
			loading = false;
			await update();
		};
	}
</script>

<h2>New transaction</h2>
<div>
	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}
	<form action="?/create" method="POST" use:enhance={add}>
		<label for="title" class="field">
			<span class="label-text">Title</span>
			<input type="text" name="title" placeholder="Title" value={form?.title ?? ''} />
		</label>
		<label for="content" class="field">
			<span class="label-text">Content</span>
			<textarea name="content" placeholder="Description" rows={5} value={form?.content ?? ''} />
		</label>
		<label for="amount" class="field">
			<span class="label-text">Amount</span>
			<input type="number" name="amount" min="0" value={form?.amount ?? ''} />
		</label>
		<label for="partnerId" class="field">
			<span class="label-text">Partner</span>
			<select name="partnerId">
				{#each partners as partner}
					<option value={partner.id}>{partner.title}</option>
				{/each}
			</select>
		</label>
		<label for="category" class="field">
			<span class="label-text">Category:</span>
			<select name="category">
				{#each categories as category}
					<option value={category}>{category}</option>
				{/each}
			</select>
		</label>
		<button type="submit" class="field" disabled={loading}>
			{#if loading}
				Creating...
			{:else}
				Create Transaction
			{/if}
		</button>
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
