<template>
</template>

<script setup lang="ts">
import path from 'path'
import { RouteRecordRaw } from 'vue-router'
import { isExternal } from '@/utils/validate'
import { generateTitle } from '@/utils/i18n'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String,
    default: ''
  }
})

let onlyOneChild = null

const hasOneShowingChild = (children = [], parent: RouteRecordRaw) => {
  const showingChildren = children.filter((item: RouteRecordRaw) => {
    if (item!.meta!.hidden) {
      return false
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild = item
      return true
    }
  })

  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return true
  }

  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild = { ... parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}

const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  return path.resolve(props.basePath, routePath)
}
</script>
