<template>
  <div>
    <h2> Boroughs Each Open Street Belong To </h2>
    <div class="container">
      <Pie v-if="loaded" :data="chartData" :options="chartOptions" aria-label="a pie chart displaying the amount of open streets in each borough in NYC"/>
    </div>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs';
import { ref } from 'vue';

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      loaded: false,
      chartData: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
      }
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const manHatt = ref([]);
      const broOklyn = ref([]);
      const broNx = ref([]);
      const queEns = ref([]);
      const staTenis = ref([]);

      try {
        let res = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json');
        let fdata = await res.json();
        console.log('Fetched data:', fdata);

        fdata.forEach(street => {
          console.log('Borough:', street.boroughname);
          if (street.boroughname === 'Staten Island') {
            staTenis.value.push(street);
          } else if (street.boroughname === 'Manhattan') {
            manHatt.value.push(street);
          } else if (street.boroughname === 'Brooklyn') {
            broOklyn.value.push(street);
          } else if (street.boroughname === 'Bronx') {
            broNx.value.push(street);
          } else if (street.boroughname === 'Queens') {
            queEns.value.push(street);
          }
        });

        console.log(manHatt.value.length);
        console.log(broOklyn.value.length);
        console.log(broNx.value.length);
        console.log(queEns.value.length);
        console.log(staTenis.value.length);

        const manHattL = manHatt.value.length;
        const broOklynL = broOklyn.value.length;
        const broNxL = broNx.value.length;
        const queEnsL = queEns.value.length;
        const staTenisL = staTenis.value.length;

        this.chartData = {
          labels: ['Staten Island', 'Brooklyn', 'Manhattan', 'Queens', 'Bronx'],
          datasets: [{
            backgroundColor: ['#AC92EB', '#4FC1E8', '#A0D568', '#FFCE54', '#ED5564'],
            data: [staTenisL, broOklynL, manHattL, queEnsL, broNxL],
          }]
        };

        this.loaded = true;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>

<style scoped>

h2 {
  margin: 0 auto;
  padding: 1%;
}
</style>
