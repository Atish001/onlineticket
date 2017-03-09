angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/sign',{
			templateUrl:'views/sign.html'
		})
		.when('/login',{
			templateUrl:'views/login.html'
		})
		.when('/create',{
			templateUrl:'views/create.html'
		})

		.when('/booking', {
			templateUrl: 'views/booking.html',
			controller: 'BookController'
		})

		.when('/movies', {
			templateUrl: 'views/movies.html',
			controller: 'MoviesController'
		})

		.when('/admin', {
			templateUrl: 'views/admin.html',
			controller: 'AdminController'
		})

		.when('/city', {
			templateUrl: 'views/city.html',
			controller: 'CityController'
		})

		.when('/showtime', {
			templateUrl: 'views/showtime.html',
			controller: 'ShowTimeController'
		})

		.when('/assign', {
			templateUrl: 'views/assign.html',
			controller: 'AssignController'
		})

    .when('/theatre', {
			templateUrl: 'views/theatre.html',
			controller: 'TheatreController'
		});

	$locationProvider.html5Mode(true);

}]);
