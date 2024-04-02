<template>
  <div class="card">
    <h2>{{ streets }}</h2>
    <h3>{{ timeO }}</h3>
    <h3>{{ borough }}</h3>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  streets: String,
  timeO: String,
  borough: String,
});

console.log(props);
</script>

<style scoped>
.card{
  background-color: #f0ede8;
  padding: 3%;
  margin: 1%;
}
h2{
  font-weight: bold;
}
</style>