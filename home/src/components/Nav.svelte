<script lang="ts">
  import Logo from "../assets/LOGO.png";
</script>

<header
  class="flex justify-between p-6 bg-white uppercase font-black font-[Grandstander]"
>
  <a
    href="/"
    class="w-[7dvh] my-auto hover:scale-105 active:scale-95 ease-in-out duration-150 hover:rotate-12 active:rotate-0"
  >
    <img src={Logo.src} alt="bar" />
  </a>
  <div class="md:text-2xl text-secondary flex gap-2 md:gap-8 my-auto">
    <a
      class="hover:scale-105 active:scale-95 ease-in-out duration-150"
      href="/blog"
    >
      Blog
    </a>
    <a
      class="hover:scale-105 active:scale-95 ease-in-out duration-150"
      href="/mission"
    >
      Mission
    </a>
  </div>
  <div
    class="text-gray-300 cursor-not-allowed text-3xl my-auto hover:scale-105 active:scale-95 ease-in-out duration-150 hover:rotate-12 active:rotate-0"
  >
    <i class="fa-solid fa-shop"></i>
  </div>
</header>
