angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    user: {auth: function(mvAuth) {
      return mvAuth.authorizeAuthenticatedUserForRoute();
    }}
  }
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/partials/main/main', controller: 'ttMainCtrl'})
    .when('/signup', { templateUrl: '/partials/account/signup',
      controller: 'ttSignupCtrl'
    });
});

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  })
})
