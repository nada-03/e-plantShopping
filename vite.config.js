import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shoppingreact", // Keep this if you want the base URL to be set
  plugins: [react()],
})

