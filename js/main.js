/**
 * Created by QutubUddin on 15/09/2014.
 */

var app = angular.module('qutubApp', []);

function Userlist ($scope) {
    $scope.personName =
    [
        { name: 'Qutub Uddin Ahmed', age: '30' },
        { name: 'Shohel Shamim', age: '31' },
        { name: 'Monon', age: '32' },
        { name: 'Shisir', age: '33' },
        { name: 'Abdullah', age: '35' },
        { name: 'Xyn', age: '36' }
    ];
};

function GetDataFromMysql($scope, $http) {
    //initialize the session to get the path
    $http.get('/php/session.php').success(function(data) {
        // get data from DB
        $http.get('/php/employeeList.php').success(function (data) {
            $scope.personName = data;
        });
    });
};

app.directive("deleteButton", function() {
    return {
        restrict : 'E',
        template : "<button class='btn btn-danger' ng-click='removeDb(item)'><i class='icon icon-remove icon-white'></i></button>"
    }
});

function removeItem(item) {
    $scope.personName.name($scope.personName.indexOf(item,1));
};

app.controller('MyController', GetDataFromMysql);
app.controller('MyController2', Userlist);

//app.controller('MyController', removeItem);