<template>
  <main>
    <h2> This is the home page. </h2>
    <p></p>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const streets = ref('')
async function getData(){
  let res = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json')
  let fdata = await res.json()
  streets.value = fdata.results
  console.log(fdata);
  console.log(fdata.length);
  console.log(fdata[241].appronstre);
  console.log(fdata[43].orgname);

/*   let i = 0;
  for(i=0; i<fdata.length; i++){
    if(fdata[i].appronstre.value === "Brooklyn"){
      broOklyn.push(fdata[i]);
    } else if(fdata[i].appronstre.value === "Staten Island"){
      staTenis.push(fdata[i]);
    } else if(fdata[i].appronstre.value === "Bronx"){
      broNx.push(fdata[i]);
    } else if(fdata[i].appronstre.value === "Manhattan"){
      manHatt.push(fdata[i]);
    } else {
      queEns.push(fdata[i]);
    }
  } */
}
onMounted(()=>{
  getData()
})
</script>