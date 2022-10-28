<script>
  import { link } from 'svelte-spa-router';

  const menus = [
    {
      href: '/',
      name: 'blog',
    },
    {
      href: '/about',
      name: 'about',
    },
  ];
</script>

<div class="flex justify-between">
  <a href="/#">
    <img src="" alt="" />
    <span>prin.log</span>
  </a>

  <nav>
    <ul class="flex">
      {#each menus as { href, name } (name)}
        <li><a use:link {href}>{name}</a></li>
      {/each}
    </ul>
  </nav>
</div>

<style lang="scss"></style>
