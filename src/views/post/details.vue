<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <article>{{ id }}</article>
</template>

<style scoped></style>
