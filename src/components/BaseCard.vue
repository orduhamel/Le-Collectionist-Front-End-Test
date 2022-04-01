<script setup>
  defineProps({
    cardTitle: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="text-white text-2xl font-bold drop-shadow h-60 flex justify-center items-center rounded shadow-md bg-cover bg-center" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg)">
    {{ cardTitle }}
  </div>
</template>

<style scoped>
</style>
