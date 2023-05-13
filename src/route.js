import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("./views/home/home.vue");
const About = () => import("./views/about/about.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
