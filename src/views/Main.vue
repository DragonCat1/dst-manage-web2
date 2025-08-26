<template>
  <a-layout class="h-screen">
    <Header />
    <div class="flex flex-1">
      <Menu class="w-[var(--menu-width)]" />
      <div class="flex-1">
        <RouterView />
      </div>
    </div>
  </a-layout>
</template>

<script setup lang="ts">
import Header from '@/components/header/index.vue'
import Menu from '@/components/Menu.vue'
</script>

<style scoped lang="scss"></style>
