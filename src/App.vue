<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <vermont/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Vermont from './components/Vermont.vue'

import * as mapData from './assets/map.json'

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
    },
    /* jshint ignore:start */
    ...mapMutations([
      'addDistrict'
    ])
    /* jshint ignore:end */
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
