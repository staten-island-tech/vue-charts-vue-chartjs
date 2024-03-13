<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"></Bar>   
  </template>
  
  <script>
  import {Bar } from "vue-chartjs"
  export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: true,
  }),
  async mounted () {
    this.loaded = false

    try {
      const { userlist } = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json')
      this.chartData = userlist


      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
  </script>