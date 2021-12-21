import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'build'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    open: true,
    port: 9000,
    host: "0.0.0.0"
  },
  css: {
    preprocessOptions: {
      less: {
        javascriptEnable: true,
        additionalData: `@import "${resolve(__dirname, 'src/assets/styles/base.less')}";`
      }
    }
  }
})
