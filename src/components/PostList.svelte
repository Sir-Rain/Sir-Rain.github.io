<script>
  import PostItem from '~/components/PostItem.svelte';
  import {postFileList} from "../store.js";

</script>

{#each $postFileList as postFile, idx (idx)}
  <PostItem {postFile} {idx} />
{/each}
