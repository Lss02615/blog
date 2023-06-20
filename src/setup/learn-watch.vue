<template>
  <div>
    <h2>num: {{ num }}</h2>
    <h2>a: {{ a }}</h2>
    <button @click="a += 1">a+1</button>
    <button @click="num += 1">num+1</button>
  </div>
</template>

<script setup>
import { watchEffect, ref, watch } from "vue";

const num = ref(1);
const a = ref(1);

/**
 * 自动收集依赖并监听
 */
watchEffect(() => {
  console.log("watchEffect 触发", a.value, num.value);
});

console.log(a, a.value);

/**
 * 接收两个参数
 * 第一个参数 是一个数组 要观察的响应式数据
 * 第二个参数 是一个回调函数 接收两个 数组
 * 第一个数组是当前的数据
 * 第二个数组是上次的数据
 */
// watch([a, num], ([newAVal, newNumVal], [oldAVal, oldNumVal]) => {
//   console.log("watch", newAVal, oldAVal);
//   console.log("watch num", newNumVal, oldNumVal);
// });
watch([a], () => {
  console.log("watch", a.value);
});
</script>
