<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

</script>

<template>
  <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/element-plus/dist/index.css"
  />
  
  <h3>{{ msg }}</h3>
  <!-- example components -->
  <button
      bg="blue-200 hover:blue-500 dark:blue-200 dark:hover:blue-600"
      text="sm blue-900"
      font=""
      p="y-2 x-4"
      m="2"
      border="2 rounded blue-900"
      @click="count++">COUNT: {{ count }}</button>
  <el-button type="success" @click="count++">count is...: {{ count }}</el-button>
  <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
  <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
  <el-button type="info" @click="count++">count is: {{ count }}</el-button>
  <br />
</template>

<style>
.ep-button {
  margin: 4px;
}
</style>
