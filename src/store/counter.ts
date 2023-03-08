import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 100
    }
  },
  getters: {
    doubleCounter(state) {
      return state.count * 2
    }
  },
  actions: {
    incrementAction() {
      this.count++
    },
    decrementAction() {
      this.count--
    }
  }
})

export default useCounterStore
