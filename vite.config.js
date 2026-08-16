import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/fiddle/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        build: resolve(__dirname, 'build.html'),
        grow: resolve(__dirname, 'grow.html'),
        think: resolve(__dirname, 'think.html'),
        make: resolve(__dirname, 'make.html'),
      },
    },
  },
})
