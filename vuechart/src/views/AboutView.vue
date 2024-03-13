<template>
    <div>

    </div>
</template>

<script setup>
import {ref , onBeforeMount} from 'vue';
const pokemon = ref("");
async function getPokemon(){
    let res = await fetch ('https://data.cityofnewyork.us/resource/uiay-nctu.json');
    let data = await res.json();
    pokemon.value = data;
}
onBeforeMount(() =>{
    getPokemon();
})
</script>

<style scoped>

</style>