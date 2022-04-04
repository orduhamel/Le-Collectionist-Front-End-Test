import { defineStore } from 'pinia'
import axios from "axios"

const authorizedGenres = [
  "Action",
  "Aventure",
  "Documentaire",
  "Animation",
  "Comédie"
]

export const useFilmGenreStore = defineStore({
  id: 'FilmGenreStore',
  state: () => ({
    genres: [],
    // selectedGenre: null
  }),
  getters: {
    getFilmGenre(state) {
      return state.genres
    }
  },
  actions: {
    async fetchFilmGenres() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=a8f0c848f25614e7ce60478e87214a05&language=fr-FR')
        this.genres = response.data.genres.filter(genre => authorizedGenres.includes(genre.name))
        this.genres.forEach(genre => genre.selected = false)
        }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
    selectGenre() {
      this.selectedGenre = null
    },
    toggleSelected(genre_id) {
      const genre = this.genres.find( genre => genre.id == genre_id)
      if (genre.selected) {
        genre.selected == false
      } else {
        genre.selected == true
      }
    }
  }
})
