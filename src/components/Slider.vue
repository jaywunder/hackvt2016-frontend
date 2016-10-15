<template>
  <div class="slider">
    {{name}}
    <input :class="name" type="text" min="min" max="max" value="0" v-on:change="onChange()"></input>
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
      // console.log(this.name, this.value);
      // this.$emit('change', this.name, this.value)
      $.trigger('sliderChange', this.name, )
    }
  },
  computed: {
    value() {
      // return state.sliderValues.
    }
  }
}
</script>

<style scoped>

</style>
