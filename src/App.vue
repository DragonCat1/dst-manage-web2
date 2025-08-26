<template>
  <a-config-provider
    :theme="{
      algorithm: systemStore.settings.theme,
    }"
  >
    <a-app>
      <RouterView />
    </a-app>
  </a-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import useSystemStore from '@/stores/system'
const systemStore = useSystemStore()
</script>
