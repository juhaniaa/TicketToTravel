angular.module('app').factory('ttZone', ['$resource', function($resource) {
  var ZoneResource = $resource('/api/zones/:id', {_id: "@id"});

  return ZoneResource;
}])
