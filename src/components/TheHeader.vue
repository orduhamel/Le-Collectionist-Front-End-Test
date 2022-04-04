<template>
  <header class="bg-indigo-100">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between lg:border-none">
        <div class="flex items-center">
          <router-link :to="'/'">
            <span class="sr-only">Salto</span>
            <img class="h-10 w-auto" src="@/assets/logo.png" alt="" />
          </router-link>
        </div>
        <div class="flex">
          <BaseButton buttonText="Favoris" buttonUrl="/films/favorites"/>
          <BaseButton buttonText="Films" buttonUrl="/films"/>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
  import BaseButton from './BaseButton.vue'
</script>
