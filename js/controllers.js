var moviesControllers = angular.module('moviesControllers', []);

moviesControllers.controller('MovieListController', function($scope, $http){
	$http.get("data/movies.json").success(function(data){
		$scope.movies = data;
	});
});