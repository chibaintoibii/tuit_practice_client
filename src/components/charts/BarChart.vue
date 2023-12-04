<template>
  <BarChart :chartData="data" :options="options"/>
</template>

<script lang="ts">

import {Chart, registerables} from "chart.js";
import {DoughnutChart, PieChart, LineChart, PolarAreaChart, BarChart, ScatterChart, RadarChart} from "vue-chart-3";


Chart.register(...registerables);
export default {
  name: 'MyBarChart',
  components: {DoughnutChart, PieChart, LineChart, PolarAreaChart, BarChart, ScatterChart, RadarChart},
  props: {
    data: {
      type: Object,
    },
    options: {
      type: Object
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>