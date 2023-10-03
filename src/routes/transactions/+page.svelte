<script>
	import { enhance } from '$app/forms';

	export let data;
</script>

<h2>Transactions</h2>
<div>
	<p>User id: {data.userId}</p>
	<p>Username: {data.username}</p>
</div>
<hr />

<div>
	<a href="/transactions/create">Create</a>
	<ul class="grid-items">
		{#each data.transactions as transaction (transaction.id)}
			<li class="grid-item">
				<a href="/transactions/{transaction.id}">
					<h3>{transaction.title}</h3>
					<small>{transaction.author.username}</small>
					<p>{transaction.content}</p>
					<p>{transaction.partner.title}</p>
					<h4>{transaction.amount} XOF</h4>
					<p>{transaction.trans_category}</p>
				</a>
			</li>
		{/each}
	</ul>
</div>

<article />

<style>
	.grid-items {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
	.grid-item {
		padding: 10px;
		border: 2px green solid;
		border-radius: 5px;
		margin: 5px;
		list-style: none;
	}
</style>
