<script>
	import { enhance } from '$app/forms';

	export let data;
	$: ({ todos } = data);
</script>

<h2>Todos page</h2>

{#if todos.length < 1}
	<p>No todos to display</p>
{/if}

<div>
	<ul />
	{#each todos as todo (todo.id)}
		<li>{todo.title} - {todo.completed}</li>
	{/each}
</div>
