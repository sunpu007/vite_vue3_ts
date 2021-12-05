<template>
  <svg
    :class="svgClass"
    v-bind="$attrs"
    :style="{color: color}"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"

const props = defineProps({
  iconClass: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  }
})

const iconName = computed(_ => `#icon-${props.iconClass}`)
const svgClass = computed(_ => {
  if (props.iconClass) {
    return `svg-icon icon-${props.iconClass}`
  }
  return 'svg-icon'
})
</script>

<style lang='scss'>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
