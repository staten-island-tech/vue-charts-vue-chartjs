<template>
  <main>
    <h2> This is the home page. </h2>
  </main>
</template>

<script setup>
import { data } from '@/components/chartConfig';
import { ref, onMounted } from 'vue';
const streets = ref('')
async function getData(){
  let res = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json')
  let fdata = await res.json()
  streets.value = fdata.results
  console.log(fdata);
}
onMounted(()=>{
  getData()
})
</script>