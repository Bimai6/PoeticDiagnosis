import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePWA from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Poetic Diagnosis',
        short_name: 'PDiagnosis',
        description: 'Cuestionary about feelings you are having currently',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '16x16 32x32 64x64',
            type: 'image/x-icon',
          },
          {
            src: '/logo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logo512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});