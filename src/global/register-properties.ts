import { App } from 'vue'
import formatTime from '@/utils/format-time'
export function registerProperties(app: App) {
  app.config.globalProperties.$filter = {
    formatTimes(value: string) {
      return formatTime(value)
    }
  }
}
