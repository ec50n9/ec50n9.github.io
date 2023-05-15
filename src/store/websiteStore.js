import websiteApi from "../api/website";
import { defineStore } from "pinia";

export const useWebsiteStore = defineStore("website", {
  state: () => ({
    info: {
      title: "松葉",
      welcome: "欢迎光临！",
      sub_title: "这里有些新东西哦！",
    },
    comments: [],
  }),
  getters: {
    welcomeMessage() {
      return this.info.welcome;
    },
  },
  actions: {
    async fetchInfo() {
      const info = await websiteApi.getInfo();
      this.info = info;
    },
    async fetchComments() {
      const comments = await websiteApi.listComments();
      this.comments = comments;
    }
  },
});