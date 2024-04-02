<template>
  <!-- <div class="container">
    <div class="card" :key="streets">
         <p>organization: {{street.organi}}</p>
    </div>
    </div>
 -->
</template>

<script setup>
/* import { ref, onMounted, defineProps } from 'vue';
const props = defineProps({
  street: Object,
})

const URL = `https://data.cit yofnewyork.us/resource/uiay-nctu.json`

const data = ref('')
const streets = ref('')
async function getData() {
  let response = await fetch(URL)
  data.value = await response.json()
  streets.value = data.value
  let organi = streets.orgname
  console.log(streets)
}
onMounted(() => {
  getData()
})

getData(URL) */
</script>

<style scoped>

.card{
  margin: 30px;
  width: 100px;
  height: 100px;
}
.container{
  width: 500px;
}
</style>