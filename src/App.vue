<template>
  <div id="app">
    <div class="sticky top-0 bg-white">
      <img class="w-64 mx-auto" alt="Vue logo" src="./assets/logo.png" />
    </div>
    <router-view />
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app"
  // components: {
  // HelloWorld
  // }
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
