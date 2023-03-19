import hyRequest from '..'
import type { ILoginAccount } from '@/types'

// export function getCaptchaImageRequest() {
//   return hyRequest.get({
//     url: '/captchaImage'
//   })
// }

export function accountLoginRequest(account: ILoginAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

export function getLoginInfoRequest(id: string) {
  return hyRequest.get({
    url: `/users/${id}`
  })
}

export function getLoginMenusRequest(roleId: string) {
  return hyRequest.get({
    url: `/role/${roleId}/menu`
  })
}
