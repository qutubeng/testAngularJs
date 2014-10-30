/**
 * Created by QutubUddin on 18/09/2014.
 */

var app = angular.module('editApp', []);

app.controller('EditController', ['$scope','$http', function($scope, $http){
    $http.get('/php/register.php').success(function(data) {
        $scope.company = data;
        //$scope.myForm.fname = "Qutub";


        $http.get('/php/processEdit.php').success(function(data) {

            //alert('hi');
            console.log(data);

            //$scope.myForm = data;
            //$scope.name= 'Qutub';
            //{name: 'Qutb', lastname: 'Ahmed', age:'31', company: '1'};
            /*
             lastname: $scope.myForm.lname,
             age: $scope.myForm.age,
             company: $scope.myForm.company
             */
        });
    });

    //$scope.myForm.name = 'Qutb';

    $scope.Save = function() {

        var dbData = {
            name: $scope.myForm.fname,
            lastname: $scope.myForm.lname,
            age: $scope.myForm.age,
            company: $scope.myForm.company
        };

        dbData = JSON.stringify(dbData);

        $http.post('/php/processRegistration.php', dbData).success(function(data) {
            console.log(dbData);
            console.log(data);
            if(data == 1) {
                document.location = '/view/list.html';
            }
        });
    }

    $scope.Update = function(){

    }

    $scope.ShowHide = function() {
        return true;
    }

}]);