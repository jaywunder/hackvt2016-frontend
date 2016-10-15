export const DISTRICTS_STORAGE_KEY = ''

if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
  districts: JSON.parse(window.localStorage.getItem(DISTRICTS_STORAGE_KEY) || '[]')
}

export const mutations = {
  addDistrict (state, { svgId, districtName }) {
    state.districts.push({
      svgId,
      districtName,
      opacity: 1
    })
  },

  deleteDistrict (state, { district }) {
    state.districts.splice(state.districts.indexOf(district), 1)
  },

  editDistrict (state, { district, value }) {
    district.districtName = value
  },

  toggleAll (state, { done }) {
    state.districts.forEach((district) => {
      district.done = done
    })
  },

  // example from Vuex todo app
  // clearCompleted (state) {
  //   state.districts = state.districts.filter(district => !district.done)
  // }
}
