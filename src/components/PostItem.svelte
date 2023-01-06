<script>
  import { push } from 'svelte-spa-router';
  import {each} from "svelte/internal";
  export let postFile;
  export let idx;

  const attrs = postFile.attributes;

</script>

<div
  class="post-item mb-4 cursor-pointer rounded-lg px-2 py-4"
  on:click={() => push(`/${idx}`)}>
  <div class="flex items-end justify-between">
    <div class="title text-2xl font-bold">{attrs.title}</div>
    <div class="timestamp text-sm">{attrs.timestamp}</div>
  </div>
  <div class="tags">
    <ul class="flex text-xs text-cyan-500">
      {#each attrs.tags as tag (tag)}
        <li class="mr-5"><a href="#">{tag}</a></li>
      {/each}
    </ul>
  </div>
  <div class="content my-4">
    {attrs.description}
  </div>
</div>

<style lang="scss">
  .post-item {
    background-color: rgba(silver, 0.1);
    transition: 0.4s;

    &:hover {
      background-color: lighten(silver, 10%);
    }
  }

  .content {
    min-height: 50px;
  }
</style>
