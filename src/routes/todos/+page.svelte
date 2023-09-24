<script>
	export let data;
</script>

<h2>Todos page</h2>

<div>
	<a href="/todos/create">Create</a>
	<ul />
	{#each data.todos as todo (todo.id)}
		<div class="todo-item">
			<a href="/todos/{todo.id}">
				<li>{todo.title} - {todo.completed}</li>
			</a>
		</div>
	{/each}
</div>

<style>
	.todo-item {
		padding: 15px;
		border: 2px green solid;
		border-radius: 5px;
		margin: 5px;
	}
</style>
