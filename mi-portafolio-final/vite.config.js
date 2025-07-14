import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Se eliminó la sección esbuild.loader, ya que @vitejs/plugin-react
  // debería manejar la sintaxis JSX en archivos .js y .jsx automáticamente.
})
