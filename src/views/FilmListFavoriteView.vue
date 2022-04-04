<template>
  <div class="py-10 px-6 lg:px-28">
    <h1 class="font-bold leading-tight text-gray-900 text-3xl mb-6">Favoris</h1>
    <ul role="list" class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      <BaseCard
        v-if="filmFavoriteStore.favorites.length"
        v-for="film in filmFavoriteStore.favorites"
        :key="film.id"
        :film="film"
      />
      <p v-else class="text-gray-900">Pas de films favoris.</p>
    </ul>
  </div>
</template>

<script setup>
  import BaseCard from '@/components/BaseCard.vue'
  import { useFilmFavoriteStore } from "@/stores/FilmFavoriteStore.js";

  const filmFavoriteStore = useFilmFavoriteStore();
</script>
