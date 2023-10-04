<script>
	export let data;
	$: ({ partner } = data);
</script>

<div>
	<h2>{partner.title}</h2>
	<p>{partner.content}</p>
	<small>{partner.id}</small>
</div>
<div>
	<ul>
		<li>todo: list of transactions with this partner</li>
	</ul>
</div>
