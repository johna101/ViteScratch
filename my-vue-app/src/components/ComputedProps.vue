<template>
  <el-card header="Computed properties">
    Name: {{ name }}<br>
    <input type="text" v-model="name">
    <button @click="name = 'Bob'">Change name</button>
    <br>
    String prop: [{{ aStringProp }}]<br>
    Date prop: [{{ aDateProp }}]<br>
    <br>
    Is it John? {{ IsJohn }}

    <h3>Only triggered if reactive dependancies change</h3>
    <button @click="incrementComputed">Increment dependancies</button>
    NonReactiveComputed: {{ nonreactiveComputed }}<br>
    ReactiveComputed: {{ reactiveComputed }}<br>
    <br><br>
    This should only update when the date
    The date: {{ refDate }}<br>

    This updates every time something causes a redraw....
    A date: {{ DateShouldUpdate() }}<br>
  </el-card>
</template>

<script setup lang='ts'>
import {computed, defineProps, ref} from "vue";

const props = defineProps({
  aStringProp: {type: String, required: true, default: "A String"},
  aDateProp: {type: Date, required: false, default: new Date()}
})

let name = ref("Thomas")
const IsJohn = computed(() => {
  return name.value === 'John' ? 'Yes' : 'No'
})

const incrementComputed = () => {
  nonreactiveint++;
  reactiveInt.value++
}
let nonreactiveint = 0;
const reactiveInt = ref(0)

const nonreactiveComputed = computed(() => nonreactiveint > 0 ? 'yes' : 'no')
const reactiveComputed = computed(() => reactiveInt.value > 0 ? 'yes' : 'no')

const refDate = ref(Date.now())
const theDate = computed(() => refDate)

function DateShouldUpdate() {
  return Date.now()
}
</script>

<style scoped>

</style>