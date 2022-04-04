import { defineStore } from 'pinia'
import axios from "axios"

export const useFilmTrendingStore = defineStore({
  id: 'FilmTrendingStore',
  state: () => ({
    trendingFilms: [],
  }),
  getters: {
    getTrendingFilms(state) {
      return state.trendingFilms
    }
  },
  actions: {
    async fetchTrendingFilms() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=a8f0c848f25614e7ce60478e87214a05`)
        this.trendingFilms = response.data.results
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    }
  }
})
