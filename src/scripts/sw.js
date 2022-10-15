import 'regenerator-runtime';
import CacheHelper from '../scripts/utils/cache-helper.js';

const assetsToCache = [
  './',
  './assets/android-chrome-36x36.webp',
  './assets/android-chrome-48x48.webp',
  './assets/android-chrome-72x72.webp',
  './assets/android-chrome-96x96.webp',
  './assets/android-chrome-144x144.webp',
  './assets/android-chrome-192x192.webp',
  './assets/android-chrome-256x256.webp',
  './assets/android-chrome-384x384.webp',
  './assets/android-chrome-512x512.webp',
  './assets/apple-touch-icon-57x57.webp',
  './assets/apple-touch-icon-60x60.webp',
  './assets/apple-touch-icon-72x72.webp',
  './assets/apple-touch-icon-114x114.webp',
  './assets/apple-touch-icon-120x120.webp',
  './assets/apple-touch-icon-144x144.webp',
  './assets/apple-touch-icon-152x152.webp',
  './assets/apple-touch-icon-167x167.webp',
  './assets/apple-touch-icon-180x180.webp',
  './index.html',
  './favicon-16x16.webp',
  './favicon-32x32.webp',
  './favicon-48x48.webp',
  './favicon.webp',
  './mstile-70x70.webp',
  './mstile-144x144.webp',
  './mstile-150x150.webp',
  './mstile-310x150.webp',
  './mstile-310x310.webp',
  'yandex-browser-50x50.webp',
  './favicon.ico',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
