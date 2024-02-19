<script lang="ts">
	import img1 from '$lib/assets/products/1.jpeg';
	import img2 from '$lib/assets/products/2.jpeg';
	import img3 from '$lib/assets/products/3.jpeg';
	import img4 from '$lib/assets/products/4.jpeg';

	const images = [img1, img2, img3, img4];
</script>

<main class="mt-16 mx-8 md:mx-auto md:w-3/4">
	<div class="flex justify-between">
		<div
			class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10"
		>
			{#each images as img}
				<img src={img} alt="" class="snap-start rounded-token" />
			{/each}
		</div>
		<div class="text-right">
			<h1 class="h1">Product title</h1>
			<h3 class="h3">10'000 CHF</h3>
		</div>
	</div>
</main>
