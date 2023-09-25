<script>
	export let data;
	$: ({ username } = data.username);
</script>

<div>
	<h2>{data.todo.title}</h2>
	<p>{data.todo.id}</p>
	<small>author: {data.todo.authorId}</small>
	{#if data.todo.authorId === data.userId}
		<button>Delete</button>
	{/if}

	<button><a href="/todos">Back</a></button>
</div>

<style>
	div {
		padding: 8px;
		border: 2px green solid;
		border-radius: 5px;
		margin: 5px;
	}
</style>
