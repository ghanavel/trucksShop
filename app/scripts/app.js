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
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/partslist.html',
        controller: 'PartslistCtrl',
        controllerAs: 'vm'
      })
      .when('/update/', {
        templateUrl: 'views/updateparts.html',
        controller: 'PartslistCtrl',
        controllerAs: 'vm'
      })
      .when('/update/:id', {
        templateUrl: 'views/updateparts.html',
        controller: 'PartslistCtrl',
        controllerAs: 'vm'
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
