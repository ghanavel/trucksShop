'use strict';

/**
 * @ngdoc function
 * @name trucksShopApp.controller:PartslistCtrl
 * @description
 * # PartslistCtrl
 * Controller of the trucksShopApp
 */
angular.module('trucksShopApp')
  .controller('PartslistCtrl', function (countryFactory) {
  	var partsItem = {};
    var vm = this; 
    vm.countries = countryFactory.getAllCountry();
    //debugger;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



  });
