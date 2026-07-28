import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        sites: path.resolve(__dirname, 'sites/index.html'),
        sitesDemo: path.resolve(__dirname, 'sites/demo/index.html'),
        caseEntrePatas: path.resolve(__dirname, 'cases/entre-patas/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
