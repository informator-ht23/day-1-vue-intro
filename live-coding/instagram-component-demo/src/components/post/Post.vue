<script>
  import PostActions from './PostActions.vue';
  import PostInteractions from './PostInteractions.vue';
  import PostPin from './PostPin.vue';
  import PostImage from './PostImage.vue';

  export default {
    components: {
      PostActions,
      PostInteractions,
      PostPin,
      PostImage
    }
  }
</script>

<template>
  <PostActions />
  <PostImage />
  <PostInteractions />
  <PostPin />
</template>