import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'

Vue.use(Vuex)

import * as districts from '../assets/districts.json'

console.log(districts);

const state = {
  districts: [],
  noDataDistricts: []
}

for (let key in districts) {
  if (key == 'NO DATA') continue
  console.log(key);
  console.log(districts[key]);
  const district = districts[key]
  state.districts.push({
    key,
    svgId: district.svgId,
    districtName: district.districtName,
    successIndex: 0
  })
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
