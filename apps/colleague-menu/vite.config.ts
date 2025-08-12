import react from '@vitejs/plugin-react';
import { vitePlugin as remix } from '@remix-run/dev';
import { federation } from '@module-federation/vite';

export default {
  plugins: [
    react(),
    remix(),
    federation({
      name: 'colleagueMenu',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './app/remote.tsx',
      },
      shared: {
        'shared-state': { singleton: true, eager: true, requiredVersion: false },
        zustand: { singleton: true, requiredVersion: false },
      },
    }),
  ],
  build: {
    outDir: 'dist',
    target: 'esnext',
  },
};
