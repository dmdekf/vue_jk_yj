<template>
  <div v-if="movies" class="row">
    <MovieListItem v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import MovieListItem from '../components/MovieListItem'

export default {
  name:'MovieList',
  components: {
    MovieListItem
  },
  props: {
    movies: Array
  },
}
</script>

<style>

</style>
