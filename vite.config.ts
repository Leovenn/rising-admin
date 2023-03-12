import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: ElementPlusResolver(),
      dts: 'src/typings/auto-imports.d.ts',
      include: [
        /\.tsx?$/, // .ts, .tsx
        /\.vue$/,
      ],
      imports: ['vue', 'vue-router'],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'src/typings/components.d.ts',
    }),
  ],

  base: './',

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
