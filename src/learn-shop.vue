<template>
  <div>
    <input type="checkbox" v-model="isAllSelect" @change="allSelectChange" />
    全选
    <div v-for="(item, index) in goods" :key="index">
      <input type="checkbox" v-model="item.select" @change="singleChange" />
      商品名：{{ item.name }} --- 商品价格: {{ item.price }} ---
      <button @click="updateNum(index, 1)">+</button>
      {{ item.num || 1 }}
      <button @click="updateNum(index, -1)">-</button>
      小计:{{ (item.num || 1) * item.price }}
    </div>
    总计：{{ cooutTotal() }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        {
          name: "羊肉串",
          price: 10,
        },
        {
          name: "🐷肉串",
          price: 8,
        },
        {
          name: "鸡肉串",
          price: 12,
        },
      ],
      isAllSelect: false,
    };
  },

  methods: {
    updateNum(index, actionType) {
      this.goods[index].num = this.goods[index].num || 1;
      this.goods[index].num += actionType;
    },

    allSelectChange() {
      // 获取当前的全选状态
      console.log(this.isAllSelect);
      // 同步单选状态
      this.goods.forEach((item) => {
        item.select = this.isAllSelect;
      });
    },

    singleChange() {
      this.isAllSelect = this.goods.every((item) => item.select);
    },
    
    cooutTotal() {
      return this.goods
        .filter((item) => item.select)
        .reduce((total, item) => (total += item.price * (item.num || 1)), 0);
    },
  },
};
</script>
