 var printFlow = angular.module("printFlow3", []);

 printFlow.controller("PrintFlowCtrl", ['$scope','$http', function($scope, $http)
    {
        $http.get('js/5010595.json').success (function(data){
            $scope.workGroup = data;
        });

    }]
);