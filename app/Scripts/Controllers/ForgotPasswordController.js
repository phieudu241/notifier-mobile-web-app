angular.module('controllers')
    .controller('ForgotPasswordController', [
        '$scope',
        '$http',
        function ($scope, $http) {
            $scope.forgotPasswordModel = {
                email: ''
            };

            $scope.error = null;
            $scope.sentSuccessfully = false;
            $scope.posting = false;

            $scope.submit = function () {
                if ($scope.forgotPasswordForm.$valid) {
                    $scope.posting = true;
                    $http.post('/api/user/forgotPassword?email=' + $scope.forgotPasswordModel.email)
                        .then(function (response) {
                            $scope.sentSuccessfully = true;
                            $scope.error = null;
                            $scope.posting = false;
                        }, function (response) {
                            switch (response.status) {
                                case 400:
                                    $scope.error = response.data.Message;
                                    break;
                                case 500:
                                    $scope.error = "There was an error when trying to sent request";
                                    break;
                                default:
                            }

                            $scope.posting = false;
                            $scope.sentSuccessfully = false;
                        });
                }
            }
        }]);
