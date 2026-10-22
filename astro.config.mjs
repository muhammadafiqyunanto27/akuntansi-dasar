// @ts-check
import { defineConfig } from 'astro/config';

// Static output: the whole site is pre-rendered and can be deployed to any
// static host (Vercel, Netlify, GitHub Pages) without a server runtime.
export default defineConfig({
  site: 'https://akuntansi-dasar.vercel.app',
  output: 'static',
  trailingSlash: 'ignore',
});
