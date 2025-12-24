import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//   // 拆分開發中和完成產品的路徑
//   base: process.env.NODE_ENV === "production" ? "/vite-sample-project/" : "/",
//   plugins: [react()],
// });

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/vite-sample-project/" : "/",
  plugins: [react()],
}));
