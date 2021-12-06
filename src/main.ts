import { createApp } from "vue"

import Cookies from 'js-cookie'

import { createPinia } from "pinia"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/styles/index.scss' // global css

import App from "./App.vue"
import router from './router/router'

import svgIcon from './components/svgIcon/index.vue'

const app = createApp(App)

// 全局注册elementPlus组件
app.config.globalProperties.$ELEMENT = { size: Cookies.get('size') || 'mini' }
app.use(ElementPlus)

// 注册路由
app.use(router)

// 注册状态管理
app.use(createPinia())

// 注册svg图标组件
app.component('SvgIcon', svgIcon)

// 挂载应用
app.mount("#app")
