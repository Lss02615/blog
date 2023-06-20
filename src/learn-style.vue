<template>
  <div class="red">红色</div>
  <div class="style">
    <div class="blue">蓝色</div>
    <div class="green">小绿</div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import './style.scss';

/* 
  样式默认作用到全局

  可以直接在style标签里面加一个scoped属性
  代表只在当前页面生效
*/
.style {
  .blue {
    color: blue;
  }
}
</style>
