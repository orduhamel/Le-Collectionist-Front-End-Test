<script setup>
  defineProps({
    cardTitle: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="card-category" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg)">
    {{ cardTitle }}
  </div>
</template>

<style scoped>
  .card-category {
    background-size: cover;
    background-position: center;
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
  }
</style>
