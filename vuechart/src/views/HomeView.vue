<template>
  <div class="container">

    <div class="card">
         <p><h3 >{{newcard.street}}     </h3></p>
      <!--:key="" --></div>

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
       
      newcards.forEach(a => {
       const street = a.appronstre
        const borough = a.boroughname

              //console.log(street, borough);
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
  width: 40rem;
  height: 40rem;
}

</style>