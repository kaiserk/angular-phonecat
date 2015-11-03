'use strict';

angular.module('myApp.codeview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/codeview', {
    templateUrl: 'codeview/codeview.html',
    controller: 'CodeCtrl'
  });
}])

.controller('CodeCtrl', ['$scope', 'codeService',
  function($scope, codeService) {

    $scope.scenarioId = 5;

    $scope.setScenario = function (scenarioId) {
      $scope.scenario = codeService.code(scenarioId);
    };

  }]);