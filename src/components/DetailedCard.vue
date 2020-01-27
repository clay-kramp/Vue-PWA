<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="require(`../assets/${info.title}.jpg`)" alt="Sunset in the mountains" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{info.title}}</div>
      <p class="text-gray-700 text-base">{{info.body}}</p>
    </div>
    <div class="px-6 py-4">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >{{info.tag1}}</span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >{{info.tag2}}</span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
      >{{info.tag3}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
};
</script>

