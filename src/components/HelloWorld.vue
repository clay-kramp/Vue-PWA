<template>
  <div class="pt-3">
    <h1 class="py-3">{{ msg }}</h1>
    <div class="flex flex-col text-left">
      <div class="bg-orange-100 py-6 px-4 text-gray-900">To-Do List</div>
      <div class="bg-orange-200 py-6 px-4 text-gray-900">Communication</div>
      <div class="bg-orange-300 py-6 px-4 text-gray-900">Upcoming Events</div>
      <div class="bg-orange-400 py-6 px-4 text-gray-900">Trash Days</div>
      <div class="bg-orange-500 py-6 px-4 text-gray-900">
        One-Click Dishwasher
        <Button class="pt-5 text-center" text="Start Laundry!" />
      </div>
      <div class="bg-orange-600 py-6 px-4 text-gray-200">Feature</div>
      <div class="bg-orange-700 py-6 px-4 text-gray-200">Feature</div>
      <div class="bg-orange-800 py-6 px-4 text-gray-200">Feature</div>
      <div class="bg-orange-900 py-6 px-4 text-gray-100">Feature</div>
      <div class="bg-orange-100 py-2 flex flex-row justify-around">
        <div>
          <img class="w-10" alt="Vue logo" src="../assets/logo.png" />
        </div>
        <div>
          <img class="w-10" alt="Vue logo" src="../assets/logo.png" />
        </div>
        <div>
          <img class="w-10" alt="Vue logo" src="../assets/logo.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: {
    Button
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
