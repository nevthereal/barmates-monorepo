<script lang="ts">
	import Logo from '../assets/LOGO.png';
</script>

<header
	class="flex h-[10dvh] items-center justify-between bg-white p-6 font-[Grandstander] font-black"
>
	<a
		href="/"
		class="my-auto w-[6dvh] duration-150 ease-in-out hover:rotate-12 hover:scale-105 active:rotate-0 active:scale-95"
	>
		<img src={Logo} alt="bar" />
	</a>
	<div class="my-auto flex gap-2 text-secondary-500 md:gap-8 md:text-2xl">
		<a class="duration-150 ease-in-out hover:scale-105 active:scale-95" href="/blog">Store</a>
		<a class="duration-150 ease-in-out hover:scale-105 active:scale-95" href="/mission"> About </a>
	</div>
	<div
		class="my-auto cursor-not-allowed text-3xl font-bold text-secondary-500 duration-150 ease-in-out hover:rotate-12 hover:scale-105 active:rotate-0 active:scale-95 md:text-4xl"
	>
		<i class="fa-solid fa-cart-shopping"></i>
	</div>
</header>
