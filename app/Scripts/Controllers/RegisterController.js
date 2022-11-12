angular.module('controllers')
    .controller('RegisterController', [
        '$scope',
        '$stateParams',
        '$http',
        function ($scope, $stateParams, $http) {
            $scope.registerModel = {
                firstname: '',
                lastname: '',
                email: '',
                username: '',
                password: '',
                confirmPassword: ''
            };

            $scope.error = null;
            $scope.posting = false;
            $scope.created = false;

            $scope.register = function () {
                if ($scope.registerForm.$valid) {
                    $scope.posting = true;
                    $http.post('/api/user/add', $scope.registerModel)
                        .then(function (response) {
                            $scope.posting = false;
                            $scope.created = true;
                            $scope.error = null;
                            $scope.needVerification = response.data.NeedVerification;
                        }, function (response) {
                            switch (response.status) {
                                case 400:
                                    $scope.error = (response.data && response.data.Message) ? response.data.Message : 'Format data is invalid';
                                    break;
                                case 417:
                                    $scope.error = (response.data && response.data.Message) ? response.data.Message : "Can not send verification email";
                                    break;
                                case 500:
                                    $scope.error = "There was an error when trying to register";
                                    break;
                                default:
                            }

                            $scope.posting = false;
                            $scope.created = false;
                        });
                }
            }
        } ]);