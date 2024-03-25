<template>
  <main>
    <h2> This is the home page. </h2>
    <p></p>
  </main>
</template>

<script setup>
import { data } from '@/components/chartConfig.ts';
import { ref, onMounted } from 'vue';
import StreetCard from "@/components/StreetCard.vue"
const streets = ref('')
async function getData(){
  let res = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json')
  let fdata = await res.json()
  streets.value = fdata.results
  console.log(fdata);
  console.log(fdata.length);
  console.log(fdata[22].appronstre);
  console.log(fdata[213].orgname);
  // let i = 0; //this logs every appronstre object thing (commented out because it takes up too much space on the console log)
  // for(i=0; i<fdata.length; i++){
  //   console.log(fdata[i].appronstre);
  // }
}
onMounted(()=>{
  getData()
})
</script>