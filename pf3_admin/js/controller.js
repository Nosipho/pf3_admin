var workGroupControllers = angular.module("workGroupControllers", []);

workGroupControllers.controller("formController", ['$scope','$http', function($scope, $http)
    {
        $http.get('js/5010595.json').success (function(data){
            $scope.theWorkgroup = data;
        });

        workGroupControllers.controller('loginController', ['$scope', '$routeParams',
            function($scope, $routeParams) {
                $scope.os_group_id = $routeParams.os_group_id;
            }])
    }]
);