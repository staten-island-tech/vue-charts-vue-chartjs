<template>
  <div class="container">

    <div class="card">
        <p><h2 class="organization">{{orgname}}</h2></p> 
        <p><h3 class="street">{{appronstre}}      </h3></p>
        <h2 class="theborough">{{boroughname}}</h2>
      </div>

    </div>

</template>

<script setup>
const URL = `https://data.cityofnewyork.us/resource/uiay-nctu.json`
async function getData(){
  try {
      const response = await fetch(URL);
      if (response.status != 200) {
          throw new Error (response.statusText);
      }
      const newcards = await response.json();
      console.log(newcards.boroughname);
  
return newcards.appronstre, newcards.boroughname, newcards.orgname;
  } catch (error) {
      console.log(error,"uh oh");
  }
}



getData(URL)
</script>

<style scoped>

.thing{
  margin: 30px;
}

</style>