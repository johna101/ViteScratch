import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    strictPort: true,
    https: true,
    hmr: {
      protocol: 'ws'
    }
  },
  base: '/dist/',
  define: {
    global: {},
  },
  
  build: {
    outDir: '../wwwroot/dist',
    emptyOutDir: true,
    manifest: true,
  },
  plugins: [vue()],
})
