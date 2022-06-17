// @ts-ignore
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const pathSrc = path.resolve(__dirname, 'src')
console.log('pathSrc: ', pathSrc)


// https://vitejs.dev/config/
export default defineConfig({
  base: '/dist/functions/',
  plugins: [dts()],
  build: {
    watch: {
      buildDelay: 10,
      clearScreen: true
    },
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'FunctionsLib',
      fileName: (format) => `functions-lib.${format}.js`
    },
    // outDir: '../wwwroot/dist/functions',
    emptyOutDir: true,
    manifest: true,
  },
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
})
