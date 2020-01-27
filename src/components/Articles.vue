<template>
  <div class="flex flex-col items-center">
    <detailed-card :info="article1" />
    <router-link to="/subscribe" class="pt-4">
      <Button text="Subscribe to read more" />
    </router-link>
  </div>
</template>

<script>
import DetailedCard from "./DetailedCard.vue";
import Button from "./Button.vue";
export default {
  components: {
    DetailedCard,
    Button
  },
  computed: {
    article1() {
      return {
        title: "A Whole Planet on Modern Art",
        body:
          "When it comes to Modern art, exactly whose Modernism is it?  In recent years, a newer, so-called transnational approach to telling this story has emerged. Its practitioners have been making room in 20th-century art’s familiar narrative, which usually focuses on Western Europe and North America, for lesser-known artists, movements, ideas and events from other parts of the world.",
        tag1: "19th Century",
        tag2: "Monet",
        tag3: "Renoir"
      };
    }
  }
};
</script>

<style scoped>
</style>