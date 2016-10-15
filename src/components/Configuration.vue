<template>
  <div id="configuration">
  <h1>biluyearghiuerjksejksergjkn</h1>
  <div class="toplevel">
    <div id="sliders-holder"></div>
  </div>

    <!-- <ul>
      <li>
      </li>
    </ul> -->
    <button v-on:click="main()">uygwefhjwehwefhjb</button>
  </div>
</template>

<script>

export default {
  name: 'Configuration',

  data () {
    return {
      districts: state.districts
    }
  },

  methods: {
    main() {
      console.log("WE ARE HERE");
      $( function() {
        window.dbg1 = humbleSliders( 2000, $( "#sliders-holder" ), {
          "splits": [ {
              "class": "developers",
              "name": "Developers",
              "splits": [ {
                  "class": "dev1",
                  "name": "Developer #1",
                  "percent": ( 1.0 / 5.0 )
                }, {
                  "class": "dev2",
                  "name": "Developer #2",
                  "percent": ( 1.0 / 5.0 )
                }, {
                  "class": "dev3",
                  "name": "Developer #3",
                  "percent": ( 1.0 / 5.0 )
                }, {
                  "class": "dev4",
                  "name": "Developer #4",
                  "percent": ( 1.0 / 5.0 )
                }, {
                  "class": "dev5",
                  "name": "Developer #5",
                  "percent": ( 1.0 / 5.0 )
                } ]
            }, {
              "class": "charity",
              "name": "Charity",
              "splits": [ {
                  "class": "charity1",
                  "name": "Charity #1",
                  "percent": ( 1.0 / 2.0 )
                }, {
                  "class": "charity2",
                  "name": "Charity #2",
                  "percent": ( 1.0 / 2.0 )
                } ]
            }, {
              "class": "other",
              "name": "Other"
          } ],
          "allotments": {
            "default": {
              "developers": 0.75,
              "charity": 0.15,
              "other": 0.05
            },
            "developers": {
              "developers": 1.00,
              "charity": 0.00,
              "other": 0.00
            },
            "charity": {
              "developers": 0.00,
              "charity": 1.00,
              "other": 0.00
            }
          }
        })
      })
    }
  }
}
</script>

<style scoped>
  .slider-container {
    background: url(/src/assets/slider-shit/slider-bg.png) no-repeat;
    position: relative;
    float: left;
    top: 7px;
    width: 292px;
    height: 6px;
    margin: 0 20px 0 18px;
  }
  .slider-container .right {
    background: url(/src/assets/slider-shit/slider-bg.png) no-repeat right;
    position: absolute;
    top: 0;
    right: -2px;
    bottom: 0;
    width: 2px;
  }
  .ui-slider {
    height: 10px;
  }
  .ui-slider-handle {
    background: url(/src/assets/slider-shit/slider-handle.png) no-repeat;
    position: absolute;
    top: -3px;
    width: 11px;
    height: 12px;
    margin-left: -6px;
    z-index: 10;
  }
</style>
