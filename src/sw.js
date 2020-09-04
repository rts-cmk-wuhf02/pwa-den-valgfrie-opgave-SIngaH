importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const {registerRoute} = workbox.routing;
const {precacheAndRoute} = workbox.precaching;
const {StaleWhileRevalidate} = workbox.strategies;
const {setCatchHandler} = workbox.routing;

precacheAndRoute([
  {url: '/index.html', revision: null },
  {url: `./offline.html`, revision: null},
  {url: `./assets/css/index/index.css`, revision: null},
  {url: `./assets/css/all-sites.css`, revision: null}, 
  {url: `./assets/images/news-icon192.png`, revision: null},
  {url: `./assets/images/news-icon512.png`, revision: null},
  {url: `./assets/css/variables.css`, revision: null},
  {url: `./assets/js/colorChange.js`, revision: null},
  {url: `./assets/js/whatToShow.js`, revision: null},
  {url: `./assets/js/fetch.js`, revision: null},
  {url: `./assets/js/showCategory.js`, revision: null}
]);

registerRoute(({ url}) => url.pathname.startsWith("/"), new StaleWhileRevalidate());

setCatchHandler(({url, event, params}) =>{
    if(event.request.destination === "document"){
        return caches.match("/offline.html")
    }else{
        return Response.error();
    }
});

self.addEventListener('notificationclick', function (event) {
    if(event.action === "Settings"){
        // console.log(event.action)
        clients.openWindow("/settings.html");
        myWindow.focus(); 
    }else{
        event.notification.close();
    }
    setTimeout(function(){ event.notification.close(); }, 5000);
});