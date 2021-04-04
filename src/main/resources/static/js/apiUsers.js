$("#boton-usuarios").on("click", validateUsers);

function validateUsers() {
    $.ajax({
        url: 'http://localhost:8080/user/users',
        success: function(respuesta) {
            console.log(respuesta);
        },
        error: function() {
            console.log("No se ha podido obtener la información");
        }
    });
}