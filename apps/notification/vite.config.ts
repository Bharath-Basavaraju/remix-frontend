import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'notification',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './app/remote.tsx',
      },
      shared: ['react', 'react-dom', 'zustand'],
    }),
  ],
  build: {
    outDir: 'dist',
    target: 'esnext',
  },
});
