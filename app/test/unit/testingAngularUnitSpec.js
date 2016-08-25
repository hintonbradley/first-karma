describe('Testing AngularJS Test Suite', function() {

	it('should initialize the title in the scope', function() {
		module('bp');

		var scope = {};
		var ctrl;

		inject(function($controller) {
			ctrl = $controller('testingAngularCtrl', {$scope:scope});
		});

		expect(scope.title).toBeDefinied();
	})
})