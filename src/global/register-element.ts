import { App } from 'vue'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElTabPane,
  ElTabs,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElIcon,
  ElDropdown,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination
} from 'element-plus'
import 'element-plus/dist/index.css'

export default function registerElement(app: App): void {
  const components = [
    ElButton,
    ElCheckbox,
    ElForm,
    ElFormItem,
    ElInput,
    ElLink,
    ElTabPane,
    ElTabs,
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubMenu,
    ElIcon,
    ElDropdown,
    ElDropdownItem,
    ElAvatar,
    ElRow,
    ElCol,
    ElSelect,
    ElOption,
    ElDatePicker,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElTable,
    ElTableColumn,
    ElPagination
  ]
  for (const component of components) {
    app.component(component.name, component)
  }
}
