/// <reference types="vitest" />
/// <reference types="vite/client" />

import {resolve} from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"
import {configDefaults} from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({  
  publicDir: resolve(__dirname, "example", "public"),
  // root: resolve(__dirname, 'example'),
  test: {
    exclude: [...configDefaults.exclude, "example/**/*", ".image/*", ".husky/*"],
    // include: ['libs/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
    globals: true,
    environment: "jsdom"
  },
  server: {
    port: 3000
  },
  plugins: [
    react({}), 
    dts({
      entryRoot: resolve(__dirname, "libs"),
    })
  ],
  resolve: {
    alias: {
      '@/': new URL('./example/', import.meta.url).pathname
    }
  },
  build:{
    minify: "esbuild",
    target: "esnext",
    lib: {
      entry: resolve(__dirname, "libs/index.ts"),
      name: "react-squadpay",
      fileName: (format) => `squad.${format}.js`,
      formats: ['umd','es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
    
  }
})
