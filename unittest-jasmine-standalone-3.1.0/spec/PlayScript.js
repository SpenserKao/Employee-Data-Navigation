describe('controller', function() {
	beforeEach(module('myEmpDataApp'));		//angular.mock.

	var $controller;
	var customer = {};
		  
	beforeEach(inject(function(_$controller_, _$http_, _$httpBackend_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
		$http = _$http_
		$httpBackend = _$httpBackend_;		
	}));
	  
	describe('title', function() {
		it("title should be 'Employee Data Navigation'", function () {
		  var $scope = {};
		  var controller = $controller('browseEmpData', { $scope: $scope });
		  $scope.setTitle('Employee Data Navigation');
		  expect($scope.title).toBe('Employee Data Navigation');
		}); 		
	});
	
});