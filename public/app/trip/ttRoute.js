angular.module('app').factory('ttRoute', ['$resource', function($resource) {
  var RouteResource = $resource('/api/routes/:id', {_id: "@id"});

  return RouteResource;
}])
