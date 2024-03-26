<template>
    <div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
const streets = ref('')

export let manHatt = ref([]);
export let broOklyn = ref([]);
export let broNx = ref([]);
export let queEns = ref([]);
export let staTenis = ref([]);

async function getData(){
  let res = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json')
  let fdata = await res.json()
  streets.value = fdata.results;
  console.log(fdata[8]);

  fdata.forEach(el => {
  if(fdata.appronstre === "Brooklyn"){
    broOklyn.value.push(el);
    console.log(broOklyn.value.length);
  } else if(fdata.appronstre === "Staten Island"){
    staTenis.value.push(el);
  } else if(fdata.appronstre === "Manhattan"){
    manHatt.value.push(el);
  } else if(fdata.appronstre === "Queens"){
    queEns.value.push(el);
  } else {
    broNx.value.push(el);
  }
  });

  console.log(broNx.length);
  console.log(broOklyn.length);
  console.log(staTenis.length);
}

onMounted(()=>{
  getData()
})
</script>