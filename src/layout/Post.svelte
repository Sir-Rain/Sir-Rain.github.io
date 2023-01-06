<script>
  import {postFileList} from "../store.js";
  export let params;

  const index = Number(params.id);

  const post = $postFileList[index];


</script>

<div class="post-head text-center">
  <div class="title pt-4 pb-8 text-3xl">이것은 제목입니다.</div>
  <div class="timestamp text-sm">2022-12-20</div>
</div>

<br>
<div class="markdown-body">
  {@html post.html}
</div>

<style lang="scss">
</style>
