app.controller('alumnoCtrl', ['$scope','$routeParams', function($scope,$routeParams){

	$scope.codigo = $routeParams.codigo;
	//Atajamos el parámetro de la URL, y lo almacenamos en $scope.codigo

}]);
