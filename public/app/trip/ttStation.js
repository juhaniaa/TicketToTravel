angular.module('app').factory('ttStation', ['$resource', function($resource) {
  var StationResource = $resource('/api/stations/:id', {_id: "@id"});

  return StationResource;
}])
