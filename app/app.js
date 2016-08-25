(function() {
	angular.module('bp', ['ui.router'])
	.config(function($stateProvider) {

		$stateProvider

			.state('signUp', {
				url: '/signup',
				templateUrl: 'app/views/signup.html',
				controller: 'SignupController'
			})
			.state('test', {
				url: '/test',
				templateUrl: 'app/views/test.html',
				controller: 'testingAngularCtrl'
			})
	})
}());
