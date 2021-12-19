import { RouteRecordRaw } from 'vue-router'
import IBreadCrumb from '../base-ui/bread-crumb/type'
let firstMenu: any = null
export function mapMenuRoutes(userMenu: any[]): RouteRecordRaw[] {
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
//获取当前高亮路由
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
//判断用户权限
export function mapMenuPermissions(userMenu: any[]) {
  const permissions: string[] = []
  const resourcePermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        resourcePermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  resourcePermission(userMenu)
  return permissions
}
//映射角色的权限
export function mapMenuCheckKeys(userMenu: any) {
  const checkLeaf: number[] = []
  const recurseCheckLeaf = (menus: any) => {
    for (const menu of menus) {
      if (menu.children) {
        recurseCheckLeaf(menu.children)
      } else {
        checkLeaf.push(menu.id)
      }
    }
  }
  recurseCheckLeaf(userMenu)
  return checkLeaf
}
