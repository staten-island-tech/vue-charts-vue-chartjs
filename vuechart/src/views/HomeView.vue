<template>
  <div class="container">
    <div class="card" :key="street">
         <p>{{street}}</p>
    </div>
    </div>

</template>

<script setup>
const props = defineProps({
  newcards: Object,
})

const URL = `https://data.cityofnewyork.us/resource/uiay-nctu.json`
async function getData(){
  try {
      const response = await fetch(URL);
      if (response.status != 200) {
          throw new Error (response.statusText);
      }
      const newcards = await response.json();
        const street = newcards.appronstre
       var borough = newcards.boroughname;
       return street, borough 
       // console.log("street:", street,"borough",borough);
           // console.log   street, borough
      }
   catch (error) {
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