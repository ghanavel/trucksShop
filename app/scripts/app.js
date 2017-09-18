'use strict';

/**
 * @ngdoc overview
 * @name trucksShopApp
 * @description
 * # trucksShopApp
 *
 * Main module of the application.
 */
angular
  .module('trucksShopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/partslist.html',
        controller: 'PartslistCtrl',
        controllerAs: 'vm'
      })
      .when('/update', {
        templateUrl: 'views/updateparts.html',
        controller: 'PartslistCtrl',
        controllerAs: 'vm'
      })
      .when('/codeeasy', {
        templateUrl: 'views/codeeasy.html',
        controller: 'CodeeasyCtrl',
        controllerAs: 'codeeasy'
      })
      .when('/partsList', {
        templateUrl: 'views/partslist.html',
        controller: 'PartslistCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
