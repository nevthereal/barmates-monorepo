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
	<div class="grid grid-flow-row p-4 text-secondary md:grid-flow-col md:pt-10">
		<div
			class="mb-2 flex flex-col justify-center gap-4 text-center md:mb-0 md:flex-row md:text-left"
		>
			<img src={Bar} alt="barmates logo" class="hidden h-32 md:block" />
			<div class="mx-auto md:mx-0 md:my-auto">
				<h1 class="flex text-4xl md:text-6xl">
					{#each 'BarMates'.split('') as letter}
						<span class="duration-300 ease-in-out hover:text-primary">
							{letter}
						</span>
					{/each}
				</h1>
				<p class="font-semibold">Zurich, Switzerland</p>
			</div>
		</div>
		<div class="grid grid-flow-col justify-center gap-16 text-lg">
			<div>
				<h1>Founders</h1>
				<ul class="font-semibold text-secondary">
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
				<ul class="font-semibold text-secondary">
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
</footer>
<div class="border-t border-secondary py-1 text-center font-[Montserrat] font-bold text-secondary">
	<a href="https://github.com/nevthereal/barmates">© Neville Brem 2023</a>
</div>
