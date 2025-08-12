import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        produceScale: '/remotes/produce-scale/remoteEntry.js',
        colleagueMenu: '/remotes/colleague-menu/remoteEntry.js',
        notification: '/remotes/notification/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'xstate', 'zustand'],
    }),
  ],
  build: {
    outDir: 'dist',
    target: 'esnext',
  },
});
