<template>
  <div h-full flex flex-col justify-center items-center gap-8>
    <div relative>
      <EcCircleProgressBar
        mx-auto
        :width="400"
        :height="400"
        :r="160"
        :duration="0.5"
        :bg-color="themeStore.colors.lightText"
        :fill-color="themeStore.colors.primaryColor"
        :handle-color="themeStore.colors.darkPrimaryColor"
        v-model="progress"
      />
      <div
        absolute
        class="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        text-4xl
        text-gray-7
        font-bold
      >
        {{ Math.floor(progress * duration) }} :
        {{ Math.round(progress * duration * 60) % 60 }}
      </div>
    </div>

    <div>
      <EcButton @click="handleCancel">取消计时</EcButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import EcButton from "../../components/EcButton.vue";
import EcCircleProgressBar from "../../components/EcCircleProgressBar.vue";
import { useThemeStore } from "../../store/ThemeStore";

const props = defineProps({
  duration: {
    type: Number,
    default: 25,
  },
});

const themeStore = useThemeStore();

// 定时器
const progress = ref(1);
const secondStep = 1 / (props.duration * 60);
const timer = setInterval(() => {
  progress.value -= secondStep;
  if (progress.value === 0) {
    clearInterval(timer);
  }
}, 1000);

// 取消按钮
const router = useRouter();
function handleCancel() {
  clearInterval(timer);
  router.back();
}
</script>
