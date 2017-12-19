var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
	$scope.menuSuperior = 'parciales/menu.html';


	$scope.setActive = function(Opcion){

		$scope.mInicio     = "";
		$scope.mProfesores = "";
		$scope.mAlumnos    = "";

		$scope[Opcion] = "active";

	}

}]);

//Filtro Personalizado de telefono
app.filter('telefono',function(){
	return function(numero){
		return numero.substring(0,4) + "-" +numero.substring(4);
		//Coja el numero de parametro, partalo en caractteres, coge del 0 al 4
		//Todo eso va quedando en el return, pone también un - y después el numero
		//en substring del 4 en adelante
	}
});