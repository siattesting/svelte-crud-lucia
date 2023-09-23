<script>
	export let form;
</script>

<div class="main">
	<form method="post">
		<h2>Create Todo</h2>
		{#if form?.missing}<p class="error">A required field is missing</p>{/if}
		<label for="title">Title</label>
		<input type="text" placeholder="Title" name="title" />
		<label for="completed">Completed?</label>
		<input type="checkbox" name="completed" checked value={form?.completed ? true : false} />
		<button type="submit">Create</button>
		<a href="/todos">Cancel</a>
	</form>
</div>

<style>
	.error {
		color: tomato;
	}
</style>
