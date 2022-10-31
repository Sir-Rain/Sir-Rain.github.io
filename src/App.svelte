<script>
  import Header from '~/components/Header.svelte';
  import Router from 'svelte-spa-router';
  import layout from '~/layout';
</script>

<Header />
<Router routes={layout} />
