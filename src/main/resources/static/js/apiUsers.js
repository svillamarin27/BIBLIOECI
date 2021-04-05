$("#boton-usuarios").on("click", validateUsers);

function validateUsers() {
    $.ajax({
        url: 'https://biblioeci.herokuapp.com/user/users',
        success: function(respuesta) {
            console.log(respuesta);
        },
        error: function() {
            console.log("No se ha podido obtener la información");
        }
    });
}