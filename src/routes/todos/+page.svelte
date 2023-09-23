<script>
	export let data;
</script>

<h2>Todos page</h2>

<div>
	<ul />
	{#each data.todos as todo (todo.id)}
		<li>{todo.title} - {todo.completed}</li>
	{/each}
	<a href="/todos/create">Create</a>
</div>
