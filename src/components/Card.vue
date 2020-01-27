<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg text-center">
    <img class="w-full" :src="require(`../assets/${directory}`)" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    directory: String
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.image);
  }
};
</script>

