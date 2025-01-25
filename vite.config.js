import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg'], // Add all necessary image file types
})
