<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"></Bar>
 <div class="container" v-if="loaded" :data="chartData">  </div>
  
  </template>
  
  <script>
  import {Bar } from "vue-chartjs"
  export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: {
        labels: ["b", "q", "m"]
    }
  }),
  async mounted () {
    this.loaded = false

    try {
      const { userlist } = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json')
      this.chartdata = userlist


      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
  </script>