var app = angular.module('plunker', ['ngRoute']);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider
		.when("/index.html", {
			templateUrl: "index.html",
			controller: "MainCtrl"
		})
		.when("/login.html", {
			templateUrl: "login.html",
			controller: "SecondCtrl"
		})
		// .otherwise({ redirectTo: '/'})
		;
}]);

app.controller('MainCtrl', function($scope, srvShareData, $location) {
  
  $scope.dataToShare = [];
  
  $scope.shareMyData = function (myValue) {

    $scope.dataToShare = myValue;
    srvShareData.addData($scope.dataToShare);
    
    window.location.href = "login.html";
  }
});

app.controller('SecondCtrl', function($scope, srvShareData) {
  
  $scope.sharedData = srvShareData.getData();

});

app.service('srvShareData', function($window) {
        var KEY = 'keyco';

        var addData = function(newObj) {
            var mydata = $window.sessionStorage.getItem(KEY);
            if (mydata) {
                mydata = JSON.parse(mydata);
            } else {
                mydata = [];
            }
            mydata.push(newObj);
            $window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
        };

        var getData = function(){
            var mydata = $window.sessionStorage.getItem(KEY);
            if (mydata) {
                mydata = JSON.parse(mydata);
            }
            return mydata || [];
        };

        return {
            addData: addData,
            getData: getData
        };
    });