// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { resolve } from 'path'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      autoInstall: false,
      scale: 1.2,
      collections: {
        custom: FileSystemIconLoader(resolve(__dirname, 'src/assets/svg-icon')),
      },
      prefix: 'icon-',
    }),
  ],
})
