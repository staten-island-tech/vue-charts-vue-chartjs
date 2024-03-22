<template>
    <h2> Boroughs Each Open Street Belong To </h2>
    <Pie :data="data" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from '../components/chartConfig.ts'

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