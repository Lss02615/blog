<template>
  <div>
    <input type="text" v-focus="true" />
    <div v-color="`green`">全局指令变红</div>
  </div>
</template>

<script>
export default {
  directives: {
    /**
     * 对象的key是指令的名字
     * 指令 不需要 v- 开头
     * 但是使用的时候 必须要v- 开头
     */
    focus: {
      /**
       *
       * @param {*} el 当前的dom节点
       * @param {*} binding 相关传值
       */
      mounted(el, binding, vnode, prevVnode) {
        // console.log(el, binding);
        el.focus();
      },
    },
  },
};
</script>
