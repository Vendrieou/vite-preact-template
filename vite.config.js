import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
// import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import fs from 'fs'
// @ts-ignore
// * No declaration file for less-vars-to-js
import lessToJS from 'less-vars-to-js'

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/theme/color.less'), 'utf8')
)

export default defineConfig({
  plugins: [
    preact(),
    // reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          libDirectory: 'lib',
          style(name) {
            `antd/es/${name}/style`
          },
        },
      ],
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        // modifyVars: { 'primary-color': '#13c2c2' },
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "src": path.resolve(__dirname, "src"),
      // "antd": path.resolve(__dirname, "src/components/antd")
    },
  },
})
