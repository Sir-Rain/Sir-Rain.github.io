<script>
  import PostItem from '~/components/PostItem.svelte';

  let idx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

{#each idx as id (id)}
  <PostItem {id} />
{/each}
