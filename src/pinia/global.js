import { defineStore } from "pinia";

const dely = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

/**
 * 接收两个参数
 * 第一个参数 当前store的名字或者id，必须全局唯一
 * 第二个参数 是一个对象
 *
 * 返回一个函数（钩子），页面中可以直接调用这个钩子
 * 返回当前模块的信息
 */
export const useGlobal = defineStore("global", {
  /**
   * state 是一个函数
   * 必须有返回值，返回一个对象
   * 在页面里可以直接使用
   */
  state() {
    return {
      num: 1,
      name: "张三",
    };
  },

  /**
   * 存放所有的计算属性
   */
  getters: {
    doubleNum: (state) => state.num * 2,
    nameAndAge(state) {
      return state.name + this.doubleNum;
    },
  },

  /**
   * 存放所有的action
   */
  actions: {
    /**
     * 所有的action里面的方法不要使用箭头函数
     * 可以在方法内直接使用this拿到当前上下文
     * 并且可以直接修改
     *
     * 接收的参数是页面中返回的
     */
    async setName(name) {
      await dely()
      this.name = name;
      return 1;
    },
  },
});
