<script>
	import { enhance } from '$app/forms';
</script>

<h1>Sign up</h1>
<form method="POST" use:enhance>
	<label for="username" class="field">
		<span class="label-text">Username</span>
		<input type="text" name="username" id="username" placeholder="Username..." />
	</label>
	<label for="password" class="field">
		<span class="label-text">Password</span>
		<input type="password" name="password" id="password" placeholder="Password..." />
	</label>
	<input type="submit" value="Submit" />
</form>
<a href="/login">Sign in</a>

<style>
	form {
		display: grid;
		grid-template-columns: max-content 1fr;
		column-gap: 1em;
		margin-bottom: 1em;
	}
	.field {
		display: grid;
		grid-column: span 2;
		grid: inherit;
		grid-template-columns: subgrid;
		margin-bottom: 1em;
	}
</style>
