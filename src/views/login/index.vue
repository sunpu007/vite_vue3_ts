<script setup lang="ts">
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()

const updateName = () => {
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了'
  })
}
</script>

<template>
  <h1>login.vue</h1>
  <p>{{ mainStore.name }}</p>
  <p>{{ mainStore.nameLength }}</p>
  <el-button
    type="primary"
    @click="updateName"
  >
    修改名字
  </el-button>
</template>

<style lang="scss" scoped>
</style>
