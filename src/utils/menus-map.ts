import type { RouteRecord, RouteRecordRaw } from 'vue-router'

/**
 *
 * @returns 本地所有的路由列表
 */
//获取本地未添加的所有路由
function getLocalMenus() {
  //拿到项目中的所有路由存在localRoutesList数组中
  const localRoutesList: RouteRecordRaw[] = []
  // localRoutes是对象包裹的每一个路由模块
  const localRoutes: Record<string, any> = import.meta.glob('/src/router/main/**/*.ts', {
    eager: true
  })

  //遍历整个路由对象
  for (const key in localRoutes) {
    localRoutesList.push(localRoutes[key].default)
  }
  return localRoutesList
}

export let firstMenu: any = null

/**
 *
 * @param userMenus 用户菜单
 * @returns 用户菜单所匹配到的路由列表
 */
//根据后台返回的菜单列表 动态匹配当前用户所拥有的菜单
export function getUserMenusMapRoutes(userMenus: any[]) {
  const localRoutesList = getLocalMenus()
  const routesList = []
  for (const menu of userMenus) {
    for (const menuItem of menu.children) {
      const route = localRoutesList.find((item) => item.path === menuItem.url)
      routesList.push(route)
      if (!firstMenu && route) {
        firstMenu = route
      }
    }
  }
  return routesList
}

/**
 *
 * @param userMenus 用户菜单
 * @param path 当前路由
 * @returns 当前菜单的id值
 */
//根据当前的页面动态匹配当前路由唯一id值
export function getMenuIdByUserMenus(userMenus: any[], path: string) {
  for (const menu of userMenus) {
    for (const menuItem of menu.children) {
      if (menuItem.url === path) {
        return menuItem.id
      }
    }
  }
}
