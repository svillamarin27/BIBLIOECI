apiUsuario = (function() {




	function getUsuarioByNombre(name, callback) {//
	    console.log(name);
        $.getJSON("user/usersname/"+name, function (data) {
            callback(data);
        });
    }



	return {		
		getUsuarioByNombre:getUsuarioByNombre		
	}

})();