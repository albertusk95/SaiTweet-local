var app = angular.module('saitweet', [
    'ngRoute',
    'queryContainer'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/queryContainer'
    });
}]);