'use strict';

angular.module('myApp.view2', ['ngRoute', 'firebase'])
  .controller('View2Ctrl', ['$scope', '$firebaseObject', function($scope, $firebaseObject) {
    $scope.pageClass = 'page-view2';


    var ref = new Firebase("https://kaiseronline.firebaseio.com/data");
    // download the data into a local object
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, "data2");

  }]);