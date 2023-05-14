<script setup>
import {useWebsiteStore} from "/src/store/websiteStore"

const websiteStore = useWebsiteStore()
</script>

<template>
  <h1
    class="title inline-block mt-10 sm:mt-20 text-4xl sm:text-5xl text-emerald-800 origin-bottom-right overflow-hidden"
    style="height: 1.3em; line-height: 1.3"
  >
    <div
      class="title__content inline-block"
      style="transform: translateY(-1.3em)"
    >
      <span class="inline-block">{{ websiteStore.info.welcome }}</span><br /><span
        class="inline-block"
        >{{ websiteStore.info.title }}</span
      >
    </div>
  </h1>
</template>

<style scoped>
.title {
  animation: title 2000ms;
}

.title__content {
  animation: title__content 4500ms;
}

@keyframes title {
  0% {
    transform: scale(0.8) translate(calc(21vw), calc(50vh - 12rem)) rotate(0deg);
  }
  25% {
    transform: scale(1.3) translate(calc(21vw), calc(50vh - 12rem)) rotate(0deg);
  }
  50% {
    transform: scale(1.1) translate(calc(21vw), calc(50vh - 12rem)) rotate(0deg);
  }
  75% {
    transform: scale(1.1) translate(calc(21vw), calc(50vh - 12rem)) rotate(0deg);
  }
  100% {
    transform: scale(1) translate(0) rotate(0deg);
  }
}

@keyframes title__content {
  0% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-1.3em);
  }
}
</style>
