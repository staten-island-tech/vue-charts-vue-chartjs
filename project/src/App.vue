<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="home-link" to="/">Home</RouterLink>
        <RouterLink class="about-link" to="/about">About</RouterLink>        
        <RouterLink class="pie-link" to="/PieChart">Pie Chart</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.wrapper{
  background-color: #a52a2a;
  color: white;
  margin: 2% auto;
  width: 100%;
  padding: 1%;
  margin-top: 0%;
  transition: all 0.5s;
}
.home-link:hover, .about-link:hover, .pie-link:hover{
  background-color: #af4040;
}
</style>