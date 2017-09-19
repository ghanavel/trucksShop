'use strict';

/**
 * @ngdoc function
 * @name trucksShopApp.controller:PartslistCtrl
 * @description
 * # PartslistCtrl
 * Controller of the trucksShopApp
 */
angular.module('trucksShopApp')
  .controller('PartslistCtrl', function ($scope,$location,$routeParams, countryFactory, partsStorage) {
  	var partsItem = {};
    var vm = this; 
    vm.countries = countryFactory.getAllCountry();
    var parts = vm.parts = partsStorage.get();
    //debugger;

    vm.updateParts = function(item,id){
    	if(!item){
    		return false;			
    	}

    	if(!id){
    		parts.push(item);
    	}
    	$location.path("#!/");
	};



	vm.getPartsItem = function () {	
	    var item = vm.parts[$routeParams.id - 1];	
		if(!!item){
			vm.partsItem =  item;
		}
		

		
	};

	vm.getPartsItem(); 
   	$scope.$watch(function () {
          return vm.parts;
      }, function(a, b) {
          if(a !== b){
			debugger;
			partsStorage.put(parts);
		}
      },true);

 });
