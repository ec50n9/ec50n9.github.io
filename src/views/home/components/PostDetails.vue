<script setup>
import { onMounted, ref } from "vue";
import PostItem from "./PostItem.vue";
import { watch } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: false,
  },
  position: {
    type: Object,
    required: false,
  },
});

const emit = defineEmits(["close", "fold", "unfold"]);

const visible = ref(false);
const animationDuration = 500;
const showCloseAnimation = ref(false);

watch(
  () => props.post,
  (post) => {
    if (post) {
      emit("unfold");
      visible.value = true;
    } else {
      emit("fold");
      visible.value = false;
    }
  }
);

const handleClose = () => {
  showCloseAnimation.value = true;
  setTimeout(() => {
    showCloseAnimation.value = false;
    emit("close");
  }, animationDuration);
};
</script>

<template>
  <div v-if="visible" class="fixed top-0 left-0 bottom-0 right-0">
    <!-- 模糊背景 -->
    <div
      class="bg-blur w-full h-full"
      :class="{
        'bg-blur--open': !showCloseAnimation,
        'bg-blur--close': showCloseAnimation,
      }"
    ></div>

    <!-- 内容 -->
    <div
      class="absolute top-0 left-0 bottom-0 right-0 p-0"
      @click="handleClose"
    >
      <div class="relative container max-w-prose mx-auto">
        <div
          class="post-item absolute left-4"
          :class="{
            'post-item--open': !showCloseAnimation,
            'post-item--close': showCloseAnimation,
          }"
        >
          <PostItem :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-blur {
  backdrop-filter: blur(1.5rem);
}

.bg-blur--open {
  animation: bg-blur v-bind("animationDuration+'ms'");
}

.bg-blur--close {
  animation: bg-blur--close v-bind("animationDuration+'ms'");
}

.post-item {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.post-item--open {
  animation: post-item v-bind("animationDuration+'ms'");
}

.post-item--close {
  animation: post-item--close v-bind("animationDuration+'ms'");
}

@keyframes bg-blur {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bg-blur--close {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes post-item {
  0% {
    top: v-bind("position.top+'px'");
    left: 1rem;
    width: v-bind("position.width+'px'");
    height: v-bind("position.height+'px'");
  }
  100% {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

@keyframes post-item--close {
  0% {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  100% {
    top: v-bind("position.top+'px'");
    left: 1rem;
    width: v-bind("position.width+'px'");
    height: v-bind("position.height+'px'");
  }
}
</style>
