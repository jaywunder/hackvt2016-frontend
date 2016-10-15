<template>
  <div>
    <h2>{{ name }} <input type="range" v-bind:id="name" v-bind:min="min" v-bind:max="max" v-model="value"> {{value}} </input> </h2>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: ['name', 'value', 'min', 'max'],
  data() {
    return {

    }
  },
  methods: {
    printValue: function () {

    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
