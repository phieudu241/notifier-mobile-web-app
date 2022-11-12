angular.module('services')
    .factory('AuthHttpResponseInterceptor', [
        '$q',
        '$location',
        '$injector',
        function ($q, $location, $injector) {
            return {
                response: function (response) {
                    if (response.status === 401) {
                        $injector.get('$state').go('login');
                    }
                    return response || $q.when(response);
                },
                responseError: function (rejection) {
                    if (rejection.status === 401) {
                        $injector.get('$state').go('login', { returnUrl: $injector.get('$state').current.name });
                    }
                    return $q.reject(rejection);
                }
            }
        }]);