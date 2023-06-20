<template>
  <div>
    <LearnSlot2>
      <!-- <h1>一级标题</h1> -->
      <!-- 
        # 后面是插槽的名字
       -->
      <template #footer>
        <div>底部</div>
      </template>
      <template #header>
        <div>头部</div>
      </template>
      <template #content>
        <div>内容</div>
      </template>
    </LearnSlot2>
  </div>
</template>

<script>
import LearnSlot2 from "./learn-slot2.vue";

export default {
  components: {
    LearnSlot2,
  },
};
</script>
