import { createApp } from "vue";
import App from "./App.vue";
import 'vite/modulepreload-polyfill';
// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import 'uno.css'
import {add, CheckDateRange} from 'functions'

const startDate = new Date(2016, 0, 1)
const endDate = new Date(2018, 0, 1)
let resultDates = CheckDateRange([ startDate, endDate])
console.log('resultDates..: ', resultDates)

let result = add(1,2)
console.log('result....: ', result)

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

export function registerApp(tag: string) {
    console.log('Registering from main.js', tag)
    createApp(App).mount(tag )
}

import HiBarChart from "./components/HiBarChart.vue";
export function registerHiBarChart(tag: string)
{
    console.log('Registering Hi Chart...')
    createApp(HiBarChart)
        .mount(tag)
}


// const app = createApp(App);
// // app.use(ElementPlus);
// app.mount("#app");
