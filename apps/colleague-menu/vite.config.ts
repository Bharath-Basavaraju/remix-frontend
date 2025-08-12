import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default {
  plugins: [
    react(),
    federation({
      name: 'colleagueMenu',
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
};
