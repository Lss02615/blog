import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Page1 from "./page/page1.vue";
const routes = [
  {
    name: "page1",
    // 路由路径
    path: "/page1",
    // 路由要显示的组件
    component: Page1,
    /**
     * 使用children创建对应的子路由
     * 注意：一定要在父级路由里面使用router-view这个组件展示
     */
    children: [
      {
        path: "/page3",
        component: () => import("./page/page3.vue"),
      },
      {
        path: "/page4",
        component: () => import("./page/page4.vue"),
      },
    ],
  },
  {
    name: "page2",
    path: "/page2/:id/:name/:age?",
    component: () => import("./page/page2.vue"),
  },
  {
    path: "/compouted",
    component: () => import("./learn-compouted.vue"),
  },
  {
    path: "/watch",
    component: () => import("./learn-watch.vue"),
  },
  {
    path: "/directives",
    component: () => import("./learn-directives.vue"),
  },
  {
    path: "/vuex",
    component: () => import("./learn-vuex.vue"),
  },
  {
    path: "/list",
    component: () => import("./goods/list.vue"),
  },
  {
    path: "/insert",
    component: () => import("./goods/insert.vue"),
  },
  {
    path: "/setup",
    component: () => import("./setup/learn-setup.vue"),
  },
  {
    path: "/watch-setup",
    component: () => import("./setup/learn-watch.vue"),
  },
  {
    path: "/a-setup",
    component: () => import("./setup/learn-a.vue"),
  },
  {
    path: "/b-setup",
    component: () => import("./setup/learn-b.vue"),
  },
  {
    path: "/vuex-setup",
    component: () => import("./setup/learn-vuex.vue"),
  },
  {
    path: "/learn-shop",
    component: () => import("./setup/learn-shop.vue"),
  },
  {
    path: "/learn-pinia",
    component: () => import("./learn-pinia.vue"),
  },
  {
    path: "/learn-shop-pinia",
    component: () => import("./learn-shop-pinia.vue"),
  },
];

/**
 * 接收一个对象
 */
const router = createRouter({
  // 定义路由模式
  history: createWebHashHistory(),
  // 定义路由表
  routes,
});

export default router;
