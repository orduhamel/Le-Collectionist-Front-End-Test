<template>
  <section class="py-10 px-20 lg:px-28 bg-homepage bg-cover bg-center h-full">
    <h1 class="font-bold leading-tight text-gray-50 text-3xl mb-6">Films du moment</h1>
    <ul role="list" class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 md:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      <BaseCard
        v-for="film in filmTrendingStore.trendingFilms.slice(0, 4)"
        :key="film.id"
        :film="film"
      />
    </ul>
  </section>
</template>

<script setup>
  import BaseCard from '@/components/BaseCard.vue'
  import { useFilmTrendingStore } from "@/stores/FilmTrendingStore.js";

  const filmTrendingStore = useFilmTrendingStore();

  filmTrendingStore.fetchTrendingFilms();
</script>
