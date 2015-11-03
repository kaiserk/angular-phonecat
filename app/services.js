'use strict';

//var phonecatServices = angular.module('phonecatServices', ['ngResource']);


/* Services */
angular.module('myApp.' +
  'Services', ['ngResource'])

.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }])

.factory('Code', ['$resource',
  function($resource){
    return $resource('https://api.github.com/gists/:gistId', {}, {
        query: {method:'GET', params:{gistId:'5fbd6faca62e5bab4d13'}, isArray:false}
    });
  }])

.service('phoneService', ['$resource', 'Phone', function ($resource, Phone) {
  var data = Phone.query();

  return {
    phones:function () {
      // This exposed private data
      return data;
    },
    addPhone:function (noteTitle) {
      // This is a public function that modifies private data
    },
    deletePhone:function (id) {
      // This is a public function that modifies private data
    }
  };
}])

.service('codeService', ['$resource', 'Code', function ($resource, Code) {
  var data = Code.query();
  var currData = {};

  return {
    codes:function() {
      return data.files;
    },
    code:function (id) {
      // This exposed private data
      currData = data.files["gistfile"+id+".txt"].content;
      return currData;
    },
    setCode:function (scenarios) {
      data = scenarios;
      // This is a public function that modifies private data
    },
    deleteCode:function (id) {
      // This is a public function that modifies private data
    }
  };
}]);