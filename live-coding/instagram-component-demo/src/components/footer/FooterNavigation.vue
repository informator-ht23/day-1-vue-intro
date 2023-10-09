<script>
import FooterNavAccount from './FooterNavAccount.vue';
import FooterNavFavourites from './FooterNavFavourites.vue';
import FooterNavHome from './FooterNavHome.vue';
import FooterNavSearch from './FooterNavSearch.vue';

export default {
  components: {
    FooterNavAccount,
    FooterNavFavourites,
    FooterNavHome,
    FooterNavSearch
  }
}

</script>

<template>
  <FooterNavHome />
  <FooterNavSearch />
  <FooterNavFavourites />
  <FooterNavAccount />
</template>