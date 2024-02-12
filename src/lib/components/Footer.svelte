<script lang="ts">
	import Bar from '../assets/BAR.png';

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

<footer>
	<div class="grid grid-flow-row p-4 text-primary md:grid-flow-col md:pt-10">
		<div
			class="mb-2 flex flex-col justify-center gap-8 text-center md:mb-0 md:flex-row md:text-left"
		>
			<img src={Bar} alt="barmates logo" class="hidden h-24 md:block" />
			<div class="mx-auto md:mx-0 md:my-auto">
				<h1 class="flex text-4xl text-secondary md:text-6xl">
					{#each 'BarMates'.split('') as letter}
						<span class="duration-300 ease-in-out hover:text-primary">
							{letter}
						</span>
					{/each}
				</h1>
				<h2 class="text-secondary">Zurich, Switzerland</h2>
			</div>
		</div>
		<div class="grid grid-flow-col justify-center gap-16 text-lg">
			<div>
				<h1>Founders</h1>
				<ul class="font-semibold text-primary">
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
				<h1>Links</h1>
				<ul class="font-semibold text-primary">
					<li>
						<a href="https://instagram.com/barmates_official" target="_blank">Instagram</a>
					</li>
					<li><span class="text-gray-300">Store</span></li>
					<li>
						<a href="https://github.com/nevthereal/barmates-astro" target="_blank">Open Source</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
<div class="border-t border-secondary py-1 text-center font-[Montserrat] font-bold text-primary">
	<a href="https://github.com/nevthereal/barmates">© BarMates 2024</a>
</div>
