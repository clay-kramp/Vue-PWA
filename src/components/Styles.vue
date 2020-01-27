<template>
  <div id="app">
    <Card title="Impressionism" directory="Impressionism.jpg" />
    <Card title="Fauvism" directory="Fauvism.jpeg" />
    <Card title="Cubism" directory="Cubism.jpg" />
    <Card title="Futurism" directory="Futurism.jpg" />
    <Card title="Expressionism" directory="Expressionism.jpg" />
    <!-- <detailed-card /> -->
  </div>
</template>

<script>
// import DetailedCard from "./DetailedCard.vue";
import Card from "./Card.vue";
export default {
  name: "app",
  components: {
    // DetailedCard
    Card
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
