app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'parciales/home.html',
			controller: 'inicioCtrl'
		})
		.when('/profesores',{
			templateUrl: 'parciales/profesores.html',
			controller: 'profesoresCtrl'
		})
		.when('/alumnos',{
			templateUrl: 'parciales/alumnos.html',
			controller: 'alumnosCtrl'
		})
		.when('/alumno/:codigo',{
			//Cuando la ruta sea así /ruta/:parametro
			//Después de los dos puntos es uel nombre de un parámetro
			templateUrl: 'parciales/alumno.html',
			controller: 'alumnoCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});