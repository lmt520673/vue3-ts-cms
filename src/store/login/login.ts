import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  // getCaptchaImageRequest,
  getLoginInfoRequest,
  getLoginMenusRequest
} from '@/service/login/login'
import type { ILoginAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN, USER_INFO, USER_MENUS } from '@/global/constants'
import router from '@/router'
import { getUserMenusMapRoutes } from '@/utils/menus-map'

interface IState {
  id: string
  roleId: string
  token: string
  // captchaImage: string
  // uuid: string
  userInfo: any
  userMenus: any[]
}

const useLoginStore = defineStore('login', {
  state: (): IState => {
    return {
      id: '',
      roleId: '',
      // name: '',
      token: localCache.getCache(LOGIN_TOKEN) ?? '',
      // captchaImage: '',
      // uuid: '',
      userInfo: localCache.getCache(USER_INFO) ?? {},
      userMenus: localCache.getCache(USER_MENUS) ?? []
    }
  },
  actions: {
    // //获取图片验证码
    // async getCaptchaImageAction() {
    //   const res = await getCaptchaImageRequest()
    //   this.uuid = res.uuid
    //   this.captchaImage = 'data:image/gif;base64,' + res.img
    // },
    //登录事件
    async loginAction(account: ILoginAccount) {
      //调取登录接口  执行登录逻辑

      //拿到token
      const res = await accountLoginRequest(account)
      const userId = res.data?.id
      this.id = userId
      this.token = res.data?.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      if (!localCache.getCache(LOGIN_TOKEN)) return

      //拿到用户信息
      const userInfo = await getLoginInfoRequest(userId)
      const roleId = userInfo.data?.role?.id
      this.userInfo = userInfo.data
      localCache.setCache(USER_INFO, userInfo.data)

      //拿到用户菜单
      const meusResult = await getLoginMenusRequest(roleId)
      const userMenus = meusResult.data
      this.userMenus = userMenus
      localCache.setCache(USER_MENUS, meusResult.data)

      const routesList = getUserMenusMapRoutes(userMenus)
      routesList.forEach((item) => {
        router.addRoute('main', item)
      })
      router.push('/main')
    },
    // 目的是为了刷新之后防止路由丢失，重新添加路由
    loadLocalRoutes() {
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache(USER_INFO)
      const userMenus = localCache.getCache(USER_MENUS)
      //这个判断是为了如果在login页面刷新的话  就不执行if语句中的添加路由逻辑
      if (token && userInfo && userMenus) {
        const routesList = getUserMenusMapRoutes(userMenus)
        routesList.forEach((item) => {
          router.addRoute('main', item)
        })
      }
    }
  }
})

export default useLoginStore
