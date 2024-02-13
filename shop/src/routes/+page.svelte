<div class="flex h-[90dvh] w-screen items-center justify-center bg-accent">
	<div>
		<h1 class="text-9xl text-secondary">
			{#each 'BarMates' as char}
				<span class="duration-200 ease-in-out hover:text-primary">{char}</span>
			{/each}
		</h1>
		<div class="text-center">
			<p class="text-2xl font-extrabold text-primary">By athletes, for athletes</p>
			<button
				class="group btn btn-secondary mt-4 font-[Grandstander] text-xl font-black text-white hover:btn-primary"
				><span class="duration-200 ease-in-out group-active:translate-y-2">Yum!</span></button
			>
		</div>
	</div>
</div>
