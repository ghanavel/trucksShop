'use strict';

describe('Service: countryFactory', function () {

  // load the service's module
  beforeEach(module('trucksShopApp'));

  // instantiate service
  var countryFactory;
  beforeEach(inject(function (_countryFactory_) {
    countryFactory = _countryFactory_;
  }));

  it('should do something', function () {
    expect(!!countryFactory).toBe(true);
  });

});
