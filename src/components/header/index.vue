<template>
  <div
    class="bg-white dark:bg-gray-800 flex items-center justify-between h-[var(--header-height)] px-20px text-20px"
  >
    饥荒服务器管理面板
    <div>
      <a-button type="text" @click="systemStore.toggleTheme">
        <i class="fa-solid fa-sun" v-if="systemStore.settings.isDark"></i>
        <i class="fa-solid fa-moon" v-else></i>
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/stores/system'
const systemStore = useSystemStore()
</script>
