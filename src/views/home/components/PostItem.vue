<script setup>
import { computed, watch } from "vue";
import { Icon } from "@vicons/utils";
import {
  FavoriteBorderRound,
  FavoriteRound,
  ShareRound,
  MoreHorizRound,
  LocalFireDepartmentRound,
} from "@vicons/material";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  unfold: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(["like"]);

const handleLikeClick = (event) => {
  event.stopPropagation();
  emit("like", props.post);
};

const formatedDate = computed(() => {
  const date = new Date(props.post.add_at);
  return props.unfold
    ? `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    : `${date.getFullYear()}`;
});
</script>

<template>
  <li
    class="list-none bg-white text-gray-700 border-b-4 border-b-gray-200 overflow-hidden transition-br ease-out"
    :class="{ 'rounded-2xl': !unfold||post.type==='sm' }"
  >
    <!-- 封面 -->
    <img
      v-if="post.cover"
      class="w-full max-h-48 sm:max-h-56 object-cover transition-all ease-out duration-500"
      :class="{ 'max-h-screen': unfold }"
      :src="post.cover"
      alt=""
    />
    <!-- 标题 -->
    <div
      class="pt-3 px-4 mb-2 text-emerald-800 transition-all duration-500"
      :class="{ 'text-2xl': unfold }"
    >
      <h2 class="inline-block font-bold">{{ post.title }}</h2>
      <span :class="{ hidden: unfold }"> · </span>
      <span :class="{ block: unfold }">{{ formatedDate }}</span>
    </div>
    <!-- 标签 -->
    <ul
      v-if="post.tags && post.tags.length"
      class="flex flex-wrap gap-x-2 px-4 text-gray-400 text-sm"
      :class="{ 'text-md': unfold }"
    >
      <li
        v-for="tag in post.tags"
        :key="tag"
        class="inline-block px-1.5 bg-emerald-100 text-emerald-700 transition-all duration-500"
        :class="{ 'px-2 py-0.5': unfold }"
      >
        #{{ tag }}
      </li>
    </ul>
    <!-- 正文 -->
    <p v-if="unfold && post.content" class="p-4 text-gray-700">
      {{ post.content }}
    </p>
    <!-- 热度和操作 -->
    <div
      class="flex items-center justify-end gap-x-4 px-4 mt-2 pb-3 text-gray-400"
    >
      <div
        v-if="post.hot"
        class="flex-1 flex items-end gap-x-1 text-emerald-500"
      >
        <Icon size="22">
          <LocalFireDepartmentRound />
        </Icon>
        <span class="text-sm font-bold">{{ post.hot }} 热度</span>
      </div>
      <Icon size="28">
        <MoreHorizRound />
      </Icon>
      <Icon size="22">
        <ShareRound />
      </Icon>
      <Icon
        :class="{ 'text-emerald-700': post.liked }"
        size="24"
        @click="handleLikeClick"
      >
        <FavoriteRound v-if="post.liked" />
        <FavoriteBorderRound v-else />
      </Icon>
    </div>
  </li>
</template>

<style scoped></style>
