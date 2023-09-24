<script>
	export let data;
</script>

<div>
	<h2>{data.todo.title}</h2>
	<p>{data.todo.id}</p>
	<small>author: {data.todo.authorId}</small>
	<button>Delete</button>
	<button><a href="/todos">Back</a></button>
</div>

<style>
	div {
		padding: 10px;
		border: 2px green solid;
		border-radius: 5px;
		margin: 5px;
	}
</style>
