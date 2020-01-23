<template>
  <div>
    <button
      class="bg-white text-orange-700 font-semibold py-2 px-4 border border-orange-500 rounded"
    >{{text}}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>