angular.module('app.services', [])
.factory('DataFacotory', function ($http) {
    return {
        getLocalJson: function () {
            return $http.get('/shared/services/getLocal.json');
        }
    };
});