import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return;
            if (id.includes('/motion/') || id.includes('framer-motion')) return 'dep-motion';
            if (id.includes('lucide-react')) return 'dep-lucide';
            if (id.includes('react-router') || id.includes('@remix-run')) return 'dep-router';
            if (id.includes('react-helmet')) return 'dep-helmet';
            if (id.includes('react-dom')) return 'dep-react-dom';
            if (id.includes('/scheduler/')) return 'dep-scheduler';
            if (id.includes('tailwind-merge')) return 'dep-tailwind-merge';
            if (id.includes('/react/')) return 'dep-react';
            if (id.includes('clsx')) return 'dep-clsx';
            return 'vendor-misc';
          },
        },
      },
    },
  };
});
