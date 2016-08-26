describe('Testing AngularJS Test Suite', function() {
	// Declaring our controller with local scope:
	var tACtrl;
	var scope = {};

	// Loading our Angular app for each unit test below:
	beforeEach(module('bp'));

	// Injecting our controller and it's dependencies ($scope and $state):
	beforeEach(inject(function($controller){
		tACtrl = $controller('testingAngularCtrl', {$scope: scope, $state:{}});
	}))

	// Finally writing our tests:
	it('should initialize the title in the scope', function() {
		expect(scope.title).toBeDefinied();
	})
})


// describe('controllers', function () {

//   var $scope
//     , $state
//     , $controller

//   beforeEach(module('bp'))

//   beforeEach(inject(function ($injector) {
//     $state = $injector.get('$state')
//     $controller = $injector.get('$controller')
//   }))

//   it('binds the users to the scope', function(){
//    var stateModels = [{}, {}, {}];
//    $controller('testingAngularCtrl', {$scope: $scope, stateModels: stateModels});
//    // assert.equal($scope.users, stateModels);
//    expect(scope.title).toBeDefinied();
// });

// })