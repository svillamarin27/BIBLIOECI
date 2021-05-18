/*
https://biblioeci.herokuapp.com/
http://localhost:8080/
*/

apiUsuarios = (function(){

    var userLoggedIn;

    function validateUsers() {
        localStorage.clear();
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'https://biblioeci.herokuapp.com/user/users', true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var ingresoCorrecto = false;
                let usuarios = JSON.parse(this.responseText);
                var usuario = document.getElementById('username').value;
                var contraseña = document.getElementById('contraseña').value;
                if (usuario === "" || contraseña === "") {
                    alert("Todos los campos son requeridos.");
                }
                for(let item of usuarios){
                    if(item.password == contraseña && item.username == usuario){

                        console.log('Usuario correcto')
                        ingresoCorrecto = true;
                        var userOrAdmi = item.admins;
                        var jsonUsuario = JSON.stringify(item);
                        var idUsuario = item.id;
                        var nameUser = item.username;
                        break;
                    }
                }
                if (ingresoCorrecto){
                    localStorage.setItem('nombreUsuario', nameUser)
                    localStorage.setItem('tipoUsuario', userOrAdmi);
                    localStorage.setItem('idUsuario', idUsuario);
                    alert("Bienvenido. Usted inicio sesion como: "+ usuario);
                    window.location.href = "traerLibros.html";
                }
                else{
                    alert("Usuario y/o contraseña incorrectos. ")
                }
            }
        }
    }

    return {
        validateUsers: validateUsers
    };
})();