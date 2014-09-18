eventsApp.factory('eventData', function ($resource, $q) {
	return {
		getEvent: function () {
			var deferred = $q.defer();
			$resource('/app/data/event/:id', {id:'@id'})
				.get({id:1}, function (event) {
					deferred.resolve(event);
				},
				function (response) {
					deferred.reject(response);
				});
			return deferred.promise;
		}
	};
});