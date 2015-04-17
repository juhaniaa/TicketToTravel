angular.module('app').factory('ttRoute', ['$resource', function($resource) {
  var RouteResource = $resource('/api/routes/:id', {_id: "@id"}, {
    findByStations: {method:'GET', isArray:true}
  });

  return RouteResource;
}])
