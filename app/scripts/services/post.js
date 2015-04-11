app.factory('Post', function ($resource) {
	

	return $resource('https://thinksterfan.firebaseio.com/posts:id.json');
});