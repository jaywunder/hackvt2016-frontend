<template>
<<<<<<< HEAD
  <div id="app" class="row">
    <div class="col-md-6">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
    </div>
    <div class="col-md-6">
      <div></div>
    </div>
=======
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <vermont/>
>>>>>>> refs/remotes/origin/master
  </div>
</template>

<script>
<<<<<<< HEAD
  export default {
    data () {
      return {
        msg: 'Dank Memes!',
      }
=======
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
>>>>>>> refs/remotes/origin/master
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
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
