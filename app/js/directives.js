'use strict';

eventsApp.directive('mySample', function($compile){
	return {
		restrict: 'E',
		template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>"
	};
});