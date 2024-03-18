// service-worker.js

// Evento de instalación del Service Worker
self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
  });
  
  // Evento de activación del Service Worker
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
  });
  
  // Evento de solicitud
  self.addEventListener('fetch', (event) => {
    console.log('Fetch intercepted for:', event.request.url);
  });
  