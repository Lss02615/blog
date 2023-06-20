<template>
  <div>页面2</div>
  <button @click="to1">去页面1</button>
  <button @click="back">返回上一页</button>
</template>

<script>
export default {
  created() {
    // 使用 $route 的 query对象接受
    // console.log(this.$route.query);

    // 使用 $route 的 params对象接受  
    console.log(this.$route.params)
  },

  methods: {
    to1() {
      this.$router.replace("/page1");
    },

    back() {
      // this.$router.back()
      // this.$router.go(-1)
    },
  },
};
</script>
