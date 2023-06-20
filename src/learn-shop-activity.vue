<template>
  <div>
    <button @click="visible = true">新增</button>
    <button @click="clear">清空</button>
    <div>
      <input type="checkbox" v-model="isAllSelect" @change="allSelectChange" />
      全选
    </div>
    <div>
      <div v-for="(item, index) in goods" :key="index">
        <input type="checkbox" v-model="item.select" @change="singleChange" />
        商品名：{{ item.name }} --- 商品价格: {{ item.price }} --- 库存：{{
          item.inventory
        }}
        ---
        {{ getActivityName(item).name }}
        <button @click="updateNum(index, 1)">+</button>
        {{ item.num || 1 }}
        <button @click="updateNum(index, -1)">-</button>
        小计：{{ getActivityPrice(item) }}
        <button @click="edit(item, index)">编辑</button>
        <button @click="goods.splice(index, 1)">删除</button>
      </div>
    </div>
    总计：{{ getTotal() }}
    <QfModal v-if="visible" title="新增" @ok="ok" @cancel="cancel">
      <div>商品名：<input type="text" v-model="form.name" /></div>
      <div>商品价格：<input type="text" v-model="form.price" /></div>
      <div>商品库存：<input type="text" v-model="form.inventory" /></div>
      <div>
        商品活动：
        <select v-model="form.activityType" @change="selectChagne">
          <option value="none">无</option>
          <option value="full">满减</option>
          <option value="discount">打折</option>
        </select>
      </div>
      <div v-if="form.activityType === 'full'">
        满 <input type="text" v-model="form.activityInfo.full" /> 减
        <input type="text" v-model="form.activityInfo.reduce" />
      </div>
      <div v-if="form.activityType === 'discount'">
        <input type="text" v-model="form.activityInfo.discount" /> 折
      </div>
    </QfModal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        activityInfo: {},
      },
      isAllSelect: false,
      visible: false,
      editIndex: null,
      goods: [
        {
          name: "小龙虾",
          price: 10,
          // 库存
          inventory: 10,
        },
        {
          name: "羊肉串",
          price: 15,
          // 库存
          inventory: 12,
          // 满30元减10块,不累计
          activityInfo: {
            // 满
            full: 30,
            // 减
            reduce: 10,
          },
        },
        {
          name: "牛肉串",
          price: 20,
          // 库存
          inventory: 30,
          // 打8折
          activityInfo: {
            // 折扣
            discount: 8,
          },
        },
      ],
    };
  },

  methods: {
    getActivityName(item) {
      if (item.activityInfo) {
        if (item.activityInfo.full) {
          return {
            name: `满${item.activityInfo.full}减${item.activityInfo.reduce}`,
            type: "full",
          };
        }
        if (item.activityInfo.discount) {
          return {
            name: `${item.activityInfo.discount}折`,
            type: "discount",
          };
        }
      }

      return {
        name: "",
        type: "none",
      };
    },

    updateNum(index, num) {
      this.goods[index].num = this.goods[index].num || 1;

      // 当前商品数量为1 但是用户还是点击 -
      if (this.goods[index].num === 1 && num === -1) {
        this.goods.splice(index, 1);
      }

      if (num === 1 && this.goods[index].num === this.goods[index].inventory) {
        return;
      }

      this.goods[index].num += num;
      // 强制刷新页面
      this.$forceUpdate();
    },

    getActivityPrice(item) {
      const price = (item.num || 1) * item.price;
      if (item.activityInfo) {
        if (item.activityInfo.full && price >= item.activityInfo.full) {
          return price - item.activityInfo.reduce;
        }
        if (item.activityInfo.discount) {
          return price * item.activityInfo.discount * 0.1;
        }
      }

      return price;
    },

    allSelectChange() {
      this.goods.forEach((item) => {
        item.select = this.isAllSelect;
      });
    },

    singleChange() {
      this.isAllSelect = this.goods.every((item) => item.select);
    },

    ok() {
      console.log(this.form);

      if (this.editIndex === null) {
        this.goods.push({ ...this.form });
      } else {
        this.goods[this.editIndex] = { ...this.form };
      }

      this.form = {};

      this.visible = false;
    },

    cancel() {
      this.visible = false;
    },

    getTotal() {
      return eval(
        this.goods
          .filter((item) => item.select)
          .map((item) => this.getActivityPrice(item))
          .join("+") || 0
      );
    },

    selectChagne() {
      if (this.form.activityType !== "none") {
        this.form.activityInfo = {};
      } else {
        // 没有活动的情况下要删除活动对象
        delete this.form.activityInfo;
      }
    },

    edit(item, index) {
      this.visible = true;

      this.editIndex = index;

      this.form = { ...item };

      this.form.activityType = this.getActivityName(item).type;
    },

    clear() {
      eval(`setTimeout(() => {
        this.goods = []
      }, 1000)`);
    },
  },
};
</script>
