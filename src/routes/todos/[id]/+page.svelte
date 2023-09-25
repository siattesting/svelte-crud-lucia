<script>
	import { enhance } from '$app/forms';

	export let data;
	$: ({ todo } = data.todo);
	$: ({ username } = data.username);
	let editing = false;
</script>

{#if !editing}
	<div>
		<h2>{data.todo.title}</h2>
		<p>{data.todo.id}</p>
		<small>author: {data.todo.authorId}</small>
		{#if data.todo.authorId === data.userId}
			<button>Delete</button>
			<button on:click={() => (editing = !editing)}>Edit</button>
		{/if}

		<button><a href="/todos">Back</a></button>
	</div>
{:else}
	<form method="POST" action="?/updateTodo" use:enhance>
		<h3>Editing: {data.todo.title}</h3>
		<label for="title">Title:</label>

		<input type="text" id="title" name="title" value={data.todo.title} />
		<button type="submit">Update Todo</button>
		<button on:click={() => (editing = !editing)}>Cancel Update</button>
	</form>
{/if}

<style>
	div {
		padding: 8px;
		border: 2px green solid;
		border-radius: 5px;
		margin: 5px;
	}
</style>
