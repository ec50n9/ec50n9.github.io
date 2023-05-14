import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("./views/home/home.vue");
const About = () => import("./views/about/about.vue");
const PostDetails = () => import("./views/post/details.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/post/:id", component: PostDetails, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
