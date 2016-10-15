<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1>{{ myMessage }}</h1>

    <!-- <div>
      <input v-model="parentMsg">
      <br>
      <child v-bind:my-message="parentMsg"></child>
    </div> -->

    <slider name="Albany" value="25" min="0" max="1000"/>
    <!-- <child :value="value">f</child>
    <h2>Fuuuuuun</h2> -->

  </div>
</template>

<script>
import Slider from './components/Slider.vue'

export default {
  data() {
    return {
      myMessage: 'Hello Vue!',
    }
  },
  components: {
    'slider': Slider
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
