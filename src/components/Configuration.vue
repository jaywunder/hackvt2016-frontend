<template>
  <div id="configuration">
    <ul>
      <li v-for="school in sliderValues">
        {{school}}
        <slider v-bind:name="school.districtName" v-bind:value="school.currentDollars"
                v-on:change="onChange()"/>
      </li>
    </ul>
    <button v-on:click="main()">uygwefhjwehwefhjb</button>
  </div>
</template>

<script>
import DILLONS_IP from '../conf.js'

import Slider from './Slider.vue'

export default {
  name: 'Configuration',
  components: { Slider },
  data () {
    return {
      state,
      districts: state.districts,
      sliderValues: state.sliderValues
    }
  },
  methods: {
    main() {

    },
    onChange(name, value) {

      console.log('CHAGNGINGING');

      console.log(name, value);
      // fetch(DILLONS_IP + '/calculate/' + value)
      //   .then(response => response.json())
      //   .then(successIndex => {
      //     console.log('successIndex', successIndex);
      //
      //     window.state = {
      //       districts: [],
      //       sliderValues: schoolJson
      //     }
      //
      //     // console.log(state.sliderValues.currentDollars);
      //
      //     let successIndices = normalizeSuccessIdices(schoolJson)
      //
      //     for (let key in districts) {
      //       if (key === 'NO DATA') continue
      //       const district = districts[key]
      //       state.districts.push({
      //         svgId: district.svgId,
      //         districtName: district.districtName,
      //         successIndex: successIndices[key]
      //       })
      //     }
      //
      //     for (let i in noDataDistricts) {
      //       const district = noDataDistricts[i]
      //       state.districts.push({
      //         key: i,
      //         svgId: district.svgId,
      //         districtName: district.districtName,
      //         successIndex: 420
      //       })
      //     }
      //   })
      //   .then(_ => setTimeout(_ => $('.invisible-button').trigger('click'), 200))
    }
  }
}
</script>

<style >
  li {
    list-style-type: none;
  }
</style>
