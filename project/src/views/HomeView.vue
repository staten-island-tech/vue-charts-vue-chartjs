<template>
  <main>
    <h2> This is the home page. </h2>
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
  console.log(fdata[232].appronstre);
  // let i = 0;
  // for(i=0; i<fdata.length; i++){
  //   console.log(fdata[i].appronstre);
  // }
}
onMounted(()=>{
  getData()
})
</script>