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
    return $resource(
      'https://api.github.com/gists/:gistId',
      {},
      {
        query: {method:'GET', params:{gistId:'5fbd6faca62e5bab4d13'}, isArray:true}
      }
    );
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
  //var data = Code.query();
  //var data = Code.get({gistId: '5fbd6faca62e5bab4d13'}, function () {
  //  //console.log(data['files']['gistfile1.txt']['content']);
  //  //data['files']['gistfile1.txt']['content'];
  //});
  var data = {};
  var currData = {};

  return {
    code:function (id) {
      // This exposed private data
      currData = data['gistfile'+String(id)+'.txt'];
      currData = currData['content'];
      console.log(currData);
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