import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tanstackStart(), react(), tsconfigPaths(), tailwindcss()],
  server: {
    allowedHosts: ["7acdba6a91fdcd.lhr.life"],
  },
});
