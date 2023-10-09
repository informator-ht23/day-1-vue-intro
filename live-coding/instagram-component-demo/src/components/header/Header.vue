<script>
import HeaderFeed from './HeaderFeed.vue';
import HeaderInteractions from './HeaderInteractions.vue';
import HeaderLogotype from './HeaderLogotype.vue';

export default {
  components: {
    HeaderFeed,
    HeaderInteractions,
    HeaderLogotype
  }
}
</script>

<template>
  <HeaderInteractions />
  <HeaderLogotype />
  <HeaderFeed />
</template>