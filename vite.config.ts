import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vuetify from "vite-plugin-vuetify";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // enables Vuetify loader
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Kanjiquizer",
        short_name: "Kanjiquizer",
        description: "Kanjiquizer",
        theme_color: "#42b883",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
