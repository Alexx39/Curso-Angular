angular.module('miModulo',[])
	.directive('miDirectiva', function() {
		return{
			restrict : 'E',
			replace : true,
			templateUrl: 'directivas/miDirectiva.html',
			scope : {
				libroAutor : "@",
				libroTitu : "@",
				ll : "@",
				nn : "@"

			}
		}
		
	})
	.controller('miControl', function($scope){
		$scope.libro = {autor : 'Grabiel Garcia',
						titulo : 'Cien Anios soledad',
						publicado : 1967};

						$scope.enMayucuslas = function(libro){
							return libro.titulo.toUpperCase();
						}
	})