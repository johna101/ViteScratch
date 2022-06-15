<template>
  <div style="height:600px">
    <div style="height:100%">
<!--      <Chart style="height:100%" ref="chart"  :options="chartOptions" :updateArgs="[true, false]"></Chart>-->
    </div>
    <button @click="click">Add</button>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted, onBeforeMount} from "vue";
// import {Chart} from 'highcharts-vue'
// import Highcharts from 'highcharts'
// import stockInit from 'highcharts/modules/stock'

const chart = ref(null);

function click() {
  chartOptions.title.text = "Barchart updated"
}

// const results = [
//   {
//     "Name": "Pass",
//     "Total": 2556
//   },
//   {
//     "Name": "Pass (Sensitive)",
//     "Total": 125
//   },
//   {
//     "Name": "Pass with Eat Safe",
//     "Total": 47
//   },
//   {
//     "Name": "Pass with Eat Safe (Sensitive)",
//     "Total": 0
//   },
//   {
//     "Name": "Improvement Required",
//     "Total": 889
//   },
//   {
//     "Name": "Improvement Required (Sensitive)",
//     "Total": 5
//   },
//   {
//     "Name": "Awaiting Inspection",
//     "Total": 1017
//   },
//   {
//     "Name": "Awaiting Inspection (Sensitive)",
//     "Total": 190
//   },
//   {
//     "Name": "Exempt",
//     "Total": 23
//   },
//   {
//     "Name": "Exempt (Sensitive)",
//     "Total": 18
//   },
//   {
//     "Name": "Out of Scope",
//     "Total": 994
//   },
//   {
//     "Name": "Value not recognised",
//     "Total": 1
//   }
// ]
const results = [
  [
    "Pass",
    2556
  ],
  [
    "Pass (Sensitive)",
    125
  ]
]

const chartOptions = reactive({
  chart: {
    type: 'bar',
  },
  title: {
    text: "A Barchar",
    subtitle: "A Subtitle"
  },
  plotOptions: {
    series: {
      opacity: 0.5,
      shadow: false,
      borderRadius: 5,
      dataLabels: {
        enabled: true,
        borderRadius: 5,
        backgroundColor: 'rgba(252, 255, 197, 0.3)',
        color: 'rgba(1, 1, 1, 0.5)',
        borderWidth: 1,
        borderColor: '#AAA',
        y: -15,
        x: 0,
        style: {
          textOutline: "none"
        }
      },
      groupPadding: 0
    }
  },
  series: [{
    data: [
      2556, 125, 47, 0, 889, 5, 1017, 190, 23, 18, 994, 1
    ]
  }],
  yAxis: {
    labels: {
      align: 'left',
      x: 0,
      y: -2
    },
    offset:20
  },
  xAxis: {
    labels: {
      align: "left",
      x: 2,
      y: 6,
      style: {
        fontSize: '13px',
        fontFamily: 'sans-serif'
      },
      
    },
    categories: [
      "Pass",
      "Pass (Sensitive)",
      "Pass with Eat Safe",
      "Pass with Eat Safe (Sensitive)",
      "Improvement Required",
      "Improvement Required (Sensitive)",
      "Awaiting Inspection",
      "Awaiting Inspection (Sensitive)",
      "Exempt",
      "Exempt (Sensitive)",
      "Out of Scope",
      "Value not recognised"
    ]
  }
})

</script>

<style scoped>
#highcharts-container {
  height: 100%;
}
#chart {
  height: 600px;
}
</style>



