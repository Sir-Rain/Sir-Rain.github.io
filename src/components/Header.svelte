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

<header>
  <div class="inner mx-auto flex items-end justify-between	py-8">
    <a use:link href="/">
      <img src="" alt="" />
      <span>prin.log</span>
    </a>

    <nav>
      <ul class="flex">
        {#each menus as { href, name } (name)}
          <li class="ml-2"><a use:link {href}>{name}</a></li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  header {
    position: sticky;
    background-color: white;
    top: 0;
    border-bottom: 2px solid rgba(silver, 0.2);
  }

  a {
    transition: 0.4s;

    &:hover {
      color: skyblue;
    }
    span {
      font-size: 32px;
    }
  }
</style>
