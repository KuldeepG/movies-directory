var moviesControllers = angular.module('moviesControllers', []);

moviesControllers.controller('MovieListController', function($scope, $http){
	$http.get("data/movies.json").success(function(data){
		$scope.movies = data;
	});
});

moviesControllers.controller('MovieDetailController', function($scope, $http, $routeParams){
	$http.get("data/movieDetails.json").success(function(data){
		$scope.movie = data[$routeParams.movieId];
	});	
});