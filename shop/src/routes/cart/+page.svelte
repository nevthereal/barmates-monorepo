<script lang="ts">
	export let data;
	const user = data.user;
	console.log(user);
</script>

<main class="mx-16 mt-16">
	<h1 class="h1">Your cart:</h1>
	{#if user}
		<p>Logged in as <span class="font-bold">{user.username}</span></p>
	{/if}
</main>
