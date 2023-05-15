<script setup>
import Title from "./components/Title.vue";
import ProjectTable from "./components/ProjectsTable.vue";
import PostList from "./components/PostList.vue";
import Footer from "./components/Footer.vue";
import { useWebsiteStore } from "/src/store/websiteStore";
import BulletComment from "./components/BulletComment.vue";

const websiteStore = useWebsiteStore();
</script>

<template>
  <article class="px-4 sm:px-0">
    <!-- 标题 -->
    <Title />
    <br />

    <!-- 副标题 -->
    <p
      class="sub-title inline-block mt-0 sm:mt-1 px-2 py-0.5 bg-emerald-900 text-emerald-200 text-md"
    >
      {{ websiteStore.info.sub_title }}
    </p>

    <!-- 弹幕 -->
    <BulletComment class="mt-6 sm:mt-8" />

    <!-- 仓库 -->
    <ProjectTable class="mt-6 sm:mt-8" />

    <!-- 帖子列表 -->
    <PostList />
  </article>
  <Footer class="lazy-show" />
</template>

<style scoped>
.sub-title {
  animation: sub-title 3000ms;
}

.lazy-show {
  animation: lazy-show 4500ms;
}

@keyframes sub-title {
  0% {
    opacity: 0;
    transform: translate(0, -100%);
  }
  75% {
    opacity: 0;
    transform: translate(0, -100%);
  }
  100% {
    opacity: 1;
    translate: translate(0, 0);
  }
}

@keyframes lazy-show {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
