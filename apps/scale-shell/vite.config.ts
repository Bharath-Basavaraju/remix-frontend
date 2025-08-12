import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default {
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
  optimizeDeps: {
    // avoid pre-bundling federated modules during dev

    exclude: ['produceScale/App', 'colleagueMenu/App', 'notification/App'],
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    rollupOptions: {
      // mark federated modules as external so Vite doesn't try to bundle them
      external: [
        'produceScale/App',
        'colleagueMenu/App',
        'notification/App',
      ],
    },
  },
};
