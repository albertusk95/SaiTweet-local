var app = angular.module('saitweet', [
    'ngRoute',
    'queryContainer',
	'whatisit',
	'contact'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/queryContainer'
    });
}]);