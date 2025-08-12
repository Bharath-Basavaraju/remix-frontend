import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  dts: false,
  clean: true,
});
