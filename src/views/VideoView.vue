<template>
  <div>
    <h1 class="mt-5">영화 예고편 검색</h1>
    <VideoSearch @input-change="onInputChange" />
    <VideoItem/>
  </div>
</template>

<script>
import VideoSearch from '../components/VideoSearch'
import VideoItem from '../components/VideoItem'
import axios from 'axios'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'


export default {
  name:'VideoView',
  components: {
    VideoSearch,
    VideoItem,
  },
  data() {
    return {
      inputValue: '',
      Videos: null,
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
          q: this.inputValue,
        }
      })
        .then(res => {
          res.data.items.forEach(item => {
            const parser = new DOMParser()
            const doc = parser.parseFromString(item.snippet.title, 'text/html')
            item.snippet.title = doc.body.innerText
          })
          this.videos = res.data.items
          this.inputValue = ''
        })
        .catch(err => console.error(err))
    },
  },
}
</script>

<style>

</style>
