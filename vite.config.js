import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: "./", // Cambia el valor base para rutas relativas
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});


