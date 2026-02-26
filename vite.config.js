import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',

  build: {
    // Попереджати якщо chunk > 500 KB
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Розбиваємо vendor-код окремо — кешується браузером незалежно від змін у додатку
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        // Іменування для довготривалого кешування
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(png|jpe?g|webp|svg|gif|ico)$/.test(name)) {
            return 'assets/img/[name]-[hash][extname]';
          }
          if (/\.css$/.test(name)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },

    // Не генерувати source maps у production
    sourcemap: false,

    // Вбудовувати маленькі assets (< 4 KB) як base64 — менше HTTP запитів
    assetsInlineLimit: 4096,

    // CSS code splitting — кожен chunk отримує свій CSS
    cssCodeSplit: true,
  },

  // Оптимізація залежностей при dev-сервері
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})