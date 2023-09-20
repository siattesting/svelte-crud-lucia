<script>
	import { enhance } from '$app/forms';

	export let data;
</script>

<h2>main</h2>

<h3>Profile</h3>
<p>User id: {data.userId}</p>
<p>Username: {data.username}</p>
<form method="POST" action="?/logout" use:enhance>
	<input type="submit" value="Sign Out." />
</form>

<p>
	<strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Facere sequi reiciendis doloremque,
	labore dolore distinctio repudiandae animi beatae modi corporis iure eveniet ab eos ea neque consectetur
	eum nostrum delectus aperiam reprehenderit, necessitatibus soluta deleniti harum voluptas. Nihil quas
	iusto quia fuga sunt doloremque doloribus voluptatum consectetur laborum dolor corporis, eligendi ratione
	a adipisci illo ut ipsum. Maxime illo at optio, laudantium pariatur quisquam aut, eum neque repudiandae
	iste magnam. Praesentium, ratione nostrum esse quae dolores voluptatibus, accusantium incidunt voluptates
	tempora eum expedita unde a sed inventore molestiae eaque cum.
</p>
