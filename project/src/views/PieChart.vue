<template>
    <h2> Boroughs Each Open Street Belong To </h2>
    <Pie :data="data" :options="options" aria-label="a pie chart displaying the amount of open streets in each borough in NYC"/>
</template>

<script lang="ts">
//this can also be a chart of how many streets open on thurs sat etc etc days of the week; you can use blank.include("idkkwjednkwed") and things
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from '../components/chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Pie
  },
  data() {
    return chartConfig
  }
}
</script>

<style scoped>
*, body, html{
  height: max-content;
  width: max-content;
}
h2{
  margin: auto;
  padding: 1%;
}
</style>