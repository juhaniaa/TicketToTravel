angular.module('app').factory('ttAuth', ['$http', 'ttIdentity', '$q', 'ttUser', function($http, ttIdentity, $q, ttUser) {
  return {
    authenticateUser: function(username, password) {
      var dfd = $q.defer();
      $http.post('/login', {username:username, password:password}).then(function(response) {
        if(response.data.success) {
          var user = new ttUser();
          angular.extend(user, response.data.user);
          ttIdentity.currentUser = user;
          dfd.resolve(true);
        } else {
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    },

    createUser: function(newUserData) {
      var newUser = new ttUser(newUserData);
      var dfd = $q.defer();

      newUser.$save().then(function() {
        ttIdentity.currentUser = newUser;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      })

      return dfd.promise;
    },

    updateCurrentUser: function(newUserData) {
      var dfd = $q.defer();

      var clone = angular.copy(ttIdentity.currentUser);
      angular.extend(clone, newUserData);
      clone.$update().then(function() {
        ttIdentity.currentUser = clone;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },

    logoutUser: function() {
      var dfd = $q.defer();
      $http.post('/logout', {logout:true}).then(function() {
        ttIdentity.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    },

    authorizeAuthenticatedUserForRoute: function() {
      if(ttIdentity.isAuthenticated()) {
        return true;
      } else {
        return $q.reject('not authorized');
      }
    }
  }
}]);
