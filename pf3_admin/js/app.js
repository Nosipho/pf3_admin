var Printflow3 = angular.module('Printflow3', [
    'ngRoute',
    'workGroupControllers'
]);
Printflow3.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'loginController'
            }).
            when('/form/:os_group_id', {
                templateUrl: 'partials/form.html',
                controller: 'formController'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }]);