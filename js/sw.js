//Install and Cache
self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open('restaurant-reviews-v1').then(function(cache) {
			return cache.addAll([
				'/css/styles.css',
				'/data/restaurants.json',
				'/img/1.jpg',
				'/img/2.jpg',
				'/img/3.jpg',
				'/img/4.jpg',
				'/img/5.jpg',
				'/img/6.jpg',
				'/img/7.jpg',
				'/img/8.jpg',
				'/img/9.jpg',
				'/img/10.jpg',
				'/js/dbhelper.js',
				'/js/main.js',
				'/js/restaurant_info.js',
				'/index.html',
				'/restaurant.html'
			]);
		})
	);
});
	
//Cache Response
self.addEventListener('fetch', function(event){
	event.respondWith(
		caches.match(event.request).then(function(response){
			if(response){
				console.log(event.request.url + ' found in cahce');
				return response;
			}
			return fetch(event.request).then(function(response){
				if(!response){
					console.log('[ServiceWorker] Fetch had no response');
					return response;
				}
				let responseClone = response.clone();
				return caches.open('restaurant-reviews-v1').then(function(cache){
					cache.put(event.request, response.clone());
					return response;
				})
				.catch(function(error){
					console.log('{ServiceWorker} Error occurred during fetch and cache');
				})
			})
		})
	);
});