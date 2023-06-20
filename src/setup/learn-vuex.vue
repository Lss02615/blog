<template>
  <div>vuex</div>
  <div>
    <div v-for="(item, index) in store.state.goods.goods" :key="index">
      商品名:{{ item.name }}
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();

console.log(JSON.parse(JSON.stringify(store.state.goods.goods)));
</script>
