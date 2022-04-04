<template>
  <div>
    <div class="mb-10 border-b border-gray-200">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <div v-for="filmGenre in filmGenreStore.genres" :key="filmGenre.name" :class="[filmStore.genre === filmGenre.id ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']" :aria-current="filmStore.genre === filmGenre.id ? 'page' : undefined">
          <router-link :to="`/films/${filmGenre.name.toLowerCase()}`" @click="$emit('selectedGenreId', filmGenre.id)">
            {{ filmGenre.name }}
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
  import { useFilmGenreStore } from "@/stores/FilmGenreStore.js";
  import { useFilmStore } from "@/stores/FilmStore.js";

  const filmGenreStore = useFilmGenreStore();
  const filmStore = useFilmStore();

  filmGenreStore.fetchFilmGenres();

  defineEmits(["selectedGenreId"])
</script>
