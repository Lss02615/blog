<template>
  <div>B组件 --- {{ msg3 }} --- {{ num }} --- {{ msg4 }}</div>
</template>

<script>
export default {
  inject: ["msg3", "num", "msg4"],
};
</script>
