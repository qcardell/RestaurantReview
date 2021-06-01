
navigator.serviceWorker.register('sw.js').then(function(registration){
	console.log("Registration worked!!", registration);
	}).catch(function(error) {
		console.log('Registration failed!',  error);
	});