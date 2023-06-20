// 引入createApp
import { createApp } from "vue";
// 引入组件
import App from "./App.vue";

import LearnEvent from "./learn-event.vue";

import LearnStyle from "./learn-style.vue";

import LearnRender from "./learn-render.vue";

import LearnModel from "./learn-model.vue";

import LearnShop from "./learn-shop.vue";

import LearnComponent from "./learn-component.vue";

import QfButton from "./components/qf-button.vue";

import LearnSlot from "./learn-slot.vue";

import LearnLife from "./learn-life.vue";

import LearnShopActivity from "./learn-shop-activity.vue";

import QfModal from "./components/qf-modal.vue";

import router from "./router";

import Layout from "./page/layout.vue";

import store from "./store";

import pinia from "./pinia";

// 返回一个app，需要传一个组件
const app = createApp(Layout);

/**
 * 挂载全局组件
 * 接收两个参数
 * 第一个参数 组件名
 * 第二个参数 要挂在的组件
 */
app.component("QfButton", QfButton);
app.component("QfModal", QfModal);

app.directive("color", {
  mounted(el, binding) {
    el.style.color = binding.value;
    console.log(el, binding);
  },
});

/**
 * 使用use方法挂载插件
 */
app.use(router);

app.use(store);

app.use(pinia);

// app.component('qf-button', QfButton)

/**
 * 进全局的统一下发
 * 第一个参数
 * 参数名
 * 第二个参数要下发的值
 */
app.provide("msg4", "最上级下发的数据");

app.mount("#app");
