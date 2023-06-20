<template>
  <div>
    <!-- 
    所有的指令都是以v-开头
    必须循环指令 v-for
    循环的时候一定要加key
   -->
    <div v-for="(item, index) in arr" :key="index">
      {{ item.name }} --- {{ item.age }}
    </div>
    <button @click="add">添加</button>
    <h2 v-show="isShow">显示</h2>
    <h2 v-if="isShow">显示</h2>
    <!-- 
      在template里面不要加this
      本身就在vue上下文里面
     -->
    <button @click="this.isShow = !this.isShow">
      {{ this.isShow ? "隐藏" : "显示" }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "张三",
          age: 18,
        },
        {
          name: "李四",
          age: 19,
        },
        {
          name: "王五",
          age: 20,
        },
      ],
      isShow: false,
    };
  },

  methods: {
    add() {
      console.log(this.arr);
      this.arr.push({
        name: "小红",
        age: 5,
      });
    },
  },
};
</script>
