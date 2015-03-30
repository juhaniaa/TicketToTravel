angular.module('app').controller('ttNavBarLoginCtrl', function($scope, $http, ttIdentity, ttNotifier, ttAuth, $location) {
  $scope.identity = ttIdentity;
  $scope.signin = function(username, password) {
    ttAuth.authenticateUser(username,password).then(function(success) {
      if(success) {
        ttNotifier.notify('You have signed in');
      } else {
        ttNotifier.notify('Username/password combination incorrect');
      }
    });
  }

  $scope.signout = function() {
    ttAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
      ttNotifier.notify('You have successfully signed out!');
      $location.path('/');
    })
  }
});
