<script setup>
import { ref } from "vue";
import PostItem from "./PostItem.vue";

/**
 * @typedef {Object} Post
 * @property {string} _id id
 * @property {string} title 标题
 * @property {string} cover 封面
 * @property {number} add_time 添加时间
 * @property {number} edit_time 编辑时间
 * @property {string[]} tags 标签列表
 * @property {number} hot 热度值
 * @property {boolean} liked 是否喜欢
 */

/**
 * @type {Post[]}
 */
const postList = ref([
  {
    _id: "1",
    title: "这是一个测试的标题",
    cover: "",
    add_time: 1620000000000,
    edit_time: 1620000000000,
    tags: ["测试", "测试2"],
    hot: 100,
    liked: false,
  },
]);

// const initPostList = ()=>{
//   fetch("https://aqxocp.laf.run/post-list")
//     .then(res=>res.json())
//     .then(res=>res.data.posts)
//     .then(posts=>{
//       postList.value = posts
//     })
// }
// initPostList()

const handleLikeClick = (item) => {
  item.liked = !item.liked;
};
</script>

<template>
  <ul class="post-list flex flex-col gap-y-3 my-4 -mx-4 sm:mx-0">
    <PostItem
      v-for="item in postList"
      :key="item._id"
      :post="item"
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
