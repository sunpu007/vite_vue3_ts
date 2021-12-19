import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import viteCompression from 'vite-plugin-compression'

import { svgBuilder } from './build/svgBuilder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgBuilder('./src/icons/svg/'),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: `http://admin-demo.myjerry.cn/`,
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  build: {
    terserOptions: {
      compress: {
        'drop_console': true,
        'drop_debugger': true
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('element-plus')) {
            return 'chunk-element-plus'
          } else if (id.includes('node_modules')) {
            return 'chunk-lib'
          } else if (id.includes('src/components')) {
            return 'chunk-common'
          }
        }
      }
    }
  }
})
