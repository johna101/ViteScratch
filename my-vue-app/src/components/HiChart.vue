<template>
  <div class="chartElem ">
    <div class="row">
<!--      <Chart ref="chart" :constructor-type="'stockChart'" class="chart" :options="chartOptions" :updateArgs="[true, false]"></Chart>-->
    </div>
    <button @click="click">Add</button>
    <button @click="fetchData">Fetch</button>
  </div>
</template>

<script setup>
import {ref, reactive, onMounted, onBeforeMount} from "vue";
// import {Chart} from 'highcharts-vue'
// import Highcharts from 'highcharts'
// import stockInit from 'highcharts/modules/stock'

const chart = ref(null);

async function fetchData() {
  let response = await fetch('https://localhost:5020/reporting/items-per-month');
  let data = await response.json();
  console.log(data);
  // chartOptions.value.plotOptions.series.pointStart = data.axis[0];
  chartOptions.value.series = [
    {
      data: data.data.complaints,
      color: 'green'
    },
    {
      data: data.data.interventions,
      color: 'blue'
    },
    {
      data: data.data.enforcements,
      color: 'orange'
    }
  ];
  chartOptions.value.title.text = "Blerg"
  console.log("done");
}

function click() {
  chartOptions.value.title.text = "Did it change?????"
  chartOptions.value.series = [
    {
      data: results.complaints,
      color: 'green',
    },
    {
      data: results.interventions,
      color: 'blue'
    }
  ]
}

stockInit(Highcharts)

const results = {
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

const chartOptions = ref({
  title: {
    text: "A title",
    subtitle: "A Subtitle"
  },
  plotOptions: {
    series: {
      pointStart: Date.UTC(2020, 1, 1),
      pointIntervalUnit: 'month'
    }
  },
  xAxis: {
    type: 'datetime'
  },
  series: [
    {}, {}, {}

  ]
})

onMounted(async () => {

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



