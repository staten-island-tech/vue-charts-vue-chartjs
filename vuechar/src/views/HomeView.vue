
<template>
<div class="card" :key="street">
{{ street }}
</div>
</template>
<script>
const URL = "https://data.cityofnewyork.us/resource/uiay-nctu.json";
async function getData(){
  try {
      const response = await fetch(URL);
      if (response.status != 200) {
          throw new Error (response.statusText);
      }
      const newcards = await response.json();
      console.log(newcards)
      const street = newcards.appronstre
      const borough = newcards.boroughname
    } catch (error) {
      console.log(error,"uh oh");
  }
}
</script>