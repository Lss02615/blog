<template>
  <div>
    页面1
    <router-link to="/page2">去页面2</router-link>
    <button @click="to2">去页面2</button>
    <div>
      <router-link to="/page3">page3</router-link>
      &nbsp;
      <router-link to="/page4">page4</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        id: 1,
        name: "李四",
        age: 18,
      },
    };
  },

  methods: {
    to2() {
      /**
       * 使用$router
       * 这个对象进行路由跳转
       */
      // this.$router.push("/page2?id=1&age=18&name=张三");

      /**
       * query 传参 使用 ?进行拼接
       * 参数之间使用 & 隔开 类似get
       */
      // this.$router.push("/page2?id=1&age=18&name=张三");
      // this.$router.push({
      //   // 要跳转的路径
      //   path: "/page2",
      //   // 要传的参数
      //   query: this.info,
      // });

      // this.$router.push("/page2/1/王五");

      /**
       * params 传参 push 里面跟一个对象
       * name 要跳转页面的路由名
       * params 对象代表要传的参数
       */
      this.$router.push({
        name: "page2",
        params: this.info,
      });
    },
  },
};
</script>
