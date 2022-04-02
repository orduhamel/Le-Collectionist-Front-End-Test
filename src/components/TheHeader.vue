<script setup>
  import BaseButton from './BaseButton.vue'
</script>

<template>
<header class="bg-indigo-800">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
    <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
      <div class="flex items-center">
        <router-link to="/">
          <span class="sr-only">Salto</span>
          <img class="h-10 w-auto" src="@/assets/logo.png" alt="" />
        </router-link>
      </div>
      <div class="ml-10 space-x-4">
        <router-link to="/films" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
          Films
        </router-link>
      </div>
    </div>
  </nav>
</header>
</template>

<style scoped>
</style>
