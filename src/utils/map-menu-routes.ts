import { RouteRecordRaw } from 'vue-router'
import IBreadCrumb from '../base-ui/bread-crumb/type'
let firstMenu: any = null
export default function mapMenuRoutes(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  //1.先去默认加载所有的路由
  const fileNames = require.context('../router/main', true, /\.ts/)
  fileNames.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    if (route) {
      allRoutes.push(route.default)
    }
  })
  //2根据菜单获取添加的routes
  const recursiveAllRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((item) => item.path === menu.url)
        if (route) routes.push(route)
        //获取第一次得到的路径跳转到'/main'使用
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        recursiveAllRoute(menu.children)
      }
    }
  }
  recursiveAllRoute(userMenu)
  return routes
}
export { firstMenu }
export function mapMenuAcive(
  menus: any[],
  currentPath: string,
  breadData?: IBreadCrumb[]
): any {
  for (const menu of menus) {
    if (menu.type === 1) {
      const finalMenu = mapMenuAcive(menu.children, currentPath)
      if (finalMenu) {
        breadData?.push({ name: finalMenu.name })
        breadData?.push({ name: menu.name })
        return finalMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
export function mapBreadMenu(userMenu: any[], currentPath: string) {
  const breadData: IBreadCrumb[] = []
  mapMenuAcive(userMenu, currentPath, breadData)
  return breadData
}
