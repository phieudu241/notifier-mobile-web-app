angular.module('controllers')
    .controller('SecretKeyController', [
        '$scope',
        '$state',
        '$http',
        function ($scope, $state, $http) {
            $scope.error = null;
            var req = {
                method: 'GET',
                url: '/api/user/get',
                headers: {
                    'Authorization': sessionStorage.getItem('token')
                }
            }

            $http(req).
        then(function (response) {
            $scope.secretKey = response.data.SecretKey;
        }, function (response) {
            switch (response.status) {
                case 500:
                    $scope.error = "There was an error when trying to get user.";
                    break;
                default:
            }
        });

            $scope.generateSecretKey = function () {
                var generateReq = {
                    method: 'POST',
                    url: '/api/user/generateSecretKey',
                    headers: {
                        'Authorization': sessionStorage.getItem('token')
                    }
                }

                $http(generateReq).
            then(function (response) {
                $scope.secretKey = response.data;
            }, function (response) {
                switch (response.status) {
                    case 500:
                        $scope.error = "There was an error when trying to generate secret key.";
                        break;
                    default:
                }
            });
            }
        } ]);