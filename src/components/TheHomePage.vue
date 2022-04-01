<script setup>
import BaseCard from './BaseCard.vue'
</script>

<template>
  <div class="cards-container">
    <div class="cards">
      <BaseCard cardTitle="Breakfast at Tiffany"></BaseCard>
      <BaseCard cardTitle="Casa Del Papel"></BaseCard>
      <BaseCard cardTitle="Hercule Poirot"></BaseCard>
      <BaseCard cardTitle="Harry Potter"></BaseCard>
    </div>
  </div>
</template>

<style scoped>
  .cards-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }

  /* // Smallest device */
  @media (min-width: 100px) and (max-width: 575px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }

  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    .cards {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .cards {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .cards {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
