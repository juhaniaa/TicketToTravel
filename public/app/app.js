angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, ttAuth) {
  var routeRoleChecks = {
    user: {auth: function(ttAuth) {
      return ttAuth.authorizeAuthenticatedUserForRoute();
    }}
  }
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/partials/main/main', controller: 'ttMainCtrl'})
    .when('/signup', { templateUrl: '/partials/account/signup',
      controller: 'ttSignupCtrl'
    })
    .when('/profile', { templateUrl: '/partials/account/profile',
      controller: 'ttProfileCtrl', resolve: routeRoleChecks.user
    })
    .when('/trip', { templateUrl: '/partials/trip/trip',
      controller: 'ttTripCtrl'
    });
}]);

angular.module('app').run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  })
}])
