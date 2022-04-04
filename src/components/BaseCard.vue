<template>
  <li class="relative">
    <div class="group block w-full aspect-auto bg-gray-100 rounded-t-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
      <img :src="filmPosterUrl.concat(film.poster_path)" alt="" class="object-cover pointer-events-none group-hover:opacity-75" />
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">{{ film.id }}</span>
      </button>
    </div>
    <div class="flex justify-between items-center rounded-b group block w-full aspect-auto bg-gray-50/75 p-2">
      <div class="w-10/12">
        <h3 class="mt-2 block text-sm font-medium truncate text-gray-900 pointer-events-none">{{ film.title }}</h3>
        <p class="block text-sm font-medium text-gray-700 pointer-events-none">{{ film.vote_average }} / 10</p>
      </div>
      <BaseCardButton
        :film="film"
        @toggleFavorites="toggleFavorites"
      />
    </div>
  </li>
</template>

<script setup>
  import { ref } from 'vue';
  import BaseCardButton from './BaseCardButton.vue';
  import { useFilmFavoriteStore } from "@/stores/FilmFavoriteStore.js";

  const filmFavoriteStore = useFilmFavoriteStore();

  const filmPosterUrl = ref("https://image.tmdb.org/t/p/original/")


  defineProps({
    film: Object,
  })

  const toggleFavorites = (film) => {
    if (filmFavoriteStore.favorites.includes(film)) {
      const index = filmFavoriteStore.favorites.indexOf(film);
      filmFavoriteStore.$patch((state) => {
        state.favorites.splice(index, 1)
      })
    } else {
      filmFavoriteStore.$patch((state) => {
        state.favorites.push(film)
      })
    }
  }
</script>
