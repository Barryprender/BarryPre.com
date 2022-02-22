(function () {
	var app = angular.module('portfolioApp', ['ngSanitize']);
	app.controller('portfolioController', function ($scope, $http) {
		var dataUrl = 'data/data.json' + '?callback=JSON_CALLBACK';

		$http.get(dataUrl).then(function (response) {
			$scope.data = response.data;
			$scope.pdata = $scope.data[0];
		});
	});

	app.controller('empController', function ($scope, $http) {
		var employerDataUrl = 'data/data.json' + '?callback=JSON_CALLBACK';

		$http.get(employerDataUrl).then(function (response) {
			$scope.data = response.data;
			$scope.empData = $scope.data[1];
		});
		$scope.myHTML =
			"I am an <code>HTML</code>string with " +
			'<a href="#">links!</a> and other <em>stuff</em>';

	});
})();


















