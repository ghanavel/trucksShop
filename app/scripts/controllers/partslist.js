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
    vm.isEdit = false;
    

    vm.updateParts = function(item){
    	if(!item){
    		return false;			
    	}

    	if(!vm.isEdit){
    		vm.parts.push(item);
    	}else{
    		var itemIndex = $routeParams.id - 1;
    		vm.parts[itemIndex] = item;
    		
    	}
    	$location.path("#!/");
	};

	$scope.deletParts = function (id) {
		vm.parts.splice(vm.parts.indexOf(vm.parts[id-1]), 1);
		$location.path("#!/");
	};


	vm.getPartsItem = function () {	
	    var item = vm.parts[$routeParams.id - 1];	
		if(!!item){
			vm.partsItem =  item;
			vm.isEdit = true;
		}
		

		
	};

	vm.getPartsItem(); 

   	$scope.$watch(function () {
          return vm.parts;
      }, function(a, b) {
          if(a !== b){			
			partsStorage.put(parts);
		}
      },true);

 });
