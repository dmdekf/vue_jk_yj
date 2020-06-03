<template>
  <div class="container my-5">
    <h1>나만의 무비 컬렉션</h1>
    <button class="btn btn-primary" v-if="buttonStatus" @click="getMovieList">영화 가져오기</button>
    <MovieList :movies="movies" />
  </div>
</template>

<script>
import MovieList from '../components/MovieList'

import axios from 'axios'

export default {
  name:'MovieView',
  components: {
    MovieList,
  },
  data() {
    return {
      movies: null,
      buttonStatus: true,
    }
  },
  methods: {
    getMovieList() {
      this.buttonStatus = false
      const movieURL = "https://www.json-generator.com/api/json/get/ceNyuXZmwi?indent=2"
      axios.get(movieURL)
        .then(res => this.movies = res.data)
        .catch(err => console.error(err))
    }
  }
}
</script>

<style>

</style>
