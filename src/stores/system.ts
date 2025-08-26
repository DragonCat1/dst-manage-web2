import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { theme } from 'ant-design-vue'
import { useDark, useToggle } from '@vueuse/core'

const { darkAlgorithm, defaultAlgorithm } = theme

export default defineStore('system', () => {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const toggleTheme = () => {
    toggleDark(!isDark.value)
  }
  const settings = ref({
    isDark,
    theme: computed(() => (isDark.value ? darkAlgorithm : defaultAlgorithm)),
  })

  return { settings, toggleTheme }
})
