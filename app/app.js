'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'myApp.view1',
  'myApp.view2',
  'myApp.codeview',
  'myApp.version',
  'myApp.Services'
])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/codeview', {
      templateUrl: 'codeview/codeview.html',
      controller: 'CodeCtrl'
    });
  }])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }])

;
