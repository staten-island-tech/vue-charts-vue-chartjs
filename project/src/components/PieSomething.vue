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

  
  console.log(broNx.value.length);
  console.log(broOklyn.value.length);
  console.log(staTenis.value.length);
}

onMounted(()=>{
  getData()
})
</script>