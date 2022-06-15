import { createApp } from 'vue'
import App from './App.vue'
import Hello from './components/Hello.vue'
import FirstChart from "./components/FirstChart.vue";


export function registerApp(tag: string) {
  console.log('Registering from main.js', tag)
  createApp(App).mount(tag )
}

export function registerHello(msg: string)
{
  console.log('Registering hello...')
  createApp(Hello, {msg: msg}).mount('#vue-element')
}

export function registerFirstChart(tag: string, msg: string)
{
  console.log('Registering First Chart...')
  createApp(FirstChart, {msg: msg}).mount(tag)
}

import HiChart from "./components/HiChart.vue";
export function registerHiChart(tag: string)
{
  console.log('Registering Hi Chart...')
  createApp(HiChart)
      .mount(tag)
}

import HiBarChart from "./components/HiBarChart.vue";
export function registerHiBarChart(tag: string)
{
  console.log('Registering Hi Chart...')
  createApp(HiBarChart)
      .mount(tag)
}

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueCheatSheet from "./components/VueCheatSheet.vue";
export function registerVueCheatSheet(tag: string)
{
  console.log('Registering Vue CheatSheet...')
  createApp(VueCheatSheet)
      .use(ElementPlus)
      .mount(tag)
}

