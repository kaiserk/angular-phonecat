'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'phoneService', 'codeService',
  function($scope, phoneService, codeService) {
    $scope.phones = phoneService.phones();
    $scope.orderProp = 'age';
    $scope.scenarioId = 1;

    $scope.setScenario = function (scenarioId) {
      $scope.scenarioId = scenarioId;
      $scope.scenario = codeService.code($scope.scenarioId);
    };

  }

  ])

.controller('View1Ctrl2', ['$scope',
  function($scope) {
    $scope.orderProp = 'age';

  }
  ])

;
