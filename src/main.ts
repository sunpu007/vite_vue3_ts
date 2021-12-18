import { createApp } from "vue"
import Cookies from 'js-cookie'
import { createPinia } from "pinia"

import '@/styles/index.scss' // global css

import App from "./App.vue"

import svgIcon from './components/svgIcon/index.vue'

const app = createApp(App)

// 注册国际化
import i18n from "./lang"
app.use(i18n)

// 注册状态管理
app.use(createPinia())

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局注册elementPlus组件
app.config.globalProperties.$ELEMENT = { size: Cookies.get('size') || 'mini' }
app.use(ElementPlus)

import router from './router'
import '@/permission'

// 注册路由
app.use(router)

// 注册svg图标组件
app.component('SvgIcon', svgIcon)

// 挂载应用
app.mount("#app")
