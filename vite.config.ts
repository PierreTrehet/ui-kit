import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import checker from 'vite-plugin-checker'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ command, mode }) => {
  if (command !== "build") {
    return {
      plugins: [
        react(),
        checker({ typescript: true }) // ✅ plus de ESLint ici
      ]
    }
  }

  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reef UI Showcase</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>


  return {
    plugins: [react(), dts()],
    publicDir: 'dist',
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/ui-kit/index.tsx'),
        name: '@reef/ui-kit',
        formats: ['es'],
        fileName: (format) => `index.${format}.js`
      },
      rollupOptions: {
        input: path.resolve(__dirname, 'src/ui-kit/index.tsx'),
        external: [
          '@fortawesome/fontawesome-svg-core',
          '@fortawesome/free-regular-svg-icons',
          '@fortawesome/free-solid-svg-icons',
          '@fortawesome/react-fontawesome',
          '@polkadot/react-identicon',
          '@types/jest',
          '@types/node',
          '@types/react',
          '@types/react-dom',
          'qrcode.react',
          'react-syntax-highlighter',
          'react-transition-group',
          'react',
          'react-dom',
          'react-router-dom',
          'bignumber.js'
        ]
      }
    }
  }
})
