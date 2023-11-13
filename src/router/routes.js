const routes = [
  {
    path: "/",
    component: () => import("layouts/LayoutMain.vue"),
    children: [{ path: "", component: () => import("pages/PageStart.vue") }],
  },

  {
    path: "/creator/",
    component: () => import("layouts/LayoutMain.vue"),
    children: [{ path: "", component: () => import("pages/PageCreator.vue") }],
  },

  {
    path: "/settings/",
    component: () => import("layouts/LayoutMain.vue"),
    children: [{ path: "", component: () => import("pages/PageStart.vue") }],
  },

  /* // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  }, */
];

export default routes;
