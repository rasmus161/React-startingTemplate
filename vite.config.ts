import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { qrcode } from "vite-plugin-qrcode";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), qrcode()],
  server: {
    port: 5070, // port for dev server
  },
});
