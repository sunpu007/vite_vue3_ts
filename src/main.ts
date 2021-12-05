import { createApp } from "vue"

import { createPinia } from "pinia"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from "./App.vue"
import router from './router/router'

import svgIcon from './components/svgIcon/index.vue'

createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(createPinia())
  .component('svg-icon', svgIcon)
  .mount("#app")
