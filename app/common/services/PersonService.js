angular.module('myApp.resources', []).
    service('PersonService', function($q, $resource) {

        var configDefer = $q.defer();
        var configPromise = undefined;

        var loadConfig = function () {
            if (typeof configPromise === 'undefined') {
                var resultPromise = $resource('config/settings.json', {}, {
                    query: { method: 'GET', params: {}, isArray: false}}).query().$promise;
                resultPromise.then(function (response) {
                    configDefer.resolve(response);
                });
                configPromise = configDefer.promise;
            }
            return configPromise;
        };

        this.loadPersons = function () {
            var defer = $q.defer();
            var promise = defer.promise;
            loadConfig().then(function (settings) {
                var baseUrl = settings.REST_ENDPOINT;
                var tmp = $resource(baseUrl + '/Persons.json', {}, {
                    query: { method: 'GET', params: {}, isArray: true }
                }).query();
                tmp.$promise.then(function (response) {
                    defer.resolve(response);
                });
            });
            return promise;
        };
    });