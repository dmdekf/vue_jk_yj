<template>
  <div class="container">
    <h1 class="mt-5">영화 예고편 검색</h1>
    <VideoSearch @input-change="onInputChange" />
    <div class="row">
      <VideoItemDetail :video="video" />
      <ul v-if="videos" class="list-group col-lg-4">
        <VideoItem v-for="video in videos" :key="video.etag" :video="video" @video-select="onVideoSelect" />
      </ul>
    </div>
  </div>
</template>

<script>
import VideoSearch from '../components/VideoSearch'
import VideoItem from '../components/VideoItem'
import VideoItemDetail from '../components/VideoItemDetail'

import axios from 'axios'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'


export default {
  name:'VideoView',
  components: {
    VideoSearch,
    VideoItem,
    VideoItemDetail,
  },
  data() {
    return {
      inputValue: '',
      videos: null,
      video: null,
    }
  },
  methods: {
    onInputChange(inputText) {
      this.inputValue = inputText
      axios.get(YOUTUBE_URL, {
        params: {
          key: API_KEY,
          part: 'snippet',
          type: 'video',
          q: this.inputValue + ' trailer',
        }
      })
        .then(res => {
          res.data.items.forEach(item => {
            const parser = new DOMParser()
            const doc = parser.parseFromString(item.snippet.title, 'text/html')
            item.snippet.title = doc.body.innerText
          })
          this.videos = res.data.items
        })
        .catch(err => console.error(err))
    },
    onVideoSelect(video) {
      this.video = video
    },
  },
}
</script>

<style>

</style>
