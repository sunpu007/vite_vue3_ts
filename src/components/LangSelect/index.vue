<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <div>
      <svg-icon
        class-name="international-icon"
        icon-class="language"
      />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          :disabled="language==='zh'"
          command="zh"
        >
          中文
        </el-dropdown-item>
        <el-dropdown-item
          :disabled="language==='en'"
          command="en"
        >
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()

import { useAppStore } from '@/store/app'
const appStore = useAppStore()

const language = computed(_ => appStore.language)

const handleSetLanguage = (lang: string) => {
  i18n.locale.value = lang
  appStore.setLanguage(lang)
  ElMessage.success('Switch Language Success')
}
</script>

<style lang="scss" scoped></style>
