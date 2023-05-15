<script setup>
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
    name: "模仿瑞幸咖啡小程序",
    url: "https://github.com/ec50n9/ec-coffee",
  },
  {
    name: "一个简单的网易云歌单下载器",
    url: "https://github.com/ec50n9/Netease-Downloader",
  },
  {
    name: "135编辑器增强脚本",
    url: "https://github.com/ec50n9/135-evolution",
  },
  {
    name: "一个基于网页dom的抓手小游戏",
    url: "https://github.com/ec50n9/hock_game",
  },
  {
    name: "i志愿网页自动点击脚本",
    url: "https://github.com/ec50n9/auto-i-volunteer",
  },
];
</script>

<template>
  <table
    class="projects-table table-auto w-full text-center border-collapse"
  >
    <thead class="bg-emerald-200">
      <tr>
        <th
          class="px-4 py-2 border-2 border-emerald-600 text-emerald-800 font-flow"
        >
          项目
        </th>
        <th
          class="px-4 py-2 border-2 border-emerald-600 text-emerald-800 font-flow"
        >
          传送门
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
          <a :href="project.url" class="underline hover:text-emerald-900"
            >view</a
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.projects-table {
  animation: projects-table 3000ms;
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
