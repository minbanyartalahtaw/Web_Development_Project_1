import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so the build works on GitHub Pages
// no matter what the repository name is.
export default defineConfig({
  plugins: [react()],
  base: './',
})
