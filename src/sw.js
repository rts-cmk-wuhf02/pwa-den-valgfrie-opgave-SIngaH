const cacheName = `static-cache-v8`;
const filesToCache = [
    `./`,
    `./offline.html`,
    `./assets/css/all-sites.css`, 
    `./assets/css/index/index.css`,
    `./assets/images/news-icon192.png`,
    `./assets/images/news-icon512.png`,
    `./assets/js/colorChange.js`
];

self.addEventListener('install', function(event) {
    console.log('Service Worker Installed');
    event.waitUntil(
      caches.open(cacheName)
      .then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        cache.addAll(filesToCache);
      }) 
    );
});

self.addEventListener(`activate`, function(event){
    console.log("activated ", event)
    event.waitUntil(
        caches.keys()
        .then(function(keys){
            console.log(keys);
            return Promise.all(keys.filter((key) => key !== cacheName).map((key) => caches.delete(key)))
        })
    );
});

self.addEventListener(`fetch`, function(event){
    console.log(`fetch `, event);  
    event.respondWith(   
        caches.open(cacheName)
        .then(function(cache){
            return cache.match(event.request)
            .then(function(response){
                return(
                    response || fetch(event.request)
                    .then(function(response){
                        cache.put(event.request, response.clone());
                        return response;
                    })
                );
            })
            .catch(function(){
                return caches.match(`./offline.html`); 
            });
        })
    );
});
self.addEventListener('notificationclick', function (event) {
    // clients.openWindow("/");
    if(event.action === "Settings"){
        console.log(event.action)
        clients.openWindow("/settings.html")
    }else{
        event.notification.close();
    }
});

//https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker#using_the_cache_api_in_the_service_worker