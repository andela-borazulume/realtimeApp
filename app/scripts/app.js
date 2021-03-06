'use strict';

/* global app:true */
/* exported app */

/**
 * @ngdoc overview
 * @name thinksterFanApp
 * @description
 * # thinksterFanApp
 *
 * Main module of the application.
 */
var app = angular
  .module('thinksterFanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://thinksterfan.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      }).when('/posts/:postId', {
        templateUrl: 'views/showPost.html',
        controller: 'PostViewCtrl'
      }).when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth){
            return Auth.resolveUser();
          }
        }
      }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth){
            return Auth.resolveUser();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
