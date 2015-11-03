'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    var scope, firstController, phoneService, codeService;

    beforeEach(inject(function($controller, $rootScope) {

      scope=$rootScope.$new();

      phoneService = {
        phones: function() {
          return { id: 8888, name: 'test user' };
        }
      };

      codeService = {
        get: function() {
          return { scenarioId: 5, name: 'test user' };
        }
      };

      firstController = $controller('View1Ctrl', {
        $scope: scope,
        phoneService: phoneService,
        codeService: codeService
      });

    }));

    it('should ....', function() {
      //spec body
      expect(scope.orderProp).toBe('age');

    });

    it('has 1 as default scenario', function() {
      expect(scope.scenarioId).toBe(1);
    });

  });
});