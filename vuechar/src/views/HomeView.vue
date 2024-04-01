
<template>
<div class="card">
<h2>{{ street.appronstre }}</h2>
</div>
</template>
<script>
import {ref, defineProps} from 'vue';
const url = "https://data.cityofnewyork.us/resource/uiay-nctu.json";
 const mydata = ref("")
async function getData(){
  const response = await fetch(url);
  let data = response.json
  streets.value = data;
  console.log(data)
} 
const props = defineProps({
  street: Object,
})
/*export default {
  setup(){
    const result = []
   fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json')
    .then(response => response.json())
    .then(data => result.value = data)
   
    let street = result.appronstre 
    console.log(street) 
  }

}*/
</script>