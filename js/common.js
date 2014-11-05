var app = angular.module('indexApp', []);

app.controller('IndexController', function($scope, $http) {
    $http.get('/php/session.php').success(function(data) {
        console.log("session started");
    });
});
app.directive('mainText', function() {
    var getData = function() {
        console.log("i m called");
    };

    var ctrl = ["$scope","$http",function($scope,$http) {
        $scope.instagramImage = {
            pics: [],
            next_max_id: null
        };

        var scroll = false;

        var mouseWheal = function(event){
            if(scroll == false) {
                if (event.originalEvent.wheelDelta < 0 || event.originalEvent.detail > 0) {
                    console.log("scroll down");
                    getImages($scope.instagramImage.next_max_id);
                }
            }
        };

        var scrolled = function() {
            scroll = true;
            if($(window).scrollTop()== $(document).height()-$(window).height()) {
                if($scope.instagramImage.next_max_id !=null) {
                    console.log("scrolled");
                    $(window).unbind('scroll');
                    getImages($scope.instagramImage.next_max_id);
                }
            }
        };

        $(window).scroll(scrolled);
        $(window).bind('mousewheel DOMMouseScroll', mouseWheal);

        var getImages = function(next_max_id) {
            data = {
                'next_max_id' : $scope.instagramImage.next_max_id,
                'methods': 'getInstagramData'
            };

            $http.post('/php/Instagram.php', data).success(function (data) {
                for (var i = 0; i < data.data.length; i++) {
                    var url = data.data[i].images.thumbnail.url;
                    if($scope.instagramImage.pics.indexOf(url) == -1) {
                        $scope.instagramImage.pics.push(url);
                    }
                }
                $scope.instagramImage.next_max_id = data.pagination.next_max_id;
                $(window).bind("scroll",scrolled);
                //console.log($scope.instagramImage.next_max_id);
            });
        };

        getImages(null);
    }];

    return {
        restrict: 'E',
        controller: ctrl,
        link: function() {
            //getData();
        }
    };
});

app.directive('headerDir', function() {
    var template = '<div class="container hundred"> ' +
        '<div class="row"> ' +
        '<ol class="breadcrumb">' +
        '<li><a href="/index.html">Home</a></li>' +
        '<li><a href="/view/register.html">Add employee</a></li>' +
        '<li><a href="/view/list.html">List Employee</a></li>' +
        '<li><a href="/view/instagram.html">Instagram gallery</a></li>'+
        '<li><a href="/view/directoryImages.html">Directory gallery</a></li>'+
        '</ol>' +
        '</div>' +
        '</div>';

    return {
        restrict: 'E',
        template : template
    };
});
app.controller('ListController', ['$scope','$http', function($scope, $http) {
    $http.get('/php/employeeList.php').success(function (data) {
        $scope.personName = data;
    });
    $scope.RemoveItem = function(id) {
        $http.post("/php/deleteData.php", {id:id}).success(function (data) {
            document.location = '/view/list.html';
        });
    };
    $scope.EditUser = function(id) {
        $http.post("/php/processEdit.php", {id:id}).success(function (data) {
            document.location = '/view/edit.html';
        });
    }
}]);
app.controller('RegController', ['$scope','$http', function($scope, $http){
    $http.get('/php/companyList.php').success(function(data) {
        $scope.company = data;
    });

    $scope.Save = function() {
        var dbData = {
            name: $scope.editController.fname,
            lastname: $scope.editController.lname,
            age: $scope.editController.age,
            company: $scope.editController.company
        };

        dbData = JSON.stringify(dbData);

        $http.post('/php/processRegistration.php', dbData).success(function(data) {
            if(data == 1) {
                document.location = '/view/list.html';
            }
        });
    };

    $scope.ShowHide = function() {
        return true;
    };
}]);
app.controller('editController', ['$scope','$http', function($scope, $http){

    $scope.editController = {
        fname: '',
        lname: '',
        age: '',
        company: '',
        userId: ''
    };

    $http.get('/php/companyList.php').success(function(data) {
        $scope.editController.companies = data;
    });

    $http.get('/php/processEdit.php').success(function(data) {
        $scope.editController.fname = data[0].name;
        $scope.editController.lname = data[0].lastname;
        $scope.editController.age = parseInt(data[0].age);
        $scope.editController.company = data[0].company;
        $scope.editController.userId = data[0].id;
        console.log(data);
    });


    $scope.Update = function(){
        var dbData = {
            name: $scope.editController.fname,
            lastname: $scope.editController.lname,
            age: $scope.editController.age,
            company: $scope.editController.company,
            id: $scope.editController.userId
        };
        console.log("user id", $scope.editController.userId);
        dbData = JSON.stringify(dbData);

        $http.post('/php/submitEdit.php', dbData).success(function(data) {
            console.log(dbData);
            console.log(data);
            if(data == 1) {
                document.location = '/view/list.html';
            }
        });
    };

    $scope.ShowHide = function() {
        return true;
    };
}]);

app.directive('footerDir', function() {
    var template = '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script> ' +
        '<script src="/js/common.js"></script> ' +
        '</body>' +
        '</html>';

    return {
        restrict: 'E',
        template : template
    };
});

app.directive('dirImages', function() {
    var ctrl = ["$scope","$http",function($scope,$http) {
        $scope.imageGallery = {
            pics: []
        };

        var getImages = function() {

            $http.get('/php/readImageFileFrmDir.php').success(function (data) {

                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var url = data[i].image;
                    if($scope.imageGallery.pics.indexOf(url) == -1) {
                        $scope.imageGallery.pics.push(url);
                    }
                }

                console.log($scope.imageGallery.pics);
            });
        };

        getImages();
    }];

    return {
        restrict: 'E',
        controller: ctrl,
        link: function() {
            //getData();
        }
    };
});