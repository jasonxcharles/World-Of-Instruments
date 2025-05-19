<script type="javascript/worker">
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('instrument-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './css/style.css',
        './js/app.js',
        './data/instruments.json',
        './images/trumpet.jpg',
        './images/harp.jpg',
        './images/bass.jpg',
        './audio/trumpet.mp3',
        './audio/harp.mp3',
        './audio/bass.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
</script>
