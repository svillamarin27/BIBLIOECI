app = (function() {

	var fav=null;
	var idServicio = 0;
	var nombreUsuario;
	var idLogg = 0;
	var map;
	//var id;
	var person = { name: '', id: '' };
	//const { Seq } = require('immutable');
	//const myObject = { a: 1, b: 2, c: 3 };
	var idLogg=0;

	function inicio() {
		nombreUsuario = $("#login").val();
		console.info(nombreUsuario);

		$.getScript("js/User.js", function() { apiUsuario.getUsuarioByNombre(nombreUsuario, validarCuenta); });
	}
	var validarCuenta = function(username) {
		console.log(username.name);
	}

    return {
        validarCuenta: validarCuenta,
		inicio: inicio

    }


})();