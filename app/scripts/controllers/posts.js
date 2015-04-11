'use strict';

app.controller('PostsCtrl', ['Post'], function ($scope, Post) {
	$scope.posts = [];
	$scope.post = {url:'http://', title: '' };
	$scope.test = "You you";

	$scope.submitPost = function(){
		$scope.posts.push($scope.post);
		$scope.post = {url: 'http://', title: ''};
	};

	$scope.deletePost = function(index){
		$scope.posts.splice(index, 1);

	};
	
});