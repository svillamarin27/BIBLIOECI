const Url = 'http://localhost:8080/user/';
cliente = (function() {




	function getUsuarioByNombre(name, callback) {//
	    console.log(name);
        $.getJSON(Url+"usersname/"+name, function (data) {
            callback(data);
        });
    }



	return {		
		getUsuarioByNombre:getUsuarioByNombre		
	}

})();