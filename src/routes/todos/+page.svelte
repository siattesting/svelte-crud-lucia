<script>
	export let data;
	$: ({ todos } = data.todos);
	if (todos) {
		console.log(todos);
	}
</script>

<h2>Todos page</h2>

<div>
	<ul />
	{#each todos as todo (todo.id)}
		<li>{todo.title} - {todo.completed}</li>
	{/each}
	<a href="./create">Create</a>
</div>
