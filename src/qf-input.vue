<template>
  <div>
    <h2>{{ name }} --- {{ age }}</h2>
    <div>一个普通的组件</div>
    <button @click="see">查看props</button>
    <button @click="hello">哈喽父组件</button>
  </div>
</template>

<script>
export default {
  /**
   * 使用props接收父组件传过来的参数
   * 可以直接使用this.name 或 this.xx
   * 使用接收到的参数
   *
   */
  props: ["name", "age"],

  methods: {
    see() {
      console.log(this.name);
    },

    hello() {
      /**
       * 使用this.$emit 向父组件抛出一个事件
       * 接收两个参数
       * 第一个参数 事件名
       * 第二个参数 要传参数
       */
      this.$emit('hello', '你好，父组件');
    },
  },
};
</script>
