<script setup>
import { ref } from "vue";
import PostItem from "./PostItem.vue";
import postApi from "/src/api/post";
import { useRouter } from "vue-router";
import PostDetails from "./PostDetails.vue";
import { reactive } from "vue";

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

const initPostList = () => {
  postApi.list().then((posts) => {
    postList.value = posts.map((post) => ({
      ...post,
      unfold: false,
    }));
  });
};
initPostList();

const currentPost = reactive({
  post: null,
  position: {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  },
});

const handleItemClick = (event, item) => {
  // const router = useRouter();
  // router.push(`/post/${item._id}`);
  currentPost.post = item;
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  // 获取当前点击的元素的顶部距离父元素顶部的距离
  currentPost.position = {
    top: rect.top,
    left: 0,
    width: rect.width,
    height: rect.height,
  }
};

const handleLikeClick = (item) => {
  item.liked = !item.liked;
};

const handlePostDetailsClose = () => {
  currentPost.post = null;
};
</script>

<template>
  <ul class="post-list flex flex-col gap-y-3 my-4">
    <PostItem
      v-for="item in postList"
      :key="item._id"
      :post="item"
      @click="handleItemClick($event, item)"
      @like="handleLikeClick"
      :class="{'opacity-0': currentPost.post && currentPost.post._id === item._id}"
    />
  </ul>
  <PostDetails
    :post="currentPost.post"
    :position="currentPost.position"
    @close="handlePostDetailsClose"
  />
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
