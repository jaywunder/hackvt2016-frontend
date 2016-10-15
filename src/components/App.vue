<template>
  <div id="wrapper">
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="index.html">Di$tributr</a>
      </div>
    </nav>
    <div id="app" class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <div class="row">
                <div class="col-xs-3">
                  <i class="fa fa-comments fa-5x"></i>
                </div>
                <div class="col-xs-9 text-right">
                  <div class="huge">EDIT</div>
                  <div>Your shit!</div>
                </div>
              </div>
            </div>
            Butt
          </div>
        </div>
        <div class="col-md-9">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <div class="row">
                <div class="col-xs-3">
                  <i class="fa fa-comments fa-5x"></i>
                </div>
                <div class="col-xs-9 text-right">
                  <div class="huge">METRICS</div>
                  <div>Go here!</div>
                </div>
              </div>
            </div>
            <vermont/>
          </div>
        </div>
    </div>
    </div>
</template>


<script>


import { mapMutations } from 'vuex'
import Vermont from './Vermont.vue'

export default {
  name: 'App',
  components: {
    Vermont
  },
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods: {
    printMapData() {
      console.log(state.districts);
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

