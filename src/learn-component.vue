<template>
  <div>
    学习组件
    <QfButton></QfButton>
    <!-- <qf-button></qf-button> -->
    <!-- 
      监听hello事件
      当事件触发的时候
      可以触发对应的方法
     -->
    <!-- <Qfinput
      name="张三"
      :age="18"
      @hello="(msg) => getChild(msg, '自己传的')"
    ></Qfinput> -->
    <Qfinput
      name="张三"
      :age="18"
      @hello="getChild($event, '自己传的2')"
    ></Qfinput>
    <LearnA></LearnA>
    <h2>{{ num }}</h2>
    <button @click="num += 1">+1</button>
  </div>
</template>

<script>
import Qfinput from "./qf-input.vue";
import LearnA from "./learn-a.vue";
/**
 * 在选项式api里
 * 无法引入组件并使用
 * 必须要进行注册
 *
 * 组件注册分两种：
 * 全局注册
 *  全局只需要注册一次，就可以在任意组件里面使用不需要额外的引入或注册
 * 局部注册
 */

export default {
  data() {
    return {
      num: 1,
    };
  },

  /**
   * provide 是纯函数
   * return 一个对象
   * 里面是要下发的参数
   * 所有的子级组件都可以使用inject获取下发的参数
   */
  provide() {
    return {
      msg3: "来自父组件的问候",
      num: this.num,
    };
  },

  /**
   * 注册组件
   */
  components: {
    Qfinput,
    LearnA,
  },

  methods: {
    seeProps() {
      console.log(this.props);
    },

    getChild(msg, msg2) {
      console.log(msg, msg2);
    },
  },
};
</script>
