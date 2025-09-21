import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";  // si no lo tienes aún
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  // puedes agregar otras configuraciones si lo necesitas
});
