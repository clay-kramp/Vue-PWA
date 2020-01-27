<template>
  <div class="flex flex-col items-center">
    <Card title="Impressionism" directory="Impressionism.jpg" />
    <Card title="Fauvism" directory="Fauvism.jpg" />
    <Card title="Cubism" directory="Cubism.jpg" />
    <Card title="Futurism" directory="Futurism.jpg" />
    <Card title="Expressionism" directory="Expressionism.jpg" />
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    Card
  }
};
</script>

<style scoped>
</style>