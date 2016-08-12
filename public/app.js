var app = angular.module('saitweet', [
    'ngRoute',
    'queryContainer',
	'whatisit'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/queryContainer'
    });
}]);