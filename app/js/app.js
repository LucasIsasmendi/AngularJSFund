'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource'])
	.config(function($routeProvider) {
		$routeProvider.when('/newEvent',
			{
				templateUrl: 'templates/NewEvent.html',
				controller: 'EditEventController'
			});
		$routeProvider.when('/events',
			{
				templateUrl: 'templates/EventList.html',
				controller: 'EventListController'
			});
		$routeProvider.when('/event/:eventId',
			{
				templateUrl: 'templates/EventDetails.html',
				controller: 'EventController',
				resolve: {
					event: function($q, $route, evenData) {
						var deferred = $q.defer();
						evenData.getEvent($route.current.pathParams.eventId)
							.then(function(event) {deferred.resolve(event);});
						return deferred.promise;
					}
				}
			});
		$routeProvider.otherwise({redirectTo: '/events'});

	});

