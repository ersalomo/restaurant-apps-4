import 'regenerator-runtime';
import CacheHelper from '../scripts/utils/cache-helper.js';

const assetsToCache = [
  './',
  './assets/android-chrome-36x36.png',
  './assets/android-chrome-48x48.png',
  './assets/android-chrome-72x72.png',
  './assets/android-chrome-96x96.png',
  './assets/android-chrome-144x144.png',
  './assets/android-chrome-192x192.png',
  './assets/android-chrome-256x256.png',
  './assets/android-chrome-384x384.png',
  './assets/android-chrome-512x512.png',
  './index.html',
  './favicon-16x16.png',
  './favicon-32x32.png',
  './favicon-48x48.png',
  './favicon.png',
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
