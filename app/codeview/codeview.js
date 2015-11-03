'use strict';

angular.module('myApp.codeview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/codeview', {
    templateUrl: 'codeview/codeview.html',
    controller: 'CodeCtrl'
  });
}])

.controller('CodeCtrl', ['$scope', 'Code', 'codeService',
  function($scope, Code, codeService) {
    $scope.code = {};

    $scope.code = Code.get({gistId: '5fbd6faca62e5bab4d13'}, function () {
      codeService.setCode($scope.code['files']);
    });

    $scope.scenario = codeService.code(1);

    //$scope.phones = codeService.code();
    //$scope.scenarioId = 1;
    //
    //$scope.setScenario = function (scenarioId) {
    //  $scope.scenarioId = scenarioId;
    //  $scope.scenario = codeService.code($scope.scenarioId);
    //};

    //$scope.setCode = function(id) {
    //  $scope.scenario = $scope.code['files']['gistfile'+String(id)+'.txt']['content'];
    //  console.log($scope.scenario);
    //};

  }]);