import { fetchUserListRequest } from '@/service/main/system'
import { defineStore } from 'pinia'

const useSystemStore = defineStore('system', {
  state: () => {
    return {
      userList: [],
      userTotals: 0
    }
  },
  actions: {
    async fetchUserListAction() {
      const res = await fetchUserListRequest()
      this.userList = res.data.list
      this.userTotals = res.data.totalCount
    }
  }
})

export default useSystemStore
