import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2022",
    cssCodeSplit: true,
    sourcemap: false
  },
  optimizeDeps: {
    include: ["react", "react-dom", "three", "@react-three/fiber"]
  }
});
