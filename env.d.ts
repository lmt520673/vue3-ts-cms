/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const app: DefineComponent
  export default app
}

declare module '*.mjs'
