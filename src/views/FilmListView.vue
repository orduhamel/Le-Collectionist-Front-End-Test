<template>
  <div class="py-10 px-6 lg:px-28">
    <h1 class="font-bold leading-tight text-gray-900 text-3xl mb-6">Films</h1>
    <BaseTabs @selectedGenreId="changeGenreId"/>
    <ul role="list" class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      <BaseCard
        v-for="film in filmStore.getFilms"
        :key="film.id"
        :film="film"
      />
    </ul>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'

  import BaseTabs from '@/components/BaseTabs.vue'
  import BaseCard from '@/components/BaseCard.vue'

  import { useFilmStore } from "@/stores/FilmStore.js";

  const filmStore = useFilmStore();

  const changeGenreId = (selectedGenreId) => {
    filmStore.$patch({
      genre: selectedGenreId,
      films: []
    })
    filmStore.fetchFilms(filmStore.genre);
  }

  onMounted(() => {
    filmStore.fetchFilms();
  })
</script>
