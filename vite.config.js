import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { qrcode } from "vite-plugin-qrcode";
import path from "path";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), qrcode()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"), //  @ points to /src
    },
  },
  server: {
    port: 5070, // port for dev server
  },
});
