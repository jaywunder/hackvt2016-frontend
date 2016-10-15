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
            <div id="configuration">
            </div>
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
        hello:(function() {
            $(function() {
                let root = $("#configuration")
                $.get("http://localhost:8123", function(data) {
                    for (let districtName in data) {
                        let district = data[districtName]
                        var label = district.districtName

                        var min = Math.round(district.minDollars)
                        var max = 2 * district.currentDollars - district.minDollars

                        var html = "<input type=\"range\" min=\"" + min + "\" max=\"" + max + "\" value=\"" + district.currentDollars + "\"></input>";


                        var fundsPerStudent = $("<p></p>");

                        html = $(html);

                        html.on("change", function() {
                            let newval = $(this).val();

                            $.get("http://localhost:8123/calculate/" + newval, function(data) {
                                state.districts.forEach(function(localStateDistrict) {
                                    fundsPerStudent.html(newval);
                                    if (localStateDistrict.uglyName == district.districtName) {
                                        localStateDistrict.successIndex = data / 100
                                        $(".invisible-button").click();
                                    }
                                });
                            })
                        })

                        root.append($("<p>" + label + "</p>"));
                        root.append(fundsPerStudent);
                        root.append(html);
                    }
                })
            })
        })()
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
