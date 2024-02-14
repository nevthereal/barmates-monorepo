<script lang="ts">
	import '../app.pcss';
	import { Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
	import Logo from '$lib/assets/LOGO.png';
	import Bar from '$lib/assets/BAR.png';

	const founders: Founder[] = [
		{
			name: 'Neville',
			link: 'nevillebrem'
		},
		{
			name: 'Marko',
			link: 'marking27'
		},
		{
			name: 'Eljas',
			link: 'elb4s'
		}
	];
</script>

<Drawer />

<nav class="flex h-[10dvh] items-center justify-between p-6 font-[Grandstander] font-black">
	<a
		aria-label="Home"
		href="/"
		class="my-auto w-[6dvh] duration-150 ease-in-out hover:rotate-12 hover:scale-105 active:rotate-0 active:scale-95"
	>
		<img src={Logo} alt="bar" />
	</a>
	<div class="my-auto flex gap-2 text-secondary-500 md:gap-8 md:text-2xl">
		<a class="duration-150 ease-in-out hover:scale-105 active:scale-95" href="/store">Store</a>
		<a class="duration-150 ease-in-out hover:scale-105 active:scale-95" href="/about"> About </a>
	</div>
	<div
		class="my-auto text-3xl font-bold text-secondary-500 duration-150 ease-in-out hover:rotate-12 hover:scale-105 active:rotate-0 active:scale-95 md:text-4xl"
	>
		<a aria-label="Cart" href="/cart">
			<i class="fa-solid fa-cart-shopping"></i>
		</a>
	</div>
</nav>

<slot />
<footer>
	<div class="grid grid-flow-row p-4 text-primary-500 md:grid-flow-col md:pt-10">
		<div
			class="mb-2 flex flex-col justify-center gap-8 text-center md:mb-0 md:flex-row md:text-left"
		>
			<img src={Bar} alt="barmates logo" class="hidden h-24 md:block my-auto" />
			<div class="mx-auto md:mx-0 md:my-auto">
				<h1 class="flex text-4xl text-secondary-500 md:text-6xl font-black">
					{#each 'BarMates'.split('') as letter}
						<span class="duration-300 ease-in-out hover:text-primary-500">
							{letter}
						</span>
					{/each}
				</h1>
				<h2 class="text-secondary-500 font-bold">Zurich, Switzerland</h2>
			</div>
		</div>
		<div class="grid grid-flow-col justify-center gap-16 text-lg">
			<div>
				<h1 class="font-black text-primary-500">Founders</h1>
				<ul class="font-semibold text-primary-400-500-token">
					{#each founders as founder}
						<li>
							<a href={`https://instagram.com/${founder.link}`} target="_blank">
								{founder.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h1 class="font-black text-primary-500">Links</h1>
				<ul class="font-semibold text-primary-400-500-token">
					<li>
						<a href="https://instagram.com/barmates_official" target="_blank">Instagram</a>
					</li>
					<li>
						<a href="https://barmates.netlify.app" target="_blank">Homepage</a>
					</li>
					<li>
						<a href="https://barmates.netlify.app/blog" target="_blank">Blog</a>
					</li>
					<li>
						<a href="https://github.com/nevthereal/barmates-astro" target="_blank">Open Source</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div
		class="border-t border-secondary-500 py-1 text-center font-[Grandstander] font-bold text-secondary-500"
	>
		<a href="https://github.com/nevthereal/barmates">© BarMates 2024</a>
	</div>
</footer>
