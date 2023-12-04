<template>

  <DoughnutChart :chartData="data" :height="350"/>
</template>

<script lang="ts">
import {Chart, registerables} from "chart.js";
import {DoughnutChart, PieChart, LineChart, PolarAreaChart, BarChart} from "vue-chart-3";


Chart.register(...registerables);

export default {
  name: 'MyDoughnutChart',
  components: { DoughnutChart, PieChart,LineChart, PolarAreaChart, BarChart,},
  props: {
    data: {
      type: Object,
    }
  },
  data() {
    return {

    }
  }
}
</script>