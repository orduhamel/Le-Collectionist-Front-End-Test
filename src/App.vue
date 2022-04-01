<script setup>
  import TheHeader from './components/TheHeader.vue'
  import TheHomePage from './components/TheHomePage.vue'
</script>

<template>
  <TheHeader/>
  <main class="bg-no-repeat bg-cover" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://get.wallhere.com/photo/1440x900-px-minimalism-monochrome-movies-Pulp-Fiction-1439403.jpg)">
    <TheHomePage/>
  </main>
</template>

<style>
  @import './assets/base.css';
</style>
