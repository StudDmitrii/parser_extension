import { defineConfig, resolveConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {crx} from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  crx({manifest})],
  publicDir: 'src/content_scripts',
  base: "./",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
    ],
  },
  build:{
    rollupOptions:{
      input:{
        sidepanel: "index.html"
      }
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: `@import "src/assets/global.scss";`
      }
    }
  }
})
