angular.module('app').controller('ttSignupCtrl', ['$scope', '$location', 'ttUser', 'ttNotifier', 'ttAuth', function($scope, $location, ttUser, ttNotifier, ttAuth) {

  $scope.signup = function() {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      firstName: $scope.fname,
      lastName: $scope.lname
    };

    ttAuth.createUser(newUserData).then(function() {
      ttNotifier.notify('User account created!');
      $location.path('/');
    }, function(reason) {
      ttNotifier.error(reason);
    })
  }
}])
