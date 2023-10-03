<script>
	export let data;
	export let form;
	const categories = ['OUTFLOW', 'INFLOW'];
	const partners = data.partners;
</script>

<h2>New transaction</h2>
<div>
	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}
	<form action="?/create" method="POST" use:enhance>
		<label for="title" class="field">
			<span class="label-text">Title</span>
			<input type="text" name="title" placeholder="Title" />
		</label>
		<label for="content" class="field">
			<span class="label-text">Content</span>
			<textarea name="content" placeholder="Description" rows={5} />
		</label>
		<label for="amount" class="field">
			<span class="label-text">Amount</span>
			<input type="number" name="amount" min="0" />
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
