angular.module('app').controller('ttProfileCtrl',
  ['$scope', 'ttAuth', 'ttIdentity', 'ttNotifier',
  function($scope, ttAuth, ttIdentity, ttNotifier){
    
  $scope.email = ttIdentity.currentUser.username;
  $scope.fname = ttIdentity.currentUser.firstName;
  $scope.lname = ttIdentity.currentUser.lastName;

  $scope.update = function() {
    var doUpdate = true;
    // if both password fields are empty or they match, update profile
    if(($scope.password && $scope.password.length > 0) || ($scope.confirmPassword && $scope.confirmPassword.length > 0)){
      if($scope.password !== $scope.confirmPassword) {
        doUpdate = false;
        ttNotifier.error('Password fields must match');
      }
    }

    if(doUpdate) {
      var newUserData = {
        username: $scope.email,
        firstName: $scope.fname,
        lastName: $scope.lname
      }

      // update password if user has entered a new one
      if($scope.password && $scope.password.length > 0) {
        newUserData.password = $scope.password;
      }

      ttAuth.updateCurrentUser(newUserData).then(function() {
        ttNotifier.notify('Your user account has been updated');
      }, function(reason) {
        ttNotifier.error(reason);
      })
    }
  }
}])
