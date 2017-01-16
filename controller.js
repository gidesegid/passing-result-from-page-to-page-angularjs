var myApp=angular.module('myApp',[]);

         //controller1 for login.html
		 myApp.controller('mycontroller1',function($scope,myservice,$window){
		             
		        $scope.submit=function(username){
		           $scope.result=myservice.methode1(username)
		            console.log($scope.result)
		           
		          }
		 })

		 //controller2 for the index.html
		 myApp.controller('mycontroller2',function($scope,myservice,$window){
		        username=this.username
		      $scope.username=myservice.methode1(username)
		       
		 })
		       
//service to store the username result and to be accessible the result by all pages like index.html page
		myApp.service('myservice',function($http){

		           this.username;

				          this.methode1=function(username){
				                // $http.get('/login/'+username+'/'+password).then(function(response){
				                //     this.result=response.data[0].username;
				                //     console.log("from service "+result)
				                //  })
				                this.username=username
				                
				                return username
				           }
		})         