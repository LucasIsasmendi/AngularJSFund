'use strict';

eventsApp.controller('EventController', 
	function EventController($scope){
		
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2015',
			time: '10:30 am',
			location: {
				address: 'Empoderar Headquarters',
				city: 'Buenos Aires',
				province: 'Buenos Aires'
			},
			imageUrl: '/app/img/logos_mod4.png',
			sessions: [
				{
					name: 'Directives Masterclass',
					creatorName: 'Lucas Isasmendi',
					duration: 1,
					level: 'Advanced',
					abstract: 'In this sesion you will learn the ins and outs of directives',
					upVoteCount: 7
				},{
					name: 'Scopes for fun and profit',
					creatorName: 'Jonhatan Boyne',
					duration: 2,
					level: 'Intermediate',
					abstract: 'In this sesion you will learn the ins and outs of scopes',
					upVoteCount: 5
				},{
					name: 'Well Behaved Controllers',
					creatorName: 'Nacho Fantasia',
					duration: 4,
					level: 'Introductory',
					abstract: 'In this sesion you will learn the basics from controllers',
					upVoteCount: 12
				}
			]
		};
		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		};
		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		};
	}
);