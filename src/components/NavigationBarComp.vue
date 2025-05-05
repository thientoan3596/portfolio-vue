<template>
  <div
    class="sticky top-0 z-10 w-full py-2 text-lg dark:bg-dark-500 dark:text-gray-300 light:bg-white"
  >
    <!-- <div class="w-full py-2 text-lg dark:bg-dark-500 dark:text-gray-300"> -->
    <div class="relative flex items-center justify-between px-4">
      <div class="text-2xl font-bold uppercase">Toan Luong</div>
      <span class="mx-2 block cursor-pointer text-3xl md:hidden">
        <span ref="toggler" class="pi pi-bars" @click="toggleMenu"></span>
      </span>
      <ul
        ref="menuList"
        class="absolute left-0 z-[-1] w-full py-4 pl-7 opacity-0 md:static md:z-auto md:flex md:w-auto md:items-center md:py-0 md:pl-0 md:opacity-100 dark:bg-dark-500 dark:text-gray-300"
      >
        <li
          class="mx-2 my-6 md:my-0 hover:dark:text-gray-100 hover:light:font-semibold"
        >
          <a href="#about-me" class="text-xl uppercase">About</a>
        </li>
        <li
          class="mx-2 my-6 md:my-0 hover:dark:text-gray-100 hover:light:font-semibold"
        >
          <a
            href="https://drive.google.com/file/d/1W-gauF7PW1AY6_Fp0ZgU5WfHOqTEsq_h/view?usp=drive_link"
            download
            class="text-xl uppercase"
            >Resume</a
          >
        </li>
        <li
          class="mx-2 my-6 md:my-0 hover:dark:text-gray-100 hover:light:font-semibold"
        >
          <a href="#projects" class="text-xl uppercase">Projects</a>
        </li>
        <li
          class="mx-2 my-6 md:my-0 hover:dark:text-gray-100 hover:light:font-semibold"
        >
          <a href="#contacts" class="text-xl uppercase">Contact</a>
        </li>
        <li
          class="mx-2 my-6 hidden md:my-0 md:block hover:dark:text-gray-100 hover:light:font-semibold"
        >
          <button class="text-xl" @click="toggleMode">
            <span class="pi pi-sun"></span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const menuList = ref();
const toggler = ref();
const toggleMenu = () => {
  if (menuList.value) {
    menuList.value.classList.toggle("top-[30px]");
    menuList.value.classList.toggle("opacity-100");
  }
  if (toggler.value) {
    toggler.value.classList.toggle("pi-bars");
    toggler.value.classList.toggle("pi-times");
  }
};
const toggleMode = () => {
  document.documentElement.classList.toggle("dark");
  document.documentElement.classList.toggle("light");
};
</script>
