import { i18n } from './next-i18next.config.mjs';
console.log('i18n', i18n); // This should log the i18n configuration object

const nextConfig = {
  i18n,
  reactStrictMode: true,
  // other next.js config options here
};

export default nextConfig;