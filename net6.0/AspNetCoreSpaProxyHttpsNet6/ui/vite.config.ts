import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/app",
  server: {
    https: {
      key: readFileSync("../../../.cert/aspnet-cert.key"),
      cert: readFileSync("../../../.cert/aspnet-cert.pem"),
    },
    port: 3001,
  },
  plugins: [react()],
});
