angular.module('app').factory('ttIdentity', ['$window', 'ttUser', function($window, ttUser) {
  var currentUser;
  if(!!$window.bootstrappedUserObject) {
    currentUser = new ttUser();
    angular.extend(currentUser, $window.bootstrappedUserObject);
  }
  return {
    currentUser: currentUser,
    isAuthenticated: function() {
      return !!this.currentUser;
    }
  }
}])
