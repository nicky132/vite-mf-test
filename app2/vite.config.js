import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app2",
      filename: "remoteEntry-legacy.js",
      library: { type: "module" },
      exposes: {
        "./App": "./src/App.jsx",
        "./Jwexin": "./src/jweixin/jweixin-1.3.2.js",
      },
      shared: ["react"],
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
