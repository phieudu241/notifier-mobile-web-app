// ifUser directive
angular.module('directives').directive('ifUser', ['$rootScope', function ($rootScope) {
    return {
        link: function (scope, element) {
            $rootScope.$watch('authenticated', function (authenticated) {
                if (authenticated) {
                    //element.show();
                    element.css("display", "block");
                } else {
                    //element.hide();
                    element.css("display", "none");
                }
            });
        }
    };
}]);

// ifNotUser directive
angular.module('directives').directive('ifNotUser', ['$rootScope', function ($rootScope) {
    return {
        link: function (scope, element) {
            $rootScope.$watch('authenticated', function (authenticated) {
                if (authenticated) {
                    //element.hide();
                    element.css("display", "none");
                } else {
                    //element.show();
                    element.css("display", "block");
                }
            });
        }
    };
}]);

