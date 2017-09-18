'use strict';

/**
 * @ngdoc service
 * @name trucksShopApp.partsStorage
 * @description
 * # partsStorage
 * Factory in the trucksShopApp.
 */
angular.module('trucksShopApp')
  .factory('partsStorage', function () {
    // Service logic
    // ...

    var PARTS_DETAILS = "PARTS-DETAILS";

    // Public API here
    return {
        get: function(){          
          
          return  JSON.parse(localStorage.getItem(PARTS_DETAILS) ||  '[]');
        },
        put: function(parts){
          return localStorage.setItem(PARTS_DETAILS,JSON.stringify(parts));
        }
    };
  });
