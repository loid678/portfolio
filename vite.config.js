import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Fix for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
