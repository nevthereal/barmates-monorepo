<script lang="ts">
  import Bar from "../assets/BAR.png";

  const founders: founder[] = [
    {
      name: "Neville",
      link: "nevillebrem",
    },
    {
      name: "Marko",
      link: "marking27",
    },
    {
      name: "Eljas",
      link: "elb4s",
    },
  ];
</script>

<footer>
  <div class="grid md:grid-flow-col grid-flow-row text-primary p-4 md:pt-10">
    <div
      class="text-center md:text-left flex flex-col md:flex-row gap-8 justify-center mb-2 md:mb-0"
    >
      <img src={Bar.src} alt="barmates logo" class="h-24 hidden md:block" />
      <div class="mx-auto md:mx-0 md:my-auto">
        <h1 class="flex text-4xl md:text-6xl text-secondary">
          {#each "BarMates".split("") as letter}
            <span class="hover:text-primary duration-300 ease-in-out">
              {letter}
            </span>
          {/each}
        </h1>
        <h2 class="text-secondary">Zurich, Switzerland</h2>
      </div>
    </div>
    <div class="grid grid-flow-col text-lg justify-center gap-16">
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
            <a href="https://instagram.com/barmates_official" target="_blank"
              >Instagram</a
            >
          </li>
          <li><span class="text-gray-300">Store</span></li>
          <li>
            <a
              href="https://github.com/nevthereal/barmates-astro"
              target="_blank">Open Source</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<div
  class="text-center py-1 border-t border-secondary font-bold font-[Montserrat] text-secondary"
>
  <a href="https://github.com/nevthereal/barmates">© BarMates 2024</a>
</div>
