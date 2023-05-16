<script setup lang="ts">
defineProps({
  containerHeight: {
    type: String,
    default: '',
  },
  bannerHeight: {
    type: String,
    default: 'h-30',
  },
})
</script>

<template>
  <div
    class="bg-lightGray rounded-lg shadow-lg"
    :class="containerHeight"
  >
    <div
      class="p-4 w-full bg-gray-300 animate-pulse rounded-lg"
      :class="bannerHeight"
    />
  </div>
</template>
