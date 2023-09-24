<script>
	export let data;
</script>

<div>
	<h2>{data.todo.title}</h2>
	<p>{data.todo.id}</p>
	<button>Delete</button>
</div>

<style>
	div {
		padding: 20px;
		border: 2px green solid;
		border-radius: 5px;
	}
</style>
