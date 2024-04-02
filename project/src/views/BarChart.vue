<template>
  <h2 class="title">days when street is open!</h2>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" aria-label="bar chart showing how many streets are open on each day of the week"></Bar>   
  </div>
    
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import {ref} from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      loaded: false,
      chartData: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
      }
    }
  },
  mounted(){
    this.getData();
  },
  methods:{
    async getData() {
      const mon = ref([]);
      const tues = ref([]);
      const wed = ref([]);
      const thurs = ref([]);
      const fri = ref([]);
      const sat = ref([]);
      const sun = ref([]);


      try {
        let res = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json');
        let thedata = await res.json();
        console.log('Fetched data:', thedata);

        thedata.forEach(street => {
          //console.log('open on friday:', street.apprfriope);
          if (street.apprdayswe == "mon,tue,wed,thu,fri") {
            mon.value.push(street);
            tues.value.push(street);
            wed.value.push(street);
            thurs.value.push(street);
            fri.value.push(street);
          } else if (street.apprdayswe == "fri,sat,sun") {
            fri.value.push(street);
            sat.value.push(street);
            sun.value.push(street);
          } else if (street.apprdayswe == "mon,tue,wed,thu,fri,sat,sun") {
            mon.value.push(street);
            tues.value.push(street);
            wed.value.push(street);
            thurs.value.push(street);
            fri.value.push(street);
            sat.value.push(street);
            sun.value.push(street);
          } else if (street.apprdayswe == 'mon') {
            mon.value.push(street);
          } else if (street.apprdayswe == 'tues') {
            tues.value.push(street);
          } else if (street.apprdayswe == 'wed') {
            wed.value.push(street);
          } else if (street.apprdayswe =='thurs') {
            thurs.value.push(street);
          } else if (street.apprdayswe == 'fri') {
            fri.value.push(street);
          } else if (street.apprdayswe == 'sat') {
            sat.value.push(street);
          } else if (street.apprdayswe == 'sun') {
            sun.value.push(street);
          }
        });

/*         console.log(sun.value.length);
        console.log(mon.value.length);
        console.log(tues.value.length);
        console.log(wed.value.length);
        console.log(thurs.value.length);
        console.log(fri.value.length);
        console.log(sat.value.length);
        console.log(sun.value.length);

 */
        const sul = sun.value.length;
        const ml = mon.value.length;
        const tuel = tues.value.length;
        const wl = wed.value.length;
        const thl = thurs.value.length;
        const fl = fri.value.length;
        const sl = sat.value.length;

        this.chartData = {
          label: ['days of the week'],
          labels: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
          datasets: [{
            backgroundColor: ['#62929E',' #56808D','#507785', '#4D7281', '#4A6D7C', '#49626A', '#475657'],
            data: [sul,ml,tuel,wl,thl,fl,sl],
          }]
        };
  
        this.loaded = true;
      } catch (error) {
        console.error('oops', error);
      }
    }
  }
}

  </script>

<style scoped>
.container{
  align-self: center;
}
.title{
  width: 1000px;
  text-align: center;
  margin-left: 200px;
}
</style>