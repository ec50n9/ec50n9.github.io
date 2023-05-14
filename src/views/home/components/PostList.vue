<script setup>
import { ref } from "vue";
import PostItem from "./PostItem.vue";
import postApi from "/src/api/post";
import {useRouter} from "vue-router"

/**
 * @typedef {Object} Post
 * @property {string} _id id
 * @property {string} title 标题
 * @property {string} cover 封面
 * @property {number} add_at 添加时间
 * @property {number} edit_at 编辑时间
 * @property {string[]} tags 标签列表
 * @property {number} hot 热度值
 * @property {boolean} liked 是否喜欢
 */

/**
 * @type {Post[]}
 */
const postList = ref([]);

const initPostList = ()=>{
  postApi.list().then(posts=>{
    postList.value = posts
  })
}
initPostList()

const router = useRouter();

const handleItemClick = (item) => {
  router.push(`/post/${item._id}`);
};

const handleLikeClick = (item) => {
  item.liked = !item.liked;
};
</script>

<template>
  <ul class="post-list flex flex-col gap-y-3 my-4">
    <PostItem
      v-for="item in postList"
      :key="item._id"
      :post="item"
      @click="handleItemClick(item)"
      @like="handleLikeClick"/>
  </ul>
</template>

<style scoped>
.post-list {
  animation: post-list 3000ms;
}

@keyframes post-list {
  0% {
    opacity: 0;
    transform: translate(0, 50%);
  }
  70% {
    opacity: 0;
    transform: translate(0, 50%);
  }
  100% {
    opacity: 1;
    translate: translate(0, 0);
  }
}
</style>
