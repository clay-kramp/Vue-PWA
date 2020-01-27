<template>
  <div class="pt-3">
    <router-link to="/styles">Explore Art Styles</router-link>
    <br />
    <router-link to="/articles">Explore Articles</router-link>
    <br />
    <router-link to="/subscribe">Join a Subscription</router-link>
  </div>
</template>

<script>
// import Card from "./Card.vue";
// import Button from "./Button.vue";
export default {
  components: {
    // Button
    // Card
  },
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
