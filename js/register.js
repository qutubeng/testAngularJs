///**
// * Created by QutubUddin on 16/09/2014.
// */
//
//var app = angular.module('registerApp', []);
///*
//var ListCompany = ['$scope','$http', function($scope, $http){
//    $http.get('/php/companyList.php').success(function(data) {
//        $scope.company = data;
//    });
//
//    $scope.Save = function(){
//        alert($scope.myForm.age);
//    }
//
//    $scope.Update = function(){
//
//    }
//}];
//
//app.controller('RegController', ListCompany);
//app.controller('RegController', Save);
//
//*/
//
//app.controller('RegController', ['$scope','$http', function($scope, $http){
//    $http.get('/php/companyList.php').success(function(data) {
//        $scope.company = data;
//    });
//
//    $scope.Save = function() {
//
//        var dbData = {
//            name: $scope.myForm.fname,
//            lastname: $scope.myForm.lname,
//            age: $scope.myForm.age,
//            company: $scope.myForm.company
//        };
//
//        dbData = JSON.stringify(dbData);
//
//        $http.post('/php/processRegistration.php', dbData).success(function(data) {
//            console.log(dbData);
//            console.log(data);
//            if(data == 1) {
//                document.location = '/view/list.html';
//            }
//        });
//    }
//
//    $scope.Update = function(){
//
//    }
//
//    $scope.ShowHide = function() {
//        return true;
//    }
//
//}]);