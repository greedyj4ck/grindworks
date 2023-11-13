import { defineStore } from "pinia";

export const useUIStore = defineStore("uiStore", {
  state: () => ({
    toolDrawer: {
      items: [],
    },
  }),
  getters: {},
  actions: {},
});
