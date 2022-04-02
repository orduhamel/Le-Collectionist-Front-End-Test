<template>
  <TheHeader/>
  <main class="bg-white">
    <router-view></router-view>
  </main>
</template>

<script setup>
  import TheHeader from '@/components/TheHeader.vue'
</script>

<style>
  @import './assets/base.css';
</style>
