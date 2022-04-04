import { defineStore } from 'pinia'

export const useFilmFavoriteStore = defineStore({
  id: 'FilmFavoriteStore',
  state: () => ({
    favorites: [],
  }),
})
