<script>
  import { push } from 'svelte-spa-router';
  export let id;
</script>

<div
  class="post-item mb-4 cursor-pointer rounded-lg px-2 py-4"
  on:click={() => push(`/${id}`)}>
  <div class="flex items-end justify-between">
    <div class="title text-2xl font-bold">hello world !!!</div>
    <div class="timestamp text-sm">2022-10-24</div>
  </div>
  <div class="tags">
    <ul class="flex text-xs text-cyan-500">
      <li class="mr-5"><a href="#">#tags</a></li>
      <li class="mr-5"><a href="#">#tags2</a></li>
      <li class="mr-5"><a href="#">#tags3</a></li>
      <li class="mr-5"><a href="#">#tags4</a></li>
    </ul>
  </div>
  <div class="content my-4">
    유상민님 안녕하세요 :) 질문하신 내용은 webpack 명령을 실행할 수 없는
    환경에서 발생합니다. 질문하신 내용과 관련한 답변을 최근에 GitHub에
    업로드했습니다. 다음 링크('Webpack 사용 시 자주 묻는 질문') 참고하시고, 혹시
    문제가 해결되지 않으시면 thesecon@gmail.com 으로 바로 연락주세요!
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
