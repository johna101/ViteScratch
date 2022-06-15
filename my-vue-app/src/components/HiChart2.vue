<template>
  <div class="chartElem ">
    <div class="row">
      <Chart ref="chart" :constructor-type="'stockChart'" class="chart" :options="chartOptions" :updateArgs="[true, true]"></Chart>
    </div>
    <button @click="click">Add</button>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeMount} from "vue";
import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'

const chart = ref(null);

function click() {
  chartOptions.series[0].data = results.interventions;
  chartOptions.series.push({data: results.interventions})
  // Highcharts.charts[0].update("active")
}

stockInit(Highcharts)

const results =  {
  complaints: [
    24,
    37,
    14,
    23,
    36,
    21,
    29,
    21,
    28,
    17,
    30,
    20,
    36,
    37,
    34,
    12,
    24,
    39,
    39,
    18,
    25,
    32,
    31,
    12
  ],
  interventions: [
    563,
    534,
    695,
    732,
    783,
    497,
    411,
    444,
    404,
    454,
    398,
    263,
    404,
    427,
    271,
    13,
    18,
    17,
    7,
    14,
    9,
    25,
    48,
    102
  ]
}

const chartOptions = {
  title: {
    text: "A title",
    subtitle: "A Subtitle"
  },
  plotOptions: {
    series: [{
      pointStart: Date.UTC(2019, 3, 1),
      pointIntervalUnit: 'month'
    }]
  },
  xAxis: {
    type: 'datetime'
  },
series: [{data: [1,2,3,4]}]
  // series: [{
  //   data:  [
  //     24,
  //     37,
  //     14,
  //     23,
  //     36,
  //     21,
  //     29,
  //     21,
  //     28,
  //     17,
  //     30,
  //     20,
  //     36,
  //     37,
  //     34,
  //     12,
  //     24,
  //     39,
  //     39,
  //     18,
  //     25,
  //     32,
  //     31,
  //     12
  //   ],
  //   color: '#6fcd98'
  // }, {
  //   data:  [
  //     563,
  //     534,
  //     695,
  //     732,
  //     783,
  //     497,
  //     411,
  //     444,
  //     404,
  //     454,
  //     398,
  //     263,
  //     404,
  //     427,
  //     271,
  //     13,
  //     18,
  //     17,
  //     7,
  //     14,
  //     9,
  //     25,
  //     48,
  //     102
  //   ],
  //   color: '#66aabf'}]
}

onBeforeMount(() => {
  chartOptions.series[0].data = results.complaints
})
</script>

<style>
.highcharts-figure,
.highcharts-data-table table {
  min-width: 310px;
  max-width: 800px;
  margin: 1em auto;
}

#container {
  height: 400px;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>



