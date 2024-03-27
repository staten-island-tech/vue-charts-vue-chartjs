<template>
    <h2> Boroughs Each Open Street Belong To </h2>
    <div class="container">
      <Pie v-if="loaded" :data="chartData" :options="chartOptions" aria-label="a pie chart displaying the amount of open streets in each borough in NYC"/>
    </div>
</template>

<script>
//this can also be a chart of how many streets open on thurs sat etc etc days of the week; you can use blank.include("idkkwjednkwed") and things
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import { manHatt, broOklyn, broNx, queEns, staTenis } from "../components/PieSomething.vue"

ChartJS.register(ArcElement, Tooltip, Legend)

const manHattL = manHatt.value.length;
const broOklynL = broOklyn.value.length;
const broNxL = broNx.value.length;
const queEnsL = queEns.value.length;
const staTenisL = staTenis.value.length;

/* 
export default {
  name: 'App',
  components: {
    Pie
  },
  data() {
    return {
      chartData:{      
        labels: ['Staten Island', 'Brooklyn', 'Manhattan', 'Queens', 'Bronx'],
        datasets: [
          {
            backgroundColor: ['#AC92EB', '#4FC1E8', '#A0D568', '#FFCE54', '#ED5564'],
            data: [manHattL, broOklynL, broNxL, queEnsL, staTenisL],
          }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 3,
      }
    }  
  }
} */

export default {
  name: 'PieChart',
  components: { Pie },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false

    try {
      const { fdata } = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json')
      this.chartdata = fdata

      this.loaded = true
    } catch (error) {
      console.error(error)
    }
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