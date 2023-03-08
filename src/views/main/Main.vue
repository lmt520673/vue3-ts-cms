<template>
  <div id="main">
    <h1>主页</h1>
    <h2>counter:{{ counterStore.count }}</h2>
    <h2>doubleCounter:{{ counterStore.doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>


<script setup lang="ts">
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()

function increment() {
  counterStore.incrementAction()
}

function decrement() {
  counterStore.decrementAction()
}
</script>


<style scoped>
.main {
  color: red;
}
</style>