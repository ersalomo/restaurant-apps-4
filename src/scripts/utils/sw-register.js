import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }
  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');
  try {
    // navigator.serviceWorker.register('./sw.bundle.js');
    await wb.register();
    console.log('Service worker registered');
  } catch (e) {
    console.log('Failed to register service worker', e);
  }
};
export default swRegister;
