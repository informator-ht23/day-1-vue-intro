<script>
import Footer from './components/footer/Footer.vue';
import Header from './components/header/Header.vue';
import Post from './components/post/Post.vue';

export default {
  components: { 
    Footer,
    Header,
    Post
  }
}
</script>

<template>
  <Header />
  <Post />
  <Footer />
</template>