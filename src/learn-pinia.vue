<template>
  <div>
    <h2>小菠萝 --- {{ global.num }}</h2>
    <h2>两倍的num{{ global.doubleNum }} --- {{ global.nameAndAge }}</h2>
    <button @click="add">+1</button>
    <button @click="updateName">更新名字为李四</button>
  </div>
</template>

<script setup>
import { useGlobal } from "./pinia/global";

/**
 * 注意： 对象不能解构 否则会失去响应式
 */
const global = useGlobal();

console.log(global);

const add = () => {
  /**
   * 并且可以直接修改里面的属性
   * 也会重新渲染视图
   */
  global.num += 1;
};

const updateName = async () => {
  /**
   * 页面中直接调用
   */
  // const a = global.setName("李四");
  // console.log(a, '啊啊啊返回值')

  const a = await global.setName("李四");
  console.log(a)
};
</script>
