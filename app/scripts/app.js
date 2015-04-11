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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
