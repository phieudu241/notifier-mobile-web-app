angular.module('controllers')
    .controller('LoginController', [
        '$scope',
        '$rootScope',
        '$stateParams',
        '$state',
        '$http',
        function ($scope, $rootScope, $stateParams, $state, $http) {
            $scope.loginModel = {
                username: '',
                password: '',
                returnUrl: $stateParams.returnUrl
            };

            $scope.error = null;
            $scope.posting = false;

            $scope.login = function () {
                if ($scope.loginForm.$valid) {
                    $scope.posting = true;
                    $http.post('/api/user/login', $scope.loginModel)
                        .then(function (response) {
                            sessionStorage.setItem('token', response.data);
                            $rootScope.authenticated = response.data;
                            $scope.posting = false;

                            if ($scope.loginModel.returnUrl) {
                                $state.go($scope.loginModel.returnUrl);
                            } else {
                                $state.go('secretKey');
                            }
                        }, function (response) {
                            switch (response.status) {
                                case 404:
                                    $scope.error = "Username or password is invalid";
                                    break;
                                case 403:
                                    $scope.error = "Account is not active. Please check your email for verification link";
                                    break;
                                case 400:
                                    $scope.error = response.data.Message;
                                    break;
                                case 500:
                                    $scope.error = "There was an error when trying to login";
                                    break;
                                default:
                            }

                            $scope.posting = false;
                        });
                }
            }
        } ]);
