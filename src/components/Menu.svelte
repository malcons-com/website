<script>
  import { fly, scale } from 'svelte/transition';
  import { quadOut } from 'svelte/easing';

const menuItems= [
    { title: 'Home', link: '/'},
    { title: 'About', link: '/#about' },
    { title: 'Services', link: '/#services' },
    { title: 'Team', link: '/#team' },
    { title: 'Contact', link: '/#contact' }
];

  export let open;
</script>

{#if open}
  <div class="menu">
    {#each menuItems as link, i}
      <a href={link.link} transition:fly={{ y: -15, delay: 50 * i }}>
        {link.title}
      </a>
    {/each}
  </div>

  <div
    class="bar"
    transition:scale={{ duration: 500, easing: quadOut, opacity: 1 }}
  />
{/if}

<style>
  .menu {
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.15em;
    padding: 1em;
    color: #eef;
  }
  p {
    cursor: pointer;
    width: max-content;
    margin: 1rem auto;
  }
  p:hover {
    text-decoration: underline;
  }
</style>
