angular.module('app').factory('ttUser', function($resource) {
  var UserResource = $resource('/api/users/:id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return UserResource;
})
