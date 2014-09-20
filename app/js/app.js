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
	});

