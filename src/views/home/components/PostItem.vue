<script setup>
import { Icon } from "@vicons/utils";
import {
  FavoriteBorderRound,
  FavoriteRound,
  ShareRound,
  MoreHorizRound,
} from "@vicons/material";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["like"]);

const handleLikeClick = () => {
  emit("like", props.post);
};
</script>

<template>
  <li class="bg-white text-gray-700 border-b-2 border-b-gray-200 rounded-2xl overflow-hidden">
    <!-- 封面 -->
    <img v-if="post.cover" class="mb-3" :src="post.cover" alt="" />
    <!-- 标题 -->
    <div class="px-4 pb-2">
      <h2 class="inline-block font-bold">{{ post.title }}</h2>
      · <span>{{ new Date(post.add_time).getFullYear() }}</span>
    </div>
    <!-- 标签 -->
    <ul class="flex flex-wrap gap-x-2 px-4">
      <li v-for="tag in post.tags" :key="tag" class="text-gray-400 text-sm">
        #{{ tag }}
      </li>
    </ul>
    <!-- 热度和操作 -->
    <div class="flex items-center gap-x-4 px-4 pb-3">
      <span class="flex-1 text-gray-400 text-sm font-bold"
        >{{ post.hot }} 热度</span
      >
      <Icon size="28" color="#9CA3AF">
        <MoreHorizRound />
      </Icon>
      <Icon size="22" color="#9CA3AF">
        <ShareRound />
      </Icon>
      <Icon size="24" color="#9CA3AF" @click="handleLikeClick(post)">
        <FavoriteRound v-if="post.liked" />
        <FavoriteBorderRound v-else />
      </Icon>
    </div>
  </li>
</template>

<style scoped></style>
