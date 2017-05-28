var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
    $scope.blog = "John";
    $scope.lastname = "Doe";    
	$scope.feeds=[];
	$scope.min=10;
	$scope.commentsRes=[];	
	$scope.load=function(){
	$scope.feeds=[];		
	
	
		$http( {
				method: "GET",
				url: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			} ).then( function( result ) {

							$scope.response = result.data;
							
							
							for(i=0;i<$scope.response.length;i++)
							{
							
							$http( {
							method: "GET",
							url: " https://hacker-news.firebaseio.com/v0/item/"+$scope.response[i]+".json?print=pretty",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
									}
							} ).then( function( result ) {
							
								$scope.feeds.push(result.data);
								
								}, function( error ) {

								
							} );
	
							}
							
			}, function( error ) {

				
			} );
	
	}
	
	$scope.loadAsk=function(){
		
	$scope.feeds=[];		
	
	
		$http( {
				method: "GET",
				url: "https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			} ).then( function( result ) {

							$scope.response = result.data;
						
							
							for(i=0;i<$scope.response.length;i++)
							{
							
							$http( {
							method: "GET",
							url: " https://hacker-news.firebaseio.com/v0/item/"+$scope.response[i]+".json?print=pretty",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
									}
							} ).then( function( result ) {
							
								$scope.feeds.push(result.data);
								
								}, function( error ) {

								//		alert("fail");
							} );
	
							}
							
			}, function( error ) {

				//alert("fail");
			} );
	
	}
	
	$scope.loadJobs=function(){
		
	$scope.feeds=[];		
	
	
		$http( {
				method: "GET",
				url: "https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			} ).then( function( result ) {

							$scope.response = result.data;
						
							
							for(i=0;i<$scope.response.length;i++)
							{
							
							$http( {
							method: "GET",
							url: " https://hacker-news.firebaseio.com/v0/item/"+$scope.response[i]+".json?print=pretty",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
									}
							} ).then( function( result ) {
							
								$scope.feeds.push(result.data);
								
								}, function( error ) {

								//		alert("fail");
							} );
	
							}
							
			}, function( error ) {

				//alert("fail");
			} );
	
	}

$scope.loadShow=function(){
		
	$scope.feeds=[];		
	
	
		$http( {
				method: "GET",
				url: "https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			} ).then( function( result ) {

							$scope.response = result.data;
						
							
							for(i=0;i<$scope.response.length;i++)
							{
							
							$http( {
							method: "GET",
							url: " https://hacker-news.firebaseio.com/v0/item/"+$scope.response[i]+".json?print=pretty",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
									}
							} ).then( function( result ) {
							
								$scope.feeds.push(result.data);
								
								}, function( error ) {

								//		alert("fail");
							} );
	
							}
							
			}, function( error ) {

				//alert("fail");
			} );
	
	}

	$scope.loadNew=function(){
		
	$scope.feeds=[];		
	
	
		$http( {
				method: "GET",
				url: "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			} ).then( function( result ) {

							$scope.response = result.data;
						
							
							for(i=0;i<$scope.response.length;i++)
							{
							
							$http( {
							method: "GET",
							url: " https://hacker-news.firebaseio.com/v0/item/"+$scope.response[i]+".json?print=pretty",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
									}
							} ).then( function( result ) {
							
								$scope.feeds.push(result.data);
								
								}, function( error ) {

								//		alert("fail");
							} );
	
							}
							
			}, function( error ) {

				//alert("fail");
			} );
	
	}

	
	$scope.genarateCom= function(comments){
		
		$scope.commentsRes=[];
		
	for(i=0;i<comments.length;i++){
	$http( {
							method: "GET",
							url: " https://hacker-news.firebaseio.com/v0/item/"+comments[i]+".json?print=pretty",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
									}
							} ).then( function( result ) {
		
								$scope.commentsRes.push(result.data);
								
								}, function( error ) {

		
							} );
	
	
	}
	
	}
	
	$scope.scrollUp=function() {
		window.scrollTo(0,0);
	}
	$scope.goTourl=function(hello){
	window.open(hello);
	}
	
	$scope.increaseLimit=function(){
		$scope.min=$scope.min+10;
	}
	
});

