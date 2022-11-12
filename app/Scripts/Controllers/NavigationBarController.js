﻿angular.module('controllers')
    .controller('NavigationBarController', [
        '$scope',
        '$location',
        function ($scope, $location) {
            $scope.isCollapsed = true;

            $scope.isActive = function (route) {
                return route === $location.path();
            };
        } ]);