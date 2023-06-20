<template>
  <div>
    <h2>{{ $store.state.num }}</h2>
    <h2>计算属性 -- {{ $store.getters.arrLength }}</h2>
    <button @click="add">+1</button>
    <button @click="add2">延迟+1</button>
  </div>
</template>

<script>
export default {
  created() {
    /**
     * 使用$store 获取 vuex 实例
     * 
     * $store.state 可以获取当前store的状态
     */
    console.log(this.$store);
  },

  methods: {
    add () {
      /**
       * 使用commit提交一个mutation操作
       * 接收两个参数
       * 第一个参数 要调用的方法名
       * 第二个参数 要传的参数
       */
      this.$store.commit('add', '你好')
    },

    add2 () {
      this.$store.dispatch("addSync", '异步的你好')
    }
  }
};
</script>
