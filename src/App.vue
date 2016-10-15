<template>
  <div id="app" class="row">
    <div class="col-md-6">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
    </div>
    <div class="col-md-6">
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Dank Memes!',
      }
    }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
