import Blog from './Blog.svelte';
import About from './About.svelte';
import Post from './Post.svelte';

export default {
  '/': Blog,
  '/:id': Post,
  '/about': About,
};
