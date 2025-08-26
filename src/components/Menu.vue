<template>
  <a-menu mode="inline" :items="items"></a-menu>
</template>

<script setup lang="tsx">
import { ref } from 'vue'

const items = ref([
  {
    key: 'dashboard',
    label: '数据总览',
    icon: <i class="fa-solid fa-gauge-high"></i>,
  },
])
</script>

<style scoped lang="scss"></style>
