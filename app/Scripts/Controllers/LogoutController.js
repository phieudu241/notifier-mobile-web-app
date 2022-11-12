angular.module('controllers')
    .controller('LogoutController', [
        '$scope',
        '$rootScope',
        '$state',
        function ($scope, $rootScope, $state) {

            logout = function () {
                sessionStorage.removeItem('token');
                $rootScope.authenticated = undefined;
                $state.go('index');
            }

            logout();
        } ]);