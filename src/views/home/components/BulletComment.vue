<script setup>
import { ref } from "vue";
import { useWebsiteStore } from "/src/store/websiteStore";
import { watch } from "vue";

const websiteStore = useWebsiteStore();
websiteStore.fetchComments();

const bullectList = ref([]);
watch(
  () => websiteStore.comments,
  (comments) => {
    bullectList.value = comments.map((item) => ({
      ...item,
      left: 100,
      top: Math.random() * 90,
      speed: Math.random() * 0.1 + 0.2,
      delay: Math.random() * 1000,
    }));
  }
);

const move = () => {
  bullectList.value.forEach((item) => {
    if(item.delay > 0) {
      item.delay -= 1;
      return;
    }
    item.left -= item.speed;
    if (item.left < -100) {
      item.speed = Math.random() * 0.1 + 0.3;
      item.left = 100;
      item.top = Math.random() * 90;
      item.delay= Math.random() * 100
    }
  });
  requestAnimationFrame(move);
};

requestAnimationFrame(move);
</script>

<template>
  <div class="relative h-56 overflow-x-hidden">
    <span
      v-for="item in bullectList"
      :key="item.id"
      class="absolute inline-block whitespace-nowrap px-2 bg-emerald-800 text-emerald-100"
      :style="{ top: item.top + '%', left: item.left + '%' }"
      >{{ item.content }}</span
    >
  </div>
</template>

<style scoped></style>
