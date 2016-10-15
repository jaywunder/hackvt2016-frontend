import { DILLONS_IP } from './conf.js'

import Vue from 'vue'
import App from './components/App.vue'

import * as districts from './assets/districts2.json'
import * as noDataDistricts from './assets/no-data.json'

Vue.filter('spaceToDash', function (string) {
  return string.replace(/\W/g, '-')
})

function normalizeSuccessIdices(schools) {
  const obj = {}
  for (let key in schools) {
    obj[key] = schools[key].performanceMetric / 100
  }
  return obj
}

let obj = { mode: "no-cors" }
fetch(DILLONS_IP)
  .then(response => response.json())
  .then(schoolJson => {

    window.state = {
      districts: [],
      sliderValues: schoolJson
    }
    // console.log(state.sliderValues.currentDollars);

    let successIndices = normalizeSuccessIdices(schoolJson)

    for (let key in districts) {
      if (key === 'NO DATA') continue
      const district = districts[key]
      state.districts.push({
          uglyName: key,
        svgId: district.svgId,
        districtName: district.districtName,
        successIndex: successIndices[key]
      })
    }

    for (let i in noDataDistricts) {
      const district = noDataDistricts[i]
      state.districts.push({
        key: i,
        svgId: district.svgId,
        districtName: district.districtName,
        successIndex: 420
      })
    }


    new Vue({
      // store,
      el: '#app',
      render: h => h(App)
    })
  })
