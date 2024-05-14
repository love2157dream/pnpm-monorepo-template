<script setup>
import "element-plus/dist/index.css";
import { ElSlider } from "element-plus";
import { ref } from 'vue'

const value1 = ref(0)
</script>

<template>
  <div class="slider-demo-block">
    <span class="demonstration">默认值</span>
    <el-slider v-model="value1" />
  </div>
</template>

<style scoped>
.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  color: black;
  width: 120px;
  padding: 10px;
}
</style>
