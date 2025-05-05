<template>
  <NavigationBarComp />
  <MainView></MainView>
  <FooterComp/>
</template>
<script setup lang="ts">
import MainView from "./views/MainView.vue";
import NavigationBarComp from "./components/NavigationBarComp.vue";
import FooterComp from "./components/FooterComp.vue";
</script>
