const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  try {
    navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker registered');
  } catch (e) {
    console.log('Failed to register service worker', e);
  }
};
export default swRegister;
