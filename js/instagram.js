//var app = angular.module('instagramApp', []);
//
//app.directive('mainText', function() {
//    var getData = function() {
//        console.log("i m called");
//    };
//
//    var ctrl = ["$scope","$http",function($scope,$http) {
//        $scope.instagramImage = {
//            pics: [],
//            next_max_id: null
//        };
//
//        var scroll = false;
//
//        var mouseWheal = function(event){
//            if(scroll == false) {
//                if (event.originalEvent.wheelDelta < 0 || event.originalEvent.detail > 0) {
//                    console.log("scroll down");
//                    getImages($scope.instagramImage.next_max_id);
//                }
//            }
//        };
//
//        var scrolled = function() {
//            scroll = true;
//            if($(window).scrollTop()== $(document).height()-$(window).height()) {
//              if($scope.instagramImage.next_max_id !=null) {
//                  console.log("scrolled");
//                  $(window).unbind('scroll');
//                  getImages($scope.instagramImage.next_max_id);
//              }
//            }
//        };
//
//        $(window).scroll(scrolled);
//        $(window).bind('mousewheel DOMMouseScroll', mouseWheal);
//
//        var getImages = function(next_max_id) {
//            data = {
//                'next_max_id' : $scope.instagramImage.next_max_id,
//                'methods': 'getInstagramData'
//            };
//
//            $http.post('/php/Instagram.php', data).success(function (data) {
//                for (var i = 0; i < data.data.length; i++) {
//                    var url = data.data[i].images.thumbnail.url;
//                    if($scope.instagramImage.pics.indexOf(url) == -1) {
//                        $scope.instagramImage.pics.push(url);
//                    }
//                }
//                $scope.instagramImage.next_max_id = data.pagination.next_max_id;
//                $(window).bind("scroll",scrolled);
//                //console.log($scope.instagramImage.next_max_id);
//            });
//        };
//
//        getImages(null);
//    }];
//
//    return {
//        restrict: 'E',
//        controller: ctrl,
//        link: function() {
//            //getData();
//        }
//    };
//});
//app.directive('headerDir', function() {
//    var template = '<div class="container hundred"> ' +
//        '<div class="row"> ' +
//        '<ol class="breadcrumb">' +
//        '<li><a href="/index.html">Home</a></li>' +
//        '<li><a href="/view/register.html">Add employee</a></li>' +
//        '<li><a href="/view/list.html">List Employee</a></li>' +
//        '<li><a href="/view/instagram.html">Instagram gallery</a></li>'+
//        '</ol>' +
//        '</div>' +
//        '</div>';
//
//    return {
//        restrict: 'E',
//        template : template
//    };
//});