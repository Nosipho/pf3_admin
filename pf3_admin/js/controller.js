 var pf3 = angular.module("pf3Admin", []);

 pf3.controller("pf3Controllers", ['$scope','$http', function($scope, $http) {
        $http.get('js/5010595.json').success (function(data){
            $scope.workGroup = data;
        });

    }]
);