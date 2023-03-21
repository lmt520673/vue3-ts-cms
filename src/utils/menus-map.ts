import type { RouteRecord, RouteRecordRaw } from 'vue-router'
import router from '@/router'

export function getLocalMenus() {
  //拿到项目中的所有路由存在localRoutesList数组中
  const localRoutesList: RouteRecord[] = []
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

export function getUserMenusMapMenu(userMenus: any[]) {
  const localRoutesList = getLocalMenus()
  //跳转到主页
  for (const key in userMenus) {
    const menu = userMenus[key]
    for (const menuItem in menu.children) {
      localRoutesList.find((item) => {
        if (item.path === menu.children[menuItem].url) {
          router.addRoute('main', item)
        }
      })
    }
  }
}

export function getMenuIdByUserMenus(userMenus: any[], menu: string) {
  for (const key in userMenus) {
    for (const menuItemKey in userMenus[key].children) {
      if (userMenus[key].children[menuItemKey].url === menu) {
        return userMenus[key].children[menuItemKey].id
      }
    }
  }
}
