import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint(),
    {
      failOnError: false,
      failOnWarning: true,
      rules: {
        "no-unused-vars": "error",
        // "no-unused-vars": "off",
      },
    },
  ],
});
