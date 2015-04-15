angular.module('app').factory('ttCachedRoutes', ['ttRoute', function(ttRoute) {
  var routeList;

  return {
    query: function() {
      if(!routeList) {
        routeList = ttRoute.query();
      }

      return routeList;
    }
  }
}])
