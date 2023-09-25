<script>
	export let data;
</script>

<h2>Todos page</h2>

<div>
	<a href="/todos/create">Create</a>
	<ul class="grid-items">
		{#each data.todos as todo (todo.id)}
			<li class="todo-item">
				<a href="/todos/{todo.id}">
					<p>{todo.title} - {todo.completed}</p>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.grid-items {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
	.todo-item {
		padding: 10px;
		border: 2px green solid;
		border-radius: 5px;
		margin: 5px;
		list-style: none;
	}
</style>
