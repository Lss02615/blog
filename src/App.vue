<template>
  <!-- 
    必须要写一个template标签，所有的html部门的内容都在这里面编写
    所以说也叫template引擎
   -->
  <div>
    <h1>标题</h1>
    <div>
      <!-- 
      在双{ } 里面 也就是{{  }} 使用变量
      这个变量指的是data里return出来的数据
    -->
      {{ name }} --- {{ age }}
      <!-- 
        {{  }} 里面可以直接最基本的逻辑运算
        以及方法调用
       -->
      {{ age > 18 ? "大人" : "小孩" }}
    </div>
  </div>
  <!-- vue3 可以有多个根元素，vue2只能有一个，推荐同学们写的时候只用一个根元素 -->
  <div>只能有一个根元素吗</div>
</template>

<script>
/**
 * 如果没有放到export default 导出的那个对象里面
 * 那么没有vue的执行环境
 */
const a = 1;

// 这里面写js，vue相关的
/**
 * 一定要使用 export default
 * 导出一个对象，所有vue相关的代码在这里面编写
 *
 * 如何定义状态，并改变它，让视图重新渲染
 * 组件化
 * 生命周期
 * 跳转
 *
 * 框架相关特性
 */
export default {
  /**
   * data（纯函数） 是一个方法
   * 放里面里面必须有return
   * return 一个对象，在这个对象里面存放组件相关的状态
   * 可以在template里面直接使用
   */
  data() {
    return {
      name: "张三",
      age: 19,
    };
  },
};
</script>
