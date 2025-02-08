import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import hmrReload from './hmr';

export default defineConfig({
  plugins: [react(), hmrReload()]
});