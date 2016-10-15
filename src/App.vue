<template>
  <div id="app">
    <div id="header">
      <h1>Vermont School Districts Funding</h1>
    </div>
    <div id="main">
      <h1>{{ myMessage }}</h1>
      <text-box/>

      <slider name="Albany" v-bind:value="someValue" min="0" max="1000"/>

    </div>
    <div id="map">
      <p> This is the map div </p>
    </div>
  </div>
</template>

<script>
import Slider from './components/Slider.vue'
import Text from './components/Text.vue'
var districts = ["","","",""];
export default {
  data() {
    return {
      myMessage: 'Bootstrap to sort by: Financial Help, ',
      someValue: 500
    }
  },
  components: {
    'slider': Slider,
    'text-box': Text,
  }
}
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
    /*background-color: red;*/
  }
  #header{
    background-color: #559955;
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 10%;
  }
  #main{
    background-color: #808099;
    position: fixed;
    top: 10%;
    left: 0;
    height: 90%;
    width: 60%;
  }
  #map {
    position: absolute;
    background-color: #995555;
    top: 0;
    right: 0;
    height: 100%;
    width: 40%;
  }
    /*background-color: green;*/
    /*#map{
    position: fixed;
    top: 0;
    right: 0;
  }*/
</style>
