import * as WorkBoxWindow from 'workbox-window';

const swRegister = async () => {
  navigator.serviceWorker.register('./sw-register.js');
  if (!('serviceWorker' in navigator)) {
    console.info('SW not supported');
    return;
  }
  const wb = WorkBoxWindow.Workbox('./sw.bundle.js');
  try {
    // await navigator.serviceWorker.register('./sw.budle.js');
    await wb.register();

    console.lof('service worker registred');
  } catch (e) {
    console.log('failed to register');
  }
};

export default swRegister;
