(function () {

    var app = angular.module('pf3Admin', ['ui.bootstrap', 'ngRoute',
        'pf3AdminControllers']);

    app.workgroup = theWorkgroup;
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/workgroup', {
                    templateUrl: 'partials/workgroup-editor.html',
                    controller: 'workgroupController'
                }).
                when('/hello', {
                    templateUrl: 'partials/hello.html',
                    controller: 'workgroupController'
                }).
                otherwise({
                    redirectTo: '/workgroup'
                });
        }]);
})();