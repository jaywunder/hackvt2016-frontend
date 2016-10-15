<template>
  <div id="app">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <vermont/>
  </div>
</template>

<script>
import Vermont from './Vermont.vue'

export default {
  name: 'App',
  components: {
    Vermont
  },
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods: {
    printMapData() {
      console.log(state.districts);
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
