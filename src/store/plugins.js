// jshint -W014

import { DISTRICTS_STORAGE_KEY } from './mutations'
import createLogger from '../plugins/logger'

const localStoragePlugin = store => {
  store.subscribe((mutation, { districts }) => {
    window.localStorage.setItem(DISTRICTS_STORAGE_KEY, JSON.stringify(districts))
  })
}

export default process.env.NODE_ENV !== 'production' ?
  [createLogger(), localStoragePlugin] :
  [localStoragePlugin]
