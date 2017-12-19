app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");

	$scope.alumnos = {};
	$scope.posicion = 5;

	$http.get('php/servicios/alumnos.listado.php').success(function(data){

		$scope.alumnos = data;

	});


	$scope.siguientes = function(){

		if($scope.alumnos.length > $scope.posicion){
			$scope.posicion += 5;
		};
		//Si hay mas registros para mostrar, aumente la posición en 5

	}

	$scope.ateriores = function(){

		if($scope.posicion > 5){
			$scope.posicion -= 5;
		};
		//Si hay mas registros para mostrar, aumente la posición en 5

	}


}]);