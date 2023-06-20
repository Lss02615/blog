<template>
  <div>一个朴实无华的A组件</div>
  <div>{{ props.name }}</div>
  <!-- 
    直接使用props里面的值只能在template里
   -->
  <div>直接使用{{ name }}</div>
  <button @click="hello">给父组件问声好</button>
</template>

<script setup>
/**
 * 使用defineProps接收父组件传过来的参数
 * 是一个方法，接收一个数组，数组里面是接收到的父组件传过来的参数
 */
import { defineProps, defineEmits, onMounted } from "vue";
import { useRoute } from "vue-router";

/**
 * useRoute接收 路由传过来的参数
 * 返回一个route对象
 */
const route = useRoute();

/**
 * 有返回值,返回一个对象
 * 对象里面就是接收到的值
 */
const props = defineProps(["name"]);

/**
 * 使用defineEmits 定义 要抛出的事件
 * 接收一个数组，数组里面是对应的事件名
 *
 * 有返回值，返回一个emit方法
 */
const emit = defineEmits(["hello"]);

onMounted(() => {
  console.log(route.query, "这是什么");
});

const hello = () => {
  /**
   * 接收两个参数
   * 第一个参数是事件名，只能使用定义好的事件名
   * 第二个参数要传的参数
   */
  emit("hello", "你好父组件");
};
</script>
