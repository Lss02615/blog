import { createStore } from "vuex";
import goods from './goods'

const dely = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

// const store = createStore({
//   /**
//    * 存放vuex状态的方法
//    */
//   state() {
//     return {
//       num: 1,
//       arr: [1, 2, 3, 4],
//     };
//   },

//   /**
//    *  所有的mutations方法
//    */
//   mutations: {
//     /**
//      * 接收两个参数
//      * 第一个参数 state
//      * 第二个参数
//      */
//     add(state, params) {
//       // console.log(params);

//       /**
//        * 可以直接使用
//        * 可以直接修改state的属性
//        */
//       state.num += 1;
//     },
//   },

//   /**
//    * 用来存放异步操作
//    *
//    * 注意：这里不能直接修改state
//    */
//   actions: {
//     /**
//      *
//      * @param {} context 当前vuex的上下文
//      * @param {*} params 页面传过来的参数
//      */
//     async addSync(context, params) {
//       await dely();
//       context.commit("add");

//       console.log(context, params);
//     },
//   },

//   /**
//    * 存放计算属性
//    */
//   getters: {
//     /**
//      *
//      * 接收一个参数 当前的state
//      */
//     arrLength(state) {
//       console.log(state.arr, '触发了');
//       return state.arr.length;
//     },
//   },
// });

const store = createStore({
  modules: {
    goods
  }
})

export default store;
