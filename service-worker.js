const CACHE='rosie-rhythm-site-v8';
const FILES=['./','./index.html','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./favicon.ico','./favicon-32.png','./site.webmanifest'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE&&key.startsWith('rosie-rhythm-site-')).map(key=>caches.delete(key)))));self.clients.claim()});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy))}return response}).catch(()=>caches.match(event.request)))});

self.addEventListener('push',e=>{let data={};try{data=e.data?.json()||{}}catch{};const title=data.title||'Rosie Rhythm ♡';e.waitUntil(self.registration.showNotification(title,{body:data.body||'A gentle Rosie reminder ♡',icon:'./icon-192.png',badge:'./favicon-32.png',tag:'rosie-'+(data.tag||'reminder'),data:{url:'./'}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil((async()=>{const open=await clients.matchAll({type:'window',includeUncontrolled:true});if(open.length){await open[0].focus();return}await clients.openWindow('./')})())});
