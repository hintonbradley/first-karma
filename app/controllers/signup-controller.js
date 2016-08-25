(function() {
	//We're adding data to the angular module so it must begin with angular.module
		angular.module('bp')
		.controller('SignupController', ['$scope','$state', function($scope, $state) {

			$scope.name = 'James Bradley';

		}]);
	}());