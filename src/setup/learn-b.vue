<template>
  <div>B页面</div>
  <button @click="toA">去A</button>
</template>

<script setup>
import { useRouter } from "vue-router";

/**
 * 使用useRouter方法
 * 返回一个router对象和我们之前的$router一致
 */
const router = useRouter();

console.log(router)

const toA = () => {
  router.push('/a-setup?id=1&name=张三')
}

</script>
