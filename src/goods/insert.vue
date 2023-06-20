<template>
  <div>
    <h2>新增</h2>
    <div>
      商品名: <input type="text" v-model="$store.state.goods.form.name" />
    </div>
    <div>
      商品价格: <input type="text" v-model="$store.state.goods.form.price" />
    </div>
    <button @click="save">确定</button> ---
    <button @click="$router.go(-1)">取消</button>
    {{ num }}
    {{ getA() }}
  </div>
</template>
<script>
const dely = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 10);
  });
};

export default {
  data() {
    return {
      num: 1,
      form: {},
    };
  },

  async created() {
    this.$store.dispatch("goods/getGoodsInfo", Number(this.$route.query.index));
  },

  methods: {
    save() {
      this.$store.dispatch("goods/insertGoods");
    },

    getA() {
      console.log("渲染");
    },
  },
};
</script>
