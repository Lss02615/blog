<template>
  <div>
    <h2>满50打9折，满100打8折</h2>
    <button @click="visible = true">新增</button>
    <div>
      全选
      <input type="checkbox" v-model="isAllSelect" @change="allSelectChange" />
    </div>
    <div v-for="(item, index) in goods" :key="index">
      <input type="checkbox" v-model="item.select" @change="singleChange" />
      商品名:{{ item.name }} --- 商品价格:{{ item.price }} --- 库存：{{
        item.inventory
      }}
      ---
      {{ getActivityName(item) }}
      <button @click="updateNum(index, 1)">+</button>
      {{ item.num || 1 }}
      <button @click="updateNum(index, -1)">-</button>
      小计：{{ countPrice(item) }}
      <button @click="edit(index)">编辑</button> ---
      <button @click="goods.splice(index, 1)">删除</button>
    </div>
    总计： {{ total }}
    <QfModal v-if="visible" title="新增" @ok="ok" @cancel="visible = false">
      <div>商品名: <input type="text" v-model="form.name" /></div>
      <div>商品价格: <input type="text" v-model="form.price" /></div>
      <div>商品库存: <input type="text" v-model="form.inventory" /></div>
      <div>
        活动:
        <select v-model="form.activityType">
          <option value="none">无</option>
          <option value="full">满减</option>
          <option value="discount">打折</option>
        </select>

        <div v-if="form.activityType === 'full'">
          满 <input type="text" v-model="activityInfo.full" /> 减
          <input type="text" v-model="activityInfo.reduce" />
        </div>

        <div v-if="form.activityType === 'discount'">
          <input type="text" v-model="activityInfo.discount" /> 折
        </div>
      </div>
    </QfModal>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { pick } from "lodash";

const form = ref({});
const activityInfo = ref({});

const isAllSelect = ref(false);

const visible = ref(false);

const enditIndex = ref(null);

watch([visible], () => {
  if (!visible.value) {
    form.value = {};
    activityInfo.value = {};
  }
});

const goods = ref([
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
]);

const total = computed(() => {
  const price = goods.value
    .filter((item) => item.select)
    .reduce((total, item) => (total += countPrice(item)), 0);
  if (price >= 50 && price < 100) {
    return price * 0.9;
  }

  if (price >= 100) {
    return price * 0.8;
  }
  return price;
});

const getActivityName = (item) => {
  if (item.activityInfo) {
    // 判断是否满减
    if (item.activityInfo.full) {
      return `满${item.activityInfo.full},减${item.activityInfo.reduce} ---`;
    }
    // 判断是否是打折
    if (item.activityInfo.discount) {
      return `${item.activityInfo.discount}折 ---`;
    }
  }

  return "";
};

const updateNum = (index, actionType) => {
  goods.value[index].num = goods.value[index].num || 1;

  // 判断库存,并且是加的情况
  if (
    goods.value[index].num === goods.value[index].inventory &&
    actionType === 1
  ) {
    return;
  }

  // 为0的时候删掉
  if (goods.value[index].num === 1 && actionType === -1) {
    goods.value.splice(index, 1);
    return;
  }

  goods.value[index].num += actionType;
};

const countPrice = (item) => {
  // 原价
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
};

const allSelectChange = () => {
  goods.value.forEach((item) => {
    item.select = isAllSelect.value;
  });
};

const singleChange = () => {
  isAllSelect.value = goods.value.every((item) => item.select);
};

const ok = () => {
  visible.value = false;

  // 有活动的时候取值的属性
  const activity = {
    full: ["full", "reduce"],
    discount: ["discount"],
  };

  const item = {
    ...form.value,
    activityInfo:
      form.value.activityType === "none"
        ? null
        : {
            ...pick(activityInfo.value, activity[form.value.activityType]),
          },
  };

  typeof enditIndex.value === "number"
    ? (goods.value[enditIndex.value] = item)
    : goods.value.push(item);
};

const edit = async (index) => {
  enditIndex.value = index;

  visible.value = true;

  form.value = { ...goods.value[index] };
  if (goods.value[index].activityInfo) {
    if (goods.value[index].activityInfo.full) {
      form.value.activityType = "full";
    }
    if (goods.value[index].activityInfo.discount) {
      form.value.activityType = "discount";
    }
    activityInfo.value = { ...goods.value[index].activityInfo };
  }
};
</script>
