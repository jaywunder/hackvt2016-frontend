import Vue from 'vue'
// import store from './store'
import App from './components/App.vue'

import * as districts from './assets/districts2.json'
import * as noDataDistricts from './assets/no-data.json'

window.state = {
  districts: []
}

for (let key in districts) {
  if (key === 'NO DATA') continue
  const district = districts[key]
  state.districts.push({
    svgId: district.svgId,
    districtName: district.districtName,
    successIndex: Math.random()
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
