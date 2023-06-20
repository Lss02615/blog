import { defineStore } from "pinia";

export const useShop = defineStore("shop", {
  state() {
    return {
      goods: [
        {
          name: "羊肉串",
          price: 10,
        },
        {
          name: "猪肉串",
          price: 6,
        },
        {
          name: "鸡翅膀",
          price: 12,
        },
      ],
      isAllSelect: false,
    };
  },

  actions: {
    updateNum(index, actionType) {
      this.goods[index].num = this.goods[index].num || 1;
      this.goods[index].num += actionType;
    },

    allSelectChange() {
      // console.log(this.isAllSelect)
      this.goods.forEach((item) => {
        item.select = this.isAllSelect;
      });
    },

    singleChange() {
      this.isAllSelect = this.goods.every((item) => item.select);
    },
  },

  getters: {
    total() {
      return this.goods
        .filter((item) => item.select)
        .reduce((total, item) => (total += item.price * (item.num || 1)), 0);
    },
  },
});
