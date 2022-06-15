<script setup lang="ts">
import {ref} from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="stuff">
    <h1>Well hello Yall!</h1>
    <h4>{{ msg }}</h4>
    
    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
      Edit <code>components/Hello.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<style scoped>
.stuff {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
