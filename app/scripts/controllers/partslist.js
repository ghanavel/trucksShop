'use strict';

/**
 * @ngdoc function
 * @name trucksShopApp.controller:PartslistCtrl
 * @description
 * # PartslistCtrl
 * Controller of the trucksShopApp
 */
angular.module('trucksShopApp')
  .controller('PartslistCtrl', function ($scope,$location, countryFactory, partsStorage) {
  	var partsItem = {};
    var vm = this; 
    vm.countries = countryFactory.getAllCountry();
    var parts = vm.parts = partsStorage.get();
    //debugger;

    vm.updateParts = function(item,id){
    	if(!id){
    		parts.push(item);
    	}
    	$location.path("#!/");
	};


   	$scope.$watch(function () {
          return vm.parts;
      }, function(a, b) {
          if(a !== b){
			debugger;
			partsStorage.put(parts);
		}
      },true);

 });
