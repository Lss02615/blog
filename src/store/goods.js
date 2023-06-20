import API from "./../api";
/**
 * @ 配置的一个全局路径别名
 * 代表从src下开始
 */
import router from "@/router";

export default {
  /**
   * state 属于不可变数据
   * 如果改变state 使用 mutations
   */
  state() {
    return {
      goods: [
        { name: "商品1---update", price: "10", editIndex: 0 },
        { name: "商品3", price: "10" },
      ],
      form: {},
    };
  },

  mutations: {
    /**
     * 通用修改数据的方法
     * @param {} state 当前的state
     * @param {*}
     * key 要修改的属性名
     * val 要修改的属性值
     */
    setData(state, { key, val }) {
      state[key] = val;
    },
  },

  actions: {
    async ["goods/getGoods"](context) {
      const data = await API.getGoods();
      context.commit("setData", {
        key: "goods",
        val: data,
      });
    },

    /**
     * 更新数据
     * @param {} context
     * @param {*} data 接收的参数
     */
    async ["goods/insertGoods"](context) {
      // 编辑
      if (typeof context.state.form.editIndex === "number") {
        // 编辑商品
        await API.updateGoods(context.state.form.editIndex, context.state.form);
      } else {
        // 创建商品
        await API.createGoods(context.state.form);
      }

      // 回到上一页
      router.go(-1);
    },

    async ["goods/delGoods"](context, index) {
      // 删除
      await API.delGoods(index);

      // 重新调用列表方法
      context.dispatch("goods/getGoods");
    },

    async ["goods/getGoodsInfo"](context, index) {
      const data = await API.getGoodsDetail(index);
      data.editIndex = index;
      context.commit("setData", {
        key: "form",
        val: data,
      });
    },
  },
};
