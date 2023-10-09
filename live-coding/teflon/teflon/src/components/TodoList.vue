<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      title: "Todo list title",
      items: [
        "Bananer",
        "Kaffe",
        "Keso",
        "Rolig keps med djurmotiv"
      ]
    }
  }
}
</script>

<template>
  <h3>{{ this.title }}</h3>
  <TodoItem  v-for="item in this.items" :text="item"/>
</template>