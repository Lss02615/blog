<template>
  <div>
    <button @click="$router.push('/insert')">新增</button>

    <!-- 
      v-for 和 v-if 能否一起使用
      vue2 不可以因为v-for的优先级更高，会造成性能问题
      vue3 可以但不推荐，v-if优先级更高
     -->
    <div v-for="(item, index) in goods" :key="index">
      商品名:{{ item.name }} --- 商品价格: {{ item.price }} ---
      <button @click="$router.push(`/insert?index=${index}`)">编辑</button>
      <button @click="$store.dispatch('goods/delGoods', index)">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    goods() {
      return this.$store.state.goods.goods;
    },
  },

  /**
   * 创建后
   */
  created() {
    /**
     * 当我们的vuex分模块后
     * 需要在前面加上对应的模块名字
     */
    this.$store.dispatch("goods/getGoods");
  },
};
</script>
