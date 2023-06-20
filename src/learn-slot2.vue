<template>
  <div>
    一个组件
    <!-- 
      使用slot这个组件展示
      组件标签中间的内容
     -->
    <!-- 
      使用name跟上插槽的名字
      -->
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>
