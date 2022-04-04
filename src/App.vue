<template>
  <div class="bg-white min-h-screen">
    <TheHeader/>
    <main class="mx-auto">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
  import TheHeader from '@/components/TheHeader.vue'
</script>

<style>
  @import './assets/base.css';
</style>
