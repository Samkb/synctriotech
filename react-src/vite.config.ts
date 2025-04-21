import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 15000, // Raise limit to 1000kb
    rollupOptions: {
      output: {
        manualChunks: undefined, // Ensures no separate chunks
        entryFileNames: "index.js", // Fixed name for the main entry file
        chunkFileNames: "index.js", // Ensures chunks also use the same filename
        assetFileNames: "assets/[name][extname]", // Keeps assets organized
      },
    },
  },
});
