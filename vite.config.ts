import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/form-renderer/form-renderer.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
