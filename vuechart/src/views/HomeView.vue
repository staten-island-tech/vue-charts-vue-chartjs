<template>
  <div class="container">

    <div class="card">
         <p>{{street}}</p>
      <!--:key="" --></div>

    </div>

</template>

<script setup>
const props = defineProps({
  newcard: Object
})
const URL = `https://data.cityofnewyork.us/resource/uiay-nctu.json`
async function getData(){
  try {
      const response = await fetch(URL);
      if (response.status != 200) {
          throw new Error (response.statusText);
      }
      const newcards = await response.json();
       
      newcards.forEach(a => {
       const street = a.appronstre
       const borough = a.boroughname
        return{
           street, borough
        }
           // console.log(street,"in", borough);
      });
 
  } catch (error) {
      console.log(error,"uh oh");
  }
}

getData(URL)
</script>

<style scoped>

.card{
  margin: 30px;
width: 100px;
  height: 100px;
}

</style>