<template>
  <button type="button" @click="$emit('toggleFavorites', film)" class="inline-flex items-center p-1 text-white bg-transparent rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" :d="toggleButtonFavoriteSvgPath(film)" />
    </svg>
  </button>
</template>

<script setup>
  import { useFilmFavoriteStore } from "@/stores/FilmFavoriteStore.js";

  const filmFavoriteStore = useFilmFavoriteStore();

  const addFavoriteSvgpath= "M12 6v6m0 0v6m0-6h6m-6 0H6"
  const removeFavoriteSvgpath= "M18 12H6"

  defineProps({
    film: Object
  })

  defineEmits(["toggleFavorites"])

  const toggleButtonFavoriteSvgPath = (film) => {
    if (filmFavoriteStore.favorites.includes(film)) {
      return removeFavoriteSvgpath
    } else {
      return addFavoriteSvgpath
    }
  }
</script>
