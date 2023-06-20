<template>
  <div>
    <!-- 
    动态属性，在属性前面加上v-bind:
    一般来说简写成:
    这个时候key后面就要跟变量
   -->
    <div v-for="item in arr" :key="item">{{ item }}</div>

    <!-- 
    动态class的时候有一点不同
    后面跟一个对象，对应的key是className
    值是一个boolean 为true的时候 可以使用ƒ
    -->
    <!-- <div :class="{ red: !isRed }">什么颜色</div> -->
    <!-- 
      可以直接跟一个数组,
      数组里面是对应的要使用的className
     -->
    <!-- <div :class="['red']">什么颜色</div> -->

    <div :style="{ marginTop: px + 'px' }">样式</div>

    <img
      style="width: 100px; height: 100px"
      src="./assets/企业微信截图_ad668555-37cd-47f4-bdd0-c4f8f4813ba4.png"
      alt=""
    />
    <div>{{ msg }}</div>
    <!-- <input type="text" :value="msg" @input="inputChange" /> -->
    <!-- 
      监听表单控件变化,同步每次变化的值到value上
     -->
    <input type="text" v-model="msg" />
    <button @click="msg = '张三'">填入张三</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3],
      isRed: false,
      px: 100,
      msg: "aaa",
    };
  },

  methods: {
    inputChange(event) {
      this.msg = event.target.value;
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
