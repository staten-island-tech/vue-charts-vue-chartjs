<template>
  <div class="container">
    <StreetCard v-for="(street) in streets" 
      :key="street.object_id" 
      :streets="street.appronstre" 
      :timeO="street.apprdayswe" 
      :borough="street.boroughname"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import StreetCard from "../components/StreetCard.vue";

const streets = ref('');

async function getData() {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/uiay-nctu.json');
    const data = await res.json();
    streets.value = data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getData();
});
</script>

<style>
.container {
  margin: 2% auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>