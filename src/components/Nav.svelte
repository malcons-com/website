<script lang="ts">
  import Logo from '/images/malcons-no-bg.png';
  import { Hamburger } from 'svelte-hamburgers';
  import Menu from './Menu.svelte';

  let open;
</script>

<nav
  class="w-full text-white bg-gradient-to-br from-indigo-900 via-indigo-800 to-sky-500 sticky top-0 z-10 px-8 lg:px-24 xl:px-48"
>
  <div class="grid grid-cols-2 md:grid-cols-12 md:gap-8">
    <div class="md:col-span-3 flex items-center justify-between">
      <img src={Logo} alt="Malcons" class="h-36" />
    </div>
    <div class="md:col-span-9 items-center hidden sm:flex justify-end flex-row">
      <a href="/" class="mx-4 text-md">Home</a>
      <a href="/#about" class="mx-4 text-md">About</a>
      <a href="/#services" class="mx-4 text-md">Services</a>
      <a href="/#team" class="mx-4 text-md">Team</a>
      <a href="/#contact" class="ml-4 text-md">Contact</a>
    </div>
    <div class="sm:hidden flex justify-end">
      <Hamburger bind:open --color="white" />
      <Menu bind:open />
    </div>
  </div>
</nav>
