import path from "path"
import { fileURLToPath } from "url"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa' // 1. Importamos el plugin

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 2. Agregamos la configuración del Service Worker
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: false, // <-- IMPORTANTE: Le dice a Vite que respete el manifest.json que ya tienes en public/
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'] // Hace que la app funcione offline guardando estos archivos
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})