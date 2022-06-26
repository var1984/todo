import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../pages/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: homePage,
  },
  {
    path: "/edit",
    name: "edit",

    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/EditPage.vue"),
  },
  {
    path: "/edit/:id",
    name: "editId",

    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/EditPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
