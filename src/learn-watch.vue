<template>
  <div>
    <h2>监听数据变化 --- {{ info.children[0].children[0].name }}</h2>
    <button @click="num += 1">{{ num }}</button>

    <button @click="update">复杂结构</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      info: {
        children: [
          {
            children: [
              {
                name: "张三",
              },
            ],
          },
        ],
      },
    };
  },

  /**
   * 使用watch这个对象监听属性
   */
  watch: {
    /**
     * 函数的名字和监听数据的名字
     * 必须保持一致
     *
     * 这个方法 无法在外部调用
     *
     * 接收两个参数
     * newVal 新的值
     * oldVal 老的值
     */
    // num (newVal, oldVal) {
    //   console.log(newVal, oldVal, "修改了")
    // }

    num: {
      /**
       * 数据每次修改后触发
       *
       */
      handler(newVal, oldVal) {
        console.log("每次修改后触发", newVal, oldVal);
      },

      // 初始化触发一次
      immediate: true,
    },

    /**
     * 当我们数据结构很复杂的时候
     * 观察会观察不到
     */
    info () {
      console.log("复杂数据变化了吗")
    },
    // info: {
    //   handler () {
    //     console.log("复杂数据变化了吗")
    //   },
    //   deep: true
    // },
  },

  methods: {
    update () {
      this.info.children[0].children[0].name = '李四'
      this.info = JSON.parse(JSON.stringify(this.info))
    }
  }
};
</script>
