<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <vermont></vermont>
  </div>
</template>

<script>
import Vermont from './components/Vermont.vue'

export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: {
    'vermont': Vermont
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
