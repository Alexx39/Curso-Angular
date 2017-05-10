angular.module("filtros",[])
.controller("ct",function($scope){
	$scope.hoy = new Date();
})
.filter("sus",function(){

	return function(palabra){

		return palabra + ".....";
	}
})
.filter("pri",function(){
	return function(palabra){
		return palabra[0].toUpperCase() + palabra.slice(1);
	}
})