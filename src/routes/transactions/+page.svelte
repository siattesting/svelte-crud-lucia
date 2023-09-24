<script>
	import { enhance } from '$app/forms';

	export let data;
</script>

<h2>Transactions</h2>
<div>
	<p>User id: {data.userId}</p>
	<p>Username: {data.username}</p>
</div>
<p>
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, inventore? Neque nobis dolore
	reprehenderit officia.
</p>

<article />

<h2>New transaction</h2>
<div>
	<form action="" method="POST" use:enhance>
		<label for="title">
			<input type="text" name="title" placeholder="Title" />
		</label>
		<label for="content">
			<textara name="content" placeholder="Description" rows={5} />
		</label>
	</form>
</div>
