<script setup>
import { RouterView } from "vue-router";
import {useWebsiteStore} from "./store/websiteStore"
import {useTitle} from "@vueuse/core"
import { computed } from "vue";

const websiteStore = useWebsiteStore()
useTitle(computed(() => websiteStore.info.title))

websiteStore.fetchInfo()
</script>

<template>
  <div
    class="w-screen h-screen bg-gradient-to-br from-emerald-200 to-blue-300 overflow-auto"
  >
    <div class="container max-w-prose mx-auto">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
