'use strict';
angular.module('myApp.view1', ['ngRoute'])

  .controller('View1Ctrl', ['$scope', 'phoneService', 'codeService',
    function($scope, phoneService, codeService) {
      $scope.backgroundImage = 'https://s-media-cache-ak0.pinimg.com/originals/16/47/83/1647832206cd687d622f1826b68c304f.jpg';
      $scope.pageClass = 'page-view1';

      $scope.phones = phoneService.phones();
      $scope.orderProp = 'age';
      $scope.scenarioId = 1;

      $scope.setScenario = function (scenarioId) {
        $scope.scenario = codeService.code(scenarioId);
      };

      $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
      ];

      $scope.addAlert = function() {
        $scope.alerts.push({msg: 'Another alert!'});
      };

      $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };

    }
    ])

  .controller('View1Ctrl2', ['$scope',
    function($scope) {
      $scope.orderProp = 'age';

    }
    ])

;
