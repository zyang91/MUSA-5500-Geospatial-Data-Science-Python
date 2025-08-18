import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MUSA-5500-Geospatial-Data-Science-Python/',   // <<< IMPORTANT
})
