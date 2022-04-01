<script setup>
  import TheHeader from './components/TheHeader.vue'
  import TheHomePage from './components/TheHomePage.vue'
</script>

<template>
  <header>
    <TheHeader/>
  </header>
  <main class="background" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/background.png)">
    <TheHomePage/>
  </main>
</template>

<style>
  @import './assets/base.css';

  header {
    height: 60px;
    display: sticky;
    top: 0;
    left: 0;
    right: 0;
  }

  .background {
    /* height: 100vh; */
    /* width: 100vw; */
    /* background-image: url('@/assets/image-background.png'); */
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
