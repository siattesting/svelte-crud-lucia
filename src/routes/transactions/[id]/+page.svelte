<script>
	export let data;
	$: ({ transaction } = data);
</script>

<h2>{transaction.title}</h2>
<small>{transaction.author.username}</small>
<small>{transaction.author.username}</small>
<p>{transaction.content}</p>
<p>{transaction.partner.title}</p>
<h4>{transaction.amount} XOF</h4>
<p>{transaction.trans_category}</p>
