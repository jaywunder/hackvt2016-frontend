<template>
<<<<<<< HEAD
  <div id="app" class="row">
    <div class="col-md-6">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
    </div>
    <div class="col-md-6">
      <p>This should be on the right</p>
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
=======
  <div id="vermont">
    <button type="button" @click="log">{{msg}}</button>
    <input type="text" name="name" v-model="msg">
  </div>
</template>

<script>
// import store from '../store'
import { mapMutations } from 'vuex'

export default {
  name: 'Vermont',
  props: {
    name: String
  },
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
>>>>>>> refs/remotes/origin/master
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
