angular.module('controllers')
    .controller('ResetPasswordController', [
        '$scope',
        '$http',
        '$stateParams',
        function ($scope, $http, $stateParams) {
            $scope.resetPasswordModel = {
                password: '',
                resetPassword: '',
                code: $stateParams.code
            };

            $scope.error = null;
            $scope.resetSuccessfully = false;
            $scope.posting = false;

            $scope.submit = function () {
                if ($scope.resetPasswordForm.$valid) {
                    $scope.posting = true;
                    $http.post('/api/user/resetPassword', $scope.resetPasswordModel)
                        .then(function (response) {
                            $scope.resetSuccessfully = true;
                            $scope.error = null;
                            $scope.posting = false;
                        }, function (response) {
                            switch (response.status) {
                                case 400:
                                    $scope.error = response.data.Message;
                                    break;
                                case 404:
                                    $scope.error = 'User not found';
                                    break;
                                case 409:
                                    $scope.error = 'Passwords do not match';
                                    break;
                                case 500:
                                    $scope.error = "There was an error when trying to reset password";
                                    break;
                                default:
                            }

                            $scope.posting = false;
                            $scope.resetSuccessfully = false;
                        });
                }
            }
        }]);
