<template>
  <div>
    <h1>生命周期 --- {{ num }}</h1>
    <div id="msg">你好 --- {{ num }}</div>
    <input type="text" id="input" v-model="num" />
    <button @click="add">+1</button>
  </div>
</template>

<script>
const dely = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

export default {
  data() {
    return {
      num: 1,
    };
  },

  beforeCreate() {
    /**
     * 在组件实例初始化完成之后立即调用。
     * 会在实例初始化完成、props 解析之后、data() 和 computed 等选项处理之前立即调用。
      注意，组合式 API 中的 setup() 钩子会在所有选项式 API 钩子之前调用，beforeCreate() 也不例外。
     */
    console.log("beforeCreate 创建前", this.num);
  },

  async created() {
    /**
     * 在组件实例处理完所有与状态相关的选项后调用。
     * 当这个钩子被调用时，以下内容已经设置完成：
     * 响应式数据、计算属性、方法和侦听器。
     * 然而，此时挂载阶段还未开始，因此 $el 属性仍不可用
     *
     * 一般会在这里进行网络请求 以及初始化操作
     */
    await dely();
    console.log("created 创建后", this.num);
    console.log(document.getElementById("msg"));
  },

  beforeMount() {
    /**
     * 在组件被挂载之前调用。
     * 当这个钩子被调用时，组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点。
     * 它即将首次执 DOM 渲染过程
     * 注意：这个钩子在服务端渲染时不会被调用
     */
    console.log("beforeMount 挂在前");
  },

  /**
   * 如果你的接口请求数据要用到echart或者要在dom上
   * 那么推荐直接在mounted里面调用
   */
  mounted() {
    /**
     * 在组件被挂载之后调用。
     * 所有同步子组件都已经被挂载。(不包含异步组件)
     * 其自身的 DOM 树已经创建完成并插入了父容器中。
     * 注意仅当根容器在文档中时，才可以保证组件 DOM 树也在文档中
     *
     * 使用echart 或者 富文本的时候，在这个钩子里面进行初始化操作
     */
    console.log("mounted 挂载后");
    console.log(document.getElementById("msg"));
  },

  methods: {
    async add() {
      /**
       * 渲染是异步的
       * 数据更新是同步的
       */
      this.num += 1;
      console.log("数据", this.num);
      /** 等待dom渲染完成 */
      await this.$nextTick();
      // this.$nextTick(() => {
      //   console.log("输入框dom数据", document.getElementById("input").value);
      // });
      console.log("输入框dom数据", document.getElementById("input").value);
    },
  },

  beforeUpdate() {},

  updated() {
    console.log("updated 更新后");
  },
};
</script>
