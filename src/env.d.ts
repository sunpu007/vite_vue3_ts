// / <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.scss';

interface ImportMetaEnv {
  readonly VITE_APP_BASE_API: string
}

declare interface Math {
  easeInOutQuad: function
}

declare interface Window {
  webkitRequestAnimationFrame: any,
  mozRequestAnimationFrame: any
}

declare interface ParentNode {
  scrollTop: any
}

interface NavigatorLanguage {
  readonly browserLanguage: string
}
