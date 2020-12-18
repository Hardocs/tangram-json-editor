// *todo* this might change, but at present we want what App does
import JsonEditor from './App.vue'

import PackageFile from '../package.json'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'material-icons/css/material-icons.css'

const VERSION = PackageFile.version

const install = (Vue) => {
  if (install.installed) {
    return
  } else {
    install.installed = true
  }

  Vue.use(VueMaterial)
  Vue.config.productionTip = false

  Vue.component('JsonEditor', JsonEditor)
}

export default install

export const components = {
  JsonEditor,
  VERSION
}
