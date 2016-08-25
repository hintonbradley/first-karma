(function() {
	//We're adding data to the angular module so it must begin with angular.module
		angular.module('bp')
		.controller('testingAngularCtrl', ['$scope','$state', function($scope, $state) {

			$scope.title = "Testing AngularJS Applications";

			$scope.destinations = [];

			$scope.newDestination = {
				city: undefined,
				country: undefined
			}

			$scope.addDestination = function () {
				$scope.destinations.push(
				{
					city: $scope.newDestination.city,
					country: $scope.newDestination.country
				});
			}

		}]);
	}());