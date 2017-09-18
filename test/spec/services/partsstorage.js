'use strict';

describe('Service: partsStorage', function () {

  // load the service's module
  beforeEach(module('trucksShopApp'));

  // instantiate service
  var partsStorage;
  beforeEach(inject(function (_partsStorage_) {
    partsStorage = _partsStorage_;
  }));

  it('should do something', function () {
    expect(!!partsStorage).toBe(true);
  });

});
