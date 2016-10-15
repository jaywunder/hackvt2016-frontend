<template>
  <div is="vermont">
    <button type="button" @click="log">{{msg}}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'SOME COOL MESSAGE'
    }
  },
  methods: {
    log: function() {
      console.log(this.msg);
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
