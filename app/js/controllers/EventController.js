'use strict';

eventsApp.controller('EventController', 
	function EventController($scope, eventData){
		$scope.sortorder = 'name';
		$scope.event = eventData.getEvent();
		$scope.event.then(
			function(event) {
				console.log(event);
			}, function(status) {
				console.log(status);
			}
		);

		/*
		eventData.getEvent(function (event){
			$scope.event = event;
		});*/
		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		};
		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		};
	}
);