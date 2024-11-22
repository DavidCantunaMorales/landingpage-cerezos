import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/landingpage-cerezos/', // Cambia esto por el nombre de tu repositorio
  plugins: [react()],
});
