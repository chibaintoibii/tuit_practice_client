<template>
  <div class="container-fluid mt-3 overflow-auto">
    <div class="row">
      <div class="col-md-4 col-sm-6 col-12 mb-2">
        <div class="card p-3 bg-custom-primary text-white flex-row align-items-center justify-content-between">
          <i class="fa fa-2x fa-user-graduate"></i>
          <h5 class="mb-0">{{ this.$localeToText('total_students') }} :</h5>
          <h5 class="mb-0">2340</h5>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-12 mb-2">
        <div class="card p-3 bg-custom-primary text-white flex-row align-items-center justify-content-between">
          <i class="fa fa-2x fa-users"></i>
          <h5 class="mb-0">{{ this.$localeToText('total_teachers') }} :</h5>
          <h5 class="mb-0">67</h5>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-12 mb-2">
        <div class="card p-3 bg-custom-primary text-white flex-row align-items-center justify-content-between">
          <i class="fa fa-2x fa-book"></i>
          <h5 class="mb-0">{{ this.$localeToText('total_reports') }} :</h5>
          <h5 class="mb-0">23423</h5>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12 col-md-5">
        <p class="text-center fw-bold text-custom-dark">Hisobotlar bo'yicha statistika</p>
        <MyDoughnutChart :data="testData1"/>
      </div>
      <div class="col-sm-12 col-md-7">
        <p class="title text-custom-dark fw-bold text-center">{{ this.$localeToText('recent_reports') }}</p>
        <table class="custom-table mb-2">
          <thead>
          <tr>
            <th class="text-left">№</th>
            <th class="text-center">{{ this.$localeToText('sender') }}</th>
            <th class="text-center">{{ this.$localeToText('submitted_at') }}</th>
            <th class="text-end pe-3">{{ this.$localeToText('status') }}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td class="text-center">Hasanov Diyorbek</td>
            <td class="text-center">2020-01-01</td>
            <td class="text-end"><span class="status status-checked">{{ this.$localeToText('checked') }}</span></td>
          </tr>
          <tr class="cursor-pointer">
            <td>2</td>
            <td class="text-center">Toshtemirov Samandar</td>
            <td class="text-center">2020-01-01</td>
            <td class="text-end"><span class="status status-unchecked">{{ this.$localeToText('unchecked') }}</span></td>
          </tr>
          <tr>
            <td>3</td>
            <td class="text-center">Xamidjonov Islom</td>
            <td class="text-center">2020-01-01</td>
            <td class="text-end"><span class="status status-checked">{{ this.$localeToText('checked') }}</span></td>
          </tr>
          <tr>
            <td>4</td>
            <td class="text-center">Hasanov Diyorbek</td>
            <td class="text-center">2020-01-01</td>
            <td class="text-end"><span class="status status-checked">{{ this.$localeToText('checked') }}</span></td>
          </tr>
          <tr>
            <td>5</td>
            <td class="text-center">Hasanov Diyorbek</td>
            <td class="text-center">2020-01-01</td>
            <td class="text-end"><span class="status status-unchecked">{{ this.$localeToText('unchecked') }}</span></td>
          </tr>
          <tr>
            <td>6</td>
            <td class="text-center">Hasanov Diyorbek</td>
            <td class="text-center">2020-01-01</td>
            <td class="text-end"><span class="status status-unchecked">{{ this.$localeToText('unchecked') }}</span></td>
          </tr>
          <tr>
            <td>7</td>
            <td class="text-center">Hasanov Diyorbek</td>
            <td class="text-center">2020-01-01</td>
            <td class="text-end"><span class="status status-checked">{{ this.$localeToText('checked') }}</span></td>
          </tr>
          <tr>
            <td>8</td>
            <td class="text-center">Hasanov Diyorbek</td>
            <td class="text-center">2020-01-01</td>
            <td class="text-end"><span class="status status-checked">{{ this.$localeToText('checked') }}</span></td>
          </tr>
          <tr>
            <td>9</td>
            <td class="text-center">Hasanov Diyorbek</td>
            <td class="text-center">2020-01-01</td>
            <td class="text-end"><span class="status status-checked">{{ this.$localeToText('checked') }}</span></td>
          </tr>
          <tr>
            <td>10</td>
            <td class="text-center">Hasanov Diyorbek</td>
            <td class="text-center">2020-01-01</td>
            <td class="text-end"><span class="status status-unchecked">{{ this.$localeToText('unchecked') }}</span></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-sm-12 overflow-x-auto">
        <MyBarChart :data="testData2" :options="options"/>

      </div>
    </div>
  </div>
</template>
<script lang="ts">

import MyDoughnutChart from "@/components/charts/DoughnutChart.vue";
import MyBarChart from "@/components/charts/BarChart.vue";

export default {
  name: 'Dashboard',
  components: {
    MyDoughnutChart,
    MyBarChart
  },
  data() {
    return {
      testData1: {
        labels: ['Baholangan', 'Baholanmagan', "Muddati o'tib ketgan"],
        datasets: [
          {
            data: [32, 40, 14],
            backgroundColor: ['#46BE8A', '#FFB700', '#FF5D5D'],
          }
        ],
      },
      testData2: {
        labels: ['KIF 211-20', 'AKT 231-19', "DIF 234-21", 'Telekom 642-22', 'AXF 832-20', 'Iqtisod 120-22', 'KIF 211-20', "DIF 234-21", 'Telekom 642-22', 'AKT 231-19', "DIF 234-21", 'KIF 211-20', 'AKT 231-19', "DIF 234-21", 'Telekom 642-22', 'AXF 832-20', 'Telekom 642-22', 'AXF 832-20', 'Iqtisod 120-22', "DIF 234-21", 'Telekom 642-22', 'AXF 832-20', 'Iqtisod 120-22', 'Iqtisod 120-22', "DIF 234-21", 'Telekom 642-22', 'AXF 832-20', 'Iqtisod 120-22'],
        datasets: [
          {
            label: 'baholangan',
            data: [14,10, 13, 10, 13, 32, 40, 14, 10, 13, 34, 32, 40, 14, 10, 13, 34, 50, 40, 14,10, 13, 10, 13, 14,10, 13, 10, 13],
            backgroundColor: '#46BE8A'
          },

          {
            label: 'baholanmagan',
            data: [14,10, 13, 10, 13, 35, 42, 3, 10, 13, 34, 32, 40, 14, 10, 13, 34, 50, 40, 14,10, 13, 10, 13, 14,10, 13, 10, 13],
            backgroundColor: '#FFB700'
          },
          {
            label: 'Muddati o\'tkan',
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 13, 10, 10, 10, 10 ,10, 10, 10, 10, 10, 10, 10, 14,10, 13, 10, 13],
            backgroundColor: '#FF5D5D'
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Har bir guruhning hisoboti bo\'yicha statistika',
          },
        },
      }
    }
  }
}
</script>
<style scoped></style>