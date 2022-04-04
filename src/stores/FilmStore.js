import { defineStore } from 'pinia'
import axios from "axios"

export const useFilmStore = defineStore({
  id: 'FilmStore',
  state: () => ({
    films: [],
    genre: "28"
  }),
  getters: {
    getFilms() {
      return this.films
    }
  },
  actions: {
    async fetchFilms() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a8f0c848f25614e7ce60478e87214a05&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.genre}&with_watch_monetization_types=flatrate`)
        this.films = response.data.results
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    }
  }
})
