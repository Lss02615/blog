<template>
  <div>
    全选
    <input
      type="checkbox"
      v-model="shop.isAllSelect"
      @change="shop.allSelectChange()"
    />
    <div v-for="(item, index) in shop.goods" :key="index">
      <input
        type="checkbox"
        v-model="item.select"
        @change="shop.singleChange()"
      />
      商品名： {{ item.name }} --- 商品价格: {{ item.price }} ---
      <button @click="shop.updateNum(index, 1)">+</button>
      {{ item.num || 1 }}
      <button @click="shop.updateNum(index, -1)">-</button>
      小计：{{ (item.num || 1) * item.price }}
    </div>
    总计：{{ shop.total }}
  </div>
</template>

<script setup>
import { useShop } from "./pinia/shop";

const shop = useShop();
</script>
