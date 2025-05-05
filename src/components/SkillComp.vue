<template>
 <div class="flex h-25 w-25 justify-center rounded bg-white" v-tooltip.bottom="tooltip"  >
    <img :src="resolvedSrc" :alt="tooltip" ></div>
 </template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const resolvedSrc = ref('');
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  tooltip:{
    type: String,
    required: true
  },
  transparent:{
    type:Boolean,
    default:false,
  }
})

onMounted(() => {
  resolvedSrc.value = new URL(props.image.replace('@', '/src'), import.meta.url).href;
});
</script>
