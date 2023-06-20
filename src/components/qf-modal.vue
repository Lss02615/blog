<template>
  <div class="modal-box">
    <div class="modal-content">
      <h2>{{ title }}</h2>
      <div class="content">
        <slot></slot>
      </div>
      <div class="btn-box">
        <button @click="$emit('ok')">确定</button>
        <button @click="$emit('cancel')">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
.modal-box {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  width: 300px;
  background: white;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: 100px;
  }
}
.content {
  flex: 1;
  margin: 10px 0;
}
</style>
