angular.module('NotifierMobileApp')
    .config([
        '$stateProvider',
        '$httpProvider',
        '$locationProvider',
        function ($stateProvider, $httpProvider, $locationProvider) {

        $locationProvider.hashPrefix('!').html5Mode(true);

        $stateProvider
            .state('index', {
                url: '/',
                views: {
                    "mainView": {
                        templateUrl: 'Views/App/Introduction.html'
                    },
                    "title": { template: '<title>Keep Track Of System By Notifications For Developers | Notifier Mobile</title>' }
                }
            })
            .state('api', {
                url: '/api',
                views: {
                    "mainView": {
                        templateUrl: 'Views/App/API.html'
                    },
                    "title": { template: '<title>Notifications API - Create/Get/Update/Delele Notification | Notifier Mobile</title>' }
                }
            })
            .state('donate', {
                url: '/donate',
                views: {
                    "mainView": {
                        templateUrl: 'Views/App/Donate.html'
                    },
                    "title": { template: '<title>Donate | Notifier Mobile</title>' }
                }
            })
            .state('java', {
                url: '/java',
                views: {
                    "mainView": {
                        templateUrl: 'Views/App/Java.html',
                        controller: 'LibrariesController'

                    },
                    "title": { template: '<title>Java Library for Create/Get/Update/Delele Notification | Notifier Mobile</title>' }
                }
            })
            .state('dotnet', {
                url: '/dotnet',
                views: {
                    "mainView": {
                        templateUrl: 'Views/App/DOTNET.html',
                        controller: 'LibrariesController'
                    },
                    "title": { template: '<title>.NET Library for Create/Get/Update/Delele Notification | Notifier Mobile</title>' }
                }
            })
            .state('otherLanguages', {
                url: '/otherLanguages',
                views: {
                    "mainView": {
                        templateUrl: 'Views/App/OtherLanguages.html'
                    },
                    "title": { template: '<title>Python, JS, Ruby ... Library for Create/Get/Update/Delele Notification | Notifier Mobile</title>' }
                }
            })
            .state('notifierMobileApp', {
                url: '/notifierMobileApp',
                views: {
                    "mainView": {
                        templateUrl: 'Views/App/NotifierMobileApp.html'
                    },
                    "title": { template: '<title>Notifer Mobile Application Get Notifications | Notifier Mobile</title>' }
                }
            })
            .state('contact', {
                url: '/contact',
                views: {
                    "mainView": {
                        templateUrl: 'Views/App/Contact.html'
                    },
                    "title": { template: '<title>Contact | Notifier Mobile</title>' }
                }
            })
            .state('login', {
                data: { title: 'Login | Notifier Mobile' },
                url: '/login:returnUrl',
                views: {
                    "mainView": {
                        templateUrl: 'Views/Account/Login.html',
                        controller: 'LoginController'
                    },
                    "title": { template: '<title>Login | Notifier Mobile</title>' }
                }
            })
            .state('logout', {
                url: '/logout',
                views: {
                    "mainView": {
                        controller: 'LogoutController'
                    }
                }
            })
            .state('secretKey', {
                url: '/secretKey',
                views: {
                    "mainView": {
                        templateUrl: 'Views/Account/SecretKey.html',
                        controller: 'SecretKeyController'
                    },
                    "title": { template: '<title>Secret Key | Notifier Mobile</title>' }
                }
            })
            .state('verification', {
                url: '/verification?user&code',
                views: {
                    "mainView": {
                        templateUrl: 'Views/Account/Verification.html',
                        controller: 'VerificationController'
                    },
                    "title": { template: '<title>Verify & Active Your Account | Notifier Mobile</title>' }
                }
            })
            .state('register', {
                url: '/register',
                views: {
                    "mainView": {
                        templateUrl: 'Views/Account/Register.html',
                        controller: 'RegisterController'
                    },
                    "title": { template: '<title>Register New Account | Notifier Mobile</title>' }
                }
            })
            .state('forgotPassword', {
                url: '/forgotPassword',
                views: {
                    "mainView": {
                        templateUrl: 'Views/Account/ForgotPassword.html',
                        controller: 'ForgotPasswordController'
                    },
                    "title": { template: '<title>Forgot Password | Notifier Mobile</title>' }
                }
            })
            .state('resetPassword', {
                url: '/resetPassword?code',
                views: {
                    "mainView": {
                        templateUrl: function (params) { return '/Account/ResetPassword?code=' + params.code },
                        controller: 'ResetPasswordController'
                    },
                    "title": { template: '<title>Reset Password | Notifier Mobile</title>' }
                }
            });

        $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}]);

