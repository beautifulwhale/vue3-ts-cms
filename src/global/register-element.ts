import { App } from 'vue'
import {
  ElButton,
  ElAside,
  ElInput,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink
} from 'element-plus'
import 'element-plus/dist/index.css'

export default function registerElement(app: App): void {
  const components = [
    ElButton,
    ElAside,
    ElInput,
    ElBadge,
    ElTabPane,
    ElTabs,
    ElFormItem,
    ElForm,
    ElCheckbox,
    ElLink
  ]
  for (const component of components) {
    app.component(component.name, component)
  }
}
