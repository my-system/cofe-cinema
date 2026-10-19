import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        projects: resolve(import.meta.dirname, 'projects.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
        fasadUtama: resolve(import.meta.dirname, 'projects/fasad-utama.html'),
        ruangUtama: resolve(import.meta.dirname, 'projects/ruang-utama.html'),
        barSeduh: resolve(import.meta.dirname, 'projects/bar-seduh.html'),
        sudutCerita: resolve(import.meta.dirname, 'projects/sudut-cerita.html'),
        terasTeduh: resolve(import.meta.dirname, 'projects/teras-teduh.html'),
        suasanaMalam: resolve(import.meta.dirname, 'projects/suasana-malam.html'),
      }
    }
  }
});

