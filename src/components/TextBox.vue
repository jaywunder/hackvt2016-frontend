<template>
  <div>
    <input v-model="district" placeholder="Filter by District">
    <!-- Send this backwards to filter through the districts -->
    <p id="Dist" style="color:transparent">{{ district }}</p>
  </div>
</template>

<script>
export default {
  name: 'text-box',
  data() {
    return {
// Default Text
      district: ''
    }
  },
  methods: {

  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
