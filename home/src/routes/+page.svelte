<div class="flex h-[90dvh] w-screen items-center justify-center bg-tertiary-500">
	<div>
		<h1 class="text-9xl text-secondary-500 font-black">
			{#each 'BarMates' as char}
				<span class="duration-200 ease-in-out hover:text-primary-500">{char}</span>
			{/each}
		</h1>
		<div class="text-center">
			<p class="text-2xl font-extrabold text-primary-500">By athletes, for athletes</p>
			<button
				class="group btn variant-filled-secondary mt-4 font-[Grandstander] text-xl font-black text-white hover:btn-primary-500"
				><span class="duration-200 ease-in-out group-active:translate-y-2">Yum!</span></button
			>
		</div>
	</div>
</div>
