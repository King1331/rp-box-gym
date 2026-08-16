import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildTime = new Date().getTime(); // Marca de tiempo única para cada build

// Plugin personalizado para crear version.json
const generateVersion = () => ({
  name: 'generate-version',
  writeBundle() {
    fs.writeFileSync(
      path.resolve(__dirname, 'dist/version.json'),
      JSON.stringify({ version: buildTime })
    );
  }
});

export default defineConfig({
  // Guardamos la versión actual en una variable global para leerla en React
  define: {
    __APP_VERSION__: buildTime,
  },
  plugins: [
    react(),
    generateVersion(), // <--- Agregamos nuestro plugin
    VitePWA({ 
      registerType: 'prompt',
      manifest: false, 
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
        // Evitar que el SW guarde en caché el archivo de versión
        navigateFallbackDenylist: [/^\/version.json/]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});