import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/focus_info",
    server: {
    host: '0.0.0.0'
  }
});
