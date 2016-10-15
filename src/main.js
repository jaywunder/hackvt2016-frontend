import Vue from 'vue'
// import store from './store'
import App from './components/App.vue'

import * as districts from './assets/districts.json'

window.state = {
  districts: [],
  noDataDistricts: []
}

for (let key in districts) {
  if (key == 'NO DATA') continue
  const district = districts[key]
  state.districts.push({
    key,
    svgId: district.svgId,
    districtName: district.districtName,
    successIndex: Math.random()
  })
}


new Vue({
  // store,
  el: '#app',
  render: h => h(App)
})
