<template>
  <div>
    <h2 class="green">{{ num }}</h2>
    <!-- 
      使用@加事件名后面跟上对应的方法
     -->
    <button @click="add">+1</button>

    <input type="text" @change="inputChange" />
    <div class="box" @click="aaa">
      <!-- 
      如果需要传参，则直接在括号里面传递
      可以使用$event传递当前的event对象
      -->
      <button @click="send('你好', $event)">传参</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      arr: [1, 2, 3, 4],
    };
  },

  /**
   * 所有的方法 必须要在methods里面定义
   */
  methods: {
    /**
     * 定义方法的时候，不要使用箭头函数
     */
    add() {
      // +1
      /**
       * 可以直接使用this获取当前的状态和方法
       */
      /**
       * 可以直接修改这个状态
       * 并且视图会重新渲染
       */
      this.num += 1;

      /**
       * 如果在methods方法里面使用普通函数
       * 要注意上下文
       */
      this.arr.forEach((item, index) => {
        console.log(item, index, this);
      });
    },

    add2() {},

    inputChange(event) {
      console.log(event);
    },

    send(msg, event) {
      console.log(msg, event);
    },

    aaa() {
      console.log("冒泡");
    },
  },
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
.red {
  color: red;
}
</style>
