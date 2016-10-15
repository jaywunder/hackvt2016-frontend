<template>
  <div id="configuration">
    <ul>
      <li v-for="school in sliderValues">
        {{school}}
        <slider v-bind:name="school.districtName" v-bind:value="school.currentDollars"
                v-on:change="onChange()"/>
      </li>
    </ul>
    <button v-on:click="main()">uygwefhjwehwefhjb</button>
  </div>
</template>

<script>
import DILLONS_IP from '../conf.js'

import Slider from './Slider.vue'

export default {
  name: 'Configuration',
  components: { Slider },
  data () {
    return {
      state,
      districts: state.districts,
      sliderValues: state.sliderValues
    }
  },
  methods: {
    main() {

    },
    onChange(name, value) {

    }
  }
}
</script>

<style >
  li {
    list-style-type: none;
  }
</style>
