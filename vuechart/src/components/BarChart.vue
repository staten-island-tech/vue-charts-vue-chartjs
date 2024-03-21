<template>
  <div class="container">
    <Bar id="my-chart-id" :data="chartData"></Bar>   
  </div>
    
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'bk', 'si', 'm'],
        datasets: [
          {
            label: 'boroughs',
            backgroundColor: '#F6BDD1',
            data: [40, 20, 12]
          }
        ]
      }
    }
  }
}
  </script>

<style scoped>
.container{
  width: 1000px;
}
</style>
  <!-- export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    //chartData: null,
  }),
  async mounted () {
    this.loaded = false
  
    try {
      const { thedata } = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json')
      this.chartData = thedata
            this.loaded = true,
      data();{
        return {
          chartData: {
          labels: ['thedata.boroughname'] 
        }, };

      }
        

      
    } catch (e) {
      console.error(e)
    }
  }
}

import { Bar } from "vue-chartjs"
  export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    //chartData: null,
  }),
  async mounted () {
    this.loaded = false
  

    try {
      const { userlist } = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json')
      this.chartData = userlist


      this.loaded = true
      console.log(chartData)
    } catch (e) {
      console.error(e)
    }
  }
}-->