///**
// * Created by QutubUddin on 18/09/2014.
// */
//
//var listApp = angular.module('listApp', []);
//
//listApp.controller('ListController', ['$scope','$http', function($scope, $http) {
//    $http.get('/php/employeeList.php').success(function (data) {
//        $scope.personName = data;
//    });
//
//    $scope.RemoveItem = function(id) {
//        $http.post("/php/deleteData.php", {id:id}).success(function (data) {
//            //console.log(data);
//            document.location = '/view/list.html';
//        });
//    }
//
//    $scope.EditUser = function(id) {
//        $http.post("/php/processEdit.php", {id:id}).success(function (data) {
//            console.log(data);
//            document.location = '/view/edit.html';
//        });
//    }
//}]);