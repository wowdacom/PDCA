self.addEventListener('install', function(event) {
  console.log('[Server Worker] Installing Server Worker ...', event)
})

self.addEventListener('activate', function(event) {
    console.log('[Server Worker] Installing Server Worker ...', event);
    return self.clients.claim();
})