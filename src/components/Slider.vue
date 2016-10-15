<template>
  <div class="slider">
    {{name}}
    <input :class="claSS" type="range" min="min" max="max" value="0"
     v-on:change="onChange()"></input>
  </div>
</template>

<script>

export default {
  name: 'Slider',
  props: ['name'],
  data () {
    return {
      // value: state.sliderValues[this.name].currentDollars,
      min: state.sliderValues[this.name].minDollars,
      max: 2 * state.sliderValues[this.name].currentDollars - state.sliderValues.minDollars,
    }
  },
  methods: {
    onChange() {

      $(window).trigger('sliderChange', this.name)
      // setTimeout(_ => $('.invisible-button').trigger('click'), 200)
    }
  },
  computed: {
    claSS() { this.name.replace(/\W/g, '-') }
  }
}
</script>

<style scoped>

</style>
