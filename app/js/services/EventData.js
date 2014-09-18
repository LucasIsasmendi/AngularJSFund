eventsApp.factory('eventData', function ($resource) {
	return {
		getEvent: function () {
			return $resource('/app/data/event/:id', {id:'@id'}).get({id:1});
		}
	};
});