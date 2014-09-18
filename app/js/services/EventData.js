eventsApp.factory('eventData', function ($http, $q) {
	return {
		getEvent: function () {
			var deferred = $q.defer();

			$http({method: 'GET', url: '/app/data/event/1.json'}).
				success(function (data, status, headers, config) {
					//$log.info(data, status, headers(), config);
					//successcb(data);
					deferred.resolve(data);
				}).
				error(function (data, status, headers, config) {
					//$log.warn(data, status, headers, config);
					deferred.reject(status);
				});
				
			return deferred.promise;
		}
	};
});