// import JsonEditor from './components/JsonEditor.vue'
import JsonEditor from './App'
// import JsonView from './JsonView.vue'
// import ArrayView from './ArrayView.vue'
// import draggable from 'vuedraggable'
import PackageFile from '../package.json'
// import TempInsert from './TemplateInsert.vue';

const VERSION = PackageFile.version

const install = (Vue) => {
  if (install.installed) return
  install.installed = true

  // Vue.component('draggable', draggable)
  // Vue.component('App', App)
  Vue.component('JsonEditor', JsonEditor)
  // Vue.component('json-view', JsonView)
  // Vue.component('array-view', ArrayView)
}

export default install

export const components = {
  JsonEditor,
  VERSION
}
