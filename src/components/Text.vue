<template>
  <div is="text-box">
    <input v-model="district" placeholder="Filter by District">
    <!-- Send this backwards to filter through the districts -->
    <!-- <p>Message is: {{ district }}</p> -->
  </div>
</template>

<script>
export default {
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
