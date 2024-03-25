<template>
    <div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const streets = ref('')
async function getData(){
  let res = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json')
  let fdata = await res.json()
  streets.value = fdata.results;
  console.log(fdata[32]);
}
onMounted(()=>{
  getData()
})

// empty arrays for each brough -> push those with the specific borough name into the corres. array; then array.length it and just use that data for the chartcongfig thing
//then. using the data, the "data" of the chartconjig gets updated . or you can use filter. filter(jekferjnf).uerfherif ewwjd = jsdskjdf ejdwen and then you just kinda array.length again
let manHatt = [];
let broOklyn = [];
let BroNx = [];
let queEns = [];
let staTenis = [];


</script>