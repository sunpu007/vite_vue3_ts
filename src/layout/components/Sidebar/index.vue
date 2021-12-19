<template>
  <div :class="{'has-logo': showLogo}">
    <logo
      v-if="showLogo"
      :collapse="isCollapse"
    />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu>
        111
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import Logo from './Login.vue'
// import variablesScss from '@/styles/variables.scss'

import { useAppStore } from '@/store/app'
const appStore = useAppStore()

import { useSettingsStore } from '@/store/settings'
const settingsStore = useSettingsStore()

const showLogo = computed(_ => settingsStore.sidebarLogo)
// const variables = computed(_ => variablesScss)
const isCollapse = computed(_ => !appStore.sidebar.opened)
</script>

<style lang="scss" scoped>
</style>
