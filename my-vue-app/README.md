import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
base: '/dist/',
build: {
lib: {
entry: path.resolve(__dirname, 'src/main.ts'),
name: 'vue_app',
fileName: (format) => `my-lib.${format}.js`
},
outDir: '../wwwroot/dist',
emptyOutDir: true,
manifest: true,
rollupOptions: {
input: {
main: './src/main.ts',
},
external: ['vue_app'],
output: {
format: 'iife',
name: 'vue_app',

        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue_app: 'vue_app'
        }
      }
    }
},
plugins: [vue()],
server: {
hmr: {
protocol: 'ws'
}
}
})
