angular.module('controllers')
    .controller('VerificationController', [
        '$scope',
        '$state',
        '$stateParams',
        '$http',
        function ($scope, $state, $stateParams, $http) {
            $scope.error = false;
            $scope.success = false;
            var req = {
                method: 'POST',
                url: '/api/user/verification',
                data: { username: $stateParams.user, code: $stateParams.code }
            }

            $http(req)
                .then(function (response) {
                    $scope.success = true;
                }, function (response) {
                    switch (response.status) {
                        case 400:
                            $scope.error = "Sorry, your active link is invalid.";
                            break;
                        case 500:
                            $scope.error = "There was an error when trying to active your account.";
                            break;
                        default:
                    }
                });

        }]);