<template>
  <div
    class="h-25 w-25 flex justify-center rounded bg-white"
    v-tooltip.bottom="tooltip"
  >
    <img :src="image" :alt="tooltip" />
  </div>
</template>
<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  tooltip: {
    type: String,
    required: true,
  },
  transparent: {
    type: Boolean,
    default: false,
  },
});
</script>
