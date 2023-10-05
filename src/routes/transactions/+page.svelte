<script>
	export let data;
	let tableview = false;
</script>

<h2>Transactions</h2>
<div>
	<p>User id: {data.userId}</p>
	<p>Username: {data.username}</p>
</div>
<hr />

<button on:click={() => (tableview = !tableview)}>
	{#if tableview}
		Switch to Grid View...
	{:else}
		Switch to Table View
	{/if}
</button>
{#if !tableview}
	<div>
		<a href="/transactions/create">Create</a>
		<ul class="grid-items">
			{#each data.mytransactions as transaction (transaction.id)}
				<li class="grid-item">
					<a href="/transactions/{transaction.id}"><h3>{transaction.title}</h3></a>
					<small>{transaction.author.username}</small>
					<p>{transaction.content}</p>
					<p>{transaction.partner.title}</p>
					<h4>{transaction.amount} XOF</h4>
					<p>{transaction.trans_category}</p>
				</li>
			{/each}
		</ul>
	</div>
{/if}

{#if tableview}
	<hr />
	<h2>All transactions</h2>
	<table>
		<thead>
			<th>ID</th>
			<th>Title</th>
			<th>Amount</th>
			<th>Partner</th>
			<th>Category</th>
			<th>Author</th>
		</thead>
		<tbody>
			{#each data.mytransactions as tran (tran.id)}
				<tr>
					<td>{tran.id}</td>
					<td><a href="/transactions/{tran.id}">{tran.title}</a></td>
					<td>{tran.amount}</td>
					<td>{tran.partner.title}</td>
					<td>{tran.trans_category}</td>
					<td>{tran.author.username}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

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
