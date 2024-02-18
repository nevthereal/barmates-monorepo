<script lang="ts">
	import img1 from '$lib/assets/products/1.jpeg';
</script>

<div class="card p-6 flex items-center justify-between">
	<div class="flex gap-8 items-center">
		<img src={img1} alt="product" class="w-48 rounded-token" />
		<div>
			<h1 class="h1 font-bold">Product title</h1>
			<p class="font-medium">1000 CHF</p>
		</div>
	</div>
	<div>
		<div class="btn-group variant-ringed-surface">
			<button><i class="fa-solid fa-plus"></i></button>
			<button><i class="fa-solid fa-minus"></i></button>
		</div>
		<button class="btn variant-filled-error"><i class="fa-solid fa-trash"></i></button>
	</div>
</div>
