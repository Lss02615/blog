<template>
  <div>组件内容，在这里面可以使用指令 可以使用{{ name }}</div>
  <h2>{{ num }}</h2>
  <button @click="add">+1</button>
  <div>
    {{ info.name }}
    <input type="text" v-model="info.name" />
    <button @click="updateName">改变name</button>
  </div>
  <h2>计算属性：{{ arrLength }}</h2>
  <QfButton></QfButton>
  <!-- <LearnA
    @hello="getChild($event, 'azijiadsad')"
    :name="info.name"
  ></LearnA> -->
  <LearnA
    @hello="(msg) => getChild(msg, 'azijiadsad')"
    :name="info.name"
  ></LearnA>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

// 如果使用局部组件，不需要注册可以直接使用
import LearnA from "./learn-a.vue";

/**
 * 用来定义响应式数据
 * 接收一个参数作为初始值
 *
 * 返回一个ref对象
 * 如果要使用具体的是那么要使用.value
 * 注意：在template里面可以直接使用忽略value
 */
const num = ref(1);
const arr = ref([1, 2, 3]);
console.log(num.value);

/**
 * reactive 里面一般回放数组或者对象
 * 但是不能直接改变整个对象引用，可以改变里面的属性
 * 返回的就是传入的值
 */
const info = reactive({
  name: "张三",
  age: 19,
});

// 普通变量不具备响应式
const name = "张三";

/**
 * 计算属性是一个方法
 * 接收一个回调函数，必须有返回值返回的值就是计算属的值
 *
 * 自定收集依赖 依赖不变 函数不会重新调用
 */
const arrLength = computed(() => arr.value.length);

const add = () => {
  // console.log("哈哈哈哈真好");
  /**
   * 可以直接修改对应ref的value值
   * 视图会发生改变
   */
  num.value += 1;
  a += 1;
  console.log(a);
};

const updateName = () => {
  info.name = "李四";
};

const getChild = (msg, data) => {
  console.log(msg, data);
};
</script>
