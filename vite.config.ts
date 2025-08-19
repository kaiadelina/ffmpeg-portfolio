import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

const repoName = 'ffmpeg-portfolio';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: `/${repoName}/`,
});
