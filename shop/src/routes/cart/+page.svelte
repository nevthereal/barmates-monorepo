<script lang="ts">
	import CartItem from '$lib/components/CartItem.svelte';

	export let data;
	const user = data.user;
</script>

<main class="mt-8 w-[50vw] mx-auto">
	<h1 class="h1">Your cart:</h1>
	{#if user}
		<h3 class="my-2 h3">
			Logged in as <span class="font-bold">{user.username}</span> -
			<button
				on:click={async () =>
					await fetch('/api/logout').then(() => {
						location.reload();
					})}>Log out</button
			>
		</h3>
	{:else}
		<a href="/login/github" class="flex gap-2 items-center btn variant-filled-primary mx-auto"
			><i class="fa-brands fa-github"></i>Log in with Github</a
		>
	{/if}
	<div class="flex flex-col gap-4 my-4">
		<CartItem />
		<CartItem />
		<CartItem />
	</div>
	<button disabled={!user} class="btn btn-lg variant-ghost-primary font-bold"
		>{`${user ? 'Checkout' : 'Sign In to checkout'}`}</button
	>
</main>
