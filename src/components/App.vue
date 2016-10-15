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
        <div class="col-md-5">
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
            <configuration/>
          </div>
        </div>
        <div class="col-md-7">
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
import Vermont from './Vermont.vue'
import Configuration from './Configuration.vue'

setTimeout(_ => $('.invisible-button').trigger('click'), 200)

export default {
  name: 'App',
  components: {
    Vermont,
    Configuration
  },
  data () {
    return {

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
  .invisible-button {
    display: none;
  }
</style>
