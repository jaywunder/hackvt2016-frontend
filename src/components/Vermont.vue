<template>
  <div id="vermont">
    <button type="button" @click="log">{{msg}}</button>
    <input type="text" name="name" v-model="msg">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// console.log(mapGetters(['districts']));

export default {
  name: 'Vermont',
  // props: {
  //   name: String
  // },
  data () {
    return {
      msg: 'SOME COOL MESSAGE'
    }
  },
  methods: {
    log: function() {
      console.log(this.msg);
    },
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
