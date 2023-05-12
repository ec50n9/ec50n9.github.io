<script setup>
import { ref } from "vue";

/**
 * @typedef {Object} Project
 * @property {string} name
 * @property {string} url
 */

/**
 * @type {Project[]}
 */
const projectsList = [
  {
    name: "瑞幸咖啡小程序",
    url: "https://www.baidu.com",
  },
  {
    name: "瑞幸咖啡小程序",
    url: "https://www.baidu.com",
  }
];
</script>

<template>
  <div class="w-full h-screen bg-gradient-to-br from-emerald-200 to-blue-300 overflow-auto">
    <article class="container mx-auto px-4 sm:px-0">
      <h1 class="title inline-block mt-10 sm:mt-20 px-2 py-1 text-5xl bg-emerald-900 text-emerald-200">嘿！别来无恙</h1>
      <p class="sub-title inline-block mt-2 sm:mt-4 px-2 py-0.5 bg-green-900 text-emerald-200 text-md">来看看最近有什么新鲜货叭~</p>
      <table
        class="projects-table table-auto w-full mt-4 sm:mt-8 text-center border-collapse"
      >
        <thead class="bg-emerald-200">
          <tr>
            <th
              class="px-4 py-2 border-2 border-emerald-600 text-emerald-800 font-flow"
            >
              名称
            </th>
            <th
              class="px-4 py-2 border-2 border-emerald-600 text-emerald-800 font-flow"
            >
              链接
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projectsList" :key="project.name">
            <td
              class="px-4 py-2 border-2 border-emerald-600 font-flow text-emerald-700"
            >
              {{ project.name }}
            </td>
            <td
              class="px-4 py-2 border-2 border-emerald-600 font-flow text-emerald-700"
            >
              <a :href="project.url" class="underline hover:text-emerald-900">goto</a>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  </div>
</template>

<style scoped>
.title{
  animation: title 2000ms;
}

.sub-title{
  animation: sub-title 3000ms;
}

.projects-table{
  animation: projects-table 3000ms;
}

@keyframes title {
  0% {
    transform: scale(.8) translate(1.3rem, calc(100vh / 2 - 12rem)) rotate(0deg);
  }
  25% {
    transform: scale(1.2) translate(1.3rem, calc(100vh / 2 - 12rem)) rotate(0deg);
  }
  50% {
    transform: scale(1) translate(1.3rem, calc(100vh / 2 - 12rem)) rotate(0deg);
  }
  75% {
    transform: scale(1) translate(1.3rem, calc(100vh / 2 - 12rem)) rotate(0deg);
  }
  100% {
    transform: scale(1) translate(0) rotate(0deg);
  }
}

@keyframes sub-title {
  0% {
    opacity: 0;
    transform: translate(0, -100%);
  }
  70% {
    opacity: 0;
    transform: translate(0, -100%);
  }
  100% {
    opacity: 1;
    translate: translate(0, 0);
  }
}

@keyframes projects-table {
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
