<template>
  <li class="video-list-item list-group-item" @click="onVideoSelect">
    <img :src="video.snippet.thumbnails.default.url" class="mr-3" alt="youtube">
    <div class="media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name:'VideoItem',
  props: {
    video: Object,
  },
  methods: {
    onVideoSelect() {
      this.$emit('video-select', this.video)
    }
  },
}
</script>

<style>
li.video-list-item {
  display: flex;
  cursor: pointer;
}

li.video-list-item:hover {
  background-color: #eee;
}

.media-body {
  margin: auto 0; /* 상하y 좌우x */
}
</style>
