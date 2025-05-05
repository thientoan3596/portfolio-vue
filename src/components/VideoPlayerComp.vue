<template>
  <div>
    <video
      ref="video"
      @mouseenter="play"
      @mouseleave="pause"
      @click="openModal"
      muted
      loop
      preload="metadata"
      style="width: 100%; height: auto; cursor: pointer"
    >
      <source :src="src" type="video/mp4" />
    </video>

    <Teleport to="body">
      <div
        v-show="isModalOpen"
        class="bg-blur z-999 fixed inset-0 flex items-center justify-center backdrop-blur-sm"
        @click="closeModal"
      >
        <div
          class="h:auto relative w-4/5 bg-white p-0 shadow-lg sm:h-auto sm:w-1/2"
          @click="closeModal"
        >
          <video
            @click="closeModal"
            ref="modalVideo"
            :src="src"
            autoplay
            muted
            loop
            class="h-auto w-full"
          />
          <div
            class="text-dark absolute bottom-4 left-0 right-0 cursor-default text-center"
          >
            Tap/Click to Close
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  src: {
    type: String,
    required: true,
  },
});

const video = ref<HTMLVideoElement | null>(null);
const isModalOpen = ref(false);

const play = () => video.value?.play();
const pause = () => {
  if (video.value) {
    video.value.pause();
    video.value.currentTime = 0;
  }
};
const lockScroll = () => {
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.body.style.overflow = "";
};
const openModal = () => {
  if (video.value) {
    video.value.pause(); // Stop the original video
    video.value.currentTime = 0; // Reset the video to the beginning
  }
  isModalOpen.value = true;

  lockScroll(); // Lock scrolling
};

const closeModal = () => {
  isModalOpen.value = false;
  unlockScroll();
};
</script>

<style scoped>
/* Custom styling for the overlay blur effect */
.bg-blur {
  background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent overlay */
}
</style>
