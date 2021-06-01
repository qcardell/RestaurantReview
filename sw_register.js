
navigator.serviceWorker.register('./js/sw.js').then(function(registration){
	console.log("Registration worked!!", registration);
	}).catch(function(error) {
		console.log('Registration failed!',  error);
	});
//Testing comments