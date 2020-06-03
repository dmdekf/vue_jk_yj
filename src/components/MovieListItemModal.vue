<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-warning" data-toggle="modal" :data-target="`#movie${movie.id}`">
      영화 정보 상세보기
    </button>

    <!-- Modal -->
    <div class="modal fade" :id="'movie'+movie.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"> {{ movie.title }} </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
              <span aria-hidden="true">&times;</span>
          </div>
          <div class="modal-body">
            <div>
              <img :src="movie.backdrop_url" style="width: 100%; height: 100%;">
              <p class="badge badge-success">{{ movie.user_rating }}</p>
              <p>{{ movie.overview }}</p>
            </div>
          </div>
          <div class="modal-footer" alt="movie img">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'MovieListItemModal',
  props: {
    movie: Object,
  },
}
</script>

<style>

</style>
