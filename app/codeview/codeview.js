'use strict';

angular.module('myApp.codeview', ['ngRoute'])
  .controller('CodeCtrl', ['$scope', 'codeService',
    function($scope, codeService) {
      $scope.pageClass = 'page-codeview';


      $scope.scenarioId = 5;

      $scope.setScenario = function (scenarioId) {
        $scope.scenario = codeService.code(scenarioId);
      };

    }]);