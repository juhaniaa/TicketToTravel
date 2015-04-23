angular.module('app').factory('ttTicket', ['$resource', function($resource) {
  var StationResource = $resource('/api/tickets/:id', {_id: "@id"});

  return StationResource;
}])
