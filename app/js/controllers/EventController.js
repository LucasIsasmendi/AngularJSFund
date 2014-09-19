'use strict';

eventsApp.controller('EventController', 
	function EventController($scope, eventData, $anchorScroll){
		$scope.sortorder = 'name';
		$scope.event = eventData.getEvent();
		$scope.event.then(
			function(event) {console.log(event);},
			function(response) {console.log(response);}
		);

		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		};

		$scope.scrollToSession = function() {
			console.log('scrollToSession() called');
			$anchorScroll();
		}
	}
);