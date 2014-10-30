/**
 * Created by QutubUddin on 18/09/2014.
 */

var app = angular.module('indexApp', []);

app.controller('IndexController', function($scope, $http) {
    $http.get('/php/session.php').success(function(data) {
        console.log("session started");
    });
});