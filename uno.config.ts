// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import path from 'path'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      autoInstall: true,
      collections: {
        custom: FileSystemIconLoader(path.resolve(__dirname, 'src/assets/svg-icon')),
      },
    }),
  ],
})
