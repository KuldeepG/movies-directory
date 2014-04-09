var moviesApp = angular.module('moviesApp',['ngRoute', 'moviesControllers']);

moviesApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/list', {
		templateUrl: './templates/movieList.html',
		controller: 'MovieListController'
	}).when('/details/:movieId',{
		templateUrl: './templates/movieDetails.html',
		controller: 'MovieDetailController'
	}).otherwise({
		redirectTo: '/list'
	});
}]);