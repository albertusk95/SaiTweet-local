angular.module('queryContainer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/queryContainer', {
		templateUrl: 'public/queryContainer/queryContainer.html',
		controller: 'queryContainer_Ctrl'
	});
}])

.controller('queryContainer_Ctrl', ['$scope', function($scope) {
	console.log("queryContainer controller...");
	
	// default value of queryPlaceholder
	$scope.queryPlaceholder = "Enter a #hashtag to track";
	
	$scope.showQueryItems = function(queryID) {
		if (queryID == 0) {
			// #hashtag
			$scope.queryPlaceholder = "Enter a #hashtag to track";
		} else if (queryID == 1) {
			// @account
			$scope.queryPlaceholder = "Enter an @account to analyze its activity";
		} else if (queryID == 2) {
			// keyword
			$scope.queryPlaceholder = "Enter a keyword to track";
		} else if (queryID == 3) {
			// @mention
			$scope.queryPlaceholder = "Enter a username to track its @mention";
		} else {
			// URL
			$scope.queryPlaceholder = "Enter a URL to track";
		}
		
		
	};
	
}]);

