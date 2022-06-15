<template>
  <el-row :gutter="10">
    <el-col :span="16"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
  <el-row :gutter="10">
    <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
  <el-row :gutter="10">
    <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="16"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
  <el-row :gutter="0">
    <el-card header="Cheetsheet">
      String in Parent: {{ aStringValue }}[{{ counter }}]
      <el-button @click="counter++">Change the string</el-button>
      <br>
      <el-button @click="incrementCounter">count is: {{ count }}</el-button>
    </el-card>
  </el-row>
    <el-row :gutter="0">
    <computed-props :a-string-prop="`aStringValue: [${counter}]`"></computed-props>
  </el-row>
</template>

<script setup lang='ts'>
import ComputedProps from './ComputedProps.vue'
import {ref} from "vue";

let aStringValue = ref("A String from parent")
const counter = ref(1)
const count = ref(0)

function incrementCounter() {
  counter.value++
}
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 20px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: #0c63e4;
  opacity: 20%;
}
.el-card {
  border-radius: 10px;
}
</style>