var cache_name = 'ichinomiya_map_1';
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cache_name).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          if (response.ok) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      });
    })
  );
});
