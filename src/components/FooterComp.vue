<template>
  <div class="w-full py-2 text-lg dark:bg-dark-500 dark:text-gray-300 light:bg-white">
    <div class="px-4">
      <p class="w-full text-center">© {{ currentYear }} thluon. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const currentYear = ref('2025');
onMounted(() => {
  currentYear.value = new Date().getFullYear().toString(); 
});
</script>
