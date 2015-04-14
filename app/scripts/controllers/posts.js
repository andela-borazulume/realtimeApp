'use strict';

app.controller('PostsCtrl', function ($scope, Post, $location) {
	$scope.posts = Post.all;
	$scope.post = {url:'http://', title: '' };
	
	$scope.deletePost = function(post){
		Post.delete(post);
		};

	
});


