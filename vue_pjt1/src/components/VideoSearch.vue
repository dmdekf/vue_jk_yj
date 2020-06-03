<template>
  <div>
    <input type="text" @keypress.enter="onInput">
    <button @click="onInput">검색</button>
  </div>
</template>

<script>
export default {
  name:'VideoSearch',
  methods:{
    onInput(e) {
      this.$emit('input-change', e.target.value)
    }
  }
}
</script>

<style>

</style>
