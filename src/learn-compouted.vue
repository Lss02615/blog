<template>
  <div>
    <h2>计算属性 --- {{ num }}</h2>
    <div>数组长度 {{ getArrlength`` }}</div>
    <div>计算属性 数组长度 {{ computedArrLength }}</div>
    <button @click="num += 1">+1</button>
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4],
      num: 1,
    };
  },

  /**
   * 计算属性是一个对象
   */
  computed: {
    /**
     * 方法必须有返回值
     * 并且一般来说都是一个纯函数
     *
     * 方法返回的是具体的值
     * 在使用的时候
     *
     *
     * 内部的响应式数据发生改变会自动重新计算
     */
    // computedArrLength() {
    //   console.log("计算属性重新调用");
    //   return this.arr.length;
    // },

    /**
     * 如果说要修改这个计算属性（不推荐）
     * 那么必须要使用对象的形式
     */
    computedArrLength: {
      // 数据每次获取后执行
      /**
       * 必须有返回值
       * 返回的值就是计算属性的值
       */
      get() {
        console.log("触发get方法");
        return this.arr.length + "个";
      },

      /**
       *
       * 数据每次修改后执行
       *
       * set 不需要返回值
       * 并且也不能直接修改计算属性
       * 如果要修改也是修改get的依赖项
       *  */
      set(val) {
        console.log(val, "set接收到的参数");
        this.arr.push(val);
      },
    },
  },

  methods: {
    getArrlength() {
      console.log("调用了普通方法");
      return this.arr.length;
    },

    add() {
      //
      /**
       * 可以直接通过this.xxx 拿到计算属性
       * 这个属性是不能直接修改的
       * 也不推荐修改
       */
      // this.arr.push(4)
      /**
       * 如果直接修改计算属性
       * 这并不是直接赋值 只是触发了Set方法
       * 并且给set传递了一个参数，这个参数就是要
       * 赋值的参数
       */
      this.computedArrLength = 5;
    },
  },
};
</script>
