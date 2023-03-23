import hyRequest from '..'

export function fetchUserListRequest() {
  return hyRequest.post({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10
    }
  })
}
