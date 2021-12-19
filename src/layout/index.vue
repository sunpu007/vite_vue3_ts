<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <sidebar class="sidebar-container" />
    <div class="main-container">
      123
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed, reactive } from 'vue'
import Sidebar from './components/Sidebar/index.vue'

import { useAppStore } from '@/store/app'
const appStore = useAppStore()

const sidebarStore = computed(_ => appStore.sidebar)
const device = computed(_ => appStore.device)

const classObj = reactive({
  hideSidebar: !sidebarStore.value.opened,
  openSidebar: sidebarStore.value.opened,
  withoutAnimation: sidebarStore.value.withoutAnimation,
  mobile: device.value === 'mobile'
})
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px)
}

.mobile .fixed-header {
  width: 100%;
}
</style>
